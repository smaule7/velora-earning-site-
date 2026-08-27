import React, { useEffect, useRef, useState } from 'react';

export const VeloraExperience: React.FC = () => {
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
      className="relative py-28 px-6 sm:px-8 lg:px-12 overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div
          className={`transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="eyebrow-gold">
            THE ARCHITECTURE
          </span>
        </div>

        {/* Headline Choreography in Fraunces Display */}
        <div
          className={`space-y-3 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <p className="font-display text-xl sm:text-2xl text-[#b6a8cc] font-light tracking-wide">
            MORE THAN A PLATFORM.
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium text-[#f6f2fb] tracking-tight leading-[1.05]">
            Velora is a cohesive creative universe.
          </h2>
        </div>

        {/* Narrative Statement */}
        <p
          className={`text-[#b6a8cc] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          A single home uniting AI education, digital content creation, news exploration, sports fan derbies, and milestone rewards without fragmentation.
        </p>

        {/* 4 Tenets */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="velora-glass rounded-2xl p-5 text-left">
            <span className="text-xs font-mono text-[#c9a24a] block mb-1">01</span>
            <p className="font-display text-sm font-semibold text-[#f6f2fb]">Unified ID</p>
            <p className="text-xs text-[#8e80a8] mt-1">One profile for all apps</p>
          </div>

          <div className="velora-glass rounded-2xl p-5 text-left">
            <span className="text-xs font-mono text-[#c9a24a] block mb-1">02</span>
            <p className="font-display text-sm font-semibold text-[#f6f2fb]">Real Activities</p>
            <p className="text-xs text-[#8e80a8] mt-1">Verified progression milestones</p>
          </div>

          <div className="velora-glass rounded-2xl p-5 text-left">
            <span className="text-xs font-mono text-[#c9a24a] block mb-1">03</span>
            <p className="font-display text-sm font-semibold text-[#f6f2fb]">Fan Showdowns</p>
            <p className="text-xs text-[#8e80a8] mt-1">Live weekly matchday power</p>
          </div>

          <div className="velora-glass rounded-2xl p-5 text-left">
            <span className="text-xs font-mono text-[#c9a24a] block mb-1">04</span>
            <p className="font-display text-sm font-semibold text-[#f6f2fb]">Creator Suite</p>
            <p className="text-xs text-[#8e80a8] mt-1">High-impact growth tools</p>
          </div>
        </div>

      </div>
    </section>
  );
};
