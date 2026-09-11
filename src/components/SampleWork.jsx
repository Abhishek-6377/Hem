import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Blog",
    category: "SaaS & Technology",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    desc: "A detailed, easy-to-read SaaS article written to explain a complex product while keeping readers engaged. The content combines research, SEO structure, and a natural brand voice to educate users and build product trust.",
    tags: ["2,000+ Words", "100% Original", "SEO Ready"],
  },
  {
    title: "Healthcare Article",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    desc: "Patient-friendly healthcare content that turns complicated information into simple, useful explanations. The article focuses on clarity, credibility, and an approachable tone without making the subject feel overly technical.",
    tags: ["1,800+ Words", "Well Researched", "Reader Friendly"],
  },
  {
    title: "FinTech Guide",
    category: "Finance & FinTech",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
    desc: "A long-form financial guide created to make a complex topic easier for everyday readers to understand. It combines structured research, clear explanations, and SEO-focused formatting for better visibility and engagement.",
    tags: ["2,500+ Words", "Expert Research", "SEO Focused"],
  },
  {
    title: "E-Commerce Copy",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    desc: "Conversion-focused product content designed to highlight benefits instead of simply listing features. The copy uses clear language, persuasive messaging, and customer-focused positioning to encourage confident buying decisions.",
    tags: ["Conversion Copy", "Original Content", "Brand Voice"],
  },
  {
    title: "Travel Guide",
    category: "Travel & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    desc: "An engaging destination guide written to inspire readers while giving them practical information they can actually use. The content blends storytelling, useful recommendations, and search-friendly structure in one experience.",
    tags: ["2,000+ Words", "Human Written", "SEO Optimized"],
  },
  {
    title: "Personal Brand Article",
    category: "Personal Branding",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    desc: "A thought-leadership article created around a personal brand's expertise, opinions, and unique perspective. The writing keeps the personality authentic while positioning the individual as knowledgeable and trustworthy in their field.",
    tags: ["Thought Leadership", "Unique Voice", "Original Copy"],
  },
];

export default function SampleWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white py-24 md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600"
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl"
          >
            Words That{" "}
            <span className="text-indigo-600">Do the Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base leading-7 text-slate-600 md:text-lg"
          >
            A few examples of the kind of content I create for brands,
            businesses, and growing online audiences.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-extrabold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[108px] text-[15px] leading-7 text-slate-600">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold text-indigo-600 transition-colors duration-300 group-hover:border-indigo-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <button className="inline-flex items-center text-sm font-bold text-indigo-600 transition-all duration-300 group-hover:gap-2">
                    Read Sample
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-sm text-slate-500">
            Want content like this for your business?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-indigo-600 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl"
          >
            Start Your Project
            <span className="ml-2 text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
