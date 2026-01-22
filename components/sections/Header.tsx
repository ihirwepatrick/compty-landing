"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Sparkles, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handlePricingToggle = () => {
    setIsPricingOpen(!isPricingOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsPricingOpen(false);
      }
    };

    if (isPricingOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPricingOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm mx-12"
    >
      <nav className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">Campty.</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-primary-blue transition-colors"
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-primary-blue transition-colors"
          >
            About
          </motion.a>
          <div className="relative" ref={dropdownRef}>
            <motion.button
              onClick={handlePricingToggle}
              whileHover={{ scale: 1.1 }}
              className="text-gray-700 hover:text-primary-blue transition-colors flex items-center gap-1"
              aria-expanded={isPricingOpen}
              aria-haspopup="true"
            >
              Pricing
              <motion.div
                animate={{ rotate: isPricingOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {isPricingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-2 min-w-[150px] z-50"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsPricingOpen(false)}
                  >
                    Basic
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setIsPricingOpen(false)}
                  >
                    Premium
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-primary-blue transition-colors"
          >
            Contact
          </motion.a>
          <motion.a
            href="#blog"
            whileHover={{ scale: 1.1 }}
            className="text-gray-700 hover:text-primary-blue transition-colors"
          >
            Blog
          </motion.a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-medium"
          >
            Register
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;
