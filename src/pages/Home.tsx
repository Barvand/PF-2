import { useRef } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import ButtonToTop from "../features/ButtonToTop";
import Roadmap from "../components/RoadMap";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import ServicesSection from "../components/serviceSection";

function Home() {
  // Define section references
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Navigation
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <main>
        <section ref={heroRef} className="">
          <IntroPortfolio
            Project={() => scrollToSection(projectsRef)}
            Contact={() => scrollToSection(contactRef)}
          />
        </section>
        <ServicesSection />
        <section>
          <ProjectSections ref={projectsRef} />
        </section>
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
