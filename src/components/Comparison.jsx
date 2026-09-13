import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  FileCheck2,
  Users,
  ShieldCheck,
  Search,
  PenLine,
  BadgeCheck,
  Target,
  Sparkles,
  Layers3,
  RefreshCw,
  Workflow,
  ScanSearch,
} from "lucide-react";

const features = [
  "Human-led Writing",
  "Industry Research",
  "Search Intent Mapping",
  "Brand Voice Matching",
  "Expert Editorial Review",
  "Fact Checking",
  "SEO Content Structure",
  "Original Content",
  "Buyer Intent Focus",
  "AI Content Humanization",
  "Entity & Topic Coverage",
  "Conversion-Focused Copy",
  "Revision Support",
  "Scalable Content Support",
  "Clear Content Workflow",
];

const iconMap = [
  PenLine,
  Search,
  Target,
  Sparkles,
  BadgeCheck,
  ShieldCheck,
  Layers3,
  FileCheck2,
  Target,
  Sparkles,
  ScanSearch,
  ArrowRight,
  RefreshCw,
  Users,
  Workflow,
];

const comparisonValues = [
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
];

const genericValues = [
  "Varies",
  "Varies",
  "Limited",
  "Varies",
  "Varies",
  "Varies",
  "Varies",
  "Yes",
  "Varies",
  "Limited",
  "Varies",
  "Varies",
  "Varies",
  "Yes",
  "Varies",
];

