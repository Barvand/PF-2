import { useRef } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import NavigationText from "../components/NavigationText";
import ButtonToTop from "../features/ButtonToTop";
import Roadmap from "../components/RoadMap";
import Navigation from "../components/navigation/Navigation";
import TechStack from "../components/techstack/Techstack";
import Footer from "../components/footer/Footer";

function Home() {
  // Define section references
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const techStackRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToTechStack={() => scrollToSection(techStackRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <main>
        <IntroPortfolio
          Project={() => scrollToSection(projectsRef)}
          Contact={() => scrollToSection(contactRef)}
        />
        <NavigationText
          onProjectsClick={() => scrollToSection(projectsRef)}
          onAboutMeClick={() => scrollToSection(aboutMeRef)}
          onTechStackClick={() => scrollToSection(techStackRef)} // ✅ Fixed
        />
        <ProjectSections ref={projectsRef} />
        <TechStack ref={techStackRef} /> {/* ✅ Fixed */}
        <section ref={aboutMeRef} className=" justify-center custom-bg-black">
          <Roadmap />
        </section>
        <Footer ref={contactRef} />
        <ButtonToTop />
      </main>
    </>
  );
}

export default Home;
