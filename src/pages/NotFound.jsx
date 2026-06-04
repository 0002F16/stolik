import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-surface min-h-screen pt-[64px] flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-[480px]">
          <p className="text-[clamp(3.5rem,12vw,6rem)] font-extrabold leading-none text-gradient-brand mb-4">
            404
          </p>
          <h1 className="heading-section mb-4">This table isn't set yet</h1>
          <p className="body-lg mb-8">
            The page you're looking for doesn't exist or has moved. Let's get you back to something useful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/" variant="primary" size="lg">
              Back to home <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/pricing" variant="secondary" size="lg">
              See pricing
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
