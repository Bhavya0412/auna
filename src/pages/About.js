import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8 flex items-center justify-center">
      <div className="max-w-3xl bg-[#3E4A26] text-white p-6 md:p-8 rounded-lg shadow-lg text-justify">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-openSans mb-2 md:mb-4 text-left ">About Us</h1>

        {/* About Us */}
        <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-justify">
          <span className="font-bold">Auna</span> started over a casual hangout at McDonald's—just two 19-year-olds, a lot of ideas, and a sudden spark. One of us is an interior designer, the other is studying BFM (Bachelor of Financial Markets), but we both knew one thing—we wanted to start a business. And honestly? We just love bags. Bags are more than just accessories; they carry stories, moments, and a touch of personality. That’s when the idea of Auna came to life—to create luxury bags that are timeless, chic, and affordable. Each collection is crafted around a unique theme, making every drop special and meaningful. Proudly made in India, empowered by women, and built on passion, Auna is our dream turning into reality, one bag at a time. And this is just the beginning.
        </p>

        {/* Our Mission */}
        <h2 className="text-xl md:text-2xl font-openSans mb-2 md:mb-4 text-left ">Our Mission</h2>
        <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-justify">
          At Auna, our mission is simple: to make luxury accessible. We believe that style should never be compromised by price, and elegance should be effortless. Every Auna bag is designed with timeless appeal, high-quality craftsmanship, and a story behind it. Our goal is to bring exclusive, thoughtfully curated collections that speak to your style and personality.
        </p>

        {/* Our Vision */}
        <h2 className="text-xl md:text-2xl font-openSans mb-2 md:mb-4 text-left ">Our Vision</h2>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          We see Auna as more than just a brand—it’s a reflection of our journey, passion, and creativity. Our vision is to build a space where fashion meets individuality, where every collection feels exclusive, and where timeless design meets everyday luxury. We want Auna to be the go-to brand for those who appreciate elegance with a story behind it. As we grow, our goal is to keep creating unique, high-quality pieces that feel special, personal, and effortlessly stylish.
        </p>
      </div>
    </div>
  );
};

export default About;
