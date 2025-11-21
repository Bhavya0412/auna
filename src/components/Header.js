import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileCollectionsOpen(false);
  };

  const toggleCollections = () => {
    setIsCollectionsOpen(!isCollectionsOpen);
  };

  const toggleMobileCollections = (e) => {
    e.preventDefault();
    setIsMobileCollectionsOpen(!isMobileCollectionsOpen);
  };

  const closeDesktopCollections = () => {
    setIsCollectionsOpen(false);
  };

  const collections = [
    { name: "The Coffee Arc", path: "/The-Coffee-Arc" },
    { name: "The Malibu Collection", path: "/The-Malibu-Collection" }
  ];

  return (
    <header className="w-full bg-white py-3 px-0 md:py-6 md:px-8 shadow-sm sticky top-0 z-50 shadow-2xl -mt-20 -mb-6">
      <div className="max-w-7xl mx-auto">

        {/* MOBILE LAYOUT */}
        <div className="md:hidden relative">
          
          {/* TOP ROW */}
          <div className="flex items-center justify-between w-full px-3">
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
            
            {/* Mobile Logo (centered) */}
            <div className="flex items-center justify-center">
              <h1 className="font-theSeasons text-4xl font-bold tracking-widest text-oliveGreen text-center">
                Auna
              </h1>
            </div>

            {/* Cart Icon */}
            <Link to="/Cart" className="relative text-oliveGreen">
              <FiShoppingCart size={24} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className={`${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <nav className="flex flex-col space-y-4 mt-4 pb-4">
              <Link to="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 text-center" onClick={toggleMenu}>
                Home
              </Link>

              {/* Mobile Collections Dropdown */}
              <div className="text-center">
                <button 
                  onClick={toggleMobileCollections} 
                  className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 w-full flex items-center justify-center"
                >
                  Collections
                </button>

                <div className={`${isMobileCollectionsOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                  <div className="flex flex-col space-y-2 py-2">
                    {collections.map((col) => (
                      <Link 
                        key={col.name} 
                        to={col.path} 
                        className="font-['Cormorant Garamond'] text-oliveGreen text-base font-semibold hover:text-coffeeDeep/80 text-center"
                        onClick={toggleMenu}
                      >
                        {col.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/About" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 text-center" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/Contact" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 text-center" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <nav className="flex space-x-6 lg:space-x-12 w-1/3 items-center">
            <Link to="/" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80">
              Home
            </Link>

            {/* Desktop Collections */}
            <div className="relative">
              <button 
                onClick={toggleCollections}
                className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80 flex items-center"
              >
                Collections
              </button>

              {isCollectionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-60"
                  onMouseLeave={closeDesktopCollections}
                >
                  {collections.map((col) => (
                    <Link 
                      key={col.name}
                      to={col.path} 
                      className="block w-full text-left px-4 py-2 font-['Cormorant Garamond'] text-oliveGreen text-base font-semibold hover:bg-gray-100"
                      onClick={closeDesktopCollections}
                    >
                      {col.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Logo */}
          <div className="flex items-center justify-center w-1/3">
            <h1 className="font-theSeasons text-4xl lg:text-5xl font-bold tracking-widest text-oliveGreen text-center">
              Auna
            </h1>
          </div>
          
          {/* Desktop Right Menu */}
          <nav className="flex space-x-6 lg:space-x-12 w-1/3 justify-end items-center">
            <Link to="/About" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80">
              About
            </Link>
            <Link to="/Contact" className="font-['Cormorant Garamond'] text-oliveGreen text-lg font-semibold hover:text-coffeeDeep/80">
              Contact
            </Link>
            <Link to="/Cart" className="relative text-oliveGreen hover:text-coffeeDeep/80">
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
