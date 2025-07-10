import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star, MessageSquare, Brain, Phone, TrendingUp, Users, Zap, Clock, Puzzle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const brandColors = {
  coralBlue: '#27a1c2',
  orange: '#db5439',
  tan: '#fdf3d9',
};

const ServicesSection = () => {
  const services = [
    {
      icon: Star,
      title: "3-5X More Google Reviews in 90 Days",
      subtitle: "(Guaranteed)",
      description: "While your competitors beg customers for reviews, our AI automatically identifies your happiest customers and guides them through a seamless review process. We don't just ask for reviews - we create the perfect moment, use the right message, and make it effortless for customers to share their experience.",
      results: "Restaurants using Bot & Table average 47 new Google reviews in their first 90 days, compared to 8-12 reviews for restaurants doing it manually.",
      proof: "Maria's Bistro went from 23 reviews to 156 reviews in 6 months, increasing their online orders by 340%.",
      color: "success-green"
    },
    {
      icon: MessageSquare,
      title: "24/7 AI Customer Communication",
      subtitle: "Never Miss Another Customer Again",
      description: "Your AI assistant handles customer communication across every channel - phone calls, text messages, emails, and social media - 24 hours a day, 7 days a week. It doesn't just respond to customers; it engages them with personalized messages based on their dining history, preferences, and behavior.",
      results: "When customers call during busy periods, your AI answers professionally and can take reservations, answer menu questions, and even upsell appetizers or desserts.",
      proof: "Tony's Pizza increased phone conversions by 67% and captured 23 additional customers weekly just from AI phone handling.",
      color: "tech-blue"
    },
    {
      icon: Brain,
      title: "Personalized Marketing Automation",
      subtitle: "AI That Knows Your Customers Better Than You Do",
      description: "Our AI tracks every customer interaction, order history, and preference to create hyper-personalized marketing campaigns that feel like they're coming from a friend, not a restaurant. It knows Sarah always orders the salmon on Fridays, that Mike brings his family for Sunday brunch.",
      results: "Instead of generic 'come dine with us' messages, your customers receive personalized invitations: 'Your favorite salmon special is back this Friday, Sarah. Want your usual table by the window?'",
      proof: "Bella's Italian saw a 89% increase in repeat customers and $12,000 additional monthly revenue from personalized AI campaigns.",
      color: "primary"
    },
    {
      icon: Phone,
      title: "AI Phone Answering & Booking",
      subtitle: "Capture Every Opportunity, Even During Rush Hour",
      description: "Don't miss a phone call—or potential revenue—with AI-powered technology that answers your phone 24/7, 365 days a year",
      results: "During busy periods when your staff can't answer phones, your AI ensures every potential customer gets immediate, professional service. It can handle multiple calls simultaneously, never gets overwhelmed.",
      proof: "Giuseppe's Trattoria captured an additional $8,400 monthly revenue from calls that would have gone to voicemail during busy periods.",
      color: "warning-orange"
    },
    {
      icon: Puzzle,
      title: 'Custom AI Solutions',
      subtitle: 'Tailored Automation for Your Unique Needs',
      description: 'We build bespoke AI tools and automations for restaurants with unique challenges or ambitious goals. If you can dream it, we can build it.',
      results: 'From custom loyalty programs to AI-driven menu optimization, our team delivers solutions that set you apart.',
      proof: 'See how our custom solutions have transformed unique restaurants.',
      color: 'coralBlue',
      modalContent: {
        heading: 'Custom AI Solutions',
        body: 'This is a detailed article about custom AI solutions. Replace this with your own content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.'
      }
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="pt-0 pb-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8" style={{ color: brandColors.coralBlue }}>
        Your Unfair AI Advantage Over Every Other Restaurant
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className={
              `relative rounded-3xl p-8 flex flex-col items-center justify-between shadow-xl border transition-all duration-300 cursor-pointer ` +
              `backdrop-blur-lg bg-white/30 border-2 ` +
              (idx % 2 === 0 ? 'border-[#27a1c2]/40' : 'border-[#db5439]/40')
            }
            style={{ minHeight: '320px' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(39,161,194,0.15)' }}
            onClick={() => setOpenIndex(idx)}
          >
            <div className="flex flex-col items-center mb-4">
              <div
                className="rounded-full p-4 mb-4 shadow-lg"
                style={{
                  background: idx % 2 === 0 ? brandColors.coralBlue + '22' : brandColors.orange + '22',
                  border: `2px solid ${idx % 2 === 0 ? brandColors.coralBlue : brandColors.orange}`,
                }}
              >
                {(() => { const Icon = service.icon; return <Icon className="h-12 w-12" style={{ color: idx % 2 === 0 ? brandColors.coralBlue : brandColors.orange }} />; })()}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center text-base mb-2">{service.subtitle}</p>
            </div>
            <motion.button
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/70 text-[#27a1c2] font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#27a1c2]/30"
              whileHover={{ backgroundColor: brandColors.coralBlue, color: '#fff' }}
              onClick={e => { e.stopPropagation(); setOpenIndex(idx); }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="relative bg-white/80 rounded-3xl shadow-2xl p-10 max-w-lg w-full border-2 border-[#27a1c2]/40 backdrop-blur-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl" onClick={() => setOpenIndex(null)}>&times;</button>
              <div className="flex items-center mb-6">
                <div className="rounded-xl p-3 mr-4" style={{ background: brandColors.coralBlue + '22' }}>
                  {(() => { const ModalIcon = services[openIndex].icon; return <ModalIcon className="h-8 w-8" style={{ color: brandColors.coralBlue }} />; })()}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{services[openIndex].modalContent?.heading || services[openIndex].title}</h3>
              </div>
              <div className="text-gray-700 text-base leading-relaxed">
                {services[openIndex].modalContent?.body || 'Detailed article content goes here.'}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;

