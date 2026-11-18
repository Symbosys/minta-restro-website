"use client";

import Link from "next/link";
import { Menu, Search, Smartphone, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  isHomePage?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const homeLinks: NavItem[] = [
  { label: "Home", href: "#top", id: "home" },
  { label: "Our Story", href: "#story", id: "story" },
  { label: "Vision", href: "#vision", id: "vision" },
  { label: "Cuisine", href: "#food", id: "food" },
  { label: "Why Restro", href: "#experience", id: "experience" },
  { label: "Cities", href: "#cities", id: "cities" },
  { label: "Live Tracking", href: "#tracking", id: "tracking" },
  { label: "For Vendors", href: "/partner-with-us", id: "vendors" },
  { label: "Contact", href: "/contact-us", id: "contact" },
];

const quickJumpItems: { label: string; href: string; id: string }[] = [
  { label: "Home / 3D Dish Showcase", href: "#top", id: "home" },
  { label: "Our Story & Heritage", href: "#story", id: "story" },
  { label: "Our Vision (Regional Food)", href: "#vision", id: "vision" },
  { label: "Authentic Food Culture", href: "#food", id: "food" },
  { label: "All Types of Biryani", href: "#food", id: "food" },
  { label: "Meat Rice & Regional Flavours", href: "#food", id: "food" },
  { label: "South Indian Classics", href: "#food", id: "food" },
  { label: "Brand Belief", href: "#brand-belief", id: "brand-belief" },
  {
    label: "Why Restro (What Makes Us Different)",
    href: "#experience",
    id: "experience",
  },
  {
    label: "A Community of Flavours",
    href: "#community-flavours",
    id: "community-flavours",
  },
  { label: "Cities & Local Discovery", href: "#cities", id: "cities" },
  { label: "Live Order Tracking & ETA", href: "#tracking", id: "tracking" },
  { label: "Get the App", href: "#app", id: "app" },
  {
    label: "Partner Screen / For Vendors",
    href: "/partner-with-us",
    id: "vendors",
  },
  { label: "Our Promise & Commitment", href: "#promise", id: "promise" },
  { label: "The Road Ahead & Mission", href: "#road-ahead", id: "road-ahead" },
  { label: "Contact Us", href: "/contact-us", id: "contact" },
];

const Navbar = ({ isHomePage = false }: NavbarProps) => {
  const [activeNav, setActiveNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // ESC key listener to close mobile menu & search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  // Active section ScrollSpy listener
  useEffect(() => {
    if (!isHomePage) return;

    const sections: { id: string; navId: string }[] = [
      { id: "top", navId: "home" },
      { id: "story", navId: "story" },
      { id: "vision", navId: "vision" },
      { id: "food", navId: "food" },
      { id: "experience", navId: "experience" },
      { id: "cities", navId: "cities" },
      { id: "tracking", navId: "tracking" },
    ];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 130;

          // If scrolled near top
          if (window.scrollY < 200) {
            setActiveNav("home");
            ticking = false;
            return;
          }

          // Check sections in reverse order
          for (let i = sections.length - 1; i >= 0; i--) {
            const sec = sections[i];
            const el = document.getElementById(sec.id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPos >= top) {
                setActiveNav(sec.navId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Smooth scroll handler for in-page anchors
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    navId?: string,
  ) => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);

    // If it's a page route (starts with /), let Next.js route naturally
    if (href.startsWith("/")) {
      return;
    }

    // If not on home page, let Next.js navigate to /#hash
    if (!isHomePage) return;

    e.preventDefault();

    if (href === "#top" || href === "#home" || navId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveNav("home");
      window.history.pushState(null, "", "#top");
      return;
    }

    const targetId = href.startsWith("#") ? href.slice(1) : href;
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = window.innerWidth >= 640 ? 76 : 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      if (navId) {
        setActiveNav(navId);
      }
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const filteredItems = quickJumpItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <>
      <header
        style={{
          background:
            "linear-gradient(180deg, rgba(0,55,135,0.96) 0%, rgba(0,73,173,0.95) 100%)",
        }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/15 backdrop-blur-md shadow-[0_4px_20px_rgba(0,40,100,0.25)] transition-all duration-300"
      >
        <div className="mx-auto flex h-14 sm:h-[72px] max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8">
          {/* Left: Minta Restro Logo Badge */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHomePage) {
                handleScrollTo(e, "#top", "home");
              } else {
                setIsMenuOpen(false);
              }
            }}
            className="group relative flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="relative overflow-hidden rounded-lg sm:rounded-xl border-2 border-white/95 shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-colors duration-300 group-hover:border-[#f3c86f]">
              <img
                alt="Minta Restro"
                className="block h-8 sm:h-10 w-auto object-cover"
                src="/logo/brand-logo.jpg"
              />
            </div>
          </Link>

          {/* Center: Navigation Links (Desktop & Tablet Wide) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center lg:gap-2.5 xl:gap-3.5 2xl:gap-5"
          >
            {homeLinks.map((item) => {
              const isRoute = item.href.startsWith("/");
              const isActive = isHomePage && !isRoute && activeNav === item.id;

              // If it's a page route (like /partner-with-us or /contact-us)
              if (isRoute) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative whitespace-nowrap px-1.5 py-2 text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-semibold tracking-wide text-white/90 transition-colors duration-200 hover:text-[#f3c86f]"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-[2.5px] scale-x-0 rounded-full bg-[#f3c86f] opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-80" />
                  </Link>
                );
              }

              // If it's an in-page section link
              const targetHref = isHomePage ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.id}
                  href={targetHref}
                  onClick={(e) => handleScrollTo(e, item.href, item.id)}
                  className={`group relative whitespace-nowrap px-1.5 py-2 text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#f3c86f]"
                      : "text-white/90 hover:text-[#f3c86f]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2.5px] rounded-full bg-[#f3c86f] transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100 shadow-[0_0_8px_rgba(243,200,111,0.6)]"
                        : "opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Search + Get the App Gold CTA + Mobile Menu */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-3.5">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                setIsMenuOpen(false);
              }}
              aria-label="Search dishes or sections"
              className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-[#f3c86f] cursor-pointer"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            {/* Get the App CTA Button (Smoothly scrolls to #app) */}
            <a
              href={isHomePage ? "#app" : "/#app"}
              onClick={(e) => handleScrollTo(e, "#app", "app")}
              style={{
                background:
                  "linear-gradient(135deg, #c98f27 0%, #ae7516 52%, #925e0c 100%)",
              }}
              className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full border border-[#f5d88c]/50 px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12.5px] font-bold text-white shadow-[0_4px_16px_rgba(201,143,39,0.4)] transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 stroke-[2.2]" />
              <span>Get the App</span>
            </a>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsSearchOpen(false);
              }}
              className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#f0cc7b]/40 bg-[#0a3066]/90 text-white transition-all hover:border-[#f3c86f] hover:text-[#f3c86f] active:scale-95 lg:hidden cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {isSearchOpen && (
          <div className="border-t border-[#f0cc7b]/15 bg-[#041d42]/95 px-4 py-3 backdrop-blur-md">
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center gap-2 rounded-full border border-[#f0cc7b]/35 bg-[#082b5c] px-4 py-2">
                <Search className="h-4 w-4 shrink-0 text-[#f3c86f]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Jump to Story, Vision, Biryani, Cities, Tracking, Vendors..."
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-white/55 focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="text-white/70 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2 max-h-48 overflow-y-auto pt-1">
                {filteredItems.map((item) => {
                  if (item.href.startsWith("/")) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="rounded-full border border-[#f0cc7b]/25 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 transition-colors hover:border-[#f3c86f] hover:bg-[#f3c86f]/15 hover:text-[#f3c86f]"
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={item.label}
                      href={isHomePage ? item.href : `/${item.href}`}
                      onClick={(e) => handleScrollTo(e, item.href, item.id)}
                      className="rounded-full border border-[#f0cc7b]/25 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 transition-colors hover:border-[#f3c86f] hover:bg-[#f3c86f]/15 hover:text-[#f3c86f] cursor-pointer"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile & Tablet Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            style={{
              background: "linear-gradient(180deg, #06244f 0%, #031736 100%)",
            }}
            className="absolute top-[68px] sm:top-20 right-3 left-3 sm:right-6 sm:left-6 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-3xl border border-[#f0cc7b]/30 p-5 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Quick Search */}
            <div className="mb-4">
              <div className="flex items-center gap-2 rounded-full border border-[#f0cc7b]/30 bg-[#082b5c]/80 px-3.5 py-2">
                <Search className="h-4 w-4 shrink-0 text-[#f3c86f]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Jump to Biryani, Story, Cities, Tracking..."
                  className="w-full bg-transparent text-xs text-white placeholder-white/55 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="text-white/70 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              {searchQuery.trim().length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                  {filteredItems.map((item) => {
                    if (item.href.startsWith("/")) {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="rounded-full border border-[#f0cc7b]/25 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/90 hover:border-[#f3c86f] hover:text-[#f3c86f]"
                        >
                          {item.label}
                        </Link>
                      );
                    }
                    return (
                      <a
                        key={item.label}
                        href={isHomePage ? item.href : `/${item.href}`}
                        onClick={(e) => handleScrollTo(e, item.href, item.id)}
                        className="rounded-full border border-[#f0cc7b]/25 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/90 hover:border-[#f3c86f] hover:text-[#f3c86f] cursor-pointer"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1.5">
              {homeLinks.map((item) => {
                const isRoute = item.href.startsWith("/");
                const isActive =
                  isHomePage && !isRoute && activeNav === item.id;

                if (isRoute) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm sm:text-base font-semibold text-white/90 transition-colors hover:bg-white/5 hover:text-[#f3c86f]"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#f3c86f]/80">Page →</span>
                    </Link>
                  );
                }

                const targetHref = isHomePage ? item.href : `/${item.href}`;

                return (
                  <a
                    key={item.id}
                    href={targetHref}
                    onClick={(e) => handleScrollTo(e, item.href, item.id)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? "bg-white/10 text-[#f3c86f]"
                        : "text-white/90 hover:bg-white/5 hover:text-[#f3c86f]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#f3c86f] shadow-[0_0_6px_#f3c86f]" />
                    )}
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <a
                href={isHomePage ? "#app" : "/#app"}
                onClick={(e) => handleScrollTo(e, "#app", "app")}
                style={{
                  background:
                    "linear-gradient(135deg, #c98f27 0%, #ae7516 52%, #925e0c 100%)",
                }}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#f5d88c]/50 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md cursor-pointer transition-transform active:scale-95"
              >
                <Smartphone className="h-4 w-4" />
                <span>Get the App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
