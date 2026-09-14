import { useEffect, useRef, useState } from "react";
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
    name: "Ryvian Westmere—SaaS",
    role: "MBA Student",
    university: "University of Birmingham",
    service: "Better Intent, Better Leads",
    text: "Our old blogs were getting traffic but not enough qualified leads. ContentVanta reshaped them around search intent and buyer questions. The new structure feels much more useful and focused.",
    initials: "RM",
  },
  {
    name: "Xavren Colewick—Consulting",
    role: "Postgraduate Student",
    university: "University of Manchester",
    service: "A Voice That Fits",
    text: "Our website copy felt too generic and didn’t sound like us. The ContentVanta team understood our tone, simplified the messaging, and made each service page feel much closer to our brand.",
    initials: "SW",
  },
  {
    name: "Tavren Caldwell—Technology",
    role: "International Student",
    university: "University of Melbourne",
    service: "More Than Keyword Stuffing",
    text: "We needed SEO content, but we didn’t want articles packed with keywords. The team balanced search relevance with clear explanations and industry context. The content now feels written for people first.",
    initials: "AP",
  },
  {
    name: "Elvric Wensley—E-commerce",
    role: "Undergraduate Student",
    university: "University of Leeds",
    service: "Reliable Content Support",
    text: "Keeping up with our content calendar was becoming difficult. ContentVanta gave us a smoother writing and editing process, with clear communication and revisions when something needed changing.",
    initials: "EC",
  },
  // {
  //   name: "Daniel Brown",
  //   role: "Master's Student",
  //   university: "King's College London",
  //   service: "Research Paper",
  //   text: "Excellent research and a very professional structure. My feedback was incorporated properly and the final paper felt genuinely tailored to my requirements.",
  //   initials: "DB",
  // },
  // {
  //   name: "Olivia Smith",
  //   role: "PhD Student",
  //   university: "University of Edinburgh",
  //   service: "Research Support",
  //   text: "The research support was exactly what I needed. Everything was clearly organised and the writer paid close attention to the academic requirements I provided.",
  //   initials: "OS",
  // },
];

const colors = [
  "bg-[#203f7a]",
  "bg-[#e87500]",
  "bg-[#315b9d]",
  "bg-[#203f7a]",
  "bg-[#e87500]",
  "bg-[#315b9d]",
];

/*
  Create many copies.

  The user starts somewhere in the middle,
  so there are always reviews before and after them.
*/
const COPIES = 20;

const loopedReviews = Array.from(
  { length: COPIES },
  (_, copyIndex) =>
    reviews.map((review, reviewIndex) => ({
      ...review,
      loopIndex: copyIndex * reviews.length + reviewIndex,
      realIndex: reviewIndex,
    }))
).flat();

