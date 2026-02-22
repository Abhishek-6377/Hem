import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    desc: "Modern, fast and conversion-focused websites that build trust and generate leads.",
    icon: "🌐",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages designed for ads, offers and campaigns.",
    icon: "🚀",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-friendly interfaces that give positive vibes and smooth experience.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    desc: "Search engine optimized structure and content to rank and get organic traffic.",
    icon: "📈",
  },
  {
    title: "Website Redesign",
    desc: "Upgrade your outdated website into a modern, professional digital asset.",
    icon: "🔄",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous support, updates and performance optimization for peace of mind.",
    icon: "🛠️",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Services() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-cyan-100/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Services That Drive <span className="text-indigo-600">Real Results</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Everything you need to build a strong online presence — designed for growth.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -12,
                rotateX: 5,
                rotateY: -5,
                scale: 1.04,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* animated glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-cyan-200 to-purple-200 opacity-0"
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl"
                >
                  {service.icon}
                </motion.div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {service.desc}
                </p>

                <motion.button
                  whileHover={{ x: 6 }}
                  className="mt-6 font-medium text-indigo-600"
                >
                  Learn More →
                </motion.button>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 text-center"
        >
          <motion.button
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="px-12 py-5 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white font-semibold shadow-xl"
          >
            Get Custom Quote
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}