"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years of Experience", value: "10" },
    { label: "Camping Destination", value: "1K+" },
    { label: "Happy Customer", value: "8K" },
    { label: "Overall Rating", value: "4,2" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary-blue py-8 md:py-12"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`text-center text-white ${
                index < stats.length - 1
                  ? "border-r border-white/30 pr-4 md:pr-8"
                  : ""
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-3xl md:text-5xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Statistics;
