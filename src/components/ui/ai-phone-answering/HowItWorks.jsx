import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Smartphone, Eye, CheckCircle, ArrowRight, Zap, Users, Settings, Play, Pause } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Professional Phone Service 24/7',
    desc: 'Customers always reach a friendly, knowledgeable voice that can answer basic questions and guide them toward the right solution - whether they want to order food or book a table.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    accentColor: 'text-orange-600',
    step: '01',
    duration: 'Instant',
    feature: 'AI Voice Assistant'
  },
  {
    icon: Smartphone,
    title: 'Instant Mobile Access',
    desc: 'Rather than struggling with phone orders or reservation details, customers receive immediate text access to your online ordering or reservation systems for a smooth, error-free experience.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600',
    step: '02',
    duration: '< 2 seconds',
    feature: 'Smart Routing'
  },
  {
    icon: Eye,
    title: 'Complete Control and Convenience',
    desc: 'The online experience gives customers full visibility of menu options and table availability, allowing them to make informed decisions without feeling pressured or rushed on the phone.',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'from-amber-50 to-yellow-50',
    accentColor: 'text-amber-600',
    step: '03',
    duration: 'Real-time',
    feature: 'Live Integration'
  },
  {
    icon: CheckCircle,
    title: 'Reliable Processing and Confirmation',
    desc: 'Orders and reservations integrate seamlessly with your existing operations. Customers receive confirmations while your team gets clear, accurate information through established workflows.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    accentColor: 'text-green-600',
    step: '04',
    duration: 'Automatic',
    feature: 'Seamless Sync'
  },
];

function FlowAnimation({ isPlaying, currentStep }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated flow line */}
      <svg className="w-full h-full" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="33%" stopColor="#3B82F6" />
            <stop offset="66%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background path */}
        <motion.path
          d="M 100 200 Q 300 100 500 200 Q 700 300 900 200"
          stroke="rgba(148, 163, 184, 0.3)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10,5"
        />
        
        {/* Animated flow path */}
        <motion.path
          d="M 100 200 Q 300 100 500 200 Q 700 300 900 200"
          stroke="url(#flowGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isPlaying ? { 
            pathLength: 1, 
            opacity: 1,
            strokeDasharray: ["0,1", "1,0"]
          } : {}}
          transition={{ 
            pathLength: { duration: 3, ease: "easeInOut" },
            strokeDasharray: { duration: 2, repeat: Infinity }
          }}
        />
        
        {/* Moving dots */}
        {isPlaying && [...Array(3)].map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#3B82F6"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            >
              <mpath href="#flowPath"/>
            </animateMotion>
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Auto-advance through steps
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section ref={sectionRef} className="w-full py-20 border-b relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />

        {/* Floating process icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
        style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 2) * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 && <Settings className="w-4 h-4 text-orange-400/50" />}
            {i % 3 === 1 && <Zap className="w-4 h-4 text-blue-400/50" />}
            {i % 3 === 2 && <Users className="w-4 h-4 text-green-400/50" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full text-sm font-bold border border-orange-200 shadow-sm text-orange-700 mb-6"
          >
            <Settings className="w-5 h-5 mr-2 text-orange-500" />
            SIMPLE PROCESS
            <ArrowRight className="w-5 h-5 ml-2 text-orange-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
              How It Works
            </span>
            <br />
            <span className="text-gray-900">In 4 Simple Steps</span>
          </h2>
          
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full mx-auto max-w-md mb-6"
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the moment a customer calls to final confirmation, our AI handles everything seamlessly. Watch the magic happen in real-time.
          </p>
        </motion.div>



        {/* Enhanced Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-blue-200 via-amber-200 to-green-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            const isActive = currentStep === i;
            
            return (
              <motion.div
              key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                onHoverStart={() => setHoveredStep(i)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={{ 
                  scale: 1.03,
                  y: -8
                }}
                className={`relative group cursor-pointer z-10 ${isActive ? 'z-20' : ''}`}
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-gradient-to-br ${step.bgColor} 
                  rounded-3xl shadow-xl border border-white/60 overflow-hidden
                  transition-all duration-500 p-8
                  ${hoveredStep === i || isActive ? 'shadow-2xl border-white' : 'shadow-lg'}
                  ${isActive ? 'ring-4 ring-orange-200' : ''}
                `}>
                  
                  {/* Background Effects */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                    {(hoveredStep === i || isActive) && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 2, opacity: 0.1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Step Number and Duration */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                        className={`text-6xl font-black ${step.accentColor} opacity-20`}
                      >
                        {step.step}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                        className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${step.color} text-white shadow-sm`}
                      >
                        {step.duration}
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg mb-6 mx-auto`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Feature Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                      className="text-center mb-4"
                    >
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${step.accentColor} bg-white/60 backdrop-blur-sm`}>
                        {step.feature}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
                      {step.desc}
                    </p>

                    {/* Progress Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: i * 0.1 + 0.8 }}
                      className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-6`}
                    />

                    {/* Active Indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Zap className="w-4 h-4 text-white" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hover Overlay */}
                    {(hoveredStep === i || isActive) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"
                      />
                    )}
                  </div>
                </div>

                {/* Arrow Connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
                    className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20"
                  >
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The entire process takes less than 30 seconds
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              From initial call to final confirmation, your customers experience seamless, professional service every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/google-reviews" 
                className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors"
              >
                Explore Google Reviews automation
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                to="/personalized-marketing" 
                className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors"
              >
                Learn about personalized marketing
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                to="/resources" 
                className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors"
              >
                View all resources
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">&lt; 30s</div>
                <div className="text-sm text-gray-600">Total Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
            </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
} 