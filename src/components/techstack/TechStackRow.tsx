import TechStackMarquee from "../TechStackMarquee";
import { FaHammer } from "react-icons/fa";

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
    <section className="bg-gray-900 text-white h-[100vh] sm:h-[50vh] items-center flex overflow-hidden border-t border-gray-500">
      <div className="container px-6 py-16">
        <div className="flex items-center gap-5">
          {/* Hammer with only two corners */}
          <div className="relative inline-flex p-2">
            {/* top-left corner */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></span>
            {/* bottom-right corner */}
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></span>

            <FaHammer className="text-cyan-500" size={32} />
          </div>

          <h2 className="text-3xl font-semibold">
            I am using the following tools
          </h2>
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
    </section>
  );
}
