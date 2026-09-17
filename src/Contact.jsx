 import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_lijxmsr",
        "template_endnpzn",
        form.current,
        {
          publicKey: "EMK8GKuRY_ziO1lPD",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          alert("Message Sent Successfully! 🚀");

          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          console.error("Error details:", error.text);

          alert(
            `Failed to send message.\n\n${error.text || "Please try again."}`
          );

          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      data-aos="fade-left"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-5
        sm:px-6
        py-20
        overflow-hidden
        bg-slate-50
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-30
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, #d1d5db 1px, transparent 1px)",
            backgroundSize: "80px 100%",
          }}
        ></div>

        {/* Cyan Glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-300/15
            blur-3xl
          "
        ></div>

        {/* Blue Glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-300/15
            blur-3xl
          "
        ></div>

      </div>


      {/* =========================================
          HEADING
      ========================================== */}

      <div
        className="
          relative
          z-10
          text-center
          max-w-3xl
          mx-auto
        "
      >

        {/* Label */}

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
              uppercase
              tracking-[4px]
              text-slate-600
            "
          >
            Contact
          </span>

        </div>


        {/* Heading */}

        <h1
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
          Let's{" "}
          <span className="text-cyan-500">
            Connect
          </span>
        </h1>


        {/* Accent */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-3
            mt-5
          "
        >

          <span className="w-10 h-[2px] bg-slate-300"></span>

          <span
            className="
              w-20
              h-1
              rounded-full
              bg-cyan-500
              shadow-[0_0_12px_rgba(6,182,212,0.35)]
            "
          ></span>

          <span className="w-10 h-[2px] bg-slate-300"></span>

        </div>


        {/* Subtitle */}

        <p
          className="
            mt-6
            text-base
            sm:text-lg
            text-slate-600
            leading-7
            px-2
          "
        >
          Have a project idea, collaboration, or opportunity?
          <br className="hidden sm:block" />
          Feel free to reach out. I'd love to hear from you.
        </p>

      </div>


      {/* =========================================
          FORM AREA
      ========================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-xl
          mt-12
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            -inset-5
            rounded-[2.5rem]
            bg-cyan-300/10
            blur-3xl
            pointer-events-none
          "
        ></div>


        {/* Form Card */}

        <div
          className="
            relative
            bg-white/85
            backdrop-blur-xl
            border
            border-slate-200
            rounded-3xl
            p-6
            sm:p-8
            md:p-10
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >

          {/* Card Header */}

          <div className="mb-7">

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-extrabold
                text-slate-900
              "
            >
              Send Me a Message
            </h2>

            <p
              className="
                mt-2
                text-sm
                sm:text-base
                text-slate-500
              "
            >
              Fill out the form and I'll get back to you.
            </p>

          </div>


          {/* =====================================
              FORM
          ====================================== */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >

            {/* Name */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Your Name
              </label>

              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                required
                className="
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  bg-slate-50
                  border
                  border-slate-200
                  text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:bg-white
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-100
                "
              />

            </div>


            {/* Email */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Email Address
              </label>

              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                required
                className="
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  bg-slate-50
                  border
                  border-slate-200
                  text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:bg-white
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-100
                "
              />

            </div>


            {/* Profession */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Profession
                <span className="text-slate-400 font-normal">
                  {" "}(Optional)
                </span>
              </label>

              <input
                name="profession"
                type="text"
                placeholder="e.g. Student, Recruiter, Developer"
                className="
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  bg-slate-50
                  border
                  border-slate-200
                  text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:bg-white
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-100
                "
              />

            </div>


            {/* Message */}

            <div>

              <label
                className="
                  block
                  mb-2
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                required
                className="
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  bg-slate-50
                  border
                  border-slate-200
                  text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:bg-white
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-100
                "
              ></textarea>

            </div>


            {/* =================================
                SEND BUTTON
            ================================== */}

            <button
              type="submit"
              disabled={sending}
              className="
                w-full
                mt-2
                py-3.5
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                disabled:bg-cyan-300
                text-white
                font-bold
                shadow-[0_10px_25px_rgba(6,182,212,0.25)]
                hover:shadow-[0_15px_35px_rgba(6,182,212,0.3)]
                hover:-translate-y-1
                disabled:hover:translate-y-0
                transition-all
                duration-300
                cursor-pointer
                disabled:cursor-not-allowed
              "
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>


      {/* =========================================
          BOTTOM TEXT
      ========================================== */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-4
          mt-10
          text-xs
          sm:text-sm
          font-semibold
          uppercase
          tracking-[3px]
          text-slate-400
        "
      >

        <span className="w-8 sm:w-14 h-px bg-slate-300"></span>

        <span>
          Let's Build
          <span className="text-cyan-500 mx-2">
            •
          </span>
          Something Amazing
        </span>

        <span className="w-8 sm:w-14 h-px bg-slate-300"></span>

      </div>

    </section>
  );
};