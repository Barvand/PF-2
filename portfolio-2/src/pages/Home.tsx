import { useRef } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import NavigationText from "../components/NavigationText";
import Waves from "../components/Waves";
import Roadmap from "../components/RoadMap";
import { IoArrowDownOutline } from "react-icons/io5";

function Home() {
  // Define section references
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const futureRef = useRef<HTMLElement | null>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <IntroPortfolio
        Project={() => scrollToSection(projectsRef)}
        Contact={() => scrollToSection(aboutMeRef)}
      />
      <NavigationText
        onProjectsClick={() => scrollToSection(projectsRef)}
        onAboutMeClick={() => scrollToSection(aboutMeRef)}
        onFutureClick={() => scrollToSection(futureRef)}
      />
      <ProjectSections ref={projectsRef} />
      {/* Other sections */}
      <section ref={aboutMeRef} className=" justify-center custom-bg-black">
        <div className="relative mt-20">
          <div className="container border-b border-main flex justify-between cursor-pointer group">
            <h2 className="text-5xl text-main font-bold">About me</h2>
            <div className="transition-transform duration-300 group-hover:animate-bounce text-main">
              <IoArrowDownOutline size={42} />
            </div>
          </div>
        </div>

        <Roadmap />
      </section>
      <section ref={futureRef} className="flex bg-gray-200 h-screen">
        <div className=" relative w-full mt-20">
          <div className="container border-b border-main flex justify-between cursor-pointer group">
            <h2 className="text-5xl text-main font-bold">The future</h2>
            <div className="transition-transform duration-300 group-hover:animate-bounce text-main">
              <IoArrowDownOutline size={42} />
            </div>
          </div>

          <div className="container">
            <h2> Trading Journal Platform </h2>
            <p>
              As a day trader, it is a must to keep track of your trades in
              order to find the flaws in your trading system.
            </p>
            <p>
              Since good trading journals are kept behind a paywall, have I
              decided to design and build my own trading platform for myself.
            </p>
            <h3 className="text-xl"> How does this look? </h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
