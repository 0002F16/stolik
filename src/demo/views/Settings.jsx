import React, { useState } from 'react';
import { Copy, Check, Link as LinkIcon, Globe, AtSign, MapPin } from 'lucide-react';
import { openingHours, bookingTypes, notificationDefaults } from '../data';
import { Card, SectionHeader, Toggle } from '../ui';

const Settings = () => {
  const [hours, setHours] = useState(openingHours);
  const [notifs, setNotifs] = useState(notificationDefaults);
  const [copied, setCopied] = useState(false);

  const bookingLink = 'stolik.io/magnolia-warsaw';

  const copy = () => {
    navigator.clipboard?.writeText('https://' + bookingLink).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const toggleDay = (i) =>
    setHours((h) => h.map((d, idx) => (idx === i ? { ...d, open: !d.open } : d)));

  const toggleNotif = (id) =>
    setNotifs((n) => n.map((x) => (x.id === id ? { ...x, on: !x.on } : x)));

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-[22px] md:text-[26px] font-extrabold text-ink tracking-tight">Settings</h1>
        <p className="text-[14px] text-ink-secondary mt-0.5">Configure how guests can book with Magnolia.</p>
      </div>

      {/* Booking link */}
      <Card className="p-5">
        <SectionHeader title="Your booking link" />
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 h-12 px-4 rounded-lg border border-border bg-surface-2">
            <LinkIcon size={16} className="text-ink-muted shrink-0" />
            <span className="text-[14px] font-semibold text-ink truncate">{bookingLink}</span>
          </div>
          <button onClick={copy} className="btn btn-primary btn-md justify-center shrink-0">
            {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy link</>}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: Globe, label: 'Website embed' },
            { icon: MapPin, label: 'Google Maps' },
            { icon: AtSign, label: 'Instagram bio' },
            { icon: LinkIcon, label: 'Direct link' },
          ].map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border text-[12px] font-semibold text-ink-secondary">
              <c.icon size={13} /> {c.label}
            </span>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Opening hours */}
        <Card className="p-5">
          <SectionHeader title="Opening hours" />
          <div className="flex flex-col divide-y divide-border">
            {hours.map((d, i) => (
              <div key={d.day} className="flex items-center gap-3 py-3">
                <Toggle on={d.open} onChange={() => toggleDay(i)} />
                <span className="text-[14px] font-bold text-ink w-24 shrink-0">{d.day}</span>
                <span className={`text-[13px] ml-auto text-right ${d.open ? 'text-ink-secondary' : 'text-ink-muted'}`}>
                  {d.open ? d.slots : 'Closed'}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-5">
          <SectionHeader title="Guest notifications" />
          <div className="flex flex-col divide-y divide-border">
            {notifs.map((n) => (
              <div key={n.id} className="flex items-start gap-3 py-3">
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] font-bold text-ink">{n.label}</div>
                  <div className="text-[12px] text-ink-muted">{n.desc}</div>
                </div>
                <Toggle on={n.on} onChange={() => toggleNotif(n.id)} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Booking types */}
      <Card className="p-5">
        <SectionHeader
          title="Booking types"
          action={<button className="text-[13px] font-bold text-brand hover:underline">+ Add type</button>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bookingTypes.map((b) => (
            <div key={b.name} className="p-4 rounded-xl border border-border border-l-[3px]" style={{ borderLeftColor: b.accent }}>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-ink">{b.name}</span>
                <span className="text-[12px] text-ink-muted">{b.range}</span>
              </div>
              <p className="text-[12px] text-ink-secondary mt-1">{b.desc}</p>
              <p className="text-[12px] text-ink-muted mt-2">Deposit: <span className="font-semibold text-ink">{b.deposit}</span></p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Settings;
