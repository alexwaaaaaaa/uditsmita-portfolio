"use client";

import React, { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ThemeProvider from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import StatsBand from "@/components/StatsBand";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <Preloader onComplete={() => setPreloaderDone(true)} />
        <ScrollProgress />
        <CursorGlow />
        
        <div className="relative min-h-screen bg-[#FDF3EC] dark:bg-[#082523] text-[#0B3D3C] dark:text-[#FDF3EC] transition-colors duration-400">
          <Navbar />
          <main>
            <HeroSection />
            <SkillsMarquee />
            <ExperienceSection />
            <div id="about">
              <WhatIDoSection />
            </div>
            <StatsBand />
          </main>
          <FooterSection />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
