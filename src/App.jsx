import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import { AICommunicationSectionWithRobot } from './components/ai-communication-section-with-robot';
import ServicesSection from './components/ServicesSection';
import SocialProofSection from './components/SocialProofSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import AboutPage from './components/AboutPage';
import SolutionsPage from './components/SolutionsPage';
import ResourcesPage from './components/ResourcesPage';
import IpadMockup from './components/ui/IphoneMockup';
import { GooglePlacesAutocomplete } from './components/ui/GooglePlacesAutocomplete';
import botTableLogo from './assets/bot-table-logo.png';
import TypewriterText from './components/ui/TypewriterText';
import RobotIcon from '/assets/bot-table-robot.svg';
import { AICommunicationIconCloudWithRobot } from './components/ai-communication-demo-with-robot';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const sampleReviews = [
  {
    author: 'Jane D.',
    rating: 5,
    text: 'Amazing food and friendly staff! Highly recommend this place to anyone in town.'
  },
  {
    author: 'Mike S.',
    rating: 4,
    text: 'Great atmosphere and delicious menu. Will come back again!'
  },
  {
    author: 'Lisa P.',
    rating: 5,
    text: 'Best restaurant experience I have had in years. The service was top notch.'
  }
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SolutionSection />
        <AICommunicationSectionWithRobot />
        <ServicesSection />
        <ProblemSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

function BotTableDifferenceSection() {
  return (
    <section className="py-16 bg-bot-table-cream">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Left: Text/Benefits */}
        <div className="flex-1 min-w-0 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Bot & Table Difference</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Bot & Table isn't just another marketing tool or agency. We're the first AI marketing system built specifically for restaurants that truly operates on autopilot. While other solutions require constant management and manual work, our AI handles everything from customer acquisition to retention without you lifting a finger.
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">&#10003;</span>
              <span><strong>AI-Powered Automation:</strong> Complete marketing automation that learns and improves automatically.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">&#10003;</span>
              <span><strong>Set It and Forget It:</strong> No meetings, no approvals, no constant management required.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-700 font-bold mr-3 mt-1">A</span>
              <span><strong>Restaurant-Specific:</strong> Built specifically for restaurant operations and customer behavior.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">!</span>
              <span><strong>24/7 Operation:</strong> Works around the clock to grow your customer base.</span>
            </li>
          </ul>
        </div>
        {/* Right: Animation */}
        <div className="flex-1 flex justify-center items-center w-full mt-8 lg:mt-0">
          <div className="w-full max-w-[350px] h-[350px]">
            <AICommunicationIconCloudWithRobot />
          </div>
        </div>
      </div>
    </section>
  );
}

