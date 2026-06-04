import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import {
  bookingsTrend, coversByWeekday, sourceBreakdown, peakHours, zl,
} from '../data';
import {
  Card, SectionHeader, BarChart, AreaChart, DonutChart,
} from '../ui';

const Analytics = () => {
  const headline = [
    { label: 'Bookings (8 wks)', value: '4,677', delta: '+88%' },
    { label: 'Avg. party size', value: '3.4', delta: '+0.3' },
    { label: 'No-show rate', value: '3.2%', delta: '-2.9pp' },
    { label: 'Revenue / cover', value: zl(130), delta: '+11%' },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">Analytics</h1>
        <p className="text-[14px] text-ink-secondary mt-0.5">Understand demand, reduce no-shows, and fill more tables.</p>
      </div>

      {/* Headline metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {headline.map((h) => (
          <Card key={h.label} className="p-4">
            <div className="text-[13px] font-semibold text-ink-muted">{h.label}</div>
            <div className="flex items-end justify-between mt-1">
              <span className="text-[24px] font-extrabold text-ink tracking-tight">{h.value}</span>
              <span className="text-[12px] font-bold text-[#059669] inline-flex items-center gap-0.5">
                <TrendingUp size={12} /> {h.delta}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Bookings trend */}
      <Card className="p-5">
        <SectionHeader
          title="Bookings trend"
          action={<span className="text-[12px] font-semibold text-ink-muted">Last 8 weeks</span>}
        />
        <AreaChart data={bookingsTrend} height={210} />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Covers by weekday */}
        <Card className="p-5">
          <SectionHeader title="Covers by weekday" />
          <BarChart data={coversByWeekday} highlightLabel="Sat" height={190} />
        </Card>

        {/* Source breakdown */}
        <Card className="p-5">
          <SectionHeader title="Where bookings come from" />
          <div className="flex justify-center md:justify-start py-2">
            <DonutChart data={sourceBreakdown} />
          </div>
        </Card>
      </div>

      {/* Peak hours */}
      <Card className="p-5">
        <SectionHeader
          title="Demand by hour"
          action={
            <span className="inline-flex items-center gap-1 text-[12px] font-bold text-brand">
              Peak 19:00 <ArrowUpRight size={13} />
            </span>
          }
        />
        <BarChart data={peakHours} highlightLabel="19" height={180} />
      </Card>
    </div>
  );
};

export default Analytics;
