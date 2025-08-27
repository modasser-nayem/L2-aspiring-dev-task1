"use client";

import LandingPage from "@/components/landing/Landing";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const HomePage = () => {
   return (
      <div className="">
         <main>
            <Header />
            <LandingPage />
            <Footer />
         </main>
      </div>
   );
};

export default HomePage;
