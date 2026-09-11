import { motion } from "framer-motion";

const points = [
  {
    title: "Your Content Feels Outdated",
    text: "Refresh your website content with clear, modern, and engaging copy that keeps your brand relevant.",
    icon: "✍️",
  },
  {
    title: "Low Engagement & Conversions",
    text: "Turn passive readers into potential customers with persuasive content designed to drive action.",
    icon: "📈",
  },
  {
    title: "No Clear Brand Message",
    text: "Communicate your value clearly with content that gives your audience a reason to trust your business.",
    icon: "💡",
  },
  {
    title: "Weak Website Copy",
    text: "Replace generic website text with strategic copy that speaks directly to your target audience.",
    icon: "📝",
  },
  {
    title: "Poor SEO Visibility",
    text: "Create search-friendly content that improves your online visibility while keeping your content natural and engaging.",
    icon: "🔍",
  },
  {
    title: "Inconsistent Brand Voice",
    text: "Build a consistent tone and voice across your website, blogs, social media, and marketing content.",
    icon: "🎯",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Empower Your Brand With
            <br />
            Content You Can Trust
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Great content does more than fill a page. It builds trust,
            communicates your value, and turns visitors into customers.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="group relative min-h-[185px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
            >
              {/* Subtle hover background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/70 via-transparent to-cyan-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg"
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/contact-us"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-500 bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200"
          >
            Start Your Project Now

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
