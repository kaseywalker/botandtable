import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import HomePage from './components/TestPage';
import SmsMarketingPage from './components/SmsMarketingPage';
import EmailMarketingPage from './components/EmailMarketingPage';
import AiPhoneAnsweringPage from './components/AiPhoneAnsweringPage';
import PersonalizedMarketingPage from './components/PersonalizedMarketingPage';
import PersonalizedMarketingArticle from './components/PersonalizedMarketingArticle';
import GoogleReviewsPage from './components/GoogleReviewsPage';
import ResourcesPage from './components/ResourcesPage';
import ArticlePage from './components/ArticlePage';
import WhyBestCustomersNeverLeaveReviews from './components/WhyBestCustomersNeverLeaveReviews';
import FunnelPage from './components/FunnelPage';
import TurningAngryCustomersIntoAdvocates from './components/TurningAngryCustomersIntoAdvocates';
import PhoneProblemArticle from './components/PhoneProblemArticle';
import FromChaosToCashArticle from './components/FromChaosToCashArticle';
import GoogleReviewsStrategies from './components/GoogleReviewsStrategies';
import SmsMarketingGuide from './components/SmsMarketingGuide';
import AIInRestaurantsGuide from './components/AIInRestaurantsGuide';
import BuildingFiveStarReputation from './components/BuildingFiveStarReputation';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import SitemapPage from './components/SitemapPage';

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
        <Route path="/funnel" element={<FunnelPage />} />
        <Route path="/report" element={<ReportPageWrapper />} />
        <Route path="/sms-marketing" element={<SmsMarketingPage />} />
        <Route path="/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/ai-phone-answering" element={<AiPhoneAnsweringPage />} />
        <Route path="/personalized-marketing" element={<PersonalizedMarketingPage />} />
        <Route path="/google-reviews" element={<GoogleReviewsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/articles/the-50000-mistake" element={<ArticlePage />} />
        <Route path="/articles/why-best-customers-never-leave-reviews" element={<WhyBestCustomersNeverLeaveReviews />} />
        <Route path="/articles/turning-angry-customers-into-advocates" element={<TurningAngryCustomersIntoAdvocates />} />
        <Route path="/articles/the-27000-phone-problem" element={<PhoneProblemArticle />} />
        <Route path="/articles/from-chaos-to-cash" element={<FromChaosToCashArticle />} />
        <Route path="/articles/google-reviews-strategies" element={<GoogleReviewsStrategies />} />
        <Route path="/articles/restaurant-sms-marketing" element={<SmsMarketingGuide />} />
        <Route path="/articles/email-marketing-best-practices-2025" element={<EmailMarketingPage />} />
        <Route path="/articles/personalized-marketing-guide" element={<PersonalizedMarketingArticle />} />
        <Route path="/articles/ai-in-restaurants-complete-guide" element={<AIInRestaurantsGuide />} />
        <Route path="/articles/building-five-star-reputation" element={<BuildingFiveStarReputation />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
      <Footer />
    </>
  );
}

// Wrapper to pass location state to ReportPage
function ReportPageWrapper() {
  const location = useLocation();
  return <ReportPage location={location} />;
}

export default App;

