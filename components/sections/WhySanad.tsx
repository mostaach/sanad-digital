import React from 'react';
import { Section } from '@/components/layout/Section';
import { Building2, Link as LinkIcon, Wrench, MapPin, Users } from 'lucide-react';
import { proof, testimonials } from '@/lib/content/proof';
import { HairlineFigure } from '@/components/visuals/HairlineFigure';

export const WhySanad = () => {
  const points = [
    {
      title: "Built around how tourism operations actually run",
      icon: Building2,
      subtext: "Not generic templates."
    },
    {
      title: "Connects the tools you already use",
      icon: LinkIcon,
      subtext: "Smooth integrations."
    },
    {
      title: "Practical systems, not a pile of tools",
      icon: Wrench,
      subtext: "Designed for real workflows."
    },
    {
      title: "Local market understanding",
      icon: MapPin,
      subtext: "Moroccan context, WhatsApp-first guests, seasonal pressure."
    },
    {
      title: "One technical partner from audit to build to improvement",
      icon: Users,
      subtext: "Long-term support."
    }
  ];

  return (
    <Section id="about" background="surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">Why SANAD</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Text content & Foundation Plinth */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Moroccan tourism is growing. But many businesses still run critical operations on disconnected tools — WhatsApp for bookings, spreadsheets for tracking, paper for check-ins. SANAD builds the digital layer that connects these pieces into systems that actually work together.
              </p>
            </div>

            {/* The SANAD Foundation Plinth Figure */}
            <div className="impeccable-card relative p-6 overflow-hidden group bg-surface-raised/90">
              {/* Corner L-bracket crosshairs */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-accent/40 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-accent/40 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-accent/40 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-accent/40 pointer-events-none" />

              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>سَنَد // SUPPORT LAYER</span>
                </span>
                <span className="text-[10px] font-mono text-muted bg-surface px-2 py-0.5 rounded border border-border">
                  81 ACTIVE PILLARS
                </span>
              </div>

              <div className="w-full max-w-[260px] mx-auto py-1">
                <HairlineFigure
                  name="terrain"
                  variant="terracotta"
                  plate="raised"
                  intensity={0.7}
                  className="w-full"
                />
              </div>

              <p className="text-[11px] text-muted text-center mt-3 font-mono">
                سَنَد represents support, foundation plinth, and technical backing.
              </p>
            </div>
          </div>

          {/* Points list */}
          <div className="flex flex-col gap-4">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={i} className="flex gap-4 items-start p-3 rounded-xl border border-transparent hover:border-border/60 hover:bg-surface/50 transition-all duration-200">
                  <div className="mt-0.5 shrink-0 w-10 h-10 rounded-xl bg-accent-soft border border-accent/25 flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base">{point.title}</h3>
                    {point.subtext && <p className="text-sm text-muted mt-1 leading-relaxed">{point.subtext}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operator Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border/80">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <h3 className="text-xs font-mono font-semibold text-accent uppercase tracking-widest text-center">
                RETOURS D&apos;EXPÉRIENCE OPÉRATEURS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/80 bg-surface/90 p-5 sm:p-6 flex flex-col justify-between hover:border-accent/40 transition-colors shadow-xs"
                >
                  <div>
                    {t.metric && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-[11px] font-mono text-accent font-semibold mb-3">
                        {t.metric}
                      </span>
                    )}
                    <p className="text-sm text-foreground/90 leading-relaxed italic mb-4">
                      &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-foreground">{t.author}</div>
                      <div className="text-muted text-[11px]">{t.role} · {t.property}</div>
                    </div>
                    <div className="text-muted/70 text-[11px] font-mono">{t.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Proof (conditionally rendered) */}
        {proof && proof.length > 0 && (
          <div className="pt-8 border-t border-border/60">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <h3 className="text-xs font-mono font-semibold text-muted uppercase tracking-widest text-center">
                DEPLOYED & BUILT FOR MOROCCAN TOURISM BRANDS
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {proof.map((item, i) => (
                item.url ? (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface text-xs font-mono text-muted hover:text-foreground transition-all duration-200 group shadow-xs hover:shadow-sm"
                  >
                    <span>{item.name}</span>
                    <span className="text-accent text-[10px] group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                ) : (
                  <div key={i} className="inline-flex items-center px-3.5 py-1.5 rounded-lg border border-border/80 bg-surface/80 text-xs font-mono text-muted">
                    <span>{item.name}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};
