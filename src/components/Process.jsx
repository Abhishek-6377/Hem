import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  SearchCheck,
  PenLine,
  ShieldCheck,
  RefreshCcw,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Understand Your Brief",
    desc: "We study your audience, goals, brand voice, industry, and content requirements before writing a single line.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Research & Plan",
    desc: "We map search intent, keywords, SERPs, entities, competitors, and content gaps to shape the right content structure.",
    icon: SearchCheck,
  },
  {
    step: "03",
    title: "Write With Purpose",
    desc: "Our writers create clear, original content around your audience, buyer journey, expertise, and business message.",
    icon: PenLine,
  },
  {
    step: "04",
    title: "Edit & Fact-Check",
    desc: "Editors review accuracy, readability, brand voice, SEO elements, and factual details before the draft reaches you.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Refine & Deliver",
    desc: "We apply your feedback, make needed revisions, and deliver polished content ready for publishing, optimization, or conversion.",
    icon: RefreshCcw,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Sequentially activate each circle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]"
          >
            Our Process for Delivering
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Custom Content Writing Service
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            We turn your brief into researched, brand-aligned content that
            fits search intent, speaks to readers, and supports real business
            goals.
          </motion.p>
        </div>

        {/* ================= DESKTOP CIRCLE ================= */}

        <div className="relative mx-auto mt-20 hidden h-[720px] max-w-[1000px] lg:block">
          {/* Outer decorative circle */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100"
          />

          {/* Dashed circle */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200"
          />

          {/* Inner glow */}

          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/60 blur-2xl" />

          {/* ================= CENTER ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="absolute left-1/2 top-1/2 z-30 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-indigo-50 bg-white text-center shadow-2xl shadow-indigo-100"
          >
            {/* Animated ring */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute inset-[-12px] rounded-full border border-indigo-200"
            />

            <div className="relative">
              <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600"
              >
                <FileText size={25} />
              </motion.div>

              <span className="mt-4 block text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                Our Process
              </span>

              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">
                BRIEF TO
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  IMPACT
                </span>
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                Five steps. One clear goal.
              </p>
            </div>
          </motion.div>

          {/* ================= STEP 1 ================= */}

          <CircleCard
            step={steps[0]}
            active={activeStep === 0}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          />

          {/* ================= STEP 2 ================= */}

          <CircleCard
            step={steps[1]}
            active={activeStep === 1}
            className="absolute right-[1%] top-[180px]"
          />

          {/* ================= STEP 3 ================= */}

          <CircleCard
            step={steps[2]}
            active={activeStep === 2}
            className="absolute bottom-[25px] right-[13%]"
          />

          {/* ================= STEP 4 ================= */}

          <CircleCard
            step={steps[3]}
            active={activeStep === 3}
            className="absolute bottom-[25px] left-[13%]"
          />

          {/* ================= STEP 5 ================= */}

          <CircleCard
            step={steps[4]}
            active={activeStep === 4}
            className="absolute left-[1%] top-[180px]"
          />

          {/* ================= ANIMATED ARROWS ================= */}

          <CircleArrow
            Icon={ArrowDownRight}
            className="absolute right-[25%] top-[120px]"
            active={activeStep === 0}
          />

          <CircleArrow
            Icon={ArrowDownLeft}
            className="absolute bottom-[170px] right-[23%]"
            active={activeStep === 2}
          />

          <CircleArrow
            Icon={ArrowUpLeft}
            className="absolute bottom-[170px] left-[23%]"
            active={activeStep === 3}
          />

          <CircleArrow
            Icon={ArrowUpRight}
            className="absolute left-[25%] top-[120px]"
            active={activeStep === 4}
          />

          {/* ================= PROGRESS DOTS ================= */}

          <div className="absolute bottom-[-10px] left-1/2 flex -translate-x-1/2 items-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(index)}
                aria-label={`Go to step ${index + 1}`}
                className="group"
              >
                <motion.span
                  animate={{
                    width: activeStep === index ? 28 : 8,
                  }}
                  className={`block h-2 rounded-full transition-colors ${
                    activeStep === index
                      ? "bg-indigo-600"
                      : "bg-indigo-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="relative mx-auto mt-14 max-w-xl lg:hidden">
          {/* Vertical line */}

          <div className="absolute bottom-8 left-[28px] top-8 w-px bg-indigo-100" />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-5"
                >
                  {/* Icon */}

                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-white shadow-sm transition-all duration-500 ${
                      isActive
                        ? "border-indigo-300 text-indigo-600 shadow-lg shadow-indigo-100"
                        : "border-indigo-100 text-indigo-500"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </motion.div>

                  {/* Card */}

                  <motion.div
                    animate={{
                      y: isActive ? -3 : 0,
                      scale: isActive ? 1.01 : 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className={`flex-1 rounded-2xl border bg-white p-5 transition-all duration-500 ${
                      isActive
                        ? "border-indigo-200 shadow-xl shadow-indigo-100/60"
                        : "border-slate-200 shadow-sm"
                    }`}
                  >
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
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-sm text-slate-500">
            Ready to turn your brief into content that makes an impact?
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
   CIRCLE CARD
========================================= */

function CircleCard({ step, active, className }) {
  const Icon = step.icon;

  return (
    <motion.div
      animate={{
        scale: active ? 1.08 : 1,
        y: active ? -6 : 0,
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className={`${className} z-20 w-[245px]`}
    >
      <div
        className={`relative flex h-[245px] flex-col items-center justify-center rounded-full border bg-white px-8 text-center transition-all duration-500 ${
          active
            ? "border-blue-200 shadow-2xl shadow-indigo-200/70"
            : "border-blue-100 shadow-lg shadow-indigo-100/40"
        }`}
      >
        {/* Step Badge */}

        <motion.div
          animate={{
            scale: active ? 1.15 : 1,
          }}
          className={`absolute left-4 top-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-lg ${
            active
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-indigo-500"
          }`}
        >
          {step.step}
        </motion.div>

        {/* Icon */}

        <motion.div
          animate={{
            rotate: active ? [0, -8, 8, 0] : 0,
            scale: active ? 1.08 : 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            active
              ? "bg-indigo-100 text-indigo-600"
              : "bg-indigo-50 text-indigo-500"
          }`}
        >
          <Icon size={27} strokeWidth={1.8} />
        </motion.div>

        {/* Title */}

        <h3
          className={`mt-4 text-[15px] font-extrabold leading-snug ${
            active ? "text-indigo-700" : "text-slate-900"
          }`}
        >
          {step.title}
        </h3>

        {/* Description */}

        <p className="mt-2 text-[11px] leading-[1.45] text-slate-500">
          {step.desc}
        </p>

        {/* Active Glow */}

        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute inset-[-8px] -z-10 rounded-full border border-indigo-200"
          />
        )}
      </div>
    </motion.div>
  );
}

