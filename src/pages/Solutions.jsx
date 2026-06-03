import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/ui/Button';
import PricingPreview from '../components/PricingPreview';
import useScrollReveal from '../hooks/useScrollReveal';
import { ArrowRight, Utensils, Coffee, MapPin, Building } from 'lucide-react';

const Solutions = () => {
  const revealRef = useScrollReveal({ selector: '.reveal', stagger: true, staggerDelay: 80 });

  return (
    <div className="bg-surface min-h-screen pt-[64px]" ref={revealRef}>
      <Navbar />

      {/* ── Section 1: Hero ── */}
      <section className="bg-white py-[80px] text-center reveal">
        <div className="container mx-auto px-4">
          <h1 className="heading-hero max-w-[640px] mx-auto mb-5">
            Stolik for every type of restaurant
          </h1>
          <p className="body-lg max-w-[520px] mx-auto">
            From a solo café to a chain of hotel restaurants — one platform that grows with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-[32px]">
            <Button as={Link} to="/signup" variant="primary" size="lg">Sign up for free</Button>
            <Button as={Link} to="/demo" variant="secondary" size="lg">Get a demo</Button>
          </div>
        </div>
      </section>

      {/* ── Section 2: Solutions Grid ── */}
      <section className="bg-white pb-24 reveal">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left Column: By type */}
            <div className="flex flex-col gap-8">
              <h3 className="text-[14px] font-bold text-ink-muted uppercase tracking-wide">By type</h3>
              
              <Link to="/solutions/restaurant" className="group flex flex-col bg-surface-2 border border-border p-8 rounded-2xl hover:shadow-md hover:border-brand transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                  <Utensils size={24} />
                </div>
                <h4 className="text-[22px] font-bold text-ink mb-2">Restaurants</h4>
                <p className="text-[14px] font-bold text-brand mb-4">Full-service dining</p>
                <p className="text-[15px] text-ink-secondary mb-8">
                  Stolik powers table reservations, private dining, and guest management for full-service restaurants of all sizes.
                </p>
                <span className="text-[15px] font-bold text-brand mt-auto flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </span>
              </Link>

              <Link to="/solutions/cafe" className="group flex flex-col bg-surface-2 border border-border p-8 rounded-2xl hover:shadow-md hover:border-brand transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                  <Coffee size={24} />
                </div>
                <h4 className="text-[22px] font-bold text-ink mb-2">Cafés & Bistros</h4>
                <p className="text-[14px] font-bold text-brand mb-4">Casual dining & coffee</p>
                <p className="text-[15px] text-ink-secondary mb-8">
                  Quick and simple booking for walk-in friendly venues that also take reservations for peak hours.
                </p>
                <span className="text-[15px] font-bold text-brand mt-auto flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </span>
              </Link>
            </div>

            {/* Right Column: By size */}
            <div className="flex flex-col gap-8">
              <h3 className="text-[14px] font-bold text-ink-muted uppercase tracking-wide">By size</h3>

              <Link to="/solutions/single" className="group flex flex-col bg-surface-2 border border-border p-8 rounded-2xl hover:shadow-md hover:border-brand transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h4 className="text-[22px] font-bold text-ink mb-2">Single Location</h4>
                <p className="text-[14px] font-bold text-brand mb-4">For independent restaurants</p>
                <p className="text-[15px] text-ink-secondary mb-8">
                  Everything you need as an independent operator — setup in 20 minutes, no IT team required.
                </p>
                <span className="text-[15px] font-bold text-brand mt-auto flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </span>
              </Link>

              <Link to="/solutions/chains" className="group flex flex-col bg-surface-2 border border-border p-8 rounded-2xl hover:shadow-md hover:border-brand transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                  <Building size={24} />
                </div>
                <h4 className="text-[22px] font-bold text-ink mb-2">Groups & Chains</h4>
                <p className="text-[14px] font-bold text-brand mb-4">For multi-location operators</p>
                <p className="text-[15px] text-ink-secondary mb-8">
                  One dashboard for all your venues. Centralize booking management, enforce brand consistency, and report across locations.
                </p>
                <span className="text-[15px] font-bold text-brand mt-auto flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Social Proof Strip ── */}
      <section className="bg-[#1A1D23] py-20 reveal">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-3 gap-12 text-white">
            <div className="flex flex-col border-t border-[rgba(255,255,255,0.2)] pt-6">
              <p className="text-[18px] leading-relaxed mb-6 italic">
                "Before Stolik, we had 40+ phone calls a day just for reservations. Now 85% of our bookings come in automatically."
              </p>
              <p className="text-[14px] font-bold mt-auto opacity-70">
                — Jan Wiśniewski, Restauracja Magnolia, Kraków
              </p>
            </div>
            <div className="flex flex-col border-t border-[rgba(255,255,255,0.2)] pt-6">
              <p className="text-[18px] leading-relaxed mb-6 italic">
                "The setup took 20 minutes. Our guests love the simplicity — no app download, no account. Just pick a time and show up."
              </p>
              <p className="text-[14px] font-bold mt-auto opacity-70">
                — Monika Kowalczyk, Bistro Nowa, Warsaw
              </p>
            </div>
            <div className="flex flex-col border-t border-[rgba(255,255,255,0.2)] pt-6">
              <p className="text-[18px] leading-relaxed mb-6 italic">
                "We switched from TheFork to Stolik and saved over 8,000 PLN in commission fees in the first three months."
              </p>
              <p className="text-[14px] font-bold mt-auto opacity-70">
                — Tomasz Nowak, NUTA Restaurant, Gdańsk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Pricing Preview ── */}
      <PricingPreview />

      <Footer />
    </div>
  );
};

export default Solutions;
