import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { Gallery6 } from "@/components/ui/gallery6";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
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
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Never Miss a Call</p>
                    <p className="text-muted-foreground text-sm">
                      Answer calls 24/7 with custom responses and send links for orders and reservations.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>AI That Closes the Sale</p>
                    <p className="text-muted-foreground text-sm">
                      AI Answering fields calls with custom responses and sends links for orders and reservations...so you never miss a sale.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Your AI Host with All the Answers</p>
                    <p className="text-muted-foreground text-sm">
                      From menu details and allergens to parking and hours of operation, give guests the info they need with customizable responses.
                    </p>
                  </div>
                </div>
                {/* Feature 4 Placeholder */}
                <div className="flex flex-row gap-6 items-start opacity-60">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Turn Calls into Marketing Moments</p>
                    <p className="text-muted-foreground text-sm">
                      Market your restaurant with every call. Promote specials and events to entice guests to visit again and again.
                    </p>
                  </div>
                </div>
                {/* Feature 5 */}
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Turn Calls into Cash</p>
                    <p className="text-muted-foreground text-sm">
                      Turn your phone into an instant money-maker. Instantly texts links for reservations and ordering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right side graphic placeholder */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <AnimatedBeamDemo />
          </div>
        </div>
        <Feature108 />
        <Gallery6 />
      </div>
    </div>
  );
}

export { Feature }; 