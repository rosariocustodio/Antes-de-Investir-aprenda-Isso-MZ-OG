import React from 'react';
import { CHECKOUT_URL } from '../config/checkout';

interface StickyBottomBarProps {
  show: boolean;
  onBuyClick: (e?: React.MouseEvent) => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ show, onBuyClick }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-[#1F041A]/95 text-[#F8F4EE] border-t border-white/15 backdrop-blur-md px-2.5 sm:px-6 py-2 sm:py-2.5 pb-[max(0.7rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 transform ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-[1140px] mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Left Side: Title & Subtitle com tipografia fluida que se adapta à largura do ecrã */}
        <div className="flex flex-col text-left min-w-0 pr-0.5">
          <span className="font-headline text-[clamp(11px,3.1vw,15px)] text-white font-normal truncate leading-tight">
            Antes de Investir, Aprenda Isto
          </span>
          <span className="font-content text-[clamp(8px,2.2vw,10.5px)] text-white/70 tracking-[clamp(0.04em,0.9vw,0.16em)] uppercase font-medium mt-0.5 truncate">
            DISPONÍVEL EM MOÇAMBIQUE
          </span>
        </div>

        {/* Right Side: Action Button com escala fluida proporcional ao telemóvel */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onBuyClick}
          className="font-button py-2 sm:py-2.5 px-2.5 sm:px-6 rounded-none border border-white/90 text-white bg-transparent hover:bg-white hover:text-[#2C0A29] active:bg-white/20 font-medium text-[clamp(9.5px,2.7vw,12px)] uppercase tracking-[clamp(0.05em,0.8vw,0.16em)] transition-all duration-200 cursor-pointer whitespace-nowrap min-h-[38px] sm:min-h-[44px] flex items-center justify-center shadow-sm active:scale-[0.98] shrink-0"
        >
          QUERO O MEU EXEMPLAR
        </a>
      </div>
    </div>
  );
};
