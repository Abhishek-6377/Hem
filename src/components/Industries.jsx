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
  BriefcaseBusiness,
} from "lucide-react";

const industries = [
  {
    name: "SaaS",
    icon: Cloud,
    color: "bg-violet-50 text-violet-600",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
    description:
      "SEO blogs, website copy, product content, and educational resources for SaaS businesses and startups.",
  },
  {
    name: "Technology",
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    description:
      "Clear, engaging content for technology products, software platforms, and digital brands.",
  },
  {
    name: "E-commerce",
    icon: ShoppingBag,
    color: "bg-pink-50 text-pink-600",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85",
    description:
      "Search-friendly product content, category pages, and conversion-focused copy that supports online sales.",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    description:
      "Well-researched, easy-to-understand healthcare content that informs audiences and builds trust.",
  },
  {
    name: "Finance",
    icon: Landmark,
    color: "bg-emerald-50 text-emerald-600",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=85",
    description:
      "Professional financial content that explains complex topics clearly while supporting search visibility.",
  },
  {
    name: "Real Estate",
    icon: Home,
    color: "bg-amber-50 text-amber-600",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=85",
    description:
      "Property content, real estate blogs, service pages, and landing copy designed to attract potential buyers.",
  },
  {
    name: "Legal",
    icon: Scale,
    color: "bg-indigo-50 text-indigo-600",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=85",
    description:
      "Clear and informative legal content that makes complex topics easier for clients to understand.",
  },
  {
    name: "Travel",
    icon: Plane,
    color: "bg-sky-50 text-sky-600",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85",
    description:
      "Destination guides, travel blogs, and engaging content that inspires readers to explore new places.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "bg-cyan-50 text-cyan-600",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85",
    description:
      "Educational articles, guides, and resources created to make learning content useful and engaging.",
  },
  {
    name: "Hospitality",
    icon: Hotel,
    color: "bg-orange-50 text-orange-600",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85",
    description:
      "Hotel, resort, restaurant, and hospitality content that highlights experiences and encourages bookings.",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "bg-fuchsia-50 text-fuchsia-600",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=85",
    description:
      "SEO content, campaign copy, landing pages, and brand messaging that helps businesses get noticed.",
  },
  {
    name: "Consulting",
    icon: BriefcaseBusiness,
    color: "bg-teal-50 text-teal-600",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=85",
    description:
      "Research-led blogs, business guides, thought leadership, and website content for consulting firms.",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Soft Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Industries We Serve
            </span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Affordable Content Writing Services{" "}
            <span className="text-blue-600">for Every Industry</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Our content writing service adapts to your industry, audience,
            search intent, and business goals with relevant, well-researched
            content.
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
                {/* Hover Image */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-blue-950/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Default Card Content */}
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
}