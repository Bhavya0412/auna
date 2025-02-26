import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-cream p-10 rounded-lg shadow-lg border-2 border-coffeeTan">
        <h1 className="text-4xl font-bold mb-8 text-center text-coffeeDeep">Contact Us</h1>
        <p className="text-darkolivegreen mb-6 text-center">
          We'd love to hear from you! Whether you have questions about our products, want to collaborate, or just want to say hello — reach out to us.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-mochaBrown font-medium mb-2">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border-2 border-coffeeTan rounded-lg focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            />
          </div>
          <div>
            <label className="block text-mochaBrown font-medium mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border-2 border-coffeeTan rounded-lg focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            />
          </div>
          <div>
            <label className="block text-mochaBrown font-medium mb-2">Message</label>
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              className="w-full p-3 border-2 border-coffeeTan rounded-lg focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-oliveGreen text-white p-3 rounded-lg font-semibold hover:bg-darkolivegreen transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
