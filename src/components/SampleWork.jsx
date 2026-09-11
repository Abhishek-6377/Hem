import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Blog",
    category: "SaaS & Technology",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    desc: "A detailed, easy-to-read SaaS article written to explain a complex product while keeping readers engaged. The content combines research, SEO structure, and a natural brand voice to educate users and build product trust.",
    tags: ["2,000+ Words", "100% Original", "SEO Ready"],
  },
  {
    title: "Healthcare Article",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    desc: "Patient-friendly healthcare content that turns complicated information into simple, useful explanations. The article focuses on clarity, credibility, and an approachable tone without making the subject feel overly technical.",
    tags: ["1,800+ Words", "Well Researched", "Reader Friendly"],
  },
  {
    title: "FinTech Guide",
    category: "Finance & FinTech",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=85",
    desc: "A long-form financial guide created to make a complex topic easier for everyday readers to understand. It combines structured research, clear explanations, and SEO-focused formatting for better visibility and engagement.",
    tags: ["2,500+ Words", "Expert Research", "SEO Focused"],
  },
  {
    title: "E-Commerce Copy",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    desc: "Conversion-focused product content designed to highlight benefits instead of simply listing features. The copy uses clear language, persuasive messaging, and customer-focused positioning to encourage confident buying decisions.",
    tags: ["Conversion Copy", "Original Content", "Brand Voice"],
  },
  {
    title: "Travel Guide",
    category: "Travel & Lifestyle",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    desc: "An engaging destination guide written to inspire readers while giving them practical information they can actually use. The content blends storytelling, useful recommendations, and search-friendly structure in one experience.",
    tags: ["2,000+ Words", "Human Written", "SEO Optimized"],
  },
  {
    title: "Personal Brand Article",
    category: "Personal Branding",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    desc: "A thought-leadership article created around a personal brand's expertise, opinions, and unique perspective. The writing keeps the personality authentic while positioning the individual as knowledgeable and trustworthy in their field.",
    tags: ["Thought Leadership", "Unique Voice", "Original Copy"],
  },
];

