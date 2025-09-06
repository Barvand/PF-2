import { MdArrowOutward } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { motion } from "framer-motion";

interface NavigationTextProps {
  onProjectsClick: () => void;
  onAboutMeClick: () => void;
}

function NavigationText({
  onProjectsClick,
  onAboutMeClick,
}: NavigationTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      className="text-main p-2 flex flex-col justify-center mb-20 gap-5 py-10 bg-amber-950 border-b border-t border-gray-500"
    >
      <div className="container flex justify-between gap-5">
        <motion.h2
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold text-gray-300"
        >
          Navigate
        </motion.h2>
        <div className="relative inline-flex p-2">
          {/* top-left corner */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></span>
          {/* bottom-right corner */}
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></span>

          <BiSolidNavigation className="text-cyan-500" size={32} />
        </div>
      </div>
      {/* === Section Link === */}
      {[
        {
          label: "Projects",
          onClick: onProjectsClick,
        },
        {
          label: "Background",
          onClick: onAboutMeClick,
        },
      ].map(({ label, onClick }) => (
        <div
          key={label}
          onClick={onClick}
          className="relative container cursor-pointer group overflow-hidden"
        >
          <div className="flex justify-between items-center pb-1">
            <h2 className="text-2xl sm:text-3xl font-bold">{label}</h2>
            <div className="transform transition-transform duration-300 delay-300 group-hover:-translate-y-1">
              <MdArrowOutward size={42} />
            </div>
          </div>

          {/* Underline Animation */}
          <span className="block h-0.5 bg-main origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </div>
      ))}
    </motion.div>
  );
}

export default NavigationText;
