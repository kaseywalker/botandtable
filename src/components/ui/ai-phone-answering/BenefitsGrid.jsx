import React from 'react';
import { Phone, Zap, Info, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Phone className="w-8 h-8 text-[#FF6B47]" />, // 1
    headline: 'Answer 100% of Calls Instantly, Even During Rush Hours',
    content: 'Your AI phone assistant answers every call within 2 rings, 24/7. No more missed revenue or lost customers—every call is handled instantly and professionally.',
    impact: [
      'Capture 100% of incoming calls',
      'Increase phone orders by 35%',
      'Reduce abandonment to <2%',
      '24/7 ordering—even when closed',
    ],
    gridClass: 'bento-col-span-2',
  },
  {
    icon: <Zap className="w-8 h-8 text-[#FF6B47]" />, // 2
    headline: 'Turn Every Call Into Revenue',
    content: 'AI actively drives sales with upselling, cross-selling, and personalized offers based on order history and preferences.',
    impact: [
      'Intelligent upselling',
      'Promote specials & offers',
      'Cross-sell beverages/items',
      'Loyalty program integration',
    ],
    gridClass: 'bento-row-span-2',
  },
  {
    icon: <Info className="w-8 h-8 text-[#FF6B47]" />, // 3
    headline: 'Expert Info, Instantly',
    content: 'Menu details, allergens, parking, events—AI provides instant, accurate answers and recommendations.',
    impact: [
      'Full menu & dietary info',
      'Real-time reservations',
      'Directions & accessibility',
      'Current promos & specials',
    ],
    gridClass: '',
  },
  {
    icon: <Users className="w-8 h-8 text-[#FF6B47]" />, // 4
    headline: 'Build Relationships, Not Just Orders',
    content: 'AI remembers preferences, celebrates occasions, and creates personalized experiences that keep guests coming back.',
    impact: [
      'Profile & preference tracking',
      'Birthday/anniversary reminders',
      'Personalized follow-ups',
      'Feedback & reputation tools',
    ],
    gridClass: '',
  }
];

export default function BenefitsGrid() {
  return (
    <section className="w-full py-16 border-b relative overflow-hidden" style={{ background: '#fdf3d9' }}>
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, #fff 0%, #fdf3d9 60%, #fdf3d9 100%)',
          opacity: 0.7,
        }}
      />
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Key Benefits</h2>
        <div
          className="grid gap-8"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gridAutoRows: '1fr',
            gridAutoFlow: 'dense',
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl shadow-xl p-8 flex flex-col border border-gray-100 hover:shadow-2xl transition-shadow duration-300 ${b.gridClass}`}
              style={{
                gridColumn: b.gridClass && b.gridClass.includes('col-span-2') ? 'span 2' : undefined,
                gridRow: b.gridClass && b.gridClass.includes('row-span-2') ? 'span 2' : undefined,
                justifyContent: 'flex-start',
                height: 'auto',
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#FFF3ED]">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy-900">{b.headline}</h3>
              <p className="text-gray-700 mb-4 text-base font-light">{b.content}</p>
              <ul className="text-left text-sm text-gray-500 list-disc pl-5 space-y-1 mb-0">
                {b.impact.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 