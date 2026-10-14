export interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const solutions: Solution[] = [
  {
    id: 'digital-presence',
    icon: 'Globe',
    title: 'Digital Presence',
    description: 'Websites and digital experiences designed for tourism businesses.',
    tags: ['Websites', 'Landing pages', 'Booking flows', 'Guest guides', 'QR experiences'],
  },
  {
    id: 'operations',
    icon: 'LayoutDashboard',
    title: 'Operations',
    description: 'Turn repetitive manual work into connected workflows.',
    tags: ['Booking management', 'Staff dashboards', 'Checklists', 'Guest information', 'Internal tools'],
  },
  {
    id: 'customer-experience',
    icon: 'MessageSquare',
    title: 'Customer Experience',
    description: 'Make the guest journey easier before, during and after the stay.',
    tags: ['Digital guest guides', 'WhatsApp flows', 'Automated messages', 'Upsells', 'Room services'],
  },
  {
    id: 'automation',
    icon: 'Zap',
    title: 'Automation',
    description: 'Connect tools and eliminate repetitive work.',
    tags: ['Lead routing', 'Booking notifications', 'Follow-ups', 'CRM workflows', 'Reporting'],
  },
  {
    id: 'ai',
    icon: 'Brain',
    title: 'AI',
    description: 'Deploy practical AI where it creates measurable value.',
    tags: ['AI concierge', 'FAQ agents', 'Lead qualification', 'Customer support', 'Internal assistants'],
  },
  {
    id: 'data',
    icon: 'BarChart3',
    title: 'Data',
    description: 'Turn scattered information into useful business visibility.',
    tags: ['Dashboards', 'Analytics', 'Performance reporting', 'Customer insights'],
  },
];
