import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { milestones } from "../data/milestones";
import { GiMilitaryAmbulance } from "react-icons/gi";
import { MdFitnessCenter, MdHotel } from "react-icons/md";
import { TbPlane } from "react-icons/tb";
import { HiOutlineCode } from "react-icons/hi";

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
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white px-6 py-24 font-nunito md:px-12 lg:px-16 overflow-hidden"
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

      <div className="max-w-6xl mx-auto relative">
        {/* ── Portrait + Intro ────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20 items-start">
          {/* Portrait */}
          <div className="relative lg:w-[300px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
              <img
                src="/bartpng.png"
                alt="Portrait"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1208]/40 to-transparent" />
            </div>
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
              I hold an Associate degree in Front-End Development from Noroff,
              but my background goes a lot further than that.
            </p>
            <p className="text-[15px] leading-[1.9] text-[#7a6f65] mb-8">
              Before I wrote a single line of code, I served in the Dutch
              military, coached hundreds of people in the gym, worked customer
              service in Barcelona, and ran hotel operations in Bergen. That's
              15 years of learning how people work, what they need, and how to
              deliver under pressure — and I bring all of it into every project
              I build.
            </p>

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2.5">
              {traits.map((t) => (
                <div key={t.label} className="group relative">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#ddd5c8] bg-white text-[13px] font-semibold text-[#5a5048] cursor-default transition-all duration-200 hover:border-[#ff6b00]/40 hover:text-[#1a1208] hover:shadow-sm">
                    <t.icon className="w-3.5 h-3.5 text-[#ff6b00] shrink-0" />
                    <span>{t.label}</span>
                  </div>
                  <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-56 bg-[#1a1208] text-white text-[12px] leading-relaxed rounded-xl px-3.5 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 shadow-xl">
                    {t.value}
                    <div className="absolute top-full left-4 border-4 border-transparent border-t-[#1a1208]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Timeline header ─────────────────────────────────────── */}
        <div className="mb-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-[#ddd5c8]" />
          <div>
            <h3 className="font-bebas text-[28px] tracking-wider text-[#1a1208] leading-none text-center">
              Work History
            </h3>
          </div>
          <div className="flex-1 h-px bg-[#ddd5c8]" />
        </div>

        {/* ── Clean text timeline ──────────────────────────────────── */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#ff6b00]/50 via-[#ddd5c8] to-transparent" />

          <div className="flex flex-col">
            <AnimatePresence initial={false}>
              {milestones.map((milestone, index) => {
                const isLast = milestone.title === "Front-End Development";
                return (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="relative pl-8 pb-8 group last:pb-0"
                  >
                    {/* Dot */}
                    <div
                      className={`
                        absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2
                        transition-all duration-200
                        ${
                          isLast
                            ? "border-[#ff6b00] bg-[#ff6b00] shadow-[0_0_8px_rgba(255,107,0,0.4)]"
                            : "border-[#c8bdb4] bg-white group-hover:border-[#ff6b00]"
                        }
                      `}
                    />

                    {/* Row */}
                    <div className="flex items-baseline justify-between gap-6 flex-wrap">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        {isLast && (
                          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white bg-[#ff6b00] rounded-full px-2 py-0.5">
                            Current
                          </span>
                        )}
                        <h4
                          className={`font-bebas text-[22px] tracking-wider leading-none ${
                            isLast ? "text-[#ff6b00]" : "text-[#1a1208]"
                          }`}
                        >
                          {milestone.title}
                        </h4>
                        <span className="text-[12px] font-medium text-[#a89e95]">
                          {milestone.location}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#b0a89f]">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#7a6f65]">
                      {milestone.description}
                    </p>

                    {/* Connector line to next — hidden on last */}
                    {!isLast && index < milestones.length - 1 && (
                      <div className="absolute left-[7px] top-[20px] bottom-0 w-px bg-[#e0d8d0]" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
