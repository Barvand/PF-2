"use client";

type Icon = { src: string; alt: string };

type Props = {
  icons: Icon[];
  speedSec?: number; // full loop duration (default 30s)
  direction?: "left" | "right"; // scroll direction
  glow?: string; // CSS color for glow (default #FF6700)
  size?: number; // diamond size in px (default 80)
  gap?: number; // gap between diamonds in px (default 24)
};

export default function TechStackMarquee({
  icons,
  speedSec = 30,
  direction = "left",
  glow = "#6ea6b2",
  size = 80,
  gap = 24,
}: Props) {
  // Duplicate the list for perfect seamless loop
  const track = [...icons, ...icons];

  return (
    <div
      className="relative overflow-hidden py-10"
      style={{
        // Soft fade on edges
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul
        className="marquee-track flex items-center"
        // width is auto; translateX(-50%) moves exactly one copy width
        style={
          {
            // control via CSS vars
            ["--dur" as any]: `${speedSec}s`,
            ["--dir" as any]: direction === "left" ? "normal" : "reverse",
            ["--gap" as any]: `${gap}px`,
          } as React.CSSProperties
        }
      >
        {track.map((icon, i) => {
          const item = (
            <li
              key={i}
              className="mx-[var(--gap)]"
              style={{ width: size, height: size }}
            >
              <div
                className="relative rotate-45 rounded-2xl flex items-center justify-center w-full h-full bg-[#2b50a0] overflow-hidden"
                style={{
                  boxShadow: `0 0 0 1px ${glow} inset, 0 0 18px 4px rgba(110,166,178,.35)`, // softer glow
                }}
              >
                {/* give the icon a fixed box (≈55% of diamond) */}
                <div
                  className="-rotate-45"
                  style={{ width: size * 1, height: size * 0.55 }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    onError={() => console.warn("Missing icon:", icon.src)}
                  />
                </div>
              </div>
            </li>
          );
          return item;
        })}
      </ul>
    </div>
  );
}
