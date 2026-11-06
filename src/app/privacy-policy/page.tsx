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

// const PrivacyPolicy = () => {
//   return (
//     <div style={{ backgroundColor: COLORS.background }} className="min-h-screen flex flex-col justify-between font-sans">
      
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
//               [cite_start]About Us [cite: 89]
//             </p>
//             <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
//               [cite_start]Privacy Policy [cite: 90]
//             </h1>
//           </div>

//           <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

//             {/* Introduction Section */}
//             <section>
//               <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
//                 <p>
//                   [cite_start]Minta Club Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a company incorporated under the Companies Act, 2013, India[cite: 91]. 
//                   [cite_start]Minta Restro is a brand owned and operated by Minta Club Private Limited[cite: 92].
//                 </p>
//                 <p>
//                   [cite_start]Minta Restro operates an online platform for the sale and delivery of Online food ordering services, Restaurant listings and reviews, Payment facilitation services, and Delivery tracking services sourced from authorized vendors and delivered to customers[cite: 93].
//                 </p>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mt-6 mb-2">1. [cite_start]INTRODUCTION [cite: 94]</h2>
//                 <p>
//                   [cite_start]This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use our mobile application, website, and services (&quot;Platform&quot;)[cite: 95]. 
//                   [cite_start]By accessing or using the Platform, you consent to the practices described in this Privacy Policy[cite: 96].
//                 </p>
//               </div>
//             </section>

//             {/* 2. INFORMATION WE COLLECT */}
//             <section>
//               <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
//                 2. [cite_start]INFORMATION WE COLLECT [cite: 97]
//               </h2>
//               <div style={{ color: COLORS.textSecondary }} className="space-y-6 text-base">
//                 <div>
//                   [cite_start]<h3 className="font-bold mb-2">2.1 Information You Provide Directly [cite: 98]</h3>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-8">
//                     [cite_start]<li>Full name [cite: 99]</li>
//                     [cite_start]<li>Mobile number [cite: 100]</li>
//                     [cite_start]<li>Email address [cite: 101]</li>
//                     [cite_start]<li>Delivery address [cite: 102]</li>
//                     [cite_start]<li>Profile photo (optional) [cite: 103]</li>
//                     [cite_start]<li>Customer support communications [cite: 104]</li>
//                     [cite_start]<li>Feedback and reviews [cite: 105]</li>
//                   </ul>
//                 </div>

//                 <div style={{ backgroundColor: COLORS.SOFT_YELLOW, borderColor: COLORS.yelow }} className="p-6 rounded-lg border">
//                   [cite_start]<h3 className="font-bold mb-2">2.2 Payment Information [cite: 106]</h3>
//                   [cite_start]<p>Payment method details (processed via third-party payment gateways) and transaction history[cite: 107].</p>
//                   [cite_start]<p className="mt-2 font-bold text-sm">▲ We do not store full credit/debit card numbers on our servers[cite: 108].</p>
//                 </div>

//                 <div>
//                   [cite_start]<h3 className="font-bold mb-2">2.3 Automatically Collected Information [cite: 109]</h3>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-8">
//                     [cite_start]<li>Device type & model [cite: 110]</li>
//                     [cite_start]<li>Operating system version [cite: 111]</li>
//                     [cite_start]<li>IP address [cite: 112]</li>
//                     [cite_start]<li>App usage data [cite: 113]</li>
//                     [cite_start]<li>Crash logs [cite: 114]</li>
//                     [cite_start]<li>Cookies & tracking technologies [cite: 115]</li>
//                   </ul>
//                 </div>

//                 <div>
//                   [cite_start]<h3 className="font-bold mb-2">2.4 Location Information [cite: 116]</h3>
//                   [cite_start]<p>Precise or approximate location (with user permission) for showing nearby restaurants, enabling delivery tracking, and fraud prevention[cite: 117, 118, 119, 120, 121].</p>
//                   [cite_start]<p className="mt-2 italic">Location access is optional and can be disabled from device settings[cite: 122].</p>
//                 </div>
//               </div>
//             </section>

//             {/* 3. HOW WE USE YOUR INFORMATION */}
//             <section>
//               <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
//                 3. [cite_start]HOW WE USE YOUR INFORMATION [cite: 123]
//               </h2>
//               <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-base">
//                 [cite_start]<li>Process and deliver orders [cite: 126]</li>
//                 [cite_start]<li>Facilitate payments [cite: 127]</li>
//                 [cite_start]<li>Provide customer support [cite: 128]</li>
//                 [cite_start]<li>Improve app functionality [cite: 129]</li>
//                 [cite_start]<li>Personalize restaurant recommendations [cite: 130]</li>
//                 [cite_start]<li>Send order updates and transactional notifications [cite: 131]</li>
//                 [cite_start]<li>Prevent fraud and misuse [cite: 131]</li>
//                 [cite_start]<li>Comply with legal obligations [cite: 132]</li>
//               </ul>
//               [cite_start]<p className="mt-4 font-bold" style={{ color: COLORS.primary }}>We do not sell your personal data[cite: 133].</p>
//             </section>

