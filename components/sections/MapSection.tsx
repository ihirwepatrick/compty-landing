"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Calendar, Search, ChevronDown, ArrowRight } from "lucide-react";

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    { x: "15%", y: "25%", name: "Alaska", color: "bg-blue-200" },
    { x: "40%", y: "20%", name: "Canada", color: "bg-green-200" },
    { x: "50%", y: "35%", name: "Norway", color: "bg-orange-200" },
    { x: "25%", y: "55%", name: "Patagonia", color: "bg-red-200" },
    { x: "65%", y: "50%", name: "Sweden", color: "bg-green-300" },
  ];

  return (
    <section
      ref={ref}
      className="bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl p-8 aspect-square overflow-hidden"
          >
            {/* Map SVG Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/map.svg"
                alt="World map with hexagonal pattern"
                className="w-full h-full object-contain opacity-30"
                style={{ filter: "brightness(0.9)" }}
              />
            </div>

            {/* Location Pins with Illustrations */}
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.15 }}
                className="absolute"
                style={{ left: location.x, top: location.y }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Pin Illustration */}
                  <div className={`w-20 h-20 ${location.color} rounded-full border-4 border-white shadow-lg mb-2 flex items-center justify-center overflow-hidden`}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-300 to-green-300 rounded-full" />
                  </div>
                  
                  {/* Orange Flower-like Connector */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="relative -mt-1"
                  >
                    <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    {/* Petals */}
                    <div className="absolute inset-0">
                      {[0, 45, 90, 135].map((angle) => (
                        <div
                          key={angle}
                          className="absolute w-2 h-2 bg-primary-orange rounded-full"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-12px)`,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 relative"
          >
            {/* Decorative Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-4 -right-4 text-primary-blue"
            >
              <ArrowRight className="w-8 h-8" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Forest, Starry Night, Campfire, What Else Do You Need?
            </h2>
            <p className="text-lg text-gray-600">
              Explore more than 1k camping destinations, find your most
              comfortable place to camp and book now.
            </p>

            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white rounded-full border-gray-200 border-2 p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                {/* Location Input */}
                <div className="flex-1 flex items-center gap-3 border-r border-gray-200 pr-4">
                  <MapPin className="w-5 h-5 text-primary-orange stroke-2" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">Location</span>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </div>
                    <input
                      type="text"
                      placeholder="Choose Destination"
                      className="w-full text-sm text-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Date Input */}
                <div className="flex-1 flex items-center gap-3 border-r border-gray-200 pr-4">
                  <Calendar className="w-5 h-5 text-primary-orange stroke-2" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">Date</span>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </div>
                    <input
                      type="text"
                      placeholder="Add Date"
                      className="w-full text-sm text-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
