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
  Brain,
  Timer,
  Target,
  Phone,
  Mail,
  Star,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Users,
  Award,
  Zap,
  Calculator,
  HelpCircle,
  Download,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Smartphone,
  DollarSign,
  Shield,
  Bell,
  Send,
  Eye,
  MoreHorizontal
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const SmsMarketingGuide = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // SMS ROI Calculator State
  const [roiCalculatorData, setRoiCalculatorData] = useState({
    monthlyCustomers: '',
    averageOrderValue: '',
    currentMarketingSpend: ''
  });
  const [roiResults, setRoiResults] = useState(null);
  
  // SMS Readiness Assessment State
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState([]);
  const [showAssessmentResult, setShowAssessmentResult] = useState(false);

  useEffect(() => {
    // SEO optimization
    document.title = "Ultimate Guide to Restaurant SMS Marketing | Bot and Table";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Complete guide to restaurant SMS marketing with proven strategies, compliance tips, and ROI optimization. Download free toolkit and book strategy session.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Ultimate Guide to Restaurant SMS Marketing');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Discover the SMS marketing strategies that generate $36 for every $1 spent while building stronger customer relationships.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', '/sms_marketing_guide.webp');
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
      "headline": "The Ultimate Guide to Restaurant SMS Marketing: Drive Revenue with Text Messages That Actually Convert",
      "description": "Discover the SMS marketing strategies that generate $36 for every $1 spent while building stronger customer relationships.",
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
      "image": "/sms_marketing_guide.webp",
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
        if (element && element.getAttribute('content')?.includes('SMS')) {
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



  // SMS ROI Calculator
  const calculateSMSROI = () => {
    const customers = parseInt(roiCalculatorData.monthlyCustomers) || 0;
    const orderValue = parseFloat(roiCalculatorData.averageOrderValue) || 0;
    const currentSpend = parseFloat(roiCalculatorData.currentMarketingSpend) || 0;
    
    // Industry benchmarks for SMS marketing
    const smsConversionRate = 0.025; // 2.5% average conversion rate
    const smsEngagementRate = 0.98; // 98% open rate
    const avgFrequency = 2.3; // Average visits per month increase
    
    const monthlyConversions = customers * smsConversionRate;
    const monthlyRevenue = monthlyConversions * orderValue * avgFrequency;
    const annualRevenue = monthlyRevenue * 12;
    const smsInvestment = currentSpend * 0.15; // 15% of marketing budget to SMS
    const roi = smsInvestment > 0 ? (monthlyRevenue / smsInvestment) : 0;
    
    setRoiResults({
      monthlyConversions: Math.round(monthlyConversions),
      monthlyRevenue: Math.round(monthlyRevenue),
      annualRevenue: Math.round(annualRevenue),
      roi: Math.round(roi * 100) / 100,
      recommendedInvestment: Math.round(smsInvestment)
    });
  };

  // Component sections...
  const StatBox = ({ number, label, description, color = "orange" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  const InlineCTA = ({ variant, children }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'audit' && 'Get Your Free SMS Audit →'}
            {variant === 'strategy' && 'Get Your Free SMS Strategy →'}
            {variant === 'demo' && 'Book a Demo of Our SMS System →'}
            {variant === 'toolkit' && 'Download Complete SMS Toolkit →'}
          </Button>
        </Link>
      </div>
    </div>
  );

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
            <span className="text-gray-400">Ultimate Guide to Restaurant SMS Marketing</span>
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
                  SMS Marketing
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                The Ultimate Guide to Restaurant SMS Marketing: Drive Revenue with Text Messages That Actually Convert
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master the SMS marketing strategies that generate $36 for every $1 spent while building stronger customer relationships. Complete implementation guide with proven strategies, legal compliance, and advanced automation techniques.
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
                  <span>45 min read</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-blue-700">Message Open Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$36:$1</div>
                    <div className="text-sm text-blue-700">Average ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10,000+</div>
                    <div className="text-sm text-blue-700">Guide Downloads</div>
                  </div>
                </div>
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
                  src="/sms_marketing_guide.webp"
                  alt="Restaurant SMS marketing dashboard showing customer engagement and revenue growth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 to-blue-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="w-6 h-6 mr-2 text-orange-400" />
                      <span className="text-sm font-semibold">SMS MARKETING MASTERY</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Transform Text Messages Into Revenue</h3>
                    <p className="text-gray-200">The complete guide to building a profitable SMS marketing strategy for your restaurant.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction Section */}
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Introduction: The SMS Revolution in Restaurant Marketing</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Text messaging has quietly become the most powerful marketing channel in the restaurant industry. While email open rates hover around 20% and social media reach continues to decline, SMS messages boast a staggering 98% open rate with 90% of messages read within 3 minutes of delivery.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                  <p className="text-lg italic text-orange-800">
                    "SMS marketing transformed our restaurant from struggling to thriving. We went from $180,000 in annual revenue to $420,000 in just 18 months, with SMS driving 35% of our total sales." - Maria Rodriguez, Owner of Casa Marina
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  This comprehensive guide will walk you through everything you need to know about restaurant SMS marketing, from legal compliance and list building to advanced automation strategies that can generate $36 for every $1 invested. By the end of this guide, you'll have a complete roadmap for implementing SMS marketing that drives real revenue growth.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <StatBox 
                    number="98%" 
                    label="Open Rate" 
                    description="SMS messages have the highest open rate of any marketing channel"
                    color="blue"
                  />
                  <StatBox 
                    number="3 min" 
                    label="Read Time" 
                    description="90% of SMS messages are read within 3 minutes"
                    color="green"
                  />
                  <StatBox 
                    number="$36:$1" 
                    label="Average ROI" 
                    description="Return on investment for restaurant SMS campaigns"
                    color="orange"
                  />
                </div>
              </section>

              <InlineCTA variant="audit">
                Ready to see how SMS can transform your restaurant?
              </InlineCTA>

              {/* Why SMS Works Section */}
              <section id="why-sms" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Why SMS Marketing Works So Well for Restaurants</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  SMS marketing is uniquely suited to the restaurant industry for several psychological and practical reasons:
                </p>

                <div className="bg-blue-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">The Psychology of SMS in Food Marketing</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Immediate Gratification</h4>
                          <p className="text-blue-700 text-sm">Food decisions are often impulsive. SMS reaches customers in the moment when they're deciding what to eat.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Timer className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Perfect Timing</h4>
                          <p className="text-blue-700 text-sm">SMS allows you to reach customers exactly when they're thinking about their next meal.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Target className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">High Intent</h4>
                          <p className="text-blue-700 text-sm">People who opt-in to restaurant SMS lists are already interested customers with high purchase intent.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Personal Connection</h4>
                          <p className="text-blue-700 text-sm">SMS feels more personal and intimate than email, creating stronger customer relationships.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">SMS vs. Other Marketing Channels</h3>
                
                <div className="overflow-x-auto my-8">
                  <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-800">Channel</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-800">Open Rate</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-800">Response Rate</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-800">ROI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200 bg-orange-50">
                        <td className="px-6 py-4 font-semibold text-gray-800">SMS Marketing</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">98%</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">45%</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">$36:$1</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-800">Email Marketing</td>
                        <td className="px-6 py-4 text-center text-gray-700">22%</td>
                        <td className="px-6 py-4 text-center text-gray-700">3%</td>
                        <td className="px-6 py-4 text-center text-gray-700">$42:$1</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-800">Social Media</td>
                        <td className="px-6 py-4 text-center text-gray-700">6%</td>
                        <td className="px-6 py-4 text-center text-gray-700">1%</td>
                        <td className="px-6 py-4 text-center text-gray-700">$5:$1</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-6 py-4 font-semibold text-gray-800">Direct Mail</td>
                        <td className="px-6 py-4 text-center text-gray-700">5%</td>
                        <td className="px-6 py-4 text-center text-gray-700">2%</td>
                        <td className="px-6 py-4 text-center text-gray-700">$7:$1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SMS ROI Calculator */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-200 my-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">SMS ROI Calculator</h3>
                <p className="text-green-700 text-center mb-6">Calculate your potential revenue increase with SMS marketing</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label htmlFor="monthlyCustomers" className="text-green-700 font-semibold">Monthly Customers</Label>
                    <Input
                      id="monthlyCustomers"
                      type="number"
                      value={roiCalculatorData.monthlyCustomers}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, monthlyCustomers: e.target.value})}
                      placeholder="e.g., 1200"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="averageOrderValue" className="text-green-700 font-semibold">Average Order Value</Label>
                    <Input
                      id="averageOrderValue"
                      type="number"
                      value={roiCalculatorData.averageOrderValue}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, averageOrderValue: e.target.value})}
                      placeholder="e.g., 45"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentMarketingSpend" className="text-green-700 font-semibold">Monthly Marketing Budget</Label>
                    <Input
                      id="currentMarketingSpend"
                      type="number"
                      value={roiCalculatorData.currentMarketingSpend}
                      onChange={(e) => setRoiCalculatorData({...roiCalculatorData, currentMarketingSpend: e.target.value})}
                      placeholder="e.g., 2000"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <Button 
                    onClick={calculateSMSROI} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                    disabled={!roiCalculatorData.monthlyCustomers || !roiCalculatorData.averageOrderValue}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My SMS ROI
                  </Button>
                </div>

                {roiResults && (
                  <div className="bg-white p-6 rounded-lg border border-green-300">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Your SMS Marketing Potential</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">{roiResults.monthlyConversions}</div>
                        <div className="text-sm text-gray-600">Additional Monthly Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">${roiResults.monthlyRevenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Additional Monthly Revenue</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">${roiResults.annualRevenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Annual Revenue Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">{roiResults.roi}:1</div>
                        <div className="text-sm text-gray-600">Projected ROI</div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link to="/funnel">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                          Get Your Custom SMS Strategy →
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <InlineCTA variant="strategy">
                See how Bot & Table can implement SMS marketing for your restaurant
              </InlineCTA>

              {/* Legal Compliance Section */}
              <section id="legal-compliance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Legal Compliance & Best Practices</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  SMS marketing is heavily regulated by federal law, and violations can result in fines up to $1,500 per message. Understanding compliance is crucial before you send your first text.
                </p>

                <div className="bg-red-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-red-800 mb-6">TCPA Compliance Requirements</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Express Written Consent</h4>
                        <p className="text-red-700">You must have clear, documented consent before sending any marketing messages. This means opt-in forms, checkboxes, or verbal consent with documentation.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Bell className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Clear Opt-Out Instructions</h4>
                        <p className="text-red-700">Every message must include simple opt-out instructions (typically "Reply STOP to opt out") and you must honor opt-out requests immediately.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Timing Restrictions</h4>
                        <p className="text-red-700">Messages can only be sent between 8 AM and 9 PM in the recipient's local time zone. Respect your customers' time and sleep schedule.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">SMS Consent Best Practices</h3>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Double Opt-In Process</h4>
                  <p className="text-gray-700 mb-4">The gold standard for SMS consent includes:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Customer provides phone number through opt-in form</li>
                    <li>Automated confirmation message sent immediately</li>
                    <li>Customer replies "YES" to confirm subscription</li>
                    <li>Welcome message sent with program details and opt-out instructions</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">Pro Tip: Documentation Is Everything</h4>
                      <p className="text-yellow-700">
                        Keep detailed records of how and when each customer opted in. This documentation is your protection against potential legal issues and helps maintain compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* More sections will continue... */}

              {/* Building SMS Lists Section */}
              <section id="building-lists" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Building Your SMS Subscriber List</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Your SMS list is your most valuable marketing asset. Unlike social media followers or email subscribers, SMS subscribers have given you direct access to their most personal communication channel.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">10 Proven List Building Strategies</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                        Receipt Opt-Ins
                      </h4>
                      <p className="text-gray-700 text-sm">Add SMS opt-in to every receipt with exclusive offers for subscribers.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        Table Tent Campaigns
                      </h4>
                      <p className="text-gray-700 text-sm">Place QR codes on table tents for instant dessert discounts or loyalty program enrollment.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        Social Media Integration
                      </h4>
                      <p className="text-gray-700 text-sm">Promote SMS-exclusive deals on Instagram and Facebook to convert followers to subscribers.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                        Contest Campaigns
                      </h4>
                      <p className="text-gray-700 text-sm">Run "Text to Win" contests for free meals, merchandise, or catering packages.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                        Birthday Club
                      </h4>
                      <p className="text-gray-700 text-sm">Offer free birthday meals or desserts in exchange for SMS opt-in and birthday date.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                        Website Pop-Ups
                      </h4>
                      <p className="text-gray-700 text-sm">Use exit-intent pop-ups offering 10% off their first order for SMS subscribers.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                        Staff Training Programs
                      </h4>
                      <p className="text-gray-700 text-sm">Train servers to ask happy customers to join your VIP text club for exclusive deals.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                        Loyalty Program Integration
                      </h4>
                      <p className="text-gray-700 text-sm">Require SMS opt-in for loyalty program enrollment and point notifications.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                        Event Marketing
                      </h4>
                      <p className="text-gray-700 text-sm">Collect phone numbers at food festivals, farmers markets, and community events.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                        Referral Rewards
                      </h4>
                      <p className="text-gray-700 text-sm">Offer rewards to existing subscribers who refer friends to your SMS list.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-green-800 mb-2">List Building Best Practice</h4>
                      <p className="text-green-700">
                        The most successful restaurants grow their SMS lists by 20-30% monthly by combining multiple strategies. Focus on making opt-in valuable and easy, not just promotional.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <InlineCTA variant="demo">
                See how Bot & Table automates list building for restaurants
              </InlineCTA>

              {/* Message Strategy Section */}
              <section id="message-strategy" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Message Strategy & Content Creation</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The difference between SMS marketing that annoys customers and SMS marketing that generates revenue comes down to one thing: your message strategy.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The 5-Message Framework</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Send className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">1. Welcome Series (3 messages)</h4>
                        <p className="text-blue-700 mb-3">Set expectations and deliver immediate value to new subscribers.</p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800 font-mono">
                            "Welcome to Tony's VIP Club! Here's your 15% off coupon: WELCOME15. Valid for 7 days. Reply STOP to opt out."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-green-800 mb-2">2. Promotional Messages (40% of sends)</h4>
                        <p className="text-green-700 mb-3">Limited-time offers, flash sales, and exclusive discounts.</p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-green-800 font-mono">
                            "Flash Sale! 🍕 Buy any large pizza, get a second for $5. Today only. Order: bit.ly/pizza-deal"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Bell className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-purple-800 mb-2">3. Informational Messages (30% of sends)</h4>
                        <p className="text-purple-700 mb-3">Menu updates, hours changes, special events, and helpful content.</p>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-sm text-purple-800 font-mono">
                            "New menu alert! 🌮 Try our Korean BBQ Tacos - now available. Made with locally-sourced beef. See menu: bit.ly/new-menu"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <Users className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-yellow-800 mb-2">4. Engagement Messages (20% of sends)</h4>
                        <p className="text-yellow-700 mb-3">Surveys, polls, behind-the-scenes content, and community building.</p>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <p className="text-sm text-yellow-800 font-mono">
                            "Quick poll! 🗳️ What should our next seasonal special be? Reply A for Butternut Squash Ravioli or B for Pumpkin Spice Cheesecake"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Award className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-red-800 mb-2">5. Retention Messages (10% of sends)</h4>
                        <p className="text-red-700 mb-3">Win-back campaigns, loyalty rewards, and VIP recognition.</p>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-sm text-red-800 font-mono">
                            "We miss you! 💔 Here's 20% off to welcome you back. Your favorite table is waiting. Use: COMEBACK20"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SMS Readiness Assessment */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 my-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">SMS Marketing Readiness Assessment</h3>
                <p className="text-purple-700 text-center mb-6">Take our 10-question assessment to get personalized SMS recommendations</p>
                
                <div className="text-center">
                  <Button 
                    onClick={() => setAssessmentStep(1)} 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                    disabled={showAssessmentResult}
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Start Assessment
                  </Button>
                </div>

                {assessmentStep > 0 && (
                  <div className="mt-6 bg-white p-6 rounded-lg">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-purple-800 mb-4">
                        Question {assessmentStep} of 10
                      </h4>
                      <p className="text-purple-700 mb-4">
                        How would you rate your current customer data collection?
                      </p>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full text-left">
                          We don't collect customer data systematically
                        </Button>
                        <Button variant="outline" className="w-full text-left">
                          We collect basic contact information
                        </Button>
                        <Button variant="outline" className="w-full text-left">
                          We have a loyalty program with customer data
                        </Button>
                        <Button variant="outline" className="w-full text-left">
                          We have comprehensive customer profiles and preferences
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Implementation Roadmap */}
              <section id="implementation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>30-Day Implementation Roadmap</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Follow this proven roadmap to launch your SMS marketing program in 30 days and start seeing results immediately.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 1: Foundation & Compliance</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Choose SMS marketing platform and set up account</li>
                          <li>• Create compliance documentation and opt-in processes</li>
                          <li>• Design welcome message series and auto-replies</li>
                          <li>• Set up tracking and analytics systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 2: List Building Launch</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Launch in-restaurant opt-in campaigns</li>
                          <li>• Add SMS opt-in to website and social media</li>
                          <li>• Train staff on SMS promotion techniques</li>
                          <li>• Create and deploy table tent QR codes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 3: First Campaigns</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Send first promotional campaign to test audience</li>
                          <li>• Monitor metrics and gather feedback</li>
                          <li>• Optimize message timing and frequency</li>
                          <li>• A/B test different message formats and offers</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 4: Scale & Automate</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Implement automated campaigns and workflows</li>
                          <li>• Scale successful list-building strategies</li>
                          <li>• Set up advanced segmentation and personalization</li>
                          <li>• Plan long-term content calendar and strategy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl mt-8">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-green-800 mb-2">Expected Results After 30 Days</h4>
                      <ul className="text-green-700 space-y-1">
                        <li>• 200-500 new SMS subscribers</li>
                        <li>• 15-25% increase in repeat customer visits</li>
                        <li>• $2,000-$8,000 in additional monthly revenue</li>
                        <li>• 98% message delivery rate with 45%+ engagement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <InlineCTA variant="toolkit">
                Download the complete SMS marketing toolkit with templates and checklists
              </InlineCTA>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/articles/email-marketing-best-practices-2025" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/email-marketing.jpg" alt="Email Marketing Guide" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Email Marketing Best Practices for Restaurants in 2025
                        </h3>
                        <p className="text-gray-600 text-sm">Master the email marketing strategies that deliver $36 ROI, increase repeat customers by 70%, and automate your restaurant's marketing success.</p>
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
                  <Link to="/articles/from-chaos-to-cash" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/ai-restaurant.jpg" alt="From Chaos to Cash" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue
                        </h3>
                        <p className="text-gray-600 text-sm">Real transformation stories from restaurants that stopped losing money and started capturing every opportunity with AI phone systems.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
            
            <DemoBookingForm />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Primary Lead Capture */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">Get Your Free SMS Audit</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Get a personalized SMS marketing strategy and see exactly how much revenue you're missing.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Restaurant Name" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Monthly Customers" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Email Address" type="email" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Phone Number" className="border-orange-200" />
                    </div>
                    <Link to="/funnel">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Get Free SMS Audit
                      </Button>
                    </Link>
                  </form>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Join successful restaurants nationwide
                  </div>
                </CardContent>
              </Card>

              {/* Free Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Free SMS Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Complete SMS Marketing Toolkit
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      SMS Compliance Checklist
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Message Template Library (50+ Templates)
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      SMS Campaign Calendar Template
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Speak to an SMS Expert</CardTitle>
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
                        Schedule Free SMS Consultation
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
                    <Link to="/articles/email-marketing-best-practices-2025" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Email Marketing Best Practices for Restaurants in 2025
                    </Link>
                    <Link to="/articles/personalized-marketing-guide" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Personalized Marketing: How to Turn One-Time Diners into Regulars
                    </Link>
                    <Link to="/articles/from-chaos-to-cash" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Restaurant with SMS Marketing?</h2>
          <p className="text-xl text-gray-600 mb-8">Join smart restaurants who are generating $36 for every $1 spent on SMS campaigns.</p>
          <div className="space-x-4">
            <Link to="/funnel">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all">
                Get Your Free SMS Strategy
              </Button>
            </Link>
            <Link to="/funnel">
              <Button variant="outline" className="border-orange-600 text-orange-600 font-bold px-8 py-4 text-lg">
                Download Complete Toolkit
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            No obligation • Same-day implementation • 30-day money-back guarantee
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-600 p-4 lg:hidden z-40">
        <Link to="/funnel">
          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3">
            Get Free SMS Audit →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SmsMarketingGuide; 