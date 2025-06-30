import React from 'react';
import Header from './Header';
import ArticlesSection from './ArticlesSection';
import { Calendar } from './ui/calendar';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-20">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 mb-6 leading-tight">
              Complete <span className="text-coral-500">AI Marketing Automation</span> for Restaurants
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
              Set it up once, then watch your customer base grow automatically while you focus on running your restaurant
            </h2>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-4 rounded-lg transition-all hover:scale-105 w-full sm:w-auto">
                Book Strategy Call
              </button>
            </div>
          </div>
          {/* Right: Visual */}
          <div className="flex-1 flex items-center justify-center w-full max-w-lg mb-8 md:mb-0">
            {/* Replace with real dashboard/restaurant image or animation */}
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-coral-100 to-coral-200 rounded-3xl shadow-lg flex items-center justify-center">
              <span className="text-4xl text-coral-500 font-bold opacity-60">[AI Dashboard Visual]</span>
            </div>
          </div>
        </section>
        {/* Problem Agitation Section */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Every Day Without AI Marketing Costs You Money</h2>
            <p className="text-xl text-gray-700 mb-4">While you're busy running your restaurant, your competitors are capturing customers, reviews, and revenue that could be yours.</p>
            <p className="text-lg text-coral-500 font-semibold">Here's what most restaurants lose every month without automation:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Missed Calls */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-coral-500">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#FDE68A"/><path d="M28 24v3a2 2 0 0 1-2 2c-7.18 0-13-5.82-13-13a2 2 0 0 1 2-2h3a1 1 0 0 1 1 0.76l1.1 4.4a1 1 0 0 1-0.29 0.98l-1.7 1.7a10.97 10.97 0 0 0 4.95 4.95l1.7-1.7a1 1 0 0 1 0.98-0.29l4.4 1.1a1 1 0 0 1 0.76 1v3z" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3 Missed Calls/Day</h3>
              <p className="text-lg text-gray-600 mb-2">= <span className="font-bold text-coral-500">$2,100</span> lost monthly</p>
              <p className="text-sm text-gray-500">Potential customers call, no one answers, and they go to your competitor instead.</p>
            </div>
            {/* Fewer Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-success-green">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#A7F3D0"/><path d="M20 28l-6.16 3.24 1.18-6.88L10 18.76l6.92-1L20 11.5l3.08 6.26 6.92 1-5.02 4.6 1.18 6.88z" stroke="#059669" strokeWidth="2" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2 Fewer Reviews/Month</h3>
              <p className="text-lg text-gray-600 mb-2">= <span className="font-bold text-success-green">$3,400</span> lost monthly</p>
              <p className="text-sm text-gray-500">Fewer reviews means lower ranking and less trust—customers choose others.</p>
            </div>
            {/* Lost Retention */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-navy-900">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#DBEAFE"/><path d="M20 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0 0v-4m0 0l3 3m-3-3l-3 3" stroke="#1A2332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">20% Customers Don't Return</h3>
              <p className="text-lg text-gray-600 mb-2">= <span className="font-bold text-navy-900">$4,200</span> lost monthly</p>
              <p className="text-sm text-gray-500">No follow-up means lost loyalty and missed repeat business.</p>
            </div>
          </div>
          {/* Urgency Statement */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-lg text-gray-700 font-semibold">Every day you wait, your competitors get further ahead. Don't let another month go by leaving money on the table.</p>
          </div>
          {/* Revenue Loss Calculator Placeholder */}
          <div className="max-w-3xl mx-auto bg-coral-50 border-2 border-coral-100 rounded-2xl p-8 text-center mt-8">
            <p className="text-xl text-coral-500 font-bold mb-2">[Interactive Revenue Loss Calculator Coming Soon]</p>
            <p className="text-gray-600">Enter your restaurant details to see your exact monthly losses and how much you could recover with AI marketing.</p>
          </div>
        </section>
        {/* Solution Overview Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-cream-50">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">The First AI Marketing System Built Specifically for Restaurants</h2>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Bot & Table isn't just another marketing tool—it's a complete, intelligent system designed from the ground up for restaurant owners. We automate the marketing, so you can focus on hospitality and growth.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto mb-12 items-center justify-center">
            {/* Benefits List */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-coral-100 rounded-full p-3 flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#FF6B47" fillOpacity=".15"/><path d="M8 14l4 4 8-8" stroke="#FF6B47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">No Time Commitment</h3>
                  <p className="text-gray-600 text-base">Set it up once—our AI handles everything, so you can focus on your guests.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-success-green/20 rounded-full p-3 flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#48BB78" fillOpacity=".15"/><path d="M14 8v8m0 0l4-4m-4 4l-4-4" stroke="#48BB78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Lower Costs</h3>
                  <p className="text-gray-600 text-base">No expensive retainers or staff—just one simple monthly investment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-navy-900/10 rounded-full p-3 flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#1A2332" fillOpacity=".10"/><path d="M10 18l4-8 4 8" stroke="#1A2332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Restaurant Expertise</h3>
                  <p className="text-gray-600 text-base">Built by restaurant pros, for restaurant pros. We know your challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-coral-500/10 rounded-full p-3 flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#FF6B47" fillOpacity=".10"/><path d="M14 8v12" stroke="#FF6B47" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="24" r="1.5" fill="#FF6B47"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">24/7 Automation</h3>
                  <p className="text-gray-600 text-base">Your marketing never sleeps—our AI works around the clock to grow your business.</p>
                </div>
              </div>
            </div>
            {/* Comparison Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border flex flex-col items-center justify-center max-w-md mx-auto">
              <h4 className="text-xl font-bold text-navy-900 mb-4">AI Automation vs. Traditional Agencies</h4>
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold text-gray-700">Setup Time</span>
                  <span className="text-success-green font-bold">1 hour</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 line-through">Weeks</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold text-gray-700">Ongoing Work</span>
                  <span className="text-success-green font-bold">None</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 line-through">Constant</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold text-gray-700">Cost</span>
                  <span className="text-success-green font-bold">Low</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 line-through">High</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold text-gray-700">Results</span>
                  <span className="text-success-green font-bold">Automated</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 line-through">Manual</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Breakdown Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Every Service Your Restaurant Needs to Dominate Your Local Market</h2>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">Our AI system covers every critical area of restaurant marketing—automated, integrated, and proven to drive results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Service 1: AI Review Generation & Management */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#FFEDD5"/><path d="M20 28l-6.16 3.24 1.18-6.88L10 18.76l6.92-1L20 11.5l3.08 6.26 6.92 1-5.02 4.6 1.18 6.88z" stroke="#FF6B47" strokeWidth="2.5" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI Review Generation & Management</h3>
              <p className="text-base text-gray-600 mb-2">44 more Google reviews monthly</p>
              <p className="text-lg font-bold text-coral-500 mb-4">$3,200 monthly increase</p>
              <button className="mt-auto bg-coral-500/10 text-coral-500 font-semibold px-6 py-2 rounded-lg hover:bg-coral-500 hover:text-white transition-colors">Learn More</button>
            </div>
            {/* Service 2: AI Phone Assistant & Call Handling */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#DBEAFE"/><path d="M28 24v3a2 2 0 0 1-2 2c-7.18 0-13-5.82-13-13a2 2 0 0 1 2-2h3a1 1 0 0 1 1 0.76l1.1 4.4a1 1 0 0 1-0.29 0.98l-1.7 1.7a10.97 10.97 0 0 0 4.95 4.95l1.7-1.7a1 1 0 0 1 0.98-0.29l4.4 1.1a1 1 0 0 1 0.76 1v3z" stroke="#1A2332" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI Phone Assistant & Call Handling</h3>
              <p className="text-base text-gray-600 mb-2">24/7 call handling</p>
              <p className="text-lg font-bold text-navy-900 mb-4">$7,200 monthly from captured calls</p>
              <button className="mt-auto bg-coral-500/10 text-coral-500 font-semibold px-6 py-2 rounded-lg hover:bg-coral-500 hover:text-white transition-colors">Learn More</button>
            </div>
            {/* Service 3: Personalized Customer Retention Campaigns */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#D1FAE5"/><path d="M20 28s-8-4.5-8-10a8 8 0 0 1 16 0c0 5.5-8 10-8 10z" stroke="#48BB78" strokeWidth="2.5" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Customer Retention Campaigns</h3>
              <p className="text-base text-gray-600 mb-2">34% increase in return customers</p>
              <p className="text-lg font-bold text-success-green mb-4">$5,100 monthly repeat business</p>
              <button className="mt-auto bg-coral-500/10 text-coral-500 font-semibold px-6 py-2 rounded-lg hover:bg-coral-500 hover:text-white transition-colors">Learn More</button>
            </div>
            {/* Service 4: Local SEO & Online Presence Optimization */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#F8FAFC"/><path d="M17 23l-4-4m0 0l4-4m-4 4h14" stroke="#FF6B47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="28" cy="20" r="2" fill="#FF6B47"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Local SEO & Online Presence Optimization</h3>
              <p className="text-base text-gray-600 mb-2">67% improvement in search visibility</p>
              <p className="text-lg font-bold text-coral-500 mb-4">$4,300 monthly from online discovery</p>
              <button className="mt-auto bg-coral-500/10 text-coral-500 font-semibold px-6 py-2 rounded-lg hover:bg-coral-500 hover:text-white transition-colors">Learn More</button>
            </div>
          </div>
          {/* Placeholder for modal overlays or expandable details */}
          <div className="max-w-2xl mx-auto mt-12 text-center text-gray-400">
            [Service details modal overlays coming soon]
          </div>
        </section>
        {/* How It Works Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-cream-50">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Set Up Once, Grow Forever</h2>
            <p className="text-xl text-gray-700 mb-4 max-w-2xl mx-auto">Getting started is simple. Our process is designed to get you results fast—so you can focus on running your restaurant, not your marketing.</p>
          </div>
          {/* Steps Timeline */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto mb-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="bg-success-green text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-2 border-success-green">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">15-Minute Strategy Call</h3>
              <p className="text-base text-gray-600">We learn about your restaurant, goals, and local market to craft your custom AI plan.</p>
            </div>
            {/* Connector */}
            <div className="hidden md:block h-1 w-12 bg-coral-200 rounded-full" />
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="bg-success-green text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-2 border-success-green">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom AI Setup</h3>
              <p className="text-base text-gray-600">We configure your AI marketing system for your restaurant and local audience—no tech skills needed.</p>
            </div>
            {/* Connector */}
            <div className="hidden md:block h-1 w-12 bg-coral-200 rounded-full" />
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="bg-success-green text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-2 border-success-green">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Growth</h3>
              <p className="text-base text-gray-600">Your AI works around the clock to bring in new customers, reviews, and repeat business—automatically.</p>
            </div>
          </div>
        </section>
        <ArticlesSection />

        {/* Book a Strategy Call Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-cream-50 flex flex-col items-center">
          <div className="max-w-2xl w-full mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Book a Free Strategy Call</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto">Pick a time to meet with our team and discover how AI can grow your restaurant—no pressure, just real value.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-lg mx-auto">
            <Calendar />
            <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
              <select className="flex-1 border rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select a time</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-4 rounded-lg transition-all hover:scale-105 w-full sm:w-auto mt-2 sm:mt-0">
                Book Strategy Call
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No spam, no obligation—just actionable insights for your restaurant.</p>
          </div>
        </section>
      </main>
      {/* TODO: Add Footer if not globally present */}
    </div>
  );
};

export default SolutionsPage; 