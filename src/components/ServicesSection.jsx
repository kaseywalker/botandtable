import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star, MessageSquare, Brain, Phone, TrendingUp, Users, Zap, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Star,
      title: "3-5X More Google Reviews in 90 Days",
      subtitle: "(Guaranteed)",
      description: "While your competitors beg customers for reviews, our AI automatically identifies your happiest customers and guides them through a seamless review process. We don't just ask for reviews - we create the perfect moment, use the right message, and make it effortless for customers to share their experience.",
      results: "Restaurants using Bot & Table average 47 new Google reviews in their first 90 days, compared to 8-12 reviews for restaurants doing it manually.",
      proof: "Maria's Bistro went from 23 reviews to 156 reviews in 6 months, increasing their online orders by 340%.",
      color: "success-green"
    },
    {
      icon: MessageSquare,
      title: "24/7 AI Customer Communication",
      subtitle: "Never Miss Another Customer Again",
      description: "Your AI assistant handles customer communication across every channel - phone calls, text messages, emails, and social media - 24 hours a day, 7 days a week. It doesn't just respond to customers; it engages them with personalized messages based on their dining history, preferences, and behavior.",
      results: "When customers call during busy periods, your AI answers professionally and can take reservations, answer menu questions, and even upsell appetizers or desserts.",
      proof: "Tony's Pizza increased phone conversions by 67% and captured 23 additional customers weekly just from AI phone handling.",
      color: "tech-blue"
    },
    {
      icon: Brain,
      title: "Personalized Marketing Automation",
      subtitle: "AI That Knows Your Customers Better Than You Do",
      description: "Our AI tracks every customer interaction, order history, and preference to create hyper-personalized marketing campaigns that feel like they're coming from a friend, not a restaurant. It knows Sarah always orders the salmon on Fridays, that Mike brings his family for Sunday brunch.",
      results: "Instead of generic 'come dine with us' messages, your customers receive personalized invitations: 'Your favorite salmon special is back this Friday, Sarah. Want your usual table by the window?'",
      proof: "Bella's Italian saw a 89% increase in repeat customers and $12,000 additional monthly revenue from personalized AI campaigns.",
      color: "primary"
    },
    {
      icon: Phone,
      title: "AI Phone Answering & Booking",
      subtitle: "Capture Every Opportunity, Even During Rush Hour",
      description: "Your AI phone assistant handles calls with the professionalism of your best host and the availability of a 24/7 service. It takes reservations, answers menu questions, provides directions, and even handles special requests - all while you're focused on serving customers.",
      results: "During busy periods when your staff can't answer phones, your AI ensures every potential customer gets immediate, professional service. It can handle multiple calls simultaneously, never gets overwhelmed.",
      proof: "Giuseppe's Trattoria captured an additional $8,400 monthly revenue from calls that would have gone to voicemail during busy periods.",
      color: "warning-orange"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Unfair AI Advantage Over{' '}
              <span className="text-primary">Every Other Restaurant</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Every service your restaurant needs to dominate your local market, all running automatically in the background while you focus on what you do best.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                      <CardHeader className="pb-6">
                        <div className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-4`}>
                          <IconComponent className={`h-8 w-8 text-${service.color}`} />
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                          {service.title}
                        </CardTitle>
                        <p className={`text-lg font-semibold text-${service.color}`}>
                          {service.subtitle}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {service.description}
                        </p>
                        
                        <div className={`p-4 bg-${service.color}/5 rounded-xl border border-${service.color}/20`}>
                          <div className="flex items-start space-x-3">
                            <TrendingUp className={`h-5 w-5 text-${service.color} mt-0.5 flex-shrink-0`} />
                            <p className="text-foreground font-medium">
                              {service.results}
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                          <div className="flex items-start space-x-3">
                            <Users className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <p className="text-muted-foreground">
                              <span className="font-bold text-foreground">Success Story:</span> {service.proof}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      {/* Mock Dashboard/Interface */}
                      <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-${service.color}/10 rounded-lg flex items-center justify-center`}>
                              <IconComponent className={`h-4 w-4 text-${service.color}`} />
                            </div>
                            <span className="font-semibold text-foreground">Bot & Table AI</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${service.color} rounded-full animate-pulse`}></div>
                            <span className="text-sm text-muted-foreground">Active</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {index === 0 && (
                            <>
                              <div className="flex justify-between items-center p-3 bg-success-green/10 rounded-lg">
                                <span className="text-sm text-foreground">New Reviews This Week</span>
                                <span className="font-bold text-success-green">+12</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-foreground">Average Rating</span>
                                <div className="flex items-center space-x-1">
                                  {[1,2,3,4,5].map(i => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                  <span className="ml-1 font-bold">4.8</span>
                                </div>
                              </div>
                            </>
                          )}

                          {index === 1 && (
                            <>
                              <div className="flex justify-between items-center p-3 bg-tech-blue/10 rounded-lg">
                                <span className="text-sm text-foreground">Messages Handled Today</span>
                                <span className="font-bold text-tech-blue">47</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-foreground">Response Time</span>
                                <span className="font-bold text-foreground">&lt; 30 sec</span>
                              </div>
                            </>
                          )}

                          {index === 2 && (
                            <>
                              <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                                <span className="text-sm text-foreground">Campaigns Active</span>
                                <span className="font-bold text-primary">8</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-foreground">Open Rate</span>
                                <span className="font-bold text-foreground">89%</span>
                              </div>
                            </>
                          )}

                          {index === 3 && (
                            <>
                              <div className="flex justify-between items-center p-3 bg-warning-orange/10 rounded-lg">
                                <span className="text-sm text-foreground">Calls Answered Today</span>
                                <span className="font-bold text-warning-orange">23</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-foreground">Reservations Booked</span>
                                <span className="font-bold text-foreground">15</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                        <Zap className={`h-6 w-6 text-${service.color}`} />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

