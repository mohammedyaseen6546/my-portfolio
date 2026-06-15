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
        <h1 className="absolute top-5 left-5 md:top-10 md:left-20 text-xl md:text-3xl font-bold">
          Web<span className="text-cyan-500">Developer</span>
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
            Professional Web Developer
          </p>

          <p className="mt-4 text-gray-500 text-base md:text-lg lg:text-xl leading-7 md:leading-8">
            Experienced in Web Development with the ability to develop scalable websites and web applications.
          </p>

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





      <div className="max-w-[700px] mx-auto text-center">

        <p className="text-cyan-500 text-lg font-semibold uppercase tracking-[6px]">
          About
        </p>

        <h1 className="text-4xl font-bold text-slate-900 mt-4 tracking-tight">
          Why <span className="text-cyan-500">Choose Me</span>
        </h1>

        <div className="w-25 h-1 bg-cyan-500 mt-4 mx-auto"></div>

        <p className="mt-6 text-gray-600 leading-7 md:leading-8">
          Passionate Web Developer with strong problem-solving skills
          and experience building responsive and scalable web applications.
          Dedicated to creating clean, user-friendly and efficient
          digital solutions while continuously learning modern technologies.
        </p>




        <div className="mt-10 space-y-6 text-left">

           <div>

            <div className="flex justify-between">

              <p>Express.js</p>

              <p>50%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

              <div className="bg-cyan-500 h-3 rounded-full w-[50%]"></div>

            </div>

          </div>


           <div>

            <div className="flex justify-between">

              <p>Next.js</p>

              <p>65%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

<div className="bg-cyan-500 h-3 rounded-full w-[65%]"></div>
            </div>

          </div>


           <div>

            <div className="flex justify-between">

              <p>React.Js</p>

              <p>75%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

              <div className="bg-cyan-500 h-3 rounded-full w-[75%]"></div>

            </div>

          </div>


           <div>
            <div className="flex justify-between">

              <p>Java Script</p>

              <p>65%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

              <div className="bg-cyan-500 h-3 rounded-full w-[65%]"></div>

            </div>

          </div>


          <div>

            <div className="flex justify-between">

              <p>Java</p>

              <p>40%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

              <div className="bg-cyan-500 h-3 rounded-full w-[40%]"></div>

            </div>

          </div>





          <div>

            <div className="flex justify-between">

              <p>HTML/CSS</p>

              <p>85%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

              <div className="bg-cyan-500 h-3 rounded-full w-[85%]"></div>

            </div>

          </div>

         

          <div>



            <div className="flex justify-between">

              <p>Tailwind CSS</p>

              <p>90%</p>

            </div>

            <div className="bg-gray-300 h-3 rounded-full">

              <div className="bg-cyan-500 h-3 rounded-full w-[90%]"></div>

            </div>

          </div>

         

        </div>

      </div>

    </div>

  </>
  );
};