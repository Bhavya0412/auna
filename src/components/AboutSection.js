import React from 'react';


// AboutSection Component
const AboutSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="bg-[#3E4A26] text-white p-6 md:p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <h1 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6 text-center text-white tracking-wide">
          About Us
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          <span className="font-bold text-white">Auna</span> started over a casual hangout at McDonald's—just two 19-year-olds, a lot of ideas, and a sudden spark. One of us is an interior designer, the other is studying BFM (Bachelor of Financial Markets), but we both knew one thing—we wanted to start a business. And honestly? We just love bags. Bags are more than just accessories; they carry stories, moments, and a touch of personality. That's when the idea of Auna came to life—to create luxury bags that are timeless, chic, and affordable. Each collection is crafted around a unique theme, making every drop special and meaningful. Proudly made in India, empowered by women, and built on passion, Auna is our dream turning into reality, one bag at a time. And this is just the beginning.
        </p>
      </div>
    </div>
  );
};
export default AboutSection;