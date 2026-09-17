import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, Shield, Target, Zap, FileText, SearchCheck, PenLine, RefreshCcw, Sparkles, Shield as ShieldIcon } from "lucide-react";

const industries = [
  "SaaS & Technology",
  "E-commerce", 
  "Healthcare",
  "Finance",
  "Real Estate",
  "Education",
  "Travel",
  "Hospitality",
  "Legal",
  "Marketing",
  "Manufacturing",
  "Professional Services"
];

const benefits = [
  {
    icon: Users,
    title: "Vetted Writers",
    desc: "Work with carefully selected blog writers who understand research, search intent, industry terminology, and brand voice, not generic content templates."
  },
  {
    icon: Clock,
    title: "Affordable Pricing",
    desc: "Get professional content at a practical, transparent price. Our flexible plans make a managed blog writing service easier to scale as your publishing needs grow."
  },
  {
    icon: Shield,
    title: "100% Unique",
    desc: "Every article is created specifically for your brand and audience. Content is 100% unique and plagiarism-free, with no recycled paragraphs or borrowed ideas."
  },
  {
    icon: Sparkles,
    title: "Human Quality",
    desc: "Your content goes beyond raw AI output. Human editorial review checks clarity, accuracy, tone, grammar, originality, and whether each article genuinely serves the reader."
  },
  {
    icon: Target,
    title: "SEO Focused",
    desc: "From keyword mapping to internal linking and semantic relevance, we build articles around search intent, helping your content compete for organic traffic, not just keywords."
  },
  {
    icon: Zap,
    title: "Managed Delivery",
    desc: "No chasing writers or juggling revisions. Our managed workflow keeps briefs, writing, editing, revisions, and delivery organized so your publishing schedule stays moving."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Brief",
    desc: "Share your topic, audience, keywords, goals, brand voice, and content requirements with our team.",
    icon: FileText
  },
  {
    step: "02", 
    title: "Plan The Content",
    desc: "We map search intent, keywords, entities, content gaps, and article structure before writing begins.",
    icon: SearchCheck
  },
  {
    step: "03",
    title: "Write The Article",
    desc: "A vetted writer creates original, human-written content aligned with your industry, audience, and SEO objectives.",
    icon: PenLine
  },
  {
    step: "04",
    title: "Edit And Refine",
    desc: "Our editorial review checks grammar, accuracy, readability, originality, tone, and SEO before delivery.",
    icon: RefreshCcw
  },
  {
    step: "05",
    title: "Review and Deliver",
    desc: "You receive the final blog with revisions handled, quality checked, and prepared for your publishing workflow.",
    icon: CheckCircle
  }
];

const samples = [
  {
    title: "SaaS Product Guide",
    desc: "A practical SaaS blog explaining how workflow automation can reduce repetitive tasks, improve team productivity, and simplify daily operations. Written around user intent with clear examples and actionable insights.",
    tags: ["1,200 Words", "Human-Edited", "SEO Optimized"]
  },
  {
    title: "Healthcare Wellness Blog",
    desc: "An easy-to-follow healthcare article answering common patient questions about preventive care. The content balances readability with careful research, trustworthy information, and a reassuring professional tone.",
    tags: ["1,000 Words", "Fact-Checked", "Original Content"]
  },
  {
    title: "Real Estate Insights",
    desc: "A search-focused real estate blog helping buyers understand key factors before choosing a property. The article combines local search intent, practical guidance, relevant terminology, and a natural expert voice.",
    tags: ["1,300 Words", "100% Unique", "Intent-Focused"]
  }
];

const testimonials = [
  {
    name: "Ryvian Westmere",
    company: "SaaS",
    title: "Better Intent, Better Leads",
    text: "Our old blogs were getting traffic but not enough qualified leads. ContentVanta reshaped them around search intent and buyer questions. The new structure feels much more useful and focused."
  },
  {
    name: "Xavren Colewick", 
    company: "Consulting",
    title: "A Voice That Fits",
    text: "Our website copy felt too generic and didn't sound like us. The ContentVanta team understood our tone, simplified the messaging, and made each service page feel much closer to our brand."
  },
  {
    name: "Tavren Caldwell",
    company: "Technology", 
    title: "More Than Keyword Stuffing",
    text: "We needed SEO content, but we didn't want articles packed with keywords. The team balanced search relevance with clear explanations and industry context. The content now feels written for people first."
  },
  {
    name: "Elvric Wensley",
    company: "E-commerce",
    title: "Reliable Content Support", 
    text: "Keeping up with our content calendar was becoming difficult. ContentVanta gave us a smoother writing and editing process, with clear communication and revisions when something needed changing."
  }
];

