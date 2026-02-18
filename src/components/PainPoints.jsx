import { motion } from "framer-motion";

const points = [
  {
    text: "Your website looks outdated",
    icon: "⚠️",
  },
  {
    text: "Low conversions and high bounce rate",
    icon: "📉",
  },
  {
    text: "No clear message or CTA",
    icon: "❌",
  },
  {
    text: "Poor mobile experience",
    icon: "📱",
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
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function PainPoints() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">

      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-transparent to-cyan-50/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          Facing These Problems?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600 text-lg"
        >
          Most businesses struggle because their website is not built for users.
        </motion.p>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-8"
        >
          {points.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-8 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-0 hover:opacity-100 transition" />

              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-3xl"
                >
                  {item.icon}
                </motion.div>

                <p className="text-lg text-slate-700 font-medium">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
