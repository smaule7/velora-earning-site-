import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight, Heart, MessageSquare, Share2, Play, Check, ShieldCheck, DollarSign, Activity } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';

interface ContentEngagementSectionProps {
  onOpenJoin: () => void;
}

export const ContentEngagementSection: React.FC<ContentEngagementSectionProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [engagementBalance, setEngagementBalance] = useState(15.00);
  const [actionsCompleted, setActionsCompleted] = useState<{ [key: string]: boolean }>({});

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

  const handleAction = (id: string, amount: number) => {
    if (!actionsCompleted[id]) {
      setActionsCompleted(prev => ({ ...prev, [id]: true }));
      setEngagementBalance(prev => prev + amount);
    }
  };

  return (
    <section 
      id="content-engagement" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className={`space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border border-amber-500/30 bg-gradient-to-b from-amber-950/20 via-black/80 to-black shadow-2xl reveal-item scale-settle ${
        isRevealed ? 'is-revealed' : ''
      }`}>
        {/* 1. EXACT GOOGLE DRIVE IMAGE FIRST (ABOVE WRITE-UP) */}
        <div className="max-w-2xl mx-auto w-full">
          <VeloraFlyer
            imageKey="clout"
            alt="VELORA Content Engagement & Media Streaming Flyer"
            aspectClass="aspect-[16/10] sm:aspect-[16/9]"
            caption="Content Engagement • Watch, React & Earn Daily"
          />
        </div>

        {/* 2. FEATURE LABEL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
            <span>INTERACTIVE PARTICIPATION REWARDS</span>
          </div>
        </div>

        {/* 3. MAIN TITLE & INTRO */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-display text-white font-medium tracking-tight">
            CONTENT ENGAGEMENT: EARN UP TO $30 DAILY
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Monetize your attention and feedback. Support rising creators by reviewing video prototypes, testing prompt workflows, and offering constructive insights for instant rewards.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* 4. WHAT YOU GET */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> WHAT YOU GET
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Watch & Verify:</strong> Earn instant micro-rewards for verified viewing time on featured creative streams.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Constructive Feedback Grants:</strong> High-quality review comments receive direct creator tipping bonuses.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Social Share Overrides:</strong> Amplify creator content across social networks for broadcast bonuses.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Instant Dashboard Sync:</strong> Balances credit in real-time with zero withdrawal delays.</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 5. REWARDS / EARNINGS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" /> REWARDS / EARNINGS STRUCTURE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-black/60 border border-amber-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Daily Task Cap</span>
              <span className="text-2xl font-display text-amber-300 font-medium my-1 block">Up to $30.00</span>
              <span className="text-[11px] text-stone-400">Daily engagement activities</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Insight Feedback Bounty</span>
              <span className="text-2xl font-display text-emerald-400 font-medium my-1 block">$5.00</span>
              <span className="text-[11px] text-stone-400">Per quality peer critique</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-purple-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Broadcast Share Payout</span>
              <span className="text-2xl font-display text-purple-300 font-medium my-1 block">$3.00</span>
              <span className="text-[11px] text-stone-400">Per verified social share</span>
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
              <span className="font-mono text-amber-400 font-bold">1. Browse Feed</span>
              <p>Explore today's active creator spotlight videos, prompt demos, and design submissions.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">2. Engage & Review</span>
              <p>Watch content, drop constructive reviews, or share campaigns to your network.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">3. Collect Direct Balance</span>
              <p>Rewards accumulate directly in your wallet and can be transferred to your account anytime.</p>
            </div>
          </div>
        </div>

        {/* Interactive Engagement Sandbox */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-amber-500/20 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase text-amber-300 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5" /> Interactive Engagement Demo
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
              <span>Earned: ${engagementBalance.toFixed(2)} / $30.00 Max</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleAction('like', 2.50)}
              disabled={actionsCompleted['like']}
              className={`p-2.5 rounded-xl border text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                actionsCompleted['like']
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-stone-200'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-400" />
              <span>{actionsCompleted['like'] ? '+$2.50 Claimed' : 'React (+$2.50)'}</span>
            </button>

            <button
              onClick={() => handleAction('comment', 3.00)}
              disabled={actionsCompleted['comment']}
              className={`p-2.5 rounded-xl border text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                actionsCompleted['comment']
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-stone-200'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>{actionsCompleted['comment'] ? '+$3.00 Claimed' : 'Insight (+$3.00)'}</span>
            </button>

            <button
              onClick={() => handleAction('share', 3.00)}
              disabled={actionsCompleted['share']}
              className={`p-2.5 rounded-xl border text-xs flex flex-col items-center justify-center gap-1 transition-all ${
                actionsCompleted['share']
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-stone-200'
              }`}
            >
              <Share2 className="w-4 h-4 text-purple-400" />
              <span>{actionsCompleted['share'] ? '+$3.00 Claimed' : 'Share (+$3.00)'}</span>
            </button>
          </div>
        </div>

        {/* 7. CTA BUTTON */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenJoin}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-500/20 inline-flex items-center gap-2"
          >
            <span>START DAILY ENGAGEMENT & EARN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentEngagementSection;
