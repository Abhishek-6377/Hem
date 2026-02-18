import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Landing Page",
    desc: "High-converting landing page designed for startup growth.",
    tech: "React • Tailwind • SEO",
    price: "Starting from $499",
  },
  {
    title: "Business Website",
    desc: "Professional website to build trust and generate leads.",
    tech: "React • UI/UX • Fast Load",
    price: "Starting from $699",
  },
  {
    title: "E-commerce UI",
    desc: "Clean shopping experience focused on conversions.",
    tech: "React • Modern UI",
    price: "Starting from $899",
  },
];

export default function SampleWork() {
  return (
    <section id="work" className="py-28 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            Sample Work & Projects
          </h2>
          <p className="mt-4 text-slate-600">
            A glimpse of clean design, strong structure and real business focus.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-3 text-slate-600">{p.desc}</p>

              <p className="mt-4 text-sm text-indigo-600">{p.tech}</p>
              <p className="mt-2 font-medium text-slate-800">{p.price}</p>

              <button className="mt-6 text-indigo-600 font-semibold hover:underline">
                View Details →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl hover:scale-105 transition">
            View Full Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}
