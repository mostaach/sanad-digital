import fs from 'fs';
import path from 'path';
import { LeadFormData } from '@/lib/validation/lead';

export interface StoredLead extends LeadFormData {
  id: string;
  submittedAt: string;
  ip?: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
}

const DATA_DIR = path.join(process.cwd(), '.leads');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readLeads(): StoredLead[] {
  ensureDataDir();
  if (!fs.existsSync(LEADS_FILE)) return [];
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw) as StoredLead[];
  } catch {
    return [];
  }
}

export function saveLead(data: LeadFormData, ip?: string): StoredLead {
  ensureDataDir();
  const leads = readLeads();
  const newLead: StoredLead = {
    ...data,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    submittedAt: new Date().toISOString(),
    ip,
    status: 'new',
  };
  leads.unshift(newLead); // newest first
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  return newLead;
}

export function updateLeadStatus(id: string, status: StoredLead['status']): boolean {
  const leads = readLeads();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx === -1) return false;
  leads[idx].status = status;
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  return true;
}
