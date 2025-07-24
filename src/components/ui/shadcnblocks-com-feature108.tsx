import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AICommunicationIconCloudWithRobot } from "@/components/ai-communication-demo-with-robot";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  benefitGrid?: { title: string; desc: string }[];
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  activeTabIndex: number;
  setActiveTabIndex: (idx: number) => void;
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "SMS marketing for restaurants that works alongside your email strategy.",
  description = "Meet guests where they are with SMS & Email marketing for restaurants",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Personalized Marketing",
      content: {
        badge: "AI Marketing",
        title: "Personalized Marketing on Autopilot",
        description:
          "Bot and Table's AI-powered platform revolutionizes how restaurants engage with their guests, enabling them to easily craft personalized messages, automate campaigns, and deliver the right message to the right guest at the right time.",
        buttonText: "Learn More",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "SMS Marketing",
      content: {
        badge: "SMS Marketing",
        title: "Instant Results with SMS Marketing",
        description:
          "Turn your phone into a revenue-generating machine with SMS campaigns that deliver $36 for every $1 spent.",
        buttonText: "Learn more",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Mail className="h-auto w-4 shrink-0" />,
      label: "Email Marketing",
      content: {
        badge: "Email Marketing",
        title: "Build Lasting Relationships with Email Marketing That Converts",
        description:
          "Transform one-time diners into lifelong customers with personalized email campaigns that deliver $36 for every $1 spent and outperform social media by 40x.",
        buttonText: "Learn more",
        // Instead of image, render a four-box benefit grid styled like the checkmark grid
        benefitGrid: [
          {
            title: "Superior ROI That Outperforms Every Channel",
            desc: "$36 return for every $1 spent vs $2.80 from social media"
          },
          {
            title: "Convert First-Time Guests Into Loyal Regulars",
            desc: "Email is 40x more effective at building repeat business than social media"
          },
          {
            title: "Drive Higher Order Values and Purchase Frequency",
            desc: "17% higher average order value from email-driven purchases"
          },
          {
            title: "Build Authentic Relationships Through Storytelling",
            desc: "75% of customers prefer email communication from restaurant brands"
          }
        ],
        imageSrc: "",
        imageAlt: "",
      },
    },
  ],
  activeTabIndex,
  setActiveTabIndex,
}: Feature108Props) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const duration = 10000; // 10 seconds
  const progressInterval = 100; // ms
  const timerRef = useRef<number | null>(null);
  const activeTabIndexRef = useRef(activeTabIndex);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => { activeTabIndexRef.current = activeTabIndex; }, [activeTabIndex]);

  // Auto-scroll and progress bar logic
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    let start = Date.now();
    setProgress(0);
    // Only start timer if (not first tab) or (first tab and hasBeenVisible)
    if (activeTabIndex !== 0 || hasBeenVisible) {
      timerRef.current = window.setInterval(() => {
        const elapsed = Date.now() - start;
        setProgress(Math.min((elapsed / duration) * 100, 100));
        if (elapsed >= duration) {
          start = Date.now();
          setProgress(0);
          setActiveTabIndex((activeTabIndexRef.current + 1) % tabs.length);
        }
      }, progressInterval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTabIndex, tabs.length, hasBeenVisible]);

  const handleTabChange = (value: string) => {
    const idx = tabs.findIndex(t => t.value === value);
    setActiveTabIndex(idx);
    setProgress(0);
  };

  return (
    <section ref={sectionRef} className="py-32" style={{ position: 'relative' }}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-regular">
            {heading}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs value={tabs[activeTabIndex].value} onValueChange={handleTabChange} className="mt-8">
          <div className="container flex flex-col items-center justify-center gap-0 sm:flex-row md:gap-10">
            <TabsList className="flex flex-row items-center justify-center gap-4 md:gap-10 w-full relative">
              {tabs.map((tab, idx) => (
                <div key={tab.value} className="relative flex flex-col items-center">
                  <TabsTrigger
                    value={tab.value}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                  >
                    {tab.icon} {tab.label}
                  </TabsTrigger>
                  {activeTabIndex === idx && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: 'linear' }}
                      className="absolute left-0 bottom-0 h-1 rounded-b-xl"
                      style={{ background: '#FF6B00', width: `${progress}%` }}
                    />
                  )}
                </div>
              ))}
            </TabsList>
          </div>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab, idx) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                style={{ display: activeTabIndex === idx ? 'grid' : 'none' }}
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  {tab.value === "tab-2" ? (
                    <Button className="mt-2.5 w-fit gap-2" size="lg" onClick={() => navigate('/sms-marketing')}>
                      {tab.content.buttonText}
                    </Button>
                  ) : tab.value === "tab-3" ? (
                    <Button className="mt-2.5 w-fit gap-2" size="lg" onClick={() => navigate('/email-marketing')}>
                      {tab.content.buttonText}
                    </Button>
                  ) : tab.value === "tab-1" ? (
                    <Button className="mt-2.5 w-fit gap-2" size="lg" onClick={() => navigate('/personalized-marketing')}>
                      {tab.content.buttonText}
                    </Button>
                  ) : (
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  )}
                </div>
                {/* Right column: only render tab 2/3 content here, never the animation */}
                {tab.value === 'tab-2' ? (
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:pl-2">
                    {/* Feature 1 */}
                    <div className="flex flex-row gap-6 items-start">
                      <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <div className="flex flex-col gap-1">
                        <p>Instant Communication That Drives Action</p>
                        <p className="text-muted-foreground text-sm">98% Open Rate. 3-Minute Response Time. Immediate Results.</p>
                      </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-row gap-6 items-start">
                      <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <div className="flex flex-col gap-1">
                        <p>Unmatched ROI That Maximizes Your Marketing Budget</p>
                        <p className="text-muted-foreground text-sm">$36 return for every $1 spent on SMS campaigns</p>
                      </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-row gap-6 items-start">
                      <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <div className="flex flex-col gap-1">
                        <p>Reduce No-Shows and Maximize Table Turnover</p>
                        <p className="text-muted-foreground text-sm">Cut No-Shows by 60% with Automated Reminder Messages</p>
                      </div>
                    </div>
                    {/* Feature 4 */}
                    <div className="flex flex-row gap-6 items-start">
                      <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <div className="flex flex-col gap-1">
                        <p>Build Customer Loyalty Through Personalized Engagement</p>
                        <p className="text-muted-foreground text-sm">75% of Customers Prefer SMS Over Email for Restaurant Promotions</p>
                      </div>
                    </div>
                  </div>
                ) : tab.value === 'tab-3' ? (
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:pl-2">
                    {tab.content.benefitGrid?.map((benefit, index) => (
                      <div key={index} className="flex flex-row gap-6 items-start">
                        <span className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-primary/20 shadow-md mr-2 mt-1">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <div className="flex flex-col gap-1">
                          <p>{benefit.title}</p>
                          <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : tab.value === 'tab-1' ? (
                  <div className="flex items-center justify-center w-full h-full">
                    {useMemo(() => <AICommunicationIconCloudWithRobot />, [])}
                  </div>
                ) : null}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 }; 