/* =========================================
   CIRCLE ARROW
========================================= */

function CircleArrow({ Icon, className, active }) {
  return (
    <motion.div
      animate={{
        scale: active ? [1, 1.25, 1] : 1,
        opacity: active ? 1 : 0.55,
      }}
      transition={{
        duration: 1,
        repeat: active ? Infinity : 0,
      }}
      className={`${className} z-10 flex h-10 w-10 items-center justify-center rounded-full text-indigo-400`}
    >
      <Icon size={32} strokeWidth={1.5} />
    </motion.div>
  );
}




// old and first version code 

// import { motion } from "framer-motion";
// import {
//   Search,
//   Lightbulb,
//   Palette,
//   Code2,
//   ShieldCheck,
//   Rocket,
// } from "lucide-react";

// const steps = [
//   {
//     step: "01",
//     title: "Discovery & Strategy",
//     desc: "We start by understanding your business, audience, goals, and the exact results your website needs to achieve.",
//     icon: Search,
//   },
//   {
//     step: "02",
//     title: "Content & Planning",
//     desc: "We organize your pages, messaging, content structure, and user journey so everything has a clear purpose.",
//     icon: Lightbulb,
//   },
//   {
//     step: "03",
//     title: "Design & Experience",
//     desc: "We create a modern visual direction with intuitive layouts that make your brand look professional and easy to explore.",
//     icon: Palette,
//   },
//   {
//     step: "04",
//     title: "Development",
//     desc: "Your website is built with clean, responsive, and scalable code for a smooth experience across every device.",
//     icon: Code2,
//   },
//   {
//     step: "05",
//     title: "Testing & Refinement",
//     desc: "We carefully test responsiveness, performance, functionality, content, and user experience before everything goes live.",
//     icon: ShieldCheck,
//   },
//   {
//     step: "06",
//     title: "Launch & Support",
//     desc: "Once everything is ready, we launch your website and remain available for improvements, updates, and ongoing support.",
//     icon: Rocket,
//   },
// ];

