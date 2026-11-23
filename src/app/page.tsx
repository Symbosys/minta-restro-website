"use client";

import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { showcaseProducts } from "./showcaseData";
import Gsap3DShowcase from "./components/Gsap3DShowcase";
import HeroBrandHeritageSection from "./components/HeroBrandHeritageSection";
import OurVisionSection from "./components/OurVisionSection";
import FoodCultureSection from "./components/FoodCultureSection";
import WhatMakesDifferentSection from "./components/WhatMakesDifferentSection";
import CommunityFlavoursSection from "./components/CommunityFlavoursSection";
import BrandBeliefSection from "./components/BrandBeliefSection";
import VendorCommunitySection from "./components/VendorCommunitySection";
import OurCommitmentSection from "./components/OurCommitmentSection";
import RoadAheadSection from "./components/RoadAheadSection";
import TasteOfTraditionSection from "./components/TasteOfTraditionSection";
import LiveTrackingSection from "./components/LiveTrackingSection";
import Navbar from "./Navbar";

import Footer from "./Footer";

const RestroWebsite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCity, setActiveCity] = useState(1);

  const cities = [
    {
      name: "Ranchi",
      desc: "Biryani • Meat Rice • Chicken Rice • South Indian",
    },
    {
      name: "Jamshedpur",
      desc: "Local food stories and Restro discovery pages.",
    },
    {
      name: "Dhanbad",
      desc: "City-specific food guides and partner discovery.",
    },
  ];

  useEffect(() => {
    // Preload showcase images immediately into browser cache
    if (typeof window !== "undefined") {
      const showcaseImgNames = [
        "biryani.png",
        "pizza.png",
        "dosa.png",
        "idli.png",
        "indianthali.png",
        "burger.png",
        "muttonbiryani.png",
        "thali.png",
        "meat-rice.png",
        "cake.png",
      ];
      showcaseImgNames.forEach((name) => {
        const img = new window.Image();
        img.decoding = "sync";
        img.src = `/assets/images/${name}`;
      });
    }
  }, []);

  const foodTabs = [
    {
      id: "biryani",
      emoji: "🍛",
      name: "All Types of Biryani",
      desc: "Chicken, Mutton, Egg, Fish and more — fragrant rice and rich flavours.",
      tags: [
        "Chicken Biryani",
        "Mutton Biryani",
        "Egg Biryani",
        "Fish Biryani",
        "Hyderabadi Dum Biryani",
        "Special Handi Biryani",
      ],
      items: [
        { name: "Hyderabadi Dum Biryani", price: "₹349" },
        { name: "Chicken Biryani", price: "₹249" },
        { name: "Mutton Biryani", price: "₹399" },
        { name: "Egg Biryani", price: "₹199" },
      ],
    },
    {
      id: "bhaat",
      emoji: "🍖",
      name: "Meat Rice",
      desc: "Hearty meat and rice combinations inspired by traditional Indian kitchens.",
      tags: [
        "Mutton Rice Thali",
        "Champaran Meat Rice",
        "Desi Ghee Meat Rice",
        "Special Handi Meat",
        "Bihari Meat Rice",
      ],
      items: [
        { name: "Special Mutton Rice", price: "₹389" },
        { name: "Champaran Handi Rice", price: "₹449" },
        { name: "Desi Gravy Rice Bowl", price: "₹299" },
        { name: "Kabab & Rice Combo", price: "₹349" },
      ],
    },
    {
      id: "chicken",
      emoji: "🍗",
      name: "Chicken Rice",
      desc: "Chicken, curry and rice combinations made for everyday comfort.",
      tags: [
        "Tari Chicken Rice",
        "Dhaba Chicken Rice",
        "Butter Chicken Bowl",
        "Homestyle Chicken Thali",
        "Chicken Korma Rice",
      ],
      items: [
        { name: "Tari Chicken Rice", price: "₹229" },
        { name: "Dhaba Style Chicken Rice", price: "₹259" },
        { name: "Boneless Curry Bowl", price: "₹279" },
        { name: "Mini Chicken Thali", price: "₹199" },
      ],
    },
    {
      id: "south",
      emoji: "🥞",
      name: "South Indian",
      desc: "Dosa, Idli, Vada, Uttapam and timeless South Indian favourites.",
      tags: [
        "Ghee Roast Masala Dosa",
        "Steamed Idli Sambar",
        "Crispy Medu Vada",
        "Onion Uttapam",
        "Filter Coffee",
        "Podi Dosa",
      ],
      items: [
        { name: "Special Masala Dosa", price: "₹149" },
        { name: "Idli Vada Combo", price: "₹129" },
        { name: "Ghee Podi Roast", price: "₹169" },
        { name: "South Indian Platter", price: "₹219" },
      ],
    },
  ];

  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(
      ".cursor-outline",
    ) as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" },
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a, button, .nav-link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        if (cursorOutline) cursorOutline.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        if (cursorOutline) cursorOutline.classList.remove("hovered");
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const currentTab = foodTabs[activeTab];

  return (
    <>
      <Head>
        <title>
          Restro — Order Biryani, Cooked Meals &amp; South Indian Food
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Restro brings three food modes in one app — Biryani, Cooked meals, and South Indian classics. Order in seconds with live tracking."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="afterInteractive">
        {`
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  brand: {
                    primary: '#0049AD',
                    'primary-light': '#3b82f6',
                    'primary-dark': '#002d6b',
                    accent: '#10b981',
                    text: '#111827',
                    'text-muted': '#6b7280',
                    surface: '#fbf9f5',
                    'surface-warm': '#f5f2eb',
                    'surface-elevated': '#ffffff',
                    border: '#e5e7eb',
                  },
                  mintaBlue: '#0049AD',
                  mintaGold: '#fbc02d',
                },
                fontFamily: {
                  sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                  serif: ['"Playfair Display"', 'Georgia', 'serif'],
                  script: ['"Caveat"', 'cursive'],
                }
              }
            }
          }
        `}
      </Script>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");

        html,
        body {
          background-color: #ffffff;
          color: #111827;
          overflow-x: hidden;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        @media (hover: hover) and (pointer: fine) {
          body {
            cursor: none;
          }
        }

        .cursor-dot,
        .cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 9999;
          pointer-events: none;
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: #0049ad;
        }
        .cursor-outline {
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(0, 73, 173, 0.45);
          transition:
            width 0.2s,
            height 0.2s;
        }
        .cursor-outline.hovered {
          width: 64px;
          height: 64px;
          background-color: rgba(0, 73, 173, 0.08);
          border-color: #0049ad;
        }

        .font-script {
          font-family: "Caveat", cursive;
        }

        .font-editorial-serif {
          font-family: "Playfair Display", Georgia, serif;
        }

        .gradient-flame {
          background: linear-gradient(135deg, #0049ad 0%, #0066f5 100%);
        }

        .gradient-text-flame {
          background: linear-gradient(135deg, #0049ad 0%, #0070f3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-warm {
          background-color: #f5f2eb;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 36s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee-infinite {
          display: flex;
          flex-shrink: 0;
          animation: marqueeScroll 22s linear infinite;
          will-change: transform;
        }
        .marquee-group:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }

        @keyframes floatFood3D {
          0%,
          100% {
            transform: translateY(0px) rotate(-6deg) scale(1);
          }
          50% {
            transform: translateY(-18px) rotate(-3deg) scale(1.03);
          }
        }
        @keyframes floatFoodAlt3D {
          0%,
          100% {
            transform: translateY(-14px) rotate(4deg) scale(1.02);
          }
          50% {
            transform: translateY(4px) rotate(1deg) scale(0.99);
          }
        }
        .food-float-1 {
          animation: floatFood3D 5.5s ease-in-out infinite;
        }
        .food-float-2 {
          animation: floatFoodAlt3D 6.5s ease-in-out infinite;
        }

        .shadow-3d-detached {
          filter: drop-shadow(0 16px 12px rgba(0, 0, 0, 0.44))
            drop-shadow(0 38px 32px rgba(0, 0, 0, 0.34))
            drop-shadow(0 80px 65px rgba(0, 0, 0, 0.22));
          transition:
            filter 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .shadow-3d-detached:hover {
          filter: drop-shadow(0 25px 18px rgba(0, 0, 0, 0.55))
            drop-shadow(0 55px 45px rgba(0, 0, 0, 0.45))
            drop-shadow(0 100px 85px rgba(0, 0, 0, 0.32));
          transform: translateY(-24px) scale(1.12) rotate(-2deg);
        }

        @keyframes pulseLive {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(0.85);
          }
        }
        .animate-pulse-live {
          animation: pulseLive 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes floatPhone {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: floatPhone 4s ease-in-out infinite;
        }

        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-float-reverse {
          animation: floatReverse 4.5s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.12);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
        .animate-pulse-glow-delayed {
          animation: pulseGlow 7s ease-in-out 3s infinite;
        }

        @keyframes textGradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: textGradientMove 4s ease-in-out infinite;
        }

        @keyframes shimmerSweep {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          100% {
            transform: translateX(250%) skewX(-20deg);
          }
        }
        .animate-btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        .animate-btn-shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.35),
            transparent
          );
          transform: translateX(-150%) skewX(-20deg);
          animation: shimmerSweep 3.5s ease-in-out infinite;
        }

        @keyframes progressFill {
          0% {
            width: 10%;
          }
          100% {
            width: 75%;
          }
        }
        .animate-progress-fill {
          animation: progressFill 2.5s ease-out forwards;
          width: 75%;
        }

        /* --- FOOD ITEM UCHLE (BOUNCE & HOP) KEYFRAMES --- */
        @keyframes foodUchle1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          35% {
            transform: translateY(-26px) rotate(2deg) scale(1.05);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          55% {
            transform: translateY(-30px) rotate(-1.5deg) scale(1.03);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          80% {
            transform: translateY(-5px) rotate(1deg) scale(0.99);
          }
        }

        @keyframes foodUchle2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          30% {
            transform: translateY(-28px) rotate(-2.5deg) scale(1.06);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          50% {
            transform: translateY(-32px) rotate(1.5deg) scale(1.02);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          75% {
            transform: translateY(-7px) rotate(-1deg) scale(0.98);
          }
        }

        @keyframes foodUchle3 {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          38% {
            transform: translateY(-24px) scale(1.07);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          70% {
            transform: translateY(-8px) scale(1.01);
          }
        }

        @keyframes foodPlateBounce {
          0%,
          100% {
            transform: scale(1.02) translateY(0);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          50% {
            transform: scale(1.06) translateY(-12px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        .animate-food-uchle-1 {
          animation: foodUchle1 3.4s ease-in-out infinite;
        }

        .animate-food-uchle-2 {
          animation: foodUchle2 4s 0.7s ease-in-out infinite;
        }

        .animate-food-uchle-3 {
          animation: foodUchle3 3.6s 1.3s ease-in-out infinite;
        }

        .animate-food-plate-bounce {
          animation: foodPlateBounce 4.5s ease-in-out infinite;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f5f2eb;
        }
        ::-webkit-scrollbar-thumb {
          background: #0049ad;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #003a8c;
        }
      `}</style>

      <div className="selection:bg-brand-primary selection:text-white flex min-h-screen flex-col justify-between overflow-x-clip bg-brand-surface text-brand-text">
        <div className="cursor-dot hidden md:block"></div>
        <div className="cursor-outline hidden md:block"></div>

        {/* --- HEADER NAVBAR --- */}
        <Navbar isHomePage />

        <main id="top" className="flex-grow">
          {/* --- SECTION 1: GSAP 3D SHOWCASE HERO --- */}
          <Gsap3DShowcase />

          {/* --- SECTION 2: BRAND STORY & HERITAGE HERO OVERVIEW --- */}
          <HeroBrandHeritageSection />

          {/* --- SECTION 2B: OUR VISION - BRINGING LOCAL FOOD TO EVERY TABLE --- */}
          <OurVisionSection />

          {/* --- SECTION 1C: CELEBRATING INDIA'S AUTHENTIC FOOD CULTURE --- */}
          <FoodCultureSection />

          {/* --- SECTION: OUR BRAND BELIEF --- */}
          <BrandBeliefSection />

          {/* --- SECTION: WHAT MAKES MINTA RESTRO DIFFERENT (REPLACED WHY RESTRO) --- */}
          <WhatMakesDifferentSection />

          {/* --- SECTION: A COMMUNITY OF FLAVOURS --- */}
          <CommunityFlavoursSection />

          {/* --- SECTION: #CITIES (LOCAL DISCOVERY) --- */}
          <section
            id="cities"
            className="relative bg-white py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
          >
            <div className="mx-auto max-w-5xl 2xl:max-w-[1200px] px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-10 text-center">
                {/* Golden Hairlines & Eyebrow */}
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
                    LOCAL DISCOVERY
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
                  Discover food in your city.
                </h2>
                <p className="mx-auto mt-2.5 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#556987]">
                  The final dynamic site can generate city-specific pages, food
                  guides, restaurants and local SEO content.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 md:grid-cols-3">
                {cities.map((city, idx) => {
                  const isActive = activeCity === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveCity(idx)}
                      onMouseEnter={() => setActiveCity(idx)}
                      className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-200 flex items-center gap-3.5 sm:gap-4 ${
                        isActive
                          ? "border-2 border-[#1e6beb] bg-[#f4f8fe] shadow-sm"
                          : "border border-gray-200/90 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-blue-300 hover:shadow-md"
                      }`}
                    >
                      {/* Left Squircle Icon Badge */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#e8f2fd] text-[#0049ad]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 sm:h-6 sm:w-6 text-[#0049ad]"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>

                      {/* Vertical Divider Line */}
                      <div
                        className={`h-9 sm:h-10 w-[1px] shrink-0 ${
                          isActive ? "bg-[#d2e2f6]" : "bg-gray-200/80"
                        }`}
                      />

                      {/* Right Text Content */}
                      <div className="text-left min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-[#092248] leading-tight">
                          {city.name}
                        </h3>
                        <p className="text-xs sm:text-[12.5px] text-[#556987] leading-snug mt-1 line-clamp-2">
                          {city.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* --- SECTION: #TRACKING (LIVE TRACKING) --- */}
          <LiveTrackingSection />

          {/* --- SECTION: #APP (DOWNLOAD CTA BANNER) --- */}
          <section
            id="app"
            className="bg-white py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
          >
            <div className="mx-auto max-w-7xl 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
              <div
                className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] px-5 py-9 sm:px-12 sm:py-12 md:py-14 text-center shadow-[0_20px_50px_-15px_rgba(0,45,110,0.35)]"
                style={{
                  background:
                    "linear-gradient(135deg, #024bab 0%, #013681 22%, #002d6e 50%, #013681 78%, #024bab 100%)",
                }}
              >
                {/* SVG Corner Wave Glows & Organic Curves */}
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 1000 320"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <radialGradient id="cardWaveBL" cx="5%" cy="85%" r="48%">
                      <stop
                        offset="0%"
                        stopColor="#0a62c9"
                        stopOpacity="0.85"
                      />
                      <stop
                        offset="55%"
                        stopColor="#044da5"
                        stopOpacity="0.35"
                      />
                      <stop offset="100%" stopColor="#002d6e" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="cardWaveTR" cx="95%" cy="15%" r="48%">
                      <stop
                        offset="0%"
                        stopColor="#0a62c9"
                        stopOpacity="0.85"
                      />
                      <stop
                        offset="55%"
                        stopColor="#044da5"
                        stopOpacity="0.35"
                      />
                      <stop offset="100%" stopColor="#002d6e" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient
                      id="cardSwooshBL"
                      x1="0%"
                      y1="100%"
                      x2="80%"
                      y2="30%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0e6ad6"
                        stopOpacity="0.45"
                      />
                      <stop offset="100%" stopColor="#054ea4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="cardSwooshTR"
                      x1="100%"
                      y1="0%"
                      x2="20%"
                      y2="70%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0e6ad6"
                        stopOpacity="0.45"
                      />
                      <stop offset="100%" stopColor="#054ea4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect width="1000" height="320" fill="url(#cardWaveBL)" />
                  <rect width="1000" height="320" fill="url(#cardWaveTR)" />
                  <path
                    d="M -50 320 Q 80 180 220 250 T 340 340 L -50 340 Z"
                    fill="url(#cardSwooshBL)"
                  />
                  <path
                    d="M 660 -40 Q 800 120 950 50 L 1050 -40 Z"
                    fill="url(#cardSwooshTR)"
                  />
                </svg>

                <div className="relative z-10 mx-auto max-w-3xl">
                  {/* Eyebrow: YOUR NEXT MEAL IS CLOSER */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
                    <span
                      aria-hidden="true"
                      className="h-[1.5px] w-12 sm:w-16 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, #e5a01d 100%)",
                      }}
                    />
                    <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#e5a01d] uppercase">
                      YOUR NEXT MEAL IS CLOSER
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-[1.5px] w-12 sm:w-16 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #e5a01d 0%, transparent 100%)",
                      }}
                    />
                  </div>

                  {/* Heading */}
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-tight">
                    <span className="text-white">Discover here. </span>
                    <span className="text-[#3b82f6]">Order on Restro.</span>
                  </h2>

                  {/* Subtitle */}
                  <p className="mx-auto mt-2.5 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-white/80">
                    The website stays informational and branded. Customers
                    continue to the Restro app for availability, order and
                    payment.
                  </p>

                  {/* Buttons Row (3 Buttons Side-by-Side) */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    {/* Button 1: Download Restro App */}
                    <a
                      href="#app"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#00388d] shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md hover:scale-[1.02] active:scale-95 text-center"
                    >
                      Download Restro App
                    </a>

                    {/* Button 2: Google Play */}
                    <a
                      href="#app"
                      className="inline-flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-gray-900 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md hover:scale-[1.02] active:scale-95"
                      aria-label="Get Restro on Google Play"
                    >
                      <svg
                        className="h-6 w-6 sm:h-7 sm:w-7 shrink-0"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#00C3FF"
                          d="M25.7 15.3c-2.4 2.5-3.8 6.7-3.8 12.3v456.8c0 5.6 1.4 9.8 3.8 12.3l1.4 1.3 255.8-255.8v-6.1L27.1 14l-1.4 1.3z"
                        />
                        <path
                          fill="#00E377"
                          d="M368.5 327.9l-85.6-85.6-255.8 255.8c7.4 7.9 19.8 8.8 33.9.8l307.5-171z"
                        />
                        <path
                          fill="#FF3239"
                          d="M368.5 184.1L61 13.1C46.9 5.1 34.5 6 27.1 13.9l255.8 255.8 85.6-85.6z"
                        />
                        <path
                          fill="#FFCE00"
                          d="M368.5 327.9l75.3-41.9c21.8-12.2 21.8-32.1 0-44.2L368.5 184.1 282.9 256l85.6 71.9z"
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-[9px] sm:text-[9.5px] uppercase tracking-wider text-gray-500 font-semibold leading-none">
                          GET IT ON
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight mt-0.5">
                          Google Play
                        </div>
                      </div>
                    </a>

                    {/* Button 3: App Store */}
                    <a
                      href="#app"
                      className="inline-flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-gray-900 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md hover:scale-[1.02] active:scale-95"
                      aria-label="Download Restro on the App Store"
                    >
                      <svg
                        className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 text-black fill-current"
                        viewBox="0 0 170 170"
                      >
                        <path d="M121.2 129.4c-.9 2.1-1.9 4.1-3 6.1-5.1 8.8-12 17.6-21.4 17.7-9.3.2-12.3-5.6-23-5.6-10.7 0-14.1 5.4-22.9 5.8-9.1.4-16.1-9.3-21.8-17.9-11.6-17.6-20.5-49.8-8.5-71.3 5.9-10.7 16.5-17.5 28-17.7 8.9-.2 17.3 6.1 22.8 6.1 5.4 0 15.6-7.5 26.3-6.4 4.5.2 17.1 1.8 25.2 13.9-.7.4-15 8.9-14.8 26.6.2 21.1 18.2 28.2 18.5 28.3-.2.5-2.9 9.9-5.4 14.4zM90.3 46.1c4.4-5.4 7.4-12.9 6.6-20.4-6.4.3-14.1 4.3-18.7 9.7-4.1 4.8-7.7 12.5-6.7 19.8 7.1.6 14.4-3.7 18.8-9.1z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-[9px] sm:text-[9.5px] uppercase tracking-wider text-gray-500 font-semibold leading-none">
                          DOWNLOAD ON THE
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight mt-0.5">
                          App Store
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Trademark Notice */}
                  <p className="mt-5 sm:mt-6 text-[10px] sm:text-[11px] text-white/55">
                    App Store, Google Play, and their logos are trademarks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: OUR VENDOR COMMUNITY --- */}
          <VendorCommunitySection />

          {/* --- SECTION: OUR COMMITMENT TO CUSTOMERS (OUR PROMISE) --- */}
          <OurCommitmentSection />

          {/* --- SECTION: THE ROAD AHEAD --- */}
          <RoadAheadSection />

          {/* --- SECTION: MINTA RESTRO - THE TASTE OF TRADITION --- */}
          <TasteOfTraditionSection />
        </main>

        {/* --- FOOTER --- */}
        <Footer />
      </div>
    </>
  );
};

export default RestroWebsite;
