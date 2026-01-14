// import React from 'react';
// import Footer from '../Footer';

// const PartnerTerms = () => {
//   return (
//     <>
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg text-gray-800">
//       {/* Header */}
//       <header className="mb-8 border-b-2 border-gray-200 pb-4">
//         <h1 className="text-3xl font-bold text-center text-gray-900 uppercase">
//           Restaurant Partner Terms and Conditions
//         </h1>
//         <p className="text-center text-sm text-gray-500 mt-2">
//           Legally binding agreement for Food Ordering and Delivery Services
//         </p>
//       </header>

//       {/* Introduction */}
//       <section className="mb-8">
//         <p className="text-justify">
//           [cite_start]These Terms form part of the Restaurant Partner Enrolment Form for Food Ordering and Delivery Services ("Form") and constitute a legally binding agreement made between the Restaurant Partner and Minta Club Private Limited regarding use of Minta Restro's Platform for the provision of Restaurant Services to the Customers[cite: 2923].
//         </p>
//       </section>

//       {/* Section 1: Definitions */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           1. Key Definitions
//         </h2>
//         <ul className="list-disc pl-5 space-y-2 text-justify">
//           <li>
//             [cite_start]<strong>Service fee:</strong> The amount payable by the Restaurant Partner to Minta Restro, as set out in the Form[cite: 2927].
//           </li>
//           <li>
//             [cite_start]<strong>Gross Sales:</strong> The gross amount charged by the Restaurant Partner to any Customer attributable to any Order including all applicable taxes less discounts[cite: 2939].
//           </li>
//           <li>
//             [cite_start]<strong>Restaurant Service:</strong> Supply by way of service of food and beverages items attracting tax under Section 9(5) of the Central Goods and Services Tax Act, 2017[cite: 2963].
//           </li>
//           <li>
//             [cite_start]<strong>Net Order Value:</strong> Order Value received, less the Service fee and any other additional amount or charges due to Minta Restro[cite: 2950].
//           </li>
//         </ul>
//       </section>

//       {/* Section 2: Minta Restro's Obligations */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           2. Minta Restro's Obligations
//         </h2>
//         <div className="space-y-4 text-justify">
//           <p>
//             [cite_start]Minta Restro will list the Restaurant Partner's menu and price list on the Platform and transfer amounts received from Customers in accordance with agreed Terms[cite: 2981, 2982]. [cite_start]Minta Restro will transmit Orders placed by the Customer to the Restaurant Partner via Tablet, Device, or other means[cite: 2986].
//           </p>
//           <div className="bg-yellow-50 p-4 rounded border border-yellow-200 text-sm">
//             [cite_start]<strong>Limitation:</strong> Minta Restro is only responsible for providing a Platform and Logistics Services (if applicable)[cite: 3000]. [cite_start]Minta Restro will not be responsible for the quality of Restaurant Services, processing of Orders, or delay in preparation by the Restaurant Partner[cite: 3000, 3001, 3002].
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Restaurant Partner's Obligations */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           3. Restaurant Partner's Obligations
//         </h2>
//         <div className="space-y-4 text-justify">
//           <ul className="list-disc pl-5 space-y-2">
//             <li>
//               [cite_start]<strong>Non-Discrimination:</strong> The Restaurant Partner will not discriminate while servicing Orders and will not provide preferential treatment to customers ordering independently[cite: 3017, 3018]. [cite_start]The Partner must respect the dignity of Delivery Partners and prevent harassment[cite: 3019].
//             </li>
//             <li>
//               [cite_start]<strong>Information Accuracy:</strong> Partner must ensure information provided (name, address, menu, prices, taxes) is current and accurate[cite: 3024].
//             </li>
//             <li>
//               [cite_start]<strong>Processing:</strong> Partner shall process and execute Orders promptly[cite: 3030]. [cite_start]If unable to provide services, the Partner must turn off the "Accepting Delivery" feature[cite: 3031].
//             </li>
//             <li>
//               [cite_start]<strong>Food Quality:</strong> Partner warrants that food is of high quality, fit for human consumption, and compliant with the Food Safety and Standards Act, 2006[cite: 3040, 3041, 3042].
//             </li>
//             <li>
//               [cite_start]<strong>Packaging:</strong> Orders must be appropriately packed to avoid spillage[cite: 3059]. [cite_start]The Partner must comply with applicable laws on the ban of single-use plastic[cite: 3072].
//             </li>
//             <li>
//               [cite_start]<strong>Pricing parity:</strong> The Restaurant Partner will maintain equal or lower prices for products offered on the Platform compared to its direct channels (dine-in, takeaway, etc.)[cite: 3163].
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Section 6: Devices */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           6. Use of Minta Restro Tablet/Device
//         </h2>
//         <div className="space-y-4 text-justify">
//           <p>
//             [cite_start]The Tablet or Minta Restro Device shall be used solely for confirming/cancelling orders, reviewing particulars, and communicating with Minta Restro[cite: 3175]. [cite_start]The Partner shall not remove the preloaded SIM card[cite: 3179].
//           </p>
//           <p>
//             [cite_start]The Partner agrees that Minta Restro is entitled to recover amounts for lost or damaged devices[cite: 3194]. [cite_start]Specifically, Minta Restro may recover <strong>INR 36,000/-</strong> towards a lost/damaged Tablet and <strong>INR 5,000/-</strong> towards accessories[cite: 3198].
//           </p>
//         </div>
//       </section>

