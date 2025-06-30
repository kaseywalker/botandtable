import { Features } from "./features";
import { Bot, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Complete marketing automation that learns and improves automatically",
    image: "/public/ai-phone-calls.jpg",
  },
  {
    id: 2,
    icon: Zap,
    title: "Set It and Forget It",
    description: "No meetings, no approvals, no constant management required",
    image: "/public/restaurant-atmosphere.jpg",
  },
  {
    id: 3,
    icon: Shield,
    title: "Restaurant-Specific",
    description: "Built specifically for restaurant operations and customer behavior",
    image: "/public/restaurant_management_system.png",
  },
  {
    id: 4,
    icon: Clock,
    title: "24/7 Operation",
    description: "Works around the clock to grow your customer base",
    image: "/public/restaurant-kitchen-bg.jpg",
  },
];

export default function FeaturesDemo() {
  return (
    <Features
      features={features}
      primaryColor="sky-500"
      progressGradientLight="bg-gradient-to-r from-sky-400 to-sky-500"
      progressGradientDark="bg-gradient-to-r from-sky-300 to-sky-400"
    />
  );
} 