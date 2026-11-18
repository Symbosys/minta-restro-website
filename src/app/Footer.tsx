import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="w-full bg-[#0049ad] py-10 lg:py-12 px-6 sm:px-10 lg:px-12 border-t border-white/10 text-white mt-auto"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-8 xl:gap-12">
        
        {/* Left: Branding & Legal Entity (Centered on mobile, left on desktop) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[220px] max-w-xs shrink-0 mx-auto lg:mx-0">
          <img
            src="/logo/brand-logo.jpg"
            alt="Minta Restro"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            A UNIT OF MINTA CLUB PVT. LTD
          </p>
          <p className="mt-1 text-[9.5px] font-medium tracking-[0.14em] uppercase text-white/80">
            &copy; {currentYear} MINTA RESTRO. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Vertical Divider 1 */}
        <div className="hidden lg:block w-[1px] h-24 bg-white/25 shrink-0 self-center" />

        {/* Middle: 2x2 Grid on Mobile (Company, Policies, Business, Follow Us), 3 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-12 grow max-w-2xl mx-auto lg:mx-0 w-full">
          
          {/* Column 1: Company */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white tracking-wide">
              Company
            </h3>
            <div className="w-6 h-[2px] bg-white mt-1.5 mb-3 rounded-full" />
            <ul className="space-y-2 text-xs text-white/85">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#promise"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Our Promise
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Policies */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white tracking-wide">
              Policies
            </h3>
            <div className="w-6 h-[2px] bg-white mt-1.5 mb-3 rounded-full" />
            <ul className="space-y-2 text-xs text-white/85">
              <li>
                <Link
                  href="/terms-and-condition"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white tracking-wide">
              Business
            </h3>
            <div className="w-6 h-[2px] bg-white mt-1.5 mb-3 rounded-full" />
            <ul className="space-y-2 text-xs text-white/85">
              <li>
                <Link
                  href="/business-complince"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Business &amp; Payment
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-vendor"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Partner &amp; Vendor
                </Link>
              </li>
              <li>
                <Link
                  href="/csr-policy"
                  className="hover:text-white hover:underline transition-colors"
                >
                  CSR Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 on Mobile (Completes 2x2 Grid): Follow Us */}
          <div className="flex flex-col lg:hidden">
            <h3 className="text-sm font-bold text-white tracking-wide">
              Follow Us
            </h3>
            <div className="w-6 h-[2px] bg-white mt-1.5 mb-3 rounded-full" />
            <div className="flex items-center gap-2 xs:gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8.5 h-8.5 xs:w-9 xs:h-9 rounded-xl border border-white/90 flex items-center justify-center text-white hover:bg-white hover:text-[#0049ad] transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8.5 h-8.5 xs:w-9 xs:h-9 rounded-xl border border-white/90 flex items-center justify-center text-white hover:bg-white hover:text-[#0049ad] transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8.5 h-8.5 xs:w-9 xs:h-9 rounded-xl border border-white/90 flex items-center justify-center text-white hover:bg-white hover:text-[#0049ad] transition-all"
              >
                <Facebook size={16} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>

        </div>

        {/* Vertical Divider 2 (Desktop only) */}
        <div className="hidden lg:block w-[1px] h-24 bg-white/25 shrink-0 self-center" />

        {/* Right: Follow Us (Desktop only) */}
        <div className="hidden lg:flex flex-col items-start shrink-0">
          <h3 className="text-sm font-bold text-white tracking-wide">
            Follow Us
          </h3>
          <div className="w-6 h-[2px] bg-white mt-1.5 mb-3 rounded-full" />
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl border border-white/90 flex items-center justify-center text-white hover:bg-white hover:text-[#0049ad] transition-all"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-xl border border-white/90 flex items-center justify-center text-white hover:bg-white hover:text-[#0049ad] transition-all"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl border border-white/90 flex items-center justify-center text-white hover:bg-white hover:text-[#0049ad] transition-all"
            >
              <Facebook size={17} fill="currentColor" stroke="none" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Sub-footer: Divider & Legal Row */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <p>
          &copy; {currentYear} Restro &mdash; Taste Beyond Ordinary
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <span className="text-white/40 select-none">&bull;</span>
          <Link
            href="/terms-and-condition"
            className="hover:text-white transition-colors"
          >
            Terms
          </Link>
          <span className="text-white/40 select-none">&bull;</span>
          <Link
            href="/contact-us"
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
