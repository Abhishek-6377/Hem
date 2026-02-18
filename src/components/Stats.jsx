import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 rounded-2xl shadow"
          >
            <h3 className="text-4xl font-bold text-indigo-600">{s.value}</h3>
            <p className="mt-2 text-slate-700">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
