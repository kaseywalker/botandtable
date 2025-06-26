import React, { useState, useEffect } from 'react';
import DetailedResultsReport from './DetailedResultsReport';

const EnhancedRevenueLeakDetector = () => {
  const [currentStep, setCurrentStep] = useState('initial'); // initial, restaurant-selected, scanning, analyzing, results, report
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantSuggestions, setRestaurantSuggestions] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [scanningProgress, setScanningProgress] = useState(0);
  const [scanningSteps, setScanningSteps] = useState([]);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isOwner, setIsOwner] = useState(true);

  // Mock restaurant suggestions (in real implementation, this would be an API call)
  const mockRestaurants = [
    { name: "Mario's Italian Bistro", address: "123 Main St, Chicago, IL", rating: 4.2, reviews: 127 },
    { name: "Bella's Pizza Palace", address: "456 Oak Ave, Miami Beach, FL", rating: 4.5, reviews: 89 },
    { name: "Tony's Trattoria", address: "789 Pine St, Brooklyn, NY", rating: 4.1, reviews: 203 },
    { name: "Giuseppe's Kitchen", address: "321 Elm St, Boston, MA", rating: 4.3, reviews: 156 },
    { name: "Nonna's Restaurant", address: "654 Cedar Rd, San Francisco, CA", rating: 4.0, reviews: 94 },
    { name: "Noodles & Company", address: "890 Broadway, Denver, CO", rating: 4.1, reviews: 78 },
    { name: "Golden Noodle House", address: "567 Market St, San Francisco, CA", rating: 4.4, reviews: 142 },
    { name: "Pho Noodle Bar", address: "234 University Ave, Palo Alto, CA", rating: 4.6, reviews: 89 },
    { name: "Ramen Noodle Shop", address: "345 State St, Madison, WI", rating: 4.3, reviews: 156 },
    { name: "Thai Noodle Kitchen", address: "678 Main Ave, Portland, OR", rating: 4.2, reviews: 134 },
    { name: "The Burger Joint", address: "123 Food St, Austin, TX", rating: 4.5, reviews: 201 },
    { name: "Taco Bell Express", address: "456 Fast Ave, Phoenix, AZ", rating: 3.8, reviews: 67 },
    { name: "Sushi Palace", address: "789 Ocean Dr, Miami, FL", rating: 4.7, reviews: 298 },
    { name: "BBQ Smokehouse", address: "321 Grill Rd, Nashville, TN", rating: 4.4, reviews: 187 },
    { name: "Pizza Corner", address: "654 Slice St, New York, NY", rating: 4.2, reviews: 156 },
    { name: "Cafe Bistro", address: "987 Coffee Ave, Seattle, WA", rating: 4.3, reviews: 89 },
    { name: "Steakhouse Prime", address: "147 Beef Blvd, Dallas, TX", rating: 4.6, reviews: 234 },
    { name: "Seafood Shack", address: "258 Harbor Way, Boston, MA", rating: 4.1, reviews: 123 },
    { name: "Mexican Cantina", address: "369 Salsa St, Los Angeles, CA", rating: 4.4, reviews: 178 },
    { name: "Indian Spice", address: "741 Curry Lane, Houston, TX", rating: 4.5, reviews: 145 }
  ];

  const scanningStepsList = [
    { id: 1, text: "Locating your restaurant on Google...", icon: "🔍", duration: 3000 },
    { id: 2, text: "Analyzing your Google Business Profile...", icon: "📍", duration: 4000 },
    { id: 3, text: "Scanning your Google reviews...", icon: "⭐", duration: 3500 },
    { id: 4, text: "Checking competitor performance...", icon: "🏪", duration: 4500 },
    { id: 5, text: "Analyzing customer call patterns...", icon: "📞", duration: 3000 },
    { id: 6, text: "Calculating revenue opportunities...", icon: "💰", duration: 2500 },
    { id: 7, text: "Generating your personalized report...", icon: "📊", duration: 2000 }
  ];

  useEffect(() => {
    if (restaurantName.length > 2) {
      const filtered = mockRestaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(restaurantName.toLowerCase())
      );
      setRestaurantSuggestions(filtered);
    } else {
      setRestaurantSuggestions([]);
    }
  }, [restaurantName]);

  const startScanning = () => {
    if (!selectedRestaurant) return;
    
    setCurrentStep('scanning');
    setScanningProgress(0);
    setScanningSteps([]);
    
    let currentStepIndex = 0;
    let totalProgress = 0;
    
    const processStep = () => {
      if (currentStepIndex < scanningStepsList.length) {
        const step = scanningStepsList[currentStepIndex];
        setScanningSteps(prev => [...prev, { ...step, status: 'active' }]);
        
        setTimeout(() => {
          setScanningSteps(prev => 
            prev.map((s, i) => 
              i === currentStepIndex ? { ...s, status: 'completed' } : s
            )
          );
          
          totalProgress += (100 / scanningStepsList.length);
          setScanningProgress(totalProgress);
          currentStepIndex++;
          
          if (currentStepIndex < scanningStepsList.length) {
            setTimeout(processStep, 500);
          } else {
            setTimeout(() => {
              generateResults();
            }, 1000);
          }
        }, step.duration);
      }
    };
    
    processStep();
  };

  const generateResults = () => {
    const revenue = parseInt(monthlyRevenue.replace(/[^0-9]/g, '')) || 50000;
    
    // Calculate realistic losses based on revenue
    const googleReviewsLoss = Math.round(revenue * 0.12 + Math.random() * 1000);
    const missedCallsLoss = Math.round(revenue * 0.08 + Math.random() * 800);
    const poorRetentionLoss = Math.round(revenue * 0.06 + Math.random() * 600);
    const totalLoss = googleReviewsLoss + missedCallsLoss + poorRetentionLoss;
    
    const results = {
      restaurantName: selectedRestaurant.name,
      monthlyLoss: totalLoss,
      annualLoss: totalLoss * 12,
      automationScore: Math.floor(Math.random() * 30) + 25, // 25-55 range
      breakdowns: [
        {
          category: "Google Reviews",
          amount: googleReviewsLoss,
          description: "Monthly revenue lost from poor online visibility",
          details: `Your restaurant has ${selectedRestaurant.reviews} reviews. Competitors with 200+ reviews capture ${Math.round(googleReviewsLoss/100)}% more customers.`
        },
        {
          category: "Missed Calls",
          amount: missedCallsLoss,
          description: "Customers calling competitors instead",
          details: `During busy periods, ${Math.round(missedCallsLoss/revenue * 100)}% of calls go unanswered. Each missed call averages $45 in lost revenue.`
        },
        {
          category: "Poor Retention",
          amount: poorRetentionLoss,
          description: "One-time customers not returning",
          details: `Without personalized follow-up, ${Math.round(poorRetentionLoss/revenue * 100)}% of customers never return. Automated retention increases repeat visits by 89%.`
        }
      ],
      competitorData: {
        averageReviews: 187,
        averageRating: 4.3,
        yourReviews: selectedRestaurant.reviews,
        yourRating: selectedRestaurant.rating
      }
    };
    
    setAnalysisResults(results);
    setCurrentStep('results');
  };

  const handleGetReport = () => {
    setShowEmailCapture(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setCurrentStep('report');
    setShowEmailCapture(false);
  };

  if (currentStep === 'initial') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">🤖</span>
            <h2 className="text-3xl font-bold text-gray-800">AI Restaurant Revenue Analyzer</h2>
          </div>
          <p className="text-lg text-gray-600">
            I'll analyze your restaurant in real-time and show you exactly how much revenue you're losing every month
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              What's your restaurant's name?
            </label>
            <div className="relative">
              <input
                type="text"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder="Start typing your restaurant name..."
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-coral-500 focus:outline-none transition-colors"
              />
              
              {restaurantSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-200 rounded-xl mt-2 shadow-lg z-10 max-h-60 overflow-y-auto">
                  {restaurantSuggestions.map((restaurant, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        console.log('Restaurant clicked:', restaurant);
                        setSelectedRestaurant(restaurant);
                        setRestaurantName(restaurant.name);
                        setRestaurantSuggestions([]);
                        setCurrentStep('restaurant-selected');
                      }}
                      className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-semibold text-gray-800">{restaurant.name}</div>
                      <div className="text-sm text-gray-600">{restaurant.address}</div>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">
                          {restaurant.rating} ({restaurant.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'restaurant-selected') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">🤖</span>
            <h2 className="text-3xl font-bold text-gray-800">AI Restaurant Revenue Analyzer</h2>
          </div>
          <p className="text-lg text-gray-600">
            Perfect! I found your restaurant. Now let's analyze your revenue opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {selectedRestaurant && (
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedRestaurant.name}</h3>
                  <p className="text-gray-600">{selectedRestaurant.address}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="text-lg font-semibold ml-1">{selectedRestaurant.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{selectedRestaurant.reviews} reviews</p>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  What's your approximate monthly revenue?
                </label>
                <input
                  type="text"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  placeholder="e.g., $65,000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-coral-500 focus:outline-none"
                />
              </div>
              
              <button
                onClick={startScanning}
                disabled={!monthlyRevenue}
                className="w-full bg-coral-500 hover:bg-coral-600 disabled:bg-gray-300 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                🔍 Analyze My Restaurant Now
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentStep === 'scanning') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Analyzing {selectedRestaurant.name}...</h2>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div 
              className="bg-coral-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${scanningProgress}%` }}
            ></div>
          </div>
          <p className="text-lg text-gray-600">
            Our AI is scanning your restaurant's online presence in real-time
          </p>
        </div>

        <div className="space-y-4">
          {scanningSteps.map((step, index) => (
            <div key={step.id} className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
              step.status === 'active' ? 'bg-blue-50 border-l-4 border-blue-500' :
              step.status === 'completed' ? 'bg-green-50 border-l-4 border-green-500' :
              'bg-gray-50'
            }`}>
              <span className="text-2xl mr-4">{step.icon}</span>
              <span className={`text-lg ${
                step.status === 'completed' ? 'text-green-700' : 'text-gray-700'
              }`}>
                {step.text}
              </span>
              {step.status === 'active' && (
                <div className="ml-auto">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                </div>
              )}
              {step.status === 'completed' && (
                <div className="ml-auto text-green-500 text-xl">✓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <DetailedResultsReport 
        selectedRestaurant={selectedRestaurant}
        monthlyRevenue={monthlyRevenue}
        analysisResults={analysisResults}
      />
    );
  }
  if (currentStep === 'report') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Complete Revenue Recovery Plan
          </h2>
          <p className="text-lg text-gray-600">
            Here's exactly how Bot & Table will help {analysisResults.restaurantName} capture ${analysisResults.monthlyLoss.toLocaleString()} monthly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-600 mb-4">Current Situation</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Google Reviews:</span>
                <span className="font-semibold">{analysisResults.competitorData.yourReviews}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Rating:</span>
                <span className="font-semibold">{analysisResults.competitorData.yourRating}★</span>
              </div>
              <div className="flex justify-between">
                <span>Automation Score:</span>
                <span className="font-semibold text-red-600">{analysisResults.automationScore}/100</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="font-bold">Monthly Loss:</span>
                <span className="font-bold text-red-600">${analysisResults.monthlyLoss.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">With Bot & Table</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Projected Reviews (90 days):</span>
                <span className="font-semibold">{analysisResults.competitorData.yourReviews + 47}</span>
              </div>
              <div className="flex justify-between">
                <span>Automation Score:</span>
                <span className="font-semibold text-green-600">95/100</span>
              </div>
              <div className="flex justify-between">
                <span>Missed Calls:</span>
                <span className="font-semibold">0% (AI answers 24/7)</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="font-bold">Monthly Revenue Gain:</span>
                <span className="font-bold text-green-600">+${analysisResults.monthlyLoss.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Capture This Revenue?</h3>
          <p className="text-lg mb-6">
            Book a 15-minute strategy call to see exactly how we'll implement this for {analysisResults.restaurantName}
          </p>
          <button className="bg-white text-coral-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors">
            📞 Book My Strategy Call
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default EnhancedRevenueLeakDetector;
