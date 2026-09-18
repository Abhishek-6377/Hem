import { motion } from "framer-motion";
import {
  UsersRound,
  Wallet,
  BadgeCheck,
  UserCheck,
  SearchCheck,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    title: "Vetted Writers",
    desc: "Work with carefully selected blog writers who understand research, search intent, industry terminology, and brand voice, not generic content templates.",
    icon: UsersRound,
  },
  {
    title: "Affordable Pricing",
    desc: "Get professional content at a practical, transparent price. Our flexible plans make a managed blog writing service easier to scale as your publishing needs grow.",
    icon: Wallet,
  },
  {
    title: "100% Unique",
    desc: "Every article is created specifically for your brand and audience. Content is 100% unique and plagiarism-free, with no recycled paragraphs or borrowed ideas.",
    icon: BadgeCheck,
  },
  {
    title: "Human Quality",
    desc: "Your content goes beyond raw AI output. Human editorial review checks clarity, accuracy, tone, grammar, originality, and whether each article genuinely serves the reader.",
    icon: UserCheck,
  },
  {
    title: "SEO Focused",
    desc: "From keyword mapping to internal linking and semantic relevance, we build articles around search intent, helping your content compete for organic traffic, not just keywords.",
    icon: SearchCheck,
  },
  {
    title: "Managed Delivery",
    desc: "No chasing writers or juggling revisions. Our managed workflow keeps briefs, writing, editing, revisions, and delivery organized so your publishing schedule stays moving.",
    icon: ClipboardCheck,
  },
];

export default function ServFeature() {
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

      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-[90px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100/40 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-[100px]" />

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
        04
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
        QUALITY
      </div>

      {/* ================= DECORATIVE LINES ================= */}

      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-px w-40 bg-gradient-to-r from-transparent via-indigo-300 to-transparent md:block" />

      <div className="pointer-events-none absolute left-[13%] top-[18%] hidden h-40 w-px bg-gradient-to-b from-indigo-300/0 via-indigo-300 to-indigo-300/0 md:block" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute left-[17%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,.7)]" />

      <div className="pointer-events-none absolute left-[25%] top-[43%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:1s]" />

      <div className="pointer-events-none absolute right-[10%] bottom-[25%] h-2 w-2 animate-pulse rounded-full bg-purple-400 [animation-delay:2s]" />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-4 sm:mb-8">
            <span className="h-px w-8 bg-indigo-600 sm:w-10" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:text-sm">
              Why ContentVanta
            </span>

            <span className="h-px w-8 bg-indigo-600 sm:w-10" />
          </div>

          {/* Heading */}
          <h2
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
            Why Businesses Buy Blog Writing Services From{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              ContentVanta
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:mt-9
              sm:text-lg
              sm:leading-8
            "
          >
            Get reliable content without the writer-search headache. Our
            outsourcing blog writing service combines vetted writers, SEO
            expertise, and managed delivery to support organic traffic and
            zero-click search visibility.
          </p>
        </motion.div>

        {/* ================= FEATURE GRID ================= */}

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-slate-200/80
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-200
                  hover:shadow-xl
                  hover:shadow-indigo-100/50
                  sm:p-8
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-indigo-50
                    opacity-0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:opacity-100
                  "
                />

                <div className="relative">

                  {/* Icon + Number */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-indigo-50
                        text-indigo-600
                        transition-all
                        duration-300
                        group-hover:bg-indigo-600
                        group-hover:text-white
                        group-hover:shadow-lg
                        group-hover:shadow-indigo-200
                      "
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span
                      className="
                        text-sm
                        font-bold
                        text-indigo-100
                        transition-colors
                        duration-300
                        group-hover:text-indigo-200
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3
                    className="
                      mt-6
                      text-xl
                      font-extrabold
                      leading-snug
                      text-slate-900
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      min-h-[126px]
                      text-[15px]
                      leading-7
                      text-slate-600
                    "
                  >
                    {feature.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className="
                      mt-6
                      h-1
                      w-10
                      rounded-full
                      bg-indigo-600
                      transition-all
                      duration-300
                      group-hover:w-20
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
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
            Let’s Work Together
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
