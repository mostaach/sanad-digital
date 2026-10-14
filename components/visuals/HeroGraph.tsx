'use client';

import React, { useState, useEffect } from 'react';

// ─── Node Definitions & Balanced Typographic Spacing ─────────────────────────
export interface EcosystemNode {
  id: string;
  title: string;
  sub1: string;                     // Line 1 of description
  sub2: string;                     // Line 2 of description
  x: number;
  y: number;
  w: number;
  h: number;
  terminal: [number, number];       // Where trace attaches to card
  hubTerminal: [number, number];    // Where trace leaves central hub
  tracePath: string;                // Exact PCB trace routing
}

const CARD_W = 206;
const CARD_H = 58;

export const NODES: EcosystemNode[] = [
  // ── Top Center ──
  {
    id: 'ai',
    title: 'AI',
    sub1: 'Smart automation,',
    sub2: 'smarter decisions.',
    x: 357,
    y: 32,
    w: CARD_W,
    h: CARD_H,
    terminal: [460, 90],
    hubTerminal: [460, 205],
    tracePath: 'M 460 205 L 460 90',
  },

  // ── Left Column (Top to Bottom) ──
  {
    id: 'crm',
    title: 'CRM',
    sub1: 'Manage your customers',
    sub2: 'and grow your business.',
    x: 20,
    y: 96,
    w: CARD_W,
    h: CARD_H,
    terminal: [226, 125],
    hubTerminal: [425, 225],
    tracePath: 'M 425 225 L 320 125 L 226 125',
  },
  {
    id: 'google',
    title: 'GOOGLE',
    sub1: 'Better visibility,',
    sub2: 'more bookings.',
    x: 20,
    y: 186,
    w: CARD_W,
    h: CARD_H,
    terminal: [226, 215],
    hubTerminal: [391, 270],
    tracePath: 'M 391 270 L 330 270 L 275 215 L 226 215',
  },
  {
    id: 'payments',
    title: 'PAYMENTS',
    sub1: 'Secure and seamless',
    sub2: 'transactions.',
    x: 20,
    y: 276,
    w: CARD_W,
    h: CARD_H,
    terminal: [226, 305],
    hubTerminal: [391, 300],
    tracePath: 'M 391 300 L 330 300 L 275 305 L 226 305',
  },
  {
    id: 'staff',
    title: 'STAFF',
    sub1: 'Organize your team,',
    sub2: 'boost productivity.',
    x: 20,
    y: 366,
    w: CARD_W,
    h: CARD_H,
    terminal: [226, 395],
    hubTerminal: [425, 345],
    tracePath: 'M 425 345 L 320 395 L 226 395',
  },

  // ── Bottom Center ──
  {
    id: 'guests',
    title: 'GUESTS',
    sub1: 'Deliver exceptional',
    sub2: 'experiences.',
    x: 357,
    y: 466,
    w: CARD_W,
    h: CARD_H,
    terminal: [460, 466],
    hubTerminal: [460, 365],
    tracePath: 'M 460 365 L 460 466',
  },

  // ── Right Column (Top to Bottom) ──
  {
    id: 'analytics',
    title: 'ANALYTICS',
    sub1: 'Data-driven insights',
    sub2: 'for better performance.',
    x: 694,
    y: 96,
    w: CARD_W,
    h: CARD_H,
    terminal: [694, 125],
    hubTerminal: [495, 225],
    tracePath: 'M 495 225 L 600 125 L 694 125',
  },
  {
    id: 'website',
    title: 'WEBSITE',
    sub1: 'Your online presence,',
    sub2: 'fully integrated.',
    x: 694,
    y: 186,
    w: CARD_W,
    h: CARD_H,
    terminal: [694, 215],
    hubTerminal: [529, 270],
    tracePath: 'M 529 270 L 590 270 L 645 215 L 694 215',
  },
  {
    id: 'whatsapp',
    title: 'WHATSAPP',
    sub1: 'Instant communication,',
    sub2: 'happier guests.',
    x: 694,
    y: 276,
    w: CARD_W,
    h: CARD_H,
    terminal: [694, 305],
    hubTerminal: [529, 300],
    tracePath: 'M 529 300 L 590 300 L 645 305 L 694 305',
  },
  {
    id: 'bookings',
    title: 'BOOKINGS',
    sub1: 'Turn interest into',
    sub2: 'confirmed stays.',
    x: 694,
    y: 366,
    w: CARD_W,
    h: CARD_H,
    terminal: [694, 395],
    hubTerminal: [495, 345],
    tracePath: 'M 495 345 L 600 395 L 694 395',
  },
];

