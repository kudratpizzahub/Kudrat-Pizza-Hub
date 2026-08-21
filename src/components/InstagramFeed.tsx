import React, { useState } from 'react';
import { 
  Instagram, 
  Play, 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  Bookmark,
  Share2,
  CheckCircle,
  TrendingUp,
  X
} from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost, RESTAURANT_INFO } from '../data/restaurantData';

export const InstagramFeed: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'reel' | 'post'>('all');
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const filteredPosts = INSTAGRAM_POSTS.filter((post) => {
    if (filter === 'all') return true;
    return post.type === filter;
  });

  return (
    <section id="instagram" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-stone-200/80 relative overflow-hidden">
      {/* Background ambient lighting in Instagram / vibrant colors */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-pink-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Instagram Branding */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-amber-500/15 border border-pink-300/80 text-stone-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>Follow Us On Instagram</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
            Latest Reels & Posts
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium">
            Stay updated with our daily unlimited pizza cheese pulls, fresh salad counter tours, customer moments, and new reels!
          </p>
        </div>

        {/* Official Instagram Profile Showcase Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-3xl p-6 sm:p-8 border-2 border-pink-100 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle colorful top highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500" />

          {/* Profile Details */}
          <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="relative">
              {/* Instagram story gradient ring */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
                <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80"
                    alt="Kudrat Unlimited Pizza Hub Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <span className="absolute bottom-1 right-1 bg-emerald-600 text-white p-1 rounded-full border-2 border-white shadow-xs">
                <CheckCircle className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-black text-stone-900 font-display">
                  {RESTAURANT_INFO.instagramHandle}
                </h3>
                <span className="bg-pink-100 text-pink-800 text-[11px] font-black px-2.5 py-0.5 rounded-full">
                  Official
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-stone-600">
                Kudrat Unlimited Pizza Hub • Hanspura, Ahmedabad 🍕
              </p>
              <p className="text-xs text-stone-500 hidden sm:block">
                Unlimited Buffet • 50+ Varieties • Lunch ₹199 | Dinner ₹249
              </p>
            </div>
          </div>

          {/* CTA Follow Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>Follow @kudratpizzahub</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>
        </div>

        {/* Filter Switch Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Updates ({INSTAGRAM_POSTS.length})
          </button>
          <button
            onClick={() => setFilter('reel')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              filter === 'reel'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Latest Reels ({INSTAGRAM_POSTS.filter(p => p.type === 'reel').length})</span>
          </button>
          <button
            onClick={() => setFilter('post')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === 'post'
                ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Posts & Photos ({INSTAGRAM_POSTS.filter(p => p.type === 'post').length})
          </button>
        </div>

        {/* 5 Posts / Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border-2 border-stone-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Media Thumbnail Container */}
              <div 
                onClick={() => setSelectedPost(post)}
                className="relative aspect-[4/5] overflow-hidden bg-stone-100 cursor-pointer"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Top Badge: Type Indicator */}
                <div className="absolute top-3 left-3 z-10">
                  {post.type === 'reel' ? (
                    <span className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      <Play className="w-2.5 h-2.5 fill-white" />
                      <span>Reel</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                      <span>Post</span>
                    </span>
                  )}
                </div>

                {/* Top Right Date / Tag */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {post.date}
                  </span>
                </div>

                {/* Center Hover Play Overlay for Reels */}
                {post.type === 'reel' && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-pink-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Bottom Overlay with Views / Likes stats */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 flex items-center justify-between text-white text-xs font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white/90" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  {post.views && (
                    <span className="flex items-center gap-1 text-[11px] text-stone-200">
                      <Eye className="w-3 h-3 text-stone-300" />
                      <span>{post.views}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content Description */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-black text-stone-900 line-clamp-1 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed font-medium">
                    {post.caption}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-pink-600 uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-800 hover:text-pink-600 transition-colors"
                  >
                    <span>Watch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50 p-4 sm:p-5 rounded-2xl border border-pink-200 max-w-2xl mx-auto shadow-xs">
            <div className="flex items-center gap-2 text-stone-800 text-xs sm:text-sm font-bold">
              <TrendingUp className="w-4 h-4 text-pink-600" />
              <span>Tag @kudratpizzahub in your story or reel to get featured on our page!</span>
            </div>
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-black shrink-0 transition-all flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Open Instagram</span>
            </a>
          </div>
        </div>

      </div>

      {/* Quick Preview Modal when user clicks any post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[4/3] bg-stone-900">
              <img
                src={selectedPost.thumbnail}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {selectedPost.type === 'reel' ? '🎬 Instagram Reel' : '📸 Instagram Post'}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-pink-600 p-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{RESTAURANT_INFO.instagramHandle}</h4>
                    <span className="text-[10px] text-stone-500">Ahmedabad, Gujarat</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-600 font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                    <span>{selectedPost.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-stone-500" />
                    <span>{selectedPost.comments}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-black text-stone-900 font-display">
                  {selectedPost.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  {selectedPost.caption}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>View Post on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
