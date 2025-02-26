import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-darkolivegreen">
        <p>At The Coffee Arc, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.</p>
        
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, shipping address, and payment details when you place an order.</p>
        
        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <p>Your information is used to process orders, improve our services, and send updates about our products and promotions.</p>
        
        <h2 className="text-2xl font-semibold">3. Data Security</h2>
        <p>We implement security measures to protect your personal data, but cannot guarantee complete security of information shared online.</p>
        
        <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
        <p>We do not sell or trade your personal data. We may share information with trusted third parties to fulfill orders or comply with legal requirements.</p>
        
        <h2 className="text-2xl font-semibold">5. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information by contacting us.</p>
        
        <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
        <p>We reserve the right to update this Privacy Policy at any time. Please review this page periodically for changes.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
