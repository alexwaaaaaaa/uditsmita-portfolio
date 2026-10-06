"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "What I Do", href: "#what-i-do" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#FDF3EC]/90 dark:bg-[#082523]/90 backdrop-blur-md shadow-sm border-b border-[#0F4C4A]/5 dark:border-[#FDF3EC]/10"
          : "py-5 md:py-7 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C4A] rounded-2xl"
          aria-label="Uditsmita Debnath Homepage"
        >
          <div className="relative w-11 h-11 rounded-2xl bg-[#0F4C4A] dark:bg-[#0E3D3A] flex items-center justify-center text-[#FDF3EC] shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <span className="font-serif-heading font-bold text-lg tracking-tighter text-[#FBD57A] group-hover:rotate-6 transition-transform">
              U
            </span>
            <span className="font-serif-heading font-bold text-lg tracking-tighter text-[#F8A98A] -ml-0.5 group-hover:-rotate-6 transition-transform">
              D
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-heading font-semibold text-lg leading-tight tracking-tight text-[#0F4C4A] dark:text-[#FDF3EC]">
              {portfolioData.personal.name}
            </span>
            <span className="font-sans text-xs tracking-wider uppercase text-[#3F9A94] dark:text-[#F8A98A] font-medium">
              Content Strategist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 bg-white/60 dark:bg-[#0E3A37]/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#0F4C4A]/10 dark:border-white/10 shadow-sm"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#0B3D3C] dark:text-[#FDF3EC]/90 hover:text-[#0F4C4A] dark:hover:text-[#FBD57A] transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8A98A] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="flex items-center space-x-3">
          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="w-11 h-11 rounded-full bg-white/80 dark:bg-[#0E3A37] border border-[#0F4C4A]/10 dark:border-white/15 flex items-center justify-center text-[#0F4C4A] dark:text-[#FBD57A] hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C4A]"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
            ) : (
              <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45" />
            )}
          </button>

          {/* Quick CTA Pill Button */}
          <a
            href={portfolioData.contact.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#0F4C4A] text-[#FDF3EC] text-sm font-medium hover:bg-[#0B3836] dark:bg-[#FBD57A] dark:text-[#082523] dark:hover:bg-[#F8A98A] shadow-sm hover:shadow transition-all group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-11 h-11 rounded-full bg-white/80 dark:bg-[#0E3A37] border border-[#0F4C4A]/10 dark:border-white/15 flex items-center justify-center text-[#0F4C4A] dark:text-[#FDF3EC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C4A]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FDF3EC] dark:bg-[#082523] border-b border-[#0F4C4A]/10 dark:border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif-heading font-medium text-[#0B3D3C] dark:text-[#FDF3EC] hover:text-[#3F9A94] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8A98A]" />
                </a>
              ))}
              <div className="pt-4 border-t border-[#0F4C4A]/10 dark:border-white/10 flex flex-col space-y-3">
                <a
                  href={portfolioData.contact.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#0F4C4A] text-white text-base font-medium flex items-center justify-center space-x-2"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
