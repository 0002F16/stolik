// ─────────────────────────────────────────────────────────────────────────────
//  Stolik — Demo data
//  Realistic mock data powering the interactive product demo at /demo.
//  Everything here is fictional and lives entirely client-side.
// ─────────────────────────────────────────────────────────────────────────────

export const restaurant = {
  name: 'Magnolia Restaurant',
  location: 'Warsaw · Śródmieście',
  cuisine: 'Fine dining',
  cover: 142,
  plan: 'Pro',
};

export const user = {
  name: 'Zofia Kowalska',
  role: 'General Manager',
  initials: 'ZK',
};

// Today is 2026-06-04 (Thursday)
export const today = {
  weekday: 'Thursday',
  dateLabel: 'June 4, 2026',
};

// Format a number as Polish złoty
export const zl = (n) => `${Math.round(n).toLocaleString('pl-PL')} zł`;

// ── KPI summary ───────────────────────────────────────────────────────────────
export const kpis = [
  { id: 'covers',   label: 'Covers today',     value: 142,    delta: +12, unit: '',   spark: [60, 72, 68, 90, 84, 110, 142] },
  { id: 'bookings', label: 'Reservations',      value: 38,     delta: +5,  unit: '',   spark: [22, 26, 24, 30, 28, 34, 38] },
  { id: 'occupancy',label: 'Occupancy',         value: 82,     delta: +6,  unit: '%',  spark: [55, 60, 58, 70, 66, 78, 82] },
  { id: 'noshow',   label: 'No-show rate',      value: 3.2,    delta: -1.1, unit: '%', spark: [6.1, 5.4, 5.8, 4.9, 4.2, 3.9, 3.2], goodWhenDown: true },
  { id: 'revenue',  label: 'Projected revenue', value: 18450,  delta: +8,  unit: 'zł', spark: [9200, 11000, 10400, 13800, 12600, 16200, 18450] },
];

// ── Status config (shared) ──────────────────────────────────────────────────
export const STATUS = {
  confirmed: { label: 'Confirmed', dot: '#006BFF', bg: '#E8F2FF', fg: '#004796' },
  seated:    { label: 'Seated',    dot: '#10B981', bg: '#D1FAE5', fg: '#065F46' },
  upcoming:  { label: 'Upcoming',  dot: '#8B5CF6', bg: '#EDE9FE', fg: '#5B21B6' },
  completed: { label: 'Completed', dot: '#8B90A0', bg: '#F1F3F5', fg: '#5C6070' },
  pending:   { label: 'Pending',   dot: '#F59E0B', bg: '#FEF3C7', fg: '#92400E' },
  cancelled: { label: 'Cancelled', dot: '#E11D48', bg: '#FFE4E6', fg: '#9F1239' },
  noshow:    { label: 'No-show',   dot: '#E11D48', bg: '#FFE4E6', fg: '#9F1239' },
};

const initials = (name) =>
  name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

const r = (id, name, time, party, table, status, opts = {}) => ({
  id,
  name,
  initials: initials(name),
  time,
  party,
  table,
  status,
  durationMin: opts.durationMin ?? 120,
  phone: opts.phone ?? '+48 600 ' + (100000 + id * 137).toString().slice(0, 6),
  email: opts.email ?? name.toLowerCase().replace(/[^a-z]/g, '.') + '@email.com',
  source: opts.source ?? 'Direct link',
  type: opts.type ?? 'Standard table',
  notes: opts.notes ?? '',
  tags: opts.tags ?? [],
  deposit: opts.deposit ?? 0,
});

