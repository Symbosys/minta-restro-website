"use client";

import React from 'react';
import Link from 'next/link';
import { PartyPopper, ChevronRight, CheckCircle2, Star } from 'lucide-react';

export default function CongratulationsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl border border-gray-100 p-12 text-center relative overflow-hidden animate-in zoom-in duration-700">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8719C6] via-[#0066FF] to-[#8719C6]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#8719C6]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-24 h-24 bg-[#8719C6]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 transition-transform hover:rotate-0 duration-500">
            <PartyPopper className="w-12 h-12 text-[#8719C6]" />
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Congratulations!</h1>
          <p className="text-gray-500 text-lg font-medium mb-10 leading-relaxed">
            Your application has been successfully submitted. Our team is now reviewing your details.
            Verification typically takes <span className="text-[#8719C6] font-bold">24-48 hours</span>.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-10 text-left">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <p className="text-sm font-bold text-gray-700">Profile & Documents Uploaded</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <p className="text-sm font-bold text-gray-700">Inventory & Bank Details Set</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <Star className="w-5 h-5 text-[#8719C6] mt-0.5 animate-pulse" />
              <p className="text-sm font-bold text-gray-700">Pending Admin Verification</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-[#8719C6] hover:bg-[#7215a8] text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl hover:shadow-[#8719C6]/30 active:scale-95 group"
          >
            Back to Home <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="mt-8 text-xs text-gray-400 font-bold uppercase tracking-widest">
            Welcome to the Minta fresh family
          </p>
        </div>
      </div>
    </div>
  );
}
