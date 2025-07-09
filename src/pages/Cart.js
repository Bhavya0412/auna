import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [whatsappURL, setWhatsappURL] = useState("#");
  const [instagramMessage, setInstagramMessage] = useState("");

  // Generate WhatsApp and Instagram messages
  useEffect(() => {
    if (cartItems.length > 0) {
      const cartDetails = cartItems.map(item => 
        `${item.name} - Rs. ${item.display_price} x ${item.quantity} = Rs. ${item.display_price * item.quantity}`
      ).join('\n');
      
      const totalAmount = getCartTotal();
      
      const message = `Hello, I hope you're doing well! 

I am interested in the following products from your website:

${cartDetails}

Total Amount: Rs. ${totalAmount.toFixed(2)}

I found these on the Auna website and would love to know more details about ordering and delivery.

Cart URL: ${window.location.href}`;

      setWhatsappURL(`https://wa.me/919967425691?text=${encodeURIComponent(message)}`);
      setInstagramMessage(message);
    }
  }, [cartItems, getCartTotal]);

  const handleInstagramInquiry = () => {
    // Copy to clipboard
    navigator.clipboard.writeText(instagramMessage).then(() => {
      alert("Message copied to clipboard! You'll be redirected to Instagram now. Just paste it in the chat.");
      // Open Instagram chat (replace with actual thread or profile link)
      window.open("https://www.instagram.com/direct/t/17845145331390942", "_blank");
    }).catch((err) => {
      console.error("Failed to copy message: ", err);
    });
  };

  const handleViewDetails = (productId) => {
    navigate(`/The-Coffee-Arc/product/${productId}`);
  };

  const incrementQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const decrementQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-6xl text-coffeeTan mb-6" />
            <h1 className="text-4xl font-serif mb-4 text-coffeeDeep">Your Cart is Empty</h1>
            <p className="text-lg text-mochaBrown mb-8">Looks like you haven't added any items to your cart yet.</p>
            <motion.button
              onClick={() => navigate('/')}
              className="bg-oliveGreen text-white px-8 py-3 rounded-md hover:bg-darkolivegreen transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif mb-4 -mt-9 text-coffeeDeep">Shopping Cart</h1>
          <div className="w-24 h-1 bg-oliveGreen mx-auto mb-6"></div>
          <p className="text-lg -mt-2 text-mochaBrown">Review your selected items</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-2">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-cream border-2 border-coffeeTan rounded-lg p-6 shadow-md"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="sm:w-32 sm:h-32 w-full h-48 flex-shrink-0">
                      <img
                        src={item.img_path}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md border border-coffeeTan"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                        <div>
                          <h3 className="text-xl font-serif text-coffeeDeep mb-2">{item.name}</h3>
                          <p className="text-mochaBrown text-sm mb-2">{item.description}</p>
                          <p className="text-sm text-darkolivegreen">
                            <span className="font-medium">Size:</span> {item.size} cm
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-lg font-semibold text-oliveGreen">
                              Rs. {item.display_price}
                            </span>
                            <span className="text-sm line-through text-mochaBrown opacity-70">
                              Rs. {item.og_price}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 sm:items-end">
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-coffeeDeep">Qty:</span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => decrementQuantity(item.id, item.quantity)}
                                className="w-8 h-8 bg-coffeeDeep text-white rounded-full flex items-center justify-center hover:bg-coffeeTan transition-colors"
                              >
                                <FontAwesomeIcon icon={faMinus} size="sm" />
                              </button>
                              <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => incrementQuantity(item.id, item.quantity)}
                                className="w-8 h-8 bg-coffeeDeep text-white rounded-full flex items-center justify-center hover:bg-coffeeTan transition-colors"
                              >
                                <FontAwesomeIcon icon={faPlus} size="sm" />
                              </button>
                            </div>
                          </div>

                          {/* Subtotal */}
                          <div className="text-lg font-semibold text-coffeeDeep">
                            Rs. {(item.display_price * item.quantity).toFixed(2)}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleViewDetails(item.id)}
                              className="px-3 py-1 bg-oliveGreen text-white rounded-md hover:bg-darkolivegreen transition-colors text-sm"
                            >
                              <FontAwesomeIcon icon={faEye} className="mr-1" />
                              View Details
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="px-3 py-1 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors text-sm"
                            >
                              <FontAwesomeIcon icon={faTrash} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-beige border-2 border-coffeeTan rounded-lg p-6 sticky top-4"
            >
              <h3 className="text-xl font-serif text-coffeeDeep mb-4 border-b border-coffeeTan pb-2">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-mochaBrown">Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}):</span>
                  <span className="font-medium text-coffeeDeep">Rs. {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-coffeeTan pt-3">
                  <span className="text-lg font-semibold text-coffeeDeep">Total:</span>
                  <span className="text-lg font-bold text-oliveGreen">Rs. {getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Inquiry Buttons */}
              <div className="space-y-3">
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-lime-900 hover:bg-lime-800 text-cream font-medium py-3 px-4 rounded-md text-center transition-colors duration-300 block"
                >
                  Enquire via WhatsApp
                </a>
                <button
                  onClick={handleInstagramInquiry}
                  className="w-full bg-lime-900 hover:bg-lime-800 text-cream font-medium py-3 px-4 rounded-md text-center transition-colors duration-300"
                >
                  Enquire via Instagram
                </button>
              </div>

              {/* Additional Actions */}
              <div className="mt-6 pt-4 border-t border-coffeeTan">
                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-white text-coffeeDeep border-2 border-coffeeTan hover:bg-cream font-medium py-2 px-4 rounded-md text-center transition-colors duration-300 mb-3"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-yellow-800 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md text-center transition-colors duration-300"
                >
                  Clear Cart
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;