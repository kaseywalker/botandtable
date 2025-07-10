import React from 'react';
import MacbookProMockup from './ui/IphoneMockup';
import IpadFormApp from './ui/IpadFormApp';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-cream-50 to-white pt-4 pb-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-4 md:px-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See How Much <span className="text-primary">Revenue</span> Your Restaurant Is Losing
          </h1>
        </div>
        {/* Right: MacBook Pro Mockup with App inside */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md mb-8 md:mb-0">
          <MacbookProMockup>
            <div style={{ width: '100%', height: '100%', background: '#181A1B', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
              <IpadFormApp />
            </div>
          </MacbookProMockup>
        </div>
      </div>
    </section>
  );
};

export default Hero;

