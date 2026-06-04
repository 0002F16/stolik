import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LayoutDashboard, CalendarCheck, CalendarDays, LayoutGrid,
  Users, BarChart3, Settings as SettingsIcon, Plus, Search,
  Bell, ChevronDown, Menu, X, ArrowLeft, MoreHorizontal, ExternalLink,
} from 'lucide-react';
import StolikLogo from '../components/ui/StolikLogo';
import { restaurant, user } from '../demo/data';
import ReservationDrawer from '../demo/ReservationDrawer';
import NewReservationModal from '../demo/NewReservationModal';

import Dashboard from '../demo/views/Dashboard';
import Reservations from '../demo/views/Reservations';
import CalendarView from '../demo/views/CalendarView';
import Tables from '../demo/views/Tables';
import Guests from '../demo/views/Guests';
import Analytics from '../demo/views/Analytics';
import Settings from '../demo/views/Settings';

const NAV = [
  { id: 'dashboard',    label: 'Dashboard',    icon: LayoutDashboard, primary: true },
  { id: 'reservations', label: 'Reservations', icon: CalendarCheck,   primary: true },
  { id: 'calendar',     label: 'Calendar',     icon: CalendarDays,    primary: true },
  { id: 'tables',       label: 'Tables',       icon: LayoutGrid,      primary: true },
  { id: 'guests',       label: 'Guests',       icon: Users,           primary: false },
  { id: 'analytics',    label: 'Analytics',    icon: BarChart3,       primary: false },
  { id: 'settings',     label: 'Settings',     icon: SettingsIcon,    primary: false },
];

