import React from 'react';
import EnhancedRevenueLeakDetector from './EnhancedRevenueLeakDetector';
import SparklesText from "./ui/SparklesText";
import { AICommunicationIconCloudWithRobot } from "./ai-communication-demo-with-robot";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-cream-50 to-white pt-20 pb-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-4 md:px-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl text-left">
          <SparklesText text="Restaurant Growth, Automated" colors={{ first: "#27a1c2", second: "#db5439" }} className="mb-6" />
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
            Set it up once. Watch your customer base grow—while you focus on running your restaurant.
          </h2>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-md">
            Book Strategy Call
          </button>
        </div>
        {/* Right: Animated Icon Cloud with Robot */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md mb-8 md:mb-0">
          <AICommunicationIconCloudWithRobot />
        </div>
      </div>
      {/* Analyzer below hero */}
      <div className="container mx-auto px-6 mt-4">
        <EnhancedRevenueLeakDetector />
      </div>
    </section>
  );
};

export default Hero;

