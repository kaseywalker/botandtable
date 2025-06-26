import React, { useState } from 'react';
import EnhancedRevenueLeakDetector from './EnhancedRevenueLeakDetector';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-cream-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            See How Much Revenue Your Restaurant Is{' '}
            <span className="text-coral-500">Losing Every Day</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Our AI found restaurants like yours are missing{' '}
            <span className="font-bold text-coral-500">$3,200+ monthly</span> in hidden revenue.{' '}
            Discover your exact number in 60 seconds.
          </p>
        </div>

        <EnhancedRevenueLeakDetector />

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every day you wait is another day your competitors are capturing customers that should be yours.{' '}
            <span className="font-semibold text-coral-500">Stop the revenue bleeding now.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

