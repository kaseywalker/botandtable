import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArticlesSection from './ArticlesSection';
import { Calendar } from './ui/calendar';

const values = [
  {
    title: 'Radical Hospitality',
    desc: 'We treat every client and customer with the same care, respect, and attention to detail as a Michelin-starred restaurant treats its guests.'
  },
  {
    title: 'Relentless Innovation',
    desc: 'We never settle. We push boundaries, embrace change, and constantly improve our technology and ourselves.'
  },
  {
    title: 'Transparent Partnership',
    desc: 'We believe in open, honest communication and true collaboration. Our clients are our partners, not just our customers.'
  },
  {
    title: 'Obsessive Excellence',
    desc: 'We sweat the details. Every pixel, every process, every result matters. Good enough is never enough.'
  },
  {
    title: 'Freedom Through Automation',
    desc: 'We build systems that give restaurant owners their time and freedom back, so they can focus on what matters most.'
  },
  {
    title: 'Measurable Results',
    desc: 'We are driven by outcomes, not activity. Our success is measured by the real-world impact we create for our clients.'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Company Name Definition */}
        <section className="relative bg-gradient-to-br from-white to-cream-50 py-20 border-b pt-32 overflow-hidden">
          {/* Subtle background shape */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full bg-coral-100 opacity-20 blur-2xl" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)', position: 'absolute' }}></div>
          </div>
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Bot & Table <span className="text-coral-500 font-normal text-2xl md:text-3xl align-middle">/bɒt ænd ˈteɪbəl/</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              <span className="font-bold">noun</span> — "Our name represents the perfect fusion of cutting-edge AI technology (Bot) and the heart of hospitality (Table)."
            </p>
          </div>
        </section>

        {/* Purpose & Vision */}
        <section className="py-24 bg-gradient-to-br from-white to-cream-50 border-b">
          <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Purpose Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#FDE68A"/><path d="M24 14v20M14 24h20" stroke="#F59E42" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Purpose</h2>
              <p className="text-xl text-gray-700 font-light">To revolutionize restaurant marketing through radical hospitality and AI automation.</p>
            </div>
            {/* Divider */}
            <div className="hidden md:block h-40 w-px bg-gradient-to-b from-coral-100 to-coral-400 mx-8" />
            {/* Vision Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#A7F3D0"/><path d="M24 16c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 0v8l6 3" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Vision</h2>
              <p className="text-xl text-gray-700 font-light">To help restaurant owners reclaim their time and multiply their success.</p>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-20 bg-gradient-to-br from-cream-50 to-white border-b">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">The Bot & Table Manifesto</h2>
            <p className="text-2xl text-gray-800 leading-relaxed mb-8 font-light">
              At Bot & Table, we believe radical hospitality isn't just for restaurants—it's how we approach every client relationship. We're not here to merely execute marketing campaigns. We're here to transform businesses, multiply revenue, and restore freedom.
            </p>
          </div>
        </section>

        {/* Core Values/Pillars */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 tracking-tight">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {values.map((val, idx) => (
                <div key={val.title} className="bg-gradient-to-br from-cream-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-coral-500 text-3xl font-bold mb-4">{String(idx+1).padStart(2, '0')}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{val.title}</h3>
                  <p className="text-lg text-gray-600 font-light">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Add Articles Section at the bottom */}
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
      <Footer />
    </div>
  );
};

export default AboutPage;

