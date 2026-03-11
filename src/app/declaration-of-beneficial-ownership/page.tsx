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

const BeneficialOwnership = () => {
  return (
    <>
      <Head>
        <title>Beneficial Ownership | Minta Restro</title>
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
              Regulatory Compliance
            </p>
            <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
              Beneficial Ownership
            </h1>
            <p className="text-xs text-gray-500 max-w-2xl mx-auto italic">
              Not applicable for Individual/Sole Proprietor/HUF/Government Departments/Public Sector Undertaking/Local Authority.
            </p>
          </div>

          <div className="p-8 md:p-16 space-y-12">

            {/* Section I, II, III: Entity Identification */}
            <section className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">I. Name of the Entity</label>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-bold text-gray-800">
                    Minta Club Private Limited
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">III. Type of Entity</label>
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded border border-blue-100">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-[10px]">✓</div>
                    <span className="text-sm font-bold text-blue-900">Company / LLP</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">II. Registered Address</label>
                <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm text-gray-700">
                  Ranchi, Jharkhand, India
                </div>
              </div>
            </section>

            {/* Section IV: Company Specifics */}
            <section style={{ borderColor: COLORS.primary }} className="border-l-4 pl-6 space-y-4">
              <h2 className="text-lg font-bold text-gray-800">IV. Company Details</h2>
              <p className="text-sm text-gray-600 mb-4">Verification of listing status on Stock Exchanges (India or Notified Jurisdictions):</p>
              
              <div className="space-y-3">
                {['An entity listed on a stock exchange in India', 'An entity resident in jurisdictions notified by the Central Govt', 'A subsidiary of such listed entities'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-500 italic">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                    <span>{item}</span>
                  </div>
                ))}
                <div className="text-xs font-bold text-blue-600 pt-2 uppercase tracking-widest">
                  Result: Private Limited (Unlisted) - Category 1 Applicable
                </div>
              </div>
            </section>

            {/* Ownership Table Simulation */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-6">Ownership Declaration (Category 1)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: COLORS.TEXT_DARK }} className="text-white">
                      <th className="p-4 rounded-tl-lg">Full Name of Beneficial Owner</th>
                      <th className="p-4">Ownership %</th>
                      <th className="p-4">Position</th>
                      <th className="p-4 rounded-tr-lg">Tax ID / PAN</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-gray-50">
                    <tr>
                      <td className="p-4 font-bold">Ravindra Srivastava</td>
                      <td className="p-4">Significant Control</td>
                      <td className="p-4">Director / CEO</td>
                      <td className="p-4 font-mono text-xs">Verified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-500 italic">
                *We hereby declare that the persons noted above own 10%/15% or more interest in the entity.
              </p>
            </section>

            {/* KYC & Instructions Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ backgroundColor: COLORS.SOFT_YELLOW }} className="p-6 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: '#854d0e' }}>Required Identification</h3>
                <ul className="text-xs space-y-3 text-gray-700">
                  <li className="flex justify-between border-b border-yellow-100 pb-1">
                    <span>Individual (Indian)</span>
                    <span className="font-bold">PAN / Aadhaar</span>
                  </li>
                  <li className="flex justify-between border-b border-yellow-100 pb-1">
                    <span>Foreign National</span>
                    <span className="font-bold">Passport</span>
                  </li>
                  <li className="flex justify-between border-b border-yellow-100 pb-1">
                    <span>Proof of Address</span>
                    <span className="font-bold">Voter ID / DL / Aadhaar</span>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: COLORS.SOFT_GREEN }} className="p-6 rounded-xl border border-green-200">
                <h3 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: '#166534' }}>Signing Authority</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  As per Mode of Operations for **Minta Club Private Limited**:
                </p>
                <p className="text-xs font-bold mt-2 text-green-900">
                  - Any two Directors or Company Secretary must sign.
                </p>
                <p className="text-[10px] mt-4 text-green-700 italic">
                  *All documents must be self-attested copies of Officially Valid Documents (OVD).
                </p>
              </div>
            </section>

            {/* Final Declaration Footer */}
            <section style={{ backgroundColor: COLORS.TEXT_DARK }} className="p-10 rounded-2xl text-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-bold mb-2">Legal Confirmation</h2>
                  <p className="text-sm text-gray-400 max-w-md">
                    The Legal Entity hereby confirms and declares the beneficial ownership status to comply with KYC and AML regulations.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="w-32 h-12 border-b-2 border-gray-600 mb-2"></div>
                    <p className="text-[10px] uppercase text-gray-500">Director Signature</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-12 border-b-2 border-gray-600 mb-2"></div>
                    <p className="text-[10px] uppercase text-gray-500">Director/CS Signature</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between text-[10px] text-gray-500 uppercase tracking-widest">
                <span>Date: 05/02/2026</span>
                <span>Minta Club Private Limited</span>
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

export default BeneficialOwnership;