// ── Today's reservations ────────────────────────────────────────────────────
export const reservations = [
  r(1,  'Anna Nowak',           '12:00', 2, 'T4',  'completed', { source: 'Google Maps', type: 'Lunch special', durationMin: 90 }),
  r(2,  'Marek Wiśniewski',     '12:30', 4, 'T11', 'completed', { source: 'Instagram', notes: 'Window seat requested' }),
  r(3,  'Julia Lewandowska',    '13:00', 2, 'T2',  'seated',    { source: 'Direct link', tags: ['Regular'] }),
  r(4,  'Piotr Kamiński',       '13:15', 6, 'T15', 'seated',    { source: 'Website widget', type: 'Group event', notes: 'Birthday — bringing cake' }),
  r(5,  'Katarzyna Zielińska',  '13:30', 3, 'T7',  'seated',    { source: 'Google Reserve' }),
  r(6,  'Tomasz Szymański',     '18:00', 2, 'T3',  'confirmed', { source: 'Instagram', tags: ['VIP'], deposit: 100, notes: 'Anniversary' }),
  r(7,  'Magdalena Woźniak',    '18:00', 4, 'T12', 'confirmed', { source: 'Direct link' }),
  r(8,  'Krzysztof Dąbrowski',  '18:30', 2, 'T5',  'confirmed', { source: 'Google Maps', tags: ['Allergy: nuts'] }),
  r(9,  'Aleksandra Kozłowska', '18:30', 8, 'T16', 'confirmed', { source: 'Website widget', type: 'Private dining', deposit: 400, notes: 'Corporate dinner — set menu' }),
  r(10, 'Michał Jankowski',     '19:00', 2, 'T1',  'confirmed', { source: 'Direct link', tags: ['VIP'] }),
  r(11, 'Natalia Mazur',        '19:00', 4, 'T13', 'pending',   { source: 'Instagram', notes: 'Awaiting deposit' }),
  r(12, 'Paweł Krawczyk',       '19:30', 2, 'T6',  'confirmed', { source: 'Google Reserve' }),
  r(13, 'Ewa Piotrowska',       '19:30', 5, 'T14', 'confirmed', { source: 'Direct link', type: 'Chef\'s table', deposit: 250 }),
  r(14, 'Grzegorz Grabowski',   '20:00', 2, 'T8',  'upcoming',  { source: 'Website widget', tags: ['Regular'] }),
  r(15, 'Monika Nowakowska',    '20:00', 3, 'T9',  'upcoming',  { source: 'Instagram' }),
  r(16, 'Robert Pawlak',        '20:30', 4, 'T10', 'upcoming',  { source: 'Direct link', notes: 'Vegetarian table' }),
  r(17, 'Karolina Michalska',   '20:30', 2, 'T2',  'upcoming',  { source: 'Google Maps' }),
  r(18, 'Adam Król',            '21:00', 6, 'T15', 'cancelled', { source: 'Direct link', notes: 'Guest cancelled — 2h notice' }),
];

// ── Floor plan (positions as % of the canvas) ────────────────────────────────
// status: free | reserved | seated | soon
export const tables = [
  { id: 'T1',  seats: 2, x: 12, y: 18, shape: 'round',  status: 'reserved' },
  { id: 'T2',  seats: 2, x: 28, y: 18, shape: 'round',  status: 'seated' },
  { id: 'T3',  seats: 2, x: 44, y: 18, shape: 'round',  status: 'reserved' },
  { id: 'T4',  seats: 2, x: 60, y: 18, shape: 'round',  status: 'free' },
  { id: 'T5',  seats: 4, x: 12, y: 44, shape: 'square', status: 'reserved' },
  { id: 'T6',  seats: 4, x: 30, y: 44, shape: 'square', status: 'reserved' },
  { id: 'T7',  seats: 4, x: 48, y: 44, shape: 'square', status: 'seated' },
  { id: 'T8',  seats: 2, x: 66, y: 44, shape: 'round',  status: 'soon' },
  { id: 'T9',  seats: 4, x: 12, y: 70, shape: 'square', status: 'soon' },
  { id: 'T10', seats: 4, x: 30, y: 70, shape: 'square', status: 'free' },
  { id: 'T11', seats: 4, x: 48, y: 70, shape: 'square', status: 'free' },
  { id: 'T12', seats: 4, x: 66, y: 70, shape: 'square', status: 'reserved' },
  { id: 'T13', seats: 6, x: 84, y: 22, shape: 'rect',   status: 'reserved' },
  { id: 'T14', seats: 6, x: 84, y: 48, shape: 'rect',   status: 'reserved' },
  { id: 'T15', seats: 8, x: 84, y: 74, shape: 'rect',   status: 'seated' },
  { id: 'T16', seats: 8, x: 12, y: 92, shape: 'rect',   status: 'reserved', hidden: true },
];

