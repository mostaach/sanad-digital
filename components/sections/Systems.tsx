'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { systems } from '@/lib/content/systems';
import { RiadGuestGuide } from '@/components/visuals/mockups/RiadGuestGuide';
import { WhatsAppLeadSystem } from '@/components/visuals/mockups/WhatsAppLeadSystem';
import { BookingDashboard } from '@/components/visuals/mockups/BookingDashboard';
import { AIConcierge } from '@/components/visuals/mockups/AIConcierge';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const mockupMap: Record<string, React.FC> = {
  RiadGuestGuide,
  WhatsAppLeadSystem,
  BookingDashboard,
  AIConcierge,
};

export const Systems = () => {
  const [selectedId, setSelectedId] = useState<string>(systems[0].id);

  const activeSystem = systems.find((s) => s.id === selectedId) || systems[0];
  const ActiveMockup = mockupMap[activeSystem.componentKey];

  return (
    <Section id="systems" className="relative py-24 border-t border-border/60">
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
            EXAMPLES OF WHAT SANAD BUILDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Systems built for how tourism actually works
          </h2>
          <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">
            Illustrative examples of systems SANAD can build to replace paper, spreadsheets, and chaotic messaging.
          </p>
        </div>

        {/* Interactive examples */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive system tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {systems.map((system) => {
              const isSelected = system.id === selectedId;

              return (
                <button
                  key={system.id}
                  onClick={() => setSelectedId(system.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-surface border-accent shadow-lg shadow-accent/5 ring-1 ring-accent/40'
                      : 'bg-surface/40 border-border/70 hover:border-accent/30 hover:bg-surface/70'
                  }`}
                >
                  {/* Active Indicator Bar on Left */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-background border border-border/80 text-accent font-semibold">
                      {system.code}
                    </span>
                    <span
                      className={`text-[10px] font-mono transition-colors ${
                        isSelected ? 'text-accent' : 'text-muted group-hover:text-foreground'
                      }`}
                    >
                      {isSelected ? '● SELECTED' : 'VIEW EXAMPLE →'}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {system.tagline}
                  </p>

                  {/* System outcome pill */}
                  <div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-mono text-muted/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="truncate">{system.metrics}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Example preview */}
          <div className="lg:col-span-7 bg-surface/50 border border-border/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative shadow-2xl flex flex-col min-h-[580px]">
            {/* Corner details */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent/40 pointer-events-none" />
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent/40 pointer-events-none" />

            {/* Preview header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-border/60 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent">{activeSystem.code}:</span>
                <span>{activeSystem.title.toUpperCase()}</span>
              </div>

              {activeSystem.demoUrl && (
                <a
                  href={activeSystem.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors font-mono tracking-wider hover:underline"
                >
                  <span>VIEW EXAMPLE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Live Interactive Mockup Showcase Box */}
            <div className="flex-1 bg-background/90 rounded-xl border border-border/80 p-6 flex items-center justify-center relative overflow-hidden shadow-inner min-h-[320px]">
              {/* Subtle background grid */}
              <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none" />
              
              <div className="relative z-10 w-full flex items-center justify-center">
                {ActiveMockup && <ActiveMockup />}
              </div>
            </div>

            {/* System context */}
            <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-3">
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                {activeSystem.purpose}
              </p>

              <div className="grid grid-cols-1 gap-3 text-[11px] sm:grid-cols-2">
                <div className="rounded-lg border border-red-900/30 bg-red-950/10 p-3">
                  <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-wider text-red-300">
                    Before
                  </span>
                  <span className="text-muted">Repeated WhatsApp questions and scattered handoffs</span>
                </div>
                <div className="rounded-lg border border-accent/30 bg-accent/10 p-3">
                  <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                    After
                  </span>
                  <span className="text-foreground/90">{activeSystem.metrics}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 text-[11px] font-mono">
                <div className="p-2.5 rounded-lg bg-background/60 border border-border/80">
                  <span className="text-red-400 block mb-0.5 font-semibold">✕ REPLACES:</span>
                  <span className="text-muted leading-tight block">{activeSystem.replaces}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-background/60 border border-border/80">
                  <span className="text-accent block mb-0.5 font-semibold">✓ CONNECTS:</span>
                  <span className="text-muted leading-tight block">{activeSystem.connects}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-surface/50 px-5 py-5 text-center">
          <p className="text-sm text-muted">
            Every system starts with one real workflow: a guest question, a booking request, a staff handoff, or a daily checklist.
          </p>
          <a
            href="#audit"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent/90"
          >
            See what fits my business
          </a>
        </div>
      </Container>
    </Section>
  );
};
