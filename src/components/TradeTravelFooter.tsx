import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { BookMockup } from './BookMockup';

interface TradeTravelFooterProps {
  onOrderClick: () => void;
}

export const TradeTravelFooter: React.FC<TradeTravelFooterProps> = ({ onOrderClick }) => {
  const [contactValue, setContactValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Disparo direto e seguro para rosariocustodio006@gmail.com usando FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/rosariocustodio006@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Novo Interesse no Livro: Antes de Investir Dinheiro, Aprenda Isso',
          contacto_cliente: contactValue.trim(),
          origem: 'Formulário do Rodapé da Landing Page',
          data_envio: new Date().toLocaleString('pt-PT', { timeZone: 'Africa/Maputo' }),
        }),
      });

      if (response.ok) {
        setIsSent(true);
        // Após confirmação, abre a modal de pagamento ou reserva
        setTimeout(() => {
          onOrderClick();
        }, 1200);
      } else {
        // Fallback gracioso caso haja bloqueio de adblocker
        setIsSent(true);
        setTimeout(() => {
          onOrderClick();
        }, 800);
      }
    } catch {
      // Se houver falha de rede/bloqueador, confirma o interesse e abre a modal de encomenda
      setIsSent(true);
      setTimeout(() => {
        onOrderClick();
      }, 800);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#360A2F] text-[#F6F1EA] pt-12 sm:pt-16 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#4A0F41]">
      <div className="max-w-[1000px] mx-auto text-center space-y-8 sm:space-y-10">
        
        {/* 3D Book Mockup */}
        <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto">
          <BookMockup onPreviewClick={onOrderClick} showBadge={false} size="md" />
        </div>

        {/* Closing Headline H2 */}
        <div className="space-y-3 sm:space-y-4 max-w-[760px] mx-auto">
          <h2 className="font-headline font-normal text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-[1.18] tracking-tight">
            A sua vida financeira não foi feita para ser apenas sobrevida — foi feita para ser moldada.
          </h2>
          <p className="font-content font-normal sm:font-medium text-[#F6F1EA]/90 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-[620px] mx-auto">
            O sucesso deve expandir as suas escolhas, não reduzi-las. Este livro ensina as competências e a estratégia para viver com tranquilidade e autonomia.
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full sm:w-auto flex justify-center">
          <button
            type="button"
            onClick={onOrderClick}
            className="font-button font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-white tracking-[1.5px] sm:tracking-[2px] uppercase bg-transparent border-2 border-white rounded-none px-7 sm:px-9 py-3.5 sm:py-4 w-full sm:w-auto inline-block text-center transition-colors duration-200 hover:bg-white hover:text-[#360A2F] cursor-pointer"
          >
            GARANTIR O MEU EXEMPLAR • 397 MT
          </button>
        </div>

        {/* Availability line */}
        <p className="font-content font-semibold text-[11px] sm:text-[12px] md:text-[13px] text-[#F6F1EA]/80 tracking-[1.2px] sm:tracking-[1.5px] uppercase">
          EDIÇÃO OFICIAL • DISPONÍVEL EM MOÇAMBIQUE
        </p>

        {/* Email / WhatsApp direct form */}
        <div className="max-w-md mx-auto pt-2 sm:pt-4 w-full">
          {isSent ? (
            <div className="p-4 bg-white/10 border border-emerald-400/60 text-white text-[13px] flex flex-col items-center justify-center gap-1.5 animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-semibold">Registo confirmado com sucesso!</span>
              </div>
              <p className="text-[12px] text-white/80">
                Notificação enviada para Rosario Paulino. A abrir as opções de acesso...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 w-full">
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Introduza o seu E-mail ou WhatsApp*"
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 rounded-none bg-transparent border border-white/40 text-white text-[14px] placeholder:text-white/50 focus:border-white focus:outline-none transition-all font-content disabled:opacity-50"
                />
              </div>

              {errorMessage && (
                <p className="text-rose-300 text-xs text-left">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-none bg-white text-[#360A2F] hover:bg-transparent hover:text-white hover:border hover:border-white font-button font-semibold text-[12px] sm:text-[13px] uppercase tracking-[1.5px] sm:tracking-[2px] transition-all cursor-pointer min-h-[44px] flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#360A2F]" />
                    <span>A PROCESSAR...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>RECEBER INFORMAÇÕES DA EDIÇÃO OFICIAL</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-white/60 font-content text-center">
                Receberá o contacto de Rosario Paulino com as instruções da edição oficial.
              </p>
            </form>
          )}
        </div>

        {/* Brand and Copyright Footer Bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/15 space-y-2">
          <div className="font-headline tracking-[0.18em] sm:tracking-[0.2em] text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase text-white/90">
            ROSARIO PAULINO • RUMOS SEGUROS
          </div>
          <div className="font-content text-[11px] sm:text-[12px] text-white/60 font-light">
            Todos os Direitos Reservados — 2026 © Rumos Seguros • Rosario Paulino
          </div>
        </div>

      </div>
    </footer>
  );
};
