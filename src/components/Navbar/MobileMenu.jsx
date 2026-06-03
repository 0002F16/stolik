import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import StolikLogo from '../ui/StolikLogo';
import Button from '../ui/Button';

const MobileAccordionItem = ({ title, children, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-border opacity-0 translate-y-4 animate-[slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        className="w-full py-5 flex items-center justify-between text-[18px] font-bold text-ink"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown 
          size={20} 
          className={`text-ink transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-5 pt-1 pl-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between h-[64px] px-6 border-b border-border shrink-0">
        <StolikLogo size="md" />
        <button 
          onClick={onClose}
          className="p-2 -mr-2 text-ink hover:bg-surface-2 rounded-lg transition-colors"
          aria-label="Close mobile menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <MobileAccordionItem title="Product" delay={50}>
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em]">Product</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Reservations</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Analytics</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Guest CRM</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Payments</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Product overview</a>
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em] mt-2">Platform</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Integrations</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Mobile app</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Booking widget</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Admin controls</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Security</a>
          </div>
        </MobileAccordionItem>

        <MobileAccordionItem title="Solutions" delay={100}>
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em]">By type</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Restaurants</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Cafés & Bistros</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Hotel Restaurants</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Bars & Lounges</a>
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em] mt-2">By size</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Single location</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Small groups</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Chains</a>
          </div>
        </MobileAccordionItem>

        <MobileAccordionItem title="Resources" delay={150}>
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em]">Get started</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Learning hub</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Developer docs</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Product tour</a>
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em] mt-2">Discover</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Blog</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Ebooks & webinars</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">About us</a>
            <h4 className="text-[12px] font-bold text-ink-muted uppercase tracking-[0.05em] mt-2">Support</h4>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Help center</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Community</a>
            <a href="#" className="text-[16px] font-medium text-ink hover:text-brand">Contact us</a>
          </div>
        </MobileAccordionItem>

        <div 
          className="border-b border-border opacity-0 translate-y-4 animate-[slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: '200ms' }}
        >
          <a href="/pricing" className="block w-full py-5 text-[18px] font-bold text-ink hover:text-brand">
            Pricing
          </a>
        </div>
      </div>

      {/* Footer CTA */}
      <div 
        className="p-6 border-t border-border shrink-0 opacity-0 translate-y-4 animate-[slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        style={{ animationDelay: '250ms' }}
      >
        <div className="flex flex-col gap-3">
          <Button variant="primary" size="lg" className="w-full justify-center">Get started for free</Button>
          <Button variant="secondary" size="lg" className="w-full justify-center">Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
