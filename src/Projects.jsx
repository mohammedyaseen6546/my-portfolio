import React, { useMemo, useState } from "react";

import {
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
  FaChartBar,
  FaCode,
  FaRobot,
  FaMobileAlt,
  FaDatabase,
  FaChevronLeft,
  FaChevronRight,
  FaPython,
  FaReact,
} from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      image:
        "https://www.finereport.com/en/wp-content/uploads/2020/06/2020062201I.png",

      title: "Sales Data Analysis",

      type: "Data Analytics",

      description:
        "Analyzing sales data to discover trends, patterns, and meaningful business insights using Python and data visualization.",

      technologies: ["Python", "Pandas", "Matplotlib"],

      github: "YOUR_GITHUB_LINK",

      icon: <FaChartBar />,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iMeP58WOIRFtgSy-gw_HEi1iroprsenXKcQB43czPM6C7Mh72A_PvBo&s=10",

      title: "E-Commerce Sales Dashboard",

      type: "Data Analytics",

      description:
        "Interactive dashboard designed to analyze sales performance, products, customers, and business trends.",

      technologies: ["Power BI", "Excel", "Data Analysis"],

      github: "YOUR_GITHUB_LINK",

      icon: <FaChartBar />,
    },

    {
      image:
        "https://noblestudios.com/wp-content/uploads/ai-travel-planner-1-scaled.webp",

      title: "AI Travel Itinerary Planner",

      type: "AI / ML",

      description:
        "AI-powered travel planning application designed to help users explore destinations and create personalized travel experiences.",

      technologies: ["React", "AI", "Leaflet"],

      github: "https://github.com/mohammedyaseen6546",

      icon: <FaRobot />,
    },

    {
      image:
        "https://thumbs.dreamstime.com/b/two-friends-riding-green-scooter-together-young-men-happily-driver-wears-red-t-shirt-brown-shorts-passenger-402063843.jpg",

      title: "College Go",

      type: "Web Development",

      description:
        "A student-focused web application designed to provide useful college-related features in a simple and accessible interface.",

      technologies: ["React", "JavaScript", "Tailwind CSS"],

      github: "https://github.com/mohammedyaseen6546/collegeGo",

      icon: <FaMobileAlt />,
    },

    {
      image:
        "https://img.magnific.com/free-vector/fitness-concept-illustration_1284-7547.jpg",

      title: "Fitness Meal Planner",

      type: "Web Development",

      description:
        "Fitness-focused application that helps users plan meals and understand nutrition based on their fitness goals.",

      technologies: ["HTML", "CSS", "JavaScript"],

      github:
        "https://github.com/mohammedyaseen6546/fitness-meal-planner",

      icon: <FaCode />,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylRJBi8cuJMnFpY2Tw3QOPGToMGtY2qHQ1w&s",

      title: "SDHub Website Clone",

      type: "Web Development",

      description:
        "Modern responsive website interface recreated using React with a focus on clean UI and responsive design.",

      technologies: ["React", "JavaScript", "Tailwind CSS"],

      github: "https://sdhub.in/",

      icon: <FaReact />,
    },
  ];

  const categories = [
    "All",
    "Data Analytics",
    "Web Development",
    "AI / ML",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [start, setStart] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.type === activeCategory
    );
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(start, start + 4);

  const totalPages = Math.ceil(filteredProjects.length / 4);

  const currentPage = Math.floor(start / 4);

  function changeCategory(category) {
    setActiveCategory(category);
    setStart(0);
  }

  function nextSlide() {
    if (start + 4 < filteredProjects.length) {
      setStart(start + 4);
    }
  }

  function prevSlide() {
    if (start - 4 >= 0) {
      setStart(start - 4);
    }
  }

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-50
        py-20
        md:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Top left glow */}
        <div
          className="
            absolute
            -top-32
            -left-32
            w-96
            h-96
            rounded-full
            bg-cyan-300/10
            blur-3xl
          "
        ></div>

        {/* Top right glow */}
        <div
          className="
            absolute
            top-20
            -right-32
            w-96
            h-96
            rounded-full
            bg-blue-300/10
            blur-3xl
          "
        ></div>

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[250px]
            rounded-full
            bg-cyan-200/10
            blur-3xl
          "
        ></div>

        {/* Dot pattern */}
        <div
          className="
            absolute
            top-20
            left-8
            w-24
            h-24
            opacity-40
          "
          style={{
            backgroundImage:
              "radial-gradient(#06b6d4 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        ></div>

        <div
          className="
            absolute
            bottom-20
            right-8
            w-24
            h-24
            opacity-30
          "
          style={{
            backgroundImage:
              "radial-gradient(#06b6d4 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        ></div>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="text-center max-w-3xl mx-auto">

          {/* Small label */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2.5
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border
              border-cyan-100
              shadow-sm
            "
          >
            <span
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-cyan-500
                shadow-[0_0_12px_rgba(6,182,212,0.7)]
              "
            ></span>

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                tracking-[4px]
                uppercase
                text-slate-600
              "
            >
              Projects
            </span>
          </div>

          {/* Main heading */}

          <h2
            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              tracking-tight
              text-slate-900
            "
          >
            Latest{" "}
            <span className="text-cyan-500">
              Projects
            </span>
          </h2>

          {/* Accent */}

          <div className="flex justify-center items-center gap-3 mt-5">

            <span className="w-10 h-[2px] bg-slate-300"></span>

            <span
              className="
                w-20
                h-1
                bg-cyan-500
                rounded-full
                shadow-[0_0_12px_rgba(6,182,212,0.35)]
              "
            ></span>

            <span className="w-10 h-[2px] bg-slate-300"></span>

          </div>

          {/* Description */}

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              text-slate-600
              leading-7
            "
          >
            A collection of projects showcasing my work in
            <span className="font-semibold text-slate-800">
              {" "}Data Analytics
            </span>
            ,
            <span className="font-semibold text-slate-800">
              {" "}Web Development
            </span>
            {" "}and
            <span className="font-semibold text-slate-800">
              {" "}AI-powered solutions.
            </span>
          </p>
        </div>


        {/* ===================================================
            CATEGORY FILTERS
        ==================================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-3
            mt-10
            mb-12
          "
        >
          {categories.map((category) => (

            <button
              key={category}
              onClick={() => changeCategory(category)}
              className={`
                px-5
                sm:px-7
                py-2.5
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
                border
                ${
                  activeCategory === category
                    ? `
                      bg-cyan-500
                      text-white
                      border-cyan-500
                      shadow-[0_8px_25px_rgba(6,182,212,0.25)]
                      scale-105
                    `
                    : `
                      bg-white/80
                      text-slate-700
                      border-slate-200
                      hover:border-cyan-300
                      hover:text-cyan-600
                      hover:-translate-y-1
                    `
                }
              `}
            >
              {category}
            </button>

          ))}
        </div>


        {/* ===================================================
            PROJECT GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            lg:gap-7
          "
        >

          {visibleProjects.map((project, index) => (

            <article
              key={`${project.title}-${index}`}
              className="
                group
                relative
                flex
                flex-col
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-slate-200/80
                shadow-[0_12px_40px_rgba(15,23,42,0.06)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-200
                hover:shadow-[0_25px_60px_rgba(6,182,212,0.14)]
              "
            >

              {/* ==========================================
                  IMAGE
              =========================================== */}

              <div className="relative p-2">

                <div
                  className="
                    relative
                    h-52
                    sm:h-56
                    overflow-hidden
                    rounded-2xl
                    bg-slate-100
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/30
                      via-transparent
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  ></div>

                  {/* Category badge */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      inline-flex
                      items-center
                      gap-2
                      px-3.5
                      py-2
                      rounded-full
                      bg-white/90
                      backdrop-blur-md
                      border
                      border-white/70
                      shadow-lg
                    "
                  >

                    <span className="text-cyan-500 text-sm">
                      {project.icon}
                    </span>

                    <span
                      className="
                        text-xs
                        font-bold
                        text-slate-800
                      "
                    >
                      {project.type}
                    </span>

                  </div>


                  {/* External button */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="
                        absolute
                        top-4
                        right-4
                        w-11
                        h-11
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-white/95
                        text-slate-800
                        shadow-lg
                        opacity-0
                        translate-y-2
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        hover:bg-cyan-500
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}

                </div>

              </div>


              {/* ==========================================
                  CONTENT
              =========================================== */}

              <div
                className="
                  flex
                  flex-col
                  flex-1
                  px-5
                  pt-3
                  pb-5
                "
              >

                {/* Title */}

                <h3
                  className="
                    text-lg
                    sm:text-xl
                    font-extrabold
                    text-slate-900
                    tracking-tight
                    leading-snug
                    group-hover:text-cyan-600
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-slate-50
                        border
                        border-slate-200
                        text-[11px]
                        sm:text-xs
                        font-semibold
                        text-slate-600
                        group-hover:border-cyan-100
                        group-hover:bg-cyan-50/50
                        transition-colors
                        duration-300
                      "
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                {/* Bottom action */}

                <div
                  className="
                    mt-auto
                    pt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    mt-6
                  "
                >

                  {project.github ? (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-cyan-600
                        hover:text-cyan-700
                        transition-colors
                      "
                    >
                      View Project

                      <FaArrowRight
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </a>

                  ) : (

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-slate-400
                      "
                    >
                      Project Details

                      <FaArrowRight />
                    </span>

                  )}


                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      className="
                        w-10
                        h-10
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-100
                        text-slate-700
                        hover:bg-slate-900
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <FaGithub />
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ===================================================
            EMPTY STATE
        ==================================================== */}

        {visibleProjects.length === 0 && (

          <div
            className="
              text-center
              py-20
              rounded-3xl
              bg-white
              border
              border-slate-200
            "
          >
            <p className="text-slate-500">
              No projects available in this category.
            </p>
          </div>

        )}


        {/* ===================================================
            PAGINATION
        ==================================================== */}

        {filteredProjects.length > 4 && (

          <div
            className="
              flex
              justify-center
              items-center
              gap-6
              mt-12
            "
          >

            {/* Previous */}

            <button
              onClick={prevSlide}
              disabled={start === 0}
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                border
                border-slate-200
                text-slate-700
                shadow-sm
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-white
                hover:border-cyan-500
                disabled:opacity-40
                disabled:hover:bg-white
                disabled:hover:text-slate-700
                disabled:cursor-not-allowed
              "
            >
              <FaChevronLeft />
            </button>


            {/* Dots */}

            <div className="flex items-center gap-2">

              {Array.from({ length: totalPages }).map(
                (_, index) => (

                  <button
                    key={index}
                    onClick={() => setStart(index * 4)}
                    aria-label={`Go to project page ${
                      index + 1
                    }`}
                    className={`
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        currentPage === index
                          ? `
                            w-8
                            h-2.5
                            bg-cyan-500
                            shadow-[0_0_10px_rgba(6,182,212,0.35)]
                          `
                          : `
                            w-2.5
                            h-2.5
                            bg-slate-300
                            hover:bg-cyan-300
                          `
                      }
                    `}
                  ></button>

                )
              )}

            </div>


            {/* Next */}

            <button
              onClick={nextSlide}
              disabled={start + 4 >= filteredProjects.length}
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                border
                border-slate-200
                text-slate-700
                shadow-sm
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-white
                hover:border-cyan-500
                disabled:opacity-40
                disabled:hover:bg-white
                disabled:hover:text-slate-700
                disabled:cursor-not-allowed
              "
            >
              <FaChevronRight />
            </button>

          </div>

        )}


        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            mt-16
            px-7
            sm:px-10
            py-7
            rounded-3xl
            bg-white/70
            backdrop-blur-xl
            border
            border-cyan-100
            shadow-[0_15px_45px_rgba(15,23,42,0.05)]
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-cyan-50
                text-cyan-500
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FaCode />
            </div>

            <div>

              <p
                className="
                  font-bold
                  text-slate-900
                "
              >
                Building. Learning. Improving.
              </p>

              <p
                className="
                  text-sm
                  text-slate-500
                  mt-1
                "
              >
                More practical projects coming soon.
              </p>

            </div>

          </div>


          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-slate-900
              text-white
              text-sm
              font-bold
              shadow-lg
              hover:bg-cyan-500
              hover:shadow-[0_10px_30px_rgba(6,182,212,0.25)]
              transition-all
              duration-300
              group
            "
          >
            Let's Build Together

            <FaArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

        </div>

         

      </div>
    </section>
  );
};