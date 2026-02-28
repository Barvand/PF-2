import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

interface IntroPortFolioProps {
  Project: () => void;
  Contact: () => void;
}

const ease = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
};

const fadeReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

function IntroPortfolio({ Project, Contact }: IntroPortFolioProps) {
  return (
    <section className="relative overflow-hidden bg-brand-bg min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 font-nunito">
      {/* Keyframes */}
      <style>{`
        @keyframes scanH {
          0%   { transform: translateY(-4px); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes scanV {
          0%   { transform: translateX(-4px); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes crossPulse {
          0%, 100% { transform: scale(0.6); opacity: 0.3; }
          50%       { transform: scale(1.5); opacity: 0.65; }
        }
      `}</style>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.08)_0%,transparent_70%)] z-0" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,180,255,0.05)_0%,transparent_70%)] z-0" />

      {/* Blueprint grid layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
        {/* CSS grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,107,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.08) 1px, transparent 1px),
              linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "200px 200px, 200px 200px, 40px 40px, 40px 40px",
            maskImage:
              "radial-gradient(ellipse 90% 90% at 40% 50%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 40% 50%, black 20%, transparent 100%)",
          }}
        />

        {/* Horizontal scan line */}
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.5) 30%, rgba(255,107,0,0.8) 50%, rgba(255,107,0,0.5) 70%, transparent 100%)",
            animation: "scanH 8s linear infinite",
          }}
        />

        {/* Vertical scan line */}
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.4) 30%, rgba(255,107,0,0.6) 50%, rgba(255,107,0,0.4) 70%, transparent 100%)",
            animation: "scanV 12s linear infinite",
          }}
        />

        {/* Crosshair targets */}
        {(
          [
            { top: "12%", left: "8%", delay: "0s" },
            { top: "20%", left: "88%", delay: "0.7s" },
            { top: "78%", left: "15%", delay: "1.4s" },
            { top: "72%", left: "82%", delay: "2.1s" },
          ] as const
        ).map((pos, i) => (
          <div
            key={i}
            className="absolute w-7 h-7"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[rgba(255,107,0,0.45)]" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(255,107,0,0.45)]" />
            <div
              className="absolute inset-0 rounded-full border border-[rgba(255,107,0,0.4)]"
              style={{
                animation: `crossPulse ${3 + i * 0.7}s ease-in-out infinite`,
                animationDelay: pos.delay,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative w-full z-[2]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            style={{ originX: 0 }}
            className="block h-px w-8 bg-brand-accent"
          />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-accent">
            Web developer · Bergen, Norway
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-bebas text-[clamp(52px,10vw,140px)] leading-[0.92] tracking-wide text-white mb-8"
        >
          <span className="block overflow-hidden">
            <motion.span variants={wordReveal} className="block">
              I build websites
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={wordReveal}
              className="block text-brand-accent"
            >
              people remember.
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="max-w-[520px] text-[17px] leading-[1.85] text-brand-muted mb-12"
        >
          From landing pages to full stack applications — built fast, designed
          to convert, and handed over with zero headaches.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-4"
        >
          <motion.div variants={fadeReveal}>
            <button
              onClick={Project}
              className="cursor-pointer group relative overflow-hidden flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-accent text-white text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_32px_rgba(255,107,0,0.5)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-500" />
              See my work
            </button>
          </motion.div>
          <motion.div variants={fadeReveal}>
            <button
              onClick={Contact}
              className="cursor-pointer roup flex items-center gap-2 px-7 py-3.5 rounded-xl border border-brand-border text-sm font-bold tracking-wide text-brand-sub transition-all duration-200 hover:border-brand-accent/40 hover:text-white"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default IntroPortfolio;
