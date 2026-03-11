"use client";

import {
  CheckCircle2,
  Headphones,
  Truck,
  Users
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React, { useEffect } from 'react';
import Footer from '../Footer';

const PartnerPage = () => {
  useEffect(() => {
    document.title = "Partner with Minta Restro | Grow Your Business";
  }, []);

  return (
    <>
      <Head>
        <title>Partner with Minta Restro | Grow Your Business</title>
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

      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-mintaBlue selection:text-white">

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
                <Link href="/about-us" className="text-white font-sans text-[14px] font-bold tracking-[0.2em] uppercase hover:text-mintaBlue transition-colors relative group">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-mintaBlue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="https://vendor.mintafresh.com/" className="text-white font-sans text-[14px] font-bold tracking-[0.2em] uppercase hover:text-mintaBlue transition-colors relative group">
                    Owner Panel
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-mintaBlue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <button className="border border-white/30 px-6 py-2.5 rounded-full text-white font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-mintaBlue hover:text-white hover:border-mintaBlue transition-all">
                    Download App
                </button>
            </div>
        </header>

        {/* --- HERO SECTION --- */}
        <section 
            className="relative pt-36 pb-20 px-6 text-center overflow-hidden"
            style={{ backgroundImage: "url('/logo/dining.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-[#0b0e11]/80 z-0"></div>

          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-mintaBlue/10 to-transparent pointer-events-none z-0" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.1] tracking-tight">
              Partner with <span className="text-mintaBlue">Minta Restro</span> <br /> 
              <span className="text-mintaBlue font-light italic">and grow your</span> business
            </h1>
            
            {/* Promo Badge */}
            <div className="inline-flex flex-col items-center mb-10">
              <div className="bg-[#fcd34d] text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg mb-2">
                <span className="text-lg">💰</span> 0% commission for 1st month!
              </div>
              <p className="text-gray-400 text-sm">Only valid for new partners in your city</p>
            </div>

            <div className="flex justify-center">
              <button className="bg-mintaBlue hover:bg-mintaPurple text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-xl hover:shadow-mintaBlue/20 transform hover:-translate-y-1 flex items-center gap-2 group">
                Register your shop
                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </section>

        {/* --- GET STARTED / DOCUMENTS SECTION --- */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Get started: It only takes 10 minutes</h2>
                <p className="text-gray-500 mb-8 font-medium">Please keep these documents and details ready for a smooth sign-up</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                  <DocumentItem label="PAN card" />
                  <DocumentItem label="GST number, if applicable" />
                  <DocumentItem label="FSSAI license" subtext="Don't have a FSSAI license? Apply here." isLink />
                  <DocumentItem label="Menu and product images" subtext="What is product image? Refer here." isLink />
                  <DocumentItem label="Bank account details" />
                </div>
              </div>

              {/* Video Card */}
              {/* <div className="w-full md:w-72 flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-300 group cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="relative mb-4">
                  <PlayCircle className="w-16 h-16 text-red-500 fill-red-50" />
                  <div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform"></div>
                </div>
                <p className="text-center font-bold text-gray-700 text-sm">How to register your <br /> shop on Minta Restro</p>
              </div> */}

            </div>
          </div>
        </section>

        {/* --- WHY PARTNER SECTION --- */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-16 relative inline-block uppercase">
              Why should you partner with Minta Restro?
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-mintaBlue rounded-full"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<Users className="w-10 h-10 text-mintaBlue" />}
                title="Attract new customers"
                description="Reach thousands of people ordering on Minta Restro every day in your area."
              />
              <FeatureCard 
                icon={<Truck className="w-10 h-10 text-mintaBlue" />}
                title="Doorstep delivery convenience"
                description="Easily get your orders delivered through our trained delivery partners."
              />
              <FeatureCard 
                icon={<Headphones className="w-10 h-10 text-mintaBlue" />}
                title="Onboarding support"
                description="For any support, email us at support@mintarestro.com"
              />
            </div>
          </div>
        </section>

        {/* --- READY TO GET STARTED --- */}
        <section className="py-16 bg-gray-50 text-center border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-8">Ready to get started?</h3>
        <button className="bg-mintaBlue text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-mintaPurple transition-all shadow-xl hover:shadow-mintaBlue/20 transform hover:-translate-y-1 flex items-center gap-2 mx-auto group">
          Register your shop
          <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
        </button>
        </section>

        <Footer />
      </div>
    </>
  );
};

// Sub-components for cleaner code
const DocumentItem = ({ label, subtext, isLink }: { label: string, subtext?: string, isLink?: boolean }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
    <div>
      <p className="font-semibold text-gray-800">{label}</p>
      {subtext && (
        <p className={`text-xs mt-0.5 ${isLink ? 'text-blue-600 underline cursor-pointer' : 'text-gray-400'}`}>
          {subtext}
        </p>
      )}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center p-6 transition-transform hover:-translate-y-2">
    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-gray-500 leading-relaxed max-w-xs">{description}</p>
  </div>
);

export default PartnerPage;
