import { useState } from "react";

const faqs = [
  {
    q: "How much do content writing services cost?",
    a: "The cost depends on the content type, word count, research required, industry, and level of editing. We recommend reviewing clear deliverables first so you can compare pricing fairly.",
  },
  {
    q: "What is included in professional content writing services?",
    a: "A professional content writing service typically includes topic research, search intent analysis, content planning, writing, SEO optimization, editing, fact checking, and revisions.",
  },
  {
    q: "Can I hire content writers for ongoing content needs?",
    a: "Yes. Content writers can handle ongoing blogs, service pages, landing pages, product content, and thought leadership. Over time, they also become more familiar with your brand voice and content goals.",
  },
  {
    q: "How do content writers make content sound like my brand?",
    a: "Writers learn your brand voice by understanding your audience, tone, preferred terminology, and messaging style. Providing examples of existing content also helps writers create content that feels authentic to your brand.",
  },
  {
    q: "Can professional writers create industry-specific content?",
    a: "Yes. Professional writers can create content for industries such as technology, finance, healthcare, legal, and SaaS. These topics require careful research, accurate terminology, and reliable sources.",
  },
  {
    q: "Do content writing services include fact checking?",
    a: "Yes, many professional content writing services include fact checking. This can cover important claims, statistics, product information, and industry facts. Complex topics may also be reviewed by subject-matter experts.",
  },
  {
    q: "Can you update old content that has lost rankings?",
    a: "Yes. We can refresh outdated content by reviewing search intent, updating facts and keywords, improving headings and internal links, and identifying missing topics. The goal is to make the page more useful and relevant.",
  },
  {
    q: "Can you humanize AI-generated content?",
    a: "Yes. AI-generated content can be humanized through careful editing. We improve flow, tone, clarity, and factual accuracy while adding your brand voice. Weak or generic sections can also be rewritten from scratch.",
  },
  {
    q: "Can AI-assisted content sound natural?",
    a: "Yes. AI can be used as a starting point, but skilled writers refine the content by removing awkward phrasing, repetition, and generic language. They also add useful context and align the content with your brand voice.",
  },
  {
    q: "Can content writing services create content for AI search?",
    a: "Yes. Content can be structured for AI search by providing clear answers, covering topics comprehensively, using trustworthy sources, and adding original insights. However, no service can guarantee that AI search systems will select or cite a particular page.",
  },
];

export default function FAQ() {
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
        Questions Businesses Ask Before Hiring Content Writers
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
        Choosing a content partner is not just about price. Businesses
        want quality, fast delivery, strong research, and content with a
        real purpose.
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
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {f.q}
                </h3>

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

                  <p className="leading-relaxed text-slate-600">
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
            Ready to Replace Generic Content With Content That Converts?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed md:mx-0">
            Get researched, human-led content that builds trust, improves
            visibility, and turns the right readers into customers.
          </p>

          <button
            type="button"
            className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-indigo-600/20 sm:text-base"
          >
            Get Started

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>
      </div>
    </div>

  </div>
</section>
  );
}
