import React from 'react';
import { Phone, Smartphone, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Phone className="w-8 h-8 text-[#FF6B47]" />,
    title: 'Professional Phone Service 24/7',
    desc: 'Customers always reach a friendly, knowledgeable voice that can answer basic questions and guide them toward the right solution - whether they want to order food or book a table.',
    color: '#FF6B47',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#27a1c2]" />,
    title: 'Instant Mobile Access',
    desc: 'Rather than struggling with phone orders or reservation details, customers receive immediate text access to your online ordering or reservation systems for a smooth, error-free experience.',
    color: '#27a1c2',
  },
  {
    icon: <Eye className="w-8 h-8 text-[#fbbf24]" />,
    title: 'Complete Control and Convenience',
    desc: 'The online experience gives customers full visibility of menu options and table availability, allowing them to make informed decisions without feeling pressured or rushed on the phone.',
    color: '#fbbf24',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#22c55e]" />,
    title: 'Reliable Processing and Confirmation',
    desc: 'Orders and reservations integrate seamlessly with your existing operations. Customers receive confirmations while your team gets clear, accurate information through established workflows.',
    color: '#22c55e',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 border-b relative overflow-hidden" style={{ background: '#fdf3d9' }}>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">How It Works</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {/* Timeline line */}
          <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full top-0 left-1/2 w-1 h-full bg-gradient-to-r md:bg-gradient-to-r from-[#FF6B47] via-[#27a1c2] via-[#fbbf24] to-[#22c55e] opacity-30 z-0" style={{transform: 'translateY(-50%)'}} />
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 flex flex-col items-center md:w-1/4 md:px-2 ${i % 2 === 1 ? 'md:items-center md:justify-end' : 'md:items-center md:justify-start'}`}
              style={{marginTop: i % 2 === 1 ? '60px' : '0', marginBottom: i % 2 === 0 ? '60px' : '0'}}
            >
              {/* Connector for mobile */}
              {i > 0 && (
                <div className="block md:hidden w-1 h-8 bg-gradient-to-b from-gray-200 to-gray-100 mx-auto" />
              )}
              {/* Step badge and icon */}
              <div className="relative flex flex-col items-center mb-4">
                <span className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-200 border-2 border-white shadow text-gray-700 font-bold flex items-center justify-center text-base z-20">{i+1}</span>
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-white border-2 border-gray-100 z-10" style={{ background: step.color + '1A' }}>
                  {step.icon}
                </div>
              </div>
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 w-full max-w-xs md:max-w-none mx-auto md:mx-0 text-center md:text-left" style={{marginTop: '-24px'}}>
                <h3 className="text-lg font-bold mb-2 text-navy-900">{step.title}</h3>
                <p className="text-gray-700 text-base font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 