"use client";

import React from "react";
import Image from "next/image";

export default function BrandBeliefSection() {
  return (
    <section
      id="brand-belief"
      aria-label="Our Brand Belief"
      className="relative bg-[#f4f8fe] py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Soft Ambient Sky Glows in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#dbeafe]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[#dbeafe]/70 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1360px] px-3.5 sm:px-6 lg:px-8">
        {/* --- OUR BRAND BELIEF CARD (CRISP 100% SHARP HTML TYPOGRAPHY + SEAMLESS FOOD VISUAL) --- */}
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1280px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-[#2563eb]/30 shadow-[0_20px_50px_rgba(0,50,150,0.18)] bg-gradient-to-br from-[#003ea8] via-[#004cc7] to-[#002266] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,50,150,0.25)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Pill Badge & Narrative (Centered on mobile, left-aligned on desktop) */}
            <div className="lg:col-span-7 p-5 sm:p-9 lg:p-11 xl:p-12 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
              {/* Badge: OUR BRAND BELIEF */}
              <div className="inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2 shadow-md w-fit mb-4 sm:mb-5">
                {/* Blue Handshake Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0049ad"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-[#0049ad]"
                >
                  <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6" />
                  <path d="m18 10 3-3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-3 3" />
                  <path d="M7 21a1 1 0 0 1-1.4 0l-4.3-4.3a1 1 0 0 1 0-1.4L4 12.6" />
                  <path d="M12.7 7.7a1 1 0 0 0-1.4 0L8.5 10.5" />
                  <path d="M6 10.5 3.3 7.8a1 1 0 0 1 0-1.4l2.6-2.6a1 1 0 0 1 1.4 0l2.7 2.7" />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-xs sm:text-[13px] font-black tracking-wider text-[#0049ad] uppercase leading-none">
                    OUR BRAND BELIEF
                  </span>
                  {/* Small Golden Swoosh Accent */}
                  <svg
                    viewBox="0 0 80 6"
                    fill="none"
                    className="w-14 sm:w-16 h-1 sm:h-1.5 text-[#f59e0b] mt-0.5"
                  >
                    <path
                      d="M2 3C20 6 60 6 78 2C60 4 20 4 2 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Story Paragraph 1 (Razor-Sharp Vector Font) */}
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/95 font-normal">
                We believe that authentic food should not be limited by geography.
                A small food vendor should have the opportunity to become a
                recognised local favourite. A traditional dish should have the
                opportunity to reach new customers. And every customer should
                have the freedom to discover flavours beyond their usual choices.
              </p>

              {/* Story Paragraph 2 (Razor-Sharp Vector Font) */}
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white font-semibold mt-3.5 sm:mt-4">
                We are not here to replace local food culture. We are here to
                celebrate it, support it and help it grow.
              </p>
            </div>

            {/* Right Column: Seamless Transparent Food Composition (Vertically & Horizontally Centered) */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-4 lg:p-6 pb-6 sm:pb-6 my-auto">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/assets/images/brand-story/brand-belief-food-final@2x.png"
                  alt="Minta Restro Brand Belief - Celebrating Indian food culture with authentic steaming biryani handi"
                  width={530}
                  height={343}
                  className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                  priority={false}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
