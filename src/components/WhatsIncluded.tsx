import React from 'react';
import { INCLUDED_ITEMS } from '../data/restaurantData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

// Color themes based on category
const categoryThemes: Record<string, { badge: string; pill: string; border: string; text: string }> = {
  'Starters': {
    badge: 'bg-gradient-to-r from-orange-600 to-amber-600 text-white',
    pill: 'bg-orange-50 text-orange-900 border-orange-200',
    border: 'hover:border-orange-400 group-hover:shadow-orange-500/10',
    text: 'text-orange-700',
  },
  'Healthy & Fresh': {
    badge: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
    pill: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    border: 'hover:border-emerald-400 group-hover:shadow-emerald-500/10',
    text: 'text-emerald-800',
  },
  'Hot Starters': {
    badge: 'bg-gradient-to-r from-red-600 to-orange-600 text-white',
    pill: 'bg-red-50 text-red-900 border-red-200',
    border: 'hover:border-red-400 group-hover:shadow-red-500/10',
    text: 'text-red-700',
  },
  'Beverages': {
    badge: 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white',
    pill: 'bg-sky-50 text-sky-900 border-sky-200',
    border: 'hover:border-sky-400 group-hover:shadow-sky-500/10',
    text: 'text-sky-800',
  },
  'Street Food Special': {
    badge: 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white',
    pill: 'bg-amber-50 text-amber-950 border-amber-200',
    border: 'hover:border-amber-400 group-hover:shadow-amber-500/10',
    text: 'text-amber-800',
  },
  'Breads': {
    badge: 'bg-gradient-to-r from-yellow-600 to-amber-600 text-white',
    pill: 'bg-yellow-50 text-yellow-950 border-yellow-200',
    border: 'hover:border-yellow-400 group-hover:shadow-yellow-500/10',
    text: 'text-yellow-800',
  },
  'Main Course (Pizzas)': {
    badge: 'bg-gradient-to-r from-red-600 to-rose-700 text-white',
    pill: 'bg-rose-50 text-rose-950 border-rose-200',
    border: 'hover:border-rose-400 group-hover:shadow-rose-500/10',
    text: 'text-rose-800',
  },
  'Desserts': {
    badge: 'bg-gradient-to-r from-pink-600 to-purple-600 text-white',
    pill: 'bg-pink-50 text-pink-950 border-pink-200',
    border: 'hover:border-pink-400 group-hover:shadow-pink-500/10',
    text: 'text-pink-800',
  },
  'All-Time Favorites': {
    badge: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white',
    pill: 'bg-orange-50 text-orange-950 border-orange-200',
    border: 'hover:border-orange-400 group-hover:shadow-orange-500/10',
    text: 'text-orange-800',
  },
  'Grand Finale Dessert': {
    badge: 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white',
    pill: 'bg-purple-50 text-purple-950 border-purple-200',
    border: 'hover:border-purple-400 group-hover:shadow-purple-500/10',
    text: 'text-purple-800',
  },
};

const defaultTheme = {
  badge: 'bg-gradient-to-r from-emerald-800 to-teal-800 text-white',
  pill: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  border: 'hover:border-emerald-400 group-hover:shadow-emerald-500/10',
  text: 'text-emerald-800',
};

export const WhatsIncluded: React.FC = () => {
  return (
    <section id="whats-included" className="py-16 lg:py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative colorful background blooms */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 via-rose-100 to-emerald-100 border border-amber-300 text-stone-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Grand Unlimited Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
            What's Included in the Buffet
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium">
            Every guest enjoys 100% full access to our massive unlimited buffet counter, freshly prepared with love throughout the day.
          </p>
        </div>

        {/* Colorful Grid with Vibrant Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INCLUDED_ITEMS.map((item) => {
            const theme = categoryThemes[item.category] || defaultTheme;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border-2 border-stone-200/80 p-5 flex flex-col justify-between shadow-xs hover:shadow-lg ${theme.border} transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="space-y-3">
                  
                  {/* Image Thumbnail with Floating Badge */}
                  <div className="w-full h-40 rounded-xl overflow-hidden bg-stone-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Floating Count Badge */}
                    <div className={`absolute top-2.5 right-2.5 px-3 py-1 rounded-lg ${theme.badge} font-black text-xs shadow-md tracking-wide`}>
                      {item.count}
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div>
                    <span className={`text-[11px] font-black uppercase tracking-wider block ${theme.text}`}>
                      {item.category}
                    </span>
                    <h3 className="text-base font-black text-stone-900 font-display mt-0.5 group-hover:text-stone-950 transition-colors">
                      {item.count !== 'Combo' && item.count !== 'Dessert' ? `${item.count} ${item.title}` : item.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Tag indicator */}
                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className={`inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-md border ${theme.pill}`}>
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Unlimited Refills</span>
                  </span>
                  <span className="text-emerald-800 font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Pure Veg</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
