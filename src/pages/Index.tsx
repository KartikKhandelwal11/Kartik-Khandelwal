import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-pm-dark text-pm-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements /> {/* Add this line */}
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
