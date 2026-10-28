import React from 'react';
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

            {/* Título Principal H1 - Opção 3 com tipografia impactante, profissional e de fácil leitura */}
            <h1 className="font-headline font-bold text-white text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.18] sm:leading-[1.14] tracking-[-0.02em] mb-4 sm:mb-5 max-w-[640px]">
              O seu salário deve construir o seu futuro — <br className="hidden sm:inline" />
              <span className="text-white">não apenas pagar contas do mês.</span>
            </h1>

            {/* Subtítulo adaptado - Opção 5: conciso, nítido e em tamanho reduzido para não poluir */}
            <p className="font-content text-[#F8F4EE]/90 font-normal text-[13.5px] xs:text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.55] sm:leading-[1.6] mb-5 sm:mb-6 md:mb-8 max-w-[520px]">
              Pare de trabalhar apenas para pagar contas.{' '}
              <span className="text-white font-medium">
                Tenha um plano simples e comprovado para ver o seu dinheiro crescer de verdade.
              </span>
            </p>

            {/* Mockup do Livro no Mobile (estilo original book.tradeandtravel.com) */}
            <div className="md:hidden w-full flex justify-center my-4 sm:my-6">
              <BookMockup 
                onPreviewClick={onPreviewClick} 
                imageSrc="/mockup principal.webp" 
                size="md" 
              />
            </div>

            {/* Bloco de CTA e Garantias */}
            <div className="w-full max-w-[340px] flex flex-col items-center md:items-start">
              <CtaButton
                id="hero-order-book-btn"
                variant="dark-section"
                size="lg"
                onClick={onOrderClick}
                className="w-full"
              />

              {/* Linha discreta de segurança e transparência */}
              <div className="w-full flex items-center justify-center md:justify-start gap-2 text-[10.5px] sm:text-[11px] text-white/60 font-content mt-3.5 select-none tracking-normal">
                <span>Pagamento seguro</span>
                <span className="text-white/30">•</span>
                <span>Acesso imediato</span>
                <span className="text-white/30">•</span>
                <span>Suporte directo</span>
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

