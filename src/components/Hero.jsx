import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f2] pt-32 pb-24">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Decorative Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-300/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        {/* Small Label */}
        {/* <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          Content that makes your business stand out
        </motion.div> */}

        {/* Heading */}
<motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <h4 className="mx-auto max-w-6xl text-4xl font-bold leading-[1.08] tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
    
    {/* First Line */}
    <span className="block">
      Professional Content Writing Services
    </span>

    {/* Second Line */}
    {/* <span className="block">
      <span className="relative inline-block">
        Services
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="absolute bottom-[-4px] left-0 h-1.5 w-full rounded-full bg-lime-400 md:bottom-[-6px] md:h-2"
        />
      </span>{" "}
      That Build
    </span> */}

    {/* Third Line */}
    {/* <span className="block">
      Visibility, Trust, and Growth
    </span> */}

  </h4>
</motion.div>


        {/* Description */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            Is your content getting ignored? This can hurt your visibility. 
            It can also cost you leads. Our content writing services use vetted writers.

          </p>

          <p className="mt-2 text-lg leading-8 text-slate-600 md:text-xl">
            We also use expert editors and focus on industry knowledge. 
            Get clear, affordable, quality content with 0 grammar mistakes and 0% plagiarism. 
            Our content builds trust and helps improve search visibility.

          </p>
        </motion.div>

        {/* Feature Points */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-lime-300">
              ✓
            </span>
            Vetted Writers
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-lime-300">
              ✓
            </span>
            Original, Fact-Checked Content
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-lime-300">
              ✓
            </span>
            On-Time Delivery
          </div>
        </motion.div>

        {/* CTA — UNCHANGED */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg">
            Get Started Today
          </button>

          <button className="px-8 py-3 rounded-full border border-indigo-500 text-indigo-600">
            View Our Work
          </button>
        </motion.div>

        {/* Bottom Trust Text */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-sm text-slate-400"
        >
          Strategy • Creativity • Results
        </motion.p> */}
      </div>
    </section>
  );
}
