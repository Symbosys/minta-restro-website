"use client";

import React, { useState } from "react";
import Image from "next/image";
import BrandStoryModal from "./BrandStoryModal";
import BrandStoryAnimatedShowcase from "./BrandStoryAnimatedShowcase";

export default function HeroBrandHeritageSection() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFood = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, "food");
  };

  return (
    <>
      <section
        id="story"
        aria-label="Brand Story Overview"
        className="relative -mt-px overflow-hidden bg-white py-7 sm:py-14 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
      >
        <span id="hero-overview" className="sr-only" aria-hidden="true" />
        {/* Subtle Decorative Corner Leaves - Scaled elegantly on mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1 left-0 z-0 select-none opacity-30 sm:opacity-85"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-left.png"
            alt=""
            width={110}
            height={100}
            className="w-8 sm:w-16 md:w-20 lg:w-24 h-auto"
            priority={false}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1 right-0 z-0 select-none opacity-30 sm:opacity-85"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-right.png"
            alt=""
            width={120}
            height={100}
            className="w-8 sm:w-16 md:w-20 lg:w-24 h-auto"
            priority={false}
          />
        </div>


        <div className="relative z-10 mx-auto max-w-6xl xl:max-w-[1180px] 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
          {/* --- TOP BRAND HEADER UNIT --- */}
          <div className="text-center">
            {/* Title with Blue Gradient Accent Lines */}
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <span
                aria-hidden="true"
                className="h-[2px] w-5 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-transparent via-[#0049ad]/60 to-[#0049ad]"
              />
              <h1 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0049ad] drop-shadow-sm whitespace-nowrap">
                Minta Restro
              </h1>
              <span
                aria-hidden="true"
                className="h-[2px] w-5 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-l from-transparent via-[#0049ad]/60 to-[#0049ad]"
              />
            </div>

            {/* Tagline */}
            <p className="mt-1 sm:mt-1.5 text-[9.5px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[#b88224]">
              THE TASTE OF TRADITION.
            </p>

            {/* Curved Golden Swoop Underline */}
            <div className="my-0.5 flex justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 110 10"
                fill="none"
                className="h-1.5 sm:h-2 w-16 sm:w-24 text-[#c58e26]"
              >
                <path d="M4 6C35 2 75 2 106 8C78 4 40 4 4 6Z" fill="currentColor" />
              </svg>
            </div>

            {/* Sub-tagline */}
            <p className="text-[11px] sm:text-[13px] md:text-sm italic font-medium text-[#475569]">
              Every Dish Has a Story.
            </p>
          </div>

          {/* --- MAIN 2-COLUMN SECTION --- */}
          <div className="mt-5 sm:mt-8 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10 2xl:gap-12">
            {/* Left Column: Brand Story Narrative */}
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start lg:col-span-6 xl:col-span-6">
              {/* BRAND STORY Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0049ad] px-3 sm:px-3.5 py-1 shadow-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-white"
                >
                  <path d="M6 13.8a4.5 4.5 0 1 1 5-7.7 4.5 4.5 0 1 1 5 7.7" />
                  <path d="M6 17h12v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3z" />
                  <line x1="6" y1="17" x2="6" y2="13.8" />
                  <line x1="18" y1="17" x2="18" y2="13.8" />
                </svg>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  BRAND STORY
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-2.5 sm:mt-3 text-[18px] xs:text-[20px] sm:text-2xl md:text-3xl lg:text-[26px] xl:text-[30px] 2xl:text-[34px] font-extrabold leading-[1.25] tracking-tight text-[#06214d] max-w-xl sm:max-w-none">
                Our Brand Story – A Journey of Authentic Taste, Tradition &amp;
                Togetherness
              </h2>

              {/* Paragraphs */}
              <div className="mt-2.5 sm:mt-3 space-y-2 sm:space-y-3 text-[12px] sm:text-[13.5px] lg:text-[14px] 2xl:text-[15px] leading-relaxed text-[#334155] max-w-xl sm:max-w-none">
                <p>
                  Food is more than just something we eat. It is an emotion, a
                  memory, a celebration and an important part of who we are.
                </p>
                <p>
                  Every city, every region and every community in India has its
                  own unique food identity. From the rich aroma of traditional
                  Biryani to the comforting taste of Meat Rice, from flavourful
                  Chicken Rice and Fish Rice to the simplicity of Egg Rice...
                </p>
              </div>

              {/* Read Full Story Button (Golden Accent) */}
              <div className="mt-3.5 sm:mt-5">
                <button
                  type="button"
                  onClick={() => setIsStoryModalOpen(true)}
                  style={{
                    background:
                      "linear-gradient(135deg, #f5a623 0%, #e5a01d 40%, #c58917 100%)",
                  }}
                  className="group inline-flex items-center gap-2.5 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_6px_20px_rgba(229,160,29,0.35)] transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
                    Read Full Story
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Animated Culinary Showcase Auto-Changing 6 Dishes */}
            <div className="w-full flex items-center justify-center lg:col-span-6 xl:col-span-6 lg:justify-end">
              <BrandStoryAnimatedShowcase />
            </div>
          </div>

          {/* --- BOTTOM ROW: 4 ROYAL BLUE PILL ACTION BUTTONS (2-by-2 on Mobile, 4-in-a-row on Desktop) --- */}
          <div className="mt-6 sm:mt-9 pt-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-3 xl:gap-4 2xl:gap-5">
              {/* 1. Explore Food */}
              <a
                href="#food"
                onClick={scrollToFood}
                className="group flex items-center justify-between gap-1.5 sm:gap-3 rounded-full bg-[#0049ad] px-2.5 sm:px-4 lg:px-3.5 xl:px-5 py-2 sm:py-2.5 lg:py-3 text-white shadow-[0_6px_18px_rgba(0,73,173,0.22)] transition-all duration-300 hover:bg-[#003b8e] hover:shadow-[0_10px_24px_rgba(0,73,173,0.32)] hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 min-w-0">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 sm:h-4 lg:h-5 sm:w-4 lg:w-5 shrink-0 text-white"
                  >
                    <path d="M12 4v2" />
                    <path d="M4 18h16" />
                    <path d="M4 18a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="4" r="1" fill="currentColor" />
                  </svg>
                  <span className="truncate text-[11px] xs:text-xs sm:text-[12.5px] lg:text-[11.5px] xl:text-[13px] 2xl:text-sm font-bold text-white">
                    Explore Food
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 sm:h-6 lg:h-7 sm:w-6 lg:w-7 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 stroke-[2.2]"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              {/* 2. Order on Restro App */}
              <a
                href="#app"
                onClick={(e) => scrollToSection(e, "app")}
                className="group flex items-center justify-between gap-1.5 sm:gap-3 rounded-full bg-[#0049ad] px-2.5 sm:px-4 lg:px-3.5 xl:px-5 py-2 sm:py-2.5 lg:py-3 text-white shadow-[0_6px_18px_rgba(0,73,173,0.22)] transition-all duration-300 hover:bg-[#003b8e] hover:shadow-[0_10px_24px_rgba(0,73,173,0.32)] hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 min-w-0">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 sm:h-4 lg:h-5 sm:w-4 lg:w-5 shrink-0 text-white"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="3" />
                    <path d="M12 18h.01" />
                    <path d="M9 7h6" />
                    <path d="M9 11h6" />
                  </svg>
                  <span className="truncate text-[11px] xs:text-xs sm:text-[12.5px] lg:text-[11.5px] xl:text-[13px] 2xl:text-sm font-bold text-white">
                    Order on Restro App
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 sm:h-6 lg:h-7 sm:w-6 lg:w-7 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 stroke-[2.2]"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              {/* 3. Get it on Google Play */}
              <a
                href="#app"
                onClick={(e) => scrollToSection(e, "app")}
                className="group flex items-center justify-between gap-1.5 sm:gap-3 rounded-full bg-[#0049ad] px-2.5 sm:px-4 lg:px-3.5 xl:px-5 py-2 sm:py-2.5 lg:py-3 text-white shadow-[0_6px_18px_rgba(0,73,173,0.22)] transition-all duration-300 hover:bg-[#003b8e] hover:shadow-[0_10px_24px_rgba(0,73,173,0.32)] hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 min-w-0">
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 lg:h-5 sm:w-4 lg:w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.61 1.81L13.79 12 3.61 22.19a1 1 0 01-.61-.92V2.73a1 1 0 01.61-.92z"
                      fill="#32BBFF"
                    />
                    <path
                      d="M13.79 12L17.4 8.39 5.57 1.56A1 1 0 003.61 1.81L13.79 12z"
                      fill="#32D74B"
                    />
                    <path
                      d="M13.79 12L3.61 22.19a1 1 0 001.96.25L17.4 15.61 13.79 12z"
                      fill="#FF3B30"
                    />
                    <path
                      d="M17.4 8.39L20.89 10.4a1.85 1.85 0 010 3.2L17.4 15.61 13.79 12l3.61-3.61z"
                      fill="#FFCC00"
                    />
                  </svg>
                  <div className="text-left min-w-0">
                    <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-wider text-white/80 leading-none">
                      Get it on
                    </span>
                    <span className="block truncate text-[11px] xs:text-xs sm:text-[12.5px] lg:text-[11.5px] xl:text-[13px] 2xl:text-sm font-bold text-white leading-tight">
                      Google Play
                    </span>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 sm:h-6 lg:h-7 sm:w-6 lg:w-7 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 stroke-[2.2]"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              {/* 4. Download on the App Store */}
              <a
                href="#app"
                onClick={(e) => scrollToSection(e, "app")}
                className="group flex items-center justify-between gap-1.5 sm:gap-3 rounded-full bg-[#0049ad] px-2.5 sm:px-4 lg:px-3.5 xl:px-5 py-2 sm:py-2.5 lg:py-3 text-white shadow-[0_6px_18px_rgba(0,73,173,0.22)] transition-all duration-300 hover:bg-[#003b8e] hover:shadow-[0_10px_24px_rgba(0,73,173,0.32)] hover:scale-[1.02] active:scale-95"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 min-w-0">
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 lg:h-5 sm:w-4 lg:w-5 shrink-0 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left min-w-0">
                    <span className="block text-[7.5px] sm:text-[9px] uppercase tracking-wider text-white/80 leading-none">
                      Download on the
                    </span>
                    <span className="block truncate text-[11px] xs:text-xs sm:text-[12.5px] lg:text-[11.5px] xl:text-[13px] 2xl:text-sm font-bold text-white leading-tight">
                      App Store
                    </span>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 sm:h-6 lg:h-7 sm:w-6 lg:w-7 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 stroke-[2.2]"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Brand Story Modal */}
      <BrandStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </>
  );
}

