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

function IntroPortfolio({
  Project,
  Contact,
  scrollYProgress,
}: IntroPortFolioProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.section
      style={{ scale }}
      className="sticky top-0 py-20 sm:h-[85vh] flex text-white overflow-hidden bg-gray-900"
    >
      <HeroStars />

      <div className="container flex flex-col gap-5 px-6 lg:px-12 relative bg-gray-900/50">
        {/* Left Section: Text */}
        <motion.h1
          initial={{ y: -400 }}
          animate={{ y: 10 }}
          transition={{ duration: 2 }}
          className="text-gray-900 text-center text-4xl sm:text-6xl lg:text-8xl font-bold rounded bg-main p-2 inline-block mt-5"
        >
          Bart van den Berg
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-gray-300 text-center"
        >
          <h2 className="text-xl md:text-3xl">
            Im a passionate{" "}
            <span className="font-bold italic text-main">Front-end</span>{" "}
            developer located in
            <span className="font-bold text-green-500 italic">
              {" "}
              Bergen, Norway{" "}
            </span>
            originated from
            <span className="font-bold text-blue-500 italic">
              {" "}
              Leiden, the Netherlands.{" "}
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.75 }}
          className="flex justify-center gap-5"
        >
          <a
            href="https://github.com/barvand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 mt-8 flex items-center"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/bart-van-den-berg-b90219155/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 mt-8 flex items-center"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:bartberg11@gmail.com"
            className="text-gray-200 hover:text-blue-500 mt-8 flex items-center"
          >
            <BiLogoGmail size={32} />
          </a>
        </motion.div>

        {/* Call to Action Button*/}
        <div className="flex gap-5 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 flex"
          >
            <button
              onClick={Project}
              className="relative border bg-blue-500 hover:bg-amber-950 hover:text-main group py-3 px-3 rounded text-gray-900 cursor-pointer font-bold"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main group-hover:w-full group-hover:transition-all"></span>
              Explore my work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8"
          >
            <button
              onClick={Contact}
              className="relative border border-gray-200 group py-3 px-2.5 hover:border-main rounded text-gray-200 cursor-pointer font-bold"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main group-hover:w-full group-hover:transition-all"></span>
              Let's have a chat!
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default IntroPortfolio;
