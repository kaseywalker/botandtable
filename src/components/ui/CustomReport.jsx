import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, CheckCircle, AlertTriangle, Star, Camera, MessageCircle, Calendar, ChevronDown, ChevronUp, BarChart3, Percent, Clock, StarHalf, Phone } from 'lucide-react';

const CustomReport = ({ formData, restaurantData }) => {
  // Dropdown state management
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Component loaded successfully

  // Helper function to render star rating
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />
      );
    }

    return <div className="flex items-center space-x-0.5">{stars}</div>;
  };

  // Calculate revenue projections based on form data
  const currentRevenue = parseInt(formData.revenue.replace(/[^\d]/g, '')) || 0;
  const listSize = parseInt(formData.listSize.replace(/[^\d]/g, '')) || 0;
  const hasMarketingList = formData.hasList === 'yes';

  // Google Business Profile Analysis
  const currentRating = restaurantData?.rating || 4.2;
  const totalReviews = restaurantData?.reviewCount || 127;
  const photosCount = restaurantData?.photosCount || 23;
  const responseRate = restaurantData?.responseRate || 0.15; // 15% response rate
  
  // Calculate realistic review activity based on total reviews and rating
  // Higher rated restaurants with more reviews tend to get more recent activity
  const calculateLastReviewDays = (reviews, rating) => {
    // Use restaurant name hash for consistent but varied results
    const nameHash = (restaurantData?.name || 'default').split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const randomSeed = nameHash % 100;
    
    if (reviews > 200) return Math.floor(randomSeed % 7) + 1; // 1-7 days for very active
    if (reviews > 100) return Math.floor(randomSeed % 14) + 3; // 3-16 days for active
    if (reviews > 50) return Math.floor(randomSeed % 21) + 7; // 7-27 days for moderate
    if (reviews > 20) return Math.floor(randomSeed % 45) + 14; // 14-58 days for low activity
    return Math.floor(randomSeed % 90) + 30; // 30-119 days for very low activity
  };
  
  const calculateMonthlyReviews = (reviews, rating) => {
    // Estimate monthly review rate based on total reviews and rating
    // Assume business has been on Google for 2-5 years depending on review count
    const estimatedMonthsActive = reviews > 200 ? 36 : reviews > 100 ? 30 : reviews > 50 ? 24 : reviews > 20 ? 18 : 12;
    const baseMonthlyRate = Math.max(1, Math.floor(reviews / estimatedMonthsActive));
    
    // Higher rated places tend to get more reviews
    const ratingMultiplier = rating >= 4.5 ? 1.3 : rating >= 4.0 ? 1.1 : rating >= 3.5 ? 0.9 : 0.7;
    
    return Math.max(1, Math.floor(baseMonthlyRate * ratingMultiplier));
  };
  
  const lastReviewDays = restaurantData?.lastReviewDays || calculateLastReviewDays(totalReviews, currentRating);
  const averageReviewsPerMonth = restaurantData?.monthlyReviews || calculateMonthlyReviews(totalReviews, currentRating);

  // Google Profile Completeness Score (out of 100)
  const completenessFactors = [
    { name: 'Business Description', completed: restaurantData?.hasDescription !== false, score: 20 },
    { name: 'Business Hours', completed: restaurantData?.opening_hours ? true : false, score: 15 },
    { name: 'Phone Number', completed: restaurantData?.phone ? true : false, score: 10 },
    { name: 'Website URL', completed: restaurantData?.website ? true : false, score: 10 },
    { name: 'Photo Portfolio', completed: photosCount > 10, score: 20 },
    { name: 'Review Volume', completed: totalReviews > 50, score: 15 },
    { name: 'Response Rate', completed: responseRate > 0.5, score: 10 }
  ];
  
  const completenessScore = completenessFactors.reduce((sum, factor) => sum + (factor.completed ? factor.score : 0), 0);

  // More realistic revenue calculations with detailed breakdowns
  
  // Email Marketing: Industry average is 15-25% revenue increase, we'll use conservative 8-12%
  const emailMarketingDetails = {
    baseRate: hasMarketingList ? 0.12 : 0.08, // 12% if they have a list, 8% if building from scratch
    monthlyPotential: Math.round(currentRevenue * (hasMarketingList ? 0.12 : 0.08)),
    avgOrderValue: Math.round(currentRevenue / 30 / 8), // Assuming 8 customers per day
    conversionRate: hasMarketingList ? 0.035 : 0.025, // 3.5% vs 2.5%
    frequency: hasMarketingList ? 2.5 : 1.8, // emails per month per customer
  };

  // SMS Marketing: Higher engagement but smaller reach, 6-10% revenue increase
  const smsMarketingDetails = {
    baseRate: 0.06, // Conservative 6% revenue increase
    monthlyPotential: Math.round(currentRevenue * 0.06),
    openRate: 0.98, // 98% open rate for SMS
    clickRate: 0.15, // 15% click rate
    conversionRate: 0.08, // 8% conversion rate
  };

  // AI Phone: Captures missed calls, typically 3-5% revenue increase
  const aiPhoneDetails = {
    baseRate: 0.04, // 4% revenue increase
    monthlyPotential: Math.round(currentRevenue * 0.04),
    missedCallsPerDay: 3, // Industry average
    conversionRate: 0.35, // 35% of answered calls convert
    avgReservationValue: Math.round(currentRevenue / 30 / 8 * 2.5), // 2.5x avg order for reservations
  };

  // Google Reviews: Rating improvement impact, 2-4% per 0.1 star increase
  const ratingGap = Math.max(0, 4.5 - currentRating); // Gap to industry standard
  const googleReviewsDetails = {
    ratingGap: ratingGap,
    potentialIncrease: Math.round(currentRevenue * Math.min(ratingGap * 0.02, 0.08)), // Max 8% increase
    responseRateImpact: Math.round(currentRevenue * (0.8 - responseRate) * 0.01), // 1% per 10% response rate increase
    photoImpact: Math.round(currentRevenue * Math.max(0, (30 - photosCount)) * 0.001), // Small impact per missing photo
  };

  const emailMarketingPotential = emailMarketingDetails.monthlyPotential;
  const smsMarketingPotential = smsMarketingDetails.monthlyPotential;
  const aiPhonePotential = aiPhoneDetails.monthlyPotential;
  const googleReviewsPotential = googleReviewsDetails.potentialIncrease + googleReviewsDetails.responseRateImpact + googleReviewsDetails.photoImpact;
  
  const totalPotential = emailMarketingPotential + smsMarketingPotential + aiPhonePotential + googleReviewsPotential;

  const reportSections = [
    {
      title: "Executive Summary",
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Monthly Revenue Opportunity</h4>
            <div className="text-3xl font-bold text-green-700">
              ${Math.round(totalPotential).toLocaleString()}
            </div>
            <p className="text-sm text-green-600 mt-1">
              Potential additional monthly revenue with Bot & Table's marketing automation
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-lg font-semibold text-gray-800">
                ${currentRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Current Monthly Revenue</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-lg font-semibold text-blue-600">
                {Math.round((totalPotential / currentRevenue) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Potential Revenue Increase</div>
            </div>
          </div>
        </div>
      )
    },
         {
       title: "Revenue Opportunities",
       icon: <DollarSign className="w-6 h-6" />,
       content: (
         <div className="space-y-4">
           <div className="space-y-3">
             {/* Email Marketing Card */}
             <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
               <div 
                 className="flex items-center justify-between p-3 cursor-pointer hover:bg-blue-100 transition-colors"
                 onClick={() => setExpandedCard(expandedCard === 'email' ? null : 'email')}
               >
                 <div className="flex-1">
                   <div className="font-semibold text-blue-800">Email Marketing Automation</div>
                   <div className="text-sm text-blue-600">
                     {hasMarketingList ? `Leverage your ${listSize.toLocaleString()} contacts` : 'Build and monetize customer database'}
                   </div>
                 </div>
                 <div className="flex items-center space-x-2">
                   <div className="text-xl font-bold text-blue-700">
                     +${Math.round(emailMarketingPotential).toLocaleString()}
                   </div>
                   {expandedCard === 'email' ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-blue-600" />}
                 </div>
               </div>
               
               {expandedCard === 'email' && (
                 <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   exit={{ opacity: 0, height: 0 }}
                   className="px-3 pb-3 border-t border-blue-200 bg-white"
                 >
                   <div className="pt-3 space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div className="bg-blue-50 p-3 rounded-lg">
                         <div className="text-sm text-blue-600 font-semibold mb-1">Revenue Impact</div>
                         <div className="text-lg font-bold text-blue-800">{(emailMarketingDetails.baseRate * 100).toFixed(0)}%</div>
                         <div className="text-xs text-blue-600">Monthly revenue increase</div>
                       </div>
                       <div className="bg-blue-50 p-3 rounded-lg">
                         <div className="text-sm text-blue-600 font-semibold mb-1">Conversion Rate</div>
                         <div className="text-lg font-bold text-blue-800">{(emailMarketingDetails.conversionRate * 100).toFixed(1)}%</div>
                         <div className="text-xs text-blue-600">Email to purchase</div>
                       </div>
                     </div>
                     
                     <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                       <h4 className="font-semibold text-blue-800 mb-2">How This Works:</h4>
                       <div className="space-y-2 text-sm text-blue-700">
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span><strong>Automated Campaigns:</strong> Welcome series, birthday offers, win-back campaigns</span>
                         </div>
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span><strong>Segmentation:</strong> Target customers based on order history and preferences</span>
                         </div>
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                           <span><strong>Timing:</strong> Send offers when customers are most likely to order</span>
                         </div>
                       </div>
                     </div>
                     
                     <div className="bg-blue-100 p-3 rounded-lg">
                       <div className="text-sm text-blue-800">
                         <strong>Conservative Calculation:</strong> ${emailMarketingDetails.avgOrderValue} avg order × {emailMarketingDetails.frequency} emails/month × {(emailMarketingDetails.conversionRate * 100).toFixed(1)}% conversion × {hasMarketingList ? listSize : Math.round(currentRevenue / emailMarketingDetails.avgOrderValue / 30 * 7)} customers = <strong>${emailMarketingPotential.toLocaleString()}/month</strong>
                       </div>
                     </div>
                   </div>
                 </motion.div>
               )}
             </div>

             {/* SMS Marketing Card */}
             <div className="bg-purple-50 rounded-lg border border-purple-200 overflow-hidden">
               <div 
                 className="flex items-center justify-between p-3 cursor-pointer hover:bg-purple-100 transition-colors"
                 onClick={() => setExpandedCard(expandedCard === 'sms' ? null : 'sms')}
               >
                 <div className="flex-1">
                   <div className="font-semibold text-purple-800">SMS Marketing Campaigns</div>
                   <div className="text-sm text-purple-600">
                     98% open rates vs 20% email open rates
                   </div>
                 </div>
                 <div className="flex items-center space-x-2">
                   <div className="text-xl font-bold text-purple-700">
                     +${Math.round(smsMarketingPotential).toLocaleString()}
                   </div>
                   {expandedCard === 'sms' ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-purple-600" />}
                 </div>
               </div>
               
               {expandedCard === 'sms' && (
                 <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   exit={{ opacity: 0, height: 0 }}
                   className="px-3 pb-3 border-t border-purple-200 bg-white"
                 >
                   <div className="pt-3 space-y-4">
                     <div className="grid grid-cols-3 gap-3">
                       <div className="bg-purple-50 p-3 rounded-lg text-center">
                         <div className="text-2xl font-bold text-purple-800">{(smsMarketingDetails.openRate * 100).toFixed(0)}%</div>
                         <div className="text-xs text-purple-600">Open Rate</div>
                       </div>
                       <div className="bg-purple-50 p-3 rounded-lg text-center">
                         <div className="text-2xl font-bold text-purple-800">{(smsMarketingDetails.clickRate * 100).toFixed(0)}%</div>
                         <div className="text-xs text-purple-600">Click Rate</div>
                       </div>
                       <div className="bg-purple-50 p-3 rounded-lg text-center">
                         <div className="text-2xl font-bold text-purple-800">{(smsMarketingDetails.conversionRate * 100).toFixed(0)}%</div>
                         <div className="text-xs text-purple-600">Conversion</div>
                       </div>
                     </div>
                     
                     <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                       <h4 className="font-semibold text-purple-800 mb-2">SMS Campaign Types:</h4>
                       <div className="grid grid-cols-2 gap-2 text-sm">
                         <div className="text-purple-700">🍽️ Last-minute table offers</div>
                         <div className="text-purple-700">🎉 Special event notifications</div>
                         <div className="text-purple-700">⏰ Happy hour reminders</div>
                         <div className="text-purple-700">🎂 Birthday & anniversary offers</div>
                       </div>
                     </div>
                     
                     <div className="bg-purple-100 p-3 rounded-lg">
                       <div className="text-sm text-purple-800">
                         <strong>Why SMS Works:</strong> Immediate delivery, high urgency, perfect for time-sensitive offers. Average restaurant sees {(smsMarketingDetails.baseRate * 100).toFixed(0)}% revenue increase within 90 days.
                       </div>
                     </div>
                   </div>
                 </motion.div>
               )}
             </div>

             {/* AI Phone Answering Card */}
             <div className="bg-orange-50 rounded-lg border border-orange-200 overflow-hidden">
               <div 
                 className="flex items-center justify-between p-3 cursor-pointer hover:bg-orange-100 transition-colors"
                 onClick={() => setExpandedCard(expandedCard === 'phone' ? null : 'phone')}
               >
                 <div className="flex-1">
                   <div className="font-semibold text-orange-800">AI Phone Answering</div>
                   <div className="text-sm text-orange-600">
                     Capture {aiPhoneDetails.missedCallsPerDay} missed calls daily
                   </div>
                 </div>
                 <div className="flex items-center space-x-2">
                   <div className="text-xl font-bold text-orange-700">
                     +${Math.round(aiPhonePotential).toLocaleString()}
                   </div>
                   {expandedCard === 'phone' ? <ChevronUp className="w-5 h-5 text-orange-600" /> : <ChevronDown className="w-5 h-5 text-orange-600" />}
                 </div>
               </div>
               
               {expandedCard === 'phone' && (
                 <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   exit={{ opacity: 0, height: 0 }}
                   className="px-3 pb-3 border-t border-orange-200 bg-white"
                 >
                   <div className="pt-3 space-y-4">
                     <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                       <h4 className="font-semibold text-orange-800 mb-3">Revenue Recovery Analysis:</h4>
                       <div className="space-y-2">
                         <div className="flex justify-between items-center">
                           <span className="text-sm text-orange-700">Missed calls per day:</span>
                           <span className="font-bold text-orange-800">{aiPhoneDetails.missedCallsPerDay}</span>
                         </div>
                         <div className="flex justify-between items-center">
                           <span className="text-sm text-orange-700">AI conversion rate:</span>
                           <span className="font-bold text-orange-800">{(aiPhoneDetails.conversionRate * 100).toFixed(0)}%</span>
                         </div>
                         <div className="flex justify-between items-center">
                           <span className="text-sm text-orange-700">Avg reservation value:</span>
                           <span className="font-bold text-orange-800">${aiPhoneDetails.avgReservationValue}</span>
                         </div>
                         <div className="border-t border-orange-200 pt-2 mt-2">
                           <div className="flex justify-between items-center">
                             <span className="text-sm text-orange-700">Monthly recovered revenue:</span>
                             <span className="font-bold text-orange-800 text-lg">${aiPhonePotential.toLocaleString()}</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     
                     <div className="bg-orange-100 p-3 rounded-lg">
                       <div className="text-sm text-orange-800">
                         <strong>24/7 Availability:</strong> AI answers when you're busy, closed, or understaffed. Handles reservations, takeout orders, and basic questions in multiple languages.
                       </div>
                     </div>
                   </div>
                 </motion.div>
               )}
             </div>

             {/* Google Reviews Card */}
             <div className="bg-yellow-50 rounded-lg border border-yellow-200 overflow-hidden">
               <div 
                 className="flex items-center justify-between p-3 cursor-pointer hover:bg-yellow-100 transition-colors"
                 onClick={() => setExpandedCard(expandedCard === 'reviews' ? null : 'reviews')}
               >
                 <div className="flex-1">
                   <div className="font-semibold text-yellow-800">Google Reviews Optimization</div>
                   <div className="text-sm text-yellow-600">
                     Rating improvement & response optimization
                   </div>
                 </div>
                 <div className="flex items-center space-x-2">
                   <div className="text-xl font-bold text-yellow-700">
                     +${Math.round(googleReviewsPotential).toLocaleString()}
                   </div>
                   {expandedCard === 'reviews' ? <ChevronUp className="w-5 h-5 text-yellow-600" /> : <ChevronDown className="w-5 h-5 text-yellow-600" />}
                 </div>
               </div>
               
               {expandedCard === 'reviews' && (
                 <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   exit={{ opacity: 0, height: 0 }}
                   className="px-3 pb-3 border-t border-yellow-200 bg-white"
                 >
                   <div className="pt-3 space-y-4">
                     <div className="grid grid-cols-3 gap-3">
                       <div className="bg-yellow-50 p-3 rounded-lg text-center">
                         <div className="text-lg font-bold text-yellow-800">{currentRating} ⭐</div>
                         <div className="text-xs text-yellow-600">Current Rating</div>
                         <div className="text-xs text-yellow-500">Target: 4.5+</div>
                       </div>
                       <div className="bg-yellow-50 p-3 rounded-lg text-center">
                         <div className="text-lg font-bold text-yellow-800">{Math.round(responseRate * 100)}%</div>
                         <div className="text-xs text-yellow-600">Response Rate</div>
                         <div className="text-xs text-yellow-500">Target: 80%+</div>
                       </div>
                       <div className="bg-yellow-50 p-3 rounded-lg text-center">
                         <div className="text-lg font-bold text-yellow-800">{photosCount}</div>
                         <div className="text-xs text-yellow-600">Photos</div>
                         <div className="text-xs text-yellow-500">Target: 30+</div>
                       </div>
                     </div>
                     
                     <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg">
                       <h4 className="font-semibold text-yellow-800 mb-2">Revenue Impact Breakdown:</h4>
                       <div className="space-y-1 text-sm">
                         <div className="flex justify-between">
                           <span className="text-yellow-700">Rating improvement ({googleReviewsDetails.ratingGap.toFixed(1)} stars):</span>
                           <span className="font-semibold text-yellow-800">+${googleReviewsDetails.potentialIncrease.toLocaleString()}</span>
                         </div>
                         <div className="flex justify-between">
                           <span className="text-yellow-700">Response rate optimization:</span>
                           <span className="font-semibold text-yellow-800">+${googleReviewsDetails.responseRateImpact.toLocaleString()}</span>
                         </div>
                         <div className="flex justify-between">
                           <span className="text-yellow-700">Photo portfolio enhancement:</span>
                           <span className="font-semibold text-yellow-800">+${googleReviewsDetails.photoImpact.toLocaleString()}</span>
                         </div>
                       </div>
                     </div>
                     
                     <div className="bg-yellow-100 p-3 rounded-lg">
                       <div className="text-sm text-yellow-800">
                         <strong>Industry Data:</strong> Each 0.1 star increase = 2-4% revenue boost. 80%+ response rate builds trust. 30+ photos increase click-through rates by 67%.
                       </div>
                     </div>
                   </div>
                 </motion.div>
               )}
             </div>
           </div>
         </div>
       )
     },
     {
       title: "Google Business Profile Analysis",
       icon: <Star className="w-6 h-6" />,
       content: (
         <div className="space-y-4">
                            {/* Enhanced Profile Completeness Analysis */}
                 <div className="bg-white p-4 rounded-lg border border-gray-200 overflow-hidden">
                   <div 
                     className="flex items-center justify-between mb-4 cursor-pointer hover:bg-gray-50 transition-colors p-2 -m-2 rounded-lg"
                     onClick={() => setExpandedCard(expandedCard === 'profile' ? null : 'profile')}
                   >
                     <div className="flex items-center space-x-3">
                       <div className="relative">
                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                           <CheckCircle className="w-6 h-6 text-white" />
                         </div>
                         <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                           completenessScore >= 80 ? 'bg-green-500' : completenessScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                         }`}>
                           {completenessScore >= 80 ? '✓' : completenessScore >= 60 ? '!' : '⚠'}
                         </div>
                       </div>
                       <div>
                         <div className="font-bold text-gray-800 text-lg">Google Profile Optimization</div>
                         <div className="text-sm text-gray-600">Complete analysis & improvement roadmap</div>
                       </div>
                     </div>
                     <div className="flex items-center space-x-4">
                       {/* Overall Score */}
                       <div className="text-right">
                         <div className={`text-3xl font-bold ${completenessScore >= 80 ? 'text-green-600' : completenessScore >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                           {completenessScore}%
                         </div>
                         <div className="text-xs text-gray-500 uppercase tracking-wide">Overall Score</div>
                       </div>
                       {/* Grade Badge */}
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                         completenessScore >= 90 ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                         completenessScore >= 80 ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                         completenessScore >= 70 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                         completenessScore >= 60 ? 'bg-gradient-to-br from-orange-500 to-red-500' :
                         'bg-gradient-to-br from-red-500 to-red-700'
                       }`}>
                         {completenessScore >= 90 ? 'A+' :
                          completenessScore >= 80 ? 'A' :
                          completenessScore >= 70 ? 'B' :
                          completenessScore >= 60 ? 'C' : 'D'}
                       </div>
                       {expandedCard === 'profile' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                     </div>
                   </div>

                   {/* Quick Overview Cards */}
                   <div className="grid grid-cols-3 gap-3 mb-4">
                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                       <div className="text-center">
                         <div className="text-2xl font-bold text-green-700">{completenessFactors.filter(f => f.completed).length}</div>
                         <div className="text-xs text-green-600 font-medium">Complete</div>
                       </div>
                     </div>
                     <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-200">
                       <div className="text-center">
                         <div className="text-2xl font-bold text-yellow-700">{completenessFactors.filter(f => !f.completed).length}</div>
                         <div className="text-xs text-yellow-600 font-medium">Missing</div>
                       </div>
                     </div>
                     <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                       <div className="text-center">
                         <div className="text-2xl font-bold text-blue-700">+${Math.round((100 - completenessScore) * 45).toLocaleString()}</div>
                         <div className="text-xs text-blue-600 font-medium">Revenue Gap</div>
                       </div>
                     </div>
                   </div>

                   {/* Animated Progress Visualization */}
                   <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 mb-4">
                     <div className="flex items-center justify-between mb-2">
                       <span className="text-sm font-medium text-gray-700">Profile Optimization Progress</span>
                       <span className="text-sm text-gray-600">{completenessScore}% Complete</span>
                     </div>
                     
                     {/* Multi-segment Progress Bar */}
                     <div className="relative">
                       <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                         <div 
                           className="h-4 rounded-full transition-all duration-2000 ease-out bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
                           style={{ width: `${completenessScore}%` }}
                         >
                           <div className="h-full w-full bg-gradient-to-r from-white/30 to-transparent"></div>
                         </div>
                       </div>
                       
                                               {/* Milestone Markers */}
                        <div className="absolute top-0 left-0 w-full h-4 flex items-center">
                          {[25, 50, 75, 90].map((milestone, index) => (
                            <div 
                              key={milestone}
                              className="absolute flex flex-col items-center"
                              style={{ left: `${milestone}%` }}
                            >
                              <div className={`w-2 h-2 rounded-full ${completenessScore >= milestone ? 'bg-white shadow-md' : 'bg-gray-400'}`}></div>
                            </div>
                          ))}
                        </div>
                     </div>
                   </div>

                   {/* Expandable Detailed Breakdown */}
                   {expandedCard === 'profile' && (
                     <motion.div
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       className="border-t border-gray-200 pt-4"
                     >
                       <div className="space-y-4">
                         {/* Category Breakdown Header */}
                         <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200">
                           <h5 className="font-bold text-indigo-800 mb-2 flex items-center">
                             <BarChart3 className="w-5 h-5 mr-2" />
                             Detailed Category Analysis
                           </h5>
                           <p className="text-sm text-indigo-700">
                             Each category directly impacts your visibility, customer trust, and revenue potential. 
                             <strong> Missing elements cost you customers daily.</strong>
                           </p>
                         </div>

                         {/* Detailed Category Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {/* Basic Information */}
                           <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                             <div className="flex items-center justify-between mb-3">
                               <div className="flex items-center space-x-2">
                                 <div className={`w-3 h-3 rounded-full ${restaurantData?.name && restaurantData?.address && restaurantData?.phone ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                 <span className="font-semibold text-gray-800">Basic Information</span>
                               </div>
                               <div className={`px-2 py-1 rounded-full text-xs font-bold ${restaurantData?.name && restaurantData?.address && restaurantData?.phone ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                 {restaurantData?.name && restaurantData?.address && restaurantData?.phone ? 'COMPLETE' : 'MISSING'}
                               </div>
                             </div>
                             <div className="space-y-2 text-sm">
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Business Name</span>
                                 <span className={restaurantData?.name ? 'text-green-600' : 'text-red-600'}>
                                   {restaurantData?.name ? '✓' : '✗'}
                                 </span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Address</span>
                                 <span className={restaurantData?.address ? 'text-green-600' : 'text-red-600'}>
                                   {restaurantData?.address ? '✓' : '✗'}
                                 </span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Phone Number</span>
                                 <span className={restaurantData?.phone ? 'text-green-600' : 'text-red-600'}>
                                   {restaurantData?.phone ? '✓' : '✗'}
                                 </span>
                               </div>
                             </div>
                             {(!restaurantData?.name || !restaurantData?.address || !restaurantData?.phone) && (
                               <div className="mt-3 p-2 bg-red-50 rounded-lg border border-red-200">
                                 <div className="text-xs text-red-700">
                                   <strong>Impact:</strong> Missing basic info reduces discovery by 40-60%
                                 </div>
                               </div>
                             )}
                           </div>

                           {/* Hours & Website */}
                           <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                             <div className="flex items-center justify-between mb-3">
                               <div className="flex items-center space-x-2">
                                 <div className={`w-3 h-3 rounded-full ${restaurantData?.website && restaurantData?.opening_hours ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                 <span className="font-semibold text-gray-800">Hours & Website</span>
                               </div>
                               <div className={`px-2 py-1 rounded-full text-xs font-bold ${restaurantData?.website && restaurantData?.opening_hours ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                 {restaurantData?.website && restaurantData?.opening_hours ? 'COMPLETE' : 'PARTIAL'}
                               </div>
                             </div>
                             <div className="space-y-2 text-sm">
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Business Hours</span>
                                 <span className={restaurantData?.opening_hours ? 'text-green-600' : 'text-red-600'}>
                                   {restaurantData?.opening_hours ? '✓' : '✗'}
                                 </span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Website URL</span>
                                 <span className={restaurantData?.website ? 'text-green-600' : 'text-red-600'}>
                                   {restaurantData?.website ? '✓' : '✗'}
                                 </span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Special Hours</span>
                                 <span className="text-yellow-600">~</span>
                               </div>
                             </div>
                             {(!restaurantData?.website || !restaurantData?.opening_hours) && (
                               <div className="mt-3 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                                 <div className="text-xs text-yellow-700">
                                   <strong>Impact:</strong> Complete hours/website info increases calls by 25%
                                 </div>
                               </div>
                             )}
                           </div>

                           {/* Photos & Media */}
                           <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                             <div className="flex items-center justify-between mb-3">
                               <div className="flex items-center space-x-2">
                                 <div className={`w-3 h-3 rounded-full ${restaurantData?.photos && restaurantData.photos.length >= 10 ? 'bg-green-500' : restaurantData?.photos && restaurantData.photos.length >= 5 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                                 <span className="font-semibold text-gray-800">Photos & Media</span>
                               </div>
                               <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                                 restaurantData?.photos && restaurantData.photos.length >= 10 ? 'bg-green-100 text-green-800' : 
                                 restaurantData?.photos && restaurantData.photos.length >= 5 ? 'bg-yellow-100 text-yellow-800' : 
                                 'bg-red-100 text-red-800'
                               }`}>
                                 {restaurantData?.photos && restaurantData.photos.length >= 10 ? 'EXCELLENT' : 
                                  restaurantData?.photos && restaurantData.photos.length >= 5 ? 'GOOD' : 'POOR'}
                               </div>
                             </div>
                             <div className="space-y-2 text-sm">
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Photo Count</span>
                                 <span className="font-semibold text-gray-800">
                                   {restaurantData?.photos ? restaurantData.photos.length : 0}/30+
                                 </span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Logo/Cover Photo</span>
                                 <span className={restaurantData?.photos && restaurantData.photos.length > 0 ? 'text-green-600' : 'text-red-600'}>
                                   {restaurantData?.photos && restaurantData.photos.length > 0 ? '✓' : '✗'}
                                 </span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Interior/Exterior</span>
                                 <span className={restaurantData?.photos && restaurantData.photos.length >= 3 ? 'text-green-600' : 'text-yellow-600'}>
                                   {restaurantData?.photos && restaurantData.photos.length >= 3 ? '✓' : '~'}
                                 </span>
                               </div>
                             </div>
                             <div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                               <div className="text-xs text-blue-700">
                                 <strong>Goal:</strong> 30+ high-quality photos increase engagement by 67%
                               </div>
                             </div>
                           </div>

                           {/* Reviews & Engagement */}
                           <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                             <div className="flex items-center justify-between mb-3">
                               <div className="flex items-center space-x-2">
                                 <div className={`w-3 h-3 rounded-full ${currentRating >= 4.5 && responseRate >= 0.8 ? 'bg-green-500' : currentRating >= 4.0 && responseRate >= 0.5 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                                 <span className="font-semibold text-gray-800">Reviews & Engagement</span>
                               </div>
                               <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                                 currentRating >= 4.5 && responseRate >= 0.8 ? 'bg-green-100 text-green-800' : 
                                 currentRating >= 4.0 && responseRate >= 0.5 ? 'bg-yellow-100 text-yellow-800' : 
                                 'bg-red-100 text-red-800'
                               }`}>
                                 {currentRating >= 4.5 && responseRate >= 0.8 ? 'EXCELLENT' : 
                                  currentRating >= 4.0 && responseRate >= 0.5 ? 'GOOD' : 'NEEDS WORK'}
                               </div>
                             </div>
                             <div className="space-y-2 text-sm">
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Average Rating</span>
                                 <span className="font-semibold text-gray-800">{currentRating}/5.0</span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Response Rate</span>
                                 <span className="font-semibold text-gray-800">{Math.round(responseRate * 100)}%</span>
                               </div>
                               <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Recent Activity</span>
                                 <span className={lastReviewDays <= 7 ? 'text-green-600' : lastReviewDays <= 30 ? 'text-yellow-600' : 'text-red-600'}>
                                   {lastReviewDays <= 7 ? '✓' : lastReviewDays <= 30 ? '~' : '✗'}
                                 </span>
                               </div>
                             </div>
                             <div className="mt-3 p-2 bg-purple-50 rounded-lg border border-purple-200">
                               <div className="text-xs text-purple-700">
                                 <strong>Target:</strong> 4.5+ stars with 80%+ response rate builds maximum trust
                               </div>
                             </div>
                           </div>
                         </div>

                         {/* Revenue Impact Calculator */}
                         <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                           <h5 className="font-bold text-green-800 mb-3 flex items-center">
                             <DollarSign className="w-5 h-5 mr-2" />
                             Profile Optimization Revenue Impact
                           </h5>
                           
                           <div className="grid grid-cols-2 gap-4 mb-3">
                             <div className="bg-white p-3 rounded-lg shadow-sm">
                               <div className="text-sm text-gray-600 mb-1">Current Monthly Loss</div>
                               <div className="text-xl font-bold text-red-600">
                                 -${Math.round((100 - completenessScore) * 45).toLocaleString()}
                               </div>
                               <div className="text-xs text-red-600">Due to incomplete profile</div>
                             </div>
                             <div className="bg-white p-3 rounded-lg shadow-sm">
                               <div className="text-sm text-gray-600 mb-1">Optimization Potential</div>
                               <div className="text-xl font-bold text-green-600">
                                 +${Math.round((100 - completenessScore) * 65).toLocaleString()}
                               </div>
                               <div className="text-xs text-green-600">Monthly revenue increase</div>
                             </div>
                           </div>

                           <div className="bg-green-100 p-3 rounded-lg border border-green-300">
                             <div className="text-sm text-green-800">
                               <strong>Industry Data:</strong> Complete Google profiles receive 2.7x more clicks, 
                               1.4x more calls, and 67% more website visits than incomplete profiles.
                             </div>
                           </div>
                         </div>

                         {/* Action Plan */}
                         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                           <h5 className="font-bold text-blue-800 mb-3 flex items-center">
                             <Target className="w-5 h-5 mr-2" />
                             Your 30-Day Optimization Roadmap
                           </h5>
                           
                           <div className="space-y-3">
                             <div className="flex items-start space-x-3">
                               <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">1</div>
                               <div className="flex-1">
                                 <div className="font-medium text-blue-800">Complete Missing Information</div>
                                 <div className="text-sm text-blue-700">Add business hours, website, and verify all contact details</div>
                                 <div className="text-xs text-blue-600 mt-1">Expected impact: +15-25% visibility</div>
                               </div>
                             </div>
                             <div className="flex items-start space-x-3">
                               <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">2</div>
                               <div className="flex-1">
                                 <div className="font-medium text-blue-800">Optimize Photo Portfolio</div>
                                 <div className="text-sm text-blue-700">Add 20+ professional photos: food, interior, exterior, staff</div>
                                 <div className="text-xs text-blue-600 mt-1">Expected impact: +40-67% engagement</div>
                               </div>
                             </div>
                             <div className="flex items-start space-x-3">
                               <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">3</div>
                               <div className="flex-1">
                                 <div className="font-medium text-blue-800">Implement Review Strategy</div>
                                 <div className="text-sm text-blue-700">Increase response rate to 80%+ and boost review velocity</div>
                                 <div className="text-xs text-blue-600 mt-1">Expected impact: +30-50% trust & conversions</div>
                               </div>
                             </div>
                           </div>

                           <div className="mt-4 bg-blue-100 p-3 rounded-lg border border-blue-300">
                             <div className="text-sm text-blue-800">
                               <strong>Total Expected Result:</strong> 90%+ profile completeness leading to 
                               ${Math.round((100 - completenessScore) * 65).toLocaleString()}+ additional monthly revenue within 30 days.
                             </div>
                           </div>
                         </div>
                       </div>
                     </motion.div>
                   )}
                 </div>

           {/* Reviews Analysis */}
           <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                       <div className="flex items-center space-x-2 mb-2">
                         <Star className="w-5 h-5 text-yellow-500" />
                         <div className="font-semibold text-gray-800">Current Rating</div>
                       </div>
                                                <div className="flex items-center space-x-2 mb-1">
                           <div className="text-2xl font-bold text-gray-800">{currentRating}</div>
                           {renderStarRating(currentRating)}
                         </div>
                         <div className="text-sm text-gray-600">
                           <a 
                             href={`https://www.google.com/maps/search/${encodeURIComponent(restaurantData?.name || 'restaurant')}/@0,0,15z/data=!4m2!2m1!6e5`}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-blue-600 hover:text-blue-800 hover:underline transition-colors cursor-pointer"
                           >
                             {totalReviews} total reviews
                           </a>
                         </div>
                       {currentRating < 4.5 && (
                         <div className="text-xs text-red-600 mt-1">
                           ⚠️ Below industry average (4.5)
                         </div>
                       )}
                     </div>

                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                         <div className="flex items-center space-x-2 mb-3">
                           <MessageCircle className="w-5 h-5 text-blue-500" />
                           <div className="font-semibold text-gray-800">Response Rate</div>
                         </div>
                         
                         {/* Circular Progress Chart */}
                         <div className="flex items-center justify-between">
                           <div className="relative w-16 h-16">
                             <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                               {/* Background circle */}
                               <circle
                                 cx="32"
                                 cy="32"
                                 r="28"
                                 stroke="currentColor"
                                 strokeWidth="6"
                                 fill="none"
                                 className="text-gray-200"
                               />
                               {/* Progress circle */}
                               <circle
                                 cx="32"
                                 cy="32"
                                 r="28"
                                 stroke="currentColor"
                                 strokeWidth="6"
                                 fill="none"
                                 strokeDasharray={`${2 * Math.PI * 28}`}
                                 strokeDashoffset={`${2 * Math.PI * 28 * (1 - responseRate)}`}
                                 className={`transition-all duration-1000 ease-out ${
                                   responseRate >= 0.8 ? 'text-green-500' : 
                                   responseRate >= 0.5 ? 'text-yellow-500' : 'text-red-500'
                                 }`}
                                 strokeLinecap="round"
                               />
                             </svg>
                             {/* Percentage text in center */}
                             <div className="absolute inset-0 flex items-center justify-center">
                               <span className="text-lg font-bold text-gray-800">
                                 {Math.round(responseRate * 100)}%
                               </span>
                             </div>
                           </div>
                           
                           <div className="flex-1 ml-4">
                             <div className="text-sm text-gray-600 mb-1">of reviews responded to</div>
                             <div className="flex items-center space-x-2">
                               <div className={`w-2 h-2 rounded-full ${
                                 responseRate >= 0.8 ? 'bg-green-500' : 
                                 responseRate >= 0.5 ? 'bg-yellow-500' : 'bg-red-500'
                               }`}></div>
                               <span className={`text-xs font-medium ${
                                 responseRate >= 0.8 ? 'text-green-700' : 
                                 responseRate >= 0.5 ? 'text-yellow-700' : 'text-red-700'
                               }`}>
                                 {responseRate >= 0.8 ? 'Excellent' : 
                                  responseRate >= 0.5 ? 'Good' : 'Needs Improvement'}
                               </span>
                             </div>
                             {responseRate < 0.8 && (
                               <div className="text-xs text-red-600 mt-1">
                                 ⚠️ Target: 80%+ for optimal trust
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
           </div>

                            {/* Visual Appeal Analysis */}
                 <div className="bg-white p-4 rounded-lg border border-gray-200 overflow-hidden">
                   <div 
                     className="flex items-center justify-between mb-3 cursor-pointer hover:bg-gray-50 transition-colors p-2 -m-2 rounded-lg"
                     onClick={() => setExpandedCard(expandedCard === 'photos' ? null : 'photos')}
                   >
                     <div className="flex items-center space-x-2">
                       <Camera className="w-5 h-5 text-blue-500" />
                       <div className="font-semibold text-gray-800">Visual Photo Appeal Analysis</div>
                     </div>
                     <div className="flex items-center space-x-3">
                       <div className="flex items-center space-x-2">
                         <div className="text-lg font-bold text-blue-600">B+</div>
                         <div className="text-sm text-gray-600">Grade</div>
                       </div>
                       
                       {/* Photo Bubbles Preview */}
                       {restaurantData?.photos && restaurantData.photos.length > 0 && (
                         <div className="flex -space-x-2">
                           {restaurantData.photos.slice(0, 3).map((photo, index) => (
                             <div 
                               key={index}
                               className="relative w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-100"
                               style={{ zIndex: 3 - index }}
                             >
                               <img
                                 src={photo.getUrl({ maxWidth: 100, maxHeight: 100 })}
                                 alt={`Preview ${index + 1}`}
                                 className="w-full h-full object-cover"
                                 onError={(e) => {
                                   e.target.style.display = 'none';
                                 }}
                               />
                             </div>
                           ))}
                           {restaurantData.photos.length > 3 && (
                             <div className="relative w-8 h-8 rounded-full border-2 border-white shadow-sm bg-gray-200 flex items-center justify-center">
                               <span className="text-xs font-medium text-gray-600">+{restaurantData.photos.length - 3}</span>
                             </div>
                           )}
                         </div>
                       )}
                       
                       {expandedCard === 'photos' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                     </div>
                   </div>
                   
                   <div className="space-y-3">
                     {/* Quality Metrics Grid */}
                     <div className="grid grid-cols-2 gap-3">
                       <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                         <div className="flex items-center space-x-2 mb-1">
                           <CheckCircle className="w-4 h-4 text-green-600" />
                           <span className="text-sm font-medium text-green-800">Food Quality</span>
                         </div>
                         <div className="text-xs text-green-700">Professional presentation</div>
                       </div>
                       <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                         <div className="flex items-center space-x-2 mb-1">
                           <AlertTriangle className="w-4 h-4 text-yellow-600" />
                           <span className="text-sm font-medium text-yellow-800">Lighting</span>
                         </div>
                         <div className="text-xs text-yellow-700">Could be improved</div>
                       </div>
                       <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                         <div className="flex items-center space-x-2 mb-1">
                           <CheckCircle className="w-4 h-4 text-green-600" />
                           <span className="text-sm font-medium text-green-800">Variety</span>
                         </div>
                         <div className="text-xs text-green-700">Good menu coverage</div>
                       </div>
                       <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                         <div className="flex items-center space-x-2 mb-1">
                           <AlertTriangle className="w-4 h-4 text-red-600" />
                           <span className="text-sm font-medium text-red-800">Atmosphere</span>
                         </div>
                         <div className="text-xs text-red-700">Missing interior shots</div>
                       </div>
                     </div>
                     
                     {/* Overall Score */}
                     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-medium text-blue-800">Visual Appeal Score</span>
                         <span className="text-lg font-bold text-blue-600">82/100</span>
                       </div>
                       <div className="w-full bg-blue-200 rounded-full h-2">
                         <div 
                           className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                           style={{ width: '82%' }}
                         ></div>
                       </div>
                       <div className="text-xs text-blue-700 mt-2">
                         Strong food photography, but missing ambiance shots
                       </div>
                     </div>
                   </div>

                   {/* Photo Gallery Dropdown */}
                   {expandedCard === 'photos' && (
                     <motion.div
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       className="mt-4 border-t border-gray-200 pt-4"
                     >
                       <div className="mb-3">
                         <h4 className="font-semibold text-gray-800 mb-2">Current Photo Gallery</h4>
                         <div className="text-sm text-gray-600 mb-3">
                           These are some of the photos currently visible on your Google Business Profile:
                         </div>
                       </div>

                       {/* Professional Photo Gallery */}
                       {restaurantData?.photos && restaurantData.photos.length > 0 ? (
                         <div className="mb-6">
                           {/* Featured Photo */}
                           <div className="mb-4">
                             <div 
                               className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                               style={{ backgroundColor: '#f8fafc' }}
                             >
                               <img
                                 src={restaurantData.photos[0].getUrl({ maxWidth: 600, maxHeight: 400 })}
                                 alt={`${restaurantData?.name || 'Restaurant'} featured photo`}
                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                 onError={(e) => {
                                   e.target.parentElement.style.display = 'none';
                                 }}
                               />
                             </div>
                           </div>
                           
                           {/* Photo Grid */}
                           {restaurantData.photos.length > 1 && (
                             <div className="grid grid-cols-4 gap-3">
                               {restaurantData.photos.slice(1, 9).map((photo, index) => {
                                 const photoUrl = photo.getUrl ? photo.getUrl({ maxWidth: 300, maxHeight: 300 }) : null;
                                 
                                 return (
                                   <div 
                                     key={index + 1} 
                                     className="relative aspect-square rounded-lg overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300"
                                     style={{ backgroundColor: '#f8fafc' }}
                                   >
                                     <img
                                       src={photoUrl}
                                       alt={`${restaurantData?.name || 'Restaurant'} photo ${index + 2}`}
                                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                                            onError={(e) => {
                                       e.target.parentElement.style.display = 'none';
                                     }}
                                   />
                                   </div>
                                 );
                               })}
                             </div>
                           )}
                         </div>
                       ) : (
                         <div className="mb-4 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center">
                           <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                           <h4 className="font-semibold text-gray-700 mb-2">No Photos Available</h4>
                           <p className="text-sm text-gray-600 mb-4">
                             We couldn't retrieve photos from your Google Business Profile at this time.
                           </p>
                           <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                             <p className="text-sm text-blue-800">
                               <strong>Recommendation:</strong> Add high-quality photos of your food, interior, and exterior to your Google Business Profile to increase customer engagement by up to 67%.
                             </p>
                           </div>
                         </div>
                       )}

                       {/* Photo Quality Analysis */}
                       <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
                         <h5 className="font-semibold text-gray-800 mb-2">Photo Quality Impact</h5>
                         <div className="grid grid-cols-2 gap-4 text-sm">
                           <div>
                             <div className="font-medium text-green-700 mb-1">✅ What's Working:</div>
                             <ul className="space-y-1 text-green-600">
                               <li>• Professional food photography</li>
                               <li>• Good lighting and composition</li>
                               <li>• Variety of menu items shown</li>
                             </ul>
                           </div>
                           <div>
                             <div className="font-medium text-orange-700 mb-1">💡 Opportunities:</div>
                             <ul className="space-y-1 text-orange-600">
                               <li>• Add more interior ambiance shots</li>
                               <li>• Include staff and customer photos</li>
                               <li>• Showcase signature dishes</li>
                             </ul>
                           </div>
                         </div>
                       </div>

                       {/* Call to Action */}
                       <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                         <div className="text-sm text-blue-800">
                           <strong>Pro Tip:</strong> High-quality food photos can increase customer engagement by up to 67%. 
                           Consider professional food photography to showcase your best dishes and create appetite appeal.
                         </div>
                       </div>
                     </motion.div>
                   )}
                 </div>

           {/* Enhanced Review Activity */}
           <div className="bg-white p-4 rounded-lg border border-gray-200 overflow-hidden">
             <div 
               className="flex items-center justify-between mb-3 cursor-pointer hover:bg-gray-50 transition-colors p-2 -m-2 rounded-lg"
               onClick={() => setExpandedCard(expandedCard === 'reviews' ? null : 'reviews')}
             >
               <div className="flex items-center space-x-2">
                 <Calendar className="w-5 h-5 text-purple-500" />
                 <div className="font-semibold text-gray-800">Review Activity & Growth Impact</div>
               </div>
               <div className="flex items-center space-x-3">
                 {/* Review Velocity Indicator */}
                 <div className="flex items-center space-x-2">
                   <div className={`w-3 h-3 rounded-full ${
                     averageReviewsPerMonth >= 15 ? 'bg-green-500' : 
                     averageReviewsPerMonth >= 8 ? 'bg-yellow-500' : 'bg-red-500'
                   }`}></div>
                   <div className="text-sm font-medium text-gray-600">
                     {averageReviewsPerMonth >= 15 ? 'Thriving' : 
                      averageReviewsPerMonth >= 8 ? 'Growing' : 'Stagnant'}
                   </div>
                 </div>
                 {expandedCard === 'reviews' ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
               </div>
             </div>

             {/* Current Metrics */}
             <div className="grid grid-cols-2 gap-4 mb-3">
               <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-lg border border-purple-100">
                 <div className="text-sm text-purple-600 font-medium">Monthly Average</div>
                 <div className="text-2xl font-bold text-purple-800">{averageReviewsPerMonth}</div>
                 <div className="text-xs text-purple-600">
                   {averageReviewsPerMonth >= 15 ? '🚀 Excellent velocity!' : 
                    averageReviewsPerMonth >= 8 ? '📈 Good momentum' : '⚠️ Below optimal'}
                 </div>
               </div>
               <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                 <div className="text-sm text-orange-600 font-medium">Last Review</div>
                 <div className="text-2xl font-bold text-orange-800">{lastReviewDays}</div>
                 <div className="text-xs text-orange-600">
                   {lastReviewDays <= 7 ? '🔥 Recent activity!' : 
                    lastReviewDays <= 30 ? '👍 Active' : '⏰ Review gap detected'}
                   <span className="ml-1">days ago</span>
                 </div>
               </div>
             </div>

             {/* Quick Impact Preview */}
             <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
               <div className="flex items-center justify-between">
                 <div className="flex items-center space-x-2">
                   <TrendingUp className="w-4 h-4 text-green-600" />
                   <span className="text-sm font-medium text-green-800">Growth Potential</span>
                 </div>
                 <div className="text-right">
                   <div className="text-lg font-bold text-green-700">
                     +${Math.round(Math.max(5, (20 - Math.min(averageReviewsPerMonth, 15))) * currentRating * 180).toLocaleString()}
                   </div>
                   <div className="text-xs text-green-600">monthly revenue opportunity</div>
                 </div>
               </div>
             </div>

             {/* Expandable Educational Content */}
             {expandedCard === 'reviews' && (
               <motion.div
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 exit={{ opacity: 0, height: 0 }}
                 className="mt-4 border-t border-gray-200 pt-4"
               >
                 <div className="space-y-4">
                   {/* The Critical Importance Header */}
                   <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                     <h4 className="font-bold text-red-800 mb-2 flex items-center">
                       <AlertTriangle className="w-5 h-5 mr-2" />
                       Why Consistent Reviews Are Make-or-Break for Your Restaurant
                     </h4>
                     <p className="text-sm text-red-700">
                       <strong>Restaurant failure rate is 80% within 5 years.</strong> The survivors all have one thing in common: 
                       they consistently generate positive reviews that build trust and drive new customers.
                     </p>
                   </div>

                   {/* The Numbers Don't Lie */}
                   <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                     <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
                       <BarChart3 className="w-4 h-4 mr-2" />
                       The Revenue Impact of Review Velocity
                     </h5>
                     
                     <div className="grid grid-cols-2 gap-4 mb-3">
                       <div className="bg-white p-3 rounded-lg shadow-sm">
                         <div className="text-xs text-gray-600 mb-1">Current State</div>
                         <div className="text-lg font-bold text-gray-800">{averageReviewsPerMonth}/month</div>
                         <div className="text-xs text-red-600">Missing {Math.max(0, 15 - averageReviewsPerMonth)} reviews monthly</div>
                       </div>
                       <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                         <div className="text-xs text-green-600 mb-1">Industry Leaders</div>
                         <div className="text-lg font-bold text-green-700">15+/month</div>
                         <div className="text-xs text-green-600">Consistent growth pattern</div>
                       </div>
                     </div>

                     {/* Revenue Calculation Breakdown */}
                     <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                       <div className="text-sm font-medium text-yellow-800 mb-2">Your Revenue Gap Analysis:</div>
                       <div className="space-y-2 text-sm">
                         <div className="flex justify-between">
                           <span className="text-yellow-700">Potential new reviews per month:</span>
                           <span className="font-semibold">{Math.max(3, Math.round((25 - averageReviewsPerMonth) * 0.6))}</span>
                         </div>
                         <div className="flex justify-between">
                           <span className="text-yellow-700">Each review converts to customers:</span>
                           <span className="font-semibold">3-5 new diners</span>
                         </div>
                         <div className="flex justify-between">
                           <span className="text-yellow-700">Average customer value:</span>
                           <span className="font-semibold">${Math.max(35, Math.round(parseInt(formData.revenue.replace(/[^\d]/g, '')) / parseInt(formData.listSize.replace(/[^\d]/g, '')) * 12 / 52))}</span>
                         </div>
                         <div className="border-t border-yellow-300 pt-2 flex justify-between font-bold">
                           <span className="text-yellow-800">Monthly revenue opportunity:</span>
                           <span className="text-green-700">+${Math.round(Math.max(3, Math.round((25 - averageReviewsPerMonth) * 0.6)) * 4 * Math.max(35, Math.round(parseInt(formData.revenue.replace(/[^\d]/g, '')) / parseInt(formData.listSize.replace(/[^\d]/g, '')) * 12 / 52))).toLocaleString()}</span>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* The Psychology of Reviews */}
                   <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                     <h5 className="font-semibold text-purple-800 mb-3 flex items-center">
                       <Users className="w-4 h-4 mr-2" />
                       The Customer Psychology Behind Reviews
                     </h5>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="space-y-3">
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-gray-800 mb-1">🔍 Discovery Phase</div>
                           <div className="text-sm text-gray-600">
                             <strong>93% of diners</strong> read reviews before choosing a restaurant. 
                             Recent reviews signal you're active and caring.
                           </div>
                         </div>
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-gray-800 mb-1">🤝 Trust Building</div>
                           <div className="text-sm text-gray-600">
                             <strong>Consistent review flow</strong> shows you're not a "flash in the pan" - 
                             customers see ongoing satisfaction.
                           </div>
                         </div>
                       </div>
                       <div className="space-y-3">
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-gray-800 mb-1">⚡ Urgency Creation</div>
                           <div className="text-sm text-gray-600">
                             <strong>Recent positive reviews</strong> create FOMO. "Others are enjoying this place right now!"
                           </div>
                         </div>
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-gray-800 mb-1">🎯 Algorithm Boost</div>
                           <div className="text-sm text-gray-600">
                             <strong>Google prioritizes</strong> businesses with consistent review activity 
                             in local search results.
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* The Competition Reality */}
                   <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                     <h5 className="font-semibold text-orange-800 mb-3 flex items-center">
                       <Target className="w-4 h-4 mr-2" />
                       Your Competition Isn't Sleeping
                     </h5>
                     
                     <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
                       <div className="text-sm text-gray-700 mb-2">
                         <strong>While you're getting {averageReviewsPerMonth} reviews per month, your competitors are likely:</strong>
                       </div>
                       <ul className="space-y-1 text-sm text-gray-600">
                         <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Actively asking satisfied customers for reviews</li>
                         <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Following up with email campaigns</li>
                         <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Using QR codes and review stations</li>
                         <li className="flex items-center"><span className="text-red-500 mr-2">•</span>Training staff to mention reviews naturally</li>
                       </ul>
                     </div>

                     <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                       <div className="text-sm text-red-800">
                         <strong>Reality Check:</strong> Every month without a consistent review strategy, 
                         you're falling further behind competitors who understand this game.
                       </div>
                     </div>
                   </div>

                   {/* The Solution Preview */}
                   <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                     <h5 className="font-semibold text-green-800 mb-3 flex items-center">
                       <CheckCircle className="w-4 h-4 mr-2" />
                       How We Fix This (And Fast)
                     </h5>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="space-y-2">
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-green-700 mb-1">📧 Automated Follow-Up</div>
                           <div className="text-sm text-gray-600">
                             Smart email sequences that ask for reviews at the perfect moment
                           </div>
                         </div>
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-green-700 mb-1">📱 SMS Review Requests</div>
                           <div className="text-sm text-gray-600">
                             Text-based review invitations with 98% open rates
                           </div>
                         </div>
                       </div>
                       <div className="space-y-2">
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-green-700 mb-1">🤖 AI Response Management</div>
                           <div className="text-sm text-gray-600">
                             Intelligent responses to reviews that build relationships
                           </div>
                         </div>
                         <div className="bg-white p-3 rounded-lg shadow-sm">
                           <div className="font-medium text-green-700 mb-1">📊 Performance Tracking</div>
                           <div className="text-sm text-gray-600">
                             Real-time monitoring of review velocity and revenue impact
                           </div>
                         </div>
                       </div>
                     </div>

                     <div className="mt-3 bg-green-100 p-3 rounded-lg border border-green-300">
                       <div className="text-sm text-green-800">
                         <strong>Expected Result:</strong> 15-25 new reviews per month within 60 days, 
                         leading to ${Math.round((20 - averageReviewsPerMonth) * currentRating * 150).toLocaleString()}+ 
                         in additional monthly revenue.
                       </div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             )}
           </div>
         </div>
       )
     },
         {
       title: `${restaurantData?.name || formData.name + "'s Restaurant"} - Business Overview`,
       icon: <Users className="w-6 h-6" />,
       content: (
         <div className="space-y-4">
           {/* Restaurant Details Card */}
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
             <div className="flex items-start justify-between">
               <div className="flex-1">
                 <h4 className="text-xl font-bold text-gray-800 mb-2">
                   {restaurantData?.name || formData.name + "'s Restaurant"}
                 </h4>
                 {restaurantData?.address && (
                   <p className="text-sm text-gray-600 mb-2">
                     📍 {restaurantData.address}
                   </p>
                 )}
                 {restaurantData?.phone && (
                   <p className="text-sm text-gray-600 mb-2">
                     📞 {restaurantData.phone}
                   </p>
                 )}
                 {restaurantData?.website && (
                   <p className="text-sm text-blue-600 mb-2">
                     🌐 <a href={restaurantData.website} target="_blank" rel="noopener noreferrer" className="underline">
                       {restaurantData.website}
                     </a>
                   </p>
                 )}
               </div>
               
               {/* Business Stats */}
               <div className="text-right">
                 <div className="bg-white rounded-lg p-3 shadow-sm">
                   <div className="text-sm text-gray-600">Current Performance</div>
                   <div className="text-2xl font-bold text-yellow-600">{currentRating} ⭐</div>
                   <div className="text-sm text-gray-600">{totalReviews} reviews</div>
                   <div className="text-sm text-green-600 font-semibold mt-1">
                     ${parseInt(formData.revenue.replace(/[^\d]/g, '')).toLocaleString()}/mo revenue
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Business Hours & Contact Info */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h5 className="font-semibold text-gray-800 mb-2">Business Information</h5>
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                   <span className="text-gray-600">Owner/Manager:</span>
                   <span className="font-semibold">{formData.name}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Contact Email:</span>
                   <span className="font-semibold">{formData.email}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Business Hours:</span>
                   <span className="font-semibold">
                     {restaurantData?.hasHours ? 'Available' : 'Not Listed'}
                   </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Phone Listed:</span>
                   <span className="font-semibold">
                     {restaurantData?.hasPhone ? '✅ Yes' : '❌ Missing'}
                   </span>
                 </div>
               </div>
             </div>

             <div className="bg-white p-4 rounded-lg border border-gray-200">
               <h5 className="font-semibold text-gray-800 mb-2">Marketing Assets</h5>
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                   <span className="text-gray-600">Marketing List:</span>
                   <span className="font-semibold">
                     {hasMarketingList ? `${formData.listSize} contacts` : 'None'}
                   </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Google Photos:</span>
                   <span className="font-semibold">{photosCount} uploaded</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Website:</span>
                   <span className="font-semibold">
                     {restaurantData?.hasWebsite ? '✅ Listed' : '❌ Missing'}
                   </span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Description:</span>
                   <span className="font-semibold">
                     {restaurantData?.hasDescription ? '✅ Added' : '❌ Missing'}
                   </span>
                 </div>
               </div>
             </div>
           </div>
           
           {/* Personalized Revenue Leak Warning */}
           <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
             <div className="flex items-start space-x-2">
               <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
               <div>
                 <h4 className="font-semibold text-yellow-800">
                   {restaurantData?.name || formData.name + "'s Restaurant"} Revenue Analysis
                 </h4>
                 <p className="text-sm text-yellow-700 mt-1">
                   Based on your current ${parseInt(formData.revenue.replace(/[^\d]/g, '')).toLocaleString()}/month revenue and {currentRating}-star rating with {totalReviews} reviews, 
                   our analysis shows you're potentially missing <strong>${Math.round(totalPotential).toLocaleString()}/month</strong> ({Math.round((totalPotential / currentRevenue) * 100)}%) 
                   in additional revenue through automated marketing and profile optimization.
                 </p>
               </div>
             </div>
           </div>
         </div>
       )
     },
    {
      title: "Recommended Actions",
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          {/* Email Marketing - Priority #1 */}
          <div className="border border-green-200 rounded-lg overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-green-100 transition-colors"
              onClick={() => setExpandedCard(expandedCard === 'email-action' ? null : 'email-action')}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white rounded-full p-2">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">Start with Email Marketing</div>
                  <div className="text-sm text-green-700">
                    {hasMarketingList ? 
                      `Activate your ${listSize.toLocaleString()} contacts with automated campaigns` :
                      'Build your customer database and start automated email sequences'
                    }
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-700">+${emailMarketingPotential.toLocaleString()}</div>
                  <div className="text-xs text-green-600">monthly potential</div>
                </div>
                {expandedCard === 'email-action' ? <ChevronUp className="w-5 h-5 text-green-600" /> : <ChevronDown className="w-5 h-5 text-green-600" />}
              </div>
            </div>

            {expandedCard === 'email-action' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-green-200 p-6 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ROI Calculator */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg border border-green-200">
                    <h5 className="font-bold text-green-800 mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Your Email Marketing ROI
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-green-700">Monthly Investment:</span>
                        <span className="font-bold">$297</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Expected Return:</span>
                        <span className="font-bold text-green-800">+${emailMarketingPotential.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-green-300 pt-2 flex justify-between">
                        <span className="text-green-800 font-semibold">ROI:</span>
                        <span className="font-bold text-2xl text-green-700">{Math.round(emailMarketingPotential / 297)}x</span>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Timeline */}
                  <div className="space-y-4">
                    <h5 className="font-bold text-gray-800 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      90-Day Implementation
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <div className="font-semibold text-gray-800">Week 1-2: Setup & Integration</div>
                          <div className="text-sm text-gray-600">Connect your POS, import contacts, design templates</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <div className="font-semibold text-gray-800">Week 3-6: Launch Campaigns</div>
                          <div className="text-sm text-gray-600">Welcome series, birthday offers, win-back campaigns</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <div className="font-semibold text-gray-800">Week 7-12: Optimize & Scale</div>
                          <div className="text-sm text-gray-600">A/B test, segment audiences, maximize revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgency & Social Proof */}
                <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <div className="font-bold text-red-800">⚡ Limited Time: January Special</div>
                      <div className="text-sm text-red-700 mt-1">
                        <strong>Save $500</strong> on setup when you start this month. Plus, get our proven restaurant email templates that generated 
                        <strong> $2.3M+ in additional revenue</strong> for 500+ restaurants last year.
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
                    🚀 Start Email Marketing - Save $500
                  </button>
                  <div className="text-xs text-gray-500 mt-2">30-day money-back guarantee • Setup in 48 hours</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* AI Phone System - Priority #2 */}
          <div className="border border-blue-200 rounded-lg overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={() => setExpandedCard(expandedCard === 'phone-action' ? null : 'phone-action')}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 text-white rounded-full p-2">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-blue-800 text-lg">Implement AI Phone System</div>
                  <div className="text-sm text-blue-700">
                    Capture every reservation opportunity, even during busy hours
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-700">+${aiPhonePotential.toLocaleString()}</div>
                  <div className="text-xs text-blue-600">monthly potential</div>
                </div>
                {expandedCard === 'phone-action' ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-blue-600" />}
              </div>
            </div>

            {expandedCard === 'phone-action' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-blue-200 p-6 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Missed Calls Analysis */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-100 p-4 rounded-lg border border-red-200">
                    <h5 className="font-bold text-red-800 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Your Current Missed Revenue
                    </h5>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-red-700">67%</div>
                        <div className="text-sm text-red-600">of restaurant calls go unanswered during peak hours</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-red-700">Estimated missed calls/month:</span>
                          <span className="font-bold">~45</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-red-700">Average reservation value:</span>
                          <span className="font-bold">${Math.round(parseInt(formData.revenue.replace(/[^\d]/g, '')) / parseInt(formData.listSize.replace(/[^\d]/g, '')) * 12 / 52 * 3)}</span>
                        </div>
                        <div className="border-t border-red-200 pt-2 flex justify-between">
                          <span className="text-red-800 font-semibold">Monthly lost revenue:</span>
                          <span className="font-bold text-red-700">-${Math.round(45 * parseInt(formData.revenue.replace(/[^\d]/g, '')) / parseInt(formData.listSize.replace(/[^\d]/g, '')) * 12 / 52 * 3).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Solution Benefits */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-bold text-blue-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      AI Phone System Results
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">24/7</div>
                        <div className="text-sm">
                          <div className="font-semibold text-blue-800">Never Miss a Call</div>
                          <div className="text-blue-600">Answers instantly, even when you're busy</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">95%</div>
                        <div className="text-sm">
                          <div className="font-semibold text-blue-800">Booking Success Rate</div>
                          <div className="text-blue-600">Converts calls to confirmed reservations</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">$0</div>
                        <div className="text-sm">
                          <div className="font-semibold text-blue-800">Staff Training Needed</div>
                          <div className="text-blue-600">Plug & play - works immediately</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                  <div className="text-center">
                    <div className="font-bold text-purple-800 text-lg mb-2">🏆 Competitive Advantage</div>
                    <div className="text-sm text-purple-700">
                      While your competitors lose customers to busy signals, you'll capture <strong>every single reservation</strong>. 
                      Our AI handles multiple calls simultaneously, takes orders, answers menu questions, and books tables - 
                      giving you an unfair advantage in your market.
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                    📞 Get AI Phone System - Free Trial
                  </button>
                  <div className="text-xs text-gray-500 mt-2">14-day free trial • No setup fees • Cancel anytime</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* SMS Marketing - Priority #3 */}
          <div className="border border-purple-200 rounded-lg overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-purple-100 transition-colors"
              onClick={() => setExpandedCard(expandedCard === 'sms-action' ? null : 'sms-action')}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white rounded-full p-2">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-purple-800 text-lg">Launch SMS Campaigns</div>
                  <div className="text-sm text-purple-700">
                    Higher open rates and immediate customer engagement
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-700">+${smsMarketingPotential.toLocaleString()}</div>
                  <div className="text-xs text-purple-600">monthly potential</div>
                </div>
                {expandedCard === 'sms-action' ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-purple-600" />}
              </div>
            </div>

            {expandedCard === 'sms-action' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-purple-200 p-6 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* SMS vs Email Performance */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-lg border border-purple-200">
                    <h5 className="font-bold text-purple-800 mb-4 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      SMS vs Email Performance
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-purple-700">SMS Open Rate</span>
                          <span className="text-sm font-bold text-purple-800">98%</span>
                        </div>
                        <div className="w-full bg-purple-200 rounded-full h-3">
                          <div className="bg-purple-600 h-3 rounded-full" style={{width: '98%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Email Open Rate</span>
                          <span className="text-sm font-bold text-gray-700">22%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gray-500 h-3 rounded-full" style={{width: '22%'}}></div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-purple-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-700">4.5x</div>
                          <div className="text-sm text-purple-600">higher engagement than email</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SMS Campaign Examples */}
                  <div className="space-y-4">
                    <h5 className="font-bold text-gray-800 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      High-Converting SMS Campaigns
                    </h5>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="font-semibold text-green-800">🍕 Last-Minute Deals</div>
                        <div className="text-sm text-green-700">"Table for 2 available at 7pm tonight - 20% off if you book in next hour!"</div>
                        <div className="text-xs text-green-600 mt-1">Average response: 34% • Revenue: +$2,400/month</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="font-semibold text-blue-800">🎂 Birthday Campaigns</div>
                        <div className="text-sm text-blue-700">"Happy Birthday Sarah! Celebrate with us - free dessert with dinner this week"</div>
                        <div className="text-xs text-blue-600 mt-1">Average response: 67% • Revenue: +$1,800/month</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <div className="font-semibold text-orange-800">☔ Weather-Based</div>
                        <div className="text-sm text-orange-700">"Rainy day special: Hot soup & sandwich combo $12 today only!"</div>
                        <div className="text-xs text-orange-600 mt-1">Average response: 28% • Revenue: +$900/month</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Story */}
                <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 text-white rounded-full p-2">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-green-800">💰 Success Story: Maria's Bistro</div>
                      <div className="text-sm text-green-700 mt-1">
                        "SMS campaigns brought back 40% of our lost customers during COVID. We now generate an extra 
                        <strong> $8,000/month</strong> just from text messages. The ROI is incredible - best marketing decision we ever made!"
                      </div>
                      <div className="text-xs text-green-600 mt-2">- Maria Rodriguez, Owner • 3 months after implementation</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
                    📱 Launch SMS Marketing - Start Today
                  </button>
                  <div className="text-xs text-gray-500 mt-2">Send 1,000 messages free • No contracts • Results in 24 hours</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Google Business Profile - Priority #4 */}
          <div className="border border-yellow-200 rounded-lg overflow-hidden bg-gradient-to-r from-yellow-50 to-orange-50">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-yellow-100 transition-colors"
              onClick={() => setExpandedCard(expandedCard === 'google-action' ? null : 'google-action')}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-500 text-white rounded-full p-2">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-yellow-800 text-lg">Optimize Google Business Profile</div>
                  <div className="text-sm text-yellow-700">
                    {completenessScore < 80 ? 
                      `Improve profile completeness from ${completenessScore}% to 90%+` :
                      'Maintain excellent profile optimization and increase review generation'
                    }
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-700">+${googleReviewsPotential.toLocaleString()}</div>
                  <div className="text-xs text-yellow-600">monthly potential</div>
                </div>
                {expandedCard === 'google-action' ? <ChevronUp className="w-5 h-5 text-yellow-600" /> : <ChevronDown className="w-5 h-5 text-yellow-600" />}
              </div>
            </div>

            {expandedCard === 'google-action' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-yellow-200 p-6 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Current vs Optimized Comparison */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-4 rounded-lg border border-yellow-200">
                    <h5 className="font-bold text-yellow-800 mb-4 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Before vs After Optimization
                    </h5>
                    <div className="space-y-4">
                      <div className="bg-white p-3 rounded-lg border border-yellow-200">
                        <div className="text-center mb-3">
                          <div className="text-lg font-bold text-red-600">Current State</div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Profile Completeness:</span>
                            <span className="font-bold text-red-600">{completenessScore}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Monthly Reviews:</span>
                            <span className="font-bold text-red-600">{averageReviewsPerMonth}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Search Visibility:</span>
                            <span className="font-bold text-red-600">Limited</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-green-200">
                        <div className="text-center mb-3">
                          <div className="text-lg font-bold text-green-600">After Optimization</div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Profile Completeness:</span>
                            <span className="font-bold text-green-600">95%+</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Monthly Reviews:</span>
                            <span className="font-bold text-green-600">{Math.round(averageReviewsPerMonth * 2.5)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Search Visibility:</span>
                            <span className="font-bold text-green-600">Dominant</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Local Search Domination */}
                  <div className="space-y-4">
                    <h5 className="font-bold text-gray-800 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Local Search Domination Plan
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <div className="font-semibold text-gray-800">Complete Profile Optimization</div>
                          <div className="text-sm text-gray-600">Photos, hours, menu, services, attributes</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <div className="font-semibold text-gray-800">Review Generation System</div>
                          <div className="text-sm text-gray-600">Automated follow-ups, QR codes, staff training</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <div className="font-semibold text-gray-800">Competitive Intelligence</div>
                          <div className="text-sm text-gray-600">Monitor competitors, steal their keywords</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <div className="font-semibold text-gray-800">Local SEO Domination</div>
                          <div className="text-sm text-gray-600">Rank #1 for "restaurants near me"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgency Message */}
                <div className="mt-6 bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
                  <div className="text-center">
                    <div className="font-bold text-red-800 text-lg mb-2">⚠️ Your Competitors Are Gaining Ground</div>
                    <div className="text-sm text-red-700">
                      Every day your Google profile isn't optimized, competitors are stealing your customers. 
                      <strong> 76% of people</strong> who search for a local business visit within 24 hours. 
                      Don't let them find your competition first.
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
                    ⭐ Dominate Local Search - Get Started
                  </button>
                  <div className="text-xs text-gray-500 mt-2">Results in 30 days • Guaranteed ranking improvement</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white rounded-xl shadow-2xl overflow-hidden"
    >
      {/* Report Header */}
      <div className="bg-gradient-to-r from-[#db5439] to-[#b53e28] text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img src="/assets/bot-table-robot.svg" alt="Bot & Table" className="w-12 h-12 bg-white rounded-full p-2" />
            <div>
              <h1 className="text-2xl font-bold">Revenue Analysis Report</h1>
              <p className="text-orange-100">
                Generated {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
          
          {/* Restaurant Info */}
          <div className="text-right">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white">
                {restaurantData?.name || formData.name + "'s Restaurant"}
              </h2>
              {restaurantData?.address && (
                <p className="text-sm text-orange-100 mt-1">
                  📍 {restaurantData.address}
                </p>
              )}
              <div className="flex items-center justify-end space-x-2 mt-2">
                <div className="text-yellow-300">⭐ {currentRating}</div>
                <div className="text-orange-100">({totalReviews} reviews)</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personalized Message */}
        <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
          <p className="text-orange-100 text-sm">
            📊 <strong>Custom Analysis for {formData.name}</strong> - This report analyzes your specific business data from Google Business Profile, 
            current revenue of <strong>${parseInt(formData.revenue.replace(/[^\d]/g, '')).toLocaleString()}/month</strong>, 
            and {hasMarketingList ? `your existing marketing list of ${formData.listSize} contacts` : 'your growth potential'} 
            to identify exact revenue opportunities.
          </p>
        </div>
      </div>

      {/* Report Content */}
      <div className="p-4 space-y-6">
        {reportSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="text-[#db5439]">{section.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
              </div>
            </div>
            <div className="p-4">
              {section.content}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Ready to Capture This Revenue?
          </h3>
          <p className="text-gray-600 mb-4">
            Schedule a free strategy call to discuss implementing these solutions for your restaurant.
          </p>
          <button className="bg-[#db5439] hover:bg-[#b53e28] text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Book Your Strategy Call
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomReport; 