'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Search,
  Filter,
  LayoutDashboard,
  Zap,
  Brain,
  ChevronDown,
  Maximize2,
  X,
} from 'lucide-react';

interface LayerItem {
  id: string;
  number: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  subtitle: string;
  caption: string;
  tags: string[];
  image: string;
}

const layers: LayerItem[] = [
  {
    id: 'discover',
    number: '01',
    name: 'DISCOVER',
    icon: Search,
    subtitle: 'Guest discovery & positioning',
    caption: 'Exploded multi-surface discovery across web, search, social, and QR physical touchpoints.',
    tags: ['Website', 'Google', 'Social', 'SEO', 'QR Guides'],
    image: '/images/layers/discover.png',
  },
  {
    id: 'capture',
    number: '02',
    name: 'CAPTURE',
    icon: Filter,
    subtitle: 'Inquiry & booking intake',
    caption: 'Precision intake sieves separating incoming guest inquiries into structured bookings and qualified leads.',
    tags: ['Forms', 'WhatsApp', 'Bookings', 'Leads'],
    image: '/images/layers/capture.png',
  },
  {
    id: 'operate',
    number: '03',
    name: 'OPERATE',
    icon: LayoutDashboard,
    subtitle: 'Core operational tools',
    caption: 'Modular operational blade rack pulling out staff workflows, room statuses, and schedules on rails.',
    tags: ['Dashboards', 'Staff workflows', 'Guest management', 'Reservations'],
    image: '/images/layers/operate.png',
  },
  {
    id: 'automate',
    number: '04',
    name: 'AUTOMATE',
    icon: Zap,
    subtitle: 'Connected event triggers',
    caption: 'Decision trees and trigger-based branches executing instant confirmations, guest notifications, and syncs.',
    tags: ['Notifications', 'Follow-ups', 'Reports', 'Workflows'],
    image: '/images/layers/automate.png',
  },
  {
    id: 'intelligence',
    number: '05',
    name: 'INTELLIGENCE',
    icon: Brain,
    subtitle: 'AI concierge & analytics',
    caption: 'Neural dot matrix with dynamic memory answering guest queries and surfacing revenue patterns.',
    tags: ['AI assistants', 'AI concierge', 'Analytics', 'Recommendations'],
    image: '/images/layers/intelligence.png',
  },
];

export function LayerStack() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('discover');
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('discover');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const selectedLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      {/* Desktop Layout (Split Grid with Visual Stage) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
        {/* Left Column: Connected Spine & Layer Cards (5 cols) */}
        <div className="col-span-5 relative flex flex-col gap-3.5">
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
                className={`relative flex items-center bg-surface-raised border rounded-xl p-4 pl-12 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? 'border-accent shadow-[0_0_24px_rgba(200,100,60,0.18)] bg-surface-raised translate-x-1'
                    : 'border-border hover:border-accent/40 opacity-75 hover:opacity-100'
                }`}
              >
                {/* Connector Node on Spine */}
                <div
                  className={`absolute left-4.5 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-accent scale-125 ring-4 ring-accent/20'
                      : 'bg-muted/40'
                  }`}
                />

                {/* Layer Title & Details */}
                <div className="flex flex-col flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-mono font-bold text-base">
                      {layer.number}
                    </span>
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    <h3 className="font-bold text-foreground tracking-wider text-sm truncate">
                      {layer.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted mt-1 line-clamp-1">{layer.subtitle}</p>
                </div>

                {/* Visual Status Indicator */}
                <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
                  16:9 HD
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column: Stage with Master Visual Render (7 cols) */}
        <div className="col-span-7 sticky top-24">
          <div className="bg-surface-raised border border-border/80 hover:border-accent/40 rounded-2xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm transition-colors duration-300">
            {/* Corner L-bracket crosshairs */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-accent/40 pointer-events-none" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-accent/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-accent/40 pointer-events-none" />

            {/* Ambient subtle glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

            {/* Stage Header */}
            <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-3">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
                  LAYER ARCHITECTURE // {selectedLayer.number}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  {selectedLayer.name} <span className="text-muted font-normal text-xs ml-1.5">• {selectedLayer.subtitle}</span>
                </h4>
              </div>

              {/* Lightbox / Expand Action */}
              <button
                type="button"
                onClick={() =>
                  setLightboxImage({
                    src: selectedLayer.image,
                    title: `${selectedLayer.number} — ${selectedLayer.name}`,
                    subtitle: selectedLayer.subtitle,
                  })
                }
                title="Inspect Full Resolution"
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-surface hover:bg-surface-raised border border-border hover:border-accent/40 rounded-lg text-xs font-mono text-muted hover:text-accent transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>EXPAND</span>
              </button>
            </div>

            {/* Stage Body */}
            <div className="w-full relative flex items-center justify-center rounded-xl overflow-hidden bg-black/80 border border-border/80 shadow-inner">
              <div
                className="relative w-full aspect-video overflow-hidden group cursor-pointer flex items-center justify-center"
                onClick={() =>
                  setLightboxImage({
                    src: selectedLayer.image,
                    title: `${selectedLayer.number} — ${selectedLayer.name}`,
                    subtitle: selectedLayer.subtitle,
                  })
                }
              >
                <Image
                  src={selectedLayer.image}
                  alt={`${selectedLayer.name} - ${selectedLayer.subtitle}`}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
                {/* Subtle hover overlay with inspect cue */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3.5 pointer-events-none">
                  <span className="text-xs text-foreground font-medium flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                    <Maximize2 className="w-3.5 h-3.5 text-accent" />
                    Click to inspect full resolution
                  </span>
                  <span className="text-[10px] font-mono text-accent bg-black/80 px-2.5 py-1 rounded-md border border-accent/25">
                    16:9 HD
                  </span>
                </div>
              </div>
            </div>

            {/* Mechanism Caption */}
            <div className="border-t border-border/60 pt-4 mt-3">
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

      {/* Mobile Layout (Accordion with Visual Figures) */}
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

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
                    16:9 HD
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 border-t border-border/60 bg-surface/40 flex flex-col gap-3">
                  <div
                    className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/80 my-2 cursor-pointer bg-black/60"
                    onClick={() =>
                      setLightboxImage({
                        src: layer.image,
                        title: `${layer.number} — ${layer.name}`,
                        subtitle: layer.subtitle,
                      })
                    }
                  >
                    <Image
                      src={layer.image}
                      alt={layer.name}
                      width={1280}
                      height={720}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm p-1.5 rounded border border-white/15 text-accent">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-surface-raised border border-border rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-surface/80 backdrop-blur-sm">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {lightboxImage.title}
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  {lightboxImage.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-lg bg-surface border border-border text-muted hover:text-foreground hover:border-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Fullscreen Image */}
            <div className="p-2 sm:p-4 bg-black/95 flex items-center justify-center">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                width={1920}
                height={1080}
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
