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

// const BusinessCompliance = () => {
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
//               Official Declaration
//             </p>
//             <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
//               Business & Payment Compliance
//             </h1>
//             <p style={{ color: COLORS.textSecondary }} className="text-sm font-medium">
//               Last Updated: 05/02/2026
//             </p>
//           </div>

//           <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

//             {/* Entity Details Table */}
//             <section>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Legal Entity Name</p>
//                   <p className="font-bold" style={{ color: COLORS.TEXT_DARK }}>Minta Club Private Limited</p>
//                 </div>
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Brand Name</p>
//                   <p className="font-bold" style={{ color: COLORS.primary }}>Minta Restro</p>
//                 </div>
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Nature of Business</p>
//                   <p className="text-sm">Online Food Ordering and Delivery Platform</p>
//                 </div>
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Country of Operation</p>
//                   <p className="text-sm">India</p>
//                 </div>
//               </div>
//             </section>

//             {/* 1. Purpose & 2. Business Model */}
//             <section className="space-y-6">
//               <div>
//                 <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                   1. Purpose of Declaration
//                 </h2>
//                 <p style={{ color: COLORS.textSecondary }}>
//                   This Business & Payment Compliance Declaration is issued to confirm that Minta Restro operates in accordance with applicable laws, financial regulations, and the policies of Google Play, including payment processing, user protection, and consumer transparency requirements.
//                 </p>
//               </div>

//               <div>
//                 <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                   2. Business Model Declaration
//                 </h2>
//                 <p style={{ color: COLORS.textSecondary }} className="mb-4">Minta Restro operates as a technology platform and intermediary connecting customers with independent restaurants and delivery partners.</p>
//                 <div style={{ backgroundColor: COLORS.SOFT_YELLOW }} className="p-4 rounded-lg border border-yellow-200 text-sm italic">
//                   Minta Restro does not manufacture, prepare, or directly sell food products. Restaurants are independent third-party vendors responsible for food quality and safety.
//                 </div>
//               </div>
//             </section>

//             {/* 3. Legal & 4. Payment Compliance */}
//             <section className="space-y-8">
//               <div>
//                 <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
//                   3. Legal Registration & Licensing
//                 </h2>
//                 <ul className="list-disc pl-8 space-y-2 text-base text-gray-600">
//                   <li>Company is duly incorporated under the laws of India.</li>
//                   <li>Maintains all required business licenses and registrations.</li>
//                   <li>Complies with e-commerce, consumer protection, and taxation regulations.</li>
//                 </ul>
//               </div>

//               <div style={{ backgroundColor: COLORS.SOFT_GREEN }} className="p-8 rounded-xl border border-green-100">
//                 <h2 style={{ color: COLORS.TEXT_DARK }} className="text-xl font-bold mb-4">4. Payment Processing & Financial Compliance</h2>
//                 <div className="space-y-4 text-sm">
//                   <h3 className="font-bold uppercase tracking-tight text-gray-700">4.1 Payment Structure</h3>
//                   <p>Facilitates payments including food charges, delivery charges, platform fees, and applicable taxes.</p>
                  
//                   <h3 className="font-bold uppercase tracking-tight text-gray-700">4.2 Google Play Billing Compliance</h3>
//                   <p>In compliance with Google Play policies, physical goods transactions are processed using secure third-party payment gateways. No prohibited payment mechanisms are used for digital content.</p>
                  
//                   <h3 className="font-bold uppercase tracking-tight text-gray-700">4.3 Secure Payment Processing</h3>
//                   <p>Transactions are processed via PCI-DSS compliant third-party processors. Sensitive data is encrypted in transit using HTTPS/TLS protocols.</p>
//                 </div>
//               </div>
//             </section>

//             {/* 5, 6, 7 & 8 Compliance Sections */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <section>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">5. Tax Compliance</h2>
//                 <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
//                   <li>GST / VAT laws compliance</li>
//                   <li>Withholding tax obligations</li>
//                   <li>Digital record-keeping</li>
//                 </ul>
//               </section>
//               <section>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">6. Consumer Protection</h2>
//                 <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
//                   <li>Transparent pricing</li>
//                   <li>Clear cancellation/refund policies</li>
//                   <li>Grievance redressal mechanisms</li>
//                 </ul>
//               </section>
//               <section>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">7. Anti-Fraud Measures</h2>
//                 <p className="text-sm text-gray-600">Implements safeguards to detect fraudulent transactions and monitor suspicious activities in compliance with AML regulations.</p>
//               </section>
//               <section>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">8. Data Protection</h2>
//                 <p className="text-sm text-gray-600">Processes user data in accordance with applicable laws and strictly handles financial data with security controls.</p>
//               </section>
//             </div>

