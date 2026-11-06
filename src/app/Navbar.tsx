import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-all duration-500 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-gray-200/70 bg-white/80 p-2.5 sm:p-3 shadow-md backdrop-blur-md">
        <nav className="flex items-center justify-between px-3 sm:px-5">
          <Link
            className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            href="/"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-400 to-[#0049ad] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75"></div>
              <img
                alt="Minta Restro"
                className="relative h-9 w-auto object-contain transition-all rounded-lg"
                src="/logo/brand-logo.jpg"
              />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/#app"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#0049ad] hover:bg-[#003c8f] px-5 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Download App</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

