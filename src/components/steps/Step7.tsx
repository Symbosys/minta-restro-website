"use client";

import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { 
  PenTool, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  FileText,
  Lock,
  RefreshCcw,
  ShieldCheck
} from 'lucide-react';
import { uploadSignatureAction } from '../../api/actions/signature';

export default function Step7({ vendorData, onNext, onPrev }: { vendorData: any, onNext: (data?: any) => void, onPrev: () => void }) {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasExistingSignature, setHasExistingSignature] = useState(false);
  const [existingSignatureUrl, setExistingSignatureUrl] = useState<string | null>(null);

  useEffect(() => {
    if (vendorData?.signature) {
      try {
        const sig = typeof vendorData.signature === 'string' 
          ? JSON.parse(vendorData.signature) 
          : vendorData.signature;
        if (sig?.url) {
          setHasExistingSignature(true);
          setExistingSignatureUrl(sig.url);
        }
      } catch (e) {
        console.error("Error parsing signature", e);
      }
    }
  }, [vendorData]);

  const clear = () => {
    sigCanvas.current?.clear();
  };

  const handleSaveSignature = async () => {
    if (sigCanvas.current?.isEmpty()) {
      setErrorMsg('Please provide your signature before submitting.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      // Get signature as data URL and convert to blob
      const dataURL = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png');
      if (!dataURL) throw new Error("Failed to capture signature");

      const blob = await (await fetch(dataURL)).blob();
      const file = new File([blob], 'signature.png', { type: 'image/png' });

      const formData = new FormData();
      formData.append('signature', file);
      formData.append('status', 'PENDING');

      const res = await uploadSignatureAction(formData, vendorData.id, vendorData.token);
      
      if (res.success) {
        setIsSuccess(true);
        // Onboarding is complete, status PENDING means waiting for admin approval
        const updatedVendor = { ...vendorData, status: 'PENDING', signature: res.data.signature };
        localStorage.setItem('vendorAuth', JSON.stringify(updatedVendor));
        
        // Brief delay for success animation
        setTimeout(() => {
          onNext(updatedVendor);
        }, 1500);
      } else {
        setErrorMsg(res.message);
      }
    } catch (error) {
       setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm border-2 border-green-200">
           <ShieldCheck className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">Registration Submitted!</h2>
        <p className="text-gray-500 text-lg font-medium text-center max-w-sm">
          Your profile has been sent for verification. We will notify you once it's approved.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto pb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-1">Final Step: Signature</h2>
        <p className="text-gray-500 text-[15px]">Sign digitally to complete your registration process.</p>
      </div>
      <div className="h-px bg-gray-200 w-full mb-8"></div>

      {errorMsg && (
        <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 shadow-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-semibold">{errorMsg}</p>
        </div>
      )}

      {hasExistingSignature ? (
        <div className="space-y-8 animate-in fade-in duration-700">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 flex flex-col items-center">
            <div className="flex items-center gap-2 text-green-600 mb-6 bg-green-50 px-4 py-2 rounded-full border border-green-100">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Signature Verified</span>
            </div>
            
            <div className="w-full h-64 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center p-6 overflow-hidden">
               {existingSignatureUrl ? (
                 <img src={existingSignatureUrl} alt="Existing Signature" className="max-w-full max-h-full object-contain mix-blend-multiply" />
               ) : (
                 <div className="w-8 h-8 border-3 border-gray-200 border-t-gray-400 rounded-full animate-spin"></div>
               )}
            </div>
            
            <button 
              onClick={() => setHasExistingSignature(false)}
              className="mt-6 text-sm font-bold text-[#8719C6] hover:underline flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" /> Change Signature
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
              <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Your identity is secure</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                  This signature is stored on file and will be used solely for verifying your business agreements and payouts.
                </p>
              </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-2 overflow-hidden">
            <div className="p-6 pb-2">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-[#8719C6]" /> Signature Pad
                  </h3>
                  <button 
                    onClick={clear}
                    className="text-xs font-bold text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear Pad
                  </button>
               </div>
            </div>

            <div className="bg-[#fcfdff] rounded-2xl border-2 border-dashed border-gray-100 m-4 mt-0">
               <SignatureCanvas 
                 ref={sigCanvas}
                 penColor='#1f2937'
                 canvasProps={{
                   className: 'w-full h-64 cursor-crosshair',
                 }}
               />
            </div>

            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[11px] text-gray-400 font-medium">
                  By signing, you agree to the <a href="#" className="underline hover:text-[#8719C6]">Terms of Service</a> and <a href="#" className="underline hover:text-[#8719C6]">Privacy Policy</a>.
                </p>
                <div className="flex items-center gap-2 text-[#8719C6]">
                  <Lock className="w-3 h-3" />
                  <span className="text-[10px] font-black uppercase tracking-tighter">Securely Signed</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                 <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#8719C6]" />
                 </div>
                 <div>
                    <h5 className="font-bold text-gray-900 text-sm mb-1">Official Document</h5>
                    <p className="text-[11px] text-gray-500 leading-normal">Ensure your signature matches your official government ID or bank records.</p>
                 </div>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <PenTool className="w-5 h-5 text-blue-600" />
                 </div>
                 <div>
                    <h5 className="font-bold text-gray-900 text-sm mb-1">Clean Stroke</h5>
                    <p className="text-[11px] text-gray-500 leading-normal">Use a mouse or touch-pad to draw a clear, recognizable signature.</p>
                 </div>
              </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center bg-white pb-4">
        <button
          onClick={onPrev}
          className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-all"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 group-hover:bg-gray-50 transition-all">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </div>
          Back
        </button>
        
        <button
          onClick={hasExistingSignature ? () => onNext() : handleSaveSignature}
          disabled={isLoading}
          className="bg-[#8719C6] hover:bg-[#7215a8] disabled:opacity-50 text-white font-black py-4 px-12 rounded-2xl transition-all shadow-xl hover:shadow-[#8719C6]/30 active:scale-[0.98] text-lg flex items-center justify-center min-w-[280px]"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <div className="flex items-center gap-3">
               {hasExistingSignature ? 'Finish Registration' : 'Complete Application'} <ChevronRight className="w-6 h-6" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
