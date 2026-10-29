import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { BookMockup } from './BookMockup';
import { RumosSegurosLogo } from './RumosSegurosLogo';
import { CtaButton } from './CtaButton';

interface TradeTravelHeroProps {
  onOrderClick: (e?: React.MouseEvent) => void;
  onPreviewClick: () => void;
}

export const TradeTravelHero: React.FC<TradeTravelHeroProps> = ({
  onOrderClick,
  onPreviewClick,
}) => {
  return (
    <section 
      id="hero" 
      data-section-theme="dark"
      className="relative w-full bg-[#2C0A29] text-[#F8F4EE] pt-7 sm:pt-9 md:pt-12 pb-14 sm:pb-16 md:pb-20 px-5 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden"
    >
      
      {/* Vinheta atmosférica profunda e sóbria */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#3D0F38_0%,#240622_100%)] pointer-events-none opacity-95" 
        aria-hidden="true" 
      />

      <div className="relative max-w-[1140px] mx-auto z-10">
        
        {/* Cabeçalho de marca Rumos Seguros */}
        <header className="flex items-center justify-start mb-7 sm:mb-9 md:mb-12">
          <RumosSegurosLogo variant="light" />
        </header>

        {/* Layout Principal: 2 colunas equilibradas no PC, fluxo vertical no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10 lg:gap-14">
          
          {/* Coluna de Texto e Ação */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start">

            {/* Eyebrow badge oficial */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-content font-medium tracking-wide uppercase text-white/90 mb-3.5 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>+1.700 pessoas preparadas</span>
            </div>

            {/* Título Principal H1 - Alinhado com a promessa real do e-book */}
            <h1 className="font-headline font-bold text-white text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.18] sm:leading-[1.14] tracking-[-0.02em] mb-4 sm:mb-5 max-w-[640px]">
              Antes de investir, <br className="hidden sm:inline" />
              <span className="text-white">há coisas que precisas de saber.</span>
            </h1>

            {/* Subtítulo adaptado - Claro, direto e educativo */}
            <p className="font-content text-[#F8F4EE]/90 font-normal text-[14px] sm:text-[15.5px] md:text-[16px] leading-[1.6] mb-5 sm:mb-6 md:mb-8 max-w-[540px]">
              Descobre os fundamentos dos investimentos, compreende os riscos reais e aprende o que deves analisar antes de tomar decisões com o teu dinheiro.
            </p>

            {/* Mockup do Livro no Mobile */}
            <div className="md:hidden w-full flex justify-center my-4 sm:my-6">
              <BookMockup 
                onPreviewClick={onPreviewClick} 
                imageSrc="/mockup principal.webp" 
                size="md" 
              />
            </div>

            {/* Bloco de CTA e Garantias */}
            <div className="w-full max-w-[360px] sm:max-w-[380px] flex flex-col items-center md:items-start">
              <CtaButton
                id="hero-order-book-btn"
                variant="dark-section"
                size="lg"
                text="QUERO O MEU GUIA DIGITAL"
                onClick={onOrderClick}
                className="w-full"
              />

              {/* Linha de segurança e garantias sem termos técnicos ou preços desnecessários */}
              <div className="w-full flex items-center justify-center md:justify-start flex-wrap gap-x-3 gap-y-1.5 text-[11.5px] sm:text-xs text-white/85 font-content mt-3.5 select-none tracking-normal">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Pagamento 100% Seguro</span>
                </span>
                <span className="text-white/30">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Acesso Imediato</span>
                </span>
              </div>
            </div>

          </div>

          {/* Coluna do Mockup no Desktop */}
          <div className="hidden md:flex md:col-span-5 justify-center items-center w-full pl-2 lg:pl-6">
            <div className="w-full max-w-[400px] lg:max-w-[440px] xl:max-w-[470px] flex justify-center">
              <BookMockup 
                onPreviewClick={onPreviewClick} 
                imageSrc="/mockup principal.webp" 
                size="lg" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

