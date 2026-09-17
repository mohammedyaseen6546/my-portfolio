 import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      className="w-full px-0 sm:px-4 md:px-6 py-10 md:py-16"
    >
      {/* FULL WIDTH FOOTER */}
      <div
        className="
          relative
          w-full
          min-h-[520px]
          md:min-h-[600px]
          overflow-hidden

          bg-gradient-to-br
          from-white
          via-sky-50
          to-blue-100

          border
          border-cyan-200

          sm:rounded-3xl

          shadow-[0_20px_70px_rgba(15,23,42,0.12)]
        "
      >

        {/* ================= DECORATIVE BACKGROUND ================= */}

        <div
          className="
            absolute
            -top-40
            -right-40
            w-[420px]
            h-[420px]
            bg-cyan-300/20
            rounded-full
            blur-3xl
            pointer-events-none
          "
        ></div>

        <div
          className="
            absolute
            -bottom-48
            -left-40
            w-[500px]
            h-[500px]
            bg-blue-300/20
            rounded-full
            blur-3xl
            pointer-events-none
          "
        ></div>

        {/* Decorative dots */}
        <div className="absolute top-12 left-8 md:left-16 hidden sm:grid grid-cols-4 gap-3 opacity-40">
          {[...Array(16)].map((_, index) => (
            <span
              key={index}
              className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
            ></span>
          ))}
        </div>

        <div className="absolute bottom-16 right-8 md:right-16 hidden sm:grid grid-cols-4 gap-3 opacity-40">
          {[...Array(16)].map((_, index) => (
            <span
              key={index}
              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            ></span>
          ))}
        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="relative z-10 min-h-[520px] md:min-h-[600px] flex flex-col justify-between px-5 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16">

          {/* TOP */}

          <div className="text-center">

            <p className="text-cyan-500 text-xs sm:text-sm font-bold uppercase tracking-[5px]">
              Let's Connect
            </p>

            <h2
              data-aos="zoom-in"
              className="
                mt-4
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                tracking-tight
                text-slate-900
              "
            >
              AI Data Analyst
              <span className="text-cyan-500"> & </span>
              Web Developer
            </h2>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                md:text-lg
                tracking-[2px]
                uppercase
                text-slate-500
              "
            >
              Turning Data Into Insights
              <span className="text-cyan-500 mx-2">•</span>
              Building Ideas Into Reality
            </p>

          </div>


          {/* ================= SOCIAL ICONS ================= */}

          <div className="flex justify-center gap-4 sm:gap-5 mt-10">

            {/* GitHub */}
            <a
              href="https://github.com/mohammedyaseen6546"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white/80
                border
                border-slate-200
                text-slate-800
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-slate-900
                hover:text-white
                hover:shadow-xl
              "
            >
              <FaGithub size={20} />
            </a>


            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mohammedyaseen6546"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white/80
                border
                border-slate-200
                text-slate-800
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-blue-600
                hover:text-white
                hover:shadow-xl
              "
            >
              <FaLinkedinIn size={20} />
            </a>


            {/* Instagram */}
            <a
              href="https://instagram.com/syed__iliyaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white/80
                border
                border-slate-200
                text-slate-800
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-pink-500
                hover:text-white
                hover:shadow-xl
              "
            >
              <FaInstagram size={20} />
            </a>


            {/* Twitter */}
            <a
              href="https://twitter.com/mohd_yaseen6546"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-white/80
                border
                border-slate-200
                text-slate-800
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-slate-900
                hover:text-white
                hover:shadow-xl
              "
            >
              <FaTwitter size={20} />
            </a>

          </div>


          {/* ================= EMAIL ================= */}

          <a
            href="mailto:mohammedyaseen6546@gmail.com"
            className="
              group
              flex
              items-center
              justify-between
              gap-3
              w-full
              max-w-2xl
              mx-auto
              mt-10
              px-4
              sm:px-6
              py-3
              sm:py-4
              rounded-full
              bg-white/80
              backdrop-blur-md
              border
              border-cyan-200
              shadow-md
              hover:shadow-2xl
              hover:border-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <div className="flex items-center gap-3 min-w-0">

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  rounded-full
                  bg-cyan-500
                  text-white
                  shadow-md
                "
              >
                <FaEnvelope />
              </div>

              <span
                className="
                  text-xs
                  sm:text-sm
                  md:text-lg
                  font-semibold
                  text-slate-700
                  truncate
                "
              >
                mohammedyaseen6546@gmail.com
              </span>

            </div>


            <span
              className="
                shrink-0
                flex
                items-center
                justify-center
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-cyan-500
                text-white
                text-lg
                sm:text-xl
                group-hover:translate-x-1
                transition-transform
                duration-300
              "
            >
              →
            </span>

          </a>


          {/* ================= DIVIDER ================= */}

          <div className="flex items-center justify-center gap-4 mt-10 md:mt-12">

            <div className="h-px w-16 sm:w-24 md:w-32 bg-slate-300"></div>

            <div className="w-12 sm:w-16 h-1 bg-cyan-500 rounded-full"></div>

            <div className="h-px w-16 sm:w-24 md:w-32 bg-slate-300"></div>

          </div>


          {/* ================= NAVIGATION ================= */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-4
              sm:gap-6
              md:gap-8
              mt-8
              text-xs
              sm:text-sm
              font-semibold
              tracking-[2px]
              sm:tracking-[3px]
              text-slate-500
              uppercase
            "
          >

            <a
              href="#home"
              className="hover:text-cyan-500 transition duration-300"
            >
              Home
            </a>

            <span className="text-slate-300">|</span>

            <a
              href="#about"
              className="hover:text-cyan-500 transition duration-300"
            >
              About
            </a>

            <span className="text-slate-300">|</span>

            <a
              href="#projects"
              className="hover:text-cyan-500 transition duration-300"
            >
              Projects
            </a>

            <span className="text-slate-300">|</span>

            <a
              href="#contact"
              className="hover:text-cyan-500 transition duration-300"
            >
              Contact
            </a>

          </div>


          {/* ================= BOTTOM ================= */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-3
              mt-8
              text-xs
              sm:text-sm
              text-slate-500
            "
          >

            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Mohammed Yaseen. All Rights Reserved.
            </p>

            <p className="font-medium">
              Learn
              <span className="text-cyan-500 mx-2">•</span>
              Analyze
              <span className="text-cyan-500 mx-2">•</span>
              Develop
              <span className="text-cyan-500 mx-2">•</span>
              Grow
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;