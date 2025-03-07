import { motion } from "framer-motion";
import { useState, forwardRef } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import { techStack } from "../../data/techStackArray";
import GrayWave from "../../waves/GrayWave";
import GrayWaveTransform from "../../waves/GrayWaveTransform";

const categories: (keyof CategoryColorsProps | "All")[] = [
  "All",
  ...new Set(
    techStack.map((tech) => tech.category as keyof CategoryColorsProps)
  ),
];

interface CategoryColorsProps {
  "Front-End": string;
  "Back-End": string;
  "Version Control & Deployment": string;
  "Project Management": string;
}

const categoryColors: CategoryColorsProps = {
  "Front-End": "#0F172A",
  "Back-End": "#334155",
  "Version Control & Deployment": "#64748B",
  "Project Management": "#475569",
};

const TechStack = forwardRef<HTMLElement>((_, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStack =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <>
      <section
        ref={ref}
        className="p-1 text-white bg-secondary md:h-[60vh] flex items-center"
      >
        {/* Section Header */}
        <div className="container">
          <div className="relative mt-10 mb-10">
            <div className="container border-b border-main flex justify-between cursor-pointer group">
              <h2 className="text-5xl text-main font-bold">
                Tech I am familiar with
              </h2>
              <motion.div
                className="transition-transform duration-300 group-hover:animate-bounce text-main"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <IoArrowDownOutline size={42} />
              </motion.div>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1 mb-6 h-full sm:vh-100">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileTap={{ scale: 0.9 }}
                className={`relative border border-main py-1 px-1 sm:py-2 sm:px-2 rounded font-bold cursor-pointer transition group`}
                style={{
                  backgroundColor:
                    category !== "All"
                      ? categoryColors[category as keyof CategoryColorsProps]
                      : "#020617",
                  color: selectedCategory === category ? "#fff" : "",
                  border:
                    selectedCategory === category
                      ? "2px solid white"
                      : "2px solid transparent",
                }}
              >
                {category}
                {/* Underline Hover Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main group-hover:w-full group-hover:transition-all"></span>
              </motion.button>
            ))}
          </div>

          {/* Tech Stack Cards */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {filteredStack.map((tech) => (
              <motion.div
                key={tech.id}
                className="relative
             hover:bg-gray-200 group py-1 px-1 rounded text-white cursor-pointer 
             font-bold text-center shadow-md transition-all hover:scale-105"
                style={{
                  backgroundColor:
                    categoryColors[tech.category as keyof CategoryColorsProps],
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {tech.name}
                {/* Hover Underline Animation */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
                ></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
});

export default TechStack;
