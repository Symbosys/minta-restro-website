"use client";

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { showcaseProducts } from "./showcaseData";
import Gsap3DShowcase from "./components/Gsap3DShowcase";

const RestroWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
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

  const heroSlides = [
    {
      title: "Indian biryani food story",
      image:
        "https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tag: "RESTRO • FOOD STORIES",
      caption: "Real food. Real cravings.",
      dish: "Dum Biryani",
      badgeEmoji: "🍛",
      price: "₹249",
    },
    {
      title: "Traditional Meat Rice",
      image:
        "https://images.pexels.com/photos/32825916/pexels-photo-32825916.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tag: "RESTRO • REGIONAL SPECIALS",
      caption: "Comfort that feels familiar.",
      dish: "Handi Meat Rice",
      badgeEmoji: "🍖",
      price: "₹389",
    },
    {
      title: "Morning South Indian",
      image:
        "https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tag: "RESTRO • SOUTH CLASSICS",
      caption: "Crisp dosas & warm mornings.",
      dish: "Ghee Masala Dosa",
      badgeEmoji: "🥞",
      price: "₹149",
    },
  ];

  useEffect(() => {
    // Preload showcase images immediately into browser cache
    if (typeof window !== "undefined") {
      const showcaseImgNames = [
        "biryani.png",
        "dosa.png",
        "idli.png",
        "indianthali.png",
        "muttonbiryani.png",
        "thali.png",
      ];
      showcaseImgNames.forEach((name) => {
        const img = new window.Image();
        img.decoding = "sync";
        img.src = `/assets/images/${name}`;
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
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
                  script: ['"Caveat"', 'cursive'],
                }
              }
            }
          }
        `}
      </Script>

      <style jsx global>{`
        body {
          background-color: #fbf9f5;
          color: #111827;
          overflow-x: hidden;
          cursor: none;
          font-family: "Plus Jakarta Sans", sans-serif;
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

      <div className="selection:bg-brand-primary selection:text-white flex min-h-full flex-col bg-brand-surface text-brand-text">
        <div className="cursor-dot hidden md:block"></div>
        <div className="cursor-outline hidden md:block"></div>

        {/* --- HEADER NAVBAR --- */}
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-all duration-500 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-full border transition-all duration-500 border-brand-border/40 bg-white/70 p-3 shadow-md backdrop-blur-md">
            <nav className="flex items-center justify-between px-3 sm:px-5">
              <a
                className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-105"
                href="#top"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-brand-primary-light to-brand-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75"></div>
                  <img
                    alt="Restro logo"
                    className="relative h-9 w-auto object-contain transition-all rounded-lg"
                    src="/logo/brand-logo.jpg"
                  />
                </div>
              </a>

              <div className="hidden items-center gap-1 rounded-full border border-brand-border/40 bg-brand-surface-warm/80 p-1.5 md:flex">
                <a
                  href="#food"
                  className="relative rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 text-brand-text-muted hover:bg-brand-surface-elevated hover:text-brand-primary"
                >
                  Food
                </a>
                <a
                  href="#story"
                  className="relative rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 text-brand-text-muted hover:bg-brand-surface-elevated hover:text-brand-primary"
                >
                  Story
                </a>
                <a
                  href="#experience"
                  className="relative rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 text-brand-text-muted hover:bg-brand-surface-elevated hover:text-brand-primary"
                >
                  Why Restro
                </a>
                <a
                  href="#cities"
                  className="relative rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 text-brand-text-muted hover:bg-brand-surface-elevated hover:text-brand-primary"
                >
                  Cities
                </a>
                <a
                  href="#faq"
                  className="relative rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 text-brand-text-muted hover:bg-brand-surface-elevated hover:text-brand-primary"
                >
                  FAQ
                </a>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="#app"
                  className="relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-flame px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/50"
                >
                  <span>Get App</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text shadow-sm transition-transform duration-300 active:scale-95 md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* --- MOBILE MENU OVERLAY --- */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="absolute top-20 right-4 left-4 rounded-3xl bg-white p-6 shadow-2xl border border-brand-border/60"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#food"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-brand-text hover:text-brand-primary"
                >
                  Food
                </a>
                <a
                  href="#story"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-brand-text hover:text-brand-primary"
                >
                  Story
                </a>
                <a
                  href="#experience"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-brand-text hover:text-brand-primary"
                >
                  Why Restro
                </a>
                <a
                  href="#cities"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-brand-text hover:text-brand-primary"
                >
                  Cities
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-bold text-brand-text hover:text-brand-primary"
                >
                  FAQ
                </a>
                <a
                  href="#app"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 text-center rounded-full gradient-flame py-3 text-xs font-black uppercase tracking-wider text-white"
                >
                  Get App
                </a>
              </div>
            </div>
          </div>
        )}

        <main id="top">
          {/* --- SECTION 1: GSAP 3D SHOWCASE HERO --- */}
          <Gsap3DShowcase />

          {/* --- SECTION 2: HERO OVERVIEW (ORIGINAL HERO SECTION) --- */}
          <section
            id="hero-overview"
            className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28"
          >
            <div className="hero-glow pointer-events-none absolute inset-0"></div>
            {/* Ambient Animated Glow Orbs */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-primary/15 blur-3xl animate-pulse-glow"></div>
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-brand-primary-light/15 blur-3xl animate-pulse-glow-delayed"></div>
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl animate-pulse-glow"></div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
              {/* Left Column */}
              <div className="text-center lg:text-left">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-5 shadow-xs transition-all hover:bg-brand-primary/15">
                  <span className="font-script text-xl sm:text-2xl text-brand-primary font-bold">
                    Taste Beyond Ordinary
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-primary bg-white/90 px-2.5 py-0.5 rounded-full shadow-xs">
                    Hot &amp; Fresh
                  </span>
                </div>

                {/* 2-Line Headline */}
                <h1 className="text-[30px] xs:text-[34px] sm:text-5xl lg:text-[52px] xl:text-[60px] font-extrabold leading-[1.12] tracking-tight text-brand-text">
                  <span className="block whitespace-nowrap">
                    Where familiar food
                  </span>
                  <span className="block whitespace-nowrap">
                    feels{" "}
                    <span className="gradient-text-flame">extraordinary.</span>
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-brand-text-muted lg:mx-0">
                  Restro is a modern food discovery destination for Biryani,
                  Meat Rice, Chicken Rice, South Indian favourites and the local
                  dishes people love.
                </p>

                {/* Primary CTA Buttons with Shimmer & Scale Animation */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <a
                    href="#food"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("food")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="animate-btn-shimmer gradient-flame rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/40 active:scale-95 text-center"
                  >
                    Explore Food
                  </a>
                  <a
                    href="#app"
                    className="rounded-full border border-brand-border bg-brand-surface-elevated/90 backdrop-blur-sm px-6 py-3.5 text-sm font-bold text-brand-text shadow-sm transition-all duration-300 hover:border-brand-primary hover:text-brand-primary hover:scale-105 hover:shadow-md flex items-center gap-2 group"
                  >
                    <span>Order on Restro App</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Store Badges */}
                <div className="mt-8 flex justify-center lg:justify-start">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="#app"
                      className="inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:scale-105 bg-brand-text text-white hover:bg-brand-text/90 shadow-sm"
                      aria-label="Get Restro on Google Play"
                    >
                      <svg
                        className="h-7 w-7 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 01-.601-.92V2.734a1.004 1.004 0 01.601-.92zM14.5 12.707l2.302 2.302-10.937 6.333a1.004 1.004 0 01-.295-.295L14.5 12.707zM17.402 9.806l1.463 1.463a1 1 0 010 1.414l-1.463 1.463-2.601-2.601 2.601-2.339zM14.5 11.293L5.57 4.984a1.004 1.004 0 01.295-.295L16.802 10.954 14.5 11.293z"></path>
                      </svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase tracking-wider opacity-70">
                          Get it on
                        </div>
                        <div className="text-sm font-semibold leading-tight">
                          Google Play
                        </div>
                      </div>
                    </a>

                    <a
                      href="#app"
                      className="inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:scale-105 bg-brand-text text-white hover:bg-brand-text/90 shadow-sm"
                      aria-label="Download Restro on the App Store"
                    >
                      <svg
                        className="h-7 w-7 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                      </svg>
                      <div className="text-left">
                        <div className="text-[10px] uppercase tracking-wider opacity-70">
                          Download on the
                        </div>
                        <div className="text-sm font-semibold leading-tight">
                          App Store
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Food Showcase Card */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Main Food Card Showcase */}
                <div className="relative h-105 w-full max-w-lg overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-2xl shadow-brand-primary/10 sm:h-125">
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        currentHeroSlide === idx
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          alt={slide.title}
                          className={`object-cover absolute inset-0 h-full w-full transition-transform duration-1000 ${
                            currentHeroSlide === idx
                              ? "scale-105 animate-food-plate-bounce"
                              : "scale-100"
                          }`}
                          src={slide.image}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20"></div>
                    </div>
                  ))}

                  {/* Top-Left Category Tag */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <div className="rounded-full border border-white/40 bg-black/45 px-3.5 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-md uppercase transition-all duration-300">
                      {heroSlides[currentHeroSlide].tag}
                    </div>
                  </div>

                  {/* Bottom Captions & Slide Switcher Dots */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-script text-lg sm:text-xl text-white drop-shadow-md transition-all duration-500 font-semibold tracking-wide">
                        {heroSlides[currentHeroSlide].caption}
                      </p>
                    </div>

                    {/* Interactive Slide Switcher Dots */}
                    <div className="flex items-center gap-1.5 pb-1">
                      {heroSlides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrentHeroSlide(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentHeroSlide === i
                              ? "w-6 bg-white"
                              : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: #FOOD (DISCOVERY & MOOD TABS) --- */}
          <section id="food" className="section-warm py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-14 flex justify-center">
                <div className="max-w-2xl text-center mx-auto">
                  <p
                    id="food-heading"
                    className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl"
                  >
                    What are you craving?
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                    Start with your mood.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-brand-text-muted">
                    Quick discovery for the kind of food you feel like eating
                    today.
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-12 flex flex-wrap justify-center gap-3">
                {foodTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition-all ${
                      activeTab === idx
                        ? "gradient-flame text-white shadow-md shadow-brand-primary/25 scale-105"
                        : "border border-brand-border bg-brand-surface-elevated text-brand-text hover:border-brand-primary hover:text-brand-primary"
                    }`}
                  >
                    <span>{tab.emoji}</span>
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>

              {/* Interactive Tab Panel */}
              <div
                className="mb-16 grid items-center gap-10 rounded-3xl border border-brand-border bg-brand-surface-elevated p-6 shadow-xl shadow-brand-primary/5 lg:grid-cols-2 lg:gap-12 lg:p-10 border-t-4 border-brand-primary"
                role="tabpanel"
                aria-labelledby="food-heading"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-4xl">{currentTab.emoji}</span>
                    <h3 className="text-2xl font-bold text-brand-text sm:text-3xl">
                      {currentTab.name}
                    </h3>
                  </div>
                  <p className="mb-8 text-lg leading-relaxed text-brand-text-muted">
                    {currentTab.desc}
                  </p>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-muted">
                    What you can order
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {currentTab.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border border-brand-border bg-brand-surface-elevated px-3.5 py-1.5 text-sm font-medium text-brand-text shadow-sm transition-colors hover:border-brand-primary/40 hover:bg-brand-surface-warm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative mx-auto w-[280px] sm:w-[300px]">
                    <div className="relative rounded-[2.5rem] border-[6px] border-brand-text bg-brand-text p-2 shadow-2xl shadow-brand-primary/20">
                      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-brand-text"></div>
                      <div className="overflow-hidden rounded-[2rem] bg-brand-surface-warm">
                        <div className="flex min-h-[420px] flex-col bg-brand-surface-warm">
                          <div className="gradient-flame px-4 pb-4 pt-10">
                            <p className="text-xs font-medium text-white/80">
                              {currentTab.name}
                            </p>
                            <p className="text-lg font-bold text-white">
                              Popular picks
                            </p>
                          </div>
                          <div className="flex flex-1 flex-col gap-0 divide-y divide-brand-border p-2">
                            {currentTab.items.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between px-3 py-3.5"
                              >
                                <div>
                                  <p className="text-sm font-semibold text-brand-text">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-brand-text-muted">
                                    Tap to add
                                  </p>
                                </div>
                                <span className="rounded-lg bg-brand-primary/10 px-2.5 py-1 text-sm font-bold text-brand-primary">
                                  {item.price}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-brand-border p-4">
                            <div className="gradient-flame rounded-xl py-3 text-center text-sm font-bold text-white">
                              View cart · 2 items
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-primary/10 blur-2xl"></div>
                  </div>
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                <article
                  id="biryani"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-elevated shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/10"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      alt="All Types of Biryani"
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      src="https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <h3 className="mb-2 text-xl font-bold text-brand-text">
                      All Types of Biryani
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-text-muted min-h-[2.75rem] flex items-center justify-center">
                      Chicken, Mutton, Egg, Fish and more — fragrant rice and
                      rich flavours.
                    </p>
                  </div>
                </article>

                <article
                  id="bhaat"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-elevated shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/10"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      alt="Meat Rice"
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      src="https://images.pexels.com/photos/32825916/pexels-photo-32825916.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <h3 className="mb-2 text-xl font-bold text-brand-text">
                      Meat Rice
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-text-muted min-h-[2.75rem] flex items-center justify-center">
                      Hearty meat and rice combinations inspired by traditional
                      Indian kitchens.
                    </p>
                  </div>
                </article>

                <article
                  id="chicken"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-elevated shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/10"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      alt="Chicken Rice"
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      src="https://images.pexels.com/photos/36870974/pexels-photo-36870974.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <h3 className="mb-2 text-xl font-bold text-brand-text">
                      Chicken Rice
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-text-muted min-h-[2.75rem] flex items-center justify-center">
                      Chicken, curry and rice combinations made for everyday
                      comfort.
                    </p>
                  </div>
                </article>

                <article
                  id="south"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-elevated shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/10"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      alt="South Indian"
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      src="https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <h3 className="mb-2 text-xl font-bold text-brand-text">
                      South Indian
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-text-muted min-h-[2.75rem] flex items-center justify-center">
                      Dosa, Idli, Vada, Uttapam and timeless South Indian
                      favourites.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* --- SECTION: FOR EVERY KIND OF HUNGER --- */}
          <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-14 flex justify-center">
                <div className="max-w-2xl text-center mx-auto">
                  <p className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl">
                    For every kind of hunger
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                    Food for the moment.
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative h-72 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <img
                    alt="Weekend Biryani"
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                    src="https://images.pexels.com/photos/15059053/pexels-photo-15059053.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Weekend Biryani
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Slow down. Eat well.
                    </p>
                  </div>
                </div>

                <div className="group relative h-72 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <img
                    alt="Morning South Indian"
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                    src="https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Morning South Indian
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Start with something warm.
                    </p>
                  </div>
                </div>

                <div className="group relative h-72 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <img
                    alt="Traditional Meal"
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                    src="https://images.pexels.com/photos/35267280/pexels-photo-35267280.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Traditional Meal
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Comfort that feels familiar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: #STORY --- */}
          <section id="story" className="section-warm py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-112 w-full overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-xl lg:h-125">
                  <img
                    alt="The Restro Story - Traditional Indian food"
                    className="object-cover h-full w-full"
                    src="https://images.pexels.com/photos/35267280/pexels-photo-35267280.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  />
                </div>
                <div>
                  <p className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl">
                    The Restro Story
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                    Simple food.{" "}
                    <span className="gradient-text-flame">
                      Beautifully discovered.
                    </span>
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-text-muted lg:text-lg">
                    <p>
                      Restro is built around a simple belief: the best food is
                      often the food you already know and love. We bring
                      familiar Indian flavours into one elegant discovery
                      experience.
                    </p>
                    <p>
                      From a fragrant biryani to a crisp dosa, Restro is
                      designed to make discovering your next meal feel as good
                      as eating it.
                    </p>
                  </div>
                  <div className="mt-8 font-script text-3xl text-brand-primary">
                    — Restro
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: #EXPERIENCE (WHY RESTRO) --- */}
          <section
            id="experience"
            className="bg-brand-text py-20 text-white lg:py-28"
          >
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-16 text-center">
                <p className="mb-2 font-script text-2xl text-brand-primary-light sm:text-3xl">
                  Why Restro
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  More than a menu.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 lg:text-lg">
                  Restro can grow into a complete food discovery brand, not just
                  an ordering interface.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary-light/40 hover:bg-white/10">
                  <div className="font-script text-3xl font-bold text-brand-primary-light">
                    01
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Real Local Flavours
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Discover food people actually crave — from traditional meals
                    to everyday favourites.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary-light/40 hover:bg-white/10">
                  <div className="font-script text-3xl font-bold text-brand-primary-light">
                    02
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Great Value
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Highlight Restro's value proposition, offers and
                    app-exclusive benefits without clutter.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary-light/40 hover:bg-white/10">
                  <div className="font-script text-3xl font-bold text-brand-primary-light">
                    03
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Food Stories
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Tell the story behind dishes, cuisines, cities and local
                    food culture.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary-light/40 hover:bg-white/10">
                  <div className="font-script text-3xl font-bold text-brand-primary-light">
                    04
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Easy Ordering
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Keep this website elegant and informative, then move
                    customers naturally to the app.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: JOURNAL --- */}
          <section className="relative py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-8 flex justify-center">
                <div className="max-w-2xl text-center mx-auto">
                  <p className="mb-1 font-script text-2xl text-brand-primary sm:text-3xl">
                    Restro Journal
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                    Stories behind the food.
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-brand-text-muted">
                    A future content engine for SEO, discovery and food lovers.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-12 lg:h-[280px]">
                <div className="group relative h-64 sm:h-72 lg:h-full overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-lg lg:col-span-7">
                  <img
                    alt="The art of a good biryani."
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://images.pexels.com/photos/15059053/pexels-photo-15059053.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="font-script text-2xl sm:text-3xl text-white">
                      The art of a good biryani.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:col-span-5 lg:h-full">
                  <div className="group relative h-36 sm:h-40 lg:h-auto lg:flex-1 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:shadow-lg">
                    <img
                      alt="Crisp Masala Dosa"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src="https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-5 right-5">
                      <p className="font-script text-lg sm:text-xl text-white">
                        Crisp Masala Dosa
                      </p>
                    </div>
                  </div>

                  <div className="group relative h-36 sm:h-40 lg:h-auto lg:flex-1 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:shadow-lg">
                    <img
                      alt="South Indian Traditions"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src="https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-5 right-5">
                      <p className="font-script text-lg sm:text-xl text-white">
                        South Indian Traditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: #CITIES --- */}
          <section id="cities" className="relative py-16 lg:py-24">
            <div className="mx-auto max-w-5xl px-5 lg:px-8">
              <div className="mb-12 text-center">
                <p className="mb-2 font-script text-2xl text-[#f97316] sm:text-3xl">
                  Local discovery
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                  Discover food in your city.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-brand-text-muted">
                  The final dynamic site can generate city-specific pages, food
                  guides, restaurants and local SEO content.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveCity(idx)}
                    onMouseEnter={() => setActiveCity(idx)}
                    className={`cursor-pointer rounded-2xl bg-white p-7 transition-all duration-300 flex flex-col justify-center min-h-[120px] ${
                      activeCity === idx
                        ? "border border-[#f97316] shadow-sm"
                        : "border border-gray-200/80 shadow-sm hover:border-[#f97316]/50"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-2.5">
                      {city.name}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-brand-text-muted">
                      {city.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION: #TRACKING (LIVE TRACKING) --- */}
          <section id="tracking" className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
                <div className="lg:col-span-5">
                  <div className="max-w-2xl text-left">
                    <p
                      id="tracking-heading"
                      className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl"
                    >
                      Live tracking
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                      Know exactly where your food is
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-brand-text-muted">
                      From the moment you tap order to the knock on your door —
                      follow every step in real time.
                    </p>
                  </div>

                  <ul className="mt-10 space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                        <svg
                          className="h-3.5 w-3.5 text-brand-accent"
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
                      <div>
                        <p className="font-semibold text-brand-text">
                          Real-time status updates
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
                          Watch your order move from kitchen to doorstep, live.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                        <svg
                          className="h-3.5 w-3.5 text-brand-accent"
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
                      <div>
                        <p className="font-semibold text-brand-text">
                          Accurate ETA
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
                          Know exactly when your food arrives — no guessing.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                        <svg
                          className="h-3.5 w-3.5 text-brand-accent"
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
                      <div>
                        <p className="font-semibold text-brand-text">
                          Delivery partner tracking
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
                          See who's bringing your meal and where they are.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                        <svg
                          className="h-3.5 w-3.5 text-brand-accent"
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
                      <div>
                        <p className="font-semibold text-brand-text">
                          Push notifications
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
                          Get notified at every step so you never miss a beat.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Dual Phone Mockups */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-6 lg:gap-5 xl:gap-6 lg:col-span-7">
                  {/* Phone 1: Order Status Steps Screen (Untouched) */}
                  <div className="relative mx-auto w-[270px] sm:w-[280px] xl:w-[295px] animate-float">
                    <div className="relative rounded-[2.5rem] border-[6px] border-brand-text bg-brand-text p-2 shadow-2xl shadow-brand-primary/20">
                      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-brand-text"></div>
                      <div className="overflow-hidden rounded-[2rem] bg-brand-surface-warm">
                        <div className="flex min-h-[420px] flex-col bg-brand-surface-warm p-4 pt-10">
                          <div className="mb-1 flex items-center justify-between">
                            <p className="text-sm font-bold text-brand-text">
                              Order #TG-4821
                            </p>
                            <span className="flex items-center gap-1.5 rounded-full bg-brand-accent/15 px-2.5 py-1 text-xs font-semibold text-brand-accent">
                              <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse-live"></span>
                              Live
                            </span>
                          </div>
                          <p className="mb-6 text-xs text-brand-text-muted">
                            Hyderabadi Biryani · 2 items
                          </p>

                          <div className="mb-4 rounded-2xl border border-brand-border bg-brand-surface-elevated p-4">
                            <p className="text-xs font-medium text-brand-text-muted">
                              Estimated arrival
                            </p>
                            <p className="text-2xl font-extrabold text-brand-primary">
                              12:55 PM
                            </p>
                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-border">
                              <div className="h-full rounded-full gradient-flame animate-progress-fill"></div>
                            </div>
                          </div>

                          <div className="flex flex-1 flex-col gap-0">
                            {/* Step 1 */}
                            <div className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold bg-brand-accent text-white">
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="my-1 w-0.5 flex-1 min-h-[24px] bg-brand-accent"></div>
                              </div>
                              <div className="pb-6">
                                <p className="text-sm font-semibold text-brand-text">
                                  Order Placed
                                </p>
                                <p className="text-xs text-brand-text-muted">
                                  12:04 PM
                                </p>
                              </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold bg-brand-accent text-white">
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="my-1 w-0.5 flex-1 min-h-[24px] bg-brand-accent"></div>
                              </div>
                              <div className="pb-6">
                                <p className="text-sm font-semibold text-brand-text">
                                  Preparing
                                </p>
                                <p className="text-xs text-brand-text-muted">
                                  12:18 PM
                                </p>
                              </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold gradient-flame text-white">
                                  3
                                </div>
                                <div className="my-1 w-0.5 flex-1 min-h-[24px] bg-brand-border"></div>
                              </div>
                              <div className="pb-6">
                                <p className="text-sm font-semibold text-brand-text">
                                  Out for Delivery
                                  <span className="ml-2 text-xs font-normal text-brand-accent">
                                    In progress
                                  </span>
                                </p>
                                <p className="text-xs text-brand-text-muted">
                                  12:42 PM
                                </p>
                              </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold border-2 border-brand-border bg-brand-surface-elevated text-brand-text-muted">
                                  4
                                </div>
                              </div>
                              <div className="pb-6">
                                <p className="text-sm font-semibold text-brand-text-muted">
                                  Delivered
                                </p>
                                <p className="text-xs text-brand-text-muted">
                                  —
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-primary/10 blur-2xl"></div>
                  </div>

                  {/* Phone 2: Delivery Boy & Live Map Tracking Screen */}
                  <div className="relative mx-auto w-[270px] sm:w-[280px] xl:w-[295px] animate-float-reverse sm:mt-6 lg:mt-8">
                    <div className="relative rounded-[2.5rem] border-[6px] border-brand-text bg-brand-text p-2 shadow-2xl shadow-brand-primary/20">
                      <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-brand-text"></div>
                      <div className="overflow-hidden rounded-[2rem] bg-slate-50 flex flex-col min-h-[480px]">
                        {/* Top Bar inside Phone */}
                        <div className="relative z-10 flex items-center justify-between bg-white px-4 pb-2 pt-9 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-brand-text">
                              <svg
                                className="h-3.5 w-3.5"
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
                              <p className="text-xs font-bold text-brand-text leading-none">
                                Live Map
                              </p>
                              <p className="text-[10px] text-brand-text-muted">
                                Order #TG-4821
                              </p>
                            </div>
                          </div>

                          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            GPS Live
                          </span>
                        </div>

                        {/* Map Area */}
                        <div className="relative h-[220px] w-full bg-[#eef2f6] overflow-hidden select-none">
                          {/* Vector Map Roads & Landmarks */}
                          <svg
                            className="absolute inset-0 h-full w-full"
                            viewBox="0 0 300 220"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <pattern
                                id="grid-pattern-delivery"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                              >
                                <rect width="20" height="20" fill="#f1f5f9" />
                                <path
                                  d="M 20 0 L 0 0 0 20"
                                  fill="none"
                                  stroke="#e2e8f0"
                                  strokeWidth="0.8"
                                />
                              </pattern>
                            </defs>
                            <rect
                              width="300"
                              height="220"
                              fill="url(#grid-pattern-delivery)"
                            />

                            {/* Green Park Areas */}
                            <rect
                              x="18"
                              y="18"
                              width="75"
                              height="55"
                              rx="8"
                              fill="#dcfce7"
                              opacity="0.8"
                            />
                            <rect
                              x="210"
                              y="20"
                              width="75"
                              height="60"
                              rx="8"
                              fill="#e0f2fe"
                              opacity="0.8"
                            />
                            <rect
                              x="190"
                              y="130"
                              width="95"
                              height="75"
                              rx="8"
                              fill="#dcfce7"
                              opacity="0.8"
                            />
                            <rect
                              x="20"
                              y="145"
                              width="80"
                              height="60"
                              rx="8"
                              fill="#fef3c7"
                              opacity="0.7"
                            />

                            {/* Roads */}
                            <path
                              d="M 0 95 Q 150 90 300 95"
                              stroke="#ffffff"
                              strokeWidth="16"
                              fill="none"
                            />
                            <path
                              d="M 0 95 Q 150 90 300 95"
                              stroke="#cbd5e1"
                              strokeWidth="1"
                              strokeDasharray="4 4"
                              fill="none"
                            />
                            <path
                              d="M 115 0 L 115 220"
                              stroke="#ffffff"
                              strokeWidth="14"
                              fill="none"
                            />
                            <path
                              d="M 205 0 L 205 220"
                              stroke="#ffffff"
                              strokeWidth="14"
                              fill="none"
                            />
                            <path
                              d="M 0 160 Q 150 165 300 160"
                              stroke="#ffffff"
                              strokeWidth="12"
                              fill="none"
                            />

                            {/* Delivery Route Path */}
                            <path
                              d="M 50 95 Q 115 95 115 60 T 205 60 L 205 140"
                              fill="none"
                              stroke="#0049ad"
                              strokeWidth="4"
                              strokeDasharray="6 4"
                              strokeLinecap="round"
                            />
                          </svg>

                          {/* Restaurant Marker (Start) */}
                          <div className="absolute left-[38px] top-[75px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white shadow-md ring-2 ring-white">
                              <span className="text-xs">🍳</span>
                            </div>
                            <span className="mt-0.5 rounded bg-white/90 px-1.5 py-0.5 text-[8px] font-bold text-brand-text shadow-sm border border-slate-200">
                              Minta Restro
                            </span>
                          </div>

                          {/* Customer Home Marker (Destination) */}
                          <div className="absolute left-[205px] top-[148px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-white shadow-md ring-2 ring-white animate-bounce">
                              <span className="text-xs">🏠</span>
                            </div>
                            <span className="mt-0.5 rounded bg-white/90 px-1.5 py-0.5 text-[8px] font-bold text-rose-600 shadow-sm border border-slate-200">
                              Your Home
                            </span>
                          </div>

                          {/* Delivery Boy Rider (On Route) */}
                          <div className="absolute left-[138px] top-[54px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                            {/* Pulsing Radar Ring */}
                            <span className="absolute -inset-2 rounded-full bg-blue-500/30 animate-ping"></span>
                            {/* Scooter Icon Badge */}
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg ring-2 ring-white">
                              <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM7.5 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17.5 6h-2.12l-1.89-3.79c-.19-.38-.58-.63-1.01-.63H9.5c-.55 0-1 .45-1 1s.45 1 1 1h2.24l1.5 3H8.5c-.55 0-1 .45-1 1s.45 1 1 1h4.63l1.5 3H5.2c-.61 0-1.18.27-1.57.73L1.13 14.5c-.38.45-.33 1.13.12 1.51.45.38 1.13.33 1.51-.12L5.2 13h2.3l-1.5 3c-.15.3-.2.64-.15.97.16 1.09 1.17 1.86 2.27 1.7 1.02-.15 1.78-.97 1.88-2H14c.28 0 .53-.11.71-.29l3.5-3.5c.18-.18.29-.43.29-.71V7c0-.55-.45-1-1-1z" />
                              </svg>
                            </div>
                            {/* Live Status Floating Tooltip */}
                            <div className="mt-1 whitespace-nowrap rounded-full bg-brand-text px-2 py-0.5 text-[8px] font-bold text-white shadow-md flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                              Rahul (8 min away)
                            </div>
                          </div>
                        </div>

                        {/* Bottom Delivery Partner Sheet */}
                        <div className="flex-1 bg-white p-3.5 flex flex-col justify-between border-t border-slate-100">
                          {/* ETA & Distance Info */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <div>
                              <p className="text-[10px] font-medium text-brand-text-muted">
                                Estimated Delivery
                              </p>
                              <p className="text-base font-extrabold text-brand-primary">
                                12:55 PM{" "}
                                <span className="text-xs font-normal text-emerald-600">
                                  (12 mins)
                                </span>
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="rounded-md bg-brand-surface-warm px-2 py-1 text-[10px] font-bold text-brand-text border border-brand-border/60">
                                2.4 km away
                              </span>
                            </div>
                          </div>

                          {/* Delivery Partner Profile Card */}
                          <div className="py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="relative">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                                  🛵
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[9px] font-bold ring-1 ring-white">
                                  ✓
                                </span>
                              </div>

                              <div>
                                <div className="flex items-center gap-1.5">
                                  <p className="text-xs font-bold text-brand-text">
                                    Rahul Kumar
                                  </p>
                                  <span className="rounded bg-amber-100 px-1 py-0.2 text-[9px] font-bold text-amber-800">
                                    ★ 4.9
                                  </span>
                                </div>
                                <p className="text-[10px] text-brand-text-muted">
                                  Honda Activa · JH-01-AB-4821
                                </p>
                              </div>
                            </div>

                            {/* Quick Action Buttons */}
                            <div className="flex items-center gap-1.5">
                              <div
                                aria-label="Call delivery partner"
                                className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm hover:bg-emerald-600 transition-colors cursor-pointer"
                              >
                                <svg
                                  className="h-4 w-4"
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
                              <div
                                aria-label="Message delivery partner"
                                className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-sm hover:bg-brand-primary-dark transition-colors cursor-pointer"
                              >
                                <svg
                                  className="h-4 w-4"
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

                          {/* Safety & Hygiene Verified Footer */}
                          <div className="rounded-lg bg-emerald-50/80 px-2.5 py-1.5 flex items-center gap-2 border border-emerald-100">
                            <span className="text-xs">🛡️</span>
                            <p className="text-[9px] text-emerald-800 font-medium leading-tight">
                              Partner vaccinated & temperature verified. Contactless
                              delivery enabled.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-accent/15 blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: #APP (DOWNLOAD CTA BANNER) --- */}
          <section id="app" className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl bg-brand-primary-dark px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-16">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-primary-light/20 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-primary/30 blur-3xl"></div>

                <div className="relative mx-auto max-w-3xl">
                  <p className="mb-2 font-script text-2xl text-brand-primary-light sm:text-3xl">
                    Your next meal is closer
                  </p>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                    Discover here.{" "}
                    <span className="text-brand-primary-light">
                      Order on Restro.
                    </span>
                  </h2>
                  <p className="mx-auto mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                    The website stays informative and brand-focused. Customers
                    continue to the Restro app for availability, ordering and
                    payment.
                  </p>

                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#app"
                      className="rounded-full bg-white px-8 py-4 text-sm font-extrabold text-brand-primary-dark shadow-lg transition-transform hover:scale-105"
                    >
                      Download Restro App
                    </a>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="#app"
                        className="inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all hover:scale-[1.02] border border-brand-border bg-brand-surface-elevated text-brand-text shadow-sm hover:border-brand-primary/30"
                        aria-label="Get Restro on Google Play"
                      >
                        <svg
                          className="h-7 w-7 shrink-0"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 01-.601-.92V2.734a1.004 1.004 0 01.601-.92zM14.5 12.707l2.302 2.302-10.937 6.333a1.004 1.004 0 01-.295-.295L14.5 12.707zM17.402 9.806l1.463 1.463a1 1 0 010 1.414l-1.463 1.463-2.601-2.601 2.601-2.339zM14.5 11.293L5.57 4.984a1.004 1.004 0 01.295-.295L16.802 10.954 14.5 11.293z"></path>
                        </svg>
                        <div className="text-left">
                          <div className="text-[10px] uppercase tracking-wider opacity-70">
                            Get it on
                          </div>
                          <div className="text-sm font-semibold leading-tight">
                            Google Play
                          </div>
                        </div>
                      </a>

                      <a
                        href="#app"
                        className="inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all hover:scale-[1.02] border border-brand-border bg-brand-surface-elevated text-brand-text shadow-sm hover:border-brand-primary/30"
                        aria-label="Download Restro on the App Store"
                      >
                        <svg
                          className="h-7 w-7 shrink-0"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                        </svg>
                        <div className="text-left">
                          <div className="text-[10px] uppercase tracking-wider opacity-70">
                            Download on the
                          </div>
                          <div className="text-sm font-semibold leading-tight">
                            App Store
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-white/60">
                    App Store / Google Play links can be inserted when ready.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: #FAQ --- */}
          <section id="faq" className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-14 flex justify-center">
                <div className="max-w-2xl text-center mx-auto">
                  <p
                    id="faq-heading"
                    className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl"
                  >
                    FAQ
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                    Questions, simply answered.
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-3xl border border-brand-border bg-brand-surface-elevated p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-bold text-brand-text">
                    Can I order here?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                    No. The website is for information and discovery. Ordering
                    and payment happen in the Restro app.
                  </p>
                </div>

                <div className="rounded-3xl border border-brand-border bg-brand-surface-elevated p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-bold text-brand-text">
                    What does Restro offer?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                    Biryani, Meat Rice, Chicken Rice, South Indian dishes and
                    additional local favourites.
                  </p>
                </div>

                <div className="rounded-3xl border border-brand-border bg-brand-surface-elevated p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-bold text-brand-text">
                    Will the website be dynamic?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                    Yes. Categories, dishes, cities, blogs, FAQs, offers and SEO
                    pages can be managed from an admin/CMS layer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION: THE RESTRO PROMISE --- */}
          <section className="section-warm py-20 lg:py-28">
            <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
              <p className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl">
                The Restro Promise
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
                Good food shouldn't feel ordinary.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-text-muted">
                Real food. Local flavours. Beautiful discovery. One simple
                destination — Restro.
              </p>
            </div>
          </section>
        </main>

        {/* --- FOOTER --- */}
        <footer className="border-t border-brand-border bg-brand-text text-white">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <img
                  alt="Restro logo"
                  className="mb-4 h-12 w-auto object-contain rounded-lg"
                  src="/logo/brand-logo.jpg"
                />
                <p className="font-script text-2xl text-brand-primary-light">
                  Taste Beyond Ordinary
                </p>
                <p className="mt-3 text-sm text-white/60">
                  Made with love for food lovers.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      className="text-sm text-white/70 transition-colors hover:text-brand-primary-light"
                      href="#food"
                    >
                      Food
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-white/70 transition-colors hover:text-brand-primary-light"
                      href="#story"
                    >
                      Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-white/70 transition-colors hover:text-brand-primary-light"
                      href="#experience"
                    >
                      Why Restro
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-white/70 transition-colors hover:text-brand-primary-light"
                      href="#cities"
                    >
                      Cities
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-white/70 transition-colors hover:text-brand-primary-light"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                  Legal &amp; Support
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-brand-primary-light transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-and-condition"
                      className="hover:text-brand-primary-light transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="hover:text-brand-primary-light transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
              <p className="text-sm text-white/50">
                © 2026 Restro — Taste Beyond Ordinary
              </p>
              <p className="text-sm text-white/50">Privacy • Terms • Contact</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RestroWebsite;
