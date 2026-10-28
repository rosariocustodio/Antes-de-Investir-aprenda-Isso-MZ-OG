import React from 'react';
import { CtaButton } from './CtaButton';

interface PricingSectionProps {
  onOrderClick: (e?: React.MouseEvent) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOrderClick }) => {
  return (
    <section 
      id="preco" 
      data-section-theme="light"
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
          
          {/* Mockup footer-mockup 3 com reflexo de espelho suave e premium */}
          <div className="relative mb-5 flex justify-center items-center">
            <div 
              onClick={onOrderClick}
              title="Garantir exemplar oficial"
              className="relative w-[130px] sm:w-[145px] cursor-pointer group"
            >
              {/* Sombra de profundidade suave e discreta */}
              <div 
                className="absolute inset-y-4 inset-x-3 bg-black/10 blur-lg rounded-xl pointer-events-none translate-y-1 transition-opacity duration-300 group-hover:opacity-60" 
                aria-hidden="true" 
              />
              
              {/* Mockup footer-mockup 3 com reflexo de espelho equilibrado e sofisticado */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <picture className="w-full flex items-center justify-center">
                  <source srcSet="/pricing-mockup-reflected.webp" type="image/webp" />
                  <img
                    src="/pricing-mockup-reflected.webp"
                    alt="Antes de Investir, Aprenda Isto - Rosario Paulino"
                    width="400"
                    height="813"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block select-none pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('pricing-mockup-reflected.png')) {
                        target.src = '/pricing-mockup-reflected.png';
                      }
                    }}
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
          <div className="font-headline font-bold text-[#360A2F] text-[34px] sm:text-[42px] leading-tight tracking-tight mb-2">
            Por apenas 299 MT
          </div>

          {/* Linha informativa exata da Screenshot 6 */}
          <p className="font-content text-[12px] sm:text-[13px] text-[#242B2E]/75 tracking-wide mb-6">
            Oferta de lançamento — o valor sobe em breve
          </p>

          {/* Botão de ação com tracking do checkout */}
          <CtaButton
            variant="light-section"
            size="md"
            onClick={onOrderClick}
            className="w-full max-w-[320px]"
          />
        </div>

      </div>
    </section>
  );
};
