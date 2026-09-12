import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/bookContent';

export const FAQSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-[#FDF5F2] text-[#0E0E0D] px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-[#E4DAD9]">
      <div className="max-w-[960px] mx-auto text-center">
        
        {/* Section H2 */}
        <h2 className="font-headline font-normal text-[#360A2F] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.18] tracking-tight mb-8 sm:mb-12 md:mb-16">
          Perguntas Frequentes
        </h2>

        {/* Accordion List */}
        <div className="text-left divide-y divide-[#360A2F]/20 border-y border-[#360A2F]/20 mb-8 sm:mb-10">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-4 sm:py-5 md:py-6">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left flex items-start sm:items-center justify-between gap-4 font-headline text-[15px] sm:text-[17px] md:text-[19px] text-[#360A2F] hover:opacity-80 transition-opacity cursor-pointer min-h-[44px]"
              >
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                  <span className="font-content font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-wider text-[#360A2F]/70 shrink-0 mt-0.5 sm:mt-0">
                    Q{idx + 1}
                  </span>
                  <span className="leading-snug">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#360A2F] shrink-0 mt-1 sm:mt-0 transition-transform duration-200 ${
                    activeFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeFaq === idx && (
                <div className="pt-3 sm:pt-4 pl-6 sm:pl-8 pr-2 font-content text-[14px] sm:text-[15px] md:text-[16px] text-[#242B2E] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
