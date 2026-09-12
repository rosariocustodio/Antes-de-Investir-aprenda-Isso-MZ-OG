import React from 'react';

interface SocialProofSectionProps {
  onOrderClick: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOrderClick }) => {
  const testimonials = [
    {
      author: 'Eng. Amílcar Cossa',
      role: 'Engenheiro de Telecomunicações',
      location: 'Maputo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote:
        '“Através deste conteúdo, o Rosario ajuda-nos a entender como gerir riscos no contexto moçambicano, mas principalmente como manter a tranquilidade mental sem cair em promessas fáceis de enriquecimento rápido.”',
    },
    {
      author: 'Dr. Paulo Manhiça',
      role: 'Médico & Gestor de Serviços de Saúde',
      location: 'Matola',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      quote:
        '“Um livro escrito com profunda clareza e sob a ótica real de Moçambique. Todo o profissional que trabalha no país deveria ler antes de colocar as suas poupanças e salários em risco desnecessário.”',
    },
    {
      author: 'Diana Sitoe',
      role: 'Gestora Comercial & Empreendedora',
      location: 'Beira',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      quote:
        '“Linguagem descomplicada, exemplos práticos e um método passo a passo. Mudou completamente a forma como encaro o meu rendimento mensal e a proteção do meu futuro familiar.”',
    },
  ];

  return (
    <section className="bg-[#FDF5F2] text-[#0E0E0D] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-[#E4DAD9]">
      <div className="max-w-[1240px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="font-content font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-[1.8px] uppercase text-[#360A2F] mb-2 sm:mb-3">
            Impacto & Reconhecimento
          </p>
          <h2 className="font-headline font-normal text-[#360A2F] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-tight">
            O Que Dizem os Leitores Que Já Aplicaram o Método
          </h2>
        </div>

        {/* 3 Editorial Testimonial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-10 text-left mb-10 sm:mb-12 md:mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between border-t-2 border-[#360A2F]/20 pt-6 bg-white/50 md:bg-transparent p-5 md:p-0 transition-all duration-200"
            >
              {/* Quote Mark & Text */}
              <div>
                <span className="font-headline text-[#360A2F]/30 text-4xl block leading-none select-none mb-1">
                  “
                </span>
                <p className="font-headline italic text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-[#242B2E] leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Author Info with Profile Picture */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#360A2F]/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#360A2F]/20 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-content font-bold text-[12px] sm:text-[13px] uppercase tracking-[1px] text-[#360A2F] leading-tight">
                    {t.author}
                  </p>
                  <p className="font-content text-[11px] sm:text-[12px] text-[#242B2E]/80 leading-tight mt-0.5">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full sm:w-auto flex justify-center">
          <button
            type="button"
            onClick={onOrderClick}
            className="font-button font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-[#360A2F] tracking-[1.5px] sm:tracking-[2px] uppercase bg-transparent border-2 border-[#360A2F] rounded-none px-7 sm:px-9 py-3.5 sm:py-4 w-full sm:w-auto inline-block text-center transition-colors duration-200 hover:bg-[#360A2F] hover:text-white cursor-pointer"
          >
            GARANTIR O MEU EXEMPLAR • 397 MT
          </button>
        </div>

      </div>
    </section>
  );
};
