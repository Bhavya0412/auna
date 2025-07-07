import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  return (
    <nav className="w-full bg-oliveGreen py-3 px-8 shadow-sm border-b border-olive-dark">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <h1 className="font-openSans text-white text-3xl font-bold text-center">
          <Typewriter
            words={['The Coffee Arc']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;