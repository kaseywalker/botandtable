import React from 'react';

const metrics = [
  {
    percent: '25%',
    title: 'Missed Call Reduction',
    desc: 'Reduce missed calls by 25% in the first week alone. Our AI answers every call within 2 rings, ensuring no potential customer gets a busy signal.',
    color: '#FF6B47',
  },
  {
    percent: '50%',
    title: 'Order Accuracy Improvement',
    desc: 'Achieve 50% fewer order errors compared to traditional phone taking. AI eliminates miscommunication and ensures perfect order capture.',
    color: '#27a1c2',
  },
  {
    percent: '75%',
    title: 'After-Hours Revenue Boost',
    desc: 'Generate 75% more revenue during closed hours with 24/7 AI phone ordering. Capture late-night orders and weekend reservations automatically.',
    color: '#fbbf24',
  },
  {
    percent: '100%',
    title: 'Call Answer Rate',
    desc: 'Answer 100% of incoming calls instantly, even during your busiest rush periods. Never lose another customer to competitors.',
    color: '#22c55e',
  },
];

export default function PerformanceMetrics() {
  return (
    <section className="w-full py-16 bg-white border-b">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              style={{ minHeight: 320 }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                style={{ background: m.color }}
              >
                <span className="text-white text-3xl font-extrabold drop-shadow-lg whitespace-nowrap text-center w-full" style={{lineHeight: '1'}}>{m.percent}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-navy-900">{m.title}</h3>
              <p className="text-gray-700 text-base font-light leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 