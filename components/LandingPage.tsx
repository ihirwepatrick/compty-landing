"use client";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Features from "@/components/sections/Features";
import MapSection from "@/components/sections/MapSection";
import Community from "@/components/sections/Community";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8">
      <Header />
      <Hero />
      <Statistics />
      <Features />
      <MapSection />
      <Community />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
