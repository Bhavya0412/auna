import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-bold">The Coffee Arc</span>, where elegance meets craftsmanship. Our curated collection of handbags
          embodies timeless style, inspired by the rich hues and textures of coffee. Each piece is designed to
          complement your everyday look — sophisticated, functional, and effortlessly chic.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          At <span className="font-bold">The Coffee Arc</span>, we take pride in using high-quality materials, ensuring every bag not only looks
          stunning but also stands the test of time. From classic totes to statement pieces, we have something
          for every occasion.
        </p>
        <p className="text-lg leading-relaxed">
          Join us on our journey as we blend fashion and functionality, one handbag at a time.
        </p>
      </div>
    </div>
  );
};

export default About;