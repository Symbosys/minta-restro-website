"use client";

import React from "react";

interface CommitmentFeature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const commitmentFeatures: CommitmentFeature[] = [
  {
    title: "Authentic Food Choices",
    desc: "Bringing together regional specialities and familiar everyday meals.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="clocheGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#2b8eff" />
            <stop offset="50%" stopColor="#0062e3" />
            <stop offset="100%" stopColor="#0041b3" />
          </linearGradient>
          <linearGradient id="clocheHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Handle knob */}
        <circle cx="24" cy="13.5" r="3.2" fill="url(#clocheGrad)" />
        {/* Main cloche dome */}
        <path
          d="M10 32C10 21.5 16 16 24 16C32 16 38 21.5 38 32H10Z"
          fill="url(#clocheGrad)"
        />
        {/* Specular highlight */}
        <path
          d="M13 31C13.5 23 18 18 24 18C26 18 27.5 18.5 28.5 19.5C21 21 16 25 13 31Z"
          fill="url(#clocheHighlight)"
        />
        {/* Platter tray */}
        <rect x="7" y="32" width="34" height="4.5" rx="2.2" fill="url(#clocheGrad)" />
        <path
          d="M10 36.5C10 38 12 39 15 39H33C36 39 38 38 38 36.5H10Z"
          fill="#002d80"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    title: "Local Food Partners",
    desc: "Working with local vendors who bring their own food identity and expertise.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shopBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b8eff" />
            <stop offset="100%" stopColor="#004bbd" />
          </linearGradient>
        </defs>
        {/* Awning */}
        <path d="M8 18.5L11 11.5H37L40 18.5H8Z" fill="url(#shopBlue)" />
        {/* Awning flaps with scallops */}
        <path
          d="M8 18.5C8 21.2 11 21.5 11 18.5C11 21.5 14.5 21.5 14.5 18.5C14.5 21.5 18 21.5 18 18.5C18 21.5 21.5 21.5 21.5 18.5C21.5 21.5 25 21.5 25 18.5C25 21.5 28.5 21.5 28.5 18.5C28.5 21.5 32 21.5 32 18.5C32 21.5 35.5 21.5 35.5 18.5C35.5 21.2 40 21.2 40 18.5H8Z"
          fill="url(#shopBlue)"
        />
        {/* Awning stripes */}
        <path d="M12.5 11.5L14.5 18.5H18L17 11.5H12.5Z" fill="#ffffff" opacity="0.35" />
        <path d="M23 11.5V18.5H27L28 11.5H23Z" fill="#ffffff" opacity="0.35" />
        <path d="M33.5 11.5L32.5 18.5H36L37 11.5H33.5Z" fill="#ffffff" opacity="0.35" />
        {/* Shop Body */}
        <rect
          x="11"
          y="20.5"
          width="26"
          height="17.5"
          rx="1.5"
          fill="#f0f6ff"
          stroke="url(#shopBlue)"
          strokeWidth="2"
        />
        {/* Main Door */}
        <rect x="19" y="26" width="10" height="12" rx="1.5" fill="url(#shopBlue)" />
        {/* Windows */}
        <rect x="13.5" y="24.5" width="3.5" height="6.5" rx="0.8" fill="url(#shopBlue)" opacity="0.35" />
        <rect x="31" y="24.5" width="3.5" height="6.5" rx="0.8" fill="url(#shopBlue)" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: "Food Variety",
    desc: "Offering Biryani, Meat Rice, Chicken Rice, Fish Rice, Egg Rice and South Indian dishes.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bowlBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b8eff" />
            <stop offset="100%" stopColor="#004bbd" />
          </linearGradient>
          <linearGradient id="steamBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066f5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {/* Steam waves */}
        <path
          d="M17.5 9.5C16 11.5 17 13.5 17.5 15.5"
          stroke="url(#steamBlue)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M24 7.5C22.2 10.5 23.5 13 24 15.5"
          stroke="url(#steamBlue)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M30.5 9.5C29 11.5 30 13.5 30.5 15.5"
          stroke="url(#steamBlue)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Bowl Body */}
        <path
          d="M9 22C9 31.5 15.5 35.5 24 35.5C32.5 35.5 39 31.5 39 22H9Z"
          fill="url(#bowlBlue)"
        />
        {/* Bowl Rim */}
        <ellipse cx="24" cy="22" rx="15" ry="2.8" fill="#3b82f6" />
        <ellipse cx="24" cy="21.5" rx="13" ry="1.8" fill="#e0edff" />
        {/* Bowl Base */}
        <rect x="18" y="35" width="12" height="2.5" rx="1" fill="#00358a" />
      </svg>
    ),
  },
  {
    title: "Convenience",
    desc: "Making it easier for customers to discover and access local food.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="scooterBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b8eff" />
            <stop offset="100%" stopColor="#004bbd" />
          </linearGradient>
        </defs>
        {/* Delivery Box */}
        <rect x="7" y="21" width="8.5" height="9.5" rx="1.8" fill="#f59e0b" />
        <rect x="8" y="22" width="6.5" height="2" rx="0.5" fill="#fde68a" opacity="0.6" />
        {/* Rider Helmet */}
        <circle cx="21" cy="13.5" r="3.8" fill="#f59e0b" />
        <path d="M22 14.5H24" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        {/* Rider Body */}
        <path
          d="M19 18.5C18 20.5 18.5 23.5 21 25.5L24 28"
          stroke="url(#scooterBlue)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Rider Arms */}
        <path
          d="M21 19.5L27 22.5"
          stroke="url(#scooterBlue)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Scooter Chassis */}
        <path
          d="M11 31H26L31 22.5H33.5"
          stroke="url(#scooterBlue)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M31 22L29 32" stroke="url(#scooterBlue)" strokeWidth="3.2" strokeLinecap="round" />
        {/* Rear Wheel */}
        <circle cx="13.5" cy="33.5" r="4.5" fill="#0f172a" />
        <circle cx="13.5" cy="33.5" r="2" fill="#94a3b8" />
        {/* Front Wheel */}
        <circle cx="33.5" cy="33.5" r="4.5" fill="#0f172a" />
        <circle cx="33.5" cy="33.5" r="2" fill="#94a3b8" />
      </svg>
    ),
  },
  {
    title: "Customer Experience",
    desc: "Building a dependable platform with a focus on service, communication and customer satisfaction.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="userBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b8eff" />
            <stop offset="100%" stopColor="#004bbd" />
          </linearGradient>
        </defs>
        {/* 3 Golden Stars */}
        <path
          d="M18 10L18.8 12.2H21.2L19.2 13.6L20 15.8L18 14.4L16 15.8L16.8 13.6L14.8 12.2H17.2L18 10Z"
          fill="#f59e0b"
        />
        <path
          d="M24 7L24.9 9.5H27.5L25.4 11L26.2 13.5L24 12L21.8 13.5L22.6 11L20.5 9.5H23.1L24 7Z"
          fill="#e5a01d"
        />
        <path
          d="M30 10L30.8 12.2H33.2L31.2 13.6L32 15.8L30 14.4L28 15.8L28.8 13.6L26.8 12.2H29.2L30 10Z"
          fill="#f59e0b"
        />
        {/* Center User */}
        <circle cx="24" cy="20" r="4.5" fill="url(#userBlue)" />
        <path
          d="M16 35C16 29.5 19.5 27 24 27C28.5 27 32 29.5 32 35H16Z"
          fill="url(#userBlue)"
        />
        {/* Left User */}
        <circle cx="14.5" cy="23" r="3.5" fill="#3b82f6" opacity="0.85" />
        <path
          d="M9 35C9 30.5 12 28.5 15.5 28.5C16.8 28.5 18 29 19 29.8C18.2 31.2 18 33 18 35H9Z"
          fill="#3b82f6"
          opacity="0.85"
        />
        {/* Right User */}
        <circle cx="33.5" cy="23" r="3.5" fill="#3b82f6" opacity="0.85" />
        <path
          d="M39 35C39 30.5 36 28.5 32.5 28.5C31.2 28.5 30 29 29 29.8C29.8 31.2 30 33 30 35H39Z"
          fill="#3b82f6"
          opacity="0.85"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    desc: "Listening to customers and vendors to improve the overall experience.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="barBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b8eff" />
            <stop offset="100%" stopColor="#004bbd" />
          </linearGradient>
          <linearGradient id="arrowGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#e5a01d" />
          </linearGradient>
        </defs>
        {/* 3 Chart Bars */}
        <rect x="9.5" y="27" width="6.5" height="12" rx="1.5" fill="url(#barBlue)" opacity="0.75" />
        <rect x="20.5" y="20" width="6.5" height="19" rx="1.5" fill="url(#barBlue)" opacity="0.88" />
        <rect x="31.5" y="13" width="6.5" height="26" rx="1.5" fill="url(#barBlue)" />
        {/* Upward Trending Gold Arrow */}
        <path
          d="M9 24C16 21 23 16 34 8"
          stroke="url(#arrowGold)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M28 8H35V15"
          stroke="url(#arrowGold)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function OurCommitmentSection() {
  return (
    <section
      id="promise"
      aria-label="Our Commitment to Customers"
      className="relative bg-white py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Anchor for any legacy #faq links */}
      <span id="faq" className="sr-only" aria-hidden="true" />

      <div className="mx-auto max-w-7xl 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow: OUR PROMISE */}
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
              OUR PROMISE
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

          {/* Main Heading */}
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight leading-tight">
            <span className="text-[#06214d]">Our Commitment to </span>
            <span className="text-[#0066f5]">Customers</span>
          </h2>

          {/* Subtitle / Intro Narrative */}
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#556987]">
            At Minta Restro, we believe a good food experience starts with trust.
            Our commitment is to build a platform focused on:
          </p>
        </div>

        {/* 6 Features Grid (2 rows x 3 columns on large screens) */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {commitmentFeatures.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-[22px] sm:rounded-[24px] border border-[#5497ff]/25 bg-white p-6 sm:p-7 lg:p-8 shadow-[0_4px_20px_rgba(0,73,173,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5497ff]/50 hover:shadow-[0_12px_32px_rgba(0,73,173,0.12)] flex flex-col items-center text-center"
            >
              {/* Icon Container (Centered at top) */}
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eef5fc] border border-[#d6e6f9] mb-4 sm:mb-4.5 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                {item.icon}
              </div>

              {/* Title & Description (Centered) */}
              <div className="text-center w-full">
                <h3 className="text-base sm:text-[17px] font-extrabold text-[#06214d] leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-[#556987] max-w-[280px] sm:max-w-[320px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

