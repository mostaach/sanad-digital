'use client';

import { useState, useCallback } from 'react';
import type { StoredLead } from '@/lib/leads/store';

const STATUS_COLORS: Record<StoredLead['status'], string> = {
  new: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  contacted: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  qualified: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  closed: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
};

const STATUS_LABELS: Record<StoredLead['status'], string> = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  closed: 'Closed',
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<StoredLead | null>(null);

  const fetchLeads = useCallback(async (pw: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/leads', {
        headers: { Authorization: `Bearer ${pw}` },
      });
      if (res.status === 401) {
        setError('Wrong password.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
      setAuthed(true);
    } catch {
      setError('Failed to connect.');
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads(password);
  };

  const handleStatusChange = async (id: string, status: StoredLead['status']) => {
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify({ id, status }),
    });
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status } : null);
  };

  const counts = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    qualified: leads.filter((l) => l.status === 'qualified').length,
    closed: leads.filter((l) => l.status === 'closed').length,
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString('fr-MA', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  // ─── Login Screen ───────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0A0907] flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C8643C] rounded-sm flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="text-white font-bold tracking-widest text-sm">SANAD</span>
            </div>
            <p className="text-[#A8A092] text-sm">Lead Dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#16140F] border border-[rgba(244,239,230,0.1)] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C8643C] placeholder:text-[#A8A092]"
              autoFocus
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-[#C8643C] hover:bg-[#E07A52] disabled:opacity-40 text-white rounded-lg px-4 py-3 text-sm font-semibold transition-colors"
            >
              {loading ? 'Connecting…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Dashboard ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0A0907] text-[#F4EFE6]">
      {/* Header */}
      <header className="border-b border-[rgba(244,239,230,0.08)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#C8643C] rounded-sm flex items-center justify-center text-white font-bold text-xs">S</div>
          <span className="font-bold tracking-wider text-sm">SANAD</span>
          <span className="text-[#A8A092] text-sm">/ Lead Dashboard</span>
        </div>
        <button
          onClick={() => fetchLeads(password)}
          className="text-xs text-[#A8A092] hover:text-[#C8643C] transition-colors border border-[rgba(244,239,230,0.1)] rounded px-3 py-1.5"
        >
          ↻ Refresh
        </button>
      </header>

      <div className="flex h-[calc(100vh-57px)]">
        {/* Left: Leads List */}
        <aside className="w-[420px] border-r border-[rgba(244,239,230,0.08)] flex flex-col">
          {/* Stats Bar */}
          <div className="grid grid-cols-4 border-b border-[rgba(244,239,230,0.08)]">
            {[
              { label: 'Total', value: counts.total },
              { label: 'New', value: counts.new, color: 'text-amber-300' },
              { label: 'Contacted', value: counts.contacted, color: 'text-blue-300' },
              { label: 'Qualified', value: counts.qualified, color: 'text-emerald-300' },
            ].map(({ label, value, color }) => (
              <div key={label} className="text-center py-3 border-r last:border-r-0 border-[rgba(244,239,230,0.08)]">
                <div className={`text-xl font-bold ${color || 'text-[#F4EFE6]'}`}>{value}</div>
                <div className="text-[10px] text-[#A8A092] font-mono tracking-wider">{label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* Lead List */}
          <div className="flex-1 overflow-y-auto">
            {leads.length === 0 ? (
              <div className="text-center text-[#A8A092] text-sm py-16">No leads yet.</div>
            ) : (
              leads.map((lead) => (
                <button
                  key={lead.id}
                  onClick={() => setSelected(lead)}
                  className={`w-full text-left px-4 py-3.5 border-b border-[rgba(244,239,230,0.06)] hover:bg-[rgba(200,100,60,0.06)] transition-colors ${selected?.id === lead.id ? 'bg-[rgba(200,100,60,0.1)] border-l-2 border-l-[#C8643C]' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-semibold text-sm truncate">{lead.name}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${STATUS_COLORS[lead.status]} shrink-0`}>
                      {STATUS_LABELS[lead.status]}
                    </span>
                  </div>
                  <div className="text-xs text-[#A8A092] truncate">{lead.businessName} · {lead.city}</div>
                  <div className="text-[10px] text-[#A8A092] mt-0.5">{formatDate(lead.submittedAt)}</div>
                </button>
              ))
            )}
          </div>
        </aside>

        {/* Right: Lead Detail */}
        <main className="flex-1 overflow-y-auto p-6">
          {!selected ? (
            <div className="flex items-center justify-center h-full text-[#A8A092] text-sm">
              Select a lead to view details
            </div>
          ) : (
            <div className="max-w-2xl">
              {/* Lead Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold">{selected.name}</h1>
                  <p className="text-[#A8A092] text-sm mt-0.5">{selected.businessName} · {selected.businessType} · {selected.city}</p>
                  <p className="text-[10px] font-mono text-[#A8A092] mt-1">{selected.id} · {formatDate(selected.submittedAt)}</p>
                </div>
                {/* Status Control */}
                <div className="flex gap-1.5 flex-wrap justify-end">
                  {(['new', 'contacted', 'qualified', 'closed'] as StoredLead['status'][]).map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(selected.id, s)}
                      className={`text-xs px-3 py-1.5 rounded border font-mono transition-colors ${selected.status === s ? STATUS_COLORS[s] : 'border-[rgba(244,239,230,0.12)] text-[#A8A092] hover:border-[#C8643C] hover:text-[#C8643C]'}`}
                    >
                      {STATUS_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Email', value: selected.email, href: `mailto:${selected.email}` },
                  { label: 'WhatsApp', value: selected.whatsapp || '—', href: selected.whatsapp ? `https://wa.me/${selected.whatsapp.replace(/[^0-9]/g, '')}` : undefined },
                  { label: 'Website', value: selected.website || '—', href: selected.website || undefined },
                ].map(({ label, value, href }) => (
                  <div key={label} className="bg-[#16140F] border border-[rgba(244,239,230,0.08)] rounded-lg p-3">
                    <div className="text-[10px] font-mono text-[#A8A092] mb-1">{label.toUpperCase()}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#C8643C] hover:underline break-all">{value}</a>
                    ) : (
                      <span className="text-sm text-[#A8A092]">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Goals */}
              <div className="bg-[#16140F] border border-[rgba(244,239,230,0.08)] rounded-lg p-4 mb-4">
                <div className="text-[10px] font-mono text-[#A8A092] mb-2.5">AUDIT PRIORITIES</div>
                <div className="flex flex-wrap gap-1.5">
                  {selected.goals.map((g) => (
                    <span key={g} className="text-xs bg-[#C8643C]/15 border border-[#C8643C]/30 text-[#C8643C] px-2.5 py-1 rounded-md font-medium">{g}</span>
                  ))}
                </div>
              </div>

              {/* Message */}
              {selected.message && (
                <div className="bg-[#16140F] border border-[rgba(244,239,230,0.08)] rounded-lg p-4">
                  <div className="text-[10px] font-mono text-[#A8A092] mb-2">MESSAGE</div>
                  <p className="text-sm text-[#F4EFE6] leading-relaxed">{selected.message}</p>
                </div>
              )}

              {/* Action Shortcuts */}
              <div className="mt-6 flex gap-3">
                <a
                  href={`mailto:${selected.email}?subject=SANAD Digital Audit — ${selected.businessName}&body=Bonjour ${selected.name},%0A%0AMerci pour votre demande d'audit digital SANAD.%0A`}
                  className="flex-1 text-center bg-[#C8643C] hover:bg-[#E07A52] text-white rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  Send Email
                </a>
                {selected.whatsapp && (
                  <a
                    href={`https://wa.me/${selected.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Bonjour ${selected.name}, c'est SANAD — merci pour votre demande d'audit. Je reviens vers vous dans les prochaines 48h.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#16140F] hover:bg-[rgba(200,100,60,0.1)] border border-[rgba(244,239,230,0.12)] hover:border-[#C8643C] text-[#F4EFE6] rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
