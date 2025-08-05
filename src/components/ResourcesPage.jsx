import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ArticlesSection from './ArticlesSection';
import DemoBookingForm from './ui/DemoBookingForm';
import { Star, Phone, Zap, Smartphone, Mail, Filter, BookOpen, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1e293b';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Smooth scroll function for filter buttons
  const scrollToArticles = () => {
    const element = document.getElementById('filtered-articles');
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = element.offsetTop - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Smooth scroll duration
      let start = null;
      
      // Custom easing function for smooth deceleration
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      
      const animateScroll = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercent = Math.min(progress / duration, 1);
        const easedProgress = easeInOutCubic(progressPercent);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    // Add a small delay to allow the filtering to complete before scrolling
    setTimeout(() => {
      scrollToArticles();
    }, 100);
  };

  const categories = [
    { name: 'All', icon: BookOpen, color: 'bg-gray-100', textColor: 'text-gray-700' },
    { name: 'Artificial Intelligence', icon: Zap, color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Google Reviews', icon: Star, color: 'bg-yellow-100', textColor: 'text-yellow-700' },
    { name: 'AI Phone Answering', icon: Phone, color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Personalized Marketing', icon: Zap, color: 'bg-purple-100', textColor: 'text-purple-700' },
    { name: 'SMS Marketing', icon: Smartphone, color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Email Marketing', icon: Mail, color: 'bg-red-100', textColor: 'text-red-700' },
  ];

  // Sample articles data - replace with your actual articles
  const articles = [
    {
      id: -1,
      title: "AI in Restaurants: The Complete Guide to Transforming Your Business with Artificial Intelligence",
      excerpt: "The definitive guide to AI adoption in restaurants. Learn how 79% of restaurants are using AI to increase revenue by 25% and transform operations. Interactive ROI calculator and readiness assessment included.",
      category: "Artificial Intelligence",
      readTime: "35 min read",
      date: "2024-01-29",
      image: "/AI-Automations.png",
      featured: true,
      slug: "/articles/ai-in-restaurants-complete-guide"
    },
    {
      id: 0,
      title: "From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue",
      excerpt: "Real transformation stories from restaurants that stopped losing money and started capturing every opportunity with AI phone systems.",
      category: "Artificial Intelligence",
      readTime: "12 min read",
      date: "2024-01-28",
      image: "/ai-restaurant.jpg",
      featured: false,
      slug: "/articles/from-chaos-to-cash"
    },
    {
      id: 1,
      title: "The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered (And How AI Fixes It)",
      excerpt: "Discover how missed restaurant calls cost $27,000+ annually. Learn why 43% of calls go unanswered and how AI phone systems capture 100% of revenue opportunities.",
      category: "AI Phone Answering",
      readTime: "15 min read",
      date: "2024-01-27",
      image: "/restaurant-phone.jpg",
      featured: true,
      slug: "/articles/the-27000-phone-problem"
    },
    {
      id: 2,
      title: "The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates (Without Anyone Knowing)",
      excerpt: "The counterintuitive strategy that transforms your biggest complaints into your most valuable customers—and builds an unshakeable reputation in the process.",
      category: "Google Reviews",
      readTime: "18 min read",
      date: "2024-01-26",
      image: "/restaurant-owner.jpg",
      featured: false,
      slug: "/articles/turning-angry-customers-into-advocates"
    },
    {
      id: 3,
      title: "The $50,000 Mistake: How One Negative Review Cost This Restaurant Owner Everything",
      excerpt: "The true story of how one viral negative review destroyed a thriving restaurant—and the simple system that could have prevented it all.",
      category: "Google Reviews",
      readTime: "12 min read",
      date: "2024-01-20",
      image: "https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      featured: true,
      slug: "/articles/the-50000-mistake"
    },
    {
      id: 4,
      title: "Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)",
      excerpt: "The psychology behind the review paradox that's killing great restaurants—and the AI-powered solution that captures 300% more positive reviews.",
      category: "Google Reviews",
      readTime: "15 min read",
      date: "2024-01-25",
      image: "/google-review.jpg",
      featured: false,
      slug: "/articles/why-best-customers-never-leave-reviews"
    },
    {
      id: 5,
      title: "10 Proven Strategies to Get More Google Reviews for Your Restaurant",
      excerpt: "Learn the most effective methods to encourage customers to leave positive reviews and boost your online reputation.",
      category: "Google Reviews",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "/google-maps-phone.jpg.jpg",
      featured: false,
      slug: "/articles/google-reviews-strategies"
    },
    {
      id: 8,
      title: "The Ultimate Guide to Restaurant SMS Marketing",
      excerpt: "Master SMS marketing strategies that deliver $36 for every $1 spent and drive immediate customer action.",
      category: "SMS Marketing", 
      readTime: "45 min read",
      date: "2024-01-10",
      image: "/sms_marketing_guide.webp",
      featured: false,
      slug: "/articles/restaurant-sms-marketing"
    },
    {
      id: 9,
      title: "Personalized Marketing: How to Turn One-Time Diners into Regulars",
      excerpt: "Use customer data and AI to create personalized experiences that build lasting relationships.",
      category: "Personalized Marketing",
      readTime: "45 min read",
      date: "2024-01-08",
      image: "/personalized_marketing.webp",
      featured: false,
      slug: "/articles/personalized-marketing-guide"
    },
    {
      id: 10,
      title: "Email Marketing Best Practices for Restaurants in 2025",
      excerpt: "Master the email marketing strategies that deliver $36 ROI, increase repeat customers by 70%, and automate your restaurant's marketing success.",
      category: "Email Marketing",
      readTime: "10 min read",
      date: "2024-01-30",
      image: "/email-marketing.jpg",
      featured: false,
      slug: "/articles/email-marketing-best-practices-2025"
    },
    {
      id: 11,
      title: "Building a 5-Star Online Reputation: A Complete Guide",
      excerpt: "Master the strategies and systems that successful restaurants use to build exceptional online reputations, drive customer acquisition, and achieve sustainable business growth in the digital age.",
      category: "Google Reviews",
      readTime: "25 min read",
      date: "2024-01-03",
      image: "/five-stars.jpg",
      featured: false,
      slug: "/articles/building-five-star-reputation"
    }
  ];

  const filteredArticles = articles.filter(article => {
    return selectedCategory === 'All' || article.category === selectedCategory;
  });

    // Only show the AI guide as featured article when "All" is selected
  const featuredArticles = selectedCategory === 'All'
    ? filteredArticles.filter(article => article.slug === "/articles/ai-in-restaurants-complete-guide")
    : [];

  // When specific category is selected, show all articles for that category (no featured section)
  // When "All" is selected, show all articles except the AI guide (which is featured above)
  const regularArticles = selectedCategory === 'All'
    ? filteredArticles.filter(article => article.slug !== "/articles/ai-in-restaurants-complete-guide")
    : filteredArticles;

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: coral }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-7xl px-4 text-center z-10">
          <div className="inline-flex items-center bg-orange-50 px-6 py-3 rounded-full text-sm font-semibold border border-orange-200 shadow-sm text-orange-700 mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Center
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6" style={{ color: blue }}>
            Restaurant Growth Resources
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8 max-w-3xl mx-auto">
            Expert insights, proven strategies, and actionable guides to help your restaurant thrive in the digital age
          </p>

          {/* Filter by Service */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-6">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-lg font-semibold text-gray-700">Filter by Service</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.name;
                
                return (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                      isActive 
                        ? `${category.color} ${category.textColor} shadow-lg scale-105` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Articles Section */}
      <div id="filtered-articles">
        {/* Featured Article - AI Guide */}
        {featuredArticles.some(article => article.slug === "/articles/ai-in-restaurants-complete-guide") && (
          <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="flex items-center justify-center mb-12">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
              </div>
            
              {/* Single Featured Article - AI Guide */}
              {featuredArticles.filter(article => article.slug === "/articles/ai-in-restaurants-complete-guide").map((article) => (
                <div key={article.id} className="max-w-4xl mx-auto">
                  <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/60"></div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          FEATURED GUIDE
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-white">
                          <div className="flex items-center text-sm font-semibold mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2 text-orange-400" />
                            <span className="text-lg">COMPLETE AI GUIDE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{article.category}</span>
                        <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                        {article.title}
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>35 min read</span>
                          <span>•</span>
                          <span>Interactive Tools</span>
                          <span>•</span>
                          <span>ROI Calculator</span>
                        </div>
                        <Link to={article.slug}>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-bold transform hover:scale-105 transition-all">
                            Read Complete Guide →
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* All Articles */}
      <section className="w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <Users className="w-6 h-6 text-gray-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
            </div>
            <div className="text-gray-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
          
          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-orange-600">{article.category}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                      <Link to={article.slug || `/article/${article.id}`}>
                        <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      </div>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default ResourcesPage; 