"use client";

import Head from 'next/head';
import Script from 'next/script';
import Footer from "../Footer";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | Minta Restro</title>
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

    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Header Section */}
          <div className="bg-blue-600 px-8 py-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute left-0 top-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"></div>
              <div className="absolute right-0 bottom-0 w-64 h-64 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-300 blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Refund Policy
              </h1>
              <div className="mt-6 w-24 h-1.5 bg-blue-300 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed bg-white">
          
            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                1. Purpose
              </h2>
              <div className="space-y-3 text-gray-600 ml-5 text-lg">
                <p>
                  This Refund Policy outlines our commitment to transparency, fairness, and consumer protection in
                  all transactions conducted through the Minta Restro platform (“Platform”).
                </p>
                <p>
                  We aim to resolve concerns efficiently while balancing the interests of customers, restaurant
                  partners, and delivery partners.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                2. Scope
              </h2>
              <div className="space-y-3 text-gray-600 ml-5">
                <p className="font-semibold text-gray-800 text-lg">This Policy applies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Food delivery orders</li>
                  <li>Platform service fees</li>
                  <li>Promotional or campaign-related payments</li>
                </ul>
                <p className="text-lg mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-900">
                  Transactions processed through the Platform are subject to applicable laws and the payment
                  policies permitted under Google Play.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-6 bg-gray-50 py-2 rounded-r-lg">
                3. Eligibility for Refund
              </h2>
              <div className="space-y-6 ml-5">
                <p className="text-gray-800 font-medium text-lg mb-4">A refund may be issued under the following circumstances:</p>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3"></span>
                    3.1 Order Cancellation Before Confirmation
                  </h3>
                  <ul className="list-disc pl-8 text-gray-600 text-lg">
                    <li>If an order is cancelled before restaurant confirmation, a full refund will be processed.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3"></span>
                    3.2 Restaurant Unable to Fulfill Order
                  </h3>
                  <ul className="list-disc pl-8 text-gray-600 text-lg">
                    <li>If the restaurant declines or fails to process the order, a full refund will be issued.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3"></span>
                    3.3 Incorrect or Missing Items
                  </h3>
                  <ul className="list-disc pl-8 text-gray-600 text-lg">
                    <li>Refunds (partial or full) may be granted after review of supporting details.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3"></span>
                    3.4 Food Quality Issues
                  </h3>
                  <ul className="list-disc pl-8 text-gray-600 text-lg space-y-2">
                    <li>Refund eligibility is subject to verification.</li>
                    <li>Supporting images or evidence may be requested.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3"></span>
                    3.5 Delivery-Related Issues
                  </h3>
                  <ul className="list-disc pl-8 text-gray-600 text-lg space-y-2">
                    <li>Excessive delays attributable to the platform or delivery partner.</li>
                    <li>Order marked delivered but not received (subject to investigation).</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-inner">
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <span className="bg-red-200 text-red-800 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-lg">4</span>
                Non-Refundable Situations
              </h2>
              <div className="space-y-4 text-red-900 ml-2">
                <p className="text-lg font-medium">
                  Refunds may not be provided in cases including but not limited to:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-lg bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                  <li>Change of mind after order preparation</li>
                  <li>Incorrect delivery details provided by the customer</li>
                  <li>Minor taste preferences</li>
                  <li>Abuse of refund policy or repeated fraudulent claims</li>
                </ul>
                <p className="mt-6 pt-4 border-t border-red-200 font-bold text-red-800 text-lg text-center">
                  Minta Restro reserves the right to decline refund requests that violate platform policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-6 bg-gray-50 py-2 rounded-r-lg">
                5. Refund Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-5">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 bg-white inline-block px-3 py-1 rounded-md border border-blue-100">5.1 How to Request</h3>
                  <p className="text-gray-700 mb-3 text-lg font-medium">Refund requests must be submitted via:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
                    <li>In-app customer support</li>
                    <li>Registered support email</li>
                    <li>Help centre portal</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 bg-white inline-block px-3 py-1 rounded-md border border-blue-100">5.2 Review & Verification</h3>
                  <p className="text-gray-700 mb-3 text-lg font-medium">All refund requests are subject to review. We may contact:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3 text-lg">
                    <li>The restaurant partner</li>
                    <li>The delivery partner</li>
                    <li>The customer</li>
                  </ul>
                  <p className="text-gray-700 text-lg font-medium">to determine eligibility.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                6. Refund Timelines
              </h2>
              <div className="space-y-4 text-gray-600 ml-5 text-lg">
                <p className="font-medium text-gray-800">Approved refunds will be processed as follows:</p>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-4"></span>
                      <strong className="text-gray-900 border-b border-blue-200 pb-1 mr-2">Credit/Debit Cards:</strong> 5–10 business days
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-4"></span>
                      <strong className="text-gray-900 border-b border-blue-200 pb-1 mr-2">Digital Wallets/UPI:</strong> 2–7 business days
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-4"></span>
                      <strong className="text-gray-900 border-b border-blue-200 pb-1 mr-2">In-app Wallet Credits</strong> (if applicable): Immediate or within 24 hours
                    </li>
                  </ul>
                </div>
                <p className="text-sm italic mt-4 text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                  Actual timelines may vary depending on the financial institution.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                7. Mode of Refund
              </h2>
              <div className="space-y-3 text-gray-600 ml-5 text-lg">
                <p className="font-medium text-gray-800">Refunds will generally be processed to:</p>
                <ul className="list-disc pl-6 space-y-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <li>The original payment method, or</li>
                  <li>Minta Restro wallet credits (where applicable and accepted by user)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                8. Promotional Offers & Coupons
              </h2>
              <div className="space-y-3 text-gray-600 ml-5 text-lg">
                <ul className="list-disc pl-6 space-y-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <li>If a promotional code was used, the refund amount may exclude the discount portion.</li>
                  <li>Promotional benefits may be reinstated at Minta Restro’s discretion.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                9. Chargebacks & Payment Disputes
              </h2>
              <div className="space-y-4 text-gray-600 ml-5 text-lg">
                <p className="font-medium text-gray-800">If a customer initiates a chargeback through their bank:</p>
                <ul className="list-disc pl-6 space-y-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <li>The matter will be reviewed in accordance with financial regulations.</li>
                  <li>Minta Restro reserves the right to suspend accounts in case of fraudulent disputes.</li>
                </ul>
                <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl shadow-sm border border-blue-100">
                  <p className="text-blue-900 font-medium">
                    All payment processing practices comply with secure transaction standards and permitted payment
                    structures under Google Play policies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-6 bg-gray-50 py-2 rounded-r-lg">
                10. Partner Responsibility
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-5">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Restaurants are responsible for:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                    <li>Food preparation quality</li>
                    <li>Accurate packaging</li>
                    <li>Compliance with food safety regulations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Delivery partners are responsible for:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                    <li>Proper handling</li>
                    <li>Timely delivery</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 ml-5 mt-6 italic text-sm text-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                Refunds attributable to partner errors may be adjusted in partner settlements as per contractual
                terms.
              </p>
            </section>

            <section className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200 shadow-inner">
              <h2 className="text-2xl font-bold text-yellow-900 mb-6 flex items-center">
                <span className="bg-yellow-200 text-yellow-900 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-lg">11</span>
                Policy Abuse & Fraud Prevention
              </h2>
              <div className="space-y-4 text-yellow-900 ml-2">
                <p className="text-lg font-medium">Minta Restro monitors refund activity to prevent:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg bg-white p-5 rounded-xl border border-yellow-100 shadow-sm">
                  <li>Repeated false claims</li>
                  <li>Manipulation of policies</li>
                  <li>Misuse of promotional credits</li>
                </ul>
                <p className="mt-6 pt-4 border-t border-yellow-300 font-bold text-center text-lg">
                  Accounts engaging in suspicious behaviour may be suspended or permanently restricted.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                12. Consumer Protection Compliance
              </h2>
              <div className="space-y-3 text-gray-600 ml-5 text-lg">
                <p className="font-medium text-gray-800">This Refund Policy is designed in alignment with:</p>
                <ul className="list-disc pl-6 space-y-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <li>Applicable consumer protection laws</li>
                  <li>E-commerce regulations</li>
                  <li>Fair trade practices</li>
                  <li>Digital platform standards, including those of Google Play</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4 bg-gray-50 py-2 rounded-r-lg">
                13. Amendments
              </h2>
              <div className="space-y-4 text-gray-600 ml-5 text-lg">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="mb-4">
                    Minta Restro reserves the right to amend this Refund Policy at any time. Updated versions will be
                    published on the Platform.
                  </p>
                  <p className="font-medium text-gray-800 border-t pt-4">
                    Continued use of the Platform constitutes acceptance of the revised policy.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Contact Footer */}
          <div className="bg-gray-900 text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              14. Contact Information
            </h2>
            <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <p className="text-gray-300 mb-4 text-lg">For refund-related inquiries, contact:</p>
              <div className="space-y-2">
                <p className="font-bold text-2xl text-white group-hover:text-blue-200 transition-colors">Minta Restro Customer Support</p>
                <p className="text-gray-400 text-lg flex items-center justify-center mt-2">
                  <span className="mr-2">Email:</span> 
                  <a href="mailto:support@mintarestro.com" className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-all">
                    support@mintarestro.com
                  </a>
                </p>
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