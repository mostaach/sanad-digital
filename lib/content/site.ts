export const site = {
  name: 'SANAD',
  nameArabic: 'سَنَد',
  tagline: 'The technology layer for Moroccan tourism.',
  description: 'SANAD builds digital systems, automation and AI solutions for Moroccan tourism businesses.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sanad.ma',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
} as const;

export type SiteConfig = typeof site;
