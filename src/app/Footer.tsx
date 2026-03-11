import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-mintaBlue py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Footer Row: Branding | Policies | Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-15">
          
          {/* Left: Branding */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[200px]">
            <Image 
              src="/logo/tt2.jpeg" 
              alt="Minta Restro" 
              height={300}
              width={300}
              className="-ml-7"
            />
            <p className="text-white text-[14px] font-bold uppercase tracking-[0.3em]">
              A Unit of Minta Club Pvt. Ltd
            </p>
            <p className="text-white text-[12px] uppercase tracking-[0.3em] font-medium mt-1.5">
              © {currentYear} Minta Restro. All rights reserved.
            </p>
          </div>

          {/* Center: Policy Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] font-bold uppercase tracking-[0.2em] text-white lg:px-4">
            <a href="/terms-and-condition" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              Terms & Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="/privacy-policy" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="/business-complince" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              Business & Payment
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="/partner-vendor" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              Partner & Vendor
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="/csr-policy" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              CSR Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="/contact-us" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="#" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            
            <a href="/refund-policy" className="hover:text-black transition-all duration-300 whitespace-nowrap relative group">
              Refund Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-6 min-w-[150px] justify-center lg:justify-end">
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1">
              <Instagram size={22} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1">
              <Facebook size={22} fill="currentColor" stroke="none" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;