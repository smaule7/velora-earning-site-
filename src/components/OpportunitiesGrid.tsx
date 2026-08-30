import React, { useState, useEffect, useRef } from 'react';
import { OpportunityItem } from '../types';
import { Clock, Users, ArrowRight, Tag, ShieldCheck, Zap } from 'lucide-react';
import { INITIAL_OPPORTUNITIES } from '../data/veloraData';

interface OpportunitiesGridProps {
  onOpenJoin: () => void;
}

export const OpportunitiesGrid: React.FC<OpportunitiesGridProps> = ({ onOpenJoin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const opportunities = INITIAL_OPPORTUNITIES;

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'YouTube Creators', label: 'YouTube' },
    { id: 'AI Uploads', label: 'AI Assets' },
    { id: 'Fan Battle', label: 'Fan Battle' },
    { id: 'Velora News', label: 'News Briefings' },
  ];

  const filtered = selectedCategory === 'all'
    ? opportunities
    : opportunities.filter(o => o.category === selectedCategory);

  return (
    <section 
      id="opportunities" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className={`text-center max-w-3xl mx-auto mb-12 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <Tag className="w-3.5 h-3.5" />
          <span>Active Bounties & Tasks</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          VELORA Earning Opportunities
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          Select from active creator campaigns, split-test challenges, AI generative packages, and matchday competitions available on the VELORA earning platform.
        </p>
      </div>

      {/* Category Pills */}
      <div className={`flex flex-wrap items-center justify-center gap-2 mb-10 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20'
                : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Opportunities Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((opp, idx) => (
          <article
            key={opp.id}
            className={`p-5 sm:p-6 rounded-2xl velora-glass border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group reveal-item from-bottom ${
              isRevealed ? 'is-revealed' : ''
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div>
              {/* Card Artwork Image Container */}
              {opp.imageUrl && (
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/60 mb-5 border border-white/10">
                  <img
                    src={opp.imageUrl}
                    alt={`${opp.title} — VELORA Earning Opportunity`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        const match = target.src.match(/id=([a-zA-Z0-9_-]+)/);
                        if (match && match[1]) {
                          target.src = `https://lh3.googleusercontent.com/d/${match[1]}`;
                        }
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      {opp.category}
                    </span>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full backdrop-blur-md ${
                      opp.status === 'High Demand' ? 'bg-amber-500/30 text-amber-200 border border-amber-500/40' :
                      opp.status === 'Ending Soon' ? 'bg-rose-500/30 text-rose-200 border border-rose-500/40' :
                      'bg-emerald-500/30 text-emerald-200 border border-emerald-500/40'
                    }`}>
                      {opp.status}
                    </span>
                  </div>

                  {opp.participantsCount && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] font-mono text-stone-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 pointer-events-none">
                      <Users className="w-3 h-3 text-amber-400" />
                      <span>{opp.participantsCount}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-xl font-display text-white font-medium mb-2 group-hover:text-amber-200 transition-colors">
                {opp.title}
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-5">
                {opp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {opp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] px-2 py-0.5 rounded bg-black/40 text-stone-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-stone-400 block">Reward Payout</span>
                <span className="text-lg font-display text-amber-300 font-medium">{opp.reward}</span>
              </div>

              <button
                onClick={onOpenJoin}
                className="btn-gold text-xs px-5 py-2.5 flex items-center gap-1.5"
              >
                <span>{opp.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
