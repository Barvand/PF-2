import { Project } from "../types/ProjectType";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

interface RenderProjectProps {
  project: Project;
}

function RenderProject({ project }: RenderProjectProps) {
  return (
    <div className="relative w-full mt-20 mb-20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container p-6 rounded-lg bg-gray-900"
      >
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Text Section (4 columns on larger screens, full-width on mobile) */}
          <motion.div
            className="col-span-4 space-y-6 flex flex-col p-6 border-r border-gray-500 border-dotted"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Title */}
            <div className=" border-gray-600">
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border-b border-gray-500 pb-2 flex items-center gap-2">
                <FaCode size={28} className="text-blue-500" />
                <p className="text-gray-200"> Techstack </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="text-white pe-1 border-r border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Built With (Full width under the cards) */}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <a
                className="text-white hover:text-[#FF6700] flex justify-between gap-2 bg-gray-800 p-2 rounded"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-main">Live link</p>
                <FaExternalLinkAlt size={20} />
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6700] flex justify-between gap-2 bg-gray-800 p-2 rounded"
              >
                <p className="text-main">Github Repo</p>
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
          {/* Image Section (8 columns on larger screens, full-width on mobile) */}
          <div className="col-span-8 project-image">
            <motion.img
              src={project.mockups.desktop}
              alt={`${project.name} mockup`}
              className="w-full p-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default RenderProject;
