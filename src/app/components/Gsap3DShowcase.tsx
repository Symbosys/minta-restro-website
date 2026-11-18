"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, ChevronsDown } from "lucide-react";
import { showcaseProducts } from "../showcaseData";

const INITIAL_DISH_INDEX = 4; // Handi Mutton Biryani

export default function Gsap3DShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const shadowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(INITIAL_DISH_INDEX);
  const hoverProgress = useRef<number[]>(showcaseProducts.map(() => 0));

  const initialRotation =
    -(INITIAL_DISH_INDEX * ((2 * Math.PI) / showcaseProducts.length));

  const stateRef = useRef({
    rotation: initialRotation,
    isDragging: false,
    startX: 0,
    dragStartRotation: initialRotation,
    dragVelocity: 0,
    lastDragX: 0,
    isHovered: false,
    hoveredIndex: -1,
  });

  useEffect(() => {
    const stage = stageRef.current;
    const container = containerRef.current;
    if (!stage || !container) return;

    const count = showcaseProducts.length;
    const angleStep = (2 * Math.PI) / count;

    const computeRadii = () => {
      const w = window.innerWidth;
      if (w < 480) {
        return {
          rx: Math.max(90, Math.min(w * 0.32, 145)),
          rz: Math.max(44, Math.min(w * 0.14, 75)),
        };
      }
      if (w < 768) {
        return {
          rx: Math.min(w * 0.33, 235),
          rz: Math.min(w * 0.15, 115),
        };
      }
      if (w < 1024) {
        return {
          rx: Math.min(w * 0.34, 335),
          rz: Math.min(w * 0.15, 155),
        };
      }
      if (w < 1536) {
        return {
          rx: Math.min(w * 0.34, 520),
          rz: Math.min(w * 0.15, 205),
        };
      }
      return {
        rx: Math.min(w * 0.33, 620),
        rz: Math.min(w * 0.14, 240),
      };
    };

    let { rx: radiusX, rz: radiusZ } = computeRadii();

    const handleResize = () => {
      const next = computeRadii();
      radiusX = next.rx;
      radiusZ = next.rz;
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    const canHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canHover) return;
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetTiltX = -normY * 10;
      targetTiltY = normX * 14;
    };

    const handleMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let startY = 0;
    let touchAxis: "horizontal" | "vertical" | null = null;

    const onPointerDown = (clientX: number, clientY = 0) => {
      stateRef.current.isDragging = true;
      stateRef.current.startX = clientX;
      startY = clientY;
      touchAxis = null;
      stateRef.current.lastDragX = clientX;
      stateRef.current.dragStartRotation = stateRef.current.rotation;
      stateRef.current.dragVelocity = 0;
    };

    const onPointerMove = (clientX: number) => {
      if (!stateRef.current.isDragging) return;
      const dx = clientX - stateRef.current.startX;
      stateRef.current.dragVelocity =
        (clientX - stateRef.current.lastDragX) * 0.003;
      stateRef.current.lastDragX = clientX;
      stateRef.current.rotation =
        stateRef.current.dragStartRotation + dx * 0.0035;
    };

    const onPointerUp = () => {
      stateRef.current.isDragging = false;
      touchAxis = null;
    };

    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
    const handleWindowMouseMove = (e: MouseEvent) => onPointerMove(e.clientX);
    const handleWindowMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0 || !stateRef.current.isDragging) return;
      const touch = e.touches[0];
      if (!touchAxis) {
        const dx = Math.abs(touch.clientX - stateRef.current.startX);
        const dy = Math.abs(touch.clientY - startY);
        if (dx > 6 || dy > 6) {
          touchAxis = dx >= dy ? "horizontal" : "vertical";
        }
      }
      if (touchAxis === "vertical") {
        stateRef.current.isDragging = false;
        return;
      }
      if (touchAxis === "horizontal") {
        onPointerMove(touch.clientX);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    let time = 0;
    let lastReportedIdx = INITIAL_DISH_INDEX;
    let autoSpeed = 0.0028;

    const updateTicker = (_timeSec: number, deltaTimeMs: number) => {
      const dt = Math.min(deltaTimeMs / 16.6, 2.5);
      time += 0.018 * dt;

      if (stateRef.current.isDragging) {
        // drag handled in pointer move
      } else if (Math.abs(stateRef.current.dragVelocity) > 0.0001) {
        stateRef.current.rotation += stateRef.current.dragVelocity * dt;
        stateRef.current.dragVelocity *= Math.pow(0.93, dt);
        autoSpeed = 0.0028;
      } else {
        const targetSpeed = stateRef.current.isHovered ? 0 : 0.0028;
        autoSpeed += (targetSpeed - autoSpeed) * 0.08 * dt;
        stateRef.current.rotation += autoSpeed * dt;
      }

      currentTiltX += (targetTiltX - currentTiltX) * 0.08 * dt;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08 * dt;
      stage.style.transform = `rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;

      let closestIdx = 0;
      let maxCos = -999;

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const theta = stateRef.current.rotation + i * angleStep;

        const sin = Math.sin(theta);
        const cos = Math.cos(theta);

        if (cos > maxCos) {
          maxCos = cos;
          closestIdx = i;
        }

        const x = sin * radiusX;
        const z = cos * radiusZ;

        const floatY = Math.sin(time + i * 1.4) * 5;
        const orbitY = cos * 8;

        const normalizedZ = (z + radiusZ) / (2 * radiusZ);
        const scale = 0.64 + normalizedZ * 0.44;

        const rotY = -sin * 20;
        const rotZ = -sin * 3;

        const opacity = 0.24 + normalizedZ * 0.76;

        const targetHp = stateRef.current.hoveredIndex === i ? 1 : 0;
        hoverProgress.current[i] +=
          (targetHp - hoverProgress.current[i]) * 0.12 * dt;
        const hp = hoverProgress.current[i];

        const finalScale = scale * (1 + 0.09 * hp);
        const finalY = orbitY + floatY - 12 * hp;

        el.style.transform = `translate3d(${x.toFixed(1)}px, ${finalY.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) rotateZ(${rotZ.toFixed(1)}deg) scale(${finalScale.toFixed(3)})`;
        el.style.zIndex = `${Math.round(z + radiusZ + hp * 600)}`;
        el.style.opacity = `${opacity.toFixed(2)}`;

        const shadow = shadowsRef.current[i];
        if (shadow) {
          const shadowScale =
            (0.68 + normalizedZ * 0.55) * (1 + 0.15 * hp);
          const shadowOpacity =
            (0.18 + normalizedZ * 0.38) * (1 + 0.25 * hp);
          shadow.style.transform = `scale(${shadowScale.toFixed(2)}, 0.42)`;
          shadow.style.opacity = `${shadowOpacity.toFixed(2)}`;
        }
      });

      if (closestIdx !== lastReportedIdx) {
        lastReportedIdx = closestIdx;
        setActiveIndex(closestIdx);
      }
    };

    gsap.ticker.add(updateTicker);

    return () => {
      gsap.ticker.remove(updateTicker);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const rotateToDish = (index: number) => {
    const count = showcaseProducts.length;
    const angleStep = (2 * Math.PI) / count;
    const currentRot = stateRef.current.rotation;
    const currentAngle = currentRot % (2 * Math.PI);
    const targetAngle = -index * angleStep;
    let diff = (targetAngle - currentAngle) % (2 * Math.PI);
    if (diff > Math.PI) diff -= 2 * Math.PI;
    if (diff < -Math.PI) diff += 2 * Math.PI;
    const finalRot = currentRot + diff;

    gsap.to(stateRef.current, {
      rotation: finalRot,
      duration: 0.9,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const nextDish = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (activeIndex + 1) % showcaseProducts.length;
    rotateToDish(nextIdx);
  };

  const prevDish = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx =
      (activeIndex - 1 + showcaseProducts.length) % showcaseProducts.length;
    rotateToDish(prevIdx);
  };

  const activeDish = showcaseProducts[activeIndex] || showcaseProducts[0];

  return (
    <section
      ref={containerRef}
      style={{
        background:
          "radial-gradient(ellipse 95% 85% at 50% 40%, #0a5fd4 0%, #0049ad 48%, #003a8c 82%, #002d6b 100%)",
      }}
      className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[660px] md:min-h-[700px] lg:min-h-screen 2xl:min-h-[880px] 2xl:max-h-[960px] flex flex-col justify-between items-center pt-[74px] sm:pt-[86px] lg:pt-[88px] xl:pt-[92px] pb-6 sm:pb-8 lg:pb-9 select-none cursor-grab active:cursor-grabbing [perspective:1400px]"
    >
      {/* --- CLEAN STUDIO STAGE BACKDROP LAYER --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Ambient Center & Wide-Flank Blue/Warm Stage Glows */}
        <div
          style={{
            background:
              "radial-gradient(closest-side, rgba(26,115,232,0.34) 0%, rgba(26,115,232,0.12) 55%, rgba(26,115,232,0) 100%)",
          }}
          className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 h-[420px] w-[780px] sm:h-[560px] sm:w-[1180px]"
        />
        <div
          style={{
            background:
              "radial-gradient(closest-side, rgba(240,192,90,0.12) 0%, rgba(240,192,90,0.03) 55%, rgba(240,192,90,0) 100%)",
          }}
          className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[580px]"
        />

        {/* Rising Subtle Steam Wisps Behind Dishes */}
        <div className="hidden sm:block absolute left-1/2 top-[38%] -translate-x-1/2 w-[780px] h-[250px] opacity-30">
          <div
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
            }}
            className="absolute left-12 top-6 h-48 w-36 animate-pulse-glow"
          />
          <div
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)",
            }}
            className="absolute left-1/2 top-0 -translate-x-1/2 h-52 w-40 animate-pulse-glow-delayed"
          />
          <div
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
            }}
            className="absolute right-12 top-4 h-48 w-36 animate-pulse-glow"
          />
        </div>
      </div>

      {/* --- TOP CENTER HERO TYPOGRAPHY --- */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center pointer-events-auto">
        {/* Serving Cloche / Dome Ornament */}
        <div className="mb-1.5 sm:mb-2 flex items-center justify-center gap-3">
          <span
            style={{ background: "linear-gradient(90deg, transparent, rgba(232,195,110,0.85))" }}
            className="h-[1px] w-10 sm:w-16"
          />
          <svg
            className="h-5 w-7 text-[#f0cb75] drop-shadow-[0_2px_8px_rgba(240,203,117,0.45)]"
            viewBox="0 0 36 24"
            fill="currentColor"
          >
            <circle cx="18" cy="4.5" r="2" />
            <path d="M7 16.5C7 10.7 11.9 6.5 18 6.5C24.1 6.5 29 10.7 29 16.5H7Z" />
            <rect x="4" y="18" width="28" height="2.2" rx="1.1" />
          </svg>
          <span
            style={{ background: "linear-gradient(270deg, transparent, rgba(232,195,110,0.85))" }}
            className="h-[1px] w-10 sm:w-16"
          />
        </div>

        <p className="font-editorial-serif text-[10px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#ebd089]">
          The Taste of Tradition.
        </p>

        <h1 className="mt-1 sm:mt-1.5 font-editorial-serif text-[30px] sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[62px] 2xl:text-[68px] font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          Every Dish Has a{" "}
          <span className="font-script italic text-[1.18em] font-bold text-[#f3c65f] tracking-normal inline-block">
            Story.
          </span>
        </h1>

        <p className="mx-auto mt-2 sm:mt-2.5 max-w-xs sm:max-w-xl lg:max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-[#e6effc]/90">
          Discover authentic local flavours from traditional kitchens,
          <br className="hidden sm:inline" /> home chefs and neighbourhood food experts.
        </p>
      </div>

      {/* --- 3D INTERACTIVE DISH SHOWCASE STAGE + SUBTLE STAGE RING --- */}
      <div className="relative z-10 w-full max-w-[1440px] my-auto pt-3 sm:pt-6 md:pt-8 flex items-center justify-center [transform-style:preserve-3d]">
        {/* Minimal Turntable Floor Ring Beneath Dishes */}
        <div className="pointer-events-none absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 [transform:perspective(780px)_rotateX(73deg)] opacity-30">
          <svg
            className="h-[300px] w-[300px] sm:h-[580px] sm:w-[580px] md:h-[680px] md:w-[680px] lg:h-[820px] lg:w-[820px] xl:h-[900px] xl:w-[900px] text-[#7bb7ff]"
            viewBox="0 0 300 300"
            fill="none"
          >
            <circle cx="150" cy="150" r="142" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="150" cy="150" r="115" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="150" cy="150" r="78" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
          </svg>
        </div>

        <div
          ref={stageRef}
          className="relative w-full h-[185px] sm:h-[240px] md:h-[260px] lg:h-[285px] xl:h-[310px] 2xl:h-[345px] flex items-center justify-center [transform-style:preserve-3d]"
        >
          {showcaseProducts.map((prod, idx) => (
            <div
              key={prod.id}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              onClick={() => rotateToDish(idx)}
              onMouseEnter={() => {
                stateRef.current.isHovered = true;
                stateRef.current.hoveredIndex = idx;
              }}
              onMouseLeave={() => {
                stateRef.current.isHovered = false;
                stateRef.current.hoveredIndex = -1;
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center [transform-style:preserve-3d] cursor-pointer will-change-transform p-2 sm:p-4"
            >
              <img
                src={prod.image}
                alt={prod.name}
                style={{
                  filter:
                    "drop-shadow(0 20px 26px rgba(0,0,0,0.48)) drop-shadow(0 6px 12px rgba(0,0,0,0.28))",
                }}
                className="h-[135px] sm:h-[190px] md:h-[215px] lg:h-[245px] xl:h-[268px] 2xl:h-[296px] w-auto max-w-none object-contain select-none pointer-events-none"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
              <div
                ref={(el) => {
                  shadowsRef.current[idx] = el;
                }}
                className="w-[72%] h-4 mx-auto rounded-full bg-black/55 blur-md -mt-3 pointer-events-none transform will-change-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM DISH SELECTOR PILL & SCROLL DISCOVER CTA --- */}
      <div className="relative z-20 flex flex-col items-center gap-3 px-4">
        <div
          style={{
            background:
              "linear-gradient(180deg, #ffffff 0%, #f8f9fc 60%, #e7ecf5 100%)",
          }}
          className="inline-flex items-center gap-1.5 sm:gap-4 rounded-full p-1 sm:p-1.5 shadow-[0_12px_30px_rgba(2,14,34,0.55)] ring-1 ring-[#efd084]/70"
        >
          <button
            type="button"
            onClick={prevDish}
            aria-label="Previous Dish"
            className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0a2346] shadow-sm border border-gray-200/80 transition-all hover:bg-[#fdf3d7] hover:text-[#0049ad] active:scale-95"
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
          </button>

          <span className="min-w-[126px] sm:min-w-[195px] lg:min-w-[220px] max-w-[170px] sm:max-w-none truncate px-1.5 sm:px-2 text-center font-editorial-serif text-xs sm:text-sm lg:text-base font-bold tracking-tight text-[#0c2345] transition-all duration-300">
            {activeDish.name}
          </span>

          <button
            type="button"
            onClick={nextDish}
            aria-label="Next Dish"
            className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0a2346] shadow-sm border border-gray-200/80 transition-all hover:bg-[#fdf3d7] hover:text-[#0049ad] active:scale-95"
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            document
              .getElementById("hero-overview")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center gap-1 pt-0.5 cursor-pointer transition-all duration-300"
          aria-label="Scroll to discover"
        >
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 transition-colors group-hover:text-[#f3c86f]">
            Scroll to discover
          </span>
          <ChevronsDown className="h-5 w-5 text-[#f3c86f] animate-bounce" />
        </button>
      </div>
    </section>
  );
}
