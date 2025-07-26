import React from 'react';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Mail, Users, Zap, BarChart2, Layers, Star, Calendar, MessageSquare, TrendingUp, Phone } from 'lucide-react';
import ArticlesSection from './ArticlesSection';
import DemoBookingForm from './ui/DemoBookingForm';

const coral = '#FF6B47';
const blue = '#1e293b';
const gray = '#f7f7fa';

function GoogleEmailMockup() {
  return (
    <div className="relative w-[800px] rounded-2xl bg-white shadow-2xl border border-gray-200 flex flex-col overflow-y-auto">
      {/* Gmail header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#f5f5f5] border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
        </div>
        <div className="text-xs text-gray-500 font-semibold">Gmail</div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
        </div>
      </div>
      {/* Email content */}
      <div className="flex flex-col p-12 gap-6 bg-white">
        <div className="flex items-center gap-3 mb-2">
          <img src="https://ui-avatars.com/api/?name=Leo%27s+Pizza&background=FF6B47&color=fff&size=128" alt="Leo's Pizza Logo" className="w-10 h-10 rounded-full border-2 border-white shadow" />
          <div>
            <div className="font-semibold text-base text-gray-900">Leo's Pizza <span className="text-xs text-gray-400">&lt;info@leospizza.com&gt;</span></div>
            <div className="text-xs text-gray-500">to me</div>
          </div>
        </div>
        <div className="text-xs text-gray-400 mb-2">Fri, Jul 12, 2024, 10:02 AM</div>
        <div className="rounded-xl overflow-hidden mb-3">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" alt="Pizza Special" className="w-full h-40 object-cover" />
        </div>
        <div className="text-lg font-bold text-gray-900 mb-1">🍕 Friday Feast: Free Appetizer with Any Large Pizza!</div>
        <div className="text-gray-700 mb-2">Hi Sarah,<br />
          Celebrate Friday with us! Show this email at Leo's Pizza today and enjoy a free garlic bread appetizer with any large pizza order. Offer valid 2–5pm only.<br /><br />
          <span className="font-semibold text-coral-600">Click below to reserve your table now!</span>
        </div>
        <Button className="w-full font-bold py-2 rounded-lg shadow" style={{ background: coral, color: '#fff' }}>
          Reserve Table
        </Button>
      </div>
    </div>
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
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
            <div className="flex flex-col justify-start gap-4 pt-0">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wide">Email Marketing</span>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-left font-regular" style={{ color: blue }}>
                  Turn Every Email Into Restaurant Revenue
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-left">
                  Build lasting relationships with your customers and drive consistent revenue through personalized email campaigns that deliver $36 for every $1 spent.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call
                </Button>
                <Button size="lg" className="gap-4" style={{ background: coral, color: '#fff' }}>
                  Book Your Revenue Growth Strategy Call
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <GoogleEmailMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: blue }}>
            Why Email Marketing Works for Restaurants
          </h2>
        </div>
        {/* Desktop bento grid */}
        <div className="hidden md:grid gap-8 max-w-6xl mx-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, minmax(180px, auto))',
            gridTemplateAreas: `
              'main main side1'
              'main main side2'
              'wide wide side3'
            `
          }}
        >
          {/* Main Card: ROI */}
          <div style={{ gridArea: 'main' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
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
            <EmailPreviewMockup />
            <EmailPreviewMockup2 />
          </div>
          {/* Side Card 1 */}
          <div style={{ gridArea: 'side1' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2" style={{ color: blue }}>
              Convert First-Time Guests Into Loyal Regulars
            </h3>
            <div className="text-coral-600 font-semibold mb-2">40x More Effective Than Social</div>
            <p className="text-gray-700 mb-4 text-lg">Email is 40x more effective at building repeat business than social media. Automated campaigns nurture guests into regulars.</p>
          </div>
          {/* Side Card 2 */}
          <div style={{ gridArea: 'side2' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2" style={{ color: blue }}>
              Drive Higher Order Values
            </h3>
            <div className="text-coral-600 font-semibold mb-2">17% Higher Order Value</div>
            <p className="text-gray-700 mb-4 text-lg">17% higher average order value from email-driven purchases. Upsell, cross-sell, and promote specials with every send.</p>
          </div>
          {/* Wide Card (bottom left) */}
          <div style={{ gridArea: 'wide' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2" style={{ color: blue }}>
              Build Authentic Relationships
            </h3>
            <div className="text-coral-600 font-semibold mb-2">75% Prefer Email from Restaurants</div>
            <p className="text-gray-700 mb-4 text-lg">75% of customers prefer email communication from restaurant brands. Tell your story, share your values, and connect deeply.</p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm">
                  <svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Share your restaurant’s story and values
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm">
                  <svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Build trust with regular, authentic updates
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm">
                  <svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Highlight customer stories and testimonials
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm">
                  <svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Invite feedback and foster two-way communication
              </li>
            </ul>
          </div>
          {/* Side Card 3 (bottom right) */}
          <div style={{ gridArea: 'side3' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2" style={{ color: blue }}>
              Automated, Personalized Campaigns
            </h3>
            <div className="text-coral-600 font-semibold mb-2">Segmentation & Automation</div>
            <p className="text-gray-700 mb-4 text-lg">Segment your audience and send the right message at the right time—automatically. Save time and maximize results.</p>
          </div>
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

      {/* Metrics/Proof Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8" style={{ color: blue }}>Proof That Email Marketing Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl shadow-lg p-8 border" style={{ backgroundColor: blue, borderColor: blue }}>
              <div className="text-4xl font-bold text-white mb-2">$36</div>
              <div className="text-white">Average ROI per $1 spent</div>
            </div>
            <div className="rounded-2xl shadow-lg p-8 border" style={{ backgroundColor: blue, borderColor: blue }}>
              <div className="text-4xl font-bold text-white mb-2">4B+</div>
              <div className="text-white">Global email users</div>
            </div>
            <div className="rounded-2xl shadow-lg p-8 border" style={{ backgroundColor: blue, borderColor: blue }}>
              <div className="text-4xl font-bold text-white mb-2">21%</div>
              <div className="text-white">Average Open Rate</div>
              <div className="text-xs text-white mt-1">Industry-leading engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 relative overflow-hidden">
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
              <Mail className="w-4 h-4 mr-2" />
              Professional Email Platform
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: blue }}>
              Why Top Restaurants Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Bot & Table
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our restaurant-specific email platform delivers features that generic email services simply can't match.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {[
              {
                title: 'Smart Segmentation',
                subtitle: 'Automatically Target the Right Customers',
                description: 'Group guests by visit frequency, spending patterns, and dining preferences for laser-focused campaigns that convert.',
                features: [
                  'VIP customers get exclusive previews',
                  'New guests receive welcome sequences',
                  'Lapsed diners get win-back offers',
                  'Birthday/anniversary auto-targeting'
                ],
                                 mockup: {
                   type: 'segments',
                   data: [
                     { label: 'VIP Diners', count: '342', color: 'from-orange-500 to-red-500' },
                     { label: 'New Customers', count: '128', color: 'from-red-500 to-orange-600' },
                     { label: 'Win-Back', count: '89', color: 'from-orange-600 to-red-600' },
                     { label: 'Birthday Club', count: '67', color: 'from-red-400 to-orange-500' }
                   ]
                 }
              },
              {
                title: 'Automated Campaign Triggers',
                subtitle: 'Set It Once, Revenue Forever',
                description: 'Hands-free email sequences that nurture relationships and drive repeat business while you focus on service.',
                features: [
                  'Welcome series for new subscribers',
                  'Birthday & anniversary campaigns',
                  'Post-visit feedback requests',
                  'Win-back sequences for inactive guests'
                ],
                mockup: {
                  type: 'automation',
                  flow: [
                    { trigger: 'Guest Visits', action: 'Send Thank You', delay: '2 hours' },
                    { trigger: 'No Visit 30 Days', action: 'Win-Back Email', delay: '30 days' },
                    { trigger: 'Birthday Detected', action: 'Special Offer', delay: '1 week before' }
                  ]
                }
              },
              {
                title: 'Real-Time Analytics Dashboard',
                subtitle: 'See Your Revenue Growth in Real-Time',
                description: 'Track every dollar generated, every email opened, and every customer converted through our intuitive dashboard.',
                features: [
                  'Revenue attribution per campaign',
                  'Open rates and engagement metrics',
                  'Customer lifetime value tracking',
                  'ROI calculations and reporting'
                ],
                mockup: {
                  type: 'dashboard',
                  metrics: [
                    { label: 'Revenue Generated', value: '$12,840', trend: '+24%' },
                    { label: 'Open Rate', value: '68%', trend: '+12%' },
                    { label: 'Click Rate', value: '24%', trend: '+8%' },
                    { label: 'Reservations', value: '156', trend: '+32%' }
                  ]
                }
              },
              {
                title: 'Seamless Integrations',
                subtitle: 'Connect Everything, Automate Everything',
                description: 'Your POS, reservations, reviews, and loyalty programs work together to create the ultimate marketing engine.',
                features: [
                  'POS system data synchronization',
                  'Reservation platform integration',
                  'Review system automation',
                  'Loyalty program connectivity'
                ],
                mockup: {
                  type: 'integrations',
                  systems: [
                    { name: 'Square POS', status: 'connected', icon: '💳' },
                    { name: 'OpenTable', status: 'connected', icon: '📅' },
                    { name: 'Google Reviews', status: 'connected', icon: '⭐' },
                    { name: 'Loyalty Program', status: 'connected', icon: '🎁' }
                  ]
                }
              }
            ].map((feature, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`lg:col-span-2 ${i < 3 ? 'mb-16' : ''}`}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="space-y-4">
                        <h4 className="text-3xl font-bold" style={{ color: blue }}>{feature.title}</h4>
                        <p className="text-orange-600 font-semibold text-lg">{feature.subtitle}</p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Mockup */}
                    <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl relative">
                        {feature.mockup.type === 'segments' && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 mb-6">
                              <Users className="w-4 h-4" />
                              <span>Customer Segments</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {feature.mockup.data.map((segment, idx) => (
                                <div key={idx} className={`bg-gradient-to-r ${segment.color} p-4 rounded-xl text-white`}>
                                  <div className="text-2xl font-bold">{segment.count}</div>
                                  <div className="text-sm opacity-90">{segment.label}</div>
                                </div>
                              ))}
                            </div>
                            <div className="text-center text-sm text-gray-600 mt-4">
                              Auto-segmented from dining data
                            </div>
                          </div>
                        )}

                        {feature.mockup.type === 'automation' && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 mb-6">
                              <Zap className="w-4 h-4" />
                              <span>Automation Flow</span>
                            </div>
                            {feature.mockup.flow.map((step, idx) => (
                              <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-gray-800">{step.trigger}</div>
                                  <div className="text-sm text-gray-600">{step.action} • {step.delay}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {feature.mockup.type === 'dashboard' && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 mb-6">
                              <BarChart2 className="w-4 h-4" />
                              <span>Performance Dashboard</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {feature.mockup.metrics.map((metric, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border">
                                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                                  <div className="text-sm text-gray-600">{metric.label}</div>
                                  <div className="text-xs text-green-600 font-medium">{metric.trend}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {feature.mockup.type === 'integrations' && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600 mb-6">
                              <Layers className="w-4 h-4" />
                              <span>Connected Systems</span>
                            </div>
                            {feature.mockup.systems.map((system, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl">{system.icon}</span>
                                  <span className="font-medium text-gray-800">{system.name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-green-600 capitalize">{system.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                                                 {/* Floating elements */}
                         <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
                         <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500 rounded-full opacity-30"></div>
                      </div>
                    </div>
                  </div>

                                     {/* Feature Connector */}
                   {i < 3 && (
                     <div className="flex justify-center">
                       <div className="w-px h-12 bg-gradient-to-b from-orange-300 to-red-300 opacity-50"></div>
                     </div>
                   )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Proven Email Campaigns
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: blue }}>
              Revenue-Generating{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Email Campaigns
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              See exactly how each campaign type works and drives measurable results for your restaurant.
            </p>
          </div>

          {/* Campaign Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
                             {
                 title: 'Welcome Series',
                 subtitle: 'First Impression That Converts',
                 description: 'Turn new subscribers into loyal customers with a strategic welcome sequence that builds excitement and drives their first visit.',
                 icon: <Star className="w-8 h-8" />,
                 color: 'from-orange-500 to-red-500',
                stats: { opens: '89%', clicks: '34%', conversions: '28%' },
                preview: {
                  subject: '🎉 Welcome to Bella\'s Kitchen Family!',
                  snippet: 'Your exclusive 20% welcome offer is waiting...',
                  cta: 'Claim Your Welcome Offer'
                },
                sequence: [
                  { day: 'Day 1', title: 'Welcome + 20% Off', description: 'Warm greeting with first-visit incentive' },
                  { day: 'Day 3', title: 'Menu Highlights', description: 'Showcase signature dishes and chef specialties' },
                  { day: 'Day 7', title: 'Customer Stories', description: 'Social proof and community feeling' }
                ]
              },
                             {
                 title: 'Birthday & Anniversary',
                 subtitle: 'Celebrate to Generate Revenue',
                 description: 'Automated campaigns that celebrate your customers\' special moments while driving high-value visits during emotional peak times.',
                 icon: <Calendar className="w-8 h-8" />,
                 color: 'from-red-500 to-orange-600',
                stats: { opens: '94%', clicks: '52%', conversions: '41%' },
                preview: {
                  subject: '🎂 Happy Birthday Sarah! Your special treat awaits',
                  snippet: 'Celebrate with us - complimentary dessert & 25% off...',
                  cta: 'Book Birthday Celebration'
                },
                sequence: [
                  { day: '1 Week Before', title: 'Birthday Preview', description: 'Build anticipation for upcoming celebration' },
                  { day: 'Birthday', title: 'Special Day Offer', description: 'Complimentary dessert + discount offer' },
                  { day: '3 Days After', title: 'Thank You Follow-up', description: 'Appreciation + next visit incentive' }
                ]
              },
                             {
                 title: 'Win-Back & Reactivation',
                 subtitle: 'Recover Lost Revenue',
                 description: 'Strategically re-engage inactive customers with compelling offers that remind them why they loved dining with you.',
                 icon: <TrendingUp className="w-8 h-8" />,
                 color: 'from-orange-600 to-red-600',
                stats: { opens: '76%', clicks: '31%', conversions: '23%' },
                preview: {
                  subject: 'We miss you at Mario\'s! Here\'s 30% off your return',
                  snippet: 'It\'s been a while... Your favorite table is waiting...',
                  cta: 'Welcome Me Back'
                },
                sequence: [
                  { day: '30 Days Inactive', title: 'We Miss You', description: 'Gentle reminder with moderate offer' },
                  { day: '60 Days Inactive', title: 'Stronger Incentive', description: 'Higher discount + limited time urgency' },
                  { day: '90 Days Inactive', title: 'Final Attempt', description: 'Maximum offer before removing from list' }
                ]
              }
            ].map((campaign, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${campaign.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {campaign.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{campaign.title}</h4>
                      <p className="text-white/90">{campaign.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Performance Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{campaign.stats.opens}</div>
                      <div className="text-xs opacity-80">Open Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{campaign.stats.clicks}</div>
                      <div className="text-xs opacity-80">Click Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{campaign.stats.conversions}</div>
                      <div className="text-xs opacity-80">Conversion</div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-700 leading-relaxed">{campaign.description}</p>

                  {/* Email Preview */}
                  <div className="bg-gray-50 rounded-xl p-4 border">
                    <div className="text-xs text-gray-500 mb-2">Email Preview</div>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 text-sm">{campaign.preview.subject}</div>
                      <div className="text-gray-600 text-sm">{campaign.preview.snippet}</div>
                      <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                        {campaign.preview.cta}
                      </div>
                    </div>
                  </div>

                  {/* Campaign Sequence */}
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-3">Campaign Sequence</div>
                    <div className="space-y-3">
                      {campaign.sequence.map((step, idx) => (
                        <div key={idx} className="flex space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 text-sm">{step.day}: {step.title}</div>
                            <div className="text-gray-600 text-xs">{step.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Value Proposition */}
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
            <h4 className="text-2xl font-bold mb-4" style={{ color: blue }}>
              Every Campaign is Designed for Restaurant Success
            </h4>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
              Unlike generic email tools, our campaigns are specifically crafted for the restaurant industry with proven templates, timing, and messaging that drives real results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { metric: '$36', label: 'ROI per $1 spent' },
                { metric: '68%', label: 'Average open rate' },
                { metric: '24%', label: 'Average click rate' },
                { metric: '3.2X', label: 'Revenue increase' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold border border-gray-200 shadow-sm text-gray-700 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Simple Implementation Process
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: blue }}>
              From Setup to Success in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                30 Days
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our proven implementation process gets your restaurant email marketing from zero to revenue-generating in just weeks.
            </p>
          </div>

                     {/* Implementation Timeline */}
           <div className="relative">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[{
                step: '01',
                title: 'Strategy Call',
                duration: 'Day 1',
                desc: 'Comprehensive consultation to understand your goals, current systems, and customer base.',
                icon: <Phone className="w-6 h-6" />,
                highlights: ['Goal assessment', 'System audit', 'Strategy planning']
              }, {
                step: '02',
                title: 'Onboarding & Setup',
                duration: 'Days 2-7',
                desc: 'Complete platform setup with list import, automation configuration, and system integrations.',
                icon: <Zap className="w-6 h-6" />,
                highlights: ['Data migration', 'Automation setup', 'Integration testing']
              }, {
                step: '03',
                title: 'Launch Campaigns',
                duration: 'Days 8-14',
                desc: 'Deploy your first campaigns with proven templates and start generating immediate results.',
                icon: <Mail className="w-6 h-6" />,
                highlights: ['Campaign deployment', 'Performance monitoring', 'Initial optimization']
              }, {
                step: '04',
                title: 'Ongoing Success',
                duration: 'Days 15+',
                desc: 'Continuous optimization, performance analysis, and strategic guidance for sustained growth.',
                icon: <TrendingUp className="w-6 h-6" />,
                highlights: ['Performance analysis', 'Strategy refinement', 'Ongoing support']
                             }].map((item, i) => (
                 <div key={item.step} className="h-full">
                   {/* Card */}
                   <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    {/* Step Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Step {item.step}</div>
                          <div className="text-xs text-orange-600 font-medium">{item.duration}</div>
                        </div>
                      </div>
                    </div>

                                         {/* Content */}
                     <div className="space-y-4 flex-1">
                       <h4 className="text-xl font-bold" style={{ color: blue }}>{item.title}</h4>
                       <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                       
                       {/* Highlights */}
                       <div className="space-y-2">
                         {item.highlights.map((highlight, idx) => (
                           <div key={idx} className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                             <span className="text-sm text-gray-600">{highlight}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                    {/* Step Connector for Mobile */}
                    {i < 3 && (
                      <div className="md:hidden flex justify-center mt-6">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-orange-300 to-red-300"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Demo Booking Form */}
      <DemoBookingForm />

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