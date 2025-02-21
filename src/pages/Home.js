import React from 'react';

const HomeCards = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid gap-12">
      {/* First Card */}
      <div id="card-1" className="flex flex-col md:flex-row items-center bg-beige p-6 shadow-lg rounded-lg">
        <img src="/path-to-your-image.jpg" alt="Description" className="w-full md:w-1/2 rounded-lg" />
        <div className="md:w-1/2 p-6 text-oliveGreen">
          <h2 className="text-2xl font-semibold mb-2">Title 1</h2>
          <p>Short description goes here for the first card.</p>
        </div>
      </div>

      {/* Second Card */}
      <div id="card-2" className="flex flex-col md:flex-row-reverse items-center bg-beige p-6 shadow-lg rounded-lg">
        <img src="/path-to-your-image.jpg" alt="Description" className="w-full md:w-1/2 rounded-lg" />
        <div className="md:w-1/2 p-6 text-oliveGreen">
          <h2 className="text-2xl font-semibold mb-2">Title 2</h2>
          <p>Short description goes here for the second card.</p>
        </div>
      </div>

      {/* Third Card */}
      <div id="card-3" className="flex flex-col md:flex-row items-center bg-beige p-6 shadow-lg rounded-lg">
        <img src="/path-to-your-image.jpg" alt="Description" className="w-full md:w-1/2 rounded-lg" />
        <div className="md:w-1/2 p-6 text-oliveGreen">
          <h2 className="text-2xl font-semibold mb-2">Title 3</h2>
          <p>Short description goes here for the third card.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
