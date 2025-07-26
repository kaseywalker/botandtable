import React from 'react';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { CheckCircle, Zap, Users, MessageCircle, TrendingUp, Star, BarChart2, Layers, Mail, Smartphone, Calendar, DollarSign, Phone } from 'lucide-react';
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
                    <span className="font-semibold" style={{ color: coral }}> missed phone calls during busy periods</span>, 
                    <span className="font-semibold text-orange-600"> inconsistent follow-up with guests after they dine</span>, and 
                    <span className="font-semibold text-red-600"> the inability to stay top-of-mind between visits</span>. 
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
                    "The restaurant industry has fundamentally changed. Today's successful restaurants don't just serve great food—they create seamless, personalized experiences that begin the moment a customer discovers them and continue long after they leave."
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
                Bot and Table's Personalized Marketing on Autopilot platform revolutionizes how restaurants engage with their guests by creating an intelligent, interconnected system that works around the clock. Our AI-powered platform seamlessly integrates four essential marketing channels—phone answering, SMS marketing, email campaigns, and reputation management—into one cohesive system that delivers the right message to the right guest at the right time, automatically.
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

      {/* Four Pillars Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Pillar 1: AI Phone Answering */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>AI Phone Answering: Never Miss Another Revenue Opportunity</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Your phone line is your restaurant's most valuable sales channel, but only if someone answers it. Bot and Table's AI Phone Answering system ensures you capture 100% of incoming calls, even during your busiest rush periods. When customers call, they're greeted by professional, human-like AI that provides restaurant information, answers menu questions, and instantly texts them links to your online ordering or reservation systems.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Answer 100% of calls instantly, even during peak hours</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Generate revenue 24/7 with after-hours ordering and reservations</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Eliminate order errors through seamless online system integration</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Free staff to focus on exceptional in-person service</li>
            </ul>
          </div>
          {/* Pillar 2: SMS Marketing */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>SMS Marketing: Instant Communication That Drives Immediate Action</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Text messages have a 98% open rate and are read within 3 minutes of delivery, making SMS the most powerful channel for driving immediate restaurant traffic. Bot and Table's SMS marketing platform helps you build a subscriber list of engaged customers and automatically sends targeted messages that fill empty tables and boost revenue during slow periods.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />98% open rate ensures your messages are seen immediately</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />$36 return for every $1 spent on SMS campaigns</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Reduce no-shows by 60% with automated reservation reminders</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Build customer loyalty through personalized engagement</li>
            </ul>
          </div>
          {/* Pillar 3: Email Marketing */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>Email Marketing: Build Lasting Relationships Through Storytelling</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              While SMS drives immediate action, email marketing builds the deep, lasting relationships that create lifelong customers. Bot and Table's email platform helps you craft compelling campaigns that showcase your restaurant's story, highlight seasonal menus, and create emotional connections that go far beyond just food service.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />$36 return for every $1 spent on email campaigns</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />40x more effective than social media for building repeat business</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />17% higher average order value from email-driven visits</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Automated sequences that nurture relationships without manual effort</li>
            </ul>
          </div>
          {/* Pillar 4: Google Reviews Management */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>Google Reviews Management: Protect and Enhance Your Online Reputation</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Online reviews directly impact your restaurant's success, with 93% of customers reading reviews before choosing where to dine. Bot and Table's reputation management system automatically requests reviews from satisfied customers while helping you address concerns before they become negative public feedback.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Increase positive review volume by 300% through strategic timing</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Address negative feedback privately before it becomes public</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Improve overall rating and search visibility</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Build trust with potential customers through authentic testimonials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How the Integrated System Works Together */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
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
                  The system tracks the customer's dining patterns and preferences, sending birthday celebrations, anniversary acknowledgments, and personalized recommendations. After each visit, they receive review requests at optimal times, helping build your online reputation while reinforcing their positive experience.
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
              Through this integrated approach, a single phone call becomes the start of a long-term relationship that drives consistent revenue, positive reviews, and word-of-mouth referrals.
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

      {/* Data Integration and Intelligence */}
      <section className="w-full py-16 px-4">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: blue }}>
            Data Integration and Intelligence
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            All four marketing channels share customer data and insights, creating a comprehensive view of each guest's preferences, behaviors, and engagement patterns. This integration enables:
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Unified Customer Profiles
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              Every interaction across phone, SMS, email, and reviews contributes to a complete customer profile that informs future communications and personalization strategies.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Cross-Channel Campaigns
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              A customer who calls about catering might receive follow-up emails with catering menus and SMS reminders about upcoming events, creating multiple touchpoints that reinforce your message.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Behavioral Triggers
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              The system automatically responds to customer actions—a reservation cancellation might trigger a special offer, while a positive review could prompt an invitation to join your VIP program.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Performance Optimization
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              Integrated analytics show which channels and messages drive the most revenue, allowing continuous refinement of your marketing strategy based on real results.
            </p>
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