import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { CheckCircle, Zap, Users, MessageCircle, TrendingUp, Star, BarChart2, Layers, Mail, Smartphone, Calendar, DollarSign, Clock, Target, ArrowRight } from 'lucide-react';
import { Hero as GroupHero } from "./ui/hero-with-group-of-images-text-and-two-buttons";
import { IphoneMessageMockup } from "./ui/hero-with-group-of-images-text-and-two-buttons";
import ArticlesSection from './ArticlesSection';
import DemoBookingForm from './ui/DemoBookingForm';

const coral = '#FF6B47';
const blue = '#1e293b';
const gray = '#f7f7fa';

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    headline: 'Instant Communication That Drives Action',
    sub: '98% Open Rate. 3-Minute Response Time. Immediate Results.',
    desc: 'Unlike emails that sit unopened for hours or days, text messages demand immediate attention. When you send a flash sale alert at 3 PM for happy hour specials, customers see it instantly and act on it before the offer expires. This immediacy creates urgency and drives impulsive dining decisions that fill your restaurant during slower periods.',
    perfectFor: [
      'Flash sales and limited-time offers',
      'Daily specials announcements',
      'Last-minute event promotions',
      'Weather-related menu changes',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600',
    metric: '98%',
    metricLabel: 'Open Rate'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    headline: 'Exceptional ROI That Pays for Itself',
    sub: '$36 Return for Every $1 Spent. Lower Costs Than Any Other Channel.',
    desc: 'SMS marketing delivers the highest return on investment of any digital marketing channel. With costs as low as $0.01 per message and conversion rates that dwarf email marketing, your SMS campaigns literally pay for themselves with the first few orders they generate.',
    table: [
      { label: 'Cost per message', value: '$0.01-0.05' },
      { label: 'Average ROI', value: '3600%' },
      { label: 'Conversion rate', value: '12-25%' },
      { label: 'Time to results', value: 'Minutes' },
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    accentColor: 'text-green-600',
    metric: '$36',
    metricLabel: 'ROI per $1'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    headline: 'Complete Customer Lifecycle Management',
    sub: 'From First Visit to Loyal Regular. Automated Relationship Building.',
    desc: 'SMS marketing isn\'t just about promotions—it\'s about building lasting relationships with your customers. Our system automatically manages the entire customer journey, from welcome messages to birthday celebrations to win-back campaigns for lapsed diners.',
    system: [
      'Welcome series for new customers',
      'Birthday and anniversary celebrations',
      'Loyalty program notifications',
      'Win-back campaigns for inactive customers',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    accentColor: 'text-purple-600',
    metric: '85%',
    metricLabel: 'Retention Rate'
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    headline: 'Smart Segmentation and Personalization',
    sub: 'Right Message, Right Person, Right Time. AI-Powered Targeting.',
    desc: 'Generic mass messages are a thing of the past. Our AI analyzes customer behavior, order history, and preferences to send highly targeted messages that feel personal and relevant. Vegetarian customers get veggie specials, families get kid-friendly promotions, and date-night diners get romantic dinner offers.',
    examples: [
      'Behavioral targeting based on order history',
      'Location-based offers for nearby customers',
      'Time-sensitive promotions for optimal engagement',
      'Personalized recommendations and favorites',
    ],
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    accentColor: 'text-orange-600',
    metric: '67%',
    metricLabel: 'Higher Engagement'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    headline: 'Measurable Results You Can Track',
    sub: 'Real-Time Analytics. Clear Attribution. Proven Performance.',
    desc: 'Every SMS campaign comes with detailed analytics that show exactly how your messages perform. Track opens, clicks, conversions, and revenue in real-time, so you always know which messages work best and can optimize for even better results.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-50 to-blue-50',
    accentColor: 'text-indigo-600',
    metric: '100%',
    metricLabel: 'Trackable'
  },
];

// Italian Restaurant Phone Mockup Component
function ItalianRestaurantMockup() {
  const [currentMessage, setCurrentMessage] = useState(0);

  const italianMessages = [
    {
      text: "🍝 Buongiorno Maria! Flash Special: Fresh Lobster Ravioli just arrived from Italy. 30% off today only until 8pm. Reserve your table now!",
      time: "Today 3:15 PM",
      image: "/ravioli.jpg"
    },
    {
      text: "🍷 Ciao! Our new Tuscan wine selection is here. Join us for wine tasting tonight 6-9pm. Complimentary appetizers included!",
      time: "Today 4:20 PM", 
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=300&fit=crop&crop=center"
    },
    {
      text: "👨‍🍳 Pasta made fresh this morning! Our Chef's Special: Truffle Carbonara is available for dinner service. Limited portions - reserve now!",
      time: "Today 5:45 PM",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % italianMessages.length);
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
        className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-xl -z-10"
        style={{ transform: 'scale(1.1)' }}
      />

      {/* Status bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full h-[44px] flex items-center justify-between px-5 pt-2 text-xs text-black bg-white/95 backdrop-blur-sm"
      >
        <span className="font-semibold">2:15</span>
        <div className="flex gap-1 items-center">
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
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

      {/* Restaurant header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="w-full flex flex-col items-center bg-white/95 backdrop-blur-sm border-b border-gray-200 pb-2 pt-2"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-red-500 to-green-500 flex items-center justify-center text-white font-bold text-lg"
        >
          V
        </motion.div>
        <div className="font-semibold text-base text-gray-900 mt-1">Villa Tuscana</div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-green-500 flex items-center gap-1"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Online
        </motion.div>
      </motion.div>

      {/* Messages area */}
      <div className="flex-1 flex flex-col justify-start items-start w-full px-4 pt-8 bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ea] relative overflow-hidden">
        {/* Floating message bubbles in background */}
        <motion.div
          animate={{ y: [-20, -40, -20], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-4 right-4 w-8 h-8 bg-red-200 rounded-full"
        />
        <motion.div
          animate={{ y: [-30, -50, -30], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-16 left-6 w-6 h-6 bg-green-200 rounded-full"
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
              src={italianMessages[currentMessage].image} 
              alt="Italian Food" 
              className="w-48 h-36 object-cover rounded-xl mb-2 shadow-md" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[15px] text-white leading-snug relative z-10"
            >
              {italianMessages[currentMessage].text}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-full flex justify-center"
        >
          <div className="text-xs text-gray-400 mt-2">{italianMessages[currentMessage].time}</div>
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
          <span className="text-xs text-gray-500">Villa Tuscana is typing...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: <Layers className="w-7 h-7 text-primary" />,
    title: 'Smart Segmentation',
    desc: 'Automatically categorize customers based on dining frequency, spending patterns, preferences, and engagement levels.'
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: 'Automated Campaign Triggers',
    desc: 'Set up campaigns that run themselves: welcome series, win-back, birthdays, weather-based promos, and more.'
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-primary" />,
    title: 'Real-Time Analytics Dashboard',
    desc: 'Track open rates, revenue attribution, customer lifetime value, reservation conversion, and more.'
  },
  {
    icon: <Mail className="w-7 h-7 text-primary" />,
    title: 'Integration Capabilities',
    desc: 'Connect with POS, reservation, email, social, and review management systems for seamless omnichannel marketing.'
  },
];

const pricing = [
  {
    tier: 'Starter Package',
    price: '$99/month',
    desc: 'Perfect for single-location restaurants',
    features: [
      'Up to 1,000 subscribers',
      '2,000 messages per month',
      'Basic automation features',
      'Email support',
      'Standard analytics',
    ],
  },
  {
    tier: 'Growth Package',
    price: '$199/month',
    desc: 'Ideal for growing restaurant groups',
    features: [
      'Up to 5,000 subscribers',
      '10,000 messages per month',
      'Advanced automation and segmentation',
      'Priority phone support',
      'Detailed analytics and reporting',
      'Integration with major POS systems',
    ],
  },
  {
    tier: 'Enterprise Package',
    price: '$399/month',
    desc: 'For multi-location restaurant chains',
    features: [
      'Unlimited subscribers',
      '50,000 messages per month',
      'Custom automation workflows',
      'Dedicated account manager',
      'Advanced analytics and custom reporting',
      'Full API access and custom integrations',
    ],
  },
];

const faqs = [
  { q: 'How quickly can I see results from SMS marketing?', a: 'Most restaurants see increased engagement and bookings within days of launching their first campaign.' },
  { q: 'What\'s the difference between SMS marketing and email marketing?', a: 'SMS has a 98% open rate and is read within minutes, while email is often ignored or delayed.' },
  { q: 'How do I build my SMS subscriber list?', a: 'Use opt-in forms, collect numbers during reservations, and offer incentives for sign-ups.' },
  { q: 'Is SMS marketing expensive?', a: 'No, it\'s one of the most cost-effective channels, with high ROI and flexible pricing.' },
  { q: 'How often should I send SMS messages?', a: '1-4 times per month is typical, but it depends on your audience and goals.' },
  { q: 'Can I integrate SMS with my existing restaurant systems?', a: 'Yes, our platform connects with POS, reservation, email, and review systems.' },
  { q: 'What types of messages work best for restaurants?', a: 'Promotions, reminders, feedback requests, and personalized offers perform best.' },
  { q: 'How do I measure SMS marketing success?', a: 'Track open rates, bookings, revenue, and customer feedback in your dashboard.' },
];

export default function SmsMarketingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Group Hero Section (images/text/buttons) */}
      <GroupHero />

      {/* Enhanced Key Benefits Section */}
      <section className="relative w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
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
            <MessageCircle className="w-6 h-6 text-purple-500" />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <TrendingUp className="w-6 h-6 text-pink-500" />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-16 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <DollarSign className="w-6 h-6 text-orange-500" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 shadow-sm text-blue-700 mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              PROVEN RESULTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why SMS Marketing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
                Works for Restaurants
              </span>
            </h2>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full max-w-2xl mx-auto mb-6"
            />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover why thousands of restaurants choose SMS marketing to drive immediate results, build customer loyalty, and maximize revenue.
            </p>
          </motion.div>

          {/* Enhanced Benefits Grid */}
          <div className="space-y-8">
            {/* Featured Benefit Card with Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 overflow-hidden relative"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefits[0].bgColor} opacity-70`}></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-transparent rounded-full opacity-50 transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Phone Mockup - Now on the left */}
                  <div className="flex justify-center items-center lg:order-1">
                    <div className="scale-90 lg:scale-100">
                      <ItalianRestaurantMockup />
              </div>
            </div>
                  
                  {/* Content Section - Now on the right */}
                  <div className="space-y-6 lg:order-2">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${benefits[0].color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Zap className="w-8 h-8 text-white" />
          </div>
                      <div>
                        <span className={`inline-block px-3 py-1 bg-blue-100 ${benefits[0].accentColor} rounded-full text-sm font-semibold mb-2`}>
                          {benefits[0].sub}
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900">{benefits[0].headline}</h3>
            </div>
          </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {benefits[0].desc}
                    </p>
                    
                    {/* Benefits List */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {benefits[0].perfectFor.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 bg-white/80 p-3 rounded-xl backdrop-blur-sm"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
          </div>

                    {/* Metric Display */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-blue-600">{benefits[0].metric}</div>
                        <div>
                          <div className="text-gray-600">{benefits[0].metricLabel}</div>
                          <div className="text-sm text-gray-500">Industry leading performance</div>
            </div>
          </div>
            </div>
          </div>
        </div>
            </div>
            </motion.div>

            {/* Other Benefits in Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.slice(1).map((benefit, index) => (
                <EnhancedBenefitCard key={index + 1} benefit={benefit} index={index + 1} />
              ))}
            </div>
          </div>

          {/* Bottom Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-orange-50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Restaurant Marketing?</h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Join thousands of restaurants already using SMS marketing to drive immediate results and build lasting customer relationships.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-sm text-gray-700 font-medium">Open Rate</div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200">
                  <div className="text-3xl font-bold text-pink-600 mb-2">$36</div>
                  <div className="text-sm text-gray-700 font-medium">ROI per $1</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3min</div>
                  <div className="text-sm text-gray-700 font-medium">Response Time</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-sm text-gray-700 font-medium">Click Rate</div>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Start SMS Marketing Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative w-full py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">


        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
              <Star className="w-4 h-4 mr-2" />
              TRUSTED BY TOP RESTAURANTS
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Top Restaurants Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                Bot & Table
              </span>
          </h3>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full max-w-2xl mx-auto mb-6"
            />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the powerful features that make Bot & Table the preferred SMS marketing solution for successful restaurants.
            </p>
          </motion.div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative p-8"
              >
                {/* Card glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 rounded-3xl"
                />
                
                {/* Icon with subtle hover effects */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                    <div className="text-orange-600 group-hover:text-red-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {feature.desc}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-200/50 to-red-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Join Thousands of Successful Restaurants?
              </h4>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Get started with Bot & Table's powerful SMS marketing platform and see immediate results.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl"
                  onClick={() => {
                    const element = document.getElementById('book-call');
                    if (element) {
                      // Add a cool bounce animation to the button first
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                      
                      // Add a subtle highlight animation to the form when it comes into view
                      setTimeout(() => {
                        element.style.transform = 'scale(1.02)';
                        element.style.transition = 'transform 0.3s ease-out';
                        setTimeout(() => {
                          element.style.transform = 'scale(1)';
                        }, 300);
                      }, 800);
                    }
                  }}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Book SMS Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              Simple 4-Step Process
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: blue }}>
              From Setup to Success in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                4 Simple Steps
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our proven SMS marketing system gets your restaurant from zero to thriving customer engagement in just days, not months.
            </p>
          </div>

          {/* Steps Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {[
              {
                step: 1,
                icon: <Users className="w-8 h-8" />,
                title: 'Build Your Subscriber List',
                subtitle: 'Turn Customers Into Loyal Subscribers',
                description: 'Start building your SMS goldmine with proven strategies that convert casual diners into engaged subscribers who eagerly await your messages.',
                features: [
                  'Website opt-in forms with irresistible offers',
                  'Reservation-based number collection',
                  'Staff-trained in-person sign-up techniques',
                  'Social media SMS campaigns that convert'
                ],
                mockup: {
                  type: 'signup',
                  content: 'Text HUNGRY to 12345 for 20% off your first order!'
                }
              },
              {
                step: 2,
                icon: <BarChart2 className="w-8 h-8" />,
                title: 'Segment Your Audience',
                subtitle: 'Smart Targeting for Maximum Impact',
                description: 'Transform your customer data into powerful audience segments that receive exactly the right message at the perfect time.',
                features: [
                  'Automatic POS system integration',
                  'Behavioral pattern recognition',
                  'Preference-based grouping',
                  'Triggered messaging based on dining history'
                ],
                mockup: {
                  type: 'segments',
                  content: 'VIP Diners • New Customers • Weekend Warriors'
                }
              },
              {
                step: 3,
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'Create Compelling Campaigns',
                subtitle: 'Messages That Drive Immediate Action',
                description: 'Craft irresistible SMS campaigns that create urgency, excitement, and immediate reservations using psychology-proven techniques.',
                features: [
                  'Urgency-driven message templates',
                  'Personalized content automation',
                  'A/B tested call-to-actions',
                  'Time-sensitive offer optimization'
                ],
                mockup: {
                  type: 'message',
                  content: 'Hey Sarah! 🍕 Flash Sale: 50% off pizzas tonight only. Reserve now: link.com/book'
                }
              },
              {
                step: 4,
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Launch and Optimize',
                subtitle: 'Continuous Improvement for Growing Results',
                description: 'Launch your campaigns with confidence and watch real-time analytics guide you to even better performance.',
                features: [
                  'Optimal timing automation',
                  'Real-time performance tracking',
                  'Advanced A/B testing',
                  'ROI-focused optimization'
                ],
                mockup: {
                  type: 'analytics',
                  content: '98% Open Rate • 45% Click Rate • $2,840 Revenue Generated'
                }
              }
            ].map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`lg:col-span-2 ${i < 3 ? 'mb-8' : ''}`}>
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                            {step.icon}
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold text-sm shadow-md border-2 border-orange-100">
                            {step.step}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold" style={{ color: blue }}>{step.title}</h4>
                          <p className="text-orange-600 font-semibold">{step.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Mockup */}
                    <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl relative">
                        {step.mockup.type === 'signup' && (
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                              <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl font-semibold">
                              {step.mockup.content}
                            </div>
                            <div className="text-sm text-gray-600">Instant 20% savings for new subscribers</div>
                          </div>
                        )}

                        {step.mockup.type === 'segments' && (
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 mb-4">
                              <BarChart2 className="w-4 h-4" />
                              <span>Customer Segments</span>
                            </div>
                            {step.mockup.content.split(' • ').map((segment, idx) => (
                              <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-gray-800">{segment}</span>
                                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                    {idx === 0 ? '342' : idx === 1 ? '128' : '256'} customers
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {step.mockup.type === 'message' && (
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl rounded-bl-sm max-w-xs">
                              <div className="text-sm opacity-90 mb-1">Bot & Table SMS</div>
                              <div>{step.mockup.content}</div>
                            </div>
                            <div className="text-xs text-gray-500 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>Delivered • Read • Clicked</span>
                            </div>
                          </div>
                        )}

                        {step.mockup.type === 'analytics' && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 mb-4">
                              <TrendingUp className="w-4 h-4" />
                              <span>Campaign Performance</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {step.mockup.content.split(' • ').map((metric, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-100 text-center">
                                  <div className="text-lg font-bold text-green-700">
                                    {metric.split(' ')[0]}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {metric.split(' ').slice(1).join(' ')}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Floating elements */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500 rounded-full opacity-30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Step Connector */}
                  {i < 3 && (
                    <div className="flex justify-center my-8">
                      <div className="w-px h-12 bg-gradient-to-b from-orange-300 to-red-300 opacity-50"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* Demo Booking Form */}
      <DemoBookingForm />

      {/* Related Articles Section */}
      <ArticlesSection />

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: blue }}>Frequently Asked Questions</h3>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-lg font-semibold" style={{ color: blue }}>{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
} 

// Enhanced Benefit Card Component
function EnhancedBenefitCard({ benefit, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative"
    >
      {/* Card Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${benefit.bgColor} opacity-70`}></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent rounded-full opacity-50 transform translate-x-6 -translate-y-6"></div>
      
      <div className="relative z-10 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {React.createElement(benefit.icon.type, { className: "w-7 h-7 text-white" })}
          </div>
          <div className="flex-1">
            <span className={`inline-block px-3 py-1 bg-white/80 ${benefit.accentColor} rounded-full text-sm font-semibold mb-2`}>
              {benefit.sub}
            </span>
            <h3 className="text-2xl font-bold text-gray-900">{benefit.headline}</h3>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          {benefit.desc}
        </p>
        
        {/* Content based on benefit type */}
        {benefit.table && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50">
            <table className="w-full text-sm">
              <tbody>
                {benefit.table.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-2 pr-4 font-semibold text-gray-700">{row.label}</td>
                    <td className="py-2 text-gray-600 font-medium">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {benefit.system && (
          <div className="space-y-3">
            {benefit.system.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                className="flex items-center gap-3 bg-white/80 p-3 rounded-xl backdrop-blur-sm"
              >
                <CheckCircle className={`w-5 h-5 ${benefit.accentColor.replace('text-', 'text-')} flex-shrink-0`} />
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        )}
        
        {benefit.examples && (
          <div className="space-y-3">
            {benefit.examples.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                className="flex items-center gap-3 bg-white/80 p-3 rounded-xl backdrop-blur-sm"
              >
                <CheckCircle className={`w-5 h-5 ${benefit.accentColor.replace('text-', 'text-')} flex-shrink-0`} />
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Metric Display */}
        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm">
          <div className="flex items-center gap-3">
            <div className={`text-3xl font-bold ${benefit.accentColor}`}>{benefit.metric}</div>
            <div>
              <div className="text-gray-600 font-medium">{benefit.metricLabel}</div>
              <div className="text-sm text-gray-500">Industry leading</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 