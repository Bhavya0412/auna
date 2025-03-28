import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="max-w-3xl mx-auto bg-oliveGreen text-white p-6 rounded-lg shadow-lg">
        <p className="text-justify mb-4">At Auna Bags, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with us online.</p>
        
        <h2 className="text-lg md:text-2xl font-openSans mb-2">1. Information We Collect</h2>
        <p className="text-justify mb-4">When you browse or make a purchase on our website, we may collect:</p>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>Personal Information: Name, email address, phone number, shipping & billing address.</li>
          <li>Payment Information: We do not store your payment details. All transactions are processed through secure third-party payment gateways.</li>
          <li>Order Details: Products purchased, order history, and preferences.</li>
          <li>Browsing Data: IP address, browser type, and interactions with our website.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">2. How We Use Your Information</h2>
        <p className="text-justify mb-4">We use the information collected to:</p>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>Process and deliver your orders.</li>
          <li>Communicate order updates and customer support.</li>
          <li>Improve our website experience and personalize content.</li>
          <li>Send promotional offers (only if you subscribe).</li>
          <li>Detect and prevent fraud or security issues.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">3. How We Protect Your Information</h2>
        <p className="text-justify mb-4">We implement strict security measures to protect your personal data. However, while we strive for security, no online platform is 100% risk-free.</p>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">4. Sharing Your Information</h2>
        <p className="text-justify mb-4">We do not sell or trade your personal information. We only share necessary details with:</p>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>Shipping & delivery partners to fulfill your order.</li>
          <li>Payment processors to complete transactions securely.</li>
          <li>Legal authorities, if required by law.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">5. Cookies & Tracking</h2>
        <p className="text-justify mb-4">We use cookies to improve your browsing experience and analyze website traffic. You can disable cookies in your browser settings if you prefer.</p>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">6. Your Rights</h2>
        <p className="text-justify mb-4">You have the right to:</p>
        <ul className="list-disc list-inside text-justify mb-4">
          <li>Access, update, or delete your personal data.</li>
          <li>Opt out of promotional emails at any time.</li>
          <li>Request information on how we process your data.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">7. Third-Party Links</h2>
        <p className="text-justify mb-4">Our website may contain links to external sites. We are not responsible for their privacy policies or content.</p>

        <h2 className="text-lg md:text-2xl font-openSans mb-2">8. Updates to This Policy</h2>
        <p className="text-justify mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
