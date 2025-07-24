import React from 'react';
import HeroScrollDemo from './ui/HeroScrollDemo';
import Testimonials from './ui/Testimonials';
import { useRef, useState } from 'react';
import { Confetti } from './ui/confetti';
import { Feature } from './ui/feature-with-advantages';
import { AnimatedBeamDemo } from './ui/animated-beam-demo';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOrigin, setConfettiOrigin] = useState({ x: 0.5, y: 0.2 });
  // This callback will be passed to the hero and called when the heading appears
  const handleFireConfetti = (headingRect) => {
    if (headingRect) {
      // Calculate origin as the center bottom of the heading relative to the viewport
      const x = (headingRect.left + headingRect.width / 2) / window.innerWidth;
      const y = (headingRect.bottom + 8) / window.innerHeight; // 8px below
      setConfettiOrigin({ x, y });
    } else {
      setConfettiOrigin({ x: 0.5, y: 0.2 });
    }
    setShowConfetti(false); // reset
    setTimeout(() => setShowConfetti(true), 10); // fire after DOM update
  };
  return (
    <div style={{ position: 'relative' }}>
      <div className="w-full flex justify-end p-6">
        <Link
          to="/ai-phone-answering"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Home
        </Link>
      </div>
      {/* Global confetti canvas, absolutely positioned over the whole page */}
      {showConfetti && (
        <Confetti
          className="fixed left-0 top-0 w-screen h-screen pointer-events-none z-[9999]"
          style={{ pointerEvents: 'none' }}
          options={{
            particleCount: 120,
            spread: 90,
            origin: confettiOrigin,
            startVelocity: 55,
            gravity: 0.7,
            ticks: 250,
          }}
        />
      )}
      <HeroScrollDemo onHeadingMount={handleFireConfetti} />
      {/* Google Reviews Section (Testimonials) below the hero */}
      <Testimonials />
      {/* Feature With Advantages Section */}
      <Feature />
      {/* Add more sections below as needed */}
    </div>
  );
};

export default HomePage; 