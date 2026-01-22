"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const faqs = [
    "What is Campty?",
    "How to book tickets?",
    "What kind of service will I get?",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 md:py-24 bg-gray-50 container mx-auto px-4"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
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
            className="w-16 h-16 text-primary-orange"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Got A Question For Campty?
          </h2>
          <p className="text-lg text-gray-600">
            If there are questions you want to ask, we will answer all your
            questions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-blue"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Right - FAQ List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Maybe your question is have been answered, check this out.
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <motion.div whileHover={{ x: 5 }}>
                  <ChevronRight className="w-6 h-6 text-primary-blue flex-shrink-0" />
                </motion.div>
                <span className="text-gray-900 font-medium">{faq}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
