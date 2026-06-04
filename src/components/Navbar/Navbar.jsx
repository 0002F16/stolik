import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StolikLogo from '../ui/StolikLogo';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import {
  ChevronDown, Menu, Calendar, BarChart2, Users, CreditCard, Search,
  Link as LinkIcon, Smartphone, LayoutGrid, Settings, Shield,
  Utensils, Coffee, Hotel, Beer, MapPin, Grid, Building,
  BookOpen, FileCode, PlayCircle, Edit3, Book, Info, HelpCircle,
  MessageCircle, Mail
} from 'lucide-react';

const ProductMenu = () => (
  <div className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[-8px] group-hover:translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 overflow-hidden flex">
    <div className="w-1/2 p-4 bg-white">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">Product</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: Calendar, title: 'Reservations', desc: 'Simplified table booking' },
          { icon: BarChart2, title: 'Analytics', desc: 'Insights and reporting' },
          { icon: Users, title: 'Guest CRM', desc: 'Relationship management tools' },
          { icon: CreditCard, title: 'Payments', desc: 'Flexible deposit collection' },
          { icon: Search, title: 'Product overview', desc: 'Why choose Stolik' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <div className="w-1/2 p-4 bg-surface-2 border-l border-border">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">Platform</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: LinkIcon, title: 'Integrations', desc: 'Connect your tools' },
          { icon: Smartphone, title: 'Mobile app', desc: 'Manage on the go' },
          { icon: LayoutGrid, title: 'Booking widget', desc: 'Embed on your site' },
          { icon: Settings, title: 'Admin controls', desc: 'Manage access and roles' },
          { icon: Shield, title: 'Security', desc: 'Enterprise-grade protection' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-xs transition-all">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const SolutionsMenu = () => (
  <div className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[-8px] group-hover:translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 overflow-hidden flex">
    <div className="w-1/2 p-4 bg-white">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">By type</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: Utensils, title: 'Restaurants', desc: 'Full-service dining' },
          { icon: Coffee, title: 'Cafés & Bistros', desc: 'Casual dining venues' },
          { icon: Hotel, title: 'Hotel Restaurants', desc: 'Hospitality groups' },
          { icon: Beer, title: 'Bars & Lounges', desc: 'Drinks-first venues' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <div className="w-1/2 p-4 bg-surface-2 border-l border-border">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">By size</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: MapPin, title: 'Single location', desc: 'For solo operators' },
          { icon: Grid, title: 'Small groups', desc: '2–5 locations' },
          { icon: Building, title: 'Chains', desc: 'For enterprise' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-xs transition-all">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ResourcesMenu = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[850px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 overflow-hidden flex" style={{ transform: 'translate(-50%, -8px)' }}>
    <div className="w-1/3 p-4 bg-white">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">Get started</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: BookOpen, title: 'Learning hub', desc: 'Structured guides' },
          { icon: FileCode, title: 'Developer docs', desc: 'Build with Stolik API' },
          { icon: PlayCircle, title: 'Product tour', desc: 'See Stolik in action' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <div className="w-1/3 p-4 bg-surface-2 border-l border-border">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">Discover</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: Edit3, title: 'Blog', desc: 'Tips and best practices' },
          { icon: Book, title: 'Ebooks & webinars', desc: 'Expert insights' },
          { icon: Info, title: 'About us', desc: 'Our mission' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-xs transition-all">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <div className="w-1/3 p-4 bg-surface border-l border-border">
      <h4 className="text-[13px] font-bold text-ink uppercase tracking-[0.05em] mb-3 px-3">Support</h4>
      <div className="flex flex-col gap-1">
        {[
          { icon: HelpCircle, title: 'Help center', desc: 'Articles and FAQs' },
          { icon: MessageCircle, title: 'Community', desc: 'Connect with users' },
          { icon: Mail, title: 'Contact us', desc: 'Get support' },
        ].map((item, i) => (
          <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-brand-light text-brand flex items-center justify-center shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <div className="text-[14px] font-bold text-ink leading-tight mb-0.5">{item.title}</div>
              <div className="text-[12px] text-ink-muted leading-tight">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[64px] transition-all duration-200 ease-in-out ${
          scrolled ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'bg-transparent shadow-none'
        }`}
      >
        <div className="container h-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <Link to="/" aria-label="Stolik Home">
              <StolikLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group py-5">
                <button className="flex items-center gap-1 text-[15px] font-medium text-ink hover:text-brand transition-colors">
                  Product <ChevronDown size={16} className="text-ink-muted group-hover:text-brand transition-transform group-hover:rotate-180" />
                </button>
                <ProductMenu />
              </div>
              
              <div className="relative group py-5">
                <button className="flex items-center gap-1 text-[15px] font-medium text-ink hover:text-brand transition-colors">
                  Solutions <ChevronDown size={16} className="text-ink-muted group-hover:text-brand transition-transform group-hover:rotate-180" />
                </button>
                <SolutionsMenu />
              </div>

              <div className="relative group py-5">
                <button className="flex items-center gap-1 text-[15px] font-medium text-ink hover:text-brand transition-colors">
                  Resources <ChevronDown size={16} className="text-ink-muted group-hover:text-brand transition-transform group-hover:rotate-180" />
                </button>
                <ResourcesMenu />
              </div>

              <Link to="/pricing" className="text-[15px] font-medium text-ink hover:text-brand transition-colors py-5">
                Pricing
              </Link>

              <Link to="/demo" className="text-[15px] font-medium text-ink hover:text-brand transition-colors py-5">
                Live demo
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button as={Link} to="/login" variant="secondary" size="sm">Log In</Button>
              <Button as={Link} to="/signup" variant="primary" size="sm">Get started for free</Button>
            </div>

            {/* Mobile CTA & Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <Button as={Link} to="/signup" variant="primary" size="sm">Get started</Button>
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -mr-2 text-ink hover:bg-surface-2 rounded-lg transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