const Demo = () => {
  const [view, setView] = useState('dashboard');
  const [reservation, setReservation] = useState(null);
  const [newOpen, setNewOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile "more" sheet

  // lock scroll when a sheet is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const go = (id) => { setView(id); setDrawerOpen(false); window.scrollTo({ top: 0 }); };

  const viewProps = {
    onOpenReservation: setReservation,
    onNewReservation: () => setNewOpen(true),
    onNavigate: go,
  };

  const renderView = () => {
    switch (view) {
      case 'reservations': return <Reservations {...viewProps} />;
      case 'calendar':     return <CalendarView {...viewProps} />;
      case 'tables':       return <Tables {...viewProps} />;
      case 'guests':       return <Guests {...viewProps} />;
      case 'analytics':    return <Analytics {...viewProps} />;
      case 'settings':     return <Settings {...viewProps} />;
      default:             return <Dashboard {...viewProps} />;
    }
  };

  const current = NAV.find((n) => n.id === view);
  const primaryNav = NAV.filter((n) => n.primary);

  return (
    <div className="min-h-screen bg-surface-2 flex font-sans text-ink">
      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex w-[248px] shrink-0 flex-col bg-white border-r border-border fixed inset-y-0 left-0 z-30">
        <div className="h-16 flex items-center px-5 border-b border-border">
          <Link to="/" aria-label="Stolik home"><StolikLogo size="md" /></Link>
        </div>

        {/* Restaurant switcher */}
        <button className="mx-3 mt-3 flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-2 transition-colors text-left">
          <span className="w-9 h-9 rounded-lg bg-gradient-brand text-white flex items-center justify-center font-extrabold text-[14px]">M</span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-bold text-ink truncate">{restaurant.name}</span>
            <span className="block text-[11px] text-ink-muted truncate">{restaurant.location}</span>
          </span>
          <ChevronDown size={15} className="text-ink-muted shrink-0" />
        </button>

        <nav className="flex-1 px-3 py-3 flex flex-col gap-1 overflow-y-auto">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                view === n.id ? 'bg-brand-light text-brand' : 'text-ink-secondary hover:bg-surface-2 hover:text-ink'
              }`}
            >
              <n.icon size={18} /> {n.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-semibold text-ink-secondary hover:bg-surface-2 hover:text-ink transition-colors">
            <ArrowLeft size={16} /> Back to website
          </Link>
        </div>
      </aside>

      {/* ── Main column ── */}
      <div className="flex-1 lg:ml-[248px] flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-border sticky top-0 z-20 flex items-center gap-3 px-4 md:px-6">
          {/* mobile logo */}
          <Link to="/" className="lg:hidden" aria-label="Stolik home"><StolikLogo size="sm" iconOnly /></Link>

          <h1 className="text-[16px] font-bold text-ink hidden sm:block">{current?.label}</h1>

          {/* search */}
          <div className="relative ml-auto hidden md:block w-[260px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input placeholder="Search…" className="input h-10 pl-9 text-[14px]" />
          </div>

          <button
            onClick={() => setNewOpen(true)}
            className="btn btn-primary btn-md ml-auto md:ml-0 shrink-0"
          >
            <Plus size={16} /> <span className="hidden sm:inline">New reservation</span><span className="sm:hidden">New</span>
          </button>

          <button className="relative p-2 rounded-lg hover:bg-surface-2 text-ink-secondary shrink-0" aria-label="Notifications">
            <Bell size={19} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E11D48] rounded-full ring-2 ring-white" />
          </button>

          <span className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-light text-brand font-bold text-[13px] shrink-0">
            {user.initials}
          </span>
        </header>

        {/* Demo banner */}
        <div className="bg-ink text-white text-[12.5px] px-4 md:px-6 py-2 flex items-center justify-center gap-2 text-center">
          <span className="font-semibold">Interactive demo</span>
          <span className="text-white/60 hidden sm:inline">— sample data, explore freely.</span>
          <Link to="/signup" className="underline font-semibold hover:text-accent ml-1 inline-flex items-center gap-1">
            Start free <ExternalLink size={12} />
          </Link>
        </div>

        {/* View */}
        <main className="flex-1 p-4 md:p-6 pb-24 lg:pb-6 max-w-[1280px] w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* ── Mobile bottom nav ── */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-border flex items-stretch h-16 pb-[env(safe-area-inset-bottom)]">
        {primaryNav.map((n) => (
          <button
            key={n.id}
            onClick={() => go(n.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-colors ${
              view === n.id ? 'text-brand' : 'text-ink-muted'
            }`}
          >
            <n.icon size={20} /> {n.label}
          </button>
        ))}
        <button
          onClick={() => setDrawerOpen(true)}
          className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-colors ${
            ['guests', 'analytics', 'settings'].includes(view) ? 'text-brand' : 'text-ink-muted'
          }`}
        >
          <MoreHorizontal size={20} /> More
        </button>
      </nav>

      {/* ── Mobile "More" sheet ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="lg:hidden fixed inset-0 bg-ink/40 z-[300]"
            />
            <motion.div
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
              className="lg:hidden fixed bottom-0 inset-x-0 z-[310] bg-white rounded-t-2xl p-5 pb-8"
            >
              <div className="w-10 h-1 bg-border-dark rounded-full mx-auto mb-5" />
              <div className="flex items-center justify-between mb-4">
                <span className="text-[15px] font-bold text-ink">More</span>
                <button onClick={() => setDrawerOpen(false)} className="p-1.5 rounded-lg hover:bg-surface-2 text-ink"><X size={18} /></button>
              </div>
              <div className="flex flex-col gap-1">
                {NAV.filter((n) => !n.primary).map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-semibold transition-colors ${
                      view === n.id ? 'bg-brand-light text-brand' : 'text-ink hover:bg-surface-2'
                    }`}
                  >
                    <n.icon size={20} /> {n.label}
                  </button>
                ))}
                <Link to="/" className="flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-semibold text-ink-secondary hover:bg-surface-2 mt-1">
                  <ArrowLeft size={20} /> Back to website
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Overlays */}
      <ReservationDrawer reservation={reservation} onClose={() => setReservation(null)} />
      <NewReservationModal open={newOpen} onClose={() => setNewOpen(false)} />
    </div>
  );
};

export default Demo;
