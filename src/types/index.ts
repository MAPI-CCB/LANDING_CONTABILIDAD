export interface Norma43Movement {
  id: string;
  date: string;
  concept: string;
  amount: number;
  type: 'debe' | 'haber';
  bank: string;
  thirdParty: string; // Tercero
  cif: string;
  budgetItem: string; // Partida presupuestaria
  budgetName: string;
  code: string; // Código de operación
  status: 'matched' | 'needs_review' | 'processed';
  confidence: number;
}

export interface LocalEntity {
  type: 'ayuntamiento' | 'mancomunidad' | 'comarca' | 'diputacion' | 'empresa_publica';
  name: string;
  populationRange: string;
}

export interface LeadFormData {
  fullName: string;
  role: string;
  entityType: string;
  entityName: string;
  province: string;
  email: string;
  phone: string;
  modulesOfInterest: string[];
  comments?: string;
}
