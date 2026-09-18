import { motion } from "framer-motion";

export default function ServHero() {
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

        {/* Heading */}
<motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <h4 className="mx-auto 
                max-w-6xl 
                text-4xl 
                font-bold 
                leading-[1.08] 
                tracking-tight 
                text-[#111111] 
                sm:text-5xl 
                md:text-4xl 
                lg:text-5xl 
                xl:text-6xl">
    Professional Blog Writing Services for
    {/* First Line */}
    <span className="block">
     Better Search Visibility 
    </span>

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
            Struggling to keep your blog consistent, useful, and visible in search? 
            Our blog writing services deliver human-written, high-quality content built around search intent and your audience. 
            
          </p>

          <p className="mt-2 text-lg leading-8 text-slate-600 md:text-xl">
            With expert writers, strong E-E-A-T, transparent processes, and budget-friendly options, 
            we help you build authority without compromising quality. 
            Build stronger search visibility with expert blog content for SMBs to enterprises.

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
            Original Research
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-lime-300">
              ✓
            </span>
            Human Quality Checks
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-lime-300">
              ✓
            </span>
            Plagiarism-Free Writing
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
            Request Free Quote
          </button>

          <button className="px-8 py-3 rounded-full border border-indigo-500 text-indigo-600">
            View Blog Samples
          </button>
        </motion.div>

        
      </div>
    </section>
  );
}
