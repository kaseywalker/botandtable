import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
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
  Star,
  TrendingUp,
  Phone,
  Mail,
  Download,
  CheckCircle,
  AlertTriangle,
  Users,
  Award,
  BarChart3,
  Target,
  Zap,
  Calculator,
  QrCode,
  MessageSquare,
  Camera,
  ThumbsUp
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const GoogleReviewsStrategies = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // SEO optimization
    document.title = "10 Proven Strategies to Get More Google Reviews for Your Restaurant | Bot and Table";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Learn 10 proven strategies to generate more Google Reviews for your restaurant. Increase your online reputation and drive more customers with these expert tactics.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', '10 Proven Strategies to Get More Google Reviews for Your Restaurant');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Master Google Review generation with 10 proven strategies that successful restaurants use to dramatically increase their review volume and ratings.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }

    // Schema markup for article
    const schemaScript = document.getElementById('article-schema') || document.createElement('script');
    schemaScript.id = 'article-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "10 Proven Strategies to Get More Google Reviews for Your Restaurant",
      "description": "Learn 10 proven strategies to generate more Google Reviews for your restaurant. Increase your online reputation and drive more customers with these expert tactics.",
      "author": {
        "@type": "Organization",
        "name": "Bot and Table"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bot and Table",
        "logo": {
          "@type": "ImageObject",
          "url": "/src/assets/bot-table-logo.png"
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
    if (!document.getElementById('article-schema')) {
      document.head.appendChild(schemaScript);
    }

    return () => {
      // Cleanup on unmount
      document.title = "Bot and Table - AI-Powered Restaurant Marketing";
    };
  }, []);

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

  // Inline CTA Components
  const InlineCTA = ({ variant, children }) => (
    <div className="my-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">{children}</p>
        <Link to="/funnel">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all">
            {variant === 'consultation' && 'Book Your Free Consultation →'}
            {variant === 'toolkit' && 'Download Free Toolkit →'}
            {variant === 'calculator' && 'Calculate Your Potential →'}
            {variant === 'demo' && 'Book a Demo →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  // Strategy Box Component
  const StrategyBox = ({ number, title, icon: Icon, description, keyPoints }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
      <div className="flex items-start space-x-4 mb-6">
        <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <Icon className="w-6 h-6 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{description}</p>
          {keyPoints && (
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  // Statistics Component
  const StatBox = ({ number, label, description, color = "orange" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-orange-600 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/resources" className="hover:text-orange-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">10 Proven Strategies to Get More Google Reviews</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  Google Reviews
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                10 Proven Strategies to Get More Google Reviews for Your Restaurant
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Learn the most effective methods to encourage customers to leave positive reviews and boost your online reputation with these battle-tested strategies.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>By Bot and Table</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-12">
              <div className="aspect-video rounded-xl overflow-hidden relative">
                <img 
                  src="/google-maps-phone.jpg.jpg"
                  alt="Google Maps showing restaurant listing with reviews and ratings on mobile phone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 to-blue-900/60"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <Star className="w-6 h-6 mr-2 text-orange-400" />
                      <span className="text-sm font-semibold">GOOGLE REVIEWS MASTERY</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Transform Your Online Reputation</h3>
                    <p className="text-gray-200">10 proven strategies that successful restaurants use to generate 3X more positive reviews.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  In today's digital landscape, your restaurant's success isn't just measured by the quality of your food or the warmth of your service—it's increasingly determined by what customers say about you online. Google Reviews have become the modern equivalent of word-of-mouth recommendations, with the power to make or break a restaurant's reputation and directly impact its bottom line.
                </p>

                <div className="bg-blue-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">The Power of Google Reviews</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <StatBox 
                      number="88%" 
                      label="of Diners" 
                      description="Consider Google reviews a top factor when selecting restaurants"
                      color="blue"
                    />
                    <StatBox 
                      number="94%" 
                      label="of Diners" 
                      description="Base their dining decisions on online reviews"
                      color="green"
                    />
                    <StatBox 
                      number="5-9%" 
                      label="Revenue Increase" 
                      description="For every one-star increase in Google rating"
                      color="orange"
                    />
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The challenge facing most restaurant owners isn't understanding the importance of Google Reviews—it's knowing how to systematically generate more positive reviews while managing the inevitable negative feedback that comes with serving the public. This comprehensive guide will provide you with ten proven strategies that successful restaurants use to dramatically increase their Google Review volume while maintaining high ratings.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  At Bot and Table, we've worked with over 500 restaurants to implement these exact strategies through our comprehensive reputation management platform. We've seen firsthand how the right approach to Google Reviews can transform a struggling restaurant into a thriving business.
                </p>
              </section>

              <InlineCTA variant="consultation">
                Ready to transform your restaurant's online reputation?
              </InlineCTA>

              {/* Psychology Foundation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Foundation: Understanding Google Reviews Psychology</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Before diving into specific strategies, it's crucial to understand the psychology behind why customers leave reviews and what motivates them to take action. This understanding forms the foundation of every successful review generation strategy.
                </p>

                <div className="bg-red-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-red-800 mb-6">The Review Imbalance Problem</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">5-10%</div>
                      <div className="text-sm text-gray-600 mb-4">Satisfied customers who leave reviews naturally</div>
                      <div className="bg-green-100 p-4 rounded-lg">
                        <p className="text-green-800 text-sm">Happy customers assume their experience is normal and don't feel compelled to share it.</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">30-50%</div>
                      <div className="text-sm text-gray-600 mb-4">Dissatisfied customers who actively leave reviews</div>
                      <div className="bg-red-100 p-4 rounded-lg">
                        <p className="text-red-800 text-sm">Unhappy customers are naturally motivated to share their negative experiences.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  This natural imbalance means that without a proactive strategy, your online reputation will inevitably skew negative, regardless of how well you actually serve your customers. The strategies that follow are all designed to create systems that make it easy and natural for satisfied customers to share their positive experiences.
                </p>
              </section>

              {/* Strategy 1 */}
              <StrategyBox 
                number="1"
                title="Perfect the Art of the Personal Ask"
                icon={Users}
                description="The most effective way to generate Google Reviews is asking satisfied customers directly. However, there's a significant difference between a generic request and a personalized ask that feels natural and genuine."
                keyPoints={[
                  "Time the ask when customers are clearly satisfied and relaxed",
                  "Reference specific aspects of their experience (dishes, service, occasion)",
                  "Train staff to recognize signs of customer satisfaction",
                  "Frame requests as helping other food lovers discover your restaurant",
                  "Make the request feel like natural customer service, not a burden"
                ]}
              />

              {/* Strategy 2 */}
              <StrategyBox 
                number="2"
                title="Implement Strategic QR Code Placement"
                icon={QrCode}
                description="QR codes have experienced a renaissance post-pandemic. Strategic placement creates multiple opportunities for customers to leave reviews without being intrusive or overwhelming."
                keyPoints={[
                  "Place QR codes on table tents where customers naturally pause",
                  "Include codes on receipts with appreciative messaging",
                  "Position exit codes near the host stand or door",
                  "Use clear, scannable designs with simple instructions",
                  "Test codes regularly to ensure they work properly",
                  "Create different codes for different locations to track effectiveness"
                ]}
              />

              <InlineCTA variant="toolkit">
                Download our complete QR code template toolkit
              </InlineCTA>

              {/* Strategy 3 */}
              <StrategyBox 
                number="3"
                title="Master the Follow-Up Text Message System"
                icon={MessageSquare}
                description="Text message follow-ups have significantly higher response rates than email. Success depends on timing, personalized messaging, and compliance with customer preferences."
                keyPoints={[
                  "Send messages 2-4 hours after dining when experience is fresh",
                  "Reference specific details from their visit (dishes, server, occasion)",
                  "Include direct links to your Google Review page",
                  "Obtain explicit consent and provide clear opt-out instructions",
                  "Keep messages concise but warm and personal",
                  "Limit follow-ups to avoid becoming annoying"
                ]}
              />

              {/* Strategy 4 */}
              <StrategyBox 
                number="4"
                title="Create Memorable Moments Worth Reviewing"
                icon={Award}
                description="Exceptional experiences naturally generate positive reviews. Creating memorable moments requires intentional effort to exceed customer expectations in genuine ways."
                keyPoints={[
                  "Understand what your customers value most about dining experiences",
                  "Implement surprise and delight tactics that feel authentic",
                  "Empower staff to exceed expectations without management approval",
                  "Personalize experiences by remembering preferences and occasions",
                  "Focus on food presentation that creates 'wow' moments",
                  "Turn problem resolution into positive experiences"
                ]}
              />

              {/* Strategy 5 */}
              <StrategyBox 
                number="5"
                title="Optimize Your Google Business Profile"
                icon={Target}
                description="Your Google Business Profile serves as the foundation for all review generation efforts. Proper optimization significantly increases both review volume and quality."
                keyPoints={[
                  "Ensure all business information is complete and accurate",
                  "Upload high-quality photos of food, interior, and staff",
                  "Use the 'Ask for Reviews' feature to generate direct links",
                  "Post regular updates about menu items and events",
                  "Respond to all reviews promptly and professionally",
                  "Keep menu information current with accurate pricing"
                ]}
              />

              <InlineCTA variant="calculator">
                Calculate how many reviews your restaurant should have
              </InlineCTA>

              {/* Strategy 6 */}
              <StrategyBox 
                number="6"
                title="Leverage Email Marketing for Review Requests"
                icon={Mail}
                description="Email marketing offers detailed, personalized messages with rich content and multiple calls-to-action. Success requires careful attention to timing and segmentation."
                keyPoints={[
                  "Send emails 24-48 hours after dining experience",
                  "Segment customers based on experience type and behavior",
                  "Use personal, appreciative subject lines that avoid spam filters",
                  "Include visual elements and photos from their experience",
                  "Make review buttons prominent with contrasting colors",
                  "A/B test different elements to optimize performance"
                ]}
              />

              {/* Strategy 7 */}
              <StrategyBox 
                number="7"
                title="Train Your Staff to Be Review Generation Champions"
                icon={ThumbsUp}
                description="Your staff are your most powerful assets for generating reviews through direct, personal interactions. Success requires comprehensive training and ongoing support."
                keyPoints={[
                  "Help staff understand how reviews impact restaurant success",
                  "Train them to recognize signs of customer satisfaction",
                  "Provide specific language and approaches for making requests",
                  "Empower staff to create memorable experiences naturally",
                  "Incentivize participation while avoiding customer pressure",
                  "Monitor and provide feedback to improve techniques over time"
                ]}
              />

              {/* Strategy 8 */}
              <StrategyBox 
                number="8"
                title="Implement Strategic Social Media Integration"
                icon={Camera}
                description="Social media platforms provide powerful opportunities to encourage Google Reviews while building broader online engagement with visual and interactive content."
                keyPoints={[
                  "Showcase satisfied customers and encourage others to share experiences",
                  "Create user-generated content campaigns with branded hashtags",
                  "Use Instagram and Facebook Stories for direct review requests",
                  "Incorporate review generation into contests and giveaways",
                  "Partner with local influencers to amplify review requests",
                  "Monitor social media for customers already talking about your restaurant"
                ]}
              />

              {/* Strategy 9 */}
              <StrategyBox 
                number="9"
                title="Create a Systematic Review Response Strategy"
                icon={MessageSquare}
                description="How you respond to reviews significantly impacts your ability to generate future reviews. A systematic approach demonstrates professionalism and encourages additional feedback."
                keyPoints={[
                  "Respond to all reviews within 24-48 hours when possible",
                  "Personalize responses by referencing specific review details",
                  "Maintain professional tone even with negative reviews",
                  "Use responses to highlight your restaurant's strengths",
                  "Address negative reviews constructively and offer private resolution",
                  "Encourage additional engagement through your responses"
                ]}
              />

              <InlineCTA variant="demo">
                See how Bot and Table automates review responses
              </InlineCTA>

              {/* Strategy 10 */}
              <StrategyBox 
                number="10"
                title="Leverage Technology and Automation for Scale"
                icon={Zap}
                description="While personal touches are crucial, technology and automation help you scale efforts and ensure consistency. The key is enhancing rather than replacing human connection."
                keyPoints={[
                  "Implement automated text message systems triggered by customer actions",
                  "Use CRM systems to track review generation efforts and responses",
                  "Integrate with POS systems to capture customer information automatically",
                  "Deploy review monitoring tools for immediate response alerts",
                  "Utilize analytics to identify most effective strategies",
                  "Maintain the human element that makes requests feel genuine"
                ]}
              />

              {/* Measuring Success */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Measuring Success and Optimizing Your Strategy</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Implementing these strategies is just the beginning. To achieve long-term success, you need to consistently measure results, identify what works best for your restaurant, and continuously optimize your approach.
                </p>

                <div className="bg-green-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-green-800 mb-6">Key Metrics to Track</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-6 h-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-800">Review Volume</h4>
                          <p className="text-green-700 text-sm">Track monthly and quarterly trends</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-800">Review Velocity</h4>
                          <p className="text-green-700 text-sm">Rate of accumulating new reviews</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Star className="w-6 h-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-800">Average Rating Trends</h4>
                          <p className="text-green-700 text-sm">Monitor rating changes over time</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-800">Review Quality</h4>
                          <p className="text-green-700 text-sm">Detail and specificity of content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Most successful restaurants aim to receive at least 10-15 new Google Reviews per month, though this varies based on restaurant size and customer volume. The key is establishing a baseline and working to improve consistently.
                </p>
              </section>

              {/* Bot and Table Advantage */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Bot and Table Advantage: Automating Your Review Success</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  While implementing these strategies manually can improve your Google Review generation, the most successful restaurants leverage technology platforms that automate and optimize these processes while maintaining the personal touch that makes review requests effective.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Comprehensive Platform Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Automated Review Requests</h4>
                          <p className="text-blue-700 text-sm">Personalized text and email messages sent at optimal times</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Target className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Smart Customer Filtering</h4>
                          <p className="text-blue-700 text-sm">AI identifies satisfied customers to protect your reputation</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Real-Time Analytics</h4>
                          <p className="text-blue-700 text-sm">Comprehensive dashboard with performance insights</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Complete Integration</h4>
                          <p className="text-blue-700 text-sm">Works with phone, SMS, email, and social media systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>Building a Sustainable Review Generation System</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Generating more Google Reviews isn't about implementing a single tactic—it's about building a comprehensive, sustainable system that consistently encourages satisfied customers to share their positive experiences. The ten strategies in this guide provide a framework for creating that system.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">Key Insight</h4>
                      <p className="text-yellow-700">
                        Authentic positive reviews can only be generated through authentic positive experiences. All the technology and strategy in the world can't compensate for poor food quality or inadequate service.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The most important insight is that satisfied customers don't naturally think to leave reviews. Without proactive strategies, your online reputation will skew negative regardless of how well you serve customers. The key is implementing multiple strategies that work together to create numerous opportunities for satisfied customers to leave reviews.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Remember that Google Reviews aren't just about online reputation—they're about building genuine relationships with customers and creating a community of advocates who actively promote your restaurant. When you focus on providing exceptional experiences and making it easy for satisfied customers to share those experiences, positive reviews become a natural byproduct of excellent restaurant operations.
                </p>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/articles/why-best-customers-never-leave-reviews" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/google-review.jpg" alt="Why Best Customers Never Leave Reviews" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)
                        </h3>
                        <p className="text-gray-600 text-sm">The psychology behind the review paradox that's killing great restaurants—and the AI-powered solution that captures 300% more positive reviews.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/turning-angry-customers-into-advocates" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/restaurant-owner.jpg" alt="Turning Angry Customers Into Advocates" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates
                        </h3>
                        <p className="text-gray-600 text-sm">The counterintuitive strategy that transforms your biggest complaints into your most valuable customers—and builds an unshakeable reputation in the process.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/email-marketing-best-practices-2025" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/email-marketing.jpg" alt="Email Marketing Guide" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Email Marketing Best Practices for Restaurants in 2025
                        </h3>
                        <p className="text-gray-600 text-sm">Master the email marketing strategies that deliver $36 ROI, increase repeat customers by 70%, and automate your restaurant's marketing success.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>

            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Primary Lead Capture */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">Get Your Free Review Strategy</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Download our complete toolkit with templates, checklists, and implementation guides for all 10 strategies.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Restaurant Name" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Current Google Rating" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Email Address" type="email" className="border-orange-200" />
                    </div>
                    <div>
                      <Input placeholder="Phone Number" className="border-orange-200" />
                    </div>
                    <Link to="/funnel">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Download Free Toolkit
                      </Button>
                    </Link>
                  </form>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Join 500+ restaurants using our strategies
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Average Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-semibold text-green-800">+312%</div>
                      <div className="text-sm text-green-700">More Reviews Generated</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">+1.2 Stars</div>
                      <div className="text-sm text-blue-700">Average Rating Increase</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="font-semibold text-orange-800">30 Days</div>
                      <div className="text-sm text-orange-700">To See Results</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Free Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      QR Code Template Collection
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Staff Training Scripts
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Email Templates Library
                    </Link>
                    <Link to="/funnel" className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Review Response Templates
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Expert Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a href="tel:+1234567890" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>(123) 456-7890</span>
                    </a>
                    <a href="mailto:support@botandtable.com" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>support@botandtable.com</span>
                    </a>
                    <Link to="/funnel">
                      <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                        Schedule Free Consultation
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/articles/why-best-customers-never-leave-reviews" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)
                    </Link>
                    <Link to="/articles/the-50000-mistake" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The $50,000 Mistake: How One Negative Review Cost This Restaurant Owner Everything
                    </Link>
                    <Link to="/articles/turning-angry-customers-into-advocates" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </aside>
        </div>
      </div>



      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-orange-600 p-4 lg:hidden z-40">
        <Link to="/funnel">
          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3">
            Download Free Toolkit →
          </Button>
        </Link>
      </div>

      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default GoogleReviewsStrategies; 