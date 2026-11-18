"use client";

import React from "react";
import Image from "next/image";
import { Store } from "lucide-react";

export default function CommunityFlavoursSection() {
  return (
    <section
      id="community-flavours"
      aria-label="More Than a Food Platform – A Community of Flavours"
      className="relative bg-[#f4f8fe] py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1360px] px-3.5 sm:px-6 lg:px-8">
        {/* --- CARD CONTAINER (CRISP WHITE CARD + SOFT SHADOW + CLEAN TYPOGRAPHY) --- */}
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1280px] rounded-[24px] sm:rounded-[36px] bg-white border border-[#2563eb]/15 shadow-[0_20px_50px_rgba(0,40,120,0.08)] p-5 sm:p-9 lg:p-11 xl:p-12 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,40,120,0.12)]">
          {/* Top Row: Left Food Visual + Right Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Handi Biryani Food Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[400px] flex items-center justify-center lg:justify-start transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/assets/images/brand-story/rava.png"
                  alt="Minta Restro - A Community of Flavours celebrating authentic biryani handi"
                  width={550}
                  height={440}
                  className="w-full h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                  priority={false}
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Heading, Accent & Story (Centered on mobile, left-aligned on desktop) */}
            <div className="lg:col-span-7 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight leading-tight">
                <span className="text-[#071c3d] block">
                  More Than a Food Platform –
                </span>
                <span className="text-[#0049ad] block mt-0.5">
                  A Community of Flavours
                </span>
              </h2>

              {/* Hand-Drawn Golden Underline Accent */}
              <svg
                viewBox="0 0 140 10"
                fill="none"
                className="w-24 sm:w-28 h-2 sm:h-2.5 text-[#f59e0b] mt-2 mb-4 sm:mb-5 mx-auto sm:mx-0"
                aria-hidden="true"
              >
                <path
                  d="M3 5C35 9 105 1 137 5C105 7 35 3 3 5Z"
                  fill="currentColor"
                />
              </svg>

              {/* Story Paragraph 1 */}
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#334155] font-normal">
                Minta Restro is being built around the idea that food brings
                people together. We want to create an ecosystem where a customer
                can discover a traditional Biryani, enjoy a delicious Meat Rice
                meal, explore a regional Fish Rice speciality or order their
                favourite South Indian breakfast from local food partners.
              </p>

              {/* Story Paragraph 2 */}
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#334155] font-normal mt-3.5 sm:mt-4">
                We want customers to discover something new while enjoying the
                dishes they already love. Our platform aims to make local food
                discovery convenient, accessible and enjoyable.
              </p>
            </div>
          </div>

          {/* Bottom Banner / Pill Bar (Preserving Identity of Traditional Food Businesses) */}
          <div className="mt-6 sm:mt-8 lg:mt-10 rounded-2xl bg-[#edf5fe] border border-[#dbeafe] p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4.5 text-center sm:text-left">
            {/* Store Icon */}
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0049ad] shadow-sm border border-[#bfdbfe]/50">
              <Store className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2.2]" />
            </div>

            {/* Vertical Divider */}
            <div
              className="hidden sm:block h-8 sm:h-9 w-px bg-[#bfdbfe] shrink-0"
              aria-hidden="true"
            />

            {/* Bottom Text */}
            <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#0f2d59] font-medium">
              We also want to help preserve the identity of traditional food
              businesses by bringing their offerings into the digital world.
              Because when a local vendor grows, the entire food community
              benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
