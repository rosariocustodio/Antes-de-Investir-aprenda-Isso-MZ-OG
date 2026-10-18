import React from 'react';
import { CHECKOUT_URL } from '../config/checkout';

interface PricingSectionProps {
  onOrderClick: (e?: React.MouseEvent) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOrderClick }) => {
  return (
    <section 
      id="preco" 
      aria-label="Preço e Valor"
      className="py-12 sm:py-16 md:py-20 bg-[#FDF5F2] text-[#0E0E0D] px-5 sm:px-8 lg:px-12 border-b border-[#E4DAD9]"
    >
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
        
        {/* Subtítulo */}
        <p className="font-content font-medium text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#360A2F] mb-4">
          INVESTIMENTO NO SEU CONHECIMENTO
        </p>

        {/* Card do Preço Editorial matching Screenshot 5 & 6 */}
        <div className="w-full max-w-[480px] bg-white border border-[#360A2F]/15 py-8 px-6 sm:px-10 shadow-sm flex flex-col items-center">
          
          {/* Mockup ebook-footer com reflexo tipo espelho 100% alinhado à perspetiva */}
          <div className="relative mb-5 flex justify-center items-center">
            <div 
              onClick={onOrderClick}
              title="Garantir exemplar oficial"
              className="relative w-[125px] sm:w-[138px] cursor-pointer group"
            >
              {/* Sombra de profundidade suave e realista por trás do livro */}
              <div 
                className="absolute inset-y-4 inset-x-3 bg-black/20 blur-lg rounded-xl pointer-events-none translate-y-1 transition-opacity duration-300 group-hover:opacity-90" 
                aria-hidden="true" 
              />
              
              {/* Imagem do livro com reflexo espelho perfeitamente contínuo na linha de base */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <picture className="w-full flex items-center justify-center">
                  <source srcSet="/ebook-pricing-mockup.webp" type="image/webp" />
                  <img
                    src="/ebook-pricing-mockup.png"
                    alt="Antes de Investir, Aprenda Isto - Rosario Paulino"
                    width="779"
                    height="1413"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block select-none pointer-events-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Valor riscado anterior */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-content text-[15px] sm:text-[16px] text-[#242B2E]/60 line-through decoration-[#360A2F]/50 decoration-1">
              De 649 MT
            </span>
          </div>

          {/* Valor atual em destaque */}
          <div className="font-headline font-normal text-[#360A2F] text-[34px] sm:text-[42px] leading-tight tracking-tight mb-2">
            Por apenas 349 MT
          </div>

          {/* Linha informativa exata da Screenshot 6 */}
          <p className="font-content text-[12px] sm:text-[13px] text-[#242B2E]/75 tracking-wide mb-6">
            Oferta de lançamento — o valor sobe em breve
          </p>

          {/* Botão de ação com tracking do checkout */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOrderClick}
            className="w-full max-w-[320px] min-h-[48px] font-button font-medium text-[12px] sm:text-[13px] text-[#360A2F] tracking-[0.2em] uppercase bg-transparent border border-[#360A2F]/90 rounded-none px-7 py-3.5 inline-flex items-center justify-center transition-all duration-200 hover:bg-[#360A2F] hover:text-white active:bg-[#360A2F]/10 cursor-pointer shadow-sm active:scale-[0.99]"
          >
            QUERO O MEU EXEMPLAR
          </a>
        </div>

      </div>
    </section>
  );
};
