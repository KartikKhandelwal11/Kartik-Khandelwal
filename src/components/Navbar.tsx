import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },

    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Add this new useEffect for handling clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");
      if (
        isOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        !menuButton?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Add this useEffect to handle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-white/5"
          : "bg-black/70 backdrop-blur-md"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="text-3xl font-bold relative group z-50">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            KK
          </span>
          <span className="text-white font-light">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium relative group px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-400 bg-white/5"
                      : "text-white/90 hover:text-purple-400 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "w-1/2"
                        : "w-0 group-hover:w-1/2"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          id="menu-button" // Add this id
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pm-light p-2.5 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden h-screen overflow-hidden ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-between px-6">
          <ul className="flex flex-col space-y-2 mt-28">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative flex items-center gap-2 py-5 text-lg font-medium transition-all duration-300 group ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-400 pl-6 bg-white/[0.03] rounded-lg"
                      : "text-white/90 hover:text-purple-400 pl-0 hover:pl-6 hover:bg-white/[0.02] rounded-lg"
                  }`}
                >
                  <span
                    className={`h-[2px] ${
                      activeSection === link.href.substring(1)
                        ? "w-10 bg-gradient-to-r from-purple-400 to-purple-600"
                        : "w-0 group-hover:w-10 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300"
                    }`}
                  ></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/5 py-8 mb-8">
            <p className="text-pm-light/40 text-sm">© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
