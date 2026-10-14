'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { steps } from '@/lib/content/process';
import { HairlineFigure } from '@/components/visuals/HairlineFigure';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!steps || steps.length === 0) return null;

  return (
    <Section id="how-it-works" className="relative py-24 border-t border-border/60">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
            FROM AUDIT TO CONNECTED WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            How SANAD builds your systems
          </h2>
          <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">
            A structured process designed around how Moroccan tourism operators work on the ground.
          </p>
        </div>

        {/* 4-Stage Horizontal Pipeline Grid */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[86px] left-[10%] right-[10%] h-[1px] bg-border/80 z-0">
            {/* Subtle animated traveling pulse */}
            <div className="w-16 h-[2px] bg-accent/80 rounded-full blur-[1px] animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`impeccable-card group p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer bg-surface/70 ${
                    isSelected
                      ? 'border-accent shadow-xl shadow-accent/10 ring-1 ring-accent/35 -translate-y-1.5'
                      : ''
                  }`}
                >
                  {/* Corner details */}
                  <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />
                  <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 border-t border-r border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />
                  <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 border-b border-l border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />
                  <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />

                  <div>
                    {/* Step Telemetry Header */}
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-background border border-border text-accent font-semibold">
                        {step.code}
                      </span>
                      <span className="text-muted/80">
                        PHASE {idx + 1} OF 4
                      </span>
                    </div>

                    {/* Animated Hairline Stage Viewport */}
                    <div className="relative w-full aspect-[5/4] mb-5 rounded-xl bg-background/80 border border-border/80 group-hover:border-accent/50 flex items-center justify-center p-2 transition-all duration-300 overflow-hidden shadow-inner">
                      {/* Ambient warm glow */}
                      <div className="absolute inset-0 bg-radial from-accent/[0.08] to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      <div className="w-full h-full flex items-center justify-center -translate-y-2">
                        <HairlineFigure
                          name={step.figure}
                          variant="brand"
                          plate="bg"
                          intensity={0.8}
                          className="w-full h-full scale-[1.38] origin-center"
                        />
                      </div>
                    </div>

                    {/* Phase Title & Subtitle */}
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{step.title}</span>
                      <span className="text-xs font-mono text-muted/60">{step.number}</span>
                    </h3>

                    <span className="text-xs font-mono text-accent/90 block mt-0.5 mb-2">
                      {step.tagline}
                    </span>

                    <p className="text-xs text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="mt-5 pt-3 border-t border-border/60">
                    <span className="text-[10px] font-mono text-muted/70 uppercase block mb-1">
                      KEY DELIVERABLE
                    </span>
                    <div className="flex items-start gap-1.5 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-tight">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

          {/* Audit Callout Banner */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-xl bg-surface/40 border border-border/80 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>START WITH A COMPLIMENTARY DIGITAL AUDIT</span>
          </div>
          <a
            href="#audit"
            className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 font-semibold group"
          >
            <span>BOOK A DIGITAL AUDIT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </Container>
    </Section>
  );
};
