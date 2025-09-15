import { forwardRef } from "react";
import { projects } from "../data/data";
import RenderProject from "./RenderProject";

// Use forwardRef to accept a ref from Home.tsx
const ProjectSections = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="py-20">
        <div className="container">
          <div className="container flex justify-between cursor-pointer group border-b border-blue-200">
            <h2 className="text-2xl text-gray-200 font-bold">Projects</h2>
          </div>
        </div>
        {projects.map((project) => (
          <RenderProject project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
});

export default ProjectSections;
