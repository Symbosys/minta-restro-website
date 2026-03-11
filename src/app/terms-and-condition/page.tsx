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

const MintaTermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Minta Restro</title>
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
              About Us
            </p>
            <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
              Terms And Conditions
            </h1>
          </div>

          <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

            {/* Introduction Section */}
            <section>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  Minta Club Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a company incorporated under the Companies Act, 2013, India.
                </p>
                <p>
                  Minta Restro is a brand owned and operated by Minta Club Private Limited.
                </p>
                <p>
                  Minta Restro operates an online platform for the sale and delivery of Online food ordering services Restaurant listings and reviews, Payment facilitation services, Delivery tracking services sourced from authorized vendors and delivered to customers.
                </p>
              </div>
            </section>

            {/* 1. Eligibility */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                1. Eligibility
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>You must be at least 18 years old (or the age of majority in your jurisdiction) to use this Platform.</p>
                <p>By using the Platform, you confirm that:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>You are legally capable of entering into a binding contract.</li>
                  <li>All information provided by you is accurate and complete.</li>
                </ul>
              </div>
            </section>

            {/* 2. Services Provided */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                2. Services Provided
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>Minta Restro provides:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Online food ordering services</li>
                  <li>Restaurant listings and reviews</li>
                  <li>Payment facilitation services</li>
                  <li>Delivery tracking services</li>
                </ul>
                <p className="italic font-medium">We act as an intermediary between users and restaurants/delivery partners.</p>
              </div>
            </section>

            {/* 3. Account Registration */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                3. Account Registration
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>To access certain features, you must create an account. You agree to:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Provide accurate information</li>
                  <li>Maintain confidentiality of login credentials</li>
                  <li>Accept responsibility for activities under your account</li>
                </ul>
                <p style={{ color: COLORS.RED }} className="font-semibold">We reserve the right to suspend or terminate accounts for violations of these Terms.</p>
              </div>
            </section>

            {/* 4. Orders and Payments */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                4. Orders and Payments
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-6 text-base">
                <div>
                  <h3 className="font-bold mb-2">4.1 Order Acceptance</h3>
                  <p>All orders are subject to restaurant acceptance and availability.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">4.2 Pricing</h3>
                  <p>Prices displayed are determined by the restaurants. Additional charges may include:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-1">
                    <li>Delivery fees</li>
                    <li>Platform service fees</li>
                    <li>Taxes</li>
                  </ul>
                </div>
                <div style={{ backgroundColor: COLORS.SOFT_GREEN, borderColor: COLORS.highlight }} className="p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">4.3 Payments</h3>
                  <p>Payments may be processed via:</p>
                  <ul className="list-disc pl-8 mt-2 mb-4 space-y-1">
                    <li>Credit/Debit Cards</li>
                    <li>Digital Wallets</li>
                    <li>UPI or other supported payment methods</li>
                  </ul>
                  <p className="text-sm italic">We use secure third-party payment processors. We do not store full payment card details.</p>
                </div>
              </div>
            </section>

            {/* 5. Cancellations and Refunds */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                5. Cancellations and Refunds
              </h2>
              <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-8 space-y-2 text-base">
                <li>Orders may be cancelled before restaurant confirmation.</li>
                <li>Refund eligibility depends on cancellation timing and reason.</li>
                <li>Refund timelines may vary based on payment method.</li>
                <li>We reserve the right to refuse refunds in cases of abuse or fraudulent activity.</li>
              </ul>
            </section>

            {/* 6. User Conduct */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                6. User Conduct
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>You agree not to:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Post false, defamatory, or abusive reviews</li>
                  <li>Use the Platform for unlawful purposes</li>
                  <li>Attempt to disrupt the Platform&apos;s functionality</li>
                  <li>Engage in fraudulent payment activities</li>
                </ul>
                <p style={{ color: COLORS.RED }} className="italic font-bold">Violation may result in account suspension or legal action.</p>
              </div>
            </section>

            {/* 7. User Content */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                7. User Content
              </h2>
              <p style={{ color: COLORS.textSecondary }}>
                You retain ownership of content you submit (reviews, photos, comments), but grant Minta Restro a non-exclusive, royalty-free, worldwide license to use, modify, and display such content. We reserve the right to remove content that violates laws or our policies.
              </p>
            </section>

            {/* 8. Google Play Compliance */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                8. Google Play Compliance
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-2 text-base">
                <p>If you download the app from Google Play:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>You acknowledge that Google is not responsible for the Platform.</li>
                  <li>Your use must comply with Google Play&apos;s applicable policies.</li>
                  <li>Google Play and its affiliates are third-party beneficiaries of these Terms.</li>
                </ul>
              </div>
            </section>

            {/* 9. Intellectual Property */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                9. Intellectual Property
              </h2>
              <p style={{ color: COLORS.textSecondary }} className="mb-4">
                All content, logos, trademarks, software, and designs are owned by or licensed to Minta Restro and protected under applicable intellectual property laws.
              </p>
              <p style={{ color: COLORS.textSecondary }}>
                You may not copy, modify, distribute, or reproduce any part of the Platform without written consent.
              </p>
            </section>

            {/* 10. Privacy */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                10. Privacy
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.
                </p>
              </div>
            </section>

            {/* 11. Limitation of Liability */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                11. Limitation of Liability
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Minta Restro is not liable for food quality or preparation (this is the responsibility of restaurants).</li>
                  <li>We are not liable for delays caused by restaurants, delivery partners, or unforeseen events.</li>
                  <li>Our liability is limited to the amount paid for the order in question.</li>
                </ul>
              </div>
            </section>

            {/* 12. Disclaimers */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                12. Disclaimers
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  The Platform is provided “as is” and “as available” without warranties of any kind, either express or implied. <br />
                  We do not guarantee:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Continuous, error-free service</li>
                  <li>Availability of any restaurant</li>
                  <li>Accuracy of restaurant listings</li>
                </ul>
              </div>
            </section>

            {/* 13. Termination */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                13. Termination
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>We may suspend or terminate your access if:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>You violate these Terms</li>
                  <li>We are required by law</li>
                  <li>Fraud or misuse is detected</li>
                </ul>
              </div>
            </section>

            {/* 14. Governing Law */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                14. Governing Law
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, Jharkhand.
                  Any disputes shall be subject to the exclusive jurisdiction of the courts located in Ranchi.
                </p>
              </div>
            </section>

            {/* 15. Changes to Terms */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                15. Changes to Terms
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  We may update these Terms at any time. Continued use of the Platform after updates constitutes
                  acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* 16. Contact Information */}
            <section className="pt-8 mt-8 border-t border-gray-100">
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-4 border-l-4 pl-4">
                16. Contact Information
              </h2>
              <address style={{ color: COLORS.textSecondary }} className="not-italic space-y-2 text-base">
                <p>For questions or concerns regarding these Terms, please contact:</p>
                <div>
                  <p className="font-bold text-gray-800">Minta Restro Support Team</p>
                  <p>Email: <a href="mailto:support@mintarestro.com" className="underline font-medium" style={{ color: COLORS.primary }}>support@mintarestro.com</a></p>
                  <p>Ranchi, Jharkhand</p>
                </div>
              </address>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default MintaTermsAndConditions;