export default function Comparison() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        md:py-20
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-10
            h-[380px]
            w-[380px]
            rounded-full
            bg-indigo-100/40
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[380px]
            w-[380px]
            rounded-full
            bg-sky-100/30
            blur-[110px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-[1180px]
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            mx-auto
            mb-9
            max-w-3xl
            text-center
            md:mb-11
          "
        >
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-indigo-500
              sm:text-xs
            "
          >
            Why ContentVanta
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-800
              sm:text-4xl
              md:text-5xl
            "
          >
            Why ContentVanta Is Built Differently{" "}
            <span className="text-indigo-500">
              From Generic Content Services
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-xs
              leading-6
              text-slate-500
              sm:text-sm
              md:text-[15px]
            "
          >
            Good content needs more than words. We combine
            research, human expertise, SEO, brand voice, and
            careful editing in one focused workflow.
          </p>
        </motion.div>

        {/* ================= MAIN COMPARISON ================= */}

        <div
          className="
            grid
            items-start
            gap-6
            lg:grid-cols-[340px_1fr]
          "
        >

          {/* ================= LEFT CTA CARD ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-indigo-100
              bg-white
              shadow-[0_12px_35px_rgba(15,23,42,0.08)]
            "
          >

            {/* Header */}

            <div
              className="
                bg-gradient-to-br
                from-indigo-600
                to-indigo-500
                px-6
                py-6
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-indigo-100
                "
              >
                ContentVanta
              </span>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                  leading-tight
                  text-white
                "
              >
                Turn Better Content Into Better Growth 
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-white/85
                  sm:text-sm
                "
              >
                Get content that improves visibility, builds trust,
                and helps turn readers into customers.

              </p>
            </div>

            {/* Benefits */}

            <div className="space-y-5 px-6 py-6">

              <div className="flex gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-indigo-50
                    text-indigo-600
                  "
                >
                  <PenLine size={20} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    We'll delever
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    Expert-Led Content
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-indigo-50
                    text-indigo-600
                  "
                >
                  <Search size={20} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    You'll get
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    Intent-Focused Writing
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-indigo-50
                    text-indigo-600
                  "
                >
                  <BadgeCheck size={20} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Support across
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    Reliable Delivery
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-indigo-500
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-md
                  shadow-indigo-100
                  transition
                  hover:-translate-y-0.5
                  hover:bg-indigo-600
                  sm:text-sm
                "
              >
                Start Your Content Project

                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          {/* ================= COMPARISON ================= */}

          <div className="min-w-0">

            {/* Desktop Header */}

            <div
              className="
                mb-2.5
                hidden
                grid-cols-[1fr_100px_110px]
                gap-2
                px-4
                md:grid
              "
            >
              <div
                className="
                  flex
                  items-center
                  text-xs
                  font-semibold
                  text-slate-400
                "
              >
                Factor
              </div>

              <div
                className="
                  rounded-lg
                  bg-indigo-500
                  px-2
                  py-2
                  text-center
                  text-[10px]
                  font-bold
                  text-white
                "
              >
                ContentVanta
              </div>

              <div
                className="
                  rounded-lg
                  bg-slate-200
                  px-2
                  py-2
                  text-center
                  text-[10px]
                  font-bold
                  text-slate-600
                "
              >
                Generic Services
              </div>
            </div>

            {/* Scroll Container */}

            <div
              className="
                relative
                h-[440px]
                overflow-y-auto
                overflow-x-hidden
                pr-2

                scrollbar-thin
                scrollbar-track-slate-100
                scrollbar-thumb-indigo-400

                [&::-webkit-scrollbar]:w-[5px]
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-slate-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-indigo-400
              "
            >
              <div className="space-y-2">

                {features.map((feature, index) => {
                  const Icon = iconMap[index];

                  return (
                    <motion.div
                      key={feature}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.025,
                      }}
                      className="
                        group
                        rounded-xl
                        border
                        border-slate-100
                        bg-white
                        p-2.5
                        shadow-[0_4px_15px_rgba(15,23,42,0.045)]
                        transition
                        hover:border-indigo-100
                        hover:shadow-[0_6px_20px_rgba(15,23,42,0.07)]
                        sm:p-3
                      "
                    >

                      {/* ================= DESKTOP ================= */}

                      <div
                        className="
                          hidden
                          items-center
                          gap-2.5
                          md:grid
                          md:grid-cols-[1fr_100px_110px]
                        "
                      >

                        {/* Feature */}

                        <div
                          className="
                            flex
                            min-w-0
                            items-center
                            gap-2.5
                          "
                        >
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-indigo-50
                              text-indigo-500
                            "
                          >
                            <Icon size={17} />
                          </div>

                          <span
                            className="
                              text-xs
                              font-medium
                              text-slate-700
                              lg:text-[13px]
                            "
                          >
                            {feature}
                          </span>
                        </div>

                        {/* ContentVanta */}

                        <div
                          className="
                            flex
                            h-8
                            items-center
                            justify-center
                            rounded-md
                            bg-green-50
                          "
                        >
                          <span
                            className="
                              flex
                              items-center
                              gap-1
                              text-[10px]
                              font-bold
                              text-green-700
                            "
                          >
                            <Check
                              size={13}
                              strokeWidth={3}
                            />

                            {comparisonValues[index]}
                          </span>
                        </div>

                        {/* Generic */}

                        <div
                          className={`
                            flex
                            h-8
                            items-center
                            justify-center
                            rounded-md
                            ${
                              genericValues[index] ===
                              "Limited"
                                ? "bg-amber-50"
                                : "bg-slate-50"
                            }
                          `}
                        >
                          <span
                            className={`
                              flex
                              items-center
                              gap-1
                              text-[10px]
                              font-bold
                              ${
                                genericValues[index] ===
                                "Limited"
                                  ? "text-amber-600"
                                  : "text-slate-500"
                              }
                            `}
                          >
                            {genericValues[index] ===
                            "Limited" ? (
                              <X
                                size={13}
                                strokeWidth={3}
                              />
                            ) : (
                              <Check
                                size={13}
                                strokeWidth={3}
                              />
                            )}

                            {genericValues[index]}
                          </span>
                        </div>
                      </div>

                      {/* ================= MOBILE ================= */}

                      <div className="md:hidden">

                        <div
                          className="
                            mb-2.5
                            flex
                            items-center
                            gap-2.5
                          "
                        >
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-indigo-50
                              text-indigo-500
                            "
                          >
                            <Icon size={16} />
                          </div>

                          <span
                            className="
                              text-xs
                              font-semibold
                              text-slate-800
                            "
                          >
                            {feature}
                          </span>
                        </div>

                        <div
                          className="
                            grid
                            grid-cols-2
                            gap-2
                          "
                        >

                          {/* ContentVanta */}

                          <div
                            className="
                              flex
                              items-center
                              justify-center
                              gap-1.5
                              rounded-md
                              bg-green-50
                              py-1.5
                              text-[10px]
                              font-bold
                              text-green-700
                            "
                          >
                            <Check
                              size={13}
                              strokeWidth={3}
                            />

                            ContentVanta
                          </div>

                          {/* Generic */}

                          <div
                            className={`
                              flex
                              items-center
                              justify-center
                              gap-1.5
                              rounded-md
                              py-1.5
                              text-[10px]
                              font-bold
                              ${
                                genericValues[index] ===
                                "Limited"
                                  ? "bg-amber-50 text-amber-600"
                                  : "bg-slate-50 text-slate-500"
                              }
                            `}
                          >
                            {genericValues[index] ===
                            "Limited" ? (
                              <X
                                size={13}
                                strokeWidth={3}
                              />
                            ) : (
                              <Check
                                size={13}
                                strokeWidth={3}
                              />
                            )}

                            {genericValues[index]}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  );
                })}

              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TRUST STRIP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-4xl
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-2.5
            text-center
            text-xs
            text-slate-500
          "
        >

          <span className="flex items-center gap-1.5">
            <Check
              className="text-green-600"
              size={15}
            />
            Human Written
          </span>

          <span className="flex items-center gap-1.5">
            <Check
              className="text-green-600"
              size={15}
            />
            Expert Researched
          </span>

          <span className="flex items-center gap-1.5">
            <Check
              className="text-green-600"
              size={15}
            />
            SEO Focused
          </span>

          <span className="flex items-center gap-1.5">
            <Check
              className="text-green-600"
              size={15}
            />
            Brand Aligned
          </span>

          <span className="flex items-center gap-1.5">
            <Check
              className="text-green-600"
              size={15}
            />
            Editorially Reviewed
          </span>

        </motion.div>
      </div>
    </section>
  );
}
