import React from 'react';
import { Brain, Send } from 'lucide-react';

export const AIConcierge = () => {
  return (
    <div className="w-full max-w-[320px] mx-auto bg-surface rounded-lg border border-border flex flex-col overflow-hidden text-sm h-[400px]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-3 bg-background/50">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent relative">
          <Brain className="w-4 h-4" />
          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-surface"></div>
        </div>
        <div>
          <div className="font-semibold text-sm leading-tight">AI Concierge</div>
          <div className="text-[10px] text-muted">Always online</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-background">
        
        {/* Guest Message */}
        <div className="flex gap-2 self-end max-w-[85%]">
          <div className="bg-surface-raised rounded-lg rounded-tr-none p-3 text-xs border border-border">
            What time is checkout? And can you book the hammam for 3pm?
          </div>
          <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-[10px] font-medium shrink-0 mt-1">
            G
          </div>
        </div>

        {/* AI Message */}
        <div className="flex gap-2 self-start max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
            <Brain className="w-3 h-3" />
          </div>
          <div className="bg-accent/5 rounded-lg rounded-tl-none p-3 text-xs border border-accent/10">
            Checkout is at 11:00 AM. I&apos;ve sent a hammam booking request for 3:00 PM to our spa team. They&apos;ll confirm within 15 minutes.
          </div>
        </div>

        {/* System Message */}
        <div className="text-[10px] text-muted italic text-center my-1">
          Booking request forwarded to spa staff
        </div>

        {/* Staff Message */}
        <div className="flex gap-2 self-start max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-surface-raised flex items-center justify-center text-muted shrink-0 mt-1 text-[10px] font-medium border border-border">
            F
          </div>
          <div className="bg-surface rounded-lg rounded-tl-none p-3 text-xs border border-border relative">
            <div className="text-[9px] text-muted mb-1 font-medium">Fatima — Spa</div>
            Confirmed! Your hammam session is booked for 3:00 PM. Enjoy!
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border bg-surface">
        <div className="bg-background rounded-full border border-border flex items-center px-3 py-1.5">
          <input 
            type="text" 
            placeholder="Ask about your stay..." 
            className="flex-1 bg-transparent text-xs outline-none"
            readOnly
          />
          <button className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
            <Send className="w-3 h-3 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
