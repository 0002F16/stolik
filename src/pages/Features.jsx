import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/ui/Button';
import PricingPreview from '../components/PricingPreview';
import useScrollReveal from '../hooks/useScrollReveal';
import {
  CalendarDays, Calendar, Sliders, Smartphone, Bell,
  ShieldCheck, Link as LinkIcon, Globe, Map, CreditCard,
  Users, Lock, Activity, Check, ArrowRight, Zap
} from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const revealRef = useScrollReveal({ selector: '.reveal', stagger: true, staggerDelay: 80 });

  return (
    <div className="bg-surface min-h-screen pt-[64px]" ref={revealRef}>
      <Navbar />

      {/* ── Section 1: Hero ── */}
      <section className="bg-white py-[80px] text-center reveal">
        <div className="container mx-auto px-4">
          <h1 className="heading-hero max-w-[640px] mx-auto mb-5">
            Book tables that work for your restaurant
          </h1>
          <p className="body-lg max-w-[560px] mx-auto">
            Automate reservations for any dining scenario, reduce no-shows, route bookings to the right tables, connect all your tools, and stay secure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-[32px]">
            <Button as={Link} to="/signup" variant="primary" size="lg">Sign up for free</Button>
            <Button as={Link} to="/demo" variant="secondary" size="lg">Get a demo</Button>
          </div>
        </div>
      </section>

      {/* ── Section 2: 4 Tab Navigation ── */}
      <section className="bg-white sticky top-[64px] z-40 border-b border-border mb-16">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-8">
            {[
              { id: 'schedule', label: 'Schedule Reservations' },
              { id: 'integrate', label: 'Integrate Tools' },
              { id: 'route', label: 'Route Guests' },
              { id: 'secure', label: 'Secure Growth' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-[16px] font-bold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id ? 'border-brand text-ink' : 'border-transparent text-ink-secondary hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Content ── */}
      <section className="bg-white pb-24 min-h-[600px] reveal">
        <div className="container mx-auto px-4">
          
          {/* Tab 1: Schedule Reservations */}
          {activeTab === 'schedule' && (
            <div className="animate-[fade-in_0.3s_ease-out_forwards]">
              <h2 className="heading-section text-left mb-4">Simplify reservation scheduling</h2>
              <p className="body-lg max-w-[560px] mb-8">
                Build your booking schedule and ensure tables are reserved when it works for both your kitchen and your guests.
              </p>
              <div className="mb-16">
                <Button as={Link} to="/features/scheduling" variant="link" className="text-[16px]">Learn more <ArrowRight size={16} /></Button>
              </div>

              <div className="flex flex-col gap-24">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">1. Connect calendars</h3>
                    <p className="body-base">
                      Sync with Google Calendar and iCal to keep your availability accurate and avoid double-bookings across the restaurant.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <h4 className="text-[15px] font-bold text-ink mb-4">Availability — Connect existing calendar</h4>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg"><CalendarDays className="text-[#4285F4]" size={20} /><span className="text-[14px] font-semibold text-ink">Google Calendars</span></div>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg"><Calendar className="text-[#000000]" size={20} /><span className="text-[14px] font-semibold text-ink">iCal / Apple Calendar</span></div>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-lg"><Sliders className="text-ink-secondary" size={20} /><span className="text-[14px] font-semibold text-ink">Custom schedule</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">2. Set availability</h3>
                    <p className="body-base">
                      Manage the hours you're open, add buffers between seatings, and cap the number of covers per time slot.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <h4 className="text-[15px] font-bold text-ink mb-4">Opening hours</h4>
                      <div className="flex flex-col gap-3 text-[14px]">
                        <div className="flex justify-between border-b border-border pb-2"><span className="font-semibold text-ink w-10">Mon</span><span className="text-ink-secondary text-right">12:00 pm – 3:00 pm<br/>18:00 – 22:30</span></div>
                        <div className="flex justify-between border-b border-border pb-2"><span className="font-semibold text-ink w-10">Tue</span><span className="text-ink-muted">Unavailable</span></div>
                        <div className="flex justify-between border-b border-border pb-2"><span className="font-semibold text-ink w-10">Wed</span><span className="text-ink-secondary text-right">12:00 pm – 3:00 pm<br/>18:00 – 22:30</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">3. Integrate payments & deposits</h3>
                    <p className="body-base">
                      Connect Stripe or PayU and automatically collect deposits to protect against large group no-shows.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-8 rounded-xl bg-white w-full max-w-sm flex flex-col items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-surface-2 rounded-2xl flex items-center justify-center border border-border shadow-sm font-bold text-brand text-[20px]">Stripe</div>
                        <div className="w-16 h-16 bg-surface-2 rounded-2xl flex items-center justify-center border border-border shadow-sm font-bold text-brand text-[20px]">PayU</div>
                      </div>
                      <p className="text-[14px] font-semibold text-ink">Deposits connected and active</p>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">4. Customize booking types</h3>
                    <p className="body-base">
                      Create different table configurations — standard dining, private rooms, bar seating, or chef's table.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <div className="flex flex-col gap-3">
                        <div className="p-3 border border-border rounded-lg border-l-4 border-l-brand"><div className="flex justify-between items-center mb-1"><span className="text-[14px] font-bold text-ink">Standard table</span></div><p className="text-[12px] text-ink-secondary mb-1">1–10 guests</p></div>
                        <div className="p-3 border border-border rounded-lg border-l-4 border-l-[#F59E0B]"><div className="flex justify-between items-center mb-1"><span className="text-[14px] font-bold text-ink">Private dining</span></div><p className="text-[12px] text-ink-secondary mb-1">Up to 30 guests</p></div>
                        <div className="p-3 border border-border rounded-lg border-l-4 border-l-[#10B981]"><div className="flex justify-between items-center mb-1"><span className="text-[14px] font-bold text-ink">Chef's table</span></div><p className="text-[12px] text-ink-secondary mb-1">2–6 guests</p></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">5. Share your booking link</h3>
                    <p className="body-base">
                      Add your Stolik link to Google Maps, Instagram, your website, or anywhere guests already look for you.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <h4 className="text-[15px] font-bold text-ink mb-2">Accept reservations via</h4>
                      <div className="flex gap-2 flex-wrap mb-4">
                        <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Website embed</span>
                        <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Google Maps</span>
                        <span className="px-3 py-1 bg-surface-2 border border-border rounded-full text-[12px] font-semibold text-ink">Instagram</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Integrate Tools */}
          {activeTab === 'integrate' && (
            <div className="animate-[fade-in_0.3s_ease-out_forwards]">
              <h2 className="heading-section text-left mb-4">Integrate top tools seamlessly</h2>
              <p className="body-lg max-w-[560px] mb-12">
                Stolik works where you work — connecting the tools you already use to keep operations smooth and guests happy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: 'Stolik for web', desc: 'One-click booking access anywhere on the web' },
                  { icon: Smartphone, title: 'Stolik for mobile', desc: 'Manage reservations on the go, never miss a booking' },
                  { icon: Map, title: 'Google suite', desc: 'Google Calendar, Maps, Reserve, Analytics — all connected' },
                  { icon: CreditCard, title: 'Payment suite', desc: 'Deposits and full payments via Stripe, PayU, Przelewy24' },
                  { icon: Users, title: 'Guest CRM integrations', desc: 'Keep guest data always accurate and up to date' },
                  { icon: ShieldCheck, title: 'Deposit integrations', desc: 'Collect deposits to reduce no-shows and protect revenue' },
                  { icon: LinkIcon, title: 'Website integrations', desc: 'Let guests book directly from your restaurant website' },
                  { icon: Zap, title: 'Zapier', desc: 'Build custom no-code workflows for 7,000+ tools' },
                ].map((item, i) => (
                  <div key={i} className="card p-6 border border-border rounded-xl flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-ink mb-1">{item.title}</h3>
                      <p className="text-[14px] text-ink-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Route Guests */}
          {activeTab === 'route' && (
            <div className="animate-[fade-in_0.3s_ease-out_forwards]">
              <h2 className="heading-section text-left mb-4">Route, track, and automate tasks</h2>
              <p className="body-lg max-w-[560px] mb-16">
                Make team scheduling more efficient with automated reminders, guest intake forms, and booking performance reports.
              </p>

              <div className="flex flex-col gap-24">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">1. Automate communications</h3>
                    <p className="body-base">
                      Use Stolik Workflows to automatically send SMS and email reminders to reduce no-shows, and follow-ups to drive return visits.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <h4 className="text-[14px] font-bold text-ink mb-3 uppercase tracking-wide text-ink-muted">Workflow Sequence</h4>
                      <div className="flex flex-col gap-4 relative">
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-brand-light"></div>
                        <div className="flex gap-4 relative z-10">
                          <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shrink-0"><Check size={16}/></div>
                          <div className="bg-surface-2 p-3 rounded-lg border border-border w-full text-[13px] font-medium text-ink">Instant Email Confirmation</div>
                        </div>
                        <div className="flex gap-4 relative z-10">
                          <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shrink-0"><Bell size={16}/></div>
                          <div className="bg-surface-2 p-3 rounded-lg border border-border w-full text-[13px] font-medium text-ink">SMS Reminder (24h before)</div>
                        </div>
                        <div className="flex gap-4 relative z-10">
                          <div className="w-8 h-8 rounded-full bg-white border-2 border-brand text-brand flex items-center justify-center shrink-0"><Calendar size={16}/></div>
                          <div className="bg-white p-3 rounded-lg border border-border w-full text-[13px] font-medium text-ink">Booking Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">2. Qualify before booking</h3>
                    <p className="body-base">
                      Create a pre-booking form to capture party size, occasion type, and dietary needs — route guests to the right booking type automatically.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className="text-[13px] font-bold text-ink block mb-1">Occasion</label>
                          <select className="w-full p-2 border border-border rounded-md text-[14px]">
                            <option>Birthday / Anniversary</option>
                            <option>Business lunch</option>
                            <option>Casual dining</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[13px] font-bold text-ink block mb-1">Dietary Requirements</label>
                          <input type="text" placeholder="e.g. Vegan, Gluten-free" className="w-full p-2 border border-border rounded-md text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">3. No-show protection</h3>
                    <p className="body-base">
                      Collect card details or a deposit at booking. Automatically apply your cancellation policy if a guest doesn't show up.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-8 rounded-xl bg-white w-full max-w-sm flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-light text-brand flex items-center justify-center mb-4">
                        <ShieldCheck size={32} />
                      </div>
                      <h4 className="text-[16px] font-bold text-ink mb-2">Deposit Required</h4>
                      <p className="text-[14px] text-ink-secondary">A deposit of 50 PLN per person is required to secure this table.</p>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">4. Standardize across your team</h3>
                    <p className="body-base">
                      Use managed booking templates across your locations to ensure every venue delivers a consistent guest experience.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <h4 className="text-[14px] font-bold text-ink mb-4">Managed Templates</h4>
                      <div className="flex flex-col gap-3">
                        <div className="p-3 bg-surface-2 rounded-lg border border-border flex justify-between items-center">
                          <span className="text-[14px] font-semibold text-ink">Holiday Standard Form</span>
                          <Lock size={14} className="text-ink-muted" />
                        </div>
                        <div className="p-3 bg-surface-2 rounded-lg border border-border flex justify-between items-center">
                          <span className="text-[14px] font-semibold text-ink">Weekend Deposit Policy</span>
                          <Lock size={14} className="text-ink-muted" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[24px] font-bold text-ink mb-4">5. Track performance</h3>
                    <p className="body-base">
                      Discover booking trends with Stolik Analytics — peak days, top-booked times, cover count, and revenue per slot.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card shadow-xl border border-border p-6 rounded-xl bg-white w-full max-w-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-[14px] font-bold text-ink">Booking Volume</h4>
                        <Activity size={18} className="text-brand" />
                      </div>
                      <div className="flex items-end gap-2 h-24 mt-4">
                        <div className="w-1/6 bg-brand-light rounded-t-sm" style={{ height: '40%' }}></div>
                        <div className="w-1/6 bg-brand-light rounded-t-sm" style={{ height: '60%' }}></div>
                        <div className="w-1/6 bg-brand-light rounded-t-sm" style={{ height: '30%' }}></div>
                        <div className="w-1/6 bg-brand rounded-t-sm" style={{ height: '100%' }}></div>
                        <div className="w-1/6 bg-brand-light rounded-t-sm" style={{ height: '80%' }}></div>
                        <div className="w-1/6 bg-brand-light rounded-t-sm" style={{ height: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Secure Growth */}
          {activeTab === 'secure' && (
            <div className="animate-[fade-in_0.3s_ease-out_forwards]">
              <h2 className="heading-section text-left mb-4">Keep booking data secure for growth</h2>
              <p className="body-lg max-w-[560px] mb-12">
                Manage with confidence using admin tools, GDPR compliance, and security features that give you full visibility and control.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card border border-border rounded-xl p-0 overflow-hidden flex flex-col">
                  <div className="p-6 pb-0 flex-1">
                    <h3 className="text-[20px] font-bold text-ink mb-3">Monitor your restaurant's booking activity</h3>
                    <p className="text-[14px] text-ink-secondary leading-relaxed mb-6">
                      View guest setup, booking volume, and no-show rates so you can quickly identify what's working across your venues.
                    </p>
                  </div>
                  <div className="bg-surface-2 h-[180px] border-t border-border mt-auto flex items-center justify-center text-ink-muted text-[12px] uppercase tracking-wide">
                    [Admin Dashboard View]
                  </div>
                </div>

                <div className="card border border-border rounded-xl p-0 overflow-hidden flex flex-col">
                  <div className="p-6 pb-0 flex-1">
                    <h3 className="text-[20px] font-bold text-ink mb-3">Simplify team management</h3>
                    <p className="text-[14px] text-ink-secondary leading-relaxed mb-6">
                      Set up staff groups, delegate booking management access, and monitor front-of-house scheduling activity.
                    </p>
                  </div>
                  <div className="bg-surface-2 h-[180px] border-t border-border mt-auto flex items-center justify-center text-ink-muted text-[12px] uppercase tracking-wide">
                    [User Management UI]
                  </div>
                </div>

                <div className="card border border-border rounded-xl p-0 overflow-hidden flex flex-col">
                  <div className="p-6 pb-0 flex-1">
                    <h3 className="text-[20px] font-bold text-ink mb-3">Control account access</h3>
                    <p className="text-[14px] text-ink-secondary leading-relaxed mb-6">
                      Protect your Stolik account as you grow with SSO, 2FA, and role-based permission controls for your team.
                    </p>
                  </div>
                  <div className="bg-surface-2 h-[180px] border-t border-border mt-auto flex items-center justify-center text-ink-muted text-[12px] uppercase tracking-wide">
                    [Security Settings]
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── Section 3: Pricing Preview ── */}
      <PricingPreview />

      <Footer />
    </div>
  );
};

export default Features;
