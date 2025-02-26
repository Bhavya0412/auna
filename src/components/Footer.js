import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-oliveGreen text-cream py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-3">AUNA</h3>
          <p className="mb-4 text-sm">
            Crafting timeless elegance through sustainable luxury accessories.
          </p>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <motion.a 
              href="#" 
              whileHover={{ y: -3 }}
              className="text-cream hover:text-white"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -3 }}
              className="text-cream hover:text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Shop Column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="/" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="/" className="hover:text-white transition-colors">Collections</a></li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li><a href="/Faqs" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="/shipping_policies" className="hover:text-white transition-colors">Shipping Policies</a></li>
            <li><a href="/Care_instructions" className="hover:text-white transition-colors">Care Instructions</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mail to :hello@aunapurses.com" className="hover:text-white transition-colors">hello@aunapurses.com</a>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="Contact:" className="hover:text-white transition-colors">+1 (800) 555-1234</a>
            </li>
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1" />
              <span>Mumbai</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with copyright */}
      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-cream/20 text-center text-sm">
        <p>© {currentYear} Auna. All rights reserved.</p>
        <div className="mt-1 space-x-4">
          <a href="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/TermsAndConditions" className="hover:text-white transition-colors">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;