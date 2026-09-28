import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Building2, ExternalLink } from 'lucide-react';
import { GmiLogo, GMI_LOGIN_URL } from './GmiLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [entityName, setEntityName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Interventor/a o Tesorero/a');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !entityName || !email || !phone || !acceptedPrivacy) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          entityName,
          entityType: 'Entidad Local',
          role,
          email,
          phone,
          modulesOfInterest: ['Demostración personalizada de 20 minutos'],
          source: 'Modal Demostración Rápida'
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.error || 'No se pudo registrar la solicitud. Llame al 976 480 084 si el problema persiste.');
      }
    } catch (err) {
      console.error('Error submitting demo request:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMsg(null);
    setFullName('');
    setEntityName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl max-w-lg w-full shadow-2xl border border-slate-200 relative overflow-hidden animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Institutional Bar */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <a
              href={GMI_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Acceder a GMI Contabilidad Web"
              className="hover:opacity-90 transition-opacity"
            >
              <GmiLogo layout="horizontal" variant="light" size="sm" showSubtitle={false} />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={GMI_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-blue-300 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>Acceso Web</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <button
              onClick={handleReset}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold font-display text-slate-900">
                Demostración Solicitada
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Gracias, <strong>{fullName}</strong>. Un consultor contable de Centro Cálculo Bosco se pondrá en contacto con usted en breve para coordinar la sesión demostrativa para el <strong>{entityName}</strong>.
              </p>

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#025B80] hover:bg-[#014A68] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  Solicitar Información
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sesión técnica guiada con consultores de Centro Cálculo Bosco.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nombre y Apellidos *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Carmen Martínez"
                    className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Entidad Local *
                    </label>
                    <input
                      type="text"
                      required
                      value={entityName}
                      onChange={(e) => setEntityName(e.target.value)}
                      placeholder="Ej. Ayto. de Tarazona"
                      className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Cargo / Perfil
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    >
                      <option value="Interventor/a o Tesorero/a">Interventor/a o Tesorero/a</option>
                      <option value="Secretario/a-Interventor/a">Secretario/a-Interventor/a</option>
                      <option value="Técnico/a de Contabilidad">Técnico/a de Contabilidad</option>
                      <option value="Alcalde/sa o Concejal">Alcalde/sa o Concejal</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="intervencion@ayto.es"
                      className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Teléfono Directo *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="976 00 00 00"
                      className="w-full px-3 py-2 bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-600">
                Atención telefónica directa disponible en el <a href="tel:976480084" className="font-bold text-blue-800 hover:underline">976 480 084</a>.
              </div>

              {/* Aviso legal y protección de datos */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer select-none text-slate-700">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-[#025B80] focus:ring-[#025B80] shrink-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-600 leading-snug">
                    He leído y acepto la{' '}
                    <a
                      href="https://ccbosco.es/politica-privacidad-2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="underline font-semibold text-[#025B80] hover:text-[#014A68] transition-colors"
                    >
                      política de privacidad
                    </a>{' '}
                    y la normativa sobre{' '}
                    <a
                      href="https://ccbosco.es/aviso-legal-y-politica-de-privacidad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="underline font-semibold text-[#025B80] hover:text-[#014A68] transition-colors"
                    >
                      protección de datos
                    </a>. Los datos serán tratados con estricta confidencialidad por Centro Cálculo Bosco S.L.
                  </span>
                </label>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                  {errorMsg}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#025B80] hover:bg-[#014A68] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirmar Solicitud de Demostración</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
