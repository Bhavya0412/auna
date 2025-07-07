import React, { useState } from 'react';
import { Eye, Target, Heart } from 'lucide-react';

const VisionMission = () => {
 const [activeCard, setActiveCard] = useState(null);


  return (
    <div className="flex flex-col md:flex-row gap-6 mt-4 -mb-8 w-full max-w-5xl justify-center">
      {/* Vision Card */}
      <div className="w-full max-w-md mx-auto">
        <div 
          className="relative h-96 w-full perspective-1000"
          onMouseEnter={() => setActiveCard('vision')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${activeCard !== 'vision' ? 'rotate-y-180' : ''}`}>
            {/* Front Face */}
            <div className="absolute inset-0 w-full h-full bg-[#3E4A26] text-white p-6 rounded-lg shadow-lg backface-hidden transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-serif mb-4 text-center text-white flex items-center justify-center gap-2 tracking-wide">
                <Eye className="w-6 h-6" />
                Our Vision
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                We see Auna as more than just a brand—it's a reflection of our journey, passion, and creativity. Our vision is to build a space where fashion meets individuality, where every collection feels exclusive, and where timeless design meets everyday luxury. We want Auna to be the go-to brand for those who appreciate elegance with a story behind it. As we grow, our goal is to keep creating unique, high-quality pieces that feel special, personal, and effortlessly stylish.
              </p>
            </div>
            
            {/* Back Face */}
            <div className="absolute inset-0 w-full h-full bg-[#2D3419] text-white p-6 rounded-lg shadow-xl backface-hidden rotate-y-180 flex items-center justify-center">
              <div className="text-center">
                <Eye className="w-20 h-20 mx-auto mb-4 text-white/80" />
                <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">Vision</h3>
                <p className="text-lg text-white/90">Building Tomorrow's Luxury</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Card */}
      <div className="w-full max-w-md mx-auto">
        <div 
          className="relative h-96 w-full perspective-1000"
          onMouseEnter={() => setActiveCard('mission')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${activeCard !== 'mission' ? 'rotate-y-180' : ''}`}>
            {/* Front Face */}
            <div className="absolute inset-0 w-full h-full bg-[#3E4A26] text-white p-6 rounded-lg shadow-lg backface-hidden transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-serif mb-4 text-center text-white flex items-center justify-center gap-2 tracking-wide">
                <Target className="w-6 h-6" />
                Our Mission
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                At Auna, our mission is simple: to make luxury accessible. We believe that style should never be compromised by price, and elegance should be effortless. Every Auna bag is designed with timeless appeal, high-quality craftsmanship, and a story behind it. Our goal is to bring exclusive, thoughtfully curated collections that speak to your style and personality.
              </p>
            </div>
            
            {/* Back Face */}
            <div className="absolute inset-0 w-full h-full bg-[#2D3419] text-white p-6 rounded-lg shadow-xl backface-hidden rotate-y-180 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-20 h-20 mx-auto mb-4 text-white/80" />
                <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">Mission</h3>
                <p className="text-lg text-white/90">Making Luxury Accessible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;