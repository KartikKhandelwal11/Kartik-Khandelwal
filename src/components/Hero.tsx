import React from "react";
import { ChevronDown, Mail, Linkedin, MapPin, Phone, MessageCircle } from "lucide-react";
import kartikProfile from "../Assets/KartikProfile.png";
import resume from "../Assets/Docfile/PM-KartikCV.pdf";
import "../Assets/Styles/hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-main-section relative min-h-screen flex items-center pt-24 sm:pt-32 md:pt-20"
    >
      <div className="hero-blur-circle w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-pm-accent/20 -top-20 -left-20"></div>
      <div className="hero-blur-circle w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-blue-500/20 bottom-40 right-10"></div>

      <div className="hero-container container-custom mx-auto px-4 sm:px-6 flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-32 items-center">
          {/* Content section */}
          <div
            className="order-2 md:order-1 animate-slide-up flex flex-col justify-center"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6 md:mb-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 px-3 py-1.5 bg-green-500/10 rounded-full mb-2 md:mb-3 inline-flex">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">
                  Online
                </span>
              </div>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
                <span className="block text-white mb-2">Product</span>
                <span className="text-gradient bg-clip-text">Manager</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4"></div>
            </div>

            {/* Update paragraph text size */}
            <p className="text-base md:text-lg text-pm-light/80 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 text-center md:text-left">
              Passionate Product Manager with a keen eye for innovation and user
              engagement. Experienced in building scalable products, enhancing
              user retention, and driving business growth. Skilled in
              data-driven decision-making, feature development, and optimizing
              product performance to deliver impactful solutions
            </p>

            {/* Make buttons stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[200px] sm:w-auto mx-auto sm:mx-0 px-8 py-4 rounded-2xl bg-pm-accent/20 border border-pm-accent/30 flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
              >
                <span className="text-white text-sm sm:text-base font-medium group-hover:text-pm-accent transition-colors">
                  View Resume
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-pm-accent group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile card section */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative aspect-square md:aspect-auto w-full sm:max-w-sm bg-[#ffffff] rounded-3xl p-4 sm:p-6">
              {/* Curved dotted line decoration */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <svg
                  className="w-full h-full text-orange-500/50"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 0 50 Q 50 0 100 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Image container */}
              <div className="bg-orange-500/20 rounded-2xl overflow-hidden mb-4">
                <img
                  src={kartikProfile}
                  alt="Kartik Khandelwal"
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Name and description */}
              <h2 className="text-xl font-bold text-black text-center mb-2">
                Kartik Khandelwal
              </h2>
              <p className="text-black text-center text-sm mb-4">
                Product Manager | Innovating for Growth & Engagement |
                User-Centric Solutions
              </p>

              {/* Social icons */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/pm-kartik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/kartik.khandelwal11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.073-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919509264338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:Kartikkhandelwal1104@gmail.com"
                  className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* Bottom curved dotted line */}
              <div className="absolute bottom-0 left-0 w-16 h-16 transform rotate-180">
                <svg
                  className="w-full h-full text-orange-500/50"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 0 50 Q 50 0 100 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Make scroll indicator visible only on larger screens */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center text-pm-light/60 hover:text-pm-accent transition-colors"
      >
        <span className="text-xs md:text-sm mb-2">Scroll Down</span>
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