//             {/* 4. DATA SHARING & DISCLOSURE */}
//             <section>
//               <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
//                 4. [cite_start]DATA SHARING & DISCLOSURE [cite: 134]
//               </h2>
//               <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
//                 <p>We may share information with:</p>
//                 <ul className="list-disc pl-8 space-y-2">
//                   [cite_start]<li><strong>Restaurants/Vendors:</strong> To fulfill your order (name, contact number, address)[cite: 136, 137].</li>
//                   [cite_start]<li><strong>Delivery Partners:</strong> For order delivery and coordination[cite: 138, 139].</li>
//                   [cite_start]<li><strong>Payment Gateways:</strong> For secure transaction processing[cite: 140, 141].</li>
//                   [cite_start]<li><strong>Service Providers:</strong> Cloud hosting, analytics, SMS/email service providers[cite: 142, 143].</li>
//                   [cite_start]<li><strong>Legal Authorities:</strong> If required by law or court order[cite: 144, 145].</li>
//                 </ul>
//                 [cite_start]<p className="italic text-sm">All third parties are contractually obligated to protect your data[cite: 146].</p>
//               </div>
//             </section>

//             {/* 5. DATA RETENTION & 6. SECURITY */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <section>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">5. [cite_start]DATA RETENTION [cite: 147]</h2>
//                 <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-sm">
//                   [cite_start]<li>As long as your account is active [cite: 149]</li>
//                   [cite_start]<li>Legal, tax, and regulatory compliance [cite: 150]</li>
//                   [cite_start]<li>Fraud prevention and dispute resolution [cite: 151]</li>
//                 </ul>
//                 [cite_start]<p className="mt-2 text-xs italic">You may request deletion of your account and data (subject to legal retention)[cite: 152].</p>
//               </section>

//               <section>
//                 <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">6. [cite_start]DATA SECURITY [cite: 153]</h2>
//                 <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-sm">
//                   [cite_start]<li>SSL encryption [cite: 155]</li>
//                   [cite_start]<li>Secure cloud storage [cite: 156]</li>
//                   [cite_start]<li>Role-based access controls [cite: 157]</li>
//                   [cite_start]<li>Regular security audits [cite: 158]</li>
//                 </ul>
//               </section>
//             </div>

//             {/* 7. YOUR RIGHTS */}
//             <section style={{ backgroundColor: COLORS.SOFT_BLUE }} className="p-8 rounded-xl border border-opacity-20">
//               <h2 style={{ color: COLORS.TEXT_DARK }} className="text-xl font-bold mb-4">7. [cite_start]YOUR RIGHTS [cite: 160]</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2">
//                   [cite_start]<li>Access your data [cite: 162]</li>
//                   [cite_start]<li>Correct inaccurate data [cite: 163]</li>
//                   [cite_start]<li>Request deletion [cite: 164]</li>
//                   [cite_start]<li>Withdraw consent [cite: 165]</li>
//                   [cite_start]<li>Opt-out of marketing [cite: 166]</li>
//                 </ul>
//               </div>
//               [cite_start]<p className="mt-6 font-medium text-sm">Requests can be made via support@mintarestro.com[cite: 167].</p>
//             </section>

//             {/* 12. GOOGLE PLAY DISCLOSURE */}
//             <section>
//               <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
//                 12. [cite_start]GOOGLE PLAY DATA SAFETY DISCLOSURE [cite: 181]
//               </h2>
//               <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-base">
//                 [cite_start]<li>We collect personal information for order fulfilment and service improvement[cite: 183].</li>
//                 [cite_start]<li>We do not sell personal data[cite: 184].</li>
//                 [cite_start]<li>Data is encrypted in transit[cite: 185].</li>
//                 [cite_start]<li>Users can request deletion of their data[cite: 186].</li>
//                 [cite_start]<li>Sensitive data like payment details are processed via secure third-party gateways[cite: 187].</li>
//               </ul>
//             </section>

