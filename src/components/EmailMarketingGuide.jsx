import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import DemoBookingForm from './ui/DemoBookingForm';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail,
  TrendingUp,
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Zap
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const EmailMarketingGuide = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const InlineCTA = ({ variant, children }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'strategy' && 'Get Your Free Email Strategy →'}
            {variant === 'demo' && 'See Email Marketing in Action →'}
            {variant === 'call' && 'Book Your Free Strategy Call →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Article Header */}
      <header className="bg-gradient-to-br from-gray-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/resources" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full uppercase tracking-wide mb-4">
              Email Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Email Marketing Best Practices for Restaurants in 2025
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Master the art of email marketing to turn one-time diners into loyal customers and drive consistent revenue growth for your restaurant.
            </p>
          </div>

          <div className="flex items-center text-sm text-gray-600 space-x-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Bot & Table Team
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 2025
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12 min read
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center mt-8 space-x-4">
            <span className="text-sm font-medium text-gray-700">Share:</span>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/email-marketing.jpg" 
            alt="Email Marketing for Restaurants" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Key Takeaways */}
        <Card className="mb-12 border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-700">
              <CheckCircle className="w-5 h-5 mr-2" />
              Key Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Email marketing delivers $36 ROI for every $1 spent - the highest of any digital channel
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Personalized campaigns increase customer retention by 68% and order values by 17%
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Automated email sequences convert 40x better than social media marketing
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Strategic segmentation and timing are crucial for restaurant email success
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            In 2025, email marketing remains the most powerful tool for restaurants to build lasting customer relationships and drive consistent revenue. While social media algorithms change and paid advertising costs soar, your email list is an asset you own completely.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Email Marketing Works for Restaurants</h2>
          
          <p className="text-gray-700 mb-6">
            The restaurant industry is uniquely positioned to benefit from email marketing. Unlike other businesses, restaurants create emotional experiences and memories. Email allows you to nurture these connections and turn them into repeat visits.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">$36 ROI</h3>
              <p className="text-sm text-gray-600">Average return for every $1 spent on email marketing</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">68% Higher</h3>
              <p className="text-sm text-gray-600">Customer retention rate with personalized emails</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">40x Better</h3>
              <p className="text-sm text-gray-600">Conversion rate compared to social media</p>
            </Card>
          </div>

          <InlineCTA variant="strategy">
            Ready to see these results for your restaurant? Get a custom email marketing strategy designed for your specific needs.
          </InlineCTA>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Email Campaign Types for Restaurants</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Welcome Series</h3>
          <p className="text-gray-700 mb-4">
            Your welcome series is your first impression with new customers. This 3-5 email sequence should introduce your restaurant's story, showcase your best dishes, and provide a compelling reason to return.
          </p>
          
          <Card className="my-6 bg-gray-50">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Welcome Series Example:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Email 1:</strong> "Welcome to Mario's Family" + 20% off next visit</li>
                <li><strong>Email 2:</strong> "Our Story" + behind-the-scenes video</li>
                <li><strong>Email 3:</strong> "Customer Favorites" + menu highlights</li>
                <li><strong>Email 4:</strong> "Join Our Loyalty Program" + exclusive perks</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Birthday & Anniversary Campaigns</h3>
          <p className="text-gray-700 mb-4">
            Personal celebrations are perfect opportunities to bring customers back. Birthday emails have an average open rate of 89% and drive significantly higher spending than regular promotions.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Win-Back Campaigns</h3>
          <p className="text-gray-700 mb-4">
            Target customers who haven't visited in 60-90 days with compelling offers and nostalgic messaging. These campaigns typically achieve 34% reactivation rates when done correctly.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Seasonal & Event Promotions</h3>
          <p className="text-gray-700 mb-4">
            Capitalize on holidays, local events, and seasonal menu changes. These campaigns create urgency and give customers a reason to visit now rather than later.
          </p>

          <InlineCTA variant="demo">
            Want to see these campaigns in action? Book a demo to see real examples from successful restaurants.
          </InlineCTA>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Segmentation Strategies</h2>

          <p className="text-gray-700 mb-6">
            Generic "blast" emails are dead. Modern email marketing success depends on smart segmentation that delivers the right message to the right customer at the right time.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Behavioral Segmentation</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>New Customers:</strong> Focus on welcome sequences and second visit incentives</li>
            <li><strong>Regular Customers:</strong> Loyalty rewards and exclusive previews</li>
            <li><strong>VIP Customers:</strong> Premium experiences and early access to events</li>
            <li><strong>Lapsed Customers:</strong> Win-back campaigns with strong incentives</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Preference-Based Segmentation</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Dietary Preferences:</strong> Vegetarian, vegan, gluten-free options</li>
            <li><strong>Dining Occasions:</strong> Date nights, family meals, business lunches</li>
            <li><strong>Price Sensitivity:</strong> Value seekers vs. premium experience seekers</li>
            <li><strong>Communication Frequency:</strong> Weekly updates vs. special occasions only</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Timing and Frequency Best Practices</h2>

          <p className="text-gray-700 mb-6">
            When you send emails is just as important as what you send. Restaurant email timing should align with dining patterns and decision-making cycles.
          </p>

          <Card className="my-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-600" />
                Optimal Send Times for Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Lunch Promotions</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Tuesday-Thursday</li>
                    <li>• 9:00-10:30 AM</li>
                    <li>• Target office workers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Dinner Reservations</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Tuesday-Friday</li>
                    <li>• 2:00-4:00 PM</li>
                    <li>• Plan ahead audience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Weekend Specials</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Wednesday-Thursday</li>
                    <li>• 11:00 AM-1:00 PM</li>
                    <li>• Weekend planners</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Event Invitations</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 2-3 weeks ahead</li>
                    <li>• Follow up 3 days before</li>
                    <li>• Final reminder day-of</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Design and Content Best Practices</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mobile-First Design</h3>
          <p className="text-gray-700 mb-4">
            Over 70% of restaurant emails are opened on mobile devices. Your emails must look perfect on smartphones with clear calls-to-action and easy-to-tap buttons.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Visual Storytelling</h3>
          <p className="text-gray-700 mb-4">
            Restaurants are visual businesses. Use high-quality food photography, behind-the-scenes content, and staff spotlights to create emotional connections with your audience.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Compelling Subject Lines</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Keep it under 50 characters for mobile optimization</li>
            <li>Create urgency with time-sensitive offers</li>
            <li>Use personalization when appropriate</li>
            <li>A/B test different approaches consistently</li>
          </ul>

          <InlineCTA variant="call">
            Ready to implement these strategies? Book a free consultation to create your custom email marketing plan.
          </InlineCTA>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Success: Key Metrics for Restaurants</h2>

          <p className="text-gray-700 mb-6">
            Track the right metrics to understand your email marketing performance and optimize for better results.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Primary Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Open Rate</span>
                    <span className="font-semibold">18-25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Click Rate</span>
                    <span className="font-semibold">2-5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion Rate</span>
                    <span className="font-semibold">1-3%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Unsubscribe Rate</span>
                    <span className="font-semibold">&lt;0.5%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Revenue per Email</span>
                    <span className="font-semibold">$0.50-2.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Customer Lifetime Value</span>
                    <span className="font-semibold">+25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Return on Investment</span>
                    <span className="font-semibold">$36:$1</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Repeat Visit Rate</span>
                    <span className="font-semibold">+40%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Mistakes to Avoid</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Email Marketing Pitfalls</h3>
            <ul className="space-y-2 text-red-700">
              <li>• Sending the same email to your entire list</li>
              <li>• Focusing only on promotions and discounts</li>
              <li>• Ignoring mobile optimization</li>
              <li>• Not testing subject lines and send times</li>
              <li>• Forgetting to include clear calls-to-action</li>
              <li>• Overwhelming customers with too many emails</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started: Your 30-Day Action Plan</h2>

          <Card className="my-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-600" />
                Week 1: Foundation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Choose an email marketing platform</li>
                <li>✓ Set up your account and branding</li>
                <li>✓ Create opt-in forms for your website</li>
                <li>✓ Plan your welcome series</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="my-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                Week 2: Content Creation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Write your welcome email sequence</li>
                <li>✓ Design email templates</li>
                <li>✓ Create customer segments</li>
                <li>✓ Plan your first month of campaigns</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="my-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                Week 3: List Building
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Launch opt-in forms on your website</li>
                <li>✓ Train staff to collect email addresses</li>
                <li>✓ Create lead magnets (menu, coupons)</li>
                <li>✓ Import existing customer data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="my-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                Week 4: Launch & Optimize
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Send your first campaigns</li>
                <li>✓ Monitor performance metrics</li>
                <li>✓ A/B test subject lines</li>
                <li>✓ Plan next month's strategy</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of Restaurant Email Marketing</h2>

          <p className="text-gray-700 mb-6">
            As we move through 2025, email marketing continues to evolve with new technologies and customer expectations. AI-powered personalization, interactive emails, and deeper integration with restaurant technology will drive even better results.
          </p>

          <p className="text-gray-700 mb-8">
            The restaurants that succeed will be those that view email marketing not as a promotional tool, but as a relationship-building platform that creates genuine connections with their customers.
          </p>

          <InlineCTA variant="call">
            Ready to transform your restaurant's email marketing? Let's create a custom strategy that drives real results for your business.
          </InlineCTA>
        </div>
      </article>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't let your competitors get ahead. Start building your email marketing system today and watch your customer relationships and revenue grow.
          </p>
          <Link to="/funnel">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              Get Your Free Email Marketing Strategy
            </Button>
          </Link>
        </div>
      </section>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default EmailMarketingGuide; 