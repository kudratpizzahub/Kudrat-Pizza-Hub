import React from 'react';
import { ArrowDown, MapPin, Sparkles, Utensils, Heart, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] py-12 lg:py-20 border-b border-stone-200/60">
      {/* Background Pizza Photo Texture with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&fm=webp&w=1600&q=70"
          alt=""
          role="presentation"
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-10 filter contrast-125 saturate-150 scale-105"
          loading="eager"
          decoding="async"
        />
        {/* Warm radial and linear vignettes so text & cards pop with high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/85 to-[#FAF7F2]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
      </div>

      {/* Decorative colorful ambient glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, description, CTA buttons & single badge */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Colorful Highlight Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-red-500/10 to-emerald-500/15 border border-amber-300/80 text-stone-900 text-xs font-extrabold shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>50+ Varieties of Unlimited Taste</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-stone-900 leading-[1.15]">
              Unlimited Taste, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-emerald-800">
                Unlimited Happiness.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Enjoy Ahmedabad’s favorite unlimited food feast with freshly baked pan pizzas, steaming hot soups, 20+ fresh cold salads, 12 sizzling starters, crispy chaat, and brownie ice cream.
            </p>

            {/* Colorful highlight pill tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold shadow-2xs">
                🍕 4 Types Pizzas
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold shadow-2xs">
                🥗 20 Cold Salads
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-2xs">
                🔥 12 Hot Starters
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold shadow-2xs">
                🍨 Brownie & Ice Cream
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#buffet"
                id="hero-explore-buffet-btn"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-emerald-800 hover:from-red-700 hover:to-emerald-900 text-white font-black text-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Utensils className="w-4 h-4 text-amber-200" />
                <span>Explore Buffet Pricing</span>
                <ArrowDown className="w-4 h-4 text-emerald-200" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-get-directions-btn"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border-2 border-emerald-800/30 text-emerald-950 font-bold text-sm shadow-sm transition-all text-center flex items-center justify-center gap-2 hover:border-emerald-800"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium, colorful food composition */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border-2 border-amber-200/80 bg-white group">
              
              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-red-600/95 text-white text-xs font-black shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                <Flame className="w-3.5 h-3.5 text-yellow-300" />
                <span>Buffet Starts @ ₹199/-</span>
              </div>

              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&fm=webp&w=800&q=75"
                  alt="Kudrat Unlimited Pizza Buffet Spread with Fresh Cheesy Pan Pizzas, Starters and Cold Salads in Ahmedabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="800"
                  height="600"
                />
              </div>
              
              <div className="p-4 sm:p-5 bg-gradient-to-r from-white via-amber-50/40 to-emerald-50/40 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-stone-900 font-display">
                    Fresh Pan Pizzas & Endless Starters
                  </h3>
                  <p className="text-xs text-emerald-800 font-bold mt-0.5 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>100% Pure Vegetarian with Jain Options</span>
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-black text-emerald-950 bg-gradient-to-r from-emerald-100 to-amber-100 px-3 py-1 rounded-full border border-emerald-300 shadow-2xs">
                    Unlimited
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
