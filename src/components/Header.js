import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white py-4 px-4 md:py-6 md:px-8 shadow-sm sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="text-oliveGreen focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Logo centered on mobile */}
            <div className="flex items-center justify-center">
              <h1 className="font-theSeasons text-4xl font-bold tracking-widest text-oliveGreen text-center">
                Auna
              </h1>
            </div>
            {/* Cart Icon Always Visible (Top Right Corner) */}
    <Link to="/Cart" className="relative text-oliveGreen">
      <FiShoppingCart size={24} />
      {getCartItemsCount() > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
          {getCartItemsCount()}
        </span>
      )}
    </Link>
            {/* Empty div to balance the layout */}
           
          </div>
          
          {/* Mobile Menu - Collapsible */}
          <div className={`${isMenuOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <nav className="flex flex-col space-y-4 mt-4 pb-4">
              <Link to="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                Home
              </Link>
              
              <Link to="/About" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                About
              </Link>
              <Link to="/Contact" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                Contact
              </Link>
             

            </nav>
          </div>
        </div>

        {/* Medium and Large Screen Layout */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <nav className="flex space-x-6 lg:space-x-12 w-1/3">
            <Link to="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              Home
            </Link>
            
          </nav>

          <div className="flex items-center justify-center w-1/3">
            <h1 className="font-theSeasons text-4xl lg:text-5xl font-bold tracking-widest text-oliveGreen text-center">
              Auna
            </h1>
          </div>
          
          <nav className="flex space-x-6 lg:space-x-12 w-1/3 justify-end">
            <Link to="/About" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              About
            </Link>
            <Link to="/Contact" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              Contact
            </Link>
             <Link to="/Cart" className="relative text-oliveGreen hover:text-coffeeDeep/80 transition-colors duration-200">
  <FiShoppingCart size={24} />
  {getCartItemsCount() > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
      {getCartItemsCount()}
    </span>
  )}
</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;