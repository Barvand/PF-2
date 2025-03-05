import { motion } from "framer-motion";
import { useState, forwardRef } from "react";
import { IoArrowDownOutline } from "react-icons/io5";

const techStack = [
  { id: 1, name: "HTML", category: "Languages & Core", color: "#E44D26" },
  { id: 2, name: "CSS", category: "Languages & Core", color: "#1572B6" },
  { id: 3, name: "JavaScript", category: "Languages & Core", color: "#F7DF1E" },
  {
    id: 4,
    name: "React.js",
    category: "Front-End Frameworks",
    color: "#61DAFB",
  },
  {
    id: 5,
    name: "Bootstrap",
    category: "Front-End Frameworks",
    color: "#7952B3",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "Front-End Frameworks",
    color: "#38B2AC",
  },
  {
    id: 7,
    name: "Fetch API",
    category: "API & Data Handling",
    color: "#FF6700",
  },
  {
    id: 8,
    name: "RESTful APIs",
    category: "API & Data Handling",
    color: "#FF6700",
  },
  { id: 9, name: "Node.js", category: "Back-End", color: "#8CC84B" },
  { id: 10, name: "Express.js", category: "Back-End", color: "#000000" },
  {
    id: 11,
    name: "Git",
    category: "Version Control & Deployment",
    color: "#F05032",
  },
  {
    id: 12,
    name: "GitHub",
    category: "Version Control & Deployment",
    color: "#181717",
  },
  {
    id: 13,
    name: "Netlify",
    category: "Version Control & Deployment",
    color: "#00C7B7",
  },
  { id: 14, name: "Figma", category: "UI/UX & Design", color: "#F24E1E" },
  { id: 16, name: "Redux", category: "State Management", color: "#764ABC" },
  { id: 17, name: "Zustand", category: "State Management", color: "#FF9800" },
  {
    id: 18,
    name: "Framer Motion",
    category: "Animation & Effects",
    color: "#0055FF",
  },
  {
    id: 19,
    name: "Next.js",
    category: "Front-End Frameworks",
    color: "#333333",
  },
  { id: 20, name: "Scrum", category: "Project Management", color: "#009FDA" },
  { id: 21, name: "Agile", category: "Project Management", color: "#FCA121" },
  { id: 22, name: "Kanban", category: "Project Management", color: "#4CAF50" },
  {
    id: 23,
    name: "GitHub Projects",
    category: "Project Management",
    color: "#181717",
  },
  { id: 24, name: "Trello", category: "Project Management", color: "#0079BF" },
];

const categories = ["All", ...new Set(techStack.map((tech) => tech.category))];

const TechStack = forwardRef<HTMLElement>((_, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStack =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <section
      ref={ref}
      className="p-1 container text-white bg-black sm:size-fit"
    >
      {/* Section Header */}
      <div className="relative mt-20 mb-20">
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
      <div className="flex flex-wrap gap-1 mb-6 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileTap={{ scale: 0.9 }}
            className={`relative border border-main py-1 px-1 sm:py-2 sm:px-2 rounded font-bold cursor-pointer transition group ${
              selectedCategory === category
                ? "bg-main text-white shadow-lg"
                : "bg-black border-main text-main hover:bg-white"
            }`}
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
            style={{ backgroundColor: tech.color }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {tech.name}

            {/* Hover Underline Animation */}
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-white 
            group-hover:w-full group-hover:transition-all"
            ></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

export default TechStack;
