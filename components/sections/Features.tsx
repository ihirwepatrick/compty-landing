"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Lot Of Choises",
      description: "We have 1K+ camping destination that working with us.",
      icon: (
        <Image
          src="/assets/globe.svg"
          alt="Globe icon"
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      ),
    },
    {
      title: "Best Camp Guide",
      description: "Our camp guide is ready to guide you anytime & anywhere.",
      icon: (
        <Image
          src="/assets/luggage.svg"
          alt="Luggage icon"
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      ),
    },
    {
      title: "Easy Booking",
      description: "With an easy, safe and fast ticket purchase process.",
      icon: (
        <Image
          src="/assets/boarding-pass.jpg"
          alt="Boarding pass icon"
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="container mx-auto px-4"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 text-primary-blue"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            That The Way To Camp!
          </h2>
          <p className="text-lg text-gray-600">
            Try a variety of benefits when using our services.
          </p>
        </motion.div>

        {/* Right Content - Feature Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow flex-1"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
