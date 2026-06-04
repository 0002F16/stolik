import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { STATUS } from './data';

// ─────────────────────────────────────────────────────────────────────────────
//  Layout primitives
// ─────────────────────────────────────────────────────────────────────────────
export const Card = ({ className = '', children, ...rest }) => (
  <div
    className={`bg-white border border-border rounded-xl ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export const SectionHeader = ({ title, action }) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-[16px] md:text-[17px] font-bold text-ink tracking-tight">{title}</h2>
    {action}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Avatar (initials)
// ─────────────────────────────────────────────────────────────────────────────
const AVATAR_BG = ['#E8F2FF', '#EDE9FE', '#D1FAE5', '#FEF3C7', '#FFE4E6', '#E0F2FE'];
const AVATAR_FG = ['#004796', '#5B21B6', '#065F46', '#92400E', '#9F1239', '#075985'];

export const Avatar = ({ initials, size = 38, id = 0 }) => {
  const i = (initials?.charCodeAt(0) ?? 0 + id) % AVATAR_BG.length;
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-bold shrink-0"
      style={{
        width: size,
        height: size,
        background: AVATAR_BG[i],
        color: AVATAR_FG[i],
        fontSize: size * 0.38,
      }}
    >
      {initials}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Status badge
// ─────────────────────────────────────────────────────────────────────────────
export const StatusBadge = ({ status, size = 'md' }) => {
  const s = STATUS[status] ?? STATUS.confirmed;
  const pad = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-[12px]';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold whitespace-nowrap ${pad}`}
      style={{ background: s.bg, color: s.fg }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
      {s.label}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  KPI / Stat card with sparkline
// ─────────────────────────────────────────────────────────────────────────────
export const StatCard = ({ label, value, unit, delta, spark, goodWhenDown = false }) => {
  const positive = goodWhenDown ? delta < 0 : delta > 0;
  const display =
    unit === 'zł'
      ? `${Math.round(value).toLocaleString('pl-PL')} zł`
      : `${value}${unit || ''}`;

  return (
    <Card className="p-4 md:p-5 flex flex-col justify-between min-h-[118px]">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[13px] font-semibold text-ink-muted">{label}</span>
        {typeof delta === 'number' && (
          <span
            className={`inline-flex items-center gap-0.5 text-[12px] font-bold ${
              positive ? 'text-[#059669]' : 'text-[#E11D48]'
            }`}
          >
            {positive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {Math.abs(delta)}%
          </span>
        )}
      </div>
      <div className="flex items-end justify-between gap-3 mt-2">
        <span className="text-[26px] md:text-[30px] font-extrabold text-ink tracking-tight leading-none">
          {display}
        </span>
        {spark && <Sparkline data={spark} positive={positive} />}
      </div>
    </Card>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Sparkline (mini line)
// ─────────────────────────────────────────────────────────────────────────────
export const Sparkline = ({ data, width = 72, height = 32, positive = true }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / span) * height;
    return [x, y];
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${width},${height} L0,${height} Z`;
  const color = positive ? '#10B981' : '#E11D48';
  const gid = `spark-${color}-${data.join('-').length}`;
  return (
    <svg width={width} height={height} className="overflow-visible shrink-0">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.20" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Vertical bar chart
// ─────────────────────────────────────────────────────────────────────────────
export const BarChart = ({ data, height = 180, highlightLabel }) => {
  const max = Math.max(...data.map((d) => d.value)) || 1;
  return (
    <div className="flex items-end gap-2 md:gap-3" style={{ height }}>
      {data.map((d) => {
        const h = Math.max(4, (d.value / max) * (height - 28));
        const active = d.label === highlightLabel;
        return (
          <div key={d.label} className="flex-1 flex flex-col items-center justify-end gap-2 group">
            <span className="text-[11px] font-bold text-ink opacity-0 group-hover:opacity-100 transition-opacity">
              {d.value}
            </span>
            <div
              className="w-full rounded-t-md transition-all duration-300"
              style={{
                height: h,
                background: active
                  ? 'linear-gradient(180deg,#006BFF,#0055CC)'
                  : '#DBEAFE',
              }}
            />
            <span className={`text-[11px] font-medium ${active ? 'text-brand font-bold' : 'text-ink-muted'}`}>
              {d.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Area / line chart
// ─────────────────────────────────────────────────────────────────────────────
export const AreaChart = ({ data, height = 200 }) => {
  const W = 600;
  const H = height;
  const pad = 8;
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pts = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2);
    const y = H - pad - ((d.value - min) / span) * (H - pad * 2);
    return [x, y];
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${W - pad},${H - pad} L${pad},${H - pad} Z`;
  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height }} preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006BFF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#006BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="#006BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#fff" stroke="#006BFF" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <div className="flex justify-between mt-2 px-1">
        {data.map((d) => (
          <span key={d.label} className="text-[11px] text-ink-muted font-medium">{d.label}</span>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Donut chart
// ─────────────────────────────────────────────────────────────────────────────
export const DonutChart = ({ data, size = 168, thickness = 22 }) => {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circ = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={size} className="shrink-0 -rotate-90">
        {data.map((d, i) => {
          const frac = d.value / total;
          const dash = frac * circ;
          const seg = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={thickness}
              strokeDasharray={`${dash} ${circ - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += dash;
          return seg;
        })}
      </svg>
      <div className="flex flex-col gap-2.5">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color }} />
            <span className="text-[13px] text-ink-secondary">{d.label}</span>
            <span className="text-[13px] font-bold text-ink ml-auto">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Toggle switch
// ─────────────────────────────────────────────────────────────────────────────
export const Toggle = ({ on, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    role="switch"
    aria-checked={on}
    className={`w-11 h-6 rounded-full relative transition-colors duration-200 shrink-0 ${
      on ? 'bg-brand' : 'bg-border-dark'
    }`}
  >
    <span
      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${
        on ? 'left-[22px]' : 'left-0.5'
      }`}
    />
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
//  Tag pill
// ─────────────────────────────────────────────────────────────────────────────
export const Tag = ({ children }) => {
  const isVip = String(children).toLowerCase().includes('vip');
  const isAllergy = String(children).toLowerCase().includes('allergy');
  let cls = 'bg-surface-2 text-ink-secondary border-border';
  if (isVip) cls = 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
  else if (isAllergy) cls = 'bg-[#FFE4E6] text-[#9F1239] border-[#FECDD3]';
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${cls}`}>
      {children}
    </span>
  );
};
