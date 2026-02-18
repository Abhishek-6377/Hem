import { motion } from "framer-motion";

const reviews = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    text: "The website looks premium, clean and converts really well. Highly recommended!",
  },
  {
    name: "Neha Verma",
    role: "Business Owner",
    text: "Very smooth process and clear communication. Loved the final design.",
  },
  {
    name: "Rahul Mehta",
    role: "Marketing Consultant",
    text: "Perfect balance of design, SEO and performance. Great experience!",
  },
];

export default function Reviews() {
  return (
    <section className="py-28 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            What Clients Say
          </h2>
          <p className="mt-4 text-slate-600">
            Real feedback from real people.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <p className="text-slate-600">“{r.text}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{r.name}</p>
                <p className="text-sm text-slate-500">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
