import React, { useState, useMemo } from 'react';
import { Search, Phone, Mail, Star } from 'lucide-react';
import { guests, zl } from '../data';
import { Card, Avatar, Tag } from '../ui';

const Guests = () => {
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guests.filter((g) => !q || g.name.toLowerCase().includes(q) || g.tags.join(' ').toLowerCase().includes(q));
  }, [query]);

  const totals = useMemo(() => ({
    count: guests.length,
    vip: guests.filter((g) => g.tags.some((t) => t.toLowerCase().includes('vip'))).length,
    spend: guests.reduce((s, g) => s + g.spend, 0),
    avgVisits: Math.round(guests.reduce((s, g) => s + g.visits, 0) / guests.length),
  }), []);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">Guests</h1>
        <p className="text-[14px] text-ink-secondary mt-0.5">Your guest CRM — relationships that turn first visits into regulars.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {[
          { label: 'Total guests', value: totals.count.toLocaleString('pl-PL') },
          { label: 'VIPs', value: totals.vip },
          { label: 'Lifetime spend', value: zl(totals.spend) },
          { label: 'Avg. visits', value: totals.avgVisits },
        ].map((s) => (
          <Card key={s.label} className="p-4">
            <div className="text-[13px] font-semibold text-ink-muted">{s.label}</div>
            <div className="text-[24px] font-extrabold text-ink tracking-tight mt-1">{s.value}</div>
          </Card>
        ))}
      </div>

      <div className="relative">
        <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guests or tags…"
          className="input h-11 pl-10"
        />
      </div>

      {/* Desktop table */}
      <Card className="hidden md:block overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-2 text-[12px] font-bold text-ink-secondary uppercase tracking-wide">
              <th className="px-5 py-3">Guest</th>
              <th className="px-5 py-3">Visits</th>
              <th className="px-5 py-3">Last visit</th>
              <th className="px-5 py-3">Lifetime spend</th>
              <th className="px-5 py-3">Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((g) => (
              <tr key={g.id} className="hover:bg-brand-lighter transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar initials={g.initials} id={g.id} size={38} />
                    <div>
                      <div className="text-[14px] font-bold text-ink flex items-center gap-2">{g.name}</div>
                      <div className="flex gap-1.5 mt-0.5">
                        {g.tags.length ? g.tags.map((t) => <Tag key={t}>{t}</Tag>) : <span className="text-[12px] text-ink-muted">—</span>}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink">
                    <Star size={13} className="text-[#F59E0B] fill-[#F59E0B]" /> {g.visits}
                  </span>
                </td>
                <td className="px-5 py-3 text-[13px] text-ink-secondary">{g.last}</td>
                <td className="px-5 py-3 text-[14px] font-bold text-ink">{zl(g.spend)}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <a href={`tel:${g.phone}`} className="p-2 rounded-lg border border-border hover:border-brand text-ink-secondary hover:text-brand transition-colors"><Phone size={14} /></a>
                    <a href={`mailto:${g.email}`} className="p-2 rounded-lg border border-border hover:border-brand text-ink-secondary hover:text-brand transition-colors"><Mail size={14} /></a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-3">
        {rows.map((g) => (
          <Card key={g.id} className="p-4 flex items-center gap-3">
            <Avatar initials={g.initials} id={g.id} size={44} />
            <div className="min-w-0 flex-1">
              <div className="text-[14px] font-bold text-ink truncate">{g.name}</div>
              <div className="text-[12px] text-ink-muted inline-flex items-center gap-1">
                <Star size={11} className="text-[#F59E0B] fill-[#F59E0B]" /> {g.visits} visits · {g.last}
              </div>
              <div className="flex gap-1.5 mt-1">{g.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[14px] font-extrabold text-ink">{zl(g.spend)}</div>
              <div className="text-[11px] text-ink-muted">lifetime</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Guests;
