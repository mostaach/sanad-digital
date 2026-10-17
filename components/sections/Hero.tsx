'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { HeroGraph } from '@/components/visuals/HeroGraph';

export function Hero() {
  const clarityBullets = ['Guest guides', 'WhatsApp workflows', 'Operations dashboards'];

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 bg-background text-foreground overflow-hidden">
      {/* Impeccable Ambient Glow & Architectural Texture */}
      <div className="absolute inset-0 bg-cad-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[450px] h-[260px] bg-sand/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
          <div className="flex flex-col space-y-3.5 sm:space-y-4 lg:space-y-4 xl:space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-[11px] font-mono tracking-widest text-accent uppercase mb-2.5 sm:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>DIGITAL INFRASTRUCTURE FOR MOROCCAN TOURISM</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-bold leading-[1.12] tracking-tight">
                Your tourism business runs on WhatsApp.<br />
                <span className="gradient-terracotta-text">It shouldn&apos;t have to.</span>
              </h1>
            </div>
            
            <p className="text-sm sm:text-base text-muted max-w-lg leading-relaxed">
              SANAD builds the digital systems, connected workflows, and AI concierge layers that help Moroccan tourism operators reclaim time, eliminate booking leaks, and deliver memorable guest journeys.
            </p>

            <p className="text-xs sm:text-[13px] text-muted/80 italic max-w-lg border-l-2 border-accent/40 pl-3">
              &laquo;&nbsp;L’infrastructure digitale et conciergerie connectée pour les riads de charme, lodges de l’Atlas et camps d’Agafay.&nbsp;&raquo;
            </p>

            <div className="flex flex-wrap gap-2">
              {clarityBullets.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/90 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-foreground/90 shadow-xs hover:border-accent/40 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  {item}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-0.5">
              <a
                href="#audit"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-foreground px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shadow-md shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98] group min-h-[44px]"
              >
                <span>Audit my WhatsApp workflow</span>
                <span className="ms-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center text-foreground hover:text-accent border border-border hover:border-accent/50 bg-surface/50 hover:bg-surface px-4 py-2.5 sm:px-4.5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[44px]"
              >
                <span>See systems for riads</span>
                <span className="ms-1.5">&rarr;</span>
              </a>
            </div>

            <div className="pt-0.5 text-[11px] sm:text-xs text-muted/80 flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="text-support">✓</span> 48h diagnostic report
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-support">✓</span> Tailored for Moroccan SMEs
              </span>
            </div>
          </div>
          
          <div className="w-full max-w-[520px] lg:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[660px] mx-auto lg:mx-0">
            <div className="relative rounded-2xl bg-[#0E0D0B]/95 border border-border/80 p-2 sm:p-3 shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-border/30 text-[10px] font-mono tracking-widest text-muted/80">
                <span className="flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  OPERATIONAL CORE
                </span>
                <span className="text-accent/90 font-semibold tracking-wider text-right truncate pl-2">
                  <span className="hidden sm:inline">ALL YOUR TOOLS. ONE ECOSYSTEM.</span>
                  <span className="sm:hidden">ONE ECOSYSTEM</span>
                </span>
              </div>
              <div className="pt-2">
                <HeroGraph />
              </div>
            </div>
            <p className="mt-2.5 text-center text-[11px] sm:text-xs text-muted leading-relaxed max-w-sm mx-auto">
              SANAD connects your website, WhatsApp, bookings, guests, and staff into one clearer operating flow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
