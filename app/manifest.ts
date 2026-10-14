import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SANAD — Digital Infrastructure for Moroccan Tourism',
    short_name: 'SANAD',
    description: 'SANAD builds the digital systems, automation and AI workflows that power Moroccan tourism businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0E0D0B',
    theme_color: '#0E0D0B',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  };
}