//             {/* 11. Declaration Statement & Signatory */}
//             <section style={{ backgroundColor: COLORS.TEXT_DARK }} className="p-10 rounded-2xl text-white">
//               <h2 className="text-2xl font-bold mb-6 text-center">11. Declaration Statement</h2>
//               <div className="space-y-4 mb-10 text-gray-300 text-sm">
//                 <p>• All business operations are conducted lawfully. [cite: 277]</p>
//                 <p>• Payment mechanisms comply with applicable financial and digital marketplace regulations. [cite: 278]</p>
//                 <p>• Our application adheres to the relevant policies of Google Play. [cite: 279]</p>
//                 <p>• All information provided in this declaration is accurate and made in good faith. [cite: 280]</p>
//               </div>

//               <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//                 <div className="space-y-1">
//                   <p className="text-xs uppercase text-gray-500 font-bold">Authorized Signatory</p>
//                   <p className="text-xl font-black tracking-tight">Ravindra Srivastava [cite: 282]</p>
//                   <p className="text-sm text-blue-400 font-bold">CEO [cite: 283]</p>
//                 </div>
//                 <div className="text-left md:text-right">
//                   <p className="text-xs uppercase text-gray-500 font-bold">Date of Declaration</p>
//                   <p className="text-lg">05/02/26 [cite: 284]</p>
//                   <p className="text-xs text-gray-400">Minta Club Private Limited [cite: 285]</p>
//                 </div>
//               </div>
//             </section>

//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default BusinessCompliance;



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

