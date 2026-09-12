import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, MessageCircle, Lock, Smartphone, CreditCard, Zap, Download, ArrowRight } from 'lucide-react';
import { BOOK_DATA } from '../data/bookContent';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'instant' | 'manual'>('instant');
  const [selectedMobileWallet, setSelectedMobileWallet] = useState<'mpesa' | 'emola'>('mpesa');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleInstantPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim() || !customerEmail.trim()) return;

    setIsProcessing(true);
    // Simula inicialização do gateway de pagamento local (M-Pesa / e-Mola Push)
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
    }, 1200);
  };

  const whatsappLink = `https://wa.me/258840000000?text=${encodeURIComponent(
    `Olá Rosario Paulino / Rumos Seguros! Gostaria de receber o exemplar oficial do livro "Antes de Investir Dinheiro, Aprenda Isso" pelo valor promocional de 397 MT. O meu e-mail é ${customerEmail || 'meu email'} e telefone é ${customerPhone || 'meu telefone'}.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-lg bg-[#1E051A] border border-[#F6F1EA]/20 shadow-2xl overflow-hidden flex flex-col my-auto text-[#F6F1EA]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/15 bg-black/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-white font-headline font-semibold text-sm sm:text-base leading-tight">
                  Adquirir Exemplar Oficial
                </h3>
                <p className="text-[11px] sm:text-xs text-[#F6F1EA]/80 font-content">
                  Edição Digital • 397 MT (Acesso Imediato)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 overflow-y-auto max-h-[82vh] space-y-5">
            {isDone ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-headline font-semibold text-white">
                  Pedido Pronto para Ativação!
                </h4>
                <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed font-content">
                  Enviamos o link de download direto para <strong className="text-white">{customerEmail}</strong>. 
                  Você também pode fazer o download imediato abaixo ou receber diretamente no seu WhatsApp:
                </p>

                <div className="p-4 bg-white/5 border border-white/15 text-left space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Produto:</span>
                    <span className="font-semibold text-white">Antes de Investir Dinheiro, Aprenda Isso</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Canal de Pagamento:</span>
                    <span className="font-semibold text-emerald-300 uppercase">{selectedMobileWallet}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Valor:</span>
                    <span className="font-semibold text-white">397 MT</span>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-button font-semibold text-xs tracking-wider uppercase shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar & Receber no WhatsApp Agora</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsDone(false)}
                  className="text-xs text-white/60 hover:text-white underline pt-2 block mx-auto cursor-pointer"
                >
                  Voltar ou alterar os dados
                </button>
              </div>
            ) : (
              <>
                {/* Guarantee & Instant Badge Box */}
                <div className="p-3.5 bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded shrink-0 text-emerald-400">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left font-content">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Acesso Imediato e Automático
                    </h4>
                    <p className="text-[12px] text-white/70 leading-relaxed mt-0.5">
                      Confirmação instantânea via M-Pesa ou e-Mola. O livro fica disponível para leitura no telemóvel e é enviado para o seu e-mail.
                    </p>
                  </div>
                </div>

                {/* Payment Channel Selector */}
                <div className="space-y-2">
                  <label className="text-[11px] font-content font-bold uppercase tracking-wider text-white/70 block text-left">
                    Selecione a sua carteira em Moçambique:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedMobileWallet('mpesa')}
                      className={`p-3 border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                        selectedMobileWallet === 'mpesa'
                          ? 'border-emerald-400 bg-emerald-500/10 text-white'
                          : 'border-white/15 bg-white/5 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold font-button uppercase tracking-wider text-white">M-Pesa</div>
                        <div className="text-[10px] text-white/60">Vodacom Moçambique</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedMobileWallet('emola')}
                      className={`p-3 border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                        selectedMobileWallet === 'emola'
                          ? 'border-emerald-400 bg-emerald-500/10 text-white'
                          : 'border-white/15 bg-white/5 text-white/60 hover:border-white/30'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold font-button uppercase tracking-wider text-white">e-Mola</div>
                        <div className="text-[10px] text-white/60">Movitel Moçambique</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Instant Form */}
                <form onSubmit={handleInstantPay} className="space-y-3 text-left">
                  <div>
                    <label className="text-[11px] font-content font-semibold text-white/80 block mb-1">
                      Número de Telemóvel para o débito (M-Pesa / e-Mola):
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Ex: 84 123 4567 ou 86/87 ..."
                      className="w-full px-3.5 py-3 bg-black/40 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white font-content"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-content font-semibold text-white/80 block mb-1">
                      E-mail para envio imediato do seu exemplar:
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-3.5 py-3 bg-black/40 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white font-content"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 px-6 bg-white hover:bg-emerald-400 text-[#360A2F] hover:text-[#1E051A] font-button font-bold text-xs uppercase tracking-[2px] shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>A PROCESSAR PAGAMENTO...</span>
                    ) : (
                      <>
                        <span>CONFIRMAR ACESSO • 397 MT</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Objections Breaker Row */}
                <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] text-white/70 font-content">
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>7 Dias de Garantia</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Acesso Imediato</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>Transação Segura</span>
                  </div>
                </div>

                {/* WhatsApp Help link */}
                <div className="text-center pt-1">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-white/60 hover:text-white underline font-content inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Dúvidas ou prefere pagar com apoio de um consultor?</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
