import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCard = ({ title, description, price, imageUrl, isReversed, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: isReversed ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
                 rounded-lg overflow-hidden shadow-lg mb-16 bg-cream hover:shadow-xl 
                 transition-shadow duration-300 max-w-6xl mx-auto border-2 border-coffeeTan`}
    >
      <motion.div 
        className="md:w-1/2 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <motion.h3 
          className="text-2xl font-bold mb-2 text-coffeeDeep"
          whileHover={{ scale: 1.05, color: '#5C6147' }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <div className="w-16 h-1 bg-oliveGreen mb-4"></div>
        <p className="text-darkolivegreen mb-6">{description}</p>
        <motion.div 
          className="flex items-center"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xl font-semibold text-mochaBrown mr-4">${price}</span>
          <motion.button 
            className="px-6 py-2 bg-oliveGreen text-white rounded hover:bg-darkolivegreen transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1,
        staggerChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
      className="bg-gradient-to-r from-white to-white py-8 px-4 md:px-8 mb-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-coffeeDeep mb-6"
        >
          AUNA
        </motion.h1>
        <motion.div 
          variants={itemVariants}
          className="w-24 h-1 bg-oliveGreen mx-auto mb-6"
        ></motion.div> */}
        {/* <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-mochaBrown mb-0 w-2xl mx-auto"
        >
          Elegance in every stitch. Discover our handcrafted purses designed for the modern woman.
        </motion.p> */}
        {/* <motion.button
          variants={itemVariants}
          className="px-8 py-3 bg-oliveGreen text-white rounded-md text-lg hover:bg-darkolivegreen transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Collection
        </motion.button> */}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const products = [
    {
      id: 1,
      title: "The Meridian Tote",
      description: "A spacious, elegant tote bag perfect for daily use. Crafted with premium materials and attention to detail, it combines style with functionality.",
      price: "189.99",
      imageUrl: "https://cdn-icons-png.flaticon.com/256/11899/11899150.png"
    },
    {
      id: 2,
      title: "Eden Crossbody",
      description: "Our most versatile crossbody bag, designed for the woman on the move. Compact yet surprisingly spacious with multiple compartments.",
      price: "149.99",
      imageUrl: "https://cdn-icons-png.flaticon.com/256/11899/11899150.png"
    },
    {
      id: 3,
      title: "The Aria Clutch",
      description: "An exquisite evening clutch with subtle detailing. The perfect companion for special occasions when you want to make a statement.",
      price: "129.99",
      imageUrl: "https://cdn-icons-png.flaticon.com/256/11899/11899150.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="container mx-auto px-4 py-2">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-coffeeDeep mb-2"
        >
          Our Signature Collection
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-oliveGreen mx-auto mb-6"
        ></motion.div> 
        
        <div className="space-y-24 mb-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              isReversed={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Footer section removed as requested */}
    </div>
  );
};

export default Home;