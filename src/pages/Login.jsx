import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StolikLogo from '../components/ui/StolikLogo';
import Button from '../components/ui/Button';
import { ChevronDown, Loader2 } from 'lucide-react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, handle login logic here
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      
      {/* ── Minimal Navbar ── */}
      <nav className="h-[64px] border-b border-border shrink-0 flex items-center justify-between px-6">
        <Link to="/" aria-label="Stolik Home">
          <StolikLogo size="md" />
        </Link>
        <Button as={Link} to="/signup" variant="primary" size="sm">Get started</Button>
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center pt-[80px] px-4 pb-16">
        <div className="w-full max-w-[400px]">
          
          <div className="flex justify-center mb-8">
            <StolikLogo size="lg" iconOnly />
          </div>

          <h1 className="text-[24px] font-bold text-ink text-center mb-8">
            Log in to your account
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col mb-6">
            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="email" className="text-[14px] font-bold text-ink">Email address</label>
              <input 
                id="email" 
                type="email" 
                required
                placeholder="you@example.com"
                className="input h-[48px]" 
              />
            </div>
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full h-[48px] justify-center text-[15px]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : 'Log in'}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-[12px] font-bold text-ink-muted uppercase tracking-wide">Or</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 w-full h-[48px] bg-white border-[1.5px] border-border rounded-lg text-[15px] font-bold text-ink hover:border-brand hover:bg-brand-lighter transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            
            <button className="flex items-center justify-center gap-3 w-full h-[48px] bg-white border-[1.5px] border-border rounded-lg text-[15px] font-bold text-ink hover:border-brand hover:bg-brand-lighter transition-all">
              <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0H0V10H10V0Z" fill="#F25022"/>
                <path d="M21 0H11V10H21V0Z" fill="#7FBA00"/>
                <path d="M10 11H0V21H10V11Z" fill="#00A4EF"/>
                <path d="M21 11H11V21H21V11Z" fill="#FFB900"/>
              </svg>
              Continue with Microsoft
            </button>
          </div>

          <div className="mt-6 text-center">
            <span className="text-[14px] text-ink-secondary">Don't have an account? </span>
            <Link to="/signup" className="text-[14px] font-medium text-brand hover:underline underline-offset-2">Sign up for free</Link>
          </div>

        </div>
      </main>

      {/* ── Minimal Footer Bar ── */}
      <footer className="border-t border-border py-6 px-6 shrink-0 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
      </footer>

    </div>
  );
};

export default Login;
