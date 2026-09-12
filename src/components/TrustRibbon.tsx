import React from 'react';
import { ShieldCheck, Award, Lock, BookOpen, Star } from 'lucide-react';

export const TrustRibbon: React.FC = () => {
  return (
    <section className="py-6 bg-[#040810] border-y border-slate-800/80 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-4 text-xs font-semibold text-slate-400">
        
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="tracking-wide">RUMOS SEGUROS • EDIÇÃO OFICIAL</span>
        </div>

        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="tracking-wide">METODOLOGIA TESTADA E APROVADA</span>
        </div>

        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="tracking-wide">COMPROMISSO ANTI-GOLPES E FRAUDES</span>
        </div>

        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="tracking-wide">29 CAPÍTULOS PRÁTICOS EM PDF</span>
        </div>

        <div className="flex items-center gap-1.5 text-amber-400">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white font-bold text-[11px] ml-1">4.9/5.0 por Leitores</span>
        </div>

      </div>
    </section>
  );
};
