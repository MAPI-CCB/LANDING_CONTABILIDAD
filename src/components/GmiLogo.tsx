import React from 'react';

interface GmiLogoProps {
  layout?: 'badge' | 'horizontal' | 'vertical' | 'icon-only';
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const GMI_LOGIN_URL = "https://gmi.ccbosco.com/cbAytos/Login/Index?ReturnUrl=%2FcbAytos%2F";

export const GmiLogo: React.FC<GmiLogoProps> = ({
  layout = 'horizontal',
  variant = 'dark',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  // Sizing definitions for badge and adjacent typography (increased slightly)
  const sizeConfig = {
    sm: {
      badgeSize: 42,
      titleSize: 'text-sm font-extrabold',
      subSize: 'text-[10px]',
      gap: 'gap-2.5',
    },
    md: {
      badgeSize: 54,
      titleSize: 'text-base sm:text-lg font-extrabold',
      subSize: 'text-[11px]',
      gap: 'gap-3',
    },
    lg: {
      badgeSize: 66,
      titleSize: 'text-xl sm:text-[22px] font-black',
      subSize: 'text-xs',
      gap: 'gap-3.5 sm:gap-4',
    },
    xl: {
      badgeSize: 94,
      titleSize: 'text-2xl sm:text-3xl font-black',
      subSize: 'text-sm',
      gap: 'gap-4',
    },
  }[size];

  // Vector Badge identical to official GMI_Logo_Contabilidad with interactive hover effects
  const badgeSvg = (
    <div className="relative shrink-0 group/badge">
      {/* Subtle outer glow on hover */}
      <div 
        style={{ width: sizeConfig.badgeSize, height: sizeConfig.badgeSize }}
        className="absolute inset-0 rounded-[24%] bg-sky-500/0 group-hover:bg-sky-500/20 blur-md transition-all duration-300 pointer-events-none scale-90 group-hover:scale-110" 
      />
      <svg 
        viewBox="0 0 512 512" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: sizeConfig.badgeSize, height: sizeConfig.badgeSize }}
        className="relative shrink-0 rounded-[22%] transition-all duration-300 ease-out transform-gpu group-hover:scale-[1.07] group-hover:-translate-y-0.5 group-hover:rotate-[-0.8deg] group-hover:shadow-lg group-hover:shadow-sky-900/25 active:scale-95 drop-shadow-xs"
        aria-label="Logotipo GMI Contabilidad"
      >
        <defs>
          <linearGradient id="gmiBadgeBgGrad" x1="256" y1="16" x2="256" y2="496" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#025B80" />
            <stop offset="100%" stopColor="#015273" />
          </linearGradient>
        </defs>

        {/* Deep Marine/Petrol Blue Squircle */}
        <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#gmiBadgeBgGrad)" />

        {/* Constellation / Network Symbol (Upper) with hover illumination */}
        <g 
          id="constellation-graphic" 
          stroke="#6EC6E8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(110,198,232,0.9)]"
        >
          {/* Horizontal Baseline */}
          <line x1="126" y1="216" x2="386" y2="216" strokeWidth="10" />

          {/* Center Vertical Stem */}
          <line x1="256" y1="216" x2="256" y2="108" strokeWidth="10" />
          <circle cx="256" cy="108" r="23" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[256px_108px]" />

          {/* Left Inner Diagonal */}
          <line x1="256" y1="216" x2="198" y2="132" strokeWidth="10" />
          <circle cx="198" cy="132" r="22" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[198px_132px]" />

          {/* Left Outer Diagonal */}
          <line x1="256" y1="216" x2="140" y2="168" strokeWidth="10" />
          <circle cx="140" cy="168" r="22" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[140px_168px]" />

          {/* Left Lower Curved Branch */}
          <path d="M 250 216 C 210 216 160 214 135 198" strokeWidth="10" fill="none" />
          <circle cx="135" cy="198" r="20" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[135px_198px]" />

          {/* Right Inner Diagonal */}
          <line x1="256" y1="216" x2="314" y2="132" strokeWidth="10" />
          <circle cx="314" cy="132" r="22" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[314px_132px]" />

          {/* Right Outer Diagonal */}
          <line x1="256" y1="216" x2="372" y2="168" strokeWidth="10" />
          <circle cx="372" cy="168" r="22" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[372px_168px]" />

          {/* Right Lower Curved Branch */}
          <path d="M 262 216 C 302 216 352 214 377 198" strokeWidth="10" fill="none" />
          <circle cx="377" cy="198" r="20" fill="#6EC6E8" stroke="none" className="transition-transform duration-300 group-hover:scale-105 origin-[377px_198px]" />
        </g>

        {/* GMI Bold White with micro-zoom on hover */}
        <text 
          x="256" 
          y="348" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
          fontSize="142" 
          fontWeight="900" 
          letterSpacing="-2"
          className="transition-transform duration-300 origin-center"
        >
          GMI
        </text>

        {/* CONTABILIDAD Bold White */}
        <text 
          x="256" 
          y="420" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
          fontSize="39" 
          fontWeight="800" 
          letterSpacing="5"
          className="transition-transform duration-300 origin-center"
        >
          CONTABILIDAD
        </text>
      </svg>
    </div>
  );

  // Badge or icon-only layout: returns the exact official logo badge
  if (layout === 'badge' || layout === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        {badgeSvg}
      </div>
    );
  }

  // Vertical layout
  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {badgeSvg}
        {showSubtitle && (
          <div className="flex flex-col uppercase font-bold tracking-wider mt-2.5 font-mono text-slate-500">
            
            <span className="text-[10px] text-slate-400">Centro Cálculo Bosco</span>
          </div>
        )}
      </div>
    );
  }

  // Horizontal layout (used in Header, Footer, Modals)
  return (
    <div className={`inline-flex items-center ${sizeConfig.gap} select-none group/logo cursor-pointer ${className}`}>
      {badgeSvg}

      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center gap-2">
          <span 
            className={`tracking-tight leading-none ${sizeConfig.titleSize} transition-colors duration-200 ${
              isLight 
                ? 'text-white group-hover:text-sky-300' 
                : 'text-slate-900 group-hover:text-blue-900'
            }`}
          >
            GMI <span className="text-blue-700 group-hover:text-blue-600 font-extrabold transition-colors">Contabilidad</span>
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1 font-mono">
            <span 
              className={`font-semibold uppercase tracking-wider block truncate ${sizeConfig.subSize} transition-colors duration-200 ${
                isLight 
                  ? 'text-slate-400 group-hover:text-slate-200' 
                  : 'text-slate-500 group-hover:text-slate-700'
              }`}
            >
              Centro Cálculo Bosco
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
