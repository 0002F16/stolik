import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/ui/Button';
import PricingPreview from '../components/PricingPreview';
import useScrollReveal from '../hooks/useScrollReveal';
import { ArrowRight, Smartphone, CalendarDays, Lock, ShieldCheck, Check } from 'lucide-react';

const SolutionRestaurant = () => {
  const revealRef = useScrollReveal({ selector: '.reveal', stagger: true, staggerDelay: 80 });

  return (
    <div className="bg-surface min-h-screen pt-[64px]" ref={revealRef}>
      <Navbar />

      {/* ── Section 1: Hero ── */}
      <section className="bg-white pt-[80px] pb-16 text-center reveal">
        <div className="container mx-auto px-4">
          <h1 className="heading-hero max-w-[600px] mx-auto mb-5">
            Stolik for restaurants
          </h1>
          <p className="body-lg max-w-[480px] mx-auto mb-8">
            Stop losing bookings to phone tag and missed calls. Stolik gives your restaurant a professional booking system that works 24/7 — without commissions, without complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button as={Link} to="/signup" variant="primary" size="lg">Sign up for free</Button>
            <Button as={Link} to="/demo" variant="secondary" size="lg">Get a demo</Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 border-y border-border py-8">
            <div className="text-center">
              <div className="text-[32px] font-extrabold text-brand tracking-tight mb-1">80%</div>
              <div className="text-[14px] font-semibold text-ink-secondary uppercase tracking-wide">fewer phone calls</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-[32px] font-extrabold text-brand tracking-tight mb-1">50%</div>
              <div className="text-[14px] font-semibold text-ink-secondary uppercase tracking-wide">reduction in no-shows</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-[32px] font-extrabold text-brand tracking-tight mb-1">20 min</div>
              <div className="text-[14px] font-semibold text-ink-secondary uppercase tracking-wide">setup time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: How Stolik helps restaurants (3 steps) ── */}
      <section className="bg-surface-2 py-24 border-b border-border reveal">
        <div className="container mx-auto px-4">
          <h2 className="heading-section text-center mb-16">How Stolik helps restaurants</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl border border-border h-[240px] flex items-center justify-center mb-6 shadow-sm relative overflow-hidden">
                <div className="w-[80%] bg-surface-2 rounded-xl border border-border p-4 shadow-md absolute bottom-[-20px] left-1/2 -translate-x-1/2">
                  <div className="h-2 bg-border rounded-full mb-3 overflow-hidden"><div className="w-[60%] h-full bg-brand"></div></div>
                  <div className="flex items-center justify-between text-[12px] font-bold text-ink mb-2"><span>Setup Wizard</span> <span>60%</span></div>
                  <div className="flex items-center gap-2 text-[12px] text-ink-secondary"><Check size={14} className="text-[#00A86B]"/> Connect calendar</div>
                  <div className="flex items-center gap-2 text-[12px] text-ink-secondary"><Check size={14} className="text-[#00A86B]"/> Set opening hours</div>
                  <div className="flex items-center gap-2 text-[12px] text-brand font-bold"><div className="w-3.5 h-3.5 border-2 border-brand rounded-full"></div> Create booking types</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand text-white font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="text-[20px] font-bold text-ink mb-2">Set up in minutes</h3>
                  <p className="text-[15px] text-ink-secondary leading-relaxed">
                    Connect your calendar, set your opening hours, and create your booking types. Your restaurant is live in under 20 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl border border-border h-[240px] flex items-center justify-center mb-6 shadow-sm relative overflow-hidden">
                <div className="w-[200px] h-[300px] bg-white rounded-t-3xl border-x-4 border-t-4 border-[#1A1D23] shadow-lg absolute bottom-[-40px] flex flex-col items-center pt-4 px-3">
                  <div className="w-12 h-1 bg-border rounded-full mb-4"></div>
                  <div className="w-full bg-brand text-white text-center py-2 rounded-md font-bold text-[13px] mb-2">Book a table</div>
                  <div className="w-full h-[60px] bg-surface-2 rounded-md mb-2"></div>
                  <div className="w-full h-[60px] bg-surface-2 rounded-md mb-2"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand text-white font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="text-[20px] font-bold text-ink mb-2">Guests book themselves</h3>
                  <p className="text-[15px] text-ink-secondary leading-relaxed">
                    Your booking link goes on Google, Instagram, and your website. Guests pick a time, enter their details, and you get an instant notification — no calls, no back-and-forth.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl border border-border h-[240px] flex items-center justify-center mb-6 shadow-sm relative overflow-hidden">
                <div className="w-[90%] h-[180px] bg-surface-2 rounded-lg border border-border shadow-md absolute right-[-10px] top-[40px] flex flex-col p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-brand-light rounded-md"></div>
                    <div className="h-4 w-24 bg-border rounded"></div>
                  </div>
                  <div className="flex-1 bg-white border border-border rounded-md"></div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand text-white font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="text-[20px] font-bold text-ink mb-2">You stay in control</h3>
                  <p className="text-[15px] text-ink-secondary leading-relaxed">
                    View all reservations in one place, send automated reminders, manage the floor plan, and track no-shows — from any device.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Feature Highlights ── */}
      <section className="bg-white py-24 border-b border-border reveal">
        <div className="container mx-auto px-4 flex flex-col gap-24 max-w-[1000px]">
          
          {/* Row 1: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full aspect-[4/3] bg-surface-2 rounded-2xl border border-border shadow-sm flex items-center justify-center text-ink-muted">
                <CalendarDays size={48} className="opacity-20" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[28px] font-bold text-ink mb-4">Never miss a booking again</h3>
              <p className="body-lg mb-6">
                Stolik's booking widget is always on — even while you're sleeping, prepping service, or handling a full house. Guests book when they want, and you see it instantly in your dashboard.
              </p>
              <Button as={Link} to="/signup" variant="link" className="text-[16px]">Start for free <ArrowRight size={16} /></Button>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full aspect-[4/3] bg-surface-2 rounded-2xl border border-border shadow-sm flex items-center justify-center text-ink-muted">
                <ShieldCheck size={48} className="opacity-20" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[28px] font-bold text-ink mb-4">Kill the no-show problem for good</h3>
              <p className="body-lg mb-6">
                Require a card on file or a deposit for large groups and high-demand slots. Stolik automatically enforces your cancellation policy so you're protected without any awkward conversations.
              </p>
              <Button as={Link} to="/features" variant="link" className="text-[16px]">Learn how it works <ArrowRight size={16} /></Button>
            </div>
          </div>

          {/* Row 3: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full aspect-[4/3] bg-surface-2 rounded-2xl border border-border shadow-sm flex items-center justify-center text-ink-muted">
                <Lock size={48} className="opacity-20" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[28px] font-bold text-ink mb-4">Your guests, your data — forever</h3>
              <p className="body-lg mb-6">
                Unlike TheFork and other marketplaces, Stolik never owns your guest relationships. Every booking, every phone number, every visit history belongs to you — export it anytime, use it however you want.
              </p>
              <Button as={Link} to="/crm" variant="link" className="text-[16px]">See guest CRM <ArrowRight size={16} /></Button>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 4: Testimonial Quote Block ── */}
      <section className="bg-white py-24 border-b border-border reveal">
        <div className="container mx-auto px-4 max-w-[800px] text-center">
          <p className="text-[24px] md:text-[32px] leading-relaxed italic text-ink mb-12 font-medium" style={{ fontFamily: 'Georgia, serif' }}>
            "We replaced TheFork entirely. The commission savings paid for three years of Stolik in the first month."
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[20px] font-bold text-ink-muted uppercase tracking-[0.05em] cursor-default opacity-50">MAGNOLIA</span>
            <p className="text-[15px] font-bold text-ink">
              Jan Wiśniewski <span className="text-ink-secondary font-normal">· Restauracja Magnolia · Kraków</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Pricing Preview ── */}
      <PricingPreview />

      <Footer />
    </div>
  );
};

export default SolutionRestaurant;
