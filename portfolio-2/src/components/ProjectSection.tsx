import { projects } from "../data";
import RenderProject from "./RenderProject";

function ProjectSections() {
  return (
    <>
      {projects.map((project, index) => (
        <RenderProject
          key={index}
          project={project}
          bgColor={index % 2 === 0 ? "custom-bg-black" : "custom-bg-orange"} // First: black, Second: orange
          textColor={index % 2 === 0 ? "text-white" : "text-black"}
          borderColor={index % 2 === 0 ? "#FF6700" : "#000000"} // Use HEX colors
          mockupColor={index % 2 === 0 ? "orange" : "black"} // Pass color name for CSS
          mockUpBg={index % 2 === 0 ? "#0A0909" : "#F0680B"}
        />
      ))}
    </>
  );
}

export default ProjectSections;
