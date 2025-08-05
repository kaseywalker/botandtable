import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { CheckCircle, Zap, Users, MessageCircle, TrendingUp, Star, BarChart2, Layers, Mail, Smartphone, Calendar, DollarSign, Phone, Target } from 'lucide-react';
import ArticlesSection from './ArticlesSection';
import { IconCloudWithRobot } from './ui/interactive-icon-cloud-with-robot';
import DemoBookingForm from './ui/DemoBookingForm';

const coral = '#FF6B47';
const blue = '#1e293b';
const gray = '#f7f7fa';

export default function PersonalizedMarketingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: coral }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-orange-200/50 shadow-sm" style={{ color: coral }}>
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Restaurant Marketing
              </div>
              
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: blue }}>
                  <span className="block">Personalized Marketing</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    on Autopilot
                  </span>
                </h1>
                
                {/* Subtitle with highlight */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <p className="text-xl leading-relaxed text-gray-700">
                    Every day, your restaurant loses potential customers to three critical gaps: 
                    <Link to="/articles/the-27000-phone-problem" className="font-semibold hover:underline transition-colors" style={{ color: coral }}> missed phone calls during busy periods</Link>, 
                    <Link to="/articles/from-chaos-to-cash" className="font-semibold text-orange-600 hover:underline transition-colors"> inconsistent follow-up with guests after they dine</Link>, and 
                    <Link to="/articles/personalized-marketing-guide" className="font-semibold text-red-600 hover:underline transition-colors"> the inability to stay top-of-mind between visits</Link>. 
                    While you're focused on delivering exceptional dining experiences, competitors with automated marketing systems are capturing your customers and building the relationships that drive repeat business.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Jump on a call
                </Button>
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ background: coral, color: '#fff' }}>
                  <Calendar className="w-5 h-5" />
                  Book Your Revenue Growth Strategy Call
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="text-2xl font-bold" style={{ color: coral }}>24/7</div>
                  <div className="text-sm text-gray-600">AI Coverage</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="text-2xl font-bold text-orange-600">300%</div>
                  <div className="text-sm text-gray-600">More Engagement</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Automated</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className="relative">
              {/* Main Content Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-full mr-4">
                    <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Smart Automation System</h3>
                    <p className="text-gray-600">AI-Powered Restaurant Marketing</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 mt-1">
                      <Phone className="w-4 h-4" style={{ color: coral }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Never Miss a Call</p>
                      <p className="text-sm text-gray-600">AI answers 100% of calls, even during rush hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 mt-1">
                      <Mail className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Personalized Follow-ups</p>
                      <p className="text-sm text-gray-600">Automated email & SMS campaigns for every guest</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 mt-1">
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Stay Top-of-Mind</p>
                      <p className="text-sm text-gray-600">Intelligent timing keeps you front and center</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-100">
                  <p className="text-sm font-medium text-gray-800">
                    "The restaurant industry has fundamentally changed. Today's successful restaurants don't just serve great food—they create seamless, personalized experiences that begin the moment a customer discovered them and continue long after they leave."
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 text-white p-4 rounded-2xl shadow-lg z-20 animate-bounce" style={{ background: `linear-gradient(135deg, ${coral}, #e55039)` }}>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-bold">Autopilot</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg z-20 border border-gray-100 animate-pulse">
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 text-green-500 mr-2" />
                  <span className="font-semibold text-gray-700">+300% Engagement</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 text-white p-3 rounded-full shadow-lg z-20 animate-pulse" style={{ background: `linear-gradient(135deg, ${coral}, #ff6348)`, animationDelay: '1s' }}>
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Bottom Insight Section */}
          <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Reality of Modern Restaurant Operations</h3>
              <p className="text-lg leading-relaxed text-gray-700 text-center">
                This requires a level of consistent, intelligent communication that's impossible to maintain manually, especially when you're managing kitchen operations, staff schedules, and the hundred other details that keep a restaurant running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Complete Solution Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: blue }}>
              The Complete Solution
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <Link to="/articles/ai-in-restaurants-complete-guide" className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors">Bot and Table's Personalized Marketing on Autopilot platform</Link> revolutionizes how restaurants engage with their guests by creating an intelligent, interconnected system that works around the clock. Our AI-powered platform seamlessly integrates four essential marketing channels—phone answering, SMS marketing, email campaigns, and reputation management—into one cohesive system that delivers the right message to the right guest at the right time, automatically.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't just marketing automation—it's a complete customer relationship management system designed specifically for restaurants. Every interaction, from the first phone call to the follow-up review request, is orchestrated by AI that learns your customers' preferences, celebrates their special moments, and keeps your restaurant at the forefront of their minds when they're deciding where to dine.
              </p>
            </div>
            
            {/* Right Column - Animated Robot with Floating Icons */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <IconCloudWithRobot 
                  iconSlugs={[
                    // Email/Gmail
                    "gmail", "gmail", "gmail",
                    // Phone/SMS
                    "whatsapp", "whatsapp", "whatsapp", "whatsapp", "whatsapp",
                    // Social
                    "instagram", "facebook",
                    // AI
                    "openai", "huggingface",
                    // Cloud
                    "googlecloud"
                  ]} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section - Redesigned */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
              <Layers className="w-4 h-4 mr-2" />
              Four Integrated Marketing Channels
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Your Complete Marketing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Four powerful channels working together seamlessly to capture, engage, and retain customers automatically.
            </p>
          </div>

          {/* Horizontal Cards Stack */}
          <div className="space-y-8">
            
            {/* Card 1: AI Phone Answering */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative">
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-70"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-transparent rounded-full opacity-50 transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Icon & Title Section */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">24/7 Availability</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">AI Phone Answering: Never Miss Another Revenue Opportunity</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Your phone line is your restaurant's most valuable sales channel, but only if someone answers it. <Link to="/ai-phone-answering" className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors">Bot and Table's AI Phone Answering system</Link> ensures you capture 100% of incoming calls, even during your busiest rush periods. <Link to="/articles/the-27000-phone-problem" className="text-gray-600 hover:text-gray-700 underline transition-colors">Learn why 43% of restaurant calls go unanswered →</Link>
                      </p>
                    </div>
                    
                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Answer 100% of calls instantly</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Generate revenue 24/7</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Eliminate order errors</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Free staff for in-person service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: SMS Marketing */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative">
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-pink-50 opacity-70"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-50 transform -translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Content Section (Left on this card for variety) */}
                  <div className="flex-1 space-y-4 lg:order-1">
                    <div>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">98% Open Rate</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">SMS Marketing: Instant Communication That Drives Immediate Action</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Text messages have a 98% open rate and are read within 3 minutes of delivery, making <Link to="/sms-marketing" className="text-purple-600 hover:text-purple-700 underline font-semibold transition-colors">SMS the most powerful channel</Link> for driving immediate restaurant traffic and filling empty tables. <Link to="/articles/restaurant-sms-marketing" className="text-gray-600 hover:text-gray-700 underline transition-colors">Discover proven SMS strategies →</Link>
                      </p>
                    </div>
                    
                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">98% open rate guaranteed</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">$36 return per $1 spent</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Reduce no-shows by 60%</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Build customer loyalty</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon & Title Section (Right on this card) */}
                  <div className="flex-shrink-0 lg:order-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Email Marketing */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative">
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-white to-red-50 opacity-70"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200 to-transparent rounded-full opacity-50 transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Icon & Title Section */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">Relationship Building</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Email Marketing: Build Lasting Relationships Through Storytelling</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        While SMS drives immediate action, <Link to="/email-marketing" className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors">email marketing builds the deep, lasting relationships</Link> that create lifelong customers. Showcase your restaurant's story and create emotional connections. <Link to="/articles/email-marketing-best-practices-2025" className="text-gray-600 hover:text-gray-700 underline transition-colors">Master email marketing best practices →</Link>
                      </p>
                    </div>
                    
                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">$36 return per $1 spent</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">40x more effective than social</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">17% higher order value</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Automated nurture sequences</span>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
            </div>

            {/* Card 4: Google Reviews Management */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative">
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-teal-50 opacity-70"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200 to-transparent rounded-full opacity-50 transform -translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Content Section (Left on this card) */}
                  <div className="flex-1 space-y-4 lg:order-1">
                    <div>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">Reputation Protection</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Google Reviews Management: Protect and Enhance Your Online Reputation</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Online reviews directly impact your restaurant's success, with 93% of customers reading reviews before choosing where to dine. <Link to="/google-reviews" className="text-green-600 hover:text-green-700 underline font-semibold transition-colors">Our system automatically requests reviews</Link> from satisfied customers. <Link to="/articles/google-reviews-strategies" className="text-gray-600 hover:text-gray-700 underline transition-colors">Get 10 proven review strategies →</Link>
                      </p>
                    </div>
                    
                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">300% more positive reviews</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Address issues privately first</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Improve search visibility</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">Build customer trust</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon & Title Section (Right on this card) */}
                  <div className="flex-shrink-0 lg:order-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action at bottom */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Restaurant Marketing?</h3>
              <p className="text-gray-700 mb-6 text-lg">
                See how these four channels work together to create a complete customer journey that drives revenue on autopilot.
              </p>
              <Button 
                size="lg" 
                className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                style={{ background: coral, color: '#fff' }}
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
                <Calendar className="w-5 h-5" />
                Book Your Free Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How the Integrated System Works Together */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-50 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Complete Customer Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How the Integrated System{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Works Together
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Follow a customer's journey from first call to loyal regular—powered by AI that never sleeps.
            </p>
          </div>

          {/* Customer Journey Steps */}
          <div className="space-y-12">
            
            {/* Step 1: Discovery Phase */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Step 1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery Phase</h3>
                <p className="text-gray-700 leading-relaxed">
                  A potential customer calls your restaurant after seeing it mentioned online. Instead of getting a busy signal or being put on hold, they're immediately greeted by professional AI that answers questions about your menu, location, and hours. Interested in dining, they receive an instant text with a link to your reservation system.
                </p>
              </div>
            </div>

            {/* Step 2: First Visit */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 bg-green-500 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Step 2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">First Visit</h3>
                <p className="text-gray-700 leading-relaxed">
                  The customer books a table and dines at your restaurant. Within 24 hours, they receive a personalized welcome email thanking them for their visit, sharing your restaurant's story, and offering a special discount for their next meal. They're also automatically enrolled in your SMS list for exclusive offers.
                </p>
              </div>
            </div>

            {/* Step 3: Relationship Building */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Step 3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Relationship Building</h3>
                <p className="text-gray-700 leading-relaxed">
                  Over the following weeks, the customer receives carefully timed email campaigns featuring seasonal menu highlights, chef stories, and behind-the-scenes content that builds emotional connection. SMS messages alert them to flash sales and special events that match their dining preferences.
                </p>
              </div>
            </div>

            {/* Step 4: Loyalty Development */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Step 4</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Loyalty Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  The system tracks the customer's dining patterns and preferences, sending birthday celebrations, anniversary acknowledgments, and personalized recommendations. After each visit, they receive review requests at optimal times, helping build your online reputation while reinforcing their positive experience. <Link to="/articles/turning-angry-customers-into-advocates" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">Learn how to turn complaints into loyalty →</Link>
                </p>
              </div>
            </div>

            {/* Step 5: Retention and Recovery */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 bg-red-500 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">Step 5</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Retention and Recovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  If the customer hasn't visited in 30 days, automated win-back campaigns activate with special offers and updates on new menu items. The system works continuously to maintain engagement and prevent customer churn.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Results Summary */}
          <div className="mt-20 text-center bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-xl">
            <h4 className="text-3xl font-bold mb-6 text-gray-900">
              The Result: A Customer for Life
            </h4>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Through this integrated approach, a single phone call becomes the start of a long-term relationship that drives consistent revenue, positive reviews, and word-of-mouth referrals. <Link to="/articles/building-five-star-reputation" className="text-green-600 hover:text-green-700 underline transition-colors">Learn how to build a five-star reputation →</Link>
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">5X</div>
                <div className="text-sm text-gray-600">Higher customer lifetime value</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">Increase in repeat visits</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Automated touchpoints</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Integration and Intelligence - Redesigned */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-purple-200 shadow-sm text-purple-700 mb-6">
              <BarChart2 className="w-4 h-4 mr-2" />
              AI-Powered Intelligence Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Data Integration &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                Intelligence
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              All four marketing channels share customer data and insights, creating a comprehensive view of each guest's preferences, behaviors, and engagement patterns that gets smarter with every interaction. <Link to="/resources" className="text-purple-600 hover:text-purple-700 underline transition-colors">Explore all our resources →</Link>
            </p>
          </div>

          {/* Intelligence Features - Creative Layout */}
          <div className="space-y-8">
            
            {/* Feature 1: Unified Customer Profiles - Large Feature Card */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 overflow-hidden relative">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-indigo-50 opacity-70"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full opacity-30 group-hover:-rotate-12 transition-transform duration-700"></div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Visual Element */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      {/* Floating Data Points */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">360° Customer View</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unified Customer Profiles</h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Every interaction across phone, SMS, email, and reviews contributes to a complete customer profile that informs future communications and creates truly personalized experiences. <Link to="/articles/why-best-customers-never-leave-reviews" className="text-purple-600 hover:text-purple-700 underline transition-colors">Discover why your best customers stay silent →</Link>
                    </p>
                    
                    {/* Data Points Visualization */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-purple-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <div className="text-xs text-gray-600">Data Sync</div>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-indigo-600">Real-time</div>
                        <div className="text-xs text-gray-600">Updates</div>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-pink-600">Smart</div>
                        <div className="text-xs text-gray-600">Insights</div>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-cyan-600">Auto</div>
                        <div className="text-xs text-gray-600">Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features 2 & 3: Side by Side Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Cross-Channel Campaigns */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-70"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200 to-transparent rounded-full opacity-50 transform translate-x-6 -translate-y-6"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-2">Multi-Channel</span>
                      <h3 className="text-2xl font-bold text-gray-900">Cross-Channel Campaigns</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A customer who calls about catering automatically receives follow-up emails with catering menus and SMS reminders about upcoming events, creating seamless touchpoints.
                  </p>
                  
                  {/* Flow Visualization */}
                  <div className="flex items-center justify-between bg-orange-50 p-4 rounded-xl">
                    <div className="text-center">
                      <Phone className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Call</div>
                    </div>
                    <div className="text-orange-400">→</div>
                    <div className="text-center">
                      <Mail className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Email</div>
                    </div>
                    <div className="text-orange-400">→</div>
                    <div className="text-center">
                      <Smartphone className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">SMS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Behavioral Triggers */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-teal-50 opacity-70"></div>
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-200 to-transparent rounded-full opacity-50 transform -translate-x-6 -translate-y-6"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-2">Smart Triggers</span>
                      <h3 className="text-2xl font-bold text-gray-900">Behavioral Triggers</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The system automatically responds to customer actions—a reservation cancellation triggers a special offer, while a positive review prompts a VIP program invitation.
                  </p>
                  
                  {/* Trigger Examples */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">Cancellation → Special Offer</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-sm text-gray-700">5-Star Review → VIP Invite</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-sm text-gray-700">No Visit 30 Days → Win-back</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

            {/* Feature 4: Performance Optimization - Bottom Feature Card */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-70"></div>
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-l from-blue-200 to-transparent rounded-full opacity-30 transform translate-x-8 group-hover:translate-x-4 transition-transform duration-700"></div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left lg:order-1">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">Analytics & Optimization</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Integrated analytics show which channels and messages drive the most revenue, allowing continuous refinement of your marketing strategy based on real results that matter.
                    </p>
                    
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl text-center">
                        <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-blue-600">ROI</div>
                        <div className="text-xs text-gray-600">Tracking</div>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl text-center">
                        <BarChart2 className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-cyan-600">Analytics</div>
                        <div className="text-xs text-gray-600">Real-time</div>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl text-center">
                        <Target className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-indigo-600">A/B Test</div>
                        <div className="text-xs text-gray-600">Auto</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="flex-shrink-0 lg:order-2">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <BarChart2 className="w-12 h-12 text-white" />
                      </div>
                      {/* Animated Chart Lines */}
                      <div className="absolute -top-3 -right-3 w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-3 -left-3 w-6 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 -left-4 w-4 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary Card */}
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-white/50 max-w-5xl mx-auto relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-indigo-50 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">The Power of Connected Intelligence</h3>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  When all your marketing channels work together with shared intelligence, every customer interaction becomes an opportunity to learn, adapt, and deliver more value.
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
                    <div className="text-sm text-gray-700 font-medium">Channels Connected</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border border-indigo-200">
                    <div className="text-2xl font-bold text-indigo-600 mb-2">∞</div>
                    <div className="text-sm text-gray-700 font-medium">Learning Capacity</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200">
                    <div className="text-2xl font-bold text-pink-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-700 font-medium">Intelligence Active</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl border border-cyan-200">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">1</div>
                    <div className="text-sm text-gray-700 font-medium">Unified Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <DemoBookingForm />
      {/* Optionally, add an ArticlesSection or CTA here */}
      <ArticlesSection />
    </div>
  );
} 