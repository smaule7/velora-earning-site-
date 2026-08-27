import React from 'react';

interface MorphLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const MorphLoader: React.FC<MorphLoaderProps> = ({ size = 'lg', className = '' }) => {
  const containerHeights = {
    sm: 'h-8 gap-2.5',
    md: 'h-12 gap-3.5',
    lg: 'h-16 gap-4 sm:gap-5',
  };

  const scaleStyle = size === 'sm' ? 'scale-75' : size === 'md' ? 'scale-90' : 'scale-100';

  return (
    <div 
      className={`flex items-center justify-center ${containerHeights[size]} ${className}`} 
      aria-label="Velora Morphing Loader"
    >
      <div className={`flex items-center justify-center gap-3 sm:gap-4 transition-transform duration-300 ${scaleStyle}`}>
        <div className="flex items-center justify-center min-w-[56px] h-8">
          <span
            className="velora-morph-dot velora-dot-1 bg-gradient-to-tr from-[#c9a24a] via-[#e6c875] to-[#f7e8bd] shadow-lg shadow-amber-500/20"
          />
        </div>
        <div className="flex items-center justify-center min-w-[56px] h-8">
          <span
            className="velora-morph-dot velora-dot-2 bg-gradient-to-tr from-[#dfbe65] via-[#f7e8bd] to-[#c9a24a] shadow-lg shadow-amber-400/25"
          />
        </div>
        <div className="flex items-center justify-center min-w-[56px] h-8">
          <span
            className="velora-morph-dot velora-dot-3 bg-gradient-to-tr from-[#c9a24a] via-[#e6c875] to-[#f7e8bd] shadow-lg shadow-amber-500/20"
          />
        </div>
      </div>
    </div>
  );
};

export default MorphLoader;
