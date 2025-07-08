import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom"; 
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEye, faCheck } from '@fortawesome/free-solid-svg-icons';
import InstagramFollowSection from '../components/InstagramFollowSection';

const ProductCard = ({ id, name, description, display_price, og_price, img_path, isReversed, index, product }) => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Check if product is already in cart
  const isInCart = cartItems.some(item => item.id === id);

  const openProductPage = (productId) => {
    navigate(`/The-Coffee-Arc/product/${productId}`);
  };

  const handleAddToCart = () => {
    if (isInCart) return; // Don't add if already in cart
    
    setIsAdding(true);
    addToCart(product);
    
    // Show feedback animation
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleViewInCart = () => {
    navigate('/cart');
  };

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
        className="md:w-1/2 overflow-hidden relative group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={img_path} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <motion.button
              onClick={() => openProductPage(id)}
              className="bg-white text-coffeeDeep px-4 py-2 rounded-md hover:bg-cream transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faEye} />
              <span>View</span>
            </motion.button>
            
            {!isInCart ? (
              <motion.button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                  isAdding 
                    ? 'bg-green-500 text-white' 
                    : 'bg-oliveGreen text-white hover:bg-darkolivegreen'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>{isAdding ? 'Added!' : 'Add to Cart'}</span>
              </motion.button>
            ) : (
              <motion.button
                onClick={handleViewInCart}
                className="px-4 py-2 bg-coffeeTan text-white rounded-md hover:bg-coffeeDeep transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faCheck} />
                <span>In Cart</span>
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
      
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <motion.h3 
          className="text-4xl font-serif mb-2 text-coffeeDeep cursor-pointer"
          onClick={() => openProductPage(id)}
          whileHover={{ scale: 1.05, color: '#5C6147' }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.h3>
        <div className="w-16 h-1 bg-oliveGreen mb-4"></div>
        <p className="text-darkolivegreen mb-6 text-xl leading-relaxed">{description}</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-semibold text-mochaBrown line-through opacity-60">
            ₹{(og_price).toFixed(2)}
          </span>
          <span className="text-2xl font-bold text-oliveGreen">₹{(display_price).toFixed(2)}</span>
          
        </div>

        {/* Show cart status */}
        {isInCart && (
          <div className="bg-amber-100 border border-amber-900 text-amber-900 px-3 py-2 rounded-md mb-4 text-sm">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Added to cart
          </div>
        )}
        
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button 
            className="px-6 py-2 bg-oliveGreen text-white rounded hover:bg-darkolivegreen transition-colors duration-300"
            onClick={() => openProductPage(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faEye} className="mr-2" />
            View Details
          </motion.button>
          
          {!isInCart ? (
            <motion.button 
              className={`px-6 py-2 rounded transition-colors duration-300 ${
                isAdding 
                  ? 'bg-green-500 text-white' 
                  : 'bg-coffeeTan text-white hover:bg-coffeeDeep'
              }`}
              onClick={handleAddToCart}
              disabled={isAdding}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              {isAdding ? 'Added!' : 'Add to Cart'}
            </motion.button>
          ) : (
            <motion.button 
              className="px-6 py-2 bg-mochaBrown text-white rounded hover:bg-coffeeDeep transition-colors duration-300"
              onClick={handleViewInCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              View in Cart
            </motion.button>
          )}
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
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch the product data from the JSON file
    fetch('/data/Product.json')
      .then(response => response.json())
      .then(data => {
        if (data.the_coffee_arc && Array.isArray(data.the_coffee_arc)) {
          setProducts(data.the_coffee_arc);
        } else {
          console.error('Invalid data format in Product.json');
        }
      })
      .catch(error => {
        console.error('Error loading product data:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-0 mt-2">
        <div className="flex justify-center items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-['Cormorant Garamond'] font-bold text-center text-coffeeDeep mb-0 mt-2"
            >
              Our Signature Collection
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-oliveGreen mx-auto mb-10 mt-4"
            ></motion.div>
          </div>
        </div>
        
        <div className="space-y-24 mb-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              display_price={product.display_price}
              og_price={product.og_price}
              img_path={product.img_path}
              isReversed={index % 2 !== 0}
              index={index}
              product={product}
            />
          ))}
        </div>
      </div>
      <InstagramFollowSection />  
    </div>
  );
};

export default Home;