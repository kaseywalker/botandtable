import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { ElementType } from "react";

interface Feature {
  id: number;
  icon: ElementType;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  features: Feature[];
  primaryColor?: string;
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  features,
  primaryColor = "sky-500",
  progressGradientLight = "bg-gradient-to-r from-sky-400 to-sky-500",
  progressGradientDark = "bg-gradient-to-r from-sky-300 to-sky-400",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;
    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();
      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`text-${primaryColor} font-semibold text-sm uppercase tracking-wider`}>
            The Bot & Table Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mt-4 mb-6">
            Bot & Table isn't just another marketing tool or agency.
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Bot & Table isn't just another marketing tool or agency. We're the first AI marketing system built specifically for restaurants that truly operates on autopilot. While other solutions require constant management, meetings, and manual work, our AI handles everything from customer acquisition to retention without you lifting a finger.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left Side - Features with Progress Lines */}
          <div ref={containerRef} className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;
              return (
                <div key={feature.id} ref={el => { featureRefs.current[index] = el; }} className="relative cursor-pointer flex-shrink-0" onClick={() => handleFeatureClick(index)}>
                  <div className={`flex lg:flex-row flex-col items-start space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 ${isActive ? "bg-white dark:bg-black/80 md:shadow-xl dark:drop-shadow-lg rounded-xl md:border dark:border-none border-gray-200" : ""}`}>
                    <div className={`p-3 hidden md:block rounded-full transition-all duration-300 ${isActive ? `bg-${primaryColor} text-white` : `bg-${primaryColor}/10 dark:bg-black/80 text-${primaryColor}`}`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-white/80"}`}>{feature.title}</h3>
                      <p className={`transition-colors duration-300 text-sm ${isActive ? "text-gray-600 dark:text-white/60" : "text-gray-500 dark:text-white/40"}`}>{feature.description}</p>
                      <div className="mt-4 bg-white dark:bg-black/80 rounded-sm h-1 overflow-hidden">
                        {isActive && (
                          <motion.div className={`h-full ${progressGradientLight} dark:${progressGradientDark}`} initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1, ease: "linear" }} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Right Side - Image Display */}
          <div className="relative order-1 max-w-lg mx-auto lg:order-2">
            <motion.div key={currentFeature} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5, ease: "easeOut" }} className="relative">
              <img className="rounded-2xl border dark:border-none border-gray-50 shadow-lg dark:drop-shadow-lg" src={features[currentFeature].image} alt={features[currentFeature].title} width={600} height={400} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 