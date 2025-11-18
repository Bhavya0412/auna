import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mt-0 w-full bg-oliveGreen py-4 px-8 shadow-sm border-b border-olive-dark">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-x-10 md:gap-x-48">

        <Link
          to="/The-Coffee-Arc"
          className="font-openSans text-white text-md md:text-3xl font-bold hover:text-white/80 transition-colors duration-200"
        >
          The Coffee Arc
        </Link>

        <Link
          to="/The-Malibu-Collection"
          className="font-openSans text-white text-xl md:text-3xl font-bold hover:text-white/80 transition-colors duration-200"
        >
          The Malibu Collection
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
