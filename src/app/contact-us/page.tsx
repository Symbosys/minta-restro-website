import Head from 'next/head';
import Script from 'next/script';
import Footer from '../Footer';

export default function ContactUs() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page" />
        <link rel="icon" href="/favicon.ico" />
        {/* Import a similar font for the large "Contact Us" text */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
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

      {/* Top Banner Section */}
      <div className="bg-[#e0f2ff] py-12 text-center">
        <div className="container mx-auto px-4">
          <h4 className="text-[#0049AD] text-sm font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </h4>
          <h1 className="text-[#212529] text-5xl md:text-7xl font-extrabold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-[#495057] text-lg">
            We'd love to hear from you. Reach out to our team for any queries or support.
          </p>
        </div>
      </div>

      {/* Main Content Section with Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Headquarter Card */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgb(0,0,0,0.05)] flex flex-col items-center text-center flex-1">
            <div className="bg-[#e0f2ff] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Icon placeholder - replace with an actual icon image or component */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0049AD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-[#212529] text-2xl font-bold mb-2">Headquarter</h3>
            <p className="text-[#0049AD] font-semibold mb-4">Minta Club Private Limited</p>
            <p className="text-[#495057]">Ranchi, Jharkhand</p>
          </div>

          {/* Email Support Card */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgb(0,0,0,0.05)] flex flex-col items-center text-center flex-1 border border-[#e0e0e0]">
            <div className="bg-[#0049AD] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {/* Icon placeholder - replace with an actual icon image or component */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-[#212529] text-2xl font-bold mb-2">Email Support</h3>
            <p className="text-[#495057] mb-4">
              Have a question? Drop us a line and we'll get back to you shortly.
            </p>
            <a href="mailto:support@mintarestro.com" className="text-[#0049AD] font-bold text-lg border-b-2 border-[#e0f2ff] pb-1 hover:border-[#0049AD] transition-colors">
              support@mintarestro.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}