// ─── Precision Vector Icons ───────────────────────────────────────────────────
function renderNodeIcon(id: string) {
  const c = 'currentColor';
  switch (id) {
    case 'ai':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-6 -5 C-9 -5 -11 -3 -11 0 C-11 3 -9 5 -6 5 C-6 7 -4 9 -1 9 L-1 -9 C-4 -9 -6 -7 -6 -5 Z" />
          <path d="M6 -5 C9 -5 11 -3 11 0 C11 3 9 5 6 5 C6 7 4 9 1 9 L1 -9 C4 -9 6 -7 6 -5 Z" />
          <circle cx="0" cy="0" r="1.6" fill={c} />
          <line x1="-5" y1="0" x2="-1.6" y2="0" />
          <line x1="1.6" y1="0" x2="5" y2="0" />
          <line x1="0" y1="-5" x2="0" y2="-1.6" />
          <line x1="0" y1="1.6" x2="0" y2="5" />
        </g>
      );
    case 'crm':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="-2" cy="-4" r="3.5" />
          <path d="M-9 7 C-9 3 -5 1 -2 1 C1 1 5 3 5 7" />
          <circle cx="7" cy="-2" r="2.2" />
          <path d="M4 8 C4 5.5 6 4.5 8 4.5" />
        </g>
      );
    case 'google':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="-2" cy="-2" r="6" />
          <line x1="2.5" y1="2.5" x2="8" y2="8" strokeWidth="1.8" />
          <circle cx="-2" cy="-2" r="2.5" strokeDasharray="2 2" opacity="0.6" />
        </g>
      );
    case 'payments':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="-8" y="-6" width="16" height="12" rx="2.5" />
          <line x1="-8" y1="-2" x2="8" y2="-2" strokeWidth="1.5" />
          <rect x="-5" y="1" width="3" height="2.5" rx="0.5" fill={c} opacity="0.6" />
        </g>
      );
    case 'staff':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="-4" cy="-3" r="3" />
          <circle cx="5" cy="-3" r="3" />
          <path d="M-9 7 C-9 4 -6 2.5 -4 2.5 C-2 2.5 0 3.8 0 7" />
          <path d="M0 7 C0 4 3 2.5 5 2.5 C8 2.5 10 4 10 7" />
        </g>
      );
    case 'guests':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="0" cy="-3" r="4" />
          <path d="M-7 8 C-7 3.5 -3.5 2 0 2 C3.5 2 7 3.5 7 8" />
          <circle cx="0" cy="-3" r="1.5" fill={c} opacity="0.8" />
        </g>
      );
    case 'bookings':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="-7" y="-6" width="14" height="13" rx="2" />
          <line x1="-7" y1="-2" x2="7" y2="-2" />
          <line x1="-4" y1="-8" x2="-4" y2="-6" strokeWidth="1.5" />
          <line x1="4" y1="-8" x2="4" y2="-6" strokeWidth="1.5" />
          <path d="M-3 2.5 L-1 4.5 L3.5 0.5" strokeWidth="1.5" />
        </g>
      );
    case 'whatsapp':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 -7 C-4.5 -7 -8 -3.5 -8 1 C-8 2.8 -7.3 4.5 -6.2 5.8 L-7 9 L-3.8 8.1 C-2.6 8.7 -1.3 9 0 9 C4.5 9 8 5.5 8 1 C8 -3.5 4.5 -7 0 -7 Z" />
          <path d="M-2.5 -2 C-2.5 -0.5 -1.5 1.5 0.5 2 C1.5 2.2 2.5 1.5 2.5 0.8 L1.8 -0.2 L0.8 0.2 C0.3 -0.5 -0.5 -1.2 0 -1.8 L-0.2 -2.5 Z" fill={c} opacity="0.8" />
        </g>
      );
    case 'website':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="-8" y="-6" width="16" height="12" rx="2" />
          <line x1="-8" y1="-2" x2="8" y2="-2" />
          <circle cx="-5" cy="-4" r="0.8" fill={c} />
          <circle cx="-2.5" cy="-4" r="0.8" fill={c} />
          <circle cx="0" cy="-4" r="0.8" fill={c} />
          <circle cx="0" cy="3" r="3.2" />
          <line x1="-3.2" y1="3" x2="3.2" y2="3" />
          <ellipse cx="0" cy="3" rx="1.5" ry="3.2" />
        </g>
      );
    case 'analytics':
      return (
        <g stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="-7" y1="7" x2="7" y2="7" />
          <line x1="-7" y1="-7" x2="-7" y2="7" />
          <rect x="-4.5" y="2" width="2" height="5" fill={c} opacity="0.6" />
          <rect x="-0.5" y="-1" width="2" height="8" fill={c} opacity="0.8" />
          <rect x="3.5" y="-5" width="2" height="12" fill={c} />
          <polyline points="-5,0 0,-4 5,-7" stroke="#FFF" strokeWidth="1" />
        </g>
      );
    default:
      return <circle cx="0" cy="0" r="4" fill={c} />;
  }
}

