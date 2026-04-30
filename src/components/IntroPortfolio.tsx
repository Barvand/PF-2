import { motion } from "framer-motion";

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
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.08)_0%,transparent_70%)] z-0" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,180,255,0.05)_0%,transparent_70%)] z-0" />

      {/* Dotted grid */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,107,0,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 85% 85% at 40% 50%, black 10%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 40% 50%, black 10%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative w-full z-[2]">
        {/* Headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-bebas text-[clamp(52px,10vw,140px)] leading-[0.92] tracking-wide text-white mb-8"
        >
          <span className="block overflow-hidden">
            <motion.span variants={wordReveal} className="block">
              I build websites.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={wordReveal}
              className="block text-brand-accent"
            >
              that help you grow.
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
          I build fast, scalable websites for growing companies. Engineered for
          performance. Structured for scale. Built to last.
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
