import React from "react";
import { FaEnvelope } from "react-icons/fa";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-20">
            <div className="container mx-auto px-4 text-center">


                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Web Developer
                </h2>


                <div className="flex justify-center gap-8 mb-12 text-xl">


                    <a
                        href="https://twitter.com/mohd_yaseen6546"
                        className="w-12 h-12  flex items-center justify-center hover:text-blue-500 hover:scale-125 cursor-pointer transition duration-300"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://instagram.com/syed__iliyaz"
                        className="w-12 h-12  flex items-center justify-center hover:text-blue-500 hover:scale-125 cursor-pointer transition duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://linkedin.com/in/mohammedyaseen6546"
                        className="w-12 h-12 flex items-center justify-center hover:text-blue-500 hover:scale-125 cursor-pointer transition duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>


                <a
                    href="mailto:mohammedyaseen6546@gmail.com"
                    className="flex justify-center items-center hover:scale-105 cursor-pointer gap-3 text-xl md:text-3xl font-semibold text-slate-700 mb-10 hover:text-cyan-500 transition duration-300"
                >
                    <FaEnvelope />
                    mohammedyaseen6546@gmail.com
                </a>

                <a
                    href="https://github.com/mohammedyaseen6546"
                    target="_blank"
                    className="block hover:scale-105 cursor-pointer hover:text-cyan-500 text-lg font-medium mb-8  transition duration-300"
                >
                    GitHub
                </a>





                <p className="text-gray-500">
                    © {new Date().getFullYear()} Mohammed Yaseen. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;