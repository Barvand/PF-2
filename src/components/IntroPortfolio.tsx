import { motion, useTransform } from "framer-motion";
import HeroStars from "./background/HeroBg";

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
      className="sticky top-0 py-20 sm:h-[100vh] flex text-white overflow-hidden bg-gray-900"
    >
      <HeroStars />
      <div className="container flex flex-col md:flex-row sm:justify-center md:justify-center items-center gap-5 px-6 lg:px-12 relative">
        {/* Left Section: Text */}
        <div className="max-w-lg px-4 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-900 text-5xl font-bold rounded bg-main p-2 inline-block mt-20 md:mt-0"
          >
            Bart van den Berg
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white font-bold text-2xl mt-2"
          ></motion.h2>

          {/* Improved Bullet Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 space-y-3 text-lg"
          >
            <h2 className="text-xl md:text-3xl">
              Im a passionate{" "}
              <span className="font-bold italic text-yellow-200">
                Front-end
              </span>{" "}
              developer located in
              <span className="font-bold text-green-200 italic">
                {" "}
                Bergen, Norway{" "}
              </span>
              originated from
              <span className="font-bold text-blue-200 italic">
                {" "}
                Leiden, the Netherlands.{" "}
              </span>
            </h2>
          </motion.div>
          {/* Call to Action Button*/}
          <div className="flex gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-8"
            >
              <button
                onClick={Project}
                className="relative border hover:bg-gray-200 group  py-3 px-3 rounded text-main cursor-pointer font-bold"
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
        {/* Right Section: Image */}
        <motion.div
          className="w-full h-[300px] md:h-[500px] md:w-[400px] section--mockup-laptop"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            className="h-full w-full object-cover"
            src="/github-image.jpg"
            alt="Bart-picture"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default IntroPortfolio;
