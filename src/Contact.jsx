import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lijxmsr",
        "template_endnpzn",
        form.current,
        "EMK8GKuRY_ziO1lPD"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-gray-100 relative flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Background Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px)] bg-[size:80px_100%] opacity-30"></div>

        {/* Heading */}
        <div className="text-center mt-30 z-10">
          <p className="uppercase tracking-[5px] text-gray-500 font-semibold">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-black mt-3">
            Let's Connect
          </h1>

          <p className="text-gray-600 mt-4">
            Have a project idea or opportunity? Feel free to contact me.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative mt-12 z-10">
          {/* Background Circle */}
          <div className="absolute w-[400px] h-[400px] bg-purple-200 opacity-30 rounded-full blur-3xl -z-10 top-0 left-1/2 -translate-x-1/2"></div>

          <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] md:w-[450px]">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Contact Me
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                required
                className="border-2 border-black rounded-lg p-3 outline-none focus:border-cyan-500 transition duration-300"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                required
                className="border-2 border-black rounded-lg p-3 outline-none focus:border-cyan-500 transition duration-300"
              />

              <input
                name="profession"
                type="text"
                placeholder="Your profession"
                className="border-2 border-black rounded-lg p-3 outline-none focus:border-cyan-500 transition duration-300"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                required
                className="border-2 border-black rounded-lg p-3 outline-none focus:border-cyan-500 transition duration-300"
              ></textarea>

              <button
                type="submit"
                className="
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                py-3
                rounded-lg
                font-semibold
                transition
                duration-300
                hover:scale-105
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};