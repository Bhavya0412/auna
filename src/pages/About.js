import React from 'react';
import AboutSection from '../components/AboutSection';
import VisionMission from '../components/VisionMision'; 
const About = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8 flex flex-col items-center justify-center">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      
      <AboutSection />
      <VisionMission />
    </div>
  );
};

export default About;