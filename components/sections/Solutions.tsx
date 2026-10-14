'use client';

import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { solutions } from '@/lib/content/solutions';
import {
  Globe,
  LayoutDashboard,
  MessageSquare,
  Zap,
  Brain,
  BarChart3,
  LucideProps,
} from 'lucide-react';
import { HairlineFigure, type FigureName } from '@/components/visuals/HairlineFigure';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Globe,
  LayoutDashboard,
  MessageSquare,
  Zap,
  Brain,
  BarChart3,
};

const figureMap: Record<string, FigureName> = {
  'digital-presence': 'digital-presence',
  'operations': 'operations',
  'customer-experience': 'customer-experience',
  'automation': 'branches',
  'ai': 'terminal',
  'data': 'plot',
};

export function Solutions() {
  return (
    <Section id="solutions">
      <Container>
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
            CAPABILITIES & SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What we build
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto mt-3">
            Connected digital infrastructure designed specifically around how Moroccan tourism operations run.
          </p>
        </div>

        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = iconMap[solution.icon] || LayoutDashboard;
            const figureName = figureMap[solution.id] || 'cabinet';

            return (
              <div
                key={solution.id}
                className="impeccable-card group flex w-[82vw] shrink-0 snap-start flex-col justify-between p-6 sm:w-auto sm:shrink"
              >
                <div>
                  {/* Interactive Isometric Hairline Apparatus Viewport */}
                  <div className="relative w-full aspect-[5/4] mb-5 rounded-lg bg-background border border-border/80 group-hover:border-accent/50 flex items-center justify-center transition-all duration-300 overflow-hidden shadow-inner">
                    {/* Subtle corner crosshairs */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-accent/40 pointer-events-none group-hover:border-accent transition-colors" />

                    {/* Ambient subtle warm backlight */}
                    <div className="absolute inset-0 bg-radial from-accent/[0.1] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <HairlineFigure
                      name={figureName}
                      variant="brand"
                      plate="bg"
                      intensity={0.65}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-accent w-4 h-4 shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border/60">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono bg-accent-soft text-accent border border-accent/20 px-2.5 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-foreground px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 shadow-md shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98] group"
          >
            <span>Find the best system to start with</span>
            <span className="ms-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}
