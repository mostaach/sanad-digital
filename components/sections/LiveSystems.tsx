import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  Compass,
  LayoutDashboard,
  Map as MapIcon,
  MessageCircle,
  Sparkles,
  Wifi,
  Clock,
  Car,
  CheckCircle2,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { liveProjects, type LiveProject } from '@/lib/content/proof';

type ProjectBentoConfig = {
  Icon: LucideIcon;
  gridClass: string;
  badge: string;
  previewType: 'guide' | 'booking' | 'dispatch' | 'wellness' | 'journey';
};

const projectConfigs: Record<string, ProjectBentoConfig> = {
  'marrakech-guest-guide': {
    Icon: BookOpenText,
    gridClass: 'lg:col-span-8',
    badge: 'FLAGSHIP • IN-STAY',
    previewType: 'guide',
  },
  'room-swift': {
    Icon: CalendarDays,
    gridClass: 'lg:col-span-4',
    badge: 'BOOKING ENGINE',
    previewType: 'booking',
  },
  'agafay-journey-os': {
    Icon: LayoutDashboard,
    gridClass: 'lg:col-span-4',
    badge: 'DAILY OPERATIONS',
    previewType: 'dispatch',
  },
  'hammam-semlalia': {
    Icon: Sparkles,
    gridClass: 'lg:col-span-4',
    badge: 'WELLNESS PRESENCE',
    previewType: 'wellness',
  },
  safaratlas: {
    Icon: MapIcon,
    gridClass: 'lg:col-span-4',
    badge: 'JOURNEY BUILDER',
    previewType: 'journey',
  },
};

