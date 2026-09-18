import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, ShieldCheck, Target, Zap, FileText, SearchCheck, PenLine, RefreshCcw, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyHire from "./services/WhyHire";
import ServicesIndusr from "./services/ServicesIndust";
import ServFeature from "./services/ServFeature";
import ServProcess from "./services/ServProcess";
import ServSampleWork from "./services/ServSampleWork";
import ServReviews from "./services/ServReviews";
import ServFAQ from "./services/ServFAQ";
import ServHero from "./services/ServHero";

export default function BlogWritingService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}

      <ServHero/>
      {/* <section id="blog-writing-service" className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 tracking-wide">TRUSTED BY 500+ BUSINESSES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] tracking-tight text-slate-900"
              >
                Premium Blog Writing
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  That Drives Results
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl"
              >
                Scale your content strategy with expert writers who understand SEO, your industry, and what makes readers convert. No fluff, just results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  View Pricing
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-12 pt-8 border-t border-slate-200"
              >
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">500+</div>
                    <div className="mt-1 text-sm text-slate-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">98%</div>
                    <div className="mt-1 text-sm text-slate-500">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">24h</div>
                    <div className="mt-1 text-sm text-slate-500">Turnaround</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Content Excellence</h3>
                    <p className="text-sm text-slate-500">Our commitment to quality</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Original Research</h4>
                      <p className="mt-1 text-sm text-slate-600">Data-driven content with credible sources</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">SEO Optimized</h4>
                      <p className="mt-1 text-sm text-slate-600">Built around search intent & keywords</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Quality Guaranteed</h4>
                      <p className="mt-1 text-sm text-slate-600">Human-edited & plagiarism-free</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Fast Delivery</h4>
                      <p className="mt-1 text-sm text-slate-600">Quick turnaround without quality compromise</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <WhyHire/>

      {/* Industries Section */}

      <ServicesIndusr/>

      {/* Benefits Section */}

      <ServFeature/>

      {/* Process Section */}
      
      <ServProcess/>
      {/* Samples Section */}
      
      <ServSampleWork/>

      {/* Testimonials Section */}
      
      <ServReviews/>

      {/* FAQ Section */}
      
      <ServFAQ/>

      {/* Final CTA Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-cyan-500 to-purple-600 py-24 md:py-32">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
          >
            Don't Let Another Month Pass Without Expert Blog Writing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-7 text-indigo-100"
          >
            Consistent, high-quality blogs take time. Get expert writers now and turn missed search opportunities into traffic, trust, and leads.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-indigo-600 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Talk To an Expert
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}