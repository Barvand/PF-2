import { useRef } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import NavigationText from "../components/NavigationText";
import ButtonToTop from "../features/ButtonToTop";
import Roadmap from "../components/RoadMap";
import { IoArrowDownOutline } from "react-icons/io5";
import Navigation from "../components/navigation/Navigation";
import TechStack from "../components/techstack/Techstack";
import Footer from "../components/footer/Footer";

function Home() {
  // Define section references
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const techStackRef = useRef<HTMLElement | null>(null);

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
      />
      <main>
        <IntroPortfolio
          Project={() => scrollToSection(projectsRef)}
          Contact={() => scrollToSection(aboutMeRef)}
        />
        <NavigationText
          onProjectsClick={() => scrollToSection(projectsRef)}
          onAboutMeClick={() => scrollToSection(aboutMeRef)}
          onTechStackClick={() => scrollToSection(techStackRef)} // ✅ Fixed
        />
        <ProjectSections ref={projectsRef} />
        <TechStack ref={techStackRef} /> {/* ✅ Fixed */}
        <section ref={aboutMeRef} className=" justify-center custom-bg-black">
          <div className="relative mt-20">
            <div className="container border-b border-main flex justify-between cursor-pointer group relative">
              <h2 className="text-5xl text-main font-bold">About me</h2>
              <div className="circleContainer h-24">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>

              <div className="transition-transform duration-300 group-hover:animate-bounce text-main">
                <IoArrowDownOutline size={42} />
              </div>
            </div>
          </div>
          <Roadmap />
        </section>
        <Footer />
        <ButtonToTop />
      </main>
    </>
  );
}

export default Home;
