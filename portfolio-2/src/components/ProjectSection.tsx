import { forwardRef } from "react";
import { projects } from "../data";
import RenderProject from "./RenderProject";
import { IoArrowDownOutline } from "react-icons/io5";

// Use forwardRef to accept a ref from Home.tsx
const ProjectSections = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref}>
      <div className="container">
        <div className="container border-b border-main flex justify-between cursor-pointer group">
          <h2 className="text-5xl text-main font-bold">Projects</h2>
          <div className="transition-transform duration-300 group-hover:animate-bounce text-main">
            <IoArrowDownOutline size={42} />
          </div>
        </div>
      </div>
      {projects.map((project, index) => (
        <RenderProject
          key={index}
          project={project}
        />
      ))}
    </section>
  );
});

export default ProjectSections;
