import { forwardRef } from "react";
import { projects } from "../data/data";
import RenderProject from "./RenderProject";

// Use forwardRef to accept a ref from Home.tsx
const ProjectSections = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="relative overflow-hidden bg-brand-bg px-6 py-24 font-nunito md:px-12 lg:px-16">
        {projects.map((project) => (
          <RenderProject project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
});

export default ProjectSections;
