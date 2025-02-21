import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-cream py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav className="flex space-x-12 w-1/3">
          <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
            Collections
          </a>
        </nav>

        <div className="flex items-center justify-center w-1/3">
          <h1 className="font-theSeasons text-5xl font-bold tracking-widest text-oliveGreen text-center">
            AUNA
          </h1>
        </div>
        
        <nav className="flex space-x-12 w-1/3 justify-end">
          <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
            About
          </a>
          <a href="#" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 transition-colors duration-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;