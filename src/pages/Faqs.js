import React from 'react';

const faqs = [
  {
    id: 1,
    question: "What if I received the wrong item?",
    answer: "We’re so sorry if this happens! Please contact us within 24 hours of delivery, and we’ll make sure to resolve it as soon as possible."
  },
  {
    id: 2,
    question: "Can I change or cancel my order after placing it?",
    answer: "Since we start processing orders quickly, cancellations or changes might not always be possible. However, you can reach out to us immediately, and we’ll do our best to assist you."
  },
  {
    id: 3,
    question: "How often do you launch new collections?",
    answer: "We release exclusive themed collections periodically. Each collection is carefully designed with a unique story behind it. Stay updated by following us on Instagram and subscribing to our newsletter!"
  },
  {
    id: 4,
    question: "Do you have a physical store?",
    answer: "No, Auna is an online-only brand for now. We operate through our website and Instagram, ensuring a seamless shopping experience."
  },
  {
    id: 5,
    question: "My bag arrived damaged. What should I do?",
    answer: "We’re sorry for the inconvenience! If your bag arrives damaged, please contact us within 24 hours of delivery with photos, and we’ll assist you."
  },
  {
    id: 6,
    question: "I have a question that’s not listed here. How can I reach you?",
    answer: "You can DM us on Instagram or email us at bagsauna@gmail.com for any inquiries, and we’ll be happy to assist you!"
  },
  {
    id: 7,
    question: "Can I return or exchange my bag if I change my mind?",
    answer: "Since we offer limited-edition collections, all sales are final unless the product arrives damaged or defective."
  }
];

const FAQsPage = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-oliveGreen text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg md:text-2xl font-openSans mb-4 text-justify">{faq.question}</h2>
            <p className="text-sm md:text-lg text-justify">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
