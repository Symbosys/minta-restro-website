// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from './Footer';

const MintaRestro = () => {

  useEffect(() => {
    
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    // Fix: Explicitly type the event 'e' as MouseEvent
    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Dot moves instantly
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      // Outline moves with delay
      if (cursorOutline) {
        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Hover Effect on Links
    const links = document.querySelectorAll('a, button, .nav-link');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (cursorOutline) cursorOutline.classList.add('hovered');
      });
      link.addEventListener('mouseleave', () => {
        if (cursorOutline) cursorOutline.classList.remove('hovered');
      });
    });

    // --- GSAP Animations ---
    // We check if gsap is loaded via the Script tags before running
    const initAnimations = () => {
      // Fix: Cast window to 'any' to access custom properties 'gsap' and 'ScrollTrigger'
      if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        const heroTl = gsap.timeline();
        heroTl.to(".hero-subtitle", { y: 0, duration: 1, ease: "power4.out", delay: 0.5 })
              .to(".hero-title", { y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8")
              .to(".hero-btn", { y: 0, duration: 1, ease: "power4.out" }, "-=0.8")
              .to(".hero-img", { scale: 1, opacity: 0.8, duration: 2 }, 0);

        // Marquee Animation
        gsap.to(".marquee-track", {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear"
        });

        // 3D Tech Cube Rotation on Scroll
        gsap.to("#tech-cube", {
            scrollTrigger: {
                trigger: "#tech",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            },
            rotateX: 360,
            rotateY: 360,
            ease: "none"
        });

        // New Features Animation
        gsap.from(".phone-mockup", {
            scrollTrigger: {
                trigger: "#features",
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });

        gsap.from(".feature-item", {
            scrollTrigger: {
                trigger: "#features",
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // --- GYROSCOPE ANIMATION ---
        // Entrance
        gsap.from("#gyro-container", {
            scrollTrigger: {
                trigger: "#elite",
                start: "top 60%",
            },
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(1.7)"
        });

        gsap.from(".reveal-content", {
            scrollTrigger: {
                trigger: "#elite",
                start: "top 60%",
            },
            x: 50,
            opacity: 0,
            duration: 1.5,
            delay: 0.3,
            ease: "power3.out"
        });

        // Continuous Rotation for Rings
        gsap.to("#ring-1", { rotationX: 360, rotationY: 180, rotationZ: 360, duration: 20, repeat: -1, ease: "linear" });
        gsap.to("#ring-2", { rotationX: -360, rotationY: 90, rotationZ: -180, duration: 15, repeat: -1, ease: "linear" });
        gsap.to("#ring-3", { rotationX: 180, rotationY: -360, rotationZ: 90, duration: 10, repeat: -1, ease: "linear" });

        // --- DOWNLOAD SECTION ANIMATION ---
        const downloadTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#download",
                start: "top 70%",
            }
        });

        downloadTl.from(".download-content", { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
                  .from(".animated-phone-scene", { 
                        rotationY: 45, 
                        scale: 0.8, 
                        opacity: 0, 
                        duration: 1.5, 
                        ease: "back.out(1.5)" 
                    }, "-=0.5");

        // Scan line animation
        gsap.to(".scan-line", {
            top: "100%",
            duration: 2,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true
        });
        
        // Internal Phone Animation
        const phoneTl = gsap.timeline({ repeat: -1, delay: 1 });
        
        phoneTl.to(".live-progress", { width: "100%", duration: 1.5, ease: "power2.inOut" })
               .to(".delivery-card", { opacity: 1, duration: 0.5 }, 0.5)
               .to(".feature-bar-1", { backgroundColor: '#fbc02d', duration: 0.5 }, 0.5)
               .to(".feature-bar-2", { backgroundColor: '#0049AD', duration: 0.5 }, 0.5)
               .to(".feature-bar-3", { width: "90%", duration: 0.5 }, 0.5)
               .to(".delivery-card", { opacity: 0.2, duration: 0.5 }, "+=2.0")
               .to(".live-progress", { width: "0%", duration: 0 }, "+=0.2"); // Reset for repeat
      }
    };

    // A small delay to ensure scripts are fully parsed
    const timer = setTimeout(initAnimations, 100);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Minta Restro | Gastronomy Redefined</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Fix: Changed crossOrigin="true" to crossOrigin="anonymous" */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* External Scripts */}
      {/* Tailwind CSS (Using CDN as requested to preserve original method) */}
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
                    },
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['"Montserrat"', 'sans-serif'],
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    }
                }
            }
          }
        `}
      </Script>

      {/* GSAP Scripts */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js" strategy="afterInteractive" />

      {/* CSS Styles */}
      <style jsx global>{`
        body {
            background-color: #050505;
            color: #ffffff;
            overflow-x: hidden;
            cursor: none; /* Hide default cursor */
        }

        /* Custom Cursor */
        .cursor-dot,
        .cursor-outline {
            position: fixed;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            z-index: 9999;
            pointer-events: none;
        }

        .cursor-dot {
            width: 8px;
            height: 8px;
            background-color: #fbc02d;
        }

        .cursor-outline {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(251, 192, 45, 0.5);
            transition: width 0.2s, height 0.2s, background-color 0.2s;
        }
        
        body:hover .cursor-outline.hovered {
            width: 80px;
            height: 80px;
            background-color: rgba(251, 192, 45, 0.1);
            border-color: #fbc02d;
            mix-blend-mode: difference;
        }

        /* Ambient Background */
        .ambient-light {
            position: fixed;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(0, 73, 173, 0.15) 0%, rgba(0,0,0,0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            filter: blur(80px);
            animation: float 20s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(100px, 50px); }
            66% { transform: translate(-50px, 100px); }
        }

        /* Glass Components */
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-nav {
            background: rgba(5, 5, 5, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* 3D Cube Styles */
        .cube-scene {
            perspective: 1000px;
            width: 300px;
            height: 300px;
        }
        
        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
            transform: rotateX(-30deg) rotateY(-45deg);
        }

        .cube-face {
            position: absolute;
            width: 200px;
            height: 200px;
            background: rgba(0, 73, 173, 0.1); 
            border: 1px solid #fbc02d;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fbc02d;
            font-size: 3rem;
            box-shadow: 0 0 30px rgba(0, 73, 173, 0.2);
            backdrop-filter: blur(5px);
        }

        .face-front  { transform: rotateY(  0deg) translateZ(100px); }
        .face-right  { transform: rotateY( 90deg) translateZ(100px); }
        .face-back   { transform: rotateY(180deg) translateZ(100px); }
        .face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .face-top    { transform: rotateX( 90deg) translateZ(100px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(100px); background: #fbc02d; opacity: 0.1; }

        /* --- 3D GYRO ANIMATION --- */
        .perspective-2000 {
            perspective: 2000px;
        }

        .gyro-ring {
            position: absolute;
            border-radius: 50%;
            transform-style: preserve-3d;
            box-shadow: 0 0 15px rgba(251, 192, 45, 0.1);
        }

        /* Add slow pulse for one of the bars */
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>

      {/* Main Content */}
      <div className="selection:bg-mintaGold selection:text-black">

        {/* Custom Cursor */}
        <div className="cursor-dot hidden md:block"></div>
        <div className="cursor-outline hidden md:block"></div>

        {/* Ambient Backgrounds */}
        <div className="ambient-light top-[-20%] left-[-10%]"></div>
        <div className="ambient-light bottom-[-20%] right-[-10%] bg-mintaGold/5"></div>

        {/* Hero Section */}
        <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10">
            {/* Hero Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#050505] z-10"></div>
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-60 scale-110 hero-img" alt="Hero Background" />
            </div>

            <div className="relative z-20 text-center px-4 mix-blend-difference">
                <div className="overflow-hidden mb-2">
                    <p className="text-mintaGold font-sans text-xs tracking-[0.5em] uppercase hero-subtitle translate-y-full">Refined Dining Delivery</p>
                </div>
                <div className="overflow-hidden">
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white hero-title translate-y-full">
                        Minta Restro
                    </h1>
                </div>
                <div className="mt-8 overflow-hidden">
                    <button className="hero-btn border border-white/30 px-8 py-3 rounded-full text-xs font-sans tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 translate-y-[150%]">
                        Experience Excellence
                    </button>
                </div>
            </div>
        </section>

        {/* Marquee */}
        <div className="w-full py-6 bg-mintaBlue/10 border-y border-white/5 overflow-hidden relative z-10">
            <div className="flex whitespace-nowrap marquee-track">
                <span className="text-4xl md:text-6xl font-serif text-white/10 mx-8">UNCOMPROMISING TASTE</span>
                <span className="text-4xl md:text-6xl font-serif text-mintaGold/20 mx-8">♦</span>
                <span className="text-4xl md:text-6xl font-serif text-white/10 mx-8">RESTRO LOCK TECHNOLOGY</span>
                <span className="text-4xl md:text-6xl font-serif text-mintaGold/20 mx-8">♦</span>
                <span className="text-4xl md:text-6xl font-serif text-white/10 mx-8">GLOBAL SOURCING</span>
                <span className="text-4xl md:text-6xl font-serif text-mintaGold/20 mx-8">♦</span>
                <span className="text-4xl md:text-6xl font-serif text-white/10 mx-8">ELITE CONCIERGE</span>
                <span className="text-4xl md:text-6xl font-serif text-mintaGold/20 mx-8">♦</span>
                <span className="text-4xl md:text-6xl font-serif text-white/10 mx-8">UNCOMPROMISING TASTE</span>
                <span className="text-4xl md:text-6xl font-serif text-mintaGold/20 mx-8">♦</span>
            </div>
        </div>

        {/* Features Section */}
        <section id="features" className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-mintaBlue/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-mintaGold text-xs tracking-widest uppercase block mb-4">Digital Concierge</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">The Minta Experience</h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    
                    {/* Left Features */}
                    <div className="flex-1 space-y-12">
                        {/* Feature 1 */}
                        <div className="feature-item group text-right cursor-default">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-mintaGold transition-colors">Real-Time Telemetry</h3>
                            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">Monitor your dish's temperature and courier's precise location, updated every second.</p>
                            <div className="w-full h-px bg-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-mintaGold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="feature-item group text-right cursor-default">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-mintaGold transition-colors">Sommelier AI</h3>
                            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">Algorithmic wine pairing suggestions based on your palate history and current order.</p>
                            <div className="w-full h-px bg-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-mintaGold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Central Phone Mockup (Animated) */}
                    <div className="relative w-80 h-[500px] bg-black border-4 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700 phone-mockup">
                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-6 flex flex-col">
                            {/* Top Bar */}
                            <div className="flex justify-between text-xs text-gray-500 mb-8">
                                <span>9:41</span>
                                <i className="fa-solid fa-signal"></i>
                            </div>
                            {/* App Header */}
                            <div className="text-center mb-8">
                                <i className="fa-solid fa-crown text-mintaGold text-2xl mb-2"></i>
                                <p className="text-white font-serif text-lg">Order Status</p>
                            </div>
                            {/* Active Delivery Card */}
                            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 mb-4 animate-pulse">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-white uppercase tracking-widest">En Route</span>
                                </div>
                                <div className="h-1 w-full bg-gray-800 rounded-full mb-2">
                                    <div className="h-1 w-3/4 bg-mintaGold rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>Temp: 65°C</span>
                                    <span>ETA: 4 min</span>
                                </div>
                            </div>
                            {/* Bottom Menu */}
                            <div className="mt-auto flex justify-between text-2xl text-gray-600">
                                <i className="fa-solid fa-house hover:text-white transition-colors"></i>
                                <i className="fa-solid fa-magnifying-glass hover:text-white transition-colors"></i>
                                <i className="fa-solid fa-user hover:text-white transition-colors"></i>
                            </div>
                        </div>
                        {/* Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Right Features */}
                    <div className="flex-1 space-y-12">
                        {/* Feature 3 */}
                        <div className="feature-item group text-left cursor-default">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-mintaGold transition-colors">Priority Concierge</h3>
                            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">Direct 24/7 line to your lifestyle manager for custom requests and event booking.</p>
                            <div className="w-full h-px bg-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-mintaGold transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="feature-item group text-left cursor-default">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-mintaGold transition-colors">Biometric Auth</h3>
                            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">Secure delivery handoff using FaceID verification to ensure exclusivity.</p>
                            <div className="w-full h-px bg-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-mintaGold transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Split Screen Tech Section (Sticky) */}
        <section id="tech" className="relative z-10 bg-mintaDark">
            <div className="flex flex-col md:flex-row">
                {/* Left: Sticky Content (Cube) */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex items-center justify-center bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    
                    {/* 3D Cube */}
                    <div className="cube-scene">
                        <div className="cube" id="tech-cube">
                            <div className="cube-face face-front"><i className="fa-solid fa-crown"></i></div>
                            <div className="cube-face face-back"><span className="text-xs font-sans tracking-widest">MINTA</span></div>
                            <div className="cube-face face-right"><i className="fa-solid fa-temperature-low"></i></div>
                            <div className="cube-face face-left"><i className="fa-solid fa-lock"></i></div>
                            <div className="cube-face face-top"><div className="w-4 h-4 rounded-full bg-mintaGold"></div></div>
                            <div className="cube-face face-bottom"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Scrolling Text */}
                <div className="w-full md:w-1/2 min-h-screen bg-[#050505] border-l border-white/5">
                    <div className="h-[50vh] flex flex-col justify-center px-12 md:px-24 border-b border-white/5">
                        <span className="text-mintaBlue font-sans text-xs tracking-widest uppercase mb-4">01. Innovation</span>
                        <h3 className="text-4xl font-serif mb-6">Thermal-Lock Architecture</h3>
                        <p className="text-gray-400 font-sans leading-relaxed">
                            Aerospace-grade insulation ensures that temperature deviation remains less than 0.5°C per hour. Hot stays hot. Cold stays crisp.
                        </p>
                    </div>
                    <div className="h-[50vh] flex flex-col justify-center px-12 md:px-24 border-b border-white/5">
                        <span className="text-mintaBlue font-sans text-xs tracking-widest uppercase mb-4">02. Security</span>
                        <h3 className="text-4xl font-serif mb-6">Bio-Metric Seal</h3>
                        <p className="text-gray-400 font-sans leading-relaxed">
                            Each container is sealed with a digital lock that only opens via the recipient's app. Tamper-proof. Exclusive. Yours.
                        </p>
                    </div>
                    <div className="h-[50vh] flex flex-col justify-center px-12 md:px-24">
                        <span className="text-mintaBlue font-sans text-xs tracking-widest uppercase mb-4">03. Sustainability</span>
                        <h3 className="text-4xl font-serif mb-6">Perpetual Loop</h3>
                        <p className="text-gray-400 font-sans leading-relaxed">
                            Containers are collected, sterilized, and reused. Luxury that doesn't cost the earth.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* NEW ELITE MEMBERSHIP (3D Animated Core) */}
        <section id="elite" className="relative py-32 bg-[#080808] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-mintaGold/5 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 perspective-2000">
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    
                    {/* The 3D Animated Core */}
                    <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center perspective-2000 group">
                        {/* Rings */}
                        <div className="absolute inset-0 flex items-center justify-center" id="gyro-container">
                            {/* Ring 1 */}
                            <div className="gyro-ring w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-[1px] border-mintaGold/60 absolute" id="ring-1"></div>
                            {/* Ring 2 */}
                            <div className="gyro-ring w-[220px] h-[220px] md:w-[320px] md:h-[320px] border-[1px] border-mintaGold/40 absolute" id="ring-2"></div>
                            {/* Ring 3 */}
                            <div className="gyro-ring w-[160px] h-[160px] md:w-[260px] md:h-[260px] border-[2px] border-mintaBlue/80 absolute" id="ring-3"></div>
                        </div>
                        
                        {/* Center Piece */}
                        <div className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-black/50 backdrop-blur-xl border border-mintaGold flex items-center justify-center shadow-[0_0_50px_rgba(251,192,45,0.2)] group-hover:shadow-[0_0_80px_rgba(251,192,45,0.4)] transition-all duration-500">
                            <i className="fa-solid fa-crown text-5xl text-mintaGold animate-pulse"></i>
                        </div>
                    </div>

                    {/* Benefits Details */}
                    <div className="max-w-md text-left space-y-8 reveal-content">
                        <div>
                            <span className="text-mintaGold text-xs tracking-widest uppercase block mb-4">The Core</span>
                            <h2 className="text-5xl font-serif text-white mb-6">Unrivaled Privilege</h2>
                            <p className="text-gray-400 font-sans leading-relaxed">
                                Access a world where culinary desires are anticipated before they are spoken. The Minta Elite membership is not purchased; it is granted to the few who demand the absolute exceptional.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-mintaGold group-hover:bg-mintaGold group-hover:text-black transition-all duration-300">
                                    <i className="fa-solid fa-user-tie"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-xl mb-1">Dedicated Lifestyle Manager</h4>
                                    <p className="text-gray-500 text-xs">24/7 personal assistance for all dining arrangements.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-mintaGold group-hover:bg-mintaGold group-hover:text-black transition-all duration-300">
                                    <i className="fa-solid fa-calendar-check"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-xl mb-1">Priority Reservations</h4>
                                    <p className="text-gray-500 text-xs">Guaranteed tables at the world's most elusive restaurants.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-mintaGold group-hover:bg-mintaGold group-hover:text-black transition-all duration-300">
                                    <i className="fa-solid fa-plane-up"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-xl mb-1">Global Gastronomy Events</h4>
                                    <p className="text-gray-500 text-xs">Invitations to private tastings and chef collaborations.</p>
                                </div>
                            </div>
                        </div>

                        <button className="px-8 py-4 bg-white/5 border border-mintaGold/30 text-white hover:bg-mintaGold hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold w-full md:w-auto">
                            Request Application
                        </button>
                    </div>

                </div>
            </div>
        </section>

        {/* App Download Section */}
        <section id="download" className="relative py-32 bg-mintaDark overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
                
                {/* Text Content & QR Code (Left Block) */}
                <div className="text-center md:text-left max-w-lg download-content">
                    <span className="text-mintaGold text-xs tracking-widest uppercase block mb-4">Instant Access</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Command Your Culinary World</h2>
                    <p className="text-gray-400 font-sans leading-relaxed mb-8">
                        Download the Minta Restro app to unlock the full potential of your membership. Seamless ordering, real-time tracking, and direct concierge access at your fingertips.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-mintaGold transition-colors group">
                            <i className="fa-brands fa-apple text-2xl"></i>
                            <div className="text-left">
                                <span className="block text-[10px] uppercase tracking-wider">Download on the</span>
                                <span className="block font-bold text-sm">App Store</span>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 border border-white/20 text-white px-6 py-3 rounded-lg hover:border-mintaGold hover:text-mintaGold transition-colors group">
                            <i className="fa-brands fa-google-play text-xl"></i>
                            <div className="text-left">
                                <span className="block text-[10px] uppercase tracking-wider">Get it on</span>
                                <span className="block font-bold text-sm">Google Play</span>
                            </div>
                        </button>
                    </div>
                    
                    {/* QR Code Visual */}
                    <div className="relative group cursor-pointer w-64 mx-auto download-qr">
                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-mintaGold/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                        
                        <div className="relative w-64 h-64 bg-black border border-mintaGold/30 rounded-2xl p-4 flex items-center justify-center shadow-2xl overflow-hidden qr-container">
                            {/* Scan Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-mintaGold/50 shadow-[0_0_15px_rgba(251,192,45,0.8)] z-20 scan-line"></div>
                            
                            {/* QR Image */}
                            <div className="w-full h-full bg-white p-2 rounded-lg">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MintaRestroApp&color=000000&bgcolor=FFFFFF" alt="Download QR" className="w-full h-full object-contain" />
                            </div>
                            
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-mintaGold"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-mintaGold"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-mintaGold"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-mintaGold"></div>
                        </div>
                        
                        <p className="text-center text-gray-500 text-xs tracking-widest mt-6 uppercase">Scan to Download</p>
                    </div>

                </div>

                {/* Phone Simulation (Right Block) */}
                <div className="relative w-full max-w-sm h-[600px] flex items-center justify-center animated-phone-scene">
                    {/* Outer Casing */}
                    <div className="w-72 h-[560px] bg-gray-900 border-4 border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden">
                        {/* Screen */}
                        <div className="absolute inset-4 rounded-[30px] bg-gradient-to-b from-[#111] to-[#000] p-6 text-white overflow-hidden">
                            
                            {/* Screen Content */}
                            <div className="flex items-center justify-between mb-8">
                                <i className="fa-solid fa-bars text-mintaGold"></i>
                                <i className="fa-solid fa-crown text-2xl text-white"></i>
                                <i className="fa-solid fa-user-circle text-white/50"></i>
                            </div>

                            {/* Animated Dashboard */}
                            <div className="space-y-4">
                                <div className="w-full h-4 bg-mintaBlue/50 rounded-full animate-pulse-slow feature-bar-1"></div>
                                <div className="w-4/5 h-4 bg-mintaGold/50 rounded-full feature-bar-2"></div>
                                <div className="w-1/2 h-4 bg-white/20 rounded-full feature-bar-3"></div>
                                
                                {/* Delivery Status Card (Animated) */}
                                <div className="glass-panel p-4 rounded-xl mt-10 opacity-0 delivery-card">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-xs text-white uppercase tracking-widest">Live Tracking</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full mb-2">
                                        <div className="w-3/4 h-2 bg-mintaGold rounded-full live-progress"></div>
                                    </div>
                                    <p className="text-xs text-gray-400">ETA: 5 min</p>
                                </div>
                            </div>

                            {/* Footer Nav Simulation */}
                            <div className="absolute bottom-6 left-0 w-full px-6 flex justify-around text-gray-500 text-2xl">
                                <i className="fa-solid fa-house"></i>
                                <i className="fa-solid fa-map-pin text-mintaGold"></i>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* Floating Navigation (Previously Bottom) - Now moved above Footer */}
        {/* Changed 'fixed' to 'relative' and added 'my-12' for spacing */}
        <nav className="relative mx-auto my-12 w-max z-50 glass-nav px-8 py-4 rounded-full flex items-center gap-8 transition-all duration-300 hover:scale-105">
            <a href="#hero" className="nav-link text-white/70 hover:text-mintaGold transition-colors text-xs font-sans tracking-widest uppercase">Home</a>
            <a href="#features" className="nav-link text-white/70 hover:text-mintaGold transition-colors text-xs font-sans tracking-widest uppercase">App</a>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="#" className="text-mintaGold font-serif text-xl px-2"><i className="fa-solid fa-crown"></i></a>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="#tech" className="nav-link text-white/70 hover:text-mintaGold transition-colors text-xs font-sans tracking-widest uppercase">Tech</a>
            <a href="#elite" className="nav-link text-white/70 hover:text-mintaGold transition-colors text-xs font-sans tracking-widest uppercase">Elite</a>
        </nav>

        {/* Use the Footer Component here to fix the unused variable error */}
        <Footer />

      </div>
    </>
  );
};

export default MintaRestro;