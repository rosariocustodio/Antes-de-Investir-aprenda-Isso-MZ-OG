import React, { useState, useEffect } from 'react';
import { CtaButton } from './CtaButton';

interface StickyBottomBarProps {
  show: boolean;
  onBuyClick: (e?: React.MouseEvent) => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ show, onBuyClick }) => {
  const [sectionTheme, setSectionTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const detectSectionTheme = () => {
      // Ponto de amostragem na base da janela onde a barra fixa se posiciona
      const sampleY = Math.max(10, window.innerHeight - 50);
      const sampleX = window.innerWidth / 2;

      // 1. Verificação directa do elemento sob a barra fixa
      if (typeof document.elementsFromPoint === 'function') {
        const elements = document.elementsFromPoint(sampleX, sampleY);
        for (const el of elements) {
          if (el.closest('#sticky-bottom-bar')) continue;
          const themedEl = el.closest('[data-section-theme]');
          if (themedEl) {
            const theme = themedEl.getAttribute('data-section-theme');
            if (theme === 'light' || theme === 'dark') {
              setSectionTheme(theme);
              return;
            }
          }
        }
      }

      // 2. Fallback de precisão por geometria dos elementos marcados
      const themedSections = document.querySelectorAll<HTMLElement>('[data-section-theme]');
      for (let i = 0; i < themedSections.length; i++) {
        const rect = themedSections[i].getBoundingClientRect();
        if (rect.top <= sampleY && rect.bottom >= sampleY) {
          const theme = themedSections[i].getAttribute('data-section-theme');
          if (theme === 'light' || theme === 'dark') {
            setSectionTheme(theme);
            return;
          }
        }
      }
    };

    detectSectionTheme();
    window.addEventListener('scroll', detectSectionTheme, { passive: true });
    window.addEventListener('resize', detectSectionTheme, { passive: true });

    return () => {
      window.removeEventListener('scroll', detectSectionTheme);
      window.removeEventListener('resize', detectSectionTheme);
    };
  }, []);

  const isLight = sectionTheme === 'light';

  return (
    <div
      id="sticky-bottom-bar"
      className={`fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-2.5 pb-[max(0.7rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 transform ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      } ${
        isLight
          ? 'bg-[#FAF3F0]/95 text-[#2C0A29] border-t border-[#360A2F]/15'
          : 'bg-[#1F041A]/95 text-[#F8F4EE] border-t border-white/15'
      }`}
    >
      <div className="max-w-[1140px] mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Lado Esquerdo: Título & Subtítulo dinâmicos com tipografia profissional e de alto contraste */}
        <div className="flex flex-col text-left min-w-0 pr-1">
          <span
            className={`font-headline text-[clamp(11px,3.1vw,15px)] font-semibold truncate leading-tight transition-colors duration-300 ${
              isLight ? 'text-[#2C0A29]' : 'text-white'
            }`}
          >
            Antes de Investir, Aprenda Isto
          </span>
          <span
            className={`font-content text-[clamp(8px,2.2vw,10.5px)] tracking-[clamp(0.04em,0.9vw,0.16em)] uppercase font-semibold mt-0.5 truncate transition-colors duration-300 ${
              isLight ? 'text-[#360A2F]/75' : 'text-white/70'
            }`}
          >
            DISPONÍVEL EM MOÇAMBIQUE
          </span>
        </div>

        {/* Lado Direito: Botão com efeito de gradiente brilhando contínuo, cantos arredondados (rounded-xl) e cor compatível com a secção */}
        <div className="shrink-0">
          <CtaButton
            variant={isLight ? 'light-section' : 'dark-section'}
            size="sm"
            onClick={onBuyClick}
          />
        </div>
      </div>
    </div>
  );
};
