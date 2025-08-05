import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlesSection = () => {
  const articles = [
    {
      id: 0,
      category: "ARTIFICIAL INTELLIGENCE",
      title: "AI in Restaurants: The Complete Guide to Transforming Your Business with Artificial Intelligence",
      readTime: "35 min read",
      date: "January 29, 2024",
      image: "/AI-Automations.png",
      slug: "ai-in-restaurants-complete-guide",
      author: "Bot and Table"
    },
    {
      id: 1,
      category: "ARTIFICIAL INTELLIGENCE",
      title: "From Chaos to Cash: How Smart Restaurants Use AI to Turn Every Phone Call Into Revenue",
      readTime: "12 min read",
      date: "January 28, 2024",
      image: "/ai-restaurant.jpg",
      slug: "from-chaos-to-cash",
      author: "Bot & Table"
    },
    {
      id: 2,
      category: "AI PHONE ANSWERING",
      title: "The $27,000 Phone Problem: Why 43% of Restaurant Calls Go Unanswered (And How AI Fixes It)",
      readTime: "15 min read",
      date: "January 27, 2024",
      image: "/restaurant-phone.jpg",
      slug: "the-27000-phone-problem",
      author: "Bot & Table"
    },
    {
      id: 3,
      category: "GOOGLE REVIEWS",
      title: "The Restaurant Owner's Guide to Turning Angry Customers Into Loyal Advocates (Without Anyone Knowing)",
      readTime: "18 min read",
      date: "January 26, 2024",
      image: "/restaurant-owner.jpg",
      slug: "turning-angry-customers-into-advocates",
      author: "Bot & Table"
    },
    {
      id: 4,
      category: "GOOGLE REVIEWS",
      title: "Why Your Best Customers Never Leave Reviews (And the Simple System That Changed Everything)",
      readTime: "15 min read",
      date: "January 25, 2024",
      image: "/google-review.jpg",
      slug: "why-best-customers-never-leave-reviews",
      author: "Bot & Table"
    },
    {
      id: 5,
      category: "GOOGLE REVIEWS",
      title: "10 Proven Strategies to Get More Google Reviews for Your Restaurant",
      readTime: "5 min read",
      date: "January 15, 2024",
      image: "/google-maps-phone.jpg.jpg",
      slug: "google-reviews-strategies",
      author: "Bot & Table"
    },
    {
      id: 6,
      category: "SMS MARKETING",
      title: "The Ultimate Guide to Restaurant SMS Marketing",
      readTime: "45 min read",
      date: "January 10, 2024",
      image: "/sms_marketing_guide.webp",
      slug: "restaurant-sms-marketing",
      author: "Bot & Table"
    },
    {
      id: 7,
      category: "PERSONALIZED MARKETING",
      title: "Personalized Marketing: How to Turn One-Time Diners into Regulars",
      readTime: "45 min read",
      date: "January 8, 2024",
      image: "/personalized_marketing.webp",
      slug: "personalized-marketing-guide",
      author: "Bot & Table"
    }
  ];

  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + visibleCount < articles.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };
  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  return (
    <section className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Related articles</h2>
          <div className="flex items-center gap-2">
            <button onClick={handleLeft} disabled={!canGoLeft} className={`text-3xl px-2 py-1 rounded transition-colors ${canGoLeft ? 'hover:bg-gray-200' : 'text-gray-300 cursor-not-allowed'}`}>{'<'}</button>
            <button onClick={handleRight} disabled={!canGoRight} className={`text-3xl px-2 py-1 rounded transition-colors ${canGoRight ? 'hover:bg-gray-200' : 'text-gray-300 cursor-not-allowed'}`}>{'>'}</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.slice(startIdx, startIdx + visibleCount).map((article) => (
            <Link 
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

