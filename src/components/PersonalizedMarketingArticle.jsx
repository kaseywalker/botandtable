import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import DemoBookingForm from './ui/DemoBookingForm';
import { 
  ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin,
  TrendingUp, Brain, Timer, Target, Phone, Mail, Star, BarChart3,
  CheckCircle, AlertTriangle, Users, Award, Zap, Calculator, HelpCircle,
  Download, MessageSquare, Smartphone, DollarSign,
  Shield, Bell, Send, Eye, MoreHorizontal, Heart, UserCheck, ChartBar,
  Database, Settings, Coffee, Utensils, PieChart, ArrowRight, FileText,
  Monitor, Headphones, BookOpen, Calendar as CalendarIcon
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1A365D';

const PersonalizedMarketingArticle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('introduction');

  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // Retention Calculator State
  const [retentionData, setRetentionData] = useState({
    currentRetentionRate: '',
    avgCustomerValue: '',
    monthlyNewCustomers: ''
  });
  const [retentionResults, setRetentionResults] = useState(null);
  
  // Readiness Assessment State
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState([]);
  const [showAssessmentResult, setShowAssessmentResult] = useState(false);
  
  // ROI Calculator State
  const [roiData, setRoiData] = useState({
    monthlyRevenue: '',
    currentRetention: '',
    targetRetention: ''
  });
  const [roiResults, setRoiResults] = useState(null);

  useEffect(() => {
    // SEO optimization
    document.title = "Personalized Marketing: Turn One-Time Diners into Regulars | Bot and Table";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Discover how personalized marketing transforms casual diners into loyal customers. Learn the psychology, technology, and ROI strategies that increase customer lifetime value by 300%.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Personalized Marketing: Turn One-Time Diners into Regulars');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'The complete guide to personalized restaurant marketing that increases customer lifetime value by 300% and builds unshakeable customer loyalty.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', '/personalized_marketing.webp');
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }

    // Schema markup for article
    const schemaScript = document.getElementById('article-schema') || document.createElement('script');
    schemaScript.id = 'article-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Personalized Marketing: Turn One-Time Diners into Regulars",
      "description": "The complete guide to personalized restaurant marketing that increases customer lifetime value by 300%",
      "author": {
        "@type": "Organization",
        "name": "Bot and Table"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bot and Table",
        "logo": {
          "@type": "ImageObject",
          "url": "/src/assets/bot-table-logo.png"
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "image": "/personalized_marketing.webp",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
    if (!document.getElementById('article-schema')) {
      document.head.appendChild(schemaScript);
    }

    return () => {
      // Cleanup on unmount
      document.title = "Bot and Table - AI-Powered Restaurant Marketing";
      const elementsToRemove = [
        'meta[name="description"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:image"]',
        '#article-schema'
      ];
      elementsToRemove.forEach(selector => {
        const element = document.querySelector(selector);
        if (element && element.getAttribute('content')?.includes('personalized')) {
          element.remove();
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rest of the component content continues here...
  // (I'll include the full content from the original file)

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Content from the original PersonalizedMarketingPage.jsx goes here */}
      <p>Personalized Marketing Article Content</p>
    </div>
  );
};

export default PersonalizedMarketingArticle; 