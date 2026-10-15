import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import frontlineLogo from '../assets/images/cd2eee_e0511956a9d54b74accf1487de012a66~mv2.png';

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 50;
  const showLogo = scrollY > 50 || location.pathname !== '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between lg:grid lg:grid-cols-3 items-center">
        {/* Logo - Faded out at the top of homepage, fades in during scroll */}
        <div className="flex justify-start">
          <Link 
            to="/" 
            className={`flex items-center z-50 relative transition-all duration-500 hover:opacity-80 ${showLogo ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
          >
            <img 
              src={frontlineLogo} 
              alt="Frontline Lawyers Logo" 
              className={`h-7 md:h-8 w-auto object-contain transition-all duration-300 ${isScrolled ? 'filter brightness-110' : 'invert brightness-0'}`}
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Desktop Nav - Centered/Right-aligned based on responsive scale */}
        <nav className="hidden md:flex items-center md:ml-auto lg:ml-0 lg:mx-auto justify-center gap-6 lg:gap-7">
          <a href="/#about" className={`text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-300 hover:text-gold-400' : 'text-charcoal-950 hover:text-gold-500 font-bold'}`}>About</a>
          <a href="/#practice-areas" className={`text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-300 hover:text-gold-400' : 'text-charcoal-950 hover:text-gold-500 font-bold'}`}>Expertise</a>
          <Link to="/reviews" className={`text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-300 hover:text-gold-400' : 'text-charcoal-950 hover:text-gold-500 font-bold'}`}>Results</Link>
          <Link to="/faqs" className={`text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-300 hover:text-gold-400' : 'text-charcoal-950 hover:text-gold-500 font-bold'}`}>FAQ's</Link>
          <a href="/#contact" className={`text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-neutral-300 hover:text-gold-400' : 'text-charcoal-950 hover:text-gold-500 font-bold'}`}>Contact</a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex md:hidden lg:flex items-center justify-end gap-3 z-50 relative">
          <a href="tel:0421066608" className="hidden lg:flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors">
            <Phone className="w-4 h-4" />
            <span>0421 066 608</span>
          </a>
          <button className={`md:hidden p-2 ${isScrolled ? 'text-white' : 'text-charcoal-950'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-charcoal-900 border-b border-white/10 shadow-2xl py-6 px-4 flex flex-col gap-6 md:hidden"
            >
              <a href="/#about" className="text-sm uppercase tracking-widest text-neutral-300 border-b border-white/5 pb-4" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="/#practice-areas" className="text-sm uppercase tracking-widest text-neutral-300 border-b border-white/5 pb-4" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
              <Link to="/reviews" className="text-sm uppercase tracking-widest text-neutral-300 border-b border-white/5 pb-4" onClick={() => setMobileMenuOpen(false)}>Results</Link>
              <Link to="/faqs" className="text-sm uppercase tracking-widest text-neutral-300 border-b border-white/5 pb-4" onClick={() => setMobileMenuOpen(false)}>FAQ's</Link>
              <a href="/#contact" className="text-sm uppercase tracking-widest text-neutral-300 border-b border-white/5 pb-4" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="tel:0421066608" className="flex justify-center items-center gap-2 bg-gold-400 text-white px-5 py-4 font-bold uppercase tracking-widest text-xs mt-2">
                <Phone className="w-5 h-5" />
                <span>Call 0421 066 608</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
