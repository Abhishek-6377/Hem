import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    desc: "Modern, fast and conversion-focused websites that build trust and generate leads.",
    icon: "🌐",
    stat: "↑ 3x Leads",
    statDesc: "After redesign",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages designed for ads, offers and campaigns.",
    icon: "🚀",
    stat: "↑ 45% CVR",
    statDesc: "Conversion increase",
  },
  {
    title: "UI/UX Design",
    desc: "Clean, user-friendly interfaces that give positive vibes and smooth experience.",
    icon: "🎨",
    stat: "↓ 60% Bounce",
    statDesc: "Better engagement",
  },
  {
    title: "SEO Optimization",
    desc: "Search engine optimized structure and content to rank and get organic traffic.",
    icon: "📈",
    stat: "#1 Rankings",
    statDesc: "For key keywords",
  },
  {
    title: "Website Redesign",
    desc: "Upgrade your outdated website into a modern, professional digital asset.",
    icon: "🔄",
    stat: "↑ 150% Traffic",
    statDesc: "Post refresh",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous support, updates and performance optimization for peace of mind.",
    icon: "🛠️",
    stat: "99.9% Uptime",
    statDesc: "Guaranteed",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Services That Drive <span className="text-indigo-600">Real Results</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Strategy, design and performance — all working together.
          </p>
        </div>

        {/* 3D Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 perspective-[1200px]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative h-[300px]"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-4xl">{s.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-slate-600">
                    {s.desc}
                  </p>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-3xl p-8 shadow-xl
                             bg-gradient-to-br from-indigo-500 to-cyan-500
                             text-white flex flex-col justify-center items-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-3xl font-bold">{s.stat}</h3>
                  <p className="mt-2 opacity-90">{s.statDesc}</p>
                  <div className="mt-4 text-3xl">✨</div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <motion.button
            animate={{ scale: [1, 1.05, 1] }}
            whileHover={{ scale:1.13 }}
            // transition={{ duration: 3, repeat: Infinity }}
            className="px-12 py-5 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white font-semibold shadow-xl"
          >
            Get Custom Quote
          </motion.button>
        </div>

      </div>
    </section>
  );
}
