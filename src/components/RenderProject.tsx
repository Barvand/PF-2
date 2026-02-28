import { Project } from "../types/ProjectType";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineCode, HiOutlineSparkles } from "react-icons/hi";

interface RenderProjectProps {
  project: Project;
}

function RenderProject({ project }: RenderProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative overflow-hidden bg-brand-bg px-6 py-24 font-nunito md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Ambient glow — top-left orange */}
        <div className="pointer-events-none absolute -left-20 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.07)_0%,transparent_70%)]" />
        {/* Ambient glow — bottom-right blue */}
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,180,255,0.04)_0%,transparent_70%)]" />

        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="relative mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
            Featured Project
          </p>
          <h2 className="mb-5 text-5xl font-bold font-nunito leading-[0.95] tracking-wide text-white">
            {project.name}
          </h2>
          <p className="text-base leading-relaxed text-brand-muted">
            {project.description}
          </p>
        </div>

        {/* ── Main Card ──────────────────────────────────────────── */}
        <div className="relative border border-brand-border bg-brand-card overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-accent/80 via-brand-accent/30 to-transparent" />

          <div className="flex flex-col lg:flex-row">
            {/* ── Left Panel ─────────────────────────────────────── */}
            <div className="flex-1 p-10 flex flex-col gap-10">
              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <HiOutlineCode className="text-brand-accent w-4 h-4" />
                  <span className="text-md font-semibold uppercase tracking-[0.2em] text-brand-accent">
                    Tech Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 trext-md rounded-lg border border-brand-border bg-brand-bg font-semibold text-brand-sub tracking-wide transition-colors duration-200 hover:border-brand-accent/40 hover:text-brand-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <HiOutlineSparkles className="text-brand-accent w-4 h-4" />
                  <span className="text-md font-semibold uppercase tracking-[0.2em] text-brand-accent">
                    Features
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 border-t border-white/[0.06] pt-5">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span className="text-[13px] font-semibold text-brand-sub leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent text-white text-sm font-bold tracking-wide transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,107,0,0.35)]"
                >
                  <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  Live Link
                </a>
              </div>
            </div>

            {/* ── Right Panel — Image ─────────────────────────────── */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-10 bg-gradient-to-br from-transparent to-brand-bg/40">
              <div className="w-full max-w-[520px] rounded-xl overflow-hidden border border-brand-border shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1">
                {/* Fake browser bar */}
                <div className="flex items-center gap-2 bg-brand-card-hover border-b border-brand-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <div className="ml-3 flex-1 rounded-md bg-brand-bg/80 border border-brand-border px-3 py-1">
                    <span className="text-[11px] font-medium text-brand-muted tracking-wide truncate block">
                      {project.liveLink}
                    </span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden bg-brand-bg aspect-video">
                  <img
                    src={project.mockups.desktop}
                    alt={project.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-brand-bg/60 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RenderProject;
