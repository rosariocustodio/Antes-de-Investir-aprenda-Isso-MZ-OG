import React from 'react';
import { BookMockup } from './BookMockup';

interface TradeTravelHeroProps {
  onOrderClick: () => void;
  onPreviewClick: () => void;
}

export const TradeTravelHero: React.FC<TradeTravelHeroProps> = ({
  onOrderClick,
  onPreviewClick,
}) => {
  return (
    <header className="relative bg-[#360A2F] text-[#F6F1EA] w-full pt-5 sm:pt-7 md:pt-10 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12 md:mb-16">
          {/* Brand Element */}
          <div className="text-left">
            <span className="font-headline tracking-[0.18em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm font-semibold uppercase text-[#F6F1EA] select-none block">
              ROSARIO PAULINO • RUMOS SEGUROS
            </span>
          </div>

          {/* Top Right Header Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={onOrderClick}
              className="font-button text-[10px] sm:text-xs font-semibold uppercase tracking-[1.5px] sm:tracking-[2px] text-white border border-white bg-transparent px-3 sm:px-5 py-2 sm:py-2.5 rounded-none transition-colors duration-200 hover:bg-white hover:text-[#360A2F] cursor-pointer whitespace-nowrap"
            >
              GARANTIR EXEMPLAR
            </button>
          </div>
        </div>

        {/* Main Hero Row: 2-Columns on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Text & CTA */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
            
            {/* Headline H1 */}
            <h1 className="font-headline font-normal text-[#F6F1EA] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[56px] leading-[1.12] tracking-tight mb-4 sm:mb-6 max-w-[620px]">
              Construiu o Rendimento. <br className="hidden sm:inline" />
              Agora Construa a Liberdade.
            </h1>

            {/* Paragraph */}
            <p className="font-content font-normal sm:font-medium text-[#F6F1EA]/95 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.55] sm:leading-[1.6] mb-6 sm:mb-8 max-w-[520px]">
              O sucesso não deve custar a sua paz. Este livro ensina como construir patrimônio para que a sua vida seja guiada pelo que você quer, e não pelo medo de perder o que soube conquistar.
            </p>

            {/* Pristine, Uncluttered CTA & Subtle Context */}
            <div className="w-full sm:w-auto mb-2 flex flex-col items-center md:items-start gap-3">
              <button
                type="button"
                onClick={onOrderClick}
                className="font-button font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-white tracking-[1.5px] sm:tracking-[2px] uppercase bg-transparent border-2 border-white rounded-none px-7 sm:px-9 py-3.5 sm:py-4 w-full sm:w-auto inline-block text-center transition-all duration-200 hover:bg-white hover:text-[#360A2F] cursor-pointer"
              >
                GARANTIR O MEU EXEMPLAR • 397 MT
              </button>

              {/* Single, dignified editorial line (breaks friction without clutter) */}
              <p className="font-content text-[11px] sm:text-[12px] text-[#F6F1EA]/80 tracking-wide text-center md:text-left">
                Acesso imediato no telemóvel e e-mail • M-Pesa, e-Mola & Cartão
              </p>
            </div>

          </div>

          {/* Right Column: 3D Hardcover Book Mockup */}
          <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2 w-full">
            <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] mx-auto flex justify-center">
              <BookMockup onPreviewClick={onPreviewClick} showBadge={false} size="lg" />
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
