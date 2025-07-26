import React from 'react';
import Hero from './ui/ai-phone-answering/Hero';
import BenefitsGrid from './ui/ai-phone-answering/BenefitsGrid';
import PerformanceMetrics from './ui/ai-phone-answering/PerformanceMetrics';
import FeaturesSection from './ui/ai-phone-answering/FeaturesSection';
import HowItWorks from './ui/ai-phone-answering/HowItWorks';
import PricingSection from './ui/ai-phone-answering/PricingSection';

import FAQSection from './ui/ai-phone-answering/FAQSection';
import ArticlesSection from './ArticlesSection';
import DemoBookingForm from './ui/DemoBookingForm';

function HeroArticlesSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-orange-50 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          The Revenue Problem
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Never Miss a Guest,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            Never Miss a Dollar
          </span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Your phone line is your restaurant's most valuable sales channel. Here's why missing calls is costing you thousands.
        </p>
      </div>

      {/* Problem & Solution Cards */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Problem Card */}
        <div className="group relative">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-10 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 bg-red-500 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-500 rounded-full blur-2xl"></div>
            </div>
            
            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                The Problem: Every Missed Call is Lost Revenue
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While your staff serves customers, potential guests hang up after just 3 rings, taking their business to competitors who answer immediately.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                  <div className="text-2xl font-bold text-red-600">73%</div>
                  <div className="text-sm text-gray-600">Prefer calling restaurants</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-gray-600">Rings before hanging up</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Card */}
        <div className="group relative">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 bg-green-500 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-500 rounded-full blur-2xl"></div>
            </div>
            
            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                The Solution: AI That Never Misses a Call
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bot and Table's AI Phone Answering system ensures you capture every opportunity with advanced technology that sounds completely human.
              </p>
              
              {/* Features */}
              <div className="space-y-3">
                {[
                  'Handles unlimited calls simultaneously',
                  'Processes orders with 99.9% accuracy',
                  'Books reservations instantly',
                  'Provides personalized customer service'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg">
        <h4 className="text-2xl font-bold mb-4 text-gray-900">
          Transform Your Phone Line Into a Revenue Machine
        </h4>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          While your staff focuses on delivering exceptional in-person experiences, our AI captures every call and converts every opportunity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full text-sm font-medium text-green-700 border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            24/7 availability • Human-like conversations
          </div>
          <div className="inline-flex items-center bg-orange-50 px-4 py-2 rounded-full text-sm font-medium text-orange-700 border border-orange-200">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            100% call capture rate guaranteed
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AiPhoneAnsweringPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <Hero />
      {/* Never Miss a Guest, Never Miss a Dollar Section */}
      <section className="w-full bg-white py-20">
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
      {/* Demo Booking Form */}
      <DemoBookingForm />
      {/* Related Articles Section */}
      <ArticlesSection />
    </div>
  );
} 