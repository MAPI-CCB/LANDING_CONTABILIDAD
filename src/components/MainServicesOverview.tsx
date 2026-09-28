import React, { useState, useEffect, useRef } from 'react';
import { 
  FileSpreadsheet, 
  Layers, 
  Workflow, 
  Landmark, 
  PhoneCall, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Phone,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  MousePointerClick
} from 'lucide-react';
import { GMI_LOGIN_URL } from './GmiLogo';

interface MainServicesOverviewProps {
  onOpenDemoModal: () => void;
  selectedServiceId?: string;
}

export const MainServicesOverview: React.FC<MainServicesOverviewProps> = ({ 
  onOpenDemoModal,
  selectedServiceId
}) => {
  const [activeSection, setActiveSection] = useState<string>('norma43');
  const isUserScrollingRef = useRef(false);
  const pillBarRef = useRef<HTMLDivElement>(null);
  const pillScrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const services = [
    {
      id: 'norma43',
      icon: FileSpreadsheet,
      badge: 'Conciliación Bancaria',
      pillTitle: 'Norma 43 Bancaria',
      pillSubtitle: 'Conciliación automática',
      title: 'Norma 43 Bancaria Automatizada',
      subtitle: 'Del extracto bancario a la contabilidad pública sin teclear apunte a apunte.',
      description: 'Importe el cuaderno Norma 43 emitido por cualquier entidad financiera (CaixaBank, Ibercaja, Santander, BBVA, etc.). Nuestro motor inteligente asigna automáticamente Tercero, CIF y Partida Presupuestaria para que usted solo valide y confirme.',
      highlights: [
        'Identificación predictiva y automática de Tercero y Partida',
        'Validación en pantalla: complete solo los datos que falten',
        'Generación de asientos contables con un solo clic',
        'Trazabilidad bancaria y conciliación histórica garantizada'
      ],
      ctaText: 'Solicitar Demo',
      action: 'demo'
    },
    {
      id: 'bolsas',
      aliasId: 'operaciones',
      icon: Layers,
      badge: 'Control Presupuestario',
      pillTitle: 'Bolsas de Vinculación',
      pillSubtitle: 'Control presupuestario',
      title: 'Operaciones y Bolsas de Vinculación',
      subtitle: 'Supervisión en tiempo real del crédito disponible en todas las fases del gasto.',
      description: 'Gestione las fases presupuestarias (RC, A, D, O, P) con total seguridad. El sistema audita de forma preventiva las Bolsas de Vinculación jurídica a nivel de capítulo, artículo o concepto, alertando antes de que se produzca una desviación o déficit.',
      highlights: [
        'Auditoría preventiva de Bolsas de Vinculación en tiempo real',
        'Traspaso encadenado de fases sin duplicar información',
        'Plantillas de asientos para operaciones periódicas y nóminas',
        'Informes instantáneos de ejecución presupuestaria'
      ],
      ctaText: 'Solicitar Demostración de Operaciones',
      action: 'demo'
    },
    {
      id: 'facturacion',
      icon: Workflow,
      badge: 'Interoperabilidad',
      pillTitle: 'Facturación FACe',
      pillSubtitle: 'SEDIPUALBA y SEPA 34',
      title: 'FACe, SEDIPUALBA y SEPA 34',
      subtitle: 'Conexión sin fricciones con las plataformas oficiales del Sector Público.',
      description: 'Descargue facturas electrónicas de los proveedores municipales de forma desasistida desde FACe y vincúlelas a sus expedientes en SEDIPUALBA o GESTIONA. Emita remesas de transferencias y pagos en formato estándar SEPA Norma 34 XML.',
      highlights: [
        'Descarga automática desde el Punto General de Entrada (FACe)',
        'Integración con tramitadores de expedientes (SEDIPUALBA / GESTIONA)',
        'Generación de remesas de pago bancario SEPA Norma 34',
        'Desglose analítico por Centros de Coste y áreas municipales'
      ],
    
    },
    {
      id: 'autoriza',
      icon: Landmark,
      badge: 'Rendición Oficial',
      pillTitle: 'Plataforma Autoriz@',
      pillSubtitle: 'Hacienda y PMP',
      title: 'Plataforma Autoriz@ (Ministerio de Hacienda)',
      subtitle: 'Cálculo de Periodo Medio de Pago (PMP) y rendición telemática en plazo.',
      description: 'Cumpla sin estrés con las obligaciones periódicas del Ministerio de Hacienda. GMI calcula de forma exacta el Periodo Medio de Pago a Proveedores (PMP), deuda comercial, informes trimestrales de morosidad y reglas fiscales.',
      metric: 'Rendición en plazo garantizada',
      highlights: [
        'Cálculo riguroso del PMP conforme al Real Decreto 635/2014',
        'Generación de ficheros para la plataforma Autoriz@ de Hacienda',
        'Cumplimiento de reglas fiscales de estabilidad y regla de gasto',
        'Expedientes de control interno para el Tribunal de Cuentas'
      ],
      ctaText: 'Consultar Módulo Autoriz@',
      action: 'demo'
    },
    {
      id: 'soporte',
      icon: PhoneCall,
      badge: 'Soporte Directo',
      pillTitle: 'Soporte Técnico',
      pillSubtitle: 'Directo 976 480 084',
      title: 'Soporte Técnico y Asistencia Directa en Zaragoza',
      subtitle: 'Consultores contables expertos al teléfono directo (976 480 084).',
      description: 'En Centro Cálculo Bosco no hay centralitas automáticas ni tickets impersonales. Cuando llama al 976 480 084, habla directamente con consultores titulados con más de 30 años de experiencia en intervención y contabilidad pública local.',
      metric: 'Atención telefónica directa',
      highlights: [
        'Teléfono directo: 976 480 084,  sin robots ni contestadores',
        'Sede central en Zaragoza: Reina Fabiola, 37, Ofic 131.',
        'Asesoramiento ante consultas normativas y cambios legales',
        'Tranquilidad para Secretarios-Interventores y Tesoreros'
      ],
      ctaText: 'Llamar al 976 480 084',
      action: 'phone'
    }
  ];

  // Scroll to section smoothly and ensure its linked content is perfectly centered on screen
  const scrollToService = (id: string) => {
    isUserScrollingRef.current = true;
    setActiveSection(id);

    // Keep active pill button centered horizontally within the sticky bar without affecting window scroll
    const container = pillScrollContainerRef.current;
    const button = buttonRefs.current[id];
    if (container && button) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const scrollOffset = (buttonRect.left - containerRect.left) - (containerRect.width / 2) + (buttonRect.width / 2);
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }

    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const elementTopAbsolute = rect.top + currentScrollY;
      const elementHeight = rect.height || element.offsetHeight;

      // Calculate total height of top sticky areas (Main Navigation + Sticky Buttons Bar)
      const isDesktop = window.innerWidth >= 640;
      const mainHeaderHeight = isDesktop ? 88 : 80;
      const pillBarHeight = pillBarRef.current ? pillBarRef.current.offsetHeight : (isDesktop ? 78 : 70);
      const totalStickyOffset = mainHeaderHeight + pillBarHeight;

      // Available vertical viewport space between the sticky pill bar and the bottom of the screen
      const viewportHeight = window.innerHeight;
      const visibleHeight = viewportHeight - totalStickyOffset;

      let targetScrollY: number;
      if (visibleHeight > elementHeight) {
        // Center the linked content vertically in the visible viewport
        const verticalPadding = (visibleHeight - elementHeight) / 2;
        targetScrollY = elementTopAbsolute - totalStickyOffset - verticalPadding;
      } else {
        // If card height is close to or exceeds visible viewport, position it cleanly just below the sticky bar
        targetScrollY = elementTopAbsolute - totalStickyOffset - 20;
      }

      window.scrollTo({
        top: Math.max(0, Math.round(targetScrollY)),
        behavior: 'smooth'
      });
    }

    // Reset lock after scroll animation finishes
    setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 850);
  };

  // Sync external trigger if provided
  useEffect(() => {
    if (selectedServiceId) {
      scrollToService(selectedServiceId);
    }
  }, [selectedServiceId]);

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isUserScrollingRef.current) return;

      const isDesktop = window.innerWidth >= 640;
      const mainHeaderHeight = isDesktop ? 88 : 80;
      const pillBarHeight = pillBarRef.current ? pillBarRef.current.offsetHeight : (isDesktop ? 78 : 70);
      const totalStickyOffset = mainHeaderHeight + pillBarHeight;
      const visibleCenter = totalStickyOffset + (window.innerHeight - totalStickyOffset) / 2;

      let closestId = services[0].id;
      let minDistance = Infinity;

      for (const item of services) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + (rect.height / 2);
          const distance = Math.abs(visibleCenter - elCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestId = item.id;
          }
        }
      }

      setActiveSection((prev) => {
        if (prev !== closestId) {
          const container = pillScrollContainerRef.current;
          const button = buttonRefs.current[closestId];
          if (container && button) {
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();
            const scrollOffset = (buttonRect.left - containerRect.left) - (containerRect.width / 2) + (buttonRect.width / 2);
            container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
          }
          return closestId;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCta = (action: string) => {
    if (action === 'phone') {
      window.location.href = 'tel:976480084';
    } else {
      onOpenDemoModal();
    }
  };

  return (
    <section id="servicios" className="scroll-mt-24 sm:scroll-mt-28 py-20 lg:py-28 bg-slate-100/70 border-b border-slate-200/90 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header institucional */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-[#025B80] font-mono text-xs font-bold mb-4 shadow-2xs">
          
            
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-slate-950 tracking-tight leading-[1.12]">
            Áreas de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025B80] via-[#0284C7] to-[#014A68]">
              Actuación
            </span>
          </h2>

          <p className="mt-5 text-lg sm:text-xl font-bold text-slate-800 max-w-2xl mx-auto leading-snug">
            Soluciones diseñadas para la gestión municipal
          </p>

          {/* Bocadillo de viñeta compacto casi al borde de la barra horizontal de píldoras */}
          <div className="mt-7 sm:mt-8 flex justify-center">
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-slate-700 text-xs font-medium shadow-sm shadow-blue-900/5">
              <MousePointerClick className="w-3.5 h-3.5 text-[#025B80] shrink-0" />
              <span>
                Seleccione la sección que desea consultar para visualizar sus funcionalidades
              </span>
              {/* Cola/puntero del bocadillo apuntando hacia las píldoras inferiores */}
              <div 
                className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-b border-r border-blue-200 rotate-45"
                aria-hidden="true" 
              />
            </div>
          </div>
        </div>

        {/* BARRA HORIZONTAL STICKY DE PÍLDORAS (Baja a su sección al hacer click) */}
        <div 
          ref={pillBarRef}
          data-sticky-nav="true"
          className="sticky top-20 sm:top-22 z-30 -mx-4 sm:mx-0 px-4 sm:px-0 py-3 mb-12 bg-slate-100/95 backdrop-blur-md transition-all"
        >
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/60 overflow-hidden">
            {/* Horizontal scroll on mobile, flex row on sm/desktop */}
            <div 
              ref={pillScrollContainerRef}
              className="flex overflow-x-auto scrollbar-none divide-x divide-slate-100 sm:divide-slate-200/80"
            >
              {services.map((s) => {
                const Icon = s.icon;
                const isSelected = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      buttonRefs.current[s.id] = el;
                    }}
                    onClick={() => scrollToService(s.id)}
                    title={`Ver sección de ${s.pillTitle}`}
                    className={`group flex-1 min-w-[190px] sm:min-w-0 flex flex-row sm:flex-col items-center sm:justify-center p-3.5 sm:p-4 text-left sm:text-center transition-all duration-200 cursor-pointer gap-2.5 active:scale-[0.99] relative shrink-0 ${
                      isSelected
                        ? 'bg-[#025B80] text-white shadow-md'
                        : 'bg-white hover:bg-gradient-to-b hover:from-blue-50/70 hover:to-sky-50/30 text-slate-900'
                    }`}
                  >
                    {/* Indicador de pestaña activa en desktop */}
                    {isSelected && (
                      <div className="hidden sm:block absolute top-0 left-0 right-0 h-1 bg-sky-300" />
                    )}

                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all shadow-2xs shrink-0 ${
                      isSelected
                        ? 'bg-white/20 text-white ring-2 ring-white/30 scale-105'
                        : 'bg-blue-50 text-[#025B80] group-hover:bg-[#025B80] group-hover:text-white group-hover:scale-105'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>

                    <div className="flex-1 sm:flex-initial min-w-0">
                      <div className={`text-xs sm:text-[13px] font-bold leading-tight flex items-center sm:justify-center gap-1 ${
                        isSelected ? 'text-white' : 'text-slate-900 group-hover:text-[#025B80]'
                      }`}>
                        <span className="truncate">{s.pillTitle}</span>
                        <ArrowRight className={`w-3 h-3 sm:hidden shrink-0 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-[#025B80]'}`} />
                      </div>
                      <div className={`text-[11px] mt-0.5 truncate font-medium ${
                        isSelected ? 'text-sky-100' : 'text-slate-500 group-hover:text-slate-700'
                      }`}>
                        {s.pillSubtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* LISTADO DE SECCIONES ASOCIADAS (Cada píldora baja directamente a su tarjeta) */}
        <div className="space-y-12 sm:space-y-16">

          {/* 1. SECCIÓN ASOCIADA: NORMA 43 BANCARIA */}
          <div 
            id="norma43" 
            className="scroll-mt-48 sm:scroll-mt-56 relative overflow-hidden bg-[#EAF3FA] rounded-2xl border-l-4 border-l-[#025B80] border-y border-r border-blue-300/90 p-6 sm:p-10 shadow-xl shadow-blue-950/10 transition-all duration-200"
          >
            {/* Fondo de pantalla: Normas Bancarias, Auditoría y Extractos Electrónicos (Norma 43 / AEB) */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
              <img 
                src="/assets/contabilidad-auditoria-photo.jpg" 
                alt="Auditoría financiera y contabilidad pública" 
                className="w-full h-full object-cover object-center opacity-36 mix-blend-multiply"
              />
              <img 
                src="/assets/normas-bancarias-bg.svg" 
                alt="Norma 43 Bancaria AEB / CSB y extractos normalizados" 
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              {/* Velo degradado optimizado con mayor transparencia para resaltar el fondo con más intensidad sin saturar */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/62 to-[#EAF3FA]/55" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Detail Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs font-bold">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#025B80]" />
                  <span>Conciliación Bancaria</span>
                  <span className="text-blue-300">·</span>
                  
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950 tracking-tight">
                    Norma 43 Bancaria Automatizada
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#025B80] mt-1">
                    Del extracto bancario a la contabilidad pública sin teclear apunte a apunte.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                    Importe el cuaderno Norma 43 emitido por cualquier entidad financiera (CaixaBank, Ibercaja, Santander, BBVA, etc.). Nuestro motor inteligente asigna automáticamente Tercero, CIF y Partida Presupuestaria para que usted solo valide y confirme.
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Identificación predictiva y automática de Tercero y Partida Presupuestaria</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Validación en pantalla: complete solo los datos que falten</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Generación de asientos contables con un solo clic</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Trazabilidad bancaria y conciliación histórica garantizada</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                 

                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all cursor-pointer"
                  >
                    <span>Solicitar información</span>
                  </button>

                  
                </div>
              </div>

              {/* Right Visual Terminal */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#F0F7FD] via-[#E3EFFB] to-[#D4E8F8] rounded-2xl border border-sky-200/80 p-5 sm:p-6 space-y-4 text-slate-800 shadow-md relative overflow-hidden">
                {/* Soft diffuse light blue glow */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-300/35 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-sky-200/70 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/30" />
                      <span className="text-xs font-mono font-bold text-slate-800">
                        GMI Contabilidad · Terminal
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-100/90 text-sky-900 border border-sky-300/80">
                      Conciliación 85%
                    </span>
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-sky-100 shadow-2xs space-y-1">
                      <div className="text-[10px] text-[#025B80] font-bold tracking-wide">CUADERNO NORMA 43 BANCARIO</div>
                      <div className="text-slate-900 font-bold text-sm">IBERCAJA · 2026/03</div>
                      <div className="text-emerald-700 font-bold text-base tabular-nums">+48.500,00 €</div>
                    </div>
                    <div className="p-3.5 bg-white/85 backdrop-blur-xs rounded-xl border border-sky-100 space-y-1 shadow-2xs">
                      <div className="text-[10px] text-[#025B80] font-bold tracking-wide">IDENTIFICACIÓN AUTOMÁTICA</div>
                      <div className="text-slate-900 font-bold">GOBIERNO DE ARAGÓN</div>
                      <div className="text-slate-600 text-[11px]">Partida Ingreso: 2026-000-45000</div>
                    </div>
                    <div className="p-2.5 bg-emerald-50/90 border border-emerald-200/90 rounded-lg text-emerald-900 text-[11px] font-sans font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Apuntes emparejados listos para contabilizar</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 2. SECCIÓN ASOCIADA: BOLSAS DE VINCULACIÓN */}
          <div 
            id="bolsas" 
            className="scroll-mt-48 sm:scroll-mt-56 relative overflow-hidden bg-[#EBF4FA] rounded-2xl border-l-4 border-l-sky-600 border-y border-r border-sky-300/90 p-6 sm:p-10 shadow-xl shadow-sky-950/10 transition-all duration-200"
          >
            {/* Fondo de pantalla: Control Presupuestario, Fases del Gasto (RC, A, D, O, P) y Bolsas de Vinculación */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
              <img 
                src="/assets/mecanizacion-contable-photo.jpg" 
                alt="Control presupuestario y fiscalización pública" 
                className="w-full h-full object-cover object-center opacity-38 mix-blend-multiply"
              />
              <img 
                src="/assets/bolsas-presupuestarias-bg.svg" 
                alt="Diagrama de Fases del Gasto y Vinculación Jurídica" 
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              {/* Velo degradado optimizado con mayor transparencia para resaltar el fondo con intensidad */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/62 to-[#F0F7FD]/55" />
            </div>

            {/* Ancla adicional para compatibilidad con id operaciones */}
            <div id="operaciones" className="-top-36 relative" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Detail Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-950 text-xs font-bold">
                  <Layers className="w-3.5 h-3.5 text-sky-700" />
                  <span>Control Presupuestario</span>
              
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950 tracking-tight">
                    Operaciones y Bolsas de Vinculación
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#025B80] mt-1">
                    Supervisión en tiempo real del crédito disponible en todas las fases del gasto.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                    Gestione las fases presupuestarias (RC, A, D, O, P) con total seguridad. El sistema audita de forma preventiva las Bolsas de Vinculación jurídica a nivel de capítulo, artículo o concepto, alertando antes de que se produzca una desviación o déficit.
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Auditoría preventiva de Bolsas de Vinculación en tiempo real</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Traspaso encadenado de fases de gasto sin duplicar información</span>
                  </div>
                
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Informes instantáneos de ejecución presupuestaria para el Pleno</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                   <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all cursor-pointer"
                  >
                    <span>Solicitar información</span>
                  </button>

                 
                </div>
              </div>

              {/* Right Visual Terminal */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#F0F7FD] via-[#E3EFFB] to-[#D4E8F8] rounded-2xl border border-sky-200/80 p-5 sm:p-6 space-y-4 text-slate-800 shadow-md relative overflow-hidden">
                {/* Soft diffuse light blue glow */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-300/35 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-sky-200/70 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/30" />
                      <span className="text-xs font-mono font-bold text-slate-800">
                        GMI Contabilidad · Presupuestos
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-300/80">
                      Bolsa Conforme
                    </span>
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-sky-100 shadow-2xs space-y-1">
                      <div className="text-[10px] text-[#025B80] font-bold tracking-wide">BOLSA DE VINCULACIÓN JURÍDICA</div>
                      <div className="text-slate-900 font-bold text-sm">Capítulo 2 · Gasto Corriente</div>
                      <div className="flex justify-between text-xs pt-1 text-slate-600">
                        <span>Disponible:</span>
                        <span className="text-emerald-700 font-bold text-sm">82.700,00 €</span>
                      </div>
                    </div>
                    <div className="p-3.5 bg-emerald-50/90 border border-emerald-200/90 rounded-xl text-emerald-900 text-[11px] font-sans font-medium">
                      ✓ Control preventivo activo: sin riesgo de desviación o déficit de crédito.
                    </div>
                    <div className="p-2.5 bg-white/85 backdrop-blur-xs rounded-lg border border-sky-100 text-[11px] text-slate-700 flex justify-between shadow-2xs">
                      <span>Fase actual:</span>
                      <span className="font-bold text-[#025B80]">Fase D (Disposición)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 3. SECCIÓN ASOCIADA: FACTURACIÓN FACE, SEDIPUALBA Y SEPA 34 */}
          <div 
            id="facturacion" 
            className="scroll-mt-48 sm:scroll-mt-56 relative overflow-hidden bg-[#EEF1FB] rounded-2xl border-l-4 border-l-indigo-600 border-y border-r border-indigo-300/90 p-6 sm:p-10 shadow-xl shadow-indigo-950/10 transition-all duration-200"
          >
            {/* Fondo de pantalla: Interoperabilidad FACe, Expedientes Electrónicos y Remesas SEPA */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
              <img 
                src="/assets/edificio-institucional.jpg" 
                alt="Sector Público e Interoperabilidad" 
                className="w-full h-full object-cover object-center opacity-36 mix-blend-multiply"
              />
              <img 
                src="/assets/face-interoperabilidad-bg.svg" 
                alt="Interoperabilidad FACe Facturae, SEDIPUALBA y SEPA 34" 
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              {/* Velo degradado optimizado con mayor transparencia para resaltar el fondo con más intensidad sin saturar */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/62 to-[#EEF1FB]/55" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Detail Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs font-bold">
                  <Workflow className="w-3.5 h-3.5 text-indigo-700" />
                  <span className="text-indigo-300">·</span>
                  Interoperabilidad
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950 tracking-tight">
                  FACe, SEDIPUALBA y SEPA 34
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#025B80] mt-1">
                    Conexión  con las plataformas oficiales del Sector Público.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                    Descargue facturas electrónicas de los proveedores municipales desde FACe y vincúlelas a sus expedientes en SEDIPUALBA o GESTIONA. Emita remesas de transferencias y pagos en formato estándar SEPA Norma 34 XML.
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Descarga automática desde el Punto General de Entrada (FACe)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Integración nativa con tramitadores de expedientes (SEDIPUALBA / GESTIONA)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Generación de remesas de pago bancario SEPA Norma 34 (XML)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Gestión de proyectos</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all cursor-pointer"
                  >
                    <span>Solicitar información</span>
                  </button>
                </div>
              </div>

              {/* Right Visual Terminal */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#F0F7FD] via-[#E3EFFB] to-[#D4E8F8] rounded-2xl border border-sky-200/80 p-5 sm:p-6 space-y-4 text-slate-800 shadow-md relative overflow-hidden">
                {/* Soft diffuse light blue glow */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-300/35 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-sky-200/70 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse ring-2 ring-indigo-500/30" />
                      <span className="text-xs font-mono font-bold text-slate-800">
                        GMI Contabilidad · Conectores
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-100/90 text-indigo-900 border border-indigo-300/80">
                      Interoperable
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 bg-white/90 backdrop-blur-xs rounded-xl border border-sky-100 shadow-2xs flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-semibold text-slate-900">FACe Factura Electrónica</div>
                        <div className="text-[10px] text-slate-600">Descarga desasistida</div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full font-bold border border-emerald-300/80">
                        Sincronizado
                      </span>
                    </div>

                    <div className="p-3 bg-white/90 backdrop-blur-xs rounded-xl border border-sky-100 shadow-2xs flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-semibold text-slate-900">SEDIPUALBA / GESTIONA</div>
                        <div className="text-[10px] text-slate-600">Enlace con tramitador</div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full font-bold border border-emerald-300/80">
                        Conectado
                      </span>
                    </div>

                    <div className="p-3 bg-white/90 backdrop-blur-xs rounded-xl border border-sky-100 shadow-2xs flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-semibold text-slate-900">SEPA Norma 34 (XML)</div>
                        <div className="text-[10px] text-slate-600">Remesas bancarias</div>
                      </div>
                      <span className="text-[10px] font-mono text-sky-900 bg-sky-100/90 px-2.5 py-1 rounded-full font-bold border border-sky-300/80">
                        Generación XML
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>

          {/* 4. SECCIÓN ASOCIADA: PLATAFORMA AUTORIZ@ (HACIENDA Y PMP) */}
          <div 
            id="autoriza" 
            className="scroll-mt-48 sm:scroll-mt-56 relative overflow-hidden bg-[#FBF6EC] rounded-2xl border-l-4 border-l-amber-600 border-y border-r border-amber-300/90 p-6 sm:p-10 shadow-xl shadow-amber-950/10 transition-all duration-200"
          >
            {/* Fondo de pantalla: Plataforma Autoriz@, Ministerio de Hacienda, PMP y Tribunal de Cuentas */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
              <img 
                src="/assets/seguridad-transparencia-bg.jpg" 
                alt="Transparencia institucional y control fiscal" 
                className="w-full h-full object-cover object-center opacity-35 mix-blend-multiply"
              />
              <img 
                src="/assets/autoriza-hacienda-bg.svg" 
                alt="Plataforma Autoriz@ del Ministerio de Hacienda y cálculo de PMP" 
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              {/* Velo degradado optimizado con mayor transparencia para resaltar el fondo con intensidad */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/62 to-[#FFFDF8]/55" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Detail Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold">
                  <Landmark className="w-3.5 h-3.5 text-amber-700" />
                  <span>Rendición Oficial</span>
                  <span className="text-amber-300">·</span>
                  <span className="font-mono text-amber-800 font-bold">Rendición en plazo garantizada</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950 tracking-tight">
                    Plataforma Autoriz@ (Ministerio de Hacienda)
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#025B80] mt-1">
                    Cálculo de Periodo Medio de Pago (PMP) y rendición telemática en plazo.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                    Cumpla con las obligaciones periódicas del Ministerio de Hacienda. GMI genera los ficheros para la plataforma Autori@ de Hacienda.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Presupuesto, liquidación del presupuesto y líneas fundamentales</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Ejecución trimestral</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Periodo Medio de Pago a proveedores (PMP)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Morosidad</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Plan presupuestario a medio plazo</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Esfuerzo fiscal</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Tipos Impositivos</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Coste efectivo de los servicios de las entidades locales (CESEL)</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
          
                   <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all cursor-pointer"
                  >
                    <span>Solicitar información</span>
                  </button>

                 
              
                </div>
              </div>

              {/* Right Visual Terminal */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#F0F7FD] via-[#E3EFFB] to-[#D4E8F8] rounded-2xl border border-sky-200/80 p-5 sm:p-6 space-y-4 text-slate-800 shadow-md relative overflow-hidden">
                {/* Soft diffuse light blue glow */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-sky-300/35 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-sky-200/70 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse ring-2 ring-amber-500/30" />
                      <span className="text-xs font-mono font-bold text-slate-800">
                        GMI Contabilidad · Hacienda
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/80">
                      Plataforma Autoriz@
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-sky-100 shadow-2xs space-y-1">
                      <div className="text-[10px] text-amber-800 font-mono font-bold tracking-wide">RENDICIÓN HACIENDA (MINHAP)</div>
                      <div className="font-bold text-slate-900 text-sm">Periodo Medio de Pago (PMP)</div>
                      <div className="text-emerald-700 font-bold font-mono text-base">18,4 días (Cumple legal)</div>
                    </div>
                    <div className="p-3 bg-white/85 backdrop-blur-xs border border-sky-100 rounded-xl text-slate-700 text-[11px] font-medium leading-relaxed">
                      Ficheros auditados y listos para la firma y envío en la plataforma oficial Autoriz@.
                    </div>
                    <div className="p-2.5 bg-white/90 backdrop-blur-xs rounded-lg border border-sky-100 text-[11px] text-slate-700 flex justify-between font-mono shadow-2xs">
                      <span>Estado rendición:</span>
                      <span className="font-bold text-emerald-700">Validado sin errores</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 5. SECCIÓN ASOCIADA: SOPORTE TÉCNICO Y ATENCIÓN DIRECTA */}
          <div 
            id="soporte" 
            className="scroll-mt-48 sm:scroll-mt-56 relative overflow-hidden bg-slate-50 rounded-2xl border-l-4 border-l-emerald-600 border-y border-r border-emerald-200/90 p-6 sm:p-10 shadow-xl shadow-emerald-950/5 transition-all duration-200"
          >
            {/* Fondo de pantalla: Asistencia Telefónica, Consultoría Sénior y SLA Inmediato */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
              <img 
                src="/assets/contabilidad-auditoria-photo.jpg" 
                alt="Atención directa y consultoría contable especializada" 
                className="w-full h-full object-cover object-center opacity-25 mix-blend-multiply"
              />
              <img 
                src="/assets/soporte-asistencia-bg.svg" 
                alt="Soporte técnico directo sin centralitas y teleasistencia" 
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              {/* Velo degradado que garantiza máxima legibilidad y nitidez institucional */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-[#F0F7FD]/75" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Detail Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-bold">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Soporte Directo</span>
                  <span className="text-emerald-300">·</span>
                  <span className="font-mono text-emerald-800 font-bold">Profesionales cualificados</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950 tracking-tight">
                    Asistencia Telefónica Especializada
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#025B80] mt-1">
                    Consultores contables expertos.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                    En Centro Cálculo Bosco no hay centralitas automáticas ni tickets impersonales. Cuando llama al 976 480 084, habla directamente con consultores con más de 30 años de experiencia en intervención y contabilidad pública local.
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Teléfono directo: 976 480 084, sin robots ni contestadores</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Sede central en Zaragoza: Reina Fabiola, 37, Ofic.131. </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Asesoramiento ante consultas normativas y cambios legales</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Tranquilidad y respaldo continuo para Secretarios-Interventores y Tesoreros</span>
                  </div>
                </div>

               {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                   <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all cursor-pointer"
                  >
                    <span>Solicitar información</span>
                  </button>

                 
                </div>
              </div>

              {/* Right Visual Terminal */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#F0F7FD] via-[#E3EFFB] to-[#D4E8F8] rounded-2xl border border-blue-200/90 p-5 sm:p-6 space-y-4 text-slate-800 shadow-md relative overflow-hidden">
                {/* Soft diffuse blue glow */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-200/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/30" />
                      <span className="text-xs font-mono font-bold text-slate-800">
                        Soporte · Sede Zaragoza
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-300/80">
                      Línea Directa
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-blue-200/80 shadow-2xs space-y-1">
                      <div className="text-[10px] text-emerald-800 font-mono font-bold tracking-wide">CENTRO CÁLCULO BOSCO S.L.</div>
                      <div className="font-bold text-slate-900 text-sm">Edificio Los Arcos</div>
                      <div className="text-slate-600 text-xs">Reina Fabiola, 37, Ofi.131 . 50008 Zaragoza</div>
                    </div>

                    <a 
                      href="tel:976480084"
                      className="p-3.5 bg-[#025B80] hover:bg-[#014A68] text-white rounded-xl flex items-center justify-center gap-2.5 font-mono font-bold transition-all shadow-md text-sm cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>976 480 084</span>
                    </a>

                    <div className="p-2.5 bg-white/90 backdrop-blur-xs rounded-lg border border-blue-200/80 text-[11px] text-slate-600 text-center shadow-2xs">
                      Atención télefónica a entidades locales. De 8:00 a 20:00 de lunes a viernes.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
