"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 md:pt-24 container mx-auto px-4"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Decorative Squiggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 text-primary-blue"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Cabin In The Woods But In A{" "}
            <span className="relative">
              Good Way!
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-primary-orange -z-10"
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-md"
          >
            Now you can enjoy camping anywhere and anytime and of course it's
            safe with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/assets/hand-phone-2.png"
                alt="Campty mobile app on phone"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Floating Decorations */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 -right-10 w-12 h-12 bg-primary-blue rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-10 -left-10 w-8 h-8 bg-primary-orange rounded-full opacity-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
