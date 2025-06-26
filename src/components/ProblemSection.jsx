import React from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              While You're Busy Running Your Restaurant,{' '}
              <span className="text-destructive">Your Competitors Are Stealing Your Customers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Every day you don't have AI automation working for you is another day you're losing money to restaurants that do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-destructive/5 rounded-2xl border border-destructive/20">
              <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Missed Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Right now, while you're reading this, potential customers are calling your restaurant and hanging up because no one answered. They're scrolling past your Google listing because you only have 12 reviews while your competitor has 127.
              </p>
            </div>

            <div className="text-center p-8 bg-destructive/5 rounded-2xl border border-destructive/20">
              <TrendingDown className="h-16 w-16 text-destructive mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">The Real Cost</h3>
              <p className="text-muted-foreground leading-relaxed">
                The average restaurant loses <span className="font-bold text-destructive">$2,400 monthly</span> just from missed calls during busy periods. Add another $1,800 from lack of Google reviews, $900 from poor customer retention.
              </p>
            </div>

            <div className="text-center p-8 bg-destructive/5 rounded-2xl border border-destructive/20">
              <Clock className="h-16 w-16 text-destructive mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Traditional Solutions Don't Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                You've tried hiring marketing staff - they quit after three months. You've worked with agencies - they charge $3,000 monthly and still need you to manage everything.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-destructive/10 to-warning-orange/10 p-8 rounded-2xl border border-destructive/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">The Brutal Truth</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your competitors aren't smarter than you. They're not working harder than you. 
              <span className="font-bold text-destructive"> They just have AI doing their marketing while they sleep, and you're still doing everything manually.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

