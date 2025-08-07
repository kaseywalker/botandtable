import { Check, Phone, ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import { AnimatedBeamDemoCompact } from "@/components/ui/animated-beam-demo-compact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Feature() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* AI Phone Answering Section - Text Left, Graphic Right */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 shadow-sm text-slate-700">
                <Phone className="w-4 h-4 mr-2" />
                Artificial Intelligence
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  AI Phone Answering
                </h2>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <p className="text-xl leading-relaxed text-gray-700">
                    Don't miss a phone call—or potential revenue—with AI-powered technology that answers your phone <span className="font-semibold text-slate-600">24/7, 365 days a year</span>. Free up your staff while capturing every opportunity.
                  </p>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Never Miss a Call</h4>
                      <p className="text-sm text-gray-600">Free up your staff—our AI answers calls 24/7 and handles multiple conversations simultaneously.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Text, Book, and Boost Sales</h4>
                      <p className="text-sm text-gray-600">Turn your phone into an instant money-maker. Instantly texts links for reservations and ordering.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Your AI Host with All the Answers</h4>
                      <p className="text-sm text-gray-600">From menu details and allergens to parking and hours of operation, give guests the info they need with customizable responses.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Turn Calls into Marketing Moments</h4>
                      <p className="text-sm text-gray-600">Market your restaurant with every call. Promote specials and events to entice guests to visit again and again.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/ai-phone-answering">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-slate-600 hover:bg-slate-700 text-white">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Right Column - Animation */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-slate-100 to-gray-100 p-4 rounded-full mr-4">
                    <Phone className="w-8 h-8 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">AI Phone System</h4>
                    <p className="text-gray-600">Always available, always professional</p>
                  </div>
                </div>

                <div className="mb-6">
                  <AnimatedBeamDemoCompact />
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-sm font-medium text-gray-800">
                    "Our AI handles multiple calls simultaneously, ensuring every customer gets immediate, professional service even during your busiest hours."
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 text-white p-4 rounded-2xl shadow-lg z-20 animate-bounce bg-slate-600">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-bold">24/7 Available</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg z-20 border border-gray-100 animate-pulse">
                <div className="flex items-center text-sm">
                  <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                  <span className="font-semibold text-gray-700">100% Capture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature }; 