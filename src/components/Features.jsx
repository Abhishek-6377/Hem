import { motion } from "framer-motion";
import {
  PenLine,
  Search,
  Zap,
  Target,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Content That Connects",
    desc: "I create clear, engaging content that speaks directly to your audience and makes your brand easier to understand, trust, and remember.",
    icon: PenLine,
  },
  {
    title: "SEO-Optimized Writing",
    desc: "Every piece is structured around search intent, relevant keywords, headings, and natural content flow to help your website attract organic traffic.",
    icon: Search,
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Get well-researched, polished content delivered on time without compromising quality, consistency, or the unique voice of your brand.",
    icon: Zap,
  },
  {
    title: "Conversion-Focused Copy",
    desc: "From landing pages to website copy, every word is written with a purpose—to keep visitors engaged and guide them toward taking action.",
    icon: Target,
  },
  {
    title: "Your Brand Voice",
    desc: "Your content should sound like your business. I adapt tone, style, and messaging so every article or page feels genuinely aligned with your brand.",
    icon: MessageSquareText,
  },
  {
    title: "Research You Can Trust",
    desc: "I dig into your industry, audience, and competitors before writing, creating useful and credible content that gives your readers real value.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-24 md:py-28">
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600"
          >
            Why Work With Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl"
          >
            More Than Just{" "}
            <span className="text-indigo-600">Good Writing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base leading-7 text-slate-600 md:text-lg"
          >
            Great content should do more than fill a page. It should build
            credibility, connect with your audience, improve visibility, and
            help your business grow.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 md:p-8"
              >
                {/* Hover background */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-200">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Heading */}
                  <h3 className="mt-6 text-xl font-extrabold leading-snug text-slate-900">
                    {feature.title}
                  </h3>

                  {/* Description - approx 3 to 3.5 lines */}
                  <p className="mt-3 min-h-[84px] text-[15px] leading-7 text-slate-600">
                    {feature.desc}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-1 w-10 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-sm text-slate-500">
            Ready to turn your ideas into content that works?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-indigo-600 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
          >
            Let’s Work Together
            <span className="ml-2 text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
