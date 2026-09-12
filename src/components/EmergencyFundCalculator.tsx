import React, { useState } from 'react';
import { Calculator, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export const EmergencyFundCalculator: React.FC = () => {
  const [monthlyExpense, setMonthlyExpense] = useState<number>(20000);

  const threeMonths = monthlyExpense * 3;
  const sixMonths = monthlyExpense * 6;
  const monthlyInvest20 = monthlyExpense * 0.20; // 20% do orçamento

  const formatMT = (val: number) => {
    return new Intl.NumberFormat('pt-MZ', {
      maximumFractionDigits: 0
    }).format(val) + ' MT';
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#0B1528] border border-amber-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" /> Baseado no Capítulo 10 do Guia
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl mt-1">
              Simulador da Reserva de Emergência
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Quanto você precisa ter guardado com segurança em Moçambique antes de começar a arriscar no mercado? Ajuste o valor das suas despesas mensais essenciais:
        </p>

        {/* Slider Input */}
        <div className="space-y-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-400 font-medium">Suas despesas essenciais mensais:</span>
            <span className="text-amber-400 font-extrabold text-base sm:text-lg">
              {formatMT(monthlyExpense)}
            </span>
          </div>

          <input
            type="range"
            min={5000}
            max={80000}
            step={1000}
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex justify-between text-[10px] text-slate-400">
            <span>5.000 MT</span>
            <span>40.000 MT</span>
            <span>80.000 MT</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Reserva Mínima (3 Meses)</span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {formatMT(threeMonths)}
            </div>
            <p className="text-[11px] text-slate-400">
              Indicado para trabalhadores com emprego formal estável.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Reserva Ideal (6 Meses)</span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {formatMT(sixMonths)}
            </div>
            <p className="text-[11px] text-slate-400">
              Indicado para autônomos, prestadores de serviços e pais de família.
            </p>
          </div>
        </div>

        {/* Key Takeaway Note */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
          💡 <strong>O que o livro ensina a seguir:</strong> No Capítulo 10, Rosario Paulino explica exatamente onde guardar esse valor em Moçambique com liquidez diária (para resgate imediato sem perdas), e no Capítulo 9 como aplicar a <strong>Regra 50-30-20</strong> guardando cerca de <strong>{formatMT(monthlyInvest20)}/mês</strong> sem passar dificuldades.
        </div>
      </div>
    </div>
  );
};
