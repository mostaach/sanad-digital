export const colors = {
  bg: '#0E0D0B',
  surface: '#16140F',
  surfaceRaised: '#1D1A14',
  border: 'rgba(244,239,230,0.08)',
  borderHover: 'rgba(200,100,60,0.45)',
  foreground: '#F4EFE6',
  muted: '#A8A092',
  accent: '#C8643C',
  accentSoft: 'rgba(200,100,60,0.14)',
  support: '#2F5D4E',
  sand: '#D9C7A3',
} as const;

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

export const duration = {
  fast: 150,
  base: 250,
  slow: 600,
} as const;

export const easing = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: 'cubic-bezier(0.2, 0.7, 0.1, 1)',
} as const;

export const shadows = {
  subtle: '0 2px 8px rgba(0, 0, 0, 0.3)',
  card: '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(244, 239, 230, 0.03)',
  cardHover: '0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(200, 100, 60, 0.2)',
  terracotta: '0 12px 28px -6px rgba(200, 100, 60, 0.35)',
  glow: '0 0 40px -10px rgba(200, 100, 60, 0.25)',
} as const;

export type Colors = typeof colors;
export type Radius = typeof radius;
export type Shadows = typeof shadows;
