import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="w-full py-16 bg-white border-b">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
        <p className="text-lg text-gray-700 mb-8">Book a free demo and see how AI Phone Answering can boost your revenue and guest experience.</p>
        <button className="bg-[#FF6B47] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg transition mb-6">Book My Free Demo</button>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <Link 
            to="/resources" 
            className="hover:text-orange-600 underline transition-colors"
          >
            Browse all resources
          </Link>
          <span>•</span>
          <Link 
            to="/articles/from-chaos-to-cash" 
            className="hover:text-orange-600 underline transition-colors"
          >
            Read success stories
          </Link>
          <span>•</span>
          <Link 
            to="/google-reviews" 
            className="hover:text-orange-600 underline transition-colors"
          >
            Explore Google Reviews
          </Link>
          <span>•</span>
          <Link 
            to="/sms-marketing" 
            className="hover:text-orange-600 underline transition-colors"
          >
            Learn about SMS marketing
          </Link>
        </div>
      </div>
    </section>
  );
} 