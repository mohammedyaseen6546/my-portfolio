import React from "react";

export const Hireme = () => {
  return (
    <section
      data-aos="zoom-in-up"
      className="w-full max-w-6xl mx-auto mt-20 px-4 sm:px-6"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-200
          bg-gradient-to-br
          from-white
          via-sky-50
          to-blue-100
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
        "
      >

        {/* Decorative Glow */}
        <div
          className="
            absolute
            -top-24
            -right-24
            w-72
            h-72
            bg-cyan-300/20
            rounded-full
            blur-3xl
            pointer-events-none
          "
        ></div>

        <div
          className="
            absolute
            -bottom-32
            left-1/3
            w-80
            h-80
            bg-blue-300/20
            rounded-full
            blur-3xl
            pointer-events-none
          "
        ></div>


        {/* Main Content */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            p-7
            sm:p-10
            lg:p-12
          "
        >

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[58%]">

            {/* Small Label */}
            <div className="flex items-center gap-3 mb-5">

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] text-slate-500">
                Let's Work Together
              </span>

              <span className="w-12 h-[2px] bg-slate-500"></span>

            </div>


            {/* Heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                tracking-tight
                text-slate-900
                leading-tight
              "
            >
              Have an Idea?
              <br className="sm:hidden" />
              <span className="text-cyan-500">
                {" "}Let's Build It.
              </span>
            </h2>


            {/* Description */}
            <p
              className="
                mt-6
                text-base
                sm:text-lg
                text-slate-600
                leading-7
                sm:leading-8
                max-w-2xl
              "
            >
              Let's turn your idea into something useful, modern,
              and user-friendly. I'm always excited to bring new
              ideas to life and create solutions that make a real impact.
            </p>


            <p
              className="
                mt-4
                text-base
                sm:text-lg
                text-slate-600
                leading-7
                sm:leading-8
                max-w-2xl
              "
            >
              Whether it's transforming data into meaningful insights,
              creating an interactive dashboard, or developing a responsive
              web application, let's build a solution that is clean,
              practical, and easy to use.
            </p>


            {/* Closing Text */}
            <p
              className="
                mt-5
                font-bold
                text-slate-800
                text-base
                sm:text-lg
              "
            >
              Let's connect and build something amazing together!
            </p>


            {/* CTA */}
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-7
                px-7
                py-3.5
                bg-slate-900
                text-white
                rounded-xl
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:bg-cyan-600
                hover:shadow-cyan-500/30
                hover:shadow-xl
                hover:-translate-y-1
                group
              "
            >
              Connect With Me

              <span
                className="
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

          </div>


          {/* RIGHT VISUAL */}
          <div
            className="
              w-full
              lg:w-[42%]
              flex
              justify-center
              items-center
              relative
            "
          >

            {/* Image Glow */}
            <div
              className="
                absolute
                w-64
                h-64
                sm:w-80
                sm:h-80
                bg-cyan-300/20
                rounded-full
                blur-3xl
              "
            ></div>


            {/* Image */}
            <img
              src="/hireme-visual.png"
              alt="Turning ideas into digital solutions"
              className="
                relative
                z-10
                w-full
                max-w-[430px]
                h-auto
                object-contain
                drop-shadow-[0_20px_25px_rgba(15,23,42,0.15)]
                transition-transform
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};