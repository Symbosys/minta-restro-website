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
        "rava.png",
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
                    From the moment you tap order to the knock on your door —
                    follow every step in real time.
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

                {/* Right Column: Dual Phone Mockups (Side-by-side on all screens) */}
                <div className="relative flex flex-row items-start sm:items-center justify-center lg:justify-end gap-2.5 xs:gap-3.5 sm:gap-5 lg:col-span-7 w-full max-w-lg sm:max-w-none mx-auto">
                  {/* Organic Sky Blue Aura in Background */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[300px] sm:h-[380px] bg-[#e3efff]/70 rounded-[120px] rotate-[-12deg] blur-2xl -z-10 pointer-events-none"
                  />

                  {/* Phone 1: Order Status Steps Screen */}
                  <div className="relative w-1/2 sm:w-auto mx-auto max-w-[170px] xs:max-w-[195px] sm:max-w-[235px] xl:max-w-[245px]">
                    <div className="relative rounded-[1.6rem] xs:rounded-[1.9rem] sm:rounded-[2.2rem] border-[3.5px] xs:border-[4px] sm:border-[5px] border-[#081426] bg-[#081426] p-1 sm:p-1.5 shadow-[0_20px_45px_rgba(8,20,38,0.2)]">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute left-1/2 top-1 sm:top-1.5 z-20 h-2.5 sm:h-3 w-10 sm:w-14 -translate-x-1/2 rounded-full bg-[#081426]" />

                      <div className="overflow-hidden rounded-[1.3rem] xs:rounded-[1.6rem] sm:rounded-[1.8rem] bg-white">
                        <div className="flex min-h-[330px] xs:min-h-[360px] sm:min-h-[395px] flex-col p-2 xs:p-2.5 sm:p-3 pt-6 xs:pt-7 sm:pt-9 bg-[#f8fafc]">
                          {/* Top Header */}
                          <div className="mb-1 flex items-center justify-between">
                            <p className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-bold text-[#092248]">
                              Order #TG-4821
                            </p>
                            <span className="flex items-center gap-1 rounded-full bg-[#e8f8f0] px-1 sm:px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold text-[#10b981]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                              Live
                            </span>
                          </div>
                          <p className="mb-1.5 sm:mb-2 text-[8px] xs:text-[9px] sm:text-[10px] text-[#64748b]">
                            Hyderabad Biryani · 2 items
                          </p>

                          {/* Estimated Arrival Card */}
                          <div className="mb-2 sm:mb-2.5 rounded-xl border border-gray-100 bg-white p-2 sm:p-2.5 shadow-xs">
                            <p className="text-[7.5px] xs:text-[8.5px] sm:text-[9px] font-medium text-gray-400">
                              Estimated arrival
                            </p>
                            <p className="text-base xs:text-lg sm:text-xl font-black text-[#0049ad] tracking-tight">
                              12:55 PM
                            </p>
                            <div className="mt-1 sm:mt-1.5 h-1 sm:h-1.5 overflow-hidden rounded-full bg-gray-100">
                              <div className="h-full w-[65%] rounded-full bg-[#0049ad]" />
                            </div>
                          </div>

                          {/* 4 Timeline Steps */}
                          <div className="flex flex-1 flex-col gap-0 px-0.5">
                            {/* Step 1 */}
                            <div className="flex gap-1.5 xs:gap-2 sm:gap-2.5">
                              <div className="flex flex-col items-center">
                                <div className="flex h-4.5 w-4.5 xs:h-5 xs:w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[8.5px] xs:text-[9px] sm:text-[10px] font-bold bg-[#10b981] text-white shadow-xs">
                                  <svg
                                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                                <div className="my-0.5 w-0.5 flex-1 min-h-[12px] sm:min-h-[16px] bg-[#10b981]" />
                              </div>
                              <div className="pb-1.5 sm:pb-2.5">
                                <p className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-bold text-[#092248]">
                                  Order Placed
                                </p>
                                <p className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-gray-400">
                                  12:04 PM
                                </p>
                              </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-1.5 xs:gap-2 sm:gap-2.5">
                              <div className="flex flex-col items-center">
                                <div className="flex h-4.5 w-4.5 xs:h-5 xs:w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[8.5px] xs:text-[9px] sm:text-[10px] font-bold bg-[#0ea5e9] text-white shadow-xs">
                                  <svg
                                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                                <div className="my-0.5 w-0.5 flex-1 min-h-[12px] sm:min-h-[16px] bg-[#0ea5e9]" />
                              </div>
                              <div className="pb-1.5 sm:pb-2.5">
                                <p className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-bold text-[#092248]">
                                  Preparing
                                </p>
                                <p className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-gray-400">
                                  12:18 PM
                                </p>
                              </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-1.5 xs:gap-2 sm:gap-2.5">
                              <div className="flex flex-col items-center">
                                <div className="flex h-4.5 w-4.5 xs:h-5 xs:w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[8.5px] xs:text-[9px] sm:text-[10px] font-bold bg-[#0049ad] text-white shadow-xs">
                                  3
                                </div>
                                <div className="my-0.5 w-0.5 flex-1 min-h-[12px] sm:min-h-[16px] bg-gray-200" />
                              </div>
                              <div className="pb-1.5 sm:pb-2.5">
                                <p className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-bold text-[#092248]">
                                  Out for Delivery
                                  <span className="hidden xs:inline ml-1 rounded-full bg-emerald-50 px-1 py-0.2 text-[7.5px] sm:text-[8px] font-medium text-[#10b981]">
                                    In progress
                                  </span>
                                </p>
                                <p className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-gray-400">
                                  12:42 PM
                                </p>
                              </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-1.5 xs:gap-2 sm:gap-2.5">
                              <div className="flex flex-col items-center">
                                <div className="flex h-4.5 w-4.5 xs:h-5 xs:w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[8.5px] xs:text-[9px] sm:text-[10px] font-bold border border-gray-300 bg-white text-gray-400">
                                  4
                                </div>
                              </div>
                              <div className="pb-1">
                                <p className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-semibold text-gray-400">
                                  Delivered
                                </p>
                                <p className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-gray-300">
                                  —
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2: Delivery Partner & Live Map Tracking Screen */}
                  <div className="relative w-1/2 sm:w-auto mx-auto max-w-[170px] xs:max-w-[195px] sm:max-w-[235px] xl:max-w-[245px] mt-2 sm:mt-5 lg:mt-6">
                    <div className="relative rounded-[1.6rem] xs:rounded-[1.9rem] sm:rounded-[2.2rem] border-[3.5px] xs:border-[4px] sm:border-[5px] border-[#081426] bg-[#081426] p-1 sm:p-1.5 shadow-[0_20px_45px_rgba(8,20,38,0.2)]">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute left-1/2 top-1 sm:top-1.5 z-20 h-2.5 sm:h-3 w-10 sm:w-14 -translate-x-1/2 rounded-full bg-[#081426]" />

                      <div className="overflow-hidden rounded-[1.3rem] xs:rounded-[1.6rem] sm:rounded-[1.8rem] bg-white flex flex-col min-h-[330px] xs:min-h-[360px] sm:min-h-[415px]">
                        {/* Top Bar inside Phone */}
                        <div className="relative z-10 flex items-center justify-between bg-white px-1.5 xs:px-2 sm:px-2.5 pb-1 sm:pb-1.5 pt-6 xs:pt-7 sm:pt-8.5 border-b border-gray-100">
                          <div className="flex items-center gap-1">
                            <div className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 rounded-full bg-gray-100 flex items-center justify-center text-[#092248]">
                              <svg
                                className="h-2 w-2 sm:h-2.5 sm:w-2.5"
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
                              <p className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#092248] leading-none">
                                Live Map
                              </p>
                              <p className="text-[7px] xs:text-[7.5px] sm:text-[8.5px] text-[#64748b]">
                                Order #TG-4821
                              </p>
                            </div>
                          </div>

                          <span className="flex items-center gap-1 rounded-full bg-[#e8f8f0] px-1 sm:px-1.5 py-0.5 text-[7px] xs:text-[7.5px] sm:text-[8.5px] font-bold text-[#10b981]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                            GPS Live
                          </span>
                        </div>

                        {/* Map Area */}
                        <div className="relative h-[135px] xs:h-[150px] sm:h-[170px] w-full bg-[#f1f5f9] overflow-hidden select-none">
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
                              fill="#e2e8f0"
                              opacity="0.6"
                            />
                            <rect
                              x="205"
                              y="15"
                              width="80"
                              height="55"
                              rx="6"
                              fill="#e8f8f0"
                              opacity="0.8"
                            />
                            <rect
                              x="15"
                              y="135"
                              width="85"
                              height="55"
                              rx="6"
                              fill="#fef3c7"
                              opacity="0.6"
                            />
                            <rect
                              x="205"
                              y="125"
                              width="80"
                              height="65"
                              rx="6"
                              fill="#e8f8f0"
                              opacity="0.8"
                            />

                            {/* Roads */}
                            <path
                              d="M 0 85 L 300 85"
                              stroke="#ffffff"
                              strokeWidth="16"
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
                              strokeWidth="14"
                              fill="none"
                            />
                            <path
                              d="M 195 0 L 195 200"
                              stroke="#ffffff"
                              strokeWidth="14"
                              fill="none"
                            />
                            <path
                              d="M 0 150 L 300 150"
                              stroke="#ffffff"
                              strokeWidth="14"
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
                          <div className="absolute left-[24%] top-[38px] sm:top-[45px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                            <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#0049ad] text-white shadow-md ring-1 sm:ring-1.5 ring-white">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                              >
                                <path d="M3 21h18M5 21V7l7-4 7 4v14" />
                              </svg>
                            </div>
                            <span className="mt-0.5 rounded-full bg-[#0049ad] px-1 sm:px-1.5 py-0.2 text-[6px] sm:text-[7px] font-bold text-white shadow-xs whitespace-nowrap">
                              Rahul&apos;s
                            </span>
                          </div>

                          {/* Destination Marker (Customer Home) */}
                          <div className="absolute left-[68%] top-[88px] sm:top-[105px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                            <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#e11d48] text-white shadow-md ring-1 sm:ring-1.5 ring-white">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                              >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              </svg>
                            </div>
                            <span className="mt-0.5 rounded-full bg-white px-1 sm:px-1.5 py-0.2 text-[6px] sm:text-[7px] font-bold text-[#e11d48] shadow-xs border border-gray-100 whitespace-nowrap">
                              Your Home
                            </span>
                          </div>

                          {/* Rider Icon along route */}
                          <div className="absolute left-[46%] top-[34px] sm:top-[40px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                            <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping" />
                            <div className="relative flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#0049ad] text-white shadow-md ring-1 ring-white">
                              <span className="text-[7.5px] sm:text-[9px]">
                                🛵
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Sheet Cards */}
                        <div className="p-1.5 sm:p-2 bg-white space-y-1 sm:space-y-1.5">
                          {/* Estimated Delivery Bar */}
                          <div className="rounded-xl border border-gray-100 bg-white p-1 sm:p-1.5 px-1.5 sm:px-2 shadow-xs flex items-center justify-between">
                            <div>
                              <p className="text-[7px] sm:text-[8px] font-medium text-gray-400">
                                Estimated Delivery
                              </p>
                              <p className="text-[9.5px] sm:text-[11px] font-black text-[#0049ad] leading-tight">
                                12:55 PM{" "}
                                <span className="text-[7.5px] sm:text-[9px] font-normal text-[#10b981]">
                                  (27m)
                                </span>
                              </p>
                            </div>
                            <span className="rounded-md bg-gray-50 px-1 sm:px-1.5 py-0.5 text-[6.5px] sm:text-[8px] font-bold text-[#092248] border border-gray-200/60">
                              2.4 km
                            </span>
                          </div>

                          {/* Partner Info Row */}
                          <div className="p-1 sm:p-1.5 px-1.5 sm:px-2 rounded-xl border border-gray-100 bg-white shadow-xs flex items-center justify-between gap-1">
                            <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                              <div className="relative shrink-0">
                                <div className="h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#0049ad] flex items-center justify-center text-white text-[8px] sm:text-[10px]">
                                  🛵
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center rounded-full bg-[#10b981] text-white text-[6px] sm:text-[7px] font-bold ring-1 ring-white">
                                  ✓
                                </span>
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-0.5 sm:gap-1">
                                  <p className="text-[8.5px] sm:text-[10px] font-bold text-[#092248] truncate">
                                    Rahul K.
                                  </p>
                                  <span className="rounded bg-amber-50 px-0.5 sm:px-1 py-0.2 text-[6.5px] sm:text-[7.5px] font-bold text-amber-700 shrink-0">
                                    ★ 4.9
                                  </span>
                                </div>
                                <p className="text-[6.5px] sm:text-[8px] text-gray-400 truncate">
                                  Activa · DL-04
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
                              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-xs cursor-pointer hover:bg-emerald-600 transition-colors">
                                <svg
                                  className="h-2 w-2 sm:h-2.5 sm:w-2.5"
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
                              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#0049ad] flex items-center justify-center text-white shadow-xs cursor-pointer hover:bg-blue-800 transition-colors">
                                <svg
                                  className="h-2 w-2 sm:h-2.5 sm:w-2.5"
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
                          <div className="rounded-lg bg-[#e8f8f0] px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center gap-1 border border-[#d1fae5]">
                            <span className="text-[8px] sm:text-[9px]">📋</span>
                            <p className="text-[6.5px] sm:text-[7.5px] font-medium text-[#065f46] leading-tight">
                              Partner reached near your area.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
