import { motion, useTransform } from "framer-motion";
import HeroStars from "./background/HeroBg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

interface IntroPortFolioProps {
  Project: () => void;
  Contact: () => void;
  scrollYProgress?: any;
}

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function IntroPortfolio({
  Project,
  Contact,
  scrollYProgress,
}: IntroPortFolioProps) {
  const scale = useTransform(scrollYProgress, [0, 2], [1, 0.92]);

  return (
    <motion.section
      style={{ scale }}
      className="sticky top-0 flex overflow-hidden bg-gray-900 text-[#DDCFCF] sm:h-[100vh] py-20"
      aria-label="Intro hero"
    >
      <HeroStars />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative mx-auto px-6 lg:px-12 max-w-4xl text-center sm:text-left"
      >
        {/* Badge: Name · Location */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur"
        >
          <motion.span
            animate={{
              opacity: [1.5, 0.5, 1.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-2 w-2 rounded-full bg-green-400"
          />
          <span className="text-sm text-[#DDCFCF]/85">
            Bart van den Berg · Bergen, Norway
          </span>
        </motion.div>

        {/* Value Prop */}
        <motion.h1
          variants={item}
          className="mt-6 font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl"
        >
          Front-end developer crafting clean, fast UIs
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          variants={item}
          className="mt-4 text-base md:text-lg text-[#DDCFCF]/85"
        >
          I’m a passionate{" "}
          <span className="font-semibold italic">front-end</span> developer
          based in{" "}
          <span className="underline decoration-main/70 underline-offset-4">
            Bergen
          </span>
          , originally from Leiden.
          <span className="text-white italic">
            {" "}
            I gap the bridge between companies and the web.{" "}
          </span>{" "}
          .
        </motion.p>

        {/* CTAs + Socials */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={Project}
            className="inline-flex items-center justify-center rounded-xl bg-main px-5 py-3 font-semibold text-gray-900 hover:text-blue-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-main/60"
            aria-label="Explore my work"
          >
            Explore my work
          </button>

          <button
            onClick={Contact}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-[#DDCFCF] cursor-pointer hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Open contact section"
          >
            Let’s chat
          </button>

          <div className="flex items-center gap-3 sm:ml-2">
            <a
              href="https://github.com/barvand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 focus-visible:outline-2 cursor-pointer"
              title="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/bart-van-den-berg-b90219155/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5  focus-visible:outline-2 cursor-pointer"
              title="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:bartberg11@gmail.com"
              aria-label="Email Bart"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 focus-visible:outline-2 cursor-pointer"
              title="Email"
            >
              <BiLogoGmail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Micro-trust */}
        <motion.p variants={item} className="mt-3 text-sm text-[#DDCFCF]/65">
          Available for freelance · Replies within 24h
        </motion.p>

        {/* Scroll cue */}
      </motion.div>
      <motion.button
        variants={item}
        onClick={Project}
        aria-label="Scroll to work"
        className="absolute left-1/2 -translate-x-1/2 bottom-10 text-[#DDCFCF]/60 hover:text-[#DDCFCF]/90 cursor-pointer"
      >
        ↓
      </motion.button>
    </motion.section>
  );
}

export default IntroPortfolio;
