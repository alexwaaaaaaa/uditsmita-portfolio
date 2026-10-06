"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import RotatingBadge from "./ui/RotatingBadge";
import { SparkleStar, StarburstLines, RingAndDot, ScribbleUnderline } from "./ui/Doodles";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const archY = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  const firstName = portfolioData.personal.firstName;
  const lastName = portfolioData.personal.lastName;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] md:min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden flex items-center justify-center bg-[#FDF3EC] dark:bg-[#082523] transition-colors duration-400"
    >
      {/* Decorative Organic Blob - Top Right (matches reference) */}
      <div className="absolute top-0 right-0 w-80 md:w-[460px] h-80 md:h-[460px] rounded-bl-[160px] md:rounded-bl-[220px] bg-[#0F4C4A] dark:bg-[#051A18] -z-0 pointer-events-none transition-colors duration-400" />

      {/* Decorative Starburst Doodle in Top Right */}
      <div className="absolute top-14 md:top-20 right-1/4 md:right-[38%] pointer-events-none hidden sm:block z-10">
        <StarburstLines size={48} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Typography & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* "Hello, I'm" subtitle with Sparkle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-3 mb-2"
            >
              <h2 className="font-serif-heading text-2xl md:text-3xl font-bold tracking-tight text-[#0F4C4A] dark:text-[#FDF3EC]">
                Hello, I&apos;m
              </h2>
              <SparkleStar size={22} color="#FBD57A" delay={0.2} />
            </motion.div>

            {/* Huge Name in Playfair Display (Semantic H1 for SEO) */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="font-serif-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[106px] text-[#0F4C4A] dark:text-[#FDF3EC] tracking-tight leading-[0.98]"
              >
                <span className="block">{firstName}</span>
                <span className="block mt-1 sm:mt-2 flex items-center">
                  <span>{lastName}</span>
                  <span className="ml-4 inline-block -translate-y-3">
                    <SparkleStar size={36} color="#FBD57A" delay={0.5} />
                  </span>
                </span>
              </motion.h1>
            </div>

            {/* Script Role Line: "Content Strategist & Writer" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-4 md:mt-6 flex flex-col items-start"
            >
              <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#F8A98A] dark:text-[#FBD57A] transform -rotate-1 font-normal tracking-wide">
                {portfolioData.personal.scriptRole}
              </span>
              <ScribbleUnderline color="#F8A98A" className="mt-1" />
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-[#0B3D3C]/80 dark:text-[#FDF3EC]/80 max-w-xl font-sans-body leading-relaxed"
            >
              Turning complex ideas in technology, AI and finance into clear,
              useful stories that connect with businesses and people.
            </motion.p>

            {/* Two Pill CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Teal Button: "View Work ↗" */}
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#0F4C4A] dark:bg-[#FBD57A] text-[#FDF3EC] dark:text-[#082523] font-medium text-base hover:bg-[#0B3836] dark:hover:bg-[#F8A98A] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Peach Button: "About Me ↗" */}
              <a
                href="#what-i-do"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#F8A98A] text-[#0F4C4A] font-medium text-base hover:bg-[#f59773] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>About Me</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Doodles near button row */}
            <div className="mt-8 flex items-center space-x-6 text-[#3F9A94]">
              <RingAndDot />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#3F9A94] dark:text-[#A3CBC8]">
                Based in Kolkata, India
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Yellow Arch Frame + Image + Speech Bubble + Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Sparkle top left of arch */}
            <div className="absolute -top-6 left-6 md:-left-4 z-20">
              <SparkleStar size={34} color="#FBD57A" delay={0.4} />
            </div>

            {/* Rotating Circular Badge "OPEN TO OPPORTUNITIES" - Top Right (Above Arch) */}
            <div className="absolute -top-10 -right-4 sm:-top-12 sm:-right-6 z-30">
              <RotatingBadge text={portfolioData.personal.badgeText} />
            </div>

            {/* Yellow Arch Frame Container */}
            <motion.div
              style={{ y: archY }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative w-[300px] sm:w-[350px] md:w-[390px] h-[430px] sm:h-[490px] md:h-[540px]"
            >
              {/* Warm Yellow Arch Backing */}
              <div className="w-full h-full bg-[#FBD57A] dark:bg-[#D4A936] arch-frame shadow-2xl overflow-hidden p-2">
                {/* Inner Arch Content */}
                <div className="relative w-full h-full arch-frame overflow-hidden">
                  <Image
                    src={portfolioData.personal.heroImage}
                    alt={portfolioData.personal.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 350px, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle inner gradient shade at base */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F4C4A]/30 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Speech-Bubble Card - Overlapping Bottom Right */}
              <motion.div
                style={{ y: bubbleY }}
                initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-30 max-w-[260px] sm:max-w-[300px] bg-[#0F4C4A] dark:bg-[#072422] text-[#FDF3EC] px-5 sm:px-6 py-4 speech-bubble-sharp shadow-2xl border-2 border-[#3F9A94]/40"
              >
                <p className="font-handwriting text-2xl sm:text-3xl text-white leading-snug">
                  {portfolioData.personal.speechBubbleQuote}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="w-12 h-1 bg-[#F8A98A] rounded-full" />
                  <span className="text-xs uppercase tracking-wider text-[#FBD57A] font-semibold">
                    Uditsmita
                  </span>
                </div>
              </motion.div>

              {/* Floating Sparkle Bottom Left */}
              <div className="absolute -bottom-10 right-4 z-20">
                <SparkleStar size={24} color="#F8A98A" delay={1.2} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
