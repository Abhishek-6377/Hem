import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your business, audience, goals, and the exact results your website needs to achieve.",
    icon: Search,
  },
  {
    step: "02",
    title: "Content & Planning",
    desc: "We organize your pages, messaging, content structure, and user journey so everything has a clear purpose.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Design & Experience",
    desc: "We create a modern visual direction with intuitive layouts that make your brand look professional and easy to explore.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    desc: "Your website is built with clean, responsive, and scalable code for a smooth experience across every device.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Testing & Refinement",
    desc: "We carefully test responsiveness, performance, functionality, content, and user experience before everything goes live.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch & Support",
    desc: "Once everything is ready, we launch your website and remain available for improvements, updates, and ongoing support.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600"
          >
            How It Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl"
          >
            From First Idea{" "}
            <span className="text-indigo-600">to Final Launch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base leading-7 text-slate-600 md:text-lg"
          >
            A simple, collaborative process designed to keep your project
            organized, transparent, and moving forward at every stage.
          </motion.p>
        </div>

        {/* ================= DESKTOP PROCESS ================= */}
        <div className="relative mx-auto mt-20 hidden h-[720px] max-w-[900px] lg:block">
          {/* Circular line */}
          <div className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-100" />

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200" />

          {/* Center Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 z-20 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-indigo-50 bg-white text-center shadow-xl shadow-indigo-100"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
                Our Process
              </span>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950">
                IDEA
                <br />
                <span className="text-indigo-600">TO IMPACT</span>
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                Six steps. One clear goal.
              </p>
            </div>
          </motion.div>

          {/* Step 1 - Top */}
          <ProcessCard
            step={steps[0]}
            className="absolute left-1/2 top-0 -translate-x-1/2"
            delay={0}
          />

          {/* Step 2 - Top Right */}
          <ProcessCard
            step={steps[1]}
            className="absolute right-[2%] top-[125px]"
            delay={0.08}
          />

          {/* Step 3 - Bottom Right */}
          <ProcessCard
            step={steps[2]}
            className="absolute bottom-[95px] right-[2%]"
            delay={0.16}
          />

          {/* Step 4 - Bottom */}
          <ProcessCard
            step={steps[3]}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            delay={0.24}
          />

          {/* Step 5 - Bottom Left */}
          <ProcessCard
            step={steps[4]}
            className="absolute bottom-[95px] left-[2%]"
            delay={0.32}
          />

          {/* Step 6 - Top Left */}
          <ProcessCard
            step={steps[5]}
            className="absolute left-[2%] top-[125px]"
            delay={0.4}
          />
        </div>

        {/* ================= MOBILE / TABLET PROCESS ================= */}
        <div className="relative mx-auto mt-14 max-w-2xl lg:hidden">
          {/* Vertical line */}
          <div className="absolute bottom-8 left-[27px] top-8 w-px bg-indigo-100" />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="relative flex gap-5"
                >
                  {/* Number / icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-white text-indigo-600 shadow-sm">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-indigo-600">
                        {step.step}
                      </span>

                      <h3 className="text-base font-extrabold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-sm text-slate-500">
            Have an idea ready? Let’s turn it into something valuable.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-indigo-600 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
          >
            Request for Quote
            <span className="ml-2 text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================
   DESKTOP PROCESS CARD
========================================= */

function ProcessCard({ step, className, delay }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${className} group z-10 w-[210px]`}
    >
      <div className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
        {/* Step number */}
        <div className="text-2xl font-extrabold text-indigo-600">
          {step.step}
        </div>

        {/* Icon */}
        <div className="mx-auto mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
          <Icon size={21} strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3 className="mt-3 text-sm font-extrabold leading-snug text-slate-900">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-[11px] leading-4 text-slate-500">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
