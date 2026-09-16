import { motion } from "framer-motion";

const points = [
  {
    title: "SEO Blog Writing Service",
    text: "Human-written blogs built around search intent, keyword research, and topical relevance. Our human-led approach creates useful content that supports organic visibility and reader trust.",
    icon: "✍️",
  },
  {
    title: "Landing Page / Copywriting Service",
    text: "Turn visitors into leads with clear, persuasive landing page copy. We combine buyer intent, strong messaging, and conversion-focused structure without losing your brand voice.",
    icon: "📈",
  },
  {
    title: "Service Page Writing Service",
    text: "Build stronger service pages with relevant keywords, industry terms, and clear value. Each page explains your offer simply while guiding potential customers toward action.",
    icon: "💡",
  },
  {
    title: "B2B Content Writing Service",
    text: "Reach decision-makers with research-led B2B content. We create expert articles, thought leadership, and business guides that support authority, trust, and longer buyer journeys.",
    icon: "🤝",
  },
  {
    title: "E-commerce Content Writing Service",
    text: "Make product discovery easier with search-friendly e-commerce content. We blend buyer intent, product benefits, category relevance, and natural language to support visibility and sales.",
    icon: "🛒",
  },
  {
    title: "Product Descriptions Writing Service",
    text: "Give every product a clear reason to be chosen. Our product descriptions combine human-written copy, product details, search relevance, and persuasive benefits without sounding forced.",
    icon: "📝",
  },
  {
    title: "Case Studies Writing Service",
    text: "Show real business value through structured case studies. We turn client challenges, solutions, outcomes, and proof into credible stories that help prospects understand your expertise.",
    icon: "📊",
  },
  {
    title: "AI Content Humanization Service",
    text: "Have an AI-assisted content draft that feels generic? We refine it with human-led editing, natural voice, factual review, and editorial support while keeping the original intent intact.",
    icon: "✨",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function PainPoints() {
  return (
    <section
      id="painPoint"
      className="relative overflow-hidden bg-white py-24 md:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-50/60 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500">
            Our Content Services
          </span> */}

          <h1
  className="
    mx-auto
    mt-3
    max-w-5xl
    text-center
    text-4xl
    font-extrabold
    leading-[1.15]
    tracking-tight
    text-slate-800
    sm:text-4xl
    md:text-5xl
  "
>
  <span className="block">
    What Professional SEO Content
  </span>

  <span className="mt-1 block text-indigo-500">
    Writing Services Do We Offer?
  </span>
</h1>


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            From search-focused blogs to conversion-led pages, our content
            services match your audience, industry, and business intent.
          </p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              variants={card}
              whileHover={{
                y: -7,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="group relative min-h-[285px] overflow-hidden rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
            >
              {/* Soft hover background */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-cyan-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Number */}

                <div className="absolute right-0 top-0 text-xs font-bold text-indigo-100 transition-colors duration-300 group-hover:text-indigo-200">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}

                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xl shadow-sm"
                >
                  {item.icon}
                </motion.div>

                {/* Title */}

                <h3 className="max-w-[250px] text-lg font-bold leading-6 text-slate-800">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

                {/* Bottom indicator */}

                {/* <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-indigo-500">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div> */}

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA ================= */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/contact-us"
            className="group inline-flex items-center gap-2 rounded-full border border-indigo-500 bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-100 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200"
          >
            Start Your Project Now

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div> */}

      </div>
    </section>
  );
}