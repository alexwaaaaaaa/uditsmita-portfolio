"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Feather, FileText, Calendar, GraduationCap, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SparkleStar } from "./ui/Doodles";

export default function WhatIDoSection() {
  const iconMap = {
    monitor: Laptop,
    "pen-tool": Feather,
    "file-text": FileText,
    calendar: Calendar,
  };

  return (
    <section id="what-i-do" className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Blob - Top Right */}
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#FBD57A]/15 blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Morphing Blob with 3D Avatar, Crown & Smiley Sticker */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[300px] sm:w-[360px] md:w-[400px] h-[340px] sm:h-[400px] md:h-[440px] flex items-center justify-center">
              
              {/* Golden Crown / Sparkle Doodle Floating Above Avatar */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 sm:-top-6 left-12 sm:left-16 z-30 pointer-events-none"
              >
                <svg
                  width="54"
                  height="44"
                  viewBox="0 0 60 50"
                  fill="none"
                  stroke="#FBD57A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                >
                  <path d="M6 38L14 10L28 26L42 10L50 38H6Z" fill="#FBD57A" fillOpacity="0.2" />
                  <circle cx="14" cy="8" r="3" fill="#FBD57A" />
                  <circle cx="28" cy="24" r="3" fill="#FBD57A" />
                  <circle cx="42" cy="8" r="3" fill="#FBD57A" />
                </svg>
              </motion.div>

              {/* Sparkle top right */}
              <div className="absolute -top-4 right-10 z-20">
                <SparkleStar size={28} color="#F8A98A" delay={0.5} />
              </div>

              {/* Morphing Blob Frame */}
              <div className="relative w-full h-full animate-morph-blob bg-[#3F9A94] dark:bg-[#2F7E79] shadow-2xl overflow-hidden p-3 transition-colors duration-400">
                <div className="relative w-full h-full rounded-[40%] overflow-hidden">
                  <Image
                    src={portfolioData.personal.avatar3dImage}
                    alt="Uditsmita 3D Character Avatar"
                    fill
                    sizes="(max-width: 768px) 360px, 400px"
                    className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C4A]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Peach Smiley Sticker Badge - Bottom Left (matches reference) */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 z-30 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F8A98A] shadow-xl flex items-center justify-center cursor-pointer border-4 border-[#FDF3EC] dark:border-[#082523]"
              >
                <span className="text-2xl sm:text-3xl select-none" role="img" aria-label="happy sticker">
                  😊
                </span>
              </motion.div>

              {/* Floating Sparkle Bottom Right */}
              <div className="absolute -bottom-2 right-4 z-20">
                <SparkleStar size={24} color="#FBD57A" delay={1} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: "What I Do" Title + 2x2 Icon Grid */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-8">
              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F4C4A] dark:text-[#FDF3EC]">
                What I Do
              </h2>
              <span className="text-[#F8A98A] text-2xl md:text-3xl">✦</span>
            </div>

            {/* 2x2 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {portfolioData.services.map((service, index) => {
                const IconComponent = iconMap[service.iconName] || Laptop;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="group bg-white dark:bg-[#0D3735] p-6 rounded-3xl shadow-sm hover:shadow-xl border border-[#0F4C4A]/8 dark:border-white/10 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon Container */}
                      <div className="w-13 h-13 rounded-2xl bg-[#0F4C4A] dark:bg-[#FBD57A] text-[#FDF3EC] dark:text-[#082523] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 p-3">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#0F4C4A] dark:text-[#FDF3EC] leading-tight">
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#4B6E6D] dark:text-[#A3CBC8] mt-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* EDUCATION CARDS / PILLS */}
            <div className="mt-10 pt-8 border-t border-[#0F4C4A]/10 dark:border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-5 h-5 text-[#3F9A94]" />
                <h3 className="font-serif-heading font-bold text-lg text-[#0F4C4A] dark:text-[#FDF3EC]">
                  Academic Background
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {portfolioData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2.5 rounded-2xl border text-xs sm:text-sm transition-all duration-300 flex items-center space-x-2 ${
                      edu.isCurrent
                        ? "bg-[#0F4C4A] text-white border-[#0F4C4A] dark:bg-[#FBD57A] dark:text-[#082523] shadow-md ring-2 ring-[#F8A98A]"
                        : "bg-white/80 dark:bg-[#0D3735]/80 text-[#0B3D3C] dark:text-[#FDF3EC] border-[#0F4C4A]/10 dark:border-white/10"
                    }`}
                  >
                    {edu.isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-[#F8A98A] dark:bg-[#0F4C4A] animate-ping" />
                    )}
                    <span className="font-semibold">{edu.degree}</span>
                    <span className="opacity-60">•</span>
                    <span className="opacity-80">{edu.institution}</span>
                    <span className="opacity-60 font-mono">({edu.period})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
