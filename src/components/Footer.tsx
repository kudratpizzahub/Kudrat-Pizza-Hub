import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Intro (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" lightText={true} />
            
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              Kudrat Unlimited Pizza Hub is Ahmedabad’s favorite destination for endless cheesy pizzas, 20+ fresh cold salads, hot starters, crispy chaat, and brownie mix ice cream.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <span className="text-emerald-400 font-semibold">100% Pure Vegetarian & Jain Options Available</span>
            </div>
          </div>

          {/* Quick Links (Col 6 to 8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#buffet" className="hover:text-emerald-400 transition-colors">
                  Unlimited Buffet Pricing
                </a>
              </li>
              <li>
                <a href="#whats-included" className="hover:text-emerald-400 transition-colors">
                  Menu Highlights
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Single Location Information (Col 9 to 12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Restaurant Location
            </h4>
            
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-stone-300">
                  {RESTAURANT_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-stone-300">{RESTAURANT_INFO.openDaily}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="text-stone-200 font-bold hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors border border-stone-700"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 mt-10 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Kudrat Unlimited Pizza Hub. All Rights Reserved.
          </div>
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
