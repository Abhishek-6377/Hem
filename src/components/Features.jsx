import { motion } from "framer-motion";

const features = [
  {
    title: "User-First Design",
    desc: "Every layout is crafted to feel easy, clean and natural for users.",
    icon: "✨",
  },
  {
    title: "SEO-Ready Structure",
    desc: "Built with proper headings, content flow and internal linking.",
    icon: "🔍",
  },
  {
    title: "Fast & Responsive",
    desc: "Optimized for speed and perfect experience on all devices.",
    icon: "⚡",
  },
  {
    title: "Conversion Focused",
    desc: "Clear CTAs and sections designed to convert visitors into leads.",
    icon: "🎯",
  },
  {
    title: "Scalable Code",
    desc: "Clean React structure that grows with your business.",
    icon: "🧩",
  },
  {
    title: "Support & Guidance",
    desc: "We guide you step-by-step, even after the website is live.",
    icon: "🤝",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Clients Choose Us
          </h2>
          <p className="mt-4 text-slate-600">
            Not just a website — a complete digital experience designed for growth.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-3 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full bg-indigo-600 text-white shadow-lg hover:scale-105 transition">
            See How We Work
          </button>
        </div>
      </div>
    </section>
  );
}
