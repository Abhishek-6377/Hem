import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">

      {/* soft glow */}
      <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-300/30 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-cyan-300/30 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          Ready to Build a Website That  
          <span className="text-indigo-600"> Grows Your Business?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Let’s turn your idea into a clean, professional and
          high-converting website designed to scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-12 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white font-semibold shadow-lg"
          >
            Get Free Consultation →
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="/services"
            className="px-12 py-4 rounded-full border border-indigo-300 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            View Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
