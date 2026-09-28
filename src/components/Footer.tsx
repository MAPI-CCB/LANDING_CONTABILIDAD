import React from 'react';
import { Phone, Mail, Globe, MapPin, ExternalLink, LogIn } from 'lucide-react';
import { GMI_LOGIN_URL } from './GmiLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d2b45] text-slate-200 text-xs border-t border-sky-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Brand info with Official CCB Logo */}
          <div className="lg:col-span-5 space-y-3">
            <a 
              href="https://www.ccbosco.es" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block group py-1 px-2 -ml-2 rounded-xl hover:bg-sky-900/30 transition-all duration-200 cursor-pointer"
              title="Centro de Cálculo Bosco"
            >
              <img 
                src="/ccb_logo_trimmed_dark-DiHdyijV.png" 
                alt="Centro de Cálculo Bosco" 
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]" 
                referrerPolicy="no-referrer"
              />
            </a>

            <div>
              <a 
                href={GMI_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#025B80] hover:bg-sky-600 border border-sky-400/40 text-white font-bold text-[11px] transition-all shadow-xs hover:shadow-md active:scale-95"
              >
                <LogIn className="w-3 h-3 text-sky-200" />
                <span>Acceso Clientes GMI Web (cbAytos)</span>
                <ExternalLink className="w-2.5 h-2.5 text-sky-200" />
              </a>
            </div>
          </div>

          {/* Contacto Directo y Logotipo ENS a su margen derecha */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row justify-between items-start gap-5 sm:gap-6">
            {/* Contacto Directo */}
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block font-mono border-b border-sky-800/40 pb-1">
                CONTACTO DIRECTO
              </span>
              
              <div className="space-y-1.5 text-[11px] text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
                  <span>Reina Fabiola, 37. Edificio Los Arcos. Oficina 131, 50088 Zaragoza</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-sky-400 shrink-0" />
                  <a href="tel:976480084" className="hover:text-white transition-colors font-mono font-bold text-white">
                    976 480 084
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-sky-400 shrink-0" />
                  <a href="mailto:info@ccbosco.com" className="hover:text-white transition-colors">
                    info@ccbosco.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-sky-400 shrink-0" />
                  <a href="https://www.ccbosco.es" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.ccbosco.es
                  </a>
                </div>
              </div>
            </div>

            {/* Logotipo ENS a la margen derecha */}
            <div className="space-y-2 shrink-0 flex flex-col items-start sm:items-end">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block font-mono border-b border-sky-800/40 pb-1 w-full sm:text-right">
                SEGURIDAD Y CALIDAD
              </span>
              
              <div className="flex flex-col items-start sm:items-end">
                <a 
                  href="https://ccbosco.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block p-1.5 rounded-xl bg-[#092237]/90 hover:bg-[#0c2a44] border border-sky-800/50 hover:border-sky-600/60 transition-all shadow-xs hover:shadow-sm hover:scale-[1.02]"
                  title="Certificación Esquema Nacional de Seguridad (ENS)"
                >
                  <img 
                    src="/ens.svg" 
                    alt="Distintivo Esquema Nacional de Seguridad (ENS)" 
                    className="h-14 sm:h-16 md:h-18 w-auto object-contain rounded-lg transition-transform group-hover:brightness-105" 
                    referrerPolicy="no-referrer"
                  />
                </a>
                <span className="text-[10px] text-sky-200/80 mt-1.5 text-left sm:text-right max-w-[145px] leading-tight font-mono">
                  Conformidad ENS RD 311/2022
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-5 pt-3.5 border-t border-sky-900/40 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Centro Cálculo Bosco S.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-3">
            <a href="https://ccbosco.es/aviso-legal-y-politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Aviso Legal
            </a>
            <span>·</span>
            <a href="https://ccbosco.es/politica-privacidad-2/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <span>·</span>
            <span>Esquema Nacional de Seguridad (ENS)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
