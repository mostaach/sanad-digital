import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';
import { site } from '@/lib/content/site';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({ variable: '--font-ibm-plex-arabic', weight: ['400'], subsets: ['arabic'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SANAD — Digital Infrastructure for Moroccan Tourism',
  description: 'SANAD builds digital systems, automation and AI solutions for Moroccan tourism businesses.',
  metadataBase: new URL(site.url),
  openGraph: {
    title: 'SANAD — Digital Infrastructure for Moroccan Tourism',
    description: 'SANAD builds digital systems, automation and AI solutions for Moroccan tourism businesses.',
    url: site.url,
    siteName: 'SANAD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SANAD — Digital Infrastructure for Moroccan Tourism', description: site.description },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${geistSans.variable} ${ibmPlexArabic.variable}`}
      data-theme="dark"
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SANAD',
          url: site.url,
          description: site.description,
          ...(site.email ? { email: site.email } : {}),
          sameAs: [site.instagram, site.linkedin].filter(Boolean),
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Digital Infrastructure for Tourism',
          provider: { '@type': 'Organization', name: 'SANAD', url: site.url },
          description: site.description,
          areaServed: { '@type': 'Country', name: 'Morocco' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'SANAD Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Presence', description: 'Websites and digital experiences designed for tourism businesses' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Operations', description: 'Connected workflows for tourism operations' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Experience', description: 'Digital guest journey solutions' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation', description: 'Workflow automation for tourism businesses' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Solutions', description: 'Practical AI for tourism operations' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data & Analytics', description: 'Business visibility and analytics dashboards' } },
            ],
          },
        }) }} />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:bg-accent focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md">Skip to main content</a>
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
