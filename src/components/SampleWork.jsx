import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SEO Blog Article",
    category: "Content Writing",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85",
    desc: "A search-focused blog built around keyword intent, useful answers, natural entity coverage, and strong readability. The goal is simple: help readers first while giving search engines clear context.",
    tags: ["SEO Optimized", "Human Written", "Expert Researched"],
  },
  {
    title: "Website Service Page",
    category: "Website Content",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    desc: "A clear service page that explains what you offer, why it matters, and what readers should do next. Strong messaging meets search relevance without making the copy feel stuffed.",
    tags: ["Conversion Focused", "Brand Focused", "Human Edited"],
  },
  {
    title: "B2B Content",
    category: "B2B Writing",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    desc: "Research-led B2B content written for decision-makers who need more than surface-level information. It brings together industry context, expert insights, buyer intent, and a natural professional voice.",
    tags: ["Expert Researched", "Original Content", "AI Search Ready"],
  },
];

/*
  Create many copies of the projects.
  The carousel starts in the middle,
  creating a smooth infinite-loop effect.
*/
const COPIES = 20;

const loopedProjects = Array.from(
  { length: COPIES },
  (_, copyIndex) =>
    projects.map((project, projectIndex) => ({
      ...project,
      realIndex: projectIndex,
      loopIndex: copyIndex * projects.length + projectIndex,
    }))
).flat();

