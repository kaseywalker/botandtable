import DisplayCards from "./display-cards";
import { Sparkles } from "lucide-react";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-green-400" />,
    title: "Generating personalized customer campaigns",
    description: "AI-driven campaigns tailored for each customer.",
    date: "Today",
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
  },
  {
    icon: <Sparkles className="size-4 text-blue-400" />,
    title: "Collecting Google reviews automatically",
    description: "Seamlessly gather and showcase new reviews.",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
  },
  {
    icon: <Sparkles className="size-4 text-coral-400" />,
    title: "Optimizing marketing spend",
    description: "Maximize ROI with AI-powered insights.",
    date: "Today",
    iconClassName: "text-coral-500",
    titleClassName: "text-coral-500",
  },
];

export default function DisplayCardsDemo() {
  return <DisplayCards cards={defaultCards} />;
} 