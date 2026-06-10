import React from "react";
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

                
                <h2 className="text-4xl font-bold mb-10">
                    Web Developer
                </h2>

               
                <div className="flex justify-center gap-5 mb-10">
                    

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

                
                <h3 className="text-4xl md:text-4xl font-bold text-slate-800 mb-10">
                    mohammedyaseen6546@gmail.com
                </h3>

                
                <ul className="flex flex-wrap justify-center gap-8 text-lg font-medium mb-12">
                    <li>
                        <a href="#home" className="hover:text-cyan-500 transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-cyan-500 transition">
                            About
                        </a>
                    </li>
                   
                    <li>
                        <a href="#projects" className="hover:text-cyan-500 transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-cyan-500 transition">
                            Contact
                        </a>
                    </li>
                </ul>

                
                <p className="text-gray-500">
                    © {new Date().getFullYear()} Mohammed Yaseen. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;