import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X, Phone, Mail, Users, Clock, MapPin, Tag as TagIcon,
  CreditCard, MessageSquare, Check, CalendarX, ChefHat,
} from 'lucide-react';
import { STATUS, zl } from './data';
import { Avatar, StatusBadge, Tag } from './ui';

const Row = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 py-2.5">
    <Icon size={17} className="text-ink-muted shrink-0" />
    <span className="text-[13px] text-ink-muted w-24 shrink-0">{label}</span>
    <span className="text-[13px] font-semibold text-ink text-right ml-auto">{value}</span>
  </div>
);

const ReservationDrawer = ({ reservation, onClose }) => {
  return (
    <AnimatePresence>
      {reservation && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/40 z-[300]"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.32 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-white z-[310] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
              <h3 className="text-[16px] font-bold text-ink">Reservation details</h3>
              <button onClick={onClose} className="p-2 -mr-2 rounded-lg hover:bg-surface-2 text-ink" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {/* Guest */}
              <div className="flex items-center gap-3 mb-5">
                <Avatar initials={reservation.initials} id={reservation.id} size={52} />
                <div className="min-w-0">
                  <div className="text-[18px] font-bold text-ink truncate">{reservation.name}</div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {reservation.tags.length > 0
                      ? reservation.tags.map((t) => <Tag key={t}>{t}</Tag>)
                      : <span className="text-[12px] text-ink-muted">New guest</span>}
                  </div>
                </div>
              </div>

              <StatusBadge status={reservation.status} />

              {/* Details */}
              <div className="mt-5 divide-y divide-border border-y border-border">
                <Row icon={Clock} label="Time" value={`${reservation.time} · ${reservation.durationMin} min`} />
                <Row icon={Users} label="Party size" value={`${reservation.party} guests`} />
                <Row icon={MapPin} label="Table" value={reservation.table} />
                <Row icon={ChefHat} label="Booking type" value={reservation.type} />
                <Row icon={TagIcon} label="Source" value={reservation.source} />
                <Row
                  icon={CreditCard}
                  label="Deposit"
                  value={reservation.deposit ? zl(reservation.deposit) + ' paid' : 'None'}
                />
              </div>

              {/* Contact */}
              <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-wide mt-6 mb-2">Contact</h4>
              <div className="flex flex-col gap-2">
                <a href={`tel:${reservation.phone}`} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-brand transition-colors">
                  <Phone size={16} className="text-brand" />
                  <span className="text-[13px] font-semibold text-ink">{reservation.phone}</span>
                </a>
                <a href={`mailto:${reservation.email}`} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-brand transition-colors">
                  <Mail size={16} className="text-brand" />
                  <span className="text-[13px] font-semibold text-ink truncate">{reservation.email}</span>
                </a>
              </div>

              {/* Notes */}
              {reservation.notes && (
                <>
                  <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-wide mt-6 mb-2">Notes</h4>
                  <div className="flex gap-2.5 p-3 rounded-lg bg-surface-2 text-[13px] text-ink-secondary leading-relaxed">
                    <MessageSquare size={16} className="text-ink-muted shrink-0 mt-0.5" />
                    {reservation.notes}
                  </div>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="border-t border-border p-4 shrink-0 flex gap-3">
              <button className="btn btn-secondary btn-md flex-1 justify-center">
                <CalendarX size={16} /> Cancel
              </button>
              <button className="btn btn-primary btn-md flex-1 justify-center">
                <Check size={16} /> Mark seated
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReservationDrawer;
