'use client';

import React from 'react';
import {
  Exploded,
  Sieve,
  Cabinet,
  Branches,
  Phosphor,
  Phone,
  Router,
  Plot,
  Terminal,
  Plug,
  Terrain,
  Riffle,
  Slow,
  Vault,
  Drawer,
  Lockers,
  Loupe,
  type HairlineProps,
} from '@lucasmarkes/hairline/react';
import { DigitalPresenceFigure } from './figures/DigitalPresenceFigure';
import { OperationsFigure } from './figures/OperationsFigure';
import { CustomerExperienceFigure } from './figures/CustomerExperienceFigure';

export type FigureName =
  | 'digital-presence'
  | 'operations'
  | 'customer-experience'
  | 'exploded'
  | 'sieve'
  | 'cabinet'
  | 'branches'
  | 'phosphor'
  | 'phone'
  | 'router'
  | 'plot'
  | 'terminal'
  | 'plug'
  | 'terrain'
  | 'riffle'
  | 'slow'
  | 'vault'
  | 'drawer'
  | 'lockers'
  | 'loupe';

export type BrandVariant = 'brand' | 'terracotta' | 'sand' | 'ivory';
export type PlateColor = 'surface' | 'raised' | 'bg' | 'transparent';

interface HairlineFigureProps extends Omit<HairlineProps, 'theme'> {
  name: FigureName;
  variant?: BrandVariant;
  plate?: PlateColor;
  customPlate?: string;
  framed?: boolean;
  frameLabel?: string;
  badge?: string;
  className?: string;
}

const plateColorMap: Record<PlateColor, string> = {
  surface: '#16140F',
  raised: '#1D1A14',
  bg: '#0E0D0B',
  transparent: '#16140F',
};

const variantTokens: Record<BrandVariant, Record<string, string>> = {
  // Brand Terracotta + Ivory Accents (Primary SANAD Signature)
  brand: {
    '--hairline-hi': '#F4EFE6', // Brilliant ivory for lit/moving parts
    '--hairline-edge': '#E07A52', // Radiant terracotta for silhouettes
    '--hairline-mid': '#9E5D43', // Warm terracotta copper for ribs and internal geometry
    '--hairline-lo': '#382218', // Deep warm umber for receding depth
    '--hairline-stroke': '1.05',
  },
  // Pure Terracotta Monochrome (Engineering Blueprint)
  terracotta: {
    '--hairline-hi': '#FFB08F', // Glowing lit terracotta
    '--hairline-edge': '#C8643C', // Signature SANAD terracotta
    '--hairline-mid': '#8E482F', // Mid terracotta line
    '--hairline-lo': '#361C12', // Dark terracotta shade
    '--hairline-stroke': '1.0',
  },
  // Warm Sand Accent (Moroccan Architectural Stone)
  sand: {
    '--hairline-hi': '#F4EFE6',
    '--hairline-edge': '#D9C7A3', // Moroccan sand
    '--hairline-mid': '#8F7B57', // Warm earth tone
    '--hairline-lo': '#2A241A',
    '--hairline-stroke': '1.0',
  },
  // Crisp Ivory (Technical White Line on Dark)
  ivory: {
    '--hairline-hi': '#C8643C', // Terracotta highlights
    '--hairline-edge': '#F4EFE6', // Ivory silhouettes
    '--hairline-mid': '#A8A092', // Muted secondary strokes
    '--hairline-lo': '#2A251D',
    '--hairline-stroke': '0.95',
  },
};

const customFigureMap: Record<string, React.ComponentType<{ intensity?: number }>> = {
  'digital-presence': DigitalPresenceFigure,
  'operations': OperationsFigure,
  'customer-experience': CustomerExperienceFigure,
};

const hairlineFigureMap: Record<string, React.ComponentType<HairlineProps>> = {
  exploded: Exploded,
  sieve: Sieve,
  cabinet: Cabinet,
  branches: Branches,
  phosphor: Phosphor,
  phone: Phone,
  router: Router,
  plot: Plot,
  terminal: Terminal,
  plug: Plug,
  terrain: Terrain,
  riffle: Riffle,
  slow: Slow,
  vault: Vault,
  drawer: Drawer,
  lockers: Lockers,
  loupe: Loupe,
};

export function HairlineFigure({
  name,
  variant = 'brand',
  plate = 'surface',
  customPlate,
  framed = false,
  frameLabel,
  badge,
  intensity = 0.65,
  className = '',
  style,
  ...props
}: HairlineFigureProps) {
  const CustomComponent = customFigureMap[name];
  const HairlineComponent = hairlineFigureMap[name];

  if (!CustomComponent && !HairlineComponent) return null;

  const resolvedPlate = customPlate || plateColorMap[plate];
  const colorVars = variantTokens[variant];

  const mergedStyles: React.CSSProperties = {
    ...colorVars,
    '--hairline-plate': resolvedPlate,
    ...style,
  } as React.CSSProperties;

  const content = (
    <div
      style={mergedStyles}
      className={`relative aspect-[5/4] select-none ${className}`}
    >
      {CustomComponent ? (
        <CustomComponent intensity={intensity} />
      ) : (
        HairlineComponent && <HairlineComponent intensity={intensity} theme="dark" {...props} />
      )}
    </div>
  );

  if (!framed) {
    return content;
  }

  // Impeccable Architectural Technical CAD Frame
  return (
    <div className="relative rounded-xl border border-border/80 bg-surface/50 backdrop-blur-sm p-4 overflow-hidden group hover:border-accent/40 transition-all duration-300">
      {/* Corner L-bracket crosshairs */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/40 pointer-events-none" />

      {/* Subtle radial ambient warmth behind figure */}
      <div className="absolute inset-0 bg-radial from-accent/[0.07] to-transparent pointer-events-none" />

      {/* Frame Header Telemetry */}
      {(frameLabel || badge) && (
        <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider text-muted border-b border-border/50 pb-2">
          {frameLabel && (
            <span className="text-foreground/80 uppercase font-semibold">
              {frameLabel}
            </span>
          )}
          {badge && (
            <span className="text-accent bg-accent/10 px-2 py-0.5 rounded-sm border border-accent/20">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Figure Content */}
      <div className="relative z-10">{content}</div>
    </div>
  );
}
