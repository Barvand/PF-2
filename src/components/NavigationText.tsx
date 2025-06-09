import { MdArrowOutward } from "react-icons/md";

import GrayWaveTransform from "../waves/GrayWaveTransform";
import GrayWave from "../waves/GrayWave";

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
    <div className="bg-gray-900 text-main flex flex-col justify-center relative mb-20 gap-10">
      <GrayWaveTransform />

      {/* === Section Link === */}
      {[
        {
          label: "Projects",
          onClick: onProjectsClick,
        },
        {
          label: "Tech stack",
          onClick: onTechStackClick,
        },
        {
          label: "Learn more about me",
          onClick: onAboutMeClick,
        },
      ].map(({ label, onClick }) => (
        <div
          key={label}
          onClick={onClick}
          className="relative container cursor-pointer group overflow-hidden"
        >
          <div className="flex justify-between items-center pb-1">
            <h2 className="text-3xl sm:text-5xl font-bold">{label}</h2>
            <div className="transform transition-transform duration-300 delay-300 group-hover:-translate-y-1">
              <MdArrowOutward size={42} />
            </div>
          </div>

          {/* Underline Animation */}
          <span className="block h-0.5 bg-main origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </div>
      ))}

      <GrayWave />
    </div>
  );
}

export default NavigationText;
