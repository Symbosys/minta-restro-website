"use client";

import React from "react";
import Image from "next/image";
import {
  ChefHat,
  EyeOff,
  Handshake,
  Laptop,
  Layers,
  LayoutGrid,
  MapPin,
  Soup,
  Store,
  Target,
  Users,
} from "lucide-react";

export const differenceItems = [
  {
    culture: "Local food specialities",
    cultureIcon: "soup",
    approach: "Discover regional dishes",
    approachIcon: "map-pin",
  },
  {
    culture: "Independent vendors",
    cultureIcon: "store",
    approach: "Empower local food businesses",
    approachIcon: "handshake",
  },
  {
    culture: "Family and traditional recipes",
    cultureIcon: "users",
    approach: "Celebrate culinary identity",
    approachIcon: "chef",
  },
  {
    culture: "Limited local visibility",
    cultureIcon: "eye-off",
    approach: "Digital customer reach",
    approachIcon: "laptop",
  },
  {
    culture: "Multiple food categories",
    cultureIcon: "layers",
    approach: "One food discovery platform",
    approachIcon: "grid",
  },
];

function ClocheIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 18h18" />
      <path d="M4 18a8 8 0 0 1 16 0" />
      <path d="M12 4v2" />
      <circle cx="12" cy="3.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function RenderCultureIcon({ name }: { name: string }) {
  const iconClass = "h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[2.2]";
  switch (name) {
    case "soup":
      return <Soup className={iconClass} />;
    case "store":
      return <Store className={iconClass} />;
    case "users":
      return <Users className={iconClass} />;
    case "eye-off":
      return <EyeOff className={iconClass} />;
    case "layers":
      return <Layers className={iconClass} />;
    default:
      return null;
  }
}

function RenderApproachIcon({ name }: { name: string }) {
  const iconClass = "h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[2.2]";
  switch (name) {
    case "map-pin":
      return <MapPin className={iconClass} />;
    case "handshake":
      return <Handshake className={iconClass} />;
    case "chef":
      return <ChefHat className={iconClass} />;
    case "laptop":
      return <Laptop className={iconClass} />;
    case "grid":
      return <LayoutGrid className={iconClass} />;
    default:
      return null;
  }
}

