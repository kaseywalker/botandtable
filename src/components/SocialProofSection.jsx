import React from 'react';
import { Link } from 'react-router-dom';

const SocialProofSection = () => {
  const articles = [
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
      category: "ONLINE REPUTATION",
      title: "Top 10 Reasons Restaurants Need More Google Reviews",
      readTime: "10 min read",
      date: "June 24, 2025", 
      image: "/google-reviews.png",
      slug: "google-reviews-importance"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Related articles
          </h2>
        </div>

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

export default SocialProofSection;

