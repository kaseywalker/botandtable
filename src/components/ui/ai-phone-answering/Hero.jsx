import React from 'react';
import { Button } from '../button';
import { useNavigate } from 'react-router-dom';
import { AnimatedBeamDemo } from '../animated-beam-demo';

const coral = '#FF6B47';
const blue = '#1e293b';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-gray-100 border-b overflow-hidden">
      {/* Subtle background shape */}
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}>
        <path fill="#FF6B47" fillOpacity="0.07" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
      <div className="relative container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start z-10">
        {/* Left: Content */}
        <div className="flex flex-col gap-7 justify-center md:pr-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#FF6B47] rounded-full uppercase tracking-wide mb-2 w-fit shadow">AI Phone Answering</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-2" style={{ color: blue }}>
            Never Miss a Call with AI Phone Answering
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-2 max-w-2xl">
            Transform your restaurant's phone into a revenue-generating machine with AI technology that answers every call, texts order links, books reservations, and turns conversations into customers.
          </h2>
          <div className="flex gap-4 mt-2">
            <Button
              size="lg"
              style={{ background: coral, color: '#fff', fontWeight: 700 }}
              className="shadow-lg hover:scale-105 transition-transform duration-200 text-lg px-8 py-4"
              onClick={() => navigate('/funnel')}
            >
              Book Your AI Phone Demo
            </Button>
          </div>
        </div>
        {/* Right: Animation stays unchanged */}
        <div className="hidden md:flex flex-1 justify-center mt-[-12px]" style={{ alignItems: 'flex-start' }}>
          <AnimatedBeamDemo />
        </div>
      </div>
    </section>
  );
} 