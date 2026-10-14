import { FigureName } from '@/components/visuals/HairlineFigure';

export interface ProcessStep {
  number: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
  figure: FigureName;
}

export const steps: ProcessStep[] = [
  {
    number: '01',
    code: 'PHASE-01',
    title: 'Diagnose',
    tagline: 'Map the real workflow',
    description: 'We audit how your riad or agency currently takes bookings, tracks inquiries, and communicates with guests across WhatsApp and staff.',
    deliverable: 'Digital audit and workflow map',
    figure: 'loupe',
  },
  {
    number: '02',
    code: 'PHASE-02',
    title: 'Design',
    tagline: 'Choose the highest-impact fixes',
    description: 'We design the right digital flow for your booking inquiries, guest communication, and staff handoffs.',
    deliverable: 'Practical system plan',
    figure: 'exploded',
  },
  {
    number: '03',
    code: 'PHASE-03',
    title: 'Build',
    tagline: 'Connect the tools your team uses',
    description: 'We build the connected tools — direct booking flows, WhatsApp automation, and calendar integrations built for your team.',
    deliverable: 'Working system and staff training',
    figure: 'branches',
  },
  {
    number: '04',
    code: 'PHASE-04',
    title: 'Improve',
    tagline: 'Improve after launch',
    description: 'We review usage, guest feedback, and team workflow so the system keeps improving after launch.',
    deliverable: 'Dashboard and improvement plan',
    figure: 'plot',
  },
];
