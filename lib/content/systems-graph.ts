export interface GraphNode {
  id: string;
  label: string;
  type: 'center' | 'system';
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const nodes: GraphNode[] = [
  { id: 'business', label: 'Your Business', type: 'center' },
  { id: 'website', label: 'Website', type: 'system' },
  { id: 'whatsapp', label: 'WhatsApp', type: 'system' },
  { id: 'bookings', label: 'Bookings', type: 'system' },
  { id: 'guests', label: 'Guests', type: 'system' },
  { id: 'staff', label: 'Staff', type: 'system' },
  { id: 'payments', label: 'Payments', type: 'system' },
  { id: 'google', label: 'Google', type: 'system' },
  { id: 'crm', label: 'CRM', type: 'system' },
  { id: 'ai', label: 'AI', type: 'system' },
  { id: 'analytics', label: 'Analytics', type: 'system' },
];

export const mobileNodes: GraphNode[] = [
  { id: 'business', label: 'Your Business', type: 'center' },
  { id: 'website', label: 'Website', type: 'system' },
  { id: 'whatsapp', label: 'WhatsApp', type: 'system' },
  { id: 'bookings', label: 'Bookings', type: 'system' },
  { id: 'staff', label: 'Staff', type: 'system' },
  { id: 'crm', label: 'CRM', type: 'system' },
  { id: 'analytics', label: 'Analytics', type: 'system' },
];

export const edges: GraphEdge[] = nodes
  .filter((n) => n.id !== 'business')
  .map((n) => ({ from: n.id, to: 'business' }));

export const highlightGroups: Record<string, string[]> = {
  whatsapp: ['website', 'bookings', 'crm', 'ai'],
  website: ['google', 'bookings', 'analytics'],
  bookings: ['payments', 'staff', 'crm'],
  guests: ['whatsapp', 'crm', 'ai'],
  staff: ['bookings', 'crm', 'whatsapp'],
  payments: ['bookings', 'analytics'],
  google: ['website', 'analytics'],
  crm: ['bookings', 'guests', 'staff'],
  ai: ['whatsapp', 'guests', 'staff'],
  analytics: ['google', 'crm', 'website'],
};
