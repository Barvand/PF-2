import { forwardRef } from "react";
import { projects } from "../data/data";
import RenderProject from "./RenderProject";

// Use forwardRef to accept a ref from Home.tsx
const ProjectSections = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="relative overflow-hidden bg-brand-bg px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 font-nunito">
        <div className="max-w-6xl mx-auto">
          {projects.map((project) => (
            <RenderProject project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectSections;
