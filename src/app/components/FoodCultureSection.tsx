"use client";

import React, { useEffect, useId, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

interface FoodCultureCardItem {
  id: string;
  titleTop?: string;
  titleMain: string;
  modalTitle?: string;
  shortDesc: string;
  fullStory: string | string[];
  regionTag: string;
  image: string;
  alt: string;
  waveStart: string;
  waveEnd: string;
  objectPosition: string;
  imgScale?: number;
  transformOrigin?: string;
  modalPosition?: string;
}

const foodCultureCards: FoodCultureCardItem[] = [
  {
    id: "authentic-biryani",
    titleMain: "The Art of Authentic Biryani",
    shortDesc:
      "An experience of aroma, spices, cooking techniques and tradition.",
    fullStory: [
      "Biryani is not simply a rice dish. It is an experience built around aroma, spices, cooking techniques and tradition. From flavourful Chicken Biryani and rich Mutton Biryani to regional variations inspired by Kolkata, Hyderabad and other culinary traditions, every Biryani has its own character.",
      "At Minta Restro, we celebrate the diversity of Biryani prepared by local food specialists, each bringing their own cooking style and distinctive flavours.",
    ],
    regionTag: "Slow Dum Heritage",
    image: "/assets/images/brand-story/biryani-handi.jpg",
    alt: "Hammered copper handi of Authentic Indian Biryani garnished with crispy onions and fresh mint",
    waveStart: "#613210",
    waveEnd: "#3b1c07",
    objectPosition: "50% 48%",
    modalPosition: "50% 48%",
  },
  {
    id: "meat-rice",
    titleMain: "Traditional Meat Rice",
    modalTitle: "Traditional Meat Rice – A Taste of Comfort",
    shortDesc:
      "A comforting meal of perfectly cooked rice, flavourful meat and aromatic spices.",
    fullStory: [
      "Some dishes do not need an introduction. Meat Rice is one of those comforting meals that brings together perfectly cooked rice, flavourful meat, aromatic spices and traditional preparation.",
      "Whether it is a regional Mutton Rice speciality or another traditional meat-based rice preparation, we believe these dishes deserve recognition beyond their local neighbourhoods.",
    ],
    regionTag: "Hearty Comfort Classic",
    image: "/assets/images/food-culture/mutton-curry-rice.jpg",
    alt: "Traditional clay pot slow-cooked mutton curry served with fragrant basmati rice, sliced onions and lemon on a steel thali",
    waveStart: "#5c2213",
    waveEnd: "#3a1309",
    objectPosition: "50% 34%",
    modalPosition: "50% 38%",
  },
  {
    id: "chicken-rice",
    titleMain: "Chicken Rice",
    modalTitle: "Chicken Rice – Simple, Delicious & Satisfying",
    shortDesc:
      "Simple, delicious & satisfying rice dishes prepared with aromatic spices and regional flavours.",
    fullStory: [
      "Chicken Rice represents the perfect combination of convenience and flavour. From traditional spicy preparations to regional chicken-and-rice combinations, it is a favourite for customers looking for a wholesome and satisfying meal.",
      "We want to bring different local interpretations of Chicken Rice to customers through our vendor network.",
    ],
    regionTag: "Everyday Neighbourhood Favourite",
    image: "/assets/images/food-culture/chicken-curry-rice.jpg",
    alt: "Rich home-style masala chicken curry served in a ceramic bowl alongside steamed white rice, onion and lime",
    waveStart: "#4c3e14",
    waveEnd: "#2e250a",
    objectPosition: "50% 34%",
    modalPosition: "50% 48%",
  },
  {
    id: "fish-rice",
    titleMain: "Fish Rice",
    modalTitle: "Fish Rice – Celebrating Regional Flavours",
    shortDesc:
      "Celebrating regional flavours from eastern and coastal regions.",
    fullStory: [
      "Fish has a special place in India's regional food traditions, especially across eastern and coastal regions. From traditional fish curry and rice combinations to local fish specialities, every preparation reflects the culinary identity of its region.",
      "Minta Restro aims to bring these familiar and loved flavours closer to customers.",
    ],
    regionTag: "Eastern & Coastal Heritage",
    image: "/assets/images/brand-story/fish-curry-rice.jpg",
    alt: "Regional spiced Indian fish curry thali served with steamed rice, crispy aloo bhaja, cucumber and lime",
    waveStart: "#12505c",
    waveEnd: "#09323a",
    objectPosition: "50% 14%",
    modalPosition: "50% 38%",
  },
  {
    id: "egg-rice",
    titleMain: "Egg Rice",
    modalTitle: "Egg Rice – Everyday Food, Extraordinary Taste",
    shortDesc:
      "Everyday food that combines affordability, flavour and satisfaction.",
    fullStory: [
      "Sometimes, the simplest meals create the strongest food memories. Egg Rice is an everyday favourite that combines affordability, flavour and satisfaction.",
      "Prepared in different regional styles, it offers customers a delicious meal option for different occasions.",
    ],
    regionTag: "Street & Home Staple",
    image: "/assets/images/food-culture/egg-curry-rice.jpg",
    alt: "Savory Indian egg masala curry with boiled eggs paired with fluffy white rice and fresh curry leaves",
    waveStart: "#3b4c1c",
    waveEnd: "#24300f",
    objectPosition: "50% 52%",
    modalPosition: "50% 50%",
  },
  {
    id: "south-indian-cuisine",
    titleMain: "South Indian Cuisine",
    modalTitle: "South Indian Cuisine – Tradition in Every Bite",
    shortDesc:
      "From crispy Dosa and soft Idli to Medu Vada, Uttapam, Sambar and traditional chutneys.",
    fullStory: [
      "South Indian cuisine is one of India's most loved culinary traditions. From crispy Dosa and soft Idli to Medu Vada, Uttapam, Sambar and traditional chutneys, these dishes reflect generations of culinary knowledge.",
      "Minta Restro brings these familiar South Indian favourites into its food ecosystem, giving customers more variety and opportunities to explore authentic regional cuisine.",
    ],
    regionTag: "Timeless Coastal & Southern Art",
    image: "/assets/images/brand-story/butter-paneer-masala-dosa.jpg",
    alt: "Crisp golden Butter Paneer Masala Dosa served on banana leaf with piping hot sambar and coconut chutney",
    waveStart: "#174b2a",
    waveEnd: "#0d2e19",
    objectPosition: "50% 56%",
    modalPosition: "50% 52%",
  },
];

export default function FoodCultureSection() {
  const uid = useId().replace(/:/g, "");
  const [selectedDish, setSelectedDish] = useState<FoodCultureCardItem | null>(
    null,
  );

  useEffect(() => {
    if (!selectedDish) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDish(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDish]);

  return (
    <section
      id="food"
      className="relative overflow-x-clip bg-white py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-[1220px] 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-[1px] w-10 sm:w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #c58e26 100%)",
            }}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#a8731b]">
            Celebrating
          </span>
          <span
            aria-hidden="true"
            className="h-[1px] w-10 sm:w-16"
            style={{
              background:
                "linear-gradient(90deg, #c58e26 0%, transparent 100%)",
            }}
          />
        </div>

        <h2 className="mt-2 font-editorial-serif text-[26px] sm:text-[38px] lg:text-[44px] 2xl:text-[48px] font-extrabold leading-[1.15] tracking-tight text-[#092248]">
          India&apos;s Authentic Food Culture
        </h2>
        <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm lg:text-[15.5px] 2xl:text-base leading-relaxed text-[#334155]">
          India is a country of flavours, and Minta Restro wants to celebrate
          every delicious part of that diversity.
        </p>
      </div>

      {/* 6-Card Authentic Food Culture Grid */}
      <div className="relative z-10 mx-auto mt-8 sm:mt-10 lg:mt-12 max-w-6xl xl:max-w-[1220px] 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 2xl:gap-8">
          {foodCultureCards.map((dish) => {
            const waveGradId = `cultureWave-${uid}-${dish.id}`;
            return (
              <button
                key={dish.id}
                type="button"
                onClick={() => setSelectedDish(dish)}
                aria-label={`Explore ${
                  dish.titleTop ? `${dish.titleTop} ` : ""
                }${dish.titleMain}`}
                className="group relative flex h-[320px] sm:h-[335px] lg:h-[345px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[#e5d8bd]/85 bg-[#1b1510] text-left shadow-[0_14px_34px_rgba(9,32,68,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(9,32,68,0.2)] cursor-pointer"
              >
                {/* Upper Culinary Photography */}
                <div className="absolute inset-x-0 top-0 h-[76%] overflow-hidden">
                  <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px"
                      className="object-cover"
                      style={{
                        objectPosition: dish.objectPosition,
                        transform: dish.imgScale
                          ? `scale(${dish.imgScale})`
                          : undefined,
                        transformOrigin: dish.transformOrigin ?? "50% 60%",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(12,10,8,0.06) 0%, rgba(12,10,8,0) 48%, rgba(12,10,8,0.34) 100%)",
                    }}
                  />
                </div>

                {/* Bottom Colored Curved Wave Backdrop */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 176"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px] sm:h-[176px] w-full"
                >
                  <defs>
                    <linearGradient
                      id={waveGradId}
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor={dish.waveStart} />
                      <stop offset="100%" stopColor={dish.waveEnd} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 28 C 90 -4, 215 44, 400 10 L 400 176 L 0 176 Z"
                    fill={`url(#${waveGradId})`}
                  />
                </svg>

                {/* Bottom Card Typography & Circular Gold Arrow */}
                <div className="relative z-10 flex items-end justify-between gap-3 px-5 pb-5 pt-6">
                  <div className="min-w-0">
                    <h3 className="text-[18px] sm:text-[19.5px] font-extrabold leading-[1.18] tracking-tight text-white">
                      {dish.titleTop && (
                        <>
                          <span>{dish.titleTop}</span>
                          <br />
                        </>
                      )}
                      <span>{dish.titleMain}</span>
                    </h3>
                    <p className="mt-1.5 line-clamp-3 text-[12px] sm:text-[12.5px] leading-[1.45] text-white/90">
                      {dish.shortDesc}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, #fae39c 0%, #e7ba5a 58%, #cb9022 100%)",
                    }}
                    className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f5d57c]/80 text-[#092248] shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                  >
                    <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Culinary Story Detail Modal When Card Is Clicked */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 sm:p-5 backdrop-blur-sm"
          onClick={() => setSelectedDish(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="food-culture-dish-title"
        >
          <div
            className="relative max-h-[92vh] w-[95vw] sm:w-full max-w-xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#e2ecf7] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-80 md:h-[360px] w-full overflow-hidden">
              <Image
                src={selectedDish.image}
                alt={selectedDish.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
                style={{
                  objectPosition: selectedDish.modalPosition ?? "50% 58%",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,34,72,0.12) 0%, rgba(9,34,72,0.68) 100%)",
                }}
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                aria-label="Close Dish Story"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-[#092248] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5">
                <span className="inline-block rounded-full border border-[#d5a849]/75 bg-[#092248]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3cf7a]">
                  {selectedDish.regionTag}
                </span>
                <h4
                  id="food-culture-dish-title"
                  className="mt-2 font-editorial-serif text-2xl sm:text-[28px] font-bold text-white"
                >
                  {selectedDish.modalTitle ??
                    `${selectedDish.titleTop ? `${selectedDish.titleTop} ` : ""}${selectedDish.titleMain}`}
                </h4>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="space-y-3.5 text-sm sm:text-[15.5px] leading-relaxed text-[#273244]">
                {(Array.isArray(selectedDish.fullStory)
                  ? selectedDish.fullStory
                  : [selectedDish.fullStory]
                ).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  style={{
                    background:
                      "linear-gradient(180deg, #f9e39d 0%, #e7ba5a 58%, #cf982c 100%)",
                  }}
                  className="rounded-full border border-[#c58e26]/65 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#092248] shadow-sm transition-transform duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
