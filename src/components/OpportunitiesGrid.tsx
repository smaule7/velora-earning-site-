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
          OPPORTUNITIES FOR YOU
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          Select from active creator campaigns, split-test challenges, AI generative packages, and matchday competitions.
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
          <div
            key={opp.id}
            className={`p-6 rounded-2xl velora-glass border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group reveal-item from-bottom ${
              isRevealed ? 'is-revealed' : ''
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div>
              {/* Header meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-amber-300 border border-white/10">
                  {opp.category}
                </span>
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                  opp.status === 'High Demand' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                  opp.status === 'Ending Soon' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                  'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {opp.status}
                </span>
              </div>

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
          </div>
        ))}
      </div>
    </section>
  );
};
