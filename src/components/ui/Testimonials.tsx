"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: "Absolutely incredible! The food was delicious, the staff was attentive, and the atmosphere was perfect for our family dinner. We'll be back every week!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Local Guide",
  },
  {
    text: "Best dining experience I've had in years. The service was fast, the portions were generous, and every dish was bursting with flavor. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Food Blogger",
  },
  {
    text: "Five stars all the way! The staff made us feel like VIPs and the chef even came out to greet us. The desserts are a must-try!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Google Reviewer",
  },
  {
    text: "Our new favorite spot! The ambiance is cozy, the menu is creative, and every bite was perfection. We left with smiles and full stomachs.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Regular Customer",
  },
  {
    text: "Incredible value and top-notch service. The team went above and beyond for my birthday dinner. Can't wait to celebrate here again!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Birthday Guest",
  },
  {
    text: "Every dish was a delight! The flavors were unique and memorable. The staff's recommendations were spot on. Five stars!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Food Enthusiast",
  },
  {
    text: "We brought our whole team for a work dinner and everyone raved about the food and service. The Google reviews don't lie—this place is amazing!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Team Lead",
  },
  {
    text: "From the appetizers to dessert, everything was perfect. The five-star Google rating is well deserved. We'll be recommending to all our friends!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Happy Customer",
  },
  {
    text: "A true gem! The staff is friendly, the food is outstanding, and the five-star reviews are spot on. Can't wait to return!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Google Local Guide",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-4 rounded-2xl border shadow-lg shadow-primary/10 max-w-[280px] w-full text-sm bg-white" key={i}>
                  <div className="flex items-center mb-3" aria-label="5 star Google review">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                    ))}
                  </div>
                  <div className="text-gray-800 leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-gray-900">{name}</div>
                      <div className="leading-5 text-gray-600 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="w-full py-20 px-4" data-section="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Google Reviews Section - Text Left, Animation Right */}
        <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-yellow-100 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-200 shadow-sm text-yellow-700">
                <svg className="w-4 h-4 mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
                Google Reviews
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  <span className="block">3-5X More Google Reviews</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                    in 90 Days
                  </span>
                </h2>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                  <p className="text-xl leading-relaxed text-gray-700">
                    Restaurants using Bot & Table average <span className="font-semibold text-yellow-600">47 new Google reviews</span> in their first 90 days, compared to 8-12 reviews for restaurants doing it manually. More reviews mean higher Google rankings, more customer trust, and significantly more new customers finding your restaurant online.
                  </p>
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                  <div className="text-2xl font-bold text-yellow-600">47</div>
                  <div className="text-sm text-gray-600">New Reviews</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                  <div className="text-2xl font-bold text-yellow-600">90</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                  <div className="text-2xl font-bold text-orange-600">3-5x</div>
                  <div className="text-sm text-gray-600">More Reviews</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 text-center">
                  <div className="text-2xl font-bold text-yellow-600">100%</div>
                  <div className="text-sm text-gray-600">Automated</div>
                </div>
              </div>

              <Link to="/google-reviews">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-yellow-600 hover:bg-yellow-700 text-white">
                  <ArrowRight className="w-5 h-5" />
                  Learn More About Our Review System
                </Button>
              </Link>
            </div>

            {/* Right Column - Testimonials Animation */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-full mr-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Real Customer Reviews</h4>
                    <p className="text-gray-600">Automated review collection in action</p>
                  </div>
                </div>

                <div className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[300px] overflow-hidden px-2">
                  <TestimonialsColumn testimonials={firstColumn} duration={25} />
                  <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
                  <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
                </div>


              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 text-white p-4 rounded-2xl shadow-lg z-20 animate-bounce bg-yellow-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                  </svg>
                  <span className="font-bold">5-Star Reviews</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg z-20 border border-gray-100 animate-pulse">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-gray-700">90 Day Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 