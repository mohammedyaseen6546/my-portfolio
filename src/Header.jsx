import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (<>
    <div
  id="home"
  className="min-h-screen flex flex-col md:flex-row overflow-hidden relative"
>


  <div className="absolute inset-0 overflow-hidden z-0">
  <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-blob"></div>

  <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

  <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
</div>


<div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center px-6 lg:pl-40 xl:pl-52 md:pr-10 lg:pr-20 py-20">
        <h1
  className="
    absolute
    top-5
    left-5
    md:top-10
    md:left-20
    text-xl
    sm:text-2xl
    md:text-3xl
    font-extrabold
    tracking-tight
    text-slate-900
    select-none
  "
>
  AI
  <span
    className="
      text-cyan-500
      ml-1
      transition-colors
      duration-300
    "
  >
    Data Analyst
  </span>
</h1>


        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-10 border rounded-full px-5 py-10 text-2xl">


          <a
            href="https://twitter.com/mohd_yaseen6546"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-cyan-500 hover:scale-125 cursor-pointer transition duration-300"
            />
          </a>


          <a
            href="https://instagram.com/syed__iliyaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-pink-500 hover:scale-125 cursor-pointer transition duration-300"
            />
          </a>


          <a
            href="https://linkedin.com/in/mohammedyaseen6546"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="hover:text-blue-500 hover:scale-125 cursor-pointer transition duration-300"
            />
          </a>

        </div>


        <div className="animate-fadeInUp">
          <p className="text-3xl md:text-5xl text-cyan-500 font-semibold">
            Hello I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mt-4">
            Mohammed Yaseen
          </h1>

          <p className="text-lg sm:text-2xl lg:text-3xl mt-4 text-slate-700">
  AI Data Analyst <span className="text-cyan-500">&</span> Web Developer
</p>

          <p className="mt-4 text-gray-500 text-base md:text-lg lg:text-xl leading-7 md:leading-8">
Skilled in Data Analytics and Web Development, with a focus on turning data into meaningful insights and building modern, scalable, and user-friendly web applications.          </p>

          <a href="#contact">
            <button className="mt-10 px-10 py-4 mt-10
px-10
py-4
bg-gradient-to-r
from-gray-800
via-slate-700
to-gray-900
text-white
rounded-lg
font-semibold
shadow-lg
transition-all
duration-300
hover:scale-105
hover:shadow-2xl
hover:from-slate-700
hover:via-slate-600
hover:to-cyan-700">
              Hire Me
            </button>
          </a>
        </div>
      </div>


<div className="w-full md:w-1/2 relative z-10 min-h-[350px] md:min-h-[500px]">

 

        <div className="hidden md:flex justify-center pt-8 relative z-10">
  <div className="flex gap-8 px-8 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-lg"> 
                 <a
          href="#home"
          className="
  px-5 py-2
  rounded-lg
  text-black
  transition-all
  duration-300
  hover:text-white
  hover:bg-gradient-to-r
  hover:from-slate-700
  hover:via-slate-600
  hover:to-cyan-700
  hover:shadow-lg
  hover:scale-105
  "
        >
          Home
        </a>

          <a
            href="#about"
            className="
  px-5 py-2
  rounded-lg
  text-black
  transition-all
  duration-300
  hover:text-white
  hover:bg-gradient-to-r
  hover:from-slate-700
  hover:via-slate-600
  hover:to-cyan-700
  hover:shadow-lg
  hover:scale-105
  "
          >
            About
          </a>

          <a
            href="#projects"
            className="
  px-5 py-2
  rounded-lg
  text-black
  transition-all
  duration-300
  hover:text-white
  hover:bg-gradient-to-r
  hover:from-slate-700
  hover:via-slate-600
  hover:to-cyan-700
  hover:shadow-lg
  hover:scale-105
  "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
  px-5 py-2
  rounded-lg
  text-black
  transition-all
  duration-300
  hover:text-white
  hover:bg-gradient-to-r
  hover:from-slate-700
  hover:via-slate-600
  hover:to-cyan-700
  hover:shadow-lg
  hover:scale-105
  "
          >
            Contact
          </a>


        </div>
        </div>


        <div className="animate-fadeInRight flex justify-center items-center mt-4 md:mt-20 md:ml-20">

          <img
            src="/portimage.png"
            alt="Mohammed Yaseen"
            className="
w-[280px]
sm:w-[350px]
md:w-[450px]
lg:w-[520px]
h-auto
object-contain
rounded-full
mx-auto
animate-float
drop-shadow-2xl
"
          />

        </div>
      </div>
    </div>





    <div
  id="about"
  data-aos="fade-up"
  className=" px-6 md:px-20 py-20"
>





     <div
  className="
    max-w-4xl
    mx-auto
    text-center
    relative
  "
>

  {/* Section Label */}
  <div
    className="
      inline-flex
      items-center
      gap-3
      px-5
      py-2
      rounded-full
      bg-white/60
      backdrop-blur-md
      border
      border-cyan-100
      shadow-sm
    "
  >
    <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full"></span>

    <p className="text-cyan-600 text-xs sm:text-sm font-semibold uppercase tracking-[4px]">
      About
    </p>
  </div>


  {/* Heading */}
  <h1
    className="
      text-4xl
      sm:text-5xl
      md:text-6xl
      font-extrabold
      text-slate-900
      mt-6
      tracking-tight
      leading-tight
    "
  >
    Why{" "}
    <span className="text-cyan-500">
      Choose Me
    </span>
  </h1>


  {/* Accent Line */}
  <div className="flex justify-center items-center gap-3 mt-5">

    <div className="w-12 h-[2px] bg-slate-300"></div>

    <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>

    <div className="w-12 h-[2px] bg-slate-300"></div>

  </div>


  {/* Intro */}
  <p
    className="
      mt-8
      text-base
      sm:text-lg
      md:text-xl
      text-slate-600
      leading-7
      sm:leading-8
      md:leading-9
      max-w-3xl
      mx-auto
    "
  >
    I'm a Computer Science graduate with a strong interest in{" "}
    <span className="font-semibold text-slate-900">
      Data Analytics
    </span>{" "}
    and{" "}
    <span className="font-semibold text-slate-900">
      Web Development
    </span>
    . I enjoy working with data to discover meaningful insights,
    create impactful visualizations, and build modern,
    responsive web applications.
  </p>


  {/* Skills / Technology Description */}
  <p
    className="
      mt-5
      text-base
      sm:text-lg
      md:text-xl
      text-slate-600
      leading-7
      sm:leading-8
      md:leading-9
      max-w-3xl
      mx-auto
    "
  >
    I work with technologies including{" "}
    <span className="font-semibold text-slate-800">
      Python, SQL, Excel, Power BI, Pandas, NumPy,
      Matplotlib, Seaborn, HTML, CSS, JavaScript,
      React.js, and Tailwind CSS
    </span>
    . I'm continuously improving my skills through practical
    projects and real-world problem solving.
  </p>


  {/* Mini Highlights */}
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-3
      gap-4
      mt-10
      max-w-3xl
      mx-auto
    "
  >

    {/* Data Analytics */}
    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-100
        bg-white/60
        backdrop-blur-md
        px-5
        py-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-cyan-300
      "
    >
      <p className="text-cyan-500 text-2xl font-bold">
        Data
      </p>

      <p className="mt-1 font-semibold text-slate-800">
        Analytics
      </p>

      <p className="text-sm text-slate-500 mt-1">
        Insights & Visualization
      </p>
    </div>


    {/* Web Development */}
    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-100
        bg-white/60
        backdrop-blur-md
        px-5
        py-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-cyan-300
      "
    >
      <p className="text-cyan-500 text-2xl font-bold">
        Web
      </p>

      <p className="mt-1 font-semibold text-slate-800">
        Development
      </p>

      <p className="text-sm text-slate-500 mt-1">
        Modern & Responsive
      </p>
    </div>


    {/* Learning */}
    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-100
        bg-white/60
        backdrop-blur-md
        px-5
        py-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-cyan-300
      "
    >
      <p className="text-cyan-500 text-2xl font-bold">
        Always
      </p>

      <p className="mt-1 font-semibold text-slate-800">
        Learning
      </p>

      <p className="text-sm text-slate-500 mt-1">
        Improving Every Day
      </p>
    </div>

  </div>


  {/* Bottom Statement */}
  <div className="mt-10">

    <div className="flex justify-center items-center gap-3">

      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

      <p className="text-sm sm:text-base font-semibold tracking-[3px] text-slate-500 uppercase">
        Learn
        <span className="text-cyan-500 mx-2">•</span>
        Analyze
        <span className="text-cyan-500 mx-2">•</span>
        Develop
        <span className="text-cyan-500 mx-2">•</span>
        Grow
      </p>

      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

    </div>

  </div>

</div>

    </div>

  </>
  );
};