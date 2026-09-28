import React, { useState } from 'react';
import { 
  Calculator, 
  Receipt, 
  Scale, 
  ArrowRight, 
  Check, 
  Landmark, 
  Layers,
  Building2,
  Workflow,
  FileCheck2,
  Lock
} from 'lucide-react';

interface ModulesSectionProps {
  onOpenDemoModal: () => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'operaciones' | 'facturacion'>('operaciones');

  return (
    <section id="modulos" className="py-16 sm:py-24 border-b border-slate-200 relative overflow-hidden">
      
      {/* Fondo de Pantalla Arquitectónico Sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85" 
          alt="Espacio arquitectónico moderno" 
          className="w-full h-full object-cover object-center filter brightness-[1.02] opacity-15 transform scale-100"
          loading="lazy"
        />
        {/* Velo blanco y celeste suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-sky-50/70 to-white/95 backdrop-blur-[1.5px]" />
        
        {/* Reflejos de luz ambiental */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Grupo Oesía style) */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-blue-700 rounded-xs" />
            <span className="text-xs font-bold text-blue-800 tracking-wider uppercase font-mono">
              ARQUITECTURA MODULAR · GESTIÓN MUNICIPAL INTEGRAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Módulos diseñados para la{' '}
            <span className="text-blue-700">contabilidad pública local</span>
          </h2>

          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Arquitectura contable adaptada a los modelos Básico, Simplificado, Normal y PGCP. 
            Todas las áreas financieras de su entidad local conectadas en un entorno ágil, riguroso y conforme al Esquema Nacional de Seguridad.
          </p>

          {/* Functional tab selector */}
          <div className="pt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('operaciones')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                activeTab === 'operaciones'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              Módulo de Operaciones y Presupuestos
            </button>
            <button
              onClick={() => setActiveTab('facturacion')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                activeTab === 'facturacion'
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              Facturación Electrónica, Costes y Conectores
            </button>
          </div>
        </div>

        {/* Dynamic Bento Grid based on tab */}
        {activeTab === 'operaciones' ? (
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Main spotlight card */}
            <div className="lg:col-span-7 bg-slate-50 rounded-lg p-6 sm:p-8 border border-slate-200 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-700" />
              
              <div className="w-10 h-10 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Gestión de Operaciones Presupuestarias
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Riguroso control del ciclo presupuestario municipal, desde la importación inicial hasta la liquidación y cierre del ejercicio, con supervisión automática de saldos de vinculación jurídica.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Importación de presupuestos externos y control de Bolsas de Vinculación
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Verificación automática e instantánea del crédito disponible en las agrupaciones presupuestarias vinculantes para evitar desviaciones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Registro de operaciones presupuestarias, no presupuestarias y tesorería
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tratamiento contable de todas las fases de gasto (RC, A, D, O, P) e ingresos, depósitos, fianzas y arqueos de caja.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Importación de extractos bancarios (Norma 43)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Emparejamiento predictivo de apuntes bancarios con el diario general sin necesidad de digitación manual.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Asientos basados en patrones modificables y personalizables
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Plantillas contables predefinidas para operaciones habituales (nóminas, tributos cedidos, subvenciones, suministros).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Generación de expedientes y listados con múltiples filtros
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mayores, diarios, balances de comprobación, libros de IVA y liquidaciones exportables a Excel, PDF y formatos oficiales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Solicitar ficha técnica de Operaciones y Presupuestos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right side helper cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1: Bolsas de Vinculación */}
              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    Control de Bolsas de Vinculación
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El sistema verifica que los créditos comprometidos no sobrepasen los límites legalmente aprobados por el Pleno municipal, avisando de insuficiencias de crédito antes de generar el documento contable.
                </p>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-[11px] font-mono text-slate-700">
                  <div className="flex justify-between">
                    <span>Área Orgánica: 165 Alumbrado</span>
                    <span className="text-emerald-700 font-bold">Crédito Conforme</span>
                  </div>
                  <div className="flex justify-between text-slate-500 mt-0.5">
                    <span>Vinculación: Capítulo 2</span>
                    <span>Disponible: 28.450,00 €</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Patrones Contables */}
              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    Asientos por Patrones Reutilizables
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Estandarice la operativa de su equipo contable. Configure patrones para nóminas de funcionarios y laborales, pagos a proveedores frecuentes y devengos de intereses.
                </p>
              </div>

              {/* Card 3: Modelos Contables */}
              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    Adaptable a cualquier Entidad Local
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Totalmente parametrizable para Modelo Básico, Modelo Simplificado, Modelo Normal y Plan General de Contabilidad Pública (PGCP).
                </p>
              </div>

            </div>

          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Spotlight Card: Facturación y Costes */}
            <div className="lg:col-span-7 bg-slate-50 rounded-lg p-6 sm:p-8 border border-slate-200 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-700" />

              <div className="w-10 h-10 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Receipt className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Facturación Electrónica y Conectores
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Conexión directa con los registros públicos de facturas electrónicas y expedientes electrónicos sin duplicidad de cargas ni descargas manuales.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Importación automática desde FACe, GESTIONA y SEDIPUALBA
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Recepción directa de las facturas de proveedores registradas en FACe y en las plataformas de tramitación de expedientes más extendidas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Generación de órdenes de transferencia en Norma 34 (nóminas y pagos)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ficheros SEPA conformes al estándar bancario para la ejecución masiva de transferencias bancarias a proveedores y empleados públicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Registro y seguimiento completo de facturas recibidas y emitidas
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Control del estado de conformidad, aprobación del gasto, contabilización de la obligación y ordenación del pago.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Asignación de centros de coste e informes de control económico
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Distribución analítica por áreas (deportes, cultura, vías públicas, servicios sociales) para una adecuada rendición de cuentas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Exportación de datos para Modelo 347 y ficheros XML/XBRL
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Generación conforme a las especificaciones de la Agencia Tributaria y de la Intervención General de la Administración del Estado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Solicitar integración con sus sistemas actuales</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right side helper cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    Punto General de Entrada FACe
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Descarga desasistida de facturas electrónicas de proveedores. Cero transcripción manual de importes, bases imponibles y tipos de IVA.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    Norma 34 Bancaria (SEPA XML)
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Agrupación y emisión automática de remesas de pago bancarias para abono de nóminas y pagos a proveedores en un único fichero compatible.
                </p>
              </div>

              <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    Centros de Coste Analíticos
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Desglose analítico de ingresos y gastos para conocer al céntimo el coste efectivo de cada servicio municipal.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
