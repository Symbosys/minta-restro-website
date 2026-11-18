"use client";

import React, { useEffect } from "react";
import { X, Eye, Compass, Target, Globe, ShieldCheck } from "lucide-react";

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VisionModal({ isOpen, onClose }: VisionModalProps) {
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
      aria-labelledby="vision-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#dbeafe] bg-white p-4 sm:p-7 lg:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Badge & Close Button */}
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#eff6ff] px-2.5 sm:px-3 py-1 border border-[#bfdbfe]">
            <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#0049ad]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#0049ad]">
              Our Vision &amp; Mission
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Vision Modal"
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[#00388d] shadow-sm transition-colors hover:bg-[#00388d] hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Title */}
        <h3
          id="vision-modal-title"
          className="mt-2.5 sm:mt-3 font-editorial-serif text-[19px] xs:text-[21px] sm:text-2xl lg:text-3xl font-extrabold text-[#002d6e] leading-snug sm:leading-tight text-left"
        >
          Our Vision – Bringing Local Food to{" "}
          <span className="text-[#0052cc]">Every Table</span>
        </h3>

        {/* Narrative Content */}
        <div className="mt-3.5 sm:mt-5 space-y-3 sm:space-y-4 text-[12.5px] sm:text-[14.5px] leading-relaxed text-[#273244] text-justify">
          <p>
            Minta Restro was created with a simple but meaningful vision: to
            bring authentic regional food and traditional local specialities
            closer to people, while creating opportunities for local food
            vendors to reach more customers.
          </p>

          <p>
            We believe that great food does not always come from big restaurant
            chains or expensive dining establishments. Sometimes, the most
            memorable Biryani comes from a small neighbourhood kitchen. The most
            satisfying Meat Rice is prepared by a local food expert. A simple
            Chicken Rice or Fish Rice can become someone's favourite meal
            because of its distinctive regional flavour.
          </p>

          <p>
            And sometimes, the perfect meal is a plate of freshly prepared dosa,
            idli, vada or another South Indian speciality.
          </p>

          <p>
            We want to celebrate these food experiences. Minta Restro connects
            customers with local food vendors who understand their cuisine,
            respect traditional cooking methods and bring their own identity to
            every dish.
          </p>

          <p>
            Our purpose is not to change the way traditional food is prepared.
            Our purpose is to make discovering and enjoying that food easier.
          </p>

          {/* Vision Callout Banner */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #003ea8 0%, #004cc7 50%, #002266 100%)",
            }}
            className="rounded-2xl p-4 sm:p-5 text-white shadow-md text-center sm:text-left"
          >
            <p className="text-xs uppercase tracking-widest text-[#f59e0b] font-bold">
              Our Mission
            </p>
            <p className="mt-1.5 text-base sm:text-lg font-bold leading-snug">
              “To connect people with authentic local and regional food by
              empowering food vendors, expanding culinary choices and making
              traditional Indian flavours accessible through a convenient
              digital platform.”
            </p>
          </div>

          <div className="rounded-xl bg-[#eff6ff] border border-[#bfdbfe] p-4 text-center">
            <p className="font-editorial-serif text-sm sm:text-base font-bold text-[#00388d]">
              To become a recognised Indian food discovery and ordering platform
              that celebrates regional cuisines, supports local food
              entrepreneurs and connects diverse food cultures across cities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
