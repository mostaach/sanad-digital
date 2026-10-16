export interface ProofItem {
  name: string;
  description: string;
  industry: string;
  url?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  property: string;
  city: string;
  metric?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Nos équipes passaient 3 heures par jour à répondre aux mêmes questions sur WhatsApp. Le guide digital et les réponses automatisées ont libéré notre réception tout en augmentant les ventes directes de hammam et d'excursions.",
    author: 'Karim B.',
    role: "Directeur d'exploitation",
    property: 'Boutique Riad & Spa (8 suites)',
    city: 'Marrakech Médina',
    metric: '-70% de sollicitations répétitives',
  },
  {
    quote: "Avant SANAD, la coordination des arrivées au camp désert était un chaos de messages vocaux. Aujourd'hui, chaque voyageur reçoit son itinéraire interactif avant même son atterrissage à Marrakech.",
    author: 'Yasmine E.',
    role: 'Fondatrice & Gérante',
    property: 'Luxury Desert Camp',
    city: 'Agafay',
    metric: '100% des arrivées coordonnées',
  },
];

export const proof: ProofItem[] = [
  {
    name: 'Marrakech Guest Guide',
    description: 'Digital guest guide and riad companion',
    industry: 'Boutique riads and accommodations',
    url: 'https://marrakech-guest-guide.vercel.app/',
  },
  {
    name: 'RoomSwift',
    description: 'Direct booking and property showcase flow',
    industry: 'Hotels and vacation stays',
    url: 'https://room-swift.vercel.app/',
  },
  {
    name: 'Agafay Journey OS',
    description: 'Excursion operations and dispatch board',
    industry: 'Desert camps and activity operators',
    url: 'https://desert-dispatch-system.vercel.app/',
  },
  {
    name: 'Hammam Semlalia',
    description: 'Wellness brand website with WhatsApp booking',
    industry: 'Wellness and spa',
    url: 'https://wellness-websites.vercel.app/',
  },
  {
    name: 'SafarAtlas',
    description: 'Morocco travel platform and journey builder',
    industry: 'Travel and tour operators',
    url: 'https://web-lyart-seven-93.vercel.app/',
  },
];

export interface LiveProject {
  id: string;
  name: string;
  tagline: string;
  role: string;
  stage: 'Pre-stay' | 'In-stay' | 'Operations';
  description: string;
  url: string;
  tags: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export const liveProjects: LiveProject[] = [
  {
    id: 'marrakech-guest-guide',
    name: 'Marrakech Guest Guide',
    tagline: 'In-room QR guide for boutique stays',
    role: 'Digital guest experience',
    stage: 'In-stay',
    description:
      'A mobile-first guest companion for riads: Wi-Fi, house information, local recommendations, taxi requests, and WhatsApp reception access in one place.',
    url: 'https://marrakech-guest-guide.vercel.app/',
    tags: ['QR guide', 'Guest info', 'WhatsApp', 'Recommendations'],
    features: [
      {
        title: 'Guest self-service',
        description: 'Essential stay information is available without calling reception.',
      },
      {
        title: 'Local recommendations',
        description: 'Useful places and routes are presented in a mobile-friendly flow.',
      },
    ],
  },
  {
    id: 'room-swift',
    name: 'RoomSwift',
    tagline: 'Direct booking and property showcase',
    role: 'Booking experience',
    stage: 'Pre-stay',
    description:
      'A booking-oriented property experience that presents stays, room details, dates, and inquiry paths without relying on a generic brochure page.',
    url: 'https://room-swift.vercel.app/',
    tags: ['Direct booking', 'Property pages', 'Availability', 'Inquiry flow'],
    features: [
      {
        title: 'Room discovery',
        description: 'Travelers can compare stay options and understand the property offer.',
      },
      {
        title: 'Booking path',
        description: 'The experience is structured around moving from interest to inquiry.',
      },
    ],
  },
  {
    id: 'agafay-journey-os',
    name: 'Agafay Journey OS',
    tagline: 'Dispatch board for desert excursion operations',
    role: 'Operations dashboard',
    stage: 'Operations',
    description:
      'A daily operations board for activity teams managing guests, pickups, trip stages, staff coordination, and field updates.',
    url: 'https://desert-dispatch-system.vercel.app/',
    tags: ['Dispatch', 'Pickup queue', 'Trip stages', 'Field updates'],
    features: [
      {
        title: 'Daily visibility',
        description: 'Teams can see scheduled activity, guest movement, and trip status.',
      },
      {
        title: 'Staff coordination',
        description: 'Operational notes and updates live in one shared interface.',
      },
    ],
  },
  {
    id: 'hammam-semlalia',
    name: 'Hammam Semlalia',
    tagline: 'Wellness website with WhatsApp booking',
    role: 'Digital presence',
    stage: 'Pre-stay',
    description:
      'A tourism-facing wellness site that explains the hammam experience, presents services clearly, and routes visitors toward WhatsApp booking.',
    url: 'https://wellness-websites.vercel.app/',
    tags: ['Wellness', 'WhatsApp booking', 'Service pages', 'Local discovery'],
    features: [
      {
        title: 'Service clarity',
        description: 'Packages and rituals are explained for tourists before they contact the business.',
      },
      {
        title: 'Booking handoff',
        description: 'Visitors can move from reading to direct WhatsApp contact.',
      },
    ],
  },
  {
    id: 'safaratlas',
    name: 'SafarAtlas',
    tagline: 'Morocco travel platform and journey builder',
    role: 'Travel planning experience',
    stage: 'Pre-stay',
    description:
      'A travel platform concept for presenting destinations, modular trips, and managed Morocco journeys through a structured planning interface.',
    url: 'https://web-lyart-seven-93.vercel.app/',
    tags: ['Travel platform', 'Journey builder', 'Destinations', 'Trip modules'],
    features: [
      {
        title: 'Trip exploration',
        description: 'Travelers can browse destinations and combine trip ideas.',
      },
      {
        title: 'Managed inquiry path',
        description: 'The experience guides visitors toward a clear planning request.',
      },
    ],
  },
];
