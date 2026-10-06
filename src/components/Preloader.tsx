"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("nopreload")) {
      setLoading(false);
      if (onComplete) onComplete();
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: [
              "circle(150% at 50% 50%)",
              "circle(0% at 50% 50%)",
            ],
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F4C4A] text-[#FDF3EC] cursor-pointer"
          onClick={() => {
            setLoading(false);
            if (onComplete) onComplete();
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#3F9A94]/20 blur-3xl pointer-events-none" />

          {/* Animated Monogram */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-28 h-28 rounded-3xl bg-[#0B3D3C] border-2 border-[#FBD57A]/40 flex items-center justify-center shadow-2xl overflow-hidden"
            >
              {/* Rotating golden accent line */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-[conic-gradient(from_0deg,#FBD57A,transparent_60%,#F8A98A)] opacity-20"
              />

              {/* Monogram letters */}
              <div className="relative flex items-center justify-center space-x-0.5">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-serif-heading text-4xl font-bold text-[#FBD57A] tracking-tighter"
                >
                  U
                </motion.span>
                <motion.span
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="font-serif-heading text-4xl font-bold text-[#F8A98A] tracking-tighter"
                >
                  D
                </motion.span>
              </div>

              {/* Little corner sparkle */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-2 right-2 text-[#FBD57A]"
              >
                ✦
              </motion.div>
            </motion.div>

            {/* Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <h2 className="font-serif-heading text-xl font-medium tracking-wide text-[#FDF3EC]">
                Uditsmita Debnath
              </h2>
              <p className="font-handwriting text-2xl text-[#F8A98A] mt-1">
                Content Strategist & Writer
              </p>
            </motion.div>

            {/* Loading progress bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#FBD57A] via-[#F8A98A] to-[#3F9A94]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
