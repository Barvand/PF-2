import { useRef, useEffect } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import NavigationText from "../components/NavigationText";
import ButtonToTop from "../features/ButtonToTop";
import Roadmap from "../components/RoadMap";
import Navigation from "../components/navigation/Navigation";
import { useScroll } from "framer-motion";
import Footer from "../components/footer/Footer";
import TechStackRow from "../components/techstack/TechStackRow";

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

  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <Navigation
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToTechStack={() => scrollToSection(techStackRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <main>
        <section ref={heroRef}>
          <IntroPortfolio
            Project={() => scrollToSection(projectsRef)}
            Contact={() => scrollToSection(contactRef)}
            scrollYProgress={heroProgress}
          />
        </section>
        <TechStackRow />

        <NavigationText
          onProjectsClick={() => scrollToSection(projectsRef)}
          onAboutMeClick={() => scrollToSection(aboutMeRef)}
          onTechStackClick={() => scrollToSection(techStackRef)} // ✅ Fixed
        />
        <ProjectSections ref={projectsRef} />
        {/* <TechStack ref={techStackRef} /> */}
        <section ref={aboutMeRef} className=" justify-center">
          <Roadmap />
        </section>
        <Footer ref={contactRef} />
        <ButtonToTop />
      </main>
    </>
  );
}

export default Home;
