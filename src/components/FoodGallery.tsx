import React from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 inline-block">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
            Food Gallery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Take a look at our freshly baked pizzas, savory starters, crisp salads, and sweet desserts.
          </p>
        </div>

        {/* Clean Grid Layout with Subtle Hover Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to crisp high-res pizza / food photo if any image fails
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-white flex items-center justify-between border-t border-stone-100">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {item.category}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  Fresh
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
