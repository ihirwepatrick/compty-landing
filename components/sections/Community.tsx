"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Twitter, Instagram } from "lucide-react";

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    { x: "10%", y: "20%", message: "Join Us!!" },
    { x: "30%", y: "10%", message: "Welcome!!" },
    { x: "50%", y: "15%", message: "Hello!!!" },
    { x: "70%", y: "25%", message: "" },
    { x: "20%", y: "40%", message: "" },
    { x: "60%", y: "45%", message: "" },
    { x: "80%", y: "50%", message: "" },
  ];

  return (
    <section
      ref={ref}
      className="container mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
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
            className="w-16 h-16"
          >
            <img
              src="/assets/line-1.svg"
              alt="Decorative line"
              className="w-full h-full object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(2878%) hue-rotate(212deg) brightness(96%) contrast(96%)" }}
            />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Community Service Is Calling, No Need For Stalling.
          </h2>
          <p className="text-lg text-gray-600">
            Want more fun camping, join our community to get friends to camp
            together and feel the sensation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg"
          >
            Join Community
          </motion.button>
        </motion.div>

        {/* Right - Community Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 overflow-hidden"
        >
          {/* Wavy Line */}
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 300"
          >
            <path
              d="M0,150 Q100,100 200,150 T400,150"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary-blue opacity-30"
            />
          </motion.svg>

          {/* Profile Avatars */}
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                delay: index * 0.1 + 0.5,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="absolute"
              style={{ left: profile.x, top: profile.y }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    src="/assets/boy.jpg"
                    alt="Community member"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                {profile.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-xs whitespace-nowrap"
                  >
                    {profile.message}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Social Media Icons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            {[
              { name: "twitter", icon: Twitter },
              { name: "instagram", icon: Instagram },
              { name: "tiktok", icon: Twitter }, // Using Twitter as placeholder for TikTok
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5 text-primary-blue" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
