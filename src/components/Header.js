import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white py-4 px-4 md:py-6 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
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
            
            {/* Empty div to balance the layout */}
            <div className="w-6"></div>
          </div>
          
          {/* Mobile Menu - Collapsible */}
          <div className={`${isMenuOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <nav className="flex flex-col space-y-4 mt-4 pb-4">
              <a href="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                Home
              </a>
              <a href="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                Collections
              </a>
              <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                About
              </a>
              <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200 text-center">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Medium and Large Screen Layout */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <nav className="flex space-x-6 lg:space-x-12 w-1/3">
            <a href="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              Home
            </a>
            <a href="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              Collections
            </a>
          </nav>

          <div className="flex items-center justify-center w-1/3">
            <h1 className="font-theSeasons text-4xl lg:text-5xl font-bold tracking-widest text-oliveGreen text-center">
              Auna
            </h1>
          </div>
          
          <nav className="flex space-x-6 lg:space-x-12 w-1/3 justify-end">
            <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              About
            </a>
            <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;