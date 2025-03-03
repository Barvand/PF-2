import { forwardRef } from "react";
import { projects } from "../data";
import RenderProject from "./RenderProject";
import Waves from "./Waves";

// Use forwardRef to accept a ref from Home.tsx
const ProjectSections = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref}>
      <div className="bg-gray-300">
        <div className="container">
          <h2 className="text-5xl text-main font-bold bg-gray-300 p-3">
            Projects
          </h2>
        </div>
      </div>
      <Waves color={"#d1d5dc"} />
      {projects.map((project, index) => (
        <RenderProject
          key={index}
          project={project}
          bgColor={index % 2 === 0 ? "custom-bg-black" : "custom-bg-orange"}
          textColor={index % 2 === 0 ? "text-white" : "text-black"}
          borderColor={index % 2 === 0 ? "#FF6700" : "#000000"}
          mockupColor={index % 2 === 0 ? "orange" : "black"}
          mockUpBg={index % 2 === 0 ? "#0A0909" : "#F0680B"}
        />
      ))}
    </section>
  );
});

export default ProjectSections;
