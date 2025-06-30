"use client";
import React from "react";
import { motion } from "framer-motion";

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
                <div className="p-5 rounded-2xl border shadow-lg shadow-primary/10 max-w-xs w-full text-sm" key={i}>
                  <div className="flex items-center mb-3" aria-label="5 star Google review">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                    ))}
                  </div>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
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
    <section className="bg-background my-10 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-full max-w-full px-0 sm:max-w-[540px] sm:px-4 mx-auto pt-4 mt-2"
        >
          <h2 className="w-full text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            <span className="inline-block">
              <span className="whitespace-nowrap">3-5X More Google Reviews</span><br />
              <span className="text-primary">in 90 Days</span>
            </span>
          </h2>
        </motion.div>
        <p className="text-center opacity-75 mt-2 max-w-[calc(3*16rem+2*1rem)] mx-auto px-2 text-sm">
          Restaurants using Bot & Table average 47 new Google reviews in their first 90 days, compared to 8-12 reviews for restaurants doing it manually. More reviews mean higher Google rankings, more customer trust, and significantly more new customers finding your restaurant online
        </p>

        <div className="flex justify-center gap-3 mt-4 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[400px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 