import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  PenLine,
} from "lucide-react";

const reviews = [
  {
    name: "Rohan Mehta",
    role: "MBA Student",
    university: "University of Birmingham",
    service: "Dissertation Writing",
    text: "The writer understood my brief immediately and delivered a well-structured dissertation that was easy to follow. The referencing and research quality were especially impressive.",
    initials: "RM",
  },
  {
    name: "Sarah Williams",
    role: "Postgraduate Student",
    university: "University of Manchester",
    service: "Academic Writing",
    text: "What stood out was the attention to my university guidelines. The work followed my requirements closely, and the revision process was quick and genuinely helpful.",
    initials: "SW",
  },
  {
    name: "Arjun Patel",
    role: "International Student",
    university: "University of Melbourne",
    service: "Assignment Help",
    text: "I needed help with a difficult subject and was matched with someone who actually knew the topic. The final assignment was clear, properly referenced and delivered on time.",
    initials: "AP",
  },
  {
    name: "Emily Carter",
    role: "Undergraduate Student",
    university: "University of Leeds",
    service: "Essay Writing",
    text: "The biggest difference for me was the communication. I could explain exactly what I needed and the writer followed the brief without making the process complicated.",
    initials: "EC",
  },
  {
    name: "Daniel Brown",
    role: "Master's Student",
    university: "King's College London",
    service: "Research Paper",
    text: "Excellent research and a very professional structure. My feedback was incorporated properly and the final paper felt genuinely tailored to my requirements.",
    initials: "DB",
  },
  {
    name: "Olivia Smith",
    role: "PhD Student",
    university: "University of Edinburgh",
    service: "Research Support",
    text: "The research support was exactly what I needed. Everything was clearly organised and the writer paid close attention to the academic requirements I provided.",
    initials: "OS",
  },
];

const colors = [
  "bg-[#203f7a]",
  "bg-[#e87500]",
  "bg-[#315b9d]",
  "bg-[#203f7a]",
  "bg-[#e87500]",
  "bg-[#315b9d]",
];

