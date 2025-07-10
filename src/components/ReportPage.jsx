import React, { useMemo } from 'react';
import Testimonials from "./ui/Testimonials";

// Font Awesome CDN and Google Fonts are assumed to be included in index.html

const WEBHOOK_URL = 'https://your-n8n-webhook-url-here'; // <-- Replace with actual webhook

const industries = [
  'Home Services',
  'Beauty & Wellness',
  'Lawn & Landscaping',
  'Other',
];
const employees = [
  '1-5', '6-20', '21-50', '51-100', '100+',
];
const challenges = [
  'Getting new customers',
  'Retaining clients',
  'Managing staff',
  'Manual admin work',
  'Other',
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: '“The AI assessment showed us exactly where to automate. We saved 15 hours a week and grew revenue 30%!”',
    company: 'Glow Spa',
  },
  {
    name: 'James L.',
    text: '“Super easy, fast, and the insights were spot on. Our team is happier and our customers notice the difference.”',
    company: 'GreenScape Lawns',
  },
  {
    name: 'Priya S.',
    text: '“I was skeptical, but this tool is a game changer. We streamlined our workflow and saw results in weeks.”',
    company: 'Urban Cleaners',
  },
];

const initialState = {
  business: '',
  first: '',
  last: '',
  email: '',
  phone: '',
  industry: '',
  employees: '',
  challenge: '',
};

function validate(fields) {
  const errors = {};
  if (!fields.business) errors.business = 'Business name is required';
  if (!fields.first) errors.first = 'First name is required';
  if (!fields.last) errors.last = 'Last name is required';
  if (!fields.email) errors.email = 'Email is required';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) errors.email = 'Invalid email';
  if (!fields.phone) errors.phone = 'Phone is required';
  else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(fields.phone)) errors.phone = 'Format: (555) 555-5555';
  if (!fields.industry) errors.industry = 'Select an industry';
  if (!fields.employees) errors.employees = 'Select number of employees';
  if (!fields.challenge) errors.challenge = 'Select a challenge';
  return errors;
}

