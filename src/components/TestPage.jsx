import React, { useState } from 'react';
import HeroScrollDemo from './ui/HeroScrollDemo';
import Testimonials from './ui/Testimonials';
import { useRef, useEffect } from 'react';
import { Confetti } from './ui/confetti';
import { Feature } from './ui/feature-with-advantages';
import { AnimatedBeamDemo } from './ui/animated-beam-demo';
import DemoBookingForm from './ui/DemoBookingForm';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Zap, Smartphone, Mail, TrendingUp, DollarSign, MessageCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOrigin, setConfettiOrigin] = useState({ x: 0.5, y: 0.2 });
  const heroRef = useRef(null);
  
  // Auto-scroll effect on page load
  useEffect(() => {
    const autoScroll = () => {
      // Start scrolling earlier, as confetti begins to fall (around 1 second)
      setTimeout(() => {
        if (heroRef.current) {
          // Find the hero heading text element within the hero section
          const heroElement = heroRef.current;
          const heroHeading = heroElement.querySelector('h1, .hero-heading, [class*="text-"]');
          
          if (heroHeading) {
            const headingRect = heroHeading.getBoundingClientRect();
            // Position to show the COMPLETE heading text - add more margin from top
            const navbarHeight = 120; // Increased to ensure full heading is visible
            const targetScrollY = window.pageYOffset + headingRect.top - navbarHeight;
            
            // Much smoother, slower scroll using custom animation
            const startY = window.pageYOffset;
            const distance = targetScrollY - startY;
            const duration = 2500; // 2.5 seconds for smooth cinematic effect
            const startTime = performance.now();
            
            const animateScroll = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Smooth easing function for cinematic feel
              const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
              
              const currentPosition = startY + (distance * easeInOutCubic);
              window.scrollTo(0, currentPosition);
              
              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              }
            };
            
            requestAnimationFrame(animateScroll);
          } else {
            // Fallback: scroll to show complete heading with more margin
            const heroRect = heroElement.getBoundingClientRect();
            const targetScrollY = window.pageYOffset + heroRect.top - 150;
            
            // Same smooth animation for fallback
            const startY = window.pageYOffset;
            const distance = targetScrollY - startY;
            const duration = 2500;
            const startTime = performance.now();
            
            const animateScroll = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
              
              const currentPosition = startY + (distance * easeInOutCubic);
              window.scrollTo(0, currentPosition);
              
              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              }
            };
            
            requestAnimationFrame(animateScroll);
          }
        }
      }, 800); // Start earlier - as confetti begins to fall
    };

    // Start auto-scroll only on initial page load
    autoScroll();
  }, []);

  // This callback will be passed to the hero and called when the heading appears
  const handleFireConfetti = (headingRect) => {
    if (headingRect) {
      // Calculate origin as the center bottom of the heading relative to the viewport
      const x = (headingRect.left + headingRect.width / 2) / window.innerWidth;
      const y = (headingRect.bottom + 8) / window.innerHeight; // 8px below
      setConfettiOrigin({ x, y });
    } else {
      setConfettiOrigin({ x: 0.5, y: 0.2 });
    }
    setShowConfetti(false); // reset
    setTimeout(() => setShowConfetti(true), 10); // fire after DOM update
  };
  
  return (
    <div style={{ position: 'relative' }}>
      <div className="w-full flex justify-end p-6">
        <Link
          to="/ai-phone-answering"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Home
        </Link>
      </div>
      {/* Global confetti canvas, absolutely positioned over the whole page */}
      {showConfetti && (
        <Confetti
          className="fixed left-0 top-0 w-screen h-screen pointer-events-none z-[9999]"
          style={{ pointerEvents: 'none' }}
          options={{
            particleCount: 120,
            spread: 90,
            origin: confettiOrigin,
            startVelocity: 55,
            gravity: 0.7,
            ticks: 250,
          }}
        />
      )}
      <div ref={heroRef}>
        <HeroScrollDemo onHeadingMount={handleFireConfetti} />
      </div>
      
      {/* Section Header - Right after Hero */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            The Complete Restaurant Growth System
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From never missing a call to automating your marketing, our AI-powered platform handles every customer touchpoint so you can focus on what you do best—running an exceptional restaurant.
          </p>
        </div>
      </section>

      {/* Google Reviews Section below the system intro */}
      <Testimonials />
      {/* Feature With Advantages Section */}
      <Feature />

      {/* Marketing Services Section - Three Individual Sections */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section 1: Personalized Marketing - Text Left, Graphic Right */}
          <div className="mb-24 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700">
                  <Zap className="w-4 h-4 mr-2" />
                  AI Marketing
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    Personalized Marketing on Autopilot
                  </h3>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <p className="text-xl leading-relaxed text-gray-700">
                      Bot and Table's AI-powered platform revolutionizes how restaurants engage with their guests, enabling them to easily craft personalized messages, automate campaigns, and deliver the right message to the right guest at the right time.
                    </p>
                  </div>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-orange-600">89%</div>
                    <div className="text-sm text-gray-600">Repeat Customers</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-orange-600">$12K</div>
                    <div className="text-sm text-gray-600">Monthly Revenue</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-orange-600">300%</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>

                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-orange-600 hover:bg-orange-700 text-white">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </Button>
              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-full mr-4">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">AI-Powered Personalization</h4>
                      <p className="text-gray-600">Knows your customers better than you do</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Sarah's Birthday</span>
                        <span className="text-xs text-gray-500">Today</span>
                      </div>
                      <div className="bg-orange-500 text-white rounded-2xl p-3 mb-2 max-w-[85%]">
                        <p className="text-sm">🎉 Happy Birthday, Sarah! Enjoy 50% off your favorite salmon dish this week. Your usual table by the window is waiting!</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Mike's Family</span>
                        <span className="text-xs text-gray-500">Sunday</span>
                      </div>
                      <div className="bg-orange-500 text-white rounded-2xl p-3 mb-2 max-w-[85%]">
                        <p className="text-sm">👨‍👩‍👧‍👦 Hi Mike! Your Sunday brunch table is ready. We've added a new kids menu - perfect for the family!</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-100">
                    <p className="text-sm font-medium text-gray-800">
                      "Our AI tracks every interaction, order history, and preference to create hyper-personalized campaigns that feel like they're coming from a friend."
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 text-white p-4 rounded-2xl shadow-lg z-20 animate-bounce bg-orange-600">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-bold">89% Retention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: SMS Marketing - Graphic Left, Text Right */}
          <div className="mb-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - SMS Examples (Visual First) */}
              <div className="relative order-2 lg:order-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full mr-4">
                      <Smartphone className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Real SMS Campaigns</h4>
                      <p className="text-gray-600">That Drive Immediate Action</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Bella's Italian</span>
                        <span className="text-xs text-gray-500">2:30 PM</span>
                      </div>
                      <div className="bg-green-500 text-white rounded-2xl p-3 mb-2 max-w-[85%]">
                        <p className="text-sm">🍝 Happy Hour Alert! 50% off all pasta dishes today 4-6pm. Show this text for your discount. Limited time only!</p>
                      </div>
                      <div className="bg-gray-200 text-gray-800 rounded-2xl p-3 max-w-[85%] ml-auto">
                        <p className="text-sm">Booked! See you at 5pm 👋</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Taco Fiesta</span>
                        <span className="text-xs text-gray-500">11:15 AM</span>
                      </div>
                      <div className="bg-green-500 text-white rounded-2xl p-3 mb-2 max-w-[85%]">
                        <p className="text-sm">🌮 Taco Tuesday is here! $2 tacos all day + free guac with any order over $15. Order online or call (555) 123-4567</p>
                      </div>
                      <div className="bg-gray-200 text-gray-800 rounded-2xl p-3 max-w-[85%] ml-auto">
                        <p className="text-sm">Ordering now! 🎉</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm font-medium text-gray-800">
                      "These are real messages from restaurants using our SMS system. Notice how each one creates urgency, offers clear value, and gets immediate responses."
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 text-white p-4 rounded-2xl shadow-lg z-20 animate-bounce bg-green-600">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-bold">98% Open Rate</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg z-20 border border-gray-100 animate-pulse">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                    <span className="font-semibold text-gray-700">$36 ROI</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm text-green-700">
                  <Smartphone className="w-4 h-4 mr-2" />
                  SMS Marketing
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    Instant Results with SMS Marketing
                  </h3>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <p className="text-xl leading-relaxed text-gray-700">
                      Turn your phone into a revenue-generating machine with SMS campaigns that deliver <span className="font-semibold text-green-600">$36 for every $1 spent</span>. While your competitors send emails that get ignored, you'll be sending texts that get immediate responses and drive instant sales.
                    </p>
                  </div>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-green-600">3 min</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-emerald-600">$36</div>
                    <div className="text-sm text-gray-600">ROI per $1</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-green-600">60%</div>
                    <div className="text-sm text-gray-600">No-Show Reduction</div>
                  </div>
                </div>

                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-green-600 hover:bg-green-700 text-white">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Section 3: Email Marketing - Text Left, Graphic Right */}
          <div className="mb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm text-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Marketing
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    Automated Email Campaigns That Convert
                  </h3>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                    <p className="text-xl leading-relaxed text-gray-700">
                      Build lasting relationships with your customers through intelligent email campaigns that nurture leads, drive repeat business, and keep your restaurant top-of-mind with <span className="font-semibold text-blue-600">automated sequences</span> that work 24/7.
                    </p>
                  </div>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-blue-600">42%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-blue-600">$44</div>
                    <div className="text-sm text-gray-600">ROI per $1</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-blue-600">3.2x</div>
                    <div className="text-sm text-gray-600">More Revenue</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                </div>

                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </Button>
              </div>

              {/* Right Column - Email Examples */}
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-full mr-4">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Smart Email Sequences</h4>
                      <p className="text-gray-600">That nurture and convert</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Welcome Series</span>
                        <span className="text-xs text-gray-500">Day 1</span>
                      </div>
                      <div className="bg-blue-500 text-white rounded-2xl p-3 mb-2 max-w-[85%]">
                        <p className="text-sm">🎉 Welcome to [Restaurant Name]! Here's your exclusive 20% off coupon for your first visit. Plus, get a free appetizer when you dine with us this week!</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Re-engagement</span>
                        <span className="text-xs text-gray-500">Day 30</span>
                      </div>
                      <div className="bg-blue-500 text-white rounded-2xl p-3 mb-2 max-w-[85%]">
                        <p className="text-sm">👋 We miss you! It's been a while since your last visit. Come back and enjoy 25% off your entire meal. Your table is waiting!</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm font-medium text-gray-800">
                      "Our automated email sequences nurture leads, drive repeat business, and keep your restaurant top-of-mind with intelligent timing and personalized content."
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 text-white p-4 rounded-2xl shadow-lg z-20 animate-bounce bg-blue-600">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-bold">$44 ROI</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg z-20 border border-gray-100 animate-pulse">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                    <span className="font-semibold text-gray-700">3.2x Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form Section */}
      <DemoBookingForm />
      
      {/* Add more sections below as needed */}
    </div>
  );
};

export default HomePage; 