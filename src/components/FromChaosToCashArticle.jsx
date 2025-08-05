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
  Phone,
  Mail,
  TrendingUp,
  Calculator,
  Play,
  CheckCircle,
  DollarSign,
  PhoneCall,
  Users,
  BarChart3,
  Zap,
  Shield,
  Award,
  Target,
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  TrendingDown
} from 'lucide-react';

const coral = '#FF6B47';
const successGreen = '#27AE60';
const darkBlue = '#2C3E50';
const blue = '#3498DB';

const FromChaosToCashArticle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [calculatorData, setCalculatorData] = useState({
    dailyCalls: 50,
    answerRate: 60,
    orderValue: 35,
    conversionRate: 40
  });
  const [calculatorResults, setCalculatorResults] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [leadFormData, setLeadFormData] = useState({
    restaurantName: '',
    email: '',
    phone: '',
    challenge: ''
  });

  // Success stories data
  const successStories = [
    {
      id: 1,
      name: "Maria's Bistro",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      revenueIncrease: "+67%",
      answerRate: "100%",
      additionalRevenue: "$45K/month",
      testimonial: "Bot and Table transformed our phone operations completely. We went from missing 40% of calls to capturing every single opportunity. The AI handles complex orders better than most of our staff!",
      beforeRevenue: "$67K",
      afterRevenue: "$112K",
      timeframe: "3 months"
    },
    {
      id: 2,
      name: "Tony's Pizza Palace",
      location: "Brooklyn, NY",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      revenueIncrease: "+52%",
      answerRate: "100%",
      additionalRevenue: "$32K/month",
      testimonial: "The after-hours revenue alone pays for the entire system. We're making money while we sleep, and our staff can focus on what they do best during busy periods.",
      beforeRevenue: "$62K",
      afterRevenue: "$94K",
      timeframe: "2 months"
    },
    {
      id: 3,
      name: "Sakura Sushi Bar",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      revenueIncrease: "+78%",
      answerRate: "100%",
      additionalRevenue: "$58K/month",
      testimonial: "Our customers love the consistent service. No more busy signals, no more long hold times. The AI even remembers their preferences and suggests their usual orders.",
      beforeRevenue: "$74K",
      afterRevenue: "$132K",
      timeframe: "4 months"
    }
  ];

  // Scroll progress tracking
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

  // SEO and meta tags
  useEffect(() => {
    document.title = "From Chaos to Cash: How Smart Restaurants Use AI Phone Systems | Bot and Table";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'See how restaurants increased revenue 25-67% with AI phone systems. Real transformation stories, ROI data, and implementation timelines.');
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
      "headline": "From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue",
      "description": "Real transformation stories from restaurants that stopped losing money and started capturing every opportunity with AI phone systems.",
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
      "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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

  // Revenue Calculator
  const calculateRevenue = () => {
    const dailyCalls = parseInt(calculatorData.dailyCalls) || 0;
    const currentAnswerRate = parseInt(calculatorData.answerRate) || 0;
    const orderValue = parseInt(calculatorData.orderValue) || 0;
    const conversionRate = parseInt(calculatorData.conversionRate) || 0;
    
    const currentAnsweredCalls = Math.floor((dailyCalls * currentAnswerRate) / 100);
    const currentOrders = Math.floor((currentAnsweredCalls * conversionRate) / 100);
    const currentDailyRevenue = currentOrders * orderValue;
    const currentMonthlyRevenue = currentDailyRevenue * 30;
    
    // With 100% answer rate
    const potentialAnsweredCalls = dailyCalls;
    const potentialOrders = Math.floor((potentialAnsweredCalls * conversionRate) / 100);
    const potentialDailyRevenue = potentialOrders * orderValue;
    const potentialMonthlyRevenue = potentialDailyRevenue * 30;
    
    const additionalRevenue = potentialMonthlyRevenue - currentMonthlyRevenue;
    
    setCalculatorResults({
      currentMonthly: currentMonthlyRevenue,
      potentialMonthly: potentialMonthlyRevenue,
      additional: additionalRevenue,
      percentIncrease: currentMonthlyRevenue > 0 ? Math.round(((additionalRevenue / currentMonthlyRevenue) * 100)) : 0
    });
  };

  // Auto-calculate when inputs change
  useEffect(() => {
    calculateRevenue();
  }, [calculatorData]);

  // Success story carousel
  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextStory, 5000);
    return () => clearInterval(interval);
  }, []);

  // Inline CTA Component
  const InlineCTA = ({ icon: Icon, title, description, buttonText }) => (
    <div className="my-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Icon className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );

  // Statistics Component
  const StatBox = ({ number, label, description, color = "green" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Reading Progress Bar */}
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
            <span className="text-gray-400">From Chaos to Cash</span>
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
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  Success Stories
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: darkBlue }}>
                From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Real transformation stories from restaurants that stopped losing money and started capturing every opportunity
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
                  <span>12 min read</span>
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
                  src="/ai-restaurant.jpg"
                  alt="Smart restaurant using AI technology to maximize revenue from phone calls"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 to-blue-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                      <span className="text-sm font-semibold">TRANSFORMATION SUCCESS</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">From Missing Calls to Maximum Revenue</h3>
                    <p className="text-gray-200">See how smart restaurants turned their biggest problem into their greatest profit center.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Opening Section */}
              <section className="mb-12">
                <p className="text-xl leading-relaxed text-gray-700 mb-6 font-medium">
                  At 6:30 PM on a Friday evening, Maria Gonzalez watches her restaurant fill up with the dinner rush. Tables are packed, servers are hustling, and the energy is electric. Then the phone starts ringing. And ringing. And ringing.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Her hostess is seating a party of six. Her manager is handling a complaint. Her servers are taking orders. The phone rings eight times before going to voicemail. Then it happens again. And again.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                  <div className="flex items-start">
                    <TrendingDown className="w-6 h-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-red-800 mb-2">The Old Reality</h4>
                      <p className="text-red-700">
                        "We were losing $800-1,200 every single day to missed calls. During our busiest times—when we needed revenue most—we were actually turning customers away. It was heartbreaking."
                      </p>
                      <cite className="text-red-600 font-semibold">- Maria Gonzalez, Owner of Maria's Bistro</cite>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Fast forward six months. Same Friday night, same dinner rush, same packed restaurant. But now, every single call is answered within two rings. Orders are taken perfectly. Reservations are booked seamlessly. Revenue has increased by 67%.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-green-800 mb-2">The New Reality</h4>
                      <p className="text-green-700">
                        "Now we capture every opportunity. Our AI system handles calls better than we ever could, even during our craziest rushes. We're making an additional $45,000 per month."
                      </p>
                      <cite className="text-green-600 font-semibold">- Maria Gonzalez, 6 months later</cite>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Chaos of Traditional Phone Service */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>The Chaos of Traditional Phone Service</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Before AI phone systems, restaurants faced an impossible choice during busy periods: serve the customers in front of you, or answer the phone for potential customers. Most chose the former, unknowingly sacrificing thousands in revenue.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-xl font-bold text-red-800 mb-4">Traditional Phone Chaos</h4>
                    <ul className="space-y-3 text-red-700">
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">×</span>
                        43% of calls go unanswered during rush hours
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">×</span>
                        Staff overwhelmed with multitasking
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">×</span>
                        Order errors from rushed phone service
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">×</span>
                        Zero revenue capture after hours
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">×</span>
                        Inconsistent customer experience
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-xl font-bold text-green-800 mb-4">AI-Powered Transformation</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        100% call answer rate guaranteed
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        Staff focused on in-person service
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        99% order accuracy with AI precision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        24/7 revenue generation capability
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        Perfect consistency every single call
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <h4 className="text-xl font-bold text-yellow-800 mb-4">The Tipping Point</h4>
                  <p className="text-yellow-700 mb-4">
                    The restaurants featured in this article all reached the same breaking point: they realized their phone system wasn't supporting their growth—it was limiting it. The moment they made the switch to AI, everything changed.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">67%</div>
                      <div className="text-sm text-yellow-700">Average Revenue Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">30 days</div>
                      <div className="text-sm text-yellow-700">To See Results</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-yellow-700">Customer Satisfaction</div>
                    </div>
                  </div>
                </div>
              </section>

              <InlineCTA 
                icon={Target}
                title="Ready to End the Phone Chaos?"
                description="See exactly how AI can transform your restaurant's phone operations in a live demo."
                buttonText="Book Free Demo"
              />

              {/* The Revenue Reality */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>The Revenue Reality: What You're Really Losing</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Most restaurant owners underestimate the true cost of missed calls. It's not just the immediate order you lose—it's the compound effect of lost customers, reduced lifetime value, and missed opportunities for growth.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <StatBox 
                    number="$1,247" 
                    label="Daily Loss" 
                    description="Average revenue lost per day from missed calls"
                    color="red"
                  />
                  <StatBox 
                    number="$37,410" 
                    label="Monthly Impact" 
                    description="Total monthly revenue opportunity lost"
                    color="orange"
                  />
                  <StatBox 
                    number="$448,920" 
                    label="Annual Cost" 
                    description="Yearly revenue lost to phone inefficiency"
                    color="red"
                  />
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  But here's the exciting part: every single dollar you're losing can be recovered. The restaurants in our success stories didn't just stop the bleeding—they turned their phone system into their most profitable employee.
                </p>
              </section>

              {/* Revenue Calculator Widget */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-200 my-12">
                <div className="text-center mb-8">
                  <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">🧮 Calculate Your Revenue Potential</h3>
                  <p className="text-blue-700">See how much additional revenue AI could generate for your restaurant</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="dailyCalls" className="text-blue-700 font-semibold">Average daily calls:</Label>
                      <Input
                        id="dailyCalls"
                        type="number"
                        value={calculatorData.dailyCalls}
                        onChange={(e) => setCalculatorData({...calculatorData, dailyCalls: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="answerRate" className="text-blue-700 font-semibold">Current answer rate: {calculatorData.answerRate}%</Label>
                      <input
                        id="answerRate"
                        type="range"
                        min="0"
                        max="100"
                        value={calculatorData.answerRate}
                        onChange={(e) => setCalculatorData({...calculatorData, answerRate: e.target.value})}
                        className="w-full mt-2 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="orderValue" className="text-blue-700 font-semibold">Average order value: $</Label>
                      <Input
                        id="orderValue"
                        type="number"
                        value={calculatorData.orderValue}
                        onChange={(e) => setCalculatorData({...calculatorData, orderValue: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="conversionRate" className="text-blue-700 font-semibold">Conversion rate: {calculatorData.conversionRate}%</Label>
                      <input
                        id="conversionRate"
                        type="range"
                        min="0"
                        max="100"
                        value={calculatorData.conversionRate}
                        onChange={(e) => setCalculatorData({...calculatorData, conversionRate: e.target.value})}
                        className="w-full mt-2 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {calculatorResults && (
                      <>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-800">Current Monthly Revenue</h4>
                          <span className="text-2xl font-bold text-gray-600">${calculatorResults.currentMonthly.toLocaleString()}</span>
                        </div>
                        
                        <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                          <h4 className="font-semibold text-green-800">Potential with 100% Answer Rate</h4>
                          <span className="text-2xl font-bold text-green-600">${calculatorResults.potentialMonthly.toLocaleString()}</span>
                        </div>
                        
                        <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                          <h4 className="font-semibold text-orange-800">Additional Monthly Revenue</h4>
                          <span className="text-3xl font-bold text-orange-600">${calculatorResults.additional.toLocaleString()}</span>
                          <div className="text-sm text-orange-700 mt-1">
                            +{calculatorResults.percentIncrease}% increase
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Link to="/funnel">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                      Get My Custom Revenue Plan
                    </Button>
                  </Link>
                </div>
              </div>

              <InlineCTA 
                icon={BarChart3}
                title="Calculate Your Revenue Potential"
                description="Use our interactive calculator to see how much additional revenue AI could generate for your restaurant."
                buttonText="Calculate My Potential"
              />

              {/* The AI Advantage */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>The AI Advantage: Why Smart Restaurants Are Making the Switch</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  AI phone systems don't just answer calls—they transform your entire customer experience while maximizing every revenue opportunity. Here's how the technology works and why it's revolutionizing restaurant operations:
                </p>

                <div className="space-y-8 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Instant Response & Perfect Availability</h4>
                        <p className="text-blue-700">Every call is answered within 2 rings, 24/7/365. No busy signals, no voicemail, no missed opportunities—ever. The AI never takes breaks, never calls in sick, and never gets overwhelmed during rush periods.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-800 mb-2">Revenue Optimization & Upselling</h4>
                        <p className="text-green-700">The AI doesn't just take orders—it maximizes them. It suggests appetizers, recommends wine pairings, and promotes daily specials. Average order values increase by 15-25% through intelligent upselling.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-purple-800 mb-2">Perfect Accuracy & Consistency</h4>
                        <p className="text-purple-700">99% order accuracy eliminates costly mistakes and customer complaints. Every caller receives the same high-quality experience, building trust and encouraging repeat business.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl my-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Numbers Don't Lie</h4>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-sm text-gray-600">Call Answer Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                      <div className="text-sm text-gray-600">Order Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
                      <div className="text-sm text-gray-600">Average Revenue Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Revenue Capture</div>
                    </div>
                  </div>
                </div>
              </section>



              {/* Transformation Timeline */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>Your 90-Day Transformation Journey</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Every successful restaurant follows the same transformation path. Here's exactly what you can expect during your first 90 days with AI phone technology:
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        Week 1
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Setup & Integration</h4>
                        <p className="text-gray-700 mb-3">AI system configured and integrated with your POS</p>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          100% call answer rate achieved
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="bg-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        Week 2-4
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Optimization & Training</h4>
                        <p className="text-gray-700 mb-3">System learns your menu and procedures</p>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          Order accuracy improves to 99%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        Month 2
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Revenue Growth</h4>
                        <p className="text-gray-700 mb-3">Captured calls convert to increased revenue</p>
                        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          15-25% revenue increase
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        Month 3
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Full Optimization</h4>
                        <p className="text-gray-700 mb-3">Maximum efficiency and revenue capture</p>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          25-40% total revenue increase
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </section>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/articles/the-27000-phone-problem" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/restaurant-phone.jpg" alt="The $27,000 Phone Problem" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered (And How AI Fixes It)
                        </h3>
                        <p className="text-gray-600 text-sm">Discover how missed restaurant calls cost $27,000+ annually. Learn why 43% of calls go unanswered and how AI phone systems capture 100% of revenue opportunities.</p>
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
                </div>
              </section>

            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Success Metrics Box */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-lg text-green-800">📊 Average Results with Bot and Table</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      100% call answer rate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      25% revenue increase in 30 days
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      50% reduction in order errors
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      24/7 after-hours revenue capture
                    </li>
                  </ul>
                  <Link to="/funnel">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                      See How It Works
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Case Study Download */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">📋 FREE Success Story Collection</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Download detailed case studies showing how restaurants increased revenue 25-67% with AI phone systems.
                  </p>
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    <li>✓ 5 detailed transformation stories</li>
                    <li>✓ Before/after revenue comparisons</li>
                    <li>✓ Implementation timelines</li>
                    <li>✓ ROI calculations</li>
                  </ul>
                  <form className="space-y-3">
                    <Input 
                      placeholder="Restaurant Name" 
                      className="border-orange-200"
                      value={leadFormData.restaurantName}
                      onChange={(e) => setLeadFormData({...leadFormData, restaurantName: e.target.value})}
                    />
                    <Input 
                      placeholder="Email Address" 
                      type="email" 
                      className="border-orange-200"
                      value={leadFormData.email}
                      onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                    />
                    <Input 
                      placeholder="Phone Number" 
                      type="tel" 
                      className="border-orange-200"
                      value={leadFormData.phone}
                      onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                    />
                    <select 
                      className="w-full p-3 border border-orange-200 rounded-md"
                      value={leadFormData.challenge}
                      onChange={(e) => setLeadFormData({...leadFormData, challenge: e.target.value})}
                    >
                      <option value="">Biggest Challenge</option>
                      <option value="missing-calls">Missing phone calls</option>
                      <option value="order-errors">Order errors</option>
                      <option value="staff-overwhelmed">Staff overwhelmed</option>
                      <option value="after-hours">After-hours revenue</option>
                    </select>
                    <Link to="/funnel">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Download Success Stories
                      </Button>
                    </Link>
                  </form>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Instant download • Real restaurant data • Implementation guides included
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
                    <Link to="/articles/the-27000-phone-problem" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered (And How AI Fixes It)
                    </Link>
                    <Link to="/articles/turning-angry-customers-into-advocates" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates
                    </Link>
                    <Link to="/articles/why-best-customers-never-leave-reviews" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </aside>
        </div>
      </div>



      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default FromChaosToCashArticle; 