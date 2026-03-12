// "use client";

// import React from 'react';
// import Footer from '../Footer';

// const COLORS = {
//   primary: '#0049AD',
//   accent: '#9facf8ff',
//   secondary: '#b6d2f8ff',
//   highlight: '#52b957ff',
//   background: '#fafafa',
//   white: '#ffffff',
//   textPrimary: '#222222',
//   textSecondary: '#4a4a4a',
//   muted: '#888888',
//   yelow: '#fbc02d',
//   black: '#000000',
//   RED: '#b91c1c',
//   TEXT_DARK: '#1F2937',
//   SOFT_BLUE: "#DBEAFE",
//   SOFT_RED: "#FEE2E2",
//   SOFT_GREEN: "#DCFCE7",
//   LITE_GRAY: "#9ca3af",
//   SOFT_YELLOW: "#FEF9C3",
// };

// const CSRPolicy = () => {
//   return (
//     <div style={{ backgroundColor: COLORS.background }} className="min-h-screen flex flex-col font-sans">
      
//       {/* --- HEADER --- */}
//       <nav 
//         style={{ backgroundColor: COLORS.white, borderBottom: `1px solid ${COLORS.LITE_GRAY}30` }} 
//         className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm"
//       >
//         <div className="flex items-baseline cursor-pointer">
//           <span style={{ color: COLORS.textPrimary }} className="text-2xl font-black tracking-tighter">MINTA RESTRO</span>
//           <span style={{ color: COLORS.primary }} className="text-3xl font-black leading-none">.</span>
//         </div>
//         <button 
//           style={{ 
//             borderColor: COLORS.LITE_GRAY, 
//             color: COLORS.textPrimary 
//           }}
//           className="border rounded-full px-6 py-2 text-xs font-bold tracking-widest hover:bg-gray-50 transition-colors uppercase"
//         >
//           Download App
//         </button>
//       </nav>

//       {/* --- MAIN CONTENT AREA --- */}
//       <main className="flex-grow py-10 px-4 md:px-8 flex items-center justify-center">
        
//         <div 
//           style={{ backgroundColor: COLORS.white, borderColor: COLORS.LITE_GRAY }} 
//           className="max-w-5xl w-full rounded-2xl shadow-xl overflow-hidden border border-opacity-20"
//         >
//           {/* Card Header */}
//           <div style={{ backgroundColor: COLORS.SOFT_BLUE }} className="px-8 py-10 text-center border-b border-opacity-10 border-gray-300">
//             <p style={{ color: COLORS.primary }} className="font-bold tracking-[0.2em] text-xs mb-4 uppercase">
//               Company Responsibility
//             </p>
//             <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
//               CSR Policy
//             </h1>
//             <p style={{ color: COLORS.textSecondary }} className="text-sm font-medium">
//               Corporate Social Responsibility (CSR) Framework
//             </p>
//           </div>

//           <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

//             {/* 1. Purpose & 2. Vision */}
//             <section className="space-y-6">
//               <div>
//                 <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                   1. Purpose
//                 </h2>
//                 <p style={{ color: COLORS.textSecondary }}>
//                   This Corporate Social Responsibility (CSR) Policy outlines Minta Restro's commitment to conducting business responsibly and contributing positively to society. Our CSR initiatives extend beyond commercial objectives and focus on sustainable human, environmental, and social development. We aim to integrate ethical, social, and environmental considerations into our operations, partnerships, and technology platforms.
//                 </p>
//               </div>

//               <div>
//                 <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                   2. Vision & Philosophy
//                 </h2>
//                 <p style={{ color: COLORS.textSecondary }} className="mb-4">
//                   Minta Restro believes that sustainable business success is directly linked to community well-being. As a technology-driven marketplace operating via mobile platforms such as Google Play, we recognize our responsibility to:
//                 </p>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-8 text-gray-600">
//                   <li>Promote inclusive economic growth</li>
//                   <li>Protect the environment</li>
//                   <li>Support food security</li>
//                   <li>Empower local communities</li>
//                   <li>Encourage ethical digital practices</li>
//                 </ul>
//               </div>
//             </section>

