import React from 'react';

const careInstructions = [
  {
    id: 1,
    title: "General Care",
    description: "• Keep your handbag in a cool, dry place away from direct sunlight.\n• Avoid contact with water, oils, and perfumes to preserve the material."
  },
  {
    id: 2,
    title: "Cleaning Tips",
    description: "• Use a soft, damp cloth to gently wipe away dirt or stains.\n• For tougher stains, consult a professional leather cleaner."
  },
  {
    id: 3,
    title: "Storage Suggestions",
    description: "• Store the bag in its dust bag when not in use.\n• Stuff the bag with tissue paper to maintain its shape."
  }
];

const CareInstructionsPage = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Care Instructions</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {careInstructions.map((instruction) => (
          <div key={instruction.id} className="bg-oliveGreen text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">{instruction.title}</h2>
            <p className="whitespace-pre-line text-lg mb-4">{instruction.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareInstructionsPage;
