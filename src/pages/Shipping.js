import React from 'react';

const shippingPolicies = [
  {
    id: 1,
    title: "Standard Shipping",
    description: "• Delivery within 5-7 business days across Maharashtra.\n• Delivery within 10-12 business days across India.",
    cost: "• Free for all orders.\n• Additional charge for Cash on Delivery (COD): ₹100."
  },
  {
    id: 2,
    title: "Express Shipping",
    description: "• Delivery within 2-3 business days across Maharashtra.\n• Delivery within 4-5 business days across India.",
    cost: "• Flat rate for UPI: ₹150.\n• Flat rate for COD: ₹250."
  },
  {
    id: 3,
    title: "Returns & Exchanges",
    description: "We currently do not offer returns or refunds. All sales are final."
  }
];

const ShippingPoliciesPage = () => {
  return (
    <div className="min-h-screen bg-white text-oliveGreen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Shipping Policies</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {shippingPolicies.map((policy) => (
          <div key={policy.id} className="bg-oliveGreen text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">{policy.title}</h2>
            <p className="whitespace-pre-line text-lg mb-4">{policy.description}</p>
            {policy.cost && (
              <p className="text-md whitespace-pre-line font-medium">{policy.cost}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingPoliciesPage;
