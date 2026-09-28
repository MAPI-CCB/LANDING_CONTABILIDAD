import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ExternalLink, LogIn } from 'lucide-react';
import { GmiLogo, GMI_LOGIN_URL } from './GmiLogo';

interface HeaderProps {
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    try {
      window.history.pushState(null, '', '#inicio');
    } catch {
      // Safe fallback in restricted environments
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const cleanId = targetId.trim();
    const normalizedId = cleanId.toLowerCase().replace(/\s+/g, '-');

    // Find target element by exact ID, normalized ID, or known aliases
    let element = document.getElementById(cleanId) || document.getElementById(normalizedId);
    if (!element && (normalizedId.includes('pregunta') || normalizedId.includes('faq'))) {
      element = document.getElementById('faq') || document.getElementById('preguntas') || document.getElementById('preguntas-frecuentes');
    }

    if (element) {
      const isDesktop = window.innerWidth >= 640;
      const headerOffset = isDesktop ? 88 : 80;
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = element.getBoundingClientRect().top + currentScroll;
      
      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset),
        behavior: 'smooth'
      });

      try {
        window.history.pushState(null, '', `#${element.id || 'faq'}`);
      } catch {
        // Safe fallback in restricted environments
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-slate-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-2 xl:gap-4">
          
          {/* Official GMI Logo linked to landing start */}
          <a 
            href="#inicio"
            onClick={scrollToTop}
            className="shrink-0 flex items-center gap-2 py-1.5 select-none cursor-pointer group rounded-xl transition-all duration-200 hover:opacity-95 active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
            title="Ir al inicio de la página - GMI Contabilidad"
            aria-label="Ir al inicio de la página de GMI Contabilidad"
          >
            <GmiLogo layout="horizontal" size="md" variant="dark" showSubtitle={true} />
          </a>

          {/* Clean Aligned Main Navigation - Compact pill size so nothing cuts off */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 text-xs font-medium text-slate-600 shrink-0">
            <a 
              href="#servicios" 
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="px-2 xl:px-2.5 py-1 rounded-md hover:text-blue-700 hover:bg-slate-200/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Áreas de Actuación
            </a>
            <a 
              href="#calculadora" 
              onClick={(e) => scrollToSection(e, 'calculadora')}
              className="px-2 xl:px-2.5 py-1 rounded-md hover:text-blue-700 hover:bg-slate-200/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Calculadora de Ahorro
            </a>
            <a 
              href="#comparativa" 
              onClick={(e) => scrollToSection(e, 'comparativa')}
              className="px-2 xl:px-2.5 py-1 rounded-md hover:text-blue-700 hover:bg-slate-200/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Comparativa
            </a>
            <a 
              href="#seguridad" 
              onClick={(e) => scrollToSection(e, 'seguridad')}
              className="px-2 xl:px-2.5 py-1 rounded-md hover:text-blue-700 hover:bg-slate-200/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Seguridad
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, 'contacto')}
              className="px-2 xl:px-2.5 py-1 rounded-md hover:text-blue-700 hover:bg-slate-200/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Contacto
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className="px-2 xl:px-2.5 py-1 rounded-md hover:text-blue-700 hover:bg-slate-200/50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Phone link: icon+text on xl, icon on lg */}
            <a
              href="tel:976480084"
              className="hidden xl:flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-600 hover:text-blue-700 px-2 py-1.5 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>976 480 084</span>
            </a>
            <a
              href="tel:976480084"
              className="xl:hidden flex items-center p-2 text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-full transition-colors"
              title="Llamar: 976 480 084"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
            </a>

            {/* Request Demo Button */}
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-full shadow-2xs hover:shadow transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/70 bg-[#F8F9FA] px-4 py-5 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1.5 text-sm font-semibold text-slate-700">
            <a 
              href="#servicios" 
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Áreas de Actuación
            </a>
            <a 
              href="#calculadora" 
              onClick={(e) => scrollToSection(e, 'calculadora')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Calculadora de Ahorro
            </a>
            <a 
              href="#comparativa" 
              onClick={(e) => scrollToSection(e, 'comparativa')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Comparativa
            </a>
            <a 
              href="#seguridad" 
              onClick={(e) => scrollToSection(e, 'seguridad')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Seguridad
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, 'contacto')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Contacto
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a 
              href={GMI_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-full flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4 text-blue-400" />
              <span>Acceder a GMI Web (cbAytos)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-full flex items-center justify-center gap-2"
            >
              <span>Solicitar Demostración </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
