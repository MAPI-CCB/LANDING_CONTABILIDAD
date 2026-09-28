import React from 'react';
import { ShieldCheck, Zap, BarChart3, Phone, Building, CheckCircle } from 'lucide-react';

export const TrustAndSecurity: React.FC = () => {
  return (
    <section id="seguridad" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Fondo de pantalla fotográfico: arquitectura de cristal y acero, símbolo de máxima transparencia, solidez y seguridad */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img 
          src="/assets/seguridad-transparencia-bg.jpg" 
          alt="Transparencia institucional, solidez estructural y seguridad" 
          className="w-full h-full object-cover object-center opacity-45"
        />
        {/* Velo traslúcido degradado que garantiza máxima nitidez de texto y tarjetas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/85 via-white/60 to-[#F8FAFC]/85" />
      </div>

      {/* Ambient background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-b from-sky-200/30 via-blue-100/15 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header con fuerte contraste */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-blue-950 font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#025B80] rounded-full" />
            <span> COMPROMISO CON EL SECTOR PÚBLICO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight leading-[1.15]">
            Seguridad ENS, Eficiencia y Transparencia en cada apunte
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Diseñado  para responder a los máximos estándares de exigencia pública, auditoría y protección de datos en la Administración Local.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          
          {/* Pillar 1: Seguridad */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/40 space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#025B80]" />
            
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#025B80] flex items-center justify-center font-bold border border-blue-100 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h3 className="text-xl font-black font-display text-slate-950 tracking-tight">
              SEGURIDAD
            </h3>

            <p className="text-xs text-[#025B80] font-bold uppercase tracking-wider font-mono">
              Conforme al ENS (RD 311/2022)
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Cumplimiento estricto del Esquema Nacional de Seguridad regulado por el Real Decreto 311/2022. Nivel medio.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-800 border-t border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Certificación ENS </span>
            </div>
          </div>

          {/* Pillar 2: Eficiencia */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/40 space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-500" />

            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold border border-sky-100 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h3 className="text-xl font-black font-display text-slate-950 tracking-tight">
              EFICIENCIA
            </h3>

            <p className="text-xs text-sky-700 font-bold uppercase tracking-wider font-mono">
              Reducción del 85% de mecanización
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Elimine tareas repetitivas gracias a la importación masiva Norma 43, la sincronización automática con FACe y SEDIPUALBA, y la generación de remesas bancarias Norma 34 SEPA.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-800 border-t border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Optimización de recursos municipales</span>
            </div>
          </div>

          {/* Pillar 3: Transparencia */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/40 space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600" />

            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-100 group-hover:scale-105 transition-transform">
              <BarChart3 className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h3 className="text-xl font-black font-display text-slate-950 tracking-tight">
              TRANSPARENCIA
            </h3>

            <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider font-mono">
              Trazabilidad total ante el Tribunal de Cuentas
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Trazabilidad de cada apunte contable y fase presupuestaria (RC, A, D, O, P). Informes exportables a Excel, PDF y formatos preceptivos para el Ministerio de Hacienda.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-800 border-t border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Auditoría y control interno riguroso</span>
            </div>
          </div>

        </div>

        {/* CC Bosco Institutional Credential Card */}
        <div className="bg-gradient-to-r from-[#0B1523] via-[#111E30] to-[#0B1523] text-white rounded-2xl p-8 sm:p-12 border border-slate-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <Building className="w-5 h-5 text-sky-400" />
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider font-mono">
                CENTRO CÁLCULO BOSCO · ZARAGOZA
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
              Más de 40 años de experiencia al servicio de las Entidades Locales
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Más de 500 de Ayuntamientos, Comarcas y Entidades Locales confían en nuestras soluciones informáticas y en nuestro soporte técnico especializado directo.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="tel:976480084"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#025B80] hover:bg-sky-600 text-white font-bold text-sm transition-all shadow-xl shadow-black/30 hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 text-white" />
              <div className="text-left font-mono">
                <div className="text-[10px] text-sky-200 uppercase font-semibold">Soporte Directo</div>
                <div className="text-base font-black">976 480 084</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
