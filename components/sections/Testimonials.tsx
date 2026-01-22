"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Campty made my camping experience unforgettable. The guides were knowledgeable and the locations were breathtaking!",
      name: "Wade Warren",
      role: "Photographer",
      avatar: "WW",
    },
    {
      quote:
        "I've been using Campty for years now. It's the best way to discover new camping spots and meet fellow adventurers.",
      name: "Theresa Jordan",
      role: "Traveler",
      avatar: "TJ",
    },
    {
      quote:
        "The booking process is so easy, and the community is amazing. Highly recommend for any outdoor enthusiast!",
      name: "James Wilson",
      role: "Climber",
      avatar: "JW",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="bg-white container mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 text-primary-blue mx-auto mb-8"
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16"
      >
        Satisfied Customers Are Our Best Ads.
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-blue text-6xl font-bold mb-4">
                "
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-orange rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
