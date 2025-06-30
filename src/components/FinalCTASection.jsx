import React from 'react';
import { Calendar } from './ui/calendar';

const FinalCTASection = () => {
  return (
    <section id="book-call" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Restaurant's Success Story{' '}
                <span className="text-coral-500">Starts Today</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Every day you wait is another day your competitors capture customers that should be yours. 
                While you're reading this, restaurants using Bot & Table are automatically generating reviews, 
                answering customer calls, and building their customer base.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Book Your Strategy Call</h3>
                  <p className="text-gray-300">15-minute call to understand your restaurant's unique challenges and goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Custom AI Setup</h3>
                  <p className="text-gray-300">We configure your AI marketing system specifically for your restaurant and local market.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Watch Your Business Grow</h3>
                  <p className="text-gray-300">Your AI works 24/7 to generate reviews, handle calls, and bring in new customers automatically.</p>
                </div>
              </div>
            </div>

            <div className="bg-coral-500/20 border border-coral-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-coral-400 mb-3">Limited Time: Implementation Bonus</h3>
              <p className="text-gray-300">
                Book your call this week and receive a complimentary competitive analysis report 
                showing exactly how your restaurant ranks against local competitors (valued at $497).
              </p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Book Your Strategy Call Now
              </button>
              <p className="text-center text-gray-400 text-sm">
                No obligation • 15-minute call • Immediate insights
              </p>
            </div>
          </div>

          {/* Right Column - Booking Calendar */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full max-w-lg mx-auto text-gray-900">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Book a Free Strategy Call</h3>
              <Calendar />
              <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
                <select className="flex-1 border rounded-lg px-4 py-3 text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option>Select a time</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </select>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-4 rounded-lg transition-all hover:scale-105 w-full sm:w-auto mt-2 sm:mt-0">
                  Book Strategy Call
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">No spam, no obligation—just actionable insights for your restaurant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

