import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import DemoBookingForm from './ui/DemoBookingForm';
import { 
  ArrowLeft, 
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
  ChevronUp
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const WhyBestCustomersNeverLeaveReviews = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reviewCalculatorData, setReviewCalculatorData] = useState({
    restaurantName: '',
    monthlyCustomers: '',
    currentReviews: ''
  });
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    // SEO optimization
    document.title = "Why Your Best Customers Never Leave Reviews | Restaurant Marketing Psychology | Bot and Table";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Discover why satisfied restaurant customers don\'t leave reviews and the AI system that captures 300% more positive feedback. Free review audit included.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Why Your Best Customers Never Leave Reviews');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'The psychology behind the review paradox that\'s killing great restaurants—and the AI-powered solution that captures 300% more positive reviews.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', '/happy-restaurant-owner.jpg');
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
      "headline": "Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)",
      "description": "The psychology behind the review paradox that's killing great restaurants—and the AI-powered solution that captures 300% more positive reviews",
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
      "image": "/happy-restaurant-owner.jpg",
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
        if (element && element.getAttribute('content')?.includes('review')) {
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

  // Review Calculator Component
  const ReviewCalculator = () => {
    const [results, setResults] = useState(null);

    const calculateMissingReviews = () => {
      const customers = parseInt(reviewCalculatorData.monthlyCustomers) || 0;
      const currentReviews = parseInt(reviewCalculatorData.currentReviews) || 0;
      
      // Industry benchmarks: 5-10% of satisfied customers typically leave reviews
      const expectedReviews = Math.floor(customers * 0.075); // 7.5% average
      const missingReviews = Math.max(0, expectedReviews - currentReviews);
      const potentialRevenue = missingReviews * 45; // Average revenue per review influence
      
      setResults({
        expectedReviews,
        missingReviews,
        potentialRevenue,
        satisfactionRate: Math.min(95, (currentReviews / expectedReviews) * 100 || 0)
      });
    };

    return (
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 my-8">
        <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Review Gap Calculator</h3>
        <p className="text-blue-700 text-center mb-6">Discover how many reviews your restaurant should have</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label htmlFor="restaurantName" className="text-blue-700 font-semibold">Restaurant Name</Label>
            <Input
              id="restaurantName"
              value={reviewCalculatorData.restaurantName}
              onChange={(e) => setReviewCalculatorData({...reviewCalculatorData, restaurantName: e.target.value})}
              placeholder="Your restaurant name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="monthlyCustomers" className="text-blue-700 font-semibold">Monthly Customers</Label>
            <Input
              id="monthlyCustomers"
              type="number"
              value={reviewCalculatorData.monthlyCustomers}
              onChange={(e) => setReviewCalculatorData({...reviewCalculatorData, monthlyCustomers: e.target.value})}
              placeholder="e.g., 800"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="currentReviews" className="text-blue-700 font-semibold">Current Monthly Reviews</Label>
            <Input
              id="currentReviews"
              type="number"
              value={reviewCalculatorData.currentReviews}
              onChange={(e) => setReviewCalculatorData({...reviewCalculatorData, currentReviews: e.target.value})}
              placeholder="e.g., 12"
              className="mt-1"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <Button 
            onClick={calculateMissingReviews} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            disabled={!reviewCalculatorData.monthlyCustomers || !reviewCalculatorData.currentReviews}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate My Missing Reviews
          </Button>
        </div>

        {results && (
          <div className="bg-white p-6 rounded-lg border border-blue-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Your Review Analysis Results</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{results.expectedReviews}</div>
                <div className="text-sm text-gray-600">Expected Monthly Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{results.missingReviews}</div>
                <div className="text-sm text-gray-600">Missing Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">${results.potentialRevenue}</div>
                <div className="text-sm text-gray-600">Monthly Revenue Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{Math.round(results.satisfactionRate)}%</div>
                <div className="text-sm text-gray-600">Review Capture Rate</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/funnel">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                  Get Your Free Review Recovery Plan →
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Psychology Quiz Component
  const PsychologyQuiz = () => {
    const quizQuestions = [
      {
        question: "What percentage of your customers do you think are satisfied with their dining experience?",
        options: ["Less than 60%", "60-75%", "75-85%", "85-95%", "95%+"],
        scores: [1, 2, 3, 4, 5]
      },
      {
        question: "How often do you proactively ask satisfied customers for reviews?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [1, 2, 3, 4, 5]
      },
      {
        question: "When do you typically follow up with customers after their visit?",
        options: ["We don't follow up", "A week later", "2-3 days later", "Next day", "Same day"],
        scores: [1, 2, 3, 4, 5]
      },
      {
        question: "What's your current average rating across review platforms?",
        options: ["Below 3.5", "3.5-4.0", "4.0-4.3", "4.3-4.6", "4.6+"],
        scores: [1, 2, 3, 4, 5]
      }
    ];

    const handleQuizAnswer = (score) => {
      const newAnswers = [...quizAnswers, score];
      setQuizAnswers(newAnswers);
      
      if (quizStep < quizQuestions.length - 1) {
        setQuizStep(quizStep + 1);
      } else {
        setShowQuizResult(true);
      }
    };

    const getQuizResult = () => {
      const totalScore = quizAnswers.reduce((sum, score) => sum + score, 0);
      if (totalScore <= 8) return { type: "Reactive Responder", color: "red", message: "You're missing massive opportunities" };
      if (totalScore <= 12) return { type: "Occasional Optimizer", color: "orange", message: "You're on the right track but leaving money on the table" };
      if (totalScore <= 16) return { type: "Strategic Seeker", color: "blue", message: "You understand the importance but need better systems" };
      return { type: "Review Generation Master", color: "green", message: "You're ahead of the game!" };
    };

    const resetQuiz = () => {
      setQuizStep(0);
      setQuizAnswers([]);
      setShowQuizResult(false);
    };

    if (showQuizResult) {
      const result = getQuizResult();
      return (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 my-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Your Review Generation Personality</h3>
            <div className={`text-4xl font-bold mb-4 text-${result.color}-600`}>{result.type}</div>
            <p className="text-lg text-purple-700 mb-6">{result.message}</p>
            <div className="space-y-4">
              <Link to="/funnel">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 mr-4">
                  Get Your Personalized Strategy
                </Button>
              </Link>
              <Button onClick={resetQuiz} variant="outline" className="border-purple-600 text-purple-600">
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 my-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">What Type of Review Generator Are You?</h3>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-purple-600">Question {quizStep + 1} of {quizQuestions.length}</span>
            <span className="text-sm text-purple-600">{Math.round(((quizStep) / quizQuestions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-purple-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((quizStep) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-purple-800 mb-4">{quizQuestions[quizStep].question}</h4>
          <div className="space-y-3">
            {quizQuestions[quizStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(quizQuestions[quizStep].scores[index])}
                className="w-full p-4 text-left bg-white hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Platform Comparison Tool
  const PlatformComparison = () => {
    const platforms = [
      {
        name: "Google Reviews",
        reach: "95%",
        seoImpact: "High",
        customerTrust: "Very High",
        difficulty: "Medium",
        color: "blue"
      },
      {
        name: "Yelp",
        reach: "70%",
        seoImpact: "Medium",
        customerTrust: "High",
        difficulty: "Hard",
        color: "red"
      },
      {
        name: "Facebook",
        reach: "80%",
        seoImpact: "Low",
        customerTrust: "Medium",
        difficulty: "Easy",
        color: "indigo"
      },
      {
        name: "TripAdvisor",
        reach: "60%",
        seoImpact: "Medium",
        customerTrust: "High",
        difficulty: "Medium",
        color: "green"
      }
    ];

    return (
      <div className="bg-gray-50 p-8 rounded-xl my-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Review Platform Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Platform</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-800">Customer Reach</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-800">SEO Impact</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-800">Customer Trust</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-800">Getting Reviews</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-800">{platform.name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${platform.color}-100 text-${platform.color}-800`}>
                      {platform.reach}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">{platform.seoImpact}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{platform.customerTrust}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{platform.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Bot & Table manages ALL platforms automatically</p>
          <Link to="/funnel">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              See How We Manage All Platforms →
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  // Inline CTA Components
  const InlineCTA = ({ variant, children }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'audit' && 'Get Your Free Review Analysis →'}
            {variant === 'strategy' && 'Get Your Free Review Strategy →'}
            {variant === 'demo' && 'Book a Demo of Our AI System →'}
            {variant === 'join' && 'Join 500+ Restaurants Generating 3X More Reviews →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  // Statistics Components
  const StatBox = ({ number, label, description, color = "orange" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  const CaseStudyBox = ({ restaurant, before, after, improvement, metric }) => (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 my-6">
      <h4 className="text-xl font-bold text-gray-800 mb-4">Success Story: {restaurant}</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{before}</div>
          <div className="text-sm text-gray-600">Before</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{after}</div>
          <div className="text-sm text-gray-600">After</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{improvement}</div>
          <div className="text-sm text-gray-600">{metric}</div>
        </div>
      </div>
    </div>
  );

  // FAQ Component
  const FAQSection = () => {
    const faqs = [
      {
        question: "Why don't satisfied customers leave reviews automatically?",
        answer: "Psychology research shows that satisfied customers experience 'satisfaction silence' - they assume their positive experience is normal and don't feel compelled to share it. Only 5-15% of happy customers naturally leave reviews without prompting."
      },
      {
        question: "What's the best time to ask for a review?",
        answer: "The optimal window is 2-24 hours after a positive dining experience. After 48 hours, customer motivation to leave reviews drops by 70%. Our AI system identifies the perfect moment for each customer."
      },
      {
        question: "How many reviews should my restaurant get per month?",
        answer: "Industry benchmarks suggest 5-10% of your satisfied customers should leave reviews. For a restaurant serving 800 customers monthly with 85% satisfaction, you should expect 34-68 reviews per month."
      },
      {
        question: "Do negative reviews really hurt that much?",
        answer: "Yes - studies show that a one-star decrease in rating leads to a 5-9% decrease in revenue. One negative review can deter up to 22% of potential customers from visiting your restaurant."
      }
    ];

    return (
      <div className="my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ color: blue }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {expandedFAQ === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
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
            <span className="text-gray-400">Why Your Best Customers Never Leave Reviews</span>
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
                  Review Generation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The psychology behind the review paradox that's killing great restaurants—and the AI-powered solution that captures 300% more positive reviews
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
                  src="/google-review.jpg"
                  alt="Google review interface on smartphone showing customer review experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 to-blue-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-6 h-6 mr-2 text-orange-400" />
                      <span className="text-sm font-semibold">THE REVIEW PARADOX</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Why Satisfied Customers Stay Silent</h3>
                    <p className="text-gray-200">The psychology behind why your best customers never leave reviews—and how to change that.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Opening Story - Sarah's Restaurant Paradox */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Sarah's $30,000 Mystery</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Sarah Martinez runs one of the most beloved restaurants in Austin. Every night, her tables are full. Customers leave with smiles, many become regulars, and word-of-mouth keeps her reservation book packed three weeks out. By every measure that matters, Sarah's restaurant is a massive success.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Yet when potential customers search for her restaurant online, they find a disappointing 3.8-star rating with just 23 reviews. Meanwhile, the mediocre chain restaurant across the street—with empty tables most nights—boasts a 4.4-star rating and 247 reviews.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                  <p className="text-lg italic text-orange-800">
                    "I couldn't understand it. I'd watch customers laugh, take photos of their food, and thank us on their way out. Then... nothing. No reviews, no social media posts. It was like they vanished into thin air." - Sarah Martinez, Owner of Casa Esperanza
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Sarah's story isn't unique. It's happening to thousands of excellent restaurants every day. The cruel irony? The better your restaurant, the less likely your customers are to leave reviews. This psychological phenomenon is costing the restaurant industry an estimated $2.3 billion annually in lost revenue.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  After implementing the review generation system we'll reveal in this article, Sarah's restaurant gained 178 new reviews in 90 days, her rating jumped to 4.7 stars, and her revenue increased by $30,000 in the first quarter. The system took less than 24 hours to set up.
                </p>
              </section>

              <InlineCTA variant="audit">
                See how many reviews your restaurant is missing
              </InlineCTA>

              {/* The Review Paradox */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Review Paradox: Why Satisfaction Creates Silence</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The relationship between customer satisfaction and review-leaving behavior is counterintuitive. Traditional business logic suggests that happy customers would naturally want to share their positive experiences. The reality is far more complex.
                </p>

                <div className="bg-blue-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">The Psychology of Satisfied Customers</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Expectation Fulfillment</h4>
                          <p className="text-blue-700 text-sm">When customers get exactly what they expect, they feel no urgency to share. Good service feels "normal."</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Timer className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Satisfaction Amnesia</h4>
                          <p className="text-blue-700 text-sm">Positive emotions fade faster than negative ones. The joy of a great meal dissipates within hours.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Target className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Cognitive Load</h4>
                          <p className="text-blue-700 text-sm">Happy customers are relaxed and don't want to think about additional tasks like writing reviews.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Social Proof Assumption</h4>
                          <p className="text-blue-700 text-sm">They assume others have already reviewed the restaurant, so their contribution isn't needed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Data Behind the Paradox</h3>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <StatBox 
                    number="7%" 
                    label="Review Rate" 
                    description="Of satisfied customers who naturally leave reviews"
                    color="blue"
                  />
                  <StatBox 
                    number="67%" 
                    label="Complaint Rate" 
                    description="Of dissatisfied customers who leave negative reviews"
                    color="red"
                  />
                  <StatBox 
                    number="48hrs" 
                    label="Motivation Window" 
                    description="After which review motivation drops by 70%"
                    color="orange"
                  />
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Research from the Cornell School of Hotel Administration reveals that dissatisfied customers are 9.5 times more likely to leave reviews than satisfied ones. This creates a systematic bias where your online reputation doesn't reflect your actual customer experience.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Dr. Michael Luca's Harvard Business School study found that restaurants with predominantly satisfied customers but few reviews lose an average of 15-25% of potential revenue to competitors with more aggressive review collection strategies.
                </p>
              </section>

              {/* Interactive Review Calculator */}
              <ReviewCalculator />

              <InlineCTA variant="strategy">
                Get your free review generation strategy
              </InlineCTA>

              {/* Hidden Costs Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Hidden $50,000 Cost of Missing Reviews</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Most restaurant owners focus on the obvious metrics: food costs, labor, rent. But there's a hidden cost that's bleeding profits from even the most successful restaurants—the opportunity cost of missing reviews.
                </p>

                <div className="bg-red-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-red-800 mb-6">The Compound Effect of Missing Reviews</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <TrendingUp className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Decreased Visibility</h4>
                        <p className="text-red-700">Restaurants with fewer than 50 reviews get 40% less visibility in Google search results and map listings.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <BarChart3 className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Lower Conversion Rates</h4>
                        <p className="text-red-700">68% of consumers won't consider restaurants with ratings below 4.0 stars or fewer than 15 reviews.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-red-800 mb-2">Competitive Disadvantage</h4>
                        <p className="text-red-700">Competitors with more reviews appear more trustworthy, even if their actual service is inferior.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Revenue Impact Calculator</h3>
                
                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Annual Revenue Loss from Missing Reviews</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Lost online discovery</span>
                        <span className="font-bold text-red-600">$18,400</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Decreased conversion rate</span>
                        <span className="font-bold text-red-600">$12,800</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Competitive disadvantage</span>
                        <span className="font-bold text-red-600">$9,200</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Reduced pricing power</span>
                        <span className="font-bold text-red-600">$6,300</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Lower customer lifetime value</span>
                        <span className="font-bold text-red-600">$4,100</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t-2 border-red-500 font-bold text-xl">
                        <span className="text-gray-900">Total Annual Impact</span>
                        <span className="text-red-600">$50,800</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 mb-4">This represents the typical revenue opportunity for a mid-size restaurant (500-1000 monthly customers)</p>
                  </div>
                </div>
              </section>

              <InlineCTA variant="demo">
                Book a demo of our AI review system
              </InlineCTA>

              {/* Customer Psychology Deep Dive */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Psychology Behind Customer Behavior</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Understanding why satisfied customers don't leave reviews requires diving deep into behavioral psychology. The patterns are consistent across cultures and demographics, revealing fundamental truths about human motivation.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Satisfaction Curve</h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl mb-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                      </div>
                      <h4 className="font-bold text-red-800 mb-2">Dissatisfied Customers</h4>
                      <p className="text-sm text-red-700">High emotional intensity drives immediate action. 67% leave reviews within 24 hours.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h4 className="font-bold text-yellow-800 mb-2">Exceeded Expectations</h4>
                      <p className="text-sm text-yellow-700">Surprise and delight create motivation. 23% leave reviews when expectations are exceeded.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-green-800 mb-2">Satisfied Customers</h4>
                      <p className="text-sm text-green-700">Contentment creates complacency. Only 7% naturally leave reviews without prompting.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Psychological Barriers</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">The "Good Enough" Phenomenon</h4>
                    <p className="text-gray-700">When customers receive exactly what they expect, their brains categorize the experience as "normal." Normal experiences don't trigger the emotional responses necessary for spontaneous review-writing behavior.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Temporal Discounting</h4>
                    <p className="text-gray-700">Humans naturally prioritize immediate rewards over future benefits. The effort of writing a review is immediate, while the benefit to the restaurant (and potential future diners) is abstract and delayed.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Social Loafing</h4>
                    <p className="text-gray-700">In busy, popular restaurants, customers assume others will leave reviews. This diffusion of responsibility leads to fewer reviews despite higher satisfaction levels.</p>
                  </div>
                </div>
              </section>

              {/* Interactive Psychology Quiz */}
              <PsychologyQuiz />

              {/* Timing Challenges */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Critical Timing Window</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Even when customers intend to leave reviews, timing becomes the enemy. Research from the University of Pennsylvania's Wharton School reveals a steep decline in review motivation over time.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Review Motivation Decay Timeline</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-semibold">Immediately after dining</span>
                      </div>
                      <span className="text-green-600 font-bold">100% motivation</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <span className="font-semibold">2 hours later</span>
                      </div>
                      <span className="text-yellow-600 font-bold">78% motivation</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                        <span className="font-semibold">24 hours later</span>
                      </div>
                      <span className="text-orange-600 font-bold">45% motivation</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <span className="font-semibold">48+ hours later</span>
                      </div>
                      <span className="text-red-600 font-bold">12% motivation</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
                    <p className="text-yellow-800 text-center">
                      <strong>Key Insight:</strong> The optimal review request window is 2-24 hours after dining, when satisfaction memory is strong but daily life hasn't taken over.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Distraction Factor</h3>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Modern life is full of distractions. A customer might genuinely intend to leave a review, but between leaving your restaurant and getting home, they'll face dozens of competing demands for their attention:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                  <li>Work emails and messages</li>
                  <li>Family responsibilities</li>
                  <li>Social media notifications</li>
                  <li>Entertainment options</li>
                  <li>Daily errands and tasks</li>
                </ul>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  By the time they remember their intention to leave a review, the emotional connection to their dining experience has faded. This is why proactive, timely outreach is essential.
                </p>
              </section>

              {/* Platform Comparison */}
              <PlatformComparison />

              <InlineCTA variant="join">
                Join 500+ restaurants generating 3X more reviews
              </InlineCTA>

              {/* Technology Solution */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The AI Solution That Changes Everything</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  After analyzing the psychological barriers, timing challenges, and platform complexities, we developed an AI-powered system that addresses each obstacle systematically. The Bot & Table Review Generation Engine™ doesn't just ask for reviews—it creates the optimal conditions for customers to want to leave them.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">How Our AI System Works</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Satisfaction Detection</h4>
                        <p className="text-blue-700">Our AI analyzes order patterns, timing, service interactions, and payment behavior to identify satisfied customers in real-time.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Timer className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Optimal Timing</h4>
                        <p className="text-blue-700">Personalized outreach timing based on individual customer behavior patterns, typically 2-8 hours after dining when motivation is highest.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Personalized Messaging</h4>
                        <p className="text-blue-700">Custom messages referencing specific details from their visit, making the request feel personal rather than automated.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-800 mb-2">Multi-Platform Management</h4>
                        <p className="text-blue-700">Automatically directs customers to the platform where their review will have the greatest impact on your overall reputation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Three-Layer Approach</h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-green-800 text-center mb-3">Layer 1: Detection</h4>
                    <p className="text-green-700 text-sm text-center">AI identifies satisfied customers through behavioral analysis and service indicators</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-blue-800 text-center mb-3">Layer 2: Timing</h4>
                    <p className="text-blue-700 text-sm text-center">Personalized outreach at the optimal moment when motivation is highest</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-purple-800 text-center mb-3">Layer 3: Optimization</h4>
                    <p className="text-purple-700 text-sm text-center">Continuous learning improves messaging and timing for each customer segment</p>
                  </div>
                </div>
              </section>

              {/* Success Stories */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Real Results: Before & After</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  These are real restaurants that implemented our review generation system. The results speak for themselves:
                </p>

                <CaseStudyBox 
                  restaurant="Milano's Bistro"
                  before="3.2 stars, 18 reviews"
                  after="4.6 stars, 156 reviews"
                  improvement="+89%"
                  metric="Revenue increase"
                />

                <CaseStudyBox 
                  restaurant="Taco Libre"
                  before="2.8 stars, 9 reviews"
                  after="4.4 stars, 203 reviews"
                  improvement="+67%"
                  metric="New customers"
                />

                <CaseStudyBox 
                  restaurant="The Garden Kitchen"
                  before="4.0 stars, 31 reviews"
                  after="4.8 stars, 187 reviews"
                  improvement="+156%"
                  metric="Online orders"
                />

                <div className="bg-green-50 border border-green-200 p-8 rounded-xl my-8">
                  <h4 className="text-2xl font-bold text-green-800 mb-4">Average Results Across All Clients:</h4>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">312%</div>
                      <div className="text-sm text-green-700">More Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">1.2</div>
                      <div className="text-sm text-green-700">Star Rating Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                      <div className="text-sm text-green-700">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">24hrs</div>
                      <div className="text-sm text-green-700">Setup Time</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">What Our Clients Say:</h4>
                  <blockquote className="text-lg italic text-blue-700 mb-4">
                    "We went from 2-3 reviews per month to getting 40-50 reviews monthly. Our revenue increased by $45,000 in the first six months. The system pays for itself within weeks."
                  </blockquote>
                  <cite className="text-blue-600 font-semibold">- Roberto Santos, Owner of Casa del Sol (3 locations)</cite>
                </div>
              </section>

              {/* Implementation Strategy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Implementation: Your 30-Day Action Plan</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Implementing a review generation system doesn't have to be overwhelming. Here's the exact 30-day plan we use with our clients to achieve 300%+ review increases:
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 1: Foundation Setup</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Complete reputation audit across all platforms</li>
                          <li>• Identify current review gaps and opportunities</li>
                          <li>• Set up monitoring systems for real-time tracking</li>
                          <li>• Install customer satisfaction detection tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 2: System Integration</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Integrate AI detection with your POS system</li>
                          <li>• Configure personalized messaging templates</li>
                          <li>• Set up automated timing algorithms</li>
                          <li>• Train staff on the new process</li>
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
                          <li>• Begin automated review requests</li>
                          <li>• Monitor response rates and feedback</li>
                          <li>• Adjust timing and messaging based on results</li>
                          <li>• Address any technical issues</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Week 4: Scale & Measure</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                          <li>• Analyze first month's review generation data</li>
                          <li>• Implement advanced personalization features</li>
                          <li>• Set up long-term tracking and reporting</li>
                          <li>• Plan expansion to additional platforms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">Critical Success Factor</h4>
                      <p className="text-yellow-700">
                        The difference between restaurants that succeed and those that fail with review generation comes down to consistency. The system must run automatically, without relying on staff to remember to ask for reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection />

              {/* Final Call to Action */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl text-center">
                  <h3 className="text-3xl font-bold mb-4">Don't Let Another Day Pass Without Reviews</h3>
                  <p className="text-xl mb-6 text-orange-100">
                    Every day you wait, your competitors are capturing more reviews and more customers. Get the same system that's helped 500+ restaurants generate 300% more reviews.
                  </p>
                  <div className="space-y-4">
                    <Link to="/funnel">
                      <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all mr-4">
                        Get Your Free Review Analysis
                      </Button>
                    </Link>
                    <Link to="/funnel">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-4 text-lg">
                        Book Strategy Call
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-6 text-sm text-orange-200">
                    No obligation • 30-minute consultation • Same-day implementation available
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

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Primary Lead Capture */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">Get Your Free Review Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Discover exactly how many reviews your restaurant should have and create a personalized action plan.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Restaurant Name" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Current Monthly Reviews" className="border-orange-200" />
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
                      <div className="font-semibold text-green-800">Tony's Pizza Palace</div>
                      <div className="text-sm text-green-700">+156 reviews in 60 days</div>
                      <div className="text-xs text-green-600">Rating: 3.1 → 4.6 stars</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">Sakura Sushi Bar</div>
                      <div className="text-sm text-blue-700">+89% revenue increase</div>
                      <div className="text-xs text-blue-600">Reviews: 12 → 203</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-semibold text-purple-800">The Garden Bistro</div>
                      <div className="text-sm text-purple-700">+67% new customers</div>
                      <div className="text-xs text-purple-600">Rating: 4.0 → 4.8 stars</div>
                    </div>
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
                      Restaurant Owner's Guide to Review Psychology
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Review Generation Checklist - 15 Strategies
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Platform Comparison Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Speak to an Expert</CardTitle>
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
                    <Link to="/articles/google-reviews-strategies" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      10 Proven Strategies to Get More Google Reviews for Your Restaurant
                    </Link>
                    <Link to="/articles/turning-angry-customers-into-advocates" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates
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

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Generate 300% More Reviews?</h2>
          <p className="text-xl text-gray-600 mb-8">Join 500+ restaurants that have transformed their online reputation with our AI-powered system.</p>
          <div className="space-x-4">
            <Link to="/funnel">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all">
                Get Free Review Analysis
              </Button>
            </Link>
            <Link to="/funnel">
              <Button variant="outline" className="border-orange-600 text-orange-600 font-bold px-8 py-4 text-lg">
                Book Strategy Call
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
            Get Free Review Analysis →
          </Button>
        </Link>
      </div>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default WhyBestCustomersNeverLeaveReviews; 