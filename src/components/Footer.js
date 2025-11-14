
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oliveGreen text-cream py-8 px-4 mt-20">
      <div className="max-w-6xl mx=0 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-3">AUNA</h3>
          <p className="mb-4 text-sm">
            Where elegance meets craftsmanship,    
            Made in India.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* Instagram */}
            <motion.a 
              href="https://www.instagram.com/auna.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-cream hover:text-white"
            >
              <Instagram size={20} />
            </motion.a>

            {/* WhatsApp */}
            <motion.a 
              href={`https://wa.me/919967425691?text=${encodeURIComponent('Hello, I am interested in your products!')}`} 
              target="_blank"
              rel="noopener noreferrer"
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
            <li><Link to="/" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Best Sellers</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Collections</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li><Link to="/Faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link to="/shipping_policies" className="hover:text-white transition-colors">Shipping Policies</Link></li>
            <li><Link to="/Care_instructions" className="hover:text-white transition-colors">Care Instructions</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:bagsauna@gmail.com" className="hover:text-white transition-colors">bagsauna@gmail.com</a>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+919967425691" className="hover:text-white transition-colors">+91 9967425691</a>
            </li>
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1" />
              <span>Mumbai</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-cream/20 text-center text-sm">
        <p>© {currentYear} Auna. All rights reserved.</p>
        <div className="mt-1 space-x-4">
          <Link to="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/TermsAndConditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
