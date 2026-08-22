import React, { useState, useRef } from 'react';
import { 
  Instagram, 
  Play, 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Eye, 
  CheckCircle,
  TrendingUp,
  X,
  Video,
  Film,
  Sparkles,
  Volume2,
  VolumeX,
  Maximize2
} from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost, RESTAURANT_INFO } from '../data/restaurantData';

interface VideoCardProps {
  video: InstagramPost;
  idx: number;
  onOpenModal: (video: InstagramPost) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, idx, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Slight debounce to prevent accidental triggering when swiftly scrolling
    hoverTimeoutRef.current = setTimeout(() => {
      setIsPlayingInline(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsPlayingInline(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenModal(video);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-3xl border-2 border-stone-200 overflow-hidden shadow-xs hover:shadow-2xl hover:border-pink-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
    >
      {/* Video Thumbnail & Hover Inline Player */}
      <div 
        onClick={handleClick}
        className="relative aspect-[9/16] overflow-hidden bg-black cursor-pointer select-none"
      >
        {/* If Hovered & Active: Render Direct Video Iframe Player fitted seamlessly */}
        {isPlayingInline ? (
          <div className="absolute inset-0 w-full h-full bg-black z-20 animate-in fade-in duration-200 overflow-hidden flex items-center justify-center">
            <iframe
              src={`${video.embedUrl}?autoplay=1`}
              title={video.title}
              className="w-full h-full border-0 pointer-events-auto scale-[1.25] origin-center"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
            {/* Overlay hint banner while playing on hover */}
            <div className="absolute top-3.5 right-3.5 z-30 pointer-events-none">
              <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                Playing Video
              </span>
            </div>
            {/* Quick full view expand button */}
            <button
              onClick={handleClick}
              className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-md transition-all shadow-lg hover:scale-110"
              title="Open full video player"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Thumbnail with Food Image & Drive Poster */
          <>
            <img
              src={video.thumbnail}
              alt={`${video.title} - Video Reel preview at Kudrat Unlimited Pizza Hub Ahmedabad`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              onError={(e) => {
                const fallbackImages = [
                  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&fm=webp&w=600&q=75',
                  'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&fm=webp&w=600&q=75',
                  'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&fm=webp&w=600&q=75',
                  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&fm=webp&w=600&q=75',
                ];
                (e.target as HTMLImageElement).src = fallbackImages[idx % fallbackImages.length];
              }}
              loading="lazy"
              decoding="async"
              width="450"
              height="700"
            />

            {/* Video Index Badge */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1.5 bg-black/75 backdrop-blur-md text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-md border border-white/20">
                <Video className="w-3 h-3 text-pink-400" />
                <span>Video {idx + 1}</span>
              </span>
            </div>

            {/* Top Right Tag */}
            <div className="absolute top-3.5 right-3.5 z-10">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-sm">
                {video.tag}
              </span>
            </div>

            {/* Big Center Play Button & Hover Hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white/95 text-pink-600 flex items-center justify-center shadow-2xl transform group-hover:scale-115 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <span className="text-[11px] text-white/90 font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs opacity-90 group-hover:opacity-100 group-hover:bg-pink-600 transition-all shadow-sm">
                Move arrow to play
              </span>
            </div>

            {/* Bottom Overlay with Views & Stats */}
            <div className="absolute bottom-0 inset-x-0 p-4 pt-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white text-xs font-bold">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-rose-400">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{video.likes}</span>
                </span>
                <span className="flex items-center gap-1 text-stone-200">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{video.comments}</span>
                </span>
              </div>
              {video.views && (
                <span className="flex items-center gap-1 text-[11px] text-stone-200 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  <Eye className="w-3 h-3 text-amber-300" />
                  <span>{video.views}</span>
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Card Footer Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <h4 className="text-sm font-black text-stone-900 line-clamp-1 group-hover:text-pink-600 transition-colors">
            {video.title}
          </h4>
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
            {video.caption}
          </p>
        </div>

        {/* Direct Action Links */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <button
            onClick={handleClick}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Play Video (1-Click)</span>
          </button>

          <a
            href={video.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open on Google Drive"
            className="p-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
};

export const InstagramFeed: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-stone-200/80 relative overflow-hidden">
      {/* Background ambient lighting in vibrant warm tones */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-pink-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-amber-500/15 border border-pink-300/80 text-stone-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Film className="w-3.5 h-3.5 text-pink-600" />
            <span>Hover / Click To Play Videos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-stone-900">
            Watch Our Food & Buffet Videos
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium">
            વિડીયો પર માઉસ એરો લઈ જતાં જ વિડીયો ચાલુ થઈ જશે! Watch live cheese pulls, fresh salad counters, and delicious pizzas.
          </p>
        </div>

        {/* Official Instagram Profile Showcase Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-pink-100 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle colorful top highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500" />

          {/* Profile Details */}
          <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="relative">
              {/* Instagram story gradient ring */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
                <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&fm=webp&w=250&q=75"
                    alt="Kudrat Unlimited Pizza Hub Official Instagram Page Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="100"
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
                  Official Videos
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

        {/* 4 Actual Videos Grid with Hover Auto-Play */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((video, idx) => (
            <VideoCard
              key={video.id}
              video={video}
              idx={idx}
              onOpenModal={(v) => setSelectedVideo(v)}
            />
          ))}
        </div>

        {/* Bottom Tagline & Instagram Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50 p-4 sm:p-5 rounded-2xl border border-pink-200 max-w-2xl mx-auto shadow-xs">
            <div className="flex items-center gap-2 text-stone-800 text-xs sm:text-sm font-bold text-center sm:text-left">
              <TrendingUp className="w-4 h-4 text-pink-600 shrink-0" />
              <span>Visit Kudrat Pizza Hub, Hanspura or tag @kudratpizzahub in your reels!</span>
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

      {/* Video Player Modal with Google Drive Embedded Player & Autoplay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-stone-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-700 relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 px-6 bg-stone-950 flex items-center justify-between border-b border-stone-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-black text-stone-900">
                    🍕
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white">{selectedVideo.title}</h4>
                  <span className="text-[11px] text-emerald-400 font-bold">Kudrat Unlimited Pizza Hub • Hanspura</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Video Player Iframe with immediate auto-play and 9:16 vertical ratio */}
            <div className="relative aspect-[9/14] w-full bg-black flex-1 overflow-hidden flex items-center justify-center">
              <iframe
                src={`${selectedVideo.embedUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0 scale-[1.20] origin-center"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Modal Body & Action Controls */}
            <div className="p-5 bg-stone-900 space-y-3 shrink-0">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {selectedVideo.caption}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={selectedVideo.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Open Full Video in Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                </a>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
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