function BentoMicroPreview({ type }: { type: ProjectBentoConfig['previewType'] }) {
  if (type === 'guide') {
    return (
      <div className="rounded-xl border border-border/80 bg-background/70 p-3 sm:p-3.5 space-y-2 text-xs font-mono">
        <div className="flex items-center justify-between border-b border-border/50 pb-2">
          <span className="text-[10px] text-accent font-semibold tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>RIAD GUEST KIOSK • LIVE</span>
          </span>
          <span className="text-[10px] text-muted">ROOM 04</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="flex items-center gap-2 rounded-md border border-border/60 bg-surface/80 p-2">
            <Wifi className="h-3.5 w-3.5 text-accent shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-muted leading-none">Wi-Fi Access</div>
              <div className="text-[11px] font-semibold text-foreground truncate">Riad_Guest_5G</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-border/60 bg-surface/80 p-2">
            <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-muted leading-none">Breakfast</div>
              <div className="text-[11px] font-semibold text-foreground truncate">08:30 Rooftop</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-border/60 bg-surface/80 p-2">
            <MessageCircle className="h-3.5 w-3.5 text-accent shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-muted leading-none">Concierge</div>
              <div className="text-[11px] font-semibold text-emerald-400 truncate">WhatsApp 24/7</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-border/60 bg-surface/80 p-2">
            <Car className="h-3.5 w-3.5 text-accent shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-muted leading-none">Medina Taxi</div>
              <div className="text-[11px] font-semibold text-foreground truncate">Fixed Rate Airport</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'booking') {
    return (
      <div className="rounded-xl border border-border/80 bg-background/70 p-3 space-y-1.5 text-xs font-mono">
        <div className="flex items-center justify-between text-[10px] border-b border-border/50 pb-1.5 text-muted">
          <span className="text-accent uppercase font-semibold">DIRECT RATE FLOW</span>
          <span className="text-emerald-400 font-semibold">0% OTA FEE</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
          <span className="text-muted">Suite</span>
          <span className="font-semibold text-foreground">Junior Patio Suite</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
          <span className="text-muted">Stay Dates</span>
          <span className="font-semibold text-accent">Oct 18 — 22 • 4N</span>
        </div>
      </div>
    );
  }

  if (type === 'dispatch') {
    return (
      <div className="rounded-xl border border-border/80 bg-background/70 p-3 space-y-1.5 text-xs font-mono">
        <div className="flex items-center justify-between text-[10px] border-b border-border/50 pb-1.5 text-muted">
          <span className="text-accent uppercase font-semibold">DISPATCH QUEUE</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-400" /> ACTIVE
          </span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
          <span className="text-muted">14:30 Excursion</span>
          <span className="font-semibold text-foreground">Agafay Sunset • 6p</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
          <span className="text-muted">Driver Unit</span>
          <span className="font-semibold text-accent">Toyota 4x4 #03 (En Route)</span>
        </div>
      </div>
    );
  }

  if (type === 'wellness') {
    return (
      <div className="rounded-xl border border-border/80 bg-background/70 p-3 space-y-1.5 text-xs font-mono">
        <div className="flex items-center justify-between text-[10px] border-b border-border/50 pb-1.5 text-muted">
          <span className="text-accent uppercase font-semibold">RITUAL BOOKING</span>
          <span className="text-emerald-400">INSTANT HANDOFF</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
          <span className="text-muted">Ritual</span>
          <span className="font-semibold text-foreground">Royal Hammam & Argan</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
          <span className="text-muted">Direct Channel</span>
          <span className="font-semibold text-accent">WhatsApp 1-Click Link</span>
        </div>
      </div>
    );
  }

  // journey builder
  return (
    <div className="rounded-xl border border-border/80 bg-background/70 p-3 space-y-1.5 text-xs font-mono">
      <div className="flex items-center justify-between text-[10px] border-b border-border/50 pb-1.5 text-muted">
        <span className="text-accent uppercase font-semibold">ITINERARY BUILDER</span>
        <span className="text-foreground">CUSTOM 4x4</span>
      </div>
      <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
        <span className="text-muted">Circuit</span>
        <span className="font-semibold text-foreground">Marrakech → Merzouga</span>
      </div>
      <div className="flex items-center justify-between rounded-md border border-border/60 bg-surface/80 px-2.5 py-1.5 text-[11px]">
        <span className="text-muted">Modules</span>
        <span className="font-semibold text-accent">Desert Camp + High Atlas</span>
      </div>
    </div>
  );
}

export function LiveSystems() {
  if (liveProjects.length === 0) {
    return null;
  }

  return (
    <Section id="projects" background="surface" className="py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-2.5 block text-xs font-mono uppercase tracking-widest text-accent">
              PROVEN DEPLOYMENTS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Live Systems & Case Studies
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
              Inspect real production systems built for Moroccan tourism businesses — from in-room riad guest guides to desert dispatch boards and booking flows.
            </p>
          </div>

          <a
            href="#audit"
            className="inline-flex min-h-[40px] w-fit items-center justify-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-xs sm:text-sm font-semibold text-accent transition-all duration-200 hover:border-accent hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Plan a custom system &rarr;
          </a>
        </div>

        {/* Bento Grid — 12-Column Responsive Layout (Row 1: 8 + 4 = 12 | Row 2: 4 + 4 + 4 = 12) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {liveProjects.map((project) => {
            const config = projectConfigs[project.id] ?? {
              Icon: Compass,
              gridClass: 'lg:col-span-4',
              badge: project.stage.toUpperCase(),
              previewType: 'booking' as const,
            };
            const Icon = config.Icon;
            const isHero = config.gridClass.includes('lg:col-span-8');

            return (
              <article
                key={project.id}
                className={`impeccable-card group relative flex flex-col justify-between overflow-hidden p-5 sm:p-6 ${config.gridClass}`}
              >
                {/* Impeccable CAD Blueprint Background Texture */}
                <div className="pointer-events-none absolute inset-0 bg-cad-grid opacity-15" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60" />
                <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-accent/[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Metadata Row */}
                    <div className="mb-3.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent font-semibold">
                          {config.badge}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-muted">
                          {project.role}
                        </span>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Project Title & Tagline */}
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                        {project.name}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm font-medium text-accent">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Layout Split: Hero vs Standard Card */}
                    {isHero ? (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-3">
                        <div className="md:col-span-6 space-y-2.5">
                          <p className="text-xs sm:text-sm text-muted leading-relaxed">
                            {project.description}
                          </p>
                          <div className="space-y-1.5 pt-1">
                            {project.features.map((feature) => (
                              <div key={feature.title} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                <span className="text-xs text-foreground/90">
                                  <strong className="font-medium text-foreground">{feature.title}:</strong>{' '}
                                  <span className="text-muted">{feature.description}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-6">
                          <BentoMicroPreview type={config.previewType} />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 my-2.5">
                        <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        <BentoMicroPreview type={config.previewType} />
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Bar: Tags + Action Link */}
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, isHero ? 4 : 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border/70 bg-surface-raised/80 px-2 py-0.5 text-[10px] font-mono text-muted group-hover:border-accent/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-200 shadow-sm shadow-accent/20 hover:bg-accent/90 hover:shadow-md hover:shadow-accent/35 active:scale-[0.98] shrink-0"
                      aria-label={`Open live demo for ${project.name}`}
                    >
                      <span>Open live demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-xl border border-border/80 bg-surface/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted text-center sm:text-left">
            Every system is built modular: start with one high-impact workflow, then connect direct bookings, guest messaging, and operations.
          </p>
          <a
            href="#audit"
            className="inline-flex min-h-[38px] shrink-0 items-center justify-center rounded-lg border border-accent/40 px-4 py-2 text-xs sm:text-sm font-semibold text-accent transition-colors hover:border-accent hover:text-foreground"
          >
            Audit your system needs &rarr;
          </a>
        </div>
      </Container>
    </Section>
  );
}
