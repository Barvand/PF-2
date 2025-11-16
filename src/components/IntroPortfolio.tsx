import Wave from "./svg/Wave";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

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
            Time to take control and scale your company with online prescense.
            We offer technical solutions for the right price.
          </p>
          <button
            onClick={Project}
            className="gradient-border text-black font-semibold px-6 py-3 block hover:text-black hover:bg-orange-500e"
          >
            So what we can do for you
          </button>
        </div>
        {/* RIGHT IMAGE */}
        <div className="flex items-center justify-center z-20">
          <div className="bg-[#1c3752] rounded-full w-80 h-80 lg:w-128 lg:h-128 p-15 overflow-hidden flex justify-center items-center">
            <img src="/bartpng.png" alt="Bart Berg" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="relative h-52 bg-gradient-to-r from-[#1c3752] w-full mt-[-150px] z-0">
        {/* ICONS */}
        <div className="flex justify-center gap-6 pt-10 relative z-20 text-white">
          {/* GitHub */}
          <a
            href="https://www.github.com/barvand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 cursor-pointer backdrop-blur-sm"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bart-van-den-berg-b90219155/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 cursor-pointer backdrop-blur-sm"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Email */}
          <a
            href="mailto:contact@bartholomeusberg.com"
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:bg-white/5 cursor-pointer backdrop-blur-sm"
            title="Email"
          >
            <BiLogoGmail size={22} />
          </a>
        </div>

        {/* WAVE UNDER ICONS */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Wave />
        </div>
      </div>
    </>
  );
}

export default IntroPortfolio;