//       {/* Section 9: Payment Settlement */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           9. Payment Settlement Process
//         </h2>
//         <div className="space-y-4 text-justify">
//           <p>
//             [cite_start]Order Value collected by Minta Restro will be passed to the Restaurant Partner subject to deductions for: Service fee, Payment Mechanism Fee, taxes collected by Minta Restro, and other due amounts[cite: 3220, 3221, 3222, 3223].
//           </p>
//           <p>
//             [cite_start]Minta Restro shall remit the Order Value on a weekly settlement basis (usually by Thursday of the following week)[cite: 3226, 3228].
//           </p>
//         </div>
//       </section>

//       {/* Section 10: Charges */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           10. Additional Charges & Penalties
//         </h2>
//         <div className="bg-red-50 p-4 rounded border border-red-200">
//           <p className="mb-3 text-justify">
//             Minta Restro reserves the right to charge additional amounts for orders requiring support or rejected orders:
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-sm text-red-900">
//             <li>
//               [cite_start]<strong>Orders requiring support:</strong> If exceeding 5% of weekly volume, charged at <strong>INR 10.00 per Order</strong>[cite: 3237].
//             </li>
//             <li>
//               [cite_start]<strong>Rejected Orders (Tier 1):</strong> If exceeding 0.5% of weekly volume, charged at <strong>10% of the Net Order Value</strong> of rejected orders[cite: 3238].
//             </li>
//             <li>
//               [cite_start]<strong>Rejected Orders (Tier 2):</strong> If exceeding 2% of weekly volume, charged at <strong>25% of the Net Order Value</strong> of rejected orders[cite: 3238].
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Section 11: Taxes */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           11. Taxes
//         </h2>
//         <div className="space-y-4 text-justify">
//           <p>
//             [cite_start]The Restaurant Partner is responsible for all taxes associated with supplies <em>other than</em> Restaurant Services[cite: 3241].
//           </p>
//           <p className="font-semibold">
//             Restaurant Service Tax (u/s 9(5) CGST Act):
//           </p>
//           <p>
//             W.e.f. [cite_start]January 1, 2022, Minta Restro is responsible for payment and collection of taxes in connection with Customer Orders of Restaurant Service and will deposit the same to appropriate authorities[cite: 3250, 3251].
//           </p>
//           <p>
//             [cite_start]Minta Restro is required to collect Tax Collected at Source (TCS) and deduct Tax Deducted at Source (TDS) as per applicable laws[cite: 3257, 3261].
//           </p>
//         </div>
//       </section>

