import React from 'react';
import { Bot, Zap, Shield, Clock } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Introducing Bot & Table: The AI Marketing Agency{' '}
              <span className="text-primary">That Works While You Sleep</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Finally, a marketing solution that actually runs itself. Set it up once, then watch your customer base grow automatically while you focus on what you do best - running your restaurant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                The Bot & Table Difference
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bot & Table isn't just another marketing tool or agency. We're the first AI marketing system built specifically for restaurants that truly operates on autopilot. While other solutions require constant management, meetings, and manual work, our AI handles everything from customer acquisition to retention without you lifting a finger.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">AI-Powered Automation</h4>
                    <p className="text-muted-foreground">Complete marketing automation that learns and improves automatically</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-success-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Set It and Forget It</h4>
                    <p className="text-muted-foreground">No meetings, no approvals, no constant management required</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Restaurant-Specific</h4>
                    <p className="text-muted-foreground">Built specifically for restaurant operations and customer behavior</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-warning-orange/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-warning-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">24/7 Operation</h4>
                    <p className="text-muted-foreground">Works around the clock to grow your customer base</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Your AI Marketing Assistant</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-success-green/10 rounded-lg">
                    <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground">Generating personalized customer campaigns...</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-tech-blue/10 rounded-lg">
                    <div className="w-3 h-3 bg-tech-blue rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground">Responding to customer inquiries...</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground">Collecting Google reviews automatically...</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-warning-orange/10 rounded-lg">
                    <div className="w-3 h-3 bg-warning-orange rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground">Analyzing customer behavior patterns...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Set It and Forget It Promise
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Once Bot & Table is set up for your restaurant, you literally forget about marketing. No more meetings, no more approvals, no more wondering if your marketing is working. Our AI handles customer communication, review generation, retention campaigns, and new customer acquisition{' '}
              <span className="font-bold text-primary">24/7, 365 days a year.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

