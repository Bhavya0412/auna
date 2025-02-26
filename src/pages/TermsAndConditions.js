import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-darkolivegreen">
        <p>Welcome to The Coffee Arc. By accessing our website and purchasing our products, you agree to be bound by the following terms and conditions.</p>
        
        <h2 className="text-2xl font-semibold">1. General</h2>
        <p>All products listed on our site are subject to availability. Prices and product descriptions may change without prior notice.</p>
        
        <h2 className="text-2xl font-semibold">2. Orders and Payments</h2>
        <p>We reserve the right to refuse or cancel any order at our discretion. Payment must be made in full before shipping.</p>
        
        <h2 className="text-2xl font-semibold">3. Shipping</h2>
        <p>Please review our Shipping Policies for details on delivery times and charges.</p>
        
        <h2 className="text-2xl font-semibold">4. Returns and Refunds</h2>
        <p>All sales are final. We do not offer returns or refunds at this time.</p>
        
        <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
        <p>All content on this website is the property of The Coffee Arc and is protected by copyright laws.</p>
        
        <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
        <p>We reserve the right to update these terms and conditions at any time without prior notice.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions