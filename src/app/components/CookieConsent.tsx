"use client";

import { useEffect, useState } from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Preference switches
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Small delay so it slides in smoothly after initial render without blocking
    const timer = setTimeout(() => {
      try {
        const consent = localStorage.getItem("minta_restro_cookie_consent");
        if (!consent) {
          setVisible(true);
        }
      } catch {
        setVisible(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (
    status: "accepted" | "declined" | "custom",
    prefs?: CookiePreferences
  ) => {
    try {
      localStorage.setItem("minta_restro_cookie_consent", status);
      if (prefs) {
        localStorage.setItem(
          "minta_restro_cookie_preferences",
          JSON.stringify(prefs)
        );
      }
    } catch (e) {
      console.error(e);
    }
    setVisible(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    saveConsent("accepted", {
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleDecline = () => {
    saveConsent("declined", {
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent("custom", preferences);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Minta Restro cookie consent banner"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 flex justify-center sm:justify-end"
    >
      <div className="pointer-events-auto w-full max-w-md sm:max-w-lg rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-blue-200/80 shadow-[0_16px_45px_rgba(0,74,173,0.18)] ring-1 ring-blue-900/5 transition-all max-h-[85vh] overflow-y-auto">
        {!showCustomize ? (
          /* ========================================================== */
          /* MAIN BANNER VIEW                                            */
          /* ========================================================== */
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Cookie Icon Badge with Minta Restro Logo Royal Blue */}
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#004aad] shadow-xs border border-blue-200/80">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M7 13v.01" />
                <path d="M12 16v.01" />
                <path d="M16 13v.01" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-[#0c1b33]">
                  Minta Restro Privacy
                </h3>
                <span className="text-xs">🍪</span>
              </div>
              <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                At Minta Restro, we use cookies to personalize your dining & food ordering experience, analyze platform traffic, and deliver delicious food recommendations.
              </p>

              {/* Action Buttons: Accept All, Customize, Decline */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  style={{
                    background:
                      "linear-gradient(135deg, #0056cc 0%, #004aad 50%, #00368c 100%)",
                    color: "#ffffff",
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full bg-[#004aad] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,74,173,0.35)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer"
                >
                  <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                    Accept All
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full border border-blue-200 bg-[#f0f7ff] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#004aad] transition-colors hover:bg-blue-100/70 cursor-pointer"
                >
                  Customize
                </button>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================== */
          /* CUSTOMIZE COOKIE PREFERENCES VIEW                          */
          /* ========================================================== */
          <div className="space-y-3.5">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowCustomize(false)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Back to banner"
                >
                  ←
                </button>
                <h3 className="text-sm sm:text-base font-bold text-[#0c1b33]">
                  Minta Restro Preferences
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-[#004aad] bg-[#eff6ff] px-2 py-0.5 rounded-full border border-blue-200">
                Minta Restro
              </span>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-2.5 text-left">
              {/* 1. Necessary Cookies */}
              <div className="rounded-xl bg-[#f8fafc] p-3 border border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0c1b33]">
                    Strictly Necessary
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                    Always Active
                  </span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Essential for core Minta Restro functions, order tracking, and security. Cannot be disabled.
                </p>
              </div>

              {/* 2. Analytics Cookies */}
              <div className="rounded-xl bg-[#f8fafc] p-3 border border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0c1b33]">
                    Analytics & Performance
                  </span>
                  {/* Clean contained toggle switch */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                    style={{
                      width: "44px",
                      height: "24px",
                      backgroundColor: preferences.analytics
                        ? "#004aad"
                        : "#cbd5e1",
                      borderRadius: "9999px",
                      position: "relative",
                      cursor: "pointer",
                      border: "none",
                      padding: 0,
                      outline: "none",
                      flexShrink: 0,
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: preferences.analytics ? "22px" : "2px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffffff",
                        borderRadius: "9999px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                        transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        pointerEvents: "none",
                      }}
                    />
                  </button>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Helps us measure site traffic, optimize dish menus, and improve browsing speed.
                </p>
              </div>

              {/* 3. Marketing Cookies */}
              <div className="rounded-xl bg-[#f8fafc] p-3 border border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0c1b33]">
                    Marketing & Offers
                  </span>
                  {/* Clean contained toggle switch */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                    style={{
                      width: "44px",
                      height: "24px",
                      backgroundColor: preferences.marketing
                        ? "#004aad"
                        : "#cbd5e1",
                      borderRadius: "9999px",
                      position: "relative",
                      cursor: "pointer",
                      border: "none",
                      padding: 0,
                      outline: "none",
                      flexShrink: 0,
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: preferences.marketing ? "22px" : "2px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ffffff",
                        borderRadius: "9999px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                        transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        pointerEvents: "none",
                      }}
                    />
                  </button>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Used to deliver personalized dish recommendations, city discounts, and special restaurant offers.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                style={{
                  background:
                    "linear-gradient(135deg, #0056cc 0%, #004aad 50%, #00368c 100%)",
                  color: "#ffffff",
                }}
                className="rounded-full bg-[#004aad] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,74,173,0.35)] transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer"
              >
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                  Save Preferences
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export { CookieConsent };
