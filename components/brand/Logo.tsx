'use client';

import React from 'react';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showArabic?: boolean;
  className?: string;
  color?: string;
}

const sizeConfig = {
  sm: { markSize: 22, textClass: 'text-lg', arabicClass: 'text-[11px]', gap: 'gap-2.5' },
  md: { markSize: 28, textClass: 'text-2xl', arabicClass: 'text-xs', gap: 'gap-3' },
  lg: { markSize: 38, textClass: 'text-3xl', arabicClass: 'text-sm', gap: 'gap-3.5' },
  xl: { markSize: 48, textClass: 'text-4xl', arabicClass: 'text-base', gap: 'gap-4' },
};

/**
 * Architectural SANAD Mark
 * Isometric foundation block with an integrated Moroccan keyhole archway aperture.
 * Built with precision hairline vectors adhering to the SANAD CAD design language.
 */
export function LogoMark({
  size = 28,
  className = '',
  color = '#C8643C',
  accent = '#F4EFE6',
}: {
  size?: number;
  className?: string;
  color?: string;
  accent?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sanad-mark-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle Ambient Core Glow */}
      <circle cx="20" cy="20" r="18" fill="url(#sanad-mark-glow)" />

      {/* Isometric Foundation Plinth Top Surface */}
      <polygon
        points="20,4 35,12 20,20 5,12"
        fill="#16140F"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Foundation Left Receding Wall */}
      <polygon
        points="5,12 20,20 20,36 5,28"
        fill="#0E0D0B"
        stroke="#9E5D43"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Foundation Right Receding Wall */}
      <polygon
        points="35,12 20,20 20,36 35,28"
        fill="#1D1A14"
        stroke="#9E5D43"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Moroccan Architectural Archway / Keyhole Aperture on Front-Right Face */}
      {/* Arch Outline */}
      <path
        d="M 23,32 L 23,24 Q 23,21.5 25.5,21.5 Q 28,21.5 28,24 L 28,32"
        stroke={accent}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner Keyhole Keystone Knot / Heartbeat Core */}
      <circle cx="25.5" cy="23.5" r="1.2" fill={color} />

      {/* Precision CAD Corner Notches */}
      <circle cx="20" cy="4" r="1" fill={accent} />
      <circle cx="5" cy="28" r="0.9" fill={color} />
      <circle cx="35" cy="28" r="0.9" fill={color} />
    </svg>
  );
}

export function Logo({
  variant = 'full',
  size = 'md',
  showArabic = false,
  className = '',
  color = '#C8643C',
}: LogoProps) {
  const config = sizeConfig[size];

  if (variant === 'mark') {
    return <LogoMark size={config.markSize} className={className} color={color} />;
  }

  return (
    <div className={`inline-flex items-center ${config.gap} group select-none ${className}`}>
      {/* Visual Architectural Mark */}
      <LogoMark size={config.markSize} color={color} />

      {/* Typographic Lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-bold tracking-wider text-foreground ${config.textClass} leading-none`}
            style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            SANAD
          </span>
          {/* Subtle heartbeat status dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
        </div>

        {showArabic && (
          <span
            className={`font-arabic text-muted/80 ${config.arabicClass} leading-tight mt-0.5 tracking-normal`}
            dir="rtl"
          >
            سَنَد // البنية الرقمية
          </span>
        )}
      </div>
    </div>
  );
}
