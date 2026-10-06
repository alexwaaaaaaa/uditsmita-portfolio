"use client";

import React from "react";
import { motion } from "framer-motion";

interface RotatingBadgeProps {
  text?: string;
  className?: string;
}

export default function RotatingBadge({
  text = "• OPEN TO OPPORTUNITIES • AVAILABLE FOR PROJECTS ",
  className = "",
}: RotatingBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 18 }}
      className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white dark:bg-[#0E3D3A] shadow-xl border-2 border-[#0F4C4A]/10 dark:border-[#FBD57A]/40 flex items-center justify-center select-none ${className}`}
    >
      {/* Outer rotating text ring */}
      <div className="absolute inset-1 animate-spin-badge">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full text-[#0F4C4A] dark:text-[#FBD57A] fill-current"
        >
          <defs>
            <path
              id="rotatingCircleBadgePath"
              d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            />
          </defs>
          <text className="text-[10.5px] uppercase font-bold tracking-[0.24em]" fill="currentColor">
            <textPath
              href="#rotatingCircleBadgePath"
              xlinkHref="#rotatingCircleBadgePath"
              startOffset="0%"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center circle with green/teal smiley */}
      <div className="w-12 h-12 rounded-full bg-[#E6F5F4] dark:bg-[#082523] border border-[#3F9A94] flex items-center justify-center text-[#3F9A94] z-10 shadow-sm transition-transform duration-300 hover:scale-115 cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0F4C4A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-[#FBD57A]"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>
    </motion.div>
  );
}
