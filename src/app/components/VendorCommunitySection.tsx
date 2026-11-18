"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChefHat, Laptop, Users } from "lucide-react";
import CommunityStoryModal from "./CommunityStoryModal";

export default function VendorCommunitySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="vendors"
        aria-label="Our Vendor Community"
        className="relative overflow-hidden bg-[#edf5fd] py-8 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
      >
        {/* Alias anchor for #community links */}
        <span id="community" className="sr-only" aria-hidden="true" />
        {/* Subtle Decorative Leaves at Section Corners - Scaled on mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-2 left-0 z-0 select-none opacity-30 sm:opacity-85"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-left.png"
            alt=""
            width={110}
            height={100}
            className="w-8 sm:w-16 md:w-22 lg:w-28 h-auto"
            priority={false}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-2 right-0 z-0 select-none opacity-30 sm:opacity-85"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-right.png"
            alt=""
            width={120}
            height={100}
            className="w-8 sm:w-16 md:w-22 lg:w-28 h-auto"
            priority={false}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-0 z-0 select-none opacity-30 sm:opacity-85"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-left.png"
            alt=""
            width={110}
            height={100}
            className="w-8 sm:w-16 md:w-24 lg:w-28 h-auto -scale-y-100"
            priority={false}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 right-0 z-0 select-none opacity-30 sm:opacity-85"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-right.png"
            alt=""
            width={120}
            height={100}
            className="w-8 sm:w-16 md:w-24 lg:w-28 h-auto -scale-y-100"
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1360px] px-3.5 sm:px-6 lg:px-8">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[36px] border-2 border-[#5497ff]/70 bg-white p-4.5 sm:p-8 lg:p-10 pb-14 sm:pb-20 lg:pb-24 shadow-[0_20px_60px_rgba(0,73,173,0.12)]">
            {/* Top 2-Column Content */}
            <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Text & CTA (Centered on mobile, left-aligned on desktop) */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start lg:col-span-7">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0052cc] px-4 py-1.5 shadow-sm">
                  <Users className="h-4 w-4 text-white stroke-[2.2]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-white">
                    OUR VENDOR COMMUNITY
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold tracking-tight text-[#06214d] leading-[1.2]">
                  Our Vendor Community –{" "}
                  <span className="relative inline-block italic text-[#e5a01d] whitespace-nowrap">
                    The Heart
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 100 8"
                      fill="none"
                      className="absolute -bottom-1 left-0 w-full h-2 text-[#e5a01d]"
                    >
                      <path
                        d="M2 5C30 2 70 2 98 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  of Minta Restro
                </h2>

                {/* Description Paragraphs */}
                <div className="mt-3.5 sm:mt-4 space-y-2.5 sm:space-y-3 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#334155] max-w-xl sm:max-w-none">
                  <p>
                    Behind every great meal, there is someone who makes it possible.
                    At Minta Restro, we believe local food vendors are not just
                    business partners. They are an essential part of India&apos;s
                    food culture.
                  </p>
                  <p>
                    Many local vendors have years of experience preparing
                    traditional dishes. Some follow family recipes. Others have
                    developed their own signature cooking styles through years of
                    practice...
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0052cc] hover:bg-[#0041a8] px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Read Full Community Story</span>
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Chefs & Authentic Food Composition */}
              <div className="relative flex items-center justify-center lg:col-span-5">
                {/* Yellow celebratory sparkles top right */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 -right-1 sm:-top-5 sm:right-2 z-10"
                >
                  <svg
                    className="h-7 w-7 sm:h-8 sm:w-8 text-[#f59e0b]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="4" y1="5" x2="8" y2="9" />
                    <line x1="20" y1="5" x2="16" y2="9" />
                  </svg>
                </div>

                <div className="relative w-full max-w-[420px] lg:max-w-none transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/assets/images/brand-story/vendor-community-showcase.png"
                    alt="Our Vendor Community Chefs and authentic dishes"
                    width={440}
                    height={360}
                    className="w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,73,173,0.15)]"
                    priority={false}
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Middle Row: 3 Feature Items */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-[#e2edfb]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#e2edfb]">
                {/* Feature 1 */}
                <div className="flex items-center gap-3 sm:gap-3.5 text-left md:pr-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f2fe] text-[#0052cc]">
                    <ChefHat className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#06214d]">
                      Vendors Share
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-snug">
                      Their culinary expertise and authentic food.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 sm:gap-3.5 text-left pt-4 md:pt-0 md:px-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f2fe] text-[#0052cc]">
                    <Users className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#06214d]">
                      Customers Discover
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-snug">
                      More local and regional food choices.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3 sm:gap-3.5 text-left pt-4 md:pt-0 md:pl-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f2fe] text-[#0052cc]">
                    <Laptop className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#06214d]">
                      Minta Restro Provides
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-snug">
                      The digital platform and customer connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Golden Chef Hat & Tapered Hairlines */}
            <div className="relative z-10 mt-8 sm:mt-10 mb-2 sm:mb-3 flex items-center justify-center gap-2.5 sm:gap-3.5 max-w-xs mx-auto text-center">
              <span
                aria-hidden="true"
                className="h-[1.5px] w-16 sm:w-20 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #e5a01d 100%)",
                }}
              />
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="#e5a01d"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 shrink-0"
              >
                <path d="M7 21h18v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5z" />
                <path d="M13 21v6M19 21v6" />
                <path d="M7 21c-2.8-1.5-3.8-4.5-3-7.5 1-3.5 4.5-4.5 7-3 1.5-3.5 5.5-5.5 10-3.5 2.5 1 4 2.5 4.5 4.5 2.5-.5 5.5.8 6 4 .5 2.5-.5 5.5-3.5 6.5" />
              </svg>
              <span
                aria-hidden="true"
                className="h-[1.5px] w-16 sm:w-20 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #e5a01d 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Indian Monuments Skyline - Bleeds completely to left, right, and bottom borders with zero gap */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[2px] -left-4 -right-4 z-0 w-[calc(100%+32px)] select-none leading-none overflow-hidden"
            >
              <Image
                src="/assets/images/brand-story/skyline-clean-monuments.png"
                alt=""
                width={2152}
                height={166}
                className="w-full h-auto block select-none scale-x-[1.04] origin-bottom"
                priority={false}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Vendor Community Story Modal */}
      <CommunityStoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

