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
    title: "Share Your Brief",
    desc: "Share your topic, audience, keywords, goals, brand voice, and content requirements with our team.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Plan The Content",
    desc: "We map search intent, keywords, entities, content gaps, and article structure before writing begins.",
    icon: SearchCheck,
  },
  {
    step: "03",
    title: "Write The Article",
    desc: "A vetted writer creates original, human-written content aligned with your industry, audience, and SEO objectives.",
    icon: PenLine,
  },
  {
    step: "04",
    title: "Edit And Refine",
    desc: "Our editorial review checks grammar, accuracy, readability, originality, tone, and SEO before delivery.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Review and Deliver",
    desc: "You receive the final blog with revisions handled, quality checked, and prepared for your publishing workflow.",
    icon: RefreshCcw,
  },
];

export default function ServProcess() {
  const [activeStep, setActiveStep] = useState(0);

  // Sequentially activate each step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        md:py-36
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-[90px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-100/40 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-100/40 blur-[100px] sm:h-[400px] sm:w-[400px]" />

      {/* Giant background typography */}
      <div
        className="
          pointer-events-none
          absolute
          -right-8
          top-8
          select-none
          text-[90px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-slate-100/80
          sm:text-[160px]
          md:text-[250px]
        "
      >
        05
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-[-20px]
          select-none
          text-[65px]
          font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-slate-100/70
          sm:text-[100px]
          md:text-[150px]
        "
      >
        PROCESS
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-px w-40 bg-gradient-to-r from-transparent via-indigo-300 to-transparent md:block" />

      <div className="pointer-events-none absolute right-[13%] top-[18%] hidden h-40 w-px bg-gradient-to-b from-indigo-300/0 via-indigo-300 to-indigo-300/0 md:block" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute right-[17%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,.7)]" />

      <div className="pointer-events-none absolute right-[25%] top-[42%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:1s]" />

      <div className="pointer-events-none absolute left-[10%] bottom-[25%] h-2 w-2 animate-pulse rounded-full bg-purple-400 [animation-delay:2s]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-4 sm:mb-8"
          >
            <span className="h-px w-8 bg-indigo-600 sm:w-10" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:text-sm">
              Our Process
            </span>

            <span className="h-px w-8 bg-indigo-600 sm:w-10" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-slate-950
              sm:text-5xl
              md:text-5xl
            "
          >
            Our Process When You Hire{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Blog Writers
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mt-6
              text-2xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-3xl
            "
          >
            From Brief to Blog
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Clear briefs. Skilled writers. Careful editing. Our streamlined
            process turns your ideas into search-focused, publication-ready
            blog content.
          </motion.p>
        </div>

        {/* ================= DESKTOP CIRCLE ================= */}

        <div className="relative mx-auto mt-16 hidden h-[720px] max-w-[1000px] lg:block">
          {/* Outer decorative circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[590px]
              w-[590px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-indigo-100
            "
          />

          {/* Dashed circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[510px]
              w-[510px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-cyan-200
            "
          />

          {/* Inner glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-indigo-50/60
              blur-2xl
            "
          />

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
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              flex
              h-56
              w-56
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-[8px]
              border-indigo-50
              bg-white
              text-center
              shadow-2xl
              shadow-indigo-100
            "
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
              className="
                absolute
                inset-[-12px]
                rounded-full
                border
                border-indigo-200
              "
            />

            <div className="relative">
              <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <FileText size={25} />
              </motion.div>

              <span
                className="
                  mt-4
                  block
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-indigo-500
                "
              >
                Our Process
              </span>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                  leading-tight
                  text-slate-900
                "
              >
                FROM BRIEF
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  TO BLOG
                </span>
              </h3>
            </div>
          </motion.div>

          {/* ================= STEP CARDS ================= */}

          <CircleCard
            step={steps[0]}
            active={activeStep === 0}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          />

          <CircleCard
            step={steps[1]}
            active={activeStep === 1}
            className="absolute right-[1%] top-[180px]"
          />

          <CircleCard
            step={steps[2]}
            active={activeStep === 2}
            className="absolute bottom-[25px] right-[13%]"
          />

          <CircleCard
            step={steps[3]}
            active={activeStep === 3}
            className="absolute bottom-[25px] left-[13%]"
          />

          <CircleCard
            step={steps[4]}
            active={activeStep === 4}
            className="absolute left-[1%] top-[180px]"
          />

          {/* ================= ARROWS ================= */}

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
          className="mt-16 text-center sm:mt-20"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-indigo-600
              px-8
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-indigo-200
              transition-all
              duration-300
              hover:bg-indigo-700
              hover:shadow-xl
            "
          >
            Start Your Project
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -200;
          }
        }
      `}</style>
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
            ? "border-indigo-200 shadow-2xl shadow-indigo-200/70"
            : "border-indigo-100 shadow-lg shadow-indigo-100/40"
        }`}
      >
        {/* Step Badge */}
        <motion.div
          animate={{
            scale: active ? 1.15 : 1,
          }}
          className={`absolute left-4 top-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-lg ${
            active
              ? "bg-gradient-to-br from-indigo-500 to-blue-600"
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
            className="
              pointer-events-none
              absolute
              inset-[-8px]
              -z-10
              rounded-full
              border
              border-indigo-200
            "
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
