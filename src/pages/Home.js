import React from 'react';

const HomeCards = () => {
  return (
    <section className="bg-cream w-full flex flex-col items-center">
      <div id="card1" className="w-full flex h-[75vh] bg-beige">
        <img src="/path-to-image1.jpg" alt="Card 1" className="w-1/2 h-full object-cover" />
        <div className="w-1/2 flex items-center justify-center p-8">
          <p className="text-oliveGreen text-xl">Description for the first card.</p>
        </div>
      </div>

      <div id="card2" className="w-full flex h-[75vh] bg-coffeeTan">
        <div className="w-1/2 flex items-center justify-center p-8">
          <p className="text-oliveGreen text-xl">Description for the second card.</p>
        </div>
        <img src="/path-to-image2.jpg" alt="Card 2" className="w-1/2 h-full object-cover" />
      </div>

      <div id="card3" className="w-full flex h-[75vh] bg-coffeeDeep">
        <img src="/path-to-image3.jpg" alt="Card 3" className="w-1/2 h-full object-cover" />
        <div className="w-1/2 flex items-center justify-center p-8">
          <p className="text-cream text-xl">Description for the third card.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
