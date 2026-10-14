import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { LayerStack } from '@/components/visuals/LayerStack';

export function Infrastructure() {
  return (
    <Section id="infrastructure" background="surface">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            One digital layer behind your business.
          </h2>
          <p className="text-lg text-muted">
            From the moment a guest discovers you to their final checkout and beyond, SANAD connects every step of the journey through a unified digital infrastructure.
          </p>
        </div>
        
        <LayerStack />

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-muted">
            The goal is simple: fewer manual handoffs, clearer guest communication, and one shared view of daily work.
          </p>
          <a
            href="#audit"
            className="mt-5 inline-flex items-center justify-center rounded-md border border-accent/30 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent hover:text-foreground"
          >
            Map my guest experience
          </a>
        </div>
      </Container>
    </Section>
  );
}
