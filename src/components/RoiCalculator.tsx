import React, { useState } from 'react';
import { Clock, TrendingUp, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const [movementsPerMonth, setMovementsPerMonth] = useState<number>(850);
  const [bankAccounts, setBankAccounts] = useState<number>(4);

  // Math: Manual takes ~ 3.5 minutes per movement (lookup, verification, typing, error-checking).
  // GMI Norma 43 automated takes ~ 20 seconds review average per movement.
  const minutesManual = (movementsPerMonth * 3.5);
  const hoursManualMonth = Math.round(minutesManual / 60);
  
  const minutesGMI = (movementsPerMonth * 0.35);
  const hoursGMIMonth = Math.round(minutesGMI / 60);

  const hoursSavedMonth = Math.max(1, hoursManualMonth - hoursGMIMonth);
  const hoursSavedYear = hoursSavedMonth * 12;

  const percentageSaved = Math.round((hoursSavedMonth / (hoursManualMonth || 1)) * 100);

  return (
    <section id="calculadora" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Fondo de pantalla fotográfico real: mesa de cálculo contable y balances financieros */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img 
          src="/assets/mecanizacion-contable-photo.jpg" 
          alt="Mecanización contable, cálculo y balances financieros" 
          className="w-full h-full object-cover object-center opacity-55"
        />
        {/* Velo traslúcido suave que deja ver con claridad la fotografía y preserva el contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-slate-50/45 to-white/75" />
      </div>

      {/* Ambient background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-sky-200/35 via-blue-100/20 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[#025B80] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 bg-[#025B80] rounded-full" />
            <span>EFICIENCIA OPERATIVA · IMPACTO ECONÓMICO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight leading-[1.15]">
            Estimación de ahorro en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025B80] via-[#0284C7] to-[#014A68]">
              mecanización contable
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            Calcule el impacto directo de sustituir la mecanización manual apunte a apunte por la importación y automatización de GMI Contabilidad.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Controls (Left 6 cols) */}
            <div className="md:col-span-6 space-y-7">
              
              {/* Slider 1: Bank movements */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-900">
                    Movimientos bancarios mensuales:
                  </label>
                  <span className="font-mono font-bold text-[#025B80] text-base tabular-nums bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 shadow-2xs">
                    {movementsPerMonth} apuntes / mes
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50"
                  value={movementsPerMonth}
                  onChange={(e) => setMovementsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#025B80]"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono font-medium">
                  <span>100 (Entidad pequeña)</span>
                  <span>2.500</span>
                  <span>5.000+ (Comarca / Mancomunidad)</span>
                </div>
              </div>

              {/* Slider 2: Bank accounts */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-900">
                    Cuentas bancarias operativas:
                  </label>
                  <span className="font-mono font-bold text-[#025B80] text-base tabular-nums bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 shadow-2xs">
                    {bankAccounts} cuentas
                  </span>
                </div>

                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="1"
                  value={bankAccounts}
                  onChange={(e) => setBankAccounts(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#025B80]"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono font-medium">
                  <span>1 cuenta</span>
                  <span>8 cuentas</span>
                  <span>15 cuentas</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Basado en medias de tiempos auditados en Ayuntamientos y entidades locales frente a digitación manual tradicional.
                </span>
              </div>

            </div>

            {/* Results Display (Right 6 cols) - High Contrast Commanding Panel */}
            <div className="md:col-span-6 bg-gradient-to-br from-[#025B80] to-[#014A68] rounded-2xl p-7 border border-[#025B80]/30 shadow-xl space-y-6 relative overflow-hidden text-white">
              
              <div className="border-b border-white/20 pb-4">
                <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wider font-mono">
                  Resultado de la Estimación Anual
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-display tabular-nums mt-1.5 drop-shadow-sm">
                  {hoursSavedYear} Horas
                </div>
                <div className="text-xs font-semibold text-sky-100 mt-1">
                  Ahorro anual estimado en tareas de mecanización y punteo
                </div>
              </div>

              {/* Breakdown metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
                  <div className="text-sky-200 text-[11px] font-medium">Ahorro mensual</div>
                  <div className="font-bold text-white font-mono text-sm mt-1">
                    {hoursSavedMonth} horas / mes
                  </div>
                </div>

                <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15">
                  <div className="text-sky-200 text-[11px] font-medium">Reducción de carga</div>
                  <div className="font-black text-emerald-300 font-mono text-sm mt-1">
                    -{percentageSaved}% tiempo
                  </div>
                </div>
              </div>

              {/* Summary benefit */}
              <div className="text-xs text-sky-100/90 leading-relaxed font-normal">
                Su personal administrativo podrá liberar más de <strong className="text-white font-bold">{hoursSavedYear} horas al año</strong> a 
                mejorando así la eficiencia y productividad del ayuntamiento.
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-5 bg-white hover:bg-slate-50 text-[#025B80] text-xs sm:text-sm font-black rounded-xl shadow-lg shadow-black/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>Solicitar estudio de impacto para su entidad</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
