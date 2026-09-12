import React from 'react';

interface CollageAndTeachesSectionProps {
  onOrderClick?: () => void;
}

export const CollageAndTeachesSection: React.FC<CollageAndTeachesSectionProps> = ({
  onOrderClick,
}) => {
  return (
    <section className="bg-[#FDF5F2] text-[#0E0E0D] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[#E4DAD9]">
      <div className="max-w-[1240px] mx-auto w-full">
        
        {/* 2-Column Grid matching desktop and mobile flow */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center md:items-start gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Editorial Photo (Desktop sticky alignment, subtle elegant frame) */}
          <div className="md:col-span-5 flex justify-center w-full order-2 md:order-1">
            <div className="w-full max-w-[420px] md:max-w-none overflow-hidden bg-[#E4DAD9] shadow-md border border-[#360A2F]/10 md:sticky md:top-24">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&auto=format&fit=crop&q=85"
                alt="Leitor absorvendo as lições do livro Antes de Investir Dinheiro, Aprenda Isso"
                className="w-full h-[220px] sm:h-[300px] md:h-[500px] lg:h-[560px] object-cover block select-none transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Editorial Text & Points */}
          <div className="md:col-span-7 flex flex-col items-start text-left w-full order-1 md:order-2">
            
            {/* H2 Title */}
            <h2 className="font-headline font-normal text-[#360A2F] text-[26px] sm:text-[34px] md:text-[38px] lg:text-[44px] leading-[1.18] tracking-tight mb-4 sm:mb-6">
              O Sucesso Não Deve Custar a Sua Vida
            </h2>

            {/* Introductory Paragraph */}
            <p className="font-content font-normal text-[#242B2E] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] mb-6 sm:mb-8">
              Você trabalhou duro pela sua carreira. Construiu o seu currículo e aumentou o seu rendimento. Mas se um salário parasse hoje, a sua vida continuaria segura? Ganhar dinheiro sem saber protegê-lo, estruturá-lo e fazê-lo crescer apenas prolonga a ansiedade.
            </p>

            {/* Sub-heading */}
            <h3 className="font-content font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.8px] uppercase text-[#360A2F] mb-4 sm:mb-5">
              Este livro ensina Você a :
            </h3>

            {/* List of 5 Points with clear check-style numbering */}
            <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8 w-full">
              
              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline font-bold text-[13px] text-[#360A2F]/70 shrink-0 mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  Sair do <em>"trabalho muito mas nunca saio do lugar"</em> para finalmente construir patrimônio real e seguro.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline font-bold text-[13px] text-[#360A2F]/70 shrink-0 mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  Tomar decisões financeiras sem pânico, sem dúvidas constantes e sem paralisia mental.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline font-bold text-[13px] text-[#360A2F]/70 shrink-0 mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  Construir reservas e fontes sólidas que lhe dêem escolhas e tranquilidade no seu dia a dia.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline font-bold text-[13px] text-[#360A2F]/70 shrink-0 mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  Deixar de agir guiado pelo medo da escassez e passar a decidir com base na sua própria segurança.
                </p>
              </div>

              <div className="border-b border-[#360A2F]/15 pb-3 flex items-start gap-3">
                <span className="font-headline font-bold text-[13px] text-[#360A2F]/70 shrink-0 mt-0.5">•</span>
                <p className="font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  Perceber que você tem o direito de querer mais liberdade mesmo quando a sua vida atual já parece confortável.
                </p>
              </div>

            </div>

            {/* Standout Quote */}
            <p className="font-headline italic text-[16px] sm:text-[18px] md:text-[19px] text-[#360A2F] leading-relaxed mb-6 sm:mb-8 border-l-2 border-[#360A2F]/40 pl-4">
              "Você tem o direito de querer mais da vida do que apenas contentar-se. Este livro mostra exatamente como chegar lá."
            </p>

            {/* Rectangular Outline Button */}
            {onOrderClick && (
              <div className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOrderClick}
                  className="font-button font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-[#360A2F] tracking-[1.5px] sm:tracking-[2px] uppercase bg-transparent border-2 border-[#360A2F] rounded-none px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto inline-block text-center transition-colors duration-200 hover:bg-[#360A2F] hover:text-white cursor-pointer"
                >
                  GARANTIR O MEU EXEMPLAR
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
