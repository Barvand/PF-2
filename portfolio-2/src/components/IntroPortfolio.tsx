import { motion } from "framer-motion";

function IntroPortfolio() {
  return (
    <div className="relative h-dvh flex items-center bg-black text-white overflow-hidden custom-bg-black">
      <div className="container flex flex-col sm:flex-row sm:justify-center md:justify-center items-center gap-5 px-6 lg:px-12 relative">
        {/* Left Section: Text */}
        <div className="wave"> </div>
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-main text-5xl font-bold"
          >
            Front end developer
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white font-bold text-2xl mt-2"
          >
            Ready to take on the world
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 space-y-2 text-lg"
          >
            <li>• Straight to the point</li>
            <li>• User experience top priority</li>
            <li>• Designs, and front-end solutions</li>
            <li>• Startups? Get in contact</li>
          </motion.ul>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 flex gap-4"
          >
            <button className="bg-[#343131] text-white py-2 px-6 rounded-lg transition transform hover:scale-105 hover:shadow-glow">
              See work
            </button>
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg transition transform hover:scale-105 hover:shadow-glow">
              Get in touch
            </button>
          </motion.div>
        </div>

        {/* Right Section: Image */}
        <motion.div
          className="h-[500px] w-[400px] section--mockup-laptop border-r-3 border-main"
          data-mockup-color="orange"
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
    </div>
  );
}

export default IntroPortfolio;
