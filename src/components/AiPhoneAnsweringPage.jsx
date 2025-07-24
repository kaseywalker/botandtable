import React from 'react';
import Hero from './ui/ai-phone-answering/Hero';
import BenefitsGrid from './ui/ai-phone-answering/BenefitsGrid';
import PerformanceMetrics from './ui/ai-phone-answering/PerformanceMetrics';
import FeaturesSection from './ui/ai-phone-answering/FeaturesSection';
import HowItWorks from './ui/ai-phone-answering/HowItWorks';
import PricingSection from './ui/ai-phone-answering/PricingSection';
import CallToAction from './ui/ai-phone-answering/CallToAction';
import FAQSection from './ui/ai-phone-answering/FAQSection';
import ArticlesSection from './ArticlesSection';

function HeroArticlesSection() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex-1 min-w-[320px]">
        <h3 className="text-2xl font-bold text-navy-900 mb-4">Every missed call is lost revenue.</h3>
        <p className="text-lg text-gray-700 font-light mb-6">While your staff is busy serving customers, potential guests are hanging up after just 3 rings, taking their business to competitors who answer immediately. With 73% of customers preferring to call restaurants directly for reservations and orders, your phone line is your most valuable sales channel—but only if someone answers it.</p>
      </div>
      <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex-1 min-w-[320px]">
        <h3 className="text-2xl font-bold text-navy-900 mb-4">Bot and Table's AI Phone Answering system</h3>
        <p className="text-lg text-gray-700 font-light mb-6">Ensures you never miss another call or lose another customer. Our advanced AI technology handles unlimited calls simultaneously, processes orders with 99.9% accuracy, books reservations instantly, and provides personalized customer service that sounds completely human—all while your staff focuses on delivering exceptional in-person experiences.</p>
      </div>
    </div>
  );
}

export default function AiPhoneAnsweringPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <Hero />
      {/* Section Title and Hero Articles as a white card section */}
      <section className="w-full bg-white py-16">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-16 text-center">Never Miss a Guest, Never Miss a Dollar</h2>
        </div>
        <HeroArticlesSection />
      </section>
      {/* Key Benefits Section */}
      <BenefitsGrid />
      {/* Performance Metrics Section */}
      <PerformanceMetrics />
      {/* Features Section */}
      <FeaturesSection />
      {/* How It Works Section */}
      <HowItWorks />
      {/* Call to Action Section */}
      <CallToAction />
      {/* Related Articles Section */}
      <ArticlesSection />
    </div>
  );
} 