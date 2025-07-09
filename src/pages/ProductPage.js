import React, { useState, useEffect,useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [whatsappURL, setWhatsappURL] = useState("#");
  const [isAdding, setIsAdding] = useState(false);
  
  const { addToCart, cartItems } = useCart();

  // Check if product is already in cart
  const isInCart = cartItems.some(item => item.id === id);
  const cartItem = cartItems.find(item => item.id === id);

    const fetchProduct = useCallback(async () => {
    try {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      const categories = ["the_coffee_arc"];

      for (let category of categories) {
        if (data[category]) {
          const found = data[category].find(p => p.id === id);
          if (found) {
            const main = found.img_path || "";
            const images = [main, ...(found.additional_images || []).filter(img => img !== main)];
            setProduct({ ...found, additional_images: images });
            setSelectedImage(main);
            break;
          }
        }
      }
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    if (product) {
      const msg = `${window.location.href}\nHello, I hope you're doing well! \nI am interested in the ${product.name} at Rs. ${product.display_price}.\nSize: ${product.size}\nI found this on the Auna website and would love to know more details.`;
      setWhatsappURL(`https://wa.me/919967425691?text=${encodeURIComponent(msg)}`);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleInstagramInquiry = () => {
    const msg = `${window.location.href}\nHello, I hope you're doing well! \nI am interested in the ${product.name} at Rs. ${product.display_price}.\nSize: ${product.size}\nI found this on the Auna website and would love to know more details.`;
    navigator.clipboard.writeText(msg).then(() => {
      alert("Message copied! Redirecting to Instagram.");
      window.open("https://www.instagram.com/direct/t/17845145331390942", "_blank");
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64 animate-pulse text-coffeeDeep">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-12 text-coffeeDeep">
        <h2 className="text-2xl font-serif">Product not found</h2>
        <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white text-coffeeDeep">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="relative">
            <div className="mb-6 rounded-lg overflow-hidden shadow-md border border-coffeeTan">
              <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover" loading="lazy"/>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.additional_images.map((img, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-300
                  ${selectedImage === img ? 'border-coffeeDeep' : 'border-coffeeTan opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover aspect-square" loading="lazy"/>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-serif mb-2 text-coffeeDeep">{product.name}</h1>
            <div className="mb-4 font-light text-lg">{product.description}</div>

            {/* Price Section */}
            <div className="flex items-baseline space-x-3 my-4">
              <span className="text-2xl font-medium text-oliveGreen">Rs. {product.display_price}</span>
              <span className="text-lg line-through text-mochaBrown opacity-70">Rs. {product.og_price}</span>
              
            </div>

            {/* Cart Status */}
            {isInCart && (
              <div className="bg-amber-100 border border-amber-500 text-amber-700 px-4 py-2 rounded-md mb-4">
                <span className="font-medium">✓ Added to cart ({cartItem?.quantity} item(s))</span>
              </div>
            )}

            {/* Add to Cart or View in Cart Button */}
            {
              <motion.button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full mb-4 py-3 px-6 rounded-md font-medium transition-colors duration-300 ${
                  isAdding 
                    ? 'bg-lime-700 text-white' 
                    : 'bg-oliveGreen text-white hover:bg-darkolivegreen'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                {isAdding ? 'Added to Cart!' : 'Add to Cart'}
              </motion.button>
            }

            <p className="mb-6 text-mochaBrown">{product.product_detail}</p>

           {/* Product Specifications */}
            <div className="bg-beige border border-coffeeTan rounded-lg p-6 mb-8">
              <h3 className="font-serif text-xl mb-4 text-coffeeDeep border-b border-coffeeTan pb-2">Product Details</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex">
                  <span className="font-medium w-28 flex-shrink-0">Material:</span>
                  <span className="text-mochaBrown">{product.fabric}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-28 flex-shrink-0">Dimensions:</span>
                  <span className="text-mochaBrown">{product.size} cm</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-28 flex-shrink-0">Additional:</span>
                  <span className="text-mochaBrown">{product.additional_details}</span>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-coffeeDeep hover:bg-coffeeTan text-cream font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
              >
                Enquire on WhatsApp
              </a>
              <button
                onClick={handleInstagramInquiry}
                className="w-full sm:w-auto bg-yellow-900 hover:bg-coffeeTan text-cream font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
              >
                Enquire on Instagram
              </button>
            </div>

            {/* Share Button */}
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href) && alert("Link copied to clipboard!")}
              className="flex items-center justify-center mt-6 py-2 text-coffeeDeep hover:text-oliveGreen transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faShareAlt} className="mr-2" /> Share this Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;