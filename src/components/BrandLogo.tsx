import React, { useState } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  lightText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  lightText = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Google Drive logo URL provided by user with WebP optimization
  const logoUrl = 'https://lh3.googleusercontent.com/d/1yx-h3re4h8Fy7NpPmq4UQ7khnaqSzvcf=w300-rw';
  const fallbackLogoUrl = 'https://drive.google.com/thumbnail?id=1yx-h3re4h8Fy7NpPmq4UQ7khnaqSzvcf&sz=w300';

  const sizeClasses = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-18 h-18 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const textClasses = {
    sm: { title: 'text-base font-black', sub: 'text-[11px]' },
    md: { title: 'text-xl sm:text-2xl font-black', sub: 'text-xs sm:text-sm' },
    lg: { title: 'text-2xl sm:text-3xl font-black', sub: 'text-sm sm:text-base' },
    xl: { title: 'text-3xl sm:text-4xl font-black', sub: 'text-base sm:text-lg' },
  };

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-2xl overflow-hidden bg-white shadow-md border-2 border-amber-200/80 flex items-center justify-center shrink-0 p-1 group-hover:scale-105 transition-transform`}
      >
        {!imageError ? (
          <img
            src={logoUrl}
            alt="Kudrat Unlimited Pizza Hub Official Brand Logo"
            className="w-full h-full object-contain drop-shadow-xs"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            onError={() => {
              const imgEl = document.getElementById('brand-logo-img') as HTMLImageElement;
              if (imgEl && imgEl.src !== fallbackLogoUrl) {
                imgEl.src = fallbackLogoUrl;
              } else {
                setImageError(true);
              }
            }}
            id="brand-logo-img"
          />
        ) : (
          <div className="w-full h-full bg-emerald-900 rounded-xl flex flex-col items-center justify-center text-white font-black text-xs leading-tight">
            <span>KUDRAT</span>
          </div>
        )}
      </div>

      {showText && (
        <div className="text-left">
          <div className="flex items-center gap-2 leading-tight">
            <span
              className={`${textClasses[size].title} tracking-tight font-display ${
                lightText ? 'text-white' : 'text-stone-900'
              }`}
            >
              KUDRAT
            </span>
            <span className="text-[11px] sm:text-xs font-black text-emerald-800 uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
              Unlimited
            </span>
          </div>
          <p
            className={`${textClasses[size].sub} font-medium ${
              lightText ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            Pizza Hub • <span className="text-amber-700 font-bold">Eat More. Smile More.</span>
          </p>
        </div>
      )}
    </div>
  );
};
