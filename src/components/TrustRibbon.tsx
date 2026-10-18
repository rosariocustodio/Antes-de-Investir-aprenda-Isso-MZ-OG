import React from 'react';
import { BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export const TrustRibbon: React.FC = () => {
  return (
    <div className="w-full bg-[#1F041A] border-y border-white/15 py-3 px-4 overflow-hidden">
      <div className="max-w-[1140px] mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 text-[11px] sm:text-[12px] font-content font-medium text-white/90 uppercase tracking-widest text-center">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <span>30 CAPÍTULOS PRÁTICOS EM PDF</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>GARANTIA DE 7 DIAS • 100% SEGURO</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>ACESSO IMEDIATO VIA M-PESA &amp; E-MOLA</span>
        </div>
      </div>
    </div>
  );
};