//       {/* Section 13: Warranty and Indemnity */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           13. Warranty and Indemnity
//         </h2>
//         <p className="text-justify mb-4">
//           The Restaurant Partner agrees to indemnify Minta Restro against any claims arising out of:
//         </p>
//         <ul className="list-disc pl-5 space-y-1 text-justify text-sm">
//           [cite_start]<li>Reasons not attributable to the Service[cite: 3290].</li>
//           [cite_start]<li>Content, Information, or material provided by the Partner[cite: 3291].</li>
//           [cite_start]<li>Quality of Restaurant Services or delivery undertaken by the Partner[cite: 3292, 3294].</li>
//           [cite_start]<li>Collection or payment of applicable taxes[cite: 3293].</li>
//           [cite_start]<li>Misuse, fraud, or misrepresentation by the Partner[cite: 3297].</li>
//         </ul>
//       </section>

//       {/* Section 15: Term and Termination */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           15. Term and Termination
//         </h2>
//         <div className="space-y-4 text-justify">
//           <p>
//             [cite_start]The arrangement continues indefinitely unless terminated[cite: 3315]. [cite_start]Either Party may terminate with <strong>seven (7) days prior written notice</strong>[cite: 3316].
//           </p>
//           <p>
//             [cite_start]Minta Restro may terminate immediately if the Partner fails to conduct business in accordance with Terms, fails to deliver orders for 14 continuous days, engages in fraudulent activity, or becomes insolvent[cite: 3317, 3318, 3320, 3321, 3322].
//           </p>
//         </div>
//       </section>

//       {/* Section 19: Miscellaneous */}
//       <section className="mb-8 bg-gray-50 p-6 rounded-lg">
//         <h2 className="text-xl font-bold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
//           19. Governing Law
//         </h2>
//         <p className="text-justify">
//           [cite_start]This Form shall be governed by the Laws of India, and the courts of New Delhi shall have exclusive jurisdiction over matters arising hereunder[cite: 3350]. [cite_start]Parties shall first endeavour to resolve disputes amicably within fifteen (15) days[cite: 3351].
//         </p>
//       </section>

//       {/* Footer */}
//       <footer className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
//         <p>
//           [cite_start]Minta Restro may modify these Terms from time to time, effective immediately upon reflection on the Platform[cite: 3364].
//         </p>
//       </footer>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default PartnerTerms;


"use client";

import React from 'react';
import Footer from '../Footer';

// Define the theme colors
const COLORS = {
  primary: '#0049AD',    // Deep Purple (for buttons, highlights, borders)
  accent: '#9facf8ff',     // Lavender
  secondary: '#b6d2f8ff',  // Soft Pink/Blue ish
  highlight: '#52b957ff',  // Coral/Peach
  background: '#fafafa', // Default background
  white: '#ffffff',       // White color
  textPrimary: '#222222', // Main text
  textSecondary: '#4a4a4a', // Secondary text
  muted: '#888888',       // Muted text or icons
  yelow: '#fbc02d',      // Gold/Yellow color
  black: '#000000',
  RED: '#b91c1c',     // Red color
  TEXT_DARK: '#1F2937',
  SOFT_BLUE: "#DBEAFE",
  SOFT_RED: "#FEE2E2",
  SOFT_GREEN: "#DCFCE7",
  LITE_GRAY: "#9ca3af",
  SOFT_YELLOW: "#FEF9C3",
};

