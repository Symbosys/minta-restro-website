// import Link from "next/link";

//     const Footer = () => {
//     return (
//         <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative z-10">
//         <div className="container mx-auto px-6">
            
//             {/* Top Section: Grid Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
//             {/* Brand Column */}
//             <div className="space-y-6">
//                 <div className="flex items-center gap-3">
//                     <i className="fa-solid fa-crown text-3xl text-[#fbc02d]"></i>
//                     <span className="font-serif text-2xl text-white tracking-tight">Minta Restro</span>
//                 </div>
//                 <p className="text-gray-500 text-sm leading-relaxed font-sans">
//                 Refining the art of gastronomy delivery. Experience the thermal-lock difference with Minta Restro.
//                 </p>
//             </div>
            
//             {/* Company Column */}
//             <div>
//                 <h4 className="text-white font-serif text-lg mb-6">Company</h4>
//                 <ul className="space-y-4 text-sm text-gray-500 font-sans">
//                 <li>
//                     <a href="/about" className="hover:text-[#fbc02d] transition-colors duration-300">About Us</a>
//                 </li>
//                 <li>
//                     <a href="/careers" className="hover:text-[#fbc02d] transition-colors duration-300">Careers</a>
//                 </li>
//                 <li>
//                     <a href="/press" className="hover:text-[#fbc02d] transition-colors duration-300">Press</a>
//                 </li>
//                 <li>
//                     <a href="/csr-policy" className="hover:text-[#fbc02d] transition-colors duration-300">CSR Policy</a>
//                 </li>
//                 </ul>
//             </div>

//             {/* Legal Column */}
//             <div>
//                 <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
//                 <ul className="space-y-4 text-sm text-gray-500 font-sans">
//                 <li>
//                     <Link href="/terms-and-condition" className="hover:text-[#fbc02d] transition-colors duration-300">Terms of Service</Link>
//                 </li>
//                 <li>
//                     <Link href="/privacy-policy" className="hover:text-[#fbc02d] transition-colors duration-300">Privacy Policy</Link>
//                 </li>
//                 <li>
//                     <Link href="/cancellation-policy" className="hover:text-[#fbc02d] transition-colors duration-300">Cancellation Policy</Link>
//                 </li>
//                 <li>
//                     <Link href="/terms-and-condition" className="hover:text-[#fbc02d] transition-colors duration-300">Terms And Conditions</Link>
//                 </li>
//                 </ul>
//             </div>

//             {/* Connect Column */}
//             <div>
//                 <h4 className="text-white font-serif text-lg mb-6">Connect</h4>
//                 <ul className="space-y-4 text-sm text-gray-500 font-sans">
//                     <li>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fbc02d] transition-colors duration-300">
//                             <i className="fa-brands fa-instagram"></i> Instagram
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fbc02d] transition-colors duration-300">
//                             <i className="fa-brands fa-twitter"></i> Twitter
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fbc02d] transition-colors duration-300">
//                             <i className="fa-brands fa-linkedin"></i> LinkedIn
//                         </a>
//                     </li>
//                     <li>
//                         <a href="mailto:info@mintaclub.com" className="flex items-center gap-2 hover:text-[#fbc02d] transition-colors duration-300">
//                             <i className="fa-solid fa-envelope"></i> Contact Us
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//             </div>
            
//             {/* Bottom Section: Copyright */}
//             <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
//                 <p className="text-gray-700 text-xs tracking-widest uppercase font-sans">
//                     &copy; 2026 Minta Restro. All Rights Reserved.
//                 </p>
//                 <p className="text-gray-800 text-xs mt-4 md:mt-0 font-sans">
//                     Designed for Excellence
//                 </p>
//             </div>
//         </div>
//         </footer>
//     );
//     };

//     export default Footer;


import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-10 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Main Flex Container: Image jaisa layout (Horizontal) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          
          {/* 1. Left Section: Brand & Copyright */}
          <div className="text-center lg:text-left space-y-2">
            <div className="relative inline-block">
              {/* Purple Dot Accent (Image style) */}
              <div className="absolute -top-1 left-1 w-2 h-2 bg-purple-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white tracking-wide uppercase font-sans mt-2">
                MINTA RESTRO
              </h2>
            </div>
            <p className="text-gray-500 text-sm font-sans">
              Minta Restro is a brand of Minta Club Pvt. Ltd
            </p>
            <p className="text-gray-600 text-xs font-sans">
              &copy; 2026 Minta Restro. All rights reserved.
            </p>
          </div>

          {/* 2. Center Section: Links (Horizontal List) */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-sans">
            <li>
              <Link href="/terms-and-condition" className="hover:text-[#fbc02d] transition-colors duration-300">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#fbc02d] transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/csr-policy" className="hover:text-[#fbc02d] transition-colors duration-300">
                CSR Policy
              </Link>
            </li>
            <li>
              <Link href="/cancellation-policy" className="hover:text-[#fbc02d] transition-colors duration-300">
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link href="/guideline-policy" className="hover:text-[#fbc02d] transition-colors duration-300">
                Guideline Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-[#fbc02d] transition-colors duration-300">
                Terms of Service
              </Link>
            </li>
          </ul>

          {/* 3. Right Section: Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fbc02d] text-xl transition-colors duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fbc02d] text-xl transition-colors duration-300"
            >
              {/* X Logo */}
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fbc02d] text-xl transition-colors duration-300"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;