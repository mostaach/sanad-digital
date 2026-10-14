import React from 'react';
import { Calendar } from 'lucide-react';

export const BookingDashboard = () => {
  return (
    <div className="bg-surface rounded-lg border border-border overflow-hidden w-full max-w-[600px] text-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2 bg-background/50">
        <Calendar className="w-4 h-4 text-muted" />
        <span className="font-medium">Today — Thursday, Dec 15</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {/* Arrivals & Departures */}
        <div className="bg-surface p-4 flex flex-col gap-4">
          <div>
            <h4 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">Arrivals</h4>
            <div className="flex flex-col gap-2">
              <div className="bg-background rounded p-2 text-xs border border-border">
                <div className="font-medium mb-1">Suite Atlas</div>
                <div className="text-muted flex justify-between">
                  <span>Schmidt family (3)</span>
                  <span className="text-green-500">Confirmed</span>
                </div>
              </div>
              <div className="bg-background rounded p-2 text-xs border border-border">
                <div className="font-medium mb-1">Chambre Jardin</div>
                <div className="text-muted flex justify-between">
                  <span>L. Dubois</span>
                  <span className="text-yellow-500">Pending</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">Departures</h4>
            <div className="bg-background rounded p-2 text-xs border border-border opacity-75">
              <div className="font-medium mb-1">Chambre Terrasse</div>
              <div className="text-muted flex justify-between">
                <span>M. Johnson</span>
                <span className="text-muted">Checked out</span>
              </div>
            </div>
          </div>
        </div>

        {/* Room Status */}
        <div className="bg-surface p-4">
          <h4 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">Room Status</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {['Atlas', 'Jardin', 'Terrasse', 'Courtyard', 'Oasis', 'Medina'].map((room, i) => {
              const statusColors = ['bg-green-500', 'bg-yellow-500', 'bg-blue-500'];
              const statusColor = statusColors[i % 3];
              return (
                <div key={room} className="flex items-center gap-2 bg-background p-1.5 rounded border border-border">
                  <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
                  <span className="truncate">{room}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex gap-3 text-[10px] text-muted">
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Ready</div>
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>Cleaning</div>
            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Occupied</div>
          </div>
        </div>

        {/* Pending & Staff */}
        <div className="bg-surface p-4 flex flex-col gap-4">
          <div>
            <h4 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">Pending Requests</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="bg-background p-2 rounded border border-border border-l-2 border-l-accent">
                Extra towels — Suite Atlas
              </div>
              <div className="bg-background p-2 rounded border border-border border-l-2 border-l-accent">
                Late checkout — Chambre Jardin
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">Staff On Duty</h4>
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex justify-between items-center bg-background p-1.5 rounded border border-border">
                <span className="font-medium">Fatima</span>
                <span className="text-muted text-[10px]">Housekeeping</span>
              </div>
              <div className="flex justify-between items-center bg-background p-1.5 rounded border border-border">
                <span className="font-medium">Youssef</span>
                <span className="text-muted text-[10px]">Reception</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
