import { motion } from "framer-motion";

interface IntroPortFolioProps {
  Project: () => void;
  Contact: () => void;
}

function IntroPortfolio({ Project, Contact }: IntroPortFolioProps) {
  return (
    <>
      <div className="relative mb-20 p-2 sm:h-[80vh] flex bg-black text-white overflow-hidden custom-bg-black">
        <div className="container flex flex-col md:flex-row sm:justify-center md:justify-center items-center gap-5 px-6 lg:px-12 relative">
          {/* Left Section: Text */}
          <div className="max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-main text-4xl font-bold"
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
              <h2 className="text-3xl fontbold">
                Im a passionate Front-End developer located in
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
              className="h-full w-full object-cover rounded shadow-lg"
              src="/github-image.jpg"
              alt="Bart-picture"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IntroPortfolio;
