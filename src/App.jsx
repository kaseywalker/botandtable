import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import HomePage from './components/TestPage';
import SmsMarketingPage from './components/SmsMarketingPage';
import EmailMarketingPage from './components/EmailMarketingPage';
import AiPhoneAnsweringPage from './components/AiPhoneAnsweringPage';
import PersonalizedMarketingPage from './components/PersonalizedMarketingPage';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/funnel" element={<IpadFormApp />} />
        <Route path="/report" element={<ReportPageWrapper />} />
        <Route path="/sms-marketing" element={<SmsMarketingPage />} />
        <Route path="/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/ai-phone-answering" element={<AiPhoneAnsweringPage />} />
        <Route path="/personalized-marketing" element={<PersonalizedMarketingPage />} />
      </Routes>
      <Footer />
    </>
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

