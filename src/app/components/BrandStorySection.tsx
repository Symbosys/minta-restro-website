"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";

import BrandStoryModal from "./BrandStoryModal";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface StoryGalleryItem {
  src: string;
  alt: string;
  label: string;
  frame: {
    x: number;
    y: number;
    width: number;
    height: number;
    preserveAspectRatio: string;
  };
}

const storyGallery: StoryGalleryItem[] = [
  {
    src: "/assets/images/biryanis/kolkata-chicken-biryani.jpg",
    alt: "Authentic Handi Chicken Biryani garnished with crispy onions and fresh mint",
    label: "Authentic Handi Biryani",
    frame: {
      x: -66,
      y: 5,
      width: 669,
      height: 446,
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    src: "/assets/images/brand-story/fish-curry-rice.jpg",
    alt: "Regional spicy Fish Curry served with steamed rice, cucumber and lime",
    label: "Regional Fish Rice",
    frame: {
      x: 4,
      y: -52,
      width: 528,
      height: 586,
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    src: "/assets/images/south-indian/butter-paneer-masala-dosa.jpg",
    alt: "Crisp Butter Paneer Masala Dosa served on banana leaf with sambar and coconut chutney",
    label: "Butter Paneer Masala Dosa",
    frame: {
      x: 4,
      y: -138,
      width: 528,
      height: 712,
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    src: "/assets/images/brand-story/crispy-burger-fries.jpg",
    alt: "Crispy burger layered with melted cheese, fresh lettuce and golden fries",
    label: "Crispy Burger & Fries",
    frame: {
      x: -12,
      y: 4,
      width: 560,
      height: 448,
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    src: "/assets/images/brand-story/cheese-pull-pizza.jpg",
    alt: "Golden baked Margherita pizza with rich cheese pull slice",
    label: "Cheesy Classic Pizza",
    frame: {
      x: -122,
      y: 5,
      width: 669,
      height: 446,
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    src: "/assets/images/brand-story/chocolate-truffle-cake.jpg",
    alt: "Decadent Belgian Chocolate Truffle Cake with truffles and edible gold leaf",
    label: "Chocolate Truffle Cake",
    frame: {
      x: 0,
      y: -20,
      width: 536,
      height: 489,
      preserveAspectRatio: "xMidYMid slice",
    },
  },
];

const valuePillars = [
  {
    id: "authentic-food",
    title: "Authentic Local Food",
    subtitle: "Real regional flavours",
    icon: "cloche" as const,
  },
  {
    id: "traditional-recipes",
    title: "Traditional Recipes",
    subtitle: "Passed down through generations",
    icon: "leaf" as const,
  },
  {
    id: "support-vendors",
    title: "Support Local Vendors",
    subtitle: "Empowering food makers",
    icon: "vendors" as const,
  },
  {
    id: "quality-freshness",
    title: "Quality & Freshness",
    subtitle: "Hygienic & delicious meals",
    icon: "quality" as const,
  },
];

const QUATREFOIL_PATH =
  "M 132 18 C 188 18, 226 34, 274 34 C 322 34, 374 22, 422 22 C 480 22, 516 128, 508 228 C 500 328, 480 438, 420 438 C 368 438, 318 424, 268 424 C 218 424, 170 442, 116 442 C 62 442, 20 336, 26 230 C 32 124, 76 18, 132 18 Z";

function FeaturePillarIcon({
  kind,
}: {
  kind: (typeof valuePillars)[number]["icon"];
}) {
  if (kind === "cloche") {
    return (
      <svg
        className="h-8 w-8 lg:h-9 lg:w-9 shrink-0 text-[#b88224]"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="10.5"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8.5 25.5C8.5 18.8 13.6 13.5 20 13.5C26.4 13.5 31.5 18.8 31.5 25.5H8.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 28.5H34.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 31.5H31"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    );
  }

  if (kind === "leaf") {
    return (
      <svg
        className="h-8 w-8 lg:h-9 lg:w-9 shrink-0 text-[#b88224]"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M11 31C11 19 19 10 31 9C30 21 22 29 11 31Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 33C13 28 20 20 28 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "vendors") {
    return (
      <div className="flex h-8 w-8 lg:h-9 lg:w-9 shrink-0 items-center justify-center text-[#b88224]">
        <Users className="h-7 w-7 lg:h-8 lg:w-8 stroke-[1.65]" />
      </div>
    );
  }

  return (
    <svg
      className="h-8 w-8 lg:h-9 lg:w-9 shrink-0 text-[#b88224]"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M20 5.5L23.2 8.2L27.4 7.7L28.7 11.7L32.6 13.3L31.7 17.4L34.3 20.6L31.7 23.8L32.6 27.9L28.7 29.5L27.4 33.5L23.2 33L20 35.7L16.8 33L12.6 33.5L11.3 29.5L7.4 27.9L8.3 23.8L5.7 20.6L8.3 17.4L7.4 13.3L11.3 11.7L12.6 7.7L16.8 8.2L20 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 20.6L18.3 24.4L25.8 16.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisionTargetIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px] shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient
          id={`${gradientId}-t`}
          x1="6"
          y1="8"
          x2="54"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fbe295" />
          <stop offset="48%" stopColor="#e8b64d" />
          <stop offset="100%" stopColor="#c4851d" />
        </linearGradient>
      </defs>
      {/* Concentric Bullseye Rings */}
      <circle
        cx="28"
        cy="36"
        r="21"
        stroke={`url(#${gradientId}-t)`}
        strokeWidth="3.4"
      />
      <circle
        cx="28"
        cy="36"
        r="14"
        stroke={`url(#${gradientId}-t)`}
        strokeWidth="3.4"
      />
      <circle
        cx="28"
        cy="36"
        r="7"
        stroke={`url(#${gradientId}-t)`}
        strokeWidth="3.4"
      />
      {/* Navy Knockout Behind Arrow Shaft */}
      <path
        d="M31 33 L53 11"
        stroke="#042150"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      {/* Diagonal Arrow & Fletching */}
      <path
        d="M29 35 L52 12"
        stroke={`url(#${gradientId}-t)`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="28" cy="36" r="2.8" fill={`url(#${gradientId}-t)`} />
      <path
        d="M46 10 L47.5 16.5 L54 18 L57 14.5 L50.5 13 L49 7 Z"
        fill={`url(#${gradientId}-t)`}
        stroke={`url(#${gradientId}-t)`}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PurposeChefHatIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px] shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient
          id={`${gradientId}-c`}
          x1="12"
          y1="8"
          x2="52"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fbe295" />
          <stop offset="48%" stopColor="#e8b64d" />
          <stop offset="100%" stopColor="#c4851d" />
        </linearGradient>
      </defs>
      {/* Chef Toque Outer Crown & Headband */}
      <path
        d="M19 37 C11.5 36.5, 9 28.5, 13.5 22.5 C16.5 18.5, 21.5 18.5, 22.5 19 C24.5 12, 39.5 12, 41.5 19 C42.5 18.5, 47.5 18.5, 50.5 22.5 C55 28.5, 52.5 36.5, 45 37 V51 C45 53.2, 43.2 54.5, 41 54.5 H23 C20.8 54.5, 19 53.2, 19 51 V37 Z"
        stroke={`url(#${gradientId}-c)`}
        strokeWidth="3.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Headband Horizontal Seam */}
      <path
        d="M19.5 46 H44.5"
        stroke={`url(#${gradientId}-c)`}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Three Chef Hat Crown Pleats */}
      <path
        d="M25.5 27.5 L27 36.5 M32 25.5 V36.5 M38.5 27.5 L37 36.5"
        stroke={`url(#${gradientId}-c)`}
        strokeWidth="2.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BrandStorySection({
  hideStoryMiddle = false,
}: {
  hideStoryMiddle?: boolean;
} = {}) {
  const uid = useId().replace(/:/g, "");
  const clipId = `brandStoryClip-${uid}`;
  const goldFrameId = `brandStoryGold-${uid}`;
  const visionGoldId = `brandVisionGold-${uid}`;

  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [holdSlide, setHoldSlide] = useState(0);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const holdGroupRef = useRef<SVGGElement>(null);
  const enterGroupRef = useRef<SVGGElement>(null);
  const cardFloatRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLSpanElement>(null);
  const isFirstMountRef = useRef(true);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const didSwipeRef = useRef(false);
  const activeSlideRef = useRef(0);

  const renderSlideGraphic = (item: StoryGalleryItem) => (
    <image
      href={item.src}
      x={item.frame.x}
      y={item.frame.y}
      width={item.frame.width}
      height={item.frame.height}
      preserveAspectRatio={item.frame.preserveAspectRatio}
    />
  );

  const triggerSlide = useCallback((nextIdx: number, direction: 1 | -1 = 1) => {
    const normalized =
      ((nextIdx % storyGallery.length) + storyGallery.length) %
      storyGallery.length;
    if (normalized === activeSlideRef.current) return;
    setHoldSlide(activeSlideRef.current);
    setSlideDir(direction);
    activeSlideRef.current = normalized;
    setActiveSlide(normalized);
  }, []);

  useEffect(() => {
    // Preload all 6 gallery photos immediately so crossfades never flicker
    storyGallery.forEach((item) => {
      const img = new window.Image();
      img.decoding = "sync";
      img.src = item.src;
    });
  }, []);

  useEffect(() => {
    const cardEl = cardFloatRef.current;
    if (!cardEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const floatTween = gsap.to(cardEl, {
      y: -5,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      force3D: true,
    });

    return () => {
      floatTween.kill();
    };
  }, []);

  useEffect(() => {
    if (isPaused || isStoryModalOpen) return;

    const timer = window.setInterval(() => {
      triggerSlide(activeSlideRef.current + 1, 1);
    }, 3900);

    return () => window.clearInterval(timer);
  }, [isPaused, isStoryModalOpen, triggerSlide]);

  useIsomorphicLayoutEffect(() => {
    const enterEl = enterGroupRef.current;
    const holdEl = holdGroupRef.current;
    const captionEl = captionRef.current;
    if (!enterEl || !holdEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.killTweensOf(
      captionEl ? [enterEl, holdEl, captionEl] : [enterEl, holdEl],
    );

    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      gsap.set(holdEl, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        svgOrigin: "268 230",
      });
      gsap.set(enterEl, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        svgOrigin: "268 230",
      });
      if (captionEl) gsap.set(captionEl, { opacity: 1, y: 0 });
      return;
    }

    if (prefersReducedMotion) {
      gsap.set(holdEl, { opacity: 1, scale: 1, x: 0, svgOrigin: "268 230" });
      gsap.fromTo(
        enterEl,
        { opacity: 0, scale: 1, x: 0, y: 0, svgOrigin: "268 230" },
        { opacity: 1, duration: 0.45, ease: "power2.out" },
      );
      if (captionEl) gsap.set(captionEl, { opacity: 1, y: 0 });
      return;
    }

    const enterOffset = slideDir * 14;
    const exitOffset = -slideDir * 10;

    const tl = gsap.timeline({
      defaults: { force3D: true },
    });

    tl.fromTo(
      holdEl,
      { opacity: 1, scale: 1, x: 0, y: 0, svgOrigin: "268 230" },
      {
        scale: 1.018,
        x: exitOffset,
        duration: 1.15,
        ease: "power2.inOut",
      },
      0,
    ).fromTo(
      enterEl,
      {
        opacity: 0,
        scale: 1.032,
        x: enterOffset,
        y: 0,
        svgOrigin: "268 230",
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.15,
        ease: "power2.inOut",
      },
      0,
    );

    if (captionEl) {
      tl.fromTo(
        captionEl,
        { opacity: 0, y: 4 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        0.18,
      );
    }

    return () => {
      tl.kill();
    };
  }, [activeSlide, slideDir]);

  useEffect(() => {
    if (!isStoryModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsStoryModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStoryModalOpen]);

  return (
    <section
      id="brand-story-overview"
      className="relative bg-[#f5f2eb] pb-10 sm:pb-12 lg:pb-14 pt-8 sm:pt-12 lg:pt-16 overflow-x-clip"
    >
      {/* --- FLOATING 4-PILLAR FEATURE STRIP --- */}
      <div className="relative z-20 mx-auto max-w-6xl xl:max-w-[1220px] px-3 sm:px-6 lg:px-8">
        <div
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #fcfaf6 100%)",
          }}
          className="rounded-2xl sm:rounded-3xl lg:rounded-full border border-[#e7dcc4] px-3 py-2.5 sm:px-6 sm:py-4 lg:px-5 lg:py-4 xl:px-7 xl:py-5 shadow-[0_14px_38px_rgba(9,32,68,0.08)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="relative flex items-center gap-3 px-2.5 py-3 sm:px-5 sm:py-3.5 lg:px-5 lg:py-1.5 xl:px-6"
              >
                {/* Mobile 1-col horizontal divider */}
                {idx > 0 && (
                  <span
                    aria-hidden="true"
                    className="block sm:hidden absolute top-0 left-3 right-3 h-[1px] bg-[#dfd6c3]"
                  />
                )}
                {/* Tablet 2x2 vertical divider */}
                {idx % 2 === 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block lg:hidden absolute left-0 top-1 bottom-1 w-[1px] bg-[#e5dcc9]"
                  />
                )}
                {/* Tablet 2x2 row horizontal divider */}
                {idx >= 2 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block lg:hidden absolute top-0 left-4 right-4 h-[1px] bg-[#e5dcc9]"
                  />
                )}
                {/* Desktop 4-col vertical divider (all 3 full-height dividers guaranteed) */}
                {idx > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-[#e5dcc9]"
                  />
                )}

                <FeaturePillarIcon kind={pillar.icon} />
                <div className="min-w-0">
                  <p className="text-[13px] sm:text-sm font-bold leading-snug text-[#0a2346]">
                    {pillar.title}
                  </p>
                  <p className="mt-0.5 text-[11px] sm:text-xs leading-snug text-[#4b5563]">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN 2-COLUMN BRAND STORY SECTION --- */}
      {!hideStoryMiddle && (
        <div className="relative z-10 mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-6xl xl:max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Left Column: Animated Wavy Quatrefoil Dish Showcase */}
            <div className="flex flex-col items-center lg:col-span-6">
              <div
                ref={cardFloatRef}
                style={{ willChange: "transform" }}
                className="relative w-full max-w-[330px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[490px] xl:max-w-[515px] cursor-pointer select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => {
                  if (didSwipeRef.current) {
                    didSwipeRef.current = false;
                    return;
                  }
                  triggerSlide(activeSlide + 1, 1);
                }}
                onTouchStart={(e) => {
                  didSwipeRef.current = false;
                  if (e.touches.length > 0) {
                    touchStartXRef.current = e.touches[0].clientX;
                    touchStartYRef.current = e.touches[0].clientY;
                  }
                }}
                onTouchEnd={(e) => {
                  if (
                    touchStartXRef.current === null ||
                    touchStartYRef.current === null ||
                    e.changedTouches.length === 0
                  ) {
                    return;
                  }
                  const dx = e.changedTouches[0].clientX - touchStartXRef.current;
                  const dy = e.changedTouches[0].clientY - touchStartYRef.current;
                  touchStartXRef.current = null;
                  touchStartYRef.current = null;
                  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 36) {
                    didSwipeRef.current = true;
                    triggerSlide(
                      activeSlide + (dx < 0 ? 1 : -1),
                      dx < 0 ? 1 : -1,
                    );
                  }
                }}
                aria-label="Interactive dish gallery — click or swipe to view next dish"
              >
                <svg
                  viewBox="0 0 536 460"
                  className="w-full h-auto overflow-visible drop-shadow-[0_18px_36px_rgba(9,32,68,0.16)] transition-transform duration-500 ease-out hover:scale-[1.015]"
                  role="img"
                  aria-label={storyGallery[activeSlide].alt}
                >
                  <defs>
                    <clipPath id={clipId}>
                      <path d={QUATREFOIL_PATH} />
                    </clipPath>
                    <linearGradient
                      id={goldFrameId}
                      x1="28"
                      y1="20"
                      x2="510"
                      y2="440"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#dfba63" />
                      <stop offset="32%" stopColor="#f8e3a1" />
                      <stop offset="65%" stopColor="#b98324" />
                      <stop offset="100%" stopColor="#e8c36c" />
                    </linearGradient>
                  </defs>

                  {/* Soft Ivory Halo Mat Behind Photo */}
                  <path
                    d={QUATREFOIL_PATH}
                    fill="#0f172a"
                    stroke="#ffffff"
                    strokeWidth="12"
                  />

                  {/* Dual-Layer Clipped Animated Culinary Photographs */}
                  <g clipPath={`url(#${clipId})`}>
                    <g
                      ref={holdGroupRef}
                      style={{ willChange: "transform, opacity" }}
                    >
                      {renderSlideGraphic(storyGallery[holdSlide])}
                    </g>
                    <g
                      ref={enterGroupRef}
                      style={{ willChange: "transform, opacity" }}
                    >
                      {renderSlideGraphic(storyGallery[activeSlide])}
                    </g>
                  </g>

                  {/* Crisp White Inner & Metallic Gold Rim Outline */}
                  <path
                    d={QUATREFOIL_PATH}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="7"
                    strokeOpacity="0.95"
                  />
                  <path
                    d={QUATREFOIL_PATH}
                    fill="none"
                    stroke={`url(#${goldFrameId})`}
                    strokeWidth="3.2"
                  />
                </svg>
              </div>

              {/* Dish Caption + Animated Dot Switcher Controls */}
              <div
                className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerSlide(activeSlide - 1, -1);
                  }}
                  aria-label="Previous dish photo"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#dfd2b6] bg-white text-[#092248] shadow-sm transition-all duration-300 hover:border-[#b88224] hover:text-[#b88224] active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5 stroke-[2.4]" />
                </button>

                <div className="flex items-center gap-2.5 rounded-full border border-[#e7dcc4] bg-white px-3.5 py-1.5 shadow-sm overflow-hidden">
                  <span
                    ref={captionRef}
                    className="inline-block text-[11px] sm:text-xs font-bold tracking-wide text-[#092248]"
                  >
                    {storyGallery[activeSlide].label}
                  </span>
                  <span className="h-3 w-[1px] bg-[#dfd6c3]" aria-hidden="true" />
                  <div className="flex items-center gap-1.5">
                    {storyGallery.map((item, idx) => {
                      const isCurrent = idx === activeSlide;
                      return (
                        <button
                          key={item.src}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            triggerSlide(idx, idx >= activeSlide ? 1 : -1);
                          }}
                          aria-label={`Show ${item.label}`}
                          aria-current={isCurrent ? "true" : undefined}
                          className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                            isCurrent
                              ? "w-5 bg-[#c58e26]"
                              : "w-1.5 bg-[#d9ccb2] hover:bg-[#b88224]/70"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerSlide(activeSlide + 1, 1);
                  }}
                  aria-label="Next dish photo"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#dfd2b6] bg-white text-[#092248] shadow-sm transition-all duration-300 hover:border-[#b88224] hover:text-[#b88224] active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5 stroke-[2.4]" />
                </button>
              </div>
            </div>

            {/* Right Column: Brand Story Heading, Paragraphs & CTA */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div
                style={{
                  background: "linear-gradient(135deg, #062149 0%, #0b336b 100%)",
                }}
                className="inline-flex items-center rounded-full border border-[#d5a849]/75 px-4 py-1.5 shadow-sm"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3cf7a]">
                  Brand Story
                </span>
              </div>

              <h2 className="mt-4 text-[24px] sm:text-[32px] md:text-[36px] lg:text-[36px] xl:text-[42px] font-extrabold leading-[1.18] tracking-tight text-[#092248]">
                Our Brand Story – A Journey of Authentic Taste, Tradition &amp;{" "}
                <span className="text-[#a8731b]">Togetherness</span>
              </h2>

              <div className="mt-4 sm:mt-5 mx-auto lg:mx-0 max-w-2xl space-y-3.5 sm:space-y-4 text-left sm:text-center lg:text-left text-sm sm:text-[15.5px] leading-[1.7] text-[#273244]">
                <p>
                  Food is more than just something we eat. It is an emotion, a
                  memory, a celebration and an important part of who we are.
                </p>
                <p>
                  Every city, every region and every community in India has its
                  own unique food identity. From the rich aroma of traditional
                  Biryani to the comforting taste of Meat Rice, from flavourful
                  Chicken Rice and Fish Rice to the simplicity of Egg Rice and the
                  timeless flavours of South Indian cuisine, Indian food culture
                  is incredibly diverse.
                </p>
              </div>

              <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsStoryModalOpen(true)}
                  style={{
                    background:
                      "linear-gradient(180deg, #f9e39d 0%, #e7ba5a 58%, #cf982c 100%)",
                  }}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#c58e26]/65 px-7 py-3 text-sm font-bold text-[#092248] shadow-[0_10px_24px_rgba(207,152,44,0.28)] transition-all duration-300 hover:scale-[1.03] hover:brightness-105 active:scale-95 cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.3] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- OUR VISION & OUR PURPOSE ROYAL NAVY BANNER --- */}
      <div
        className={`relative z-20 mx-auto ${
          hideStoryMiddle
            ? "mt-8 sm:mt-10 lg:mt-12"
            : "mt-10 sm:mt-14 lg:mt-16"
        } max-w-6xl xl:max-w-[1220px] px-3 sm:px-6 lg:px-8`}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #c6912c 0%, #fae39c 28%, #9f6a16 55%, #f5d47a 82%, #b88224 100%)",
          }}
          className="rounded-3xl md:rounded-[48px] p-[2px] shadow-[0_18px_40px_rgba(6,28,62,0.22)] transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(6,28,62,0.28)]"
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #06285a 0%, #031b42 48%, #052658 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,244,205,0.2), inset 0 -2px 0 rgba(0,0,0,0.35)",
            }}
            className="relative overflow-hidden rounded-[22px] md:rounded-[46px] px-5 py-5 sm:px-14 sm:py-6 md:px-14 md:py-6 lg:px-20 lg:py-7"
          >
            <div className="relative z-10 grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-0">
              {/* Left Block: Our Vision */}
              <div className="group flex items-center justify-start sm:justify-center gap-4 sm:gap-5 md:pr-8 lg:pr-12">
                <VisionTargetIcon gradientId={visionGoldId} />
                <div className="text-left">
                  <h3 className="text-[19px] sm:text-[22px] lg:text-[25px] font-extrabold leading-tight tracking-tight text-white">
                    Our Vision
                  </h3>
                  <p className="mt-1 text-[13px] sm:text-sm lg:text-[15.5px] leading-[1.45] text-[#e6edf8]">
                    Bringing Local Food to <br className="hidden sm:inline" />
                    Every Table.
                  </p>
                </div>
              </div>

              {/* Mobile Horizontal Gold Hairline */}
              <div
                aria-hidden="true"
                className="mx-auto h-[1px] w-4/5 md:hidden"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #e7c675 20%, #e7c675 80%, transparent 100%)",
                }}
              />

              {/* Right Block: Our Purpose */}
              <div className="group relative flex items-center justify-start sm:justify-center gap-4 sm:gap-5 md:pl-8 lg:pl-12">
                {/* Desktop Vertical Gold Hairline Divider */}
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute left-0 top-0 bottom-0 my-auto h-14 lg:h-16 w-[1.5px]"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, #e7c675 18%, #e7c675 82%, transparent 100%)",
                  }}
                />
                <PurposeChefHatIcon gradientId={visionGoldId} />
                <div className="text-left">
                  <h3 className="text-[19px] sm:text-[22px] lg:text-[25px] font-extrabold leading-tight tracking-tight text-white">
                    Our Purpose
                  </h3>
                  <p className="mt-1 text-[13px] sm:text-sm lg:text-[15.5px] leading-[1.45] text-[#e6edf8]">
                    To make discovering and <br className="hidden sm:inline" />
                    enjoying authentic local food easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FULL BRAND STORY MODAL (FROM Minta_Restro_Brand_Story.pdf) --- */}
      <BrandStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </section>
  );
}