export default function Reviews() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(1);

  const scrollToReview = (index) => {
    if (!sliderRef.current) return;

    const cards = sliderRef.current.children;

    if (!cards[index]) return;

    cards[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActive(index);
  };

  const handleSliderScroll = () => {
    if (!sliderRef.current) return;

    const sliderCenter = sliderRef.current.getBoundingClientRect().left + sliderRef.current.clientWidth / 2;
    const cards = Array.from(sliderRef.current.children);
    const closestIndex = cards.reduce((closest, card, index) => {
      const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
      const closestCenter = cards[closest].getBoundingClientRect().left + cards[closest].clientWidth / 2;

      return Math.abs(cardCenter - sliderCenter) < Math.abs(closestCenter - sliderCenter)
        ? index
        : closest;
    }, 0);

    setActive(closestIndex);
  };

  const handleSliderWheel = (event) => {
    if (!sliderRef.current || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    sliderRef.current.scrollLeft += event.deltaY;
  };

  const nextReview = () => {
    const next = active >= reviews.length - 1 ? 0 : active + 1;
    scrollToReview(next);
  };

  const previousReview = () => {
    const previous = active <= 0 ? reviews.length - 1 : active - 1;
    scrollToReview(previous);
  };

  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] py-24 md:py-32">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-100/50 blur-[120px]" />
      </div>


      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#203f7a]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#203f7a] shadow-sm">
            <PenLine size={14} />
            Student Experiences
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[46px] md:leading-[1.15]">
            Client Experiences That{" "}
            <span className="text-[#203f7a]">
              Speak For Us
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Hear directly from students who trusted our expert writers
            for assignments, essays, dissertations and research work.
          </p>

        </motion.div>


        {/* ================= TRUST INFO ================= */}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">

          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <CheckCircle2
              size={17}
              className="text-green-600"
            />
            Verified Experiences
          </div>

          <div className="flex items-center gap-1">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                fill="#f59e0b"
                className="text-[#f59e0b]"
              />
            ))}

            <span className="ml-2 text-sm font-semibold text-slate-700">
              4.9/5
            </span>

          </div>

          <div className="text-sm font-medium text-slate-600">
            Trusted Academic Writing Support
          </div>

        </div>


        {/* ================================================= */}
        {/*                    CAROUSEL                       */}
        {/* ================================================= */}

        <div className="relative mt-14">

          {/* LEFT ARROW */}

          <button
            onClick={previousReview}
            aria-label="Previous review"
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[#203f7a]
              shadow-lg
              transition
              hover:scale-110
              hover:bg-[#203f7a]
              hover:text-white
              lg:flex
            "
          >
            <ArrowLeft size={20} />
          </button>


          {/* RIGHT ARROW */}

          <button
            onClick={nextReview}
            aria-label="Next review"
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[#203f7a]
              shadow-lg
              transition
              hover:scale-110
              hover:bg-[#203f7a]
              hover:text-white
              lg:flex
            "
          >
            <ArrowRight size={20} />
          </button>


          {/* ================= SCROLL AREA ================= */}

          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            onWheel={handleSliderWheel}
            className="
              reviews-slider
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              scroll-smooth
              px-1
              pb-7
              [scrollbar-width:none]
              [-ms-overflow-style:none]

              sm:gap-6
            "
          >

            {reviews.map((review, index) => (

              <motion.article
                key={review.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="
                  group
                  relative
                  flex
                  w-[88%]
                  shrink-0
                  snap-center
                  flex-col
                  rounded-[24px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_10px_30px_rgba(15,23,42,0.07)]
                  transition-all
                  duration-300

                  sm:w-[70%]

                  lg:w-[calc((100%-48px)/3)]
                  lg:snap-center
                  lg:p-7

                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(15,23,42,0.11)]
                "
              >

                {/* Top orange line */}

                <div className="absolute left-0 right-0 top-0 h-1 rounded-t-[24px] bg-gradient-to-r from-[#203f7a] to-[#f57c00] opacity-0 transition group-hover:opacity-100" />


                {/* QUOTE */}

                <div className="mb-5 flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf3fa] text-[#203f7a]">
                    <Quote
                      size={24}
                      fill="currentColor"
                    />
                  </div>


                  {/* Stars */}

                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill="#f59e0b"
                        className="text-[#f59e0b]"
                      />
                    ))}
                  </div>

                </div>


                {/* SERVICE */}

                <div className="mb-4">
                  <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#e87500]">
                    {review.service}
                  </span>
                </div>


                {/* TEXT */}

                <p className="flex-1 text-[14px] leading-7 text-slate-600">
                  “{review.text}”
                </p>


                {/* DIVIDER */}

                <div className="my-6 h-px bg-slate-100" />


                {/* USER */}

                <div className="flex items-center gap-3">

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${colors[index]}
                      text-sm
                      font-bold
                      text-white
                    `}
                  >
                    {review.initials}
                  </div>


                  <div className="min-w-0">

                    <h3 className="text-sm font-bold text-slate-900">
                      {review.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {review.role}
                    </p>

                    <p className="mt-0.5 truncate text-[11px] font-medium text-[#203f7a]">
                      {review.university}
                    </p>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>


          {/* MOBILE ARROWS */}

          <div className="mt-2 flex justify-center gap-3 lg:hidden">

            <button
              onClick={previousReview}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203f7a] shadow-sm transition hover:bg-[#203f7a] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextReview}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#203f7a] shadow-sm transition hover:bg-[#203f7a] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>


        {/* ================= DOTS ================= */}

        <div className="mt-4 flex justify-center gap-2">

          {reviews.map((_, index) => (

            <button
              key={index}
              onClick={() => scrollToReview(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  active === index
                    ? "w-7 bg-[#203f7a]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }
              `}
            />

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        {/* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl bg-[#203f7a] px-6 py-6 text-center shadow-[0_15px_40px_rgba(32,63,122,0.16)] sm:px-8"
        >

          <p className="text-sm text-white/70">
            Ready to work with an expert writer?
          </p>

          <a
            href="#order"
            className="mt-2 inline-flex items-center gap-2 text-base font-bold text-white transition hover:text-orange-300"
          >
            Find Your Expert Writer
            <ArrowRight size={18} />
          </a>

        </motion.div> */}

      </div>
    </section>
  );
}
