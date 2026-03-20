"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
import Step1 from '../../../components/steps/Step1';
import Step2 from '../../../components/steps/Step2';
import Step3 from '../../../components/steps/Step3';
import Step4 from '../../../components/steps/Step4';
import Step5 from '../../../components/steps/Step5';
import Step6 from '../../../components/steps/Step6';
import Step7 from '../../../components/steps/Step7';
import { fetchVendorMeAction } from '../../../api/actions/vendor';

const steps = [
  { id: 1, title: 'Restaurant information', sub: 'Name, location and contact number' },
  { id: 2, title: 'Restaurant documents', sub: 'Pan card, GST and FSSAI license' },
  { id: 3, title: 'Menu and operational details', sub: 'Menu, images and timings' },
  { id: 4, title: 'Shop Images', sub: 'Upload images of your shop/outlet' },
  { id: 5, title: 'Manage Inventory', sub: 'Select categories and products you sell' },
  { id: 6, title: 'Bank Details', sub: 'Add bank account for payouts' },
  { id: 7, title: 'Signature', sub: 'Upload your signature' },
];

const getStepFromStatus = (status: string) => {
  switch (status) {
    case 'NEW':
    case 'PROFILE_COMPLETION_NOT_FILLED':
      return 1;
    case 'DOCUMENTS_NOT_VERIFIED':
      return 2;
    case 'SHOP_DETAILS_NOT_FILLED':
      return 3;
    case 'SHOP_IMAGES_NOT_UPLOADED':
      return 4;
    case 'PRODUCT_SELECTION_NOT_DONE':
      return 5;
    case 'BANK_ACCOUNT_NOT_ADDED':
      return 6;
    case 'SIGNATURE_NOT_UPLOADED':
      return 7;
    case 'PENDING':
    case 'APPROVED':
    case 'REJECTED':
    case 'BLOCKED':
      return 8; // Onboarding complete or status summary
    default:
      return 1;
  }
};

