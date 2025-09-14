import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { milestones } from "../data/milestones";

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
        <div className="container border-gray-600 flex justify-between cursor-pointer group relative border-b">
          <div className="flex justify-between w-full">
            <h2 className="text-2xl text-gray-200 font-bold">Background</h2>
          </div>
          <div className="circleContainer h-24">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="container mx-auto p-8 text-white">
        <div className="py-2 mb-20">
          <h3 className="text-gray-200 italic self-end">
            A little bit about myself before we jump into my working experience.
          </h3>
          <blockquote>
            <p className="text-gray-400 italic self-end">
              My passion for technology began early, back in the days when you
              had to disconnect the phone line to access the internet. Gaming
              and exploring digital tools sparked a natural curiosity for how
              things work, but it took me time to realize I could turn that into
              a career. Through my work in customer service, I discovered how
              empowered and focused I feel behind a computer, a place where I’m
              both comfortable and in control. That experience fueled my
              motivation to pursue development as a profession.
            </p>
          </blockquote>
        </div>
        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-500 pl-6 space-y-8">
          {milestones
            .slice(0, expanded ? milestones.length : 4)
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
                <div className="absolute left-[-35px] top-2 w-5 h-5 bg-main"></div>

                {/* Content */}
                <div className="p-3 border-b-gray-700 border-r-3 border-b-3 border-gray-800 row h-62 items-center">
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
                  <div className="col-six mt-4 sm:mt-0 h-48 w-full overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover object-top"
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
