import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SitemapPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Sitemap | Bot and Table";
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Enhanced smooth scrolling with custom timing
      const headerHeight = 80; // Account for fixed header
      const targetPosition = element.offsetTop - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 900; // Sweet spot duration in milliseconds
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
        } else {
          // Add a subtle bounce animation to the target element after scroll completes
          element.style.transform = 'scale(1.015)';
          element.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
          
          setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.transition = 'transform 0.4s ease-out';
          }, 600);
          
          // Reset styles after animation
          setTimeout(() => {
            element.style.transform = '';
            element.style.transition = '';
          }, 1000);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", path: "/", description: "Main landing page with overview of services" },
        { name: "Contact Us", path: "/#contact-us", description: "Get in touch and book a strategy call" },
        { name: "Funnel", path: "/funnel", description: "Lead capture and conversion funnel" }
      ]
    },
    {
      category: "Solutions & Services",
      pages: [
        { name: "Google Reviews", path: "/google-reviews", description: "Automated review management and generation" },
        { name: "AI Phone Answering", path: "/ai-phone-answering", description: "24/7 AI-powered phone answering service" },
        { name: "Personalized Marketing", path: "/personalized-marketing", description: "Automated customer engagement and marketing" },
        { name: "SMS Marketing", path: "/sms-marketing", description: "Direct text message marketing campaigns" },
        { name: "Email Marketing", path: "/email-marketing", description: "Automated email campaigns and newsletters" }
      ]
    },
    {
      category: "Resources & Blog",
      pages: [
        { name: "Resources Hub", path: "/resources", description: "Blog articles and educational content" },
        { name: "Why Your Best Customers Never Leave Reviews", path: "/articles/why-best-customers-never-leave-reviews", description: "Psychology behind customer review behavior" },
        { name: "The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates", path: "/articles/turning-angry-customers-into-advocates", description: "Customer service and reputation management strategies" },
        { name: "The $27,000 Phone Problem", path: "/articles/the-27000-phone-problem", description: "Cost of missed calls for restaurants" },
        { name: "From Chaos to Cash", path: "/articles/from-chaos-to-cash", description: "Restaurant operations and profit optimization" },
        { name: "10 Proven Strategies to Get More Google Reviews", path: "/articles/google-reviews-strategies", description: "Comprehensive guide to review generation" },
        { name: "Restaurant SMS Marketing Guide", path: "/articles/restaurant-sms-marketing", description: "Complete guide to SMS marketing for restaurants" },
        { name: "Email Marketing Best Practices for Restaurants in 2025", path: "/articles/email-marketing-best-practices-2025", description: "Modern email marketing strategies" },
        { name: "Personalized Marketing Guide", path: "/articles/personalized-marketing-guide", description: "Customer segmentation and personalization" }
      ]
    },
    {
      category: "Legal & Company",
      pages: [
        { name: "Terms & Conditions", path: "/terms-and-conditions", description: "Terms of service and usage conditions" },
        { name: "Privacy Policy", path: "/privacy-policy", description: "Data privacy and protection policies" },
        { name: "Sitemap", path: "/sitemap", description: "Complete site structure and navigation" }
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto max-w-6xl px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">Complete overview of all pages on Bot and Table</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="group">
                    {page.path.startsWith('/#') ? (
                      <button
                        onClick={() => {
                          if (window.location.pathname !== '/') {
                            window.location.href = page.path;
                          } else {
                            const sectionId = page.path.substring(2);
                            const element = document.getElementById(sectionId);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className="block w-full text-left p-4 bg-gray-50 hover:bg-orange-50 rounded-lg border border-gray-200 hover:border-orange-200 transition-all duration-200 group-hover:shadow-md"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {page.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {page.description}
                        </p>
                        <div className="mt-3 text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                          {page.path}
                        </div>
                      </button>
                    ) : (
                      <Link
                        to={page.path}
                        className="block p-4 bg-gray-50 hover:bg-orange-50 rounded-lg border border-gray-200 hover:border-orange-200 transition-all duration-200 group-hover:shadow-md"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {page.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {page.description}
                        </p>
                        <div className="mt-3 text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                          {page.path}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help Finding Something?</h3>
          <p className="text-blue-700 mb-6">
            Can't find what you're looking for? Our team is here to help you navigate our platform and find the perfect solution for your restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact-us')}
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Contact Us
            </button>
            <a
              href="mailto:info@botandtable.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* SEO Benefits */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            This sitemap helps search engines crawl and index our content more effectively. 
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage; 