export const TABLE_STATUS = {
  free:     { label: 'Available', color: '#10B981', bg: '#ECFDF5', border: '#A7F3D0' },
  reserved: { label: 'Reserved',  color: '#006BFF', bg: '#EFF6FF', border: '#BFDBFE' },
  seated:   { label: 'Seated',    color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A' },
  soon:     { label: 'Arriving',  color: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE' },
};

// ── Guests (CRM) ─────────────────────────────────────────────────────────────
const g = (id, name, visits, last, spend, tags) => ({
  id, name, initials: initials(name), visits, last, spend, tags,
  phone: '+48 ' + (500000000 + id * 1234567).toString().slice(0, 9),
  email: name.toLowerCase().replace(/[^a-z]/g, '.') + '@email.com',
});

export const guests = [
  g(1, 'Michał Jankowski',     47, '2 days ago',  18900, ['VIP', 'Regular']),
  g(2, 'Tomasz Szymański',     31, '1 week ago',  12400, ['VIP']),
  g(3, 'Julia Lewandowska',    28, 'Today',        9800, ['Regular']),
  g(4, 'Grzegorz Grabowski',   22, '3 days ago',   7600, ['Regular']),
  g(5, 'Aleksandra Kozłowska', 14, '2 weeks ago', 11200, ['Corporate']),
  g(6, 'Anna Nowak',           12, 'Today',        4300, []),
  g(7, 'Krzysztof Dąbrowski',   9, '5 days ago',   3100, ['Allergy: nuts']),
  g(8, 'Ewa Piotrowska',        7, '1 month ago',  5400, ['Wine club']),
  g(9, 'Natalia Mazur',         4, '2 days ago',   1600, []),
  g(10,'Karolina Michalska',    3, '1 week ago',   1200, []),
];

// ── Analytics series ─────────────────────────────────────────────────────────
export const coversByWeekday = [
  { label: 'Mon', value: 64 },
  { label: 'Tue', value: 72 },
  { label: 'Wed', value: 88 },
  { label: 'Thu', value: 142 },
  { label: 'Fri', value: 168 },
  { label: 'Sat', value: 196 },
  { label: 'Sun', value: 120 },
];

export const bookingsTrend = [
  { label: 'Wk 1', value: 412 },
  { label: 'Wk 2', value: 468 },
  { label: 'Wk 3', value: 503 },
  { label: 'Wk 4', value: 549 },
  { label: 'Wk 5', value: 612 },
  { label: 'Wk 6', value: 658 },
  { label: 'Wk 7', value: 701 },
  { label: 'Wk 8', value: 774 },
];

export const sourceBreakdown = [
  { label: 'Google',         value: 38, color: '#006BFF' },
  { label: 'Instagram',      value: 27, color: '#0AE8F0' },
  { label: 'Website widget', value: 21, color: '#8B5CF6' },
  { label: 'Direct link',    value: 14, color: '#F59E0B' },
];

export const peakHours = [
  { label: '12', value: 28 },
  { label: '13', value: 42 },
  { label: '14', value: 24 },
  { label: '15', value: 8 },
  { label: '16', value: 4 },
  { label: '17', value: 12 },
  { label: '18', value: 64 },
  { label: '19', value: 88 },
  { label: '20', value: 76 },
  { label: '21', value: 38 },
];

// ── Activity feed ────────────────────────────────────────────────────────────
export const activity = [
  { id: 1, who: 'Julia Lewandowska', what: 'was seated at T2', when: '2 min ago',  type: 'seated' },
  { id: 2, who: 'Natalia Mazur',     what: 'booking is awaiting deposit', when: '14 min ago', type: 'pending' },
  { id: 3, who: 'Tomasz Szymański',  what: 'confirmed for 18:00 · party of 2', when: '38 min ago', type: 'confirmed' },
  { id: 4, who: 'Adam Król',         what: 'cancelled (21:00)', when: '1 hr ago',  type: 'cancelled' },
  { id: 5, who: 'Aleksandra Kozłowska', what: 'paid a 400 zł deposit', when: '2 hr ago', type: 'confirmed' },
  { id: 6, who: 'Anna Nowak',        what: 'left a 5★ review', when: '3 hr ago', type: 'completed' },
];

// ── Settings: opening hours ─────────────────────────────────────────────────
export const openingHours = [
  { day: 'Monday',    open: true,  slots: '12:00–15:00 · 18:00–22:30' },
  { day: 'Tuesday',   open: false, slots: 'Closed' },
  { day: 'Wednesday', open: true,  slots: '12:00–15:00 · 18:00–22:30' },
  { day: 'Thursday',  open: true,  slots: '12:00–15:00 · 18:00–23:00' },
  { day: 'Friday',    open: true,  slots: '12:00–15:00 · 18:00–23:30' },
  { day: 'Saturday',  open: true,  slots: '13:00–23:30' },
  { day: 'Sunday',    open: false, slots: 'Closed' },
];

// ── Settings: booking types ─────────────────────────────────────────────────
export const bookingTypes = [
  { name: 'Standard table', range: '1–10 guests', desc: 'Everyday lunch & dinner seatings', accent: '#006BFF', deposit: '—' },
  { name: 'Private dining', range: 'Up to 30',    desc: 'Birthdays, anniversaries, corporate', accent: '#F59E0B', deposit: '50 zł / guest' },
  { name: "Chef's table",   range: '2–6 guests',  desc: 'Premium kitchen-side experience', accent: '#10B981', deposit: '125 zł / guest' },
  { name: 'Group event',    range: '30+ guests',  desc: 'Large parties & buyouts', accent: '#8B5CF6', deposit: 'Custom' },
];

// ── Settings: notifications ─────────────────────────────────────────────────
export const notificationDefaults = [
  { id: 'sms_confirm',  label: 'Booking confirmation SMS',  desc: 'Sent the moment a guest books', on: true },
  { id: 'email_confirm',label: 'Confirmation email',        desc: 'With calendar invite & directions', on: true },
  { id: 'reminder',     label: 'Reminder 24h before',       desc: 'Reduces no-shows by up to 40%', on: true },
  { id: 'deposit',      label: 'Collect deposit on booking',desc: 'For high-value booking types', on: true },
  { id: 'review',       label: 'Post-visit review request',  desc: 'Sent 2h after the table is cleared', on: false },
  { id: 'waitlist',     label: 'Waitlist availability alert',desc: 'Notify guests when a slot opens', on: false },
];
