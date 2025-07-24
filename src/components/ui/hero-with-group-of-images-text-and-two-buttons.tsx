import React from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const foodImg = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"; // Pizza slice (original)
const logoImg = "https://ui-avatars.com/api/?name=Leo%27s+Pizza&background=FF6B47&color=fff&size=128";

function IphoneMessageMockup() {
  return (
    <div className="relative w-[320px] h-[650px] rounded-[40px] bg-black shadow-2xl overflow-hidden border-4 border-black flex flex-col items-center justify-start">
      {/* Notch and status bar */}
      <div className="w-full h-[44px] flex items-center justify-between px-5 pt-2 text-xs text-black bg-white/90">
        <span className="font-semibold">8:40</span>
        <div className="flex gap-1 items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
        </div>
        <div className="flex gap-1 items-center">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0" stroke="#222" strokeWidth="2" strokeLinecap="round" /></svg>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4" stroke="#222" strokeWidth="2" /></svg>
        </div>
      </div>
      {/* iMessage header */}
      <div className="w-full flex flex-col items-center bg-white border-b border-gray-200 pb-2 pt-2">
        <img src={logoImg} alt="Leo's Pizza Logo" className="w-12 h-12 rounded-full border-2 border-white shadow" />
        <div className="font-semibold text-base text-gray-900 mt-1">Leo's Pizza</div>
      </div>
      {/* Message bubble */}
      <div className="flex-1 flex flex-col justify-start items-start w-full px-4 pt-8 bg-[#f5f5f7]">
        <div className="w-full flex justify-center">
          <div className="text-xs text-gray-500 mb-2">iMessage</div>
        </div>
        <div className="rounded-2xl shadow p-2 max-w-[90%] flex flex-col items-start" style={{ background: 'linear-gradient(135deg, #007aff 0%, #4f8cff 100%)' }}>
          <img src={foodImg} alt="Pizza Slice" className="w-48 h-36 object-cover rounded-xl mb-2" />
          <div className="text-[15px] text-white leading-snug">
            🍕 Slice into Friday! Show this message at Leo's Pizza today and get a free slice of our classic Margherita with any large pizza order. Offer valid 2–5pm only!
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-xs text-gray-400 mt-2">Today 8:39 AM</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">SMS Marketing</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-left font-regular">
                Drive Instant Results with SMS Marketing
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-left">
                Transform empty tables into packed dining rooms with text messages that customers actually read and act on within minutes.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Book Strategy Call <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <IphoneMessageMockup />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero, IphoneMessageMockup }; 