'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { auditCta } from '@/lib/content/ctas';
import { site } from '@/lib/content/site';
import { LeadForm } from '@/components/forms/LeadForm';
import { HairlineFigure } from '@/components/visuals/HairlineFigure';
import { CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

export const AuditCta = () => {
  return (
    <Section id="audit" className="relative py-24 border-t border-border/60 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Audit summary */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-[10px] font-mono tracking-widest text-accent uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>CONFIDENTIAL AUDIT</span>
                </span>
                <span className="rounded-md border border-border/80 bg-surface/80 px-2 py-0.5 text-[10px] font-mono text-muted">
                  48H DIAGNOSTIC
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
                {auditCta.headline || 'Find the gaps in your digital operation.'}
              </h2>

              <p className="text-muted text-sm sm:text-base mt-3.5 leading-relaxed">
                {auditCta.description || "We map your current booking, guest communication, and operations flow, then deliver a factual diagnostic of your highest-impact fixes."}
              </p>

              {/* Technical CAD Hairline Visual Widget */}
              <div className="my-6 impeccable-card p-4 relative overflow-hidden group bg-surface/60">
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-accent/40 pointer-events-none" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-accent/40 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-accent/40 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-accent/40 pointer-events-none" />

                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50 text-[10px] font-mono text-muted">
                  <span>BOOKINGS · GUESTS · STAFF · WHATSAPP</span>
                  <span className="text-accent flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    INSPECTION ACTIVE
                  </span>
                </div>

                <div className="w-full aspect-[4/3] max-h-52 flex items-center justify-center overflow-hidden">
                  <HairlineFigure
                    name="loupe"
                    variant="brand"
                    plate="surface"
                    intensity={0.75}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* What You Receive in the Audit — Styled Cards */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                  WHAT YOUR DIGITAL AUDIT DELIVERS:
                </span>

                <div className="rounded-lg border border-border/70 bg-surface/60 p-2.5 flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Operational Flow Map:</span>{' '}
                    <span className="text-muted">A clear map of how guest inquiries move across website, WhatsApp, and staff.</span>
                  </div>
                </div>

                <div className="rounded-lg border border-border/70 bg-surface/60 p-2.5 flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">High-Impact Fix List:</span>{' '}
                    <span className="text-muted">Prioritized vulnerabilities (booking leaks, response delays, manual double entries).</span>
                  </div>
                </div>

                <div className="rounded-lg border border-border/70 bg-surface/60 p-2.5 flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Next-Step Architecture:</span>{' '}
                    <span className="text-muted">Recommended systems and estimated ROI for your specific Moroccan property.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Alternative Button */}
            {site.whatsapp && (
              <div className="mt-6 pt-5 border-t border-border/60">
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    "Bonjour SANAD, je gère un établissement touristique au Maroc et j'aimerais échanger sur notre audit digital."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface/80 border border-border/80 hover:border-accent/60 transition-all text-xs font-mono group shadow-xs hover:shadow-md hover:shadow-accent/15 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2.5 text-foreground font-medium">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <span>Prefer direct chat?</span>
                  </div>
                  <span className="text-accent group-hover:underline flex items-center gap-1 font-semibold">
                    Open WhatsApp &rarr;
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Multi-step form */}
          <div className="impeccable-card lg:col-span-7 p-5 sm:p-8 relative bg-surface/70 backdrop-blur-xl">
            {/* Corner Crosshairs */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent/40 pointer-events-none" />
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent/40 pointer-events-none" />

            {/* Form Header */}
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-border/60 text-[11px] font-mono">
              <span className="text-foreground font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                AUDIT INTAKE FORM
              </span>
              <span className="text-muted/80 text-[10px]">CONFIDENTIAL · NO OBLIGATION</span>
            </div>

            {/* Multi-Step Lead Intake */}
            <LeadForm submitLabel={auditCta.submitLabel || 'Request Digital Audit'} />

            {/* Security Note */}
            <div className="mt-5 pt-3.5 border-t border-border/40 flex items-center justify-center gap-2 text-[10px] font-mono text-muted/60">
              <ShieldCheck className="w-3.5 h-3.5 text-accent/80" />
              <span>YOUR OPERATIONAL DATA IS NEVER SHARED WITH THIRD PARTIES</span>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
