"use client";

type Icon = { src: string; alt: string };

type Props = {
  icons: Icon[];
  /** full loop duration in seconds (optional) */
  speedSec?: number;
  /** scroll direction */
  direction?: "left" | "right";
  /** glow color */
  glow?: string;
  /** diamond size px (optional; if omitted we use responsive clamp) */
  size?: number;
  /** gap px (optional; if omitted we use responsive clamp) */
  gap?: number;
};

export default function TechStackMarquee({
  icons,
  speedSec = 30,
  direction = "left",
  glow = "#6ea6b2",
  size, // if undefined, we use clamp()
  gap, // if undefined, we use clamp()
}: Props) {
  // Duplicate for a perfect loop
  const track = [...icons, ...icons];

  // If user passes fixed numbers, convert to px; otherwise we use clamp() in CSS.
  const cssVars: React.CSSProperties = {
    ["--dur" as any]: `${speedSec}s`,
    ["--dir" as any]: direction === "left" ? "normal" : "reverse",
    ["--size" as any]: size ? `${size}px` : undefined,
    ["--gap" as any]: gap ? `${gap}px` : undefined,
    ["--glow" as any]: glow,
  };

  return (
    <div
      className="relative overflow-hidden py-10"
      style={{
        ...cssVars,
        // Fade edges for nicer look
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul
        className="
          marquee-track
          flex items-center
          w-[200%]       /* track is 2x width because we duplicated */
          whitespace-nowrap
          will-change-transform
          hover:[animation-play-state:paused]
        "
      >
        {track.map((icon, i) => (
          <li
            key={`${icon.alt}-${i}`}
            className="flex-none"
            style={{
              // Use responsive clamps if not provided
              width: `var(--size, clamp(56px, 10vw, 96px))`,
              height: `var(--size, clamp(56px, 10vw, 96px))`,
              marginLeft: `var(--gap, clamp(12px, 3vw, 32px))`,
              marginRight: `var(--gap, clamp(12px, 3vw, 32px))`,
            }}
          >
            <div
              className="
                relative rotate-45 rounded-2xl
                flex items-center justify-center
                w-full h-full overflow-hidden
                bg-[#2b50a0]
                shadow-lg
              "
              style={{
                boxShadow: `0 0 0 1px var(--glow, ${glow}) inset, 0 0 18px 4px rgba(110,166,178,.35)`,
              }}
              title={icon.alt}
            >
              {/* icon box ~55% of diamond height */}
              <div
                className="-rotate-45"
                style={{
                  width: "calc(var(--size, clamp(56px, 10vw, 96px)) * 1)",
                  height: "calc(var(--size, clamp(56px, 10vw, 96px)) * 0.55)",
                }}
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
        ))}
      </ul>
    </div>
  );
}
