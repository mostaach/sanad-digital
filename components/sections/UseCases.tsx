'use client';

import React, { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { useCases } from '@/lib/content/use-cases';

export const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveTab((prev) => (prev + 1) % useCases.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveTab((prev) => (prev - 1 + useCases.length) % useCases.length);
    }
  };

  if (!useCases || useCases.length === 0) return null;

  const currentUseCase = useCases[activeTab];

  return (
    <Section id="use-cases">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Built for how tourism actually works.</h2>

        {/* Tabs */}
        <div 
          className="flex overflow-x-auto no-scrollbar border-b border-border mb-8" 
          role="tablist"
          aria-label="Use cases by business type"
        >
          {useCases.map((useCase, idx) => (
            <button
              key={useCase.id}
              role="tab"
              aria-selected={activeTab === idx}
              aria-controls={`panel-${useCase.id}`}
              id={`tab-${useCase.id}`}
              tabIndex={activeTab === idx ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:bg-surface-raised ${
                activeTab === idx 
                  ? 'text-accent border-b-2 border-accent' 
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id={`panel-${currentUseCase.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentUseCase.id}`}
          tabIndex={0}
          className="focus:outline-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Scenario */}
            <div className="impeccable-card p-6 sm:p-7 bg-surface/90">
              <h3 className="text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                The Scenario
              </h3>
              <blockquote className="text-base sm:text-lg italic text-foreground leading-relaxed">
                &ldquo;{currentUseCase.scenario}&rdquo;
              </blockquote>
            </div>

            {/* Capabilities */}
            <div>
              <h3 className="text-xs font-mono font-semibold text-muted uppercase tracking-wider mb-4">
                What we build
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {currentUseCase.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-2 bg-surface border border-border/80 px-3.5 py-2 rounded-lg text-xs font-mono text-foreground/90 shadow-xs hover:border-accent/40 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/70" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};
