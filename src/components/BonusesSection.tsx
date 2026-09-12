import React from 'react';
import { ShieldAlert, PieChart, CheckSquare, Calendar, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { BONUSES_LIST } from '../data/bookContent';

interface BonusesSectionProps {
  onClaimClick: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onClaimClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#5E1A43]" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-[#5E1A43]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-[#5E1A43]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#5E1A43]" />;
      default:
        return <Gift className="w-5 h-5 text-[#5E1A43]" />;
    }
  };

  return (
    <section id="bonus" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#1E0A24] border-t border-slate-200 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header (Trade & Travel Style) */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#350824]/10 border border-[#350824]/20 text-[#5E1A43] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#5E1A43]" />
            <span>BÔNUS EXCLUSIVOS DE LANÇAMENTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-[#1E0A24] tracking-tight leading-tight">
            Peça Seu Exemplar Hoje e Receba <br className="hidden sm:inline" />
            <span className="italic font-cormorant font-normal text-[#5E1A43]">
              4 Ferramentas Práticas Gratuitas
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light max-w-2xl mx-auto">
            Assim como na página de referência internacional, preparamos materiais complementares de alto valor prático para acelerar a sua organização desde o primeiro dia.
          </p>
        </div>

        {/* The 4 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BONUSES_LIST.map((bonus) => (
            <div
              key={bonus.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#5E1A43]/40 transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md relative overflow-hidden group text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-slate-200 flex items-center justify-center shadow-xs">
                    {getIcon(bonus.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 line-through block">
                      Normal: {bonus.value} MT
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-black uppercase tracking-wide">
                      {bonus.badge}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-[#5E1A43] uppercase tracking-wider block">
                    {bonus.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-[#1E0A24] leading-snug">
                    {bonus.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Formato Digital Imediato</span>
                <span className="text-[#5E1A43] font-semibold flex items-center gap-1">
                  Incluso no pedido <Sparkles className="w-3 h-3 text-amber-500" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#2B0820] text-white text-center space-y-4 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest">
              VALOR TOTAL COMBINADO DOS 4 BÔNUS: 3.500 MT
            </span>
            <h3 className="text-xl sm:text-3xl font-serif-luxury font-normal text-white">
              Hoje você leva o Livro + Todos os 4 Bônus por apenas <span className="text-amber-300 font-bold">397 MT</span>
            </h3>
          </div>

          <button
            type="button"
            onClick={onClaimClick}
            className="py-3.5 px-8 rounded-none border-2 border-white text-white hover:bg-white hover:text-[#16051B] font-bold text-xs uppercase tracking-widest transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <span>REIVINDICAR MEU LIVRO COM TODOS OS BÔNUS</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
