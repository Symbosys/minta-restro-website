"use client";

import React, { useState, useEffect } from 'react';
import { updateVendorAction } from '../../api/actions/vendor';

export default function Step1({ vendorData, onNext }: { vendorData: any, onNext: (data?: any) => void }) {
  const [ownerName, setOwnerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [initialData, setInitialData] = useState({ ownerName: '', companyName: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (vendorData) {
      const oName = vendorData.ownerName || vendorData.name || '';
      const cName = vendorData.companyName || '';
      const eMail = vendorData.email || '';

      setOwnerName(oName);
      setCompanyName(cName);
      setEmail(eMail);
      setInitialData({ ownerName: oName, companyName: cName, email: eMail });
    }
  }, [vendorData]);

  const handleUpdate = async () => {
    if (!ownerName || !companyName || !email) {
      setErrorMsg('Please fill in all details.');
      return;
    }

    const hasChanged =
      ownerName !== initialData.ownerName ||
      companyName !== initialData.companyName ||
      email !== initialData.email;

    if (!hasChanged) {
      onNext();
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    const payload: any = { ownerName, companyName, email };
    if (vendorData?.status === 'NEW' || vendorData?.status === 'PROFILE_COMPLETION_NOT_FILLED') {
      payload.status = 'DOCUMENTS_NOT_VERIFIED';
    }

    const res = await updateVendorAction(vendorData.id || vendorData._id, payload, vendorData.token);
    setIsLoading(false);

    if (res.success) {
      // Update local storage so data persists on refresh
      const updatedVendor = { ...vendorData, ...payload };
      localStorage.setItem('vendorAuth', JSON.stringify(updatedVendor));
      onNext(payload);
    } else {
      setErrorMsg(res.message);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-[#1f2937] mb-1">Restaurant information</h2>
      <p className="text-gray-500 text-[15px] mb-6">Name, location and contact number</p>
      <div className="h-px bg-gray-200 w-full mb-8"></div>

      <h3 className="text-lg font-bold text-[#1f2937] mb-2">Owner details</h3>
      <p className="text-gray-500 text-[13px] mb-8">
        Minta Restro will use these details for all business communications and updates
      </p>

      {errorMsg && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
          {errorMsg}
        </div>
      )}

      <div className="space-y-6 max-w-[500px]">
        {/* Owner Name */}
        <div>
          <label className="block text-[13px] font-bold text-[#374151] mb-2">
            Owner Name <span className="text-gray-500">*</span>
          </label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Enter owner name"
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8719C6] focus:border-[#8719C6] transition-colors text-gray-900 text-sm shadow-sm"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-[13px] font-bold text-[#374151] mb-2">
            Company Name <span className="text-gray-500">*</span>
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8719C6] focus:border-[#8719C6] transition-colors text-gray-900 text-sm shadow-sm"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-[13px] font-bold text-[#374151] mb-2">
            Email Address <span className="text-gray-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#8719C6] focus:border-[#8719C6] transition-colors text-gray-900 text-sm shadow-sm"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[13px] font-bold text-[#374151] mb-2">
            Phone Number <span className="text-gray-500">*</span>
          </label>
          <div className="flex items-center border border-gray-200 rounded-md px-4 py-2.5 bg-[#F9FAFB] relative shadow-sm">
            <div className="flex items-center gap-2 border-r border-gray-300 pr-3 mr-3">
              <span className="text-[15px]">🇮🇳</span>
              <span className="font-medium text-gray-600 text-sm">+91</span>
            </div>
            <input
              type="tel"
              readOnly
              value={vendorData?.mobile || '----------'}
              className="flex-1 bg-transparent border-none outline-none font-medium text-gray-700 text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="bg-[#E7F7ED] border border-[#d2efe0] text-[#0C8B3B] px-2 py-0.5 rounded flex items-center gap-1 text-[11px] font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0C8B3B]"></div>
                Verified
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 flex justify-end">
        <button
          onClick={handleUpdate}
          disabled={isLoading}
          className="bg-[#8719C6] hover:bg-[#7215a8] disabled:opacity-70 text-white font-medium py-2.5 px-8 rounded-md transition-all text-[15px] flex items-center justify-center min-w-[120px]"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            'Next'
          )}
        </button>
      </div>
    </div>
  );
}