export default function Reviews() {
  const sliderRef = useRef(null);
  const initializedRef = useRef(false);

  const [active, setActive] = useState(0);

  const TOTAL = reviews.length;

  /*
    Start from the middle copy.
  */
  const MIDDLE_COPY = Math.floor(COPIES / 2);

  /*
    Get actual card width including gap.
  */
  const getCardWidth = () => {
    if (!sliderRef.current) return 0;

    const card = sliderRef.current.children[0];

    if (!card) return 0;

    const sliderStyles =
      window.getComputedStyle(sliderRef.current);

    const gap =
      parseFloat(sliderStyles.columnGap) ||
      parseFloat(sliderStyles.gap) ||
      0;

    return card.offsetWidth + gap;
  };

  /*
    Get current card index.
  */
  const getCurrentIndex = () => {
    if (!sliderRef.current) return 0;

    const cardWidth = getCardWidth();

    if (!cardWidth) return 0;

    return Math.round(
      sliderRef.current.scrollLeft / cardWidth
    );
  };

  /*
    Convert any index into 0-5.
  */
  const normalizeIndex = (index) => {
    return ((index % TOTAL) + TOTAL) % TOTAL;
  };

  /*
    Put the carousel in the middle.
  */
  const initializeSlider = () => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const startingIndex =
      MIDDLE_COPY * TOTAL;

    sliderRef.current.scrollLeft =
      startingIndex * cardWidth;

    setActive(0);

    initializedRef.current = true;
  };

  /*
    Initialize after layout.
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeSlider();
    }, 150);

    const handleResize = () => {
      if (!initializedRef.current) return;

      const currentRealIndex = active;

      const cardWidth = getCardWidth();

      if (!cardWidth || !sliderRef.current) return;

      const currentIndex =
        MIDDLE_COPY * TOTAL + currentRealIndex;

      sliderRef.current.scrollLeft =
        currentIndex * cardWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /*
    Handle manual scrolling.
  */
  const handleSliderScroll = () => {
    if (!sliderRef.current) return;

    const currentIndex = getCurrentIndex();

    const realIndex =
      normalizeIndex(currentIndex);

    setActive(realIndex);

    /*
      IMPORTANT:

      We don't wait until the actual beginning/end.

      We silently move the user back toward
      the middle when they get too far away.

      Because every section contains identical
      reviews, this reposition is visually invisible.
    */

    const lowerLimit = TOTAL * 3;
    const upperLimit = TOTAL * 17;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    if (currentIndex < lowerLimit) {
      const newIndex =
        currentIndex + TOTAL * 10;

      sliderRef.current.scrollLeft =
        newIndex * cardWidth;
    }

    if (currentIndex > upperLimit) {
      const newIndex =
        currentIndex - TOTAL * 10;

      sliderRef.current.scrollLeft =
        newIndex * cardWidth;
    }
  };

  /*
    NEXT
  */
  const nextReview = () => {
    if (!sliderRef.current) return;

    const currentIndex = getCurrentIndex();

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    sliderRef.current.scrollTo({
      left: (currentIndex + 1) * cardWidth,
      behavior: "smooth",
    });
  };

  /*
    PREVIOUS
  */
  const previousReview = () => {
    if (!sliderRef.current) return;

    const currentIndex = getCurrentIndex();

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    sliderRef.current.scrollTo({
      left: (currentIndex - 1) * cardWidth,
      behavior: "smooth",
    });
  };

  /*
    Convert vertical mouse wheel
    into horizontal scrolling.
  */
  const handleSliderWheel = (event) => {
    if (!sliderRef.current) return;

    const isVertical =
      Math.abs(event.deltaY) >
      Math.abs(event.deltaX);

    if (!isVertical) return;

    event.preventDefault();

    sliderRef.current.scrollLeft +=
      event.deltaY;
  };

  /*
    DOT CLICK

    Always jump to the middle copy.
    So dots never take the user to
    the actual beginning/end.
  */
  const goToReview = (index) => {
    if (!sliderRef.current) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const targetIndex =
      MIDDLE_COPY * TOTAL + index;

    sliderRef.current.scrollTo({
      left: targetIndex * cardWidth,
      behavior: "smooth",
    });

    setActive(index);
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
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#203f7a]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#203f7a] shadow-sm">

            <PenLine size={14} />

            Client Experiences

          </div> */}


          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[46px] md:leading-[1.15]">

            What Businesses Say About Our {" "}

            <span className="text-[#203f7a]">
              Content Writing Service
            </span>

          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">

            Real feedback should talk about real problems, useful content, 
            and the difference it made, not just say “great service.”


          </p>

        </motion.div>


        {/* ================= TRUST INFO ================= */}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">

          {/* Verified */}

          {/* <div className="flex items-center gap-2 text-sm font-medium text-slate-600">

            <CheckCircle2
              size={17}
              className="text-green-600"
            />

            Verified Experiences

          </div> */}


          {/* Rating */}

          {/* <div className="flex items-center gap-1">

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

          </div> */}


          {/* <div className="text-sm font-medium text-slate-600">

            Trusted Academic Writing Support

          </div> */}

        </div>


        {/* ================= CAROUSEL ================= */}

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

            {loopedReviews.map((review, index) => (

              <motion.article
                key={`${review.name}-${index}`}

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
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.45,
                  delay:
                    (review.realIndex % 3) *
                    0.06,
                }}

                className="
                  group
                  relative
                  flex
                  w-[88%]
                  shrink-0
                  snap-start
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
                  lg:p-7

                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(15,23,42,0.11)]
                "
              >

                {/* Top orange/blue line */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1
                    rounded-t-[24px]
                    bg-gradient-to-r
                    from-[#203f7a]
                    to-[#f57c00]
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
                />


                {/* ================= QUOTE + STARS ================= */}

                <div className="mb-5 flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf3fa] text-[#203f7a]">

                    <Quote
                      size={24}
                      fill="currentColor"
                    />

                  </div>


                  <div className="flex gap-0.5">

                    {[1, 2, 3, 4, 5].map(
                      (star) => (

                        <Star
                          key={star}
                          size={15}
                          fill="#f59e0b"
                          className="text-[#f59e0b]"
                        />

                      )
                    )}

                  </div>

                </div>


                {/* ================= SERVICE ================= */}

                <div className="mb-4">

                  <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#e87500]">

                    {review.service}

                  </span>

                </div>


                {/* ================= TEXT ================= */}

                <p className="flex-1 text-[14px] leading-7 text-slate-600">

                  “{review.text}”

                </p>


                {/* ================= DIVIDER ================= */}

                <div className="my-6 h-px bg-slate-100" />


                {/* ================= USER ================= */}

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
                      ${colors[review.realIndex]}
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


          {/* ================= MOBILE ARROWS ================= */}

          <div className="mt-2 flex justify-center gap-3 lg:hidden">

            <button
              onClick={previousReview}
              aria-label="Previous review"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#203f7a]
                shadow-sm
                transition
                hover:bg-[#203f7a]
                hover:text-white
              "
            >

              <ArrowLeft size={18} />

            </button>


            <button
              onClick={nextReview}
              aria-label="Next review"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#203f7a]
                shadow-sm
                transition
                hover:bg-[#203f7a]
                hover:text-white
              "
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
              onClick={() =>
                goToReview(index)
              }
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

      </div>
    </section>
  );
}
