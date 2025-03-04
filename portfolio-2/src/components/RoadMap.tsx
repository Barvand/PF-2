"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Roadmap() {
  const containerRef = useRef(null);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-main mb-12">How it all began</h2>

      {/* Scroll Snap Container */}
      <div
        ref={containerRef}
        className="w-full h-[80vh] overflow-y-scroll snap-y snap-mandatory flex flex-col items-center space-y-16 pb-16"
      >
        {/* Step 1 */}
        <motion.div
          className="flex items-center space-x-8 snap-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
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
          <div className="relative">
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

        {/* Step 2 */}
        <motion.div
          className="flex items-center space-x-8 snap-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="object-cover object-top h-94 w-94 rounded shadow-lg"
            src="/customer-service.jpg"
            alt="Customer Service"
          />
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
          <img
            className="object-cover h-64 w-64 rounded-lg shadow-lg"
            src="/warehouse.jpg"
            alt="Warehouse"
          />
        </motion.div>

        {/* Add more steps as needed */}
      </div>
    </div>
  );
}
