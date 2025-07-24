import React from 'react';
import { Button } from './ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { CheckCircle, Zap, Users, MessageCircle, TrendingUp, Star, BarChart2, Layers, Mail, Smartphone, Calendar, DollarSign, Phone } from 'lucide-react';
import ArticlesSection from './ArticlesSection';

const coral = '#FF6B47';
const blue = '#1e293b';
const gray = '#f7f7fa';

export default function PersonalizedMarketingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-row items-center gap-8">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-left font-regular flex-1" style={{ color: blue }}>
              Personalized Marketing on Autopilot
            </h1>
            <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-64 h-64 object-contain" />
          </div>
          <div className="max-w-4xl pl-0">
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground text-left mt-6">
              Every day, your restaurant loses potential customers to three critical gaps: missed phone calls during busy periods, inconsistent follow-up with guests after they dine, and the inability to stay top-of-mind between visits. While you're focused on delivering exceptional dining experiences, competitors with automated marketing systems are capturing your customers and building the relationships that drive repeat business.
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left mt-4">
              The restaurant industry has fundamentally changed. Today's successful restaurants don't just serve great food—they create seamless, personalized experiences that begin the moment a customer discovers them and continue long after they leave. This requires a level of consistent, intelligent communication that's impossible to maintain manually, especially when you're managing kitchen operations, staff schedules, and the hundred other details that keep a restaurant running.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 mt-10">
            <div className="flex flex-col justify-start gap-4 pt-0">
              <div className="flex flex-row gap-4 mt-4">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call
                </Button>
                <Button size="lg" className="gap-4" style={{ background: coral, color: '#fff' }}>
                  Book Your Revenue Growth Strategy Call
                </Button>
              </div>
            </div>
            {/* Remove the robot image from here */}
          </div>
        </div>
      </section>

      {/* The Complete Solution Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: blue }}>
            The Complete Solution
          </h2>
        </div>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
          Bot and Table's Personalized Marketing on Autopilot platform revolutionizes how restaurants engage with their guests by creating an intelligent, interconnected system that works around the clock. Our AI-powered platform seamlessly integrates four essential marketing channels—phone answering, SMS marketing, email campaigns, and reputation management—into one cohesive system that delivers the right message to the right guest at the right time, automatically.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4">
          This isn't just marketing automation—it's a complete customer relationship management system designed specifically for restaurants. Every interaction, from the first phone call to the follow-up review request, is orchestrated by AI that learns your customers' preferences, celebrates their special moments, and keeps your restaurant at the forefront of their minds when they're deciding where to dine.
        </p>
      </section>

      {/* Four Pillars Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Pillar 1: AI Phone Answering */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>AI Phone Answering: Never Miss Another Revenue Opportunity</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Your phone line is your restaurant's most valuable sales channel, but only if someone answers it. Bot and Table's AI Phone Answering system ensures you capture 100% of incoming calls, even during your busiest rush periods. When customers call, they're greeted by professional, human-like AI that provides restaurant information, answers menu questions, and instantly texts them links to your online ordering or reservation systems.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Answer 100% of calls instantly, even during peak hours</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Generate revenue 24/7 with after-hours ordering and reservations</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Eliminate order errors through seamless online system integration</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Free staff to focus on exceptional in-person service</li>
            </ul>
          </div>
          {/* Pillar 2: SMS Marketing */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>SMS Marketing: Instant Communication That Drives Immediate Action</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Text messages have a 98% open rate and are read within 3 minutes of delivery, making SMS the most powerful channel for driving immediate restaurant traffic. Bot and Table's SMS marketing platform helps you build a subscriber list of engaged customers and automatically sends targeted messages that fill empty tables and boost revenue during slow periods.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />98% open rate ensures your messages are seen immediately</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />$36 return for every $1 spent on SMS campaigns</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Reduce no-shows by 60% with automated reservation reminders</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Build customer loyalty through personalized engagement</li>
            </ul>
          </div>
          {/* Pillar 3: Email Marketing */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>Email Marketing: Build Lasting Relationships Through Storytelling</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              While SMS drives immediate action, email marketing builds the deep, lasting relationships that create lifelong customers. Bot and Table's email platform helps you craft compelling campaigns that showcase your restaurant's story, highlight seasonal menus, and create emotional connections that go far beyond just food service.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />$36 return for every $1 spent on email campaigns</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />40x more effective than social media for building repeat business</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />17% higher average order value from email-driven visits</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Automated sequences that nurture relationships without manual effort</li>
            </ul>
          </div>
          {/* Pillar 4: Google Reviews Management */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold" style={{ color: blue }}>Google Reviews Management: Protect and Enhance Your Online Reputation</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Online reviews directly impact your restaurant's success, with 93% of customers reading reviews before choosing where to dine. Bot and Table's reputation management system automatically requests reviews from satisfied customers while helping you address concerns before they become negative public feedback.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Increase positive review volume by 300% through strategic timing</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Address negative feedback privately before it becomes public</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Improve overall rating and search visibility</li>
              <li className="flex items-center gap-2 text-base text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" />Build trust with potential customers through authentic testimonials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How the Integrated System Works Together */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: blue }}>
            How the Integrated System Works Together
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Customer Journey: From First Call to Loyal Regular
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Discovery Phase
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              A potential customer calls your restaurant after seeing it mentioned online. Instead of getting a busy signal or being put on hold, they're immediately greeted by professional AI that answers questions about your menu, location, and hours. Interested in dining, they receive an instant text with a link to your reservation system.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              First Visit
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              The customer books a table and dines at your restaurant. Within 24 hours, they receive a personalized welcome email thanking them for their visit, sharing your restaurant's story, and offering a special discount for their next meal. They're also automatically enrolled in your SMS list for exclusive offers.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Relationship Building
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              Over the following weeks, the customer receives carefully timed email campaigns featuring seasonal menu highlights, chef stories, and behind-the-scenes content that builds emotional connection. SMS messages alert them to flash sales and special events that match their dining preferences.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Loyalty Development
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              The system tracks the customer's dining patterns and preferences, sending birthday celebrations, anniversary acknowledgments, and personalized recommendations. After each visit, they receive review requests at optimal times, helping build your online reputation while reinforcing their positive experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Retention and Recovery
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              If the customer hasn't visited in 30 days, automated win-back campaigns activate with special offers and updates on new menu items. The system works continuously to maintain engagement and prevent customer churn.
            </p>
          </div>
        </div>
      </section>

      {/* Data Integration and Intelligence */}
      <section className="w-full py-16 px-4">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: blue }}>
            Data Integration and Intelligence
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            All four marketing channels share customer data and insights, creating a comprehensive view of each guest's preferences, behaviors, and engagement patterns. This integration enables:
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Unified Customer Profiles
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              Every interaction across phone, SMS, email, and reviews contributes to a complete customer profile that informs future communications and personalization strategies.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Cross-Channel Campaigns
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              A customer who calls about catering might receive follow-up emails with catering menus and SMS reminders about upcoming events, creating multiple touchpoints that reinforce your message.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Behavioral Triggers
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              The system automatically responds to customer actions—a reservation cancellation might trigger a special offer, while a positive review could prompt an invitation to join your VIP program.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 border flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2" style={{ color: blue }}>
              Performance Optimization
            </h3>
            <p className="text-gray-700 mb-4 text-base">
              Integrated analytics show which channels and messages drive the most revenue, allowing continuous refinement of your marketing strategy based on real results.
            </p>
          </div>
        </div>
      </section>

      {/* Optionally, add an ArticlesSection or CTA here */}
      <ArticlesSection />
    </div>
  );
} 