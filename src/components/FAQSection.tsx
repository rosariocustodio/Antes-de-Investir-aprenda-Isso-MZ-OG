import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/bookContent';

export const FAQSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section 
      id="faq" 
      data-section-theme="light"
      className="py-12 sm:py-14 md:py-16 bg-[#EBE3DE] text-[#0E0E0D] px-5 sm:px-8 lg:px-12 border-t border-b border-[#D8CDC8]"
    >
      <div className="max-w-[760px] mx-auto text-center">
        
        {/* Section H2 Title matching Screenshot 6 */}
        <h2 className="font-headline font-bold text-[#360A2F] text-[32px] sm:text-[38px] leading-[1.16] tracking-tight mb-8 sm:mb-10">
          Perguntas Frequentes
        </h2>

        {/* Accordion List with fine dividers matching Screenshot 6 & 7 */}
        <div className="text-left divide-y divide-[#360A2F]/15 border-y border-[#360A2F]/15 mb-2">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left flex items-start justify-between gap-4 font-headline font-semibold text-[17px] sm:text-[19px] text-[#360A2F] hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="font-content font-bold text-[11px] sm:text-[12px] tracking-wider text-[#360A2F]/70 shrink-0 mt-1">
                    Q{idx + 1}
                  </span>
                  <span className="leading-snug">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#360A2F]/80 shrink-0 mt-0.5 transition-transform duration-200 ${
                    activeFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeFaq === idx && (
                <div className="pt-3 sm:pt-4 pl-6 sm:pl-8 pr-2 font-content text-[14.5px] sm:text-[15.5px] text-[#242B2E]/90 leading-relaxed animate-fade-in">
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
