"use client";

import React, { useState } from "react";

export default function LiveTrackingSection() {
  const [mobileActiveTab, setMobileActiveTab] = useState<"status" | "map">(
    "status"
  );
  return (
    <section
      id="tracking"
      className="relative bg-[#f4f8fe] py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header: LIVE TRACKING & Heading */}
        <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
            <span
              aria-hidden="true"
              className="h-[1.5px] w-12 sm:w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #c58917 100%)",
              }}
            />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#c58917] uppercase">
              LIVE TRACKING
            </span>
            <span
              aria-hidden="true"
              className="h-[1.5px] w-12 sm:w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #c58917 0%, transparent 100%)",
              }}
            />
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-[#002766] leading-tight">
            Know exactly where your food is
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Subtitle & 4 Features */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#556987] mb-6 sm:mb-7">
              From the moment you tap order to the knock on your door — follow
              every step in real time.
            </p>

            <ul className="space-y-4 sm:space-y-6">
              {/* Feature 1 */}
              <li className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fc]">
                  <svg
                    className="h-5 w-5 text-[#10b981]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="text-left pt-0.5">
                  <p className="text-sm sm:text-base font-bold text-[#092248]">
                    Real-time status updates
                  </p>
                  <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-[#556987]">
                    Watch your order move from kitchen to doorstep, live.
                  </p>
                </div>
              </li>

              {/* Feature 2 */}
              <li className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fc]">
                  <svg
                    className="h-5 w-5 text-[#10b981]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="text-left pt-0.5">
                  <p className="text-sm sm:text-base font-bold text-[#092248]">
                    Accurate ETA
                  </p>
                  <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-[#556987]">
                    Know exactly when your food arrives — no guessing.
                  </p>
                </div>
              </li>

              {/* Feature 3 */}
              <li className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fc]">
                  <svg
                    className="h-5 w-5 text-[#10b981]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="text-left pt-0.5">
                  <p className="text-sm sm:text-base font-bold text-[#092248]">
                    Delivery partner tracking
                  </p>
                  <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-[#556987]">
                    See who&apos;s bringing your meal and where they are.
                  </p>
                </div>
              </li>

              {/* Feature 4 */}
              <li className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fc]">
                  <svg
                    className="h-5 w-5 text-[#10b981]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="text-left pt-0.5">
                  <p className="text-sm sm:text-base font-bold text-[#092248]">
                    Push notifications
                  </p>
                  <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-[#556987]">
                    Get notified at every step so you never miss a beat.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Dual Phone Mockups with Solid Black Borders */}
          <div className="lg:col-span-7 w-full">
            {/* Mobile View Toggle (Visible ONLY on mobile: sm:hidden) */}
            <div className="flex sm:hidden items-center justify-center mb-6">
              <div className="inline-flex rounded-full bg-white p-1 border border-gray-200 shadow-xs">
                <button
                  type="button"
                  onClick={() => setMobileActiveTab("status")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    mobileActiveTab === "status"
                      ? "bg-[#002766] text-white shadow-xs"
                      : "text-[#556987] hover:text-[#002766]"
                  }`}
                >
                  Order Status
                </button>
                <button
                  type="button"
                  onClick={() => setMobileActiveTab("map")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    mobileActiveTab === "map"
                      ? "bg-[#002766] text-white shadow-xs"
                      : "text-[#556987] hover:text-[#002766]"
                  }`}
                >
                  Live Map
                </button>
              </div>
            </div>

            {/* Phone Mockups: Side-by-side on sm+, Toggled single phone on mobile */}
            <div className="relative flex flex-row items-center justify-center lg:justify-end gap-5 lg:gap-6 pt-2">
              {/* Organic Sky Blue Aura in Background */}
              <div
                aria-hidden="true"
                className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[300px] sm:h-[380px] bg-[#e3efff]/70 rounded-[120px] rotate-[-12deg] blur-2xl -z-10 pointer-events-none"
              />

              {/* ---------------------------------------------------- */}
              {/* PHONE 1: Order Status Steps Screen                   */}
              {/* ---------------------------------------------------- */}
              <div
                className={`relative shrink-0 w-[260px] xs:w-[280px] sm:w-[250px] md:w-[265px] xl:w-[280px] transition-all duration-200 ${
                  mobileActiveTab === "status" ? "block" : "hidden sm:block"
                }`}
              >
                {/* Solid Black Phone Frame */}
                <div className="relative rounded-[40px] sm:rounded-[44px] border-[9px] sm:border-[11px] border-black bg-black p-0 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
                  {/* Phone Screen Container */}
                  <div className="relative overflow-hidden rounded-[31px] sm:rounded-[33px] bg-white text-left select-none flex flex-col min-h-[420px] xs:min-h-[440px] sm:min-h-[460px]">
                    {/* Top Black Dot / Dynamic Island (Centered horizontally & vertically) */}
                    <div
                      style={{ left: 0, right: 0, margin: "0 auto" }}
                      className="absolute top-2.5 sm:top-3 z-30 h-3.5 w-16 sm:w-18 rounded-full bg-black shadow-xs pointer-events-none"
                    />

                    {/* Main Screen Content */}
                    <div className="flex flex-1 flex-col p-3.5 pt-8 sm:pt-9 bg-white">
                      {/* Top Header */}
                      <div className="mb-1 flex items-center justify-between">
                        <p className="text-[12px] sm:text-[13px] font-bold text-[#092248]">
                          Order #TG-4821
                        </p>
                        <span className="flex items-center gap-1 rounded-full bg-[#e8f8f0] px-2 py-0.5 text-[9px] sm:text-[9.5px] font-bold text-[#10b981]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                          Live
                        </span>
                      </div>
                      <p className="mb-3 text-[10px] sm:text-[11px] text-[#64748b]">
                        Hyderabad Biryani · 2 items
                      </p>

                      {/* Estimated Arrival Card */}
                      <div className="mb-4 rounded-2xl border border-gray-100 bg-white p-3 sm:p-3.5 shadow-xs">
                        <p className="text-[9.5px] sm:text-[10px] font-medium text-gray-400">
                          Estimated arrival
                        </p>
                        <p className="text-xl sm:text-2xl font-black text-[#0049ad] tracking-tight mt-0.5">
                          12:55 PM
                        </p>
                        <div className="mt-2.5 h-1.5 sm:h-2 overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full w-[60%] rounded-full bg-[#0049ad]" />
                        </div>
                      </div>

                      {/* 4 Timeline Steps */}
                      <div className="flex flex-1 flex-col gap-0 px-0.5">
                        {/* Step 1 */}
                        <div className="flex gap-2.5">
                          <div className="flex flex-col items-center">
                            <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-[#10b981] text-white shadow-xs">
                              <svg
                                className="h-3 w-3 stroke-[3]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <div className="my-0.5 w-0.5 flex-1 min-h-[16px] sm:min-h-[20px] bg-[#10b981]" />
                          </div>
                          <div className="pb-2.5">
                            <p className="text-[11px] sm:text-[12px] font-bold text-[#092248]">
                              Order Placed
                            </p>
                            <p className="text-[8.5px] sm:text-[9.5px] text-gray-400">
                              12:04 PM
                            </p>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-2.5">
                          <div className="flex flex-col items-center">
                            <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-[#0ea5e9] text-white shadow-xs">
                              <svg
                                className="h-3 w-3 stroke-[3]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <div className="my-0.5 w-0.5 flex-1 min-h-[16px] sm:min-h-[20px] bg-[#0ea5e9]" />
                          </div>
                          <div className="pb-2.5">
                            <p className="text-[11px] sm:text-[12px] font-bold text-[#092248]">
                              Preparing
                            </p>
                            <p className="text-[8.5px] sm:text-[9.5px] text-gray-400">
                              12:18 PM
                            </p>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-2.5">
                          <div className="flex flex-col items-center">
                            <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full text-[10px] font-bold bg-[#0049ad] text-white shadow-xs">
                              3
                            </div>
                            <div className="my-0.5 w-0.5 flex-1 min-h-[16px] sm:min-h-[20px] bg-gray-200" />
                          </div>
                          <div className="pb-2.5">
                            <p className="text-[11px] sm:text-[12px] font-bold text-[#092248]">
                              Out for Delivery
                              <span className="ml-1.5 rounded-full bg-emerald-50 px-1.5 py-0.2 text-[8px] sm:text-[8.5px] font-semibold text-[#10b981]">
                                In progress
                              </span>
                            </p>
                            <p className="text-[8.5px] sm:text-[9.5px] text-gray-400">
                              12:42 PM
                            </p>
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-2.5">
                          <div className="flex flex-col items-center">
                            <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full text-[10px] font-bold border border-gray-300 bg-white text-gray-400">
                              4
                            </div>
                          </div>
                          <div className="pb-1">
                            <p className="text-[11px] sm:text-[12px] font-semibold text-gray-400">
                              Delivered
                            </p>
                            <p className="text-[8.5px] sm:text-[9.5px] text-gray-300">
                              —
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Home Indicator Line (Right at the bottom) */}
                    <div className="mt-auto pb-2 sm:pb-2.5 pt-1">
                      <div className="h-1 sm:h-1.5 w-24 sm:w-28 rounded-full bg-gray-300 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------------------------------------------- */}
              {/* PHONE 2: Delivery Partner & Live Map Tracking Screen */}
              {/* ---------------------------------------------------- */}
              <div
                className={`relative shrink-0 w-[260px] xs:w-[280px] sm:w-[250px] md:w-[265px] xl:w-[280px] sm:mt-4 lg:mt-6 transition-all duration-200 ${
                  mobileActiveTab === "map" ? "block" : "hidden sm:block"
                }`}
              >
                {/* Solid Black Phone Frame */}
                <div className="relative rounded-[40px] sm:rounded-[44px] border-[9px] sm:border-[11px] border-black bg-black p-0 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
                  {/* Phone Screen Container */}
                  <div className="relative overflow-hidden rounded-[31px] sm:rounded-[33px] bg-white flex flex-col min-h-[420px] xs:min-h-[440px] sm:min-h-[460px] text-left select-none">
                    {/* Top Black Dot / Dynamic Island (Centered horizontally & vertically) */}
                    <div
                      style={{ left: 0, right: 0, margin: "0 auto" }}
                      className="absolute top-2.5 sm:top-3 z-30 h-3.5 w-16 sm:w-18 rounded-full bg-black shadow-xs pointer-events-none"
                    />

                    {/* Top Bar inside Phone */}
                    <div className="relative z-10 flex items-center justify-between bg-white px-3 pb-2 pt-8 sm:pt-9 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <div className="h-4.5 w-4.5 rounded-full bg-gray-100 flex items-center justify-center text-[#092248]">
                          <svg
                            className="h-2.5 w-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[11px] sm:text-[11.5px] font-bold text-[#092248] leading-none">
                            Live Map
                          </p>
                          <p className="text-[8.5px] sm:text-[9px] text-[#64748b]">
                            Order #TG-4821
                          </p>
                        </div>
                      </div>

                      <span className="flex items-center gap-1 rounded-full bg-[#e8f8f0] px-2 py-0.5 text-[8.5px] sm:text-[9px] font-bold text-[#10b981]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                        GPS Live
                      </span>
                    </div>

                    {/* Map Area */}
                    <div className="relative h-[165px] xs:h-[180px] sm:h-[190px] w-full bg-[#f8fafc] overflow-hidden select-none">
                      {/* Vector Map Roads & Landmarks */}
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 300 200"
                        preserveAspectRatio="none"
                      >
                        {/* Street blocks */}
                        <rect
                          x="15"
                          y="15"
                          width="80"
                          height="50"
                          rx="6"
                          fill="#edf2f7"
                        />
                        <rect
                          x="205"
                          y="15"
                          width="80"
                          height="55"
                          rx="6"
                          fill="#edfbf2"
                        />
                        <rect
                          x="15"
                          y="135"
                          width="85"
                          height="55"
                          rx="6"
                          fill="#fef9e7"
                        />
                        <rect
                          x="205"
                          y="125"
                          width="80"
                          height="65"
                          rx="6"
                          fill="#edfbf2"
                        />

                        {/* Roads */}
                        <path
                          d="M 0 85 L 300 85"
                          stroke="#ffffff"
                          strokeWidth="18"
                          fill="none"
                        />
                        <path
                          d="M 0 85 L 300 85"
                          stroke="#cbd5e1"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          fill="none"
                        />
                        <path
                          d="M 110 0 L 110 200"
                          stroke="#ffffff"
                          strokeWidth="16"
                          fill="none"
                        />
                        <path
                          d="M 195 0 L 195 200"
                          stroke="#ffffff"
                          strokeWidth="16"
                          fill="none"
                        />
                        <path
                          d="M 0 150 L 300 150"
                          stroke="#ffffff"
                          strokeWidth="16"
                          fill="none"
                        />

                        {/* Delivery Route Path (Royal Blue) */}
                        <path
                          d="M 60 90 Q 95 90 100 50 T 195 50 L 195 105"
                          fill="none"
                          stroke="#0049ad"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Restaurant Marker (Top/Start) */}
                      <div className="absolute left-[24%] top-[40px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                        <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-[#0049ad] text-white shadow-md ring-1.5 ring-white">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="h-2.5 w-2.5"
                          >
                            <path d="M3 21h18M5 21V7l7-4 7 4v14" />
                          </svg>
                        </div>
                        <span className="mt-0.5 rounded-full bg-[#0049ad] px-1.5 py-0.2 text-[7px] font-bold text-white shadow-xs whitespace-nowrap">
                          Rahul&apos;s
                        </span>
                      </div>

                      {/* Destination Marker (Customer Home) */}
                      <div className="absolute left-[68%] top-[102px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                        <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-[#e11d48] text-white shadow-md ring-1.5 ring-white">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="h-2.5 w-2.5"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                        </div>
                        <span className="mt-0.5 rounded-full bg-white px-1.5 py-0.2 text-[7px] font-bold text-[#e11d48] shadow-xs border border-gray-100 whitespace-nowrap">
                          Your Home
                        </span>
                      </div>

                      {/* Rider Icon along route with soft circular beacon */}
                      <div className="absolute left-[46%] top-[38px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                        <div className="p-1 rounded-full bg-blue-100/70">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0049ad] text-white shadow-md ring-1 ring-white">
                            <span className="text-[8.5px] sm:text-[9px]">
                              🛵
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Sheet Cards */}
                    <div className="p-2.5 sm:p-3 bg-white space-y-2">
                      {/* Estimated Delivery Bar */}
                      <div className="rounded-xl border border-gray-100 bg-white p-2 px-2.5 shadow-xs flex items-center justify-between">
                        <div>
                          <p className="text-[8px] sm:text-[8.5px] font-medium text-gray-400">
                            Estimated Delivery
                          </p>
                          <p className="text-[10.5px] sm:text-[11.5px] font-black text-[#0049ad] leading-tight">
                            12:55 PM{" "}
                            <span className="text-[8.5px] sm:text-[9.5px] font-normal text-[#10b981]">
                              (27m)
                            </span>
                          </p>
                        </div>
                        <span className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[7.5px] sm:text-[8.5px] font-bold text-[#092248] border border-gray-200/60">
                          2.4 km
                        </span>
                      </div>

                      {/* Partner Info Row */}
                      <div className="p-2 px-2.5 rounded-xl border border-gray-100 bg-white shadow-xs flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <div className="relative shrink-0">
                            <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#0049ad] flex items-center justify-center text-white text-[9px] sm:text-[10px]">
                              🛵
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center rounded-full bg-[#10b981] text-white text-[6px] sm:text-[7px] font-bold ring-1 ring-white">
                              ✓
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1">
                              <p className="text-[10px] sm:text-[10.5px] font-bold text-[#092248] truncate">
                                Rahul K.
                              </p>
                              <span className="rounded bg-amber-50 px-1 py-0.2 text-[7.5px] sm:text-[8px] font-bold text-amber-700 shrink-0">
                                ★ 4.9
                              </span>
                            </div>
                            <p className="text-[8px] sm:text-[8.5px] text-gray-400 truncate">
                              Activa · DL-04
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <div className="h-5.5 w-5.5 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-xs cursor-pointer hover:bg-emerald-600 transition-colors">
                            <svg
                              className="h-2.5 w-2.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <div className="h-5.5 w-5.5 rounded-full bg-[#0049ad] flex items-center justify-center text-white shadow-xs cursor-pointer hover:bg-blue-800 transition-colors">
                            <svg
                              className="h-2.5 w-2.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Green Status Message Banner */}
                      <div className="rounded-lg bg-[#edfbf2] px-2.5 py-1.5 flex items-center gap-1.5 border border-[#d1fae5]">
                        <span className="text-[9px]">📋</span>
                        <p className="text-[7.5px] sm:text-[8px] font-medium text-[#166534] leading-tight">
                          Partner reached near your area.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Home Indicator Line (Right at the bottom) */}
                    <div className="mt-auto pb-2 sm:pb-2.5 pt-1">
                      <div className="h-1 sm:h-1.5 w-24 sm:w-28 rounded-full bg-gray-300 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
