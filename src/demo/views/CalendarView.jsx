import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { reservations, STATUS } from '../data';
import { Card, Avatar, StatusBadge } from '../ui';

// Build hourly rows from 12:00 to 22:00
const HOURS = Array.from({ length: 11 }, (_, i) => 12 + i);

const toMin = (t) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

const CalendarView = ({ onOpenReservation }) => {
  const [selectedDay, setSelectedDay] = useState(4);

  // June 2026 starts on a Monday (June 1, 2026 = Monday)
  const firstWeekday = 1; // Monday index in a Sun-first grid -> col 1
  const daysInMonth = 30;
  const busyDays = { 4: 38, 5: 44, 6: 52, 11: 29, 12: 41, 13: 49, 18: 33, 19: 45, 20: 51 };

  const startMin = 12 * 60;
  const endMin = 22 * 60;
  const totalMin = endMin - startMin;
  const PX_PER_MIN = 0.9;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">Calendar</h1>
        <p className="text-[14px] text-ink-secondary mt-0.5">Plan service and spot quiet slots at a glance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        {/* Mini month */}
        <Card className="p-5 h-fit">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[15px] font-bold text-ink">June 2026</span>
            <div className="flex gap-1">
              <button className="p-1.5 rounded-lg hover:bg-surface-2 text-ink-secondary"><ChevronLeft size={16} /></button>
              <button className="p-1.5 rounded-lg hover:bg-surface-2 text-ink-secondary"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} className="text-[11px] font-bold text-ink-muted pb-1">{d}</div>
            ))}
            {Array.from({ length: firstWeekday - 1 }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const busy = busyDays[day];
              const active = day === selectedDay;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center text-[13px] transition-colors relative ${
                    active ? 'bg-brand text-white font-bold' : 'hover:bg-surface-2 text-ink'
                  }`}
                >
                  {day}
                  {busy && (
                    <span
                      className={`w-1 h-1 rounded-full absolute bottom-1 ${active ? 'bg-white' : 'bg-brand'}`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2.5 text-[13px]">
            <div className="flex justify-between"><span className="text-ink-muted">Covers</span><span className="font-bold text-ink">142</span></div>
            <div className="flex justify-between"><span className="text-ink-muted">Reservations</span><span className="font-bold text-ink">38</span></div>
            <div className="flex justify-between"><span className="text-ink-muted">Occupancy</span><span className="font-bold text-ink">82%</span></div>
          </div>
        </Card>

        {/* Day timeline */}
        <Card className="p-0 overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <span className="text-[15px] font-bold text-ink">Thursday, June {selectedDay}</span>
            <span className="text-[13px] text-ink-muted">Lunch & dinner service</span>
          </div>
          <div className="overflow-x-auto">
            <div className="relative min-w-[520px]" style={{ height: totalMin * PX_PER_MIN + 16 }}>
              {/* hour grid */}
              {HOURS.map((h) => {
                const top = (h * 60 - startMin) * PX_PER_MIN;
                return (
                  <div key={h} className="absolute left-0 right-0 flex items-start" style={{ top }}>
                    <span className="w-14 shrink-0 text-[11px] font-semibold text-ink-muted -translate-y-2 pl-4">
                      {String(h).padStart(2, '0')}:00
                    </span>
                    <div className="flex-1 border-t border-border" />
                  </div>
                );
              })}

              {/* reservation blocks */}
              <div className="absolute left-14 right-3 top-0 bottom-0">
                {reservations
                  .filter((r) => r.status !== 'cancelled')
                  .map((r, idx) => {
                    const top = (toMin(r.time) - startMin) * PX_PER_MIN;
                    const height = Math.max(30, r.durationMin * PX_PER_MIN - 4);
                    const s = STATUS[r.status];
                    // simple horizontal lane packing by index parity for visual spread
                    const lane = idx % 3;
                    return (
                      <button
                        key={r.id}
                        onClick={() => onOpenReservation(r)}
                        className="absolute rounded-lg px-2.5 py-1.5 text-left overflow-hidden border-l-[3px] hover:shadow-md transition-shadow"
                        style={{
                          top,
                          height,
                          left: `${lane * 33.5}%`,
                          width: '32%',
                          background: s.bg,
                          borderLeftColor: s.dot,
                        }}
                      >
                        <div className="text-[12px] font-bold truncate" style={{ color: s.fg }}>
                          {r.time} {r.name.split(' ')[0]}
                        </div>
                        <div className="text-[11px] truncate flex items-center gap-1" style={{ color: s.fg, opacity: 0.8 }}>
                          <Users size={10} /> {r.party} · {r.table}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CalendarView;
