import { motion } from "framer-motion";
import {
  BadgeCheck,
  Mic2,
  Wallet,
  SearchCheck,
  UsersRound,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    title: "Get Consistent Quality",
    desc: "Every piece goes through editorial review and quality checks. You get clear, accurate, original content that supports search visibility without keyword stuffing.",
    icon: BadgeCheck,
  },
  {
    title: "Keep Your Brand Voice",
    desc: "Your content should sound like your brand. Our writers follow your tone, audience, messaging, and style for a consistent experience across every page.",
    icon: Mic2,
  },
  {
    title: "Stay Within Your Budget",
    desc: "Get professional content without unnecessary costs. Our budget-friendly approach gives you clear pricing, focused deliverables, and quality that fits your content goals.",
    icon: Wallet,
  },
  {
    title: "Build Authority With Research",
    desc: "Strong content starts with strong research. We use industry sources, relevant entities, search intent, and expert insights to create credible, useful content.",
    icon: SearchCheck,
  },
  {
    title: "Work With Vetted Writers",
    desc: "Skip unreliable writers and inconsistent drafts. Our vetted human writers bring relevant skills, human-led writing, and industry awareness to every assignment.",
    icon: UsersRound,
  },
  {
    title: "Request Easy Revisions",
    desc: "Need a change? Just tell us. Our revision process keeps your brief, feedback, and editorial goals aligned until the content feels right for your audience.",
    icon: RefreshCcw,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-24 md:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600"
          >
            Why Choose ContentVanta
          </motion.span> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Why Businesses Choose ContentVanta{" "}
            <span className="text-indigo-600">
              for High-Quality Content
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg"
          >
            Get researched, reviewed, brand-aligned content built around your
            business goals. Every feature is designed to solve a real content
            problem.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 md:p-8"
              >
                {/* Soft Hover Decoration */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-200">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <span className="absolute right-0 top-0 text-sm font-bold text-indigo-100 transition-colors duration-300 group-hover:text-indigo-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Heading */}
                  <h3 className="mt-6 text-xl font-extrabold leading-snug text-slate-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 min-h-[105px] text-[15px] leading-7 text-slate-600">
                    {feature.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-1 w-10 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          {/* <p className="mb-5 text-sm text-slate-500">
            Ready to get content that works for your business?
          </p> */}

          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-indigo-600 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
          >
            Let’s Work Together
            <span className="ml-2 text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}