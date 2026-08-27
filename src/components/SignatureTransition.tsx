import React from 'react';

interface SignatureTransitionProps {
  label?: string;
  variant?: 'gold-violet' | 'pink-violet';
  align?: 'left' | 'right' | 'center';
}

export const SignatureTransition: React.FC<SignatureTransitionProps> = ({
  label,
}) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 px-6 sm:px-8 lg:px-12 pointer-events-none select-none">
      <div className="relative flex items-center justify-between gap-6">
        {/* Left Thin Divider */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/[0.12]" />

        {/* Center Minimal Node */}
        <div className="relative flex items-center gap-3 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a24a] opacity-80" />
          {label && (
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#8e80a8] font-medium">
              {label}
            </span>
          )}
          <div className="w-1.5 h-1.5 rounded-full bg-[#8e80a8] opacity-60" />
        </div>

        {/* Right Thin Divider */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.12] to-transparent" />
      </div>
    </div>
  );
};
