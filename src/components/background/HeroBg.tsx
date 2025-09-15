"use client";
import { useEffect, useRef } from "react";

export default function HeroStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // DPR-aware sizing
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function resize() {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Star model
    type Star = {
      x: number;
      y: number;
      r: number; // radius
      baseA: number; // base alpha
      tw: number; // twinkle speed
      phase: number; // twinkle phase
      dx: number; // slow drift x
      dy: number; // slow drift y
    };

    const STAR_DENSITY = 0.000152; // stars per px² (tweak to taste)
    let stars: Star[] = [];

    function seed() {
      const area = canvas.clientWidth * canvas.clientHeight;
      const count = Math.max(80, Math.floor(area * STAR_DENSITY));
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        r: Math.random() * 1.1 + 0.3, // 0.3–1.4 px
        baseA: Math.random() * 0.6 + 0.2, // 0.2–0.8
        tw: Math.random() * 1.2 + 0.3, // twinkle speed
        phase: Math.random() * Math.PI * 2,
        dx: (Math.random() - 0.5) * 0.03, // subtle drift
        dy: (Math.random() - 0.5) * 0.03,
      }));
    }

    // Shooting stars
    type Meteor = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    };
    const meteors: Meteor[] = [];
    function maybeSpawnMeteor() {
      if (Math.random() < 0.0008) {
        const fromTop = Math.random() < 0.5;
        const x =
          Math.random() * canvas.clientWidth * 0.7 + canvas.clientWidth * 0.2;
        const y = fromTop ? -20 : Math.random() * canvas.clientHeight * 0.3;
        const speed = 5 + Math.random() * 3;
        meteors.push({
          x,
          y,
          vx: -speed,
          vy: speed * 0.35,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        });
      }
    }

    function draw() {
      // Clear (no trails)
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // Stars
      for (const s of stars) {
        s.phase += 0.02 * s.tw;
        s.x += s.dx;
        s.y += s.dy;

        // wrap-around
        if (s.x < -5) s.x = canvas.clientWidth + 5;
        if (s.x > canvas.clientWidth + 5) s.x = -5;
        if (s.y < -5) s.y = canvas.clientHeight + 5;
        if (s.y > canvas.clientHeight + 5) s.y = -5;

        const alpha = s.baseA * (0.6 + 0.4 * Math.sin(s.phase));
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Meteors
      maybeSpawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;

        // trail
        const trail = 20;
        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - m.vx * trail,
          m.y - m.vy * trail
        );
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(1, "rgba(255,255,255,0.0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * trail, m.y - m.vy * trail);
        ctx.stroke();

        if (m.life > m.maxLife || m.x < -50 || m.y > canvas.clientHeight + 50) {
          meteors.splice(i, 1);
        }
      }
    }

    let raf = 0;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    // init
    resize();
    seed();
    loop();

    // handle resize
    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
        seed();
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // The canvas fills its parent; pointer-events none so it doesn’t block clicks
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