export default function WhatMakesDifferentSection() {
  return (
    <section
      id="experience"
      aria-label="What Makes Minta Restro Different"
      className="relative overflow-hidden bg-brand-text py-12 sm:py-16 lg:py-20 text-white scroll-mt-16 sm:scroll-mt-20"
    >
      <span id="different" className="sr-only" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8 text-center">
        {/* Golden Chef Hat & Tapered Hairlines on Top */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 max-w-sm sm:max-w-md mx-auto mb-1.5 sm:mb-2">
          {/* Left Tapered Line */}
          <span
            aria-hidden="true"
            className="h-[2px] w-20 sm:w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(229, 160, 29, 0.4) 30%, #e5a01d 100%)",
            }}
          />
          {/* Chef Hat Icon */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="#e5a01d"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 sm:h-8 sm:w-8 shrink-0"
          >
            {/* Base band */}
            <path d="M7 21h18v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5z" />
            {/* Vertical pleats */}
            <path d="M13 21v6M19 21v6" />
            {/* 3 Toque puffs */}
            <path d="M7 21c-2.8-1.5-3.8-4.5-3-7.5 1-3.5 4.5-4.5 7-3 1.5-3.5 5.5-5.5 10-3.5 2.5 1 4 2.5 4.5 4.5 2.5-.5 5.5.8 6 4 .5 2.5-.5 5.5-3.5 6.5" />
          </svg>
          {/* Right Tapered Line */}
          <span
            aria-hidden="true"
            className="h-[2px] w-20 sm:w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #e5a01d 0%, rgba(229, 160, 29, 0.4) 70%, transparent 100%)",
            }}
          />
        </div>

        {/* Heading: What Makes Minta Restro Different? */}
        <h2 className="font-sans text-[22px] sm:text-[30px] lg:text-[36px] font-extrabold tracking-tight text-white leading-tight">
          What Makes Minta Restro{" "}
          <span className="relative inline-block italic text-[#3b82f6] whitespace-nowrap ml-1 sm:ml-1.5">
            Different?
            <svg
              aria-hidden="true"
              viewBox="0 0 130 12"
              fill="none"
              className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#e5a01d]"
            >
              <path
                d="M3 6C45 1.5 95 1.5 127 7.5C95 3.5 50 3.5 3 6Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </h2>

        {/* Table UI Styled for Dark Background */}
        <div
          className="relative mt-6 sm:mt-8 mx-auto w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1260px] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 xl:p-8 border shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          style={{
            backgroundColor: "#0b1320",
            borderColor: "#1e2f4a",
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch gap-3.5 md:gap-0">

            {/* --- COLUMN 1: TRADITIONAL FOOD CULTURE --- */}
            <div
              className="flex flex-col flex-1 min-w-0 rounded-2xl p-3.5 sm:p-5 lg:p-6 text-left border"
              style={{
                backgroundColor: "#101b2d",
                borderColor: "#1e3252",
              }}
            >
              {/* Blue Header Pill */}
              <div
                className="flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-white shadow-sm shadow-blue-500/25 mb-3 sm:mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #0052cc 0%, #0066f5 100%)",
                  backgroundColor: "#0052cc",
                }}
              >
                <ClocheIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white stroke-[2.2] shrink-0" />
                <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
                  Traditional Food Culture
                </span>
              </div>

              {/* 5 Rows with Alternating Dark-Blue Stripes */}
              <div className="flex flex-col gap-1 sm:gap-1.5 flex-grow justify-between">
                {differenceItems.map((item, idx) => {
                  const isStripe = idx % 2 === 1;
                  return (
                    <div
                      key={item.culture}
                      className="flex items-center gap-3 sm:gap-3.5 rounded-xl px-3 py-2 sm:py-2.5 transition-colors"
                      style={
                        isStripe
                          ? { backgroundColor: "#16253d" }
                          : { backgroundColor: "transparent" }
                      }
                    >
                      <div
                        className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-lg border shadow-xs"
                        style={{
                          backgroundColor: "#132238",
                          borderColor: "#254570",
                          color: "#60a5fa",
                        }}
                      >
                        <RenderCultureIcon name={item.cultureIcon} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 leading-tight">
                        {item.culture}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop Center "VS" Badge Divider (Physically centered between Column 1 & Column 2) */}
            <div
              aria-hidden="true"
              className="hidden md:flex flex-col items-center justify-center relative w-6 lg:w-8 shrink-0 z-20"
            >
              {/* Top dashed hairline */}
              <div
                className="w-0 flex-1 border-r border-dashed"
                style={{ borderColor: "rgba(59, 130, 246, 0.4)" }}
              />

              {/* Center "VS" Circle */}
              <div
                className="my-2 flex h-11 w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full p-1 border-2 border-dashed shadow-lg shadow-blue-500/25"
                style={{
                  backgroundColor: "#0b1320",
                  borderColor: "#3b82f6",
                }}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-full text-white font-black italic text-xs lg:text-[13px] tracking-wider"
                  style={{ backgroundColor: "#0052cc" }}
                >
                  VS
                </div>
              </div>

              {/* Bottom dashed hairline */}
              <div
                className="w-0 flex-1 border-r border-dashed"
                style={{ borderColor: "rgba(59, 130, 246, 0.4)" }}
              />
            </div>

            {/* Mobile "VS" Badge */}
            <div className="flex md:hidden items-center justify-center -my-1 z-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full p-1 border-2 border-dashed shadow-sm"
                style={{
                  backgroundColor: "#0b1320",
                  borderColor: "#3b82f6",
                }}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-full text-white font-black italic text-xs tracking-wider"
                  style={{ backgroundColor: "#0052cc" }}
                >
                  VS
                </div>
              </div>
            </div>

            {/* --- COLUMN 2: OUR APPROACH --- */}
            <div
              className="relative flex flex-col flex-1 min-w-0 rounded-2xl p-3.5 sm:p-5 lg:p-6 text-left border"
              style={{
                backgroundColor: "#131722",
                borderColor: "#362f1c",
              }}
            >
              {/* Yellow Sparkles on Top-Right Corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-2.5 -right-1 sm:-top-3 sm:-right-2"
              >
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7 text-[#f59e0b]"
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

              {/* Amber/Gold Header Pill */}
              <div
                className="flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[#1c1917] shadow-sm shadow-amber-500/25 mb-3 sm:mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #f59e0b 0%, #eab308 100%)",
                  backgroundColor: "#f59e0b",
                }}
              >
                <Target className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#1c1917] stroke-[2.3] shrink-0" />
                <span className="text-xs sm:text-sm font-bold tracking-wide text-[#1c1917]">
                  Our Approach
                </span>
              </div>

              {/* 5 Rows with Alternating Dark-Amber Stripes */}
              <div className="flex flex-col gap-1 sm:gap-1.5 flex-grow justify-between">
                {differenceItems.map((item, idx) => {
                  const isStripe = idx % 2 === 1;
                  return (
                    <div
                      key={item.approach}
                      className="flex items-center gap-3 sm:gap-3.5 rounded-xl px-3 py-2 sm:py-2.5 transition-colors"
                      style={
                        isStripe
                          ? { backgroundColor: "#221e16" }
                          : { backgroundColor: "transparent" }
                      }
                    >
                      <div
                        className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-lg border shadow-xs"
                        style={{
                          backgroundColor: "#2b2010",
                          borderColor: "#4d3919",
                          color: "#fbbf24",
                        }}
                      >
                        <RenderApproachIcon name={item.approachIcon} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 leading-tight">
                        {item.approach}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
