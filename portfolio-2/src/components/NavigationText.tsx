import { MdArrowOutward } from "react-icons/md";
import Waves from "./Waves";

interface NavigationTextProps {
  onProjectsClick: () => void;
  onAboutMeClick: () => void;
  onFutureClick: () => void;
}

function NavigationText({
  onProjectsClick,
  onAboutMeClick,
  onFutureClick,
}: NavigationTextProps) {
  return (
    <div className="bg-main flex flex-col justify-center relative mb-20 gap-10 pb-20">
      <Waves color={"#000"} flip={false} />
      <div
        className="container border-b border-black flex justify-between cursor-pointer group"
        onClick={onProjectsClick}
      >
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce">
          <MdArrowOutward size={42} />
        </div>
      </div>
      <div
        className="container border-black border-b flex justify-between cursor-pointer group"
        onClick={onAboutMeClick}
      >
        <h2 className="text-5xl font-bold">Learn more about me</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce">
          <MdArrowOutward size={42} />
        </div>
      </div>
      <div
        className="container border-black border-b flex justify-between items-center cursor-pointer group"
        onClick={onFutureClick}
      >
        <h2 className="text-5xl font-bold">The future</h2>
        <div className="transition-transform duration-300 group-hover:animate-bounce">
          <MdArrowOutward size={42} />
        </div>
      </div>
    </div>
  );
}

export default NavigationText;
