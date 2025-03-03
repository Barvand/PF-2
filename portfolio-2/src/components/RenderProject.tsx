import { useState } from "react";
import { Project } from "../types/ProjectType";
import ResponsiveTab from "./ResponsiveTab";

interface RenderProjectProps {
  project: Project;
  bgColor: string;
  textColor: string;
  borderColor: string;
  mockupColor: string;
  mockUpBg: string;
}

function RenderProject({
  project,
  bgColor,
  textColor,
  borderColor,
  mockupColor,
  mockUpBg,
}: RenderProjectProps) {
  // Set default to desktop view
  const [imageSrc, setImageSrc] = useState(project.mockups.desktop);
  const [activeTab, setActiveTab] = useState("desktop"); // "desktop" is the default active tab

  return (
    <div
      className={`${bgColor} ${textColor} flex sm:h-dvh items-center relative w-full`}
    >
      <div className="flex flex-col lg:flex-row flex-start gap-1 container">
        {/* Mockup Section */}
        <div
          className="section--mockup-laptop md:border-r-3 sm:p-2 md:w-full md:h-full lg:w-[1000px] lg:h-[800px] mt-4"
          style={{ borderColor, backgroundColor: mockUpBg }}
          data-mockup-color={mockupColor}
        >
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
          <div className="mt-5 flex justify-center">
            {imageSrc && <img src={imageSrc} alt={`${project.name} mockup`} />}
          </div>
        </div>

        {/* Text Section */}
        <div className="section-project--text p-4 flex flex-col gap-4 pt-2 pb-2">
          <h1 className="text-2xl md:text-4xl font-bold">{project.name}</h1>

          <div>
            <h2 className="font-bold">What is {project.name}?</h2>
            <p>{project.description}</p>
          </div>

          <div>
            <h2 className="font-bold">Target audience</h2>
            <p>{project.audience}</p>
          </div>

          <div>
            <h2 className="font-bold">Design process</h2>
            {project.design.map((point, index) => (
              <p key={index}> {point}</p>
            ))}
          </div>

          <div>
            <h2 className="font-bold">This project is built with</h2>
            {project.techStack.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderProject;
