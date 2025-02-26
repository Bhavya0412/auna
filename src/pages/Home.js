import React from 'react';

const HomeCards = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center p-4 mt-[2cm]">
      <div id="card1" className="w-full max-w-[calc(100%-6cm)] flex h-[64vh] bg-oliveGreen rounded-[2cm] shadow-lg overflow-hidden mb-[2cm]">
        <img src="/path-to-image1.jpg" alt="Card 1" className="w-1/2 h-full object-cover rounded-l-3xl" />
        <div className="w-1/2 flex items-center justify-center p-8">
          <p className="text-white text-2xl">Description for the first card.</p>
        </div>
      </div>

      <div id="card2" className="w-full max-w-[calc(100%-6cm)] flex h-[64vh] bg-oliveGreen rounded-[2cm] shadow-lg overflow-hidden mb-[2cm]">
        <div className="w-1/2 flex items-center justify-center p-8">
          <p className="text-white text-2xl">Description for the second card.</p>
        </div>
        <img src="/path-to-image2.jpg" alt="Card 2" className="w-1/2 h-full object-cover rounded-r-3xl" />
      </div>

      <div id="card3" className="w-full max-w-[calc(100%-6cm)] flex h-[64vh] bg-oliveGreen rounded-[2cm] shadow-lg overflow-hidden mb-[2cm]">
        <img src="/path-to-image3.jpg" alt="Card 3" className="w-1/2 h-full object-cover rounded-l-3xl" />
        <div className="w-1/2 flex items-center justify-center p-8">
          <p className="text-white text-2xl">Description for the third card.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
