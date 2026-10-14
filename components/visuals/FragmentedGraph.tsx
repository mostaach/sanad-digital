'use client';

import React, { useState } from 'react';

interface ToolNode {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
  icon: React.ReactNode;
}

const TOOLS: ToolNode[] = [
  {
    id: 'wa',
    label: 'WhatsApp',
    detail: 'Bookings & inquiries in chats',
    x: 80,
    y: 70,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: 'insta',
    label: 'Instagram',
    detail: 'Unanswered DMs & comments',
    x: 420,
    y: 60,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'maps',
    label: 'Google Maps',
    detail: 'Direct search with no booking link',
    x: 440,
    y: 200,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone Calls',
    detail: 'Verbal details lost on shift change',
    x: 60,
    y: 210,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: 'xls',
    label: 'Spreadsheets',
    detail: 'Manual copy-paste & outdated rows',
    x: 90,
    y: 340,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: 'paper',
    label: 'Paper Notes',
    detail: 'Checklists & receipts left on reception desk',
    x: 410,
    y: 335,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

// Severed / tangled cables connecting disparate channels
const CABLES = [
  // WhatsApp -> Spreadsheet (Severed in middle)
  {
    id: 'c-wa-xls',
    p1: 'M 220 95 C 290 120, 260 260, 248 270',
    p2: 'M 240 285 C 230 305, 220 330, 210 355',
    breakPoint: { x: 244, y: 278 },
    from: 'wa',
    to: 'xls',
  },
  // Instagram -> WhatsApp (Tangled cross-reach)
  {
    id: 'c-insta-wa',
    p1: 'M 420 85 C 340 70, 310 80, 255 88',
    breakPoint: null,
    from: 'insta',
    to: 'wa',
  },
  // Google Maps -> Phone (Severed cable)
  {
    id: 'c-maps-phone',
    p1: 'M 440 225 C 370 230, 345 220, 320 216',
    p2: 'M 305 214 C 275 210, 240 225, 195 230',
    breakPoint: { x: 312, y: 215 },
    from: 'maps',
    to: 'phone',
  },
  // Phone -> Paper Notes (Severed)
  {
    id: 'c-phone-paper',
    p1: 'M 190 245 C 240 260, 280 290, 315 315',
    p2: 'M 330 327 C 355 345, 380 355, 410 355',
    breakPoint: { x: 322, y: 321 },
    from: 'phone',
    to: 'paper',
  },
  // Paper Notes -> Spreadsheet (Severed)
  {
    id: 'c-paper-xls',
    p1: 'M 410 365 C 370 380, 340 375, 315 372',
    p2: 'M 298 370 C 275 365, 250 365, 230 365',
    breakPoint: { x: 306, y: 371 },
    from: 'paper',
    to: 'xls',
  },
];

export function FragmentedGraph() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-surface/30 border border-border/80 p-4 sm:p-6 my-6 transition-all">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-border/60 text-[11px] font-mono">
        <div className="flex items-center gap-2 text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="tracking-widest uppercase">DISCONNECTED TOOLS · MANUAL HANDOFFS</span>
        </div>
        <span className="text-muted tracking-wider hidden sm:inline">NO SHARED VIEW</span>
      </div>

      <div className="relative w-full aspect-[16/10] max-h-[460px]">
        {/* Background Tangled SVG Cables */}
        <svg
          viewBox="0 0 680 430"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
        >
          <defs>
            {/* Subtle alert radial glow on break points */}
            <radialGradient id="spark-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Faint architectural CAD grid lines */}
          <g stroke="var(--hairline-lo, #382218)" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.4">
            <line x1="40" y1="140" x2="640" y2="140" />
            <line x1="40" y1="280" x2="640" y2="280" />
            <line x1="340" y1="30" x2="340" y2="400" />
          </g>

          {/* Cable Paths */}
          {CABLES.map((cable) => {
            const isRelated = hovered === cable.from || hovered === cable.to;
            const strokeColor = isRelated ? '#EF4444' : 'var(--hairline-mid, #9E5D43)';
            const opacity = hovered ? (isRelated ? 1 : 0.25) : 0.65;

            return (
              <g key={cable.id} opacity={opacity} className="transition-opacity duration-300">
                {/* First half of cable */}
                <path
                  d={cable.p1}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeDasharray={cable.breakPoint ? '6 4' : 'none'}
                />

                {/* Second half if severed */}
                {cable.p2 && (
                  <path
                    d={cable.p2}
                    stroke={strokeColor}
                    strokeWidth="1.6"
                    strokeDasharray="6 4"
                  />
                )}

                {/* Severed Air Gap / Break Indicators */}
                {cable.breakPoint && (
                  <g>
                    {/* Pulsing glow ring */}
                    <circle
                      cx={cable.breakPoint.x}
                      cy={cable.breakPoint.y}
                      r="12"
                      fill="url(#spark-glow)"
                    />
                    {/* Broken cable terminator dot */}
                    <circle
                      cx={cable.breakPoint.x}
                      cy={cable.breakPoint.y}
                      r="2.5"
                      fill="#EF4444"
                    />
                    {/* Small severed crosshairs */}
                    <line
                      x1={cable.breakPoint.x - 4}
                      y1={cable.breakPoint.y - 4}
                      x2={cable.breakPoint.x + 4}
                      y2={cable.breakPoint.y + 4}
                      stroke="#FCA5A5"
                      strokeWidth="1.2"
                    />
                    <line
                      x1={cable.breakPoint.x - 4}
                      y1={cable.breakPoint.y + 4}
                      x2={cable.breakPoint.x + 4}
                      y2={cable.breakPoint.y - 4}
                      stroke="#FCA5A5"
                      strokeWidth="1.2"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Tool Cards */}
        {TOOLS.map((tool) => {
          const isHovered = hovered === tool.id;

          // Convert viewBox coordinate (0-680, 0-430) to percentage for responsive placement
          const leftPct = (tool.x / 680) * 100;
          const topPct = (tool.y / 430) * 100;

          return (
            <div
              key={tool.id}
              onMouseEnter={() => setHovered(tool.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
              }}
              className={`absolute -translate-x-2 -translate-y-2 z-10 cursor-pointer select-none transition-all duration-300 ${
                isHovered ? '-translate-y-3 scale-[1.03]' : ''
              }`}
            >
              <div
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-lg ${
                  isHovered
                    ? 'bg-surface border-accent shadow-accent/10 ring-1 ring-accent/30'
                    : 'bg-background/90 border-border/90 hover:border-accent/40 shadow-black/40'
                }`}
              >
                {/* Icon Capsule */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                    isHovered
                      ? 'bg-accent/10 border-accent/40 text-accent'
                      : 'bg-surface border-border text-foreground/80'
                  }`}
                >
                  {tool.icon}
                </div>

                {/* Text Content */}
                <div className="text-left pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                      {tool.label}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                  </div>
                  <span className="block text-[10px] sm:text-[11px] text-muted leading-tight mt-0.5 max-w-[130px] sm:max-w-[160px] truncate">
                    {tool.detail}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Diagnostic Bar */}
      <div className="mt-3 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-muted">
        <span className="flex items-center gap-1.5">
          <span className="text-red-400">✕</span> 5 unintegrated touchpoints
        </span>
        <span className="text-accent/90">
          HOVER ANY CHANNEL TO SEE WHERE WORK GETS LOST
        </span>
      </div>
    </div>
  );
}
