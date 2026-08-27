import React, { useState } from 'react';
import { GOOGLE_DRIVE_IDS, getDriveImageUrl, getDriveDirectLh3, getDriveThumbnailUrl } from '../data/veloraImages';

export interface VeloraFlyerProps {
  imageKey: keyof typeof GOOGLE_DRIVE_IDS | string;
  alt: string;
  className?: string;
  aspectClass?: string;
  caption?: string;
  priority?: boolean;
  fitMode?: 'cover' | 'contain';
  objectPosition?: string;
}

export const VeloraFlyer: React.FC<VeloraFlyerProps> = ({
  imageKey,
  alt,
  className = '',
  aspectClass = 'aspect-[16/10] sm:aspect-[16/9]',
  caption,
  priority = false,
  fitMode = 'cover',
  objectPosition = 'object-center',
}) => {
  // Resolve file ID from known keys or raw ID strings
  let fileId = '';
  if (imageKey in GOOGLE_DRIVE_IDS) {
    fileId = GOOGLE_DRIVE_IDS[imageKey as keyof typeof GOOGLE_DRIVE_IDS];
  } else if (typeof imageKey === 'string' && imageKey.includes('id=')) {
    fileId = imageKey.split('id=')[1]?.split('&')[0] || '';
  } else {
    fileId = imageKey;
  }

  const [srcIndex, setSrcIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const sources = [
    getDriveImageUrl(fileId),
    getDriveDirectLh3(fileId),
    getDriveThumbnailUrl(fileId, 1600),
  ];

  const currentSrc = sources[srcIndex] || sources[0];

  const handleImageError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(prev => prev + 1);
    }
  };

  return (
    <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden velora-glass border border-white/15 shadow-2xl group ${className}`}>
      {/* Subtle loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-amber-400/40 border-t-amber-400 rounded-full animate-spin" />
        </div>
      )}

      {/* Edge-to-Edge Fill Image */}
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
        className={`w-full h-full ${
          fitMode === 'cover' ? 'object-cover' : 'object-cover'
        } ${objectPosition} transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Gradient vignette protecting text and borders */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

      {/* Elegant Caption Overlay */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 flex items-center justify-between text-[11px] font-mono text-stone-300 pointer-events-none z-20">
          <span className="text-amber-300 font-medium truncate drop-shadow-md">{caption}</span>
          <span className="text-stone-400 text-[10px] uppercase shrink-0 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 ml-2">Official Artwork</span>
        </div>
      )}
    </div>
  );
};

export default VeloraFlyer;
