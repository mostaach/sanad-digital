import React from 'react';
import { Check, ArrowRight, ArrowDown } from 'lucide-react';

export const WhatsAppLeadSystem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full text-sm">
      {/* Panel 1: WhatsApp */}
      <div className="bg-surface rounded-lg border border-border overflow-hidden w-full max-w-[240px]">
        <div className="bg-[#075E54] text-white px-3 py-2 text-xs font-medium flex items-center gap-2">
          <span>WhatsApp</span>
        </div>
        <div className="p-3 bg-background flex flex-col gap-2 h-full min-h-[120px]">
          <div className="bg-surface-raised p-2 rounded-lg rounded-tl-none self-start text-xs max-w-[85%] border border-border">
            Hi, do you have availability for Dec 15-19? We are 4 guests.
          </div>
          <div className="bg-[#056162] text-white p-2 rounded-lg rounded-tr-none self-end text-xs max-w-[85%]">
            Checking now...
          </div>
        </div>
      </div>

      <ArrowRight className="hidden md:block text-muted" />
      <ArrowDown className="block md:hidden text-muted" />

      {/* Panel 2: Structured lead */}
      <div className="bg-surface rounded-lg border border-border p-4 w-full max-w-[220px]">
        <div className="flex justify-between items-start mb-3">
          <div className="font-semibold text-sm">Sarah M.</div>
          <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">New Lead</span>
        </div>
        <div className="text-xs text-muted flex flex-col gap-1.5">
          <div><span className="font-medium text-foreground">Dates:</span> Dec 15 – 19</div>
          <div><span className="font-medium text-foreground">Group:</span> 4 guests</div>
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="px-1.5 py-0.5 bg-background border border-border rounded text-[10px]">Desert Tour</span>
            <span className="px-1.5 py-0.5 bg-background border border-border rounded text-[10px]">Riad Stay</span>
          </div>
        </div>
      </div>

      <ArrowRight className="hidden md:block text-muted" />
      <ArrowDown className="block md:hidden text-muted" />

      {/* Panel 3: Routing */}
      <div className="bg-surface rounded-lg border border-border p-4 w-full max-w-[200px]">
        <div className="text-xs text-muted mb-2">Assigned to:</div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-medium">
            K
          </div>
          <div className="font-medium text-sm">Karim</div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-green-500 font-medium">
          <Check className="w-3 h-3" />
          Follow-up scheduled
        </div>
      </div>
    </div>
  );
};
