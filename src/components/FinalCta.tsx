import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-200 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Eat More. Smile More.</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
          Ready for Unlimited Happiness?
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Visit Kudrat Unlimited Pizza Hub with your friends and family and enjoy a delicious unlimited dining experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={RESTAURANT_INFO.phoneTel}
            id="cta-call-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-stone-100 text-emerald-950 font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-800" />
            <span>Call Now</span>
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-directions-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-600/60 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </section>
  );
};
