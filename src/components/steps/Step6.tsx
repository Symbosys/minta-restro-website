"use client";

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  CreditCard, 
  User, 
  MapPin, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { createBankAccountAction, fetchVendorBankAccountsAction } from '../../api/actions/bank';
import { updateVendorStatusAction } from '../../api/actions/inventory';

export default function Step6({ vendorData, onNext, onPrev }: { vendorData: any, onNext: (data?: any) => void, onPrev: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [form, setForm] = useState({
    accountHolder: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifsc: '',
    branch: '',
  });
  const [initialForm, setInitialForm] = useState<any>(null);

  useEffect(() => {
    const fetchExistingBank = async () => {
      setIsLoading(true);
      const res = await fetchVendorBankAccountsAction(vendorData.id, vendorData.token);
      if (res.success && res.data && res.data.length > 0) {
        const bank = res.data[0];
        const bankData = {
          accountHolder: bank.accountHolder || '',
          bankName: bank.bankName || '',
          accountNumber: bank.accountNumber || '',
          confirmAccountNumber: bank.accountNumber || '',
          ifsc: bank.ifsc || '',
          branch: bank.branch || '',
        };
        setForm(bankData);
        setInitialForm(bankData);
      }
      setIsLoading(false);
    };
    fetchExistingBank();
  }, [vendorData.id, vendorData.token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const isDirty = () => {
    if (!initialForm) return true; // If no initial data, assume it's new/dirty
    return JSON.stringify(form) !== JSON.stringify(initialForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.accountHolder || !form.bankName || !form.accountNumber || !form.ifsc) {
      setErrorMsg('Please fill all mandatory fields (marked with *)');
      return;
    }

    if (form.accountNumber !== form.confirmAccountNumber) {
      setErrorMsg('Account numbers do not match');
      return;
    }

    // If nothing changed, just move to next step without API calls
    if (!isDirty()) {
      onNext();
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        vendorId: vendorData.id,
        accountHolder: form.accountHolder,
        bankName: form.bankName,
        accountNumber: form.accountNumber,
        ifsc: form.ifsc,
        branch: form.branch || null,
      };

      const res = await createBankAccountAction(payload, vendorData.token);
      if (res.success) {
        let updatedVendor = { ...vendorData };
        // Update vendor status to the next step if not already updated
        if (vendorData.status === 'BANK_ACCOUNT_NOT_ADDED') {
          const statusRes = await updateVendorStatusAction('SIGNATURE_NOT_UPLOADED', vendorData.id, vendorData.token);
          if (statusRes.success) {
            updatedVendor.status = 'SIGNATURE_NOT_UPLOADED';
            localStorage.setItem('vendorAuth', JSON.stringify(updatedVendor));
          } else {
            setErrorMsg('Bank info saved, but failed to update status.');
            setIsLoading(false);
            return;
          }
        }
        onNext(updatedVendor);
      } else {
        setErrorMsg(res.message);
      }
    } catch (error) {
       setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto pb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-1">Bank Details</h2>
        <p className="text-gray-500 text-[15px]">Provide your bank account information for direct payouts.</p>
      </div>
      <div className="h-px bg-gray-200 w-full mb-8"></div>

      {errorMsg && (
        <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 shadow-sm animate-in shake duration-300">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-semibold">{errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-[#8719C6] mb-2">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">Secure Bank Information</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Account Holder */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" /> Account Holder Name *
              </label>
              <input
                type="text"
                name="accountHolder"
                value={form.accountHolder}
                onChange={handleChange}
                placeholder="Ex. John Doe"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/5 outline-none font-medium transition-all"
              />
            </div>

            {/* Bank Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" /> Bank Name *
              </label>
              <input
                type="text"
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
                placeholder="Ex. HDFC Bank"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/5 outline-none font-medium transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Account Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-400" /> Account Number *
                </label>
                <input
                  type="password"
                  name="accountNumber"
                  value={form.accountNumber}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/5 outline-none font-medium tracking-widest transition-all"
                />
              </div>

               {/* Confirm Account Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" /> Confirm Account Number *
                </label>
                <input
                  type="text"
                  name="confirmAccountNumber"
                  value={form.confirmAccountNumber}
                  onChange={handleChange}
                  placeholder="Re-enter Account Number"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/5 outline-none font-medium transition-all"
                />
              </div>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* IFSC Code */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" /> IFSC Code *
                  </label>
                  <input
                    type="text"
                    name="ifsc"
                    value={form.ifsc}
                    onChange={handleChange}
                    placeholder="Ex. HDFC0001234"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/5 outline-none font-medium uppercase transition-all"
                  />
                </div>

                {/* Branch */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" /> Branch (Optional)
                  </label>
                  <input
                    type="text"
                    name="branch"
                    value={form.branch}
                    onChange={handleChange}
                    placeholder="Ex. Indiranagar"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#8719C6] focus:ring-4 focus:ring-[#8719C6]/5 outline-none font-medium transition-all"
                  />
                </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 flex gap-3">
            <Lock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-[13px] text-blue-700 leading-relaxed font-medium">
              Your banking information is encrypted and stored securely. We only use these details for processing your payouts and verifying your business.
            </p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center bg-white pb-4">
          <button
            type="button"
            onClick={onPrev}
            className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-all"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 group-hover:bg-gray-50 transition-all">
              <ChevronRight className="w-4 h-4 rotate-180" />
            </div>
            Back
          </button>
          
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#8719C6] hover:bg-[#7215a8] disabled:opacity-50 text-white font-black py-4 px-12 rounded-2xl transition-all shadow-xl hover:shadow-[#8719C6]/30 active:scale-[0.98] text-lg flex items-center justify-center min-w-[200px]"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <div className="flex items-center gap-3">
                 Save Bank Details <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
