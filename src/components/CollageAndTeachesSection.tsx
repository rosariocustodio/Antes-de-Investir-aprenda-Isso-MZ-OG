import React from 'react';
import { CtaButton } from './CtaButton';

interface CollageAndTeachesSectionProps {
  onOrderClick?: (e?: React.MouseEvent) => void;
}

export const CollageAndTeachesSection: React.FC<CollageAndTeachesSectionProps> = ({
  onOrderClick,
}) => {
  return (
    <section 
      id="conteudo"
      data-section-theme="light"
      className="bg-[#FDF5F2] text-[#0E0E0D] pt-8 pb-5 sm:pt-10 sm:pb-6 md:pt-12 md:pb-8 px-5 sm:px-8 lg:px-12 border-t border-[#E4DAD9]"
    >
      <div className="max-w-[1140px] mx-auto w-full">
        
        {/* 2-Column Grid matching desktop and mobile flow */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center md:items-start gap-8 md:gap-10 lg:gap-12">
          
          {/* Left Column: Authentic Multi-Photo Editorial Collage (Trade & Travel Signature Pattern) */}
          <div className="md:col-span-5 flex justify-center w-full order-1 md:order-1 self-start">
            <div className="w-full max-w-[380px] md:max-w-none md:sticky md:top-24">
              
              {/* Asymmetric Luxury Multi-Photo Composition */}
              <div className="relative w-full pt-3 pb-8 sm:pb-10">
                
                {/* Photo 1 (Imagem Grande): imagem3.webp */}
                <div className="relative w-[86%] aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-[#E4DAD9] shadow-lg border border-[#360A2F]/15">
                  <picture className="w-full h-full">
                    <source srcSet="/imagem3.webp" type="image/webp" />
                    <img
                      src="/imagem3.webp"
                      alt="Metodologia e aplicação do livro Antes de Investir, Aprenda Isto"
                      width="1400"
                      height="933"
                      className="w-full h-full object-cover select-none"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-[#360A2F]/5 pointer-events-none" />
                </div>

                {/* Photo 2 (Sobreposição Superior): imagem1.webp */}
                <div className="absolute top-0 right-0 w-[50%] aspect-[3/4] overflow-hidden bg-[#FDF5F2] p-1.5 shadow-2xl border border-[#360A2F]/20 z-10">
                  <div className="w-full h-full overflow-hidden bg-[#E4DAD9]">
                    <picture className="w-full h-full block">
                      <source srcSet="/imagem1.webp" type="image/webp" />
                      <img
                        src="/imagem1.webp"
                        alt="Conteúdo prático de finanças e investimentos"
                        width="1200"
                        height="1800"
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>

                {/* Photo 3 (Sobreposição Inferior): imagem2.webp */}
                <div className="absolute -bottom-2 sm:-bottom-4 right-1 sm:right-3 w-[54%] aspect-[4/3] overflow-hidden bg-[#FDF5F2] p-1.5 shadow-2xl border border-[#360A2F]/25 z-20">
                  <div className="w-full h-full overflow-hidden bg-[#E4DAD9] relative">
                    <picture className="w-full h-full block">
                      <source srcSet="/imagem2.webp" type="image/webp" />
                      <img
                        src="/imagem2.webp"
                        alt="Exemplar e ferramentas do livro Antes de Investir, Aprenda Isto"
                        width="1200"
                        height="800"
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>

              </div>

              {/* Bloco de Valor Editorial do Método (Desktop) */}
              <div className="hidden md:block mt-6 pt-5 border-t border-[#360A2F]/15">
                <p className="font-content font-semibold text-[11px] tracking-[0.22em] uppercase text-[#360A2F] mb-3">
                  ESTRUTURA DO GUIA OFICIAL
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[13px] text-[#242B2E]/85 font-content">
                  <div>
                    <span className="block text-[#360A2F] font-semibold text-[11px] uppercase tracking-wider">Conteúdo Principal</span>
                    <span>30 Capítulos Estruturados</span>
                  </div>
                  <div>
                    <span className="block text-[#360A2F] font-semibold text-[11px] uppercase tracking-wider">Metodologia</span>
                    <span>100% Prática &amp; Moçambicana</span>
                  </div>
                  <div>
                    <span className="block text-[#360A2F] font-semibold text-[11px] uppercase tracking-wider">Materiais Complementares</span>
                    <span>4 Ferramentas Práticas de Aplicação</span>
                  </div>
                  <div>
                    <span className="block text-[#360A2F] font-semibold text-[11px] uppercase tracking-wider">Disponibilização</span>
                    <span>Acesso Imediato no Telemóvel e PC</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Points Fused */}
          <div className="md:col-span-7 flex flex-col items-start text-left w-full order-2 md:order-2">
            
            {/* H2 Title */}
            <h2 className="font-headline font-bold text-[#360A2F] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-[1.18] tracking-tight mb-4 sm:mb-6 [text-wrap:balance] max-w-[620px]">
              O Que Precisas de Saber Antes de Colocar o Teu Dinheiro em Risco
            </h2>

            {/* Introductory Paragraph */}
            <p className="font-content font-normal text-[#242B2E]/90 text-[14.5px] sm:text-[16px] md:text-[17px] leading-[1.65] mb-5 sm:mb-6 max-w-[600px]">
              Muitas pessoas começam a investir atraídas pela promessa de ganhos rápidos, sem compreender como os instrumentos funcionam nem como proteger o capital que tanto lhes custou a ganhar. Este guia foi criado para te dar a base educativa essencial antes de dares o primeiro passo.
            </p>

            {/* Sub-heading */}
            <h3 className="font-content font-semibold text-[11.5px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#360A2F] mb-3.5">
              O QUE O GUIA ENSINA ANTES DE INVESTIR:
            </h3>

            {/* Fused Cohesive Educational Points */}
            <div className="space-y-3 mb-6 w-full max-w-[600px]">
              
              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline text-[18px] text-[#360A2F] shrink-0 leading-none mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15.5px] text-[#242B2E] leading-relaxed">
                  <strong>Diferença entre poupar e investir:</strong> Entender quando é hora de guardar para segurança e quando faz sentido alocar capital para rendimento, sem arriscar o dinheiro do dia a dia.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline text-[18px] text-[#360A2F] shrink-0 leading-none mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15.5px] text-[#242B2E] leading-relaxed">
                  <strong>Compreensão real do risco e filtros práticos:</strong> Como avaliar qualquer proposta que recebas e saber identificar esquemas ou promessas irreais de retorno fácil.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline text-[18px] text-[#360A2F] shrink-0 leading-none mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15.5px] text-[#242B2E] leading-relaxed">
                  <strong>O que analisar antes de escolher opções formais:</strong> Compreender prazos, taxas, liquidez e o funcionamento básico dos instrumentos financeiros regulados em Moçambique.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline text-[18px] text-[#360A2F] shrink-0 leading-none mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15.5px] text-[#242B2E] leading-relaxed">
                  <strong>Preparação para decisões informadas:</strong> Desenvolver autonomia para não depender de boatos nem de conselhos desinformados na gestão do teu património.
                </p>
              </div>

            </div>

            {/* Standout Quote */}
            <p className="font-content text-[14px] sm:text-[15.5px] text-[#242B2E]/80 italic mb-6 leading-relaxed max-w-[580px]">
              "Investir sem compreender os fundamentos é assumir riscos desnecessários. Aprender antes de agir é o passo mais seguro para proteger o teu futuro financeiro."
            </p>

            {/* Action Button */}
            {onOrderClick && (
              <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                <CtaButton
                  variant="light-section"
                  size="md"
                  text="QUERO O MEU GUIA DIGITAL"
                  onClick={onOrderClick}
                  className="w-full max-w-[320px] sm:w-auto"
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
