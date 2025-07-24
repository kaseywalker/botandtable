import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { Gallery6 } from "@/components/ui/gallery6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AICommunicationIconCloudWithRobot } from "@/components/ai-communication-demo-with-robot";

function Feature() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="w-full py-20 lg:py-40" style={{ position: 'relative' }}>
      <div className="container mx-auto">
        {/* Animation rendered once, absolutely positioned over the right column only when tab 1 is active */}
        {/* Removed animation here, will be rendered inside Feature108 for tab-1 */}
        <div className="flex gap-16 py-20 lg:py-40 flex-col md:flex-row items-start">
          <div className="flex-1 md:w-1/2">
            <Badge>Artificial Intelligence</Badge>
            <div className="flex gap-2 flex-col mt-4">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                AI Phone Answering
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                Don't miss a phone call—or potential revenue—with AI-powered technology that answers your phone 24/7, 365 days a year
              </p>
            </div>
            <div className="flex gap-10 pt-12 flex-col w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-10 md:pl-2">
                {/* Feature 1 */}
                <div className="flex flex-row gap-6 items-start">
                  <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                    <Check className="w-6 h-6 text-primary" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p>Never Miss a Call</p>
                    <p className="text-muted-foreground text-sm">
                      Free up your staff—our AI answers calls 24/7 and handles multiple conversations simultaneously.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-row gap-6 items-start">
                  <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                    <Check className="w-6 h-6 text-primary" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p>Text, Book, and Boost Sales</p>
                    <p className="text-muted-foreground text-sm">
                      Turn your phone into an instant money-maker. Instantly texts links for reservations and ordering.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex flex-row gap-6 items-start">
                  <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                    <Check className="w-6 h-6 text-primary" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p>Your AI Host with All the Answers</p>
                    <p className="text-muted-foreground text-sm">
                      From menu details and allergens to parking and hours of operation, give guests the info they need with customizable responses.
                    </p>
                  </div>
                </div>
                {/* Feature 4 Placeholder */}
                <div className="flex flex-row gap-6 items-start">
                  <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                    <Check className="w-6 h-6 text-primary" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p>Turn Calls into Marketing Moments</p>
                    <p className="text-muted-foreground text-sm">
                      Market your restaurant with every call. Promote specials and events to entice guests to visit again and again.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-2.5">
                <Link
                  to="/ai-phone-answering"
                  style={{ background: '#FF6B47', color: '#fff' }}
                  className="inline-flex items-center justify-center w-fit gap-2 rounded-md text-sm font-medium h-10 px-6 py-2 shadow hover:bg-orange-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* Right side graphic placeholder */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <AnimatedBeamDemo />
          </div>
        </div>
        <Feature108 activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
        <Gallery6 />
      </div>
    </div>
  );
}

export { Feature }; 