import React, { useState } from 'react';
import { Landmark, ShieldCheck, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

interface MunicipalCivicVisualProps {
  className?: string;
}

export const MunicipalCivicVisual: React.FC<MunicipalCivicVisualProps> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className={`absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#025B80]/15 via-sky-400/20 to-blue-600/10 blur-xl transition-all duration-700 pointer-events-none ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-60 scale-95'
        }`} 
      />

      {/* Main Container Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#025B80]/15 hover:border-sky-300">
        
        {/* Top Header Micro Bar */}
        <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-slate-100 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold text-slate-800 tracking-tight">Sede Consistorial Digital</span>
          </div>
          <div className="flex items-center gap-1 text-[#025B80] bg-blue-50/80 px-2 py-0.5 rounded-full font-semibold text-[10px]">
            <span>GMI v4.8</span>
          </div>
        </div>

        {/* Central Graphic: Stylized Municipal Architecture & Data Waves */}
        <div className="relative flex items-center justify-center py-2 px-3">
          
          {/* SVG Illustration of Modern Civic Town Hall & Financial Stream */}
          <svg 
            viewBox="0 0 280 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[260px] sm:max-w-[280px] h-auto drop-shadow-xs transition-transform duration-500 group-hover:scale-105"
            aria-label="Ilustración arquitectónica de Ayuntamiento y Contabilidad Local"
          >
            {/* Background Grid & Horizon Line */}
            <line x1="10" y1="130" x2="270" y2="130" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
            
            {/* Ambient Concentric Radiating Rings */}
            <circle cx="140" cy="85" r="70" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 4" className={isHovered ? 'animate-spin' : ''} style={{ animationDuration: '30s' }} />
            <circle cx="140" cy="85" r="50" stroke="#025B80" strokeWidth="1" strokeOpacity="0.15" />

            {/* BASE / PLINTH OF TOWN HALL */}
            <path d="M70 128 H210 V132 H70 Z" fill="#94A3B8" />
            <path d="M75 124 H205 V128 H75 Z" fill="#CBD5E1" />
            <path d="M80 120 H200 V124 H80 Z" fill="#E2E8F0" />

            {/* MAIN FAÇADE (Casa Consistorial Neoclásica / Ayuntamiento) */}
            <rect x="85" y="60" width="110" height="60" rx="3" fill="#F8FAFC" stroke="#025B80" strokeWidth="2.2" />

            {/* Classic Civic Columns with GMI blue accents */}
            <rect x="94" y="68" width="8" height="52" fill="#E0F2FE" stroke="#025B80" strokeWidth="1.4" rx="1" />
            <rect x="114" y="68" width="8" height="52" fill="#E0F2FE" stroke="#025B80" strokeWidth="1.4" rx="1" />
            <rect x="158" y="68" width="8" height="52" fill="#E0F2FE" stroke="#025B80" strokeWidth="1.4" rx="1" />
            <rect x="178" y="68" width="8" height="52" fill="#E0F2FE" stroke="#025B80" strokeWidth="1.4" rx="1" />

            {/* Central Portal / Entronque Consistorial */}
            <path d="M130 120 V88 Q140 82 150 88 V120 Z" fill="#025B80" />
            <path d="M133 120 V91 Q140 86 147 91 V120 Z" fill="#0B1523" />

            {/* Classical Fronton / Triangular Pediment */}
            <path d="M80 60 L140 26 L200 60 Z" fill="#FFFFFF" stroke="#025B80" strokeWidth="2.2" />
            
            {/* Municipal Clock / Civic Medallion */}
            <circle cx="140" cy="46" r="8" fill="#E0F2FE" stroke="#025B80" strokeWidth="1.5" />
            <line x1="140" y1="46" x2="140" y2="42" stroke="#025B80" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="140" y1="46" x2="143" y2="46" stroke="#025B80" strokeWidth="1.5" strokeLinecap="round" />

            {/* Balcony / Balaustrada Institucional */}
            <rect x="122" y="72" width="36" height="5" rx="1" fill="#0284C7" />
            <line x1="124" y1="77" x2="124" y2="82" stroke="#025B80" strokeWidth="1.5" />
            <line x1="132" y1="77" x2="132" y2="82" stroke="#025B80" strokeWidth="1.5" />
            <line x1="140" y1="77" x2="140" y2="82" stroke="#025B80" strokeWidth="1.5" />
            <line x1="148" y1="77" x2="148" y2="82" stroke="#025B80" strokeWidth="1.5" />
            <line x1="156" y1="77" x2="156" y2="82" stroke="#025B80" strokeWidth="1.5" />

            {/* Central Institutional Flagpole */}
            <line x1="140" y1="26" x2="140" y2="10" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M140 11 L154 16 L140 21 Z" fill="#0284C7" />

            {/* Dynamic Data Stream Nodes connecting into the City Hall */}
            {/* Left stream: Norma 43 */}
            <path 
              d="M30 45 C60 45, 75 75, 94 85" 
              stroke="#0284C7" 
              strokeWidth="2" 
              strokeDasharray="4 3" 
              fill="none" 
              className={isHovered ? 'animate-pulse' : ''}
            />
            <circle cx="30" cy="45" r="4.5" fill="#025B80" />
            <circle cx="30" cy="45" r="2" fill="#FFFFFF" />

            {/* Right stream: FACe / SEDIPUALBA */}
            <path 
              d="M250 45 C220 45, 205 75, 186 85" 
              stroke="#025B80" 
              strokeWidth="2" 
              strokeDasharray="4 3" 
              fill="none" 
              className={isHovered ? 'animate-pulse' : ''}
            />
            <circle cx="250" cy="45" r="4.5" fill="#0284C7" />
            <circle cx="250" cy="45" r="2" fill="#FFFFFF" />

            {/* Bottom ledger stream: Liquidación presupuestaria */}
            <path 
              d="M45 115 Q90 125, 130 115" 
              stroke="#10B981" 
              strokeWidth="1.8" 
              strokeDasharray="3 2" 
              fill="none" 
            />
          </svg>

          {/* Floating Chip 1: Norma 43 Bancaria */}
          <div 
            className={`absolute -top-1 -left-2 sm:-left-3 bg-white/95 border border-sky-200/90 rounded-xl px-2.5 py-1.5 shadow-md flex items-center gap-1.5 transition-all duration-300 ${
              isHovered ? 'translate-y-[-2px] shadow-lg border-sky-400' : ''
            }`}
          >
            <div className="w-5 h-5 rounded-md bg-sky-50 text-[#025B80] flex items-center justify-center font-bold">
              <Zap className="w-3 h-3 stroke-[2.5]" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[9px] text-slate-500 font-semibold uppercase leading-none">Extractos</div>
              <div className="text-[10px] font-bold text-slate-900 leading-tight">Norma 43</div>
            </div>
          </div>

          {/* Floating Chip 2: Conciliación 100% */}
          <div 
            className={`absolute -bottom-1 -right-2 sm:-right-3 bg-white/95 border border-emerald-200 rounded-xl px-2.5 py-1.5 shadow-md flex items-center gap-1.5 transition-all duration-300 ${
              isHovered ? 'translate-y-[-2px] shadow-lg border-emerald-400' : ''
            }`}
          >
            <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[9px] text-slate-500 font-semibold uppercase leading-none">Automático</div>
              <div className="text-[10px] font-bold text-emerald-950 leading-tight">Asiento Contable</div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-[#025B80]" />
            <span>Ayuntamientos y Mancomunidades</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-700 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>ENS Acreditado</span>
          </div>
        </div>

      </div>
    </div>
  );
};
