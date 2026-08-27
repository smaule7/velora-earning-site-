import React, { useState } from 'react';
import { GOOGLE_DRIVE_IDS, getDriveImageUrl, getDriveDirectLh3, getDriveThumbnailUrl } from '../data/veloraImages';

export interface VeloraFlyerProps {
  imageKey: keyof typeof GOOGLE_DRIVE_IDS | string;
  alt: string;
  className?: string;
  aspectClass?: string;
  caption?: string;
  priority?: boolean;
}

export const VeloraFlyer: React.FC<VeloraFlyerProps> = ({
  imageKey,
  alt,
  className = '',
  aspectClass = 'aspect-[4/5] sm:aspect-[3/4]',
  caption,
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
    <div className={`relative rounded-2xl overflow-hidden velora-glass border border-white/15 bg-black/75 shadow-2xl flex flex-col items-center justify-center p-3 sm:p-4 group ${className}`}>
      {/* Visual Inner Frame with object-contain to never crop important flyer text */}
      <div className={`w-full ${aspectClass} relative flex items-center justify-center rounded-xl overflow-hidden bg-black/50`}>
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        
        {/* Subtle vignette that preserves text clarity */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {caption && (
        <div className="w-full pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-stone-400 border-t border-white/10 mt-3">
          <span className="text-amber-300 font-medium truncate">{caption}</span>
          <span className="text-stone-500 uppercase shrink-0">Official Artwork</span>
        </div>
      )}
    </div>
  );
};

export default VeloraFlyer;
