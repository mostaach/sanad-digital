'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export const Transformation = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  const beforePoints = [
    { label: 'Scattered Communications', desc: 'Inquiries lost in personal WhatsApp chats and unread Instagram DMs', status: 'FRAGMENTED' },
    { label: 'Manual Double-Entry', desc: 'Bookings re-typed by hand into spreadsheets and desktop notebooks', status: 'ERROR-PRONE' },
    { label: 'Disconnected Staff', desc: 'Shift handoffs and guest requests whispered or scribbled on paper notes', status: 'DELAYED' },
    { label: 'No Unified Profile', desc: 'Returning guests treated as strangers with no logged history', status: 'UNTRACKED' },
  ];

  const afterPoints = [
    { label: 'Organized Inquiries', desc: 'WhatsApp and website requests become clear follow-up tasks', status: 'CONNECTED' },
    { label: 'One Operational View', desc: 'Bookings, room status, and daily work live in one shared place', status: 'ORGANIZED' },
    { label: 'Clear Staff Handoffs', desc: 'Housekeeping, room readiness, and guest requests are routed to the right people', status: 'ROUTED' },
    { label: 'Useful Guest Context', desc: 'Preferences, hammam requests, and arrival notes are easy to find when staff need them', status: 'VISIBLE' },
  ];

  return (
    <Section id="transformation" className="relative overflow-hidden py-24 border-t border-border/60">
      {/* Background ambient backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
            FROM DAILY FRICTION TO CONNECTED OPERATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            From fragmented touchpoints to unified infrastructure
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
            Replace scattered messages, paper notes, and duplicated work with a clearer way to run the day.
          </p>

          {/* Interactive State Toggle */}
          <div className="inline-flex items-center p-1.5 mt-8 rounded-xl bg-surface border border-border shadow-inner">
            <button
              onClick={() => setActiveTab('before')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'before'
                  ? 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-sm'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === 'before' ? 'bg-red-400 animate-pulse' : 'bg-muted/40'}`} />
              BEFORE SANAD
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === 'after'
                  ? 'bg-accent/15 text-accent border border-accent/40 shadow-sm'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === 'after' ? 'bg-accent animate-pulse' : 'bg-muted/40'}`} />
              WITH SANAD
            </button>
          </div>
        </div>

        {/* Comparison panel */}
        <div className="impeccable-card max-w-4xl mx-auto p-6 sm:p-8 relative bg-surface/70 backdrop-blur-xl">
          {/* Corner details */}
          <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent/40 pointer-events-none" />
          <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent/40 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent/40 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent/40 pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-border/60 text-[11px] font-mono">
            <div className="flex items-center gap-3">
              <span className="text-muted">WORKFLOW:</span>
              <span className={activeTab === 'after' ? 'text-accent font-semibold' : 'text-red-400 font-semibold'}>
                {activeTab === 'after' ? '● CONNECTED DAILY OPERATIONS' : '✕ SCATTERED TOOLS AND HANDOFFS'}
              </span>
            </div>
            <div className="text-muted/70 tracking-widest">
              {activeTab === 'after' ? 'CONNECTED WORKFLOW' : 'SCATTERED WORKFLOW'}
            </div>
          </div>

          {/* Grid Layout: Visual left, details right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual representation */}
            <div className="lg:col-span-5 bg-background/80 rounded-xl border border-border/90 p-5 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
              {/* Subtle architectural background grid */}
              <div className="absolute inset-0 bg-cad-grid opacity-30 pointer-events-none" />

              {activeTab === 'before' ? (
                /* Disconnected / Scattered Wireframe */
                <div className="relative w-full h-[240px] flex items-center justify-center">
                  <div className="absolute top-4 left-6 p-2 rounded-lg border border-red-500/30 bg-surface/80 text-[11px] font-mono text-red-300">
                    WhatsApp DMs
                  </div>
                  <div className="absolute top-8 right-6 p-2 rounded-lg border border-red-500/30 bg-surface/80 text-[11px] font-mono text-red-300">
                    Spreadsheet
                  </div>
                  <div className="absolute bottom-6 left-8 p-2 rounded-lg border border-red-500/30 bg-surface/80 text-[11px] font-mono text-red-300">
                    Phone Calls
                  </div>
                  <div className="absolute bottom-10 right-8 p-2 rounded-lg border border-red-500/30 bg-surface/80 text-[11px] font-mono text-red-300">
                    Paper Notes
                  </div>
                  
                  {/* Broken red severed link in center */}
                  <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 240 240">
                    <line x1="60" y1="50" x2="110" y2="100" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6" />
                    <line x1="180" y1="50" x2="135" y2="95" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6" />
                    <line x1="70" y1="180" x2="110" y2="140" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6" />
                    <line x1="170" y1="170" x2="135" y2="145" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.6" />
                    <circle cx="120" cy="120" r="16" fill="var(--hairline-plate, #16140F)" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="120" y="124" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">✕</text>
                  </svg>
                  <span className="text-[10px] font-mono text-muted/60 absolute bottom-1">DISCONNECTED HANDOFFS</span>
                </div>
              ) : (
                /* Connected / Unified SANAD Foundation */
                <div className="relative w-full h-[240px] flex items-center justify-center">
                  <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 240 240">
                    {/* Concentric connection rings */}
                    <circle cx="120" cy="120" r="75" fill="none" stroke="var(--hairline-edge, #C8643C)" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
                    <circle cx="120" cy="120" r="45" fill="none" stroke="var(--hairline-mid, #9E5D43)" strokeWidth="0.8" opacity="0.6" />

                    {/* Illuminated spokes converging to SANAD */}
                    <line x1="45" y1="60" x2="120" y2="120" stroke="var(--hairline-edge, #C8643C)" strokeWidth="1.2" />
                    <line x1="195" y1="60" x2="120" y2="120" stroke="var(--hairline-edge, #C8643C)" strokeWidth="1.2" />
                    <line x1="45" y1="180" x2="120" y2="120" stroke="var(--hairline-edge, #C8643C)" strokeWidth="1.2" />
                    <line x1="195" y1="180" x2="120" y2="120" stroke="var(--hairline-edge, #C8643C)" strokeWidth="1.2" />

                    {/* Traveling signal dots */}
                    <circle cx="82" cy="90" r="2" fill="var(--hairline-hi, #F4EFE6)" />
                    <circle cx="158" cy="90" r="2" fill="var(--hairline-hi, #F4EFE6)" />
                    <circle cx="82" cy="150" r="2" fill="var(--hairline-hi, #F4EFE6)" />
                    <circle cx="158" cy="150" r="2" fill="var(--hairline-hi, #F4EFE6)" />
                  </svg>

                  {/* Satellite Pills */}
                  <div className="absolute top-4 left-4 px-2 py-1 rounded bg-surface border border-accent/40 text-[10px] font-mono text-accent">WhatsApp</div>
                  <div className="absolute top-4 right-4 px-2 py-1 rounded bg-surface border border-accent/40 text-[10px] font-mono text-accent">PMS / Cal</div>
                  <div className="absolute bottom-4 left-4 px-2 py-1 rounded bg-surface border border-accent/40 text-[10px] font-mono text-accent">Staff App</div>
                  <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-surface border border-accent/40 text-[10px] font-mono text-accent">Guest CRM</div>

                  {/* Center SANAD layer */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-surface border-2 border-accent flex flex-col items-center justify-center shadow-[0_0_30px_rgba(200,100,60,0.25)]">
                    <span className="text-xs font-bold text-foreground tracking-widest">SANAD</span>
                    <span className="text-[9px] font-mono text-accent/80 mt-0.5">CONNECTED FLOW</span>
                  </div>
                </div>
              )}
            </div>

            {/* Diagnostics List Right */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {(activeTab === 'before' ? beforePoints : afterPoints).map((point, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    activeTab === 'after'
                      ? 'bg-surface/60 border-border hover:border-accent/50'
                      : 'bg-red-950/10 border-red-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className={activeTab === 'after' ? 'text-accent' : 'text-red-400'}>
                        {activeTab === 'after' ? '✓' : '✕'}
                      </span>
                      {point.label}
                    </h4>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded tracking-widest ${
                        activeTab === 'after'
                          ? 'bg-accent/10 text-accent border border-accent/30'
                          : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                    >
                      {point.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-5">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* High-Impact Outcome Footnote */}
        <div className="w-full text-center mt-12 pt-8 border-t border-border/50">
          <p className="text-xs sm:text-sm text-muted font-mono tracking-wider flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            <span className="text-foreground">● CLEARER BOOKING FLOW</span>
            <span className="text-border">|</span>
            <span className="text-foreground">● FEWER MISSED INQUIRIES</span>
            <span className="text-border">|</span>
            <span className="text-foreground">● BETTER GUEST HANDOFFS</span>
            <span className="text-border">|</span>
            <span className="text-foreground">● CONNECTED OPS</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