export function HeroGraph() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionOk(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setMotionOk(!e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="relative w-full aspect-[920/560] select-none">
      <svg
        viewBox="0 0 920 560"
        width="100%"
        height="100%"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Sanad Connected Ecosystem Architecture: Central AI automation hub connected to CRM, Google, Payments, Staff, Guests, Bookings, WhatsApp, Website, and Analytics"
      >
        <defs>
          {/* Warm Amber Center Radial Glow */}
          <radialGradient id="hub-ambient-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E07A52" stopOpacity="0.30" />
            <stop offset="50%" stopColor="#C8643C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E07A52" stopOpacity="0" />
          </radialGradient>

          {/* Faceted Metallic Copper Ribbon Gradient for Sanad Mark */}
          <linearGradient id="sanad-copper-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA679" />
            <stop offset="50%" stopColor="#E07A52" />
            <stop offset="100%" stopColor="#8C3A1A" />
          </linearGradient>
          <linearGradient id="sanad-copper-2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFA679" />
            <stop offset="60%" stopColor="#C8643C" />
            <stop offset="100%" stopColor="#6E2B12" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="hub-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="card-active-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#E07A52" floodOpacity="0.45" />
          </filter>

          <filter id="trace-active-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#FF8A50" floodOpacity="0.8" />
          </filter>

          <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─── Background Ambient Light ─────────────────────────────────────── */}
        <circle cx="460" cy="285" r="230" fill="url(#hub-ambient-glow)" />

        {/* ─── Topographic Contour Lines (Warm Amber Hairlines in Corners) ── */}
        <g stroke="#C8643C" strokeWidth="0.75" fill="none" opacity="0.22">
          {/* Bottom Left Topo Lines */}
          <path d="M -20 420 C 60 430, 110 470, 140 570" />
          <path d="M -20 445 C 70 455, 125 490, 160 570" />
          <path d="M -20 470 C 80 480, 140 510, 180 570" />
          <path d="M -20 495 C 90 505, 155 530, 200 570" />
          <path d="M -20 520 C 100 530, 170 550, 220 570" />

          {/* Bottom Right Topo Lines */}
          <path d="M 940 420 C 860 430, 810 470, 780 570" />
          <path d="M 940 445 C 850 455, 795 490, 760 570" />
          <path d="M 940 470 C 840 480, 780 510, 740 570" />
          <path d="M 940 495 C 830 505, 765 530, 720 570" />
          <path d="M 940 520 C 820 530, 750 550, 700 570" />
        </g>

        {/* ─── Corner PCB Bus Trace Tracks ──────────────────────────────────── */}
        <g stroke="#E07A52" strokeWidth="1" fill="none" opacity="0.32" strokeLinecap="round">
          {/* Left PCB Frame */}
          <path d="M 10 460 L 50 460 L 90 500 L 90 540" />
          <circle cx="90" cy="540" r="2" fill="#E07A52" />
          <path d="M 10 500 L 35 500 L 65 530 L 65 540" strokeDasharray="3 3" />

          {/* Right PCB Frame */}
          <path d="M 910 460 L 870 460 L 830 500 L 830 540" />
          <circle cx="830" cy="540" r="2" fill="#E07A52" />
          <path d="M 910 500 L 885 500 L 855 530 L 855 540" strokeDasharray="3 3" />
        </g>

        {/* ─── Circuit Bus Lines (Central Hub → Cards) ──────────────────────── */}
        {NODES.map((node, i) => {
          const isActive = activeId === node.id;
          return (
            <g key={`trace-${node.id}`}>
              {/* Base Trace Line */}
              <path
                id={`path-${node.id}`}
                d={node.tracePath}
                fill="none"
                stroke={isActive ? '#FF8A50' : '#E07A52'}
                strokeWidth={isActive ? '2.4' : '1.3'}
                strokeOpacity={isActive ? 1 : 0.45}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={isActive ? 'url(#trace-active-glow)' : undefined}
                className="transition-all duration-300"
              />

              {/* Hub Perimeter Terminal Solder Pad */}
              <circle
                cx={node.hubTerminal[0]}
                cy={node.hubTerminal[1]}
                r={isActive ? '4' : '3.2'}
                fill="#FF8A50"
                stroke="#16140F"
                strokeWidth="1.2"
                filter={isActive ? 'url(#dot-glow)' : undefined}
              />

              {/* Card Edge Terminal Solder Pad */}
              <circle
                cx={node.terminal[0]}
                cy={node.terminal[1]}
                r={isActive ? '3.8' : '2.8'}
                fill="#FF8A50"
                stroke="#16140F"
                strokeWidth="1.2"
                filter={isActive ? 'url(#dot-glow)' : undefined}
              />

              {/* Moving Pulse Energy Packet along Trace */}
              {motionOk && (
                <circle r={isActive ? '3' : '2'} fill="#FFF2E8" filter="url(#dot-glow)">
                  <animateMotion
                    path={node.tracePath}
                    dur={`${2.6 + (i % 3) * 0.4}s`}
                    repeatCount="indefinite"
                    begin={`${(i * 0.35) % 2.5}s`}
                    keyPoints="0;1"
                    keyTimes="0;1"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* ─── Central Hexagonal Hub ────────────────────────────────────────── */}
        <g id="central-hub" className="cursor-pointer" onClick={() => setActiveId(null)}>
          {/* Outer Halo Hexagon Framing Ring */}
          <polygon
            points="460,197 536,241 536,329 460,373 384,329 384,241"
            fill="none"
            stroke="#E07A52"
            strokeWidth="1"
            strokeOpacity="0.25"
          />

          {/* Main Glowing Hexagonal Bezel */}
          <polygon
            points="460,205 529.3,245 529.3,325 460,365 390.7,325 390.7,245"
            fill="#0D0C0A"
            stroke="#E07A52"
            strokeWidth="2.2"
            filter="url(#hub-glow)"
          />

          {/* Faceted 3D Metallic Sanad "S" Ribbon Emblem */}
          <g transform="translate(460, 248) scale(0.95)" filter="url(#dot-glow)">
            {/* Top Chevron Band */}
            <path
              d="M -16 -18 L 6 -18 L 16 -8 L 0 -8 L -10 -18 Z"
              fill="url(#sanad-copper-1)"
            />
            {/* Upper Right Slant */}
            <path
              d="M 6 -18 L 16 -8 L 8 0 L -2 -10 Z"
              fill="url(#sanad-copper-2)"
            />
            {/* Middle Fold */}
            <path
              d="M -12 -4 L 4 -4 L 12 4 L -4 4 Z"
              fill="url(#sanad-copper-1)"
            />
            {/* Bottom Chevron Band */}
            <path
              d="M -16 8 L 0 8 L 16 18 L -6 18 L -16 8 Z"
              fill="url(#sanad-copper-2)"
            />
          </g>

          {/* Center Brand Typography — Clear Spacing, No Border Intersections */}
          <text
            x="460"
            y="288"
            textAnchor="middle"
            fill="#F4EFE6"
            fontSize="15"
            fontWeight="800"
            letterSpacing="0.24em"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            SANAD
          </text>
          <text
            x="460"
            y="305"
            textAnchor="middle"
            fill="#E07A52"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.16em"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            TOURISM BUSINESS
          </text>
          <text
            x="460"
            y="317"
            textAnchor="middle"
            fill="#E07A52"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.16em"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            AUTOMATION
          </text>
        </g>

        {/* ─── 10 System Node Cards ─────────────────────────────────────────── */}
        {NODES.map((node) => {
          const isActive = activeId === node.id;
          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`${node.title}: ${node.sub1} ${node.sub2}`}
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(activeId === node.id ? null : node.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveId(activeId === node.id ? null : node.id);
                }
              }}
              className="cursor-pointer focus:outline-none transition-all duration-200"
              style={{ outline: 'none' }}
            >
              {/* Card Container Slab */}
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx="10"
                fill="#12110E"
                stroke={isActive ? '#E07A52' : 'rgba(200, 100, 60, 0.28)'}
                strokeWidth={isActive ? '1.8' : '1'}
                filter={isActive ? 'url(#card-active-glow)' : undefined}
                className="transition-colors duration-200"
              />

              {/* Icon Squircle Badge */}
              <rect
                x={node.x + 9}
                y={node.y + 10}
                width="38"
                height="38"
                rx="8"
                fill={isActive ? 'rgba(224, 122, 82, 0.22)' : 'rgba(200, 100, 60, 0.1)'}
                stroke={isActive ? '#E07A52' : 'rgba(200, 100, 60, 0.35)'}
                strokeWidth="1"
                className="transition-colors duration-200"
              />

              {/* Squircle Centered Vector Icon */}
              <g
                transform={`translate(${node.x + 28}, ${node.y + 29})`}
                color={isActive ? '#FFA679' : '#E07A52'}
                className="transition-colors duration-200"
              >
                {renderNodeIcon(node.id)}
              </g>

              {/* Card Text Content — High Clarity 2-Line Subtitle */}
              <text
                x={node.x + 55}
                y={node.y + 22}
                fill={isActive ? '#FFA679' : '#F4EFE6'}
                fontSize="11.5"
                fontWeight="700"
                letterSpacing="0.08em"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                className="transition-colors duration-200"
              >
                {node.title}
              </text>
              <text
                x={node.x + 55}
                y={node.y + 35}
                fill={isActive ? '#F4EFE6' : '#A8A092'}
                fontSize="8.5"
                fontWeight="400"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                className="transition-colors duration-200"
              >
                {node.sub1}
              </text>
              <text
                x={node.x + 55}
                y={node.y + 46}
                fill={isActive ? '#F4EFE6' : '#A8A092'}
                fontSize="8.5"
                fontWeight="400"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                className="transition-colors duration-200"
              >
                {node.sub2}
              </text>

              {/* Forward Arrow Indicator — Vertically Centered on Right Side */}
              <path
                d={`M ${node.x + node.w - 18} ${node.y + node.h / 2} L ${node.x + node.w - 11} ${node.y + node.h / 2} M ${node.x + node.w - 14} ${node.y + node.h / 2 - 3} L ${node.x + node.w - 11} ${node.y + node.h / 2} L ${node.x + node.w - 14} ${node.y + node.h / 2 + 3}`}
                stroke={isActive ? '#FFA679' : '#C8643C'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity={isActive ? 1 : 0.75}
                className="transition-all duration-200"
                transform={isActive ? `translate(2, 0)` : undefined}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
