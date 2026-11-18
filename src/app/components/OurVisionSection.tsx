"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import VisionModal from "./VisionModal";

export default function OurVisionSection() {
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);

  return (
    <>
      <section
        id="vision"
        aria-label="Our Vision - Bringing Local Food to Every Table"
        className="relative -mt-px overflow-hidden bg-[#f4f8fe] py-7 sm:py-14 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
      >
        {/* Subtle Decorative Leaves at Section Corners - Scaled on mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 z-0 select-none opacity-30 sm:opacity-80"
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
          className="pointer-events-none absolute top-0 right-0 z-0 select-none opacity-30 sm:opacity-80"
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 right-0 z-0 select-none opacity-30 sm:opacity-80"
        >
          <Image
            src="/assets/images/brand-story/hero-leaves-right.png"
            alt=""
            width={120}
            height={100}
            className="w-10 sm:w-20 md:w-24 lg:w-28 h-auto rotate-45"
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1360px] px-3.5 sm:px-6 lg:px-8">
          {/* --- THE VISION CARD --- */}
          <div
            className="relative overflow-hidden rounded-[22px] sm:rounded-[36px] border-2 border-[#5497ff]/70 bg-white p-4.5 sm:p-8 lg:p-10 xl:p-12 pb-14 sm:pb-20 lg:pb-24 shadow-[0_20px_60px_rgba(0,73,173,0.12)]"
          >
            {/* 2-Column Grid Layout: Food Showcase Left + Vision Content Right */}
            <div className="relative z-10 grid grid-cols-1 items-center gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10 2xl:gap-12">
              {/* Left Column: Food Composition with Steam, Blue Aura & Sparkles */}
              <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[270px] sm:max-w-[380px] lg:max-w-none transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/assets/images/brand-story/vision-food-plate@2x.png"
                    alt="Minta Restro authentic biryani in copper handi with steam, idli thali and crisp dosa"
                    width={494}
                    height={505}
                    priority={false}
                    unoptimized
                    className="h-auto w-full object-contain drop-shadow-[0_10px_24px_rgba(0,73,173,0.14)]"
                  />
                </div>
              </div>

              {/* Right Column: Vision Narrative */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start lg:col-span-7 xl:col-span-7">
                {/* Pill: OUR VISION */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0049ad] px-3 sm:px-3.5 py-1 sm:py-1.5 shadow-sm text-white">
                  <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.4] text-white" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                    OUR VISION
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="mt-2.5 sm:mt-4 font-editorial-serif text-[21px] xs:text-[24px] sm:text-[32px] lg:text-[38px] xl:text-[42px] font-extrabold leading-[1.22] tracking-tight text-[#003d99] max-w-xl sm:max-w-none">
                  Our Vision – Bringing Local Food to{" "}
                  <span className="font-script italic text-[#e5a01d] font-normal relative inline-block whitespace-nowrap">
                    Every Table
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 110 10"
                      fill="none"
                      className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 text-[#e5a01d]"
                    >
                      <path
                        d="M4 6C35 2 75 2 106 8C78 4 40 4 4 6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Vision Description Paragraphs */}
                <div className="mt-2.5 sm:mt-4 space-y-2 sm:space-y-3.5 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-[#334155] max-w-xl sm:max-w-none">
                  <p>
                    <strong className="font-bold text-[#092248]">
                      Minta Restro
                    </strong>{" "}
                    was created with a simple but meaningful vision: to bring
                    authentic regional food and traditional local specialities
                    closer to people, while creating opportunities for local food
                    vendors to reach more customers.
                  </p>
                  <p>
                    We believe that great food does not always come from big
                    restaurant chains or expensive dining establishments.
                    Sometimes, the most memorable Biryani comes from a small
                    neighbourhood kitchen...
                  </p>
                </div>

                {/* Read Full Vision Pill Button */}
                <div className="mt-4 sm:mt-6 flex items-center justify-center sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setIsVisionModalOpen(true)}
                    style={{
                      background:
                        "linear-gradient(135deg, #f5a623 0%, #e5a01d 40%, #c58917 100%)",
                    }}
                    className="group inline-flex items-center gap-2 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-[0_6px_20px_rgba(229,160,29,0.35)] transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95 cursor-pointer"
                  >
                    <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">Read Full Vision</span>
                    <svg
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
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

      {/* Dedicated Vision Modal */}
      <VisionModal
        isOpen={isVisionModalOpen}
        onClose={() => setIsVisionModalOpen(false)}
      />
    </>
  );
}

