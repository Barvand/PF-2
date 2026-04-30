import ClipboardListIcon from "./svg/ClipboardListIcon";
import UserClockIcon from "./svg/UserClockIcon";
import ShieldIcon from "./svg/ShieldIcon";
import BarChartIcon from "./svg/BarChartIcon";

const features = [
  {
    icon: <ClipboardListIcon />,
    title: "Project Management",
    text: "Create and manage projects with unique codes, status tracking, and date ranges. Hour rollups per project give a clear picture of time invested and help with accurate pricing.",
  },
  {
    icon: <UserClockIcon />,
    title: "Time Tracking & Absence",
    text: "Employees log hours per project or absence type — vacation, sick leave, training. Break deduction, a real-time hour preview, and a quick repeat-last-entry shortcut keep daily logging fast and accurate.",
  },
  {
    icon: <ShieldIcon />,
    title: "Role-Based Access Control",
    text: "Three distinct roles — Employee, Accountant, and Admin — each with their own dashboard and permissions. Admins can step into any employee view; accountants get reporting access without touching management tools.",
  },
  {
    icon: <BarChartIcon />,
    title: "Reporting & Analytics",
    text: "Monthly accounting dashboards with easy date navigation, per-project hour summaries grouped by employee, and org-wide activity feeds. All aggregations are calculated in-database for performance.",
  },
];

const stats = [
  { value: "60%", label: "Reduction in manual tracking" },
  { value: "10+", label: "Projects managed" },
  { value: "10+", label: "Active team members" },
];

const techStack = [
  { label: "React",        src: "/icons/react-2.svg" },
  { label: "TypeScript",   src: "/icons/typescript.svg" },
  { label: "Node.js",      src: "/icons/nodejs-3.svg" },
  { label: "MySQL",        src: "/icons/mysql.svg" },
  { label: "Tailwind CSS", src: "/icons/tailwind-css-1-2.svg" },
  { label: "Docker",       src: "/icons/docker.svg" },
];

function CaseStudy() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-0">
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ── Header ────────────────────────────────────────────────── */}
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-4">
          Featured Project
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 leading-none">
              TOTALTIMING
            </h2>
            <p className="mt-2.5 text-xl font-semibold text-slate-700">
              <span className="text-orange-500">Workforce Management</span> Platform
            </p>
            <p className="mt-1 text-sm text-slate-400 font-medium">
              Designed for Total Entreprenør AS · Live at totaltiming.app
            </p>
          </div>

          {/* Stats */}
          <div className="flex divide-x divide-slate-100 rounded-xl border border-slate-100 bg-white shadow-sm self-start sm:self-end">
            {stats.map((stat, i) => (
              <div key={i} className="px-5 py-3">
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-0.5 text-[11px] text-slate-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Description ───────────────────────────────────────────── */}
        <p className="mt-6 text-[15px] leading-relaxed text-slate-500 max-w-2xl">
          A production full-stack application built for a Norwegian construction firm. Employees log
          project hours and absences daily; accountants review monthly summaries; admins manage
          the entire workforce — all in one place.
        </p>

        {/* ── Features ──────────────────────────────────────────────── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 shadow-sm text-slate-600">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-slate-800 leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[12px] text-slate-500 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tech Stack ────────────────────────────────────────────── */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mr-1">
            Built with
          </span>
          {techStack.map((tech) => (
            <span
              key={tech.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200"
            >
              <img src={tech.src} alt={tech.label} className="h-4 w-4 object-contain" />
              <span className="text-[12px] font-medium text-slate-600">{tech.label}</span>
            </span>
          ))}
        </div>

        {/* ── Showcase Image ────────────────────────────────────────── */}
        <div className="mt-12">
          <img
            src="showcase-totaltiming.svg"
            alt="TOTALTIMING app showcase"
            className="w-full"
          />
        </div>
      </div>

      {/* Bottom gradient — fades into site dark bg */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[420px] bg-gradient-to-b from-transparent via-[#0f1f2c]/60 to-[#0d1b2a]" />
    </section>
  );
}

export default CaseStudy;
