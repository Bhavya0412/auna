
import {  useMemo, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus,faShoppingCart, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const totalAmount = useMemo(() => getCartTotal(), [cartItems, getCartTotal]);
  const itemCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);

  const message = useMemo(() => {
  if (cartItems.length === 0) return '';

  const details = cartItems.map(item =>
    `${item.name} - Rs. ${item.display_price} x ${item.quantity} = Rs. ${(item.display_price * item.quantity).toFixed(2)}`
  ).join('\n');

  const uniqueProductLinks = [
    ...new Set(cartItems.map(item => `https://yourdomain.com/The-Coffee-Arc/product/${item.id}`))
  ].join('\n');

  return `Hello, I hope you're doing well!\n\nI am interested in the following products from your website:\n\n${details}\n\nProduct Links:\n${uniqueProductLinks}\n\nTotal Amount: Rs. ${totalAmount.toFixed(2)}`;
}, [cartItems, totalAmount]);

  const whatsappURL = useMemo(() =>
    `https://wa.me/919967425691?text=${encodeURIComponent(message)}`,
    [message]
  );

  const handleInstagramInquiry = useCallback(() => {
    navigator.clipboard.writeText(message).then(() => {
      alert("Message copied! Redirecting to Instagram chat.");
      window.open("https://www.instagram.com/direct/t/17845145331390942", "_blank");
    });
  }, [message]);

  const handleViewDetails = useCallback((id) => navigate(`/The-Coffee-Arc/product/${id}`), [navigate]);

  const incrementQuantity = (id, qty) => updateQuantity(id, qty + 1);
  const decrementQuantity = (id, qty) => qty > 1 && updateQuantity(id, qty - 1);

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-white py-16 text-center">
        <FontAwesomeIcon icon={faShoppingCart} className="text-6xl text-coffeeTan mb-6" />
        <h1 className="text-4xl font-serif mb-4 text-coffeeDeep">Your Cart is Empty</h1>
        <p className="text-lg text-mochaBrown mb-8">Looks like you haven't added any items yet.</p>
        <motion.button
          onClick={() => navigate('/')}
          className="bg-oliveGreen text-white px-8 py-3 rounded-md hover:bg-darkolivegreen transition-colors font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >Continue Shopping</motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-11">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h1 className="text-3xl font-serif text-coffeeDeep -mt-6 mb-3">Shopping Cart</h1>
          <div className="w-24 h-1 bg-oliveGreen mx-auto mb-4"></div>
          <p className="text-lg text-mochaBrown">Review your selected items</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-cream border border-coffeeTan rounded-lg p-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-28 sm:h-28 w-full h-44">
                    <img src={item.img_path} alt={item.name} className="w-full h-full object-cover rounded-md border border-coffeeTan" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-coffeeDeep mb-1">{item.name}</h3>
                      
                      <p className="text-sm text-darkolivegreen mb-2"><span className="font-medium">Size:</span> {item.size} cm</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-oliveGreen">Rs. {item.display_price}</span>
                        <span className="text-sm line-through text-mochaBrown opacity-70">Rs. {item.og_price}</span>
                        <span className="text-sm text-oliveGreen opacity-80font-medium">
    {Math.round(((item.og_price - item.display_price) / item.og_price) * 100)}% OFF
  </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-wrap justify-between items-center mt-3 gap-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-coffeeDeep">Qty:</span>
                        <button onClick={() => decrementQuantity(item.id, item.quantity)} className="w-7 h-7 bg-coffeeDeep text-white rounded-full flex items-center justify-center hover:bg-coffeeTan">
                          <FontAwesomeIcon icon={faMinus} size="xs" />
                        </button>
                        <span className="font-bold text-md w-6 text-center">{item.quantity}</span>
                        <button onClick={() => incrementQuantity(item.id, item.quantity)} className="w-7 h-7 bg-coffeeDeep text-white rounded-full flex items-center justify-center hover:bg-coffeeTan">
                          <FontAwesomeIcon icon={faPlus} size="xs" />
                        </button>
                      </div>
                      <div className="text-md font-semibold text-coffeeDeep">
                        Rs. {(item.display_price * item.quantity).toFixed(2)}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleViewDetails(item.id)} className="px-3 py-1 bg-oliveGreen text-white rounded-md hover:bg-darkolivegreen text-sm flex items-center">
                           View
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 text-sm flex items-center">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-beige border  border-coffeeTan rounded-lg p-6 sticky top-4"
          >
            <h3 className="text-xl font-serif text-coffeeDeep mb-4 border-b border-coffeeTan pb-2">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-mochaBrown">Items ({itemCount}):</span>
                <span className="font-medium text-coffeeDeep">Rs. {totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-coffeeTan pt-3">
                <span className="text-lg font-semibold text-coffeeDeep">Total:</span>
                <span className="text-lg font-bold text-oliveGreen">Rs. {totalAmount.toFixed(2)}</span>
              </div>
            </div>
            
              <Link to="/shipping_policies" className="w-full bg-amber-900 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-md text-center flex items-center justify-center mb-2">
                <FontAwesomeIcon icon={faShippingFast} className="mr-2" />
                Shipping Rates & Policies
              </Link>
              
            

            <div className="mt-6 pt-4 border-t border-coffeeTan">
             
              <div className="space-y-3">
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="w-full bg-lime-900 hover:bg-lime-800 text-cream font-medium py-3 px-4 rounded-md block text-center">Enquire via WhatsApp</a>
              <button onClick={handleInstagramInquiry} className="w-full bg-lime-900 hover:bg-lime-800 text-cream font-medium py-3 px-4 rounded-md text-center">Enquire via Instagram</button>
              <div className="mt-6 pt-4 border-t border-coffeeTan"></div>
              <button onClick={() => navigate('/')} className="w-full bg-white text-coffeeDeep border-2 border-coffeeTan hover:bg-cream font-medium py-2 px-4 rounded-md text-center mb-3">Continue Shopping</button>
            </div> 
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;