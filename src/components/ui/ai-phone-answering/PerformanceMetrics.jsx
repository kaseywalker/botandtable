import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Phone, Target, Clock, Zap, Award, CheckCircle2, ArrowUp } from 'lucide-react';

const metrics = [
  {
    percent: 25,
    displayPercent: '25%',
    title: 'Missed Call Reduction',
    desc: 'Reduce missed calls by 25% in the first week alone. Our AI answers every call within 2 rings, ensuring no potential customer gets a busy signal.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    icon: Phone,
    accentColor: 'text-orange-600',
    improvement: 'First Week',
    metric: 'Fewer Missed Calls'
  },
  {
    percent: 50,
    displayPercent: '50%',
    title: 'Order Accuracy Improvement',
    desc: 'Achieve 50% fewer order errors compared to traditional phone taking. AI eliminates miscommunication and ensures perfect order capture.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    icon: Target,
    accentColor: 'text-blue-600',
    improvement: 'Immediate',
    metric: 'Fewer Errors'
  },
  {
    percent: 75,
    displayPercent: '75%',
    title: 'After-Hours Revenue Boost',
    desc: 'Generate 75% more revenue during closed hours with 24/7 AI phone ordering. Capture late-night orders and weekend reservations automatically.',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'from-amber-50 to-yellow-50',
    icon: Clock,
    accentColor: 'text-amber-600',
    improvement: '24/7',
    metric: 'More Revenue'
  },
  {
    percent: 100,
    displayPercent: '100%',
    title: 'Call Answer Rate',
    desc: 'Answer 100% of incoming calls instantly, even during your busiest rush periods. Never lose another customer to competitors.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    icon: Award,
    accentColor: 'text-green-600',
    improvement: 'Guaranteed',
    metric: 'Calls Answered'
  },
];

function AnimatedCounter({ value, duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = count.set(value);
    const unsubscribe = rounded.onChange(setDisplayValue);
    return unsubscribe;
  }, [count, rounded, value]);

  return <motion.span>{displayValue}</motion.span>;
}

function CircularProgress({ percentage, color, isInView, delay = 0 }) {
  const circumference = 2 * Math.PI * 45; // radius = 45
  
  return (
    <div className="relative w-32 h-32">
      {/* Background circle */}
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-gray-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={isInView ? {
            strokeDashoffset: circumference - (percentage / 100) * circumference
          } : {}}
          transition={{
            duration: 2,
            delay: delay,
            ease: "easeInOut"
          }}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-gray-900">
            {isInView && <AnimatedCounter value={percentage} />}%
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PerformanceMetrics() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-100">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"
        />

        {/* Floating icons */}
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
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 && <TrendingUp className="w-5 h-5 text-blue-400/40" />}
            {i % 4 === 1 && <ArrowUp className="w-5 h-5 text-green-400/40" />}
            {i % 4 === 2 && <Zap className="w-5 h-5 text-yellow-400/40" />}
            {i % 4 === 3 && <CheckCircle2 className="w-5 h-5 text-purple-400/40" />}
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
            <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
            PROVEN RESULTS
            <Award className="w-5 h-5 ml-2 text-blue-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              Performance That
            </span>
            <br />
            <span className="text-gray-900">Speaks for Itself</span>
          </h2>
          
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 rounded-full mx-auto max-w-lg mb-6"
          />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real restaurants, real results. See how our AI transforms call handling into a competitive advantage that drives measurable growth.
          </p>
        </motion.div>

        {/* Enhanced Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => {
            const IconComponent = metric.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  rotateY: 5
                }}
                className="relative group cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-gradient-to-br ${metric.bgColor} 
                  rounded-3xl shadow-xl border border-white/60 overflow-hidden
                  transition-all duration-500 p-8
                  ${hoveredCard === i ? 'shadow-2xl' : 'shadow-lg'}
                `}>
                  
                  {/* Background Effects */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5`} />
                    {hoveredCard === i && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 2, opacity: 0.1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${metric.color} shadow-lg mb-6`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Circular Progress */}
                    <div className="mb-6">
                      <CircularProgress 
                        percentage={metric.percent} 
                        color={metric.color}
                        isInView={isInView}
                        delay={i * 0.2}
                      />
                    </div>

                    {/* Improvement Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.8 }}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${metric.color} text-white shadow-sm`}
                    >
                      <ArrowUp className="w-3 h-3 mr-1" />
                      {metric.improvement}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                      {metric.title}
                    </h3>

                    {/* Metric Label */}
                    <div className={`text-sm font-semibold ${metric.accentColor} mb-4`}>
                      {metric.metric}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                      {metric.desc}
                    </p>
                    
                    {/* Add contextual links for each metric */}
                    {i === 0 && (
                      <div className="text-center">
                        <Link 
                          to="/articles/the-27000-phone-problem" 
                          className="text-orange-600 hover:text-orange-700 underline text-xs font-medium transition-colors"
                        >
                          Read the full phone problem study →
                        </Link>
                      </div>
                    )}
                    
                    {i === 2 && (
                      <div className="text-center">
                        <Link 
                          to="/articles/from-chaos-to-cash" 
                          className="text-amber-600 hover:text-amber-700 underline text-xs font-medium transition-colors"
                        >
                          See 24/7 revenue success stories →
                        </Link>
                      </div>
                    )}

                    {/* Bottom Accent */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: i * 0.1 + 1 }}
                      className={`h-1 bg-gradient-to-r ${metric.color} rounded-full mt-6`}
                    />

                    {/* Hover Overlay */}
                    {hoveredCard === i && (
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

        {/* Bottom Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {isInView && <AnimatedCounter value={500} />}+
                </div>
                <div className="text-gray-600 font-medium">Restaurants Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {isInView && <AnimatedCounter value={98} />}%
                </div>
                <div className="text-gray-600 font-medium">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  ${isInView && <AnimatedCounter value={2500} />}
                </div>
                <div className="text-gray-600 font-medium">Average Monthly ROI</div>
              </div>
            </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
} 