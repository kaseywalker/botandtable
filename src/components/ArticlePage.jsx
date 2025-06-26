import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ArticlePage = () => {
  const { slug } = useParams();

  const articles = {
    'marketing-list-growth': {
      category: "MARKETING STRATEGY",
      title: "Why Every Restaurant Needs a Marketing List and How to Grow It",
      readTime: "8 min read",
      date: "June 26, 2025",
      image: "/marketing-list.jpg",
      content: `
        <p>In today's competitive restaurant landscape, having a robust marketing list isn't just an advantage—it's essential for survival. Your marketing list is the direct line to your customers, allowing you to build relationships, drive repeat business, and increase revenue without relying on expensive third-party platforms.</p>

        <h2>Why Your Restaurant Needs a Marketing List</h2>
        
        <p>Unlike social media followers or third-party delivery app customers, your marketing list belongs to you. When you have a customer's contact information, you can reach them directly without paying platform fees or worrying about algorithm changes.</p>

        <p>Studies show that restaurants with active email marketing lists see 20-30% higher customer lifetime value compared to those relying solely on walk-in traffic. This is because direct communication allows you to:</p>

        <ul>
          <li>Announce new menu items and specials</li>
          <li>Send personalized offers based on dining history</li>
          <li>Invite customers to special events</li>
          <li>Recover potentially lost customers with win-back campaigns</li>
        </ul>

        <h2>How to Grow Your Marketing List</h2>

        <p><strong>1. Offer Value in Exchange for Contact Information</strong></p>
        <p>Don't just ask for email addresses—give customers a compelling reason to share their information. Consider offering a free appetizer, dessert, or discount on their next visit.</p>

        <p><strong>2. Use Multiple Collection Points</strong></p>
        <p>Collect contact information at various touchpoints: during reservation, at the table with QR codes, through your website, and at checkout. The more opportunities you create, the faster your list will grow.</p>

        <p><strong>3. Leverage Your Staff</strong></p>
        <p>Train your servers to mention your loyalty program or newsletter during the dining experience. A personal recommendation from staff can be incredibly effective.</p>

        <p><strong>4. Create Exclusive Experiences</strong></p>
        <p>Offer list subscribers early access to new menu items, special events, or chef's table experiences. Exclusivity drives sign-ups and keeps subscribers engaged.</p>

        <h2>Best Practices for List Management</h2>

        <p>Growing your list is just the beginning. To maximize its value, segment your customers based on dining frequency, preferences, and spending habits. This allows you to send targeted messages that resonate with each group.</p>

        <p>Remember to maintain consistent communication without overwhelming your subscribers. A weekly newsletter with specials, events, and behind-the-scenes content typically performs well for restaurants.</p>

        <p>Your marketing list is one of your restaurant's most valuable assets. Start building it today, and watch as direct customer relationships drive sustainable growth for your business.</p>
      `
    },
    'ai-phone-calls-transform': {
      category: "AI AUTOMATION", 
      title: "How Inbound AI Marketing Phone Calls Transform Restaurants",
      readTime: "12 min read",
      date: "June 25, 2025", 
      image: "/ai-phone-calls.jpg",
      content: `
        <p>The restaurant industry loses millions in revenue every day from missed phone calls. During peak hours, when your staff is focused on serving customers, potential diners are calling to make reservations, ask about menu items, or inquire about availability—and getting busy signals or voicemail.</p>

        <p>AI-powered phone systems are revolutionizing how restaurants handle inbound calls, ensuring every potential customer receives immediate, professional service regardless of how busy your restaurant gets.</p>

        <h2>The Hidden Cost of Missed Calls</h2>

        <p>Research shows that 67% of customers will hang up if their call isn't answered within three rings. For restaurants, this translates to significant lost revenue:</p>

        <ul>
          <li>Missed reservations during peak dining hours</li>
          <li>Lost takeout and delivery orders</li>
          <li>Frustrated customers who turn to competitors</li>
          <li>Reduced customer satisfaction and loyalty</li>
        </ul>

        <p>The average restaurant loses $2,400 monthly just from calls that go unanswered during busy periods. For many establishments, this represents 3-5% of total revenue walking out the door.</p>

        <h2>How AI Phone Systems Work</h2>

        <p>Modern AI phone assistants are sophisticated enough to handle complex restaurant interactions. They can:</p>

        <p><strong>Take Reservations</strong></p>
        <p>AI systems integrate with your reservation platform to check availability in real-time, book tables, and even handle special requests like dietary restrictions or seating preferences.</p>

        <p><strong>Answer Menu Questions</strong></p>
        <p>Customers can ask about ingredients, preparation methods, pricing, and daily specials. The AI has access to your complete menu database and can provide detailed, accurate information.</p>

        <p><strong>Process Orders</strong></p>
        <p>For takeout and delivery, AI can take complete orders, calculate totals, process payments, and provide accurate pickup times based on current kitchen capacity.</p>

        <p><strong>Handle Multiple Calls Simultaneously</strong></p>
        <p>Unlike human staff, AI never gets overwhelmed. It can manage dozens of calls at once, ensuring no customer ever gets a busy signal.</p>

        <h2>Real-World Results</h2>

        <p>Restaurants implementing AI phone systems typically see:</p>

        <ul>
          <li>40-60% increase in answered calls</li>
          <li>25% boost in reservation bookings</li>
          <li>15-20% increase in takeout orders</li>
          <li>Improved customer satisfaction scores</li>
          <li>Reduced staff stress during peak hours</li>
        </ul>

        <h2>Implementation Best Practices</h2>

        <p>To maximize the benefits of AI phone systems:</p>

        <p><strong>Customize the Voice and Personality</strong></p>
        <p>Your AI should reflect your restaurant's brand. A casual bistro might use a friendly, conversational tone, while a fine dining establishment would opt for more formal language.</p>

        <p><strong>Keep Information Updated</strong></p>
        <p>Regularly update menu items, prices, and specials in the AI system. Outdated information can frustrate customers and damage your reputation.</p>

        <p><strong>Train Staff on Integration</strong></p>
        <p>Your team should understand how the AI system works and be able to seamlessly take over complex calls when needed.</p>

        <p><strong>Monitor and Optimize</strong></p>
        <p>Review call logs and customer feedback to continuously improve the AI's responses and capabilities.</p>

        <h2>The Future is Now</h2>

        <p>AI phone systems aren't just about answering calls—they're about creating a seamless customer experience that drives revenue growth. While your staff focuses on delivering exceptional in-person service, AI ensures every phone interaction is professional, efficient, and conversion-focused.</p>

        <p>In an industry where every customer interaction matters, AI phone systems provide the competitive edge needed to capture more business and build stronger customer relationships.</p>
      `
    },
    'google-reviews-importance': {
      category: "ONLINE REPUTATION",
      title: "Top 10 Reasons Restaurants Need More Google Reviews", 
      readTime: "10 min read",
      date: "June 24, 2025",
      image: "/google-reviews.png",
      content: `
        <p>Google reviews have become the digital equivalent of word-of-mouth recommendations. For restaurants, they're not just nice to have—they're critical for survival in today's competitive market. Here are the top 10 reasons why your restaurant needs to prioritize getting more Google reviews.</p>

        <h2>1. Higher Search Rankings</h2>
        <p>Google's algorithm heavily weighs review quantity and quality when determining local search rankings. Restaurants with more positive reviews consistently appear higher in "restaurants near me" searches, driving more organic traffic to your business.</p>

        <h2>2. Increased Customer Trust</h2>
        <p>92% of consumers read online reviews before visiting a restaurant. A robust collection of positive reviews builds immediate credibility and trust with potential customers who have never dined with you before.</p>

        <h2>3. Competitive Advantage</h2>
        <p>When customers compare restaurants online, review count and rating are primary decision factors. Having significantly more reviews than competitors can be the deciding factor that brings customers through your doors instead of theirs.</p>

        <h2>4. Improved Conversion Rates</h2>
        <p>Restaurants with 50+ Google reviews see 35% higher conversion rates from online searches to actual visits. Reviews provide the social proof needed to convert browsers into diners.</p>

        <h2>5. Valuable Customer Feedback</h2>
        <p>Reviews offer direct insights into what customers love about your restaurant and areas for improvement. This feedback is invaluable for menu development, service training, and operational improvements.</p>

        <h2>6. Enhanced Google My Business Profile</h2>
        <p>Regular reviews keep your Google My Business profile active and engaging. Google favors businesses with fresh, consistent review activity, leading to better visibility in local searches.</p>

        <h2>7. Free Marketing Content</h2>
        <p>Positive reviews serve as authentic testimonials you can use in marketing materials, social media posts, and on your website. Customer-generated content is more trusted than traditional advertising.</p>

        <h2>8. Increased Revenue</h2>
        <p>Studies show that a one-star increase in Google rating can lead to 5-9% increase in revenue. For restaurants, this translates to thousands of dollars in additional monthly income.</p>

        <h2>9. Better Staff Morale</h2>
        <p>When customers specifically mention excellent service from staff members in reviews, it boosts team morale and encourages continued exceptional performance. Recognition in reviews is a powerful motivator.</p>

        <h2>10. Crisis Management Tool</h2>
        <p>A strong foundation of positive reviews helps buffer against the occasional negative review. When you have hundreds of positive reviews, one or two negative ones have minimal impact on your overall rating.</p>

        <h2>How to Get More Google Reviews</h2>

        <p><strong>Ask at the Right Moment</strong></p>
        <p>The best time to request a review is when customers are clearly satisfied—after they've complimented the food, during payment, or when they're expressing how much they enjoyed their experience.</p>

        <p><strong>Make It Easy</strong></p>
        <p>Provide QR codes on receipts or table tents that link directly to your Google review page. The fewer steps required, the more likely customers are to leave a review.</p>

        <p><strong>Train Your Staff</strong></p>
        <p>Educate your team on the importance of reviews and give them scripts for naturally requesting feedback. Staff should feel comfortable asking satisfied customers to share their experience online.</p>

        <p><strong>Follow Up After Service</strong></p>
        <p>Send follow-up emails or texts to customers thanking them for their visit and including a direct link to leave a Google review.</p>

        <p><strong>Respond to All Reviews</strong></p>
        <p>Engaging with reviewers—both positive and negative—shows you value customer feedback and encourages others to leave reviews.</p>

        <h2>Quality Over Quantity</h2>

        <p>While the number of reviews matters, quality is equally important. Encourage customers to be specific about what they enjoyed—the service, specific dishes, atmosphere, or overall experience. Detailed reviews are more valuable than simple star ratings.</p>

        <p>Remember, building a strong review profile takes time and consistency. Start implementing a review generation strategy today, and watch as your online reputation drives real business growth.</p>
      `
    }
  };

  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/" className="text-coral-600 hover:text-coral-700">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link to="/" className="text-coral-600 hover:text-coral-700 mb-6 inline-block">
            ← Back to Home
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wide mb-4">
              {article.category}
            </span>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
              <span>{article.readTime}</span>
              <span>|</span>
              <span>{article.date}</span>
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-coral-600 text-white font-semibold rounded-lg hover:bg-coral-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticlePage;

