import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import SolutionRestaurant from './pages/SolutionRestaurant';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Demo from './pages/Demo';
import NotFound from './pages/NotFound';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  const appRef = useRef(null);

  // Re-trigger scroll reveal on route change
  useEffect(() => {
    const container = appRef.current;
    if (!container) return;

    // A simple observer to handle the reveal logic at the app root level
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Find all reveals
    const reveals = container.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    // Find and stagger grid reveals
    const grids = container.querySelectorAll('.reveal-grid');
    grids.forEach(grid => {
      observer.observe(grid); // reveal the grid itself
      const children = Array.from(grid.children);
      children.forEach((child, index) => {
        child.classList.add('reveal'); // add base reveal class
        child.style.transitionDelay = `${index * 80}ms`;
        observer.observe(child);
      });
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div ref={appRef} className="app-container overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
          <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
          <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
          <Route path="/solutions/restaurant" element={<PageTransition><SolutionRestaurant /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
          {/* Demo app renders its own full-screen chrome with fixed nav — must NOT be
              wrapped in PageTransition (its transform would break position: fixed). */}
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
