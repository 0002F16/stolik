import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { tables, TABLE_STATUS, reservations } from '../data';
import { Card } from '../ui';

const Tables = ({ onOpenReservation }) => {
  const [active, setActive] = useState(null);

  const visible = tables.filter((t) => !t.hidden);
  const summary = Object.keys(TABLE_STATUS).map((k) => ({
    key: k,
    ...TABLE_STATUS[k],
    count: visible.filter((t) => t.status === k).length,
  }));

  const reservationFor = (tableId) =>
    reservations.find((r) => r.table === tableId && r.status !== 'cancelled' && r.status !== 'completed');

  const shapeClass = (shape) => {
    if (shape === 'round') return 'rounded-full';
    if (shape === 'rect') return 'rounded-xl';
    return 'rounded-lg';
  };
  const sizeFor = (t) => {
    if (t.shape === 'rect') return { w: 84, h: 54 };
    if (t.seats >= 4) return { w: 64, h: 64 };
    return { w: 52, h: 52 };
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">Floor plan</h1>
        <p className="text-[14px] text-ink-secondary mt-0.5">Live table status across the dining room — tap a table for details.</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2.5">
        {summary.map((s) => (
          <div key={s.key} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-white">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
            <span className="text-[13px] font-semibold text-ink">{s.label}</span>
            <span className="text-[13px] text-ink-muted">{s.count}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Floor canvas */}
        <Card className="p-4 md:p-6 overflow-hidden">
          <div className="relative w-full bg-surface-2 rounded-xl border border-border overflow-hidden" style={{ aspectRatio: '16 / 11' }}>
            {/* faux room features */}
            <div className="absolute top-0 left-0 right-0 h-7 bg-white/60 border-b border-border flex items-center justify-center text-[10px] font-bold text-ink-muted uppercase tracking-widest">
              Kitchen Pass
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-ink-muted uppercase tracking-widest">Entrance</div>

            {visible.map((t) => {
              const s = TABLE_STATUS[t.status];
              const { w, h } = sizeFor(t);
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t)}
                  className={`absolute flex flex-col items-center justify-center border-2 transition-all hover:scale-105 ${shapeClass(t.shape)} ${active?.id === t.id ? 'ring-2 ring-brand ring-offset-2' : ''}`}
                  style={{
                    left: `${t.x}%`,
                    top: `${t.y}%`,
                    width: w,
                    height: h,
                    transform: 'translate(-50%, -50%)',
                    background: s.bg,
                    borderColor: s.color,
                  }}
                >
                  <span className="text-[12px] font-extrabold leading-none" style={{ color: s.color }}>{t.id}</span>
                  <span className="text-[10px] font-semibold mt-0.5 inline-flex items-center gap-0.5" style={{ color: s.color }}>
                    <Users size={9} /> {t.seats}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Detail panel */}
        <Card className="p-5 h-fit">
          {active ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-extrabold text-ink">Table {active.id}</span>
                <span
                  className="px-2.5 py-1 rounded-full text-[12px] font-bold"
                  style={{ background: TABLE_STATUS[active.status].bg, color: TABLE_STATUS[active.status].color }}
                >
                  {TABLE_STATUS[active.status].label}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-[13px]">
                <div className="flex justify-between"><span className="text-ink-muted">Seats</span><span className="font-bold text-ink">{active.seats}</span></div>
                <div className="flex justify-between"><span className="text-ink-muted">Shape</span><span className="font-bold text-ink capitalize">{active.shape}</span></div>
              </div>

              {reservationFor(active.id) ? (
                <button
                  onClick={() => onOpenReservation(reservationFor(active.id))}
                  className="mt-1 p-3 rounded-lg border border-border hover:border-brand text-left transition-colors"
                >
                  <div className="text-[11px] font-bold text-ink-muted uppercase tracking-wide mb-1">Current booking</div>
                  <div className="text-[14px] font-bold text-ink">{reservationFor(active.id).name}</div>
                  <div className="text-[12px] text-ink-muted">
                    {reservationFor(active.id).time} · party of {reservationFor(active.id).party}
                  </div>
                </button>
              ) : (
                <div className="mt-1 p-3 rounded-lg bg-surface-2 text-[13px] text-ink-muted text-center">
                  No active booking — available to walk-ins.
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mx-auto mb-3">
                <Users size={22} />
              </div>
              <p className="text-[14px] font-semibold text-ink">Select a table</p>
              <p className="text-[13px] text-ink-muted mt-1">Tap any table on the floor plan to see its status and booking.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Tables;
