export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-36"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Large soft gradient */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-100/40 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />

      {/* Giant background typography */}
      <div
        className="
          pointer-events-none absolute
          -right-10 top-10
          select-none
          text-[100px] font-black
          leading-none
          tracking-[-0.08em]
          text-slate-100/80
          sm:text-[180px]
          md:text-[280px]
        "
      >
        01
      </div>

      <div
        className="
          pointer-events-none absolute
          bottom-[-40px] left-[-30px]
          select-none
          text-[70px] font-black
          uppercase
          tracking-[-0.06em]
          text-slate-100/70
          sm:text-[100px]
          md:text-[150px]
        "
      >
        Ideas
      </div>

      {/* ================= DECORATIVE LINES ================= */}

      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-px w-40 bg-gradient-to-r from-transparent via-indigo-300 to-transparent md:block" />

      <div className="pointer-events-none absolute right-[13%] top-[18%] hidden h-40 w-px bg-gradient-to-b from-indigo-300/0 via-indigo-300 to-indigo-300/0 md:block" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute right-[17%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,.7)]" />

      <div className="pointer-events-none absolute right-[25%] top-[42%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:1s]" />

      <div className="pointer-events-none absolute right-[8%] bottom-[25%] h-2 w-2 animate-pulse rounded-full bg-purple-400 [animation-delay:2s]" />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.75fr] lg:gap-6">

          {/* ================= LEFT ================= */}

          <div className="relative z-10 min-w-0 lg:max-w-[650px]">

            {/* Label */}
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
              <span className="h-px w-8 bg-indigo-600 sm:w-10" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:text-sm">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
  className="
    max-w-[600px]
    text-4xl
    font-bold
    leading-[1.05]
    tracking-[-0.04em]
    text-slate-950
    sm:text-5xl
    lg:text-[48px]
  "
>
  ContentVanta: Your Expert Content
  {/* <br /> */}

  <span className="relative inline-block">
    
    <span className="ml-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
      Writing Partner
    </span>

    {/* little underline */}
    <span className="absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-transform duration-700 hover:scale-x-100" />
  </span>
</h2>

            {/* Paragraph */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:mt-9 sm:text-lg sm:leading-8">
              ContentVanta brings experienced content writers and an expert content team together.
              We create human-led content backed by industry research and strong editorial quality.
              Every piece is shaped around your audience, goals, and brand voice.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Need content at scale? Our trusted writers can refine an AI-assisted draft or build content from scratch.
              A client-focused process, reliable delivery, and dedicated support keep every project moving smoothly.
            </p>

            {/* Bottom information */}
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5 sm:mt-10">

              <button
                className="
                  group
                  flex
                  items-center
                  gap-3
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                "
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
                    group-hover:translate-x-1
                    group-hover:bg-indigo-600
                  "
                >
                  →
                </span>

                <span className="border-b border-slate-300 pb-1 transition-colors group-hover:border-indigo-600">
                  Learn More About Us
                </span>
              </button>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              {/* <p className="text-sm text-slate-500">
                Strategy <span className="mx-2 text-indigo-400">•</span>
                Creativity <span className="mx-2 text-indigo-400">•</span>
                Technology
              </p> */}
            </div>
          </div>

          {/* ================= RIGHT EDITORIAL VISUAL ================= */}

          <div className="relative hidden min-h-[360px] w-full overflow-hidden md:block md:min-h-[400px] lg:min-h-[500px]">

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
                md:text-[140px]
                lg:text-[170px]
              "
            >
              CREATE
            </div>

            {/* Main flowing line */}
            <svg
              className="
                absolute
                left-0
                top-1/2
                h-[220px]
                w-full
                -translate-y-1/2
                overflow-visible
                sm:h-[260px]
                lg:h-[300px]
              "
              viewBox="0 0 600 300"
              fill="none"
            >
              <path
                d="
                  M20 210
                  C100 60, 160 260, 240 130
                  C310 15, 350 230, 430 115
                  C490 30, 530 130, 590 70
                "
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 12"
                className="animate-[dash_8s_linear_infinite]"
              />

              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="20"
                  y1="150"
                  x2="590"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366f1" stopOpacity="0" />
                  <stop offset=".3" stopColor="#6366f1" />
                  <stop offset=".7" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating keywords */}

            <span
              className="
                absolute
                left-[8%]
                top-[25%]
                rotate-[-8deg]
                text-xs
                font-medium
                text-slate-400
                animate-[float_5s_ease-in-out_infinite]
                sm:text-sm
              "
            >
              THINK
            </span>

            <span
              className="
                absolute
                right-[10%]
                top-[22%]
                rotate-[6deg]
                text-xs
                font-medium
                text-indigo-500
                animate-[float_6s_ease-in-out_infinite_1s]
                sm:text-sm
              "
            >
              WRITE
            </span>

            <span
              className="
                absolute
                bottom-[24%]
                left-[20%]
                rotate-[5deg]
                text-xs
                font-medium
                text-cyan-500
                animate-[float_5s_ease-in-out_infinite_2s]
                sm:text-sm
              "
            >
              BUILD
            </span>

            <span
              className="
                absolute
                bottom-[18%]
                right-[18%]
                rotate-[-5deg]
                text-xs
                font-medium
                text-slate-400
                animate-[float_7s_ease-in-out_infinite]
                sm:text-sm
              "
            >
              EVOLVE
            </span>

            {/* Small central circle */}
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

            {/* Tiny plus marks */}
            <span className="absolute left-[30%] top-[12%] text-xl font-light text-indigo-300 sm:text-2xl">
              +
            </span>

            <span className="absolute right-[30%] bottom-[12%] text-xl font-light text-cyan-300 sm:text-2xl">
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
              Ideas in motion
            </div>
          </div>
        </div>
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