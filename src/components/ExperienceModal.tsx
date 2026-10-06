"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Calendar, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { ExperienceItem } from "@/data/portfolioData";

interface ExperienceModalProps {
  item: ExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceModal({ item, onClose }: ExperienceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#082523]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 25 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl bg-[#FFFDF9] dark:bg-[#0D3735] text-[#0B3D3C] dark:text-[#FDF3EC] rounded-[32px] shadow-2xl border-2 border-[#0F4C4A]/10 dark:border-white/10 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Header with Color Accent Bar */}
            <div
              className="h-2.5 w-full shrink-0"
              style={{ backgroundColor: item.accentColor }}
            />

            {/* Featured Image Banner */}
            {item.image && (
              <div className="relative w-full h-44 sm:h-52 shrink-0 overflow-hidden bg-black/5">
                <Image
                  src={item.image}
                  alt={item.company}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] dark:from-[#0D3735] via-transparent to-black/30 pointer-events-none" />
                <button
                  onClick={onClose}
                  aria-label="Close details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-[#F8A98A] text-white hover:text-[#0F4C4A] backdrop-blur-md flex items-center justify-center transition-colors focus:outline-none z-10 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Top Bar with Close Button (if no image) */}
            <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-[#0F4C4A]/10 dark:border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F8A98A]/20 text-[#0F4C4A] dark:text-[#F8A98A]">
                    {item.category}
                  </span>
                  {item.isCurrent && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3F9A94] text-white animate-pulse">
                      Current Role
                    </span>
                  )}
                </div>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0F4C4A] dark:text-[#FDF3EC]">
                  {item.company}
                </h3>
                <p className="font-sans text-base sm:text-lg font-medium text-[#3F9A94] dark:text-[#FBD57A] mt-1">
                  {item.role}
                </p>
              </div>

              {!item.image && (
                <button
                  onClick={onClose}
                  aria-label="Close details"
                  className="w-10 h-10 rounded-full bg-[#0F4C4A]/5 dark:bg-white/10 hover:bg-[#F8A98A] dark:hover:bg-[#F8A98A] hover:text-[#0F4C4A] flex items-center justify-center transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Metadata Pills */}
            <div className="px-6 sm:px-8 py-3 bg-[#FDF3EC]/50 dark:bg-[#082523]/50 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#0B3D3C]/80 dark:text-[#FDF3EC]/80 border-b border-[#0F4C4A]/10 dark:border-white/10">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-[#F8A98A]" />
                <span>{item.period}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#3F9A94]" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Briefcase className="w-4 h-4 text-[#FBD57A]" />
                <span>{item.tagline}</span>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:px-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#3F9A94] dark:text-[#A3CBC8] mb-2">
                  Executive Overview
                </h4>
                <p className="font-sans text-base leading-relaxed text-[#0B3D3C]/90 dark:text-[#FDF3EC]/90">
                  {item.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#3F9A94] dark:text-[#A3CBC8] mb-3">
                  Key Scope & Deliverables
                </h4>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-sm sm:text-base leading-relaxed text-[#0B3D3C]/85 dark:text-[#FDF3EC]/85"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3F9A94] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer with LinkedIn Link */}
            <div className="p-6 sm:px-8 bg-[#FDF3EC]/60 dark:bg-[#082523]/80 border-t border-[#0F4C4A]/10 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#0B3D3C]/60 dark:text-[#FDF3EC]/60 font-medium">
                Verified via LinkedIn Profile
              </span>
              <a
                href="https://www.linkedin.com/in/uditsmita-debnath-892284409"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#0F4C4A] dark:bg-[#FBD57A] text-white dark:text-[#082523] text-sm font-medium hover:bg-[#0B3836] dark:hover:bg-[#F8A98A] transition-colors"
              >
                <span>View on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
