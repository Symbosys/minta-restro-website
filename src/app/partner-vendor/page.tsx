"use client";

import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../Navbar';
import Footer from "../Footer";

export default function PartnerTerms() {
  return (
    <>
      <Head>
        <title>Partner & Vendor Terms | Minta Restro</title>
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

    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      <Navbar />
      <div className="flex-grow pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
          
          {/* Header Section */}
          <div className="bg-slate-900 px-8 py-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute left-1/4 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[100px]"></div>
              <div className="absolute right-1/4 bottom-1/2 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500 blur-[100px]"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">Operational Agreement</p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                Partner & Restaurant Partner <span className="text-blue-500 font-black">Terms & Conditions</span>
              </h1>
              <div className="mt-8 w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="p-6 md:p-14 space-y-16 text-gray-700 leading-relaxed bg-white">
            
            {/* SECTION A */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-0.5 flex-grow bg-blue-100"></div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-b-4 border-blue-600 pb-1 uppercase tracking-tight">
                  SECTION A – RESTAURANT PARTNER TERMS
                </h2>
                <div className="h-0.5 flex-grow bg-blue-100"></div>
              </div>

              <div className="grid grid-cols-1 gap-12 ml-2 md:ml-4">
                
                {/* 1. Nature of Relationship */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">1</span>
                    1. Nature of Relationship
                  </h3>
                  <div className="space-y-3 text-lg text-slate-600">
                    <p>1.1 Minta Restro operates as a technology marketplace platform connecting customers with independent restaurant partners.</p>
                    <p>1.2 Nothing in this Agreement creates an employer-employee, agency, joint venture, or franchise relationship.</p>
                    <p>1.3 Restaurant Partner acts as an independent contractor.</p>
                  </div>
                </div>

                {/* 2. Onboarding & Eligibility */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">2</span>
                    2. Onboarding & Eligibility
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-800">Restaurant Partner represents and warrants that:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "It is legally registered under applicable laws.",
                        "It holds valid food safety licenses and permits.",
                        "It complies with local health, sanitation, and food regulations.",
                        "All information provided during onboarding is accurate."
                      ].map((item, idx) => (
                        <li key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start text-lg">
                          <span className="text-blue-600 mr-2 text-xl">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-900 font-medium italic text-base">
                      Minta Restro reserves the right to verify documentation and suspend accounts for non-compliance.
                    </p>
                  </div>
                </div>

                {/* 3. Listing & Menu Management */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">3</span>
                    3. Listing & Menu Management
                  </h3>
                  <div className="space-y-3 text-lg text-slate-600">
                    <p>3.1 The Restaurant Partner shall provide accurate menu descriptions, pricing, and images.</p>
                    <p>3.2 Prices displayed must be inclusive of applicable taxes unless otherwise required by law.</p>
                    <p>3.3 The Partner is responsible for real-time availability updates.</p>
                    <p className="text-red-600 font-bold bg-red-50 px-4 py-2 rounded-lg inline-block text-base mt-2">
                      Misrepresentation may result in penalties or suspension.
                    </p>
                  </div>
                </div>

                {/* 4. Order Fulfilment Obligations */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">4</span>
                    4. Order Fulfilment Obligations
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-800">The Restaurant Partner agrees to:</p>
                    <ul className="space-y-3">
                      {[
                        "Accept and prepare confirmed orders promptly.",
                        "Maintain quality, hygiene, and packaging standards.",
                        "Ensure accurate order handover to delivery partners."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-lg text-slate-600">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-500 italic text-sm mt-4 border-t pt-4">Minta Restro is not responsible for food preparation quality.</p>
                  </div>
                </div>

                {/* 5. Commission & Fees */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">5</span>
                    5. Commission & Fees
                  </h3>
                  <div className="space-y-4 text-lg text-slate-600">
                    <p>5.1 Minta Restro shall charge a commission on each completed order.</p>
                    <p className="font-semibold text-slate-800">5.2 Additional charges may include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Marketing fees", "Promotional campaign participation fees", "Technology or service fees"].map((item, idx) => (
                        <li key={idx} className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-900 font-bold text-base text-center">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>5.3 Commission rates shall be defined in a separate commercial agreement.</p>
                  </div>
                </div>

                {/* 6. Payments & Settlement */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">6</span>
                    6. Payments & Settlement
                  </h3>
                  <div className="space-y-4 text-lg text-slate-600">
                    <p>6.1 Minta Restro may collect payments on behalf of the Restaurant Partner.</p>
                    <p>6.2 Settlements shall be processed after deducting commissions, refunds, chargebacks, and applicable taxes.</p>
                    <p>6.3 Payment timelines shall be specified in the commercial annexure.</p>
                    <p className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800 text-base leading-relaxed">
                      All financial processing shall comply with applicable regulations and permitted payment mechanisms under Google Play policies.
                    </p>
                  </div>
                </div>

                {/* 7. Refunds & Chargebacks */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">7</span>
                    7. Refunds & Chargebacks
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-800">7.1 The Restaurant Partner agrees that refunds attributable to:</p>
                    <div className="flex flex-wrap gap-4">
                      {["Food quality issues", "Incorrect orders", "Hygiene concerns"].map((item, idx) => (
                        <span key={idx} className="bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-100 font-bold text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-slate-600">may be deducted from settlements.</p>
                    <p className="text-base text-slate-500 italic">7.2 Minta Restro reserves the right to investigate disputes.</p>
                  </div>
                </div>

                {/* 8. Marketing & Intellectual Property */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">8</span>
                    8. Marketing & Intellectual Property
                  </h3>
                  <div className="space-y-4 text-lg text-slate-600">
                    <p>8.1 Restaurant Partner grants Minta Restro a non-exclusive license to use its:</p>
                    <ul className="flex flex-wrap gap-4">
                      {["Trade name", "Logo", "Menu content", "Images"].map((item, idx) => (
                        <li key={idx} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl border border-indigo-100 font-bold text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>for promotional and marketing purposes.</p>
                    <p className="font-bold text-slate-800">8.2 The Restaurant retains ownership of its intellectual property.</p>
                  </div>
                </div>

                {/* 9. Compliance with Laws */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">9</span>
                    9. Compliance with Laws
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-800">Restaurant Partner shall comply with:</p>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["Food safety regulations", "Labor laws", "Tax obligations", "Consumer protection laws"].map((item, idx) => (
                        <li key={idx} className="text-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-red-600 font-black text-sm uppercase tracking-widest mt-4">
                      Failure to comply may result in immediate termination.
                    </p>
                  </div>
                </div>

                {/* 10. Indemnification */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">10</span>
                    10. Indemnification
                  </h3>
                  <div className="space-y-3">
                    <p className="text-lg font-medium text-slate-800">Restaurant Partner agrees to indemnify and hold Minta Restro harmless against:</p>
                    <ul className="space-y-3">
                      {[
                        "Claims arising from food contamination",
                        "Regulatory violations",
                        "Misrepresentation",
                        "Customer complaints related to food quality"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-lg text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-4"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 11. Suspension & Termination */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold mr-3">11</span>
                    11. Suspension & Termination
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-800 text-red-900">Minta Restro may suspend or terminate the partnership if:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Legal violations occur",
                        "Repeated customer complaints arise",
                        "Fraudulent activity is detected",
                        "Platform misuse occurs"
                      ].map((item, idx) => (
                        <li key={idx} className="bg-rose-50 p-4 rounded-xl border border-rose-100 flex items-center text-rose-900 font-bold text-base">
                          <span className="mr-3">⚠️</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION B */}
            <section className="bg-slate-50 -mx-6 md:-mx-14 p-6 md:p-14 border-y border-slate-200 shadow-inner">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-0.5 flex-grow bg-slate-300"></div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-b-4 border-slate-900 pb-1 uppercase tracking-tight text-center">
                  SECTION B – DELIVERY PARTNER TERMS
                </h2>
                <div className="h-0.5 flex-grow bg-slate-300"></div>
              </div>

              <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
                {/* 1. Independent Contractor Status */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter">1. Independent Contractor Status</h3>
                  <p className="text-lg mb-6">Delivery Partners are independent contractors and not employees of Minta Restro.</p>
                  <p className="font-bold mb-4 text-slate-800">They are responsible for:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "Maintaining valid driving licenses",
                      "Vehicle registration and insurance",
                      "Compliance with traffic laws"
                    ].map((item, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-xl text-center text-sm font-bold text-blue-900 border border-blue-100 flex items-center justify-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Service Obligations */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter">2. Service Obligations</h3>
                  <p className="text-lg mb-4 font-medium text-slate-800">Delivery Partners agree to:</p>
                  <ul className="space-y-3">
                    {[
                      "Accept orders responsibly",
                      "Deliver within reasonable timeframes",
                      "Maintain professionalism and safety standards",
                      "Follow delivery instructions accurately"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Compensation */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter">3. Compensation</h3>
                  <p className="text-lg mb-4 font-medium text-slate-800">Compensation may include:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {["Per-delivery fees", "Distance-based incentives", "Surge or peak-hour bonuses", "Performance-based incentives"].map((item, idx) => (
                      <div key={idx} className="bg-emerald-50 p-4 rounded-xl text-center text-xs font-black text-emerald-900 border border-emerald-100">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-lg border-t pt-4">Payment structure shall be defined in a separate compensation schedule.</p>
                </div>

                {/* 4. Conduct & Safety */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-red-200 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">4. Conduct & Safety</h3>
                  <p className="text-lg mb-4 font-medium text-slate-800 group-hover:text-red-900 transition-colors">Delivery Partners must not:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Tamper with food orders",
                      "Engage in misconduct",
                      "Operate under the influence of drugs or alcohol",
                      "Share accounts with others"
                    ].map((item, idx) => (
                      <li key={idx} className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-900 font-bold text-base flex items-center">
                        <span className="mr-3">❌</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-red-700 font-black text-sm uppercase tracking-tighter bg-red-100 px-4 py-2 rounded-lg inline-block">
                    Violation may result in immediate deactivation.
                  </p>
                </div>

                {/* 5. Insurance & Liability */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter">5. Insurance & Liability</h3>
                  <p className="text-lg mb-4 font-bold text-slate-800">Delivery Partners are responsible for:</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Personal accident coverage (if required by law)",
                      "Vehicle insurance",
                      "Compliance with applicable transport regulations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-4"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-sky-900 font-medium italic">
                    Minta Restro may offer optional insurance programs where applicable.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION C & D */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-16 h-16 text-indigo-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l7.59-7.59L20 7.5l-9 9z"/></svg>
                </div>
                <h2 className="text-xl font-black text-indigo-900 mb-6 uppercase tracking-tight">SECTION C – GOOGLE PLAY POLICY COMPLIANCE</h2>
                <ul className="space-y-4">
                  {[
                    "The Platform facilitates transactions for physical goods (food delivery), which are permitted to use external payment systems.",
                    "No prohibited digital payment redirection practices are implemented.",
                    "Partners shall not engage in practices that violate platform developer policies.",
                    "Data collected through the Platform must be handled in accordance with applicable privacy regulations."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-indigo-900 font-medium">
                      <span className="mr-3 text-indigo-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-12-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
                </div>
                <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">SECTION D – CONFIDENTIALITY</h2>
                <p className="text-slate-400 mb-4 text-sm font-medium">Both parties agree to maintain confidentiality of:</p>
                <ul className="grid grid-cols-2 gap-4">
                  {["Commercial terms", "Customer data", "Business strategies", "Technology systems"].map((item, idx) => (
                    <li key={idx} className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs font-bold text-blue-400 text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* SECTION E & F & G */}
            <div className="space-y-10">
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight border-b-2 border-slate-900 pb-2 inline-block">SECTION E – DISPUTE RESOLUTION</h2>
                <p className="text-lg text-slate-600 mb-6">Any disputes shall be resolved through:</p>
                <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { step: "1", text: "Mutual discussion" },
                    { step: "2", text: "Mediation (if applicable)" },
                    { step: "3", text: "Arbitration or jurisdiction of courts in Ranchi" }
                  ].map((item, idx) => (
                    <li key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group overflow-hidden">
                      <div className="absolute -right-2 -bottom-2 text-8xl font-black text-slate-200 opacity-50 group-hover:scale-110 transition-transform">{item.step}</div>
                      <p className="relative z-10 font-black text-slate-900 text-lg uppercase leading-tight">{item.text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl">
                  <h2 className="text-lg font-black uppercase mb-4 tracking-widest text-blue-200">SECTION F – GOVERNING LAW</h2>
                  <p className="text-xl font-medium leading-relaxed">
                    This Agreement shall be governed by the laws of <span className="underline decoration-blue-300 decoration-4">India, Jharkhand</span>.
                  </p>
                </section>

                <section className="bg-slate-100 p-8 rounded-3xl text-slate-900 shadow-inner border border-slate-200">
                  <h2 className="text-lg font-black uppercase mb-4 tracking-widest text-slate-600">SECTION G – AMENDMENTS</h2>
                  <p className="text-base text-slate-600 leading-relaxed italic font-medium">
                    Minta Restro reserves the right to amend these Terms at any time. Continued use of the Platform constitutes acceptance of revised terms.
                  </p>
                </section>
              </div>
            </div>

            {/* DECLARATION */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">DECLARATION</h2>
                <p className="text-lg md:text-xl font-medium text-slate-300 mb-10">By registering as a Restaurant Partner or Delivery Partner, you confirm that:</p>
                <div className="space-y-6 text-left">
                  {[
                    "You have read and understood these Terms.",
                    "You agree to comply with all applicable laws.",
                    "You agree to operate in accordance with platform standards and policies."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0 group-hover:scale-110 transition-transform">✓</div>
                      <p className="text-lg md:text-xl font-bold text-white leading-tight">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT INFORMATION */}
            <div className="pt-20 border-t border-slate-100 text-center">
              <div className="inline-block max-w-md w-full p-8 rounded-3xl bg-white border border-slate-200 shadow-xl group hover:shadow-2xl transition-all hover:-translate-y-1">
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">13. Contact Information</h2>
                <div className="space-y-4">
                  <p className="text-slate-500 font-medium">For inquiries regarding this agreement:</p>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <svg className="w-10 h-10 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <a href="mailto:support@mintarestro.com" className="text-2xl font-black text-blue-600 hover:text-indigo-600 transition-colors block underline decoration-2 underline-offset-4">
                      support@mintarestro.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
      <Footer />
    </div>
    </>
  );
}