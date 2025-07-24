import React from 'react';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import ArticlesSection from './ArticlesSection';

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
            <div className="bg-[#FF6B47] rounded-2xl shadow-lg p-8 border border-[#FF6B47]">
              <div className="text-4xl font-bold text-white mb-2">$36</div>
              <div className="text-white">Average ROI per $1 spent</div>
            </div>
            <div className="bg-[#FF6B47] rounded-2xl shadow-lg p-8 border border-[#FF6B47]">
              <div className="text-4xl font-bold text-white mb-2">4B+</div>
              <div className="text-white">Global email users</div>
            </div>
            <div className="bg-[#FF6B47] rounded-2xl shadow-lg p-8 border border-[#FF6B47]">
              <div className="text-4xl font-bold text-white mb-2">21%</div>
              <div className="text-white">Average Open Rate</div>
              <div className="text-xs text-white mt-1">Industry-leading engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: blue }}>Why Top Restaurants Choose Bot & Table</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3 border hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-lg font-bold mb-1" style={{ color: blue }}>Smart Segmentation</h4>
              <p className="text-gray-700 mb-2">Automatically group guests by visit frequency, spend, and preferences for hyper-targeted campaigns.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3 border hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-lg font-bold mb-1" style={{ color: blue }}>Automated Campaign Triggers</h4>
              <p className="text-gray-700 mb-2">Send welcome series, win-back, birthdays, and more—hands-free.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3 border hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-lg font-bold mb-1" style={{ color: blue }}>Real-Time Analytics Dashboard</h4>
              <p className="text-gray-700 mb-2">Track open rates, revenue, guest frequency, and more in one place.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3 border hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-lg font-bold mb-1" style={{ color: blue }}>Seamless Integrations</h4>
              <p className="text-gray-700 mb-2">Connect with POS, reservations, review, and loyalty systems for a unified marketing engine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: blue }}>Types of Email Campaigns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Welcome Series',
                desc: 'Make a great first impression and set expectations for new guests.'
              },
              {
                title: 'Birthday & Anniversary',
                desc: 'Celebrate special occasions with personalized offers and messages.'
              },
              {
                title: 'Win-Back & Reactivation',
                desc: 'Bring back lapsed guests with irresistible offers and reminders.'
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-lg p-8 border flex flex-col transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#FF6B47]/30 hover:z-10"
                style={{ boxShadow: '0 2px 16px 0 rgba(255,107,71,0)', transition: 'box-shadow 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 32px 0 rgba(255,107,71,0.25)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(255,107,71,0)'}
              >
                <h4 className="text-lg font-bold mb-2" style={{ color: blue }}>{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: blue }}>How Implementation Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
              step: 1,
              title: 'Strategy Call',
              desc: 'Book a call to discuss your goals and current marketing efforts.'
            }, {
              step: 2,
              title: 'Onboarding & Setup',
              desc: 'We import your list, set up automations, and integrate with your systems.'
            }, {
              step: 3,
              title: 'Launch Campaigns',
              desc: 'Start sending high-converting emails and watch your revenue grow.'
            }, {
              step: 4,
              title: 'Ongoing Optimization',
              desc: 'We monitor results, optimize, and provide ongoing support.'
            }].map((item, i) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl shadow-lg p-8 border flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#FF6B47]/30 hover:z-10"
                style={{ boxShadow: '0 2px 16px 0 rgba(255,107,71,0)', transition: 'box-shadow 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 32px 0 rgba(255,107,71,0.25)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(255,107,71,0)'}
              >
                <div className="text-2xl font-bold mb-2" style={{ color: coral }}>{item.step}</div>
                <div className="font-bold mb-2">{item.title}</div>
                <div className="text-gray-700 text-center">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: blue }}>Ready to Grow Your Restaurant with Email Marketing?</h3>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-700">
          Book a free strategy call and see how much more revenue your restaurant can generate with Bot & Table's email marketing platform.
        </p>
        <Button className="text-lg font-bold px-8 py-4 rounded-xl shadow-lg" style={{ background: coral, color: '#fff' }}>
          Book Your Revenue Growth Strategy Call
        </Button>
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