import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import DemoBookingForm from './ui/DemoBookingForm';
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Star,
  TrendingUp,
  Users,
  Award,
  Shield,
  Target,
  BarChart3,
  Phone,
  Mail,
  Download,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  MessageSquare,
  Search,
  Eye,
  ThumbsUp,
  Zap
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const BuildingFiveStarReputation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // SEO optimization
    document.title = "Building a 5-Star Online Reputation: A Complete Guide for Restaurants | Bot and Table";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Complete guide to building a 5-star online reputation for restaurants. Learn proven strategies for Google Reviews, social media, crisis management, and reputation building.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Schema markup
    const schemaScript = document.getElementById('reputation-guide-schema') || document.createElement('script');
    schemaScript.id = 'reputation-guide-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Building a 5-Star Online Reputation: A Complete Guide for Restaurants",
      "description": "Comprehensive guide covering reputation management, Google Reviews optimization, social media strategies, and crisis management for restaurants.",
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
      "image": "/five-stars.jpg",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
    if (!document.getElementById('reputation-guide-schema')) {
      document.head.appendChild(schemaScript);
    }

    return () => {
      document.title = "Bot and Table - AI-Powered Restaurant Marketing";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inline CTA Component
  const InlineCTA = ({ variant, children }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'reputation' && 'Get Your Free Reputation Analysis →'}
            {variant === 'strategy' && 'Book Your Reputation Strategy Call →'}
            {variant === 'demo' && 'See How We Build 5-Star Reputations →'}
            {variant === 'consultation' && 'Schedule Free Consultation →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  // Statistics Component
  const StatBox = ({ number, label, description, color = "orange", icon: Icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all">
      <div className="flex items-center justify-center mb-4">
        <Icon className={`w-8 h-8 text-${color}-600`} />
      </div>
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
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
            <span className="text-gray-400">Building a 5-Star Online Reputation</span>
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
                  REPUTATION MANAGEMENT
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                Building a 5-Star Online Reputation: A Complete Guide for Restaurants
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master the strategies and systems that successful restaurants use to build exceptional online reputations, drive customer acquisition, and achieve sustainable business growth in the digital age.
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
              </div>

              {/* Key Statistics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <StatBox 
                  number="94%" 
                  label="Customer Influence" 
                  description="Of diners say reviews influence their restaurant choices"
                  color="blue"
                  icon={Users}
                />
                <StatBox 
                  number="144%" 
                  label="Conversion Boost" 
                  description="Lift in conversion rate when restaurants engage with reviews"
                  color="green"
                  icon={TrendingUp}
                />
                <StatBox 
                  number="5-9%" 
                  label="Revenue Impact" 
                  description="Revenue increase per one-star rating improvement"
                  color="orange"
                  icon={BarChart3}
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
                  src="/five-stars.jpg"
                  alt="Restaurant owner managing online reviews and reputation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-orange-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <Star className="w-6 h-6 mr-2 text-orange-400" />
                      <span className="text-sm font-semibold">REPUTATION EXCELLENCE</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Your Complete Guide to 5-Star Success</h3>
                    <p className="text-gray-200">Transform your restaurant's online presence with proven reputation management strategies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  In today's digital-first world, your restaurant's online reputation has become as crucial to your success as the quality of your food and service. The stark reality facing restaurant owners is that 94% of diners say online reviews significantly influence their dining selections, while 83% of potential customers begin their restaurant discovery journey online. This means that before a single customer walks through your doors, they've likely already formed an opinion about your establishment based on what they've found in the digital realm.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The power of online reputation extends far beyond simple customer acquisition. Research demonstrates that when restaurants actively engage with their online reviews, they experience a 144% lift in conversion rate and a 162% lift in revenue per visitor. Even more compelling, Harvard Business School research has shown that a single one-star increase in a restaurant's average rating can lead to a 5-9% boost in revenue. These statistics underscore a fundamental truth: your online reputation is not just a marketing concern—it's a direct driver of your bottom line.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                  <p className="text-lg italic text-blue-800">
                    "The restaurants that thrive in this environment are those that recognize online reputation management as an ongoing operational priority rather than an occasional marketing activity."
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The challenge for restaurant owners lies not in understanding the importance of online reputation, but in developing and executing a systematic approach to building and maintaining a five-star digital presence. The landscape of online reputation management has evolved dramatically, encompassing everything from Google Reviews and social media presence to customer service responsiveness and crisis management protocols.
                </p>
              </section>

              <InlineCTA variant="reputation">
                Ready to transform your restaurant's online reputation?
              </InlineCTA>

              {/* Understanding the Digital Reputation Landscape */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Understanding the Digital Reputation Landscape</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The modern restaurant's digital reputation exists across a complex ecosystem of platforms, each with its own audience, algorithms, and influence on customer decision-making. Understanding this landscape is essential for developing an effective reputation management strategy that addresses all the touchpoints where potential customers encounter your brand online.
                </p>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Reputation Platforms</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Search className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-800">Google Reviews & My Business</h4>
                          <p className="text-green-700 text-sm">Primary source for local search and customer decisions. Heavily weights review quality and recency.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MessageSquare className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Social Media Platforms</h4>
                          <p className="text-blue-700 text-sm">Facebook, Instagram, TikTok for visual storytelling and community building.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-6 h-6 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-yellow-800">Third-Party Review Sites</h4>
                          <p className="text-yellow-700 text-sm">Yelp, TripAdvisor, OpenTable for specialized dining decisions and travel.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Smartphone className="w-6 h-6 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-purple-800">Delivery Platforms</h4>
                          <p className="text-purple-700 text-sm">DoorDash, Uber Eats, Grubhub with unique customer expectations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Interconnected Nature of Digital Reputation</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The interconnected nature of digital reputation means that negative feedback on one platform can quickly spread to others, while positive reputation building efforts can create momentum across multiple channels. Search engines and social media algorithms increasingly consider cross-platform consistency and engagement when determining content visibility.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Visibility Impact</h4>
                    <p className="text-sm text-blue-700">Strong reviews improve search rankings and map listings visibility</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-green-800 mb-2">Customer Trust</h4>
                    <p className="text-sm text-green-700">85% of patrons trust online reviews as much as personal recommendations</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-orange-800 mb-2">Decision Influence</h4>
                    <p className="text-sm text-orange-700">Reviews directly impact customer choices and booking decisions</p>
                  </div>
                </div>
              </section>

              {/* The Business Impact of Online Reputation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Business Impact of Online Reputation</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The financial implications of online reputation management extend far beyond simple customer acquisition, encompassing revenue optimization, operational efficiency, and long-term business sustainability. Understanding these impacts enables restaurant owners to make informed decisions about reputation management investments.
                </p>

                <div className="bg-green-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-green-800 mb-6">Revenue Generation Benefits</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-800 mb-2">Increased Customer Acquisition</h4>
                        <p className="text-green-700">Higher search visibility and customer trust lead to more bookings and walk-ins.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-800 mb-2">Premium Positioning</h4>
                        <p className="text-green-700">Excellent reputations enable premium pricing and higher profit margins.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-800 mb-2">Customer Lifetime Value</h4>
                        <p className="text-green-700">Customers engaged through digital channels show 24% higher lifetime value.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Operational Efficiency Improvements</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Restaurants that actively monitor and respond to customer feedback identify operational issues more quickly and accurately than those relying solely on internal feedback mechanisms. Online reviews provide real-time insights into service quality, food consistency, and staff performance.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">Early Warning System</h4>
                      <p className="text-yellow-700">
                        Online reviews serve as an early warning system for operational issues, enabling proactive problem-solving before issues escalate into larger problems that impact multiple customers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <InlineCTA variant="strategy">
                Want to see how reputation management can impact your revenue?
              </InlineCTA>

              {/* Foundations of Reputation Management */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Foundations of Reputation Management</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Building a sustainable five-star online reputation requires establishing fundamental systems and processes that ensure consistent quality delivery and proactive customer relationship management. These foundational elements create the infrastructure necessary for long-term reputation success.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <Shield className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-xl font-bold text-blue-800 mb-4">Service Excellence</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Consistent quality standards across all operations</li>
                      <li>• Staff training and empowerment programs</li>
                      <li>• Customer feedback systems and processes</li>
                      <li>• Quality assurance and monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <Zap className="w-12 h-12 text-purple-600 mb-4" />
                    <h4 className="text-xl font-bold text-purple-800 mb-4">Technology Infrastructure</h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Google My Business optimization</li>
                      <li>• Professional social media profiles</li>
                      <li>• Review monitoring systems</li>
                      <li>• Crisis response protocols</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Building Your Reputation Foundation</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">1. Service Standards Development</h4>
                    <p className="text-gray-700">Create written protocols for every customer interaction, from greeting to payment processing. Ensure all staff understand expectations and have tools for consistent delivery.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">2. Customer Feedback Systems</h4>
                    <p className="text-gray-700">Implement multiple touchpoints for gathering feedback: comment cards, verbal check-ins, post-visit surveys, and social media monitoring to identify issues proactively.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">3. Crisis Preparation</h4>
                    <p className="text-gray-700">Establish clear procedures for addressing negative feedback, service failures, and reputation threats with escalation procedures and response templates.</p>
                  </div>
                </div>
              </section>

              {/* Google Reviews and Local SEO Mastery */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Google Reviews and Local SEO Mastery</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Google Reviews have become the single most important factor in restaurant online reputation, serving as both a primary source of customer information and a critical ranking signal for local search visibility. Mastering Google Reviews requires understanding how Google's algorithms work and what customers expect.
                </p>

                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Google My Business Optimization</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <h5 className="font-bold text-blue-800 mb-2">Complete Profile</h5>
                      <p className="text-sm text-blue-700">Accurate business information, hours, contact details, and service descriptions</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-green-600" />
                      </div>
                      <h5 className="font-bold text-green-800 mb-2">Visual Content</h5>
                      <p className="text-sm text-green-700">High-quality photos of food, interior, staff, and customer experiences</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-orange-600" />
                      </div>
                      <h5 className="font-bold text-orange-800 mb-2">Regular Updates</h5>
                      <p className="text-sm text-orange-700">Fresh content, seasonal changes, special events, and posts</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Review Generation Strategies</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Effective review generation balances authenticity with systematic approach, encouraging satisfied customers to share experiences while avoiding tactics that could be perceived as manipulative. The key is exceptional service delivery that naturally motivates positive feedback.
                </p>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Optimal Review Request Timeline</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-semibold">Immediately after positive experience</span>
                      </div>
                      <span className="text-green-600 font-bold">Best timing</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <span className="font-semibold">24-48 hours later</span>
                      </div>
                      <span className="text-yellow-600 font-bold">Good timing</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <span className="font-semibold">Week or more later</span>
                      </div>
                      <span className="text-red-600 font-bold">Poor timing</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Review Response Best Practices</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Every review response represents an opportunity to showcase customer service excellence while providing additional content that supports local SEO objectives. Responses should be prompt, professional, and personalized to each customer's specific experience.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <ThumbsUp className="w-8 h-8 text-green-600 mb-4" />
                    <h4 className="text-lg font-bold text-green-800 mb-3">Positive Review Responses</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• Express genuine gratitude</li>
                      <li>• Highlight specific positive aspects</li>
                      <li>• Reinforce key brand messages</li>
                      <li>• Encourage future visits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-xl">
                    <AlertTriangle className="w-8 h-8 text-red-600 mb-4" />
                    <h4 className="text-lg font-bold text-red-800 mb-3">Negative Review Management</h4>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li>• Acknowledge the customer's experience</li>
                      <li>• Take responsibility where appropriate</li>
                      <li>• Offer solutions or remediation</li>
                      <li>• Invite private dialogue</li>
                    </ul>
                  </div>
                </div>
              </section>

              <InlineCTA variant="demo">
                See how our reputation management system works
              </InlineCTA>

              {/* Social Media Reputation Building */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Social Media Reputation Building</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Social media platforms have evolved into powerful reputation management tools that enable restaurants to build brand awareness, engage with customers, and showcase their personality in ways that traditional review platforms cannot match.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-purple-800 mb-3">Instagram</h4>
                    <p className="text-purple-700 text-sm mb-3">Visual focus ideal for food photography and restaurant atmosphere</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• High-quality food photos</li>
                      <li>• Behind-the-scenes content</li>
                      <li>• Stories and Reels</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">Facebook</h4>
                    <p className="text-blue-700 text-sm mb-3">Community features support engagement and event promotion</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Customer reviews and ratings</li>
                      <li>• Event promotion</li>
                      <li>• Community building</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-red-800 mb-3">TikTok</h4>
                    <p className="text-red-700 text-sm mb-3">Short-form video for creative storytelling and younger audiences</p>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>• Creative food videos</li>
                      <li>• Staff personalities</li>
                      <li>• Trending content</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content Strategy for Reputation Building</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Effective social media content goes beyond promotional posts to include educational content, behind-the-scenes glimpses, staff spotlights, customer features, and community engagement that builds authentic relationships with followers.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">Content Categories for Reputation Building</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Educational Content</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Cooking tips and techniques</li>
                        <li>• Ingredient spotlights</li>
                        <li>• Menu item origins</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Behind-the-Scenes</h5>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Kitchen preparation</li>
                        <li>• Staff stories</li>
                        <li>• Daily operations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Crisis Management and Damage Control */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Crisis Management and Damage Control</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Effective crisis management represents an essential capability for maintaining online reputation in an environment where negative incidents can quickly escalate. Successful crisis management requires preparation, rapid response capabilities, and strategic communication.
                </p>

                <div className="bg-red-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-red-800 mb-6">Crisis Response Framework</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Early Detection</h4>
                        <p className="text-red-700">Monitor multiple channels to identify potential reputation threats before they escalate into major problems.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Rapid Response</h4>
                        <p className="text-red-700">Establish clear communication chains and response procedures for immediate action when time is critical.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Recovery Strategy</h4>
                        <p className="text-red-700">Focus on restoring customer confidence through operational improvements and enhanced service initiatives.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prevention and Risk Mitigation</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Prevention is always more effective and less costly than crisis management. Focus on identifying and addressing potential reputation risks through regular operational audits, staff training, and proactive communication.
                </p>
              </section>

              <InlineCTA variant="consultation">
                Need help with reputation crisis management?
              </InlineCTA>

              {/* Measuring Success and ROI */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Measuring Success and ROI</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Effective measurement and return on investment analysis for online reputation management require comprehensive tracking systems that connect reputation activities to business outcomes while providing insights for continuous optimization.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-green-600 mb-4" />
                    <h4 className="text-lg font-bold text-green-800 mb-3">Key Performance Indicators</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• Review volume and ratings</li>
                      <li>• Response times and rates</li>
                      <li>• Sentiment analysis scores</li>
                      <li>• Share of voice vs competitors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="text-lg font-bold text-blue-800 mb-3">Business Impact Metrics</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Revenue growth correlation</li>
                      <li>• Customer acquisition costs</li>
                      <li>• Customer lifetime value</li>
                      <li>• Retention rate improvements</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">ROI Calculation Framework</h3>
                
                <div className="bg-yellow-50 p-6 rounded-xl mb-8">
                  <h4 className="text-lg font-bold text-yellow-800 mb-4">Reputation Management ROI Formula</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-yellow-700"><strong>Benefits:</strong> Increased revenue + Reduced marketing costs + Operational efficiency gains</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-yellow-700"><strong>Costs:</strong> Staff time + Technology tools + Marketing expenses + External services</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-yellow-700"><strong>ROI:</strong> (Benefits - Costs) / Costs × 100</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Building Long-Term Reputation Assets */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Building Long-Term Reputation Assets</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Sustainable online reputation building requires a long-term perspective that focuses on creating lasting reputation assets rather than short-term tactical improvements. These reputation assets appreciate over time and provide increasing competitive advantages.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-orange-800 mb-2">Brand Development</h4>
                    <p className="text-sm text-orange-700">Clear brand identity and messaging that resonates with target customers</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Customer Relationships</h4>
                    <p className="text-sm text-blue-700">Emotional connections that generate lasting positive sentiment and advocacy</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-green-800 mb-2">Operational Excellence</h4>
                    <p className="text-sm text-green-700">Consistent quality delivery that creates authentic positive experiences</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Compound Effect of Reputation Building</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Reputation assets create compound returns over time. Strong reputations make marketing more effective, attract better staff, enable premium pricing, and provide resilience during challenging periods. The restaurants that invest in reputation building today will reap increasing benefits for years to come.
                </p>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">Long-Term Benefits of 5-Star Reputation</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Business Growth</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Higher search rankings</li>
                        <li>• Increased customer lifetime value</li>
                        <li>• Premium pricing opportunities</li>
                        <li>• Reduced marketing costs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 mb-2">Operational Advantages</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Better staff recruitment</li>
                        <li>• Higher employee satisfaction</li>
                        <li>• Crisis resilience</li>
                        <li>• Competitive differentiation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Your Path to 5-Star Success</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Building and maintaining a five-star online reputation represents one of the most critical investments a restaurant can make in today's digital marketplace. The statistics are clear: 94% of diners rely on online reviews, restaurants see 144% conversion improvements when engaging with reviews, and a single star increase drives 5-9% revenue growth.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The comprehensive framework presented in this guide provides restaurant owners with the tools, strategies, and insights necessary to build sustainable competitive advantages through systematic reputation management. From understanding the digital landscape to implementing crisis management protocols, each component contributes to a holistic approach that delivers measurable results.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                  <p className="text-lg italic text-orange-800">
                    "The most successful restaurants recognize that reputation management is not a destination but an ongoing journey that requires consistent attention, continuous improvement, and strategic adaptation to changing customer expectations."
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The restaurants that will thrive in the digital age are those that understand reputation management is about consistently delivering exceptional experiences that naturally generate positive word-of-mouth and customer loyalty. Every customer interaction, review response, and social media post contributes to a cumulative impression that influences future customers and drives business success.
                </p>
              </section>

              {/* Final CTA Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl text-center">
                  <h3 className="text-3xl font-bold mb-4">Ready to Build Your 5-Star Reputation?</h3>
                  <p className="text-xl mb-6 text-orange-100">
                    Join hundreds of successful restaurants using Bot & Table's reputation management system to build exceptional online presence and drive sustainable growth.
                  </p>
                  <div className="space-y-4">
                    <Link to="/funnel">
                      <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all mr-4">
                        Get Your Free Reputation Analysis
                      </Button>
                    </Link>
                    <Link to="/funnel">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 text-lg">
                        Schedule Strategy Call
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-6 text-sm text-orange-200">
                    ✓ No obligation ✓ Custom reputation strategy ✓ Proven results for 500+ restaurants
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/articles/google-reviews-strategies" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/google-maps-phone.jpg.jpg" alt="Google Reviews Strategies" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          10 Proven Strategies to Get More Google Reviews
                        </h3>
                        <p className="text-gray-600 text-sm">Master the most effective methods to encourage positive reviews and boost your online reputation.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/why-best-customers-never-leave-reviews" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/google-review.jpg" alt="Customer Review Psychology" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Why Your Best Customers Never Leave Reviews
                        </h3>
                        <p className="text-gray-600 text-sm">Understand the psychology behind customer review behavior and how to overcome it.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/turning-angry-customers-into-advocates" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/restaurant-owner.jpg" alt="Customer Service Recovery" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Turning Angry Customers Into Loyal Advocates
                        </h3>
                        <p className="text-gray-600 text-sm">Learn how to transform negative experiences into positive outcomes and stronger relationships.</p>
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
                  <CardTitle className="text-lg text-orange-800">Free Reputation Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Get a comprehensive analysis of your restaurant's online reputation across all major platforms.
                  </p>
                  <Link to="/funnel">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Get Free Analysis
                    </Button>
                  </Link>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    ✓ All major platforms ✓ Competitor comparison ✓ Action plan included
                  </div>
                </CardContent>
              </Card>

              {/* Key Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reputation Impact Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">94%</div>
                      <div className="text-sm text-gray-600">Diners influenced by reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">144%</div>
                      <div className="text-sm text-gray-600">Conversion rate increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">5-9%</div>
                      <div className="text-sm text-gray-600">Revenue boost per star</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Free Reputation Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Reputation Management Checklist
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Review Response Templates
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Crisis Management Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Expert Help?</CardTitle>
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

            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Building Your 5-Star Reputation Today</h2>
          <p className="text-xl text-gray-600 mb-8">Join hundreds of restaurants using proven reputation management strategies to drive growth and success.</p>
          <div className="space-x-4">
            <Link to="/funnel">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all">
                Get Free Reputation Analysis
              </Button>
            </Link>
            <Link to="/funnel">
              <Button variant="outline" className="border-orange-600 text-orange-600 font-bold px-8 py-4 text-lg">
                Schedule Strategy Call
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            No obligation • Complete analysis • Proven strategies • Expert support
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-600 p-4 lg:hidden z-40">
        <Link to="/funnel">
          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3">
            Get Free Reputation Analysis →
          </Button>
        </Link>
      </div>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default BuildingFiveStarReputation; 