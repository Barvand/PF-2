import { useState } from "react";
import { Project } from "../types/ProjectType";
import ResponsiveTab from "./ResponsiveTab";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface RenderProjectProps {
  project: Project;
}

function RenderProject({ project }: RenderProjectProps) {
  const [imageSrc, setImageSrc] = useState(project.mockups.desktop);
  const [activeTab, setActiveTab] = useState("desktop");

  return (
    <div className="relative w-full mt-20 mb-20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container bg-black p-6 rounded-lg shadow-lg"
      >
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Logo & Tabs (Full width) */}
          <div className="col-span-12 flex justify-between items-center p-4">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className={
                project.logo.includes("LogoTotalentreprenor")
                  ? "w-70"
                  : "h-14 w-30 object-contain"
              }
            />
            <ResponsiveTab
              activeTab={activeTab}
              onSelectDesktop={() => {
                setImageSrc(project.mockups.desktop);
                setActiveTab("desktop");
              }}
              onSelectMobile={() => {
                setImageSrc(project.mockups.mobile);
                setActiveTab("mobile");
              }}
            />
          </div>

          {/* Image Section (8 columns on larger screens, full-width on mobile) */}
          <div className="col-span-12 md:col-span-8">
            <motion.img
              src={imageSrc}
              alt={`${project.name} mockup`}
              className="w-full object-cover rounded-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>

          {/* Text Section (4 columns on larger screens, full-width on mobile) */}
          <motion.div
            className="col-span-12 md:col-span-4 space-y-4 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white border-b border-gray-600 pb-2">
              {project.name}
            </h2>
            <p className="text-gray-300">{project.description}</p>

            <div>
              <h3 className="font-semibold text-lg">
                Target Audience
              </h3>
              <p className="text-gray-400">{project.audience}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-white">
                Design Process
              </h3>
              <p className="text-gray-400">{project.design}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
                Built With
              </h3>
              <div className="flex flex-wrap mt-2 gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                className=" text-white hover:text-[#FF6700] flex justify-between gap-2 bg-gray-800 p-2 rounded"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-main"> Live link </p>
                <p>
                  <FaExternalLinkAlt size={20} />
                </p>
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF6700] flex justify-between gap-2 bg-gray-800 p-2 rounded"
              >
                <p className="text-main"> Github Repo</p>
                <p>
                  <FaGithub size={20} />
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default RenderProject;
