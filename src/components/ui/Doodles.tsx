"use client";

import React from "react";
import { motion } from "framer-motion";

export function SparkleStar({
  size = 24,
  color = "#FBD57A",
  className = "",
  delay = 0,
}: {
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 180] }}
      transition={{
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
      }}
      className={`select-none pointer-events-none drop-shadow-sm ${className}`}
    >
      <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
    </motion.svg>
  );
}

export function StarburstLines({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      stroke="#3F9A94"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={`select-none pointer-events-none opacity-80 ${className}`}
    >
      <line x1="30" y1="5" x2="30" y2="18" />
      <line x1="30" y1="42" x2="30" y2="55" />
      <line x1="5" y1="30" x2="18" y2="30" />
      <line x1="42" y1="30" x2="55" y2="30" />
      <line x1="12" y1="12" x2="21" y2="21" />
      <line x1="39" y1="39" x2="48" y2="48" />
      <line x1="48" y1="12" x2="39" y2="21" />
      <line x1="21" y1="39" x2="12" y2="48" />
    </svg>
  );
}

export function RingAndDot({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col items-center select-none pointer-events-none ${className}`}>
      <div className="w-2 h-2 rounded-full bg-[#0F4C4A] dark:bg-[#FBD57A] mb-1.5" />
      <div className="w-6 h-6 rounded-full border-2 border-[#0F4C4A] dark:border-[#FBD57A]" />
    </div>
  );
}

export function ScribbleUnderline({
  color = "#F8A98A",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-28 h-3 ${className}`}
    >
      <path
        d="M2 9C25 3 75 2 98 8C70 5 35 7 12 11"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
