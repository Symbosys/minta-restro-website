"use client";

import React from "react";
import Image from "next/image";

function MissionTargetIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className="h-7 w-7 sm:h-8 sm:w-8"
      aria-hidden="true"
    >
      {/* Outer target circle */}
      <circle cx="18" cy="18" r="13" stroke="white" strokeWidth="2.4" />
      {/* Middle ring */}
      <circle cx="18" cy="18" r="8.5" stroke="white" strokeWidth="2.2" />
      {/* Center Bullseye */}
      <circle cx="18" cy="18" r="4.2" fill="white" />
      {/* Arrow hitting bullseye from top-right */}
      <path
        d="M26.5 9.5L19.2 16.8M26.5 9.5H22.5M26.5 9.5V13.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisionBinocularsIcon() {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className="h-7 w-7 sm:h-8 sm:w-8"
      aria-hidden="true"
    >
      {/* Left Eyepiece & Barrel */}
      <rect x="5.5" y="8" width="8" height="5" rx="2" fill="white" />
      <path
        d="M7 13L5 22C4.5 24.2 6.2 26 8.5 26H13.5C15.8 26 17.5 24.2 17 22L15 13H7Z"
        fill="white"
      />
      <circle cx="11" cy="21" r="3.2" fill="#0052cc" />

      {/* Right Eyepiece & Barrel */}
      <rect x="22.5" y="8" width="8" height="5" rx="2" fill="white" />
      <path
        d="M21 13L19 22C18.5 24.2 20.2 26 22.5 26H27.5C29.8 26 31.5 24.2 31 22L29 13H21Z"
        fill="white"
      />
      <circle cx="25" cy="21" r="3.2" fill="#0052cc" />

      {/* Center Bridge & Knobs */}
      <rect x="13.5" y="15.5" width="9" height="3" rx="1" fill="white" />
      <rect x="16.5" y="9.5" width="3" height="4.5" rx="1" fill="white" />
    </svg>
  );
}

