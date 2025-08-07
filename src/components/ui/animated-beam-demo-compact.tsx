"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneCall } from "lucide-react";
import BotTableRobot from '@/assets/bot-table-robot.svg?react';

interface ActiveCall {
  id: number;
  name: string;
  photo: string;
  position: { x: number; y: number };
  phase: 'ringing' | 'connected' | 'ending';
  outcome: string;
  startTime: number;
}

export function AnimatedBeamDemoCompact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const [activeCalls, setActiveCalls] = useState<ActiveCall[]>([]);
  const [callCounter, setCallCounter] = useState(0);

  // Smaller customer list for compact version
  const customers = [
    { name: "Sarah", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=80&h=80&fit=crop&crop=face", outcome: "Booked! 🍽️" },
    { name: "Mike", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", outcome: "Ordered! 🛍️" },
    { name: "Lisa", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", outcome: "Info! ℹ️" },
    { name: "David", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", outcome: "Resolved! ✅" },
    { name: "Emma", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face", outcome: "Scheduled! 🎉" },
    { name: "Alex", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face", outcome: "Catering! 🎊" }
  ];

  // Generate position for compact version - smaller radius and distances
  const generatePosition = () => {
    const radius = 130; // Much larger radius to create clear separation
    const minDistance = 80; // Increased minimum distance between calls
    const robotRadius = 60; // Much larger robot exclusion area
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      const angle = Math.random() * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      // Check distance from robot center
      const distanceFromRobot = Math.sqrt(x * x + y * y);
      if (distanceFromRobot < robotRadius) {
        attempts++;
        continue;
      }

      // Check distance from other active calls
      const tooClose = activeCalls.some(call => {
        const dx = call.position.x - x;
        const dy = call.position.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < minDistance;
      });

      if (!tooClose) {
        return { x, y };
      }
      attempts++;
    }

    // Fallback: place in a safe spot
    const fallbackAngle = (activeCalls.length * 1.5) % (2 * Math.PI);
    return {
      x: Math.cos(fallbackAngle) * radius,
      y: Math.sin(fallbackAngle) * radius
    };
  };

  // Add new call
  const addCall = () => {
    if (activeCalls.length >= 2) return; // Limit to 2 calls for compact version

    // Ensure no duplicate customers in active calls
    const availableCustomers = customers.filter(customer => 
      !activeCalls.some(call => call.name === customer.name)
    );
    
    if (availableCustomers.length === 0) return;

    const customer = availableCustomers[Math.floor(Math.random() * availableCustomers.length)];
    const position = generatePosition();
    
    const newCall: ActiveCall = {
      id: callCounter,
      name: customer.name,
      photo: customer.photo,
      position,
      phase: 'ringing',
      outcome: customer.outcome,
      startTime: Date.now()
    };

    setActiveCalls(prev => [...prev, newCall]);
    setCallCounter(prev => prev + 1);

    // Progress through phases
    setTimeout(() => {
      setActiveCalls(prev => prev.map(call => 
        call.id === newCall.id ? { ...call, phase: 'connected' } : call
      ));
    }, 1000);

    setTimeout(() => {
      setActiveCalls(prev => prev.map(call => 
        call.id === newCall.id ? { ...call, phase: 'ending' } : call
      ));
    }, 3000);

    setTimeout(() => {
      setActiveCalls(prev => prev.filter(call => call.id !== newCall.id));
    }, 4000);
  };

  // Auto-generate calls
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.9) { // Increased chance to add call for testing
        addCall();
      }
    }, 2000); // Faster interval for testing

    return () => clearInterval(interval);
  }, [activeCalls, callCounter]);

  // Initial call
  useEffect(() => {
    setTimeout(() => addCall(), 1000);
  }, []);

  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-visible"> {/* Changed to overflow-visible */}
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{ minWidth: '400px', minHeight: '320px' }} // Increased width for larger radius
      >
        {/* Robot in center - smaller size */}
        <motion.div
          ref={robotRef}
          className="absolute z-10 flex items-center justify-center"
          style={{ 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Robot talking effects - smaller */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-lg z-0"
            style={{ transform: 'scale(1.5)' }}
          />
          
          {/* Inner pulsing waves - smaller */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.8, 0.3, 0.8]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-orange-400/30 z-0"
          />

          {/* Robot container - smaller */}
          <div className="relative w-20 h-20 bg-white rounded-full shadow-2xl border-4 border-orange-200 flex items-center justify-center z-20"> {/* Smaller robot */}
            <BotTableRobot className="w-12 h-12 text-orange-600" /> {/* Smaller icon */}
          </div>
        </motion.div>

        {/* Active calls - smaller */}
        <AnimatePresence>
          {activeCalls.map((call) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute z-30"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${call.position.x}px), calc(-50% + ${call.position.y}px))`
              }}
            >
              {/* Call container - smaller */}
              <div className="relative">
                {/* Ringing effect - smaller */}
                {call.phase === 'ringing' && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-blue-400/40 -m-2"
                  />
                )}

                {/* Audio waves during connected phase - smaller */}
                {call.phase === 'connected' && (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-green-400/30 -m-1"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.1, 0.4] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-green-400/20 -m-2"
                    />
                  </>
                )}

                {/* Customer photo - smaller */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white"> {/* Smaller photo */}
                  <img 
                    src={call.photo} 
                    alt={call.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Call status - smaller */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm"> {/* Smaller status */}
                  {call.phase === 'ringing' && <div className="w-full h-full bg-blue-500 rounded-full animate-pulse" />}
                  {call.phase === 'connected' && <div className="w-full h-full bg-green-500 rounded-full" />}
                  {call.phase === 'ending' && <div className="w-full h-full bg-gray-400 rounded-full" />}
                </div>

                {/* Success outcome - smaller */}
                {call.phase === 'ending' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -15, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-white px-2 py-1 rounded-lg shadow-lg border text-xs font-medium text-green-600 whitespace-nowrap"
                  >
                    {call.outcome}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 