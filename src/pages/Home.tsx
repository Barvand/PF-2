import { useRef } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import ButtonToTop from "../features/ButtonToTop";
import Roadmap from "../components/RoadMap";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import ServicesSection from "../components/serviceSection";
import CaseStudy from "../components/CaseStudy";

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

        {/* ── Dark → White transition ────────────────────────────── */}
        <div className="relative bg-white" aria-hidden="true">
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
          >
            <rect width="1440" height="72" fill="#0d1b2a" />
            <path d="M0,72 L0,50 C360,6 1080,6 1440,50 L1440,72 Z" fill="white" />
          </svg>
        </div>

        <CaseStudy />
        <section>
          <ProjectSections ref={projectsRef} />
        </section>
        {/* <TechStack ref={techStackRef} /> */}
        {/* ── Dark → White transition ────────────────────────────── */}
        <div className="relative bg-white" aria-hidden="true">
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
          >
            <rect width="1440" height="72" fill="#0d1b2a" />
            <path d="M0,72 L0,50 C360,6 1080,6 1440,50 L1440,72 Z" fill="white" />
          </svg>
        </div>

        <section ref={aboutMeRef} className="justify-center">
          <Roadmap />
        </section>
        <Footer ref={contactRef} />
        <ButtonToTop />
      </main>
    </>
  );
}

export default Home;