export default function RoadAheadSection() {
  return (
    <section
      id="road-ahead"
      aria-label="The Road Ahead, Our Mission & Our Vision - Minta Restro"
      className="relative bg-[#f4f8fe] py-8 sm:py-16 lg:py-20 overflow-hidden scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1360px] px-3.5 sm:px-6 lg:px-8">
        {/* --- 1. THE ROAD AHEAD (Inside the Blue-Bordered Presentation Card) --- */}
        <div className="relative w-full rounded-[22px] sm:rounded-[36px] bg-gradient-to-br from-white via-[#fcfdff] to-[#f6faff] border-2 border-[#0066f5] p-4.5 sm:p-8 md:p-10 lg:p-12 shadow-[0_12px_45px_rgba(0,102,245,0.08)] overflow-hidden">
          {/* Subtle Ambient Sky Glow behind Mountain Peak */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[#dbeafe]/60 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 xl:gap-14 items-center">
            {/* Left Column: Winding Road Illustration with Partner Pins */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/assets/images/brand-story/road-ahead-illustration@2x.png"
                  alt="The Road Ahead - Minta Restro journey with food partner pins leading to the mountain summit flag"
                  width={560}
                  height={460}
                  className="h-auto w-full object-contain drop-shadow-[0_10px_28px_rgba(0,73,173,0.12)]"
                  priority={false}
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Eyebrow & Narrative Paragraphs (Centered on mobile, left-aligned on desktop) */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center md:col-span-7 md:border-l md:border-[#0066f5]/25 md:pl-8 lg:pl-12 xl:pl-14">
              {/* Eyebrow: — THE ROAD AHEAD — */}
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-3.5 sm:mb-6">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-10 sm:w-14 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #b87814 100%)",
                  }}
                />
                <span className="text-xs sm:text-sm lg:text-[14px] font-black tracking-[0.24em] text-[#b87814] uppercase">
                  THE ROAD AHEAD
                </span>
                <span
                  aria-hidden="true"
                  className="h-[2px] w-10 sm:w-14 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #b87814 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* 3 Story Paragraphs */}
              <div className="space-y-3.5 sm:space-y-5 text-xs sm:text-base lg:text-[16px] xl:text-[16.5px] leading-relaxed text-slate-700 max-w-xl md:max-w-none">
                <p>
                  Our journey is only beginning. We envision Minta Restro growing
                  into a trusted platform that brings together different food
                  categories, regional cuisines and local food communities across
                  cities.
                </p>
                <p>
                  As we expand, our focus will remain on discovering great local
                  food partners, building strong vendor relationships and
                  delivering meaningful customer experiences.
                </p>
                <p>
                  Every new vendor adds a new food story. Every new dish introduces
                  another flavour. And every customer becomes part of our growing
                  food community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. OUR MISSION & OUR VISION CARDS (Outside Blue Border, Same Section) --- */}
        <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Card 1: Our Mission */}
          <div className="relative rounded-[22px] sm:rounded-[28px] border border-[#38bdf8]/50 bg-white p-5 sm:p-7 lg:p-8 shadow-[0_6px_25px_rgba(0,102,245,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,102,245,0.10)] hover:-translate-y-0.5">
            {/* Soft Sky Blue Corner Wave Decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -right-5 w-36 h-28 opacity-70"
            >
              <svg viewBox="0 0 140 100" fill="none" className="w-full h-full">
                <path
                  d="M0 100C40 70 80 50 140 60V100H0Z"
                  fill="url(#missionWaveGrad)"
                />
                <path
                  d="M30 100C70 80 100 65 140 75V100H30Z"
                  fill="#bae6fd"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient
                    id="missionWaveGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#bae6fd" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Header: Icon + Title (Centered on mobile, row on desktop) */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl p-2.5 shadow-md shadow-blue-500/30"
                  style={{
                    background:
                      "linear-gradient(135deg, #2b8eff 0%, #0052cc 100%)",
                    backgroundColor: "#0052cc",
                  }}
                >
                  <MissionTargetIcon />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0066f5] tracking-tight leading-none">
                    Our Mission
                  </h3>
                  {/* Yellow Curved Swoosh Accent */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 8"
                    fill="none"
                    className="w-20 sm:w-24 h-2 sm:h-2.5 text-[#f59e0b] mt-1 mx-auto sm:mx-0"
                  >
                    <path
                      d="M2 3C25 7 75 7 98 2C75 5 25 5 2 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Description Narrative */}
              <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-[#334155]">
                To connect people with authentic local and regional food by
                empowering food vendors, expanding culinary choices and making
                traditional Indian flavours accessible through a convenient
                digital platform.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="relative rounded-[22px] sm:rounded-[28px] border border-[#38bdf8]/50 bg-white p-5 sm:p-7 lg:p-8 shadow-[0_6px_25px_rgba(0,102,245,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,102,245,0.10)] hover:-translate-y-0.5">
            {/* Soft Sky Blue Corner Wave Decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -right-5 w-36 h-28 opacity-70"
            >
              <svg viewBox="0 0 140 100" fill="none" className="w-full h-full">
                <path
                  d="M0 100C40 70 80 50 140 60V100H0Z"
                  fill="url(#visionWaveGrad)"
                />
                <path
                  d="M30 100C70 80 100 65 140 75V100H30Z"
                  fill="#bae6fd"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient
                    id="visionWaveGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#bae6fd" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Header: Icon + Title (Centered on mobile, row on desktop) */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl p-2.5 shadow-md shadow-blue-500/30"
                  style={{
                    background:
                      "linear-gradient(135deg, #2b8eff 0%, #0052cc 100%)",
                    backgroundColor: "#0052cc",
                  }}
                >
                  <VisionBinocularsIcon />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0066f5] tracking-tight leading-none">
                    Our Vision
                  </h3>
                  {/* Yellow Curved Swoosh Accent */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 8"
                    fill="none"
                    className="w-20 sm:w-24 h-2 sm:h-2.5 text-[#f59e0b] mt-1 mx-auto sm:mx-0"
                  >
                    <path
                      d="M2 3C25 7 75 7 98 2C75 5 25 5 2 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Description Narrative */}
              <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-[#334155]">
                To become a recognised Indian food discovery and ordering platform
                that celebrates regional cuisines, supports local food
                entrepreneurs and connects diverse food cultures across cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
