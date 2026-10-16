'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  MessageSquare,
  Building2,
  Globe,
  BellRing,
  Compass,
  Sparkles,
  Car,
  Clock,
  CalendarCheck,
  LayoutDashboard,
  BedDouble,
  QrCode,
  Bot,
  Wifi,
  MapPin,
  Star,
  CreditCard,
  UserCheck,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

interface ChannelItem {
  id: string;
  name: string;
  subtext: string;
  icon: React.ElementType;
  iconColor: string;
  y: number; // Exact center Y in coordinate space (viewBox 0 0 1060 630)
}

interface DestinationItem {
  id: string;
  name: string;
  category: 'ops' | 'guest' | 'biz';
  icon: React.ElementType;
  iconColor: string;
  y: number; // Exact center Y in coordinate space
}

// 8 Front-of-House Channels (Left column, symmetric vertical distribution around Y = 327)
const channels: ChannelItem[] = [
  { id: 'whatsapp', name: 'WhatsApp Direct', subtext: 'Inquiries & guest DMs', icon: MessageSquare, iconColor: '#25D366', y: 82 },
  { id: 'ota', name: 'Booking & Airbnb', subtext: 'External calendar feeds', icon: Building2, iconColor: '#F59E0B', y: 152 },
  { id: 'web', name: 'Direct Website', subtext: 'Commission-free booking', icon: Globe, iconColor: '#38BDF8', y: 222 },
  { id: 'desk', name: 'Front Desk & Walk-in', subtext: 'In-person check-in notes', icon: BellRing, iconColor: '#E0A868', y: 292 },
  { id: 'desert', name: 'Desert & Excursions', subtext: 'Agafay / Sahara requests', icon: Compass, iconColor: '#C8643C', y: 362 },
  { id: 'hammam', name: 'Hammam & Spa', subtext: 'Treatment reservations', icon: Sparkles, iconColor: '#A78BFA', y: 432 },
  { id: 'taxis', name: 'Medina Taxis', subtext: 'Airport & driver dispatch', icon: Car, iconColor: '#34D399', y: 502 },
  { id: 'shifts', name: 'Staff Handoffs', subtext: 'Shift notes & task status', icon: Clock, iconColor: '#F472B6', y: 572 },
];

// 11 Operational Destinations (Right column, grouped into 3 categories, perfectly symmetric around Y = 327)
const destinations: DestinationItem[] = [
  // Group 1: Operations & Stays (Y: 77 -> 197, Center = 137, -190px from Hub)
  { id: 'pms', name: 'PMS & Availability Sync', category: 'ops', icon: CalendarCheck, iconColor: '#F59E0B', y: 77 },
  { id: 'dispatch', name: 'Excursion Dispatch Board', category: 'ops', icon: LayoutDashboard, iconColor: '#C8643C', y: 117 },
  { id: 'clean', name: 'Housekeeping Readiness', category: 'ops', icon: BedDouble, iconColor: '#38BDF8', y: 157 },
  { id: 'kiosk', name: 'In-Room Riad QR Guide', category: 'ops', icon: QrCode, iconColor: '#34D399', y: 197 },

  // Group 2: Guest Experience (Y: 267 -> 387, Center = 327, exactly aligned with Hub)
  { id: 'concierge', name: '24/7 WhatsApp Concierge', category: 'guest', icon: Bot, iconColor: '#25D366', y: 267 },
  { id: 'wifi', name: 'Instant Wi-Fi & House Info', category: 'guest', icon: Wifi, iconColor: '#38BDF8', y: 307 },
  { id: 'medina', name: 'Curated Medina Routes', category: 'guest', icon: MapPin, iconColor: '#E0A868', y: 347 },
  { id: 'reviews', name: 'Automated Review Flow', category: 'guest', icon: Star, iconColor: '#F59E0B', y: 387 },

  // Group 3: Business & Intelligence (Y: 472 -> 562, Center = 517, +190px from Hub)
  { id: 'payments', name: 'Direct Payments & Deposits', category: 'biz', icon: CreditCard, iconColor: '#34D399', y: 472 },
  { id: 'guestcrm', name: 'Guest Profiles & VIP History', category: 'biz', icon: UserCheck, iconColor: '#A78BFA', y: 517 },
  { id: 'reports', name: 'Occupancy & Revenue Pace', category: 'biz', icon: BarChart3, iconColor: '#C8643C', y: 562 },
];

