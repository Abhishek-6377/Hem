import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Usually 7–21 days depending on project size and requirements.",
  },
  {
    q: "Will the website be mobile friendly?",
    a: "Yes, every website is fully responsive and works on all devices.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes, we offer maintenance and support after the website goes live.",
  },
  {
    q: "Is the website SEO optimized?",
    a: "Yes, we follow SEO-friendly structure and content practices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h3 className="font-semibold text-slate-900 flex justify-between">
                {f.q}
                <span>{open === i ? "−" : "+"}</span>
              </h3>
              {open === i && (
                <p className="mt-4 text-slate-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
