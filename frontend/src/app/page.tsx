import AboutSection from "@/components/landing/AboutSection";
import CallToAction from "@/components/landing/CallToAction";
import CategorySection from "@/components/landing/CategorySection";
import FeaturedSection from "@/components/landing/FeaturedSection";
import HeroSection from "@/components/landing/HeroSection";
import Newsletter from "@/components/landing/Newsletter";
import Testimonials from "@/components/landing/Testimonials";
import React from "react";

const HomePage = () => {
   return (
      <div className="">
         <main className="font-sans">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Posts */}
            <FeaturedSection />

            {/* Categories Section */}
            <CategorySection />

            {/* About Section */}
            <AboutSection />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Newsletter Signup */}
            <Newsletter />

            {/* Call To Action */}
            <CallToAction />
         </main>
      </div>
   );
};

export default HomePage;
