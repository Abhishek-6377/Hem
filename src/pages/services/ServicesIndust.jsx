import { motion } from "framer-motion";
import {
  Cloud,
  Smartphone,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Home,
  Scale,
  Plane,
  GraduationCap,
  Hotel,
  Megaphone,
  Factory,
  BriefcaseBusiness,
} from "lucide-react";

const industries = [
  {
    name: "SaaS & Technology",
    icon: Cloud,
    color: "bg-violet-50 text-violet-600",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
    description:
      "Clear, well-researched blog content for SaaS and technology businesses, tailored to technical audiences and search intent.",
  },
  {
    name: "E-commerce",
    icon: ShoppingBag,
    color: "bg-pink-50 text-pink-600",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85",
    description:
      "Engaging blog content that helps e-commerce brands educate shoppers, attract organic traffic, and support growth.",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    description:
      "Thoughtful healthcare blogs written with clear terminology, reliable research, and an audience-first approach.",
  },
  {
    name: "Finance",
    icon: Landmark,
    color: "bg-emerald-50 text-emerald-600",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=85",
    description:
      "Well-structured financial content that explains complex subjects clearly while supporting your content goals.",
  },
  {
    name: "Real Estate",
    icon: Home,
    color: "bg-amber-50 text-amber-600",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=85",
    description:
      "Useful real estate blogs covering properties, markets, services, and topics that matter to potential clients.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "bg-cyan-50 text-cyan-600",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85",
    description:
      "Helpful educational blogs, guides, and resources designed around learners, educators, and search intent.",
  },
  {
    name: "Travel",
    icon: Plane,
    color: "bg-sky-50 text-sky-600",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85",
    description:
      "Engaging travel content covering destinations, experiences, guides, and travel topics your audience wants to explore.",
  },
  {
    name: "Hospitality",
    icon: Hotel,
    color: "bg-orange-50 text-orange-600",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85",
    description:
      "Audience-focused blog content for hotels, resorts, restaurants, and hospitality brands.",
  },
  {
    name: "Legal",
    icon: Scale,
    color: "bg-indigo-50 text-indigo-600",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=85",
    description:
      "Clear legal content that turns complex subjects into useful, understandable information for your audience.",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "bg-fuchsia-50 text-fuchsia-600",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=85",
    description:
      "Research-led marketing blogs covering strategies, trends, campaigns, and topics relevant to modern businesses.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    color: "bg-slate-100 text-slate-600",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=800&q=85",
    description:
      "Industry-focused content that explains manufacturing processes, solutions, technologies, and business topics clearly.",
  },
  {
    name: "Professional Services",
    icon: BriefcaseBusiness,
    color: "bg-teal-50 text-teal-600",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=85",
    description:
      "Professional blog content for service-based businesses, built around expertise, audience needs, and business goals.",
  },
];

export default function ServicesIndusr() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-36"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-100/40 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />

      {/* Giant background typography */}
      <div
        className="
          pointer-events-none absolute
          -right-8 top-10
          select-none
          text-[90px] font-black
          leading-none
          tracking-[-0.08em]
          text-slate-100/80
          sm:text-[160px]
          md:text-[250px]
        "
      >
        03
      </div>

      <div
        className="
          pointer-events-none absolute
          bottom-[-35px] left-[-20px]
          select-none
          text-[60px] font-black
          uppercase
          leading-none
          tracking-[-0.07em]
          text-slate-100/70
          sm:text-[100px]
          md:text-[150px]
        "
      >
        INDUSTRIES
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-px w-40 bg-gradient-to-r from-transparent via-indigo-300 to-transparent md:block" />

      <div className="pointer-events-none absolute right-[13%] top-[18%] hidden h-40 w-px bg-gradient-to-b from-indigo-300/0 via-indigo-300 to-indigo-300/0 md:block" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute right-[17%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,.7)]" />

      <div className="pointer-events-none absolute right-[25%] top-[42%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:1s]" />

      <div className="pointer-events-none absolute left-[8%] bottom-[25%] h-2 w-2 animate-pulse rounded-full bg-purple-400 [animation-delay:2s]" />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

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
              Industries We Serve
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
            Affordable Blog Writing Services Across{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Diverse Industries
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 sm:mt-9 sm:text-lg sm:leading-8">
            From SaaS to healthcare, our blog writing service adapts to your
            industry, audience, terminology, and content goals without losing
            quality or clarity.
          </p>
        </motion.div>

        {/* ================= INDUSTRY GRID ================= */}

        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                }}
                className="
                  group
                  relative
                  h-[190px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-200
                  hover:shadow-xl
                "
              >
                {/* Hover Image */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-indigo-950/75
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Default Content */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    px-4
                    text-center
                    transition-all
                    duration-300
                    group-hover:scale-95
                    group-hover:opacity-0
                  "
                >
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-[20px] ${industry.color}`}
                  >
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[15px] font-extrabold text-slate-900">
                    {industry.name}
                  </h3>
                </div>

                {/* Hover Content */}
                <div
                  className="
                    absolute
                    inset-0
                    z-20
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-5
                    text-center
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-[15px] font-extrabold text-white">
                    {industry.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/85">
                    {industry.description}
                  </p>
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[28px]
            border
            border-indigo-100
            bg-gradient-to-br
            from-indigo-50
            via-white
            to-cyan-50
            px-6
            py-10
            text-center
            sm:px-10
            sm:py-12
          "
        >
          {/* CTA decoration */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h3
              className="
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.03em]
                text-slate-950
                sm:text-4xl
              "
            >
              Ready to Buy Blog Writing Service{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Without Second-Guessing?
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Hiring writers can feel risky when quality, reliability, and
              your brand reputation are involved. Start with a process you can
              actually trust.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-indigo-600
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-indigo-600/20
                transition-all
                duration-300
                hover:bg-indigo-700
                hover:shadow-xl
                hover:shadow-indigo-600/25
              "
            >
              Order Blog Content
              <span className="text-lg">→</span>
            </motion.a>
          </div>
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
