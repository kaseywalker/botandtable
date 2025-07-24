import React from 'react';

export default function FAQSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white rounded-2xl shadow p-8 border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">FAQ Question {i}?</h3>
              <p className="text-gray-600">Short answer to this frequently asked question goes here. Address common concerns or objections.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 