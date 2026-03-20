
"use client";

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Menu, X, MoreVertical } from 'lucide-react';
import Footer from './Footer';

const MintaRestro = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
  
      if (cursorOutline) {
        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button, .nav-link');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (cursorOutline) cursorOutline.classList.add('hovered');
      });
      link.addEventListener('mouseleave', () => {
        if (cursorOutline) cursorOutline.classList.remove('hovered');
      });
    });

    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (typeof window !== 'undefined' && gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        const heroTl = gsap.timeline();
        heroTl.to(".hero-subtitle", { y: 0, duration: 1, ease: "power4.out", delay: 0.5 })
              .to(".hero-title", { y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8")
              .to(".hero-btn", { y: 0, duration: 1, ease: "power4.out" }, "-=0.8")
              .to(".hero-img", { scale: 1, opacity: 1, duration: 2 }, 0);

        gsap.from(".food-asset", {
            scrollTrigger: {
                trigger: "#features",
                start: "top 60%",
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        });

        gsap.from(".gold-benefit-item", {
            scrollTrigger: {
                trigger: "#tech",
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out"
        });

        gsap.from(".delivery-content-reveal", {
            scrollTrigger: {
                trigger: "#delivery-tech",
                start: "top 60%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from(".delivery-phone-reveal", {
            scrollTrigger: {
                trigger: "#delivery-tech",
                start: "top 60%",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });

        gsap.to(".scan-line", {
            top: "100%",
            duration: 2,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true
        });

        const logoTl = gsap.timeline();
        logoTl.from(".logo-icon-gsap", {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        })
        .from(".logo-text-top-gsap", {
            x: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(".logo-text-bottom-gsap", {
            x: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all" 
        }, "-=0.7");
      } else {
          setTimeout(initAnimations, 100);
      }
    };

    initAnimations();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Minta Restro | Premium Quality Cuts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="afterInteractive">
        {`
          tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        mintaBlue: '#0049AD',    
                        mintaGold: '#fbc02d', 
                        mintaDark: '#050505',
                        mintaGray: '#1a1a1a',
                        mintaRed: '#0049AD',
                        mintaPurple: '#003a8c',
                        blueText: '#e0f2ff',
                        goldText: '#e3c48d',
                    },
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['"Montserrat"', 'sans-serif'],
                    }
                }
            }
          }
        `}
      </Script>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />

      <style jsx global>{`
        body {
            background-color: #050505;
            color: #ffffff;
            overflow-x: hidden;
            cursor: none; 
        }
        .cursor-dot, .cursor-outline {
            position: fixed;
            top: 0; left: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            z-index: 9999;
            pointer-events: none;
        }
        .cursor-dot { width: 8px; height: 8px; background-color: #0049AD; }
        .cursor-outline { width: 40px; height: 40px; border: 1px solid rgba(0, 73, 173, 0.5); transition: width 0.2s, height 0.2s; }
        .cursor-outline.hovered { width: 80px; height: 80px; background-color: rgba(0, 73, 173, 0.1); mix-blend-mode: difference; }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #0049AD; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #003a8c; }

        .blue-gradient-text {
            background: linear-gradient(to bottom, #74b9ff 0%, #0049AD 50%, #003a8c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gold-gradient-text {
            background: linear-gradient(to bottom, #f9f295 0%, #e0aa3e 25%, #e0aa3e 50%, #b8860b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        @keyframes gold-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        .gold-shimmer-effect {
            background: linear-gradient(90deg, #b8860b 0%, #e0aa3e 25%, #f9f295 50%, #e0aa3e 75%, #b8860b 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gold-shimmer 4s linear infinite;
        }
        .scan-line-blue {
            width: 100%;
            height: 2px;
            background: #0049AD;
            box-shadow: 0 0 15px #0049AD;
            position: absolute;
            z-index: 10;
        }
        @keyframes shimmer {
            0% { transform: translateX(-150%); }
            100% { transform: translateX(150%); }
        }
        .animate-shimmer {
            position: relative;
            overflow: hidden;
        }
        .animate-shimmer::after {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: translateX(-150%);
            animation: shimmer 3s infinite;
        }
        .hero-img-enhanced {
            filter: brightness(1.5) contrast(1.2) saturate(1.4) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4));
        }
        @keyframes shine-sweep {
            0% { left: -100%; }
            20% { left: 100%; }
            100% { left: 100%; }
        }
        .hero-shine-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to right, 
                transparent 0%, 
                rgba(255, 255, 255, 0) 30%, 
                rgba(255, 255, 255, 0.5) 50%, 
                rgba(255, 255, 255, 0) 70%, 
                transparent 100%
            );
            transform: skewX(-25deg);
            animation: shine-sweep 3s infinite ease-in-out;
            z-index: 20;
            pointer-events: none;
        }
      `}</style>

      <div className="selection:bg-mintaBlue selection:text-white">
        <div className="cursor-dot hidden md:block"></div>
        <div className="cursor-outline hidden md:block"></div>

        <header className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 py-3 md:py-4 px-4 md:px-8 flex items-center justify-between transition-all duration-300">
            <a href="#hero" className="flex items-center gap-3 md:gap-5 group relative logo-trigger-gsap shrink-0">
                <div className="relative animate-shimmer logo-icon-gsap">
                    <div className="absolute -inset-1.5 bg-mintaBlue/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative p-1 bg-transparent rounded-2xl border border-white/10 group-hover:border-mintaBlue/50 transition-all duration-500 shadow-2xl flex items-center justify-center">
                        <img 
                            src="/logo/logo.jpeg" 
                            alt="Minta" 
                            className="h-8 md:h-10 w-auto object-contain brightness-125 contrast-110 rounded-lg"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col justify-center">
                    <span className="text-white font-sans text-sm md:text-base font-black tracking-[0.25em] uppercase leading-none mb-1 group-hover:text-mintaBlue transition-colors duration-300 logo-text-top-gsap">
                        Minta
                    </span>
                    <span className="text-white font-sans text-[9px] md:text-[11px] font-black tracking-[0.4em] uppercase leading-none group-hover:text-mintaBlue transition-all duration-300 logo-text-bottom-gsap mt-0.5">
                        Restro
                    </span>
                </div>
            </a>

            <nav className="hidden lg:flex items-center gap-12">
                <Link href="/about-us" className="text-white font-sans text-[14px] font-bold tracking-[0.2em] uppercase hover:text-mintaBlue transition-colors relative group">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-mintaBlue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="/partner-with-us" className="text-white font-sans text-[14px] font-bold tracking-[0.2em] uppercase hover:text-mintaBlue transition-colors relative group">
                    Partner with us
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-mintaBlue transition-all duration-300 group-hover:w-full"></span>
                </a>
            </nav>

            <div className="hidden lg:flex items-center gap-10">
                <button className="border border-white/30 px-6 py-2.5 rounded-full text-white font-sans text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-mintaBlue hover:text-white hover:border-mintaBlue transition-all">
                    Download App
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="lg:hidden text-white hover:text-mintaBlue transition-all duration-300 z-[110] p-2 bg-white/5 rounded-xl border border-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

        </header>

        {/* Sidebar Overlay/Backdrop */}
        <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[100] lg:hidden transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* SIDEBAR SIDE */}
        <div className={`fixed top-0 right-0 w-[80%] sm:w-[350px] h-full bg-black z-[110] lg:hidden transition-transform duration-500 ease-in-out border-l border-white/10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full overflow-y-auto">
                {/* Header in Sidebar */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <img src="/logo/logo.jpeg" alt="Logo" className="h-8 w-auto rounded-lg" />
                        <span className="text-white font-sans text-xl font-black tracking-widest uppercase">Minta</span>
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/10"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="px-8 py-10 flex flex-col gap-8">
                    <a 
                        href="#hero" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white font-sans text-2xl font-bold tracking-tight hover:text-mintaBlue transition-all"
                    >
                        Home
                    </a>
                    <Link 
                        href="/about-us" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white font-sans text-2xl font-bold tracking-tight hover:text-mintaBlue transition-all"
                    >
                        About Us
                    </Link>
                    <a 
                        href="/partner-with-us" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white font-sans text-2xl font-bold tracking-tight hover:text-mintaBlue transition-all"
                    >
                        Partner With Us
                    </a>
                </nav>

                {/* Bottom CTA */}
                <div className="mt-auto p-8 space-y-8 bg-white/5 border-t border-white/10">
                    <button 
                        className="w-full bg-mintaBlue text-white py-4 rounded-xl font-sans font-black tracking-widest uppercase text-xs hover:bg-black hover:text-mintaBlue border hover:border-mintaBlue transition-all shadow-lg shadow-mintaBlue/20"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Download App
                    </button>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex justify-center gap-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-mintaBlue hover:text-white hover:border-mintaBlue transition-all">
                                <i className="fa-brands fa-facebook-f text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-mintaBlue hover:text-white hover:border-mintaBlue transition-all">
                                <i className="fa-brands fa-instagram text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-mintaBlue hover:text-white hover:border-mintaBlue transition-all">
                                <i className="fa-brands fa-twitter text-sm"></i>
                            </a>
                        </div>
                        <p className="text-white/30 font-sans text-[10px] font-medium tracking-[0.2em] uppercase">
                            © 2024 Minta Restro
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10 pt-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="hero-shine-overlay z-20"></div>
                <img 
                    src="/logo/tt.png" 
                    alt="Hero Background" 
                    className="w-full h-full object-cover scale-110 hero-img hero-img-enhanced" 
                />
            </div>
        </section>

        <section id="features" className="relative py-24 md:py-40 bg-white overflow-hidden min-h-[600px] md:min-h-[800px] flex items-center justify-center">
            <div className="container mx-auto px-6 relative z-10">
                <div className="absolute left-[2%] top-[10%] md:top-[20%] food-asset opacity-40 md:opacity-100 scale-75 md:scale-100">
                    <img src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png" alt="Burger" className="w-24 md:w-40 lg:w-48 drop-shadow-2xl -rotate-12" />
                </div>
                <div className="absolute right-[0%] bottom-[2%] md:bottom-[5%] food-asset opacity-40 md:opacity-100 scale-75 md:scale-100">
                    <img src="https://pngimg.com/uploads/pizza/pizza_PNG44090.png" alt="Pizza" className="w-32 md:w-48 lg:w-56 drop-shadow-2xl -rotate-6" />
                </div>
                <div className="text-center max-w-5xl mx-auto relative z-20">
                    <h2 className="font-serif text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl text-gray-900 mb-8 md:mb-10 leading-[1.1] tracking-tight">
                        Delicious <span className="text-mintaBlue">Food</span> <br /> 
                        <span className="text-mintaBlue font-light italic">from</span> Multiple Restaurants
                    </h2>
                    <p className="text-gray-500 font-sans text-base md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep.
                    </p>
                </div>
            </div>
        </section>

        <section id="tech" className="relative py-32 bg-black overflow-hidden flex flex-col items-center">
            {/* Background Glow Spots for 'Shining' effect */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mintaGold/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mintaBlue/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 text-center z-10">
                <div className="flex flex-col items-center mb-10 md:mb-16">
                    <h2 className="gold-shimmer-effect font-serif text-[2.5rem] sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1] px-4">
                        Experience the free delivery and more
                    </h2>
                    <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-mintaGold to-transparent mt-4 opacity-50"></div>
                    
                    <p className="text-white/60 font-sans text-xs md:text-lg tracking-[0.2em] font-medium uppercase italic mt-6 md:mt-10 px-6">
                        India's Top Savings Program <br className="hidden md:block" /> for Food Lovers
                    </p>

                    <div className="flex items-center justify-center gap-4 md:gap-6 mt-10 md:mt-16 mb-6 md:mb-8">
                        <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-mintaGold/40"></div>
                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="text-mintaGold text-xs md:text-sm animate-pulse">★</span>
                            <h3 className="text-white font-sans text-[10px] md:text-sm font-black tracking-[0.3em] md:tracking-[0.5em] uppercase">
                                Download the app
                            </h3>
                            <span className="text-mintaGold text-xs md:text-sm animate-pulse">★</span>
                        </div>
                        <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-mintaGold/40"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto px-4">
                    <div className="gold-benefit-item flex items-center gap-4 md:gap-6 text-left group">
                        <div className="w-16 md:w-20 h-16 md:h-20 bg-mintaGray rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-mintaGold/50 transition-all p-3 shrink-0">
                            <img src="/logo/eee.avif" alt="Free Delivery" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <p className="text-mintaGold font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Free Delivery</p>
                            <h4 className="text-white font-sans font-bold text-lg md:text-xl mb-1">Free Delivery</h4>
                            <p className="text-goldText opacity-80 text-xs md:text-sm">At all restaurants within 7 km</p>
                        </div>
                    </div>
                    <div className="gold-benefit-item flex items-center gap-4 md:gap-6 text-left group">
                        <div className="w-16 md:w-20 h-16 md:h-20 bg-mintaGray rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-mintaGold/50 transition-all p-3 shrink-0">
                            <img src="/logo/dd.avif" alt="Extra Off" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <p className="text-mintaGold font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Extra Off</p>
                            <h4 className="text-white font-sans font-bold text-lg md:text-xl mb-1">Extra Off</h4>
                            <p className="text-white font-sans font-medium text-xs md:text-sm mb-0.5">Up to 30% extra off</p>
                            <p className="text-goldText opacity-80 text-xs md:text-sm">At 5,000+ partner restaurants</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="delivery-tech" className="relative py-40 bg-[#fafafa] overflow-hidden">
            {/* Decorative background glass element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mintaBlue/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
                    
                    {/* Left: Content Side */}
                    <div className="w-full lg:w-[450px] flex flex-col items-center lg:items-start text-center lg:text-left px-4">
                        <div className="delivery-content-reveal">
                            <h2 className="text-gray-900 font-serif text-[2.5rem] md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8">
                                Deliver Food <br className="hidden md:block" />
                                <span className="blue-gradient-text italic font-normal">from Multiple</span> <br />
                                Restaurants.
                            </h2>
                            <div className="w-16 md:w-20 h-1.5 bg-mintaBlue rounded-full mb-8 md:mb-12 mx-auto lg:mx-0"></div>
                        </div>

                        {/* Install Section */}
                        <div className="delivery-content-reveal flex flex-col items-center lg:items-start gap-6 w-full">
                            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02] duration-500 w-full sm:w-auto">
                                <div className="p-3 bg-gray-50 rounded-2xl shrink-0">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=MintaRestro" alt="QR" className="w-20 h-20 md:w-24 md:h-24 opacity-90 mx-auto" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-mintaBlue font-sans font-black uppercase text-[10px] tracking-[0.3em] mb-4">Available on</p>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-5 text-gray-900">
                                        <div className="group flex items-center gap-2 cursor-pointer">
                                            <i className="fa-brands fa-google-play text-xl group-hover:text-mintaBlue transition-colors"></i>
                                            <span className="text-[11px] font-bold font-sans uppercase tracking-wider">Play Store</span>
                                        </div>
                                        <div className="group flex items-center gap-2 cursor-pointer">
                                            <i className="fa-brands fa-apple text-2xl group-hover:text-mintaBlue transition-colors"></i>
                                            <span className="text-[11px] font-bold font-sans uppercase tracking-wider">App Store</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Phone Mockup Side */}
                    <div className="w-full lg:w-auto flex justify-center delivery-phone-reveal relative px-4 lg:px-0 group/phone scale-90 sm:scale-[1.05]">
                        {/* Soft atmospheric backlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-mintaBlue/20 blur-[120px] rounded-full opacity-60 pointer-events-none"></div>
                        
                        {/* Device Wrapper for Side Buttons */}
                        <div className="relative">
                            {/* Physical Buttons */}
                            <div className="absolute -left-[14px] top-32 w-[3px] h-10 bg-[#222] rounded-l-sm border-y border-l border-white/5"></div> {/* Volume Up */}
                            <div className="absolute -left-[14px] top-44 w-[3px] h-10 bg-[#222] rounded-l-sm border-y border-l border-white/5"></div> {/* Volume Down */}
                            <div className="absolute -right-[14px] top-36 w-[3px] h-16 bg-[#222] rounded-r-sm border-y border-r border-white/5"></div> {/* Power */}

                            {/* Main Chassis */}
                            <div className="relative w-[280px] sm:w-80 h-[580px] sm:h-[660px] bg-[#050505] rounded-[3rem] sm:rounded-[3.8rem] border-[8px] sm:border-[12px] border-[#1a1a1a] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden ring-[1px] ring-white/10 group-hover/phone:shadow-mintaBlue/10 transition-all duration-1000">
                                
                                {/* Metallic/Glass Bezel Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none z-50"></div>
                                <div className="absolute -left-1/2 -top-1/2 w-full h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[35deg] pointer-events-none z-[51] group-hover/phone:translate-x-full transition-transform duration-[1500ms] ease-in-out"></div>
                                
                                {/* Screen Interface */}
                                <div className="absolute inset-0 bg-white flex flex-col pt-2 overflow-hidden">
                                    
                                    {/* Status Bar */}
                                    <div className="flex justify-between items-center px-8 pt-4 mb-4 z-[60]">
                                        <div className="w-14">
                                            <span className="text-[12px] font-black text-gray-900 font-sans tracking-tight">9:41</span>
                                        </div>
                                        {/* Notch / Dynamic Island Style */}
                                        <div className="flex-1 flex justify-center">
                                            <div className="w-28 h-7 bg-[#050505] rounded-[1.2rem] flex items-center justify-center gap-1.5 px-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-mintaBlue/40"></div>
                                                <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="w-14 flex justify-end gap-1.5 items-center">
                                            <i className="fa-solid fa-signal text-[9px] text-gray-900"></i>
                                            <i className="fa-solid fa-wifi text-[10px] text-gray-900"></i>
                                            <div className="w-5 h-2.5 border-[1.5px] border-gray-900/30 rounded-[3px] relative flex items-center px-[1px]">
                                                <div className="h-full w-3/4 bg-gray-900 rounded-[1px]"></div>
                                                <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-900/30 rounded-r-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* App Interface Container */}
                                    <div className="flex-1 flex flex-col p-6 pt-0">
                                        {/* Minimal Header */}
                                        <div className="flex items-center justify-between mb-10">
                                            <div className="w-11 h-11 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100/50 shadow-sm transition-transform active:scale-90 cursor-pointer">
                                                <div className="flex flex-col gap-1">
                                                    <div className="w-4 h-0.5 bg-gray-900 rounded-full"></div>
                                                    <div className="w-2 h-0.5 bg-gray-900 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-[12px] font-black tracking-tight text-gray-900 font-sans uppercase">Minta Restro</span>
                                            </div>
                                            <div className="w-11 h-11 rounded-2xl p-[1px] bg-gradient-to-br from-mintaBlue to-blue-300 shadow-md">
                                                <div className="w-full h-full rounded-[15px] bg-white overflow-hidden">
                                                    <img src="/logo/logo.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Card */}
                                        <div className="relative group/card flex-1 flex flex-col items-center">
                                            <div className="relative w-full aspect-square rounded-[3.5rem] bg-[#fdfdfd] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,73,173,0.12)] mb-10 p-12 flex items-center justify-center transition-all duration-700 group-hover/phone:shadow-mintaBlue/30 overflow-hidden">
                                                {/* Card Background Patterns */}
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,73,173,0.05),transparent)]"></div>
                                                <div className="scan-line-blue opacity-10"></div>
                                                
                                                <img 
                                                    src="/logo/logo.jpeg" 
                                                    alt="Minta Logo" 
                                                    className="w-full h-full object-contain relative z-10 transition-transform duration-1000 group-hover/phone:scale-110 drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]" 
                                                />
                                            </div>

                                            {/* Text Content */}
                                            <div className="text-center space-y-4">
                                                <h5 className="text-gray-900 font-serif font-bold text-3xl leading-[1.1] tracking-tight">
                                                    Ordering Made <br /> 
                                                    <span className="text-mintaBlue">Simpler.</span>
                                                </h5>
                                            </div>
                                        </div>

                                        {/* Primary CTA */}
                                        <div className="mt-auto flex flex-col gap-4">
                                            <p className="text-gray-400 text-[13px] font-sans font-medium px-4 leading-relaxed text-center">
                                                for minta restro
                                            </p>
                                            <button className="w-full relative group/btn">
                                                <div className="absolute inset-0 bg-mintaBlue blur-xl opacity-20 group-hover/btn:opacity-40 transition-opacity"></div>
                                                <div className="relative bg-mintaBlue py-5 rounded-[1.8rem] flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-mintaBlue/30 group-hover/btn:bg-black transition-colors duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1000ms]"></div>
                                                    <span className="text-white font-black text-[10px] tracking-[0.25em] uppercase">Download App</span>
                                                    <i className="fa-solid fa-arrow-right text-[10px] text-white/60 group-hover/btn:translate-x-1 transition-transform"></i>
                                                </div>
                                            </button>
                                        </div>

                                        {/* Home Bar */}
                                        <div className="w-32 h-1.5 bg-gray-100 rounded-full mx-auto mt-6 mb-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MintaRestro;