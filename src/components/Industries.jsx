import { motion } from "framer-motion";

const industries = [
  "Startups & SaaS",
  "E-Commerce Brands",
  "Real Estate",
  "Coaches & Consultants",
  "Local Businesses",
  "Agencies",
  "Education",
  "Healthcare",
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-slate-900">
          Industries We Work With
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Our flexible design and development approach fits multiple industries and business models.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-slate-800">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="px-8 py-3 rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition">
            See Industry Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
