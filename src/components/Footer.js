import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-oliveGreen py-6 px-8 border-t border-darkolivegreen shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-white text-sm md:text-base">
          © {new Date().getFullYear()} AUNA. All rights reserved.
        </p>

        <nav className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="text-white text-sm hover:text-darkolivegreen transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="text-white text-sm hover:text-darkolivegreen transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="text-white text-sm hover:text-darkolivegreen transition-colors duration-200">
            Contact Us
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-darkolivegreen transition-colors duration-200">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-darkolivegreen transition-colors duration-200">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-darkolivegreen transition-colors duration-200">
            <Twitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
