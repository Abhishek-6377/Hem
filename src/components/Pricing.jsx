import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    desc: "Perfect for individuals & small businesses",
    features: [
      "1–3 Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Fast Loading Pages",
      "Contact Form",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    desc: "Best for growing businesses",
    features: [
      "5–7 Pages Website",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "Performance Optimization",
      "WhatsApp Integration",
      "Free 30 Days Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For brands that need scalability",
    features: [
      "Unlimited Pages",
      "Premium UI/UX + Animations",
      "SEO + Speed Optimization",
      "Custom Integrations",
      "Priority Support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] " />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] " />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Simple, Transparent <span className="text-indigo-600">Pricing</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choose a plan that fits your business goals.
            No hidden charges. No surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className={`relative bg-white rounded-3xl p-10 shadow-lg border
                ${plan.highlight
                  ? "border-indigo-500 shadow-indigo-200"
                  : "border-slate-100"
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-slate-900">
                {plan.name}
              </h3>

              <p className="mt-2 text-slate-600">{plan.desc}</p>

              <div className="mt-6 text-4xl font-bold text-indigo-600">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-4 text-slate-600">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-indigo-500">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-10 inline-block w-full text-center px-6 py-3 rounded-full font-semibold transition
                  ${plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white shadow-lg"
                    : "border border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                  }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-600 text-lg">
            Not sure which plan is right for you?
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 px-12 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Get Free Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
