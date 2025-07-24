import React from 'react';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { CheckCircle, Zap, Users, MessageCircle, TrendingUp, Star, BarChart2, Layers, Mail, Smartphone, Calendar, DollarSign } from 'lucide-react';
import { Hero as GroupHero } from "./ui/hero-with-group-of-images-text-and-two-buttons";
import { IphoneMessageMockup } from "./ui/hero-with-group-of-images-text-and-two-buttons";
import ArticlesSection from './ArticlesSection';

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
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    headline: 'Unmatched ROI That Maximizes Your Marketing Budget',
    sub: '36 Return for Every $1 Spent on SMS Campaigns',
    desc: 'SMS marketing delivers the highest ROI of any marketing channel, with businesses reporting returns of 3,600% on their text message campaigns. For restaurants operating on tight margins, this cost-effective approach means you can compete with larger chains without breaking the bank.',
    table: [
      { label: 'SMS Marketing', value: '$75–$250/month for thousands of messages' },
      { label: 'Traditional Radio', value: '$1,000–$5,000/month for limited reach' },
      { label: 'Print Advertising', value: '$500–$2,000/month with no engagement tracking' },
      { label: 'Social Media Ads', value: '$300–$1,500/month with decreasing organic reach' },
    ],
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    headline: 'Reduce No-Shows and Maximize Table Turnover',
    sub: 'Cut No-Shows by 60% with Automated Reminder Messages',
    desc: 'No-shows cost restaurants an average of $40–$80 per missed reservation. SMS reminders sent 24 hours before reservations reduce no-shows by up to 60%, protecting your revenue and ensuring optimal table utilization during peak hours.',
    system: [
      'Instant confirmation messages upon booking',
      '24-hour reminder texts with reservation details',
      'Day-of confirmations with parking and arrival instructions',
      'Follow-up messages for no-shows to maintain accountability',
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    headline: 'Build Customer Loyalty Through Personalized Engagement',
    sub: '75% of Customers Prefer SMS Over Email for Restaurant Promotions',
    desc: 'Personalized SMS campaigns based on dining history, preferences, and special occasions create emotional connections that turn occasional diners into loyal regulars. Birthday messages, anniversary celebrations, and preference-based offers make customers feel valued and appreciated.',
    examples: [
      '"Happy Birthday, Sarah! Enjoy 50% off your favorite pasta dish this week."',
      '"It\'s been a while! Your usual table is waiting with a complimentary appetizer."',
      '"New vegan options just added to our menu—perfect for your dietary preferences!"',
      '"Celebrate your anniversary with us and receive a complimentary dessert!"',
      '"Thanks for your feedback! Enjoy 10% off your next visit as a thank you."',
      '"Exclusive: Early access to our chef\'s tasting menu this weekend!"',
      '"Refer a friend and both of you get a free appetizer on your next visit!"'
    ],
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    headline: 'Streamline Feedback Collection and Reputation Management',
    sub: '10x Higher Response Rate Than Email Surveys',
    desc: 'SMS surveys capture customer feedback while the dining experience is still fresh in their minds. Quick, mobile-friendly surveys sent within hours of dining generate honest feedback that helps you improve service and address issues before they become negative online reviews.',
  },
];

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

      {/* Key Benefits Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: blue }}>
            Why SMS Marketing Works for Restaurants
          </h2>
        </div>
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
          {/* Main Card: iPhone mockup */}
          <div style={{ gridArea: 'main' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[0].headline}</h3>
            </div>
            <div className="text-coral-600 font-semibold mb-2">{benefits[0].sub}</div>
            <p className="text-gray-700 mb-4 text-lg">{benefits[0].desc}</p>
            <ul className="flex flex-col gap-2 mt-2">
              {benefits[0].perfectFor.map((pf, idx) => (
                <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm"><svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                  {pf}
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center mt-6">
              <div className="scale-90 md:scale-100" style={{ maxWidth: 320 }}>
                <IphoneMessageMockup />
              </div>
            </div>
          </div>
          {/* Side Card 1 */}
          <div style={{ gridArea: 'side1' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[1].headline}</h3>
            </div>
            <div className="text-coral-600 font-semibold mb-2">{benefits[1].sub}</div>
            <p className="text-gray-700 mb-4 text-lg">{benefits[1].desc}</p>
            <table className="w-full text-sm mt-4">
              <tbody>
                {benefits[1].table.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-1 pr-4 font-semibold text-gray-700">{row.label}</td>
                    <td className="py-1 text-gray-500">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Side Card 2 */}
          <div style={{ gridArea: 'side2' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[2].headline}</h3>
            </div>
            <div className="text-coral-600 font-semibold mb-2">{benefits[2].sub}</div>
            <p className="text-gray-700 mb-4 text-lg">{benefits[2].desc}</p>
            <ul className="flex flex-col gap-2 mt-2">
              {benefits[2].system.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm"><svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {/* Wide Card (bottom left) */}
          <div style={{ gridArea: 'wide' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[3].headline}</h3>
            </div>
            <div className="text-coral-600 font-semibold mb-2">{benefits[3].sub}</div>
            <p className="text-gray-700 mb-4 text-lg">{benefits[3].desc}</p>
            <ul className="flex flex-col gap-2 mt-2">
              {benefits[3].examples.map((ex, idx) => (
                <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm"><svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                  {ex}
                </li>
              ))}
            </ul>
          </div>
          {/* Side Card 3 (bottom right) */}
          <div style={{ gridArea: 'side3' }} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[4].headline}</h3>
            </div>
            <div className="text-coral-600 font-semibold mb-2">{benefits[4].sub}</div>
            <p className="text-gray-700 mb-4 text-lg">{benefits[4].desc}</p>
          </div>
        </div>
        {/* Mobile fallback: simple stack */}
        <div className="md:hidden flex flex-col gap-8 max-w-2xl mx-auto">
          {/* Main Card: iPhone mockup */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[0].headline}</h3>
            </div>
            <div className="text-coral-600 font-semibold mb-2">{benefits[0].sub}</div>
            <p className="text-gray-700 mb-4 text-lg">{benefits[0].desc}</p>
            <ul className="flex flex-col gap-2 mt-2">
              {benefits[0].perfectFor.map((pf, idx) => (
                <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm"><svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                  {pf}
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center mt-6">
              <div className="scale-90 md:scale-100" style={{ maxWidth: 320 }}>
                <IphoneMessageMockup />
              </div>
            </div>
          </div>
          {/* Other cards stacked */}
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold" style={{ color: blue }}>{benefits[i].headline}</h3>
              </div>
              <div className="text-coral-600 font-semibold mb-2">{benefits[i].sub}</div>
              <p className="text-gray-700 mb-4 text-lg">{benefits[i].desc}</p>
              {benefits[i].table && (
                <table className="w-full text-sm mt-4">
                  <tbody>
                    {benefits[i].table.map((row, idx) => (
                      <tr key={idx}>
                        <td className="py-1 pr-4 font-semibold text-gray-700">{row.label}</td>
                        <td className="py-1 text-gray-500">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {benefits[i].system && (
                <ul className="flex flex-col gap-2 mt-2">
                  {benefits[i].system.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm"><svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                      {s}
                    </li>
                  ))}
                </ul>
              )}
              {benefits[i].examples && (
                <ul className="flex flex-col gap-2 mt-2">
                  {benefits[i].examples.map((ex, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B47]/20 text-[#FF6B47] shadow-sm"><svg width="18" height="18" fill="none" stroke="#FF6B47" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                      {ex}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 col-span-full text-center" style={{ color: blue }}>
            Why Top Restaurants Choose Bot & Table
          </h3>
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3 border hover:shadow-2xl transition-shadow duration-300">
              <div>{f.icon}</div>
              <h4 className="text-lg font-bold mb-1" style={{ color: blue }}>{f.title}</h4>
              <p className="text-gray-700 mb-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: blue }}>How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Build Your Subscriber List',
                points: [
                  'Add opt-in forms to your website and social media',
                  'Collect numbers during reservation process',
                  'Offer incentives like "Text HUNGRY to 12345 for 20% off your first order"',
                  'Train staff to promote SMS sign-ups during service',
                ],
              },
              {
                step: 2,
                title: 'Segment Your Audience',
                points: [
                  'Import customer data from your POS system',
                  'Categorize based on dining patterns and preferences',
                  'Create targeted groups for personalized messaging',
                  'Set up automated triggers based on customer behavior',
                ],
              },
              {
                step: 3,
                title: 'Create Compelling Campaigns',
                points: [
                  'Craft messages that create urgency and excitement',
                  'Include clear calls-to-action with easy redemption',
                  'Personalize content based on customer data',
                  'Test different message formats and timing',
                ],
              },
              {
                step: 4,
                title: 'Launch and Optimize',
                points: [
                  'Send campaigns at optimal times for your audience',
                  'Monitor real-time performance metrics',
                  'A/B test subject lines and content',
                  'Continuously refine based on results',
                ],
              },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-3 border hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-lg" style={{ color: coral, minWidth: '2rem', minHeight: '2rem', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.step}</span>
                  <span className="font-bold text-lg" style={{ color: blue }}>{step.title}</span>
                </div>
                <ul className="list-disc ml-6 text-gray-600 text-sm">
                  {step.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full py-16 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: blue }}>Ready to Fill Your Restaurant with SMS Marketing?</h3>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-700">
          Transform your empty tables into a thriving dining destination. Join hundreds of restaurants already using SMS marketing to drive immediate results and build lasting customer relationships.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="text-lg font-bold px-8 py-4 rounded-xl shadow-lg" style={{ background: coral, color: '#fff' }}>
            Book Strategy Call Now
          </Button>
          <Button className="text-lg font-bold px-8 py-4 rounded-xl shadow-lg border-2 border-primary bg-white text-primary" style={{ color: coral, borderColor: coral }}>
            Start Free Trial
          </Button>
        </div>
      </section>

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
      {/* Related Articles Section */}
      <ArticlesSection />
    </div>
  );
} 