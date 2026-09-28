import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { MunicipalCivicVisual } from './MunicipalCivicVisual';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="inicio" className="relative scroll-mt-28 bg-gradient-to-b from-[#DFEBF6] via-[#EDF4FA] to-[#F5F9FD] pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-slate-300/80">
      
      {/* Dynamic Background Architectural Mesh & Subtle Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deeper ambient glow in sky and brand blue */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1250px] h-[580px] bg-gradient-to-b from-sky-300/55 via-[#025B80]/18 to-transparent blur-3xl" />
        <div className="absolute top-1/4 -left-28 w-[520px] h-[520px] bg-gradient-to-r from-blue-300/30 to-transparent blur-3xl" />
        <div className="absolute top-1/4 -right-28 w-[520px] h-[520px] bg-gradient-to-l from-sky-300/30 to-transparent blur-3xl" />
        
        {/* Crisp architectural grid pattern with enhanced intensity */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(#025B80 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PARTE INICIAL DEL HERO CON ESPACIADO GENEROSO Y MÁXIMO CONTRASTE */}
        <div className="flex flex-col items-center text-center">
          
          {/* Insignia de Trayectoria: Más de 40 años */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200/80 text-[#025B80] font-mono text-[10px] sm:text-xs font-semibold shadow-2xs mb-5 sm:mb-6">
            <span className="uppercase tracking-wider">  + Más 40 años de experiencia en la gestión municipal</span>
          </div>

          {/* Strong Powerful Headline with GMI Contabilidad Web in blue gradient followed by the main title */}
          <h1 className="flex flex-col items-center gap-3 sm:gap-4 max-w-4xl">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#025B80] via-[#0284C7] to-[#014A68]">
              GMI Contabilidad Web
            </span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.25] sm:leading-[1.2] lg:leading-[1.18]">
              La solución avanzada de contabilidad, para una administración local más eficiente, ágil y transparente
            </span>
          </h1>

          {/* Imagen ilustrativa institucional de la Entidad Local y Contabilidad Pública Digital */}
          <div className="mt-7 sm:mt-8 mb-2 flex justify-center">
            <MunicipalCivicVisual />
          </div>

          {/* Clean, unburdened subtitle with generous contrast */}
          <p className="mt-8 sm:mt-10 text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl leading-relaxed font-normal">
            <span>Desde el presupuesto a la rendición de la cuenta general.</span>
            <span className="block mt-1.5 sm:mt-2">
              <strong className="text-slate-950 font-bold bg-amber-100/60 px-1 py-0.5 rounded">100% en la nube</strong>, y adaptada a los modelos básico, simple y normal.
            </span>
          </p>

          {/* Primary Action Button */}
          <div className="mt-10 sm:mt-12 flex items-center justify-center w-full sm:w-auto">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#025B80] to-[#014A68] hover:from-[#014A68] hover:to-[#01354D] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#025B80]/25 hover:shadow-xl hover:shadow-[#025B80]/35 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              <span>Solicitar Demostración </span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Trust markers with crisp styling and icons */}
          <div className="mt-10 mb-14 sm:mb-18 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200/80 text-emerald-900 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Conforme al ENS (RD 311/2022)</span>
            </div>
            <span className="hidden sm:inline text-slate-300">·</span>
            <div className="flex items-center gap-2 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/80 text-blue-950 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Enlace con plataformas oficiales</span>
            </div>
            <span className="hidden sm:inline text-slate-300">·</span>
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Soporte telefónico personalizado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
