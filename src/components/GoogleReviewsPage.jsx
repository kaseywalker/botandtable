import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import DemoBookingForm from './ui/DemoBookingForm';
import ArticlesSection from './ArticlesSection';
import { Link } from 'react-router-dom';

const coral = '#FF6B47';
import { 
  Star, 
  Shield, 
  TrendingUp, 
  TrendingDown,
  Clock, 
  Users, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Phone, 
  Mail, 
  Smartphone,
  Calendar,
  Award,
  Target,
  Zap,
  ChevronDown,
  ChevronUp,
  AlertTriangle
} from 'lucide-react';

const GoogleReviewsPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Positive Review Volume by 3-5X in 90 days",
      description: (
        <>
          Systematic review requests at optimal timing generate significantly more positive reviews than hoping customers will remember to leave feedback. Our automated system captures reviews when satisfaction is highest and motivation is strongest. Learn the{' '}
          <Link to="/articles/google-reviews-strategies" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            10 proven strategies
          </Link>{' '}
          that successful restaurants use to generate more Google reviews.
        </>
      ),
      stats: ["3-5X increase in positive review volume within 90 days", "85% of satisfied customers leave reviews when properly prompted", "2x more reviews than restaurants without automated systems"]
    },
    {
      icon: Shield,
      title: "Protect Your Reputation from Public Complaints",
      description: (
        <>
          By identifying dissatisfied customers before they reach Google, you can address concerns privately and often convert negative experiences into positive outcomes. This proactive approach prevents reputation damage while demonstrating commitment to customer satisfaction. Discover{' '}
          <Link to="/articles/turning-angry-customers-into-advocates" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            how to turn angry customers into loyal advocates
          </Link>{' '}
          and{' '}
          <Link to="/articles/building-five-star-reputation" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            build a 5-star reputation
          </Link>{' '}
          that protects your business.
        </>
      ),
      stats: ["70% reduction in negative public reviews", "60% of private complaints converted to positive experiences", "Improved overall rating through reputation protection"]
    },
    {
      icon: BarChart3,
      title: "Boost Revenue Through Higher Ratings",
      description: (
        <>
          Higher star ratings directly correlate with increased bookings and revenue. A one-star increase in your average rating can generate 5-9% more revenue, while excellent reviews lead customers to spend 31% more per visit. Learn from{' '}
          <Link to="/articles/the-50000-mistake" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            real stories of reputation disasters
          </Link>{' '}
          and understand{' '}
          <Link to="/articles/why-best-customers-never-leave-reviews" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            why your best customers never leave reviews
          </Link>
          .
        </>
      ),
      stats: ["5-9% revenue increase per star rating improvement", "31% higher spending from customers who read positive reviews", "88% of diners choose restaurants based on Google reviews"]
    },
    {
      icon: Clock,
      title: "Save Time with Complete Automation",
      description: "Our Bot and Table system handles the entire review management process automatically. From sending requests to filtering responses to notifying management of issues, everything runs without daily attention, freeing you to focus on restaurant operations.",
      stats: ["10+ hours per week saved on manual review management", "Automated responses to all review requests", "Real-time notifications only when action is needed"]
    },
    {
      icon: Target,
      title: "Turn Complaints into Competitive Advantages",
      description: (
        <>
          Private feedback collection allows you to identify and fix operational issues before they impact other customers. This continuous improvement process helps you deliver better experiences while demonstrating responsiveness to customer concerns. Master{' '}
          <Link to="/articles/building-five-star-reputation" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            how to build a 5-star online reputation
          </Link>{' '}
          and learn{' '}
          <Link to="/articles/google-reviews-strategies" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            proven strategies
          </Link>{' '}
          for reputation management.
        </>
      ),
      stats: ["Early identification of service issues", "Improved staff training based on customer feedback", "Higher customer satisfaction through responsive service"]
    },
    {
      icon: Award,
      title: "Dominate Local Search Results",
      description: (
        <>
          Consistent positive reviews improve your Google ranking and visibility in local search results. More reviews with higher ratings mean more potential customers discover your restaurant when searching for dining options. Discover{' '}
          <Link to="/articles/google-reviews-strategies" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            10 proven strategies
          </Link>{' '}
          to dominate local search results and{' '}
          <Link to="/articles/building-five-star-reputation" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
            build an exceptional online reputation
          </Link>
          .
        </>
      ),
      stats: ["Improved Google My Business ranking", "Higher visibility in 'restaurants near me' searches", "Increased click-through rates from search results"]
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Multi-Channel Review Requests",
      description: "Our Bot and Table system automatically sends review requests through multiple channels:",
      features: [
        "SMS Messages: Sent 2-4 hours after dining for immediate feedback",
        "Email Campaigns: Follow-up sequences for customers who don't respond to SMS",
        "QR Codes: Table tents and receipts for instant review access",
        "Staff Integration: Prompts for servers to request reviews from visibly satisfied customers"
      ]
    },
    {
      step: "2",
      title: "Intelligent Review Filtering",
      description: "Before customers reach Google, they encounter our smart filtering system:",
      features: [
        "Rating Capture Page: Customers rate their experience on a 1-5 star scale",
        "4-5 Star Reviews: Automatically directed to Google Reviews with pre-filled positive messaging",
        "1-3 Star Reviews: Routed to private feedback collection for service recovery"
      ]
    },
    {
      step: "3",
      title: "Private Service Recovery",
      description: "Customers who indicate dissatisfaction (under 4 stars) are directed to a private feedback form:",
      features: [
        "Problem Identification: Detailed questions about specific issues",
        "Immediate Response: Automated acknowledgment and apology",
        "Manager Notification: Real-time alerts to restaurant management",
        "Follow-up Process: Systematic approach to address concerns and invite return visits"
      ]
    },
    {
      step: "4",
      title: "Reputation Protection and Enhancement",
      description: "The system ensures only positive experiences become public while addressing problems privately:",
      features: [
        "Positive Reviews: Flow directly to Google with optimized messaging",
        "Negative Feedback: Handled privately with opportunity for service recovery",
        "Review Response Management: AI-assisted responses to all public reviews",
        "Reputation Monitoring: Continuous tracking of online reputation metrics"
      ]
    }
  ];



  const faqs = [
    {
      question: "How does the review filtering system work?",
      answer: "Customers first rate their experience on a private page. Those giving 4-5 stars are directed to Google Reviews, while 1-3 star ratings go to private feedback collection where you can address concerns directly."
    },
    {
      question: "Is it ethical to filter reviews before they reach Google?",
      answer: "Absolutely. We're not hiding negative reviews—we're giving you the opportunity to address concerns and improve service before customers feel compelled to leave negative public feedback. Many customers prefer this approach."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most restaurants see increased review volume within the first week and rating improvements within 30 days. Significant reputation enhancement typically occurs within 60-90 days of consistent use."
    },
    {
      question: "What happens if a customer leaves a negative review despite the filtering?",
      answer: "Our system monitors all reviews and provides AI-suggested responses. We also help you develop strategies to address legitimate concerns publicly while demonstrating your commitment to customer satisfaction."
    },
    {
      question: "How much time does this require from my staff?",
      answer: "Minimal time investment. The system runs automatically, and staff only need to respond to private feedback notifications and occasionally request reviews from visibly satisfied customers."
    },
    {
      question: "Can I customize the review request messages?",
      answer: "Yes, all messaging can be customized to match your restaurant's brand voice and style. We provide templates but encourage personalization for better response rates."
    },
    {
      question: "What if customers don't have smartphones for SMS?",
      answer: "The system uses multiple channels including email, QR codes, and staff prompts. We ensure every customer has an opportunity to provide feedback through their preferred method."
    },
    {
      question: "How do you ensure reviews remain authentic and comply with Google's policies?",
      answer: "We never incentivize specific ratings or provide fake reviews. Our system simply makes it easier for satisfied customers to share their genuine experiences while giving you opportunities to address concerns privately."
    },
    {
      question: "What kind of support do you provide during implementation?",
      answer: "Complete setup assistance, staff training, ongoing technical support, and regular strategy sessions to optimize performance. Your success is our priority."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
            {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >

              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Protect Your Restaurant's Reputation While{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative">
                  Automatically Generating 5-Star Reviews
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Turn every satisfied customer into a positive Google review while privately addressing concerns before they become public complaints. Our intelligent review funnel ensures only happy customers reach Google—unhappy ones get personal attention to fix problems. Learn more about <Link to="/articles/why-best-customers-never-leave-reviews" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">why your best customers never leave reviews</Link> and how to <Link to="/articles/google-reviews-strategies" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">implement proven strategies</Link> to generate more positive feedback.
              </p>

              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mb-8"
                onClick={() => {
                  document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Reputation Strategy Call
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">88%</div>
                  <div className="text-sm text-gray-600">Check Reviews First</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">43%</div>
                  <div className="text-sm text-gray-600">Avoid Low Ratings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5-9%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Content Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Smart Review Funnel</h3>
                    <p className="text-gray-600">Automated Protection System</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Happy Customers → Google Reviews</p>
                      <p className="text-sm text-gray-600">4-5 star ratings automatically directed to public reviews</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3 mt-1">
                      <MessageSquare className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Concerns → Private Feedback</p>
                      <p className="text-sm text-gray-600">1-3 star ratings routed to service recovery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3 mt-1">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Reputation Protection</p>
                      <p className="text-sm text-gray-600">Convert negative experiences into positive outcomes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-blue-100 p-4 rounded-xl">
                  <p className="text-sm font-medium text-gray-800">
                    "Bot and Table's system uses advanced automation technology to identify satisfied customers and guide them to leave positive reviews, while routing dissatisfied guests to private feedback channels where you can address concerns and often convert negative experiences into positive outcomes."
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-2xl shadow-lg z-20"
              >
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-bold">5.0 ★★★★★</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg z-20 border border-gray-100"
              >
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="font-semibold text-gray-700">Protected</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 bg-primary text-white p-3 rounded-full shadow-lg z-20"
              >
                <BarChart3 className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Impact on Your Business</h3>
                <p className="text-gray-700 leading-relaxed">
                    Your restaurant's online reputation determines whether potential customers walk through your door or choose your competitor. With our intelligent system, you can systematically build a collection of authentic 5-star reviews that attract new customers while protecting against reputation damage. Discover <Link to="/articles/building-five-star-reputation" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">how to build a 5-star online reputation</Link> and learn from <Link to="/articles/the-50000-mistake" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">real stories of reputation disasters</Link> that could have been prevented.
                </p>
              </div>
                                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">3-5X</div>
                        <div className="text-sm text-gray-600">More Google Reviews</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">70%</div>
                        <div className="text-sm text-gray-600">Fewer Complaints</div>
                      </div>
                    </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-br from-red-300 to-pink-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 px-8 py-3 rounded-full text-sm font-bold border border-red-200 shadow-sm text-red-700 mb-6"
              >
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                REPUTATION CRISIS
                <AlertTriangle className="w-5 h-5 ml-2 text-red-500" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                The Hidden Cost of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 relative">
                  Poor Review Management
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"
                  />
                </span>
            </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every day without proper review management costs your restaurant money, reputation, and future customers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* The Reality Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group perspective-1000"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform-gpu border border-white/50">
                  {/* Gradient Border Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                  
                  {/* Floating Background Elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      >
                        <TrendingDown className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                        The Reality
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-6">
                    Most restaurants lose customers before they even try the food. When potential diners search for restaurants online, they make split-second decisions based on star ratings and recent reviews. A single negative review can cost you dozens of customers, while missed opportunities to collect positive reviews mean your best experiences go unnoticed online.
                  </p>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border border-red-200">
                        <div className="text-2xl font-bold text-red-600">88%</div>
                        <div className="text-sm text-red-700">Check reviews first</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-200">
                        <div className="text-2xl font-bold text-orange-600">$47</div>
                        <div className="text-sm text-orange-700">Lost per negative review</div>
                      </div>
                </div>
                
                    <div className="space-y-2 text-sm">
                      <p>Read about <Link to="/articles/the-50000-mistake" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">how one negative review cost a restaurant $50,000</Link></p>
                      <p>Learn <Link to="/articles/why-best-customers-never-leave-reviews" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">why your best customers never leave reviews</Link></p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
              
              {/* Without Management Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: -5 }}
                className="group perspective-1000"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform-gpu border border-white/50">
                  {/* Gradient Border Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                  
                  {/* Floating Background Elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-red-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      >
                        <AlertTriangle className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
                        Without Systematic Management
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-6">
                      Without a systematic approach to review management, restaurants face an uphill battle in today's digital marketplace. Every unaddressed concern becomes a potential public complaint, while positive experiences fade into memory without becoming valuable social proof.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      {[
                        "Negative reviews that damage reputation and reduce bookings",
                        "Missed opportunities to showcase positive experiences", 
                        "No way to address customer concerns before they become public",
                        "Competitors with better online reputations capturing your potential customers"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start group/item"
                        >
                          <motion.div
                            whileHover={{ rotate: 180, scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-sm"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200 font-medium leading-relaxed">
                            {index === 2 ? (
                              <>
                                {item} - learn{' '}
                                <Link to="/articles/turning-angry-customers-into-advocates" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">
                                  how to turn angry customers into loyal advocates
                                </Link>
                              </>
                            ) : item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Impact Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-xl border border-red-200">
                        <div className="text-2xl font-bold text-red-600">-22%</div>
                        <div className="text-sm text-red-700">Revenue impact</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
                        <div className="text-2xl font-bold text-orange-600">3x</div>
                        <div className="text-sm text-orange-700">More negative reviews</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p>Learn <Link to="/articles/phone-problem-article" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">why phone-based complaints often become public reviews</Link></p>
                      <p>Discover <Link to="/articles/from-chaos-to-cash" className="text-orange-600 hover:text-orange-700 underline font-medium transition-colors">how to transform reputation chaos into cash flow</Link></p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-6 h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
                </div>
                
            {/* Bottom Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  The Real Cost of Inaction
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">-25%</div>
                    <div className="text-sm text-gray-600">Revenue Loss</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">67%</div>
                    <div className="text-sm text-gray-600">Won't Try After Bad Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">$50K</div>
                    <div className="text-sm text-gray-600">Average Annual Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">43%</div>
                    <div className="text-sm text-gray-600">Choose Competitors Instead</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Smart Review Funnel Solution */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 right-20 w-36 h-36 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 px-8 py-3 rounded-full text-sm font-bold border border-blue-200 shadow-sm text-blue-700 mb-6"
              >
                <Zap className="w-5 h-5 mr-2 text-blue-500" />
                INTELLIGENT AUTOMATION
                <Zap className="w-5 h-5 ml-2 text-blue-500" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                How Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 relative">
                  Intelligent Review System
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                  />
                </span>{' '}
                Works
            </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A sophisticated, automated system that transforms every customer interaction into a reputation-building opportunity
              </p>
            </div>
            
            {/* Process Flow */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 transform -translate-x-1/2 rounded-full"></div>
              
              <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Step Number & Info */}
                    <div className="lg:w-5/12 relative">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden group"
                      >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-6">
                            <motion.div 
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            >
                      {step.step}
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Hover Effect Indicator */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                          viewport={{ once: true }}
                          className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Center Connection Point */}
                    <div className="lg:w-2/12 flex justify-center relative z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        {index % 2 === 0 ? (
                          <ArrowRight className="w-6 h-6 text-white" />
                        ) : (
                          <ArrowLeft className="w-6 h-6 text-white" />
                        )}
                      </motion.div>
                  </div>
                  
                    {/* Features Card */}
                    <div className="lg:w-5/12">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden group"
                      >
                        {/* Gradient Border Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                        
                        <div className="relative z-10 p-8">
                          <div className="grid gap-4">
                          {step.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                                viewport={{ once: true }}
                                className="flex items-start group/feature"
                              >
                                <motion.div
                                  whileHover={{ rotate: 360, scale: 1.2 }}
                                  transition={{ duration: 0.3 }}
                                  className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-sm"
                                >
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </motion.div>
                                <span className="text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-200 font-medium leading-relaxed">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
            
            {/* Bottom Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Result: Complete Reputation Control
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
                    Our intelligent system ensures that only positive experiences become public reviews, while negative feedback is addressed privately and converted into loyalty.
                  </p>
                  
                  {/* Summary Stats */}
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                      <div className="text-sm text-gray-600">Feedback Captured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Automated System</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">2-4hrs</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                      <div className="text-sm text-gray-600">More Positive Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 px-8 py-3 rounded-full text-sm font-bold border border-orange-200 shadow-sm text-orange-700 mb-6"
              >
                <Star className="w-5 h-5 mr-2 text-orange-500" />
                REPUTATION TRANSFORMATION
                <Star className="w-5 h-5 ml-2 text-orange-500" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Transform Your Restaurant's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 relative">
                  Online Reputation
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full"
                  />
                </span>
            </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From struggling with negative reviews to dominating local search results—discover the game-changing benefits that successful restaurants experience
              </p>
            </div>
            
            {/* Bento Grid Layout */}
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Gradient Border Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[2px] bg-white rounded-xl"></div>
                    
                    {/* Floating Background Elements */}
                    <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Horizontal Layout */}
                    <div className="relative z-10 p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Left Side - Icon and Title */}
                        <div className="lg:w-1/3 flex-shrink-0">
                          <motion.div 
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-orange-400 to-pink-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                          >
                            <benefit.icon className="w-10 h-10 text-white" />
                          </motion.div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300 leading-tight">
                            {benefit.title}
                          </h3>
                        </div>
                        
                        {/* Right Side - Content */}
                        <div className="lg:w-2/3 flex-1">
                          <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg">
                            {benefit.description}
                          </p>
                          
                          {/* Stats in Horizontal Layout */}
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {benefit.stats.map((stat, statIndex) => (
                              <motion.div
                                key={statIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (index * 0.1) + (statIndex * 0.1) }}
                                viewport={{ once: true }}
                                className="group/stat"
                              >
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 group-hover:border-orange-200 transition-colors duration-300 h-full">
                                  <div className="flex items-start">
                                    <motion.div
                                      whileHover={{ rotate: 180, scale: 1.2 }}
                                      transition={{ duration: 0.3 }}
                                      className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm"
                                    >
                                      <Star className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <span className="text-sm text-gray-700 group-hover/stat:text-gray-900 transition-colors duration-200 font-medium leading-relaxed">
                                      {stat}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect Indicator */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="mt-8 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            

          </motion.div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <DemoBookingForm />

      {/* Related Articles Section */}
      <ArticlesSection />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border shadow-sm">
                    <CardHeader 
                      className="cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedFAQ === index && (
                      <CardContent>
                        <p className="text-gray-700">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GoogleReviewsPage; 