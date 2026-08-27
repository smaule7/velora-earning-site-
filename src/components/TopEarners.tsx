import React, { useState, useEffect, useRef } from 'react';
import { TopEarner } from '../types';
import { Trophy, TrendingUp, ShieldCheck, CheckCircle2, Award, Crown } from 'lucide-react';

interface TopEarnersProps {
  topEarners: TopEarner[];
  onOpenJoin: () => void;
}

export const TopEarners: React.FC<TopEarnersProps> = ({ topEarners, onOpenJoin }) => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('week');
  const sectionRef = useRef<HTMLDivElement>(null);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const formatNaira = (val: number) => {
    return `₦${val.toLocaleString('en-NG')}`;
  };

  const top3 = topEarners.slice(0, 3);
  const runnersUp = topEarners.slice(3);

  return (
    <section 
      id="top-earners" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <Trophy className="w-3.5 h-3.5" />
          <span>Verified Hall of Fame</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          TOP EARNERS LEADERBOARD
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          Celebrating top creators, prompt designers, arena leaders, and community builders generating verified earnings in Nigerian Naira (₦).
        </p>

        {/* Timeframe Filter Tabs */}
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-white/5 border border-white/10 mt-6">
          <button
            onClick={() => setTimeframe('week')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              timeframe === 'week' ? 'bg-amber-400 text-black font-semibold shadow' : 'text-stone-300 hover:text-white'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setTimeframe('month')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              timeframe === 'month' ? 'bg-amber-400 text-black font-semibold shadow' : 'text-stone-300 hover:text-white'
            }`}
          >
            This Month
          </button>
          <button
            onClick={() => setTimeframe('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              timeframe === 'all' ? 'bg-amber-400 text-black font-semibold shadow' : 'text-stone-300 hover:text-white'
            }`}
          >
            All-Time VIP
          </button>
        </div>
      </div>

      {/* Empty State if no verified data exists */}
      {topEarners.length === 0 ? (
        <div className="max-w-md mx-auto p-10 rounded-3xl velora-glass border border-white/10 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-amber-300">
            <Trophy className="w-6 h-6 opacity-60" />
          </div>
          <p className="text-sm text-stone-300 font-medium">
            Top earners will appear here as verified earnings are recorded.
          </p>
        </div>
      ) : (
        <>
          {/* Top 3 Podium Visual Display */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-5xl mx-auto mb-12 reveal-item scale-settle ${isRevealed ? 'is-revealed' : ''}`}>
            {/* Rank 2 (Silver) */}
            {top3[1] && (
              <div className="order-2 md:order-1 p-6 rounded-2xl velora-glass border border-slate-400/30 text-center relative flex flex-col items-center bg-gradient-to-b from-slate-900/40 to-black/60 shadow-xl">
                <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-slate-300 text-black font-bold text-xs uppercase tracking-wider font-mono">
                  #2 — {top3[1].name}
                </div>
                <img
                  src={top3[1].avatarUrl}
                  alt={top3[1].name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-slate-300 shadow-xl mb-3 mt-2"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(top3[1].name)}&background=334155&color=fff`;
                  }}
                />
                <h4 className="text-lg font-display text-white font-medium">{top3[1].name}</h4>
                <p className="text-xs text-stone-400 font-mono">{top3[1].username}</p>
                <div className="mt-4 mb-2">
                  <span className="text-2xl font-display font-medium text-slate-100">
                    {formatNaira(top3[1].earnings)}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">Verified Paid</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> {top3[1].growth}
                </span>
                <div className="mt-4 pt-3 border-t border-white/10 w-full text-xs text-stone-300">
                  {top3[1].category}
                </div>
              </div>
            )}

            {/* Rank 1 (Gold - Elevated) */}
            {top3[0] && (
              <div className="order-1 md:order-2 p-8 rounded-2xl velora-glass border-2 border-amber-400/60 text-center relative flex flex-col items-center shadow-2xl shadow-amber-500/10 bg-gradient-to-b from-amber-950/40 via-purple-950/20 to-black/70 md:-translate-y-4">
                <div className="absolute -top-4 px-4 py-1 rounded-full bg-amber-400 text-black font-bold text-xs uppercase tracking-wider font-mono shadow-md flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5" />
                  <span>#1 — {top3[0].name}</span>
                </div>
                <img
                  src={top3[0].avatarUrl}
                  alt={top3[0].name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-24 h-24 rounded-full object-cover object-top border-3 border-amber-400 shadow-2xl mb-4 mt-2"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(top3[0].name)}&background=c9a24a&color=000`;
                  }}
                />
                <h4 className="text-xl font-display text-white font-medium">{top3[0].name}</h4>
                <p className="text-xs text-amber-300 font-mono">{top3[0].username}</p>
                <div className="mt-4 mb-2">
                  <span className="text-3xl sm:text-4xl font-display font-medium text-amber-300">
                    {formatNaira(top3[0].earnings)}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">Verified Paid</span>
                </div>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" /> {top3[0].growth}
                </span>
                <div className="mt-4 pt-3 border-t border-amber-400/20 w-full text-xs text-amber-200/90 font-medium">
                  {top3[0].recentAchievement}
                </div>
              </div>
            )}

            {/* Rank 3 (Bronze) */}
            {top3[2] && (
              <div className="order-3 p-6 rounded-2xl velora-glass border border-amber-800/40 text-center relative flex flex-col items-center bg-gradient-to-b from-stone-900/40 to-black/60 shadow-xl">
                <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-amber-700 text-white font-bold text-xs uppercase tracking-wider font-mono">
                  #3 — {top3[2].name}
                </div>
                <img
                  src={top3[2].avatarUrl}
                  alt={top3[2].name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-amber-700 shadow-xl mb-3 mt-2"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(top3[2].name)}&background=78350f&color=fff`;
                  }}
                />
                <h4 className="text-lg font-display text-white font-medium">{top3[2].name}</h4>
                <p className="text-xs text-stone-400 font-mono">{top3[2].username}</p>
                <div className="mt-4 mb-2">
                  <span className="text-2xl font-display font-medium text-amber-200/90">
                    {formatNaira(top3[2].earnings)}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">Verified Paid</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5" /> {top3[2].growth}
                </span>
                <div className="mt-4 pt-3 border-t border-white/10 w-full text-xs text-stone-300">
                  {top3[2].category}
                </div>
              </div>
            )}
          </div>

          {/* Leaderboard Table List */}
          <div className={`max-w-4xl mx-auto space-y-3 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            {runnersUp.map((earner) => (
              <div
                key={earner.id}
                className="p-4 rounded-xl velora-glass border border-white/10 hover:border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-stone-300">
                    #{earner.rank}
                  </span>
                  <img
                    src={earner.avatarUrl}
                    alt={earner.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover object-top border border-white/15"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(earner.name)}&background=1e1b4b&color=c9a24a`;
                    }}
                  />
                  <div>
                    <h5 className="text-sm font-medium text-white flex items-center gap-2">
                      <span>#{earner.rank} — {earner.name}</span>
                      <span className="text-xs text-stone-400 font-mono font-normal">{earner.username}</span>
                    </h5>
                    <p className="text-xs text-stone-300">{earner.category} • {earner.recentAchievement}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 pl-12 sm:pl-0">
                  <div className="text-right">
                    <span className="text-base font-display font-medium text-amber-300 block">
                      {formatNaira(earner.earnings)}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <button
                    onClick={onOpenJoin}
                    className="btn-ghost text-xs px-3 py-1.5"
                  >
                    <span>Join Rank</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TopEarners;
