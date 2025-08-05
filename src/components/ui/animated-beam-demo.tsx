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

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const [activeCalls, setActiveCalls] = useState<ActiveCall[]>([]);
  const [callCounter, setCallCounter] = useState(0);

  // Real customer photos from Unsplash - Expanded list to prevent duplicates
  const customers = [
    { name: "Sarah", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=150&h=150&fit=crop&crop=face", outcome: "Table Booked! 🍽️" },
    { name: "Mike", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", outcome: "Order Placed! 🛍️" },
    { name: "Lisa", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", outcome: "Info Provided! ℹ️" },
    { name: "David", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", outcome: "Issue Resolved! ✅" },
    { name: "Emma", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", outcome: "Event Scheduled! 🎉" },
    { name: "Alex", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", outcome: "Catering Booked! 🎊" },
    { name: "Jessica", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face", outcome: "Reservation Made! 📅" },
    { name: "Robert", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face", outcome: "Takeout Ordered! 🥡" },
    { name: "Maria", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", outcome: "Party Planned! 🎈" },
    { name: "James", photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face", outcome: "Menu Inquiry! 📋" },
    { name: "Rachel", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face", outcome: "Special Request! ⭐" },
    { name: "Kevin", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face", outcome: "Delivery Scheduled! 🚚" },
    { name: "Amanda", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face", outcome: "Group Booking! 👥" },
    { name: "Chris", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face", outcome: "Wine Pairing! 🍷" },
    { name: "Nicole", photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face", outcome: "Birthday Dinner! 🎂" },
    { name: "Tyler", photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop&crop=face", outcome: "Business Lunch! 💼" }
  ];

  // Generate position that doesn't overlap with existing calls or the larger robot
  const generatePosition = () => {
    const radius = 220; // Increased radius to accommodate larger robot
    const minDistance = 140; // Increased minimum distance between calls
    const robotRadius = 60; // Larger robot radius (48px robot + 12px padding)
    let attempts = 0;
    const maxAttempts = 50;

    while (attempts < maxAttempts) {
      const angle = Math.random() * 2 * Math.PI;
      const newPosition = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };

      // Check distance from center (robot) - must be far enough from larger robot
      const distanceFromCenter = Math.sqrt(newPosition.x * newPosition.x + newPosition.y * newPosition.y);
      if (distanceFromCenter < robotRadius + 80) { // 80px buffer around larger robot
        attempts++;
        continue;
      }

      // Check if this position is far enough from existing calls
      const tooClose = activeCalls.some(call => {
        const distance = Math.sqrt(
          Math.pow(newPosition.x - call.position.x, 2) + 
          Math.pow(newPosition.y - call.position.y, 2)
        );
        return distance < minDistance;
      });

      if (!tooClose) {
        return newPosition;
      }

      attempts++;
    }

    // If we can't find a good position, use predefined positions at safe distances
    const predefinedAngles = [0, Math.PI/2, Math.PI, (3*Math.PI)/2, Math.PI/4, (3*Math.PI)/4, (5*Math.PI)/4, (7*Math.PI)/4];
    const availableAngles = predefinedAngles.filter(angle => {
      const position = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };
      
      // Check distance from robot
      const distanceFromCenter = Math.sqrt(position.x * position.x + position.y * position.y);
      if (distanceFromCenter < robotRadius + 80) {
        return false;
      }
      
      return !activeCalls.some(call => {
        const distance = Math.sqrt(
          Math.pow(position.x - call.position.x, 2) + 
          Math.pow(position.y - call.position.y, 2)
        );
        return distance < minDistance;
      });
    });

    if (availableAngles.length > 0) {
      const angle = availableAngles[Math.floor(Math.random() * availableAngles.length)];
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };
    }

    // Final fallback to safe distance
    const angle = Math.random() * 2 * Math.PI;
    return {
      x: Math.cos(angle) * (robotRadius + 100),
      y: Math.sin(angle) * (robotRadius + 100)
    };
  };

  // Simulate realistic call flow
  useEffect(() => {
    const createCall = () => {
      // Don't create too many simultaneous calls
      if (activeCalls.length >= 4) return;
      
      // Get customers who are NOT currently on active calls
      const activeCustomerNames = activeCalls.map(call => call.name);
      const availableCustomers = customers.filter(customer => 
        !activeCustomerNames.includes(customer.name)
      );
      
      // If no customers available, wait for some calls to end
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

      setCallCounter(prev => prev + 1);
      setActiveCalls(prev => [...prev, newCall]);

      // Answer call after 1-3 seconds
      setTimeout(() => {
        setActiveCalls(prev => 
          prev.map(call => 
            call.id === newCall.id ? { ...call, phase: 'connected' } : call
          )
        );
      }, 1000 + Math.random() * 2000);

      // Show outcome after 4-7 seconds total
      setTimeout(() => {
        setActiveCalls(prev => 
          prev.map(call => 
            call.id === newCall.id ? { ...call, phase: 'ending' } : call
          )
        );
      }, 4000 + Math.random() * 3000);

      // Remove call after showing outcome
      setTimeout(() => {
        setActiveCalls(prev => prev.filter(call => call.id !== newCall.id));
      }, 7000 + Math.random() * 2000);
    };

    // Create first call after a short delay
    const firstCallTimeout = setTimeout(() => {
      createCall();
    }, 1000 + Math.random() * 2000);

    // Continue creating calls with natural, varied timing
    const interval = setInterval(() => {
      // More realistic restaurant call patterns
      // Sometimes busier, sometimes quieter
      const currentCalls = activeCalls.length;
      
      // If we have 3+ calls, be much more selective about new calls
      if (currentCalls >= 3 && Math.random() < 0.7) {
        return; // Skip this opportunity 70% of the time when busy
      }
      
      // If we have 2 calls, be somewhat selective
      if (currentCalls >= 2 && Math.random() < 0.4) {
        return; // Skip this opportunity 40% of the time
      }
      
      createCall();
    }, 3000 + Math.random() * 6000); // 3-9 seconds between attempts

    return () => {
      clearTimeout(firstCallTimeout);
      clearInterval(interval);
    };
  }, [callCounter, activeCalls.length]);

    // Audio wave component for ringing calls
  const RingingWave = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-orange-400/60"
          animate={{
            scale: [1, 1.8, 2.5],
            opacity: [0.8, 0.4, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );

  // Natural audio wave for connected calls
  const AudioWave = () => {
    const bars = Array.from({ length: 8 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-center space-x-0.5">
          {bars.map((bar) => (
            <motion.div
              key={bar}
              className="w-1 bg-blue-400 rounded-full"
              animate={{
                height: [4, 12, 8, 16, 6, 14, 10, 4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: bar * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative flex h-[600px] w-full items-center justify-center overflow-visible"
      ref={containerRef}
      style={{ minWidth: '800px' }}
    >
      {/* Animated Talking Waves around Robot */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* Inner pulsing waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ 
              scale: [0.8, 2.2, 0.8], 
              opacity: [0.6, 0.1, 0.6],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              width: '192px',
              height: '192px',
              background: `radial-gradient(circle, rgba(251, 146, 60, ${0.3 - i * 0.1}) 0%, rgba(249, 115, 22, ${0.2 - i * 0.05}) 50%, transparent 70%)`,
              filter: 'blur(2px)'
            }}
          />
        ))}
        
        {/* Outer energy rings with rotation */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`outer-${i}`}
            className="absolute rounded-full"
            initial={{ scale: 1.2, opacity: 0.4, rotate: 0 }}
            animate={{ 
              scale: [1.2, 2.8, 1.2], 
              opacity: [0.4, 0.05, 0.4],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              width: '280px',
              height: '280px',
              background: `conic-gradient(from ${i * 180}deg, transparent 60%, rgba(249, 115, 22, 0.2) 70%, rgba(251, 146, 60, 0.3) 80%, rgba(255, 159, 67, 0.2) 90%, transparent 100%)`,
              filter: 'blur(3px)'
            }}
          />
        ))}

        {/* Subtle particle effect */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
            initial={{ 
              x: Math.cos(i * 60 * Math.PI / 180) * 120,
              y: Math.sin(i * 60 * Math.PI / 180) * 120,
              opacity: 0.8,
              scale: 1
            }}
            animate={{ 
              x: Math.cos(i * 60 * Math.PI / 180) * 240,
              y: Math.sin(i * 60 * Math.PI / 180) * 240,
              opacity: [0.8, 0.3, 0],
              scale: [1, 0.5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Central Robot */}
      <motion.div
        ref={robotRef}
        animate={{
          scale: activeCalls.length > 0 ? [1, 1.03, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: activeCalls.length > 0 ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="relative z-20"
      >
        <div className="w-48 h-48 bg-white rounded-full border-8 border-orange-200 shadow-xl flex items-center justify-center relative overflow-hidden">
          <BotTableRobot className="w-32 h-32" />
          
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/10 to-amber-300/20"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Dynamic Calls */}
      <AnimatePresence>
        {activeCalls.map((call) => (
          <motion.div
            key={call.id}
            initial={{ 
              scale: 0,
              x: 0,
              y: 0,
              opacity: 0
            }}
            animate={{ 
              scale: 1,
              x: call.position.x,
              y: call.position.y,
              opacity: 1
            }}
            exit={{ 
              scale: 0,
              opacity: 0
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="absolute z-10"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative">
              {/* Customer Photo - Hidden during success */}
              <motion.div
                animate={{
                  scale: call.phase === 'connected' ? [1, 1.05, 1] : 1,
                  opacity: call.phase === 'ending' ? 0 : 1,
                }}
                transition={{
                  duration: call.phase === 'ending' ? 0.3 : 1.5,
                  repeat: call.phase === 'connected' ? Infinity : 0,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden relative bg-gray-200"
              >
                <img 
                  src={call.photo} 
                  alt={call.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Audio Effects */}
                {call.phase === 'ringing' && <RingingWave />}
                {call.phase === 'connected' && <AudioWave />}
              </motion.div>

              {/* Celebration Effect - Only during success */}
              {call.phase === 'ending' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Celebration particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][i % 5]
                      }}
                      initial={{ 
                        scale: 0,
                        x: 0,
                        y: 0,
                        opacity: 1
                      }}
                      animate={{ 
                        scale: [0, 1, 0],
                        x: Math.cos(i * 45 * Math.PI / 180) * 40,
                        y: Math.sin(i * 45 * Math.PI / 180) * 40,
                        opacity: [1, 1, 0]
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: i * 0.1
                      }}
                    />
                  ))}
                  
                  {/* Central celebration burst */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-green-400"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ 
                      scale: [0, 2, 3],
                      opacity: [1, 0.6, 0]
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Success glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 1.5, 0.8],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              )}

              {/* Customer Name */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -25 }}
                className="absolute left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg"
              >
                {call.name}
              </motion.div>

              {/* Call Status */}
              {call.phase === 'ringing' && (
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Ringing...
                </motion.div>
              )}

              {call.phase === 'connected' && (
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center"
                >
                  <PhoneCall className="w-3 h-3 mr-1" />
                  Connected
                </motion.div>
              )}

              {/* Success Outcome */}
              {call.phase === 'ending' && (
                <motion.div
                  initial={{ scale: 0, y: 0 }}
                  animate={{ scale: 1, y: -40 }}
                  className="absolute left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg whitespace-nowrap"
                >
                  {call.outcome}
                </motion.div>
              )}


            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 