// Spaghetti mesh connection pairs for "Without SANAD" (N x M friction)
const spaghettiLinks: [number, number][] = [
  [0, 0], [0, 1], [0, 4], [0, 6], [0, 8],
  [1, 0], [1, 2], [1, 8], [1, 10],
  [2, 0], [2, 4], [2, 8], [2, 9],
  [3, 0], [3, 2], [3, 5], [3, 6],
  [4, 1], [4, 4], [4, 6], [4, 8],
  [5, 4], [5, 8], [5, 9],
  [6, 1], [6, 4], [6, 5],
  [7, 0], [7, 2], [7, 3], [7, 9],
];

export const Transformation = () => {
  const [activeMode, setActiveMode] = useState<'without' | 'with'>('with');
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);
  const [hoveredDest, setHoveredDest] = useState<string | null>(null);

  // Exact mathematical symmetry constants
  // Total Canvas Width: 1060px | Center X: 515px | Center Y: 327px
  // Left cards: 30px to 245px (width 215px) -> leftX = 245
  // Right cards: 785px to 1030px (width 245px) -> rightX = 785
  // Center Box: Width 154px (438px to 592px), centered at 515px -> hubLeftX = 438, hubRightX = 592
  // Left Wire Span: 438 - 245 = 193px | Right Wire Span: 785 - 592 = 193px (PERFECT EQUIDISTANCE)
  const leftX = 245;
  const hubLeftX = 438;
  const hubRightX = 592;
  const hubY = 327;
  const rightX = 785;

  return (
    <Section id="transformation" className="relative overflow-hidden py-20 sm:py-28 border-t border-border/60 bg-background">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-accent/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3 font-semibold">
            FROM DAILY FRICTION TO CONNECTED OPERATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            One unified layer behind your front-of-house
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Instead of manually juggling WhatsApp messages, paper notes, and disjointed software, SANAD connects every channel to your operations in one central hub.
          </p>

          {/* Interactive State Toggle — Reference Pill Style */}
          <div className="inline-flex items-center p-1.5 mt-8 rounded-2xl bg-surface border border-border shadow-xl backdrop-blur-md">
            <button
              onClick={() => setActiveMode('without')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeMode === 'without'
                  ? 'bg-red-500/15 text-red-300 border border-red-500/40 shadow-md shadow-red-950/40 font-semibold'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeMode === 'without' ? 'bg-red-400 animate-pulse' : 'bg-muted/40'}`} />
              Without SANAD
            </button>
            <button
              onClick={() => setActiveMode('with')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeMode === 'with'
                  ? 'bg-accent/20 text-accent border border-accent/40 shadow-md shadow-accent/20 font-semibold'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeMode === 'with' ? 'bg-accent animate-pulse' : 'bg-muted/40'}`} />
              With SANAD
            </button>
          </div>
        </div>

        {/* Master Diagram Card */}
        <div className="impeccable-card relative p-4 sm:p-7 lg:p-8 bg-surface/80 border border-border/80 shadow-2xl overflow-hidden rounded-2xl">
          {/* Subtle architectural CAD Grid Background */}
          <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none" />

          {/* Mode Sub-Banner */}
          <div className="relative z-10 flex flex-wrap items-center justify-between pb-4 mb-4 sm:mb-6 border-b border-border/60 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-muted">ARCHITECTURE:</span>
              <span className={activeMode === 'with' ? 'text-accent font-semibold flex items-center gap-1.5' : 'text-red-400 font-semibold flex items-center gap-1.5'}>
                <span className={`w-2 h-2 rounded-full ${activeMode === 'with' ? 'bg-accent animate-pulse' : 'bg-red-400'}`} />
                {activeMode === 'with' ? 'UNIFIED HUB & SPOKE (N + M)' : 'FRAGMENTED POINT-TO-POINT MESH (N × M)'}
              </span>
            </div>
            <div className="text-muted/70 text-[11px] hidden sm:block tracking-wider">
              {activeMode === 'with' ? '● ALL CHANNELS SYNCHRONIZED' : '✕ MANUAL RE-ENTRY & FRICTION'}
            </div>
          </div>

          {/* Diagram Canvas Wrapper — Horizontally scrollable on small screens, full scale on desktop */}
          <div className="relative w-full overflow-x-auto pb-4 pt-2 -mx-2 px-2">
            <div className="relative min-w-[1060px] h-[630px] mx-auto select-none">

              {/* ── SVG WIRING LAYER ─────────────────────────────────── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 1060 630"
                fill="none"
              >
                <defs>
                  {/* Glowing filter for highlighted wires on hover */}
                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <linearGradient id="chaoticGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#7F1D1D" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {activeMode === 'with' ? (
                  /* ── WITH SANAD: Smooth S-Curve Bezier Paths Meeting Exactly At Center Hub ── */
                  <g>
                    {/* Left Channels -> Center Hub Left Edge (hubLeftX, hubY) */}
                    {channels.map((ch, idx) => {
                      const isHovered = hoveredChannel === ch.id;
                      // Smooth S-curve leaving ch horizontally and arriving at hubLeftX horizontally
                      const pathD = `M ${leftX},${ch.y} C ${leftX + 100},${ch.y} ${hubLeftX - 70},${hubY} ${hubLeftX},${hubY}`;
                      return (
                        <g key={`left-wire-${idx}`}>
                          {/* Main connection line */}
                          <path
                            d={pathD}
                            stroke={isHovered ? '#E0A868' : '#C8643C'}
                            strokeWidth={isHovered ? 2.5 : 1.3}
                            strokeOpacity={isHovered ? 0.95 : 0.35}
                            fill="none"
                            filter={isHovered ? 'url(#glowFilter)' : undefined}
                            className="transition-all duration-300"
                          />
                          {/* Animated traveling signal packet */}
                          <circle r="2.5" fill="#F4EFE6" opacity="0.9">
                            <animateMotion
                              path={pathD}
                              dur={`${2.6 + (idx % 3) * 0.4}s`}
                              repeatCount="indefinite"
                              begin={`${idx * 0.35}s`}
                            />
                          </circle>
                        </g>
                      );
                    })}

                    {/* Center Hub Right Edge (hubRightX, hubY) -> Right Destinations (rightX, dst.y) */}
                    {destinations.map((dst, idx) => {
                      const isHovered = hoveredDest === dst.id;
                      const isOps = dst.category === 'ops';
                      const isGuest = dst.category === 'guest';
                      const strokeColor = isHovered
                        ? '#F4EFE6'
                        : isOps
                        ? '#38BDF8'
                        : isGuest
                        ? '#34D399'
                        : '#E0A868';
                      // Smooth S-curve leaving hubRightX horizontally and arriving at destination horizontally
                      const pathD = `M ${hubRightX},${hubY} C ${hubRightX + 70},${hubY} ${rightX - 100},${dst.y} ${rightX},${dst.y}`;
                      return (
                        <g key={`right-wire-${idx}`}>
                          {/* Main connection line */}
                          <path
                            d={pathD}
                            stroke={strokeColor}
                            strokeWidth={isHovered ? 2.5 : 1.3}
                            strokeOpacity={isHovered ? 1 : 0.4}
                            fill="none"
                            filter={isHovered ? 'url(#glowFilter)' : undefined}
                            className="transition-all duration-300"
                          />
                          {/* Animated forward signal packet */}
                          <circle r="2.2" fill={isOps ? '#38BDF8' : isGuest ? '#34D399' : '#E0A868'} opacity="0.95">
                            <animateMotion
                              path={pathD}
                              dur={`${2.4 + (idx % 4) * 0.3}s`}
                              repeatCount="indefinite"
                              begin={`${idx * 0.28}s`}
                            />
                          </circle>
                        </g>
                      );
                    })}

                    {/* Hub Connection Anchor Terminals (Left & Right edges of SANAD Box) */}
                    <circle cx={hubLeftX} cy={hubY} r="4" fill="#C8643C" stroke="#0E0D0B" strokeWidth="1.5" />
                    <circle cx={hubLeftX} cy={hubY} r="1.5" fill="#F4EFE6" />

                    <circle cx={hubRightX} cy={hubY} r="4" fill="#38BDF8" stroke="#0E0D0B" strokeWidth="1.5" />
                    <circle cx={hubRightX} cy={hubY} r="1.5" fill="#F4EFE6" />
                  </g>
                ) : (
                  /* ── WITHOUT SANAD: Tangled Spaghetti Mesh (N x M Friction) ── */
                  <g>
                    {spaghettiLinks.map(([chIdx, dstIdx], idx) => {
                      const ch = channels[chIdx];
                      const dst = destinations[dstIdx];
                      const isHovered = hoveredChannel === ch.id || hoveredDest === dst.id;
                      const pathD = `M ${leftX},${ch.y} C ${leftX + 220},${ch.y} ${rightX - 220},${dst.y} ${rightX},${dst.y}`;
                      return (
                        <path
                          key={`spaghetti-${idx}`}
                          d={pathD}
                          stroke={isHovered ? '#EF4444' : 'url(#chaoticGradient)'}
                          strokeWidth={isHovered ? 1.6 : 1}
                          strokeDasharray={idx % 2 === 0 ? '4 5' : '3 6'}
                          strokeOpacity={isHovered ? 0.9 : 0.4}
                          fill="none"
                          className="transition-all duration-200"
                        />
                      );
                    })}
                  </g>
                )}

                {/* Left Connector Nodes (Dots on right border of channel cards where wires dock) */}
                {channels.map((ch, idx) => {
                  const isHovered = hoveredChannel === ch.id;
                  const dotColor = activeMode === 'with' ? '#C8643C' : '#EF4444';
                  return (
                    <g key={`dot-left-${idx}`}>
                      <circle
                        cx={leftX}
                        cy={ch.y}
                        r={isHovered ? 4.5 : 3.5}
                        fill={dotColor}
                        stroke="#0E0D0B"
                        strokeWidth="1.5"
                        className="transition-all duration-200"
                      />
                      {isHovered && (
                        <circle cx={leftX} cy={ch.y} r="1.5" fill="#FFFFFF" />
                      )}
                    </g>
                  );
                })}

                {/* Right Connector Nodes (Dots on left border of destination cards where wires dock) */}
                {destinations.map((dst, idx) => {
                  const isHovered = hoveredDest === dst.id;
                  const dotColor = activeMode === 'with'
                    ? (dst.category === 'ops' ? '#38BDF8' : dst.category === 'guest' ? '#34D399' : '#E0A868')
                    : '#EF4444';
                  return (
                    <g key={`dot-right-${idx}`}>
                      <circle
                        cx={rightX}
                        cy={dst.y}
                        r={isHovered ? 4.5 : 3.5}
                        fill={dotColor}
                        stroke="#0E0D0B"
                        strokeWidth="1.5"
                        className="transition-all duration-200"
                      />
                      {isHovered && (
                        <circle cx={rightX} cy={dst.y} r="1.5" fill="#FFFFFF" />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* ── LEFT COLUMN HEADER ───────────────────────────────── */}
              <div className="absolute left-[30px] top-[18px] w-[215px] z-20">
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted block font-semibold leading-tight">
                  YOUR CHANNELS
                </span>
                <span className="text-[10px] text-muted/70 block mt-0.5">8 guest touchpoints</span>
              </div>

              {/* ── LEFT COLUMN CARDS: Positioned exactly at ch.y (height 46px) ───── */}
              {channels.map((ch) => {
                const Icon = ch.icon;
                const isHovered = hoveredChannel === ch.id;
                return (
                  <div
                    key={ch.id}
                    onMouseEnter={() => setHoveredChannel(ch.id)}
                    onMouseLeave={() => setHoveredChannel(null)}
                    className={`group absolute left-[30px] w-[215px] flex items-center justify-between rounded-xl px-3 py-2 border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'bg-surface-raised border-accent shadow-md shadow-accent/15 translate-x-1'
                        : 'bg-surface/90 border-border/80 hover:border-border-hover'
                    }`}
                    style={{
                      top: `${ch.y}px`,
                      transform: 'translateY(-50%)',
                      height: '46px',
                    }}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60"
                        style={{ color: ch.iconColor }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-foreground truncate group-hover:text-accent transition-colors">
                          {ch.name}
                        </div>
                        <div className="text-[10px] text-muted truncate leading-tight">
                          {ch.subtext}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ── CENTER AREA: SANAD HUB PILL (EXACT CENTER: 515, 327) ── */}
              <div
                className="absolute z-20 select-none"
                style={{
                  left: '515px',
                  top: '327px',
                  transform: 'translate(-50%, -50%)',
                  width: '154px',
                  height: '48px',
                }}
              >
                {activeMode === 'with' ? (
                  /* Center SANAD Unified Hub (like reference <> BeatAPI) */
                  <div className="relative group cursor-pointer w-full h-full">
                    {/* Pulsing ambient halo */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/35 via-accent/15 to-emerald-400/25 blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />

                    {/* Master Hub Pill */}
                    <div className="relative w-full h-full flex items-center justify-center gap-2.5 rounded-xl border border-accent/80 bg-[#14120E] px-3.5 py-2 shadow-[0_0_24px_rgba(200,100,60,0.22),_inset_0_1px_1px_rgba(255,255,255,0.06)] hover:border-accent transition-all duration-300">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/20 border border-accent/40 text-accent font-mono text-xs font-bold shadow-inner">
                        &lt;&gt;
                      </div>
                      <div className="flex flex-col text-left whitespace-nowrap min-w-0">
                        <div className="text-xs font-mono font-bold tracking-wider text-foreground leading-tight">
                          SANAD
                        </div>
                        <div className="text-[9px] font-mono text-accent font-semibold tracking-wider uppercase leading-tight whitespace-nowrap">
                          DIGITAL LAYER
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Center Disconnected Chaos Warning */
                  <div className="relative w-full h-full flex items-center justify-center gap-2 rounded-xl border border-red-500/50 bg-red-950/40 px-3 py-2 shadow-xl backdrop-blur-sm">
                    <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 animate-bounce" />
                    <div className="text-left min-w-0 whitespace-nowrap">
                      <div className="text-[11px] font-mono font-bold text-red-300 uppercase leading-none">
                        MANUAL CHAOS
                      </div>
                      <div className="text-[9px] font-mono text-red-400/80 mt-0.5">
                        90+ friction points
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Subtitle tag beneath the box — Positioned independently to never alter hub vertical center */}
              <div
                className="absolute z-20 select-none pointer-events-none"
                style={{
                  left: '515px',
                  top: '364px',
                  transform: 'translateX(-50%)',
                }}
              >
                {activeMode === 'with' ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface/90 border border-border/80 text-[10px] font-mono text-muted/90 shadow-sm whitespace-nowrap backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Single source of truth</span>
                  </div>
                ) : (
                  <span className="text-[9px] font-mono text-red-400/80 bg-surface/90 px-2.5 py-0.5 rounded-full border border-red-900/50 whitespace-nowrap shadow-sm">
                    Duplicated double-entry
                  </span>
                )}
              </div>

              {/* ── RIGHT COLUMN: Categorized Destinations & Headers ── */}
              
              {/* Group 1 Header: Operations & Stays */}
              <div className="absolute left-[785px] top-[20px] w-[245px] z-20 flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold leading-tight">
                  OPERATIONS & STAYS
                </span>
                <span className="text-[10px] text-muted/60 font-mono">Core PMS</span>
              </div>

              {/* Group 2 Header: Guest Experience */}
              <div className="absolute left-[785px] top-[228px] w-[245px] z-20 flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold leading-tight">
                  GUEST EXPERIENCE
                </span>
                <span className="text-[10px] text-muted/60 font-mono">In-Stay</span>
              </div>

              {/* Group 3 Header: Business & Intelligence */}
              <div className="absolute left-[785px] top-[428px] w-[245px] z-20 flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold leading-tight">
                  BUSINESS & INTELLIGENCE
                </span>
                <span className="text-[10px] text-muted/60 font-mono">Revenue</span>
              </div>

              {/* Right Destination Cards (Positioned exactly at dst.y) */}
              {destinations.map((dst) => {
                const Icon = dst.icon;
                const isHovered = hoveredDest === dst.id;
                const isOps = dst.category === 'ops';
                const isGuest = dst.category === 'guest';
                const hoverBorder = isOps
                  ? 'hover:border-sky-400/50'
                  : isGuest
                  ? 'hover:border-emerald-400/50'
                  : 'hover:border-amber-400/50';
                const activeBorder = isOps
                  ? 'border-sky-400/80 shadow-sky-500/10'
                  : isGuest
                  ? 'border-emerald-400/80 shadow-emerald-500/10'
                  : 'border-amber-400/80 shadow-amber-500/10';

                return (
                  <div
                    key={dst.id}
                    onMouseEnter={() => setHoveredDest(dst.id)}
                    onMouseLeave={() => setHoveredDest(null)}
                    className={`absolute left-[785px] w-[245px] flex items-center gap-2.5 rounded-xl px-3 py-2 border transition-all duration-150 cursor-pointer ${
                      isHovered
                        ? `bg-surface-raised ${activeBorder} shadow-sm translate-x-1`
                        : `bg-surface/85 border-border/80 ${hoverBorder}`
                    }`}
                    style={{
                      top: `${dst.y}px`,
                      transform: 'translateY(-50%)',
                      height: '36px',
                    }}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: dst.iconColor }} />
                    <span className="text-xs font-medium text-foreground truncate">
                      {dst.name}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Diagnostic Comparison Footnote Cards */}
          <div className="mt-6 pt-6 border-t border-border/60 grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {activeMode === 'with' ? (
              <>
                <div className="rounded-xl border border-accent/30 bg-accent/[0.06] p-3.5 flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-foreground">Zero Manual Re-Entry</div>
                    <div className="text-[11px] text-muted mt-0.5 leading-relaxed">
                      WhatsApp booking inquiries and website deposits automatically sync to your calendar and staff tasks.
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] p-3.5 flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-foreground">Instant Guest Responses</div>
                    <div className="text-[11px] text-muted mt-0.5 leading-relaxed">
                      24/7 AI-assisted concierge answers common Medina questions, delivers Wi-Fi passes, and routes special requests.
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-sky-500/30 bg-sky-500/[0.06] p-3.5 flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-foreground">Unified Operations View</div>
                    <div className="text-[11px] text-muted mt-0.5 leading-relaxed">
                      Housekeeping, excursion drivers, and reception share live status without lost paper slips or WhatsApp noise.
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-3.5 flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-red-200">3+ Hours Wasted Daily</div>
                    <div className="text-[11px] text-red-300/70 mt-0.5 leading-relaxed">
                      Staff re-typing bookings from WhatsApp into paper diaries and updating spreadsheets manually.
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-3.5 flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-red-200">15-20% Dropped Inquiries</div>
                    <div className="text-[11px] text-red-300/70 mt-0.5 leading-relaxed">
                      Inquiries arriving late at night or during check-in rush get buried under personal chat notifications.
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-3.5 flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-red-200">Uncoordinated Handoffs</div>
                    <div className="text-[11px] text-red-300/70 mt-0.5 leading-relaxed">
                      Drivers miss airport flights, housekeeping cleans wrong rooms, and guests repeat preferences every shift.
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-muted/80 tracking-wider">
            Ready to connect your business?{' '}
            <a href="#audit" className="text-accent underline underline-offset-4 hover:text-accent-light transition-colors font-medium">
              Request a 48-Hour Digital Audit &rarr;
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};
