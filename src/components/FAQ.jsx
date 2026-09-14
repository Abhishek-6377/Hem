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
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center">
          {/* <span className="inline-block px-4 py-2 mb-5 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
            FAQ
          </span> */}

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Questions Businesses Ask Before Hiring Content Writers
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choosing a content partner is not just about price. Businesses
            want quality, fast delivery, strong research, and content with a
            real purpose.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "shadow-lg border-indigo-100"
                    : "hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {f.q}
                    </h3>

                    <span
                      className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-xl font-medium transition-all duration-300 ${
                        isOpen
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="h-px bg-slate-100 mb-5" />

                      <p className="text-slate-600 leading-relaxed">
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
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Ready to Replace Generic Content With Content That Converts?
          </h3>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get researched, human-led content that builds trust, improves
            visibility, and turns the right readers into customers.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
