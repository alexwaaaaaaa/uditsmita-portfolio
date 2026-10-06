"use client";

import React, { useRef } from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function SkillsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Skew slightly with scroll velocity
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [-3, 3]);

  const items = portfolioData.marqueeSkills;
  // Repeat list 4 times for smooth infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className="relative w-full py-4 sm:py-5 overflow-hidden -my-2 z-20"
    >
      {/* Tilted Warm Yellow Banner */}
      <motion.div
        style={{ skewX }}
        className="w-[105%] -ml-[2.5%] py-4 sm:py-5 bg-[#FBD57A] text-[#0F4C4A] shadow-md -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out border-y-2 border-[#0F4C4A]/10 select-none group"
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center space-x-8 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {repeatedItems.map((skill, index) => (
              <div
                key={`marquee-${index}`}
                className="flex items-center space-x-8"
              >
                <span className="font-serif-heading font-bold text-lg sm:text-2xl md:text-3xl tracking-tight uppercase">
                  {skill}
                </span>
                <span className="text-[#0F4C4A] text-xl sm:text-2xl opacity-75">
                  ✦
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
