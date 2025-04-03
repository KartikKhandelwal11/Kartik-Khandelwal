
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 bg-gradient-to-b from-pm-dark/50 to-black">
      <div className="container-custom mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="relative">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-pm-accent to-purple-500 bg-clip-text text-transparent">KK</span>
              <span className="absolute -right-3 top-0 text-pm-accent text-4xl font-light">.</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-pm-light/70 hover:text-pm-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Kartikkhandelwal1104@gmail.com"
               className="text-pm-light/70 hover:text-pm-accent transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-pm-light/70 hover:text-pm-accent transition-colors">
              <Github size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-pm-light/50 text-sm">
            &copy; {currentYear} Kartik Khandelwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
