export interface UseCase {
  id: string;
  title: string;
  items: string[];
  scenario: string;
}

export const useCases: UseCase[] = [
  {
    id: 'riad',
    title: 'Riad',
    items: ['digital guest guide', 'room service', 'WhatsApp concierge', 'guest upsells'],
    scenario: 'A guest messages at 9pm asking about the hammam. Instead of waking staff, the AI concierge handles it via WhatsApp and logs the booking directly to the dashboard.',
  },
  {
    id: 'tour-operator',
    title: 'Tour Operator',
    items: ['lead capture', 'booking workflow', 'passenger management', 'driver coordination', 'automated confirmations'],
    scenario: 'A family submits an inquiry. The system captures it, notifies the team, automates the quote follow-up, and dispatches the confirmed manifest to the driver\'s phone.',
  },
  {
    id: 'activity-provider',
    title: 'Activity Provider',
    items: ['booking intake', 'waivers', 'schedule management', 'customer communication', 'review requests'],
    scenario: 'A group books a quad tour online. Waivers are signed digitally in advance, staff see the updated schedule instantly, and an automated review request goes out 2 hours after the ride.',
  },
  {
    id: 'boutique-hotel',
    title: 'Boutique Hotel',
    items: ['guest experience', 'internal operations', 'room requests', 'upsells', 'staff coordination'],
    scenario: 'A guest uses the digital guide to request extra towels and book a dinner table. The requests route instantly to housekeeping and the restaurant without tying up the front desk.',
  },
];
