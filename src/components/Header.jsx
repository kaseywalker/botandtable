import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import botTableLogo from '../assets/bot-table-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Link 
              to="/homepage2"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Homepage 2
            </Link>
            <button 
              onClick={() => window.location.href = '/solutions'}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Solutions
            </button>
            <Link 
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/resources"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Resources
            </Link>
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
              <Link 
                to="/homepage2"
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Homepage 2
              </Link>
              <button 
                onClick={() => window.location.href = '/solutions'}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Solutions
              </button>
              <Link 
                to="/about"
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/resources"
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
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

