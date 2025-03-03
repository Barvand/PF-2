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
    <div className="bg-main h-[60vh] flex flex-col justify-center relative">
      <Waves />
      <div
        className="container border-b border-black flex justify-between cursor-pointer"
        onClick={onProjectsClick}
      >
        <h2 className="text-5xl font-bold">Projects</h2>
        <MdArrowOutward size={42} />
      </div>
      <div
        className="container border-black border-b flex justify-between cursor-pointer"
        onClick={onAboutMeClick}
      >
        <h2 className="text-5xl font-bold">Learn more about me</h2>
        <MdArrowOutward size={42} />
      </div>
      <div
        className="container border-black border-b flex justify-between cursor-pointer"
        onClick={onFutureClick}
      >
        <h2 className="text-5xl font-bold">The future</h2>
        <MdArrowOutward size={42} />
      </div>
    </div>
  );
}

export default NavigationText;