export default function SampleWork() {
  const carouselRef = useRef(null);
  const initializedRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const TOTAL = projects.length;

  /*
    Start from the middle of the repeated projects.
  */
  const MIDDLE_COPY = Math.floor(COPIES / 2);

  /*
    Get width of one card + carousel gap.
  */
  const getCardWidth = () => {
    if (!carouselRef.current) return 0;

    const card = carouselRef.current.children[0];

    if (!card) return 0;

    const styles = window.getComputedStyle(
      carouselRef.current
    );

    const gap =
      parseFloat(styles.columnGap) ||
      parseFloat(styles.gap) ||
      0;

    return card.offsetWidth + gap;
  };

  /*
    Get current card index.
  */
  const getCurrentIndex = () => {
    if (!carouselRef.current) return 0;

    const cardWidth = getCardWidth();

    if (!cardWidth) return 0;

    return Math.round(
      carouselRef.current.scrollLeft / cardWidth
    );
  };

  /*
    Convert any index to the original project range.
  */
  const normalizeIndex = (index) => {
    return ((index % TOTAL) + TOTAL) % TOTAL;
  };

  /*
    Start carousel in the middle.
  */
  const initializeCarousel = () => {
    if (!carouselRef.current) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const startingIndex =
      MIDDLE_COPY * TOTAL;

    carouselRef.current.scrollLeft =
      startingIndex * cardWidth;

    setActiveIndex(0);

    initializedRef.current = true;
  };

  /*
    Initialize after page layout.
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeCarousel();
    }, 150);

    const handleResize = () => {
      if (!initializedRef.current) return;

      const cardWidth = getCardWidth();

      if (!cardWidth || !carouselRef.current) {
        return;
      }

      const currentIndex =
        MIDDLE_COPY * TOTAL + activeIndex;

      carouselRef.current.scrollLeft =
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
    Detect the current card.
  */
  const handleScroll = () => {
    if (!carouselRef.current) return;

    const currentIndex = getCurrentIndex();

    const realIndex =
      normalizeIndex(currentIndex);

    setActiveIndex(realIndex);

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const lowerLimit = TOTAL * 3;
    const upperLimit = TOTAL * 17;

    if (currentIndex < lowerLimit) {
      const newIndex =
        currentIndex + TOTAL * 10;

      carouselRef.current.scrollLeft =
        newIndex * cardWidth;
    }

    if (currentIndex > upperLimit) {
      const newIndex =
        currentIndex - TOTAL * 10;

      carouselRef.current.scrollLeft =
        newIndex * cardWidth;
    }
  };

  /*
    NEXT PROJECT
  */
  const nextProject = () => {
    if (!carouselRef.current) return;

    const currentIndex = getCurrentIndex();
    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    carouselRef.current.scrollTo({
      left: (currentIndex + 1) * cardWidth,
      behavior: "smooth",
    });
  };

  /*
    PREVIOUS PROJECT
  */
  const previousProject = () => {
    if (!carouselRef.current) return;

    const currentIndex = getCurrentIndex();
    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    carouselRef.current.scrollTo({
      left: (currentIndex - 1) * cardWidth,
      behavior: "smooth",
    });
  };

  /*
    Click on a dot.
  */
  const scrollToCard = (index) => {
    if (!carouselRef.current) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const targetIndex =
      MIDDLE_COPY * TOTAL + index;

    carouselRef.current.scrollTo({
      left: targetIndex * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /*
    Convert vertical mouse wheel movement
    into horizontal carousel scrolling.
  */
  const handleWheel = (event) => {
    if (!carouselRef.current) return;

    const isVertical =
      Math.abs(event.deltaY) >
      Math.abs(event.deltaX);

    if (!isVertical) return;

    event.preventDefault();

    carouselRef.current.scrollLeft +=
      event.deltaY;
  };

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-indigo-50/20
        to-white
        py-16
        md:py-20
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[380px]
            w-[380px]
            -translate-x-1/2
            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-1/3
            h-56
            w-56
            rounded-full
            bg-sky-100/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-56
            w-56
            rounded-full
            bg-violet-100/30
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.035) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10">

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl px-5 text-center">

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-indigo-500
              sm:text-xs
            "
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-800
              sm:text-4xl
              md:text-5xl
            "
          >
            Quality Delivered by Our{" "}
            <span className="text-indigo-500">
              Expert Content Writers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-xs
              leading-6
              text-slate-500
              sm:text-sm
              md:text-[15px]
            "
          >
            See how our vetted content writers turn research,
            search intent, and brand goals into clear content
            built for real readers and business results.
          </motion.p>

          {/* Portfolio Button */}

          {/* <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 0.15,
            }}
            href="/portfolio"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-indigo-500
              px-6
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-md
              shadow-indigo-100
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-indigo-600
              sm:text-sm
            "
          >
            View Portfolio

            <span>→</span>
          </motion.a> */}
        </div>

        {/* ================= CAROUSEL ================= */}

        <div className="relative mt-10 md:mt-12">

          {/* LEFT BUTTON */}

          <button
            onClick={previousProject}
            aria-label="Previous project"
            className="
              absolute
              left-4
              top-1/2
              z-30
              hidden
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-indigo-100
              bg-white
              text-sm
              text-indigo-500
              shadow-md
              transition-all
              hover:scale-105
              hover:bg-indigo-50
              lg:flex
            "
          >
            ←
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={nextProject}
            aria-label="Next project"
            className="
              absolute
              right-4
              top-1/2
              z-30
              hidden
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-indigo-100
              bg-white
              text-sm
              text-indigo-500
              shadow-md
              transition-all
              hover:scale-105
              hover:bg-indigo-50
              lg:flex
            "
          >
            →
          </button>

          {/* ================= SCROLL AREA ================= */}

          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onWheel={handleWheel}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              px-[9vw]
              pb-6
              scroll-smooth
              lg:gap-6
              lg:px-[18vw]
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {loopedProjects.map(
              (project, index) => {
                const isActive =
                  project.realIndex ===
                  activeIndex;

                return (
                  <motion.article
                    key={`${project.title}-${index}`}
                    onClick={() =>
                      scrollToCard(
                        project.realIndex
                      )
                    }
                    animate={{
                      scale: isActive ? 1 : 0.94,
                      opacity: isActive ? 1 : 0.72,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className={`
                      group
                      relative
                      flex-none
                      snap-center
                      cursor-pointer
                      overflow-hidden
                      rounded-[24px]
                      border
                      ${
                        isActive
                          ? "border-indigo-100 bg-white shadow-xl shadow-indigo-100/60"
                          : "border-indigo-50 bg-indigo-50/40 shadow-md shadow-indigo-50/50"
                      }
                      w-[80vw]
                      max-w-[780px]
                    `}
                  >
                    <div
                      className="
                        grid
                        min-h-[330px]
                        md:grid-cols-2
                      "
                    >

                      {/* ================= CONTENT ================= */}

                      <div
                        className="
                          flex
                          flex-col
                          justify-center
                          p-6
                          md:p-8
                          lg:p-9
                        "
                      >

                        {/* Category */}

                        <div
                          className="
                            mb-5
                            flex
                            items-center
                            gap-2.5
                          "
                        >
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-lg
                              bg-indigo-100
                              text-xs
                              font-bold
                              text-indigo-600
                            "
                          >
                            {project.title.charAt(0)}
                          </div>

                          <span
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.14em]
                              text-indigo-400
                              sm:text-[10px]
                            "
                          >
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}

                        <h3
                          className="
                            text-2xl
                            font-extrabold
                            tracking-tight
                            text-slate-800
                            sm:text-3xl
                          "
                        >
                          {project.title}
                        </h3>

                        {/* Description */}

                        <p
                          className="
                            mt-4
                            max-w-lg
                            text-xs
                            leading-6
                            text-slate-500
                            sm:text-sm
                          "
                        >
                          {project.desc}
                        </p>

                        {/* Highlights */}

                        <p
                          className="
                            mt-5
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-indigo-400
                          "
                        >
                          Project Highlights
                        </p>

                        <div
                          className="
                            mt-2.5
                            flex
                            flex-wrap
                            gap-1.5
                          "
                        >
                          {project.tags.map(
                            (tag) => (
                              <span
                                key={tag}
                                className="
                                  rounded-md
                                  border
                                  border-indigo-100
                                  bg-indigo-50
                                  px-2.5
                                  py-1
                                  text-[9px]
                                  font-semibold
                                  text-indigo-500
                                "
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>

                        {/* View Sample */}

                        <button
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                          className="
                            mt-5
                            flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-indigo-200
                            bg-white
                            px-5
                            py-2.5
                            text-xs
                            font-semibold
                            text-indigo-600
                            shadow-sm
                            transition-all
                            duration-300
                            hover:border-indigo-400
                            hover:bg-indigo-50
                          "
                        >
                          View Sample

                          <span
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          >
                            →
                          </span>
                        </button>
                      </div>

                      {/* ================= IMAGE ================= */}

                      <div
                        className="
                          relative
                          min-h-[230px]
                          overflow-hidden
                          bg-indigo-50
                          md:min-h-full
                        "
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />

                        {/* Image overlay */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-white/15
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* Number */}

                        <div
                          className="
                            absolute
                            right-4
                            top-4
                            rounded-full
                            border
                            border-white/60
                            bg-white/80
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            text-indigo-500
                            shadow-md
                            backdrop-blur-md
                          "
                        >
                          {String(
                            project.realIndex + 1
                          ).padStart(2, "0")}{" "}
                          /{" "}
                          {String(TOTAL).padStart(
                            2,
                            "0"
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              }
            )}
          </div>
        </div>

        {/* ================= DOTS ================= */}

        <div
          className="
            mt-1
            flex
            justify-center
            gap-1.5
          "
        >
          {projects.map(
            (project, index) => (
              <button
                key={project.title}
                onClick={() =>
                  scrollToCard(index)
                }
                aria-label={`Go to ${project.title}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    index === activeIndex
                      ? "w-7 bg-indigo-500"
                      : "w-1.5 bg-indigo-100 hover:bg-indigo-200"
                  }
                `}
              />
            )
          )}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
            mt-10
            text-center
          "
        >
          {/* <p
            className="
              mb-4
              text-xs
              text-slate-400
              sm:text-sm
            "
          >
            Want content like this for your business?
          </p> */}

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              rounded-full
              bg-indigo-500
              px-7
              py-3
              text-xs
              font-bold
              text-white
              shadow-md
              shadow-indigo-100
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-indigo-600
              sm:text-sm
            "
          >
            Start Your Project

            <span className="ml-2 text-base">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
