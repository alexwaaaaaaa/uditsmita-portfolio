"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";
import ExperienceCard from "./ui/ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import { SparkleStar } from "./ui/Doodles";

type FilterTag = "All" | "Tech" | "Finance" | "Marketing" | "Social Impact";

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  const filterOptions: FilterTag[] = [
    "All",
    "Tech",
    "Finance",
    "Marketing",
    "Social Impact",
  ];

  const filteredItems = portfolioData.experience.filter((item) => {
    if (activeFilter === "All") return true;
    return item.filterTags.includes(activeFilter as any);
  });

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-12">
      {/* Big Dark Teal Rounded Panel */}
      <div className="max-w-7xl mx-auto bg-[#0F4C4A] dark:bg-[#0A2E2C] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden transition-colors duration-400">
        
        {/* Subtle Decorative Star in Panel */}
        <div className="absolute top-8 right-12 opacity-60 pointer-events-none hidden md:block">
          <SparkleStar size={36} color="#FBD57A" delay={0.6} />
        </div>

        {/* TOP ROW: Heading + Filter Chips */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 md:pb-12 border-b border-white/10">
          
          {/* Section Heading */}
          <div className="flex items-center space-x-3">
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Selected Experience
            </h2>
            <span className="text-[#FBD57A] text-2xl md:text-3xl">✦</span>
          </div>

          {/* Filter Chips with Animated Sliding Pill Indicator */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-black/20 p-1.5 rounded-full border border-white/10 backdrop-blur-sm self-start lg:self-auto">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8A98A] ${
                    isActive
                      ? "text-[#0F4C4A] font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="experienceFilterIndicator"
                      className="absolute inset-0 bg-[#F8A98A] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CARDS CONTAINER: Responsive Grid */}
        <div className="pt-8 md:pt-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Subtle footer note inside panel */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/60">
          <p>Click any experience card to view scope, research areas & achievements.</p>
          <p className="mt-2 sm:mt-0 font-medium text-[#FBD57A]">
            Verified with LinkedIn Profile
          </p>
        </div>
      </div>

      {/* Modal for Card Detail */}
      <ExperienceModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