function Homepage2() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [monthlySales, setMonthlySales] = useState('');
  const [step, setStep] = useState('select'); // 'select' | 'sales'
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [showFollowup, setShowFollowup] = useState(false);

  const handlePlaceSelect = (place) => {
    setSelectedPlace({
      name: place.displayName?.text || place.name || '',
      address: place.formattedAddress || '',
      rating: place.rating || (4 + Math.random()), // fallback for demo
      reviews: place.userRatingsTotal || Math.floor(Math.random() * 200 + 50), // fallback for demo
    });
    setStep('sales');
  };

  const handleSalesSubmit = (e) => {
    e.preventDefault();
    // Here you would navigate to a results page or show results
    console.log("Sales submitted:", { selectedPlace, monthlySales });
    // For demo purposes, let's just log and maybe reset
    alert(`Calculating for ${selectedPlace.name} with monthly sales of $${monthlySales}`);
  };

  // Reset typewriter/followup when step changes to 'select'
  useEffect(() => {
    if (step === 'select') {
      setTypewriterDone(false);
      setShowFollowup(false);
    }
  }, [step]);

  useEffect(() => {
    if (typewriterDone) {
      const timeout = setTimeout(() => setShowFollowup(true), 2500);
      return () => clearTimeout(timeout);
    }
  }, [typewriterDone]);

  return (
    <div className="min-h-screen bg-bot-table-cream flex flex-col items-center">
      <Header />
      <section className="bg-gradient-to-br from-cream-50 to-white w-full py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-[650px]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-tight text-center px-4 sm:px-0 max-w-5xl mx-auto">
            See How Much Revenue Your Restaurant Is Losing
          </h1>
          <div className="flex-1 flex justify-center items-center min-w-[320px] max-w-md">
            <IpadMockup>
              <div className="flex flex-col w-full h-full p-8 gap-4 relative">
                {step === 'select' && (
                  <>
                    {/* Top: Text content */}
                    <div className="flex items-start w-full max-w-[380px] mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-700 flex items-center justify-center overflow-hidden mr-3 mt-1">
                        <img src={RobotIcon} alt="Robot" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 pl-2">
                        {!typewriterDone && (
                          <>
                            <TypewriterText
                              text="Our AI found restaurants like yours are missing $3,200+ monthly in hidden revenue. Discover your exact number in 60 seconds."
                              speed={30}
                              className="block text-base md:text-lg font-mono text-green-200 text-left max-w-[340px]"
                              onAnimationEnd={() => setTypewriterDone(true)}
                            />
                            <div className="w-full text-left max-w-[340px]">
                              <span className="font-mono text-gray-400">Generating
                                <span className="inline-block align-baseline ml-1">
                                  <span className="dot dot1">.</span>
                                  <span className="dot dot2">.</span>
                                  <span className="dot dot3">.</span>
                                </span>
                              </span>
                            </div>
                          </>
                        )}
                        {typewriterDone && (
                          <>
                            <span className="block text-base md:text-lg font-mono text-green-200 text-left max-w-[340px]">Our AI found restaurants like yours are missing $3,200+ monthly in hidden revenue. Discover your exact number in 60 seconds.</span>
                            {showFollowup && (
                              <div className="w-full text-left max-w-[340px] mt-3">
                                <TypewriterText
                                  text="Enter your restaurant to get your free report."
                                  speed={30}
                                  className="font-mono text-blue-200"
                                />
                                <div className="w-full text-left max-w-[340px]">
                                  <span className="font-mono text-gray-400">Generating
                                    <span className="inline-block align-baseline ml-1">
                                      <span className="dot dot1">.</span>
                                      <span className="dot dot2">.</span>
                                      <span className="dot dot3">.</span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {/* Bottom: Input area */}
                    <div className="w-full flex flex-col items-center z-30 mt-auto mb-[75px]">
                      <div className="w-[98%] max-w-[425px] flex items-center justify-center">
                        <GooglePlacesAutocomplete
                          onPlaceSelected={handlePlaceSelect}
                          placeholder="Type your restaurant"
                        />
                      </div>
                    </div>
                  </>
                )}
                {step === 'sales' && selectedPlace && (
                  <div className="flex flex-col items-center justify-center h-full text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">One Last Step for {selectedPlace.name}</h2>
                    <p className="text-gray-300 mb-6 max-w-xs">To calculate your potential revenue growth, please provide your approximate monthly sales.</p>
                    <form onSubmit={handleSalesSubmit} className="flex flex-col items-center gap-4">
                      <div className="w-full max-w-xs">
                        <Input
                          type="number"
                          value={monthlySales}
                          onChange={(e) => setMonthlySales(e.target.value)}
                          placeholder="e.g., 50000"
                          className="text-center bg-gray-800 border-gray-600 placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <Button type="submit" size="lg">Calculate My Revenue</Button>
                    </form>
                    <button onClick={() => setStep('select')} className="text-sm text-gray-400 mt-4 hover:underline">
                      &larr; Back to search
                    </button>
                  </div>
                )}
              </div>
            </IpadMockup>
          </div>
        </div>
      </section>
      <BotTableDifferenceSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage2" element={<Homepage2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

