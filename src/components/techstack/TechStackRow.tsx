import TechStackMarquee from "../TechStackMarquee";

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
    <section className="bg-gray-900 text-white sm:h-[50vh] items-center flex">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Stacks I have worked with</h2>

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
