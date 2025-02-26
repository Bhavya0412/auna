import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateWhatsAppLink = () => {
    const { name, email, message } = formData;
    const text = `Hello! My name is ${name}. My email is ${email}. Here is my message: ${message}`;
    return `https://wa.me/919004127927?text=${encodeURIComponent(text)}`;
  };

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
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 border-2 border-coffeeTan rounded-lg focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            />
          </div>
          <div>
            <label className="block text-mochaBrown font-medium mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border-2 border-coffeeTan rounded-lg focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            />
          </div>
          <div>
            <label className="block text-mochaBrown font-medium mb-2">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 border-2 border-coffeeTan rounded-lg focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            ></textarea>
          </div>
          <a 
            href={generateWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-oliveGreen text-white p-3 rounded-lg font-semibold hover:bg-darkolivegreen transition-colors duration-300"
          >
            Send Message via WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
