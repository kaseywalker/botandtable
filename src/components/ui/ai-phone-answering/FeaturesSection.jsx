import React from 'react';
import { MessageCircle, Share2, BarChart2, Clock } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-10 h-10 text-[#FF6B47]" />,
    title: 'Human-Like Conversations',
    desc: 'Advanced natural language processing makes every interaction sound completely human. Customers enjoy natural conversations with AI that understands accents, slang, and complex requests without robotic responses.',
    color: '#FF6B47',
  },
  {
    icon: <Share2 className="w-10 h-10 text-[#27a1c2]" />,
    title: 'Smart Call Routing',
    desc: 'Complex requests requiring human touch are seamlessly transferred to staff with full conversation context. Ensure smooth customer experiences while maximizing AI efficiency for routine tasks.',
    color: '#27a1c2',
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-[#fbbf24]" />,
    title: 'Advanced Analytics Dashboard',
    desc: 'Track call volume, conversion rates, popular items, and customer preferences with detailed reporting. Use data insights to optimize operations and marketing strategies for maximum profitability.',
    color: '#fbbf24',
  },
  {
    icon: <Clock className="w-10 h-10 text-[#22c55e]" />,
    title: '24/7 Availability',
    desc: 'Never close your phone lines again. AI handles reservations, and inquiries around the clock, capturing revenue during closed hours and ensuring customers can always reach your restaurant.',
    color: '#22c55e',
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 border-b bg-gradient-to-br from-white via-blue-50 to-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Features</h2>
        <div className="flex flex-col gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8" style={{ background: f.color + '1A' }}>
                {f.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-3 text-navy-900">{f.title}</h3>
                <p className="text-gray-700 text-base font-light leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 