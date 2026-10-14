import React from 'react';
import { Wifi, Coffee, Sparkles, Car, MapPin, MessageCircle } from 'lucide-react';

export const RiadGuestGuide = () => {
  return (
    <div className="rounded-2xl border-2 border-border bg-background p-1 w-full max-w-[280px] mx-auto shadow-xl">
      <div className="rounded-xl bg-surface overflow-hidden h-full flex flex-col">
        {/* Top bar */}
        <div className="flex justify-between items-center px-4 py-2 text-[10px] text-muted">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">
          <h4 className="font-semibold text-lg leading-tight mb-2">Welcome to Riad Jardin Secret</h4>

          <div className="bg-surface-raised rounded-lg p-3 flex gap-3 items-center">
            <Wifi className="w-4 h-4 text-accent shrink-0" />
            <div className="text-xs">
              <div className="font-medium">RiadJardin_Guest</div>
              <div className="text-muted">jardin2024</div>
            </div>
          </div>

          <div className="bg-surface-raised rounded-lg p-3 flex gap-3 items-center">
            <Coffee className="w-4 h-4 text-accent shrink-0" />
            <div className="text-xs">
              <div className="font-medium">Breakfast</div>
              <div className="text-muted">8:00 – 10:30 on the terrace</div>
            </div>
          </div>

          <button className="bg-surface-raised rounded-lg p-3 flex gap-3 items-center text-left hover:bg-background transition-colors">
            <Sparkles className="w-4 h-4 text-accent shrink-0" />
            <span className="text-xs font-medium">Book your session</span>
          </button>

          <button className="bg-surface-raised rounded-lg p-3 flex gap-3 items-center text-left hover:bg-background transition-colors">
            <Car className="w-4 h-4 text-accent shrink-0" />
            <span className="text-xs font-medium">Request a taxi</span>
          </button>

          <div className="mt-2">
            <div className="text-xs font-semibold mb-2">Recommendations</div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-xs">
                <MapPin className="w-3 h-3 text-muted" />
                <span>Jemaa el-Fna · 8 min walk</span>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <MapPin className="w-3 h-3 text-muted" />
                <span>Majorelle Garden · 15 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto p-4 pt-0">
          <button className="w-full bg-[#25D366] text-white rounded-lg p-3 flex gap-2 justify-center items-center font-medium text-xs hover:bg-[#20bd5a] transition-colors">
            <MessageCircle className="w-4 h-4" />
            Message reception on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};
