"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, BarChart3, BookOpen, HeartHandshake, Users } from "lucide-react";
import { ExperienceItem } from "@/data/portfolioData";

export default function ExperienceCard({
  item,
  onClick,
}: {
  item: ExperienceItem;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse tilt values
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="group relative cursor-pointer bg-white text-[#0B3D3C] rounded-[28px] p-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden border border-black/5"
    >
      {/* Glare effect on hover */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[28px] z-20 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 70%)",
          }}
        />
      )}

      {/* TOP VISUAL CONTAINER */}
      <div className="relative w-full h-56 sm:h-64 rounded-[22px] overflow-hidden bg-[#F6E5D8]/40 flex items-center justify-center">
        {item.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.company}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ) : (
          /* Tailored Editorial Graphics for each experience */
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-700"
            style={{
              background:
                item.visualType === "finance-chart"
                  ? "linear-gradient(135deg, #0F4C4A 0%, #072928 100%)"
                  : item.visualType === "editorial-article"
                  ? "linear-gradient(135deg, #FFF1EA 0%, #FDE3D6 100%)"
                  : item.visualType === "impact-story"
                  ? "linear-gradient(135deg, #FEF5DF 0%, #FCE09D 100%)"
                  : "linear-gradient(135deg, #E6F5F4 0%, #C3E7E4 100%)",
            }}
          >
            {/* Visual Decorative Pattern */}
            {item.visualType === "finance-chart" && (
              <div className="text-center text-white flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FBD57A] shadow-lg mb-3">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#FBD57A] font-semibold">
                  Financial Intelligence
                </div>
                <div className="text-base font-serif-heading font-medium mt-1 text-[#FDF3EC]">
                  KPMG India Advisory
                </div>
              </div>
            )}

            {item.visualType === "editorial-article" && (
              <div className="text-center text-[#0F4C4A] flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#F8A98A] text-white flex items-center justify-center shadow-lg mb-3">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#F8A98A] font-bold">
                  B2B Publications
                </div>
                <div className="text-base font-serif-heading font-bold mt-1 text-[#0B3D3C]">
                  Requin Editorial & Collateral
                </div>
              </div>
            )}

            {item.visualType === "impact-story" && (
              <div className="text-center text-[#0F4C4A] flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FBD57A] text-[#0F4C4A] flex items-center justify-center shadow-lg mb-3">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#0F4C4A] font-bold">
                  Social Impact & SEO
                </div>
                <div className="text-base font-serif-heading font-bold mt-1 text-[#0B3D3C]">
                  Finango NGO Narratives
                </div>
              </div>
            )}

            {item.visualType === "community-campaign" && (
              <div className="text-center text-[#0F4C4A] flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#3F9A94] text-white flex items-center justify-center shadow-lg mb-3">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#0F4C4A] font-bold">
                  Growth & Outreach
                </div>
                <div className="text-base font-serif-heading font-bold mt-1 text-[#0B3D3C]">
                  MyCaptain Peer Campaigns
                </div>
              </div>
            )}

            {/* Subtle decorative ring in graphic container */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border-4 border-white/20 pointer-events-none" />
          </div>
        )}

        {/* Category Pill Tag on Card Visual */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#0F4C4A] shadow-sm">
            {item.category}
          </span>
        </div>
      </div>

      {/* BOTTOM INFO ROW */}
      <div className="pt-4 pb-2 px-3 flex items-end justify-between">
        <div className="pr-3">
          <h4 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#0F4C4A] group-hover:text-[#3F9A94] transition-colors leading-snug">
            {item.company}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#4B6E6D] mt-0.5 line-clamp-1">
            {item.role}
          </p>
        </div>

        {/* Circular Peach Arrow Button */}
        <div className="w-11 h-11 rounded-full bg-[#F8A98A] text-[#0F4C4A] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#f69470] group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
