import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Live Support" },
];

export default function WhyHire() {
  return (
    <section
      id="why-hire"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-36"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-[90px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100/40 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      {/* Giant background typography */}
      <div
        className="
          pointer-events-none absolute
          -left-8 top-10
          select-none
          text-[90px] font-black
          leading-none
          tracking-[-0.08em]
          text-slate-100/80
          sm:text-[160px]
          md:text-[250px]
        "
      >
        02
      </div>

      <div
        className="
          pointer-events-none absolute
          bottom-[-30px] right-[-20px]
          select-none
          text-[65px] font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-slate-100/70
          sm:text-[100px]
          md:text-[150px]
        "
      >
        GROW
      </div>

      {/* ================= DECORATIVE LINES ================= */}

      <div className="pointer-events-none absolute left-[8%] top-[22%] hidden h-px w-40 bg-gradient-to-r from-transparent via-indigo-300 to-transparent md:block" />

      <div className="pointer-events-none absolute left-[13%] top-[22%] hidden h-40 w-px bg-gradient-to-b from-indigo-300/0 via-indigo-300 to-indigo-300/0 md:block" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute left-[17%] top-[31%] h-2 w-2 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,.7)]" />

      <div className="pointer-events-none absolute left-[27%] top-[48%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:1s]" />

      <div className="pointer-events-none absolute right-[12%] bottom-[28%] h-2 w-2 animate-pulse rounded-full bg-purple-400 [animation-delay:2s]" />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 min-w-0 lg:max-w-[680px]"
          >
            {/* Label */}
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
              <span className="h-px w-8 bg-indigo-600 sm:w-10" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:text-sm">
                Why Hire Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[650px]
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-slate-950
                sm:text-5xl
                md:text-5xl
              "
            >
              Why Hire Professional Blog Writers for Your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Business?
                </span>

                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-transform duration-700 hover:scale-x-100" />
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:mt-9 sm:text-lg sm:leading-8">
              A blog should do more than fill your website. It should answer
              real questions, support SEO, and build authority with the people
              you want to reach.
            </p>

            {/* Main content */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              With managed blog writing services, ContentVanta helps businesses
              hire blog writers who deliver high-quality, human-written,
              100% unique content with revisions, consistent brand voice, and
              a process built for a demanding USA-targeted audience.
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <motion.a
                href="/contact"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 font-semibold text-slate-950"
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-700
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-indigo-600
                  "
                >
                  <ArrowRight className="h-4 w-4" />
                </span>

                <span className="border-b border-slate-300 pb-1 transition-colors group-hover:border-indigo-600">
                  Hire Vetted Blog Writers
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden min-h-[420px] w-full overflow-hidden md:block lg:min-h-[520px]"
          >
            {/* Giant background word */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                select-none
                whitespace-nowrap
                text-[70px]
                font-black
                uppercase
                leading-none
                tracking-[-0.08em]
                text-slate-100
                sm:text-[100px]
                md:text-[135px]
                lg:text-[165px]
              "
            >
              GROTH
            </div>

            {/* Main flowing line */}
            <svg
              className="
                absolute
                left-0
                top-1/2
                h-[240px]
                w-full
                -translate-y-1/2
                overflow-visible
                sm:h-[280px]
                lg:h-[320px]
              "
              viewBox="0 0 600 320"
              fill="none"
            >
              <path
                d="
                  M10 220
                  C80 80, 145 275, 220 145
                  C290 25, 350 245, 420 125
                  C485 35, 530 145, 595 75
                "
                stroke="url(#whyHireGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 12"
                className="animate-[dash_8s_linear_infinite]"
              />

              <defs>
                <linearGradient
                  id="whyHireGradient"
                  x1="10"
                  y1="160"
                  x2="595"
                  y2="110"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    stopColor="#6366f1"
                    stopOpacity="0"
                  />

                  <stop
                    offset=".3"
                    stopColor="#6366f1"
                  />

                  <stop
                    offset=".7"
                    stopColor="#3b82f6"
                  />

                  <stop
                    offset="1"
                    stopColor="#06b6d4"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating keywords */}

            <span
              className="
                absolute
                left-[7%]
                top-[23%]
                rotate-[-8deg]
                text-xs
                font-medium
                text-slate-400
                animate-[float_5s_ease-in-out_infinite]
                sm:text-sm
              "
            >
              SEO
            </span>

            <span
              className="
                absolute
                right-[10%]
                top-[20%]
                rotate-[6deg]
                text-xs
                font-medium
                text-indigo-500
                animate-[float_6s_ease-in-out_infinite_1s]
                sm:text-sm
              "
            >
              AUTHORITY
            </span>

            <span
              className="
                absolute
                bottom-[24%]
                left-[17%]
                rotate-[5deg]
                text-xs
                font-medium
                text-cyan-500
                animate-[float_5s_ease-in-out_infinite_2s]
                sm:text-sm
              "
            >
              TRAFFIC
            </span>

            <span
              className="
                absolute
                bottom-[17%]
                right-[15%]
                rotate-[-5deg]
                text-xs
                font-medium
                text-slate-400
                animate-[float_7s_ease-in-out_infinite]
                sm:text-sm
              "
            >
              GROWTH
            </span>

            {/* Central circle */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-indigo-200
                bg-white/70
                shadow-[0_15px_50px_rgba(79,70,229,.15)]
                backdrop-blur-sm
                sm:h-20
                sm:w-20
              "
            >
              <div
                className="
                  absolute
                  inset-2
                  animate-pulse
                  rounded-full
                  bg-gradient-to-br
                  from-indigo-500
                  to-cyan-400
                  opacity-90
                  sm:inset-3
                "
              />
            </div>

            {/* Plus marks */}
            <span className="absolute left-[28%] top-[10%] text-xl font-light text-indigo-300 sm:text-2xl">
              +
            </span>

            <span className="absolute right-[28%] bottom-[10%] text-xl font-light text-cyan-300 sm:text-2xl">
              +
            </span>

            {/* Vertical text */}
            <div
              className="
                absolute
                right-0
                top-1/2
                hidden
                -translate-y-1/2
                rotate-90
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.4em]
                text-slate-300
                md:block
              "
            >
              Content that performs
            </div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            relative
            mt-16
            grid
            grid-cols-2
            gap-4
            sm:mt-20
            sm:gap-6
            md:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-indigo-100/60
                bg-gradient-to-br
                from-indigo-50
                to-cyan-50
                p-6
                text-center
                shadow-[0_10px_35px_rgba(79,70,229,.06)]
                transition-all
                duration-300
                hover:border-indigo-200
                hover:shadow-[0_15px_40px_rgba(79,70,229,.12)]
                sm:p-8
              "
            >
              {/* Hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-indigo-200/30
                  blur-2xl
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative">
                <h3 className="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-700 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
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