function formatPhone(value) {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6,10)}`;
}

// Helper to extract fields from Google Place object
function getPlaceField(place, field) {
  if (!place) return '';
  if (field === 'name') return place.displayName?.text || place.name || '';
  if (field === 'address') return place.formatted_address || place.vicinity || place.address || '';
  if (field === 'phone') return place.formatted_phone_number || place.international_phone_number || '';
  if (field === 'website') return place.website || '';
  if (field === 'hours') return place.opening_hours?.weekday_text?.join(', ') || '';
  if (field === 'lat') return place.geometry?.location?.lat?.() || place.geometry?.location?.lat || '';
  if (field === 'lng') return place.geometry?.location?.lng?.() || place.geometry?.location?.lng || '';
  return '';
}

export default function ReportPage({ formData, onStartOver }) {
  // Scaffold: extract all funnel data
  const { restaurant, answers, name, email } = formData || {};

  // Extract Google Place fields
  const businessName = getPlaceField(restaurant, 'name');
  const address = getPlaceField(restaurant, 'address');
  const phone = getPlaceField(restaurant, 'phone');
  const website = getPlaceField(restaurant, 'website');
  const hours = getPlaceField(restaurant, 'hours');
  const lat = getPlaceField(restaurant, 'lat');
  const lng = getPlaceField(restaurant, 'lng');
  const reviews = restaurant?.reviews || [];
  const photos = restaurant?.photos || [];

  // Simple grading system for profile completeness
  let profileScore = 0;
  let profileMax = 4;
  if (businessName) profileScore++;
  if (address) profileScore++;
  if (phone) profileScore++;
  if (website) profileScore++;
  const profileGrade = profileScore === 4 ? 'A+' : profileScore === 3 ? 'B' : profileScore === 2 ? 'C' : 'D';

  // Helper: get Google review link
  function getGoogleReviewLink(restaurant) {
    if (restaurant && restaurant.place_id) {
      return `https://www.google.com/maps/place/?q=place_id:${restaurant.place_id}`;
    }
    return '#';
  }

  // Helper: get star breakdown
  function getStarBreakdown(reviews = []) {
    const breakdown = [0, 0, 0, 0, 0];
    reviews.forEach(r => {
      if (r.rating >= 1 && r.rating <= 5) breakdown[Math.floor(r.rating) - 1]++;
    });
    return breakdown;
  }

  // Helper: get hours breakdown
  function getHoursRows(hours) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(day => {
      const open = hours && hours[day.toLowerCase()];
      return { day, open };
    });
  }

  // Wide card layout
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fdf3d9', minHeight: '100vh', color: '#1e293b', padding: '40px 0' }}>
      {/* Standalone Header/Navbar */}
      <header style={{ position: 'sticky', top: 0, left: 0, right: 0, background: '#fff', zIndex: 100, boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2.5rem', height: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src="/src/assets/bot-table-logo.png" alt="Logo" style={{ height: 40 }} />
          <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: '#27a1c2' }}>Bot & Table</span>
        </div>
        <button
          style={{
            background: '#27a1c2',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 24px',
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            marginLeft: 24,
            boxShadow: '0 2px 8px #27a1c122',
            transition: 'background 0.2s',
          }}
          onClick={onStartOver}
        >
          Home
        </button>
      </header>
      {/* Testimonials Section - matches Home page */}
      <Testimonials />
      {/* Business Overview Wide Card */}
      <div style={{
        maxWidth: 1400,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 32,
        boxShadow: '0 4px 32px #27a1c211',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}>
        {/* Top Row: Logo, Name, Website, Grade, Star Breakdown, Hours */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
          <img src={restaurant.photos?.[0]?.url || "/src/assets/bot-table-logo.png"} alt="Business Logo" style={{ width: 96, height: 96, borderRadius: 16, objectFit: 'cover', boxShadow: '0 2px 8px #0001' }} />
          <div style={{ flex: 1, minWidth: 220 }}>
            {/* Business Name as Google Profile Link */}
            {restaurant?.url || restaurant?.place_id ? (
              <a
                href={
                  restaurant?.url
                    ? restaurant.url
                    : `https://www.google.com/maps/place/?q=place_id:${restaurant.place_id}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#2563eb',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'text-decoration 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
              >
                {getPlaceField(restaurant, 'name') || 'Business Name'}
              </a>
            ) : (
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#aaa',
                  cursor: 'not-allowed',
                }}
                title="Google profile link unavailable"
              >
                {getPlaceField(restaurant, 'name') || 'Business Name'}
              </span>
            )}
            <a href={restaurant.website} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 500, fontSize: 18, textDecoration: 'underline', marginTop: 4, display: 'inline-block' }}>{restaurant.website}</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <span style={{ fontSize: 16, color: '#64748b' }}>Profile Grade:</span>
            <span style={{ background: '#fee2e2', color: '#b91c1c', fontWeight: 700, borderRadius: 12, padding: '6px 18px', fontSize: 20 }}>{profileGrade.label} ({profileGrade.score}/{profileGrade.total})</span>
          </div>
          {/* Star Breakdown & Review Count */}
          <div style={{ minWidth: 220, flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Google Reviews</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 32, color: '#fbbf24', fontWeight: 800, lineHeight: 1 }}>
                {restaurant.rating ? restaurant.rating.toFixed(1) : (restaurant.reviews && restaurant.reviews.length > 0 ? (
                  (restaurant.reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / restaurant.reviews.length).toFixed(1)
                ) : 'N/A')}
                <span style={{ fontSize: 28, marginLeft: 4 }}>★</span>
              </span>
            </div>
            <a href={getGoogleReviewLink(restaurant)} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 500, fontSize: 18, textDecoration: 'underline', marginTop: 2 }}>
              {restaurant.user_ratings_total || (restaurant.reviews?.length || 0)} Reviews
            </a>
          </div>
          {/* Hours Breakdown */}
          <div style={{ minWidth: 220, flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Hours</div>
            {(() => {
              const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
              const weekdayText = restaurant.hours?.weekday_text || [];
              return days.map((day, idx) => {
                // Google returns e.g. "Monday: 9:00 AM – 5:00 PM"
                const hoursStr = weekdayText.find(str => str.startsWith(day + ':'));
                return (
                  <div key={day} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16 }}>
                    <span style={{ width: 90 }}>{day}:</span>
                    {hoursStr ? (
                      <span style={{ color: '#22c55e', fontWeight: 600 }}>{hoursStr.replace(day + ': ', '')}</span>
                    ) : (
                      <span style={{ color: '#ef4444', fontWeight: 600 }}>✘</span>
                    )}
                  </div>
                );
              });
            })()}
          </div>
        </div>
        {/* Second Row: Recent Reviews and Photos side by side */}
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {/* Scrollable Reviews */}
          <div style={{ minWidth: 320, maxWidth: 500, flex: '2 1 320px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Recent Reviews</div>
            <div style={{ overflowY: 'auto', borderRadius: 12, border: '1px solid #f1f5f9', background: '#f9fafb', padding: 8, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {(restaurant.reviews || []).slice(0, 20).map((r, idx, arr) => (
                <div key={idx} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 14, fontSize: 15, minHeight: 80, marginBottom: idx < arr.length - 1 ? 18 : 0, borderBottom: idx < arr.length - 1 ? '1px solid #f1f5f9' : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 600, color: '#1e293b', marginBottom: 4 }}>{r.author_name} <span style={{ color: '#fbbf24' }}>{'★'.repeat(Math.round(r.rating))}</span></div>
                  <div style={{ color: '#64748b', fontSize: 14, flex: 1, marginBottom: 6 }}>{r.text}</div>
                  <div style={{ color: '#94a3b8', fontSize: 12 }}>{r.relative_time_description}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Photos Grid */}
          <div style={{ minWidth: 320, flex: '3 1 0', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'flex-start' }}>
            <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Photos</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              width: '100%',
              alignItems: 'start',
            }}>
              {(restaurant.photos || []).slice(0, 12).map((p, idx) => (
                <img
                  key={idx}
                  src={p.url}
                  alt={`Photo ${idx + 1}`}
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: 14,
                    boxShadow: '0 2px 8px #0001',
                    minHeight: 140,
                    maxHeight: 320,
                    background: '#f3f4f6',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Funnel Insights & ROI */}
      <section style={{ flex: '1 1 420px', maxWidth: 540, minWidth: 340, background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px #27a1c211', padding: 40, marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#db5439', marginBottom: 16 }}>Your Answers & Insights</h2>
        {/* Revenue Card */}
        <FunnelCard
          title="Revenue & ROI"
          icon="💰"
          value={answers?.[0] || 'N/A'}
          chartType="bar"
          insight={getRevenueInsight(answers?.[0])}
          recommendation={getRevenueRecommendation(answers?.[0])}
        />
        {/* Marketing List Card */}
        <FunnelCard
          title="Marketing List"
          icon="📧"
          value={answers?.[1] || 'N/A'}
          chartType="progress"
          insight={getListInsight(answers?.[1])}
          recommendation={getListRecommendation(answers?.[1])}
        />
        {/* AI Usage Card */}
        <FunnelCard
          title="AI Automation"
          icon="🤖"
          value={answers?.[2] || 'N/A'}
          chartType="progress"
          insight={getAIInsight(answers?.[2])}
          recommendation={getAIRecommendation(answers?.[2])}
        />
      </section>
      {/* Export/Share/Start Over (sticky footer or floating action) */}
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <button
          style={{
            background: '#db5439',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 24px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            margin: '0 12px',
          }}
          onClick={onStartOver}
        >
          Start Over
        </button>
        {/* TODO: Add export/share buttons */}
      </div>
    </div>
  );
}

function inputStyle(error) {
  return {
    width: '100%',
    border: error ? '2px solid #db5439' : '1.5px solid #e5e7eb',
    background: '#f9fafb',
    borderRadius: 12,
    padding: '12px 14px',
    fontSize: 17,
    marginBottom: 0,
    outline: 'none',
    transition: 'border 0.2s',
  };
}

// FunnelCard component
function FunnelCard({ title, icon, value, chartType, insight, recommendation }) {
  // Fix: Render value as a string if it's an object (e.g., marketing list answer)
  let displayValue = value;
  if (typeof value === 'object' && value !== null) {
    if (value.yes) {
      displayValue = `Yes${value.count ? `, ${value.count} people` : ''}`;
    } else {
      displayValue = JSON.stringify(value);
    }
  }
  return (
    <div style={{ background: '#fdf3d9', borderRadius: 18, boxShadow: '0 2px 12px #27a1c211', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 28 }}>{icon}</span>
        <span style={{ fontWeight: 800, fontSize: 20, color: '#1e293b' }}>{title}</span>
      </div>
      <div style={{ fontSize: 16, color: '#64748b', fontWeight: 600 }}>Your Answer: <span style={{ color: '#27a1c2', fontWeight: 700 }}>{displayValue}</span></div>
      {chartType === 'bar' && <BarChart revenue={value} />}
      {chartType === 'progress' && <ProgressBar value={value} />}
      <div style={{ color: '#1e293b', fontWeight: 600, margin: '8px 0' }}>{insight}</div>
      <div style={{ color: '#db5439', fontWeight: 700 }}>{recommendation}</div>
    </div>
  );
}

// BarChart for Revenue ROI
function BarChart({ revenue }) {
  // Parse revenue string to number
  const rev = typeof revenue === 'string' ? parseInt(revenue.replace(/[^0-9]/g, '')) : revenue;
  // Industry: AI automation can recover 8% of revenue lost to missed calls, reviews, retention
  const recovered = rev ? Math.round(rev * 0.08) : 0;
  return (
    <div style={{ margin: '12px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: '#64748b', fontWeight: 600 }}>Current</span>
        <div style={{ flex: 1, height: 18, background: '#e5e7eb', borderRadius: 9, overflow: 'hidden', position: 'relative' }}>
          <div style={{ width: `${rev ? 60 : 0}%`, height: '100%', background: 'linear-gradient(90deg, #27a1c2 0%, #db5439 100%)', borderRadius: 9, transition: 'width 0.5s' }}></div>
        </div>
        <span style={{ color: '#27a1c2', fontWeight: 700 }}>${rev ? rev.toLocaleString() : '0'}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
        <span style={{ color: '#64748b', fontWeight: 600 }}>With Automation</span>
        <div style={{ flex: 1, height: 18, background: '#e5e7eb', borderRadius: 9, overflow: 'hidden', position: 'relative' }}>
          <div style={{ width: `${rev ? 80 : 0}%`, height: '100%', background: 'linear-gradient(90deg, #7CFCB5 0%, #27a1c2 100%)', borderRadius: 9, transition: 'width 0.5s' }}></div>
        </div>
        <span style={{ color: '#27a1c2', fontWeight: 700 }}>${rev ? (rev + recovered).toLocaleString() : '0'}</span>
      </div>
    </div>
  );
}

// ProgressBar for List/AI Usage
function ProgressBar({ value }) {
  let percent = 0;
  if (typeof value === 'string') {
    if (value.toLowerCase().includes('yes')) percent = 80;
    else if (value.toLowerCase().includes('no')) percent = 30;
    else if (!isNaN(Number(value))) percent = Math.min(100, Number(value) / 20);
  }
  return (
    <div style={{ margin: '12px 0' }}>
      <div style={{ height: 18, background: '#e5e7eb', borderRadius: 9, overflow: 'hidden', position: 'relative' }}>
        <div style={{ width: `${percent}%`, height: '100%', background: 'linear-gradient(90deg, #27a1c2 0%, #db5439 100%)', borderRadius: 9, transition: 'width 0.5s' }}></div>
      </div>
    </div>
  );
}

// Dynamic insights and recommendations
function getRevenueInsight(revenue) {
  const rev = typeof revenue === 'string' ? parseInt(revenue.replace(/[^0-9]/g, '')) : revenue;
  if (!rev) return 'Enter your monthly revenue to see your automation ROI.';
  const recovered = Math.round(rev * 0.08);
  return `Restaurants using AI automation typically recover $${recovered.toLocaleString()} per month in lost revenue.`;
}
function getRevenueRecommendation(revenue) {
  const rev = typeof revenue === 'string' ? parseInt(revenue.replace(/[^0-9]/g, '')) : revenue;
  if (!rev) return 'Add your revenue to see personalized recommendations.';
  return 'Implementing AI for calls, reviews, and retention can deliver 3–10x ROI in 3–6 months.';
}
function getListInsight(listAnswer) {
  if (!listAnswer) return 'Do you have a marketing list?';
  if (typeof listAnswer === 'string' && listAnswer.toLowerCase().includes('no')) {
    return 'Restaurants without a marketing list miss out on 18–35% more repeat visits.';
  }
  if (typeof listAnswer === 'string' && listAnswer.toLowerCase().includes('yes')) {
    return 'Growing your list and automating outreach can add $2,000–$5,000/month.';
  }
  if (!isNaN(Number(listAnswer))) {
    return `With ${listAnswer} contacts, you could generate $${(Number(listAnswer) * 2).toLocaleString()} in repeat business per month.`;
  }
  return '';
}
function getListRecommendation(listAnswer) {
  if (!listAnswer) return 'Start building your list to unlock more revenue.';
  if (typeof listAnswer === 'string' && listAnswer.toLowerCase().includes('no')) {
    return 'We recommend launching an automated list-building campaign.';
  }
  if (typeof listAnswer === 'string' && listAnswer.toLowerCase().includes('yes')) {
    return 'Automate your list outreach for maximum ROI.';
  }
  if (!isNaN(Number(listAnswer))) {
    return 'Segment and automate your list for best results.';
  }
  return '';
}
function getAIInsight(aiAnswer) {
  if (!aiAnswer) return 'Are you using AI automation?';
  if (typeof aiAnswer === 'string' && aiAnswer.toLowerCase().includes('no')) {
    return 'AI automation can save 10+ hours/week and boost revenue 25–45%.';
  }
  if (typeof aiAnswer === 'string' && aiAnswer.toLowerCase().includes('yes')) {
    return "You're ahead of the curve! Let's optimize your automation for even more ROI.";
  }
  return '';
}
function getAIRecommendation(aiAnswer) {
  if (!aiAnswer) return 'Explore AI solutions for your restaurant.';
  if (typeof aiAnswer === 'string' && aiAnswer.toLowerCase().includes('no')) {
    return 'Book a call to see how AI can transform your business.';
  }
  if (typeof aiAnswer === 'string' && aiAnswer.toLowerCase().includes('yes')) {
    return 'Ask us about advanced AI integrations for restaurants.';
  }
  return '';
} 
