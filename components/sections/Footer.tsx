"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = {
    company: ["About Us", "Features", "News", "FAQ"],
    resources: ["Events", "Promo", "Req Demo"],
    support: ["Account", "Support Center", "Feedback", "Contact Us", "Accessibility"],
  };

  const socialIcons = [
    { name: "instagram", icon: Instagram },
    { name: "facebook", icon: Facebook },
    { name: "twitter", icon: Twitter },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary-blue text-white py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-blue" />
              </div>
              <span className="text-2xl font-bold">Campty.</span>
            </div>
            <p className="text-white/80 max-w-md">
              We always make our customer happy by providing as many choices as
              possible.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                >
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                >
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                >
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mb-4">
              <p className="text-white/80 mb-3">Contact Info</p>
              <a
                href="mailto:Compty@gmail.com"
                className="text-white hover:underline"
              >
                Compty@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href="#"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="border-t border-white/20 pt-8 text-center text-white/60"
        >
          <p>Copyright © 2022 Campty. All right reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
