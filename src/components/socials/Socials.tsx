import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Socials() {
  return (
    <div className="flex justify-center gap-6 pt-10 relative z-20 text-white">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="playful-text text-xl"> Connect with me on socials </h2>
        <div className="flex justify-center gap-6">
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
      </div>
    </div>
  );
}

export default Socials;
