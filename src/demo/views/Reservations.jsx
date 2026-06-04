import React, { useState, useMemo } from 'react';
import { Search, Users, Plus } from 'lucide-react';
import { reservations } from '../data';
import { Card, StatusBadge, Avatar, Tag } from '../ui';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'confirmed', label: 'Confirmed' },
  { id: 'seated', label: 'Seated' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
];

const Reservations = ({ onOpenReservation, onNewReservation }) => {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const c = { all: reservations.length };
    reservations.forEach((r) => { c[r.status] = (c[r.status] || 0) + 1; });
    return c;
  }, []);

  const rows = useMemo(() => {
    return reservations.filter((r) => {
      const matchFilter = filter === 'all' || r.status === filter;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.table.toLowerCase().includes(q) ||
        r.time.includes(q);
      return matchFilter && matchQuery;
    });
  }, [filter, query]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">Reservations</h1>
          <p className="text-[14px] text-ink-secondary mt-0.5">Thursday, June 4 · {reservations.length} bookings</p>
        </div>
        <button
          onClick={onNewReservation}
          className="btn btn-primary btn-md self-start sm:self-auto"
        >
          <Plus size={17} /> New reservation
        </button>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by guest, table or time…"
            className="input h-11 pl-10"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1 pb-0.5">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 px-3.5 py-2 rounded-lg text-[13px] font-semibold transition-colors ${
                filter === f.id
                  ? 'bg-brand text-white'
                  : 'bg-surface-2 text-ink-secondary hover:text-ink hover:bg-border'
              }`}
            >
              {f.label}
              <span className={`ml-1.5 ${filter === f.id ? 'text-white/70' : 'text-ink-muted'}`}>
                {counts[f.id] ?? 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <Card className="hidden md:block overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-2 text-[12px] font-bold text-ink-secondary uppercase tracking-wide">
              <th className="px-5 py-3">Guest</th>
              <th className="px-5 py-3">Time</th>
              <th className="px-5 py-3">Party</th>
              <th className="px-5 py-3">Table</th>
              <th className="px-5 py-3">Source</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r) => (
              <tr
                key={r.id}
                onClick={() => onOpenReservation(r)}
                className="hover:bg-brand-lighter cursor-pointer transition-colors"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar initials={r.initials} id={r.id} size={36} />
                    <div>
                      <div className="text-[14px] font-bold text-ink flex items-center gap-2">
                        {r.name}
                        {r.tags.slice(0, 1).map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                      <div className="text-[12px] text-ink-muted">{r.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-[14px] font-semibold text-ink">{r.time}</td>
                <td className="px-5 py-3 text-[14px] text-ink-secondary">
                  <span className="inline-flex items-center gap-1"><Users size={13} /> {r.party}</span>
                </td>
                <td className="px-5 py-3 text-[14px] text-ink-secondary">{r.table}</td>
                <td className="px-5 py-3 text-[13px] text-ink-secondary">{r.source}</td>
                <td className="px-5 py-3"><StatusBadge status={r.status} size="sm" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && (
          <div className="py-12 text-center text-[14px] text-ink-muted">No reservations match your filters.</div>
        )}
      </Card>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-3">
        {rows.map((r) => (
          <button
            key={r.id}
            onClick={() => onOpenReservation(r)}
            className="text-left"
          >
            <Card className="p-4 flex items-center gap-3 active:bg-surface-2 transition-colors">
              <div className="flex flex-col items-center w-11 shrink-0">
                <span className="text-[15px] font-extrabold text-ink leading-none">{r.time}</span>
                <span className="text-[11px] text-ink-muted mt-1">{r.table}</span>
              </div>
              <div className="w-px self-stretch bg-border" />
              <Avatar initials={r.initials} id={r.id} />
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-bold text-ink truncate">{r.name}</div>
                <div className="text-[12px] text-ink-muted inline-flex items-center gap-1">
                  <Users size={12} /> {r.party} · {r.type}
                </div>
              </div>
              <StatusBadge status={r.status} size="sm" />
            </Card>
          </button>
        ))}
        {rows.length === 0 && (
          <Card className="py-10 text-center text-[14px] text-ink-muted">No reservations match your filters.</Card>
        )}
      </div>
    </div>
  );
};

export default Reservations;
