import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              The Revival of{' '}
              <span className="text-coral-500">Restaurant Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              How two restaurant industry veterans discovered the secret to turning struggling restaurants into local legends through AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Witnessed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              We Watched Too Many Great Restaurants Die
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                After 15 years in the restaurant industry, we've seen it all. Amazing chefs with incredible food, passionate owners who pour their hearts into their restaurants, and dedicated staff who work tirelessly to create memorable experiences.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                But we also watched 73% of these restaurants fail within the first five years. Not because their food wasn't good enough. Not because they didn't care enough. They failed because they couldn't compete with restaurants that had figured out modern marketing.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                The restaurants that survived weren't necessarily better - they were just better at getting customers through the door and keeping them coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Broken System */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              The Marketing System Was Broken
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Traditional Marketing Agencies</h3>
                    <p className="text-gray-600">Charged $3,000+ monthly, required constant meetings, and treated restaurants like any other business. They didn't understand the unique challenges of restaurant operations.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Hiring Marketing Staff</h3>
                    <p className="text-gray-600">Expensive, unreliable, and they quit after 3-6 months. Restaurant owners ended up doing the marketing themselves while trying to run their business.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">DIY Marketing Tools</h3>
                    <p className="text-gray-600">Required hours of daily management, constant content creation, and technical expertise that restaurant owners simply didn't have time to develop.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-coral-500 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">The Real Problem</h3>
                  <p className="text-lg leading-relaxed">
                    Restaurant owners were forced to choose between running their restaurant well or marketing it well. They couldn't do both, and their businesses suffered.
                  </p>
                  <div className="mt-6 p-4 bg-white/20 rounded">
                    <p className="font-semibold">"I became a chef to cook, not to spend 3 hours a day on social media."</p>
                    <p className="text-sm mt-2">- Maria, Italian Bistro Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              The Discovery That Changed Everything
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                In 2023, we started experimenting with AI automation for our own restaurant consulting clients. What we discovered was revolutionary: AI could handle 90% of restaurant marketing tasks better than humans, 24/7, without breaks, sick days, or turnover.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                But more importantly, it could learn and adapt to each restaurant's unique customer base, automatically optimizing campaigns based on real customer behavior and preferences.
              </p>
              <div className="bg-green-50 p-6 rounded-lg my-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">The Results Were Immediate</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>47 new Google reviews in 90 days (vs. 8-12 manually)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>67% increase in phone conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>89% increase in repeat customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Zero time spent on marketing by restaurant owners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Our Mission: Revive the Restaurant Industry
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              We believe every great restaurant deserves to succeed. That's why we built Bot & Table - the first AI marketing system designed specifically for restaurants that truly runs on autopilot.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-coral-500 mb-2">500+</div>
                <p className="text-lg">Restaurants Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-coral-500 mb-2">$2.3M+</div>
                <p className="text-lg">Additional Revenue Generated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-coral-500 mb-2">0</div>
                <p className="text-lg">Hours of Daily Management Required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-20 bg-gradient-to-br from-coral-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Our Promise to You
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're not just another marketing agency. We're restaurant industry veterans who understand your challenges because we've lived them. Bot & Table isn't just a tool - it's your unfair advantage in a competitive market.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                "Set it up once, then forget about marketing forever."
              </h3>
              <p className="text-lg text-gray-600">
                That's not just our tagline - it's our guarantee. Your AI marketing system will work 24/7 to grow your customer base while you focus on what you do best: running an amazing restaurant.
              </p>
            </div>
            <div className="mt-12">
              <Link 
                to="/"
                className="inline-block bg-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-coral-600 transition-colors"
              >
                Start Your Restaurant's Revival Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

