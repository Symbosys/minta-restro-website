"use client";

import React from "react";

export default function TasteOfTraditionSection() {
  return (
    <section
      id="brand-motto"
      aria-label="Minta Restro - The Taste of Tradition"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Soft Sky Blue Wave Accents along Bottom-Left and Bottom-Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[48%] max-w-[560px] h-28 sm:h-36 select-none opacity-85"
      >
        <svg
          viewBox="0 0 500 140"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0 140V60C120 70 250 110 380 90C430 82 470 65 500 50V140H0Z"
            fill="url(#waveLeftGrad1)"
          />
          <path
            d="M0 140V90C140 95 280 130 420 105C460 98 480 85 500 70V140H0Z"
            fill="url(#waveLeftGrad2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient
              id="waveLeftGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#dbeafe" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="waveLeftGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[48%] max-w-[560px] h-28 sm:h-36 select-none opacity-85"
      >
        <svg
          viewBox="0 0 500 140"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M500 140V60C380 70 250 110 120 90C70 82 30 65 0 50V140H500Z"
            fill="url(#waveRightGrad1)"
          />
          <path
            d="M500 140V90C360 95 220 130 80 105C40 98 20 85 0 70V140H500Z"
            fill="url(#waveRightGrad2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient
              id="waveRightGrad1"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#dbeafe" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="waveRightGrad2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl 2xl:max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        {/* Brand Title: MINTA RESTRO */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black uppercase tracking-tight text-[#06255e] leading-none">
          MINTA RESTRO
        </h2>

        {/* Tagline: — THE TASTE OF TRADITION. — */}
        <div className="mt-3.5 sm:mt-4 md:mt-5 flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
          <span
            aria-hidden="true"
            className="h-[1.5px] sm:h-[2px] w-12 sm:w-16 md:w-20 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #b88224 100%)",
            }}
          />
          <span className="text-xs sm:text-sm md:text-[15px] font-extrabold tracking-[0.24em] text-[#b88224] uppercase">
            THE TASTE OF TRADITION.
          </span>
          <span
            aria-hidden="true"
            className="h-[1.5px] sm:h-[2px] w-12 sm:w-16 md:w-20 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #b88224 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Motto: Every Dish Has a Story. Every Flavor Has a Tradition. Discover. Taste. Celebrate. */}
        <p className="mt-5 sm:mt-6 md:mt-7 text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed text-[#2d3748]">
          <span className="italic font-editorial-serif">
            Every Dish Has a Story. Every Flavor Has a Tradition.
          </span>{" "}
          <span className="font-extrabold text-[#0052cc] whitespace-nowrap">
            Discover. Taste. Celebrate.
          </span>
        </p>

        {/* Bottom Feature Tags: AUTHENTIC FOOD | LOCAL VENDORS | REGIONAL FLAVOURS */}
        <div className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs md:text-[13px] font-black tracking-[0.2em] uppercase text-[#b88224]">
          <span>AUTHENTIC FOOD</span>
          <span aria-hidden="true" className="text-[#b88224]/50">
            |
          </span>
          <span>LOCAL VENDORS</span>
          <span aria-hidden="true" className="text-[#b88224]/50">
            |
          </span>
          <span>REGIONAL FLAVOURS</span>
        </div>
      </div>
    </section>
  );
}

