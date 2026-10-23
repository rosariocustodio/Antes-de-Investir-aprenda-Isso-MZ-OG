import React from 'react';
import { X, ArrowRight, BookOpen } from 'lucide-react';
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[540px] bg-[#FAF8F5] text-[#242B2E] border border-[#360A2F]/15 shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Limpo e Editorial */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#360A2F]/10 bg-white/70">
          <div className="flex items-center gap-2 text-[#801869]">
            <BookOpen className="w-4 h-4" />
            <span className="font-content text-[11px] font-semibold tracking-[0.22em] uppercase text-[#801869]">
              Capítulo 1 • Amostra Oficial
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar amostra"
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Leitura do Capítulo: Direta, Elegante e com Respiro */}
        <div className="px-6 sm:px-8 py-6 sm:py-7 overflow-y-auto font-content text-[#2C0A29]/90 text-[15px] sm:text-[16px] leading-[1.8] select-none space-y-4">
          <h3 className="font-headline text-[22px] sm:text-[25px] font-normal text-[#2C0A29] leading-tight mb-3">
            O Medo de Perder Dinheiro e a Busca por Segurança
          </h3>

          <p className="font-content font-normal text-[#3A3335]">
            O primeiro erro de quem decide investir não é a falta de dinheiro — é a pressa de multiplicar aquilo que ainda não aprendeu a proteger.
          </p>

          <p className="font-content font-normal text-[#3A3335]">
            Em Moçambique, a verdadeira estabilidade financeira não começa em negócios arriscados ou promessas milagrosas, mas na capacidade de estancar vazamentos diários e construir uma base segura antes de dar qualquer passo maior.
          </p>

          <div className="pt-2 pb-1 border-l-2 border-[#801869]/70 pl-4 my-3 italic text-[#2C0A29] font-headline text-[16px] sm:text-[17px] leading-relaxed">
            "Aprenda primeiro a defender o seu património. O crescimento é a consequência natural."
            <span className="block not-italic text-[12px] font-content text-neutral-500 mt-1 uppercase tracking-wider font-medium">
              — Rosario Paulino
            </span>
          </div>

          <p className="font-content text-[13.5px] sm:text-[14px] text-neutral-600 pt-1">
            Esta é apenas a introdução. Nos <strong>30 capítulos completos</strong>, terá acesso ao método prático passo a passo para organizar o seu salário e começar a investir em Moçambique com segurança.
          </p>
        </div>

        {/* Rodapé de Ação: Limpo e Objetivo */}
        <div className="px-6 sm:px-8 py-4 sm:py-5 border-t border-[#360A2F]/10 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <span className="font-content text-[11px] text-neutral-500 uppercase tracking-wider block">
              Livro Completo • 30 Capítulos
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-[22px] font-bold text-[#2C0A29]">
                299 MT
              </span>
              <span className="font-content text-[13px] text-neutral-400 line-through">
                649 MT
              </span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="w-full sm:w-auto min-h-[44px] font-button font-medium text-[12px] text-white bg-[#360A2F] hover:bg-[#801869] tracking-[0.16em] uppercase px-6 py-3 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.99]"
          >
            <span>QUERO O MEU EXEMPLAR</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

