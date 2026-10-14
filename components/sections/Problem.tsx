import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { FragmentedGraph } from '@/components/visuals/FragmentedGraph';
import { HairlineFigure } from '@/components/visuals/HairlineFigure';

export function Problem() {
  return (
    <Section id="problem">
      <Container className="text-center">
        <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
          THE GAP IN MOROCCAN TOURISM
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Your business is digital. Your systems aren&apos;t.
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
          Bookings scattered across WhatsApp messages, guest information buried in notebooks, manual staff coordination, and disjointed tools that don&apos;t talk to each other.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-8">
          <div className="lg:col-span-8">
            <FragmentedGraph />
          </div>

          <div className="relative lg:col-span-4 bg-surface border border-border/80 hover:border-accent/40 rounded-xl p-5 text-left transition-colors duration-300">
            {/* Corner L-bracket crosshairs */}
            <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-accent/40 pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-accent/40 pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-accent/40 pointer-events-none" />
            <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-accent/40 pointer-events-none" />

            <div className="w-full max-w-[200px] mx-auto py-1">
              <HairlineFigure
                name="plug"
                variant="brand"
                plate="surface"
                intensity={0.75}
                className="w-full"
              />
            </div>
            <div className="border-t border-border/80 pt-3 mt-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">
                  DISCONNECTED TOOLS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/80 animate-pulse" />
              </div>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Without a unified digital layer, tools reach toward each other but stop short. Staff end up copy-pasting between chat and paper.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-accent/25 bg-accent-soft px-5 py-4">
          <p className="text-accent font-medium text-lg">
            Start with one painful workflow. Connect the rest over time.
          </p>
        </div>
      </Container>
    </Section>
  );
}
