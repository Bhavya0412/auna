import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <div className="max-w-3xl mx-auto bg-oliveGreen text-white p-6 rounded-lg shadow-lg">
        <p className="text-justify mb-4">Welcome to Auna Bags! By using our website and purchasing our products, you agree to the following terms.</p>
        
        <h2 className="text-lg md:text-2xl font-openSans mb-2">1. Orders & Payments</h2>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>Orders are confirmed only after full payment is received.</li>
          <li>No cancellations or modifications once the order is placed.</li>
          <li>Prices may change without prior notice.</li>
        </ul>
        
        <h2 className="text-lg md:text-2xl font-openSans mb-2">2. Shipping & Delivery</h2>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>Orders are processed within [Insert Processing Time] business days.</li>
          <li>Delivery times vary based on location. Delays caused by couriers are beyond our control.</li>
          <li>We are not responsible for lost or stolen packages after delivery.</li>
        </ul>
        
        <h2 className="text-lg md:text-2xl font-openSans mb-2">3. Returns & Exchanges</h2>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>All sales are final unless the item arrives damaged.</li>
          <li>Report damages within 24 hours of delivery with photo proof.</li>
        </ul>
        
        <h2 className="text-lg md:text-2xl font-openSans mb-2">4. Intellectual Property</h2>
        <p className="text-justify mb-4">All designs, images, and content belong to Auna Bags. No unauthorized use is allowed.</p>
        
        <h2 className="text-lg md:text-2xl font-openSans mb-2">5. Liability & Governing Law</h2>
        <p className="text-justify mb-4">We are not responsible for any indirect or accidental damages. These terms are governed by Indian law.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
