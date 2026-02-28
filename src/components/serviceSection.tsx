import { useState } from "react";
import CloudIcon from "./svg/CloudIcon";
import ServerIcon from "./svg/ServerIcon";
import CodeIcon from "./svg/CodeIcon";
import GlobeIcon from "./svg/GlobeIcon";
import MonitorIcon from "./svg/MonitorIcon";
import ShieldIcon from "./svg/ShieldIcon";

const services = [
  {
    icon: <CodeIcon />,
    tag: "DEVELOPMENT",
    title: "Custom Websites",
    description:
      "Hand-crafted websites built to perform. From landing pages to full web apps — pixel-perfect and built for speed.",
    features: ["Responsive Design", "SEO Optimized", "Performance First"],
  },
  {
    icon: <ServerIcon />,
    tag: "FULL STACK",
    title: "Full Stack Apps",
    description:
      "Need more than a website? I build full stack applications with backends, APIs, and databases — everything connected and working together.",
    features: ["REST APIs", "Database Design", "Auth & User Management"],
  },
  {
    icon: <CloudIcon />,
    tag: "INFRASTRUCTURE",
    title: "Hosting & Deployment",
    description:
      "I handle sourcing, configuring, and deploying to the right hosting provider for your project. You own it, I set it up and make it run.",
    features: ["Provider Setup", "CI/CD Pipelines", "Domain & DNS"],
  },
  {
    icon: <GlobeIcon />,
    tag: "CMS",
    title: "WordPress",
    description:
      "Professional WordPress setups, custom themes, plugins, and ongoing maintenance. Easy for you to manage, hard to break.",
    features: ["Custom Themes", "Plugin Setup", "Training Included"],
  },
  {
    icon: <MonitorIcon />,
    tag: "DESIGN",
    title: "UI / UX Design",
    description:
      "User interfaces that convert. Clean, intentional design that guides visitors toward their goals without friction.",
    features: ["Figma Prototypes", "Brand Consistency", "Conversion Focused"],
  },
  {
    icon: <ShieldIcon />,
    tag: "SUPPORT",
    title: "Maintenance & Security",
    description:
      "Keep your digital presence secure and up to date. Monthly retainers available for peace of mind all year round.",
    features: ["Security Audits", "Monthly Updates", "Priority Support"],
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-brand-bg px-6 py-24 font-nunito md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto relative">
        {/* Ambient glow — top-left orange */}
        <div className="pointer-events-none absolute -left-20 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.07)_0%,transparent_70%)]" />

        {/* Ambient glow — bottom-right blue */}
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,180,255,0.04)_0%,transparent_70%)]" />

        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="relative mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
            What I offer
          </p>

          <h2 className="mb-5 text-5xl font-bold font-nunito leading-[0.95] tracking-wide text-white">
            Services that
            <br />
            <span className="text-brand-accent">get results.</span>
          </h2>

          <p className="max-w-[480px] text-base leading-relaxed text-brand-muted">
            From infrastructure to design, everything you need to build, launch,
            and grow your digital presence.
          </p>
        </div>

        {/* ── Cards Grid ────────────────────────────────────────────── */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const active = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`
                relative cursor-pointer overflow-hidden rounded-2xl border p-8
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${
                  active
                    ? "border-brand-accent/40 bg-brand-card-hover -translate-y-1.5 shadow-[0_20px_60px_rgba(255,107,0,0.13),0_0_0_1px_rgba(255,107,0,0.18)]"
                    : "border-brand-border bg-brand-card translate-y-0 shadow-none"
                }
              `}
              >
                {/* Orange gradient wash on hover */}
                <div
                  className={`
                  pointer-events-none absolute inset-0 rounded-2xl
                  bg-[linear-gradient(135deg,rgba(255,107,0,0.08)_0%,transparent_60%)]
                  transition-opacity duration-300
                  ${active ? "opacity-100" : "opacity-0"}
                `}
                />

                {/* Tag */}
                <span className="relative mb-5 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                  {s.tag}
                </span>

                {/* Icon */}
                <div
                  className={`
                  relative mb-5 text-brand-accent transition-transform duration-300
                  ${active ? "scale-110" : "scale-100"}
                `}
                >
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="relative mb-3 font-bebas text-[28px] tracking-wider text-white">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative mb-6 text-sm leading-relaxed text-brand-muted">
                  {s.description}
                </p>

                {/* Feature list */}
                <div className="relative flex flex-col gap-2 border-t border-white/[0.06] pt-5">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <span
                        className={`
                        h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent
                        transition-transform duration-200
                        ${active ? "scale-[1.4]" : "scale-100"}
                      `}
                      />
                      <span
                        className={`
                        text-[13px] font-semibold transition-colors duration-300
                        ${active ? "text-brand-sub-hover" : "text-brand-sub"}
                      `}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
