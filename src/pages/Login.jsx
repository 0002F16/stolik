import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StolikLogo from '../components/ui/StolikLogo';
import Button from '../components/ui/Button';
import { ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      // In a real app, send the login request to the backend here.
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

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center pt-2">
              <div className="w-14 h-14 rounded-full bg-brand-lighter text-brand flex items-center justify-center mb-5">
                <CheckCircle2 size={32} />
              </div>
              <h1 className="text-[24px] font-bold text-ink mb-3">Check your email</h1>
              <p className="text-[15px] text-ink-secondary mb-8 max-w-[320px]">
                We sent a secure login link to{' '}
                <span className="font-semibold text-ink">{email || 'your email'}</span>.
                Open it on this device to continue.
              </p>
              <Button as={Link} to="/" variant="secondary" className="w-full h-[48px] justify-center text-[15px]">
                Back to home
              </Button>
            </div>
          ) : (
            <>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

              <div className="mt-6 text-center">
                <span className="text-[14px] text-ink-secondary">Don't have an account? </span>
                <Link to="/signup" className="text-[14px] font-medium text-brand hover:underline underline-offset-2">Sign up for free</Link>
              </div>
            </>
          )}

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
