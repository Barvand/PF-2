import { useRef } from "react";
import ProjectSections from "../components/ProjectSection";
import IntroPortfolio from "../components/IntroPortfolio";
import NavigationText from "../components/NavigationText";
import Waves from "../components/Waves";

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
      <IntroPortfolio />
      <NavigationText
        onProjectsClick={() => scrollToSection(projectsRef)}
        onAboutMeClick={() => scrollToSection(aboutMeRef)}
        onFutureClick={() => scrollToSection(futureRef)}
      />

      <ProjectSections ref={projectsRef} />

      {/* Other sections */}
      <section ref={aboutMeRef} className=" justify-center bg-gray-300">
        <div className="relative bg-main">
          <div className="relative flex">
            <h2 className="text-5xl font-bold text-gray-200 bg-main p-3 flex justify-end container">
              About me
            </h2>
          </div>
        </div>
        <Waves color={"#ff6700"} flip={false} />

        <div className="container">
          <h2> You know the deal </h2>
        </div>
      </section>
      <section ref={futureRef} className="flex bg-gray-200 h-screen">
        <div className=" relative w-full">
          <h2 className="text-5xl font-bold text-gray-200 bg-main p-3">
            Future Section
          </h2>
          <Waves color={"#ff6700"} flip={true} />
          <div className="">
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
