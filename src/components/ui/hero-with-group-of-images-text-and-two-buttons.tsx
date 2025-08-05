import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall, Smartphone, MessageCircle, TrendingUp, Zap, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const coral = '#FF6B47';
const foodImg = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"; // Pizza slice (original)
const logoImg = "https://ui-avatars.com/api/?name=Leo%27s+Pizza&background=FF6B47&color=fff&size=128";

// Animated message content that cycles through different pizza-related examples
const messageExamples = [
  {
    text: "🍕 Slice into Friday! Show this message at Leo's Pizza today and get a free slice of our classic Margherita with any large pizza order. Offer valid 2–5pm only!",
    time: "Today 8:39 AM",
    image: foodImg
  },
  {
    text: "🍕 Pizza Tuesday at Leo's! Buy any large pizza and get a second one 50% off. Perfect for sharing! Order now: link.com/order",
    time: "Today 2:15 PM",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80"
  },
  {
    text: "🍕 Good morning Sarah! Your usual pepperoni slice is ready for pickup. Plus, try our new breakfast pizza with eggs and bacon - on the house today!",
    time: "Today 7:45 AM", 
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=400&q=80"
  }
];

function AnimatedIphoneMessageMockup() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messageExamples.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-[320px] h-[650px] rounded-[40px] bg-black shadow-2xl overflow-hidden border-4 border-black flex flex-col items-center justify-start"
      style={{
        background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Animated glow effect around phone */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl -z-10"
        style={{ transform: 'scale(1.1)' }}
      />

      {/* Notch and status bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full h-[44px] flex items-center justify-between px-5 pt-2 text-xs text-black bg-white/95 backdrop-blur-sm"
      >
        <span className="font-semibold">8:40</span>
        <div className="flex gap-1 items-center">
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-green-500 rounded-full inline-block" 
          />
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-2 h-2 bg-green-500 rounded-full inline-block" 
          />
        </div>
        <div className="flex gap-1 items-center">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4" stroke="#222" strokeWidth="2" /></svg>
        </div>
      </motion.div>

      {/* iMessage header with animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="w-full flex flex-col items-center bg-white/95 backdrop-blur-sm border-b border-gray-200 pb-2 pt-2"
      >
        <motion.img 
          whileHover={{ scale: 1.1, rotate: 5 }}
          src={logoImg} 
          alt="Leo's Pizza Logo" 
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg" 
        />
        <div className="font-semibold text-base text-gray-900 mt-1">Leo's Pizza</div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-green-500 flex items-center gap-1"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Online
        </motion.div>
      </motion.div>

      {/* Messages area with animated background */}
      <div className="flex-1 flex flex-col justify-start items-start w-full px-4 pt-8 bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ea] relative overflow-hidden">
        {/* Floating message bubbles in background */}
        <motion.div
          animate={{ y: [-20, -40, -20], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          className="absolute top-4 right-4 w-8 h-8 bg-blue-200 rounded-full"
        />
        <motion.div
          animate={{ y: [-30, -50, -30], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-16 left-6 w-6 h-6 bg-purple-200 rounded-full"
        />
        <motion.div
          animate={{ y: [-25, -45, -25], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
          className="absolute top-32 right-8 w-4 h-4 bg-pink-200 rounded-full"
        />

        <div className="w-full flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xs text-gray-500 mb-2 flex items-center gap-1"
          >
            <MessageCircle className="w-3 h-3" />
            iMessage
          </motion.div>
        </div>

        {/* Animated message bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl shadow-lg p-2 max-w-[90%] flex flex-col items-start relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #007aff 0%, #4f8cff 100%)' }}
          >
            {/* Animated shimmer effect */}
            <motion.div
              animate={{ x: [-100, 300] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              style={{ width: '50px' }}
            />
            
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              src={messageExamples[currentMessage].image} 
              alt="Food" 
              className="w-48 h-36 object-cover rounded-xl mb-2 shadow-md" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[15px] text-white leading-snug relative z-10"
            >
              {messageExamples[currentMessage].text}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full flex justify-center"
        >
          <div className="text-xs text-gray-400 mt-2">{messageExamples[currentMessage].time}</div>
        </motion.div>

        {/* Typing indicator */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="flex items-center gap-2 mt-4 bg-gray-200 rounded-full px-3 py-2"
        >
          <div className="flex gap-1">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
            />
          </div>
          <span className="text-xs text-gray-500">Leo's Pizza is typing...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Hero() {

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
        />

        {/* Floating SMS Icons */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
        >
          <Smartphone className="w-6 h-6 text-purple-500" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
        >
          <MessageCircle className="w-6 h-6 text-pink-500" />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-16 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
        >
          <TrendingUp className="w-6 h-6 text-orange-500" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-purple-200/50 shadow-sm text-purple-700">
                <Smartphone className="w-4 h-4 mr-2" />
                SMS Marketing Platform
              </div>
            </motion.div>
            
            {/* Main Headline with Gradient */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              >
                <span className="block">Drive Instant Results</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                  with SMS Marketing
                </span>
              </motion.h1>
              
                             {/* Animated underline */}
               <motion.div
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1, delay: 0.8 }}
                 className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full max-w-2xl"
               />
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl leading-relaxed text-gray-700 max-w-2xl"
            >
                Transform empty tables into packed dining rooms with text messages that customers actually read and act on within minutes.
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> 98% open rate guaranteed.</span>
            </motion.p>

            {/* Static Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Open Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">3min</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">$36</div>
                    <div className="text-xs text-gray-600">ROI per $1</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">85%</div>
                    <div className="text-xs text-gray-600">Click Rate</div>
                  </div>
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
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Get SMS Marketing
              </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 font-semibold text-lg px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-purple-50 transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Jump on a call
              </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-500" />
                <span>No tech skills needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Cancel anytime</span>
            </div>
            </motion.div>
          </div>

          {/* Right Column - Animated Phone Mockup */}
          <div className="flex justify-center items-center relative">
            {/* Background glow effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
            />
            <AnimatedIphoneMessageMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero, AnimatedIphoneMessageMockup as IphoneMessageMockup }; 