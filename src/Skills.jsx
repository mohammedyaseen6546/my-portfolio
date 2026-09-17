import React from "react";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaFileExcel,
  FaChartBar,
  FaChartLine,
  FaCode,
} from "react-icons/fa";



const skills = {
  "Data Analytics": [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "SQL",
      icon: <FaDatabase />,
    },
    {
      name: "Excel",
      icon: <FaFileExcel />,
    },
    {
      name: "Power BI",
      icon: <FaChartBar />,
    },
    {
      name: "Pandas",
      icon: <FaCode />,
    },
    {
      name: "NumPy",
      icon: <FaCode />,
    },
    
    {
      name: "Matplotlib",
      icon: <FaChartLine />,
    },
    {
      name: "Seaborn",
      icon: <FaChartBar />,
    },
  ],

  "Web Development": [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <FaCode />,
    },
  ],

  "Tools & Platforms": [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "VS Code",
      icon: <FaCode />,
    },
  ],
};


const Skills = () => {
    return (
        <section
            id="skills"
            data-aos="fade-up"
            className="
        w-full
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        mt-20
        md:mt-28
      "
        >

            {/* ================= HEADER ================= */}

            <div className="text-center mb-12 md:mb-16">

                {/* Label */}
                <div
                    className="
            inline-flex
            items-center
            gap-3
            px-5
            py-2
            rounded-full
            bg-white/70
            backdrop-blur-md
            border
            border-cyan-100
            shadow-sm
          "
                >

                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>

                    <span
                        className="
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[4px]
              text-slate-600
            "
                    >
                        Skills
                    </span>

                </div>


                {/* Main Heading */}
                <h2
                    className="
            mt-5
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight
            text-slate-900
          "
                >
                    My{" "}
                    <span className="text-cyan-500">
                        Skills
                    </span>
                </h2>


                {/* Accent */}
                <div className="flex justify-center items-center gap-3 mt-5">

                    <span className="w-10 h-[2px] bg-slate-300"></span>

                    <span className="w-20 h-1 bg-cyan-500 rounded-full"></span>

                    <span className="w-10 h-[2px] bg-slate-300"></span>

                </div>


                {/* Subtitle */}
                <p
                    className="
            mt-5
            text-base
            sm:text-lg
            text-slate-600
            max-w-2xl
            mx-auto
            leading-7
          "
                >
                    Technologies and tools I use to analyze data,
                    build insights, and develop modern web experiences.
                </p>

            </div>


            {/* ================= SKILL CATEGORIES ================= */}

            <div className="space-y-12">


                {Object.entries(skills).map(
                    ([category, skillList], categoryIndex) => (

                        <div
                            key={category}
                            className="
                relative
                rounded-3xl
                border
                border-cyan-100
                bg-white/60
                backdrop-blur-md
                p-5
                sm:p-7
                md:p-8
                shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                overflow-hidden
              "
                        >

                            {/* Background Glow */}
                            <div
                                className="
                  absolute
                  -top-20
                  -right-20
                  w-56
                  h-56
                  rounded-full
                  bg-cyan-300/10
                  blur-3xl
                  pointer-events-none
                "
                            ></div>


                            {/* Category Header */}
                            <div
                                className="
                  relative
                  z-10
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  mb-7
                "
                            >

                                <div className="flex items-center gap-3">

                                    {/* Icon Bar */}
                                    <span
                                        className="
                      w-1.5
                      h-8
                      rounded-full
                      bg-cyan-500
                    "
                                    ></span>


                                    <h3
                                        className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-slate-900
                    "
                                    >
                                        {category}
                                    </h3>

                                </div>


                                {/* Tool Count */}
                                <span
                                    className="
                    self-start
                    sm:self-auto
                    px-4
                    py-1.5
                    rounded-full
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-cyan-700
                    bg-cyan-50
                    border
                    border-cyan-100
                  "
                                >
                                    {skillList.length}+ Tools
                                </span>

                            </div>


                            {/* ================= SKILL GRID ================= */}

                            <div
                                className={`
                  relative
                  z-10
                  grid
                  gap-4
                  ${categoryIndex === 0
                                        ? "grid-cols-2 sm:grid-cols-4"
                                        : categoryIndex === 1
                                            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                                            : "grid-cols-2 sm:grid-cols-3"
                                    }
                `}
                            >

                                {skillList.map((skill) => (

                                    <div
                                        key={skill.name}
                                        className="
                      group
                      min-h-[125px]
                      sm:min-h-[145px]
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white/80
                      flex
                      flex-col
                      items-center
                      justify-center
                      px-3
                      py-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-cyan-300
                      hover:shadow-[0_12px_30px_rgba(6,182,212,0.12)]
                    "
                                    >

                                        {/* Skill Icon */}

                                        <div
                                            className="
                        text-5xl
                        sm:text-6xl
                        text-slate-700
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-cyan-500
                      "
                                        >
                                            {skill.icon}
                                        </div>


                                        {/* Skill Name */}

                                        <p
                                            className="
                        mt-4
                        text-sm
                        sm:text-base
                        font-semibold
                        text-slate-800
                        text-center
                      "
                                        >
                                            {skill.name}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    )
                )}

            </div>


            {/* ================= BOTTOM STATEMENT ================= */}

           

        </section>
    );
};

export default Skills;