// export default function Process() {
//   return (
//     <section className="relative overflow-hidden bg-white py-24 md:py-28">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/70 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <motion.span
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4 }}
//             className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600"
//           >
//             How It Works
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.05 }}
//             className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl"
//           >
//             From First Idea{" "}
//             <span className="text-indigo-600">to Final Launch</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="mt-5 text-base leading-7 text-slate-600 md:text-lg"
//           >
//             A simple, collaborative process designed to keep your project
//             organized, transparent, and moving forward at every stage.
//           </motion.p>
//         </div>

//         {/* ================= DESKTOP PROCESS ================= */}
//         <div className="relative mx-auto mt-20 hidden h-[720px] max-w-[900px] lg:block">
//           {/* Circular line */}
//           <div className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-100" />

//           <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200" />

//           {/* Center Circle */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="absolute left-1/2 top-1/2 z-20 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-indigo-50 bg-white text-center shadow-xl shadow-indigo-100"
//           >
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
//                 Our Process
//               </span>

//               <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950">
//                 IDEA
//                 <br />
//                 <span className="text-indigo-600">TO IMPACT</span>
//               </h3>

//               <p className="mt-2 text-xs text-slate-500">
//                 Six steps. One clear goal.
//               </p>
//             </div>
//           </motion.div>

//           {/* Step 1 - Top */}
//           <ProcessCard
//             step={steps[0]}
//             className="absolute left-1/2 top-0 -translate-x-1/2"
//             delay={0}
//           />

//           {/* Step 2 - Top Right */}
//           <ProcessCard
//             step={steps[1]}
//             className="absolute right-[2%] top-[125px]"
//             delay={0.08}
//           />

//           {/* Step 3 - Bottom Right */}
//           <ProcessCard
//             step={steps[2]}
//             className="absolute bottom-[95px] right-[2%]"
//             delay={0.16}
//           />

//           {/* Step 4 - Bottom */}
//           <ProcessCard
//             step={steps[3]}
//             className="absolute bottom-0 left-1/2 -translate-x-1/2"
//             delay={0.24}
//           />

//           {/* Step 5 - Bottom Left */}
//           <ProcessCard
//             step={steps[4]}
//             className="absolute bottom-[95px] left-[2%]"
//             delay={0.32}
//           />

//           {/* Step 6 - Top Left */}
//           <ProcessCard
//             step={steps[5]}
//             className="absolute left-[2%] top-[125px]"
//             delay={0.4}
//           />
//         </div>

//         {/* ================= MOBILE / TABLET PROCESS ================= */}
//         <div className="relative mx-auto mt-14 max-w-2xl lg:hidden">
//           {/* Vertical line */}
//           <div className="absolute bottom-8 left-[27px] top-8 w-px bg-indigo-100" />

//           <div className="space-y-5">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.div
//                   key={step.step}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.45,
//                     delay: index * 0.07,
//                   }}
//                   className="relative flex gap-5"
//                 >
//                   {/* Number / icon */}
//                   <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-white text-indigo-600 shadow-sm">
//                     <Icon size={22} strokeWidth={1.8} />
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//                     <div className="flex items-center gap-2">
//                       <span className="text-xs font-extrabold text-indigo-600">
//                         {step.step}
//                       </span>

//                       <h3 className="text-base font-extrabold text-slate-900">
//                         {step.title}
//                       </h3>
//                     </div>

//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-16 text-center"
//         >
//           <p className="mb-5 text-sm text-slate-500">
//             Have an idea ready? Let’s turn it into something valuable.
//           </p>

//           <a
//             href="/contact"
//             className="inline-flex items-center rounded-full bg-indigo-600 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
//           >
//             Request for Quote
//             <span className="ml-2 text-lg">→</span>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* =========================================
//    DESKTOP PROCESS CARD
// ========================================= */

// function ProcessCard({ step, className, delay }) {
//   const Icon = step.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay }}
//       className={`${className} group z-10 w-[210px]`}
//     >
//       <div className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
//         {/* Step number */}
//         <div className="text-2xl font-extrabold text-indigo-600">
//           {step.step}
//         </div>

//         {/* Icon */}
//         <div className="mx-auto mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
//           <Icon size={21} strokeWidth={1.8} />
//         </div>

//         {/* Title */}
//         <h3 className="mt-3 text-sm font-extrabold leading-snug text-slate-900">
//           {step.title}
//         </h3>

//         {/* Description */}
//         <p className="mt-2 text-[11px] leading-4 text-slate-500">
//           {step.desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// }