//             {/* 14. CONTACT US */}
//             <section className="pt-8 mt-8 border-t border-gray-100">
//               <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">
//                 14. [cite_start]CONTACT US [cite: 191]
//               </h2>
//               <address style={{ color: COLORS.textSecondary }} className="not-italic space-y-1">
//                 [cite_start]<p className="font-bold text-gray-800">Minta Restro [cite: 193]</p>
//                 [cite_start]<p>Email: <a href="mailto:support@mintarestro.com" className="underline" style={{ color: COLORS.primary }}>support@mintarestro.com</a> [cite: 194]</p>
//                 [cite_start]<p>Ranchi, Jharkhand [cite: 195]</p>
//               </address>
//             </section>

//             <div className="text-center">
//               <p style={{ color: COLORS.muted }} className="text-xs italic">
//                 [cite_start]The Platform is not intended for users under 18[cite: 169]. [cite_start]We may update this Privacy Policy periodically[cite: 189]. 
//                 [cite_start]Continued use of the Platform constitutes acceptance of changes[cite: 190].
//               </p>
//             </div>

//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default PrivacyPolicy;



"use client";

import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../Navbar';
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

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Minta Restro</title>
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

    <div style={{ backgroundColor: COLORS.background }} className="min-h-screen flex flex-col justify-between font-sans">
      
      {/* --- HEADER --- */}
      <Navbar />

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow pt-28 pb-10 px-4 md:px-8 flex items-center justify-center">
        
        <div 
          style={{ backgroundColor: COLORS.white, borderColor: COLORS.LITE_GRAY }} 
          className="max-w-5xl w-full rounded-2xl shadow-xl overflow-hidden border border-opacity-20"
        >
          {/* Card Header */}
          <div style={{ backgroundColor: COLORS.SOFT_BLUE }} className="px-8 py-10 text-center border-b border-opacity-10 border-gray-300">
            <p style={{ color: COLORS.primary }} className="font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              About Us
            </p>
            <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

            {/* Introduction Section */}
            <section>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  Minta Club Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a company incorporated under the Companies Act, 2013, India. 
                  Minta Restro is a brand owned and operated by Minta Club Private Limited.
                </p>
                <p>
                  Minta Restro operates an online platform for the sale and delivery of Online food ordering services, Restaurant listings and reviews, Payment facilitation services, and Delivery tracking services sourced from authorized vendors and delivered to customers.
                </p>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mt-6 mb-2">1. INTRODUCTION</h2>
                <p>
                  This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you use our mobile application, website, and services (&quot;Platform&quot;). 
                  By accessing or using the Platform, you consent to the practices described in this Privacy Policy.
                </p>
              </div>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                2. INFORMATION WE COLLECT
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-6 text-base">
                <div>
                  <h3 className="font-bold mb-2">2.1 Information You Provide Directly</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-8">
                    <li>Full name</li>
                    <li>Mobile number</li>
                    <li>Email address</li>
                    <li>Delivery address</li>
                    <li>Profile photo (optional)</li>
                    <li>Customer support communications</li>
                    <li>Feedback and reviews</li>
                  </ul>
                </div>

                <div style={{ backgroundColor: COLORS.SOFT_YELLOW, borderColor: COLORS.yelow }} className="p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">2.2 Payment Information</h3>
                  <p>Payment method details (processed via third-party payment gateways) and transaction history.</p>
                  <p className="mt-2 font-bold text-sm">▲ We do not store full credit/debit card numbers on our servers.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">2.3 Automatically Collected Information</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-8">
                    <li>Device type & model</li>
                    <li>Operating system version</li>
                    <li>IP address</li>
                    <li>App usage data</li>
                    <li>Crash logs</li>
                    <li>Cookies & tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">2.4 Location Information</h3>
                  <p>Precise or approximate location (with user permission) for showing nearby restaurants, enabling delivery tracking, and fraud prevention.</p>
                  <p className="mt-2 italic">Location access is optional and can be disabled from device settings.</p>
                </div>
              </div>
            </section>

            {/* 3. HOW WE USE YOUR INFORMATION */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                3. HOW WE USE YOUR INFORMATION
              </h2>
              <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-base">
                <li>Process and deliver orders</li>
                <li>Facilitate payments</li>
                <li>Provide customer support</li>
                <li>Improve app functionality</li>
                <li>Personalize restaurant recommendations</li>
                <li>Send order updates and transactional notifications</li>
                <li>Prevent fraud and misuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4 font-bold" style={{ color: COLORS.primary }}>We do not sell your personal data.</p>
            </section>

            {/* 4. DATA SHARING & DISCLOSURE */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                4. DATA SHARING & DISCLOSURE
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>We may share information with:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>Restaurants/Vendors:</strong> To fulfill your order (name, contact number, address).</li>
                  <li><strong>Delivery Partners:</strong> For order delivery and coordination.</li>
                  <li><strong>Payment Gateways:</strong> For secure transaction processing.</li>
                  <li><strong>Service Providers:</strong> Cloud hosting, analytics, SMS/email service providers.</li>
                  <li><strong>Legal Authorities:</strong> If required by law or court order.</li>
                </ul>
                <p className="italic text-sm">All third parties are contractually obligated to protect your data.</p>
              </div>
            </section>

            {/* 5, 6 Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">5. DATA RETENTION</h2>
                <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-sm">
                  <li>As long as your account is active</li>
                  <li>Legal, tax, and regulatory compliance</li>
                  <li>Fraud prevention and dispute resolution</li>
                </ul>
                <p className="mt-2 text-xs italic">You may request deletion of your account and data (subject to legal retention).</p>
              </section>

              <section>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">6. DATA SECURITY</h2>
                <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-sm">
                  <li>SSL encryption</li>
                  <li>Secure cloud storage</li>
                  <li>Role-based access controls</li>
                  <li>Regular security audits</li>
                </ul>
              </section>
            </div>

            {/* 7. YOUR RIGHTS */}
            <section style={{ backgroundColor: COLORS.SOFT_BLUE }} className="p-8 rounded-xl border border-opacity-20">
              <h2 style={{ color: COLORS.TEXT_DARK }} className="text-xl font-bold mb-4">7. YOUR RIGHTS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2">
                  <li>Access your data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion</li>
                  <li>Withdraw consent</li>
                  <li>Opt-out of marketing</li>
                </ul>
              </div>
              <p className="mt-6 font-medium text-sm">Requests can be made via support@mintarestro.com.</p>
            </section>

            {/* 8, 9, 10, 11 Sections - NEW CONTENT */}
            <section className="space-y-8">
              <div>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">8. CHILDREN’S PRIVACY</h2>
                <p style={{ color: COLORS.textSecondary }} className="text-base">
                  The Platform is not intended for users under 18 years of age. We do not knowingly collect personal data from minors.
                </p>
              </div>

              <div>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">9. COOKIES & TRACKING TECHNOLOGIES</h2>
                <p style={{ color: COLORS.textSecondary }} className="mb-2">We use cookies and similar tools to:</p>
                <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-1 text-base">
                  <li>Improve app performance</li>
                  <li>Analyse usage patterns</li>
                  <li>Personalize content</li>
                </ul>
                <p style={{ color: COLORS.textSecondary }} className="mt-2 italic text-sm">Users may disable cookies through device settings.</p>
              </div>

              <div>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">10. THIRD-PARTY LINKS</h2>
                <p style={{ color: COLORS.textSecondary }} className="text-base">
                  The Platform may contain links to third-party websites or services. We are not responsible for their privacy practices.
                </p>
              </div>

              <div>
                <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">11. INTERNATIONAL DATA TRANSFERS</h2>
                <p style={{ color: COLORS.textSecondary }} className="text-base">
                  If applicable, your data may be stored or processed outside your state/country, subject to adequate safeguards.
                </p>
              </div>
            </section>

            {/* 12. GOOGLE PLAY DISCLOSURE */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                12. GOOGLE PLAY DATA SAFETY DISCLOSURE
              </h2>
              <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-base">
                <li>We collect personal information for order fulfilment and service improvement.</li>
                <li>We do not sell personal data.</li>
                <li>Data is encrypted in transit.</li>
                <li>Users can request deletion of their data.</li>
                <li>Sensitive data like payment details are processed via secure third-party gateways.</li>
              </ul>
            </section>

            {/* 13. CHANGES TO THIS POLICY - NEW CONTENT */}
            <section>
              <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">13. CHANGES TO THIS POLICY</h2>
              <p style={{ color: COLORS.textSecondary }} className="text-base">
                We may update this Privacy Policy periodically. Continued use of the Platform constitutes acceptance of changes.
              </p>
            </section>

            {/* 14. CONTACT US */}
            <section className="pt-8 mt-8 border-t border-gray-100">
              <h2 style={{ color: COLORS.textPrimary }} className="text-xl font-bold mb-4">
                14. CONTACT US
              </h2>
              <address style={{ color: COLORS.textSecondary }} className="not-italic space-y-1">
                <p className="font-bold text-gray-800">Minta Restro</p>
                <p>Email: <a href="mailto:support@mintarestro.com" className="underline" style={{ color: COLORS.primary }}>support@mintarestro.com</a></p>
                <p>Ranchi, Jharkhand</p>
              </address>
            </section>

            <div className="text-center">
              <p style={{ color: COLORS.muted }} className="text-xs italic">
                The Platform is not intended for users under 18. We may update this Privacy Policy periodically. Continued use of the Platform constitutes acceptance of changes.
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

export default PrivacyPolicy;