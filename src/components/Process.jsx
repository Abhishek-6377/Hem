import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We understand your business, goals and audience.",
  },
  {
    step: "02",
    title: "Design & Content",
    desc: "We create clean design and simple, convincing content.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Fast, responsive and scalable React development.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Final testing, launch and ongoing support.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Simple & Transparent Process
          </h2>
          <p className="mt-4 text-slate-600">
            No confusion. No hidden steps. Just clear progress.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <span className="text-indigo-500 font-bold">{step.step}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
