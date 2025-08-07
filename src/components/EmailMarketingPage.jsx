import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Mail, TrendingUp, Users, Zap } from 'lucide-react';
import ArticlesSection from './ArticlesSection';
import DemoBookingForm from './ui/DemoBookingForm';

const coral = '#FF6B47';
const blue = '#1e293b';
const gray = '#f7f7fa';

function GoogleEmailMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full max-w-[500px] rounded-2xl bg-white shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
    >
      {/* Animated glow effect around email */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 blur-xl -z-10"
        style={{ transform: 'scale(1.1)' }}
      />

      {/* Gmail header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-between px-4 py-2 bg-[#f5f5f5] border-b border-gray-200"
      >
        <div className="flex items-center gap-2">
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-red-500 inline-block" 
          />
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="w-3 h-3 rounded-full bg-yellow-400 inline-block" 
          />
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="w-3 h-3 rounded-full bg-green-500 inline-block" 
          />
        </div>
        <div className="text-xs text-gray-500 font-semibold">Gmail</div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
        </div>
      </motion.div>

      {/* Email content */}
      <div className="flex flex-col p-6 gap-4 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 mb-1"
        >
          <motion.img 
            whileHover={{ scale: 1.1, rotate: 5 }}
            src="https://ui-avatars.com/api/?name=Leo%27s+Pizza&background=FF6B47&color=fff&size=128" 
            alt="Leo's Pizza Logo" 
            className="w-8 h-8 rounded-full border-2 border-white shadow" 
          />
          <div>
            <div className="font-semibold text-sm text-gray-900">Leo's Pizza <span className="text-xs text-gray-400">&lt;info@leospizza.com&gt;</span></div>
            <div className="text-xs text-gray-500">to me</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xs text-gray-400 mb-1"
        >
          Fri, Jul 12, 2024, 10:02 AM
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="rounded-lg overflow-hidden mb-2 relative"
        >
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Pizza Special" className="w-full h-32 object-cover" />
          {/* Animated shimmer effect */}
          <motion.div
            animate={{ x: [-100, 500] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            style={{ width: '100px' }}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-base font-bold text-gray-900 mb-1"
        >
          🍕 Friday Feast: Free Appetizer with Any Large Pizza!
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-sm text-gray-700 mb-2 leading-relaxed"
        >
          Hi Sarah,<br />
          Celebrate Friday with us! Show this email at Leo's Pizza today and enjoy a free garlic bread appetizer with any large pizza order. Offer valid 2–5pm only.<br /><br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Click below to reserve your table now!</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full font-bold py-2 text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: coral, color: '#fff' }}>
            Reserve Table
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Compact email mockup for inside the ROI card
function EmailPreviewMockup() {
  return (
    <div className="mt-6 w-full max-w-md mx-auto rounded-xl border border-gray-200 bg-white shadow flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-[#f5f5f5]">
        <img src="https://ui-avatars.com/api/?name=Leo%27s+Pizza&background=FF6B47&color=fff&size=64" alt="Leo's Pizza Logo" className="w-8 h-8 rounded-full border-2 border-white shadow" />
        <div className="flex-1">
          <div className="font-semibold text-sm text-gray-900">Leo's Pizza <span className="text-xs text-gray-400">&lt;info@leospizza.com&gt;</span></div>
          <div className="text-xs text-gray-500">to me</div>
        </div>
        <div className="text-xs text-gray-400">10:02 AM</div>
      </div>
      <div className="flex items-start gap-4 px-4 py-3 bg-white">
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80" alt="Pizza Special" className="w-20 h-16 object-cover rounded-lg" />
        <div className="flex-1">
          <div className="font-bold text-gray-900 text-sm mb-1">🍕 Friday Feast: Free Appetizer with Any Large Pizza!</div>
          <div className="text-xs text-gray-700 leading-snug">Hi Sarah, Celebrate Friday with us! Show this email at Leo's Pizza today and enjoy a free garlic bread appetizer with any large pizza order. Offer valid 2–5pm only.</div>
        </div>
      </div>
    </div>
  );
}

function EmailPreviewMockup2() {
  return (
    <div className="mt-4 w-full max-w-md mx-auto rounded-xl border border-gray-200 bg-white shadow flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-[#f5f5f5]">
        <img src="https://ui-avatars.com/api/?name=Bella+Cucina&background=FF6B47&color=fff&size=64" alt="Bella Cucina Logo" className="w-8 h-8 rounded-full border-2 border-white shadow" />
        <div className="flex-1">
          <div className="font-semibold text-sm text-gray-900">Bella Cucina <span className="text-xs text-gray-400">&lt;info@bellacucina.com&gt;</span></div>
          <div className="text-xs text-gray-500">to me</div>
        </div>
        <div className="text-xs text-gray-400">8:15 AM</div>
      </div>
      <div className="flex items-start gap-4 px-4 py-3 bg-white">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80" alt="Pasta Special" className="w-20 h-16 object-cover rounded-lg" />
        <div className="flex-1">
          <div className="font-bold text-gray-900 text-sm mb-1">🍝 Pasta Night: 2-for-1 on All Pasta Dishes!</div>
          <div className="text-xs text-gray-700 leading-snug">Hi Marco, Join us for Pasta Night! Enjoy two pasta dishes for the price of one this Thursday at Bella Cucina. Reserve your table now—offer valid dine-in only.</div>
        </div>
      </div>
    </div>
  );
}

export default function EmailMarketingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Enhanced Hero Section */}
      <section className="relative w-full py-20 lg:py-40 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
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
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"
          />

          {/* Floating Email Icons */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <Mail className="w-6 h-6 text-orange-600" />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-20 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <Users className="w-6 h-6 text-green-600" />
          </motion.div>
        </div>

                 <div className="container mx-auto max-w-7xl relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-16">
                         <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex flex-col justify-start gap-6 pt-0 lg:col-span-3"
             >
              {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  EMAIL MARKETING SOLUTIONS
                </div>
              </motion.div>

              {/* Enhanced Headlines */}
              <div className="flex gap-6 flex-col">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl max-w-4xl tracking-tighter text-left font-bold leading-tight"
                  style={{ color: blue }}
                >
                  Turn Every Email Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                    Restaurant Revenue
                  </span>
                </motion.h1>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full max-w-2xl"
                />

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl leading-relaxed tracking-tight text-gray-700 max-w-2xl text-left"
                >
                  Build lasting relationships with your customers and drive consistent revenue through personalized email campaigns that deliver{' '}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    $36 for every $1 spent.
                  </span>
                </motion.p>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Book Your Revenue Growth Strategy Call
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 font-semibold text-lg px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-orange-50 transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Jump on a call
                  </Button>
                </motion.div>
              </motion.div>

                             {/* Trust Indicators */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.9 }}
                 className="flex items-center gap-6 mt-4"
               >
                 <div className="text-sm text-gray-600">
                   <span className="font-semibold text-green-600">$36 ROI</span> average return
                 </div>
               </motion.div>
            </motion.div>

                         <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="flex justify-center items-center lg:col-span-2 lg:justify-end"
             >
              <GoogleEmailMockup />
            </motion.div>
          </div>
        </div>
      </section>

                {/* Enhanced Key Benefits Section */}
          <section className="relative w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Gradient Orbs */}
              <motion.div
                animate={{ 
                  x: [0, 80, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-32 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  x: [0, -60, 0],
                  y: [0, 50, 0],
                  scale: [1.2, 1, 1.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-orange-400/15 to-red-400/15 rounded-full blur-3xl"
              />
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 right-24 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </motion.div>
              <motion.div
                animate={{ y: [20, -20, 20], rotate: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 left-24 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <Mail className="w-8 h-8 text-orange-600" />
              </motion.div>
            </div>

            <div className="max-w-6xl mx-auto mb-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm text-blue-700 mb-6"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  PROVEN RESULTS
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-center mb-4"
                  style={{ color: blue }}
                >
                  Why Email Marketing Works for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                    Restaurants
                  </span>
                </motion.h2>

                                 {/* Animated underline */}
                 <motion.div
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1, delay: 0.8 }}
                   viewport={{ once: true }}
                   className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6 max-w-4xl"
                 />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                >
                  Transform one-time diners into loyal customers with personalized email campaigns that drive real revenue growth.
                </motion.p>
              </motion.div>
            </div>
                    {/* Enhanced Desktop bento grid */}
            <div className="hidden md:grid gap-8 max-w-6xl mx-auto relative z-10"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, minmax(200px, auto))',
                gridTemplateAreas: `
                  'main main side1'
                  'main main side2'
                  'wide wide side3'
                `
              }}
            >
              {/* Enhanced Main Card: ROI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ gridArea: 'main' }} 
                className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden group"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold text-sm uppercase tracking-wide">
                      Highest ROI Channel
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">$36</span> Return for Every $1 Spent
                  </h3>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Email marketing delivers the highest ROI of any digital channel. Direct access to your customers means higher engagement and measurable revenue growth.
                  </p>
                  
                  {/* Enhanced comparison table */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-100 rounded-xl">
                        <span className="font-semibold text-gray-800">Email Marketing</span>
                        <span className="text-green-600 font-bold text-xl">$36</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                        <span className="font-semibold text-gray-600">SMS Marketing</span>
                        <span className="text-gray-500 font-semibold">$29</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                        <span className="font-semibold text-gray-600">Social Media</span>
                        <span className="text-gray-500 font-semibold">$2.80</span>
                      </div>
                    </div>
                  </div>
                  
                  <EmailPreviewMockup />
                  <EmailPreviewMockup2 />
                </div>
              </motion.div>
                        {/* Enhanced Side Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ gridArea: 'side1' }} 
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-xs uppercase tracking-wide">
                      40x More Effective
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    Convert First-Time Guests Into Loyal Regulars
                  </h3>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    Email is 40x more effective at building repeat business than social media. Automated campaigns nurture guests into regulars.
                  </p>
                </div>
              </motion.div>

              {/* Enhanced Side Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ gridArea: 'side2' }} 
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-bold text-xs uppercase tracking-wide">
                      17% Higher Orders
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    Drive Higher Order Values
                  </h3>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    17% higher average order value from email-driven purchases. Upsell, cross-sell, and promote specials with every send.
                  </p>
                </div>
              </motion.div>
                        {/* Enhanced Wide Card (bottom left) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ gridArea: 'wide' }} 
                className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-sm uppercase tracking-wide">
                      75% Customer Preference
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Build Authentic Relationships
                  </h3>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    75% of customers prefer email communication from restaurant brands. Tell your story, share your values, and connect deeply.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Share your restaurant's story and values",
                      "Build trust with regular, authentic updates", 
                      "Highlight customer stories and testimonials",
                      "Invite feedback and foster two-way communication"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 rounded-xl p-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                          <svg width="14" height="14" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Side Card 3 (bottom right) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ gridArea: 'side3' }} 
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-bold text-xs uppercase tracking-wide">
                      Smart Automation
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    Automated, Personalized Campaigns
                  </h3>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    Segment your audience and send the right message at the right time—automatically. Save time and maximize results.
                  </p>
                </div>
              </motion.div>
        </div>
        {/* Mobile fallback: simple stack */}
        <div className="md:hidden flex flex-col gap-8 max-w-2xl mx-auto">
          {/* Main Card: ROI */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <h3 className="text-2xl font-bold mb-2" style={{ color: blue }}>$36 Return for Every $1 Spent</h3>
            <div className="text-coral-600 font-semibold mb-2">Highest ROI of Any Channel</div>
            <p className="text-gray-700 mb-4 text-lg">Email marketing delivers the highest ROI of any digital channel. Direct access to your customers means higher engagement and measurable revenue growth.</p>
            <table className="w-full text-sm mt-2">
              <tbody>
                <tr><td className="font-semibold text-gray-700">Email Marketing</td><td className="text-green-600 font-bold">$36</td></tr>
                <tr><td className="font-semibold text-gray-700">Social Media</td><td className="text-gray-500">$2.80</td></tr>
                <tr><td className="font-semibold text-gray-700">SMS Marketing</td><td className="text-gray-500">$29</td></tr>
              </tbody>
            </table>
          </div>
          {/* Other cards stacked */}
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              {i === 1 && <><div className="text-coral-600 font-semibold mb-2">40x More Effective Than Social</div></>}
              {i === 2 && <><div className="text-coral-600 font-semibold mb-2">17% Higher Order Value</div></>}
              {i === 3 && <><div className="text-coral-600 font-semibold mb-2">75% Prefer Email from Restaurants</div></>}
              {i === 4 && <><div className="text-coral-600 font-semibold mb-2">Segmentation & Automation</div></>}
              <h3 className="text-2xl font-bold mb-2" style={{ color: blue }}>
                {[
                  'Convert First-Time Guests Into Loyal Regulars',
                  'Drive Higher Order Values',
                  'Build Authentic Relationships',
                  'Automated, Personalized Campaigns',
                ][i-1]}
              </h3>
              <p className="text-gray-700 mb-4 text-lg">{[
                'Email is 40x more effective at building repeat business than social media. Automated campaigns nurture guests into regulars.',
                '17% higher average order value from email-driven purchases. Upsell, cross-sell, and promote specials with every send.',
                '75% of customers prefer email communication from restaurant brands. Tell your story, share your values, and connect deeply.',
                'Segment your audience and send the right message at the right time—automatically. Save time and maximize results.',
              ][i-1]}</p>
            </div>
          ))}
        </div>
      </section>

                {/* Enhanced Metrics/Proof Section */}
          <section className="w-full py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8" 
                style={{ color: blue }}
              >
                Proof That Email Marketing Works
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl shadow-xl p-8 border border-orange-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">$36</div>
                    <div className="text-white/90 font-medium">Average ROI per $1 spent</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl shadow-xl p-8 border border-orange-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">4B+</div>
                    <div className="text-white/90 font-medium">Global email users</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl shadow-xl p-8 border border-orange-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">21%</div>
                    <div className="text-white/90 font-medium">Average Open Rate</div>
                    <div className="text-xs text-white/80 mt-1 font-medium">Industry-leading engagement</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

                {/* Enhanced Features Section */}
          <section className="relative w-full py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Gradient Orbs */}
              <motion.div
                animate={{ 
                  x: [0, 60, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"
              />
              
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <Zap className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.div
                animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 right-32 p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <TrendingUp className="w-6 h-6 text-orange-600" />
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
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm text-blue-700 mb-6"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  ENTERPRISE FEATURES
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-center mb-4"
                  style={{ color: blue }}
                >
                  Why Top Restaurants Choose{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                    Bot & Table
                  </span>
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "250px" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-6"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                >
                  Advanced email marketing technology designed specifically for restaurants, with powerful automation and deep integrations.
                </motion.p>
              </motion.div>

              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Feature 1: Smart Segmentation */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">Smart Segmentation</h4>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-sm uppercase tracking-wide">
                          AI-Powered Targeting
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Automatically group guests by visit frequency, spend, and preferences for hyper-targeted campaigns that convert 3x better.
                    </p>
                    
                    {/* Feature Benefits */}
                    <div className="space-y-3">
                      {[
                        "Frequency-based segmentation (new, regular, VIP)",
                        "Spending behavior analysis",
                        "Preference tracking & targeting",
                        "Automated list management"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <svg width="12" height="12" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">3x</div>
                      <div className="text-sm text-blue-700 font-medium">Higher conversion rates</div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 2: Automated Campaign Triggers */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">Automated Campaign Triggers</h4>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold text-sm uppercase tracking-wide">
                          Set & Forget Marketing
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Send welcome series, win-back, birthdays, and more—completely hands-free with intelligent timing optimization.
                    </p>
                    
                    {/* Feature Benefits */}
                    <div className="space-y-3">
                      {[
                        "Welcome series for new customers",
                        "Win-back campaigns for lapsed guests",
                        "Birthday & anniversary automation",
                        "Behavioral trigger campaigns"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                            <svg width="12" height="12" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="mt-6 p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">80%</div>
                      <div className="text-sm text-green-700 font-medium">Time saved on marketing</div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 3: Real-Time Analytics Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">Real-Time Analytics Dashboard</h4>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-sm uppercase tracking-wide">
                          Data-Driven Insights
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Track open rates, revenue, guest frequency, and more in one comprehensive dashboard with actionable insights.
                    </p>
                    
                    {/* Feature Benefits */}
                    <div className="space-y-3">
                      {[
                        "Revenue attribution tracking",
                        "Customer lifetime value metrics",
                        "Campaign performance analytics",
                        "Real-time reporting & alerts"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                            <svg width="12" height="12" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-purple-700 font-medium">Real-time monitoring</div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 4: Seamless Integrations */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">Seamless Integrations</h4>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-bold text-sm uppercase tracking-wide">
                          Unified Marketing Engine
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Connect with POS, reservations, review, and loyalty systems for a unified marketing engine that works with your existing tools.
                    </p>
                    
                    {/* Feature Benefits */}
                    <div className="space-y-3">
                      {[
                        "POS system integration (Square, Toast, etc.)",
                        "Reservation platform sync",
                        "Review management connection",
                        "Loyalty program integration"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                            <svg width="12" height="12" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">50+</div>
                      <div className="text-sm text-orange-700 font-medium">Platform integrations</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 shadow-2xl"
              >
                <h4 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Email Marketing?
                </h4>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of restaurants already using Bot & Table to drive more revenue through smarter email campaigns.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-gray-50 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Book Your Strategy Call
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

                {/* Enhanced Campaign Types Section */}
          <section className="relative w-full py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Gradient Orbs */}
              <motion.div
                animate={{ 
                  x: [0, 70, 0],
                  y: [0, -35, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 left-24 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  x: [0, -50, 0],
                  y: [0, 45, 0],
                  scale: [1.2, 1, 1.2]
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-24 right-24 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-3xl"
              />
              
              {/* Floating Campaign Icons */}
              <motion.div
                animate={{ y: [-12, 12, -12], rotate: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 right-40 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <Mail className="w-8 h-8 text-purple-600" />
              </motion.div>
              <motion.div
                animate={{ y: [18, -18, 18], rotate: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-40 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <Users className="w-8 h-8 text-pink-600" />
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
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200 shadow-sm text-purple-700 mb-6"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  CAMPAIGN EXAMPLES
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-center mb-4"
                  style={{ color: blue }}
                >
                  Email Campaigns That Drive{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                    Real Results
                  </span>
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 max-w-4xl"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                >
                  See real examples of high-converting email campaigns that turn one-time diners into loyal customers and drive measurable revenue growth.
                </motion.p>
              </motion.div>

              {/* Enhanced Campaign Examples Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Welcome Series Campaign */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Campaign Header */}
                    <div className="p-8 pb-4">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">Welcome Series</h4>
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-sm uppercase tracking-wide">
                            First Impression Magic
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Turn new customers into regulars with a perfectly timed 3-email welcome series.
                      </p>
                    </div>

                    {/* Email Preview Mockup */}
                    <div className="px-8 mb-6">
                      <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
                        {/* Email Header */}
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">M</span>
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-gray-900">Mario's Italian Bistro</div>
                            <div className="text-xs text-gray-500">Welcome to the family!</div>
                          </div>
                        </div>
                        
                        {/* Email Content */}
                        <div className="space-y-3">
                          <div className="text-sm font-bold text-gray-900">🍝 Welcome to Mario's Family, Sarah!</div>
                          <div className="text-xs text-gray-700 leading-relaxed">
                            Thank you for dining with us! Here's your <span className="font-semibold text-blue-600">20% off</span> next visit + our secret family recipe for garlic bread...
                          </div>
                          <div className="bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-lg text-center">
                            Claim Your 20% Off
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Campaign Results */}
                    <div className="px-8 pb-8">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">68%</div>
                            <div className="text-xs text-blue-700 font-medium">Return Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">$42</div>
                            <div className="text-xs text-blue-700 font-medium">Avg Order Value</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Birthday & Anniversary Campaign */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Campaign Header */}
                    <div className="p-8 pb-4">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl shadow-lg">
                          <span className="text-2xl">🎂</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">Birthday & Anniversary</h4>
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 font-bold text-sm uppercase tracking-wide">
                            Celebration Marketing
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Celebrate special moments with personalized offers that create emotional connections.
                      </p>
                    </div>

                    {/* Email Preview Mockup */}
                    <div className="px-8 mb-6">
                      <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
                        {/* Email Header */}
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300">
                          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">T</span>
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-gray-900">The Steakhouse</div>
                            <div className="text-xs text-gray-500">Happy Birthday!</div>
                          </div>
                        </div>
                        
                        {/* Email Content */}
                        <div className="space-y-3">
                          <div className="text-sm font-bold text-gray-900">🎉 Happy Birthday, Michael!</div>
                          <div className="text-xs text-gray-700 leading-relaxed">
                            It's your special day! Enjoy a <span className="font-semibold text-pink-600">FREE dessert</span> and 25% off your birthday dinner. Valid for 2 weeks...
                          </div>
                          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold py-2 px-4 rounded-lg text-center">
                            Book Birthday Dinner
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Campaign Results */}
                    <div className="px-8 pb-8">
                      <div className="bg-pink-50 rounded-xl p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-pink-600">89%</div>
                            <div className="text-xs text-pink-700 font-medium">Open Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-pink-600">$78</div>
                            <div className="text-xs text-pink-700 font-medium">Avg Celebration Spend</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Win-Back Campaign */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Campaign Header */}
                    <div className="p-8 pb-4">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                          <span className="text-2xl">💚</span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">Win-Back & Reactivation</h4>
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold text-sm uppercase tracking-wide">
                            Second Chance Success
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Bring back lapsed customers with irresistible offers and nostalgic messaging.
                      </p>
                    </div>

                    {/* Email Preview Mockup */}
                    <div className="px-8 mb-6">
                      <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
                        {/* Email Header */}
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">C</span>
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-gray-900">Café Luna</div>
                            <div className="text-xs text-gray-500">We miss you!</div>
                          </div>
                        </div>
                        
                        {/* Email Content */}
                        <div className="space-y-3">
                          <div className="text-sm font-bold text-gray-900">☕ We Miss You, Jessica!</div>
                          <div className="text-xs text-gray-700 leading-relaxed">
                            Your favorite latte is waiting! Come back and enjoy <span className="font-semibold text-green-600">50% off</span> your next visit. Plus, we have new pastries you'll love...
                          </div>
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold py-2 px-4 rounded-lg text-center">
                            Welcome Back - 50% Off
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Campaign Results */}
                    <div className="px-8 pb-8">
                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-green-600">34%</div>
                            <div className="text-xs text-green-700 font-medium">Reactivation Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600">$31</div>
                            <div className="text-xs text-green-700 font-medium">Return Visit Value</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Campaign Types */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100"
              >
                <div className="text-center mb-12">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">
                    Plus Many More Campaign Types
                  </h4>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Our platform includes dozens of pre-built campaign templates designed specifically for restaurants.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Seasonal Promotions", desc: "Holiday & seasonal menu campaigns", icon: "🍂", results: "45% higher engagement" },
                    { name: "Loyalty Rewards", desc: "Points, tiers, and VIP experiences", icon: "⭐", results: "23% increase in frequency" },
                    { name: "Event Invitations", desc: "Wine tastings, chef specials, live music", icon: "🎵", results: "78% attendance rate" },
                    { name: "Feedback Requests", desc: "Reviews, surveys, and testimonials", icon: "💬", results: "4.8★ average rating" }
                  ].map((campaign, index) => (
                    <motion.div
                      key={campaign.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{campaign.icon}</div>
                      <h5 className="font-bold text-gray-900 mb-2">{campaign.name}</h5>
                      <p className="text-sm text-gray-600 mb-3">{campaign.desc}</p>
                      <div className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {campaign.results}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>


            </div>
          </section>

                {/* Enhanced Implementation Process Section */}
          <section className="relative w-full py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Gradient Orbs */}
              <motion.div
                animate={{ 
                  x: [0, 90, 0],
                  y: [0, -45, 0],
                  scale: [1, 1.4, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 right-16 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  x: [0, -70, 0],
                  y: [0, 55, 0],
                  scale: [1.3, 1, 1.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-16 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
              />
              
              {/* Floating Process Icons */}
              <motion.div
                animate={{ y: [-14, 14, -14], rotate: [0, 7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-32 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <Zap className="w-8 h-8 text-emerald-600" />
              </motion.div>
              <motion.div
                animate={{ y: [20, -20, 20], rotate: [0, -7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 right-32 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
              >
                <TrendingUp className="w-8 h-8 text-teal-600" />
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
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 shadow-sm text-emerald-700 mb-6"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  SIMPLE 4-STEP PROCESS
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-center mb-4"
                  style={{ color: blue }}
                >
                  How Implementation{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600">
                    Works
                  </span>
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-6 max-w-2xl"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                >
                  From strategy to success in just 4 simple steps. We handle the technical setup while you focus on running your restaurant.
                </motion.p>
              </motion.div>

              {/* Enhanced Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[{
                  step: 1,
                  title: 'Strategy Call',
                  desc: 'Book a call to discuss your goals and current marketing efforts.',
                  icon: '📞',
                  color: 'from-blue-500 to-indigo-600',
                  bgColor: 'from-blue-50/50 to-indigo-50/50',
                  statColor: 'text-blue-600',
                  statBg: 'bg-blue-50',
                  stat: '30 min',
                  statLabel: 'Discovery call'
                }, {
                  step: 2,
                  title: 'Onboarding & Setup',
                  desc: 'We import your list, set up automations, and integrate with your systems.',
                  icon: '⚙️',
                  color: 'from-emerald-500 to-teal-600',
                  bgColor: 'from-emerald-50/50 to-teal-50/50',
                  statColor: 'text-emerald-600',
                  statBg: 'bg-emerald-50',
                  stat: '48 hrs',
                  statLabel: 'Complete setup'
                }, {
                  step: 3,
                  title: 'Launch Campaigns',
                  desc: 'Start sending high-converting emails and watch your revenue grow.',
                  icon: '🚀',
                  color: 'from-orange-500 to-red-600',
                  bgColor: 'from-orange-50/50 to-red-50/50',
                  statColor: 'text-orange-600',
                  statBg: 'bg-orange-50',
                  stat: 'Day 1',
                  statLabel: 'Campaigns live'
                }, {
                  step: 4,
                  title: 'Ongoing Optimization',
                  desc: 'We monitor results, optimize, and provide ongoing support.',
                  icon: '📈',
                  color: 'from-purple-500 to-pink-600',
                  bgColor: 'from-purple-50/50 to-pink-50/50',
                  statColor: 'text-purple-600',
                  statBg: 'bg-purple-50',
                  stat: '24/7',
                  statLabel: 'Monitoring'
                }].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group flex flex-col items-center text-center"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      {/* Step Number with Icon */}
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl mb-2`}>
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                          <span className="text-sm font-bold text-gray-700">{item.step}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                      <p className="text-gray-700 mb-6 leading-relaxed">{item.desc}</p>
                      
                      {/* Timeline/Stats */}
                      <div className={`${item.statBg} rounded-xl p-4 w-full`}>
                        <div className={`text-2xl font-bold ${item.statColor} mb-1`}>{item.stat}</div>
                        <div className={`text-sm ${item.statColor} font-medium`}>{item.statLabel}</div>
                      </div>
                    </div>

                    {/* Connecting Line (except for last item) */}
                    {i < 3 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                        viewport={{ once: true }}
                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2 z-20"
                      />
                    )}
                  </motion.div>
                ))}
              </div>


            </div>
          </section>

          {/* Book Demo Form Section */}
          <section id="book-call" className="w-full py-16 bg-gray-50">
            <DemoBookingForm />
          </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: blue }}>Frequently Asked Questions</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-lg font-semibold" style={{ color: blue }}>How quickly can I see results from email marketing?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">Most restaurants see increased engagement and bookings within the first month of launching their first campaign.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-lg font-semibold" style={{ color: blue }}>What types of emails work best for restaurants?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">Promotions, event invites, feedback requests, and personalized offers perform best.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-lg font-semibold" style={{ color: blue }}>Can I integrate email marketing with my POS or reservation system?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">Yes, our platform connects with POS, reservation, loyalty, and review systems.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-lg font-semibold" style={{ color: blue }}>How do I measure email marketing success?</AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">Track open rates, bookings, revenue, and customer feedback in your dashboard.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* Related Articles Section */}
      <ArticlesSection />
    </div>
  );
} 