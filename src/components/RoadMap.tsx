import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { milestones } from "../data/milestones";
import { IoArrowDownOutline } from "react-icons/io5";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleToggle = () => {
    setExpanded((prev) => {
      if (prev && sectionRef.current) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // Small delay to ensure the DOM updates
      }
      return !prev;
    });
  };

  return (
    <>
      <div className="relative mt-20">
        <div className="container border-b border-main flex justify-between cursor-pointer group relative">
          <h2 className="text-5xl text-main font-bold">About me</h2>
          <div className="circleContainer h-24">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>

          <div className="transition-transform duration-300 group-hover:animate-bounce text-main">
            <IoArrowDownOutline size={42} />
          </div>
        </div>
      </div>
      <section ref={sectionRef} className="max-w-4xl mx-auto p-8 text-white">
        <h2 className="text-3xl font-bold text-white mb-6">
          How my journey started
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-main pl-6 space-y-8">
          {milestones
            .slice(0, expanded ? milestones.length : 3)
            .map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-35px] top-2 w-5 h-5 bg-main rounded-full"></div>

                {/* Content */}
                <div className="bg-black p-1 rounded shadow-lg row h-62">
                  <div className="col-six flex flex-col justify-center">
                    <h3
                      className={`text-xl font-semibold mt-2 ${
                        milestone.title === "Front-End Development" ||
                        milestone.title === "Hospitality"
                          ? "text-green-200"
                          : "text-blue-200"
                      }`}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-300">{milestone.year}</p>
                    <p className="text-white mt-2">{milestone.description}</p>
                    <p className="text-gray-400 mt-2"> {milestone.location}</p>
                  </div>
                  <div className="col-six h-60">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover object-top rounded clipped-image"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Expand Button */}
        <div className="mt-6 text-center">
          <motion.button
            onClick={handleToggle}
            className="relative bg-gray-600 hover:bg-gray-700 self-end text-white font-bold py-2 px-4 rounded transition-all group
              cursor-pointer shadow-md"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {expanded ? "Show Less" : "See More"}
            {/* Hover Underline Animation */}
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
              group-hover:w-full group-hover:transition-all"
            ></span>
          </motion.button>
        </div>
      </section>
    </>
  );
}
