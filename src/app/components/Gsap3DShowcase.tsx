"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { showcaseProducts } from "../showcaseData";

export default function Gsap3DShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const shadowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const stateRef = useRef({
    rotation: 0,
    isDragging: false,
    startX: 0,
    dragStartRotation: 0,
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

    let radiusX = Math.min(window.innerWidth * 0.34, 410);
    let radiusZ = Math.min(window.innerWidth * 0.17, 210);

    const handleResize = () => {
      radiusX = Math.min(window.innerWidth * 0.34, 410);
      radiusZ = Math.min(window.innerWidth * 0.17, 210);
    };
    window.addEventListener("resize", handleResize);

    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetTiltX = -normY * 15;
      targetTiltY = normX * 20;
    };

    const handleMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const onPointerDown = (clientX: number) => {
      stateRef.current.isDragging = true;
      stateRef.current.startX = clientX;
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
    };

    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX);
    const handleWindowMouseMove = (e: MouseEvent) => onPointerMove(e.clientX);
    const handleWindowMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) onPointerDown(e.touches[0].clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) onPointerMove(e.touches[0].clientX);
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
    let lastReportedIdx = -1;

    const updateTicker = (_timeSec: number, deltaTimeMs: number) => {
      const dt = Math.min(deltaTimeMs / 16.6, 2.5);
      time += 0.02 * dt;

      if (stateRef.current.isDragging) {
        // drag handled in pointer move
      } else if (Math.abs(stateRef.current.dragVelocity) > 0.0001) {
        stateRef.current.rotation += stateRef.current.dragVelocity * dt;
        stateRef.current.dragVelocity *= Math.pow(0.93, dt);
      } else if (!stateRef.current.isHovered) {
        stateRef.current.rotation += 0.01 * dt;
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

        const floatY = Math.sin(time + i * 1.5) * 10;

        const normalizedZ = (z + radiusZ) / (2 * radiusZ);
        const scale = 0.72 + normalizedZ * 0.46;

        const rotY = -sin * 28;
        const rotZ = -sin * 8 - 4;

        const opacity = 0.45 + normalizedZ * 0.55;

        const isThisHovered = stateRef.current.hoveredIndex === i;
        const finalScale = isThisHovered ? scale * 1.12 : scale;
        const finalY = isThisHovered ? floatY - 20 : floatY;

        el.style.transform = `translate3d(${x.toFixed(1)}px, ${finalY.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) rotateZ(${rotZ.toFixed(1)}deg) scale(${finalScale.toFixed(3)})`;
        el.style.zIndex = `${Math.round(z + radiusZ + (isThisHovered ? 600 : 0))}`;
        el.style.opacity = `${opacity.toFixed(2)}`;

        const shadow = shadowsRef.current[i];
        if (shadow) {
          const shadowScale =
            (0.7 + normalizedZ * 0.6) * (isThisHovered ? 1.25 : 1);
          const shadowOpacity =
            (0.15 + normalizedZ * 0.35) * (isThisHovered ? 0.65 : 1);
          shadow.style.transform = `scale(${shadowScale.toFixed(2)}, 0.45)`;
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
      className="relative w-full overflow-hidden h-[86vh] sm:h-screen min-h-[620px] flex flex-col justify-between items-center bg-[#fdf3eb] pt-24 sm:pt-28 pb-8 select-none cursor-grab active:cursor-grabbing [perspective:1400px]"
    >
      {/* Top Brand Logo */}
      <div className="relative z-20 flex flex-col items-center justify-center pointer-events-auto">
        <a
          href="#top"
          className="group flex flex-col items-center gap-1.5 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative p-1 rounded-2xl bg-white/70 backdrop-blur-md shadow-md border border-brand-border/40 transition-all duration-300 group-hover:shadow-lg group-hover:border-brand-primary/40">
            <img
              src="/logo/logo.jpeg"
              alt="Minta Restro Logo"
              className="h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 rounded-xl object-contain shadow-sm"
            />
          </div>
          <span className="font-serif text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-brand-primary transition-colors group-hover:text-brand-primary-dark">
            Minta Restro
          </span>
        </a>
      </div>

      {/* 3D Holographic Stage */}
      <div
        ref={stageRef}
        className="relative z-10 w-full max-w-5xl h-[340px] sm:h-[400px] flex items-center justify-center my-auto [transform-style:preserve-3d] transition-transform duration-75 ease-out"
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center [transform-style:preserve-3d] cursor-pointer will-change-transform"
          >
            <img
              src={prod.image}
              alt={prod.name}
              style={{
                filter:
                  "drop-shadow(0 20px 24px rgba(0,0,0,0.32)) drop-shadow(0 6px 10px rgba(0,0,0,0.18))",
              }}
              className="h-[190px] sm:h-[250px] lg:h-[310px] w-auto max-w-none object-contain select-none pointer-events-none"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            {/* Ground Contact Depth Shadow */}
            <div
              ref={(el) => {
                shadowsRef.current[idx] = el;
              }}
              className="w-[70%] h-4.5 mx-auto rounded-full bg-black/40 blur-md mt-[-16px] pointer-events-none transform will-change-transform"
            ></div>
          </div>
        ))}
      </div>

      {/* Active Dish Name & Controls Floating Pill */}
      <div className="relative z-20 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 bg-white/85 backdrop-blur-md px-5 py-2 rounded-full border border-brand-border/60 shadow-lg shadow-black/5">
          <button
            type="button"
            onClick={prevDish}
            aria-label="Previous Dish"
            className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 text-brand-text active:scale-95 transition-all"
          >
            <svg
              className="h-4 w-4"
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
          </button>

          <span className="font-serif text-sm sm:text-base font-bold text-brand-text min-w-[170px] text-center tracking-tight transition-all duration-300">
            {activeDish.name}
          </span>

          <button
            type="button"
            onClick={nextDish}
            aria-label="Next Dish"
            className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 text-brand-text active:scale-95 transition-all"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Scroll to Discover */}
        <button
          type="button"
          onClick={() => {
            document
              .getElementById("hero-overview")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 pt-1"
          aria-label="Scroll to discover"
        >
          <span className="text-[11px] font-serif font-medium uppercase tracking-[0.25em] text-brand-text-muted group-hover:text-brand-primary transition-colors">
            Scroll to discover
          </span>
          <svg
            className="h-3.5 w-3.5 text-brand-primary animate-bounce mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
