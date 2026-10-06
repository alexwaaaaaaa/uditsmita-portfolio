"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, ArrowUp } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";
import { SparkleStar } from "./ui/Doodles";
import { LinkedInIcon } from "./ui/Icons";

export default function FooterSection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#FBD57A", "#F8A98A", "#3F9A94", "#FDF3EC"],
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0F4C4A] dark:bg-[#061F1E] text-[#FDF3EC] pt-16 md:pt-24 pb-12 px-6 md:px-12 relative overflow-hidden transition-colors duration-400"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3F9A94]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10 items-start">
          
          {/* LEFT: Giant Statement "Let's create something amazing!" */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="flex items-start space-x-2">
              <h2 className="font-serif-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
                Let&apos;s create <br />
                something{" "}
                <button
                  type="button"
                  onClick={triggerConfetti}
                  aria-label="Celebrate and throw confetti"
                  className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-[#F8A98A] inline-block font-normal hover:scale-105 hover:rotate-2 transition-transform duration-300 cursor-pointer focus:outline-none"
                >
                  amazing!
                </button>
              </h2>
              <div className="mt-2 shrink-0">
                <SparkleStar size={36} color="#FBD57A" delay={0.4} />
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#FDF3EC]/70 mt-6 max-w-md leading-relaxed">
              Open to full-time content strategy, high-impact B2B writing, research publications, and thought leadership collaborations.
            </p>

            {/* Direct Connect Button */}
            <div className="mt-8">
              <a
                href={portfolioData.contact.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#F8A98A] text-[#0F4C4A] font-semibold text-base hover:bg-[#FBD57A] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* MIDDLE: "Get in touch" */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="font-serif-heading font-bold text-xl text-white mb-2">
              Get in touch
            </h3>

            {/* LinkedIn */}
            <a
              href={portfolioData.contact.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 text-sm text-[#FDF3EC]/80 hover:text-[#F8A98A] transition-colors group"
            >
              <LinkedInIcon className="w-5 h-5 text-[#3F9A94] group-hover:text-[#F8A98A] shrink-0 mt-0.5" />
              <span className="font-medium underline-offset-4 group-hover:underline">
                linkedin.com/in/uditsmita
              </span>
            </a>

            {/* Location */}
            <div className="flex items-start space-x-3 text-sm text-[#FDF3EC]/80">
              <MapPin className="w-5 h-5 text-[#FBD57A] shrink-0 mt-0.5" />
              <span>{portfolioData.contact.location}</span>
            </div>

            {/* Email (Marked Placeholder) */}
            <div className="flex items-start space-x-3 text-sm text-[#FDF3EC]/60">
              <Mail className="w-5 h-5 text-[#F8A98A] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="font-mono text-xs">{portfolioData.contact.emailPlaceholder}</span>
                <span className="text-[10px] text-white/40">Email placeholder — editable in portfolioData.ts</span>
              </div>
            </div>
          </div>

          {/* RIGHT: "Follow along" */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="font-serif-heading font-bold text-xl text-white mb-2">
              Follow along
            </h3>

            <p className="text-xs text-white/60 mb-2">
              Follow my writings, market commentary, and thought leadership pieces.
            </p>

            <div className="flex items-center space-x-3">
              {/* LinkedIn Button */}
              <a
                href={portfolioData.contact.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Uditsmita LinkedIn"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#F8A98A] hover:text-[#0F4C4A] border border-white/15 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              {/* Placeholder Social 1 */}
              <div
                title="Substack / Medium [Placeholder]"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white/40 cursor-default select-none"
              >
                M
              </div>

              {/* Placeholder Social 2 */}
              <div
                title="Publications [Placeholder]"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white/40 cursor-default select-none"
              >
                X
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Copyright + Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Uditsmita Debnath.</span>
            <span>•</span>
            <span>Crafted with passion & precision.</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center space-x-2 text-xs font-medium text-white/80 hover:text-[#F8A98A] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
