import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenDemoModal: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenDemoModal }) => {
  const comparisonRows = [
    {
      aspect: 'Conciliación bancaria',
      traditional: 'Tecleo manual apunte por apunte con alta tasa de errores y semanas de retraso.',
      gmi: 'Importación directa en Norma 43. Emparejamiento automático de tercero, partida y código.'
    },
    {
      aspect: 'Control de gasto y presupuesto',
      traditional: 'Verificación a posteriori, arriesgando desfases y reparos de intervención.',
      gmi: 'Control preventivo automático de Bolsas de Vinculación antes de confirmar el asiento.'
    },
    {
      aspect: 'Facturación de proveedores',
      traditional: 'Descarga manual una a una desde buzones y tecleo redundante en contabilidad.',
      gmi: 'Conexión con FACe, SEDIPUALBA y GESTIONA con volcado directo a fases contables.'
    },
    {
      aspect: 'Órdenes de pago masivas',
      traditional: 'Confección manual de transferencias en la banca online con riesgo de duplicidad.',
      gmi: 'Generación automática de ficheros Norma 34 (SEPA XML) para nóminas y pagos agrupados.'
    },
    {
      aspect: 'Obligaciones con el Ministerio',
      traditional: 'Incertidumbre trimestral para cuadrar PMP, morosidad y reglas fiscales en Autoriz@.',
      gmi: 'Preparación guiada de ficheros y asistencia experta del equipo de Centro Cálculo Bosco.'
    },
    {
      aspect: 'Servicio de Asistencia',
      traditional: 'Tickets web impersonales o centralitas deslocalizadas sin conocimiento de la normativa local.',
      gmi: 'Atención telefónica directa en el 976 480 084 por técnicos y expertos consultores contables.'
    }
  ];

  return (
    <section id="comparativa" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 border-b border-slate-200 relative overflow-hidden">
      
      {/* Fondo de Pantalla Arquitectónico Sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2400&q=85" 
          alt="Líneas arquitectónicas modernas" 
          className="w-full h-full object-cover object-center filter brightness-[1.02] opacity-15 transform scale-100"
          loading="lazy"
        />
        {/* Capa de lavado suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/92 via-white/95 to-slate-50/90 backdrop-blur-[1.5px]" />
        
        {/* Destellos de iluminación */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header con alto contraste */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#025B80] rounded-full" />
            <span>ANÁLISIS COMPARATIVO · MODERNIZACIÓN ADMINISTRATIVA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight leading-[1.15]">
            Gestión tradicional frente a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025B80] to-[#0284C7]">
              GMI Contabilidad WEB
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Compruebe por qué cada vez más entidades locales transforman su operativa diaria con la automatización integral de sus procesos contables.
          </p>
        </div>

        {/* Comparison Table (High Contrast Executive Table) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-5 font-bold text-xs uppercase font-mono w-1/4 bg-slate-100 text-slate-800">
                    Área Operativa
                  </th>
                  <th className="py-4 px-5 font-bold text-xs uppercase font-mono text-rose-950 bg-rose-50/80 w-3/8 border-l border-rose-100">
                    Gestión Manual Tradicional
                  </th>
                  <th className="py-4 px-5 font-black text-sm uppercase tracking-wide text-white bg-[#025B80] w-3/8 border-l border-[#014A68] shadow-inner">
                    Plataforma GMI Contabilidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-950 align-top bg-slate-50/40">
                      {row.aspect}
                    </td>

                    <td className="py-4 px-5 text-slate-700 text-xs sm:text-sm align-top bg-rose-50/20 border-l border-rose-50">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{row.traditional}</span>
                      </div>
                    </td>

                    <td className="py-4 px-5 text-slate-950 bg-sky-50/40 font-semibold text-xs sm:text-sm align-top border-l border-sky-100">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#025B80] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{row.gmi}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-slate-600 font-semibold">
              Conforme a los estándares del Ministerio de Hacienda y el Esquema Nacional de Seguridad (ENS)
            </span>
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#025B80] hover:bg-[#014A68] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg active:scale-95"
            >
              <span>Solicitar análisis para su Ayuntamiento</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
