import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Phone, ChevronDown, Star, MessageSquare, Mail, Smartphone, Zap } from 'lucide-react';
import botTableLogo from '../assets/bot-table-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  const solutionsRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsSolutionsOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={botTableLogo} 
              alt="Bot & Table Logo" 
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={toggleSolutions}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
                  <div className="grid grid-cols-1 gap-2">
                    <Link 
                      to="/google-reviews"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                    >
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Star className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Google Reviews</div>
                        <div className="text-sm text-gray-600">Automated review management</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/ai-phone-answering"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">AI Phone Answering</div>
                        <div className="text-sm text-gray-600">Never miss a call again</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/personalized-marketing"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                    >
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Personalized Marketing</div>
                        <div className="text-sm text-gray-600">Automated customer engagement</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/sms-marketing"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                    >
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Smartphone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">SMS Marketing</div>
                        <div className="text-sm text-gray-600">Direct text messaging</div>
                      </div>
                    </Link>
                    
                    <Link 
                      to="/email-marketing"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg mx-2"
                    >
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email Marketing</div>
                        <div className="text-sm text-gray-600">Automated email campaigns</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(123) 456-7890</span>
            </a>
            <Button 
              onClick={() => scrollToSection('book-call')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div className="text-left text-foreground font-medium py-2">Solutions</div>
                <Link 
                  to="/google-reviews"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-2 pl-4"
                >
                  <Star className="w-4 h-4 text-orange-600" />
                  <span>Google Reviews</span>
                </Link>
                <Link 
                  to="/ai-phone-answering"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-2 pl-4"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>AI Phone Answering</span>
                </Link>
                <Link 
                  to="/personalized-marketing"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-2 pl-4"
                >
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Personalized Marketing</span>
                </Link>
                <Link 
                  to="/sms-marketing"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-2 pl-4"
                >
                  <Smartphone className="w-4 h-4 text-green-600" />
                  <span>SMS Marketing</span>
                </Link>
                <Link 
                  to="/email-marketing"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-2 pl-4"
                >
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>Email Marketing</span>
                </Link>
              </div>
              
              <div className="pt-4 border-t border-border">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors mb-4"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">(123) 456-7890</span>
                </a>
                <Button 
                  onClick={() => scrollToSection('book-call')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg"
                >
                  Book Strategy Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

