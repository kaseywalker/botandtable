import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

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

      return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img 
                src="/Bot_And_Table_Logo_Stacked.png" 
                alt="Bot and Table Logo" 
                className="h-20 w-auto"
              />
            </div>
          </div>
          
          {/* Middle - Solutions */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
            <div className="space-y-3">
              <Link 
                to="/google-reviews"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Google Reviews
              </Link>
              <Link 
                to="/ai-phone-answering"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                AI Phone Answering
              </Link>
              <Link 
                to="/personalized-marketing"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Personalized Marketing
              </Link>
              <Link 
                to="/sms-marketing"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                SMS Marketing
              </Link>
              <Link 
                to="/email-marketing"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Email Marketing
              </Link>
            </div>
          </div>
          
          {/* Right Side - Links and Info */}
          <div className="text-center lg:text-right">
            <div className="mb-6 space-y-2 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row lg:flex-wrap lg:justify-end">
              <button
                onClick={() => scrollToSection('contact-us')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
              >
                Contact Us
              </button>
              <Link 
                to="/resources" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Blog
              </Link>
              <Link 
                to="/sitemap" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Sitemap
              </Link>
              <Link 
                to="/terms-and-conditions" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms & Conditions
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="mb-4">
              <a 
                href="mailto:info@botandtable.com" 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                info@botandtable.com
              </a>
            </div>
            <p className="text-gray-400">© 2025 Bot & Table. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

