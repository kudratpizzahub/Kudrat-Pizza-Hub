import React from 'react';
import { Clock, Check, MessageCircle, Sparkles, Flame, Sun, Moon } from 'lucide-react';
import { BUFFET_PRICING, RESTAURANT_INFO } from '../data/restaurantData';

export const BuffetPricing: React.FC = () => {
  return (
    <section id="buffet" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFDF9] to-[#FAF7F2] border-y border-stone-200/80 relative overflow-hidden">
      {/* Decorative background color blooms */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-amber-100 border border-emerald-300/80 text-emerald-950 text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Best Value Unlimited Feast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
            Unlimited Buffet Pricing
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Enjoy unlimited courses of fresh hot pizzas, cold salads, starters, chaat, and desserts at Ahmedabad's most loved prices.
          </p>
        </div>

        {/* Two Vibrant Colorful Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Lunch (Vibrant Emerald & Mint Theme) */}
          <div className="rounded-3xl bg-gradient-to-b from-emerald-50/90 via-white to-emerald-50/40 border-2 border-emerald-500/50 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-emerald-600 transition-all flex flex-col justify-between relative group">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-300" />
              <span>Daytime Special</span>
            </div>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                <div>
                  <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block">
                    Lunch Unlimited
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display mt-0.5">
                    {BUFFET_PRICING.lunch.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-300 text-emerald-900 text-xs font-bold shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{BUFFET_PRICING.lunch.timeSlot}</span>
                </div>
              </div>

              {/* Prices */}
              <div className="space-y-3.5">
                {/* Adult */}
                <div className="p-4 rounded-2xl bg-white border-2 border-emerald-200/80 flex items-center justify-between shadow-xs">
                  <div>
                    <div className="text-sm font-black text-stone-900">Adult</div>
                    <div className="text-xs text-stone-500 font-medium">Per Person Unlimited</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                        Save ₹50
                      </span>
                      <span className="text-sm text-stone-400 line-through font-medium">
                        ₹{BUFFET_PRICING.lunch.adult.originalPrice}
                      </span>
                    </div>
                    <div className="text-3xl font-black text-emerald-800 font-display">
                      ₹{BUFFET_PRICING.lunch.adult.discountedPrice}
                    </div>
                  </div>
                </div>

                {/* Kids */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-sm font-black text-stone-900">Kids</div>
                    <div className="text-xs text-stone-500 font-medium">{BUFFET_PRICING.lunch.kids.label}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                        Save ₹60
                      </span>
                      <span className="text-sm text-stone-400 line-through font-medium">
                        ₹{BUFFET_PRICING.lunch.kids.originalPrice}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-stone-900 font-display">
                      ₹{BUFFET_PRICING.lunch.kids.discountedPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description & Included Highlights */}
              <div className="space-y-2 pt-1 text-xs text-stone-600 bg-emerald-100/50 p-3.5 rounded-xl border border-emerald-200/60">
                <p className="font-semibold text-stone-800">
                  {BUFFET_PRICING.lunch.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-900 font-bold pt-0.5">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
                  <span>Includes all 50+ spread items (Soups, Salads, Pizzas & more)</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-6 mt-6 border-t border-emerald-100">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-400/20" />
                <span>Visit for Lunch (₹199)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Dinner (Vibrant Warm Amber & Sunset Red Theme) */}
          <div className="rounded-3xl bg-gradient-to-b from-amber-50/90 via-white to-red-50/40 border-2 border-amber-500/60 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-amber-600 transition-all flex flex-col justify-between relative group">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-600 to-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Moon className="w-3.5 h-3.5 text-yellow-300" />
              <span>Evening Grand Feast</span>
            </div>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-amber-100 pb-4">
                <div>
                  <span className="text-xs font-black text-amber-800 uppercase tracking-wider block">
                    Dinner Unlimited
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display mt-0.5">
                    {BUFFET_PRICING.dinner.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-bold shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>{BUFFET_PRICING.dinner.timeSlot}</span>
                </div>
              </div>

              {/* Prices */}
              <div className="space-y-3.5">
                {/* Adult */}
                <div className="p-4 rounded-2xl bg-white border-2 border-amber-200/80 flex items-center justify-between shadow-xs">
                  <div>
                    <div className="text-sm font-black text-stone-900">Adult</div>
                    <div className="text-xs text-stone-500 font-medium">Per Person Unlimited</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                        Save ₹50
                      </span>
                      <span className="text-sm text-stone-400 line-through font-medium">
                        ₹{BUFFET_PRICING.dinner.adult.originalPrice}
                      </span>
                    </div>
                    <div className="text-3xl font-black text-amber-800 font-display">
                      ₹{BUFFET_PRICING.dinner.adult.discountedPrice}
                    </div>
                  </div>
                </div>

                {/* Kids */}
                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-sm font-black text-stone-900">Kids</div>
                    <div className="text-xs text-stone-500 font-medium">{BUFFET_PRICING.dinner.kids.label}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                        Save ₹70
                      </span>
                      <span className="text-sm text-stone-400 line-through font-medium">
                        ₹{BUFFET_PRICING.dinner.kids.originalPrice}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-stone-900 font-display">
                      ₹{BUFFET_PRICING.dinner.kids.discountedPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description & Included Highlights */}
              <div className="space-y-2 pt-1 text-xs text-stone-600 bg-amber-100/50 p-3.5 rounded-xl border border-amber-200/60">
                <p className="font-semibold text-stone-800">
                  {BUFFET_PRICING.dinner.description}
                </p>
                <div className="flex items-center gap-2 text-amber-900 font-bold pt-0.5">
                  <Flame className="w-4 h-4 text-red-600" />
                  <span>Includes Signature Brownie Mix Ice Cream dessert</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-6 mt-6 border-t border-amber-100">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-yellow-200 fill-yellow-300/20" />
                <span>Visit for Dinner (₹249)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Terms & Conditions Note Below Cards */}
        <div className="mt-10 text-center">
          <div className="inline-block px-5 py-2.5 rounded-full bg-stone-100 border border-stone-300 text-xs text-stone-600 font-semibold shadow-2xs">
            {BUFFET_PRICING.disclaimer}
          </div>
        </div>

      </div>
    </section>
  );
};
