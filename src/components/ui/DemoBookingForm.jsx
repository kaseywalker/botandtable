import React, { useState } from 'react';
import { Button } from './button';
import { ChevronDown, Check, Phone, Star, TrendingUp, Users, Shield } from 'lucide-react';

const DemoBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    restaurantName: '',
    locations: '',
    biggestChallenge: '',
    monthlyRevenue: '',
    timeline: '',
    smsConsent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.restaurantName.trim()) newErrors.restaurantName = 'Restaurant name is required';
    if (!formData.locations) newErrors.locations = 'Please select number of locations';
    if (!formData.biggestChallenge) newErrors.biggestChallenge = 'Please select your biggest challenge';
    if (!formData.timeline) newErrors.timeline = 'Please select your timeline';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      // Redirect to thank you page or show success message
      alert('Success! We\'ll contact you within 24 hours to schedule your strategy call.');
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Text */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stop Losing Customers to Competitors.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Start Growing Revenue on Autopilot.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Discover how Bot and Table's AI-powered platform can help your restaurant capture every call, convert more customers, and build a stronger online reputation. Book your free strategy call to explore your growth potential.
            </p>

            {/* Key Features on Left */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-gray-300 text-sm">AI Phone Answering</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-gray-300 text-sm">Call Capture Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">5X</div>
                <div className="text-gray-300 text-sm">More Reviews</div>
              </div>
            </div>

            {/* Value Proposition on Left */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white text-xl font-semibold mb-4">Why Choose Bot and Table?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>Never miss another customer call</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>Automate review requests and responses</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>Streamline marketing and customer engagement</span>
                </li>
              </ul>
            </div>

            {/* Guarantee on Left */}
            <div className="flex flex-col space-y-4 text-gray-300">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-3 text-green-400" />
                <span>100% Free Consultation - No Pressure, No Obligation</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span>We'll contact you within 24 hours to schedule your call</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form Container */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Restaurant Strategy Call
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Answer a few quick questions about your restaurant and we'll explore how our AI platform could help improve your operations, online presence, and customer experience—all in a 20-minute, no-pressure consultation.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your first name? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your email address? <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@restaurant.com"
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your mobile phone number? <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', formatPhoneNumber(e.target.value))}
                placeholder="(555) 123-4567"
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Restaurant Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's the name of your restaurant? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.restaurantName}
                onChange={(e) => handleInputChange('restaurantName', e.target.value)}
                placeholder="Restaurant name"
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                  errors.restaurantName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.restaurantName && <p className="text-red-500 text-sm mt-1">{errors.restaurantName}</p>}
            </div>

            {/* Number of Locations */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                How many locations does your restaurant have? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.locations}
                  onChange={(e) => handleInputChange('locations', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none ${
                    errors.locations ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select number of locations</option>
                  <option value="1">1 location (single restaurant)</option>
                  <option value="2-3">2-3 locations (small chain)</option>
                  <option value="4-10">4-10 locations (growing chain)</option>
                  <option value="11+">11+ locations (established chain)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              {errors.locations && <p className="text-red-500 text-sm mt-1">{errors.locations}</p>}
            </div>

            {/* Biggest Challenge */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your biggest challenge right now? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.biggestChallenge}
                  onChange={(e) => handleInputChange('biggestChallenge', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none ${
                    errors.biggestChallenge ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your biggest challenge</option>
                  <option value="missing-calls">Missing phone calls and losing customers</option>
                  <option value="poor-reviews">Poor online reviews hurting my reputation</option>
                  <option value="no-repeat-customers">Not enough repeat customers</option>
                  <option value="marketing-time">Marketing takes too much time</option>
                  <option value="cant-compete">Can't compete with larger chains</option>
                  <option value="all-above">All of the above</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              {errors.biggestChallenge && <p className="text-red-500 text-sm mt-1">{errors.biggestChallenge}</p>}
            </div>

            {/* Monthly Revenue (Optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your approximate monthly revenue? (Optional)
              </label>
              <div className="relative">
                <select
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none"
                >
                  <option value="">Select monthly revenue range</option>
                  <option value="under-50k">Under $50,000/month</option>
                  <option value="50k-100k">$50,000 - $100,000/month</option>
                  <option value="100k-250k">$100,000 - $250,000/month</option>
                  <option value="250k-500k">$250,000 - $500,000/month</option>
                  <option value="500k+">$500,000+/month</option>
                  <option value="prefer-not-say">Prefer not to say</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                How quickly are you looking to improve your restaurant's marketing? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: 'immediately', label: 'Immediately - I need help now' },
                  { value: 'within-month', label: 'Within the next month' },
                  { value: 'next-3-months', label: 'In the next 3 months' },
                  { value: 'exploring', label: 'Just exploring options' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      checked={formData.timeline === option.value}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
            </div>

            {/* SMS Consent */}
            <div className="border-t pt-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) => handleInputChange('smsConsent', e.target.checked)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mt-1"
                />
                <span className="ml-3 text-sm text-gray-600">
                  Yes, I want to receive text updates about my strategy call and occasional marketing tips (max 1 per week). You can unsubscribe anytime by replying STOP.
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-3">
                By submitting this form, you agree to receive marketing communications from Bot and Table. Message and data rates may apply. You can unsubscribe at any time. We respect your privacy and will never share your information.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Booking Your Call...' : 'Book My Free Strategy Call'}
            </Button>
          </form>
        </div>
        </div>

        {/* What to Expect */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-white text-center mb-8">What to Expect from Your Strategy Call</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h5 className="text-white font-semibold mb-2">Review Your Situation</h5>
              <p className="text-gray-300 text-sm">Our expert will analyze your current online presence and customer communication gaps.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h5 className="text-white font-semibold mb-2">Explore Opportunities</h5>
              <p className="text-gray-300 text-sm">We'll discuss potential improvements and how AI could benefit your restaurant.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h5 className="text-white font-semibold mb-2">See How It Works</h5>
              <p className="text-gray-300 text-sm">Live demonstration of our AI platform's features and capabilities.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h5 className="text-white font-semibold mb-2">No Pressure Decision</h5>
              <p className="text-gray-300 text-sm">Get valuable insights whether you work with us or not.</p>
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Prefer to talk now? Call us at{' '}
            <a href="tel:+15551234567" className="text-orange-400 hover:text-orange-300 transition-colors">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingForm; 