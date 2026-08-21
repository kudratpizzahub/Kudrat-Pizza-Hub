import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Unlimited Buffet', href: '#buffet' },
    { label: 'Menu Highlights', href: '#whats-included' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Colorful Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-amber-700 to-red-700 text-white text-xs font-semibold py-1.5 px-4 text-center shadow-inner overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] font-bold">
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
            <span>Special Buffet</span>
          </span>
          <span>Lunch ₹199 • Dinner ₹249 • 50+ Unlimited Varieties in Ahmedabad!</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md border-b border-stone-200/80 py-2.5'
            : 'bg-[#FDFBF7] border-b border-stone-200/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <a href="#home" className="flex items-center group">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-stone-100/70 p-1 rounded-full border border-stone-200/60">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-stone-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-800 hover:to-teal-700 transition-all shadow-none hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#buffet"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-black shadow-sm transition-all hover:scale-105"
            >
              <span>Buffet ₹199/-</span>
            </a>

            <a
              href={RESTAURANT_INFO.phoneTel}
              id="header-call-btn"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95 border border-emerald-600/30"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-800 text-white text-xs font-bold sm:hidden shadow-sm"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 bg-stone-100 border border-stone-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200 shadow-xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-stone-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-700" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-2">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call Now ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
