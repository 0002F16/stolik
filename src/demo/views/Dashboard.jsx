import React from 'react';
import { ArrowRight, Clock, Users, CalendarDays, Sparkles } from 'lucide-react';
import {
  kpis, reservations, activity, today, restaurant, STATUS, peakHours,
} from '../data';
import {
  Card, StatCard, StatusBadge, Avatar, SectionHeader, BarChart,
} from '../ui';

const Dashboard = ({ onOpenReservation, onNavigate }) => {
  const upcoming = reservations
    .filter((r) => ['confirmed', 'upcoming', 'pending'].includes(r.status))
    .slice(0, 6);

  return (
    <div className="flex flex-col gap-6">
      {/* Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">
            Good afternoon, Zofia 👋
          </h1>
          <p className="text-[14px] text-ink-secondary mt-1">
            {today.weekday}, {today.dateLabel} · Here's how {restaurant.name} is doing today.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-2 rounded-lg bg-brand-lighter text-brand text-[13px] font-semibold">
          <Sparkles size={15} />
          Fully booked for Saturday dinner
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
        {kpis.map((k) => (
          <StatCard key={k.id} {...k} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming reservations */}
        <div className="lg:col-span-2">
          <Card className="p-5">
            <SectionHeader
              title="Next up today"
              action={
                <button
                  onClick={() => onNavigate('reservations')}
                  className="text-[13px] font-bold text-brand hover:underline inline-flex items-center gap-1"
                >
                  View all <ArrowRight size={14} />
                </button>
              }
            />
            <div className="flex flex-col divide-y divide-border">
              {upcoming.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onOpenReservation(r)}
                  className="flex items-center gap-3 py-3 text-left hover:bg-surface-2 -mx-2 px-2 rounded-lg transition-colors"
                >
                  <div className="flex flex-col items-center w-12 shrink-0">
                    <span className="text-[15px] font-bold text-ink">{r.time}</span>
                  </div>
                  <Avatar initials={r.initials} id={r.id} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-bold text-ink truncate">{r.name}</div>
                    <div className="text-[12px] text-ink-muted flex items-center gap-2">
                      <span className="inline-flex items-center gap-1"><Users size={12} /> {r.party}</span>
                      <span>·</span>
                      <span>Table {r.table}</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline truncate">{r.source}</span>
                    </div>
                  </div>
                  <StatusBadge status={r.status} size="sm" />
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Activity feed */}
        <div>
          <Card className="p-5 h-full">
            <SectionHeader title="Live activity" />
            <div className="flex flex-col gap-4">
              {activity.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ background: STATUS[a.type]?.dot ?? '#8B90A0' }}
                  />
                  <div className="min-w-0">
                    <p className="text-[13px] text-ink leading-snug">
                      <span className="font-bold">{a.who}</span> {a.what}
                    </p>
                    <span className="text-[11px] text-ink-muted flex items-center gap-1 mt-0.5">
                      <Clock size={11} /> {a.when}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Peak hours */}
      <Card className="p-5">
        <SectionHeader
          title="Today's covers by hour"
          action={
            <button
              onClick={() => onNavigate('analytics')}
              className="text-[13px] font-bold text-brand hover:underline inline-flex items-center gap-1"
            >
              Full analytics <ArrowRight size={14} />
            </button>
          }
        />
        <BarChart data={peakHours} highlightLabel="19" height={170} />
        <p className="text-[12px] text-ink-muted mt-3 flex items-center gap-1.5">
          <CalendarDays size={13} /> Peak service is 19:00 — consider opening table T10 & T11.
        </p>
      </Card>
    </div>
  );
};

export default Dashboard;