export default function OnboardingPage() {
  const router = useRouter();
  const [vendorData, setVendorData] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadVendor() {
      const storedVendor = localStorage.getItem('vendorAuth');
      if (storedVendor) {
        try {
          const parsed = JSON.parse(storedVendor);
          setVendorData(parsed);
          
          // Fetch latest from server to ensure pre-render has all data
          if (parsed.token) {
            const res = await fetchVendorMeAction(parsed.token);
            if (res.success && res.data) {
              const fullData = { ...parsed, ...res.data };
              setVendorData(fullData);
              localStorage.setItem('vendorAuth', JSON.stringify(fullData));
              
              // Set step based on latest status
              const targetStep = getStepFromStatus(res.data.status);
              if (targetStep <= steps.length) {
                setCurrentStep(targetStep);
              } else {
                 setCurrentStep(steps.length); // or a final summary step if we build one
              }
            }
          }
          setIsLoaded(true);
        } catch (e) {
          setIsLoaded(true);
        }
      } else {
        router.push('/partner-with-us');
      }
    }
    loadVendor();
  }, [router]);

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]"><div className="w-8 h-8 border-4 border-[#8719C6] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[#f8fafc] font-sans selection:bg-[#8719C6]/20 selection:text-gray-900">
      <Head>
        <title>Onboarding | Minta Restro</title>
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-8 flex shrink-0 items-center justify-between z-50">
        <Link href="/partner-with-us" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-black text-[#8719C6] tracking-tighter italic m-0">Minta Restro</h1>
          <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">Partner</span>
        </Link>
        <div className="text-sm font-medium text-gray-600 hidden sm:block">
          Need help? <a href="tel:+919123456789" className="text-gray-900 font-bold hover:text-[#8719C6] transition-colors">+91 91234 56789</a>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-[1240px] w-full mx-auto flex-1 flex flex-col md:flex-row gap-6 p-6 min-h-0">
        
        {/* Sidebar Stepper */}
        <div className="w-full md:w-[300px] shrink-0 flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Complete your registration</h2>
            <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">Step {currentStep} of {steps.length}</p>

            <div className="relative">
            {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-6 w-[2px] bg-gray-200"></div>

              <div className="flex flex-col gap-5 relative z-10">
                {steps.map((step, index) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = step.id < currentStep;

                  return (
                    <div key={step.id} className="flex items-start gap-4">
                      {/* Step Icon */}
                      <div className="mt-0.5 bg-white relative">
                        {isActive ? (
                          <div className="w-6 h-6 rounded-full border border-[#8719C6] flex items-center justify-center bg-white shadow-sm relative z-10">
                            <Check className="w-3.5 h-3.5 text-[#8719C6]" strokeWidth={3} />
                          </div>
                        ) : isCompleted ? (
                          <div 
                            onClick={() => setCurrentStep(step.id)}
                            className="w-6 h-6 rounded-full border border-[#8719C6] flex items-center justify-center cursor-pointer hover:bg-gray-50 shadow-sm relative z-10"
                          >
                             <Check className="w-3.5 h-3.5 text-[#8719C6]" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center bg-white relative z-10">
                             <span className="text-gray-400 text-xs font-semibold">{step.id}</span>
                          </div>
                        )}
                      </div>

                      {/* Step Text */}
                      <div className="flex-1 mt-0.5">
                        <h4 className={`text-[13px] font-bold ${isActive ? 'text-[#8719C6]' : 'text-gray-500'}`}>
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                          {step.sub}
                        </p>
                        {isActive && (
                          <button className="mt-2.5 bg-[#0066FF] hover:bg-blue-700 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-colors active:scale-95">
                            Continue <span className="text-[9px]">❯</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10 flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            {currentStep === 1 && (
              <Step1 
                vendorData={vendorData} 
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  setCurrentStep(Math.min(currentStep + 1, steps.length));
                }} 
              />
            )}

            {currentStep === 2 && (
              <Step2
                vendorData={vendorData}
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  setCurrentStep(Math.min(currentStep + 1, steps.length));
                }}
                onPrev={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              />
            )}

            {currentStep === 3 && (
              <Step3
                vendorData={vendorData}
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  setCurrentStep(Math.min(currentStep + 1, steps.length));
                }}
                onPrev={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              />
            )}
            
            {currentStep === 4 && (
              <Step4
                vendorData={vendorData}
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  setCurrentStep(Math.min(currentStep + 1, steps.length));
                }}
                onPrev={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              />
            )}
            
            {currentStep === 5 && (
              <Step5
                vendorData={vendorData}
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  setCurrentStep(Math.min(currentStep + 1, steps.length));
                }}
                onPrev={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              />
            )}
            
            {currentStep === 6 && (
              <Step6
                vendorData={vendorData}
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  setCurrentStep(Math.min(currentStep + 1, steps.length));
                }}
                onPrev={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              />
            )}
            
            {currentStep === 7 && (
              <Step7
                vendorData={vendorData}
                onNext={(updatedData?: any) => {
                  if (updatedData) setVendorData((prev: any) => ({ ...prev, ...updatedData }));
                  // Final step logic
                  router.push('/partner-with-us/congratulations'); 
                }}
                onPrev={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              />
            )}
            
            {currentStep > 7 && (
               <div className="flex flex-col items-center justify-center h-[400px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-gray-300" />
                 </div>
                 <h2 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">{steps[currentStep-1]?.title || 'Complete'}</h2>
                 <p className="text-gray-500 text-center max-w-sm font-medium">Your onboarding is complete. Please wait for approval.</p>
                 
                 <div className="flex gap-4 mt-8">
                   <button 
                     onClick={() => setCurrentStep(Math.max(currentStep - 1, 1))}
                     className="bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-8 rounded-lg transition-all active:scale-95"
                   >
                     Previous
                   </button>
                 </div>
               </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
