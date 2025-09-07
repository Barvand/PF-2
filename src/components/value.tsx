import { motion } from "framer-motion";

function ValueCards() {
  const items = [
    {
      n: "01",
      title: "We Communicate",
      short: "We clarify goals, design and purpose",
      more: "We map your goals, users and constraints into a clear problem statement, so everyone knows what success looks like.",
    },
    {
      n: "02",
      title: "We Work",
      short: "Design -> build -> iterate.",
      more: "We prototype quickly, validate early, and refine. You get visible progress with tight feedback loops. So we are able to deliver accurately.",
    },
    {
      n: "03",
      title: "We Grow",
      short: "Ship, learn, scale.",
      more: "We instrument analytics, learn from real usage, and scale what performs—without sacrificing quality.",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 sm:py-40 h-full">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-gray-200 py-5 my-5">
          What do we do?
        </h2>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={{
            hidden: { opacity: 0, x: 1 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5, // delay between cards
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          {items.map(({ n, title, short, more }) => (
            <motion.article
              key={n}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{ duration: 0.8 }}
              className="
                group relative h-56 overflow-hidden rounded-2xl project-card-image
                border border-white/10 bg-gradient-to-b from-gray-800 to-gray-900
                shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl
              "
            >
              {/* Watermark number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 z-0 select-none text-8xl font-black tracking-tighter text-white/5"
              >
                {n}
              </span>

              {/* Top content (always visible) */}
              <div className="relative z-10 flex h-full flex-col p-8">
                <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Step {n}
                </div>

                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{short}</p>

                {/* Divider + chevron aligned to bottom-left */}
                <div className="mt-auto flex items-center gap-3 pt-6">
                  <div className="h-px flex-1 bg-white/10" />
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                  >
                    <path
                      d="M5 12h14m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Slide-up panel (fixed height, appears from bottom) */}
              <div
                className="
                  absolute inset-x-0 bottom-0 z-20 translate-y-full h-full
                  border-t border-white/10 bg-gray-900/30 backdrop-blur
                  p-6 text-sm leading-6 text-zinc-200
                  transition-transform duration-500 ease-out
                  group-hover:translate-y-0
                "
              >
                {more}
              </div>

              {/* Subtle accent glow on hover (keeps style consistent) */}
              <div
                className="
                  pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl
                  transition-opacity duration-300 group-hover:opacity-100
                  bg-[radial-gradient(140px_120px_at_90%_15%,rgba(255,103,0,0.12),transparent_60%)]
                "
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ValueCards;
