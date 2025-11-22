import Wave from "./svg/Wave";
import Socials from "./socials/Socials";

interface IntroPortFolioProps {
  Project: () => void;
  scrollYProgress?: any;
}

function IntroPortfolio({ Project }: IntroPortFolioProps) {
  return (
    <>
      <div className="flex-col lg:flex-row mx-auto flex gap-20 justify-center relative pt-50 p-5 min-h-[80vh]">
        <div className="text-white flex flex-col gap-3 justify-center">
          <p className="font-semibold tracking-wide uppercase"> Portfolio</p>
          <h1
            className="playful-text font-bold tracking-tight 
  text-4xl md:text-4xl lg:text-5xl text-[#FF6700]"
          >
            Technical solutions
          </h1>

          <p className="text-xl font-semibold text-gray-200 mb-8 max-w-xl">
            It’s time to take control and scale your business online. We help
            you build the technical solutions you need — affordably and
            effectively.
          </p>
          <button
            onClick={Project}
            className="gradient-border text-black font-semibold px-6 py-3 block hover:text-black hover:bg-white/90 rounded-md transition"
          >
            So what we can do for you
          </button>
        </div>
        {/* RIGHT IMAGE */}
        <div className="mb-30 flex items-center justify-center z-20">
          <div className="bg-[#1c3752] rounded-full w-80 h-80 lg:w-128 lg:h-128 p-15 overflow-hidden flex justify-center items-center">
            <img src="/bartpng.png" alt="Bart Berg" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="relative h-52 bg-gradient-to-r from-[#1c3752] w-full mt-[-150px] z-0">
        <Socials />
        {/* WAVE UNDER SOCIALS */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Wave />
        </div>
      </div>
    </>
  );
}

export default IntroPortfolio;
