import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const articles = [
  {
    id: 6,
    category: "REPUTATION MANAGEMENT",
    title: "Stop Bad Reviews Before They Go Public: AI Private Feedback Channels",
    readTime: "6 min read",
    date: "June 29, 2025",
    image: "/happy-restaurant-owner.jpg",
    slug: "ai-private-feedback-channels",
    author: "Bot & Table"
  },
  {
    id: 5,
    category: "GOOGLE REVIEWS AI",
    title: "Boosting Google Reviews: Let AI Do the Work with Automated Requests",
    readTime: "12 min read",
    date: "June 28, 2025",
    image: "/confident-business-person.jpg",
    slug: "ai-google-reviews-automation",
    author: "Bot & Table"
  },
  {
    id: 4,
    category: "AI LISTINGS SYNC",
    title: "Sync Your Listings: How AI Keeps Your Restaurant Info Accurate Everywhere",
    readTime: "8 min read",
    date: "June 27, 2025",
    image: "/restaurant-atmosphere.jpg",
    slug: "ai-listings-sync",
    author: "Bot & Table"
  },
  {
    id: 1,
    category: "MARKETING STRATEGY",
    title: "Why Every Restaurant Needs a Marketing List and How to Grow It",
    readTime: "8 min read",
    date: "June 26, 2025",
    image: "/marketing-list.jpg",
    slug: "marketing-list-growth"
  },
  {
    id: 2,
    category: "AI AUTOMATION",
    title: "How Inbound AI Marketing Phone Calls Transform Restaurants",
    readTime: "12 min read", 
    date: "June 25, 2025",
    image: "/ai-phone-calls.jpg",
    slug: "ai-phone-calls-transform"
  },
  {
    id: 3,
    category: "GOOGLE REVIEWS",
    title: "The Secret to Getting 100+ Google Reviews (Without Begging)",
    readTime: "10 min read",
    date: "June 24, 2025",
    image: "/google-reviews.png",
    slug: "get-more-google-reviews"
  }
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-12 text-center">Resources</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-coral-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{article.readTime}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage; 