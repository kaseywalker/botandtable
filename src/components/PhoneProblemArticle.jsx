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
  AlertTriangle,
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
  Target
} from 'lucide-react';

const coral = '#FF6B47';
const darkBlue = '#2C3E50';
const blue = '#3498DB';

const PhoneProblemArticle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [leadFormData, setLeadFormData] = useState({
    restaurantName: '',
    email: '',
    phone: '',
    revenue: ''
  });
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    dailyCalls: '',
    missedPercentage: '',
    averageOrder: ''
  });
  const [calculatorResults, setCalculatorResults] = useState(null);

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
    document.title = "The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered | Bot and Table";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Discover how missed restaurant calls cost $27,000+ annually. Learn why 43% of calls go unanswered and how AI phone systems capture 100% of revenue opportunities.');
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
      "headline": "The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered (And How AI Fixes It)",
      "description": "Discover how missed restaurant calls cost $27,000+ annually and how AI phone systems can capture 100% of revenue opportunities.",
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
      "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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

  // Revenue Loss Calculator
  const calculateLosses = () => {
    const calls = parseInt(calculatorData.dailyCalls) || 0;
    const missed = parseInt(calculatorData.missedPercentage) || 0;
    const order = parseInt(calculatorData.averageOrder) || 0;
    
    const dailyMissed = Math.floor((calls * missed) / 100);
    const monthlyMissed = dailyMissed * 30;
    const annualMissed = dailyMissed * 365;
    
    const dailyLoss = dailyMissed * order;
    const monthlyLoss = monthlyMissed * order;
    const annualLoss = annualMissed * order;
    
    setCalculatorResults({
      dailyMissed,
      monthlyMissed,
      annualMissed,
      dailyLoss,
      monthlyLoss,
      annualLoss
    });
  };

  // Inline CTA Component
  const InlineCTA = ({ icon: Icon, title, description, buttonText, variant = "primary" }) => (
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

  // Statistics Box Component
  const StatBox = ({ number, label, description, icon: Icon, color = "orange" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className="flex justify-center mb-4">
        <div className={`bg-${color}-100 p-3 rounded-full`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
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
            <span className="text-gray-400">The $27,000 Phone Problem</span>
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
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  AI Phone Answering
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: darkBlue }}>
                The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered (And How AI Fixes It)
              </h1>
              
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
                  <span>15 min read</span>
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
                  src="/restaurant-phone.jpg"
                  alt="Restaurant staff managing phone calls during busy service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 to-orange-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <PhoneCall className="w-6 h-6 mr-2 text-red-400" />
                      <span className="text-sm font-semibold">REVENUE CRISIS</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">The Hidden Profit Killer</h3>
                    <p className="text-gray-200">Every missed call is money walking out your door—$27,000 per year on average.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Opening Section */}
              <section className="mb-12">
                <p className="text-xl leading-relaxed text-gray-700 mb-6 font-medium">
                  At 7:47 PM on a busy Friday night, the phone rings at Romano's Italian Kitchen. The hostess is seating a party of eight, two servers are in the weeds, and the kitchen is backed up with orders. The phone rings once, twice, three times... and goes to voicemail.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  On the other end of that call was the Johnson family, looking to make a reservation for their anniversary dinner. Instead of waiting for a callback that may never come, they called the restaurant across the street. Romano's just lost a $120 dinner, plus wine, plus the potential for the Johnsons to become regular customers.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-red-800 mb-2">The Shocking Reality</h4>
                      <p className="text-red-700">
                        This scenario plays out 43% of the time in restaurants across America. Nearly half of all restaurant calls go unanswered, representing an average annual loss of $27,000 per establishment.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  If you're a restaurant owner, this isn't just a statistic—it's your money disappearing every single day. While you're focused on food quality, service, and operations, a silent profit killer is draining your revenue through missed opportunities that you probably don't even know about.
                </p>
              </section>

              {/* The Crisis Hiding in Plain Sight */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>The Crisis Hiding in Plain Sight</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Most restaurant owners have no idea they have a phone problem. Unlike a broken oven or a bad Yelp review, missed calls are invisible. They don't create obvious chaos or immediate complaints. They just quietly steal your revenue, one unanswered ring at a time.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <StatBox 
                    number="43%" 
                    label="Calls Unanswered" 
                    description="Industry average for missed restaurant calls"
                    icon={PhoneCall}
                    color="red"
                  />
                  <StatBox 
                    number="$27K" 
                    label="Annual Loss" 
                    description="Average revenue lost per restaurant yearly"
                    icon={DollarSign}
                    color="orange"
                  />
                  <StatBox 
                    number="187" 
                    label="Daily Calls" 
                    description="Average call volume for mid-size restaurants"
                    icon={BarChart3}
                    color="blue"
                  />
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Consider this: if your restaurant receives 187 calls per day (the industry average), and 43% go unanswered, that's 80 missed opportunities daily. If just 20% of those callers would have placed orders averaging $35, you're losing $560 every single day.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <h4 className="text-xl font-bold text-yellow-800 mb-4">Quick Revenue Check</h4>
                  <p className="text-yellow-700 mb-4">
                    Take a moment right now and think about yesterday. How many times did you hear your phone ring while you or your staff were too busy to answer? Even if it was just 5 times, and 2 of those were potential orders worth $40 each, that's $80 in lost revenue. In just one day.
                  </p>
                  <p className="text-yellow-700 font-semibold">
                    Multiply that by 365 days, and you're looking at $29,200 in annual losses from just 2 missed calls per day.
                  </p>
                </div>
              </section>

              <InlineCTA 
                icon={PhoneCall}
                title="Stop Losing Money to Missed Calls"
                description="Get your FREE Missed Call Audit and discover exactly how much revenue your restaurant is losing every month."
                buttonText="Get Your Free Audit"
              />

              {/* The Perfect Storm */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>The Perfect Storm: Why Restaurant Phones Go Unanswered</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Restaurant phone problems aren't caused by laziness or poor customer service. They're the inevitable result of a perfect storm of operational challenges that make consistent phone answering nearly impossible.
                </p>

                <div className="space-y-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Rush Hour Chaos</h4>
                    <p className="text-gray-700">
                      During peak dining times, your entire staff is focused on serving existing customers. The hostess is seating tables, servers are taking orders, and managers are putting out fires. When the phone rings, there's literally no one available to answer it.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Understaffing Reality</h4>
                    <p className="text-gray-700">
                      With labor costs rising and staff shortages common, most restaurants operate with minimal front-of-house staff. The person who should answer phones is often the same person seating guests, taking payments, and handling complaints.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Training Gaps</h4>
                    <p className="text-gray-700">
                      Many restaurant staff aren't properly trained on phone etiquette, reservation systems, or how to handle complex inquiries. This leads to long hold times, transfers, and ultimately, frustrated customers who hang up.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">After-Hours Losses</h4>
                    <p className="text-gray-700">
                      Even when you're closed, people are calling to make reservations, ask about hours, or place takeout orders for the next day. These after-hours calls represent pure profit potential that goes completely uncaptured.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl my-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">The Compound Effect</h4>
                  <p className="text-lg text-gray-700 mb-4">
                    These problems don't exist in isolation—they compound each other. A busy rush leads to missed calls, which leads to lost revenue, which leads to tighter staffing budgets, which leads to even more missed calls. It's a vicious cycle that gets worse over time.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">91%</div>
                      <div className="text-sm text-gray-600">Of customers expect calls answered within 3 minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
                      <div className="text-sm text-gray-600">Won't call back if their first call goes unanswered</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Revenue Loss Calculator */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200 my-12">
                <div className="text-center mb-8">
                  <Calculator className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Calculate Your Lost Revenue</h3>
                  <p className="text-red-700">Use our interactive calculator to see how much money you're losing to missed calls right now.</p>
                </div>
                
                {!showCalculator ? (
                  <div className="text-center">
                    <Button 
                      onClick={() => setShowCalculator(true)}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                    >
                      Calculate My Losses
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <Label htmlFor="dailyCalls" className="text-red-700 font-semibold">Daily Calls Received</Label>
                        <Input
                          id="dailyCalls"
                          type="number"
                          value={calculatorData.dailyCalls}
                          onChange={(e) => setCalculatorData({...calculatorData, dailyCalls: e.target.value})}
                          placeholder="e.g., 187"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="missedPercentage" className="text-red-700 font-semibold">% Calls Missed</Label>
                        <Input
                          id="missedPercentage"
                          type="number"
                          value={calculatorData.missedPercentage}
                          onChange={(e) => setCalculatorData({...calculatorData, missedPercentage: e.target.value})}
                          placeholder="e.g., 43"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="averageOrder" className="text-red-700 font-semibold">Average Order Value ($)</Label>
                        <Input
                          id="averageOrder"
                          type="number"
                          value={calculatorData.averageOrder}
                          onChange={(e) => setCalculatorData({...calculatorData, averageOrder: e.target.value})}
                          placeholder="e.g., 35"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <Button 
                        onClick={calculateLosses}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                        disabled={!calculatorData.dailyCalls || !calculatorData.missedPercentage || !calculatorData.averageOrder}
                      >
                        Calculate My Revenue Loss
                      </Button>
                    </div>

                    {calculatorResults && (
                      <div className="bg-white p-6 rounded-lg border border-red-300">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Revenue Loss Analysis</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 mb-2">${calculatorResults.dailyLoss.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Daily Loss</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 mb-2">${calculatorResults.monthlyLoss.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Monthly Loss</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-600 mb-2">${calculatorResults.annualLoss.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">Annual Loss</div>
                          </div>
                        </div>
                        <div className="mt-6 text-center">
                          <Link to="/funnel">
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                              Stop These Losses - Get Free Audit →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* The Technology Revolution */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>The Technology Revolution: How AI Fixes Everything</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  While restaurant owners have been struggling with phone problems for decades, a technological revolution has finally arrived that solves every single issue we've discussed. Artificial Intelligence phone systems don't just answer calls—they transform them into revenue.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">How AI Phone Systems Work</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Instant Answer Rate</h4>
                        <p className="text-blue-700">AI answers every call within 2 rings, 24/7/365. No busy signals, no voicemail, no missed opportunities—ever.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Natural Conversations</h4>
                        <p className="text-blue-700">Advanced AI understands context, handles complex requests, and provides personalized responses that feel completely human.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Revenue Optimization</h4>
                        <p className="text-blue-700">AI doesn't just take orders—it upsells, suggests add-ons, and maximizes the value of every single call.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Perfect Consistency</h4>
                        <p className="text-blue-700">Every caller gets the same high-quality experience, whether it's noon on Tuesday or midnight on Saturday.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real Results from Real Restaurants</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="text-xl font-bold text-green-800 mb-4">Before AI Phone System</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• 43% of calls go unanswered</li>
                      <li>• $27,000+ annual revenue loss</li>
                      <li>• Inconsistent customer experience</li>
                      <li>• Zero after-hours revenue capture</li>
                      <li>• Staff overwhelmed during rush</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-xl font-bold text-blue-800 mb-4">After AI Phone System</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• 100% call answer rate guaranteed</li>
                      <li>• 25% average revenue increase</li>
                      <li>• Perfect customer experience every time</li>
                      <li>• 24/7 revenue generation</li>
                      <li>• Staff can focus on in-person service</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">The Bottom Line</h4>
                  <p className="text-yellow-700">
                    AI phone systems don't just solve your missed call problem—they turn your phone into your most profitable employee. One that never calls in sick, never takes breaks, and works 24/7 to maximize your revenue.
                  </p>
                </div>
              </section>

              <InlineCTA 
                icon={Play}
                title="See AI Phone Answering in Action"
                description="Watch a live demo of how Bot and Table's AI handles real restaurant calls."
                buttonText="Book Free Demo"
              />

              {/* Implementation Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: darkBlue }}>Getting Started: Your 48-Hour Implementation</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Unlike traditional phone systems that require weeks of setup and training, AI phone systems can be implemented in as little as 48 hours. Here's exactly how the process works:
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Strategy Call & Setup (Day 1)</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• 30-minute consultation to understand your needs</li>
                          <li>• AI system customized to your restaurant's voice and style</li>
                          <li>• Menu integration and pricing setup</li>
                          <li>• Phone number forwarding configuration</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Testing & Launch (Day 2)</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• System testing with your actual menu and policies</li>
                          <li>• Staff training on AI system monitoring</li>
                          <li>• Go-live with full call handling capabilities</li>
                          <li>• 24/7 monitoring and support activation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Optimization & Growth (Ongoing)</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Daily performance reports and analytics</li>
                          <li>• Continuous AI learning and improvement</li>
                          <li>• Monthly strategy sessions to maximize results</li>
                          <li>• Seasonal menu updates and promotions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-green-800 mb-2">Risk-Free Guarantee</h4>
                      <p className="text-green-700">
                        We're so confident in our AI phone system that we offer a 30-day money-back guarantee. If you don't see an increase in phone orders within 30 days, we'll refund your entire investment.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
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
                  <Link to="/articles/turning-angry-customers-into-advocates" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/restaurant-owner.jpg" alt="Turning Angry Customers Into Advocates" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates
                        </h3>
                        <p className="text-gray-600 text-sm">The counterintuitive strategy that transforms your biggest complaints into your most valuable customers—and builds an unshakeable reputation in the process.</p>
                      </div>
                    </div>
                  </Link>
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
                </div>
              </section>

            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Lead Magnet */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">📊 FREE Restaurant Revenue Audit</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Discover the hidden revenue leaks in your restaurant
                  </p>
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    <li>✓ Missed call analysis</li>
                    <li>✓ Revenue loss calculation</li>
                    <li>✓ Custom improvement plan</li>
                    <li>✓ 30-minute strategy session</li>
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
                      value={leadFormData.revenue}
                      onChange={(e) => setLeadFormData({...leadFormData, revenue: e.target.value})}
                    >
                      <option value="">Monthly Revenue Range</option>
                      <option value="under-50k">Under $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k+">$250K+</option>
                    </select>
                    <Link to="/funnel">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Get My Free Audit
                      </Button>
                    </Link>
                  </form>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    100% Free • No Spam • Results in 24 Hours
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">📈 Industry Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Calls unanswered</span>
                      <span className="font-bold text-red-600">43%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average annual loss</span>
                      <span className="font-bold text-red-600">$27,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Daily call volume</span>
                      <span className="font-bold text-blue-600">187</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Expected answer time</span>
                      <span className="font-bold text-orange-600">3 min</span>
                    </div>
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
                    <Link to="/articles/from-chaos-to-cash" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue
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

      {/* Bottom CTA Section */}
      <section className="py-16" style={{ backgroundColor: darkBlue }}>
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stop Losing Money to Missed Calls?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Bot and Table's AI phone system captures 100% of your calls and turns them into revenue. Join 500+ restaurants already using our system.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  100% call answer rate guaranteed
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  25% average revenue increase in 30 days
                </li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Zero missed opportunities during rush periods
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 after-hours revenue capture
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/funnel">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all">
                Book Your Free Strategy Call
              </Button>
            </Link>
          </div>
          
          <div className="mt-8">
            <p className="text-2xl font-bold text-white">Call Now: (123) 456-7890</p>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default PhoneProblemArticle; 