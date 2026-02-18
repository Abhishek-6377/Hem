import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-5xl font-bold leading-tight text-slate-900">
            Grow Your Business with  
            <span className="text-indigo-600"> High-Converting </span>
            Digital Solutions
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            We design, build and scale modern websites that attract,
            engage and convert real customers.
          </p>
           {/* FEATURES */}
          <div className="mt-8 space-y-4 text-slate-700">
            <div className="flex gap-3">
              <span className="text-indigo-500 font-bold">✓</span>
              <span><strong>100% Human-Crafted</strong> (Zero AI plagiarism)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-indigo-500 font-bold">✓</span>
              <span><strong>Keyword-Integrated</strong> (Not stuffed)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-indigo-500 font-bold">✓</span>
              <span><strong>Guaranteed Delivery</strong> (On time, every time)</span>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg">
              Get Started Today
            </button>

            <button className="px-8 py-3 rounded-full border border-indigo-500 text-indigo-600">
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Visual */}
        {/* <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <div className="h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-2xl"></div>
        </motion.div> */}
      </div>
    </section>
  );
}
