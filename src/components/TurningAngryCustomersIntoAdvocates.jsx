import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
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
  Mail,
  Phone,
  TrendingUp,
  AlertTriangle,
  Shield,
  CheckCircle,
  Target,
  Users,
  Award,
  Zap,
  Calculator,
  Download,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  BarChart3,
  Heart,
  Star,
  ArrowRight,
  BookOpen,
  Lightbulb,
  MessageCircle,
  RefreshCw
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';
const emerald = '#10b981';
const amber = '#f59e0b';
const gold = '#fbbf24';

const TurningAngryCustomersIntoAdvocates = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState([]);
  const [roiCalculatorData, setRoiCalculatorData] = useState({
    monthlyComplaints: '',
    averageTicket: '',
    currentResolutionRate: ''
  });
  const [showRoiResults, setShowRoiResults] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    restaurantName: '',
    complaintVolume: '',
    resolutionMethod: '',
    email: '',
    phone: ''
  });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[data-section]');
      let currentSection = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSection = index;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO and meta tags
  useEffect(() => {
    document.title = "Turn Angry Customers Into Loyal Advocates | Advanced Service Recovery | Bot and Table";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Master the service recovery paradox: Transform complaints into advocacy with AI-powered systems. 70% fewer negative reviews, 40% higher retention. Free audit.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Schema markup
    const schemaScript = document.getElementById('article-schema') || document.createElement('script');
    schemaScript.id = 'article-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates (Without Anyone Knowing)",
      "description": "The counterintuitive strategy that transforms your biggest complaints into your most valuable customers—and builds an unshakeable reputation in the process",
      "author": {
        "@type": "Person",
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
      "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
    if (!document.getElementById('article-schema')) {
      document.head.appendChild(schemaScript);
    }

    return () => {
      document.title = "Bot and Table - AI-Powered Restaurant Marketing";
    };
  }, []);

  // ROI Calculator
  const calculateROI = () => {
    const complaints = parseInt(roiCalculatorData.monthlyComplaints) || 0;
    const ticket = parseInt(roiCalculatorData.averageTicket) || 0;
    const currentRate = parseInt(roiCalculatorData.currentResolutionRate) || 0;
    
    const improvedRate = Math.min(85, currentRate + 40); // Bot & Table average improvement
    const additionalRecoveries = Math.floor((complaints * (improvedRate - currentRate)) / 100);
    const monthlyRevenue = additionalRecoveries * ticket * 3; // 3x lifetime multiplier
    const annualRevenue = monthlyRevenue * 12;
    const advocacyValue = additionalRecoveries * ticket * 5; // Advocacy referral value
    
    setShowRoiResults({
      additionalRecoveries,
      monthlyRevenue,
      annualRevenue,
      advocacyValue,
      totalImpact: annualRevenue + advocacyValue
    });
  };

  // Assessment Quiz
  const assessmentQuestions = [
    {
      question: "How do you currently handle customer complaints?",
      options: [
        "We address them as they come up",
        "We have a basic process in place",
        "We use a structured system",
        "We have advanced service recovery protocols"
      ],
      scores: [1, 2, 3, 4]
    },
    {
      question: "What percentage of complaints do you successfully resolve?",
      options: [
        "Less than 30%",
        "30-50%",
        "50-70%",
        "More than 70%"
      ],
      scores: [1, 2, 3, 4]
    },
    {
      question: "How often do resolved complaints lead to increased loyalty?",
      options: [
        "Rarely",
        "Sometimes",
        "Often",
        "Almost always"
      ],
      scores: [1, 2, 3, 4]
    }
  ];

  const handleAssessmentAnswer = (score) => {
    const newAnswers = [...assessmentAnswers, score];
    setAssessmentAnswers(newAnswers);
    
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    }
  };

  const getAssessmentResult = () => {
    const totalScore = assessmentAnswers.reduce((sum, score) => sum + score, 0);
    if (totalScore <= 6) return { level: "Reactive", color: "red", message: "Your complaints are costing you customers" };
    if (totalScore <= 9) return { level: "Developing", color: "orange", message: "You're on the right track but missing opportunities" };
    return { level: "Advanced", color: "green", message: "You understand service recovery value" };
  };

  // Interactive Components
  const StatBox = ({ number, label, description, color = "emerald", icon: Icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  const InlineCTA = ({ variant, children, className = "" }) => (
    <div className={`my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 ${className}`}>
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'audit' && 'Get Your Free Service Recovery Audit →'}
            {variant === 'demo' && 'Book a Demo of Our AI System →'}
            {variant === 'calculator' && 'Calculate Your Recovery ROI →'}
            {variant === 'join' && 'Join 500+ Restaurants Turning Complaints Into Advocacy →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  const CaseStudyBox = ({ restaurant, before, after, improvement, metric, story }) => (
    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-200 my-8">
      <div className="flex items-center mb-4">
        <Award className="w-6 h-6 text-emerald-600 mr-2" />
        <h4 className="text-xl font-bold text-gray-800">Success Story: {restaurant}</h4>
      </div>
      <p className="text-gray-700 mb-6 italic">"{story}"</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-2">{before}</div>
          <div className="text-sm text-gray-600">Before</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600 mb-2">{after}</div>
          <div className="text-sm text-gray-600">After</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">{improvement}</div>
          <div className="text-sm text-gray-600">{metric}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Advanced Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-150"
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
            <span className="text-gray-400">Turning Angry Customers Into Loyal Advocates</span>
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
                  Service Recovery
                </span>
                <span className="ml-3 inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Advanced Strategy
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates (Without Anyone Knowing)
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The counterintuitive strategy that transforms your biggest complaints into your most valuable customers—and builds an unshakeable reputation in the process
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
                  <span>18 min read</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  <span>Advanced Strategy</span>
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
                  <button className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-12">
              <div className="aspect-video rounded-xl overflow-hidden relative">
                <img 
                  src="/restaurant-owner.jpg"
                  alt="Restaurant owner managing customer service and building relationships"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-emerald-900/40"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <RefreshCw className="w-6 h-6 mr-2 text-emerald-400" />
                      <span className="text-sm font-semibold">SERVICE RECOVERY PARADOX</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">From Complaint to Advocacy</h3>
                    <p className="text-gray-200">How the right service recovery strategy creates more loyal customers than perfect service ever could.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Opening Story - Marcus's Transformation */}
              <section className="mb-12" data-section="0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The $127,000 Transformation</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Marcus Chen was ready to sell his restaurant. After eight years of building "Golden Dragon," his dream of running a successful Chinese restaurant in Portland was crumbling under the weight of negative reviews and declining revenue. The final straw came on a rainy Thursday evening when a prominent food blogger left a scathing one-star review that went viral on social media.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  "I felt like every complaint was a personal attack," Marcus recalls. "I'd lie awake at night thinking about negative reviews, wondering where I went wrong. The stress was killing me, and it was killing my business."
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                  <p className="text-lg italic text-red-800">
                    "I was doing everything wrong. When customers complained, I got defensive. When they left bad reviews, I either ignored them or responded emotionally. I thought good food would speak for itself, but I was bleeding customers every month." - Marcus Chen, Owner of Golden Dragon
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  What Marcus didn't realize was that he was sitting on a goldmine. His restaurant received an average of 23 complaints per month—not because his food was bad, but because he served 1,200+ customers monthly. The complaints represented less than 2% of his customer base, but his poor handling of them was destroying his reputation and costing him hundreds of thousands in lost revenue.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Eighteen months later, Marcus's story is completely different. Golden Dragon now generates $127,000 more in annual revenue, maintains a 4.8-star rating across all platforms, and has a waiting list for weekend reservations. The secret? Marcus learned to turn his biggest complainers into his most vocal advocates.
                </p>
              </section>

              <InlineCTA variant="audit">
                See how your complaints could become your competitive advantage
              </InlineCTA>

              {/* Service Recovery Paradox */}
              <section className="mb-12" data-section="1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Service Recovery Paradox: Why Complaints Are Your Secret Weapon</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The service recovery paradox is one of the most counterintuitive principles in customer relationship management: customers who experience a problem that gets resolved exceptionally well often become more loyal than customers who never experienced a problem at all.
                </p>

                <div className="bg-blue-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">The Psychology Behind the Paradox</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Trust Through Vulnerability</h4>
                          <p className="text-blue-700 text-sm">When you handle a complaint perfectly, customers see your true character under pressure.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Heart className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Emotional Investment</h4>
                          <p className="text-blue-700 text-sm">The resolution process creates emotional investment and personal connection.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Exceeded Expectations</h4>
                          <p className="text-blue-700 text-sm">Great service recovery often exceeds what customers expect from the resolution.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Story Amplification</h4>
                          <p className="text-blue-700 text-sm">Customers love telling stories about businesses that "made it right."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Hidden Revenue in Your Complaints</h3>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <StatBox 
                    number="12x" 
                    label="Advocacy Power" 
                    description="Recovered customers tell 12x more people than satisfied customers"
                    color="emerald"
                    icon={TrendingUp}
                  />
                  <StatBox 
                    number="95%" 
                    label="Retention Rate" 
                    description="Customers stay loyal when complaints are resolved quickly"
                    color="blue"
                    icon={Shield}
                  />
                  <StatBox 
                    number="$4,800" 
                    label="Lifetime Value" 
                    description="Average additional value from a recovered customer"
                    color="amber"
                    icon={Award}
                  />
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Research from the Harvard Business Review shows that customers who have a complaint resolved in their favor tell an average of 5-7 people about the positive experience. In contrast, customers who never have problems tell an average of 2-3 people. This means your complaint resolution process is actually your most powerful marketing tool.
                </p>
              </section>



              <InlineCTA variant="demo">
                Book a demo of our invisible service recovery platform
              </InlineCTA>



              {/* Psychology Deep Dive */}
              <section className="mb-12" data-section="3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Four Layers of Customer Disappointment</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Understanding why customers complain—and what they really want—is the key to transforming negative experiences into advocacy opportunities. Most restaurant owners only address the surface complaint, missing the deeper psychological needs that, when met, create unshakeable loyalty.
                </p>

                <div className="space-y-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Layer 1: The Surface Problem</h4>
                    </div>
                    <p className="text-gray-700 mb-3"><strong>What they say:</strong> "My food was cold" or "Service was slow"</p>
                    <p className="text-gray-700 mb-3"><strong>What they mean:</strong> Something didn't meet their expectations</p>
                    <p className="text-gray-600 text-sm"><strong>Recovery approach:</strong> Fix the immediate problem (replace food, comp meal)</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Heart className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Layer 2: The Emotional Impact</h4>
                    </div>
                    <p className="text-gray-700 mb-3"><strong>What they feel:</strong> Frustrated, disappointed, unvalued</p>
                    <p className="text-gray-700 mb-3"><strong>What they need:</strong> Acknowledgment of their feelings</p>
                    <p className="text-gray-600 text-sm"><strong>Recovery approach:</strong> Empathize genuinely, validate their experience</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Layer 3: The Relationship Question</h4>
                    </div>
                    <p className="text-gray-700 mb-3"><strong>What they wonder:</strong> "Do they care about me as a customer?"</p>
                    <p className="text-gray-700 mb-3"><strong>What they need:</strong> Evidence that they matter to your business</p>
                    <p className="text-gray-600 text-sm"><strong>Recovery approach:</strong> Personalized attention, follow-up, special treatment</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <Shield className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">Layer 4: The Trust Test</h4>
                    </div>
                    <p className="text-gray-700 mb-3"><strong>What they're testing:</strong> "Can I trust this business with my future experiences?"</p>
                    <p className="text-gray-700 mb-3"><strong>What they need:</strong> Confidence that this won't happen again</p>
                    <p className="text-gray-600 text-sm"><strong>Recovery approach:</strong> Systemic improvements, prevention measures, ongoing relationship</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">The Advocacy Transformation Process</h4>
                  <p className="text-purple-700 mb-4">
                    When you address all four layers systematically, something magical happens: the customer doesn't just forgive the problem—they become emotionally invested in your success. They've seen how you handle adversity, and they trust you more than businesses they've never had problems with.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      "The best marketing isn't telling people how great you are—it's showing them how you handle it when things go wrong. That's when customers really see your character." - Service Recovery Expert
                    </p>
                  </div>
                </div>
              </section>

              {/* Service Recovery Assessment */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 my-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Service Recovery Effectiveness Assessment</h3>
                <p className="text-purple-700 text-center mb-6">Discover how well your current approach turns complaints into advocacy</p>
                
                {assessmentAnswers.length < assessmentQuestions.length ? (
                  <div>
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
                  </div>
                ) : (
                  <div className="text-center">
                    {(() => {
                      const result = getAssessmentResult();
                      return (
                        <div>
                          <h4 className="text-2xl font-bold text-purple-800 mb-4">Your Service Recovery Level: {result.level}</h4>
                          <div className={`text-4xl font-bold mb-4 text-${result.color}-600`}>{result.level}</div>
                          <p className="text-lg text-purple-700 mb-6">{result.message}</p>
                          <div className="space-y-4">
                            <Link to="/funnel">
                              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 mr-4">
                                Get Your Personalized Recovery Strategy
                              </Button>
                            </Link>
                            <Button 
                              onClick={() => {
                                setAssessmentStep(0);
                                setAssessmentAnswers([]);
                              }} 
                              variant="outline" 
                              className="border-purple-600 text-purple-600"
                            >
                              Retake Assessment
                            </Button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>

              <InlineCTA variant="calculator">
                Calculate your service recovery ROI potential
              </InlineCTA>

              {/* Technology Architecture */}
              <section className="mb-12" data-section="4">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The AI-Powered Service Recovery System</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Manual service recovery is inconsistent, time-consuming, and often misses the optimal intervention moments. Bot & Table's AI system monitors, analyzes, and orchestrates service recovery automatically, ensuring every complaint becomes an advocacy opportunity.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">How Our AI System Works</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Real-Time Complaint Detection</h4>
                        <p className="text-blue-700">AI monitors all touchpoints—reviews, social media, direct feedback, POS data—to identify service issues as they happen.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Sentiment Analysis & Classification</h4>
                        <p className="text-blue-700">Advanced NLP determines complaint severity, emotional state, and optimal recovery approach for each customer.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <RefreshCw className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Automated Recovery Orchestration</h4>
                        <p className="text-blue-700">System triggers personalized recovery sequences—private outreach, compensation offers, follow-up scheduling—based on customer profile and complaint type.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Advocacy Conversion Tracking</h4>
                        <p className="text-blue-700">Measures recovery success, tracks advocacy behaviors, and optimizes future recovery strategies based on results.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Invisible Recovery Advantage</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                      Traditional Approach
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• React to public complaints after damage is done</li>
                      <li>• Inconsistent response quality and timing</li>
                      <li>• No systematic follow-up or relationship building</li>
                      <li>• Miss 70% of dissatisfied customers who don't complain publicly</li>
                      <li>• Focus on damage control rather than opportunity creation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-50 p-6 rounded-xl shadow-lg border border-emerald-200">
                    <h4 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                      Bot & Table AI System
                    </h4>
                    <ul className="space-y-2 text-emerald-700">
                      <li>• Proactive intervention before issues escalate publicly</li>
                      <li>• Consistent, personalized recovery at optimal moments</li>
                      <li>• Systematic advocacy conversion and relationship building</li>
                      <li>• Captures and recovers 95% of dissatisfied customers</li>
                      <li>• Transforms complaints into competitive advantages</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Implementation Framework */}
              <section className="mb-12" data-section="5">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Implementation: Your 30-Day Advocacy Transformation</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Transforming your complaint handling from liability to asset doesn't happen overnight, but it doesn't take years either. Here's the exact 30-day framework we use with clients to achieve 70%+ complaint-to-advocacy conversion rates:
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 1: Complaint Intelligence Setup</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Complete service recovery audit across all touchpoints</li>
                          <li>• Install AI monitoring for reviews, social media, and direct feedback</li>
                          <li>• Analyze current complaint patterns and missed opportunities</li>
                          <li>• Set up private feedback channels for proactive intervention</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 2: Recovery System Integration</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Configure AI sentiment analysis and complaint classification</li>
                          <li>• Set up automated recovery sequences for different complaint types</li>
                          <li>• Create personalized outreach templates and compensation frameworks</li>
                          <li>• Train staff on the four-layer recovery approach</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 3: Launch & Optimization</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Begin automated complaint detection and recovery</li>
                          <li>• Monitor recovery success rates and customer responses</li>
                          <li>• Adjust timing, messaging, and compensation based on results</li>
                          <li>• Start tracking advocacy behaviors and referral generation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 4: Scale & Measure Impact</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Analyze first month's complaint-to-advocacy conversion data</li>
                          <li>• Implement advanced personalization and predictive recovery</li>
                          <li>• Set up long-term advocacy tracking and ROI measurement</li>
                          <li>• Plan expansion to additional recovery channels and touchpoints</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">Critical Success Factor</h4>
                      <p className="text-yellow-700">
                        The difference between restaurants that master service recovery and those that don't comes down to systematic execution. Every complaint must be treated as a high-value conversion opportunity, not a problem to solve.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
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
                  <Link to="/articles/why-best-customers-never-leave-reviews" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/google-review.jpg" alt="Why Best Customers Never Leave Reviews" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)
                        </h3>
                        <p className="text-gray-600 text-sm">The psychology behind the review paradox that's killing great restaurants—and the AI-powered solution that captures 300% more positive reviews.</p>
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
                </div>
              </section>

            </div>
          </article>

          {/* Premium Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Primary Conversion Panel */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">Turn Your Complaints Into Competitive Advantages</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Free Service Recovery Audit - Discover Hidden Revenue in Your Complaints
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Restaurant Name" 
                        className="border-orange-200"
                        value={leadFormData.restaurantName}
                        onChange={(e) => setLeadFormData({...leadFormData, restaurantName: e.target.value})}
                      />
                    </div>
                    <div>
                      <select 
                        className="w-full p-3 border border-orange-200 rounded-md"
                        value={leadFormData.complaintVolume}
                        onChange={(e) => setLeadFormData({...leadFormData, complaintVolume: e.target.value})}
                      >
                        <option value="">Monthly Complaint Volume</option>
                        <option value="1-10">1-10 complaints</option>
                        <option value="11-25">11-25 complaints</option>
                        <option value="26-50">26-50 complaints</option>
                        <option value="50+">50+ complaints</option>
                      </select>
                    </div>
                    <div>
                      <select 
                        className="w-full p-3 border border-orange-200 rounded-md"
                        value={leadFormData.resolutionMethod}
                        onChange={(e) => setLeadFormData({...leadFormData, resolutionMethod: e.target.value})}
                      >
                        <option value="">Current Resolution Method</option>
                        <option value="manual">Manual responses</option>
                        <option value="basic">Basic system</option>
                        <option value="none">No formal process</option>
                        <option value="advanced">Advanced system</option>
                      </select>
                    </div>
                    <div>
                      <Input 
                        placeholder="Email Address" 
                        type="email" 
                        className="border-orange-200"
                        value={leadFormData.email}
                        onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Phone Number (Optional)" 
                        className="border-orange-200"
                        value={leadFormData.phone}
                        onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                      />
                    </div>
                    <Link to="/funnel">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Get My Free Audit
                      </Button>
                    </Link>
                  </form>
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500 mb-2">500+ restaurants served • 70% reduction in negative reviews • $50K+ average revenue increase</div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Story Carousel */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="font-semibold text-emerald-800">Golden Dragon</div>
                      <div className="text-sm text-emerald-700">+$127K annual revenue</div>
                      <div className="text-xs text-emerald-600">78% complaints → advocates</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">Bella Vista Italian</div>
                      <div className="text-sm text-blue-700">2.8 → 4.7 star rating</div>
                      <div className="text-xs text-blue-600">156% revenue increase</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-semibold text-purple-800">Tokyo Sushi House</div>
                      <div className="text-sm text-purple-700">89% advocacy conversion</div>
                      <div className="text-xs text-purple-600">+$89K annual revenue</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Consultation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Speak to a Service Recovery Specialist</CardTitle>
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

              {/* Free Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Free Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Service Recovery Playbook - Turn Complaints Into $10K+ Revenue
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Customer Psychology Masterclass - 4 Layers of Disappointment
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Service Recovery ROI Calculator
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
                    <Link to="/articles/why-best-customers-never-leave-reviews" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)
                    </Link>
                    <Link to="/articles/google-reviews-strategies" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      10 Proven Strategies to Get More Google Reviews for Your Restaurant
                    </Link>
                    <Link to="/articles/the-50000-mistake" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The $50,000 Mistake: How One Negative Review Cost This Restaurant Owner Everything
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </aside>
        </div>
      </div>



      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-600 p-4 lg:hidden z-40">
        <Link to="/funnel">
          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3">
            Get Free Service Recovery Audit →
          </Button>
        </Link>
      </div>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default TurningAngryCustomersIntoAdvocates; 