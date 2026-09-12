import React from 'react';

interface ChapterHighlightsSectionProps {
  onOpenPreview?: () => void;
  onOpenPayment: () => void;
}

export const ChapterHighlightsSection: React.FC<ChapterHighlightsSectionProps> = ({
  onOpenPayment,
}) => {
  const learningPoints = [
    {
      step: '01',
      title: 'Redefinir o Risco',
      description: 'O que é realmente arriscado vs. o que apenas parece arriscado na sua vida financeira.',
    },
    {
      step: '02',
      title: 'Construir Opcionalidade Financeira',
      description: 'Criar patrimônio e fontes consistentes que proporcionam escolhas reais no seu dia a dia.',
    },
    {
      step: '03',
      title: 'Fortalecer a Sua Postura',
      description: 'Passar da postura de sobrevivência para a de acumulação sólida e de longo prazo.',
    },
    {
      step: '04',
      title: 'Decisões com Alinhamento',
      description: 'Dar o seu próximo passo com base em clareza técnica, sem obrigação ou pressão alheia.',
    },
  ];

  return (
    <section className="bg-[#E4DAD9] text-[#0E0E0D] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-b border-[#360A2F]/10">
      <div className="max-w-[1120px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="font-content font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.8px] uppercase text-[#360A2F] mb-2 sm:mb-3">
            Estrutura & Metodologia
          </p>
          <h2 className="font-headline font-normal text-[#360A2F] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-[1.2] tracking-tight">
            Dentro Deste Livro, Você Aprenderá Como:
          </h2>
        </div>

        {/* Framed Responsive Learning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {learningPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDF5F2] border border-[#360A2F]/15 p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-200 hover:border-[#360A2F]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-baseline justify-between mb-3 sm:mb-4 border-b border-[#360A2F]/10 pb-2">
                  <span className="font-headline font-bold text-[13px] sm:text-[14px] tracking-wider text-[#360A2F]/60">
                    ETAPA {item.step}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-[17px] sm:text-[19px] md:text-[21px] text-[#360A2F] leading-snug mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Action */}
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={onOpenPayment}
            className="font-button font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-[#360A2F] tracking-[1.5px] sm:tracking-[2px] uppercase bg-transparent border-2 border-[#360A2F] rounded-none px-7 sm:px-9 py-3.5 sm:py-4 w-full sm:w-auto inline-block text-center transition-colors duration-200 hover:bg-[#360A2F] hover:text-white cursor-pointer"
          >
            GARANTIR O MEU EXEMPLAR • 397 MT
          </button>
        </div>

      </div>
    </section>
  );
};
