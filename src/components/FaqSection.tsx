import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 border-b border-slate-200 relative overflow-hidden">
      {/* Anchor targets for various URL hashes */}
      <span id="preguntas" className="scroll-mt-24 sm:scroll-mt-28 block h-0 w-0 pointer-events-none" />
      <span id="preguntas-frecuentes" className="scroll-mt-24 sm:scroll-mt-28 block h-0 w-0 pointer-events-none" />
      
      {/* Fondo de Pantalla Sutil para FAQs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85" 
          alt="Líneas cívicas de fondo" 
          className="w-full h-full object-cover object-center filter brightness-[1.02] opacity-15 transform scale-100"
          loading="lazy"
        />
        {/* Capa de iluminación */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/90 via-[#F8FAFC]/95 to-slate-100/92 backdrop-blur-[1.5px]" />
        
        {/* Destellos de iluminación */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header con fuerte contraste */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 bg-[#025B80] rounded-full" />
            <span>PREGUNTAS FRECUENTES </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight leading-[1.15]">
            Preguntas frecuentes sobre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025B80] to-[#0284C7]">
              GMI Contabilidad
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
          Respondemos las dudas habituales sobre la transición a la nube y la normativa aplicable.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-2 border-[#025B80] bg-white shadow-lg shadow-[#025B80]/5' 
                    : 'border border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-black text-slate-950 font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white bg-[#025B80]' : 'text-slate-500 bg-slate-100'}`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        

      </div>
    </section>
  );
};
