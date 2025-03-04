import { motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Roadmap() {
  const containerRef = useRef(null);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-main mb-12">How it all began</h2>

      {/* Scroll Snap Container */}
      <div
        ref={containerRef}
        className="w-full h-[80vh] container justify-evenly space-y-16 pb-16"
      >
        {/* Step 1 */}
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative col-five">
            <img
              className="object-cover object-top h-94 w-94 rounded shadow-lg"
              src="/young-me-military.jpg"
              alt="Military"
            />
            <div className="absolute bg-black opacity-80 w-full bottom-0 p-2">
              <h2 className="text-2xl"> Luchtmobiele brigade </h2>
              <p> 2009 - 2012 </p>
            </div>
          </div>

          <div className="col-two">
            <svg
              className="w-12 h-12 text-main"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="relative col-five">
            <img
              className="object-cover object-top h-94 w-94 rounded shadow-lg"
              src="/instructor.jpg"
              alt="Instructor"
            />
            <div className="absolute bg-black opacity-80 w-full bottom-0 p-2">
              <h2 className="text-2xl"> Fitness instructor </h2>
              <p> 2012 - 2016 </p>
            </div>
          </div>
        </motion.div>

        {/* Arrow Only Row */}
        <div className="row">
          <div className="col-nine"></div>{" "}
          {/* Empty space to push the arrow right */}
          <FaArrowDown size={42} />
        </div>

        {/* Step 2 */}
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-five">
            <img
              className="object-cover object-top h-94 w-94 rounded shadow-lg"
              src="/young-me-military.jpg"
              alt="Customer Service"
            />
          </div>

          <div className="col-two">
            <svg
              className="w-12 h-12 text-main"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="col-five">
            <img
              className="object-cover object-top h-94 w-94 rounded shadow-lg"
              src="/young-me-military.jpg"
              alt="Warehouse"
            />
          </div>
        </motion.div>

        {/* Add more steps as needed */}
      </div>
    </div>
  );
}
