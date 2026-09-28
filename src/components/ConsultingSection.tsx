import React from 'react';
import { 
  Building2, 
  FileCheck, 
  HelpCircle, 
  PhoneCall, 
  ShieldAlert, 
  FileSpreadsheet, 
  Landmark, 
  Briefcase,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ConsultingSectionProps {
  onOpenDemoModal: () => void;
}

export const ConsultingSection: React.FC<ConsultingSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="consultoria" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Grupo Oesía style) */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-blue-700 rounded-xs" />
            <span className="text-xs font-bold text-blue-800 tracking-wider uppercase font-mono">
              CONSULTORÍA ESPECIALIZADA · PLATAFORMA AUTORIZ@
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Asistencia técnica continua y{' '}
            <span className="text-blue-700">rendición telemática en plazo</span>
          </h2>

          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Las obligaciones normativas con el Ministerio de Hacienda y el Tribunal de Cuentas no admiten demoras. 
            El equipo de consultores sénior de <strong className="text-slate-900 font-semibold">Centro Cálculo Bosco</strong> asiste 
            directamente a su entidad en la confección de informes preceptivos, cálculo de reglas fiscales y remisión periódica.
          </p>
        </div>

        {/* 2-Column Corporate Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Plataforma Autoriz@ */}
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-700" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Landmark className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  MINISTERIO DE HACIENDA
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Gestión de Plataforma Autoriz@
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Cumplimiento ágil y supervisado de todas las obligaciones periódicas de suministro de información económico-financiera ante la Secretaría General de Financiación Autonómica y Local.
                </p>
              </div>

              {/* Obligation cards */}
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-blue-700" />
                    <span>Periodo Medio de Pago a Proveedores (PMP) y Morosidad</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Cálculo automatizado conforme al Real Decreto 635/2014 y generación del fichero para la remisión mensual o trimestral.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-blue-700" />
                    <span>Reglas Fiscales y Estabilidad Presupuestaria</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Evaluación de la capacidad/necesidad de financiación, regla de gasto y límite de deuda según la Ley Orgánica 2/2012 (LOEPSF).
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-blue-700" />
                    <span>Planes Presupuestarios a Medio Plazo (CIR)</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Estructuración de previsiones presupuestarias plurianuales exigidas para la solicitud de préstamos y fondos estatales.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-700" />
                    <span>Expediente de Control Interno (Tribunal de Cuentas)</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Supervisión y soporte documental del control interno regulado por el Real Decreto 424/2017 para fiscalización de gastos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                100% de expedientes en plazo
              </span>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>Consultar soporte en Autoriz@</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Asistencia Técnica y Consultoría Contable */}
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-700" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  CENTRO CÁLCULO BOSCO
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Asistencia Técnica Especializada
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Un equipo multidisciplinar de economistas y consultores especializados en régimen local a disposición de su Secretaría-Intervención y Tesorería.
                </p>
              </div>

              {/* Service list */}
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-700" />
                    <span>Confección de Presupuesto Inicial y Liquidación Anual</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Asistencia en el cálculo del Remanente de Tesorería para Gastos Generales (RTGG), incorporación de remanentes y ajustes SEC-2010.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-blue-700" />
                    <span>Elaboración de la Cuenta General</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Cierre del balance, cuenta del resultado económico-patrimonial, estado de flujos y memoria completa para rendición a la Sindicatura de Cuentas.
                  </p>
                </div>

                <div className="p-3.5 bg-blue-50/70 rounded border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-900 font-bold">
                    <PhoneCall className="w-4 h-4 text-blue-700" />
                    <span>Atención Telefónica Directa: 976 480 084</span>
                  </div>
                  <p className="text-slate-700 mt-1 text-[11px]">
                    Contacte directamente con nuestros consultores sénior en Zaragoza sin pasar por robots ni sistemas de tickets dilatados en el tiempo.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>Asesoramiento en Transición y Puesta en Marcha</span>
                  </div>
                  <p className="text-slate-600 mt-1 text-[11px]">
                    Migración segura de saldos históricos y formación personalizada para el personal administrativo y contable del Ayuntamiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Sede en Zaragoza · Cobertura estatal
              </span>
              <a 
                href="tel:976480084"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
              >
                <span>Llamar al 976 480 084</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
