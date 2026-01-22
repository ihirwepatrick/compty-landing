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
        "Thanks to Campty I can now realize my dream of camping around the world",
      name: "Wade Warren",
      role: "Photographer",
      avatarBg: "bg-blue-200",
      rating: 5,
    },
    {
      quote:
        "I think this is the best camping service I have ever tried and I recommend it to you",
      name: "Theresa Jordan",
      role: "Traveler",
      avatarBg: "bg-pink-200",
      rating: 4,
    },
    {
      quote:
        "Campty helps me a lot in finding interesting camping destinations",
      name: "James Wilson",
      role: "Climber",
      avatarBg: "bg-green-200",
      rating: 3,
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
      className="bg-gradient-to-br from-white to-blue-50 container mx-auto relative"
    >
      {/* Decorative Elements */}
      <div className="relative">
        {/* Two dashed blue lines to the left of heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="absolute left-0 top-8 flex flex-col gap-2"
        >
          <div className="w-12 h-0.5 border-t-2 border-dashed border-primary-blue transform rotate-12" />
          <div className="w-12 h-0.5 border-t-2 border-dashed border-primary-blue transform rotate-12" />
        </motion.div>

        {/* Wavy lines with arrows above and to the right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute right-0 top-0 flex flex-col gap-2"
        >
          <svg className="w-16 h-8 text-primary-blue opacity-60" viewBox="0 0 100 50" fill="none">
            <path d="M10,30 Q30,10 50,30 T90,30" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M85,25 L90,30 L85,35" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="w-16 h-8 text-primary-blue opacity-60" viewBox="0 0 100 50" fill="none">
            <path d="M10,20 Q30,40 50,20 T90,20" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M85,15 L90,20 L85,25" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        {/* Heading with line break */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16 pt-8"
        >
          Satisfied Customers Are
          <br />
          Our Best Ads.
        </motion.h2>
      </div>

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
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Large Blue Quote Icon */}
              <div className="text-primary-blue text-7xl font-bold mb-4 leading-none">
                "
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                {testimonial.quote}
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
                  {/* Cartoonish avatar placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-400 rounded-full" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                  >
                    {i < testimonial.rating ? (
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ) : (
                      <Star className="w-4 h-4 text-gray-300 fill-none stroke-2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows - Black Outline */}
        <div className="hidden md:flex absolute -right-16 top-1/2 transform -translate-y-1/2 gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-10 h-10 border-2 border-gray-900 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-10 h-10 border-2 border-gray-900 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
