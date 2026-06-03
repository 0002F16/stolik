import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import PricingToggle from '../components/ui/PricingToggle';
import Accordion from '../components/ui/Accordion';
import useScrollReveal from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
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
      <span className="text-[14px] text-ink-muted">/mo</span>
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

  const faqItems = [
    {
      id: 'q1',
      question: 'Can I cancel at any time?',
      answer: 'Yes. You can cancel your Stolik subscription at any time from your account settings. There are no cancellation fees and no long-term contracts.'
    },
    {
      id: 'q2',
      question: 'Can I use TheFork and Stolik at the same time?',
      answer: 'Absolutely. Stolik is a direct booking tool — your guests book on your website, Google profile, or Instagram. TheFork is a marketplace. Many restaurants use both and gradually shift guests to direct bookings over time.'
    },
    {
      id: 'q3',
      question: 'How do guests make a reservation?',
      answer: 'Guests click your Stolik booking link — on your website, Google Maps profile, or Instagram bio — and complete a booking in under 30 seconds. No account required on their end.'
    },
    {
      id: 'q4',
      question: 'Do I need a website to use Stolik?',
      answer: 'No. You can use your Stolik booking link directly in your Google Business profile, Instagram bio, or Facebook page. Millions of guests will be able to book without you ever needing a separate website.'
    },
    {
      id: 'q5',
      question: 'How does no-show protection work?',
      answer: `On the Starter plan and above, you can require guests to save a card on file or pay a deposit at booking. If they don't show up, Stolik can automatically charge the pre-agreed cancellation fee.`
    },
    {
      id: 'q6',
      question: 'Is Stolik GDPR compliant?',
      answer: 'Yes. All guest data is stored on EU servers and processed in accordance with GDPR. You own your guest data at all times — it is never sold or shared with third parties.'
    },
    {
      id: 'q7',
      question: 'How long does setup take?',
      answer: 'Most restaurants are live within 20 minutes. Connect your calendar, set your opening hours, customize your booking types, and paste the embed code on your website. Done.'
    },
    {
      id: 'q8',
      question: 'Do you issue VAT invoices?',
      answer: 'Yes. Stolik issues full VAT invoices for all paid plans, available to download from your account at any time.'
    }
  ];

  const renderCheck = () => <Check size={18} color="#00A86B" className="mx-auto" strokeWidth={3} />;
  const renderCross = () => <span className="text-ink-muted">—</span>;

  const tableData = [
    { type: 'category', name: 'RESERVATIONS' },
    { name: 'Standard booking types', free: '1', starter: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
    { name: 'Connect calendars', free: '1', starter: '6', pro: '6', business: '6' },
    { name: 'Unlimited bookings', free: false, starter: true, pro: true, business: true },
    { name: 'Customize your booking link', free: true, starter: true, pro: true, business: true },
    { name: 'Mobile app', free: true, starter: true, pro: true, business: true },
    { name: 'Booking polls and one-off slots', free: true, starter: true, pro: true, business: true },
    { name: 'View guest profiles & history', free: false, starter: true, pro: true, business: true },
    { name: 'Control opening hours', free: true, starter: true, pro: true, business: true },
    { name: 'Multi-table booking types', free: false, starter: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
    { name: 'Round-robin table assignment', free: false, starter: false, pro: 'Unlimited', business: 'Unlimited' },
    { name: 'Group/private dining bookings', free: false, starter: true, pro: true, business: true },
    { name: 'Book on behalf of guest', free: false, starter: true, pro: true, business: true },
    { name: 'Automate SMS/email reminders', free: false, starter: true, pro: true, business: true },
    { name: 'Automate follow-up messages', free: false, starter: true, pro: true, business: true },
    { name: 'Cancellation policy', free: false, starter: true, pro: true, business: true },
    { name: 'Pre-booking intake forms', free: false, starter: true, pro: true, business: true },

    { type: 'category', name: 'INTEGRATIONS' },
    { name: 'Google Calendar / iCal', free: '1', starter: true, pro: true, business: true },
    { name: 'Google Maps & Reserve', free: false, starter: true, pro: true, business: true },
    { name: 'Stripe, PayU, Przelewy24', free: false, starter: true, pro: true, business: true },
    { name: 'SMS API / Twilio', free: false, starter: true, pro: true, business: true },
    { name: 'Instagram / Facebook booking', free: false, starter: true, pro: true, business: true },
    { name: 'Custom webhooks', free: false, starter: true, pro: true, business: true },
    { name: 'Zapier', free: false, starter: true, pro: true, business: true },
    { name: 'Google Analytics', free: false, starter: true, pro: true, business: true },
    { name: 'TripAdvisor sync', free: false, starter: false, pro: true, business: true },
    { name: 'POS integrations', free: false, starter: false, pro: true, business: true },

    { type: 'category', name: 'PERSONALIZATIONS' },
    { name: 'Custom branding on booking page', free: true, starter: true, pro: true, business: true },
    { name: 'Remove Stolik branding', free: false, starter: false, pro: true, business: true },
    { name: 'Customize widget colors', free: false, starter: true, pro: true, business: true },
    { name: 'Custom confirmation pages', free: false, starter: true, pro: true, business: true },

    { type: 'category', name: 'ADMIN TOOLS' },
    { name: 'Team scheduling analytics', free: false, starter: true, pro: true, business: true },
    { name: 'Enforce brand consistency', free: false, starter: false, pro: true, business: true },
    { name: 'Organize staff into groups', free: false, starter: false, pro: true, business: true },
    { name: 'Managed booking templates', free: false, starter: false, pro: true, business: true },

    { type: 'category', name: 'SECURITY & CONTROL' },
    { name: 'GDPR data deletion', free: true, starter: true, pro: true, business: true },
    { name: 'Data Deletion API', free: false, starter: false, pro: false, business: true },
    { name: 'SAML Single Sign-On', free: false, starter: false, pro: 'Add-on', business: true },
    { name: 'SCIM user provisioning', free: false, starter: false, pro: false, business: true },
    { name: 'Domain control', free: false, starter: false, pro: false, business: true },
    { name: 'Security & legal reviews', free: false, starter: false, pro: false, business: true },

    { type: 'category', name: 'SUPPORT' },
    { name: 'Help center & community', free: true, starter: true, pro: true, business: true },
    { name: '24/7 Email support', free: false, starter: true, pro: true, business: true },
    { name: '24/7 Chat support', free: false, starter: true, pro: true, business: true },
    { name: 'Phone support', free: false, starter: false, pro: false, business: true },
    { name: 'Dedicated account manager', free: false, starter: false, pro: false, business: true },
    { name: 'Onboarding & implementation', free: false, starter: false, pro: false, business: true },
  ];

  const renderCell = (value) => {
    if (value === true) return renderCheck();
    if (value === false) return renderCross();
    return <span className="text-[14px] font-medium text-ink">{value}</span>;
  };

  return (
    <div className="bg-surface min-h-screen pt-[64px]" ref={revealRef}>
      <Navbar />

      {/* ── Section 1: Hero ── */}
      <section className="bg-white pt-[80px] pb-0 text-center reveal">
        <div className="container mx-auto">
          <h1 className="heading-hero mb-4">Pricing</h1>
          <h2 className="heading-section font-semibold mb-4">Pick the perfect plan for your restaurant</h2>
          <p className="body-lg max-w-[480px] mx-auto mt-[16px] mb-[32px]">
            Use Stolik for FREE or upgrade to one of our powerful plans. No per-cover fees. No surprises.
          </p>
          <div className="flex justify-center mb-[48px]">
            <PricingToggle value={billing} onChange={setBilling} />
          </div>
        </div>
      </section>

      {/* ── Section 2: 4 Pricing Cards ── */}
      <section className="bg-white pb-16 reveal">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Free */}
            <div className="card-pricing flex-1 flex flex-col min-h-[600px]">
              <h3 className="text-[18px] font-bold text-ink mb-2">FREE</h3>
              <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">Always free</p>
              <div className="text-[40px] font-extrabold text-ink leading-none mb-1">Free</div>
              <p className="text-[14px] text-ink-muted mb-6 invisible">Placeholder</p>
              <Button variant="secondary" className="w-full mb-8 justify-center">Get started</Button>
              <p className="text-[14px] font-bold text-ink mb-2">Scheduling:</p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> 1 booking type
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Connect 1 calendar
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Customize your booking page
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Mobile app
                </li>
              </ul>
            </div>

            {/* Starter */}
            <div className="card-pricing flex-1 flex flex-col min-h-[600px]">
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
              <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">Free features, plus:</p>
              
              {renderPrice('$9', '$12')}
              {renderSaveBadge('Save 25%')}
              
              <Button variant="secondary" className="w-full mb-8 justify-center">Try for free</Button>
              <p className="text-[14px] font-bold text-ink mb-2">Scheduling:</p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Unlimited booking types
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Connect multiple calendars
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Connect Google Maps & Reserve
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Connect Stripe, PayU
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Automate booking reminders
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Automate follow-up messages
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> 24/7 chat support
                </li>
              </ul>
            </div>

            {/* Pro */}
            <div className="card-pricing featured flex-1 flex flex-col min-h-[600px]">
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
              <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">Starter features, plus:</p>
              
              {renderPrice('$19', '$25')}
              {renderSaveBadge('Save 24%')}
              
              <Button variant="primary" className="w-full mb-8 justify-center">Try for free</Button>
              
              <p className="text-[14px] font-bold text-ink mb-2">Scheduling:</p>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Floor plan table management
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Round-robin table assignment
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Route guests by party size
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Advanced guest CRM
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Collect deposits at booking
                </li>
              </ul>
              
              <p className="text-[14px] font-bold text-ink mb-2">Security add-on:</p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Single Sign-On available
                </li>
              </ul>
            </div>

            {/* Business */}
            <div className="card-pricing flex-1 flex flex-col min-h-[600px]">
              <h3 className="text-[18px] font-bold text-ink mb-2">BUSINESS</h3>
              <p className="text-[14px] text-ink-secondary mb-4 min-h-[40px]">Pro features, plus:</p>
              <div className="text-[40px] font-extrabold text-ink leading-none mb-1">Custom</div>
              <p className="text-[14px] text-ink-muted mb-6">Starts at $99/mo</p>
              <Button variant="secondary" className="w-full mb-8 justify-center">Contact sales</Button>
              
              <p className="text-[14px] font-bold text-ink mb-2">Scheduling:</p>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Multi-location dashboard
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Connect POS systems
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Dedicated account manager
                </li>
              </ul>
              
              <p className="text-[14px] font-bold text-ink mb-2">Security:</p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Enable SSO & SAML
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Domain control
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Audit log compliance
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Data deletion API
                </li>
                <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                  <span className="text-ink-secondary shrink-0 mt-[-2px]">•</span> Security and legal reviews
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Feature Comparison Table ── */}
      <section className="bg-white py-16 border-t border-border reveal hidden md:block">
        <div className="container mx-auto">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="comparison-table w-full">
              <thead className="bg-white sticky top-[64px] z-10 shadow-[0_1px_0_#E5E7EB]">
                <tr>
                  <th className="w-1/3 py-5 px-6 text-left text-[15px] font-bold text-ink">Feature</th>
                  <th className="w-1/6 py-5 px-4 text-center text-[15px] font-bold text-ink">Free</th>
                  <th className="w-1/6 py-5 px-4 text-center text-[15px] font-bold text-ink">Starter</th>
                  <th className="w-1/6 py-5 px-4 text-center text-[15px] font-bold text-brand bg-brand-lighter border-x-2 border-x-brand border-t-2 border-t-brand rounded-t-lg">Pro</th>
                  <th className="w-1/6 py-5 px-4 text-center text-[15px] font-bold text-ink">Business</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => {
                  if (row.type === 'category') {
                    return (
                      <tr key={`cat-${index}`} className="bg-[#F1F3F5]">
                        <td colSpan={5} className="py-3 px-6 text-[13px] font-bold text-ink uppercase tracking-[0.05em] border-y border-border">
                          {row.name}
                        </td>
                      </tr>
                    );
                  }

                  // Determine row background color
                  // In Calendly, typical rows alternate white/surface-2.
                  // Since categories reset the group, let's alternate based on index for simplicity,
                  // or just alternate every row.
                  const isEven = index % 2 === 0;

                  return (
                    <tr key={`row-${index}`} className={`group ${isEven ? 'bg-surface-2' : 'bg-white'}`}>
                      <td className="py-4 px-6 text-[14px] text-ink-secondary border-b border-border group-hover:bg-brand-lighter transition-colors">
                        {row.name}
                      </td>
                      <td className="py-4 px-4 text-center border-b border-border group-hover:bg-brand-lighter transition-colors">
                        {renderCell(row.free)}
                      </td>
                      <td className="py-4 px-4 text-center border-b border-border group-hover:bg-brand-lighter transition-colors">
                        {renderCell(row.starter)}
                      </td>
                      <td className="py-4 px-4 text-center border-b border-border bg-brand-lighter border-x-2 border-x-brand group-hover:bg-brand-light transition-colors">
                        {renderCell(row.pro)}
                      </td>
                      <td className="py-4 px-4 text-center border-b border-border group-hover:bg-brand-lighter transition-colors">
                        {renderCell(row.business)}
                      </td>
                    </tr>
                  );
                })}
                {/* Footer row for Pro column styling closure */}
                <tr className="bg-white h-2">
                  <td className="border-none"></td>
                  <td className="border-none"></td>
                  <td className="border-none"></td>
                  <td className="border-b-2 border-x-2 border-brand rounded-b-lg bg-brand-lighter"></td>
                  <td className="border-none"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4: FAQ Accordion ── */}
      <section className="section bg-surface-2 border-t border-border reveal">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="heading-section text-center mb-12">Frequently asked questions</h2>
          <Accordion items={faqItems} className="bg-white rounded-xl border border-border p-6 shadow-sm" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
