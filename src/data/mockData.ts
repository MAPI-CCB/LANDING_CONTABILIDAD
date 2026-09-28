import { Norma43Movement } from '../types';

export const INITIAL_NORMA43_MOVEMENTS: Norma43Movement[] = [
  {
    id: 'MOV-2026-0811',
    date: '2026-03-20',
    concept: 'TRANSFERENCIA ENDESA ENERGIA SA FACT 2026/03/481',
    amount: -3420.50,
    type: 'debe',
    bank: 'CaixaBank ES91 2100 **** 8920',
    thirdParty: 'ENDESA ENERGÍA S.A.U.',
    cif: 'A-82846817',
    budgetItem: '2026-165-22100',
    budgetName: 'Energía eléctrica alumbrado público',
    code: 'ORD-26-00412',
    status: 'matched',
    confidence: 99
  },
  {
    id: 'MOV-2026-0812',
    date: '2026-03-21',
    concept: 'INGRESO DGA FONDO COOPERACION MUNICIPAL LIQ 1T',
    amount: 48500.00,
    type: 'haber',
    bank: 'Ibercaja ES76 2085 **** 1144',
    thirdParty: 'GOBIERNO DE ARAGÓN - DGA',
    cif: 'S-5011001D',
    budgetItem: '2026-000-45000',
    budgetName: 'Transferencias corrientes de CC.AA.',
    code: 'ING-26-00109',
    status: 'matched',
    confidence: 98
  },
  {
    id: 'MOV-2026-0813',
    date: '2026-03-21',
    concept: 'REMESAS TRIBUTOS MUNICIPALES IBI URBANA 1T',
    amount: 19842.15,
    type: 'haber',
    bank: 'BBVA ES45 0182 **** 4492',
    thirdParty: 'DPZ - SERVICIO GESTIÓN TRIBUTARIA',
    cif: 'P-5000000I',
    budgetItem: '2026-000-11200',
    budgetName: 'Impuesto sobre Bienes Inmuebles. Urbana',
    code: 'ING-26-00110',
    status: 'matched',
    confidence: 96
  },
  {
    id: 'MOV-2026-0814',
    date: '2026-03-22',
    concept: 'PAGO REPARACION COLECTOR C/ MAYOR OBRAS CONST SL',
    amount: -1850.00,
    type: 'debe',
    bank: 'Santander ES12 0049 **** 7733',
    thirdParty: 'CONSTRUCCIONES Y VIALES ARAGÓN S.L.',
    cif: 'B-50982341',
    budgetItem: '2026-153-21000',
    budgetName: 'Infraestructuras y vías públicas: Conservación',
    code: '',
    status: 'needs_review',
    confidence: 84
  },
  {
    id: 'MOV-2026-0815',
    date: '2026-03-22',
    concept: 'SEPA ORDEN PAGO NOMINAS PERSONAL FUNCIONARIO MARZO',
    amount: -38750.60,
    type: 'debe',
    bank: 'CaixaBank ES91 2100 **** 8920',
    thirdParty: 'HABERES Y NÓMINAS PERSONAL MUNICIPAL',
    cif: 'P-5012300J',
    budgetItem: '2026-920-12000',
    budgetName: 'Administración General: Retribuciones básicas',
    code: 'NOM-26-0003',
    status: 'matched',
    confidence: 100
  }
];

export const MUNICIPAL_MODULES = [
  {
    id: 'presupuestos',
    title: 'Gestión de Operaciones y Presupuestos',
    subtitle: 'Control presupuestario riguroso y ejecución contable en tiempo real',
    features: [
      'Importación de presupuestos externos y controles automáticos de Bolsas de Vinculación.',
      'Registro integral de operaciones presupuestarias, no presupuestarias y de tesorería.',
      'Importación directa de extractos bancarios en Norma 43 y operaciones en formato propio.',
      'Asientos contables basados en patrones modificables y totalmente personalizables.',
      'Generación inmediata de expedientes y listados contables con filtros avanzados.'
    ]
  },
  {
    id: 'facturacion',
    title: 'Facturación Electrónica y Costes',
    subtitle: 'Flujo digital certificado con FACe, Gestiona, Sedipualba y Norma 34',
    features: [
      'Registro y seguimiento exhaustivo de facturas recibidas y emitidas.',
      'Generación automatizada de órdenes de transferencia bancaria en Norma 34 (nóminas y pagos masivos).',
      'Importación automática de facturas desde plataformas oficiales: FACe, GESTIONA y SEDIPUALBA.',
      'Asignación analítica de centros de coste e informes de control económico de gestión.',
      'Exportación oficial de datos para Modelo 347 y ficheros normalizados XML/XBRL.'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoría Contable y Plataforma Autoriz@',
    subtitle: 'El respaldo experto del equipo técnico de Centro Cálculo Bosco',
    features: [
      'Gestión de Plataforma Autoriz@: Preparación y subida de información económico-financiera obligatoria.',
      'Ejecución Trimestral y PMP (Periodo Medio de Pago a Proveedores del 1º al 4º trimestre).',
      'Morosidad y Presupuesto anual con estudio técnico de reglas fiscales y estabilidad.',
      'Plan Presupuestario a Medio Plazo e información de riesgo bancario CIR.',
      'Confección de Presupuesto municipal, Liquidación y Cuenta General con informe para Tribunal de Cuentas.'
    ]
  }
];

export const FAQS = [
  {
    question: '¿Cuál es la diferencia entre la plataforma GMI y GMI Contabilidad Web?',
    answer: 'La plataforma GMI es el entorno global tecnológico 100% en la nube desde el que se gestionan todas las aplicaciones web disponibles, mientras que GMI Contabilidad Web, es el servicio específico para la gestión de la contabilidad municipal.',
  },
  {
    question: '¿GMI Contabilidad es compatible con FACe, GESTIONA y SEDIPUALBA?',
    answer: 'Sí, totalmente. GMI Contabilidad incluye conectores nativos y sincronización automática con las plataformas de administración electrónica más implantadas en las entidades locales de España: el punto general de entrada de facturas electrónicas FACe, la plataforma GESTIONA y el ecosistema SEDIPUALBA de Diputación, permitiendo importar facturas y generar el apunte contable sin duplicidad de tecleo.'
  },
  {
    question: '¿Necesita el ayuntamiento instalar algun programa en local?',
    answer: 'No. GMI Contabilidad Web es una solución 100% en la nube, que funciona en modo SAAS (Software as Service). Unicamente necesita un navegador para poder acceder. Esto elimina gastos de servidores, mantenimientos informaticos y riesgo de pérdida de datos'
  },
  {
    question: '¿Permite cumplir con las obligaciones del Ministerio de Hacienda y Autoriz@?',
    answer: 'Absolutamente. A través de nuestro servicio de Consultoría Contable preparamos los formatos y ficheros obligatorios para la plataforma Autoriz@ del Ministerio de Hacienda: ejecuciones trimestrales, cálculo del Periodo Medio de Pago (PMP), informes de morosidad, reglas fiscales, planes presupuestarios y el expediente anual de Cuenta General.'
  },
  {
    question: '¿Qué garantía ofrece Centro Cálculo Bosco a las Administraciones Locales?',
    answer: 'Centro Cáculo Bosco cuenta con más de 40 años de experiencia en el sector público a nivel nacional. Se encuentra certificada en el Esquema Nacional de Seguridad (ENS RD 311/2022) nivel medio, de obligado cumplimiento para todas las empresas privadas, que controlan con las administraciones públicas.'
  }
];
