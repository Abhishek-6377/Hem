import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Background glow effects matching other sections */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-50/60 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-sm font-semibold text-indigo-700">
                Transform Your Content Strategy
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Shape the Future of
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Your Digital Presence
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-6 text-lg leading-7 text-slate-600"
            >
              Join forward-thinking businesses that leverage strategic content to dominate search results, engage audiences, and drive sustainable growth. Your content journey starts here.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300"
              >
                Start Your Content Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Precision Targeting</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Content crafted to reach your exact audience with laser-focused messaging and strategic keyword placement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Rapid Results</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fast turnaround times without compromising quality. Get your content working for you sooner.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Human Expertise</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Real writers, real research, real results. No AI-generated fluff—just authentic, engaging content.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-8"
        >
          <div className="text-center">
            <div className="text-3xl font-extrabold text-slate-900">500+</div>
            <div className="mt-1 text-sm text-slate-500">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-slate-900">98%</div>
            <div className="mt-1 text-sm text-slate-500">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-slate-900">24h</div>
            <div className="mt-1 text-sm text-slate-500">Avg. Turnaround</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-slate-900">50+</div>
            <div className="mt-1 text-sm text-slate-500">Industries Served</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
