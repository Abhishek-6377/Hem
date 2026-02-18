import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300/30 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-300/30 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Let’s Build Something <span className="text-indigo-600">Amazing</span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-md">
            Have an idea, startup, or project in mind?  
            I help businesses create modern, high-converting digital experiences.
          </p>

          <div className="mt-10 space-y-4 text-slate-700">
            <p>📧 yourmail@email.com</p>
            <p>📍 India</p>
            <p>⏱️ 24–48 hrs response time</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <Input label="Your Name" placeholder="John Doe" />
          <Input label="Email Address" placeholder="john@email.com" />
          <Textarea label="Message" placeholder="Tell me about your project..." />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white font-semibold shadow-lg"
          >
            Send Message 🚀
          </motion.button>

        </motion.form>

      </div>
    </section>
  );
}

/* Input Components */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-slate-600 mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
      />
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-slate-600 mb-2">{label}</label>
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition resize-none"
      />
    </div>
  );
}