/*
  Create many copies of the projects.

  The carousel starts in the middle.
  This makes the carousel feel genuinely infinite.
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

    const styles =
      window.getComputedStyle(carouselRef.current);

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
    Convert any index to the original 0-5 range.
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

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      clearTimeout(timer);

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /*
    Detect the card closest to the center.
  */
  const handleScroll = () => {
    if (!carouselRef.current) return;

    const currentIndex =
      getCurrentIndex();

    const realIndex =
      normalizeIndex(currentIndex);

    setActiveIndex(realIndex);

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    /*
      Keep the user away from the actual
      beginning/end of the repeated array.

      The reposition happens between
      identical cards, so the user won't
      notice it.
    */

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

    const currentIndex =
      getCurrentIndex();

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    carouselRef.current.scrollTo({
      left:
        (currentIndex + 1) *
        cardWidth,
      behavior: "smooth",
    });
  };

  /*
    PREVIOUS PROJECT
  */
  const previousProject = () => {
    if (!carouselRef.current) return;

    const currentIndex =
      getCurrentIndex();

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    carouselRef.current.scrollTo({
      left:
        (currentIndex - 1) *
        cardWidth,
      behavior: "smooth",
    });
  };

  /*
    Click on a dot.
    Always jump to the middle copy.
  */
  const scrollToCard = (index) => {
    if (!carouselRef.current) return;

    const cardWidth = getCardWidth();

    if (!cardWidth) return;

    const targetIndex =
      MIDDLE_COPY * TOTAL + index;

    carouselRef.current.scrollTo({
      left:
        targetIndex * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /*
    Convert mouse wheel movement
    into horizontal scrolling.
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
        py-24
        md:py-28
      "
    >

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-100/50
          blur-3xl
        " />

        <div className="
          absolute
          right-0
          top-1/3
          h-72
          w-72
          rounded-full
          bg-sky-100/40
          blur-3xl
        " />

        <div className="
          absolute
          bottom-0
          left-0
          h-72
          w-72
          rounded-full
          bg-violet-100/40
          blur-3xl
        " />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>


      <div className="relative z-10">

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-4xl px-6 text-center">

          <motion.span
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
              duration: 0.5,
            }}
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-indigo-500
            "
          >
            Selected Work
          </motion.span>


          <motion.h2
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
            className="
              mt-4
              text-4xl
              font-extrabold
              tracking-tight
              text-slate-800
              sm:text-5xl
              md:text-6xl
            "
          >
            Success Stories That{" "}

            <span className="text-indigo-500">
              Showcase Our Impact
            </span>

          </motion.h2>


          <motion.p
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
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              md:text-base
            "
          >
            Explore how we turn ideas into digital solutions that
            deliver real business results and long-term growth.
          </motion.p>


          {/* Portfolio Button */}

          <motion.a
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
              duration: 0.5,
              delay: 0.2,
            }}
            href="/portfolio"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-indigo-500
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-indigo-100
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-indigo-600
            "
          >
            View Portfolio

            <span className="text-base">
              →
            </span>

          </motion.a>

        </div>


        {/* ================= CAROUSEL ================= */}

        <div className="relative mt-14">

          {/* LEFT BUTTON */}

          <button
            onClick={previousProject}
            aria-label="Previous project"
            className="
              absolute
              left-5
              top-1/2
              z-30
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-indigo-100
              bg-white
              text-indigo-500
              shadow-lg
              shadow-indigo-100/50
              transition-all
              hover:scale-110
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
              right-5
              top-1/2
              z-30
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-indigo-100
              bg-white
              text-indigo-500
              shadow-lg
              shadow-indigo-100/50
              transition-all
              hover:scale-110
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
              gap-6
              overflow-x-auto
              px-[8vw]
              pb-8
              scroll-smooth
              lg:px-[15vw]
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
                      scale:
                        isActive
                          ? 1
                          : 0.92,
                      opacity:
                        isActive
                          ? 1
                          : 0.75,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className={`
                      group
                      relative
                      flex-none
                      snap-center
                      cursor-pointer
                      overflow-hidden
                      rounded-[30px]
                      border
                      ${
                        isActive
                          ? "border-indigo-100 bg-white shadow-2xl shadow-indigo-100/70"
                          : "border-indigo-50 bg-indigo-50/50 shadow-lg shadow-indigo-50/60"
                      }
                      w-[82vw]
                      max-w-[900px]
                    `}
                  >

                    <div className="
                      grid
                      min-h-[390px]
                      md:grid-cols-2
                    ">

                      {/* ================= CONTENT ================= */}

                      <div className="
                        flex
                        flex-col
                        justify-center
                        p-8
                        md:p-10
                        lg:p-12
                      ">

                        {/* Category */}

                        <div className="
                          mb-6
                          flex
                          items-center
                          gap-3
                        ">

                          <div className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-indigo-100
                            text-sm
                            font-bold
                            text-indigo-600
                          ">
                            {project.title.charAt(0)}
                          </div>

                          <span className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-indigo-400
                          ">
                            {project.category}
                          </span>

                        </div>


                        {/* Title */}

                        <h3 className="
                          text-3xl
                          font-extrabold
                          tracking-tight
                          text-slate-800
                          md:text-4xl
                        ">
                          {project.title}
                        </h3>


                        {/* Description */}

                        <p className="
                          mt-5
                          max-w-lg
                          text-sm
                          leading-7
                          text-slate-500
                          md:text-[15px]
                        ">
                          {project.desc}
                        </p>


                        {/* Highlights */}

                        <p className="
                          mt-7
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-indigo-400
                        ">
                          Project Highlights
                        </p>


                        <div className="
                          mt-3
                          flex
                          flex-wrap
                          gap-2
                        ">

                          {project.tags.map(
                            (tag) => (

                              <span
                                key={tag}
                                className="
                                  rounded-md
                                  border
                                  border-indigo-100
                                  bg-indigo-50
                                  px-3
                                  py-1.5
                                  text-[10px]
                                  font-semibold
                                  text-indigo-500
                                "
                              >
                                {tag}
                              </span>

                            )
                          )}

                        </div>


                        {/* Case Study */}

                        <button
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                          className="
                            mt-7
                            flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-indigo-200
                            bg-white
                            px-6
                            py-3
                            text-sm
                            font-semibold
                            text-indigo-600
                            shadow-sm
                            transition-all
                            duration-300
                            hover:border-indigo-400
                            hover:bg-indigo-50
                          "
                        >
                          View Case Study

                          <span className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          ">
                            →
                          </span>

                        </button>

                      </div>


                      {/* ================= IMAGE ================= */}

                      <div className="
                        relative
                        min-h-[280px]
                        overflow-hidden
                        bg-indigo-50
                        md:min-h-full
                      ">

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

                        <div className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-white/20
                          via-transparent
                          to-transparent
                        " />


                        {/* Number */}

                        <div className="
                          absolute
                          right-5
                          top-5
                          rounded-full
                          border
                          border-white/60
                          bg-white/80
                          px-4
                          py-2
                          text-xs
                          font-bold
                          text-indigo-500
                          shadow-lg
                          shadow-indigo-100/40
                          backdrop-blur-md
                        ">
                          {String(
                            project.realIndex + 1
                          ).padStart(2, "0")}{" "}
                          /{" "}
                          {String(
                            TOTAL
                          ).padStart(2, "0")}
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

        <div className="
          mt-3
          flex
          justify-center
          gap-2
        ">

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
                    index ===
                    activeIndex
                      ? "w-8 bg-indigo-500"
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
          className="
            mt-14
            text-center
          "
        >

          <p className="
            mb-5
            text-sm
            text-slate-400
          ">
            Want content like this for your business?
          </p>


          <a
            href="/contact"
            className="
              inline-flex
              items-center
              rounded-full
              bg-indigo-500
              px-8
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-indigo-100
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-indigo-600
            "
          >
            Start Your Project

            <span className="ml-2 text-lg">
              →
            </span>

          </a>

        </motion.div>

      </div>

    </section>
  );
}
