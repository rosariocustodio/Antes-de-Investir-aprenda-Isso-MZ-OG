import React, { useState } from 'react';
import { Smartphone, Building2, CreditCard, CheckCircle2, Gift, ArrowRight, ShieldCheck, Download, Sparkles, Copy, Check } from 'lucide-react';
import { BOOK_DATA, PAYMENT_METHODS } from '../data/bookContent';

interface TwoStepOrderSectionProps {
  onOpenPaymentModal: () => void;
}

export const TwoStepOrderSection: React.FC<TwoStepOrderSectionProps> = ({ onOpenPaymentModal }) => {
  const [selectedMethod, setSelectedMethod] = useState<'mpesa' | 'emola' | 'bank' | 'card'>('mpesa');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    receiptCode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClaimSuccess, setIsClaimSuccess] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Por favor, preencha o seu Nome e Número de Telemóvel.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsClaimSuccess(true);
    }, 1200);
  };

  const currentPayment = PAYMENT_METHODS.find(m => m.id === selectedMethod) || PAYMENT_METHODS[0];

  return (
    <section id="comprar-passos" className="py-20 sm:py-24 bg-[#FAF7F2] text-[#1E0A24] border-t border-slate-200 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#350824]/10 border border-[#350824]/20 text-[#5E1A43] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#5E1A43]" />
            <span>PROCESSO EM 2 PASSOS • TRADE & TRAVEL FORMAT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif-luxury text-[#1E0A24] tracking-tight leading-tight">
            Como Adquirir o Seu Livro e Desbloquear Seus Bônus
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Siga os 2 passos rápidos abaixo para ter acesso imediato ao e-book em PDF de 34 páginas e aos 4 materiais complementares por apenas 397 MT.
          </p>
        </div>

        {/* The 2-Step Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* STEP 1: Choose Payment Method / Order Copy */}
          <div className="lg:col-span-6 rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            {/* Step 1 Badge */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#2B0820] text-amber-300 font-black text-base flex items-center justify-center shadow-md">
                  1
                </span>
                <div>
                  <h3 className="text-[#1E0A24] font-serif-luxury font-bold text-lg sm:text-xl">
                    PASSO 1: Peça Seu Exemplar
                  </h3>
                  <p className="text-xs text-[#5E1A43] font-semibold">
                    Preço promocional: apenas 397 MT
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold border border-emerald-500/20">
                68% DESCONTO
              </span>
            </div>

            {/* Channels Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Selecione o Meio de Pagamento:
              </label>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMethod('mpesa')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    selectedMethod === 'mpesa'
                      ? 'bg-[#2B0820] border-[#2B0820] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Smartphone className={`w-5 h-5 shrink-0 ${selectedMethod === 'mpesa' ? 'text-amber-300' : 'text-red-500'}`} />
                  <div>
                    <div className={`font-bold text-xs sm:text-sm ${selectedMethod === 'mpesa' ? 'text-white' : 'text-slate-900'}`}>M-Pesa</div>
                    <div className={`text-[10px] ${selectedMethod === 'mpesa' ? 'text-amber-200/80' : 'text-slate-500'}`}>Vodacom (*150#)</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod('emola')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    selectedMethod === 'emola'
                      ? 'bg-[#2B0820] border-[#2B0820] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Smartphone className={`w-5 h-5 shrink-0 ${selectedMethod === 'emola' ? 'text-amber-300' : 'text-orange-500'}`} />
                  <div>
                    <div className={`font-bold text-xs sm:text-sm ${selectedMethod === 'emola' ? 'text-white' : 'text-slate-900'}`}>E-Mola</div>
                    <div className={`text-[10px] ${selectedMethod === 'emola' ? 'text-amber-200/80' : 'text-slate-500'}`}>Movitel (*898#)</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod('bank')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    selectedMethod === 'bank'
                      ? 'bg-[#2B0820] border-[#2B0820] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Building2 className={`w-5 h-5 shrink-0 ${selectedMethod === 'bank' ? 'text-amber-300' : 'text-blue-500'}`} />
                  <div>
                    <div className={`font-bold text-xs sm:text-sm ${selectedMethod === 'bank' ? 'text-white' : 'text-slate-900'}`}>Transferência</div>
                    <div className={`text-[10px] ${selectedMethod === 'bank' ? 'text-amber-200/80' : 'text-slate-500'}`}>BIM / BCI / Standard</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod('card')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    selectedMethod === 'card'
                      ? 'bg-[#2B0820] border-[#2B0820] text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className={`w-5 h-5 shrink-0 ${selectedMethod === 'card' ? 'text-amber-300' : 'text-emerald-500'}`} />
                  <div>
                    <div className={`font-bold text-xs sm:text-sm ${selectedMethod === 'card' ? 'text-white' : 'text-slate-900'}`}>Cartão / POS</div>
                    <div className={`text-[10px] ${selectedMethod === 'card' ? 'text-amber-200/80' : 'text-slate-500'}`}>Visa / Mastercard</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Selected Method Details Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#5E1A43]">
                  {currentPayment.name}
                </span>
                <span className="font-extrabold text-[#1E0A24] text-sm">
                  Valor: 397 MT
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Número / Conta / NIB:</span>
                    <span className="font-mono font-bold text-sm text-white">{currentPayment.accountNumber}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(currentPayment.accountNumber, 'acc')}
                    className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center gap-1 hover:bg-amber-500/30 cursor-pointer"
                  >
                    {copiedKey === 'acc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'acc' ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400">
                  Titular: <strong className="text-slate-200">{currentPayment.accountName}</strong> ({currentPayment.provider})
                </div>

                <div className="text-[11px] text-slate-300 pt-1 space-y-1">
                  {currentPayment.instructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-400">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenPaymentModal}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
            >
              <span>Ver Instruções Detalhadas em Janela Completa</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>

          </div>

          {/* STEP 2: Claim Bonuses Form (Direct on Page - Trade & Travel Signature) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#0A1222] border-2 border-amber-400/50 p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            {/* Step 2 Badge */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center shadow-md">
                  2
                </span>
                <div>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl">
                    PASSO 2: Reivindique Seus Bônus
                  </h3>
                  <p className="text-xs text-slate-400">
                    Acesso imediato enviado para o seu WhatsApp e E-mail
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[10px] font-bold border border-amber-500/30 flex items-center gap-1">
                <Gift className="w-3 h-3 text-amber-400" />
                4 BÔNUS INCLUSOS
              </span>
            </div>

            {isClaimSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Pedido Registado com Sucesso!</h4>
                  <p className="text-xs text-slate-300">
                    Obrigado, <strong className="text-amber-300">{formData.fullName}</strong>. A nossa equipa da Rumos Seguros está a validar o seu código e os 4 bônus + e-book já estão prontos para envio.
                  </p>
                </div>

                <a
                  href={`https://wa.me/258840000000?text=${encodeURIComponent(
                    `Olá Rumos Seguros! Fiz o pagamento de 397 MT do livro "Antes de Investir Dinheiro, Aprenda Isso". Meu nome é ${formData.fullName} e meu código de transação é: ${formData.receiptCode || 'Enviado por SMS'}. Podem enviar o meu PDF e os 4 bônus?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl transition-all"
                >
                  <span>Receber Imediatamente no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsClaimSuccess(false)}
                  className="text-xs text-slate-400 underline hover:text-slate-200 block mx-auto"
                >
                  Registrar outro comprovativo
                </button>
              </div>
            ) : (
              <form onSubmit={handleClaimSubmit} className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Mondlane"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      WhatsApp / Telemóvel *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+258 84 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      E-mail (Para Envio do PDF)
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    ID da Transação / Código do SMS (M-Pesa / E-Mola)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 9A8B7C6D5E ou número do talão"
                    value={formData.receiptCode}
                    onChange={(e) => setFormData({ ...formData, receiptCode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none transition-all placeholder:text-slate-600 font-mono text-xs"
                  />
                </div>

                {/* Submit Claim Button (Trade & Travel Style) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-2xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <span>Validando seu pedido...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 fill-slate-950" />
                      <span>REIVINDICAR MEUS 4 BÔNUS E O E-BOOK (397 MT)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  🔒 Seus dados estão seguros e protegidos pela política de privacidade da Rumos Seguros.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
