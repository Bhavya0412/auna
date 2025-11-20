import React, { Suspense, lazy, useEffect, useState, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom";
// import { useCart } from '../context/CartContext'; // No longer needed here
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // No longer needed here
// import { faCheck } from '@fortawesome/free-solid-svg-icons'; // No longer needed here
const InstagramFollowSection = lazy(() => import('../components/InstagramFollowSection'));


const ProductCard = memo(({ id, img_path, isReversed, index, collectionPath, collectionTitle }) => {
  const controls = useAnimation();
  const navigate = useNavigate();
  // const { addToCart, cartItems } = useCart(); // Removed
  // const [isAdding, setIsAdding] = useState(false); // Removed

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Check if product is already in cart
  // const isInCart = cartItems.some(item => item.id === id); // Removed

  // Navigate to the collection page
  const openCollectionPage = () => {
    navigate(`/${collectionPath}`); // Navigates to /The-Coffee-Arc or /The-Malibu-Collection
  };

  // const handleAddToCart = () => { ... }; // Removed

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: isReversed ? -20 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
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
            transition-shadow duration-300 max-w-6xl mx-auto border-2 border-coffeeTan cursor-pointer`}
      onClick={openCollectionPage} // Make the whole card clickable
    >
      <motion.div
        className="md:w-1/2 overflow-hidden relative h-100"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={img_path}
          alt={collectionTitle} // Use collection title for alt text
          loading='lazy'
          className="w-full object-cover md:mt-[-70px]"
        />

        {/* Quick Action Overlay */}
        <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
      </motion.div>

      <div className="md:w-1/2 p-8 flex flex-col justify-center items-center">
        {collectionTitle && (
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-['Cormorant Garamond'] font-bold text-coffeeDeep text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {collectionTitle}
          </motion.h2>
        )}
        {/* All product details removed */}
      </div>
    </motion.div>
  );
});

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
      className="bg-gradient-to-r from-white to-white py-2 px-4 md:px-8 mb-0"
    >
      <div className="max-w-7xl mx-auto text-center"></div>
    </motion.div>
  );
};

const Home = () => {
  const [malibuCollectionProducts, setMalibuCollectionProducts] = useState([]);
  const [mochaProduct, setMochaProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/Product.json');
        const data = await response.json();

        if (data.the_coffee_arc && Array.isArray(data.the_coffee_arc)) {
          const mocha = data.the_coffee_arc.find(p => p.name.toLowerCase() === 'mocha');
          setMochaProduct(mocha);
        } else {
          console.error('Invalid data format for the_coffee_arc');
        }

        if (data.the_malibu_collection && Array.isArray(data.the_malibu_collection)) {
          setMalibuCollectionProducts(data.the_malibu_collection);
        } else {
          console.error('Invalid data format for the_malibu_collection');
        }

        localStorage.setItem('product_data', JSON.stringify(data));

      } catch (error) {
        console.error('Error loading product data:', error);
      }
    };

    const cached = localStorage.getItem('product_data');
    if (cached) {
      const data = JSON.parse(cached);
      if (data.the_coffee_arc && Array.isArray(data.the_coffee_arc)) {
        const mocha = data.the_coffee_arc.find(p => p.name.toLowerCase() === 'mocha');
        setMochaProduct(mocha);
      }
      if (data.the_malibu_collection && Array.isArray(data.the_malibu_collection)) {
        setMalibuCollectionProducts(data.the_malibu_collection);
      }
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* The Coffee Arc Section */}
      <div id="the-coffee-arc" className="max-w-7xl mx-auto px-4 py-0 -mt-6">
        <div className="space-y-24 mb-6 ">
          {mochaProduct && (
            <ProductCard
              key={mochaProduct.id}
              id={mochaProduct.id}
              img_path={mochaProduct.img_path}
              isReversed={false}
              index={0}
              collectionPath="The-Coffee-Arc"
              collectionTitle="The Coffee Arc"
            />
          )}
        </div>
      </div>

      {/* The Malibu Collection Section */}
      <div id="the-malibu-collection" className="max-w-7xl mx-auto px-4 py-0 mt-16">
        <div className="space-y-24 mb-6 ">
          {malibuCollectionProducts.length > 0 && (
            <ProductCard
              key={malibuCollectionProducts[0].id}
              id={malibuCollectionProducts[0].id}
              img_path={malibuCollectionProducts[0].img_path}
              isReversed={true} // Reverse for the second collection to alternate layout
              index={0}
              collectionPath="The-Malibu-Collection"
              collectionTitle="The Malibu Collection"
            />
          )}
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-4"></div>}>
        <InstagramFollowSection />
      </Suspense>
    </div>
  );
};

export default Home;

