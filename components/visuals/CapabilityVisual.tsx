import React from 'react';
import {
  Globe,
  Wifi,
  Sparkles,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  ArrowRight,
  Brain,
  TrendingUp,
  MapPin,
  Bell,
  Zap,
  Building,
  KeyRound,
  ShieldCheck,
  BarChart2,
} from 'lucide-react';

interface CapabilityVisualProps {
  id: string;
}

export function CapabilityVisual({ id }: CapabilityVisualProps) {
  switch (id) {
    case 'digital-presence':
      return (
        <div className="w-full h-full p-3.5 flex flex-col justify-between text-left select-none">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[10px] font-mono text-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70" />
              <span className="w-2 h-2 rounded-full bg-amber-500/70" />
              <span className="w-2 h-2 rounded-full bg-green-500/70" />
              <span className="ml-1 text-foreground/80 font-sans text-[10px] truncate max-w-[130px]">
                riadalmansour.ma
              </span>
            </div>
            <span className="text-accent text-[9px] px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20">
              DIRECT 0% OTA
            </span>
          </div>

          {/* Mini Storefront Body */}
          <div className="my-auto py-2 flex flex-col gap-2">
            <div className="bg-surface-raised/90 rounded-lg p-2.5 border border-border/70 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-accent block">ROYAL SUITE</span>
                <span className="text-xs font-semibold text-foreground">Atlas Garden View</span>
                <div className="flex items-center gap-1 mt-0.5 text-[10px] text-muted">
                  <span>4.9 ★ (342 reviews)</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-foreground block">3,500 MAD</span>
                <span className="text-[9px] text-muted font-mono">/ night</span>
              </div>
            </div>

            {/* Quick booking action */}
            <div className="flex items-center gap-1.5 text-[10px]">
              <div className="flex-1 bg-surface rounded-md px-2 py-1.5 border border-border/60 text-muted flex items-center justify-between">
                <span>Oct 18 – 22 (4 n)</span>
                <Calendar className="w-3 h-3 text-accent" />
              </div>
              <div className="bg-accent text-background px-3 py-1.5 rounded-md font-semibold text-[10px] flex items-center gap-1 shrink-0">
                <span>Book Direct</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>

          {/* Bottom Trust Tag */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
            <span className="flex items-center gap-1 text-foreground/80">
              <Check className="w-3 h-3 text-accent" /> Instant Confirmation
            </span>
            <span className="text-accent">Mobile + QR</span>
          </div>
        </div>
      );

    case 'operations':
      return (
        <div className="w-full h-full p-3.5 flex flex-col justify-between text-left select-none">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <KeyRound className="w-3 h-3 text-accent" />
              ROOM RACK & SHIFT
            </span>
            <span className="text-green-400 flex items-center gap-1 text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              LIVE SYNC
            </span>
          </div>

          {/* Live Room Matrix */}
          <div className="my-auto py-2 grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-surface-raised/90 p-2 rounded-lg border border-border/70 flex items-center justify-between">
              <div>
                <span className="font-medium text-foreground block text-[11px]">Suite Atlas</span>
                <span className="text-[9px] text-muted font-mono">Schmidt (3p)</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-green-500/15 text-green-400 border border-green-500/25">
                Ready
              </span>
            </div>

            <div className="bg-surface-raised/90 p-2 rounded-lg border border-border/70 flex items-center justify-between">
              <div>
                <span className="font-medium text-foreground block text-[11px]">Ch. Majorelle</span>
                <span className="text-[9px] text-muted font-mono">Turnover</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/25">
                Cleaning
              </span>
            </div>

            <div className="bg-surface-raised/90 p-2 rounded-lg border border-border/70 flex items-center justify-between col-span-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span className="text-[10px] text-muted">
                  Housekeeping Shift: <strong className="text-foreground">12/14 Done</strong>
                </span>
              </div>
              <span className="text-[9px] font-mono text-accent">85% Complete</span>
            </div>
          </div>

          {/* Bottom Dispatch Info */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
            <span className="truncate">Airport transfer dispatched: 14:15</span>
            <span className="text-foreground font-medium shrink-0">Driver: Youssef</span>
          </div>
        </div>
      );

    case 'customer-experience':
      return (
        <div className="w-full h-full p-3.5 flex flex-col justify-between text-left select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <Sparkles className="w-3 h-3 text-accent" />
              IN-SUITE DIGITAL COMPENDIUM
            </span>
            <span className="text-accent text-[9px]">SUITE 04</span>
          </div>

          {/* Mini In-Stay Concierge Content */}
          <div className="my-auto py-2 flex flex-col gap-1.5 text-xs">
            {/* WiFi Card */}
            <div className="bg-surface-raised/90 p-2 rounded-lg border border-border/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-accent shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-muted block">GUEST WI-FI</span>
                  <span className="text-[11px] font-semibold text-foreground">Riad_AlMansour_5G</span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-muted bg-background px-1.5 py-0.5 rounded border border-border">
                Key: medina2026
              </span>
            </div>

            {/* Quick Services */}
            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              <div className="bg-surface p-2 rounded-lg border border-border/60 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Hammam Booking</span>
              </div>
              <div className="bg-surface p-2 rounded-lg border border-border/60 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Medina Walk Guide</span>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
            <span className="flex items-center gap-1 text-foreground/90">
              Breakfast: 08:00 – 10:30 Terrace
            </span>
            <span className="text-accent">QR Powered</span>
          </div>
        </div>
      );

    case 'automation':
      return (
        <div className="w-full h-full p-3.5 flex flex-col justify-between text-left select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <Zap className="w-3 h-3 text-accent" />
              EVENT-DRIVEN WORKFLOW
            </span>
            <span className="text-accent text-[9px] font-semibold">ACTIVE LOGIC</span>
          </div>

          {/* Flow Branch Architecture */}
          <div className="my-auto py-2 flex flex-col gap-1.5">
            {/* Trigger Node */}
            <div className="bg-accent/15 border border-accent/30 rounded-lg p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-[10px] font-mono font-bold text-accent uppercase">
                  Trigger: Booking Deposit Confirmed
                </span>
              </div>
              <span className="text-[9px] font-mono text-muted">Web & Stripe</span>
            </div>

            {/* Actions Stream */}
            <div className="pl-3 border-l-2 border-accent/30 flex flex-col gap-1 text-[10px] font-mono">
              <div className="flex items-center gap-2 text-foreground/90 bg-surface/70 px-2 py-1 rounded border border-border/60">
                <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0" />
                <span className="truncate">➔ Dispatched WhatsApp Welcome & Guide</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/90 bg-surface/70 px-2 py-1 rounded border border-border/60">
                <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0" />
                <span className="truncate">➔ Housekeeping & Butler Alerted</span>
              </div>
            </div>
          </div>

          {/* Bottom Latency & Success */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
            <span className="text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Execution: 0.3s
            </span>
            <span>0 Manual Handoffs</span>
          </div>
        </div>
      );

    case 'ai':
      return (
        <div className="w-full h-full p-3.5 flex flex-col justify-between text-left select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <Brain className="w-3 h-3 text-accent" />
              AI CONCIERGE ASSISTANT
            </span>
            <span className="text-green-400 text-[9px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> 24/7 ONLINE
            </span>
          </div>

          {/* Chat Stream */}
          <div className="my-auto py-2 flex flex-col gap-2">
            {/* Guest Query */}
            <div className="self-end max-w-[88%] bg-surface-raised border border-border rounded-lg rounded-tr-none p-2 text-[11px] text-foreground">
              Can we book an Agafay sunset dinner tonight for 2?
            </div>

            {/* AI Answer */}
            <div className="self-start max-w-[92%] bg-accent/10 border border-accent/25 rounded-lg rounded-tl-none p-2 text-[10.5px] text-foreground/90">
              <span className="text-[9px] font-mono text-accent block mb-0.5">SANAD AI CONCIERGE</span>
              Reserved at Camp Scarabeo for 17:30. Private driver confirmed.
              <div className="mt-1.5 inline-block text-[9px] font-semibold bg-accent text-background px-2 py-0.5 rounded">
                Tap to View Voucher →
              </div>
            </div>
          </div>

          {/* Bottom Latency */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
            <span>French • English • Arabic</span>
            <span className="text-accent">1.2s response</span>
          </div>
        </div>
      );

    case 'data':
      return (
        <div className="w-full h-full p-3.5 flex flex-col justify-between text-left select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <BarChart2 className="w-3 h-3 text-accent" />
              REVENUE & OCCUPANCY INTELLIGENCE
            </span>
            <span className="text-accent text-[9px]">OCTOBER 2026</span>
          </div>

          {/* Stats Grid */}
          <div className="my-auto py-2 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 text-left">
              <div className="bg-surface-raised p-2 rounded-lg border border-border/70">
                <span className="text-[9px] font-mono text-muted block">DIRECT SHARE</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-sm font-bold text-foreground">42%</span>
                  <span className="text-[9px] text-green-400 font-mono font-semibold">+38%</span>
                </div>
              </div>

              <div className="bg-surface-raised p-2 rounded-lg border border-border/70">
                <span className="text-[9px] font-mono text-muted block">PEAK OCCUPANCY</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-sm font-bold text-foreground">94%</span>
                  <span className="text-[9px] text-accent font-mono font-semibold">High</span>
                </div>
              </div>
            </div>

            {/* Sparkline Graphic Banner */}
            <div className="bg-surface p-2 rounded-lg border border-border/60 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-muted">EST. OTA COMMISSIONS SAVED</span>
                <span className="text-xs font-semibold text-accent">+42,000 MAD</span>
              </div>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
          </div>

          {/* Bottom Insight */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted">
            <span>Average Daily Rate: 2,850 MAD</span>
            <span className="text-foreground/90 font-medium">Real-time</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
