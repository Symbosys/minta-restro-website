"use client";

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';
import Footer from '../Footer';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Minta Restro";
  }, []);

  return (
    <>
      <Head>
        <title>About Us | Minta Restro</title>
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

      <div className="min-h-screen bg-white font-sans text-gray-800">
        {/* --- NAVBAR --- */}
        <header className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 py-4 px-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-5 group relative">
                <div className="relative p-1.5 bg-transparent rounded-2xl border border-white/10 group-hover:border-mintaBlue/50 transition-all duration-500 flex items-center justify-center">
                    <img 
                        src="/logo/logo.jpeg" 
                        alt="Minta" 
                        className="h-10 w-auto object-contain brightness-125 contrast-110 rounded-lg"
                    />
                </div>
                
                <div className="flex flex-col justify-center">
                    <span className="text-white font-sans text-sm font-[900] tracking-[0.25em] uppercase leading-none mb-1 group-hover:text-mintaBlue transition-colors duration-300">
                        Minta
                    </span>
                    <span className="text-mintaBlue font-sans text-[9px] font-black tracking-[0.4em] uppercase leading-none group-hover:text-white transition-all duration-300 mt-0.5">
                        Restro
                    </span>
                </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-12">
            </nav>

            <div className="flex items-center gap-10">
                <Link href="/about-us" className="text-mintaBlue font-sans text-[14px] font-bold tracking-[0.2em] uppercase transition-colors relative group">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-mintaBlue"></span>
                </Link>
                <Link href="/partner-with-us" className="text-white font-sans text-[14px] font-bold tracking-[0.2em] uppercase hover:text-mintaBlue transition-colors relative group">
                    Partner with us
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-mintaBlue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <button className="border border-white/30 px-6 py-2.5 rounded-full text-white font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-mintaBlue hover:text-white hover:border-mintaBlue transition-all">
                    Download App
                </button>
            </div>
        </header>

        {/* Header Section with Pink Gradient Background */}
        <section className="bg-gradient-to-b from-[#FFF0F0] to-white pt-48 pb-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4">
              About Minta Restro
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Simplifying access to quality raw meat and seafood with transparency, 
              hygiene, and care.
            </p>
          </div>
        </section>

        {/* Content Card Section */}
        <section className="px-6 -mt-20 pb-20">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
              
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-8">
                Last Updated: 09/02/2020
              </p>

              <p>
                Minta Fresh is a brand operated by Minta Minta Club Private Limited, created to 
                provide a revolutionary and reliable doorstep delivery of mutton, fish, and chicken 
                and goat meat to customers.
              </p>

              <p>
                We partner with verified local meat suppliers and sort of processing units products are 
                hygienically handled manually, statically packed, carefully packed. Our platform guarantees, 
                place receive fresh meat at your preferred location.
              </p>

              <p>
                We operate an online food ordering strategy platform.
              </p>

              <p>
                Minta Fresh is a technology-enabled service that facilitates the sale of food products 
                only. The platform does not provide financial services, gaming, reward-based earnings 
                products of any kind.
              </p>

              <p>
                Payments for orders are processed securely through payment gateways. Any in-app 
                wallet, wallet updates are solely for internal order adjustments or refunds and is not 
                withdrawable in kind.
              </p>

              <p>
                Payments for orders processed through for food only. Any wallet shown is used solely for 
                internal order adjustments/refunds and is not withdrawable.
              </p>

              <p>
                Payouts to partners are blocked operational settlements and are not user-facing features.
              </p>

              <p className="pt-4">
                Our mission is to simplify access to quality raw meat and seafood while maintaining transparency, 
                hygiene, and compliance with applicable laws and platform policies.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;