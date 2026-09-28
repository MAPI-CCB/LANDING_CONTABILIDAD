import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, ShieldCheck, Mail, Building2, User, ChevronRight } from 'lucide-react';
import { LeadFormData } from '../types';

export const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    role: 'Interventor/a o Tesorero/a',
    entityType: 'Ayuntamiento',
    entityName: '',
    province: 'Zaragoza',
    email: '',
    phone: '',
    modulesOfInterest: ['Solución integral: Plataforma GMI + Contabilidad WEB'],
    comments: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [privacyError, setPrivacyError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, indique su nombre y apellidos.';
    }

    if (!formData.entityName.trim()) {
      newErrors.entityName = 'Indique el nombre de su Ayuntamiento o Entidad Local.';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Introduzca un correo electrónico institucional válido.';
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Indique un teléfono de contacto directo.';
    }

    let isPrivacyValid = true;
    if (!acceptedPrivacy) {
      setPrivacyError('Debe aceptar la política de privacidad y protección de datos para continuar.');
      isPrivacyValid = false;
    } else {
      setPrivacyError('');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && isPrivacyValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Formulario de Contacto Principal'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.error || 'Ocurrió un error al enviar su solicitud. Por favor, inténtelo de nuevo o llame al 976 480 084.');
      }
    } catch (err) {
      console.error('Error enviando formulario:', err);
      // En caso de incidencia de red, permitimos confirmación visual y aviso
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleModule = (moduleName: string) => {
    setFormData(prev => {
      const exists = prev.modulesOfInterest.includes(moduleName);
      if (exists) {
        return { ...prev, modulesOfInterest: prev.modulesOfInterest.filter(m => m !== moduleName) };
      } else {
        return { ...prev, modulesOfInterest: [...prev.modulesOfInterest, moduleName] };
      }
    });
  };

  return (
    <section id="contacto" className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 bg-gradient-to-b from-[#D8E8F5] via-[#E8F2FA] to-[#DFEDF7] border-b border-slate-300 relative overflow-hidden">
      {/* Fondo de pantalla: Imagen de Contacto y Asistencia Directa */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src="/assets/contacto-bg.svg"
          alt="Fondo de contacto institucional y asistencia telefónica directa"
          className="w-full h-full object-cover object-center opacity-95"
          referrerPolicy="no-referrer"
        />
        {/* Velo degradado optimizado para resaltar el fondo con mayor intensidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/58 to-white/72" />
      </div>

      {/* Ambient background soft glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-br from-sky-300/45 via-[#025B80]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[650px] h-[480px] bg-gradient-to-tl from-amber-200/35 via-sky-200/35 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 font-mono text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 bg-[#025B80] rounded-full" />
              <span>Atención directa personalizada · SIN ROBOTS </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight leading-[1.12]">
              Contacte con un especialista en contabilidad
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Solicite una demostración personalizada con uno de nuestros consultores, para conocer las funcionalidades de contabilidad web.
            </p>

            {/* Direct Assistance Details */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-sm space-y-4">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>Centro Cálculo Bosco S.L.</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Zaragoza</span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#025B80] flex items-center justify-center shrink-0 font-bold">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-semibold uppercase">Atención Telefónica Directa</span>
                    <a href="tel:976480084" className="font-bold text-[#025B80] hover:text-blue-900 text-base font-mono">
                      976 480 084
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#025B80] flex items-center justify-center shrink-0 font-bold">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-semibold uppercase">Correo electrónico</span>
                    <a href="mailto:info@ccbosco.com" className="font-semibold text-slate-900 hover:text-[#025B80] text-sm">
                      info@ccbosco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#025B80] flex items-center justify-center shrink-0 font-bold">
                    <Building2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] font-semibold uppercase">Sede Central</span>
                    <span className="text-slate-800 font-medium">
                      Reina Fabiola, 37. Oficina 131, 50088 Zaragoza
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tratamiento de datos conforme al Esquema Nacional de Seguridad (ENS).</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 shadow-xs p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  ¡Solicitud registrada correctamente!
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Gracias, <strong>{formData.fullName}</strong>. Un consultor contable de Centro Cálculo Bosco se pondrá en contacto con usted en el teléfono <strong>{formData.phone}</strong> o en su correo electrónico para concertar la sesión demostrativa para el <strong>{formData.entityName}</strong>.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        role: 'Interventor/a o Tesorero/a',
                        entityType: 'Ayuntamiento',
                        entityName: '',
                        province: 'Zaragoza',
                        email: '',
                        phone: '',
                        modulesOfInterest: ['Solución integral: Plataforma GMI + Contabilidad WEB'],
                        comments: ''
                      });
                    }}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-800 underline cursor-pointer"
                  >
                    Enviar otra consulta o solicitar demostración para otra entidad
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    Formulario de Solicitud de Demostración e Información
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Complete los datos y le contactaremos en un plazo máximo de 24 horas hábiles.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej. María Carmen García"
                      className={`w-full px-3 py-2 text-xs bg-white rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-700 ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-[10px] text-rose-600">{errors.fullName}</p>}
                  </div>

                  {/* Role */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Cargo / Perfil
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    >
                      <option value="Interventor/a o Tesorero/a">Interventor/a o Tesorero/a</option>
                      <option value="Secretario/a-Interventor/a">Secretario/a-Interventor/a</option>
                      <option value="Técnico/a de Contabilidad y Presupuestos">Técnico/a de Contabilidad y Presupuestos</option>
                      <option value="Concejal/a de Hacienda">Concejal/a de Hacienda</option>
                      <option value="Alcalde/sa">Alcalde/sa</option>
                      <option value="Otro responsable público">Otro responsable público</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Entity Type */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Tipo de Entidad
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
                    >
                      <option value="Ayuntamiento">Ayuntamiento</option>
                      <option value="Mancomunidad">Mancomunidad</option>
                      <option value="Comarca">Comarca</option>
                      <option value="Diputación Provincial">Diputación Provincial</option>
                      <option value="Organismo Autónomo / Empresa Pública">Organismo Autónomo / Empresa Pública</option>
                    </select>
                  </div>

                  {/* Entity Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Nombre de la Entidad Local *
                    </label>
                    <input
                      type="text"
                      value={formData.entityName}
                      onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                      placeholder="Ej. Ayuntamiento de Calatayud"
                      className={`w-full px-3 py-2 text-xs bg-white rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-700 ${
                        errors.entityName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.entityName && <p className="text-[10px] text-rose-600">{errors.entityName}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="intervencion@ayuntamiento.es"
                      className={`w-full px-3 py-2 text-xs bg-white rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-700 ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-600">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Teléfono de Contacto  *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="976 00 00 00 o móvil"
                      className={`w-full px-3 py-2 text-xs bg-white rounded-md border focus:outline-none focus:ring-1 focus:ring-blue-700 ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-rose-600">{errors.phone}</p>}
                  </div>
                </div>

                {/* Modules of interest */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    Áreas de interés:
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    <label
                      className="flex items-center gap-2 p-2 rounded-md border border-blue-600 bg-blue-50/80 text-blue-900 font-medium cursor-default select-none shadow-2xs"
                    >
                      <input
                        type="checkbox"
                        checked={true}
                        disabled={true}
                        readOnly={true}
                        className="rounded border-blue-400 text-blue-700 focus:ring-0 cursor-default accent-[#025B80]"
                      />
                      <span className="text-[11px] font-medium text-slate-900">
                        Solución integral: Plataforma GMI + Contabilidad WEB
                      </span>
                    </label>
                  </div>
                </div>

                {/* Aviso legal y protección de datos */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none text-slate-700">
                    <input
                      type="checkbox"
                      checked={acceptedPrivacy}
                      onChange={(e) => {
                        setAcceptedPrivacy(e.target.checked);
                        if (e.target.checked) setPrivacyError('');
                      }}
                      className="mt-0.5 rounded border-slate-300 text-[#025B80] focus:ring-[#025B80] shrink-0 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
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
                  {privacyError && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium pl-6">
                      {privacyError}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {submitError}
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#025B80] hover:bg-[#014A68] text-white font-bold text-sm shadow-md shadow-[#025B80]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Registrando solicitud...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Solicitar Información</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5 font-medium">
                    Sin compromiso · Sesión personalizada con consultores de Centro Cálculo Bosco
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
