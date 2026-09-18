import { useState } from "react";

const faqs = [
  {
    q: "How can I hire professional blog writers for my business?",
    a: "You can hire professional blog writers through ContentVanta with a managed workflow covering research, writing, editing, SEO, revisions, and final delivery.",
  },
  {
    q: "Are your SEO blog writing services suitable for every industry?",
    a: "Yes. Our writers can create industry-specific blogs for SaaS, healthcare, finance, real estate, e-commerce, technology, education, travel, and other business niches.",
  },
  {
    q: "Can you humanize AI-generated blog content without rewriting everything?",
    a: "Yes. We can refine AI-generated drafts by improving tone, flow, clarity, originality, structure, and factual accuracy while preserving useful ideas.",
  },
  {
    q: "What makes your professional blog writing service different?",
    a: "We combine vetted writers, search-intent research, human editorial review, brand voice alignment, original content, and a managed delivery process instead of simply producing drafts.",
  },
  {
    q: "Can I buy blog writing services for long-form SEO content?",
    a: "Yes. We create long-form blog articles based on topic depth, search intent, audience needs, internal linking opportunities, and your broader content strategy.",
  },
  {
    q: "How do your blog writing services handle AI-assisted content?",
    a: "AI may support research or workflow tasks where appropriate, but the finished content receives human oversight for accuracy, readability, originality, context, and brand fit.",
  },
  {
    q: "Are professional blog writing services worth the investment?",
    a: "They can be valuable when consistent publishing is difficult internally. Expert content can save production time while supporting organic visibility, topical authority, and audience trust.",
  },
  {
    q: "Can I outsource blog writing for a growing content team?",
    a: "Yes. Outsourcing can help businesses increase publishing capacity without managing every writer, brief, revision, editorial check, and delivery step themselves.",
  },
  {
    q: "Do your blog writing services include keyword and search-intent research?",
    a: "Yes. Content can be planned around relevant keywords, semantic entities, search intent, content gaps, reader questions, and opportunities across traditional and AI-powered search.",
  },
  {
    q: "Can I get high-quality blog writing services with regular revisions?",
    a: "Yes. Content goes through quality checks before delivery, and revisions can be handled according to your agreed requirements, helping the final article match your expectations.",
  },
];

export default function ServFAQ() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 sm:py-24 md:py-32">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Common Questions About Our{" "}
            <span className="text-indigo-600">
              Expert Blog Writing Service
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Choosing a blog writing service is not just about getting words
            on a page. These answers cover quality, SEO, AI humanization,
            industry expertise, content types, and what businesses should
            realistically expect.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mx-auto mt-14 w-full max-w-6xl space-y-4">

          {faqs.map((f, i) => {

            const isOpen = open === i;

            return (

              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-100 shadow-lg"
                    : "border-slate-100 shadow-sm hover:shadow-md"
                }`}
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  className="w-full cursor-pointer p-5 text-left sm:p-6"
                >

                  <div className="flex items-center justify-between gap-6">

                    <div className="flex items-start gap-4">

                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
                        {i + 1}
                      </span>

                      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                        {f.q}
                      </h3>

                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium transition-all duration-300 ${
                        isOpen
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-5 pb-6 sm:px-6">

                      <div className="mb-5 h-px bg-slate-100" />

                      <p className="pl-11 leading-relaxed text-slate-600">
                        {f.a}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* CTA */}

        <div className="mt-20 w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-50 to-indigo-50/40 px-6 py-8 shadow-sm ring-1 ring-slate-200/70 sm:px-10 sm:py-10 md:mt-24 md:px-14 md:py-12 lg:px-16">

          <div className="grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">

            {/* Image */}

            <div className="relative order-2 flex items-end justify-center md:order-1 md:justify-start">

              <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />

              <img
                src="https://d1dedewa7t70lf.cloudfront.net/crinpro/media/solutionPageImages/black-coat-main-cta-image.webp"
                alt="Content writing expert"
                className="relative z-10 h-auto w-full max-w-[300px] object-contain sm:max-w-[360px] md:max-w-[400px]"
              />

            </div>

            {/* Content */}

            <div className="order-1 text-center md:order-2 md:text-left">

              <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]">
                Don’t Let Another Month Pass Without Expert Blog Writing Services
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed md:mx-0">
                Consistent, high-quality blogs take time. Get expert writers
                now and turn missed search opportunities into traffic, trust,
                and leads.
              </p>

              <a
                href="/contact"
                className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-indigo-600/20 sm:text-base"
              >
                Talk To an Expert

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
