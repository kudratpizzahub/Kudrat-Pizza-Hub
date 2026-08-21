import React from 'react';
import { MapPin, Clock, Phone, Navigation, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const VisitUs: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FDFBF7] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 inline-block">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
            Visit Kudrat Unlimited Pizza Hub
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            We are conveniently located at Hanspura, Ahmedabad. Walk-ins are always welcome!
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Single Location Card Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider block mb-1">
                  Ahmedabad Flagship Location
                </span>
                <h3 className="text-2xl font-black text-stone-900 font-display">
                  {RESTAURANT_INFO.name}
                </h3>
              </div>

              {/* Details List */}
              <div className="space-y-5 text-sm text-stone-700">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-900 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">Address</span>
                    <p className="font-medium text-stone-800 leading-relaxed mt-0.5">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">Opening Hours</span>
                    <p className="font-medium text-stone-800 mt-0.5">
                      {RESTAURANT_INFO.openDaily}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-900 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">Mobile Number</span>
                    <a
                      href={RESTAURANT_INFO.phoneTel}
                      className="font-bold text-emerald-900 hover:underline text-base mt-0.5 inline-block"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* CTA Buttons */}
            <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.phoneTel}
                id="visit-call-btn"
                className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm text-center"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call Now</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="visit-directions-btn"
                className="flex-1 py-3.5 px-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm text-center"
              >
                <Navigation className="w-4 h-4 text-amber-700" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Map Preview for the Single Location */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                <MapPin className="w-4 h-4 text-emerald-800" />
                <span>Galaxy Central, Hanspura Circle, Ahmedabad</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-900 hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="w-full flex-1 min-h-[340px] relative bg-stone-100">
              <iframe
                title="Kudrat Unlimited Pizza Hub Google Map Location"
                src="https://maps.google.com/maps?q=Galaxy+Central+Hanspura+Ahmedabad+Gujarat+382330&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-white border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
              <span>Opp. D-Mart, Naroda Dahegam Road, Hanspura, Ahmedabad</span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold transition-colors"
              >
                Navigate to Restaurant →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