//             {/* 3. CSR Objectives - Visual Cards */}
//             <section>
//               <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
//                 3. CSR Objectives
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div style={{ backgroundColor: COLORS.SOFT_RED }} className="p-6 rounded-xl border border-red-100">
//                   <h3 className="font-bold mb-3" style={{ color: COLORS.RED }}>3.1 Hunger & Food Security</h3>
//                   <ul className="text-xs space-y-2 list-disc pl-4">
//                     <li>Partnering with NGOs to reduce food wastage</li>
//                     <li>Supporting food donation programs</li>
//                     <li>Emergency meal support</li>
//                   </ul>
//                 </div>
//                 <div style={{ backgroundColor: COLORS.SOFT_YELLOW }} className="p-6 rounded-xl border border-yellow-200">
//                   <h3 className="font-bold mb-3" style={{ color: '#854d0e' }}>3.2 Community Development</h3>
//                   <ul className="text-xs space-y-2 list-disc pl-4">
//                     <li>Supporting small/local restaurants</li>
//                     <li>Promoting women-led businesses</li>
//                     <li>Creating delivery partner opportunities</li>
//                   </ul>
//                 </div>
//                 <div style={{ backgroundColor: COLORS.SOFT_GREEN }} className="p-6 rounded-xl border border-green-200">
//                   <h3 className="font-bold mb-3" style={{ color: '#166534' }}>3.3 Environmental Sustainability</h3>
//                   <ul className="text-xs space-y-2 list-disc pl-4">
//                     <li>Encouraging eco-friendly packaging</li>
//                     <li>Reducing delivery carbon emissions</li>
//                     <li>Promoting sustainable sourcing</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* 4. Scope & 5. Digital Responsibility */}
//             <section className="space-y-8">
//               <div>
//                 <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                   4. Scope & Applicability
//                 </h2>
//                 <p style={{ color: COLORS.textSecondary }}>
//                   This policy applies to all business activities of Minta Club Private Limited (operating as Minta Restro). It encompasses our interactions with customers, restaurant partners, delivery partners, employees, and the environment.
//                 </p>
//               </div>

//               <div style={{ backgroundColor: COLORS.SOFT_BLUE }} className="p-8 rounded-xl border border-blue-100">
//                 <h2 style={{ color: COLORS.TEXT_DARK }} className="text-xl font-bold mb-4">5. Ethical Digital Responsibility</h2>
//                 <p className="text-sm mb-4">As a digital platform, we are committed to:</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
//                   <p>• Data privacy and user protection</p>
//                   <p>• Algorithmic fairness in restaurant visibility</p>
//                   <p>• Transparent fee structures</p>
//                   <p>• Digital literacy for stakeholders</p>
//                 </div>
//               </div>
//             </section>

//             {/* 8. Ethical Standards */}
//             <section>
//               <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                 8. Ethical Standards & Compliance
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-600">
//                 <ul className="list-disc pl-8 space-y-1">
//                   <li>Ethical corporate governance</li>
//                   <li>Transparency in operations</li>
//                   <li>Anti-corruption practices</li>
//                 </ul>
//                 <ul className="list-disc pl-8 space-y-1">
//                   <li>Fair labour standards</li>
//                   <li>Responsible digital marketplace behaviour</li>
//                   <li>Google Play standard alignment</li>
//                 </ul>
//               </div>
//             </section>

//             {/* 11. Final Declaration */}
//             <section style={{ backgroundColor: COLORS.TEXT_DARK }} className="p-10 rounded-2xl text-white text-center">
//               <h2 className="text-2xl font-bold mb-4">11. Declaration</h2>
//               <p className="max-w-3xl mx-auto text-gray-300 text-sm italic">
//                 &quot;Minta Restro reaffirms its commitment to sustainable development and responsible digital entrepreneurship. We recognize that long-term success is built not only on financial performance but also on meaningful contributions to society and environmental stewardship.&quot;
//               </p>
//               <div className="mt-8 pt-6 border-t border-gray-700 text-xs text-gray-400 uppercase tracking-widest">
//                 Minta Club Private Limited
//               </div>
//             </section>

//             {/* Support Info */}
//             <div className="pt-8 text-center border-t border-gray-100">
//               <p style={{ color: COLORS.muted }} className="text-xs">
//                 For inquiries regarding our social initiatives, contact: <a href="mailto:support@mintarestro.com" className="underline font-bold" style={{ color: COLORS.primary }}>support@mintarestro.com</a>
//               </p>
//             </div>

//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default CSRPolicy;



"use client";

import Head from 'next/head';
import Script from 'next/script';
import Footer from '../Footer';

const COLORS = {
  primary: '#0049AD',
  accent: '#9facf8ff',
  secondary: '#b6d2f8ff',
  highlight: '#52b957ff',
  background: '#fafafa',
  white: '#ffffff',
  textPrimary: '#222222',
  textSecondary: '#4a4a4a',
  muted: '#888888',
  yelow: '#fbc02d',
  black: '#000000',
  RED: '#b91c1c',
  TEXT_DARK: '#1F2937',
  SOFT_BLUE: "#DBEAFE",
  SOFT_RED: "#FEE2E2",
  SOFT_GREEN: "#DCFCE7",
  LITE_GRAY: "#9ca3af",
  SOFT_YELLOW: "#FEF9C3",
};

