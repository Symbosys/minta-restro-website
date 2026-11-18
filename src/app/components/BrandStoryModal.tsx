"use client";

import React, { useEffect } from "react";
import { X, Sparkles, Heart, UtensilsCrossed } from "lucide-react";

export const differenceRows = [
  {
    culture: "Local food specialities",
    approach: "Discover regional dishes",
  },
  {
    culture: "Independent vendors",
    approach: "Empower local food businesses",
  },
  {
    culture: "Family and traditional recipes",
    approach: "Celebrate culinary identity",
  },
  {
    culture: "Limited local visibility",
    approach: "Digital customer reach",
  },
  {
    culture: "Multiple food categories",
    approach: "One food discovery platform",
  },
];

interface BrandStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandStoryModal({
  isOpen,
  onClose,
}: BrandStoryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 sm:p-5 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-story-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#e2ecf7] bg-white p-4 sm:p-7 lg:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Badge & Close Button */}
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#fdf5e6] px-2.5 sm:px-3 py-1 border border-[#f3cf7a]">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#a8731b]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#a8731b]">
              The Taste of Tradition
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Brand Story"
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#dfd2b6] bg-white text-[#092248] shadow-sm transition-colors hover:bg-[#092248] hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Title */}
        <h3
          id="brand-story-title"
          className="mt-2.5 sm:mt-3 font-editorial-serif text-[19px] xs:text-[21px] sm:text-2xl lg:text-3xl font-extrabold text-[#092248] leading-snug sm:leading-tight text-left"
        >
          Our Brand Story – A Journey of Authentic Taste, Tradition &amp;{" "}
          <span className="text-[#a8731b]">Togetherness</span>
        </h3>

        {/* Narrative Content */}
        <div className="mt-3.5 sm:mt-5 space-y-3 sm:space-y-4 text-[12.5px] sm:text-[14.5px] leading-relaxed text-[#273244] text-justify">
          <p>
            Food is more than just something we eat. It is an emotion, a memory,
            a celebration and an important part of who we are.
          </p>

          <p>
            Every city, every region and every community in India has its own
            unique food identity. From the rich aroma of traditional Biryani to
            the comforting taste of Meat Rice, from flavourful Chicken Rice and
            Fish Rice to the simplicity of Egg Rice and the timeless flavours of
            South Indian cuisine, Indian food culture is incredibly diverse.
          </p>

          <p>
            Behind every authentic dish, there is a story: traditional recipes
            passed down through generations, carefully selected ingredients,
            local cooking techniques and people who have dedicated their lives
            to preparing food with passion.
          </p>

          <p>
            Yet, in today's fast-moving world, discovering truly authentic local
            food is not always easy. Many traditional food makers, small
            restaurants and independent vendors prepare exceptional food every
            day, but their reach often remains limited to their neighbourhoods.
          </p>

          <p>
            At the same time, customers are searching for more than just another
            meal. They want authentic taste, familiar flavours, quality food and
            the comfort of eating something that feels real.
          </p>

          {/* Golden Callout Box */}
          <div
            style={{
              background:
                "linear-gradient(90deg, #fdfaf3 0%, #fff4d6 50%, #fdfaf3 100%)",
            }}
            className="rounded-xl border border-[#dfbe74] p-4 text-center shadow-sm"
          >
            <p className="font-editorial-serif text-base sm:text-[17px] font-bold tracking-wide text-[#092248]">
              This is where <span className="text-[#a8731b]">Minta Restro</span>{" "}
              begins its journey.
            </p>
          </div>

          <div className="rounded-xl bg-[#f8fafc] border border-slate-200/80 p-4 text-center">
            <p className="font-editorial-serif text-base font-bold text-[#092248]">
              Every Dish Has a Story.{" "}
              <span className="text-[#a8731b] block sm:inline mt-1 sm:mt-0">
                Discover. Taste. Celebrate.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
