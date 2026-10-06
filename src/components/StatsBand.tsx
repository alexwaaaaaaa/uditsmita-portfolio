"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SparkleStar } from "./ui/Doodles";

function CounterItem({
  value,
  suffix,
  label,
  description,
}: {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600; // ms
    const stepTime = Math.max(16, Math.floor(duration / value));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-start sm:items-center text-left sm:text-center">
      <div className="font-serif-heading font-black text-4xl sm:text-5xl md:text-6xl text-[#0F4C4A] leading-none flex items-center">
        <span>{count}</span>
        <span className="text-[#0F4C4A] ml-0.5">{suffix}</span>
      </div>
      <div className="font-sans font-bold text-xs sm:text-sm text-[#0F4C4A] mt-2 uppercase tracking-wider">
        {label}
      </div>
      {description && (
        <div className="font-sans text-[11px] text-[#0F4C4A]/70 mt-0.5 hidden md:block">
          {description}
        </div>
      )}
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-[#FBD57A] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden text-[#0F4C4A]">
        
        {/* Decorative Pulsing Sparkle in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
          <SparkleStar size={64} color="#0F4C4A" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* LEFT: Pull Quote with Author info */}
          <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#0F4C4A]/15 pb-8 lg:pb-0">
            <blockquote className="font-serif-heading text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-[#0F4C4A]">
              &ldquo;{portfolioData.personal.pullQuote}&rdquo;
            </blockquote>

            <div className="flex items-center space-x-4 mt-6 sm:mt-8">
              {/* Monogram / Avatar circle */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0F4C4A] shadow-md bg-[#0F4C4A]">
                <Image
                  src={portfolioData.personal.heroImage}
                  alt={portfolioData.personal.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#0F4C4A]">
                  {portfolioData.personal.name}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#0F4C4A]/80 font-medium">
                  {portfolioData.personal.role}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: 3 Count-up Stats with Dividers */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4 sm:gap-6 divide-x divide-[#0F4C4A]/15">
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? "pl-4 sm:pl-6" : ""}>
                <CounterItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
