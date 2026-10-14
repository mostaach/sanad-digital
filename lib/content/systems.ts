export interface SystemMockup {
  id: string;
  code: string;
  title: string;
  tagline: string;
  purpose: string;
  replaces: string;
  connects: string;
  metrics: string;
  demoUrl?: string;
  componentKey: string;
}

export const systems: SystemMockup[] = [
  {
    id: 'riad-guest-guide',
    code: 'SYS-01',
    title: 'Riad Digital Guest Guide',
    tagline: 'Instant mobile web concierge for in-house guests',
    purpose: 'Gives guests one-touch access to Wi-Fi, breakfast schedules, hammam reservations, local curated spots, and front-desk messaging without downloading any app.',
    replaces: 'Printed paper binders, repeated front-desk questions, lost room flyers',
    connects: 'Mobile Web, WhatsApp Reception, Spa & Kitchen Staff',
    metrics: 'Guest information, requests, and recommendations in one mobile flow',
    componentKey: 'RiadGuestGuide',
  },
  {
    id: 'whatsapp-lead-system',
    code: 'SYS-02',
    title: 'WhatsApp Lead & Booking Engine',
    tagline: 'Structured conversational funnel with instant responses',
    purpose: 'Captures incoming messages from Instagram, Google Maps, and website, parses group sizes and requested dates into structured CRM leads, and schedules team follow-up.',
    replaces: 'Lost chat threads, forgotten inquiries, unrecorded voice notes',
    connects: 'WhatsApp Business API, Lead CRM, Staff Notifications',
    metrics: 'Incoming messages become structured leads with clear follow-up',
    componentKey: 'WhatsAppLeadSystem',
  },
  {
    id: 'booking-operations-dashboard',
    code: 'SYS-03',
    title: 'Booking & Operations Command Center',
    tagline: 'Centralized live board for daily tourism operations',
    purpose: 'Unifies daily arrivals, pending departures, room readiness status, and staff duties into a single real-time board visible across devices.',
    replaces: 'Scattered spreadsheets, whiteboard scribbles, verbal shift changes',
    connects: 'Direct Engine, OTAs, Housekeeping App, Front Desk',
    metrics: 'Arrivals, rooms, requests, and staff work visible in one place',
    componentKey: 'BookingDashboard',
  },
  {
    id: 'ai-guest-concierge',
    code: 'SYS-04',
    title: 'Autonomous AI Guest Concierge',
    tagline: 'Multilingual assistance trained on your riad or agency',
    purpose: 'Answers FAQs in English, French, and Arabic around check-in, dietary restrictions, directions, and luggage storage, automatically escalating complex booking requests to staff.',
    replaces: 'Late-night unanswered messages, slow front desk response',
    connects: 'Property Knowledge Base, WhatsApp, Team Escalation Desk',
    metrics: 'Common guest questions answered from your own property information',
    componentKey: 'AIConcierge',
  },
];
