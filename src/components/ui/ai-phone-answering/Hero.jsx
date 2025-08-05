import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../button';
import { useNavigate, Link } from 'react-router-dom';
import { AnimatedBeamDemo } from '../animated-beam-demo';
import { Phone, MessageSquare, Calendar, DollarSign, Zap, Bot, Users, Clock } from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1e293b';

export default function Hero() {
  const navigate = useNavigate();
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { icon: Phone, value: "100%", label: "Calls Answered", color: "text-blue-500" },
    { icon: DollarSign, value: "$2.5K", label: "Avg Monthly Boost", color: "text-green-500" },
    { icon: Clock, value: "24/7", label: "Always Available", color: "text-purple-500" },
    { icon: Users, value: "95%", label: "Customer Satisfaction", color: "text-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-b overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-7 justify-center md:pr-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 rounded-full text-sm font-bold border border-orange-200 shadow-sm text-orange-700 mb-2 w-fit"
          >
            <Bot className="w-5 h-5 mr-2 text-orange-500" />
            AI PHONE ANSWERING
            <Zap className="w-5 h-5 ml-2 text-orange-500" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-2"
          >
            Never Miss a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative">
              Customer Call
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full opacity-30"
              />
            </span>{' '}
            Again
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-gray-700 mb-2 max-w-2xl leading-relaxed"
          >
            Your AI assistant answers every call, takes orders, books reservations, and converts conversations into{' '}
            <span className="text-green-600 font-bold">cold hard cash</span> - even when you're slammed or closed.
          </motion.h2>
          
          {/* Problem Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-4 text-center"
          >
            <Link 
              to="/articles/the-27000-phone-problem" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 underline font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Discover the $27,000 phone problem affecting restaurants →
            </Link>
          </motion.div>

          {/* Dynamic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      animate={{ 
                        scale: currentStat === index ? 1.1 : 1,
                        opacity: currentStat === index ? 1 : 0.6
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl"
              onClick={() => {
                const element = document.getElementById('book-call');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
                <Phone className="w-5 h-5 mr-2" />
                Get Your AI Phone Assistant
            </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center space-x-6 text-sm text-gray-600 mt-4"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span>No tech skills needed</span>
          </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              <span>Cancel anytime</span>
        </div>
          </motion.div>
        </motion.div>

        {/* Right: Enhanced Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex flex-1 justify-center items-center relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-full blur-3xl scale-110"></div>
          
          {/* Main Animation */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
          <AnimatedBeamDemo />
        </div>

          {/* Floating Success Indicators */}


        </motion.div>
      </div>
    </section>
  );
} 