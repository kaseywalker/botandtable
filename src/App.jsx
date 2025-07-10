import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import ReportPage from './components/ReportPage';
import IpadFormApp from './components/ui/IpadFormApp';
import TestPage from './components/TestPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ServicesSection />
            <ProblemSection />
            <SolutionSection />
            <AICommunicationSectionWithRobot />
            <SocialProofSection />
            <FinalCTASection />
          </>
        } />
        <Route path="/funnel" element={<IpadFormApp />} />
        <Route path="/report" element={<ReportPageWrapper />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Wrapper to pass location state to ReportPage
function ReportPageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  // Always render ReportPage, even if no state is present
  return <ReportPage formData={location.state?.formData} onStartOver={() => navigate('/')} />;
}

export default App;

