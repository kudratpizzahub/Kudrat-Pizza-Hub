import React from 'react';
import { Heart, Sparkles, CheckCircle2, Award, Flame, Smile } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FFFDF9] to-[#FDFBF7] relative overflow-hidden">
      {/* Decorative colorful ambient glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-200/80 bg-white group">
              <img
                src="https://lh3.googleusercontent.com/d/1OYl9dO11JOiy1zNs9SLTbzHliV828PBe"
                alt="Kudrat Unlimited Pizza Hub Interior and Dining"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://drive.google.com/thumbnail?id=1OYl9dO11JOiy1zNs9SLTbzHliV828PBe&sz=w1200';
                }}
                className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Floating Top Pill */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-800 to-teal-800 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Ahmedabad's Best Value Hub</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-stone-200/80 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Heart className="w-6 h-6 text-white fill-white/30" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-stone-900 font-display">
                      Pure Vegetarian & Jain Friendly
                    </div>
                    <p className="text-[11px] text-stone-600 font-medium">
                      Cooked fresh with hygiene, utmost care, and authentic spices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading and description */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-center lg:text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 border border-emerald-300 text-emerald-950 text-xs font-black uppercase tracking-wider shadow-xs">
                <Smile className="w-3.5 h-3.5 text-amber-600" />
                <span>About Our Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
                Eat More. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-emerald-800">Smile More.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-medium">
              Kudrat Unlimited Pizza Hub brings together delicious food, endless variety and an energetic dining celebration. From piping-hot cheesy pan pizzas to 20+ fresh salads, sizzling starters, street-style chaat and heavenly brownies with ice cream — we make every meal unforgettable!
            </p>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 border border-emerald-200/80 shadow-2xs">
              <p className="text-sm font-bold text-stone-900 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
                <span>{RESTAURANT_INFO.servingText}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
              <div className="flex items-start gap-2.5 text-xs font-bold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Endless oven-fresh pizza slices</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs font-bold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>20 varieties of crisp cold salads</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs font-bold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>12 sizzling hot starters & chaat</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs font-bold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Signature brownie with ice cream</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
