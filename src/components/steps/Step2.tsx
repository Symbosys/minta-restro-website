import React, { useState, useEffect } from 'react';
import { fetchVendorDocumentAction, verifyVendorDocumentAction } from '../../api/actions/document';
import { fetchVendorMeAction, updateVendorAction } from '../../api/actions/vendor';
import { Check, ShieldCheck, ChevronRight, ChevronLeft, CreditCard, FileIcon, Building2 } from 'lucide-react';

type DocumentType = 'aadhaar' | 'pan' | 'fssai';

export default function Step2({ vendorData, onNext, onPrev }: { vendorData: any, onNext: (data?: any) => void, onPrev: () => void }) {
  const [activeStep, setActiveStep] = useState<DocumentType>('aadhaar');
  const [document, setDocument] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [aadhaarInput, setAadhaarInput] = useState('');
  const [panInput, setPanInput] = useState('');
  const [fassaiInput, setFassaiInput] = useState('');

  useEffect(() => {
    async function init() {
      if (vendorData?.id || vendorData?._id) {
        setIsLoading(true);
        const res = await fetchVendorDocumentAction(vendorData.id || vendorData._id, vendorData.token);
        if (res.success && res.data) {
          const doc = res.data;
          setDocument(doc);
          if (doc.aadhaarNumber) setAadhaarInput(doc.aadhaarNumber);
          if (doc.panNumber) setPanInput(doc.panNumber);
          if (doc.fassaiNumber) setFassaiInput(doc.fassaiNumber);
        }
        setIsLoading(false);
      }
    }
    init();
  }, [vendorData]);

  const documentConfig = {
    aadhaar: {
      id: 'aadhaar',
      title: 'Aadhaar Card',
      subtitle: 'Enter your 12-digit Aadhaar number',
      placeholder: '1234 5678 9012',
      maxLength: 12,
      icon: <CreditCard className="w-5 h-5" />,
      validate: (val: string) => /^\d{12}$/.test(val.replace(/\s/g, '')),
      errorMsg: 'Please enter a valid 12-digit Aadhaar number',
    },
    pan: {
      id: 'pan',
      title: 'PAN Card',
      subtitle: 'Enter your 10-character PAN number',
      placeholder: 'ABCDE1234F',
      maxLength: 10,
      icon: <FileIcon className="w-5 h-5" />,
      validate: (val: string) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(val.toUpperCase()),
      errorMsg: 'Please enter a valid PAN (e.g., ABCDE1234F)',
    },
    fssai: {
      id: 'fssai',
      title: 'FSSAI License',
      subtitle: 'Enter your 14-digit FSSAI number',
      placeholder: '12345678901234',
      maxLength: 14,
      icon: <Building2 className="w-5 h-5" />,
      validate: (val: string) => /^\d{14}$/.test(val),
      errorMsg: 'Please enter a valid 14-digit FSSAI number',
    },
  };

  const config = documentConfig[activeStep];

  const getCurrentInput = () => {
    switch (activeStep) {
      case 'aadhaar': return aadhaarInput;
      case 'pan': return panInput;
      case 'fssai': return fassaiInput;
    }
  };

  const setCurrentInput = (val: string) => {
    switch (activeStep) {
      case 'aadhaar': setAadhaarInput(val); break;
      case 'pan': setPanInput(val.toUpperCase()); break;
      case 'fssai': setFassaiInput(val); break;
    }
  };

  const isVerified = (step: DocumentType = activeStep) => {
    switch (step) {
      case 'aadhaar': return document?.isAadhaarVerified ?? false;
      case 'pan': return document?.isPanVerified ?? false;
      case 'fssai': return document?.isFassaiVerified ?? false;
    }
  };

  const hasDocument = (step: DocumentType = activeStep) => {
    switch (step) {
      case 'aadhaar': return !!document?.aadhaarNumber;
      case 'pan': return !!document?.panNumber;
      case 'fssai': return !!document?.fassaiNumber;
    }
  };

  const handleVerify = async () => {
    let input = getCurrentInput().replace(/\s/g, ''); // strip spaces mostly for aadhaar UX

    if (!config.validate(input)) {
      setErrorMsg(config.errorMsg);
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    const data = {
      ...(activeStep === 'aadhaar' && { aadhaarNumber: input }),
      ...(activeStep === 'pan' && { panNumber: input }),
      ...(activeStep === 'fssai' && { fassaiNumber: input }),
    };

    try {
      const res = await verifyVendorDocumentAction(data, vendorData.token);
      if (res.success && res.data) {
        setDocument(res.data);
        if (activeStep === 'aadhaar') setActiveStep('pan');
        else if (activeStep === 'pan') setActiveStep('fssai');
      } else {
        setErrorMsg(res.message);
      }
    } catch (e: any) {
      setErrorMsg('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = async () => {
    setIsLoading(true);
    const res = await updateVendorAction(vendorData.id || vendorData._id, { status: 'SHOP_DETAILS_NOT_FILLED' }, vendorData.token);
    setIsLoading(false);
    if (res.success) {
      onNext(res.data?.data || res.data);
    } else {
      setErrorMsg(res.message);
    }
  };

  const verifiedCount =
    (document?.isAadhaarVerified ? 1 : 0) +
    (document?.isPanVerified ? 1 : 0) +
    (document?.isFassaiVerified ? 1 : 0);

  const allVerified = verifiedCount === 3;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1f2937] mb-1">Restaurant documents</h2>
          <p className="text-gray-500 text-[15px]">KYC, Pan card, GST and FSSAI license</p>
        </div>
        <div className="bg-[#E7F7ED] border border-[#d2efe0] text-[#0C8B3B] px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          {verifiedCount} of 3 verified
        </div>
      </div>
      <div className="h-px bg-gray-200 w-full mb-8 shrink-0"></div>

      {/* Tabs */}
      <div className="flex bg-gray-50/80 p-1.5 rounded-xl border border-gray-100 mb-8 shrink-0">
        {(['aadhaar', 'pan', 'fssai'] as DocumentType[]).map((step) => {
          const active = activeStep === step;
          const verified = isVerified(step);
          return (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-all relative ${active ? 'bg-white shadow-sm ring-1 ring-gray-200/50' : 'hover:bg-gray-100'
                }`}
            >
              <div className={`mb-1.5 ${active ? 'text-[#8719C6]' : 'text-gray-400'}`}>
                {documentConfig[step].icon}
              </div>
              <span className={`text-[12px] font-bold ${active ? 'text-gray-900' : 'text-gray-500'}`}>
                {documentConfig[step].title}
              </span>
              {verified && (
                <div className="absolute top-2 right-2 md:right-4 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Form Area */}
      <div className="flex-1 min-h-0 bg-[#F9FAFB] rounded-2xl border border-gray-100 p-8 flex flex-col justify-center items-center shadow-inner relative overflow-y-auto">
        <div className="max-w-[400px] w-full">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 text-[#8719C6]">
              {config.icon}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">{config.title}</h3>
            <p className="text-gray-500 text-sm font-medium">{config.subtitle}</p>
          </div>

          {errorMsg && (
            <div className="mb-6 mx-auto w-full p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md text-center">
              {errorMsg}
            </div>
          )}

          <div className="mb-8">
            <input
              type="text"
              value={getCurrentInput()}
              onChange={(e) => setCurrentInput(e.target.value)}
              maxLength={config.maxLength}
              placeholder={config.placeholder}
              disabled={isVerified(activeStep)}
              className="w-full text-center text-3xl font-black tracking-[0.2em] text-gray-800 bg-white border-2 border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/10 rounded-xl py-5 outline-none transition-all uppercase disabled:opacity-70 disabled:bg-gray-50 shadow-sm"
            />

            {isVerified(activeStep) && (
              <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 py-2.5 px-4 rounded-lg border border-emerald-100 mx-auto w-full">
                <ShieldCheck className="w-5 h-5" />
                Document Securely Verified
              </div>
            )}
          </div>

          {!isVerified(activeStep) && (
            <button
              onClick={handleVerify}
              disabled={isLoading || (hasDocument(activeStep) && isVerified(activeStep))}
              className="w-full bg-[#8719C6] hover:bg-[#7215a8] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center text-lg active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </div>
              ) : (
                'Verify Document'
              )}
            </button>
          )}

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => {
                if (activeStep === 'pan') setActiveStep('aadhaar');
                else if (activeStep === 'fssai') setActiveStep('pan');
              }}
              className={`text-sm font-bold flex items-center gap-1 transition-colors ${activeStep === 'aadhaar' ? 'opacity-0 pointer-events-none' : 'text-gray-500 hover:text-gray-900'}`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={() => {
                if (activeStep === 'aadhaar') setActiveStep('pan');
                else if (activeStep === 'pan') setActiveStep('fssai');
              }}
              className={`text-sm font-bold flex items-center gap-1 transition-colors ${activeStep === 'fssai' ? 'opacity-0 pointer-events-none' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between shrink-0">
        <button
          onClick={onPrev}
          className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-8 rounded-md transition-all text-[15px]"
        >
          Back
        </button>
        {allVerified && (
          <button
            onClick={handleContinue}
            disabled={isLoading}
            className="bg-[#10b981] hover:bg-[#059669] text-white font-medium py-2.5 px-8 rounded-md transition-all shadow-md active:scale-95 text-[15px] flex items-center justify-center gap-2"
          >
            {isLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
