import { motion, useTransform, MotionConfig } from "framer-motion";
import HeroStars from "./background/HeroBg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

interface IntroPortFolioProps {
  Project: () => void;
  Contact: () => void;
  scrollYProgress?: any;
}

const DUR = 3; // shorter = snappier
const STAG = 0.3; // tighter cascade

// Springy fade-up that feels responsive and less "laggy"
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 260,
      damping: 24,
      mass: 0.9,
      delay: i * STAG,
    },
  }),
};

// Small helper to assign a sequential index across the whole tree
const makeSequencer = () => {
  let i = 0;
  return () => i++;
};

function IntroPortfolio({
  Project,
  Contact,
  scrollYProgress,
}: IntroPortFolioProps) {
  const scale = useTransform(scrollYProgress, [0, 2], [1, 0.92]);

  // Create a fresh sequencer per render. The order below determines the cascade
  const next = makeSequencer();

  return (
    <MotionConfig transition={{ duration: DUR }}>
      <motion.section
        style={{ scale }}
        initial="hidden"
        animate="show"
        variants={{}}
        className="relative flex overflow-hidden bg-gray-900 text-[#DDCFCF] h-[80vh] py-20"
        aria-label="Intro hero"
      >
        <HeroStars />

        {/* Content container */}
        <motion.div
          variants={fadeUp}
          custom={next()}
          className="container relative mx-auto px-6 lg:px-12 max-w-4xl text-center sm:text-left"
        >
          {/* Badge: Name · Location */}
          <motion.div
            variants={fadeUp}
            custom={next()}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur"
          >
            {/* Online dot */}
            <motion.span
              // keep the subtle pulse independent of the entrance sequence
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="h-2 w-2 rounded-full bg-green-400"
            />
            <motion.span
              variants={fadeUp}
              custom={next()}
              className="text-sm text-[#DDCFCF]/85"
            >
              Bart van den Berg · Bergen, Norway
            </motion.span>
          </motion.div>

          {/* Value Prop */}
          <motion.h1
            variants={fadeUp}
            custom={next()}
            className="mt-6 font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl"
          >
            Front-end developer crafting clean, fast UIs
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={fadeUp}
            custom={next()}
            className="mt-4 text-base md:text-lg text-[#DDCFCF]/85"
          >
            I’m a passionate{" "}
            <span className="font-semibold italic">front-end</span> developer
            based in
            <span className="text-main"> Bergen, </span>
            <span className="text-white italic">
              {" "}
              I help professionals connect to the internet.{" "}
            </span>
          </motion.p>

          {/* CTAs + Socials */}
          <motion.div
            variants={fadeUp}
            custom={next()}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.button
              variants={fadeUp}
              custom={next()}
              onClick={Project}
              className="inline-flex items-center justify-center rounded-xl bg-main px-5 py-3 font-semibold text-gray-900 hover:text-blue-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-main/60"
              aria-label="Explore my work"
            >
              Explore my work
            </motion.button>

            <motion.button
              variants={fadeUp}
              custom={next()}
              onClick={Contact}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-[#DDCFCF] cursor-pointer hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Open contact section"
            >
              Let’s chat
            </motion.button>

            <motion.div
              variants={fadeUp}
              custom={next()}
              className="flex items-center gap-3 sm:ml-2"
            >
              <motion.a
                variants={fadeUp}
                custom={next()}
                href="https://github.com/barvand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 focus-visible:outline-2 cursor-pointer"
                title="GitHub"
              >
                <FaGithub size={22} />
              </motion.a>

              <motion.a
                variants={fadeUp}
                custom={next()}
                href="https://www.linkedin.com/in/bart-van-den-berg-b90219155/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5  focus-visible:outline-2 cursor-pointer"
                title="LinkedIn"
              >
                <FaLinkedin size={22} />
              </motion.a>

              <motion.a
                variants={fadeUp}
                custom={next()}
                href="mailto:bartberg11@gmail.com"
                aria-label="Email Bart"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 focus-visible:outline-2 cursor-pointer"
                title="Email"
              >
                <BiLogoGmail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Micro-trust */}
          <motion.p
            variants={fadeUp}
            custom={next()}
            className="mt-3 text-sm text-[#DDCFCF]/65"
          >
            Available for freelance · Replies within 24h
          </motion.p>
        </motion.div>
      </motion.section>
      <motion.div
        className="inset-5 bg-image"
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        animate={{ backgroundColor: "#ffff", opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
    </MotionConfig>
  );
}

export default IntroPortfolio;
