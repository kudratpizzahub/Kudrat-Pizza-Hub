import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BuffetPricing } from './components/BuffetPricing';
import { WhatsIncluded } from './components/WhatsIncluded';
import { FoodGallery } from './components/FoodGallery';
import { InstagramFeed } from './components/InstagramFeed';
import { VisitUs } from './components/VisitUs';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-emerald-900 selection:text-white flex flex-col">
      
      {/* 1. Clean Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Premium Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Instagram Reels & Videos Section (Watch Our Food & Buffet Videos) */}
        <InstagramFeed />

        {/* 5. Unlimited Buffet Pricing (Right below Videos) */}
        <BuffetPricing />

        {/* 6. What's Included (Menu Highlights) */}
        <WhatsIncluded />

        {/* 7. Food Gallery */}
        <FoodGallery />

        {/* 8. Visit Us & Google Map (Single Location Only) */}
        <VisitUs />

        {/* 9. Simple Final CTA */}
        <FinalCta />
      </main>

      {/* 10. Clean Minimal Footer */}
      <Footer />

      {/* Subtle Floating Mobile Action Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2">
        <a
          href={RESTAURANT_INFO.phoneTel}
          className="flex-1 py-3 rounded-full bg-emerald-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-300" />
          <span>Call Now</span>
        </a>

        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-full bg-white text-stone-800 border border-stone-300 font-bold text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          <span>Directions</span>
        </a>
      </div>

    </div>
  );
}
