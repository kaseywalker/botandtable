import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Zap, Info, Users, TrendingUp, Clock, CheckCircle, Star } from 'lucide-react';

const benefits = [
  {
    icon: Phone,
    headline: 'Answer 100% of Calls Instantly, Even During Rush Hours',
    content: 'Your AI phone assistant answers every call within 2 rings, 24/7. No more missed revenue or lost customers—every call is handled instantly and professionally.',
    impact: [
      'Capture 100% of incoming calls',
      'Increase phone orders by 35%',
      'Reduce abandonment to <2%',
      '24/7 ordering—even when closed',
    ],
    gridClass: 'bento-col-span-2',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600',
    metric: '100%',
    metricLabel: 'Calls Answered'
  },
  {
    icon: Zap,
    headline: 'Turn Every Call Into Revenue',
    content: 'AI actively drives sales with upselling, cross-selling, and personalized offers based on order history and preferences.',
    impact: [
      'Intelligent upselling',
      'Promote specials & offers',
      'Cross-sell beverages/items',
      'Loyalty program integration',
    ],
    gridClass: 'bento-row-span-2',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    accentColor: 'text-orange-600',
    metric: '+35%',
    metricLabel: 'Revenue Boost'
  },
  {
    icon: Info,
    headline: 'Expert Info, Instantly',
    content: 'Menu details, allergens, parking, events—AI provides instant, accurate answers and recommendations.',
    impact: [
      'Full menu & dietary info',
      'Real-time reservations',
      'Directions & accessibility',
      'Current promos & specials',
    ],
    gridClass: '',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    accentColor: 'text-purple-600',
    metric: '<2s',
    metricLabel: 'Response Time'
  },
  {
    icon: Users,
    headline: 'Build Relationships, Not Just Orders',
    content: 'AI remembers preferences, celebrates occasions, and creates personalized experiences that keep guests coming back.',
    impact: [
      'Profile & preference tracking',
      'Birthday/anniversary reminders',
      'Personalized follow-ups',
      'Feedback & reputation tools',
    ],
    gridClass: '',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    accentColor: 'text-green-600',
    metric: '95%',
    metricLabel: 'Satisfaction'
  }
];

export default function BenefitsGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="w-full py-20 border-b relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        
        {/* Floating Success Indicators */}
        {[...Array(6)].map((_, i) => (
          <motion.div
              key={i}
            className="absolute"
              style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 && <Star className="w-4 h-4 text-yellow-400/60" />}
            {i % 3 === 1 && <CheckCircle className="w-4 h-4 text-green-400/60" />}
            {i % 3 === 2 && <TrendingUp className="w-4 h-4 text-blue-400/60" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 rounded-full text-sm font-bold border border-orange-200 shadow-sm text-orange-700 mb-6"
          >
            <Zap className="w-5 h-5 mr-2 text-orange-500" />
            GAME-CHANGING BENEFITS
            <Star className="w-5 h-5 ml-2 text-orange-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Transform Your Restaurant
            </span>
            <br />
            <span className="text-gray-900">Into a Call-Converting Machine</span>
          </h2>
          
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full mx-auto max-w-md mb-6"
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop losing customers to busy signals and missed calls. Our AI transforms every ring into revenue with intelligent, human-like conversations that never sleep.
          </p>
        </motion.div>

        {/* Clean Benefits Layout */}
        <div className="space-y-8">
          {/* Featured Top Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
            whileHover={{ scale: 1.01, y: -5 }}
            className="relative group cursor-pointer"
          >
            <div className={`
              relative bg-gradient-to-br ${benefits[0].bgColor} 
              rounded-3xl shadow-xl border border-white/50 overflow-hidden
              transition-all duration-500 p-8 lg:p-12
              ${hoveredCard === 0 ? 'shadow-2xl' : 'shadow-lg'}
            `}>
              
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefits[0].color}`} />
                {hoveredCard === 0 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 2, opacity: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full"
                  />
                )}
              </div>

              {/* Content Layout */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  {/* Icon and Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${benefits[0].color} shadow-lg`}
                    >
                      <Phone className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-right"
                    >
                      <div className={`text-5xl font-bold ${benefits[0].accentColor}`}>
                        {benefits[0].metric}
                      </div>
                      <div className="text-lg text-gray-600 font-medium">
                        {benefits[0].metricLabel}
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                    {benefits[0].headline}
                  </h3>

                                        <p className="text-xl text-gray-700 leading-relaxed">
                        {benefits[0].content}
                      </p>
                      
                      <div className="mt-4">
                        <Link 
                          to="/articles/the-27000-phone-problem" 
                          className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors"
                        >
                          Learn why 43% of restaurant calls go unanswered →
                        </Link>
                      </div>
                </div>

                {/* Impact Points */}
                <div className="grid gap-4">
                  {benefits[0].impact.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="flex items-center text-lg text-gray-700 bg-white/40 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${benefits[0].color} flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredCard === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"
                />
              )}
            </div>
          </motion.div>

          {/* Bottom Three Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.slice(1).map((benefit, i) => {
              const IconComponent = benefit.icon;
              const cardIndex = i + 1;
              
              return (
                <motion.div
                  key={cardIndex}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  onHoverStart={() => setHoveredCard(cardIndex)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`
                    relative h-full bg-gradient-to-br ${benefit.bgColor} 
                    rounded-3xl shadow-xl border border-white/50 overflow-hidden
                    transition-all duration-500
                    ${hoveredCard === cardIndex ? 'shadow-2xl' : 'shadow-lg'}
                  `}>
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 opacity-5">
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color}`} />
                      {hoveredCard === cardIndex && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 2, opacity: 0.1 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Icon and Metric */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          className="text-right"
                        >
                          <div className={`text-3xl font-bold ${benefit.accentColor}`}>
                            {benefit.metric}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {benefit.metricLabel}
                          </div>
                        </motion.div>
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                        {benefit.headline}
                      </h3>

                      <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                        {benefit.content}
                      </p>
                      
                      {/* Add contextual links for each benefit */}
                      {cardIndex === 1 && (
                        <div className="mb-4">
                          <Link 
                            to="/articles/from-chaos-to-cash" 
                            className="text-orange-600 hover:text-orange-700 underline text-sm font-medium transition-colors"
                          >
                            See real transformation stories →
                          </Link>
                        </div>
                      )}
                      
                      {cardIndex === 2 && (
                        <div className="mb-4">
                          <Link 
                            to="/google-reviews" 
                            className="text-purple-600 hover:text-purple-700 underline text-sm font-medium transition-colors"
                          >
                            Discover our Google Reviews solution →
                          </Link>
                        </div>
                      )}
                      
                      {cardIndex === 3 && (
                        <div className="mb-4">
                          <Link 
                            to="/articles/personalized-marketing-guide" 
                            className="text-green-600 hover:text-green-700 underline text-sm font-medium transition-colors"
                          >
                            Learn about personalized marketing →
                          </Link>
                        </div>
                      )}

                      {/* Impact Points */}
                      <div className="space-y-3">
                        {benefit.impact.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 + idx * 0.05 }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className={`w-5 h-5 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mr-3 flex-shrink-0`}
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                            <span className="font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Hover Overlay */}
                      {hoveredCard === cardIndex && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
} 