const PartnerTerms = () => {
  return (
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
        
        {/* The Document Card */}
        <div 
          style={{ backgroundColor: COLORS.white, borderColor: COLORS.LITE_GRAY }} 
          className="max-w-5xl w-full rounded-2xl shadow-xl overflow-hidden border border-opacity-20"
        >
          {/* Card Header / Title Section */}
          <div style={{ backgroundColor: COLORS.SOFT_BLUE }} className="px-8 py-10 text-center border-b border-opacity-10 border-gray-300">
            <p style={{ color: COLORS.primary }} className="font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              Legal Documentation
            </p>
            <h1 style={{ color: COLORS.TEXT_DARK }} className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase leading-tight">
              Restaurant Partner Terms and Conditions
            </h1>
            <p style={{ color: COLORS.textSecondary }} className="text-sm font-medium">
              Legally binding agreement for Food Ordering and Delivery Services
            </p>
          </div>

          {/* Card Body / Document Content */}
          <div className="p-8 md:p-16 space-y-10 text-justify leading-relaxed">

            {/* Introduction */}
            <section>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  These Terms form part of the Restaurant Partner Enrolment Form for Food Ordering and Delivery Services ("Form") and constitute a legally binding agreement made between the Restaurant Partner and Minta Club Private Limited regarding use of Minta Restro's Platform for the provision of Restaurant Services to the Customers.
                </p>
              </div>
            </section>

            {/* Section 1: Definitions */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                1. Key Definitions
              </h2>
              <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-5 space-y-2 text-base">
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Service fee:</strong> The amount payable by the Restaurant Partner to Minta Restro, as set out in the Form.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Gross Sales:</strong> The gross amount charged by the Restaurant Partner to any Customer attributable to any Order including all applicable taxes less discounts.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Restaurant Service:</strong> Supply by way of service of food and beverages items attracting tax under Section 9(5) of the Central Goods and Services Tax Act, 2017.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Net Order Value:</strong> Order Value received, less the Service fee and any other additional amount or charges due to Minta Restro.
                </li>
              </ul>
            </section>

            {/* Section 2: Minta Restro's Obligations */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                2. Minta Restro's Obligations
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  Minta Restro will list the Restaurant Partner's menu and price list on the Platform and transfer amounts received from Customers in accordance with agreed Terms. Minta Restro will transmit Orders placed by the Customer to the Restaurant Partner via Tablet, Device, or other means.
                </p>
                
                {/* Yellow Box for Limitation */}
                <div style={{ backgroundColor: COLORS.SOFT_YELLOW, borderColor: COLORS.yelow }} className="p-6 rounded-lg border text-sm mt-4">
                  <p style={{ color: '#854d0e' }}>
                    <strong>Limitation:</strong> Minta Restro is only responsible for providing a Platform and Logistics Services (if applicable). Minta Restro will not be responsible for the quality of Restaurant Services, processing of Orders, or delay in preparation by the Restaurant Partner.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Restaurant Partner's Obligations */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                3. Restaurant Partner's Obligations
              </h2>
              <ul style={{ color: COLORS.textSecondary }} className="list-disc pl-5 space-y-2 text-base">
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Non-Discrimination:</strong> The Restaurant Partner will not discriminate while servicing Orders and will not provide preferential treatment to customers ordering independently. The Partner must respect the dignity of Delivery Partners and prevent harassment.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Information Accuracy:</strong> Partner must ensure information provided (name, address, menu, prices, taxes) is current and accurate.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Processing:</strong> Partner shall process and execute Orders promptly. If unable to provide services, the Partner must turn off the "Accepting Delivery" feature.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Food Quality:</strong> Partner warrants that food is of high quality, fit for human consumption, and compliant with the Food Safety and Standards Act, 2006.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Packaging:</strong> Orders must be appropriately packed to avoid spillage. The Partner must comply with applicable laws on the ban of single-use plastic.
                </li>
                <li>
                  <strong style={{ color: COLORS.textPrimary }}>Pricing parity:</strong> The Restaurant Partner will maintain equal or lower prices for products offered on the Platform compared to its direct channels (dine-in, takeaway, etc.).
                </li>
              </ul>
            </section>

            {/* Section 6: Devices */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                6. Use of Minta Restro Tablet/Device
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  The Tablet or Minta Restro Device shall be used solely for confirming/cancelling orders, reviewing particulars, and communicating with Minta Restro. The Partner shall not remove the preloaded SIM card.
                </p>
                <p>
                  The Partner agrees that Minta Restro is entitled to recover amounts for lost or damaged devices. Specifically, Minta Restro may recover <strong style={{ color: COLORS.primary }}>INR 36,000/-</strong> towards a lost/damaged Tablet and <strong style={{ color: COLORS.primary }}>INR 5,000/-</strong> towards accessories.
                </p>
              </div>
            </section>

            {/* Section 9: Payment Settlement */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                9. Payment Settlement Process
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  Order Value collected by Minta Restro will be passed to the Restaurant Partner subject to deductions for: Service fee, Payment Mechanism Fee, taxes collected by Minta Restro, and other due amounts.
                </p>
                <p>
                  Minta Restro shall remit the Order Value on a weekly settlement basis (usually by Thursday of the following week).
                </p>
              </div>
            </section>

            {/* Section 10: Charges */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                10. Additional Charges & Penalties
              </h2>
              
              {/* Red Box for Penalties */}
              <div style={{ backgroundColor: COLORS.SOFT_RED, borderColor: COLORS.RED }} className="p-6 rounded-lg border text-sm">
                <p style={{ color: COLORS.RED }} className="mb-3 text-justify">
                  Minta Restro reserves the right to charge additional amounts for orders requiring support or rejected orders:
                </p>
                <ul style={{ color: COLORS.RED }} className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Orders requiring support:</strong> If exceeding 5% of weekly volume, charged at <strong>INR 10.00 per Order</strong>.
                  </li>
                  <li>
                    <strong>Rejected Orders (Tier 1):</strong> If exceeding 0.5% of weekly volume, charged at <strong>10% of the Net Order Value</strong> of rejected orders.
                  </li>
                  <li>
                    <strong>Rejected Orders (Tier 2):</strong> If exceeding 2% of weekly volume, charged at <strong>25% of the Net Order Value</strong> of rejected orders.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 11: Taxes */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                11. Taxes
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  The Restaurant Partner is responsible for all taxes associated with supplies <em>other than</em> Restaurant Services.
                </p>
                <p className="font-semibold" style={{ color: COLORS.textPrimary }}>
                  Restaurant Service Tax (u/s 9(5) CGST Act):
                </p>
                <p>
                  W.e.f. January 1, 2022, Minta Restro is responsible for payment and collection of taxes in connection with Customer Orders of Restaurant Service and will deposit the same to appropriate authorities.
                </p>
                <p>
                  Minta Restro is required to collect Tax Collected at Source (TCS) and deduct Tax Deducted at Source (TDS) as per applicable laws.
                </p>
              </div>
            </section>

            {/* Section 13: Warranty and Indemnity */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                13. Warranty and Indemnity
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  The Restaurant Partner agrees to indemnify Minta Restro against any claims arising out of:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Reasons not attributable to the Service</li>
                  <li>Content, Information, or material provided by the Partner</li>
                  <li>Quality of Restaurant Services or delivery undertaken by the Partner</li>
                  <li>Collection or payment of applicable taxes</li>
                  <li>Misuse, fraud, or misrepresentation by the Partner</li>
                </ul>
              </div>
            </section>

            {/* Section 15: Term and Termination */}
            <section>
              <h2 style={{ color: COLORS.textPrimary, borderLeftColor: COLORS.primary }} className="text-xl font-bold mb-6 border-l-4 pl-4">
                15. Term and Termination
              </h2>
              <div style={{ color: COLORS.textSecondary }} className="space-y-4 text-base">
                <p>
                  The arrangement continues indefinitely unless terminated. Either Party may terminate with <strong style={{ color: COLORS.primary }}>seven (7) days prior written notice</strong>.
                </p>
                <p>
                  Minta Restro may terminate immediately if the Partner fails to conduct business in accordance with Terms, fails to deliver orders for 14 continuous days, engages in fraudulent activity, or becomes insolvent.
                </p>
              </div>
            </section>

            {/* Section 19: Miscellaneous / Governing Law */}
            <section>
              <div style={{ backgroundColor: COLORS.background, borderColor: COLORS.LITE_GRAY }} className="p-6 rounded-lg border">
                <h2 style={{ color: COLORS.primary }} className="text-xl font-bold mb-3">
                  19. Governing Law
                </h2>
                <p style={{ color: COLORS.textSecondary }} className="text-justify text-sm">
                  This Form shall be governed by the Laws of India, and the courts of New Delhi shall have exclusive jurisdiction over matters arising hereunder. Parties shall first endeavour to resolve disputes amicably within fifteen (15) days.
                </p>
              </div>
            </section>
            
            {/* Disclaimer / Footer Note */}
            <div className="pt-8 mt-8 border-t border-gray-100 text-center">
              <p style={{ color: COLORS.muted }} className="text-xs italic">
                Minta Restro may modify these Terms from time to time, effective immediately upon reflection on the Platform.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerTerms;