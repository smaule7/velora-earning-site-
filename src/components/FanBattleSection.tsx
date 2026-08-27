import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Sparkles, CheckCircle2, ArrowRight, Shield, Flame, Award, Check, ShieldCheck, DollarSign, Users, Vote, Swords, BarChart3 } from 'lucide-react';
import { ClubItem } from '../types';
import { INITIAL_CLUBS } from '../data/veloraData';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface FanBattleSectionProps {
  onOpenJoin: () => void;
}

export const FanBattleSection: React.FC<FanBattleSectionProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [votedSuccess, setVotedSuccess] = useState(false);
  const [clubVotes, setClubVotes] = useState<{ [key: string]: number }>({
    'Manchester City': 1420,
    'Real Madrid': 1840,
  });

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

  const handleVote = (clubName: string) => {
    setClubVotes(prev => ({
      ...prev,
      [clubName]: (prev[clubName] || 1000) + 1,
    }));
    setVotedSuccess(true);
    setTimeout(() => setVotedSuccess(false), 3500);
  };

  return (
    <section 
      id="fan-battle" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className={`space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border border-amber-500/30 bg-gradient-to-b from-amber-950/20 via-black/80 to-black shadow-2xl reveal-item scale-settle ${
        isRevealed ? 'is-revealed' : ''
      }`}>
        {/* 1. EXACT GOOGLE DRIVE IMAGE FIRST (ABOVE WRITE-UP) */}
        <div className="max-w-md mx-auto">
          <VeloraFlyer
            imageKey="fanBattle"
            alt="VELORA Fan Battle Zone Promotional Flyer"
            aspectClass="aspect-[4/3] sm:aspect-[16/10]"
            caption="Fan Battle Zone • Compete. Rally. Climb the Leaderboard."
          />
        </div>

        {/* 2. FEATURE LABEL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>{VELORA_CONTENT.fanBattle.sectionLabel}</span>
          </div>
        </div>

        {/* 3. MAIN TITLE & HEADLINE */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-display text-white font-medium tracking-tight">
            {VELORA_CONTENT.fanBattle.headline}
          </h2>
          <p className="text-amber-300 font-display text-base sm:text-lg italic">
            "{VELORA_CONTENT.fanBattle.subtitle}"
          </p>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {VELORA_CONTENT.fanBattle.description}
          </p>
        </div>

        {/* LIVE ARENA STAT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
            <Users className="w-4 h-4 text-amber-400 mx-auto" />
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Creators</span>
            <span className="text-lg font-display text-white font-medium">8,450+</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
            <Vote className="w-4 h-4 text-amber-400 mx-auto" />
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Votes Cast</span>
            <span className="text-lg font-display text-white font-medium">142,800+</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
            <Swords className="w-4 h-4 text-amber-400 mx-auto" />
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Active Battles</span>
            <span className="text-lg font-display text-white font-medium">12 Live</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
            <BarChart3 className="w-4 h-4 text-amber-400 mx-auto" />
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Rankings</span>
            <span className="text-lg font-display text-white font-medium">Top 50 Paid</span>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 4. WHAT YOU GET / KEY FEATURES */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> WHAT YOU GET
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
            {VELORA_CONTENT.fanBattle.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 5. REWARDS / EARNINGS STRUCTURE */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" /> REWARDS / EARNINGS STRUCTURE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-black/60 border border-amber-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Weekly Arena Pool</span>
              <span className="text-2xl font-display text-amber-300 font-medium my-1 block">$500.00</span>
              <span className="text-[11px] text-stone-400">Shared among winning fan factions</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Derby Prediction Reward</span>
              <span className="text-2xl font-display text-emerald-400 font-medium my-1 block">$25.00</span>
              <span className="text-[11px] text-stone-400">Per accurate match prediction</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-purple-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Halftime Trivia Grant</span>
              <span className="text-2xl font-display text-purple-300 font-medium my-1 block">$15.00</span>
              <span className="text-[11px] text-stone-400">Awarded to top quiz finishers</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 6. HOW IT WORKS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> HOW IT WORKS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">1. Select Your Club</span>
              <p>Pick your allegiance from premier global clubs like Real Madrid, Arsenal, Barcelona, or Man City.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">2. Vote & Predict</span>
              <p>Cast your vote before kickoff and participate in live halftime trivia tests to score fan power points.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">3. Claim Cash Bounty</span>
              <p>Winning faction members receive instant prize distributions directly into their creator dashboard wallet.</p>
            </div>
          </div>
        </div>

        {/* Live Matchday Derby Sandbox */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-amber-500/20 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400" /> Live Matchday Derby Sandbox
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Prize Pool: $500.00
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-black/60 border border-cyan-500/30 text-center space-y-2">
              <span className="text-[10px] font-mono uppercase text-cyan-400">Home Club</span>
              <h4 className="text-base font-display text-white font-medium">Manchester City</h4>
              <div className="text-xs text-stone-400 font-mono">
                {clubVotes['Manchester City']} Fan Votes
              </div>
              <button
                onClick={() => handleVote('Manchester City')}
                className="btn-ghost text-xs w-full py-2 hover:border-cyan-400"
              >
                <span>Vote Man City</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-center space-y-2">
              <span className="text-[10px] font-mono uppercase text-amber-400">Away Club</span>
              <h4 className="text-base font-display text-white font-medium">Real Madrid</h4>
              <div className="text-xs text-stone-400 font-mono">
                {clubVotes['Real Madrid']} Fan Votes
              </div>
              <button
                onClick={() => handleVote('Real Madrid')}
                className="btn-gold text-xs w-full py-2"
              >
                <span>Vote Real Madrid</span>
              </button>
            </div>
          </div>

          {votedSuccess && (
            <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <Check className="w-4 h-4 shrink-0" />
              <span>Fan vote recorded! Derby power score updated. Eligibility confirmed for $500 weekly jackpot.</span>
            </div>
          )}
        </div>

        {/* 7. CTA BUTTON */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenJoin}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-500/20 inline-flex items-center gap-2"
          >
            <span>{VELORA_CONTENT.fanBattle.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FanBattleSection;
