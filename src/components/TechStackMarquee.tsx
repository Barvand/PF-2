"use client";

type Icon = { src: string; alt: string };

type Props = {
  icons: Icon[];
  speedSec?: number;
  direction?: "left" | "right";
  label?: string;
};

export default function TechStackMarquee({
  icons,
  speedSec = 35,
  direction = "left",
  label = "Trusted by leading brands",
}: Props) {
  const track = [...icons, ...icons];

  return (
    <div className="relative bg-brand-bg px-6 py-16 font-nunito md:px-12 lg:px-16">
      {/* ── Section label ──────────────────────────────────────── */}
      <p className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-brand-muted/50">
        {label}
      </p>

      {/* ── Marquee strip ──────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Divider lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-brand-border" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />

        <ul
          className="flex items-center whitespace-nowrap will-change-transform hover:[animation-play-state:paused]"
          style={{
            animation: `marquee-scroll ${speedSec}s linear infinite ${direction === "right" ? "reverse" : "normal"}`,
            width: "max-content",
          }}
        >
          {track.map((icon, i) => (
            <li
              key={`${icon.alt}-${i}`}
              className="flex-none flex items-center justify-center px-12 py-8"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                loading="lazy"
                decoding="async"
                className="
                  h-8 w-auto object-contain
                  brightness-0 invert
                  opacity-25
                  transition-all duration-300
                  hover:opacity-80 hover:scale-105
                "
              />
            </li>
          ))}
        </ul>
      </div>

      {/* ── Keyframes ──────────────────────────────────────────── */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
