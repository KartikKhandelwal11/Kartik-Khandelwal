import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import logo from "../Assets/favicon.png"; // Add logo import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4">
          {/* Social Links - Top Left */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/pm-kartik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:Kartikkhandelwal1104@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/KartikKhandelwal11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Logo and Copyright - Bottom Left */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="KK Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
