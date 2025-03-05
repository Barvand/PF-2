import { useState, useRef } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "Luchtmobiele brigade",
    year: "2009 - 2012",
    description: "Built resilience, teamwork, and leadership.",
    image: "/military.jpg",
    location: "Arnhem, Netherlands",
  },
  {
    title: "Fitness Instructor",
    year: "2012 - 2016",
    description: "Taught, motivated, and helped people transform.",
    image: "/instructor.jpg",
    location: "Leiden, Netherlands",
  },
  {
    title: "Customer Service",
    year: "2016 - 2019",
    description: "Developed communication and problem-solving skills.",
    image: "/barcelona.jpg",
    location: "Barcelona, Spain",
  },
  {
    title: "Warehouse & Logistics",
    year: "2019 - 2021",
    description: "Learned efficiency, operations, and adaptability.",
    image: "/amsterdam.jpg",
    location: "Amsterdam, Netherlands",
  },
  {
    title: "Hospitality",
    year: "2021 - 2023",
    description: "Refined service, user experience, and attention to detail.",
    image: "/citybox.jpg",
    location: "Bergen, Norway",
  },
  {
    title: "Front-End Development",
    year: "2023 - Present",
    description:
      "Combining creativity with technical skills to build immersive experiences.",
    image: "/father.jpg",
    location: "Bergen, Norway",
  },
];

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
    <section ref={sectionRef} className="max-w-4xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        How my journey started
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-orange-500 pl-6 space-y-8">
        {milestones
          .slice(0, expanded ? milestones.length : 2)
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
              <div className="absolute left-[-35px] top-2 w-5 h-5 bg-orange-500 rounded-full"></div>

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
          className="px-6 py-2 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {expanded ? "Show Less" : "See More"}
        </motion.button>
      </div>
    </section>
  );
}
