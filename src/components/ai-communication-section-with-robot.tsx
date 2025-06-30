// This file is a React component and uses JSX/TSX syntax
import { AICommunicationIconCloudWithRobot } from "./ai-communication-demo-with-robot"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, MessageSquare, Phone, Mail, Smartphone, Users, Bot } from "lucide-react"

export function AICommunicationSectionWithRobot() {
  return (
    <section className="py-24" style={{ background: '#fdf3d9' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            24/7 <span className="text-primary">AI Customer Communication</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet your AI assistant that never sleeps. Our Bot & Table robot orchestrates 
            seamless communication across all channels, ensuring every customer interaction 
            is handled with precision and care.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Smart Chatbots</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    AI-powered conversations that understand context and escalate when needed
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <Phone className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Voice AI</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Natural voice interactions with advanced speech recognition
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <Mail className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email Intelligence</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Automated responses with sentiment analysis and personalization
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <Smartphone className="w-6 h-6 text-orange-600 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Multi-Channel</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Unified messaging across SMS, social media, and messaging apps
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-blue-900">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Bot className="w-6 h-6 text-blue-600 mr-3" />
                Your AI Communication Hub
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Central Intelligence:</strong> One AI brain managing all customer touchpoints
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Learning & Adapting:</strong> Gets smarter with every interaction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Seamless Handoffs:</strong> Smooth transitions between AI and human agents
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Real-time Analytics:</strong> Instant insights into customer sentiment and needs
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Meet Your AI Assistant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="flex-1 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative rounded-2xl shadow-2xl p-4 min-h-[550px] flex items-center justify-center bg-white dark:bg-slate-800">
                <AICommunicationIconCloudWithRobot />
              </div>
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                AI Active
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                24/7 Online
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">AI Uptime</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">&lt;1s</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Response Time</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Integrations</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Learning</div>
          </div>
        </div>
      </div>
    </section>
  )
} 