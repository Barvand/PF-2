import TechStackMarquee from "../TechStackMarquee";
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
      transition={{ type: "tween", duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-white flex items-center overflow-hidden border-t border-b border-gray-800 py-15 sm:py-40 h-full"
    >
      <div className="container px-6 py-16">
        <div className="container flex justify-between cursor-pointer group border-b border-gray-500">
          <h2 className="text-2xl font-bold text-gray-200">Techstack</h2>
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