const CSRPolicy = () => {
  return (
    <>
      <Head>
        <title>CSR Policy | Minta Restro</title>
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

    <div style={{ backgroundColor: COLORS.background }} className="min-h-screen flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <nav 
        style={{ backgroundColor: COLORS.white, borderBottom: `1px solid ${COLORS.LITE_GRAY}30` }} 
        className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm"
      >
        <div className="flex items-baseline cursor-pointer">
          <span style={{ color: COLORS.textPrimary }} className="text-2xl font-black tracking-tighter">MINTA RESTRO</span>
          <span style={{ color: COLORS.primary }} className="text-3xl font-black leading-none">.</span>
        </div>
        <button 
          style={{ 
            borderColor: COLORS.LITE_GRAY, 
            color: COLORS.textPrimary 
          }}
          className="border rounded-full px-6 py-2 text-xs font-bold tracking-widest hover:bg-gray-50 transition-colors uppercase"
        >
          Download App
        </button>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow py-10 px-4 md:px-8 flex items-center justify-center">
        
        <div 
          style={{ backgroundColor: COLORS.white, borderColor: COLORS.LITE_GRAY }} 
          className="max-w-5xl w-full rounded-2xl shadow-xl overflow-hidden border border-opacity-20"
        >
          {/* Card Header */}
          <div style={{ backgroundColor: COLORS.SOFT_BLUE }} className="px-8 py-10 text-center border-b border-opacity-10 border-gray-300">
            <p style={{ color: COLORS.primary }} className="font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              Company Responsibility
            </p>
            <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
              CSR Policy
            </h1>
            <p style={{ color: COLORS.textSecondary }} className="text-sm font-medium">
              Corporate Social Responsibility (CSR) Framework
            </p>
          </div>

          <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

            {/* 1. Purpose & 2. Vision */}
            <section className="space-y-6">
              <div>
                <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                  1. Purpose
                </h2>
                <p style={{ color: COLORS.textSecondary }}>
                  This Corporate Social Responsibility (CSR) Policy outlines Minta Restro's commitment to conducting business responsibly and contributing positively to society. Our CSR initiatives extend beyond commercial objectives and focus on sustainable human, environmental, and social development. We aim to integrate ethical, social, and environmental considerations into our operations, partnerships, and technology platforms.
                </p>
              </div>

              <div>
                <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                  2. Vision & Philosophy
                </h2>
                <p style={{ color: COLORS.textSecondary }} className="mb-4">
                  Minta Restro believes that sustainable business success is directly linked to community well-being. As a technology-driven marketplace operating via mobile platforms such as Google Play, we recognize our responsibility to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-8 text-gray-600">
                  <li>Promote inclusive economic growth</li>
                  <li>Protect the environment</li>
                  <li>Support food security</li>
                  <li>Empower local communities</li>
                  <li>Encourage ethical digital practices</li>
                </ul>
              </div>
            </section>

            {/* 3. CSR Objectives */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                3. CSR Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div style={{ backgroundColor: COLORS.SOFT_RED }} className="p-6 rounded-xl border border-red-100">
                  <h3 className="font-bold mb-3 text-sm" style={{ color: COLORS.RED }}>3.1 Hunger & Food Security</h3>
                  <ul className="text-xs space-y-2 list-disc pl-4" style={{ color: COLORS.primary }}>
                    <li>Partnering with NGOs to reduce food wastage</li>
                    <li>Supporting food donation programs</li>
                    <li>Emergency meal support</li>
                  </ul>
                </div>
                <div style={{ backgroundColor: COLORS.SOFT_YELLOW }} className="p-6 rounded-xl border border-yellow-200">
                  <h3 className="font-bold mb-3 text-sm" style={{ color: '#854d0e' }}>3.2 Community Development</h3>
                  <ul className="text-xs space-y-2 list-disc pl-4" style={{ color: COLORS.primary }}>
                    <li>Supporting small/local restaurants</li>
                    <li>Promoting women-led businesses</li>
                    <li>Creating delivery partner opportunities</li>
                  </ul>
                </div>
                <div style={{ backgroundColor: COLORS.SOFT_GREEN }} className="p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold mb-3 text-sm" style={{ color: '#166534' }}>3.3 Environmental Sustainability</h3>
                  <ul className="text-xs space-y-2 list-disc pl-4" style={{ color: COLORS.primary }}>
                    <li>Encouraging eco-friendly packaging</li>
                    <li>Reducing delivery carbon emissions</li>
                    <li>Promoting sustainable sourcing</li>
                    <li>Implementing waste reduction initiatives</li>
                  </ul>
                </div>
                <div style={{ backgroundColor: COLORS.SOFT_BLUE }} className="p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold mb-3 text-sm" style={{ color: COLORS.primary }}>3.4 Digital Responsibility</h3>
                  <ul className="text-xs space-y-2 list-disc pl-4 text-blue-900">
                    <li>Safe and secure transactions</li>
                    <li>Protecting user privacy and data</li>
                    <li>Responsible content practices</li>
                    <li>Google Play policy compliance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Key CSR Initiatives & 5. Engagement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                        4. Key CSR Initiatives
                    </h2>
                    <ul className="list-disc pl-8 space-y-2 text-sm text-gray-600">
                        <li>Food redistribution programs</li>
                        <li>Environmental awareness campaigns</li>
                        <li>Tree plantation drives</li>
                        <li>Emergency relief contributions</li>
                        <li>Delivery partner welfare programs</li>
                        <li>Health insurance for gig workers</li>
                    </ul>
                </section>
                <section>
                    <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                        5. Employee & Partner Engagement
                    </h2>
                    <ul className="list-disc pl-8 space-y-2 text-sm text-gray-600">
                        <li>Employee volunteering programs</li>
                        <li>Sustainability campaigns</li>
                        <li>Responsible sourcing and ethics</li>
                        <li>Inclusive workplace practices</li>
                    </ul>
                </section>
            </div>

            {/* 6. Governance & 7. Budget */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-2xl">
                <div>
                    <h2 className="text-lg font-bold mb-3" style={{ color: COLORS.textPrimary }}>6. Governance & Oversight</h2>
                    <p className="text-sm text-gray-600 mb-2">6.1 CSR Committee shall oversee implementation.</p>
                    <p className="text-sm text-gray-600 mb-2">6.2 Compliance with local corporate law mandates.</p>
                    <p className="text-sm text-gray-600">6.3 Annual activities publicly disclosed where required.</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-3" style={{ color: COLORS.textPrimary }}>7. Budget & Allocation</h2>
                    <p className="text-sm text-gray-600">
                        Minta Restro shall allocate CSR funding in accordance with statutory requirements or internal policy decisions. CSR budgets shall be used solely for approved social development projects.
                    </p>
                </div>
            </section>

            {/* 8. Ethical Standards */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                8. Ethical Standards & Compliance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-600">
                <ul className="list-disc pl-8 space-y-1">
                  <li>Ethical corporate governance</li>
                  <li>Transparency in operations</li>
                  <li>Anti-corruption practices</li>
                </ul>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Fair labour standards</li>
                  <li>Responsible digital marketplace behaviour</li>
                  <li>Google Play standard alignment</li>
                </ul>
              </div>
            </section>

            {/* 9. Monitoring & 10. Amendments */}
            <section className="space-y-6">
                <div>
                    <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                        9. Monitoring & Reporting
                    </h2>
                    <p className="text-sm text-gray-600 pl-4">
                        We conduct periodic impact assessments, track measurable outcomes, and publish CSR reports annually to ensure effectiveness and transparency.
                    </p>
                </div>
                <div>
                    <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                        10. Amendments
                    </h2>
                    <p className="text-sm text-gray-600 pl-4">
                        This policy may be amended by the Board or authorized management at any time to reflect evolving regulatory requirements or strategic priorities.
                    </p>
                </div>
            </section>

            {/* 11. Final Declaration */}
            <section style={{ backgroundColor: COLORS.TEXT_DARK }} className="p-10 rounded-2xl text-white text-center">
              <h2 className="text-2xl font-bold mb-4">11. Declaration</h2>
              <p className="max-w-3xl mx-auto text-gray-300 text-sm italic">
                &quot;Minta Restro reaffirms its commitment to sustainable development and responsible digital entrepreneurship. We recognize that long-term success is built not only on financial performance but also on meaningful contributions to society and environmental stewardship.&quot;
              </p>
              <div className="mt-8 pt-6 border-t border-gray-700 text-xs text-gray-400 uppercase tracking-widest">
                Minta Club Private Limited
              </div>
            </section>

            {/* Support Info */}
            <div className="pt-8 text-center border-t border-gray-100">
              <p style={{ color: COLORS.muted }} className="text-xs">
                For inquiries regarding our social initiatives, contact: <a href="mailto:support@mintarestro.com" className="underline font-bold" style={{ color: COLORS.primary }}>support@mintarestro.com</a>
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default CSRPolicy;