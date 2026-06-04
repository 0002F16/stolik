import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, Check } from 'lucide-react';
import { bookingTypes } from './data';

const TIMES = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

const NewReservationModal = ({ open, onClose }) => {
  const [party, setParty] = useState(2);
  const [time, setTime] = useState('19:00');
  const [type, setType] = useState(bookingTypes[0].name);
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);

  const reset = () => { setDone(false); setName(''); setParty(2); setTime('19:00'); };
  const close = () => { onClose(); setTimeout(reset, 300); };

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 bg-ink/40 z-[300]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-32px)] max-w-[460px] bg-white rounded-2xl shadow-2xl z-[310] max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-border sticky top-0 bg-white">
              <h3 className="text-[16px] font-bold text-ink">New reservation</h3>
              <button onClick={close} className="p-2 -mr-2 rounded-lg hover:bg-surface-2 text-ink" aria-label="Close"><X size={20} /></button>
            </div>

            {done ? (
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#D1FAE5] text-[#065F46] flex items-center justify-center mb-4">
                  <Check size={30} />
                </div>
                <h4 className="text-[19px] font-bold text-ink mb-2">Reservation confirmed</h4>
                <p className="text-[14px] text-ink-secondary max-w-[300px] mb-6">
                  {name || 'Your guest'} · party of {party} at {time}. A confirmation SMS &amp; email are on their way.
                </p>
                <button onClick={close} className="btn btn-primary btn-md justify-center w-full">Done</button>
              </div>
            ) : (
              <form onSubmit={submit} className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-ink">Guest name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Anna Nowak" className="input h-11" />
                </div>

                {/* Party size */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-ink">Party size</label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setParty(Math.max(1, party - 1))} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-ink hover:border-brand hover:text-brand transition-colors"><Minus size={18} /></button>
                    <span className="text-[20px] font-extrabold text-ink w-8 text-center">{party}</span>
                    <button type="button" onClick={() => setParty(Math.min(20, party + 1))} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-ink hover:border-brand hover:text-brand transition-colors"><Plus size={18} /></button>
                    <span className="text-[13px] text-ink-muted ml-1">guests</span>
                  </div>
                </div>

                {/* Time */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-ink">Time</label>
                  <div className="flex flex-wrap gap-2">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`px-3.5 py-2 rounded-lg text-[14px] font-bold border transition-colors ${
                          time === t ? 'bg-brand border-brand text-white' : 'border-border text-ink hover:border-brand'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-ink">Booking type</label>
                  <select value={type} onChange={(e) => setType(e.target.value)} className="input h-11">
                    {bookingTypes.map((b) => <option key={b.name}>{b.name}</option>)}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-lg justify-center w-full mt-1">
                  Confirm reservation
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewReservationModal;
