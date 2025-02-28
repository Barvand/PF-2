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
  return (
    <section
      className={`${bgColor} ${textColor} flex h-dvh items-center relative w-full`}
    >
      <div className="flex flex-start gap-4 container">
        {/* Mockup Section */}
        <div
          className="section--mockup-laptop border-r-3"
          style={{ borderColor, backgroundColor: mockUpBg }}
          data-mockup-color={mockupColor}
        >
          <div>
            <div className="flex justify-end">
              <img src={project.logo} alt={`${project.name} logo`} />
            </div>
            <ResponsiveTab />
            <div className="mt-10 mb-20">
              <img src={project.mockup} alt={`mockup-${project.name}`} />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="section-project--text p-1 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{project.name}</h1>

          <div>
            <h2 className="font-bold">What is it?</h2>
            <p>- {project.description}</p>
          </div>

          <div>
            <h2>Target audience</h2>
            <p>- {project.audience}</p>
          </div>

          <div>
            <h2 className="font-bold">Design process</h2>
            {project.design.map((point, index) => (
              <p key={index}>- {point}</p>
            ))}
          </div>

          <div>
            <h2 className="font-bold">This project is built with</h2>
            {project.techStack.map((tech, index) => (
              <p key={index}>- {tech}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RenderProject;
