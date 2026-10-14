'use client';

import React, { useState } from 'react';
import { Search, Filter, LayoutDashboard, Zap, Brain, ChevronDown, Move } from 'lucide-react';
import { HairlineFigure, type FigureName } from '@/components/visuals/HairlineFigure';

interface LayerItem {
  id: string;
  number: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  figure: FigureName;
  subtitle: string;
  caption: string;
  tags: string[];
}

const layers: LayerItem[] = [
  {
    id: 'discover',
    number: '01',
    name: 'DISCOVER',
    icon: Search,
    figure: 'exploded',
    subtitle: 'Guest discovery & positioning',
    caption: 'Exploded multi-surface discovery across web, search, social, and QR physical touchpoints.',
    tags: ['Website', 'Google', 'Social', 'SEO', 'QR Guides'],
  },
  {
    id: 'capture',
    number: '02',
    name: 'CAPTURE',
    icon: Filter,
    figure: 'sieve',
    subtitle: 'Inquiry & booking intake',
    caption: 'Precision intake sieves separating incoming guest inquiries into structured bookings and qualified leads.',
    tags: ['Forms', 'WhatsApp', 'Bookings', 'Leads'],
  },
  {
    id: 'operate',
    number: '03',
    name: 'OPERATE',
    icon: LayoutDashboard,
    figure: 'cabinet',
    subtitle: 'Core operational tools',
    caption: 'Modular operational blade rack pulling out staff workflows, room statuses, and schedules on rails.',
    tags: ['Dashboards', 'Staff workflows', 'Guest management', 'Reservations'],
  },
  {
    id: 'automate',
    number: '04',
    name: 'AUTOMATE',
    icon: Zap,
    figure: 'branches',
    subtitle: 'Connected event triggers',
    caption: 'Decision trees and trigger-based branches executing instant confirmations, guest notifications, and syncs.',
    tags: ['Notifications', 'Follow-ups', 'Reports', 'Workflows'],
  },
  {
    id: 'intelligence',
    number: '05',
    name: 'INTELLIGENCE',
    icon: Brain,
    figure: 'phosphor',
    subtitle: 'AI concierge & analytics',
    caption: 'Neural dot matrix with dynamic memory answering guest queries and surfacing revenue patterns.',
    tags: ['AI assistants', 'AI concierge', 'Analytics', 'Recommendations'],
  },
];

export function LayerStack() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('discover');
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('discover');

  const selectedLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      {/* Desktop Layout (Grid with Interactive Isometric Stage) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
        {/* Left Column: Connected Spine & Layer Cards */}
        <div className="col-span-7 relative flex flex-col gap-4">
          {/* Vertical connecting spine line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-accent/20 rounded-full pointer-events-none" />

          {layers.map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayerId === layer.id;

            return (
              <div
                key={layer.id}
                role="button"
                tabIndex={0}
                aria-label={`Select layer ${layer.number}: ${layer.name}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedLayerId(layer.id)}
                onMouseEnter={() => setSelectedLayerId(layer.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLayerId(layer.id);
                  }
                }}
                className={`relative flex items-center bg-surface-raised border rounded-xl p-5 pl-14 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? 'border-accent shadow-[0_0_24px_rgba(200,100,60,0.15)] bg-surface-raised translate-x-1'
                    : 'border-border hover:border-accent/40 opacity-75 hover:opacity-100'
                }`}
              >
                {/* Connector Node on Spine */}
                <div
                  className={`absolute left-5 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-accent scale-125 ring-4 ring-accent/20'
                      : 'bg-muted/40'
                  }`}
                />

                {/* Layer Title & Details */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="text-accent font-mono font-bold text-lg">
                      {layer.number}
                    </span>
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground tracking-wider text-base">
                      {layer.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{layer.subtitle}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[280px]">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                        isSelected
                          ? 'bg-accent/15 text-accent font-medium'
                          : 'bg-surface text-muted/80'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Interactive Isometric Hairline Stage */}
        <div className="col-span-5 sticky top-28">
          <div className="bg-surface-raised border border-border/80 hover:border-accent/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm transition-colors duration-300">
            {/* Corner L-bracket crosshairs */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-accent/40 pointer-events-none" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-accent/40 pointer-events-none" />

            {/* Ambient subtle glow */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

            {/* Stage Header */}
            <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
                  INFRASTRUCTURE FIGURE // {selectedLayer.number}
                </span>
                <h4 className="text-lg font-bold text-foreground">
                  {selectedLayer.name}
                </h4>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-muted/80 font-mono bg-surface px-2.5 py-1 rounded-md border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>INTERACTIVE 3D</span>
              </div>
            </div>

            {/* Hairline Isometric Figure Viewport */}
            <div className="w-full max-w-[340px] mx-auto py-2">
              <HairlineFigure
                key={selectedLayer.figure}
                name={selectedLayer.figure}
                variant="brand"
                plate="raised"
                intensity={0.65}
                className="w-full"
              />
            </div>

            {/* Mechanism Caption */}
            <div className="border-t border-border/60 pt-4 mt-2">
              <p className="text-xs text-muted leading-relaxed font-sans">
                {selectedLayer.caption}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {selectedLayer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-background border border-border text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Accordion with Embedded Isometric Figures) */}
      <div className="lg:hidden flex flex-col gap-3">
        {layers.map((layer) => {
          const Icon = layer.icon;
          const isExpanded = mobileExpandedId === layer.id;

          return (
            <div
              key={layer.id}
              className={`border rounded-xl bg-surface-raised overflow-hidden transition-colors ${
                isExpanded ? 'border-accent/60' : 'border-border'
              }`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-4 focus:outline-none"
                onClick={() =>
                  setMobileExpandedId(isExpanded ? null : layer.id)
                }
              >
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono font-bold text-sm">
                    {layer.number}
                  </span>
                  <Icon className="w-4 h-4 text-accent" />
                  <div className="text-left">
                    <span className="font-bold text-foreground block text-sm">
                      {layer.name}
                    </span>
                    <span className="text-[11px] text-muted block">
                      {layer.subtitle}
                    </span>
                  </div>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 border-t border-border/60 bg-surface/40 flex flex-col gap-3">
                  {/* Interactive Miniature Isometric Figure */}
                  <div className="w-full max-w-[240px] mx-auto py-2">
                    <HairlineFigure
                      name={layer.figure}
                      variant="brand"
                      plate="surface"
                      intensity={0.5}
                      className="w-full"
                    />
                  </div>

                  <p className="text-xs text-muted leading-relaxed">
                    {layer.caption}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
