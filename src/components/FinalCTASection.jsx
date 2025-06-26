import React from 'react';

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

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/confident-business-person.jpg" 
                alt="Confident restaurant owner who transformed their business with Bot & Table" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Success Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Monthly Revenue Increase</p>
                      <p className="text-3xl font-bold text-green-600">+$12,400</p>
                    </div>
                    <div className="text-green-500 text-3xl">📈</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-gray-800">+89</p>
                      <p className="text-xs text-gray-600">New Reviews</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">+340%</p>
                      <p className="text-xs text-gray-600">Online Orders</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-800">0hrs</p>
                      <p className="text-xs text-gray-600">Daily Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
              <span className="text-sm font-bold">✓ Proven Results</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-coral-500 mb-2">500+</div>
              <p className="text-gray-400">Restaurants Transformed</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-coral-500 mb-2">$2.3M+</div>
              <p className="text-gray-400">Revenue Generated</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-coral-500 mb-2">4.9★</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-coral-500 mb-2">24/7</div>
              <p className="text-gray-400">AI Working For You</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

