import { motion } from "framer-motion";

const features = [
  {
    title: "Custom Design",
    us: "Fully tailored design built for your brand",
    others: "Template-based layouts",
  },
  {
    title: "SEO-Friendly Structure",
    us: "Optimized structure for rankings",
    others: "Basic setup without optimization",
  },
  {
    title: "Clear CTAs",
    us: "Conversion-focused strategy",
    others: "Generic button placements",
  },
  {
    title: "Fast Performance",
    us: "Optimized loading & performance",
    others: "Unoptimized heavy pages",
  },
  {
    title: "Post-Launch Support",
    us: "Dedicated support after launch",
    others: "Limited or paid support",
  },
];

export default function Comparison() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-32 left-1/3 w-[420px] h-[420px] bg-indigo-300/30 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Why We’re <span className="text-indigo-600">Different</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            A smarter approach compared to the typical market offering.
          </p>
        </motion.div>

        {/* Comparison Rows */}
        <div className="space-y-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-3 gap-6 items-center bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              {/* Feature Title */}
              <div className="font-semibold text-slate-900 text-lg">
                {item.title}
              </div>

              {/* Us */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-indigo-700 text-sm font-medium">
                ✔ {item.us}
              </div>

              {/* Others */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-600 text-sm">
                ✖ {item.others}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}