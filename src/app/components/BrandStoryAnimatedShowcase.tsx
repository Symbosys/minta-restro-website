"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";

export interface BrandStoryShowcaseDish {
  id: string;
  name: string;
  category: string;
  tagline: string;
  rating: string;
  badge: string;
  image: string;
  objectPosition: string;
}

export const brandStoryShowcaseDishes: BrandStoryShowcaseDish[] = [
  {
    id: "biryani",
    name: "Authentic Handi Biryani",
    category: "Heritage Dum Special",
    tagline: "Slow-dum fragrant basmati with rich spices & saffron aroma",
    rating: "4.9",
    badge: "🔥 Best Seller",
    image: "/assets/images/biryanis/kolkata-chicken-biryani.jpg",
    objectPosition: "50% 50%",
  },
  {
    id: "dosa",
    name: "Butter Paneer Masala Dosa",
    category: "South Indian Classic",
    tagline: "Golden crisp crepe folded with spiced butter paneer filling",
    rating: "4.8",
    badge: "✨ Chef's Pick",
    image: "/assets/images/south-indian/butter-paneer-masala-dosa.jpg",
    objectPosition: "50% 35%",
  },
  {
    id: "pizza",
    name: "Cheese Pull Gourmet Pizza",
    category: "Wood-Fired Special",
    tagline: "Artisan crust topped with marinara & molten mozzarella cheese",
    rating: "4.9",
    badge: "🧀 Extra Cheesy",
    image: "/assets/images/brand-story/cheese-pull-pizza.jpg",
    objectPosition: "50% 50%",
  },
  {
    id: "cake",
    name: "Belgian Chocolate Truffle Cake",
    category: "Sweet Indulgence",
    tagline: "Decadent dark chocolate ganache with moist sponge layers",
    rating: "5.0",
    badge: "🍫 Pure Delight",
    image: "/assets/images/brand-story/chocolate-truffle-cake.jpg",
    objectPosition: "50% 50%",
  },
  {
    id: "burger",
    name: "Crispy Burger & Fries",
    category: "Everyday Favourite",
    tagline: "Juicy golden crunch patty, toasted brioche & seasoned fries",
    rating: "4.8",
    badge: "🍟 Crowd Favourite",
    image: "/assets/images/brand-story/crispy-burger-fries.jpg",
    objectPosition: "50% 48%",
  },
  {
    id: "fish-rice",
    name: "Fish Curry & Fragrant Rice",
    category: "Coastal Heritage",
    tagline: "Regional spiced mustard gravy served with steamed white rice thali",
    rating: "4.9",
    badge: "🐟 Traditional Recipe",
    image: "/assets/images/brand-story/fish-curry-rice.jpg",
    objectPosition: "50% 40%",
  },
];

const SLIDE_DURATION = 3800;

export default function BrandStoryAnimatedShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Preload all 6 images for instant transitions
  useEffect(() => {
    if (typeof window !== "undefined") {
      brandStoryShowcaseDishes.forEach((dish) => {
        const img = new window.Image();
        img.src = dish.image;
      });
    }
  }, []);

  // Auto-play interval timer with hover pause
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % brandStoryShowcaseDishes.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isHovered, activeIdx]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % brandStoryShowcaseDishes.length);
  };

  const handlePrev = () => {
    setActiveIdx(
      (prev) =>
        (prev - 1 + brandStoryShowcaseDishes.length) %
        brandStoryShowcaseDishes.length,
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const currentDish = brandStoryShowcaseDishes[activeIdx];

  return (
    <div
      className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[560px] xl:max-w-[590px] 2xl:max-w-[620px] mx-auto lg:mr-0 select-none group/showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Minta Restro Signature Dishes Auto Showcase"
    >
      {/* Outer Ambient Glow Aura */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-[32px] sm:rounded-[40px] bg-gradient-to-tr from-[#0049ad]/25 via-[#f3c86f]/20 to-[#0049ad]/10 blur-2xl opacity-70 transition-opacity duration-700 group-hover/showcase:opacity-95"
      />

      {/* Main Luxury Frame Container */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10.5] md:aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[28px] border-2 border-white/95 bg-[#06214d] shadow-[0_16px_45px_rgba(0,45,107,0.22)] ring-1 ring-[#0049ad]/20">
        {/* Render all 6 dishes stacked with smooth Crossfade + Ken Burns */}
        {brandStoryShowcaseDishes.map((dish, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={dish.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 620px"
                className={`object-cover transition-transform duration-[4500ms] ease-out ${
                  isActive ? "scale-[1.05]" : "scale-100"
                }`}
                style={{
                  objectPosition: dish.objectPosition,
                }}
                priority={idx === 0}
              />
            </div>
          );
        })}

        {/* Top-Left Category Badge */}
        <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/92 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-bold text-[#0049ad] shadow-md backdrop-blur-md border border-white/80 transition-all duration-300">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#b88224] animate-pulse" />
            <span>{currentDish.category}</span>
          </span>
        </div>

        {/* Top-Right Rating & Tag Badge */}
        <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#06214d]/85 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-xs font-bold text-[#f3cf7a] shadow-md backdrop-blur-md border border-[#f3cf7a]/40 transition-all duration-300">
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-[#f3cf7a] text-[#f3cf7a]" />
            <span>{currentDish.rating}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/95">{currentDish.badge}</span>
          </span>
        </div>

        {/* Navigation Arrow Controls */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous dish"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/30 opacity-75 sm:opacity-0 transition-all duration-300 hover:bg-[#0049ad] hover:opacity-100 hover:scale-105 group-hover/showcase:opacity-90 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next dish"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/30 opacity-75 sm:opacity-0 transition-all duration-300 hover:bg-[#0049ad] hover:opacity-100 hover:scale-105 group-hover/showcase:opacity-90 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>

        {/* Bottom Shaded Overlay for Title Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-24 sm:h-32 bg-gradient-to-t from-[#04193b]/95 via-[#04193b]/55 to-transparent pointer-events-none"
        />

        {/* Bottom Content: Dish Name & Tagline */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-5 text-left">
          <div key={currentDish.id} className="transition-all duration-500">
            <h3 className="font-editorial-serif text-sm sm:text-xl md:text-2xl font-bold text-white drop-shadow-md leading-tight">
              {currentDish.name}
            </h3>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[13px] text-white/85 line-clamp-1 drop-shadow-sm font-medium">
              {currentDish.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Decorative Pill Below Frame */}
      <div className="absolute -bottom-3 -right-2 sm:-right-3 z-30 hidden sm:flex items-center gap-1.5 rounded-full border border-[#f3cf7a]/70 bg-[#0049ad] px-3.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-white shadow-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f3cf7a] animate-ping" />
        <span>Authentic Taste Everyday</span>
      </div>
    </div>
  );
}

