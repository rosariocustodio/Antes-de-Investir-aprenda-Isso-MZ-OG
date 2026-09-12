import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Lock, Smartphone, Gift, ArrowRight } from 'lucide-react';
import { BOOK_DATA, BONUSES_LIST, TOTAL_PACKAGE_VALUE } from '../data/bookContent';

interface OrderSummaryCardProps {
  onOrderClick: () => void;
}

export const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({ onOrderClick }) => {
  return (
    <section id="comprar" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B1527] border-2 border-amber-400/50 p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative z-10 space-y-8">
        
        {/* Top Urgency Header Badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>RESUMO DA OFERTA ESPECIAL DE LANÇAMENTO</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Tudo o Que Está Incluído no Seu Pedido
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Ao confirmar o seu acesso hoje, você desbloqueia o pacote educacional completo:
          </p>
        </div>

        {/* Value Stack Items List */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3.5">
          
          {/* Main Book Item */}
          <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-bold text-sm sm:text-base block">
                  E-book Oficial: "Antes de Investir Dinheiro, Aprenda Isso"
                </span>
                <span className="text-xs text-slate-400">
                  Formato digital PDF universal • 34 páginas • 29 capítulos práticos
                </span>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-400 line-through shrink-0">
              1.250 MT
            </span>
          </div>

          {/* Bonus Items */}
          {BONUSES_LIST.map((bonus) => (
            <div key={bonus.id} className="flex items-start justify-between gap-3 pb-2.5 border-b border-slate-850 last:border-0 last:pb-0">
              <div className="flex items-start gap-2.5">
                <Gift className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold text-xs sm:text-sm block">
                    {bonus.title}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Bônus Exclusivo de Lançamento
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-slate-500 line-through block">
                  {bonus.value} MT
                </span>
                <span className="text-xs font-black text-emerald-400">
                  GRÁTIS
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Math Calculation & Price Presentation */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-xs text-slate-400">
              Valor Total do Pacote: <span className="line-through">{TOTAL_PACKAGE_VALUE} MT</span>
            </div>
            <div className="text-xs text-emerald-400 font-semibold">
              Desconto Especial de Lançamento: -4.353 MT
            </div>
            <div className="text-2xl sm:text-4xl font-black text-amber-400 tracking-tight mt-1">
              Hoje: Apenas {BOOK_DATA.currentPrice} MT
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
            Economia de mais de 90%
          </div>
        </div>

        {/* Big Action Button (Trade & Travel Style) */}
        <div className="space-y-3 text-center">
          <button
            type="button"
            onClick={onOrderClick}
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base sm:text-lg shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Zap className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
            <span>QUERO MEU EXEMPLAR AGORA POR 397 MT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Payment Badges in Mozambique */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>M-Pesa (Vodacom)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>E-Mola (Movitel)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Millennium BIM / BCI / Standard Bank</span>
            </div>
          </div>
        </div>

        {/* Guarantee Seal Box */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-white font-bold text-sm">Garantia Blindada de 7 Dias</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Adquira o livro e todos os bônus sem nenhum risco. Se nos próximos 7 dias você sentir que o conteúdo não agregou valor à sua vida financeira, devolveremos 100% dos seus 397 MT sem questionamentos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
