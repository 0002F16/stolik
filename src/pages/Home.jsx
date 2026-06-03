import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/ui/Button';
import PricingPreview from '../components/PricingPreview';
import useScrollReveal from '../hooks/useScrollReveal';
import {
  ArrowRight, Check, Calendar, CalendarDays,
  Smartphone, Bell, Sliders, Link as LinkIcon,
  ShieldCheck, Plus, Minus
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [bookingStep, setBookingStep] = useState(1);
  const [guests, setGuests] = useState(2);
  const revealRef = useScrollReveal({ selector: '.reveal', stagger: true, staggerDelay: 80 });

  const featureTabs = [
    {
      title: "Connect your availability",
      desc: "Stolik syncs your opening hours and table capacity in real time.",
      content: (
        <div className="card shadow-md border border-border p-6 rounded-xl bg-white w-full max-w-sm mx-auto">
          <h4 className="text-[15px] font-bold text-ink mb-4">Availability</h4>
          <p className="text-[14px] text-ink-muted mb-4">Connect existing calendar</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-brand transition-colors cursor-pointer">
              <CalendarDays className="text-[#4285F4]" size={20} />
              <span className="text-[14px] font-semibold text-ink">Google Calendars</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-brand transition-colors cursor-pointer">
              <Calendar className="text-[#000000]" size={20} />
              <span className="text-[14px] font-semibold text-ink">iCal / Apple Calendar</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-brand transition-colors cursor-pointer">
              <Sliders className="text-ink-secondary" size={20} />
              <span className="text-[14px] font-semibold text-ink">Custom schedule</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Add your opening hours",
      desc: "Control exactly when guests can book, with buffers between seatings.",
      content: (
        <div className="card shadow-md border border-border p-6 rounded-xl bg-white w-full max-w-sm mx-auto">
          <h4 className="text-[15px] font-bold text-ink mb-4">Opening hours</h4>
          <div className="flex flex-col gap-3 text-[14px]">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="font-semibold text-ink w-10">Sun</span>
              <span className="text-ink-muted">Unavailable</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="font-semibold text-ink w-10">Mon</span>
              <span className="text-ink-secondary text-right">12:00 pm – 3:00 pm<br/>18:00 – 22:30</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="font-semibold text-ink w-10">Tue</span>
              <span className="text-ink-muted">Unavailable</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="font-semibold text-ink w-10">Wed</span>
              <span className="text-ink-secondary text-right">12:00 pm – 3:00 pm<br/>18:00 – 22:30</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="font-semibold text-ink w-10">Thu</span>
              <span className="text-ink-secondary text-right">12:00 pm – 3:00 pm<br/>18:00 – 23:00</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="font-semibold text-ink w-10">Fri</span>
              <span className="text-ink-secondary text-right">12:00 pm – 3:00 pm<br/>18:00 – 23:30</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-ink w-10">Sat</span>
              <span className="text-ink-secondary text-right">13:00 pm – 23:30</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Set up confirmations",
      desc: "Auto-send SMS and email confirmations to every guest, every time.",
      content: (
        <div className="card shadow-md border border-border p-6 rounded-xl bg-white w-full max-w-sm mx-auto">
          <h4 className="text-[15px] font-bold text-ink mb-4">Guest notifications</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-brand" />
                <span className="text-[14px] font-semibold text-ink">Booking confirmation SMS</span>
              </div>
              <div className="w-10 h-6 bg-brand rounded-full relative shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-brand" />
                <span className="text-[14px] font-semibold text-ink">Reminder 24h before</span>
              </div>
              <div className="w-10 h-6 bg-brand rounded-full relative shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-brand" />
                <span className="text-[14px] font-semibold text-ink">Collect deposit on booking</span>
              </div>
              <div className="w-10 h-6 bg-surface-2 border border-border rounded-full relative shadow-inner">
                <div className="w-4 h-4 bg-white border border-border rounded-full absolute top-[3px] left-[3px] shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Customize your booking types",
      desc: "Create booking types for every occasion — lunch, dinner, private events.",
      content: (
        <div className="card shadow-md border border-border p-6 rounded-xl bg-white w-full max-w-sm mx-auto">
          <h4 className="text-[15px] font-bold text-ink mb-4">Booking types — Ways to dine</h4>
          <div className="flex flex-col gap-3">
            <div className="p-3 border border-border rounded-lg border-l-4 border-l-brand">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[14px] font-bold text-ink">Standard table</span>
                <span className="text-[12px] text-ink-muted">1 restaurant</span>
              </div>
              <p className="text-[12px] text-ink-secondary mb-1">1–10 guests</p>
              <p className="text-[12px] text-ink-muted">For everyday lunch and dinner seatings</p>
            </div>
            <div className="p-3 border border-border rounded-lg border-l-4 border-l-[#F59E0B]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[14px] font-bold text-ink">Private dining</span>
                <span className="text-[12px] text-ink-muted">1 restaurant</span>
              </div>
              <p className="text-[12px] text-ink-secondary mb-1">Up to 30 guests</p>
              <p className="text-[12px] text-ink-muted">Birthdays, anniversaries, corporate</p>
            </div>
            <div className="p-3 border border-border rounded-lg border-l-4 border-l-[#10B981]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[14px] font-bold text-ink">Chef's table</span>
                <span className="text-[12px] text-ink-muted">1 host</span>
              </div>
              <p className="text-[12px] text-ink-secondary mb-1">2–6 guests</p>
              <p className="text-[12px] text-ink-muted">Premium experience, kitchen-side</p>
            </div>
            <div className="p-3 border border-border rounded-lg border-l-4 border-l-[#8B5CF6]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[14px] font-bold text-ink">Group event</span>
                <span className="text-[12px] text-ink-muted">1 restaurant</span>
              </div>
              <p className="text-[12px] text-ink-secondary">30+ guests</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Share your booking link",
      desc: "Add your booking link anywhere guests already find you online.",
      content: (
        <div className="card shadow-md border border-border p-6 rounded-xl bg-white w-full max-w-sm mx-auto">
          <h4 className="text-[15px] font-bold text-ink mb-2">Accept reservations via</h4>
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Website embed</span>
            <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Google Maps</span>
            <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Instagram bio</span>
            <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Direct link</span>
          </div>
          <h4 className="text-[14px] font-bold text-ink mb-3">Recently shared:</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <div>
                <div className="text-[13px] font-semibold text-ink">Standard dinner</div>
                <div className="text-[12px] text-ink-muted">2 hrs</div>
              </div>
              <LinkIcon size={16} className="text-brand cursor-pointer" />
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <div>
                <div className="text-[13px] font-semibold text-ink">Private dining</div>
                <div className="text-[12px] text-ink-muted">3 hrs</div>
              </div>
              <LinkIcon size={16} className="text-brand cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-ink">Lunch special</div>
                <div className="text-[12px] text-ink-muted">90 min</div>
              </div>
              <LinkIcon size={16} className="text-brand cursor-pointer" />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-surface min-h-screen pt-[64px]" ref={revealRef}>
      <Navbar />

      {/* ── Section 1: Hero ── */}
      <section className="relative flex items-center min-h-[calc(100vh-64px)] bg-white overflow-hidden py-12 lg:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            <div className="w-full lg:w-[55%] reveal">
              <h1 className="heading-hero max-w-[520px]">
                Restaurant bookings,<br/>
                minus the phone calls.
              </h1>
              <p className="body-lg max-w-[480px] mt-[20px]">
                Stolik is the modern restaurant booking platform that makes 'finding a table' a breeze. When reserving is easy, your restaurant fills faster.
              </p>
              <div className="flex flex-wrap gap-4 mt-[32px]">
                <Button as={Link} to="/signup" variant="primary" size="lg">
                  Sign up for free <ArrowRight size={18} />
                </Button>
                <Button as={Link} to="/demo" variant="secondary" size="lg">
                  Get a demo
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end reveal relative z-10 perspective-1000">
              <div 
                className="w-full max-w-[420px] bg-white shadow-2xl rounded-2xl border border-border p-6 overflow-hidden"
                style={{ 
                  animation: 'float 3s ease-in-out infinite alternate',
                  transform: 'rotate(-1.5deg)'
                }}
              >
                <style>{`
                  @keyframes float {
                    0% { transform: translateY(0) rotate(-1.5deg); }
                    100% { transform: translateY(-8px) rotate(-1.5deg); }
                  }
                `}</style>
                <div className="text-center mb-6 pb-6 border-b border-border">
                  <h3 className="text-[20px] font-bold text-ink">Magnolia Restaurant · Warsaw</h3>
                  <p className="text-[14px] text-ink-muted">Fine dining · Śródmieście</p>
                </div>
                
                <AnimatePresence mode="wait">
                  {bookingStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="mb-2"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[15px] font-bold text-ink">June 2026</span>
                        <div className="flex gap-2">
                          <button className="p-1 rounded hover:bg-surface-2"><ArrowRight size={16} className="rotate-180" /></button>
                          <button className="p-1 rounded hover:bg-surface-2"><ArrowRight size={16} /></button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-medium mb-6">
                        <div className="text-ink-muted pb-2">SU</div>
                        <div className="text-ink-muted pb-2">MO</div>
                        <div className="text-ink-muted pb-2">TU</div>
                        <div className="text-ink-muted pb-2">WE</div>
                        <div className="text-ink-muted pb-2">TH</div>
                        <div className="text-ink-muted pb-2">FR</div>
                        <div className="text-ink-muted pb-2">SA</div>
                        {Array.from({ length: 30 }).map((_, i) => {
                          const day = i + 1;
                          const isAvailable = [15, 16, 17, 18].includes(day);
                          return (
                            <div key={i} className="aspect-square flex items-center justify-center p-1">
                              <button 
                                onClick={() => isAvailable && setBookingStep(2)}
                                disabled={!isAvailable}
                                className={`w-full h-full rounded-full flex items-center justify-center text-[14px] transition-all
                                  ${isAvailable ? 'bg-brand-lighter text-brand font-bold hover:bg-brand hover:text-white cursor-pointer' : 
                                    'text-ink-muted hover:bg-surface-2 cursor-default'}`}
                              >
                                {day}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {bookingStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="mb-6"
                    >
                      <button onClick={() => setBookingStep(1)} className="text-[13px] text-ink-muted hover:text-brand flex items-center gap-1 mb-4">
                        <ArrowRight size={14} className="rotate-180" /> Back to calendar
                      </button>
                      <h4 className="text-[16px] font-bold text-ink mb-4">Wednesday, June 17</h4>
                      <div className="flex flex-wrap gap-3">
                        {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map((time) => (
                          <button 
                            key={time}
                            onClick={() => setBookingStep(3)}
                            className="px-4 py-2 rounded-lg border border-border text-[14px] font-bold text-ink hover:border-brand hover:text-brand transition-all"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {bookingStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="mb-6 flex flex-col items-center py-6"
                    >
                      <h4 className="text-[18px] font-bold text-ink mb-6">How many guests?</h4>
                      <div className="flex items-center gap-6 mb-8">
                        <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:border-brand hover:text-brand transition-all"><Minus size={20}/></button>
                        <span className="text-[28px] font-bold text-ink w-8 text-center">{guests}</span>
                        <button onClick={() => setGuests(Math.min(20, guests + 1))} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:border-brand hover:text-brand transition-all"><Plus size={20}/></button>
                      </div>
                      <Button onClick={() => setBookingStep(1)} variant="primary" size="lg" className="w-full justify-center">
                        Confirm reservation <ArrowRight size={18} />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 2: Trust Bar ── */}
      <section className="border-y border-border py-10 bg-white text-center reveal">
        <div className="container mx-auto">
          <p className="text-[20px] font-semibold text-ink mb-8">
            Trusted by more than 2,000 restaurants across Poland
          </p>
          <div className="flex items-center justify-start md:justify-center gap-[48px] overflow-x-auto pb-4 md:pb-0 scrollbar-hide px-4">
            {['MAGNOLIA', 'NUTA', 'ORZO', 'STIXX BAR', 'CONCEPT 13', 'HOTEL BRISTOL', 'CANTINE', 'KIELISZKI'].map((logo) => (
              <span 
                key={logo} 
                className="text-[18px] font-bold text-ink uppercase tracking-[0.05em] whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: "Stolik makes restaurant booking simple" ── */}
      <section className="section bg-white reveal">
        <div className="container mx-auto">
          <h2 className="heading-section text-center mb-4">Stolik makes restaurant booking simple</h2>
          <p className="body-lg text-center max-w-[560px] mx-auto mb-14">
            Easy enough for a solo café owner, and powerful enough for Poland's top restaurant groups.
          </p>
          <div className="flex justify-center mb-16">
            <Button as={Link} to="/signup" variant="primary" size="md">Sign up for free</Button>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start max-w-[1000px] mx-auto">
            {/* Left: Tabs */}
            <div className="w-full md:w-[280px] flex flex-col pl-6 relative">
              <div 
                className="absolute left-0 w-[2px] bg-brand transition-all duration-150 ease-out"
                style={{ 
                  top: `${activeTab * (100 / featureTabs.length)}%`, 
                  height: `${100 / featureTabs.length}%` 
                }} 
              />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border-dark opacity-30 -z-10" />

              {featureTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="text-left py-4 relative group"
                >
                  <h3 className={`text-[16px] font-bold mb-1 transition-colors ${activeTab === idx ? 'text-ink' : 'text-ink-secondary group-hover:text-ink'}`}>
                    {tab.title}
                  </h3>
                  <AnimatePresence>
                    {activeTab === idx && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[14px] text-ink-muted leading-relaxed mt-2"
                      >
                        {tab.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Right: Content Panel */}
            <div className="w-full md:flex-1 relative min-h-[400px] flex items-center justify-center bg-surface-2 rounded-2xl p-8 border border-border overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="w-full"
                >
                  {featureTabs[activeTab].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Integrations ── */}
      <section className="section bg-surface-2 border-t border-border reveal">
        <div className="container mx-auto">
          <h2 className="heading-section text-center mb-4">Connect Stolik to the tools you already use</h2>
          <p className="body-lg text-center mb-8">Boost efficiency with 30+ integrations</p>
          <div className="flex justify-center mb-16">
            <Button as={Link} to="/integrations" variant="link" className="text-[16px]">View all integrations <ArrowRight size={16} /></Button>
          </div>

          <div className="flex flex-col items-center gap-8 mb-16 overflow-x-auto px-4 pb-4 w-full">
            <div className="flex gap-8 justify-center min-w-max reveal-grid">
              {['Google Maps', 'Google Reserve', 'Google Calendar', 'Instagram'].map((logo) => (
                <div key={logo} className="w-[140px] h-[60px] bg-white border border-border rounded-lg flex items-center justify-center font-bold text-ink-muted hover:text-ink hover:border-brand transition-all cursor-pointer shadow-sm">
                  {logo}
                </div>
              ))}
            </div>
            <div className="flex gap-8 justify-center min-w-max reveal-grid">
              {['Facebook', 'Stripe', 'PayU', 'Przelewy24'].map((logo) => (
                <div key={logo} className="w-[140px] h-[60px] bg-white border border-border rounded-lg flex items-center justify-center font-bold text-ink-muted hover:text-ink hover:border-brand transition-all cursor-pointer shadow-sm">
                  {logo}
                </div>
              ))}
            </div>
            <div className="flex gap-8 justify-center min-w-max reveal-grid">
              {['SMS API', 'Twilio', 'WhatsApp Business', 'Mailchimp'].map((logo) => (
                <div key={logo} className="w-[140px] h-[60px] bg-white border border-border rounded-lg flex items-center justify-center font-bold text-ink-muted hover:text-ink hover:border-brand transition-all cursor-pointer shadow-sm">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto reveal-grid">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                <LinkIcon size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-ink mb-3">Google suite</h3>
              <p className="body-base mb-6 min-h-[48px]">
                Get more reservations by connecting Stolik to Google Maps, Reserve, Analytics, and more.
              </p>
              <Button as={Link} to="/integrations/google" variant="link">Learn more <ArrowRight size={16} /></Button>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-ink mb-3">Payment suite</h3>
              <p className="body-base mb-6 min-h-[48px]">
                Collect deposits and reduce no-shows with Stripe, PayU, and Przelewy24 integrations.
              </p>
              <Button as={Link} to="/integrations/payments" variant="link">Learn more <ArrowRight size={16} /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pricing Preview ── */}
      <PricingPreview />

      {/* ── Section 6: Customer Stories ── */}
      <section className="section bg-surface-2 border-t border-border reveal">
        <div className="container mx-auto">
          <h2 className="heading-section text-center mb-4">Discover how restaurants grow with Stolik</h2>
          <div className="flex justify-center mb-16">
            <Button as={Link} to="/customers" variant="link" className="text-[16px]">View customer stories <ArrowRight size={16} /></Button>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x px-4 md:px-0 scrollbar-hide reveal-grid">
            {[
              { num: '80%', desc: 'increase in online bookings', brand: 'Magnolia' },
              { num: '3 hrs', desc: 'saved daily on phone calls', brand: 'Nuta Restaurant' },
              { num: '50%', desc: 'reduction in no-shows', brand: 'ORZO Warsaw' },
              { num: '6 days', desc: 'faster revenue reporting', brand: 'Hotel Bristol' },
              { num: '2×', desc: 'more repeat guest visits', brand: 'Cantine' },
            ].map((stat, i) => (
              <div key={i} className="min-w-[200px] w-[280px] bg-white border border-border rounded-xl p-6 flex flex-col justify-between shrink-0 snap-start shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div>
                  <div className="text-[40px] font-extrabold text-brand tracking-tight mb-2">{stat.num}</div>
                  <p className="text-[14px] font-semibold text-ink leading-snug mb-8">{stat.desc}</p>
                </div>
                <div>
                  <div className="text-[16px] font-bold text-ink-muted tracking-[0.05em] uppercase mb-4">{stat.brand}</div>
                  <span className="text-[14px] font-bold text-brand flex items-center gap-1 group-hover:gap-2 transition-all">Read now <ArrowRight size={16} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Security ── */}
      <section className="section bg-white border-t border-border reveal">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 reveal-grid">
            {['SOC 2', 'PCI DSS', 'GDPR', 'CCPA', 'CSA STAR', 'ISO 27001'].map(badge => (
              <div key={badge} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-surface-2 border border-border rounded-xl flex items-center justify-center text-ink-secondary">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[13px] font-bold text-ink-muted">{badge}</span>
              </div>
            ))}
          </div>
          
          <h2 className="heading-section text-center mb-6">Built to keep your restaurant data secure</h2>
          <p className="body-lg text-center max-w-[560px] mx-auto mb-8">
            Keep your guest data secure with enterprise-grade access controls, GDPR compliance, data governance, and privacy protections. Your guests' data is never sold or shared.
          </p>
          <div className="flex justify-center">
            <Button as={Link} to="/security" variant="link" className="text-[16px]">Learn more <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>

      {/* ── Section 8: Final CTA ── */}
      <section className="section bg-surface-dark reveal">
        <div className="container mx-auto text-center">
          <h2 className="text-[40px] font-bold text-white mb-4">Power up your restaurant bookings</h2>
          <p className="text-[18px] text-[rgba(255,255,255,0.7)] mb-8">Get started in minutes — for free.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/signup" variant="white" size="lg">Start for free</Button>
            <Button as={Link} to="/demo" variant="ghost-dark" size="lg">Get a demo</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
