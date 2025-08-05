import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Share2, BarChart2, Clock, Sparkles, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Human-Like Conversations',
    desc: 'Advanced natural language processing makes every interaction sound completely human. Customers enjoy natural conversations with AI that understands accents, slang, and complex requests without robotic responses.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    accentColor: 'text-orange-600',
    highlight: 'Natural Language AI',
    stats: '99.8% Human-Like',
    benefits: [
      'Understands accents & slang',
      'Natural conversation flow',
      'Context-aware responses',
      'Emotional intelligence'
    ]
  },
  {
    icon: Share2,
    title: 'Smart Call Routing',
    desc: 'Complex requests requiring human touch are seamlessly transferred to staff with full conversation context. Ensure smooth customer experiences while maximizing AI efficiency for routine tasks.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600',
    highlight: 'Intelligent Transfer',
    stats: '< 2s Transfer Time',
    benefits: [
      'Full context handoff',
      'Priority-based routing',
      'Staff availability sync',
      'Seamless transitions'
    ]
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics Dashboard',
    desc: 'Track call volume, conversion rates, popular items, and customer preferences with detailed reporting. Use data insights to optimize operations and marketing strategies for maximum profitability.',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'from-amber-50 to-yellow-50',
    accentColor: 'text-amber-600',
    highlight: 'Real-Time Insights',
    stats: '50+ Metrics',
    benefits: [
      'Revenue tracking',
      'Customer insights',
      'Peak time analysis',
      'ROI optimization'
    ]
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Never close your phone lines again. AI handles reservations, and inquiries around the clock, capturing revenue during closed hours and ensuring customers can always reach your restaurant.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    accentColor: 'text-green-600',
    highlight: 'Always On',
    stats: '365 Days/Year',
    benefits: [
      'After-hours orders',
      'Weekend bookings',
      'Holiday availability',
      'Global time zones'
    ]
  },
];

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="w-full py-20 border-b relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"
        />

        {/* Floating tech icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 && <Sparkles className="w-4 h-4 text-blue-400/40" />}
            {i % 4 === 1 && <Zap className="w-4 h-4 text-orange-400/40" />}
            {i % 4 === 2 && <CheckCircle2 className="w-4 h-4 text-green-400/40" />}
            {i % 4 === 3 && <ArrowRight className="w-4 h-4 text-purple-400/40" />}
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
            className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full text-sm font-bold border border-blue-200 shadow-sm text-blue-700 mb-6"
          >
            <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
            ADVANCED FEATURES
            <Zap className="w-5 h-5 ml-2 text-blue-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Cutting-Edge Technology
            </span>
            <br />
            <span className="text-gray-900">That Just Works</span>
          </h2>
          
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full mx-auto max-w-lg mb-6"
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of restaurant communications with AI that thinks, learns, and adapts to deliver exceptional customer experiences every time.
          </p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="space-y-12">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            const isEven = i % 2 === 0;
            
            return (
              <motion.div
              key={i}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                onHoverStart={() => setHoveredFeature(i)}
                onHoverEnd={() => setHoveredFeature(null)}
                whileHover={{ scale: 1.01, y: -5 }}
                className="relative group cursor-pointer"
              >
                {/* Feature Card */}
                <div className={`
                  relative bg-gradient-to-br ${feature.bgColor} 
                  rounded-3xl shadow-xl border border-white/60 overflow-hidden
                  transition-all duration-500 p-8 lg:p-12
                  ${hoveredFeature === i ? 'shadow-2xl border-white' : 'shadow-lg'}
                `}>
                  
                  {/* Background Effects */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
                    {hoveredFeature === i && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 2, opacity: 0.1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full"
                      />
                    )}
                  </div>

                  {/* Content Layout - Alternating */}
                  <div className={`relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      {/* Icon and Stats */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : {}}
                          transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg`}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                          className="text-right"
                        >
                          <div className={`text-3xl font-bold ${feature.accentColor}`}>
                            {feature.stats}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {feature.highlight}
                          </div>
                        </motion.div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        {feature.title}
                      </h3>

                      <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        {feature.desc}
                      </p>

                      {/* Contextual Links */}
                      <div className="mb-6">
                        {i === 1 && (
                          <Link 
                            to="/google-reviews" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            See how we integrate with your review system
                          </Link>
                        )}
                        
                        {i === 2 && (
                          <Link 
                            to="/personalized-marketing" 
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 underline font-semibold transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Learn about our marketing analytics
                          </Link>
                        )}
                        
                        {i === 3 && (
                          <Link 
                            to="/articles/from-chaos-to-cash" 
                            className="inline-flex items-center text-green-600 hover:text-green-700 underline font-semibold transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Read 24/7 revenue success stories
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Benefits Side */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.5 }}
                        className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60"
                      >
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <CheckCircle2 className={`w-6 h-6 mr-3 ${feature.accentColor}`} />
                          Key Benefits
                        </h4>
                        
                        <div className="grid gap-4">
                          {feature.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: i * 0.1 + 0.7 + idx * 0.1 }}
                              className="flex items-center text-gray-700 bg-white/60 rounded-xl p-4 backdrop-blur-sm border border-white/40"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                className={`w-6 h-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mr-4 flex-shrink-0`}
                              >
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </motion.div>
                              <span className="font-semibold">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Progress Indicator */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: i * 0.1 + 1 }}
                          className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredFeature === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"
                    />
                  )}
                </div>
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Everything works together seamlessly
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Our integrated platform ensures all features work in harmony to deliver exceptional results for your restaurant.
            </p>
            <div className="grid md:grid-cols-4 gap-6 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Integration Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">&lt; 5min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
} 