const BusinessCompliance = () => {
  return (
    <>
      <Head>
        <title>Business & Payment Compliance | Minta Restro</title>
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
              Official Declaration
            </p>
            <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
              Business & Payment Compliance
            </h1>
            <p style={{ color: COLORS.textSecondary }} className="text-sm font-medium">
              Last Updated: 05/02/2026
            </p>
          </div>

          <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

            {/* Entity Details Table */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Legal Entity Name</p>
                  <p className="font-bold" style={{ color: COLORS.TEXT_DARK }}>Minta Club Private Limited</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Brand Name</p>
                  <p className="font-bold" style={{ color: COLORS.primary }}>Minta Restro</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Nature of Business</p>
                  <p className="text-sm">Online Food Ordering and Delivery Platform</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Country of Operation</p>
                  <p className="text-sm">India</p>
                </div>
              </div>
            </section>

            {/* 1. Purpose & 2. Business Model */}
            <section className="space-y-6">
              <div>
                <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                  1. Purpose of Declaration
                </h2>
                <p style={{ color: COLORS.textSecondary }}>
                  This Business & Payment Compliance Declaration is issued to confirm that Minta Restro operates in accordance with applicable laws, financial regulations, and the policies of Google Play, including payment processing, user protection, and consumer transparency requirements.
                </p>
              </div>

              <div>
                <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                  2. Business Model Declaration
                </h2>
                <p style={{ color: COLORS.textSecondary }} className="mb-4">Minta Restro operates as a technology platform and intermediary connecting customers with independent restaurants and delivery partners.</p>
                <div style={{ backgroundColor: COLORS.SOFT_YELLOW }} className="p-4 rounded-lg border border-yellow-200 text-sm italic">
                  Minta Restro does not manufacture, prepare, or directly sell food products. Restaurants are independent third-party vendors responsible for food quality and safety.
                </div>
              </div>
            </section>

            {/* 3. Legal & 4. Payment Compliance */}
            <section className="space-y-8">
              <div>
                <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                  3. Legal Registration & Licensing
                </h2>
                <ul className="list-disc pl-8 space-y-2 text-base text-gray-600">
                  <li>Company is duly incorporated under the laws of India.</li>
                  <li>Maintains all required business licenses and registrations.</li>
                  <li>Complies with e-commerce, consumer protection, and taxation regulations.</li>
                </ul>
              </div>

              <div style={{ backgroundColor: COLORS.SOFT_GREEN }} className="p-8 rounded-xl border border-green-100">
                <h2 style={{ color: COLORS.TEXT_DARK }} className="text-xl font-bold mb-4">4. Payment Processing & Financial Compliance</h2>
                <div className="space-y-4 text-sm">
                  <h3 className="font-bold uppercase tracking-tight text-gray-700">4.1 Payment Structure</h3>
                  <p>Facilitates payments including food charges, delivery charges, platform fees, and applicable taxes.</p>
                  
                  <h3 className="font-bold uppercase tracking-tight text-gray-700">4.2 Google Play Billing Compliance</h3>
                  <p>In compliance with Google Play policies, physical goods transactions are processed using secure third-party payment gateways. No prohibited payment mechanisms are used for digital content.</p>
                  
                  <h3 className="font-bold uppercase tracking-tight text-gray-700">4.3 Secure Payment Processing</h3>
                  <p>Transactions are processed via PCI-DSS compliant third-party processors. Sensitive data is encrypted in transit using HTTPS/TLS protocols.</p>
                </div>
              </div>
            </section>

            {/* 5, 6, 7 & 8 Compliance Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">5. Tax Compliance</h2>
                <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                  <li>GST / VAT laws compliance</li>
                  <li>Withholding tax obligations</li>
                  <li>Digital record-keeping</li>
                </ul>
              </section>
              <section>
                <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">6. Consumer Protection</h2>
                <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                  <li>Transparent pricing</li>
                  <li>Clear cancellation/refund policies</li>
                  <li>Grievance redressal mechanisms</li>
                </ul>
              </section>
              <section>
                <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">7. Anti-Fraud Measures</h2>
                <p className="text-sm text-gray-600">Implements safeguards to detect fraudulent transactions and monitor suspicious activities in compliance with AML regulations.</p>
              </section>
              <section>
                <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">8. Data Protection</h2>
                <p className="text-sm text-gray-600">Processes user data in accordance with applicable laws and strictly handles financial data with security controls.</p>
              </section>
            </div>

            {/* --- NEW SECTIONS 9 & 10 --- */}
            <div className="grid grid-cols-1 gap-8">
              <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">9. Third-Party Responsibility Disclaimer</h2>
                <p className="text-sm text-gray-600 mb-2">Restaurant partners and delivery partners are independent contractors. They are solely responsible for:</p>
                <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                  <li>Food safety compliance</li>
                  <li>Business licensing</li>
                  <li>Labor law compliance</li>
                  <li>Insurance requirements</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2 font-medium">Minta Restro acts as a facilitator platform unless otherwise stated.</p>
              </section>

              <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 style={{ color: COLORS.textPrimary }} className="text-lg font-bold mb-3">10. Ongoing Regulatory Compliance</h2>
                <p className="text-sm text-gray-600 mb-2">We continuously monitor regulatory developments and update our policies and operations to ensure continued compliance with:</p>
                <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                  <li>E-commerce regulations</li>
                  <li>Financial transaction laws</li>
                  <li>Consumer protection standards</li>
                  <li>Google Play developer policies</li>
                </ul>
              </section>
            </div>

            {/* 11. Declaration Statement & Signatory */}
            <section style={{ backgroundColor: COLORS.TEXT_DARK }} className="p-10 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">11. Declaration Statement</h2>
              <div className="space-y-4 mb-10 text-gray-100 text-sm md:text-base">
                <p className="flex items-start"><span className="mr-2">•</span> All business operations are conducted lawfully.</p>
                <p className="flex items-start"><span className="mr-2">•</span> Payment mechanisms comply with applicable financial and digital marketplace regulations.</p>
                <p className="flex items-start"><span className="mr-2">•</span> Our application adheres to the relevant policies of Google Play.</p>
                <p className="flex items-start"><span className="mr-2">•</span> All information provided in this declaration is accurate and made in good faith.</p>
              </div>

              <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-1">
                  <p className="text-xs uppercase text-gray-400 font-bold">Authorized Signatory</p>
                  <p className="text-xl font-black tracking-tight text-white">Ravindra Srivastava</p>
                  <p className="text-sm text-blue-300 font-bold">CEO</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs uppercase text-gray-400 font-bold">Date of Declaration</p>
                  <p className="text-lg text-white">05/02/26</p>
                  <p className="text-xs text-gray-400">Minta Club Private Limited</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default BusinessCompliance;