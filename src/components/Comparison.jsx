import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  FileCheck2,
  Users,
  ShieldCheck,
  Globe2,
  Clock3,
  BadgeCheck,
  BookOpenCheck,
} from "lucide-react";

const features = [
  "100% Human-Written Work",
  "Turnitin-Conscious Content",
  "AI-Detection Friendly Writing",
  "Subject Experts for Every Field",
  "Diploma, Degree & Master's Support",
  "Real Referencing",
  "Rubric-Matched Assignments",
  "Global University Familiarity",
  "Fast Delivery for All Time Zones",
  "Free Revisions Included",
  "Free Plagiarism Report",
  "Simple Language, Easy to Submit",
  "Dedicated Writer Communication",
  "Strict Privacy & Confidentiality",
  "Affordable Prices + Extra Discounts",
];

const iconMap = [
  FileCheck2,
  ShieldCheck,
  BadgeCheck,
  Users,
  BookOpenCheck,
  FileCheck2,
  BadgeCheck,
  Globe2,
  Clock3,
  Check,
  ShieldCheck,
  BookOpenCheck,
  Users,
  ShieldCheck,
  BadgeCheck,
];

export default function Comparison() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#203f7a] sm:text-4xl md:text-[46px] md:leading-[1.15]">
            What Makes Our Assignment Help{" "}
            <span className="text-[#f57c00]">Stand Out?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Students compare services before choosing academic support.
            Here's a clear look at what you get with us compared with
            typical assignment providers.
          </p>
        </motion.div>

        {/* Main comparison */}
<div className="grid items-start gap-7 lg:grid-cols-[420px_1fr]">

  {/* ================= LEFT CTA CARD ================= */}
  <motion.div
    initial={{ opacity: 0, x: -35 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="overflow-hidden rounded-2xl border border-[#e87500] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
  >
    {/* Blue Header */}
    <div className="bg-[#203f7a] px-7 py-7 sm:px-8">
      <h3 className="text-2xl font-bold leading-tight text-white sm:text-[29px]">
        Looking For An Expert?
      </h3>

      <p className="mt-2 text-sm font-medium leading-6 text-white/90 sm:text-base">
        Get your assignment support from experienced academic professionals.
      </p>
    </div>

    {/* Benefits */}
    <div className="space-y-7 px-7 py-8 sm:px-8">

      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#203f7a] text-white">
          <FileCheck2 size={30} />
        </div>

        <div>
          <p className="text-sm text-slate-500">We'll deliver</p>
          <p className="text-lg font-bold text-[#203f7a]">
            100% Original Papers
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#203f7a] text-white">
          <Users size={30} />
        </div>

        <div>
          <p className="text-sm text-slate-500">You'll always get</p>
          <p className="text-lg font-bold text-[#203f7a]">
            Expert Global Writers
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#203f7a] text-white">
          <Globe2 size={30} />
        </div>

        <div>
          <p className="text-sm text-slate-500">Support across</p>
          <p className="text-lg font-bold text-[#203f7a]">
            Global Universities
          </p>
        </div>
      </div>

      <a
        href="#order"
        className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff7900] to-[#ff922e] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:scale-[1.02]"
      >
        Place Your Order
        <ArrowRight size={21} />
      </a>
    </div>
  </motion.div>


  {/* ================= SCROLLABLE COMPARISON ================= */}
  <div className="min-w-0">

    {/* Header stays outside scroll */}
    <div className="mb-3 hidden grid-cols-[1fr_105px_120px] gap-3 px-5 md:grid">
      <div className="text-sm font-semibold text-slate-400">
        Service Features
      </div>

      <div className="rounded-lg bg-green-600 px-3 py-2 text-center text-xs font-bold text-white">
        Our Service
      </div>

      <div className="rounded-lg bg-red-600 px-3 py-2 text-center text-xs font-bold text-white">
        Other Providers
      </div>
    </div>


    {/* ===== SCROLL CONTAINER ===== */}
    <div
      className="
        relative
        h-[480px]
        overflow-y-auto
        overflow-x-hidden
        pr-3

        scrollbar-thin
        scrollbar-track-slate-100
        scrollbar-thumb-[#ff7900]

        [&::-webkit-scrollbar]:w-[6px]
        [&::-webkit-scrollbar-track]:bg-slate-100
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#ff7900]
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:hover:bg-[#e86d00]
      "
    >

      <div className="space-y-3">

        {features.map((feature, index) => {
          const Icon = iconMap[index];

          return (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.03,
              }}
              className="
                group
                rounded-xl
                border
                border-slate-100
                bg-gradient-to-r
                from-white
                to-slate-50
                p-3
                shadow-[0_5px_20px_rgba(15,23,42,0.06)]
                transition
                hover:border-blue-100
                hover:shadow-[0_8px_25px_rgba(15,23,42,0.09)]
                sm:p-4
              "
            >

              {/* Desktop */}
              <div className="hidden items-center gap-3 md:grid md:grid-cols-[1fr_105px_120px]">

                {/* Feature */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#edf3ff] text-[#203f7a]">
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </div>

                {/* OUR SERVICE */}
                <div className="flex h-9 items-center justify-center rounded-md bg-green-50">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-green-700">
                    <Check size={15} strokeWidth={3} />
                    Yes
                  </span>
                </div>

                {/* OTHER PROVIDERS */}
                <div className="flex h-9 items-center justify-center rounded-md bg-red-50">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-red-600">
                    <X size={15} strokeWidth={3} />
                    Limited
                  </span>
                </div>

              </div>


              {/* Mobile */}
              <div className="md:hidden">

                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#edf3ff] text-[#203f7a]">
                    <Icon size={19} />
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">

                  <div className="flex items-center justify-center gap-1.5 rounded-md bg-green-50 py-2 text-xs font-bold text-green-700">
                    <Check size={14} strokeWidth={3} />
                    Our Service
                  </div>

                  <div className="flex items-center justify-center gap-1.5 rounded-md bg-red-50 py-2 text-xs font-bold text-red-600">
                    <X size={14} strokeWidth={3} />
                    Other Providers
                  </div>

                </div>
              </div>

            </motion.div>
          );
        })}

      </div>
    </div>
  </div>

</div>
        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm text-slate-500"
        >
          <span className="flex items-center gap-2">
            <Check className="text-green-600" size={17} />
            Original Content
          </span>

          <span className="flex items-center gap-2">
            <Check className="text-green-600" size={17} />
            Expert Writers
          </span>

          <span className="flex items-center gap-2">
            <Check className="text-green-600" size={17} />
            Global Academic Support
          </span>

          <span className="flex items-center gap-2">
            <Check className="text-green-600" size={17} />
            Revision Support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
