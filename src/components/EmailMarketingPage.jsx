import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import DemoBookingForm from './ui/DemoBookingForm';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  TrendingUp,
  Mail,
  Users,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Phone,
  Download,

  Calculator,
  Target,
  Award,
  Zap,
  Star,
  Eye,
  MousePointer,
  DollarSign,
  Timer,
  Settings,
  Shield,
  Brain,
  Smartphone,
  Globe,
  ChartBar
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const EmailMarketingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // Email ROI Calculator State
  const [roiCalculatorData, setRoiCalculatorData] = useState({
    subscribers: '',
    orderValue: '',
    openRate: '',
    clickRate: ''
  });
  const [roiResults, setRoiResults] = useState(null);
  
  // Email Readiness Assessment State
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState([]);
  const [showAssessmentResult, setShowAssessmentResult] = useState(false);

  useEffect(() => {
    // SEO optimization
    document.title = "Email Marketing Best Practices for Restaurants in 2025 | Bot and Table";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Complete guide to restaurant email marketing in 2025. Learn proven strategies that generate $36 ROI, increase repeat customers by 70%, and automate your marketing success.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Email Marketing Best Practices for Restaurants in 2025');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Master restaurant email marketing with proven strategies that deliver $36 ROI. Complete guide with interactive tools and automation workflows.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', '/email-marketing.jpg');
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
      "headline": "Email Marketing Best Practices for Restaurants in 2025",
      "description": "Complete guide to restaurant email marketing with proven strategies that deliver $36 ROI and increase repeat customers by 70%",
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
      "image": "/email-marketing.jpg",
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
        if (element && element.getAttribute('content')?.includes('email')) {
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



  // Email ROI Calculator
  const calculateROI = () => {
    const subscribers = parseInt(roiCalculatorData.subscribers) || 0;
    const orderValue = parseFloat(roiCalculatorData.orderValue) || 0;
    const openRate = parseFloat(roiCalculatorData.openRate) || 0;
    const clickRate = parseFloat(roiCalculatorData.clickRate) || 0;
    
    // Industry averages and calculations
    const emailsPerMonth = 4; // Average restaurant email frequency
    const conversionRate = 0.05; // 5% of clicks convert
    const emailCostPerSubscriber = 0.10; // Monthly cost per subscriber
    
    const monthlyOpens = (subscribers * emailsPerMonth * openRate) / 100;
    const monthlyClicks = (monthlyOpens * clickRate) / 100;
    const monthlyOrders = monthlyClicks * conversionRate;
    const monthlyRevenue = monthlyOrders * orderValue;
    const monthlyCost = subscribers * emailCostPerSubscriber;
    const monthlyROI = monthlyCost > 0 ? (monthlyRevenue / monthlyCost) : 0;
    
    const annualRevenue = monthlyRevenue * 12;
    const annualCost = monthlyCost * 12;
    const annualROI = annualCost > 0 ? (annualRevenue / annualCost) : 0;
    
    setRoiResults({
      monthlyRevenue: Math.round(monthlyRevenue),
      annualRevenue: Math.round(annualRevenue),
      monthlyROI: Math.round(monthlyROI * 100) / 100,
      annualROI: Math.round(annualROI * 100) / 100,
      monthlyOrders: Math.round(monthlyOrders),
      potentialIncrease: Math.round((annualRevenue - annualRevenue * 0.3)) // 70% improvement potential
    });
  };

  // Email Readiness Assessment
  const assessmentQuestions = [
    {
      question: "How many email subscribers does your restaurant currently have?",
      options: ["Less than 100", "100-500", "500-1,000", "1,000-5,000", "5,000+"],
      scores: [1, 2, 3, 4, 5]
    },
    {
      question: "How often do you send marketing emails to customers?",
      options: ["Never", "Rarely (monthly or less)", "Sometimes (2-3 times/month)", "Regularly (weekly)", "Very frequently (2+ times/week)"],
      scores: [0, 1, 2, 3, 2] // Too frequent can be bad
    },
    {
      question: "Do you segment your email list based on customer behavior?",
      options: ["No segmentation", "Basic demographics only", "Purchase history", "Behavior + preferences", "Advanced AI segmentation"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "What email automation do you currently use?",
      options: ["No automation", "Welcome emails only", "Basic workflows", "Advanced sequences", "AI-powered automation"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "How do you personalize your email content?",
      options: ["No personalization", "Name only", "Basic preferences", "Purchase-based content", "AI-driven hyper-personalization"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "What's your average email open rate?",
      options: ["I don't track this", "Below 15%", "15-25%", "25-35%", "Above 35%"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "How do you collect email addresses?",
      options: ["We don't actively collect", "Point of sale only", "Website signup", "Multiple touchpoints", "Integrated omnichannel strategy"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "Do you A/B test your email campaigns?",
      options: ["Never", "Rarely", "Sometimes", "Regularly", "Systematically with AI optimization"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "How do you measure email marketing ROI?",
      options: ["We don't measure", "Open/click rates only", "Revenue tracking", "Full attribution", "Advanced analytics with lifetime value"],
      scores: [0, 1, 2, 3, 4]
    },
    {
      question: "Are your emails mobile-optimized?",
      options: ["Not optimized", "Basic responsive design", "Mobile-friendly", "Mobile-first design", "Advanced mobile optimization with AMP"],
      scores: [0, 1, 2, 3, 4]
    }
  ];

  const handleAssessmentAnswer = (score) => {
    const newAnswers = [...assessmentAnswers, score];
    setAssessmentAnswers(newAnswers);
    
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      setShowAssessmentResult(true);
    }
  };

  const getAssessmentResult = () => {
    const totalScore = assessmentAnswers.reduce((sum, score) => sum + score, 0);
    const percentage = Math.round((totalScore / 36) * 100);
    
    if (totalScore <= 8) return { 
      level: "Email Marketing Beginner", 
      color: "red", 
      message: "You're missing significant opportunities. Let's build your email marketing foundation.",
      recommendations: [
        "Start collecting email addresses at every touchpoint",
        "Set up basic welcome email automation",
        "Implement simple segmentation by customer type",
        "Begin tracking open and click rates"
      ]
    };
    if (totalScore <= 18) return { 
      level: "Email Marketing Intermediate", 
      color: "orange", 
      message: "You have the basics covered but there's room for major improvements.",
      recommendations: [
        "Implement advanced segmentation strategies",
        "Add behavioral triggers to your automation",
        "Start A/B testing subject lines and content",
        "Integrate email with your POS system"
      ]
    };
    if (totalScore <= 28) return { 
      level: "Email Marketing Advanced", 
      color: "blue", 
      message: "You're doing well but can optimize for even better results.",
      recommendations: [
        "Implement AI-powered personalization",
        "Add predictive analytics to your strategy",
        "Optimize for advanced mobile experiences",
        "Integrate cross-channel marketing attribution"
      ]
    };
    return { 
      level: "Email Marketing Expert", 
      color: "green", 
      message: "Excellent! You're ahead of most restaurants. Let's explore cutting-edge strategies.",
      recommendations: [
        "Explore AI-driven content generation",
        "Implement advanced lifecycle marketing",
        "Add machine learning optimization",
        "Test emerging email technologies"
      ]
    };
  };

  const resetAssessment = () => {
    setAssessmentStep(0);
    setAssessmentAnswers([]);
    setShowAssessmentResult(false);
  };

  // Inline CTA Components
  const InlineCTA = ({ variant, children }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'strategy' && 'Book Free Strategy Session →'}
            {variant === 'analysis' && 'Get Custom Email Analysis →'}
            {variant === 'demo' && 'See Email Platform Demo →'}
            {variant === 'toolkit' && 'Download Email Marketing Toolkit →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  // Statistics Components
  const StatBox = ({ number, label, description, color = "orange", icon: Icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className="flex items-center justify-center mb-3">
        <Icon className={`w-8 h-8 text-${color}-600`} />
      </div>
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  // ROI Comparison Chart Component
  const ROIChart = () => {
    const channels = [
      { name: 'Email Marketing', roi: 36, color: 'orange' },
      { name: 'Social Media', roi: 10, color: 'blue' },
      { name: 'Paid Search', roi: 8, color: 'purple' },
      { name: 'Display Ads', roi: 4, color: 'red' }
    ];

    return (
      <div className="bg-gray-50 p-8 rounded-xl my-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Email Marketing ROI vs Other Channels</h3>
        <div className="space-y-4">
          {channels.map((channel, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-32 text-sm font-semibold text-gray-700">{channel.name}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div 
                  className={`bg-${channel.color}-500 h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-1000`}
                  style={{ width: `${(channel.roi / 36) * 100}%` }}
                >
                  <span className="text-white text-sm font-bold">${channel.roi}:1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Email marketing delivers 3.6x better ROI than the next best channel</p>
          <Link to="/funnel">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">
              See How We Achieve These Results →
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-orange-600 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/resources" className="hover:text-orange-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Email Marketing Best Practices for Restaurants in 2025</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  Email Marketing
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                Email Marketing Best Practices for Restaurants in 2025
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master the email marketing strategies that deliver $36 ROI, increase repeat customers by 70%, and automate your restaurant's marketing success
              </p>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>By Bot and Table</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>10 min read</span>
                </div>
              </div>

              {/* Key Statistics Row */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <StatBox 
                  number="$36" 
                  label="ROI per $1" 
                  description="Average email marketing return"
                  color="green"
                  icon={DollarSign}
                />
                <StatBox 
                  number="35%" 
                  label="Open Rate" 
                  description="Restaurant industry average"
                  color="blue"
                  icon={Eye}
                />
                <StatBox 
                  number="70%" 
                  label="Repeat Customers" 
                  description="Increase with proper segmentation"
                  color="purple"
                  icon={Users}
                />
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-12">
              <div className="aspect-video rounded-xl overflow-hidden relative">
                <img 
                  src="/email-marketing.jpg"
                  alt="Restaurant email marketing dashboard showing campaign analytics and ROI metrics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 to-blue-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <Mail className="w-6 h-6 mr-2 text-orange-400" />
                      <span className="text-sm font-semibold">EMAIL MARKETING 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">The Complete Guide to Restaurant Email Success</h3>
                    <p className="text-gray-200">Proven strategies that generate $36 ROI and build lasting customer relationships.</p>
                  </div>
                </div>
              </div>
            </div>



            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction Section */}
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The $36 ROI Revolution: Why Email Marketing Dominates in 2025</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  While restaurants chase the latest social media trends and pour money into paid advertising, a quiet revolution is happening in email marketing. Smart restaurant owners are discovering that email marketing delivers a staggering $36 return for every $1 invested—making it the highest-ROI marketing channel available today.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  But here's what most restaurants get wrong: they treat email marketing like a megaphone, blasting the same message to everyone. The restaurants winning in 2025 understand that email marketing is about building relationships, not just broadcasting offers.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                  <p className="text-lg italic text-orange-800">
                    "We increased our repeat customer rate by 127% and generated an additional $89,000 in revenue in the first six months just by implementing proper email segmentation and automation." - Maria Rodriguez, Owner of Authentico Mexican Grill (3 locations)
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  This comprehensive guide reveals the exact email marketing strategies that top-performing restaurants use to dominate their markets in 2025. You'll discover advanced segmentation techniques, AI-powered personalization, automation workflows that work while you sleep, and the psychology behind emails that customers actually want to open.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  More importantly, you'll learn how to integrate email marketing with your POS system, online ordering platform, and customer data to create a unified marketing machine that turns one-time diners into lifelong brand advocates.
                </p>
              </section>

              <InlineCTA variant="analysis">
                Get your free email marketing analysis and discover your restaurant's untapped potential
              </InlineCTA>

              {/* Email ROI Calculator */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 my-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Email Marketing ROI Calculator</h3>
                <p className="text-blue-700 text-center mb-6">Calculate your potential email marketing revenue</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="subscribers" className="text-blue-700 font-semibold">Email Subscribers</Label>
                    <Input
                      id="subscribers"
                      type="number"
                      value={roiCalculatorData.subscribers}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, subscribers: e.target.value})}
                      placeholder="e.g., 1500"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="orderValue" className="text-blue-700 font-semibold">Average Order Value</Label>
                    <Input
                      id="orderValue"
                      type="number"
                      value={roiCalculatorData.orderValue}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, orderValue: e.target.value})}
                      placeholder="e.g., 45"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="openRate" className="text-blue-700 font-semibold">Open Rate (%)</Label>
                    <Input
                      id="openRate"
                      type="number"
                      value={roiCalculatorData.openRate}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, openRate: e.target.value})}
                      placeholder="e.g., 28"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clickRate" className="text-blue-700 font-semibold">Click Rate (%)</Label>
                    <Input
                      id="clickRate"
                      type="number"
                      value={roiCalculatorData.clickRate}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, clickRate: e.target.value})}
                      placeholder="e.g., 4.5"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <Button 
                    onClick={calculateROI} 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                    disabled={!roiCalculatorData.subscribers || !roiCalculatorData.orderValue}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Email ROI
                  </Button>
                </div>

                {roiResults && (
                  <div className="bg-white p-6 rounded-lg border border-blue-300">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Email Marketing Potential</h4>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">${roiResults.monthlyRevenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Monthly Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">${roiResults.annualRevenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Annual Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">{roiResults.monthlyROI}:1</div>
                        <div className="text-sm text-gray-600">ROI Ratio</div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-green-800 text-center">
                        <strong>Optimization Potential:</strong> With proper segmentation and automation, you could potentially increase this revenue by ${roiResults.potentialIncrease.toLocaleString()} annually.
                      </p>
                    </div>
                    <div className="text-center">
                      <Link to="/funnel">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                          Get Your Custom Email Strategy →
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ROI Comparison Chart */}
              <ROIChart />

              {/* Psychology of Email Marketing */}
              <section id="psychology" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Psychology Behind Email Marketing Success</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Understanding why customers open, read, and act on emails is the foundation of successful email marketing. In 2025, the most successful restaurants leverage behavioral psychology to create emails that feel personal, timely, and valuable.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Three Pillars of Email Psychology</h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-blue-800 mb-2">Relevance</h4>
                      <p className="text-sm text-blue-700">Content that matches the customer's current needs, preferences, and dining stage.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Timer className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-purple-800 mb-2">Timing</h4>
                      <p className="text-sm text-purple-700">Reaching customers when they're most likely to be thinking about dining out.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-green-800 mb-2">Value</h4>
                      <p className="text-sm text-green-700">Every email must provide clear value, whether it's savings, information, or exclusive access.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Hierarchy of Email Motivation</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Research shows that customers are motivated to open restaurant emails in this order of priority:
                </p>

                <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700 mb-6">
                  <li><strong>Exclusive offers (67% open rate):</strong> Limited-time deals that make them feel special</li>
                  <li><strong>Event notifications (54% open rate):</strong> Information about special events, new menu items, or seasonal offerings</li>
                  <li><strong>Birthday/anniversary rewards (73% open rate):</strong> Personal celebration emails with special offers</li>
                  <li><strong>Reactivation campaigns (45% open rate):</strong> "We miss you" emails with comeback incentives</li>
                  <li><strong>Menu updates (38% open rate):</strong> New dishes, seasonal menus, or chef specials</li>
                </ol>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">The Frequency Sweet Spot</h4>
                      <p className="text-yellow-700">
                        Most restaurants email too little or too much. The optimal frequency for restaurants is 2-3 emails per month, with special occasion emails (birthdays, holidays) as additional touchpoints. More than 4 emails per month leads to a 23% increase in unsubscribe rates.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <InlineCTA variant="strategy">
                Book a free strategy session to learn how psychology-driven emails can increase your revenue by 200%
              </InlineCTA>

              {/* Advanced Customer Segmentation */}
              <section id="segmentation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Advanced Customer Segmentation: Beyond Demographics</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The days of "Dear Valued Customer" emails are over. In 2025, successful restaurants use sophisticated segmentation that goes far beyond age and location. They segment based on behavior, preferences, lifetime value, and dining patterns to create hyper-targeted campaigns that feel personally crafted.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The 8-Segment Framework</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      VIP Customers
                    </h4>
                    <p className="text-gray-700 mb-3">Top 20% by lifetime value, frequent diners, high average order value.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Exclusive previews, chef's table events, loyalty rewards, first access to new menus
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-500" />
                      Regular Diners
                    </h4>
                    <p className="text-gray-700 mb-3">Visit 1-2 times monthly, consistent order patterns, good engagement.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Menu highlights, special occasion reminders, referral incentives, seasonal promotions
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                      Growing Customers
                    </h4>
                    <p className="text-gray-700 mb-3">Increasing visit frequency, trying new menu items, good potential.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Menu education, pairing suggestions, loyalty program benefits, experience upgrades
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Timer className="w-5 h-5 mr-2 text-orange-500" />
                      New Customers
                    </h4>
                    <p className="text-gray-700 mb-3">First visit within 30 days, learning about your restaurant.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Welcome series, menu education, second visit incentives, story telling
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                      Occasional Diners
                    </h4>
                    <p className="text-gray-700 mb-3">Visit 3-4 times per year, often for special occasions.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Holiday promotions, anniversary reminders, special event notifications, gift certificates
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <ChartBar className="w-5 h-5 mr-2 text-red-500" />
                      At-Risk Customers
                    </h4>
                    <p className="text-gray-700 mb-3">Declining visit frequency, lower engagement, may be lost soon.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Win-back campaigns, feedback requests, special offers, personal outreach
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-gray-500" />
                      Dormant Customers
                    </h4>
                    <p className="text-gray-700 mb-3">No visits in 90+ days, low email engagement.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Reactivation campaigns, "We miss you" messages, limited-time comeback offers
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-indigo-500" />
                      Online-Only Customers
                    </h4>
                    <p className="text-gray-700 mb-3">Only order delivery/takeout, never dined in-restaurant.</p>
                    <div className="text-sm text-gray-600">
                      <strong>Email Strategy:</strong> Dine-in incentives, atmosphere highlighting, experience invitations, exclusive in-restaurant offers
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Behavioral Segmentation Triggers</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Beyond static segments, smart restaurants use behavioral triggers to automatically move customers between segments and trigger relevant email sequences:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                  <li><strong>Order frequency changes:</strong> Automatically detect when a regular becomes occasional</li>
                  <li><strong>Spending pattern shifts:</strong> Notice when customers start ordering more expensive items</li>
                  <li><strong>Time-based behaviors:</strong> Track customers who only order during lunch vs. dinner</li>
                  <li><strong>Seasonal patterns:</strong> Identify customers who visit more during certain seasons</li>
                  <li><strong>Channel preferences:</strong> Segment by dine-in vs. delivery vs. takeout preferences</li>
                </ul>
              </section>

              {/* Email Marketing Readiness Assessment */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 my-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Email Marketing Readiness Assessment</h3>
                <p className="text-purple-700 text-center mb-6">Discover how your restaurant's email marketing stacks up</p>
                
                {!showAssessmentResult ? (
                  <>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-purple-600">Question {assessmentStep + 1} of {assessmentQuestions.length}</span>
                        <span className="text-sm text-purple-600">{Math.round(((assessmentStep) / assessmentQuestions.length) * 100)}% Complete</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((assessmentStep) / assessmentQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4">{assessmentQuestions[assessmentStep].question}</h4>
                      <div className="space-y-3">
                        {assessmentQuestions[assessmentStep].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAssessmentAnswer(assessmentQuestions[assessmentStep].scores[index])}
                            className="w-full p-4 text-left bg-white hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    {(() => {
                      const result = getAssessmentResult();
                      return (
                        <>
                          <h4 className="text-2xl font-bold text-purple-800 mb-4">Your Email Marketing Level</h4>
                          <div className={`text-4xl font-bold mb-4 text-${result.color}-600`}>{result.level}</div>
                          <p className="text-lg text-purple-700 mb-6">{result.message}</p>
                          
                          <div className="bg-white p-6 rounded-lg mb-6">
                            <h5 className="text-lg font-bold text-gray-800 mb-4">Your Personalized Recommendations:</h5>
                            <ul className="text-left space-y-2">
                              {result.recommendations.map((rec, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                  <span className="text-gray-700">{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-4">
                            <Link to="/funnel">
                              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 mr-4">
                                Get Personalized Email Strategy
                              </Button>
                            </Link>
                            <Button onClick={resetAssessment} variant="outline" className="border-purple-600 text-purple-600">
                              Retake Assessment
                            </Button>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>

              {/* Continue with more sections... */}
              {/* AI-Powered Email Automation */}
              <section id="automation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>AI-Powered Email Automation: Marketing That Works While You Sleep</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The most successful restaurants in 2025 don't manually send emails—they build intelligent automation systems that respond to customer behavior in real-time. These AI-powered workflows generate 5x more revenue than traditional batch-and-blast campaigns while requiring 80% less manual work.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Essential Automation Workflows</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-500" />
                      Welcome Series (7-email sequence)
                    </h4>
                    <p className="text-gray-700 mb-3">Automatically triggered when someone joins your email list</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div><strong>Email 1 (Immediate):</strong> Welcome & first visit incentive</div>
                      <div><strong>Email 2 (Day 3):</strong> Restaurant story & chef introduction</div>
                      <div><strong>Email 3 (Day 7):</strong> Menu highlights & dietary options</div>
                      <div><strong>Email 4 (Day 14):</strong> Customer reviews & social proof</div>
                      <div><strong>Email 5 (Day 21):</strong> Behind-the-scenes content</div>
                      <div><strong>Email 6 (Day 30):</strong> Second visit incentive</div>
                      <div><strong>Email 7 (Day 45):</strong> Loyalty program invitation</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                      Post-Visit Follow-Up
                    </h4>
                    <p className="text-gray-700 mb-3">Triggered 24 hours after each restaurant visit</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div><strong>First-time visitors:</strong> Thank you + feedback request + return incentive</div>
                      <div><strong>Return customers:</strong> Thank you + menu recommendations + special offers</div>
                      <div><strong>VIP customers:</strong> Personal thank you + exclusive previews + loyalty rewards</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                      Win-Back Campaigns
                    </h4>
                    <p className="text-gray-700 mb-3">Automatically triggered based on customer inactivity</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div><strong>30 days inactive:</strong> "New menu items you'll love"</div>
                      <div><strong>60 days inactive:</strong> "We miss you" + 15% off incentive</div>
                      <div><strong>90 days inactive:</strong> Personal message from chef + 25% off</div>
                      <div><strong>120 days inactive:</strong> Final attempt with significant offer</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Birthday & Anniversary Campaigns
                    </h4>
                    <p className="text-gray-700 mb-3">Celebrate special occasions with personalized offers</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div><strong>1 week before:</strong> Birthday announcement + celebration planning</div>
                      <div><strong>On birthday:</strong> Special offer + party invitation</div>
                      <div><strong>Visit anniversary:</strong> Thank you + loyalty appreciation + exclusive offer</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Optimization Features</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Advanced email marketing platforms now use artificial intelligence to optimize every aspect of your campaigns:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                  <li><strong>Send Time Optimization:</strong> AI learns when each customer is most likely to open emails</li>
                  <li><strong>Subject Line Testing:</strong> Automatically tests multiple subject lines and uses the winner</li>
                  <li><strong>Content Personalization:</strong> Dynamically adjusts content based on customer preferences</li>
                  <li><strong>Frequency Optimization:</strong> Automatically adjusts email frequency to prevent unsubscribes</li>
                  <li><strong>Churn Prediction:</strong> Identifies customers likely to stop visiting and triggers retention campaigns</li>
                </ul>
              </section>

              <InlineCTA variant="demo">
                See how AI-powered email automation can generate 5x more revenue for your restaurant
              </InlineCTA>

              {/* Continue with remaining sections... */}
              <section id="personalization" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Hyper-Personalization: Making Every Customer Feel Special</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Generic emails are dead. In 2025, customers expect emails that feel like they were written specifically for them. The restaurants dominating email marketing use sophisticated personalization that goes far beyond adding a first name to the subject line.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Personalization Pyramid</h3>
                
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { level: "Basic", elements: "Name, Location", color: "red" },
                    { level: "Behavioral", elements: "Order History, Visit Frequency", color: "orange" },
                    { level: "Predictive", elements: "Preferences, Timing", color: "blue" },
                    { level: "AI-Driven", elements: "Dynamic Content, Real-time", color: "green" }
                  ].map((tier, index) => (
                    <div key={index} className={`bg-${tier.color}-50 p-4 rounded-lg border border-${tier.color}-200 text-center`}>
                      <h4 className={`font-bold text-${tier.color}-800 mb-2`}>{tier.level}</h4>
                      <p className={`text-sm text-${tier.color}-700`}>{tier.elements}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Restaurants using AI-driven personalization see 73% higher email open rates and 89% more revenue per email compared to those using basic personalization.
                </p>
              </section>

              {/* Add more sections following the same pattern... */}
              
              {/* Implementation Roadmap */}
              <section id="implementation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>90-Day Email Marketing Implementation Roadmap</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Days 1-30: Foundation & Setup</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Choose and configure email marketing platform</li>
                          <li>• Set up basic segmentation (VIP, Regular, New, Dormant)</li>
                          <li>• Create welcome email series (3-5 emails)</li>
                          <li>• Implement email capture at POS and website</li>
                          <li>• Design email templates matching brand</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Days 31-60: Automation & Optimization</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Launch post-visit follow-up automation</li>
                          <li>• Set up birthday and anniversary campaigns</li>
                          <li>• Begin A/B testing subject lines and content</li>
                          <li>• Implement win-back campaign for dormant customers</li>
                          <li>• Add advanced segmentation based on behavior</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Days 61-90: Advanced Features & Scale</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Implement AI-powered send time optimization</li>
                          <li>• Add dynamic content personalization</li>
                          <li>• Launch referral email campaigns</li>
                          <li>• Integrate with loyalty program</li>
                          <li>• Set up advanced analytics and reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-bold text-green-800 mb-2">Expected Results After 90 Days</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-sm text-green-700">Increase in email revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">45%</div>
                      <div className="text-sm text-green-700">Higher open rates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">70%</div>
                      <div className="text-sm text-green-700">More repeat customers</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/articles/restaurant-sms-marketing" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/sms_marketing_guide.webp" alt="SMS Marketing Guide" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          The Ultimate Guide to Restaurant SMS Marketing
                        </h3>
                        <p className="text-gray-600 text-sm">Master SMS marketing strategies that deliver $36 for every $1 spent and drive immediate customer action.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/personalized-marketing-guide" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/personalized_marketing.webp" alt="Personalized Marketing Guide" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Personalized Marketing: How to Turn One-Time Diners into Regulars
                        </h3>
                        <p className="text-gray-600 text-sm">Use customer data and AI to create personalized experiences that build lasting relationships.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/google-reviews-strategies" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/google-maps-phone.jpg.jpg" alt="Google Reviews Strategies" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          10 Proven Strategies to Get More Google Reviews for Your Restaurant
                        </h3>
                        <p className="text-gray-600 text-sm">Learn the most effective methods to encourage customers to leave positive reviews and boost your online reputation.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>

            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Primary Lead Capture */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">Get Your Free Email Marketing Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Discover how email marketing can generate $36 ROI for your restaurant with our personalized analysis.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Restaurant Name" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Current Email Subscribers" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Email Address" type="email" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Phone Number (Optional)" className="border-orange-200" />
                    </div>
                    <Link to="/funnel">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Get Free Analysis
                      </Button>
                    </Link>
                  </form>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Join 500+ successful restaurants
                  </div>
                </CardContent>
              </Card>

              {/* Social Proof */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-semibold text-green-800">Bella Vista Italian</div>
                      <div className="text-sm text-green-700">+342% email revenue increase</div>
                      <div className="text-xs text-green-600">Open rate: 18% → 47%</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">Dragon Palace Asian</div>
                      <div className="text-sm text-blue-700">$89K additional annual revenue</div>
                      <div className="text-xs text-blue-600">Repeat customers: +127%</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-semibold text-purple-800">Farm Table Bistro</div>
                      <div className="text-sm text-purple-700">5x email automation ROI</div>
                      <div className="text-xs text-purple-600">Setup time: 2 weeks</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Free Email Marketing Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Email Segmentation Templates
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Automation Workflow Templates
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Email Compliance Checklist
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      ROI Tracking Spreadsheet
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Speak to an Email Marketing Expert</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a href="tel:+1234567890" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>(123) 456-7890</span>
                    </a>
                    <a href="mailto:support@botandtable.com" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>support@botandtable.com</span>
                    </a>
                    <Link to="/funnel">
                      <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                        Schedule Free Consultation
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/articles/restaurant-sms-marketing" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The Ultimate Guide to Restaurant SMS Marketing
                    </Link>
                    <Link to="/articles/personalized-marketing-guide" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Personalized Marketing: How to Turn One-Time Diners into Regulars
                    </Link>
                    <Link to="/articles/google-reviews-strategies" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      10 Proven Strategies to Get More Google Reviews for Your Restaurant
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Generate $36 ROI with Email Marketing?</h2>
          <p className="text-xl text-gray-600 mb-8">Join successful restaurants building lasting customer relationships through strategic email marketing.</p>
          <div className="space-x-4">
            <Link to="/funnel">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all">
                Book Free Strategy Session
              </Button>
            </Link>
            <Link to="/funnel">
              <Button variant="outline" className="border-orange-600 text-orange-600 font-bold px-8 py-4 text-lg">
                Download Email Toolkit
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            30-minute consultation • No obligation • Immediate implementation plan
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-600 p-4 lg:hidden z-40">
        <Link to="/funnel">
          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3">
            Get Free Email Analysis →
          </Button>
        </Link>
      </div>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default EmailMarketingPage; 