import React from 'react';

const faqs = [
  {
    id: 1,
    question: "What materials are used in the handbags?",
    answer: "Our handbags are crafted from high-quality vegan leather and sustainable materials, ensuring both style and eco-friendliness."
  },
  {
    id: 2,
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a confirmation email with a tracking link to monitor your shipment's progress."
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within India. We are working on expanding to international locations soon!"
  }
];

const FAQsPage = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-oliveGreen text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
