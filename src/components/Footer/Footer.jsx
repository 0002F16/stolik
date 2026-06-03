import React from 'react';
import StolikLogo from '../ui/StolikLogo';
import { Globe, ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-[64px] pb-[40px]">
      <div className="container mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
          <div className="max-w-[320px]">
            <div className="mb-6">
              <StolikLogo size="lg" />
            </div>
            <p className="text-[20px] text-ink-secondary leading-[1.4]">
              Restaurant bookings, minus the phone calls.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 w-full max-w-[800px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-2">Product</h4>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Reservations</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Table management</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Guest CRM</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Payments</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Customizable hours</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Mobile app</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Booking widget</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Booking types</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Email & website embeds</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Reminders & follow-ups</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Analytics</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Admin management</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-2">Integrations</h4>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Google Maps</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Google Reserve</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Stripe / PayU</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">SMS notifications</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Calendars</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Video / calls</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Payment processors</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Marketing tools</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">API & webhooks</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-2">Stolik</h4>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Pricing</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Product overview</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Solutions</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">For single locations</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">For small groups</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">For chains</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Compare with TheFork</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Security</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Sign up for free</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Talk to sales</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Get a demo</a>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-2">Resources</h4>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Help center</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Resource center</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Blog</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Customer stories</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Learning hub</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Community</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Developer tools</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Release notes</a>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-2">Company</h4>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">About us</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Leadership</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Careers <span className="text-brand">(We're hiring!)</span></a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Newsroom</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Become a partner</a>
              <a href="#" className="text-[14px] text-ink-secondary hover:text-brand transition-colors duration-150">Contact us</a>
            </div>
          </div>
        </div>

        {/* Extensions & Downloads */}
        <div className="flex flex-wrap items-center gap-6 mb-8 lg:mb-12">
          <a href="#" className="text-[14px] font-medium text-ink hover:text-brand transition-colors flex items-center gap-2">
            App Store
          </a>
          <a href="#" className="text-[14px] font-medium text-ink hover:text-brand transition-colors flex items-center gap-2">
            Google Play
          </a>
          <a href="#" className="text-[14px] font-medium text-ink hover:text-brand transition-colors flex items-center gap-2">
            Chrome extension
          </a>
          <a href="#" className="text-[14px] font-medium text-ink hover:text-brand transition-colors flex items-center gap-2">
            Firefox extension
          </a>
          <a href="#" className="text-[14px] font-medium text-ink hover:text-brand transition-colors flex items-center gap-2">
            Safari extension
          </a>
        </div>

        {/* Social Row */}
        <div className="flex items-center gap-6 mb-12">
          <a href="#" aria-label="X (Twitter)" className="text-ink hover:text-brand transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-ink hover:text-brand transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-ink hover:text-brand transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-ink hover:text-brand transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="text-ink hover:text-brand transition-colors">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" aria-label="TikTok" className="text-ink hover:text-brand transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.5-1.22 1.53-2.92 2.5-4.81 2.82-1.9.33-3.92.1-5.65-.8-1.74-.89-3.04-2.48-3.66-4.34-.63-1.85-.45-4.04.56-5.74 1.01-1.71 2.73-2.92 4.67-3.32 1.94-.39 4.02-.15 5.76.76v4.18c-1.07-.63-2.39-.75-3.55-.43-1.16.32-2.15 1.17-2.65 2.23-.51 1.06-.51 2.37.01 3.42.52 1.06 1.5 1.9 2.67 2.11 1.16.21 2.42-.05 3.37-.73.94-.68 1.53-1.76 1.63-2.92.05-.62.05-1.25.05-1.88V.02h3.2z" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button className="flex items-center gap-1 text-[13px] text-ink-muted hover:text-ink transition-colors">
              English <ChevronDown size={14} />
            </button>
            <a href="#" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Legal</a>
            <a href="#" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Status</a>
            <a href="#" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Cookie Settings</a>
          </div>
          <div className="text-[13px] text-ink-muted">
            Copyright Stolik
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
