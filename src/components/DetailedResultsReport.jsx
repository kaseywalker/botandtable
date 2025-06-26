import React, { useState } from 'react';

const DetailedResultsReport = ({ selectedRestaurant, monthlyRevenue, analysisResults }) => {
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isOwner, setIsOwner] = useState(true);

  // Mock competitor data (in real implementation, this would come from Google Places API)
  const competitors = [
    { 
      name: "Tony's Italian Bistro", 
      rating: 4.6, 
      reviews: 234, 
      position: "1st",
      image: "/api/placeholder/60/60",
      address: "Downtown Miami",
      mapPack: "3rd map pack",
      organic: "8th organic"
    },
    { 
      name: "Giuseppe's Kitchen", 
      rating: 4.8, 
      reviews: 189, 
      position: "2nd",
      image: "/api/placeholder/60/60",
      address: "South Beach",
      mapPack: "2nd map pack", 
      organic: "4th organic"
    },
    { 
      name: "Mama Mia's Restaurant", 
      rating: 4.1, 
      reviews: 156, 
      position: "3rd",
      image: "/api/placeholder/60/60",
      address: "Coral Gables",
      mapPack: "1st map pack",
      organic: "2nd organic"
    },
    { 
      name: "Villa Rosa Ristorante", 
      rating: 4.9, 
      reviews: 298, 
      position: "4th",
      image: "/api/placeholder/60/60",
      address: "Brickell",
      mapPack: "Unranked map pack",
      organic: "Unranked organic"
    },
    { 
      name: "Little Italy Cafe", 
      rating: 4.7, 
      reviews: 167, 
      position: "5th",
      image: "/api/placeholder/60/60",
      address: "Wynwood",
      mapPack: "Unranked map pack",
      organic: "Unranked organic"
    }
  ];

  const searchQueries = [
    { query: "Best Italian restaurant in Miami Beach", winner: "Tony's Italian Bistro", yourRank: "#4", mapPack: "3rd map pack", organic: "8th organic" },
    { query: "Italian food near me", winner: "Giuseppe's Kitchen", yourRank: "#6", mapPack: "Unranked map pack", organic: "Unranked organic" },
    { query: "Pizza restaurant Miami Beach", winner: "Mama Mia's Restaurant", yourRank: "#3", mapPack: "2nd map pack", organic: "5th organic" },
    { query: "Family restaurant Miami", winner: "Villa Rosa Ristorante", yourRank: "#7", mapPack: "Unranked map pack", organic: "Unranked organic" }
  ];

  const improvements = [
    {
      category: "Google Reviews Automation",
      score: "Poor",
      color: "text-red-500",
      bgColor: "bg-red-50",
      issues: [
        "Only 89 reviews vs competitor average of 208 reviews",
        "No systematic review collection process",
        "Missing 3-5 reviews per month that competitors are getting"
      ],
      solution: "Bot & Table's AI automatically identifies happy customers and guides them through seamless review process",
      impact: "$9,574 monthly revenue increase"
    },
    {
      category: "AI Phone Management", 
      score: "Critical",
      color: "text-red-600",
      bgColor: "bg-red-100",
      issues: [
        "Missed calls during busy periods going to competitors",
        "No 24/7 phone coverage for reservations and inquiries", 
        "Staff too busy to handle phone professionally during rush"
      ],
      solution: "Bot & Table's AI phone assistant handles all calls 24/7 with professional service",
      impact: "$7,225 monthly revenue recovery"
    },
    {
      category: "Customer Retention Automation",
      score: "Poor", 
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      issues: [
        "No personalized follow-up with customers",
        "Generic marketing messages that customers ignore",
        "Missing repeat customer opportunities"
      ],
      solution: "Bot & Table's AI creates hyper-personalized campaigns based on dining history",
      impact: "$5,013 monthly revenue from repeat customers"
    },
    {
      category: "Local SEO Optimization",
      score: "Fair",
      color: "text-yellow-500", 
      bgColor: "bg-yellow-50",
      issues: [
        "Ranking below competitors for key search terms",
        "Google Business Profile not fully optimized",
        "Missing from top map pack results"
      ],
      solution: "Bot & Table's AI optimizes your online presence for maximum local visibility",
      impact: "$3,890 monthly revenue from improved rankings"
    }
  ];

  const totalMonthlyLoss = improvements.reduce((sum, item) => {
    const amount = parseInt(item.impact.replace(/[$,]/g, '').split(' ')[0]);
    return sum + amount;
  }, 0);

  const handleEmailSubmit = () => {
    // In real implementation, this would send the detailed report
    alert(`Report sent to ${userEmail}! Check your inbox for the complete analysis.`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
      {/* Header with Overall Score */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/api/placeholder/80/80" 
            alt={selectedRestaurant.name}
            className="w-20 h-20 rounded-full mr-4 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{selectedRestaurant.name}</h2>
            <p className="text-gray-600">{selectedRestaurant.address}</p>
            <p className="text-sm text-gray-500">We found 15 problems with your online presence</p>
          </div>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">⚠️</span>
            <h3 className="text-2xl font-bold text-red-600">
              {selectedRestaurant.name.toUpperCase()} is losing ${totalMonthlyLoss.toLocaleString()} every month
            </h3>
          </div>
          <p className="text-lg text-gray-700">
            Your Marketing Automation Score: <span className="text-3xl font-bold text-red-500">35/100</span>
          </p>
        </div>
      </div>

      {/* Who's Beating You on Google */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Who's beating you on Google</h3>
        <div className="space-y-4">
          {competitors.map((competitor, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-600">🍽️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{competitor.name}</h4>
                  <p className="text-sm text-gray-600">{competitor.address}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm ml-1">{competitor.rating} ({competitor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    competitor.position === '1st' ? 'bg-green-100 text-green-800' :
                    competitor.position === '2nd' ? 'bg-blue-100 text-blue-800' :
                    competitor.position === '3rd' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {competitor.position}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    competitor.mapPack.includes('1st') || competitor.mapPack.includes('2nd') || competitor.mapPack.includes('3rd') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {competitor.mapPack}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    competitor.organic.includes('2nd') || competitor.organic.includes('4th') || competitor.organic.includes('8th')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {competitor.organic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How You're Doing Online */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">This is how you're doing online</h3>
        <p className="text-gray-600 mb-6">Where you are showing up when customers search you, next to your competitors</p>
        
        <div className="space-y-4">
          {searchQueries.map((query, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔍</span>
                <span className="font-medium text-gray-800">{query.query}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Winner: <span className="font-semibold">{query.winner}</span></p>
                  <p className="text-sm text-gray-600">You: <span className="font-semibold text-red-600">{query.yourRank}</span></p>
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    query.mapPack.includes('2nd') || query.mapPack.includes('3rd')
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {query.mapPack}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    query.organic.includes('5th') || query.organic.includes('8th')
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {query.organic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Business Profile Analysis */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Google Business Profile Analysis</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">📍</span>
            <div>
              <h4 className="text-xl font-bold text-gray-800">Google Business Profile</h4>
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="ml-1 font-semibold">{selectedRestaurant.rating} ({selectedRestaurant.reviews} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Profile Content</h5>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">First-party website</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Business description</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Business hours</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Phone number</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-sm">Service options missing</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Missing Opportunities</h5>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-sm">Limited service options listed</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-sm">Infrequent photo updates</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-sm">No recent posts or updates</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-sm">Slow response to reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See What's Wrong and How to Improve */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {improvements.length} things reviewed, {improvements.filter(i => i.score === 'Poor' || i.score === 'Critical').length} need work
        </h3>
        <p className="text-gray-600 mb-6">See what's wrong and how to improve</p>
        
        <div className="space-y-6">
          {improvements.map((improvement, index) => (
            <div key={index} className={`${improvement.bgColor} border border-gray-200 rounded-xl p-6`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-800">{improvement.category}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${improvement.color} bg-white`}>
                  {improvement.score}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Current Issues:</h5>
                  <ul className="space-y-2">
                    {improvement.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-sm text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Bot & Table Solution:</h5>
                  <p className="text-sm text-gray-700 mb-3">{improvement.solution}</p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-lg font-bold text-green-600">{improvement.impact}</p>
                    <p className="text-sm text-gray-600">Potential monthly revenue increase</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Impact Summary */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Total Revenue Impact</h3>
          <p className="text-4xl font-bold text-red-600 mb-2">
            ${totalMonthlyLoss.toLocaleString()} per month
          </p>
          <p className="text-2xl font-bold text-red-500 mb-4">
            ${(totalMonthlyLoss * 12).toLocaleString()} per year
          </p>
          <p className="text-lg text-gray-700">
            walking out your door while your competitors capture it with AI automation.
          </p>
        </div>
      </div>

      {/* Book a Call Section */}
      <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-xl p-8 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Stop the Revenue Bleeding?</h3>
        <p className="text-xl mb-6">
          Book a strategy call with our restaurant growth specialists to get your score to 95+ and capture that lost revenue.
        </p>
        
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white rounded-lg p-4 text-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">June 2025</span>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">←</button>
                <button className="text-gray-400 hover:text-gray-600">→</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm">
              <div className="text-center font-medium">S</div>
              <div className="text-center font-medium">M</div>
              <div className="text-center font-medium">T</div>
              <div className="text-center font-medium">W</div>
              <div className="text-center font-medium">T</div>
              <div className="text-center font-medium">F</div>
              <div className="text-center font-medium">S</div>
              {[...Array(30)].map((_, i) => (
                <div key={i} className={`text-center p-1 rounded ${
                  i === 25 ? 'bg-coral-500 text-white' : 'hover:bg-gray-100 cursor-pointer'
                }`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setShowEmailCapture(true)}
            className="bg-white text-coral-500 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors"
          >
            📧 Email Me This Report
          </button>
          <button className="bg-navy-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-navy-700 transition-colors">
            📞 Book Strategy Call Now
          </button>
        </div>
      </div>

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Your Complete Report</h3>
            <p className="text-gray-600 mb-6">
              Enter your details to receive the full analysis and our recommendations for {selectedRestaurant.name}.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-coral-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-coral-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What's your relationship to {selectedRestaurant.name}?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={isOwner}
                      onChange={() => setIsOwner(true)}
                      className="mr-2"
                    />
                    <span>I'm the restaurant owner or manager</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={!isOwner}
                      onChange={() => setIsOwner(false)}
                      className="mr-2"
                    />
                    <span>I provide services to this restaurant</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowEmailCapture(false)}
                className="flex-1 bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleEmailSubmit}
                disabled={!userEmail || !userName}
                className="flex-1 bg-coral-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-coral-600 disabled:bg-gray-300 transition-colors"
              >
                Send Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedResultsReport;

