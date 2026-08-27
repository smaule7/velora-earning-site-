import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onJoin: () => void;
  onExplore: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onJoin, onExplore }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Master Physical Glass Command Frame */}
        <div
          className={`velora-glass rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-8 relative overflow-hidden transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <div>
            <span className="eyebrow-gold">
              START YOUR JOURNEY
            </span>
          </div>

          {/* Headline in Fraunces */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-[#f6f2fb] tracking-tight leading-tight">
              Enter the Velora universe
            </h2>

            <p className="text-[#b6a8cc] text-base sm:text-lg leading-relaxed font-normal">
              Create your account, explore new digital experiences, participate in the community, and discover what’s possible.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="final-join-btn"
              onClick={onJoin}
              className="btn-gold w-full sm:w-auto"
            >
              <span>GET REGISTERED</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="final-explore-btn"
              onClick={onExplore}
              className="btn-ghost w-full sm:w-auto"
            >
              <Compass className="w-4 h-4 opacity-70" />
              <span>EXPLORE ECOSYSTEM</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-[#8e80a8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24a]" />
              <span>Instant Account Activation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24a]" />
              <span>Free Community Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24a]" />
              <span>Unified Platform ID</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
