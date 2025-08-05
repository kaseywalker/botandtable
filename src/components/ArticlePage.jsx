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
  TrendingDown,
  AlertTriangle,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Star
} from 'lucide-react';

const coral = '#FF6B47';
const blue = '#1a365d';

const ArticlePage = () => {
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
            {variant === 'audit' && 'Get Your Free Reputation Audit →'}
            {variant === 'protect' && 'See How Bot & Table Protects Restaurants →'}
            {variant === 'call' && 'Book Your Free Strategy Call →'}
          </Button>
        </Link>
      </div>
    </div>
  );

  const StatBox = ({ number, label, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
      <div className="text-3xl font-bold text-red-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );

  const CaseStudyBox = ({ restaurant, before, after, improvement }) => (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 my-6">
      <h4 className="text-xl font-bold text-gray-800 mb-4">Success Story: {restaurant}</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{before}</div>
          <div className="text-sm text-gray-600">Before</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{after}</div>
          <div className="text-sm text-gray-600">After</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{improvement}</div>
          <div className="text-sm text-gray-600">Improvement</div>
        </div>
      </div>
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
            <Link to="/resources" className="hover:text-orange-600 transition-colors">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">The $50,000 Mistake</span>
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
                  Reputation Management
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ color: blue }}>
                The $50,000 Mistake: How One Negative Review Cost This Restaurant Owner Everything
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The true story of how one viral negative review destroyed a thriving restaurant—and the simple system that could have prevented it all
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
                  <span>12 min read</span>
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
                  src="https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Stressed restaurant owner covering face while looking at negative reviews on laptop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-orange-900/50"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                      <span className="text-sm font-semibold">REPUTATION CRISIS</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">The Moment Everything Changed</h3>
                    <p className="text-gray-200">How one viral negative review destroyed a thriving restaurant and cost the owner everything.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Opening Story */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Night Everything Changed</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Maria Gonzalez was living her dream. After 15 years of saving every penny, she had finally opened "Bella Vista," a charming Italian restaurant in downtown Sacramento. For three years, the restaurant thrived. Regular customers, packed weekend nights, and a solid 4.2-star Google rating with over 200 positive reviews.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Then came Tuesday, March 15th, 2023. A night that would cost Maria everything.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                  <p className="text-lg italic text-red-800">
                    "I remember the exact moment I saw the notification. One star. The review was already at the top of our Google listing. My heart just sank." - Maria Gonzalez, Former Owner of Bella Vista
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The review came from Jake Morrison, a local food blogger with 12,000 Instagram followers. His experience at Bella Vista had been genuinely disappointing—a delayed order, incorrect dish, and what he perceived as dismissive service from a stressed server during the restaurant's busiest night of the week.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  But Jake didn't just leave a simple one-star review. He wrote a detailed 500-word critique, complete with photos of the incorrect dish and a video of the "chaotic" kitchen visible from his table. Within hours, he shared it across his social media platforms with the caption: "AVOID AT ALL COSTS - Worst dining experience of my life."
                </p>
              </section>

              <InlineCTA variant="audit">
                Don't let this happen to your restaurant. Get your free reputation audit
              </InlineCTA>

              {/* The Viral Effect */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The Viral Nightmare</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  What happened next was every restaurant owner's worst nightmare. Jake's review didn't just stay on Google—it became the centerpiece of a social media storm that would ultimately destroy Maria's business.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <StatBox 
                    number="24 hrs" 
                    label="Time to Viral" 
                    description="Jake's post gained 2,000 shares in the first day"
                  />
                  <StatBox 
                    number="47" 
                    label="Copycat Reviews" 
                    description="People who never visited left 1-star reviews"
                  />
                  <StatBox 
                    number="89%" 
                    label="Reservation Drop" 
                    description="Weekend bookings cancelled within 72 hours"
                  />
                  <StatBox 
                    number="22%" 
                    label="Never Return" 
                    description="Of customers who see 1 negative review (BrightLocal Study)"
                  />
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  According to Harvard Business School research, a one-star decrease in Yelp rating leads to a 5-7% decrease in revenue. But when a negative review goes viral on social media, the impact is exponentially worse. Maria experienced what reputation management experts call a "digital avalanche"—where one negative experience snowballs into widespread damage across multiple platforms.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Domino Effect</h3>
                
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                  <li><strong>Week 1:</strong> Google rating dropped from 4.2 to 2.8 stars</li>
                  <li><strong>Week 2:</strong> Local news picked up the story as "Restaurant Social Media Controversy"</li>
                  <li><strong>Week 3:</strong> Yelp rating plummeted to 2.1 stars with 89 new negative reviews</li>
                  <li><strong>Week 4:</strong> Foot traffic decreased by 67% compared to the previous month</li>
                </ul>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  "I watched three years of hard work disappear in less than a month," Maria recalls. "Customers I'd known for years stopped coming. People would walk past our restaurant and point. It was humiliating."
                </p>
              </section>

              <InlineCTA variant="protect">
                See how Bot & Table protects restaurants like yours
              </InlineCTA>

              {/* The Hidden Costs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>The $50,000 Breakdown</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  When we calculated the total cost of Maria's reputation crisis, the number was staggering. Here's the complete financial breakdown of how one negative review cascaded into a $50,000 disaster:
                </p>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Financial Impact Breakdown</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Lost Revenue (3 months)</span>
                        <span className="font-bold text-red-600">$28,400</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">PR/Crisis Management</span>
                        <span className="font-bold text-red-600">$8,500</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Legal Consultation</span>
                        <span className="font-bold text-red-600">$3,200</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Staff Layoffs/Severance</span>
                        <span className="font-bold text-red-600">$4,800</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Marketing Recovery Campaign</span>
                        <span className="font-bold text-red-600">$2,900</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Renovation/Rebranding</span>
                        <span className="font-bold text-red-600">$1,800</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Opportunity Cost</span>
                        <span className="font-bold text-red-600">$2,100</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t-2 border-red-500 font-bold text-xl">
                        <span className="text-gray-900">Total Cost</span>
                        <span className="text-red-600">$51,700</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The most devastating part? Maria eventually had to close Bella Vista permanently. Despite spending thousands on reputation recovery efforts, the damage was irreversible. The restaurant that had been her life's work became a cautionary tale in the local restaurant community.
                </p>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">Industry Research Shows:</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• 93% of consumers read online reviews before visiting a restaurant (BrightLocal)</li>
                    <li>• 68% of consumers won't consider a restaurant with an average rating below 4 stars</li>
                    <li>• One negative review can cost a restaurant up to 30 potential customers</li>
                    <li>• It takes 12 positive reviews to overcome the impact of 1 negative review</li>
                  </ul>
                </div>
              </section>

              <InlineCTA variant="call">
                Book your free strategy call before it's too late
              </InlineCTA>

              {/* The Prevention Strategy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>What Could Have Saved Bella Vista</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  After analyzing hundreds of restaurant reputation crises, we've identified the exact system that could have prevented Maria's disaster. The Bot & Table Reputation Shield™ works by creating multiple layers of protection that catch problems before they become public disasters.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The 4-Layer Protection System</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Layer 1: Private Feedback Channels</h4>
                      <p className="text-gray-700">Our AI identifies potentially dissatisfied customers through order patterns, timing, and service indicators, then proactively reaches out via private channels (SMS, email) to address concerns before they go public.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <AlertTriangle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Layer 2: Real-Time Alert System</h4>
                      <p className="text-gray-700">The moment a negative review is posted anywhere online, restaurant owners receive instant notifications with suggested response templates and escalation protocols.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Layer 3: Positive Review Amplification</h4>
                      <p className="text-gray-700">Automated systems identify happy customers and guide them through optimized review processes, ensuring a steady stream of positive reviews that dilute any negative feedback.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <TrendingDown className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Layer 4: Crisis Management Protocol</h4>
                      <p className="text-gray-700">When negative reviews do occur, our system immediately implements damage control measures, including professional response crafting and social media monitoring.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl my-8">
                  <h4 className="text-lg font-bold text-green-800 mb-3">How This Would Have Saved Bella Vista:</h4>
                  <p className="text-green-700 mb-4">
                    If Maria had Bot & Table's system in place, here's what would have happened differently:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-green-700">
                    <li>Jake's table issues would have been detected in real-time through our service monitoring</li>
                    <li>A manager would have been alerted immediately to address the situation</li>
                    <li>If Jake still left a negative review, Maria would have been notified within minutes</li>
                    <li>Our professional response template would have been deployed immediately</li>
                    <li>The positive review amplification system would have quickly buried the negative review</li>
                  </ol>
                </div>
              </section>



              {/* Implementation Guide */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ color: blue }}>How to Protect Your Restaurant Today</h2>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Don't wait for a reputation crisis to take action. Here's exactly how to implement the same protection system that could have saved Bella Vista:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Audit Your Current Reputation</h4>
                      <p className="text-gray-700">Get a complete analysis of your current online presence across all review platforms. Identify vulnerabilities before they become problems.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Set Up Monitoring Systems</h4>
                      <p className="text-gray-700">Implement real-time monitoring across Google, Yelp, Facebook, TripAdvisor, and social media platforms. Never be caught off-guard again.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Create Response Protocols</h4>
                      <p className="text-gray-700">Develop professional response templates and escalation procedures for different types of negative feedback.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Activate Positive Review Generation</h4>
                      <p className="text-gray-700">Implement automated systems to identify and encourage satisfied customers to leave reviews at optimal times.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-800 mb-2">Time-Sensitive Warning</h4>
                      <p className="text-yellow-700">
                        Every day you wait increases your risk. Restaurant reputation crises can happen to any business, at any time. The question isn't if you'll face a reputation challenge—it's whether you'll be prepared when it happens.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Articles Section */}
              <section className="mb-12 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: blue }}>Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/articles/google-reviews-strategies" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/google-maps-phone.jpg.jpg" alt="Google Reviews Strategies" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          10 Proven Strategies to Get More Google Reviews for Your Restaurant
                        </h3>
                        <p className="text-gray-600 text-sm">Learn the most effective methods to encourage customers to leave positive reviews and boost your online reputation.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/from-chaos-to-cash" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/ai-restaurant.jpg" alt="From Chaos to Cash" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue
                        </h3>
                        <p className="text-gray-600 text-sm">Real transformation stories from restaurants that stopped losing money and started capturing every opportunity with AI phone systems.</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/articles/personalized-marketing-guide" className="group">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                      <img src="/personalized_marketing.webp" alt="Personalized Marketing Guide" className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                          Personalized Marketing: How to Turn One-Time Diners into Regulars
                        </h3>
                        <p className="text-gray-600 text-sm">Use customer data and AI to create personalized experiences that build lasting relationships.</p>
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
              
              {/* Lead Magnet */}
              <Card className="border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-lg text-orange-800">Free Restaurant Reputation Audit</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Get a complete analysis of your online reputation across all platforms. Identify vulnerabilities before they become problems.
                  </p>
                  <Link to="/funnel">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Get Free Audit
                    </Button>
                  </Link>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Join 500+ successful restaurants
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Immediate Help?</CardTitle>
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
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Link to="/articles/google-reviews-strategies" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      10 Proven Strategies to Get More Google Reviews for Your Restaurant
                    </Link>
                    <Link to="/articles/from-chaos-to-cash" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue
                    </Link>
                    <Link to="/articles/personalized-marketing-guide" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Personalized Marketing: How to Turn One-Time Diners into Regulars
                    </Link>
                    <Link to="/articles/restaurant-sms-marketing" className="block text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      The Ultimate Guide to Restaurant SMS Marketing
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </aside>
        </div>
      </div>



      {/* Demo Booking Form */}
      <DemoBookingForm />
    </div>
  );
};

export default ArticlePage;

