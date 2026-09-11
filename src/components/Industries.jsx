import { motion } from "framer-motion";
import {
  Smartphone,
  Cloud,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Home,
  GraduationCap,
  Plane,
  Megaphone,
  UserRound,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    name: "Technology",
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    description:
      "Clear, engaging content for technology products, platforms, and digital brands.",
  },
  {
    name: "SaaS & Startups",
    icon: Cloud,
    color: "bg-violet-50 text-violet-600",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
    description:
      "Website copy, product content, blogs, and messaging that help startups grow.",
  },
  {
    name: "E-Commerce",
    icon: ShoppingBag,
    color: "bg-pink-50 text-pink-600",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85",
    description:
      "Product descriptions and conversion-focused copy built to turn visitors into buyers.",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    description:
      "Easy-to-understand, informative content that builds trust with your audience.",
  },
  {
    name: "Finance",
    icon: Landmark,
    color: "bg-emerald-50 text-emerald-600",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=85",
    description:
      "Professional financial content that makes complex topics simple and useful.",
  },
  {
    name: "Real Estate",
    icon: Home,
    color: "bg-amber-50 text-amber-600",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=85",
    description:
      "Property descriptions, blogs, landing pages, and marketing content that sells.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "bg-cyan-50 text-cyan-600",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85",
    description:
      "Educational articles, resources, and content designed for better learning.",
  },
  {
    name: "Travel",
    icon: Plane,
    color: "bg-sky-50 text-sky-600",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85",
    description:
      "Destination guides and travel stories that inspire people to explore.",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "bg-orange-50 text-orange-600",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=85",
    description:
      "SEO content, campaigns, landing pages, and brand messaging that gets noticed.",
  },
  {
    name: "Personal Brands",
    icon: UserRound,
    color: "bg-indigo-50 text-indigo-600",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    description:
      "Thought leadership and personal-brand content that sounds authentically you.",
  },
  {
    name: "Agencies",
    icon: BriefcaseBusiness,
    color: "bg-slate-100 text-slate-700",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=85",
    description:
      "Reliable white-label content and client-ready copy for growing agencies.",
  },
  {
    name: "Lifestyle",
    icon: Sparkles,
    color: "bg-fuchsia-50 text-fuchsia-600",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=85",
    description:
      "Fresh lifestyle, culture, wellness, and creative content with personality.",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Industries I Write For
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"
          >
            Content That Fits{" "}
            <span className="text-blue-600">Your Industry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base leading-7 text-slate-600 sm:text-lg"
          >
            Every industry has its own audience, language, and goals. I create
            content that understands your business and speaks directly to the
            people you want to reach.
          </motion.p>
        </div>

        {/* Industry Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
                className="group relative h-[190px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Image revealed on hover */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Default Card */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center transition-all duration-300 group-hover:scale-95 group-hover:opacity-0">
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
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <p className="text-sm text-slate-500">
            Don’t see your industry? Let’s talk about your project.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
          >
            Start a Conversation
            <span className="ml-2 text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
