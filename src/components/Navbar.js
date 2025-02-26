import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-oliveGreen py-4 px-8 shadow-sm border-b border-olive-dark">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="grid grid-cols-3 gap-24">
          <a href="#" className="font-['Cormorant Garamond'] text-white text-lg font-semibold hover:text-white/80 transition-all duration-200 text-center">
            New Arrivals
          </a>
          <a href="#" className="font-['Cormorant Garamond'] text-white text-lg font-semibold hover:text-white/80 transition-all duration-200 text-center">
            Best Sellers
          </a>
          <a href="#" className="font-['Cormorant Garamond'] text-white text-lg font-semibold hover:text-white/80 transition-all duration-200 text-center">
            Sale
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;