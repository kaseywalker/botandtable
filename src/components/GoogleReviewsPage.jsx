import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import DemoBookingForm from './ui/DemoBookingForm';
import ArticlesSection from './ArticlesSection';

const coral = '#FF6B47';
import { 
  Star, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Smartphone,
  Calendar,
  Award,
  Target,
  Zap,
  ChevronDown,
  ChevronUp
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
      description: "Systematic review requests at optimal timing generate significantly more positive reviews than hoping customers will remember to leave feedback. Our automated system captures reviews when satisfaction is highest and motivation is strongest.",
      stats: ["3-5X increase in positive review volume within 90 days", "85% of satisfied customers leave reviews when properly prompted", "2x more reviews than restaurants without automated systems"]
    },
    {
      icon: Shield,
      title: "Protect Your Reputation from Public Complaints",
      description: "By identifying dissatisfied customers before they reach Google, you can address concerns privately and often convert negative experiences into positive outcomes. This proactive approach prevents reputation damage while demonstrating commitment to customer satisfaction.",
      stats: ["70% reduction in negative public reviews", "60% of private complaints converted to positive experiences", "Improved overall rating through reputation protection"]
    },
    {
      icon: BarChart3,
      title: "Boost Revenue Through Higher Ratings",
      description: "Higher star ratings directly correlate with increased bookings and revenue. A one-star increase in your average rating can generate 5-9% more revenue, while excellent reviews lead customers to spend 31% more per visit.",
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
      description: "Private feedback collection allows you to identify and fix operational issues before they impact other customers. This continuous improvement process helps you deliver better experiences while demonstrating responsiveness to customer concerns.",
      stats: ["Early identification of service issues", "Improved staff training based on customer feedback", "Higher customer satisfaction through responsive service"]
    },
    {
      icon: Award,
      title: "Dominate Local Search Results",
      description: "Consistent positive reviews improve your Google ranking and visibility in local search results. More reviews with higher ratings mean more potential customers discover your restaurant when searching for dining options.",
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
                <span className="text-primary relative">
                  Automatically Generating 5-Star Reviews
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Turn every satisfied customer into a positive Google review while privately addressing concerns before they become public complaints. Our intelligent review funnel ensures only happy customers reach Google—unhappy ones get personal attention to fix problems.
              </p>

              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mb-8">
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
                  Your restaurant's online reputation determines whether potential customers walk through your door or choose your competitor. With our intelligent system, you can systematically build a collection of authentic 5-star reviews that attract new customers while protecting against reputation damage.
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              The Hidden Cost of Poor Review Management
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border Animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-300 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-orange-700 transition-colors duration-300">The Reality</h3>
                  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    Most restaurants lose customers before they even try the food. When potential diners search for restaurants online, they make split-second decisions based on star ratings and recent reviews. A single negative review can cost you dozens of customers, while missed opportunities to collect positive reviews mean your best experiences go unnoticed online.
                  </p>
                </div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: coral }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border Animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-red-700 transition-colors duration-300">Without Systematic Review Management</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start group/item">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">Negative reviews that damage reputation and reduce bookings</span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">Missed opportunities to showcase positive experiences</span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">No way to address customer concerns before they become public</span>
                    </li>
                    <li className="flex items-start group/item">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">Competitors with better online reputations capturing your potential customers</span>
                    </li>
                  </ul>
                </div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: coral }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Review Funnel Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              How Our Intelligent Review System Works
            </h2>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row items-center gap-8"
                >
                  <div className="lg:w-1/3">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">{step.title}</h3>
                    <p className="text-gray-600 text-center lg:text-left">{step.description}</p>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Transform Your Restaurant's Online Reputation
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.stats.map((stat, statIndex) => (
                          <li key={statIndex} className="flex items-start">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{stat}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
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