const faqs = [
  {
    question: "How can I hire professional blog writers for my business?",
    answer: "You can hire professional blog writers through ContentVanta with a managed workflow covering research, writing, editing, SEO, revisions, and final delivery."
  },
  {
    question: "Are your SEO blog writing services suitable for every industry?",
    answer: "Yes. Our writers can create industry-specific blogs for SaaS, healthcare, finance, real estate, e-commerce, technology, education, travel, and other business niches."
  },
  {
    question: "Can you humanize AI-generated blog content without rewriting everything?",
    answer: "Yes. We can refine AI-generated drafts by improving tone, flow, clarity, originality, structure, and factual accuracy while preserving useful ideas."
  },
  {
    question: "What makes your professional blog writing service different?",
    answer: "We combine vetted writers, search-intent research, human editorial review, brand voice alignment, original content, and a managed delivery process instead of simply producing drafts."
  },
  {
    question: "Can I buy blog writing services for long-form SEO content?",
    answer: "Yes. We create long-form blog articles based on topic depth, search intent, audience needs, internal linking opportunities, and your broader content strategy."
  },
  {
    question: "How do your blog writing services handle AI-assisted content?",
    answer: "AI may support research or workflow tasks where appropriate, but the finished content receives human oversight for accuracy, readability, originality, context, and brand fit."
  },
  {
    question: "Are professional blog writing services worth the investment?",
    answer: "They can be valuable when consistent publishing is difficult internally. Expert content can save production time while supporting organic visibility, topical authority, and audience trust."
  },
  {
    question: "Can I outsource blog writing for a growing content team?",
    answer: "Yes. Outsourcing can help businesses increase publishing capacity without managing every writer, brief, revision, editorial check, and delivery step themselves."
  },
  {
    question: "Do your blog writing services include keyword and search-intent research?",
    answer: "Yes. Content can be planned around relevant keywords, semantic entities, search intent, content gaps, reader questions, and opportunities across traditional and AI-powered search."
  },
  {
    question: "Can I get high-quality blog writing services with regular revisions?",
    answer: "Yes. Content goes through quality checks before delivery, and revisions can be handled according to your agreed requirements, helping the final article match your expectations."
  }
];

export default function BlogWritingService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
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
                      <Shield className="h-5 w-5" />
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
      </section>

      {/* Why Hire Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Why Hire Professional Blog Writers for Your Business?
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              A blog should do more than fill your website. It should answer real questions, support SEO, and build authority with the people you want to reach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl p-8 md:p-12"
          >
            <p className="text-lg leading-7 text-slate-700 mb-8">
              With managed blog writing services, ContentVanta helps businesses hire blog writers who deliver high-quality, human-written, 100% unique content with revisions, consistent brand voice, and a process built for a demanding USA-targeted audience.
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700"
            >
              Hire Vetted Blog Writers
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-600">2+ Years</div>
                <div className="mt-1 text-sm text-slate-600">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-600">120+</div>
                <div className="mt-1 text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-600">98%</div>
                <div className="mt-1 text-sm text-slate-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-600">24/7</div>
                <div className="mt-1 text-sm text-slate-600">Live Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-50/60 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Affordable Blog Writing Services Across Diverse Industries
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              From SaaS to healthcare, our blog writing service adapts to your industry, audience, terminology, and content goals without losing quality or clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-full bg-white border-2 border-indigo-100 text-slate-700 font-medium shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-md"
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300"
            >
              Order Blog Content
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Why Businesses Buy Blog Writing Services From ContentVanta
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              Get reliable content without the writer-search headache. Our outsourcing blog writing service combines vetted writers, SEO expertise, and managed delivery to support organic traffic and zero-click search visibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-24 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-50/60 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-sm font-semibold text-indigo-700">Our Process</span>
            </motion.div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Our Process When You Hire Professional Blog Writers
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              From Brief to Blog: Clear briefs. Skilled writers. Careful editing. Our streamlined process turns your ideas into search-focused, publication-ready blog content.
            </p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex shrink-0 h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-indigo-100 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-extrabold text-indigo-600">{step.step}</span>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              See What You Get With Our Blog Writing Services
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              See how our blog writing services adapt to different industries, audiences, search intent, and brand voices while keeping every article useful and engaging.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {samples.map((sample, index) => (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{sample.title}</h3>
                <p className="text-sm leading-6 text-slate-600 mb-4">{sample.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sample.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-indigo-50 text-xs font-medium text-indigo-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-4 text-sm font-semibold text-indigo-600 flex items-center gap-1"
                >
                  View Sample
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-24 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-50/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-50/60 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              What Businesses Say About Our Content Writing
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              Real feedback should talk about real problems, useful content, and the difference it made, not just say "great service."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-indigo-100 p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{testimonial.title}</h3>
                <p className="text-sm leading-6 text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/40 blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Common Questions About Our Expert Blog Writing Service
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              Choosing a blog writing service is not just about getting words on a page. These answers cover quality, SEO, AI humanization, industry expertise, content types, and what businesses should realistically expect.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-indigo-100 rounded-2xl bg-white overflow-hidden"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900">
                    <span className="pr-4">{faq.question}</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-cyan-500 to-purple-600 py-24 md:py-32">
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
      </section>
    </div>
  );
}