import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import Badge from './ui/Badge';
import PricingToggle from './ui/PricingToggle';
import { Check, ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const PricingPreview = () => {
  const [billing, setBilling] = useState('yearly');
  const revealRef = useScrollReveal({ selector: '.reveal', stagger: true, staggerDelay: 80 });

  const renderPrice = (yearly, monthly) => (
    <div className="flex items-baseline gap-1 mb-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={billing}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-[40px] font-extrabold text-ink leading-none inline-block origin-bottom-left"
        >
          {billing === 'yearly' ? yearly : monthly}
        </motion.span>
      </AnimatePresence>
      <span className="text-[14px] text-ink-muted">/location/mo</span>
    </div>
  );

  const renderSaveBadge = (text) => (
    <div className="mb-6 h-[21px] flex items-center">
      <AnimatePresence>
        {billing === 'yearly' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[14px] font-medium text-brand m-0"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="section bg-white border-t border-border reveal" ref={revealRef}>
      <div className="container mx-auto">
        <h2 className="heading-section text-center mb-8">Pick the perfect plan for your restaurant</h2>
        <div className="flex justify-center mb-16">
          <PricingToggle value={billing} onChange={setBilling} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Free */}
          <div className="card-pricing flex flex-col">
            <h3 className="text-[18px] font-bold text-ink mb-2">FREE</h3>
            <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">For personal use</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-[40px] font-extrabold text-ink leading-none inline-block">Free</span>
            </div>
            <p className="text-[14px] text-ink-muted mb-6 h-[21px] flex items-center">Always free</p>
            <Button variant="secondary" className="w-full mb-8 justify-center">Get started</Button>
            <p className="text-[14px] font-bold text-ink mb-4">Features:</p>
            <ul className="flex flex-col gap-3 flex-1">
              {['1 booking type', 'Up to 30 bookings/month', 'Customize booking page', 'Email confirmations', 'Mobile app'].map(f => (
                <li key={f} className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <Check size={18} className="text-brand shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Starter */}
          <div className="card-pricing flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-[18px] font-bold text-ink">STARTER</h3>
              <AnimatePresence>
                {billing === 'yearly' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Badge variant="default" className="bg-surface-2 border border-border">Yearly</Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">For independent restaurants</p>
            
            {renderPrice('$9', '$12')}
            {renderSaveBadge('Save 25%')}
            
            <Button variant="secondary" className="w-full mb-8 justify-center">Get started</Button>
            <p className="text-[14px] font-bold text-ink mb-4">Free features, plus:</p>
            <ul className="flex flex-col gap-3 flex-1">
              {['Unlimited bookings', 'SMS reminders', 'No-show protection', 'Google Maps integration', '24/7 chat support'].map(f => (
                <li key={f} className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <Check size={18} className="text-brand shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* PRO */}
          <div className="card-pricing featured flex flex-col">
            <Badge variant="recommended" className="absolute top-[-14px] left-1/2 -translate-x-1/2">Recommended plan</Badge>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-[18px] font-bold text-brand">PRO</h3>
              <AnimatePresence>
                {billing === 'yearly' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Badge variant="default" className="bg-surface-2 border border-border">Yearly</Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">For growing restaurants</p>
            
            {renderPrice('$19', '$25')}
            {renderSaveBadge('Save 24%')}

            <Button variant="primary" className="w-full mb-8 justify-center">Try for Free</Button>
            <p className="text-[14px] font-bold text-ink mb-4">Starter features, plus:</p>
            <ul className="flex flex-col gap-3 flex-1">
              {['Table map (floor plan editor)', 'Guest CRM', 'Advanced analytics', 'Deposit collection', 'White-label widget'].map(f => (
                <li key={f} className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <Check size={18} className="text-brand shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div className="card-pricing flex flex-col">
            <h3 className="text-[18px] font-bold text-ink mb-2">BUSINESS</h3>
            <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">For restaurant groups</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-[40px] font-extrabold text-ink leading-none inline-block">Custom</span>
            </div>
            <p className="text-[14px] text-ink-muted mb-6 h-[21px] flex items-center">Starts at $99/mo</p>
            <Button variant="secondary" className="w-full mb-8 justify-center">Talk to sales</Button>
            <p className="text-[14px] font-bold text-ink mb-4">Pro features, plus:</p>
            <ul className="flex flex-col gap-3 flex-1">
              {['Multi-location dashboard', 'Dedicated account manager', 'SSO / SAML', 'Custom API access'].map(f => (
                <li key={f} className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <Check size={18} className="text-brand shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex justify-center">
          <Button as={Link} to="/pricing" variant="link" className="text-[16px]">Learn more on our pricing page <ArrowRight size={16} /></Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
