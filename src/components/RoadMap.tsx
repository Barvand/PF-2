import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { milestones } from "../data/milestones";
import { GiMilitaryAmbulance } from "react-icons/gi";
import { MdFitnessCenter, MdHotel } from "react-icons/md";
import { TbPlane } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";

// What each chapter ACTUALLY taught you — reframe jobs as traits
const traits = [
  {
    icon: GiMilitaryAmbulance,
    label: "Military",
    value: "I show up. No excuses, no delays. Deadlines are real.",
  },
  {
    icon: MdFitnessCenter,
    label: "Fitness Coach",
    value:
      "I explain complex things simply. And I know what it takes to change.",
  },
  {
    icon: TbPlane,
    label: "Lived abroad",
    value: "I've worked across cultures. I adapt fast and communicate clearly.",
  },
  {
    icon: MdHotel,
    label: "Hospitality",
    value:
      "I obsess over the details clients never notice — until they're missing.",
  },
  {
    icon: HiOutlineCode,
    label: "Now: Dev",
    value: "All of it feeds into how I build. People-first, always.",
  },
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleToggle = () => {
    setExpanded((prev) => {
      if (prev && sectionRef.current) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
      return !prev;
    });
  };

  const visible = milestones.slice(0, expanded ? milestones.length : 4);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f2ede8] px-6 py-24 font-nunito md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Watermark — clipped at bottom edge */}
      <div className="pointer-events-none absolute bottom-0 right-0 select-none overflow-hidden h-[140px] w-full flex items-end justify-end">
        <span className="font-bebas text-[13vw] leading-none text-[#e5ddd5] tracking-tighter whitespace-nowrap translate-y-3">
          ABOUT
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* ── TOP: Portrait + Intro side by side ──────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20 items-start">
          {/* Portrait */}
          <div className="relative lg:w-[300px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
              <img
                src="/bartpng.png"
                alt="Portrait"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1208]/40 to-transparent" />
              {/* Name tag on photo */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-bebas text-[22px] tracking-wider leading-none drop-shadow-lg">
                  Bergen, Norway
                </p>
                <p className="text-white/70 text-[12px] font-semibold tracking-wide mt-0.5 drop-shadow">
                  2023 – Present
                </p>
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="absolute -top-3 -right-3 bg-[#ff6b00] text-white rounded-xl px-3 py-2 shadow-lg">
              <p className="font-bebas text-[13px] tracking-widest leading-none">
                Available
              </p>
              <p className="font-bebas text-[11px] tracking-widest leading-none opacity-80">
                for projects
              </p>
            </div>
          </div>

          {/* Intro text */}
          <div className="flex-1 flex flex-col justify-center pt-2">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
              The person behind the work
            </p>

            <h2 className="mb-7 text-5xl font-bold font-nunito leading-[1.05] tracking-wide text-[#1a1208]">
              Not your average
              <br />
              <span className="text-[#ff6b00]">web developer.</span>
            </h2>

            <p className="text-[17px] leading-[1.9] text-[#2a1f18] font-medium mb-5">
              Before I wrote a single line of code, I served in the Dutch
              military, coached hundreds of people in the gym, worked customer
              service in Barcelona, and ran hotel operations in Bergen.
            </p>

            <p className="text-[15px] leading-[1.9] text-[#7a6f65] mb-8">
              That's not a career detour. That's 15 years of learning how people
              work, what they need, and how to deliver under pressure. I bring
              all of that into every project I build.
            </p>

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2.5">
              {traits.map((t) => (
                <div key={t.label} className="group relative">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#ddd5c8] bg-white text-[13px] font-semibold text-[#5a5048] cursor-default transition-all duration-200 hover:border-[#ff6b00]/40 hover:text-[#1a1208] hover:shadow-sm">
                    <t.icon className="w-3.5 h-3.5 text-[#ff6b00] shrink-0" />
                    <span>{t.label}</span>
                  </div>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-56 bg-[#1a1208] text-white text-[12px] leading-relaxed rounded-xl px-3.5 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 shadow-xl">
                    {t.value}
                    <div className="absolute top-full left-4 border-4 border-transparent border-t-[#1a1208]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-[#ddd5c8]" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-0.5 text-center">
              Work History
            </p>
            <h3 className="font-bebas text-[28px] tracking-wider text-[#1a1208] leading-none text-center">
              How I got here
            </h3>
          </div>
          <div className="flex-1 h-px bg-[#ddd5c8]" />
        </div>

        {/* ── Photo grid timeline ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <AnimatePresence initial={false}>
            {visible.map((milestone, index) => {
              const isLast = milestone.title === "Front-End Development";
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="group relative h-[260px] rounded-2xl overflow-hidden cursor-default shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-107"
                  />

                  {/* Always-on bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {/* Current badge */}
                  {isLast && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-[#ff6b00] rounded-full px-2.5 py-1">
                        Current
                      </span>
                    </div>
                  )}

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4
                      className={`font-bebas text-[18px] tracking-wider leading-none mb-0.5 ${isLast ? "text-[#ff6b00]" : "text-white"}`}
                    >
                      {milestone.title}
                    </h4>
                    <p className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.12em]">
                      {milestone.year}
                    </p>
                    <p className="text-white/40 text-[10px] mt-0.5">
                      {milestone.location}
                    </p>
                  </div>

                  {/* Hover: show description */}
                  <div className="absolute inset-0 bg-[#1a1208]/80 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-[13px] leading-relaxed text-center font-medium">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── Expand button ───────────────────────────────────────── */}
        {milestones.length > 4 && (
          <div className="mt-6 flex justify-center">
            <motion.button
              onClick={handleToggle}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#c8bdb4] bg-transparent text-sm font-bold tracking-wide text-[#5a5048] transition-all duration-200 hover:border-[#ff6b00]/50 hover:text-[#1a1208]"
            >
              <span>
                {expanded
                  ? "Show less"
                  : `See full journey (${milestones.length} chapters)`}
              </span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
