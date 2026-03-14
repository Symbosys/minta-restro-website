"use client";

import {
  CheckCircle2,
  Headphones,
  Truck,
  Users,
  X,
  ArrowLeft,
  ChevronDown,
  Edit2
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../Footer';
import { requestOtpAction, verifyOtpAction } from '../../api/actions/auth';

const PartnerPage = () => {
  const router = useRouter();
  useEffect(() => {
    document.title = "Partner with Minta Restro | Grow Your Business";
  }, []);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<'PHONE' | 'OTP' | 'LOGGED_IN'>('PHONE');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timer, setTimer] = useState<number>(60);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loggedInVendor, setLoggedInVendor] = useState<{ mobile?: string, name?: string, token?: string, [key: string]: any } | null>(null);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  
  useEffect(() => {
    const storedVendor = localStorage.getItem('vendorAuth');
    if (storedVendor) {
      try {
        setLoggedInVendor(JSON.parse(storedVendor));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'OTP' && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer, step]);

  const handleOpenModal = () => {
    setShowModal(true);
    if (loggedInVendor) {
      setStep('LOGGED_IN');
    } else {
      setStep('PHONE');
      setPhoneNumber('');
      setOtp(['', '', '', '']);
      setErrorMsg('');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRequestOtp = async () => {
    if (phoneNumber.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    setErrorMsg('');
    setLoading(true);
    try {
      const res = await requestOtpAction(phoneNumber);
      if (res.success) {
        setStep('OTP');
        setTimer(60);
        setOtp(['', '', '', '']);
      } else {
        setErrorMsg(res.message || 'Failed to send OTP.');
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 4) {
      setErrorMsg('Please enter full OTP.');
      return;
    }
    setErrorMsg('');
    setLoading(true);
    try {
      const res = await verifyOtpAction(phoneNumber, otpCode);
      if (res.success) {
        const vendorData = res.data?.vendor || res.data || {};
        const authData = { 
          token: res.data?.token || vendorData?.token,
          ...vendorData
        };
        localStorage.setItem('vendorAuth', JSON.stringify(authData));
        setLoggedInVendor(authData);
        setStep('LOGGED_IN');
      } else {
        setErrorMsg(res.message || 'Invalid OTP.');
      }
    } catch (err) {
      setErrorMsg('An error occurred during verification.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    setLoading(true);
    const res = await requestOtpAction(phoneNumber);
    setLoading(false);
    if (res.success) {
      setTimer(60);
      setOtp(['', '', '', '']);
      setErrorMsg('');
    } else {
      setErrorMsg(res.message || 'Failed to resend OTP.');
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) value = value.charAt(value.length - 1);
    
    // Allow only numeric input
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
                        mintaPurple: '#8719C6',
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

      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-mintaBlue selection:text-white relative">

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
              <button 
                onClick={handleOpenModal}
                className="bg-mintaBlue hover:bg-mintaPurple text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-xl hover:shadow-mintaBlue/20 transform hover:-translate-y-1 flex items-center gap-2 group"
              >
                {loggedInVendor ? 'View application' : 'Register your shop'}
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
          <button 
           onClick={handleOpenModal}
           className="bg-mintaBlue text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-mintaPurple transition-all shadow-xl hover:shadow-mintaBlue/20 transform hover:-translate-y-1 flex items-center gap-2 mx-auto group">
            {loggedInVendor ? 'View application' : 'Register your shop'}
            <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
          </button>
        </section>

        <Footer />
        
        {/* --- AUTH MODAL (Login & OTP) --- */}
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-8 duration-300">
              
              {/* Phone Step */}
              {step === 'PHONE' && (
                <>
                  {/* Header */}
                  <div className="bg-mintaBlue p-8 pb-10 relative flex flex-col items-center justify-center text-center">
                    <button 
                      onClick={handleCloseModal}
                      className="absolute top-4 left-4 p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="w-20 h-20 bg-white rounded-2xl p-2 mb-4 shadow-lg overflow-hidden flex items-center justify-center">
                       <img src="/logo/logo.jpeg" alt="Minta" className="object-contain w-full h-full" />
                    </div>
                    <h3 className="text-white text-xl font-bold uppercase tracking-widest mt-2">Minta Restro</h3>
                    <p className="text-white/80 text-sm mt-1">Quick & Fresh</p>
                  </div>
                  
                  {/* Body */}
                  <div className="p-8 pb-10 -mt-6 bg-white rounded-t-3xl relative z-10">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-8 max-w-[250px] leading-tight">
                      Enter your mobile number to manage orders
                    </h2>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                        Mobile Number
                      </label>
                      <div className="flex items-center border-[2.5px] border-mintaBlue rounded-full px-5 py-3.5 bg-white focus-within:ring-4 focus-within:ring-mintaBlue/10 transition-all">
                        <div className="flex items-center gap-2 pr-4 border-r-2 border-gray-200">
                          <span className="text-lg">🇮🇳</span>
                          <span className="font-bold text-gray-900">+91</span>
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                        <input
                          type="tel"
                          className="flex-1 bg-transparent border-none outline-none px-4 text-lg font-semibold text-gray-900 placeholder-gray-400"
                          placeholder="9999999999"
                          maxLength={10}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        />
                      </div>
                      {errorMsg && (
                        <p className="text-red-500 text-sm font-medium mt-3 ml-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          {errorMsg}
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={handleRequestOtp}
                      disabled={phoneNumber.length !== 10 || loading}
                      className="w-full bg-mintaBlue hover:bg-mintaBlue/90 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 rounded-full text-lg transition-all shadow-lg active:scale-[0.98]"
                    >
                      {loading ? 'Continuing...' : 'Continue'}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-6 font-medium">
                      By tapping, I accept the <span className="underline cursor-pointer hover:text-gray-800">terms of service</span> & <span className="underline cursor-pointer hover:text-gray-800">privacy policy</span>
                    </p>
                  </div>
                </>
              )}

              {/* OTP Step */}
              {step === 'OTP' && (
                <>
                  <div className="bg-[#8719C6] p-8 pb-10 relative flex flex-col items-center justify-center text-center">
                    <button 
                      onClick={() => {
                        setStep('PHONE');
                        setErrorMsg('');
                      }}
                      className="absolute top-4 left-4 p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="w-20 h-20 bg-white rounded-2xl p-2 mb-4 shadow-lg overflow-hidden flex items-center justify-center">
                       <img src="/logo/logo.jpeg" alt="Minta" className="object-contain w-full h-full" />
                    </div>
                    <h3 className="text-white text-xl font-bold uppercase tracking-widest mt-2">Minta Fresh</h3>
                    <p className="text-white/80 text-sm mt-1">Quick & Fresh</p>
                  </div>

                  <div className="p-8 pb-10 -mt-6 bg-[#f9eae9] rounded-t-3xl relative z-10 flex flex-col h-full">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                      Enter verification code
                    </h2>
                    
                    <div className="flex items-center gap-2 mb-8 text-gray-600 font-medium bg-white/50 self-start px-3 py-1.5 rounded-lg border border-gray-200 backdrop-blur-sm">
                      <span className="text-sm">Sent to +91 {phoneNumber}</span>
                      <button onClick={() => setStep('PHONE')} className="p-1 hover:bg-gray-200 rounded-md transition-colors">
                        <Edit2 className="w-3.5 h-3.5 text-[#8719C6]" />
                      </button>
                    </div>

                    <div className="flex justify-between gap-3 mb-8 px-2">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          ref={(el) => { inputRefs.current[index] = el; }}
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target.value, index)}
                          onKeyDown={(e) => handleOtpKeyDown(e, index)}
                          className="w-14 h-14 text-center text-3xl font-extrabold border-[3px] border-[#8719C6] rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#8719C6]/20 shadow-sm transition-all"
                        />
                      ))}
                    </div>

                    {errorMsg && (
                      <p className="text-red-500 text-sm font-medium -mt-4 mb-4 text-center bg-red-50 p-2 rounded-lg border border-red-100">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      onClick={handleVerifyOtp}
                      disabled={otp.join('').length < 4 || loading}
                      className="w-full bg-[#8719C6] hover:bg-[#7215a8] disabled:bg-gray-300 disabled:text-gray-500 text-white font-bold py-4 rounded-full text-lg transition-all shadow-lg active:scale-[0.98] mb-6"
                    >
                      {loading ? 'Verifying...' : 'Verify'}
                    </button>

                    <div className="mt-auto text-center">
                      <p className="text-gray-600 text-sm font-medium mb-4">
                        Get verification code again in <span className="text-[#8719C6] font-bold">{formatTime(timer)}</span>
                      </p>
                      
                      <button
                        onClick={handleResendOtp}
                        disabled={timer > 0 || loading}
                        className="w-full bg-[#8719C6]/10 text-[#8719C6] hover:bg-[#8719C6]/20 disabled:bg-gray-200 disabled:text-gray-400 font-bold py-3.5 rounded-full transition-all active:scale-[0.98]"
                      >
                         Get via SMS
                      </button>
                    </div>

                  </div>
                </>
              )}

              {/* Logged In Step */}
              {step === 'LOGGED_IN' && loggedInVendor && (
                <>
                  <div className="bg-mintaBlue p-8 pb-10 relative flex flex-col items-center justify-center text-center">
                    <button 
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="w-20 h-20 bg-white rounded-2xl p-2 mb-4 shadow-lg overflow-hidden flex items-center justify-center">
                       <img src="/logo/logo.jpeg" alt="Minta" className="object-contain w-full h-full" />
                    </div>
                    <h3 className="text-white text-xl font-bold uppercase tracking-widest mt-2">{loggedInVendor.name || 'Vendor Profile'}</h3>
                    <p className="text-white/80 text-sm mt-1">+91 {loggedInVendor.mobile || phoneNumber}</p>
                  </div>

                  <div className="p-8 pb-10 -mt-6 bg-white rounded-t-3xl relative z-10 flex flex-col h-full">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-8 max-w-[250px] leading-tight mx-auto text-center">
                      Welcome Back!
                    </h2>
                    
                    <button
                      onClick={() => {
                        router.push('/partner-with-us/onboarding');
                      }}
                      className="w-full bg-mintaBlue hover:bg-mintaBlue/90 text-white font-bold py-4 rounded-full text-lg transition-all shadow-lg active:scale-[0.98] mb-4"
                    >
                      Continue application
                    </button>

                    <button
                      onClick={() => {
                        localStorage.removeItem('vendorAuth');
                        setLoggedInVendor(null);
                        setStep('PHONE');
                        setPhoneNumber('');
                        setOtp(['', '', '', '']);
                      }}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 rounded-full text-lg transition-all active:scale-[0.98]"
                    >
                      Start new application
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
};

const DocumentItem = ({ label, subtext, isLink }: { label: string, subtext?: string, isLink?: boolean }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
    <div>
      <p className="font-semibold text-gray-800">{label}</p>
      {subtext && (
        <p className={`text-xs mt-0.5 ${isLink ? 'text-blue-600 underline cursor-pointer hover:text-blue-700' : 'text-gray-400'}`}>
          {subtext}
        </p>
      )}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-3xl transition-transform hover:-translate-y-2 border border-blue-50/50 shadow-sm hover:shadow-xl hover:shadow-mintaBlue/5">
    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-mintaBlue">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3 text-gray-900">{title}</h4>
    <p className="text-gray-500 leading-relaxed max-w-xs">{description}</p>
  </div>
);

export default PartnerPage;
