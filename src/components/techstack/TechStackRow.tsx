import TechStackMarquee from "../TechStackMarquee";
import { FaHammer } from "react-icons/fa";
import { motion } from "framer-motion";

const ICONS = [
  { src: "/icons/html-1.svg", alt: "HTML5" },
  { src: "/icons/css-3.svg", alt: "CSS3" },
  { src: "/icons/javascript-1.svg", alt: "JavaScript" },
  { src: "/icons/react-2.svg", alt: "React" },
  { src: "/icons/typescript.svg", alt: "TypeScript" },
  { src: "/icons/nextjs-13.svg", alt: "Next.js" },
  { src: "/icons/figma-icon.svg", alt: "Figma" },
  { src: "/icons/tailwind-css-1-2.svg", alt: "Tailwind CSS" },
  { src: "/icons/bootstrap-4.svg", alt: "Bootstrap" },
  { src: "/icons/nodejs-3.svg", alt: "Node.js" },
  { src: "/icons/expressjs.svg", alt: "Express" },
];

export default function TechStackRow() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "tween", duration: 1 }}
      viewport={{ once: true, amount: 0.8 }} // triggers when ~35% is visible
      className="text-white flex items-center overflow-hidden border-t border-b border-4 border-gray-800 py-15 sm:py-40 h-full"
    >
      <div className="container px-6 py-16">
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-2xl font-bold text-gray-300">
            Techstack
          </h2>
          {/* Hammer with only two corners */}
          <div className="relative inline-flex p-2">
            {/* top-left corner */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></span>
            {/* bottom-right corner */}
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></span>

            <FaHammer className="text-cyan-500" size={32} />
          </div>
        </div>

        <TechStackMarquee
          icons={ICONS}
          speedSec={28}
          direction="left"
          glow="#61919d"
          size={88}
          gap={28}
        />
      </div>
    </motion.section>
  );
}
