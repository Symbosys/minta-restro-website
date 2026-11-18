"use client";

import React, { useEffect } from "react";
import {
  X,
  Users,
  Store,
  HeartHandshake,
  ShieldCheck,
  Award,
} from "lucide-react";

interface CommunityStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommunityStoryModal({
  isOpen,
  onClose,
}: CommunityStoryModalProps) {
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
      aria-labelledby="community-story-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#dbeafe] bg-white p-4 sm:p-7 lg:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Badge & Close Button */}
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#eff6ff] px-2.5 sm:px-3 py-1 border border-[#bfdbfe]">
            <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#0049ad]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#0049ad]">
              Vendor Community Story
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Community Story"
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[#00388d] shadow-sm transition-colors hover:bg-[#00388d] hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Title */}
        <h3
          id="community-story-title"
          className="mt-2.5 sm:mt-3 font-editorial-serif text-[19px] xs:text-[21px] sm:text-2xl lg:text-3xl font-extrabold text-[#002d6e] leading-snug sm:leading-tight text-left"
        >
          The Heart of Minta Restro –{" "}
          <span className="text-[#0052cc]">Our Vendor Community</span>
        </h3>

        {/* Narrative Content */}
        <div className="mt-3.5 sm:mt-5 space-y-3 sm:space-y-4 text-[12.5px] sm:text-[14.5px] leading-relaxed text-[#273244] text-justify">
          <p>
            Behind every great meal, there is someone who makes it possible. At
            Minta Restro, we believe local food vendors are not just business
            partners. They are an essential part of India's food culture.
          </p>

          <p>
            Many local vendors have years of experience preparing traditional
            dishes. Some follow family recipes. Others have developed their own
            signature cooking styles through years of practice.
          </p>
          <p>
            Their food has built loyal customer communities, but their business
            opportunities can be limited by location, visibility and access to a
            larger customer base. We want to help bridge that gap.
          </p>
          <p>
            Through Minta Restro, local food vendors can showcase their
            specialities, connect with more customers and grow their business
            through a digital platform.
          </p>

          {/* Our 3 Community Commitments */}
          <div className="pt-2">
            <h4 className="font-editorial-serif text-lg font-bold text-[#002d6e] mb-3">
              We believe in building a relationship where:
            </h4>
            <div className="space-y-3">
              {/* Commitment 1 */}
              <div className="rounded-xl border border-slate-200/90 bg-[#f8fafc] p-4 text-left flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0049ad] shrink-0 mt-0.5">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#092248]">
                    1. Vendors bring their culinary expertise and authentic
                    food.
                  </h5>
                </div>
              </div>

              {/* Commitment 2 */}
              <div className="rounded-xl border border-slate-200/90 bg-[#f8fafc] p-4 text-left flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0049ad] shrink-0 mt-0.5">
                  <HeartHandshake className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#092248]">
                    2. Customers discover more local and regional food choices.
                  </h5>
                </div>
              </div>

              {/* Commitment 3 */}
              <div className="rounded-xl border border-slate-200/90 bg-[#f8fafc] p-4 text-left flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0049ad] shrink-0 mt-0.5">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#092248]">
                    3. Minta Restro provides the digital platform and customer
                    connection.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#eff6ff] border border-[#bfdbfe] p-4 text-center">
            <p className="font-editorial-serif text-sm sm:text-base font-bold text-[#00388d]">
              Our philosophy is simple: Local vendors deserve a bigger platform,
              and customers deserve more authentic food choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
