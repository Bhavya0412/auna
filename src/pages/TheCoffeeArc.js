import React, { Suspense, lazy, useEffect, useState, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'; // Import the Navbar

const InstagramFollowSection = lazy(() => import('../components/InstagramFollowSection'));

// This is the detailed Product Card component for the collection page
const ProductCard = memo(({ id, name, description, display_price, og_price, img_path, isReversed, index, product, collectionPath }) => {
    const controls = useAnimation();
    const navigate = useNavigate();
    const { addToCart, cartItems } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const isInCart = cartItems.some(item => item.id === id);

    const openProductPage = (productId) => {
        navigate(`/${collectionPath}/product/${productId}`);
    };

    const handleAddToCart = () => {
        if (!product) return;
        setIsAdding(true);
        addToCart(product, 1);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
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
                  transition-shadow duration-300 max-w-6xl mx-auto border-2 border-coffeeTan`}
        >
            <motion.div
                className="md:w-1/2 overflow-hidden relative h-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={img_path}
                    alt={name}
                    loading='lazy'
                    className="w-full object-cover mt-[-70px]"
                />
            </motion.div>

            <div className="md:w-1/2 p-8 flex flex-col justify-center ">
                <motion.h3
                    className="text-3xl sm:text-3xl md:text-4xl font-serif mb-2 text-coffeeDeep cursor-pointer"
                    onClick={() => openProductPage(id)}
                    whileHover={{ scale: 1.05, color: '#5C6147' }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.h3>
                <div className="w-16 h-1 bg-oliveGreen mb-4"></div>
                <p className="text-darkolivegreen mb-6 text-lg sm:text-lg md:text-xl leading-relaxed">{description}</p>

                <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-semibold text-mochaBrown line-through opacity-60">
                        ₹{(og_price).toFixed(2)}
                    </span>
                    <span className="text-2xl font-bold text-oliveGreen">₹{(display_price).toFixed(2)}</span>
                    <span className="text-sm text-oliveGreen opacity-80 font-medium">
                        {Math.round(((og_price - display_price) / og_price) * 100)}% OFF
                    </span>
                </div>

                {isInCart && (
                    <div className="bg-amber-100 border border-amber-900 text-amber-900 px-2 py-2 rounded-md mb-3 text-sm max-w-xs">
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        Added to cart
                    </div>
                )}

                <motion.div
                    className="flex items-center space-x-4 mt-2"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.button
                        className="text-sm sm:text-base md:text-lg px-6 py-2 bg-oliveGreen text-white rounded-md hover:bg-darkolivegreen transition-colors duration-300"
                        onClick={() => openProductPage(id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Details
                    </motion.button>

                    <motion.button
                        className={`text-sm sm:text-base md:text-lg px-6 py-2 rounded-md transition-colors duration-300 ${isAdding
                                ? 'bg-coffeeTan text-white'
                                : 'bg-coffeeDeep text-white hover:bg-coffeeDeep'
                            }`}
                        onClick={handleAddToCart}
                        disabled={isAdding}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isAdding ? 'Added!' : 'Add to Cart'}
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
});

// This is the main page component
const TheCoffeeArc = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Check cache first
                const cached = localStorage.getItem('product_data');
                let data;
                if (cached) {
                    data = JSON.parse(cached);
                } else {
                    const response = await fetch('/data/Product.json');
                    data = await response.json();
                    localStorage.setItem('product_data', JSON.stringify(data));
                }

                if (data.the_coffee_arc && Array.isArray(data.the_coffee_arc)) {
                    setProducts(data.the_coffee_arc);
                } else {
                    console.error('Invalid data format in Product.json');
                }
            } catch (error) {
                console.error('Error loading product data:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* We pass the active collection title to the Navbar */}
            {/* <Navbar activeCollection="The Coffee Arc" /> */}

            <div className="max-w-7xl mx-auto px-4 py-0 mt-8">
                <div className="space-y-24 mb-6 pt-8">
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
                            collectionPath="The-Coffee-Arc" // Pass collection path
                        />
                    ))}
                </div>
            </div>
            
            <Suspense fallback={<div className="text-center py-4"></div>}>
                <InstagramFollowSection />
            </Suspense>
        </div>
    );
};

export default TheCoffeeArc;

