import React from 'react';
import { X, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../config/checkout';

interface ChapterPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: (e?: React.MouseEvent) => void;
}

export const ChapterPreviewModal: React.FC<ChapterPreviewModalProps> = ({
  isOpen,
  onClose,
  onBuyClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FDF5F2] text-[#0E0E0D] border border-[#360A2F]/20 shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#360A2F]/15 bg-white">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#801869]" />
            <div>
              <span className="font-content text-[10px] tracking-[0.2em] uppercase font-bold text-[#801869] block">
                Amostra Oficial • Capítulo I
              </span>
              <h3 className="font-headline text-[18px] sm:text-[20px] text-[#2C0A29] leading-snug">
                O Medo de Perder Dinheiro e a Busca por Segurança
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content com marca de segurança */}
        <div className="relative p-6 sm:p-8 overflow-y-auto space-y-4 font-content text-[15px] sm:text-[16px] text-[#242B2E] leading-[1.75] select-none">
          {/* Marca d'água forense de proteção antipirataria */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.045] overflow-hidden flex flex-wrap gap-12 items-center justify-around rotate-[-12deg] select-none" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="text-[#360A2F] text-[11px] font-bold tracking-widest uppercase">
                Rumos Seguros • Amostra Protegida • Gravação Proibida
              </span>
            ))}
          </div>

          <p className="font-headline text-[18px] sm:text-[20px] text-[#360A2F] italic leading-relaxed border-l-2 border-[#801869] pl-4 my-2">
            "Investir sem conhecimento é como conduzir sem código da estrada: pode até chegar ao destino, mas a probabilidade de acidente é altíssima."
          </p>

          <p>
            Se está aqui, é provável que já tenha sentido aquela pontada de ansiedade ao pensar em aplicar as suas poupanças. O medo de perder o que foi conquistado com tanto suor e trabalho é natural, compreensível e saudável.
          </p>

          <p>
            Em Moçambique, todos os meses vemos pessoas de boa-fé perderem o salário de um ano inteiro em esquemas de lucro fácil ou investimentos que não compreendiam. Esse receio que sente não deve paralisá-lo — ele é o sinal de alerta que diz que precisa de método antes de dar o próximo passo.
          </p>

          <p>
            O investidor inteligente não ignora o risco: aprende a calculá-lo, a estancar os vazamentos da sua rotina e a proteger a sua família primeiro.
          </p>

          <div className="bg-[#2C0A29] text-white p-5 mt-6 space-y-3">
            <span className="font-content font-bold text-[11px] tracking-[0.2em] uppercase text-amber-400 block">
              O QUE APRENDERÁ NOS 30 CAPÍTULOS COMPLETOS:
            </span>
            <ul className="space-y-2 text-[14px] text-white/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Como estancar vazamentos invisíveis no salário mensal
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Cálculo prático e montagem da sua reserva de emergência
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                7 sinais vermelhos inquestionáveis para evitar qualquer esquema
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Mecanismos formais e seguros para começar a investir com pouco
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 border-t border-[#360A2F]/15 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-content text-[11px] tracking-wider uppercase text-neutral-500 block">
              Edição Oficial Completa • 30 Capítulos
            </span>
            <span className="font-headline text-[22px] text-[#2C0A29] font-bold">
              349 MT <span className="text-[13px] font-normal text-neutral-400 line-through">649 MT</span>
            </span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="w-full sm:w-auto min-h-[46px] font-button font-medium text-[12px] sm:text-[13px] text-white bg-[#360A2F] hover:bg-[#801869] tracking-[0.18em] uppercase px-8 py-3.5 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <span>QUERO O MEU EXEMPLAR</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
