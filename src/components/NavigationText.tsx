import { MdArrowOutward } from "react-icons/md";
import Waves from "../waves/Waves";

interface NavigationTextProps {
  onProjectsClick: () => void;
  onAboutMeClick: () => void;
  onTechStackClick: () => void;
}

function NavigationText({
  onProjectsClick,
  onAboutMeClick,
  onTechStackClick,
}: NavigationTextProps) {
  return (
    <div className="bg-gray-900 text-main flex flex-col justify-center relative mb-20 gap-10 pb-20">
      <Waves color={"#000"} flip={false} />
      <div
        className="container border-b border-white flex justify-between cursor-pointer group"
        onClick={onProjectsClick}
      >
        <h2 className="text-3xl sm:text-5xl font-bold">Projects</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce">
          <MdArrowOutward size={42} />
        </div>
      </div>
      <div
        className="container border-b border-white flex justify-between cursor-pointer group"
        onClick={onTechStackClick}
      >
        <h2 className="text-3xl sm:text-5xl font-bold">Tech stack</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce">
          <MdArrowOutward size={42} />
        </div>
      </div>
      <div
        className="container border-white border-b flex justify-between cursor-pointer group"
        onClick={onAboutMeClick}
      >
        <h2 className="text-3xl sm:text-5xl font-bold">Learn more about me</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce">
          <MdArrowOutward size={42} />
        </div>
      </div>
    </div>
  );
}

export default NavigationText;
