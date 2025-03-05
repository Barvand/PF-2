import { useState } from "react";
import { Project } from "../types/ProjectType";
import ResponsiveTab from "./ResponsiveTab";
import { motion } from "framer-motion";

interface RenderProjectProps {
  project: Project;
}

function RenderProject({ project }: RenderProjectProps) {
  // Set default to desktop view
  const [imageSrc, setImageSrc] = useState(project.mockups.desktop);
  const [activeTab, setActiveTab] = useState("desktop"); // "desktop" is the default active tab

  return (
    <>
      <div className="custom-bg-black flex sm:h-dvh items-center relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row flex-start gap-1 container bg-black"
        >
          {/* Mockup Section */}
          <div className="section--mockup-laptop md:border-r-3 sm:p-2 md:w-full md:h-full lg:w-[1000px] lg:h-[800px] mt-4 mb-3">
            <div className="flex justify-between items-center">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-12"
              />
              <ResponsiveTab
                activeTab={activeTab} // Pass active state
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

            {/* Display mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 flex justify-center"
            >
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={`${project.name} mockup`}
                  className="rounded-lg shadow-lg"
                />
              )}
            </motion.div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="section-project--text p-4 flex flex-col gap-4 pt-2 pb-2 text-white"
          >
            <img className="w-46" src={project.logo} alt="project.logo"></img>
            <div>
              <h2 className="font-bold">What is {project.name}?</h2>
              <p>{project.description}</p>
            </div>

            <div>
              <h2 className="font-bold border-b border-gray-200">
                Target audience
              </h2>
              <p>{project.audience}</p>
            </div>

            <div>
              <h2 className="font-bold">Design process</h2>
              {project.design.map((point, index) => (
                <p key={index}> {point}</p>
              ))}
            </div>

            <div>
              <h2 className="font-bold text-lg text-[#FF6700] border-b border-[#DDCFCF] pb-2">
                This project is built with
              </h2>
              <div className="flex flex-wrap mt-2 gap-2">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative group px-2.5 rounded text-gray-200 cursor-pointer font-bold overflow-hidden"
                  >
                    {tech}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main group-hover:w-full group-hover:transition-all duration-300 ease-in-out"></span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <svg
        className="w-full h-12 text-gray-700"
        viewBox="0 0 1200 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,100 900,0 1200,0 V100 H0 Z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
}

export default RenderProject;
