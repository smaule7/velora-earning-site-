import React, { useState, useEffect, useRef } from 'react';
import { RewardCategoryItem } from '../types';
import { Crown, CheckCircle2, ArrowRight, ShieldCheck, Zap, DollarSign, Award, Layers } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface VeloraPlatinumProps {
  rewards: RewardCategoryItem[];
  onOpenJoin: (plan?: 'platinum' | 'gold') => void;
}

type PlanTab = 'platinum' | 'gold' | 'ai_academy';

export const VeloraPlatinum: React.FC<VeloraPlatinumProps> = ({ rewards, onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState<PlanTab>('platinum');

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

  return (
    <section 
      id="plans-pricing" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className={`text-center max-w-3xl mx-auto mb-12 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <Crown className="w-3.5 h-3.5" />
          <span>{VELORA_CONTENT.platinum.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          {VELORA_CONTENT.platinum.headline}
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          {VELORA_CONTENT.platinum.subtitle}
        </p>

        {/* Clean Glass Plan Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl velora-glass border border-white/15 bg-black/60 max-w-xl mx-auto mt-8 shadow-xl">
          <button
            onClick={() => setActiveTab('platinum')}
            className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'platinum'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>PLATINUM ($19)</span>
          </button>

          <button
            onClick={() => setActiveTab('gold')}
            className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'gold'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>GOLD ($29)</span>
          </button>

          <button
            onClick={() => setActiveTab('ai_academy')}
            className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'ai_academy'
                ? 'bg-gradient-to-r from-purple-400 to-amber-400 text-black font-semibold shadow-lg shadow-purple-500/20'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>AI ACADEMY</span>
          </button>
        </div>
      </div>

      {/* Plan Details: Structured as IMAGE FIRST → INFO SECOND → REWARDS → HOW IT WORKS → CTA */}
      <div className={`max-w-4xl mx-auto reveal-item scale-settle ${isRevealed ? 'is-revealed' : ''}`}>
        {/* PLATINUM TAB */}
        {activeTab === 'platinum' && (
          <div className="space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border-2 border-amber-400/40 bg-gradient-to-b from-amber-950/20 via-black/80 to-black shadow-2xl">
            {/* 1. EXACT IMAGE ABOVE WRITEUP */}
            <div className="max-w-md mx-auto">
              <VeloraFlyer
                imageKey="platinum"
                alt="VELORA Platinum & Gold Membership Promotional Flyer"
                aspectClass="aspect-[3/4] sm:aspect-[4/5]"
                caption="Official Platinum & Gold Flyer • VIP Tier Access"
              />
            </div>

            {/* 2. FEATURE LABEL */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono uppercase tracking-widest">
                <Crown className="w-3.5 h-3.5" />
                <span>CORE VIP MEMBERSHIP TIER</span>
              </div>
            </div>

            {/* 3. MAIN TITLE & INTRO */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-4xl font-display text-white font-medium">
                VELORA PLATINUM MEMBERSHIP — $19
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                The standard entry point into the Velora creator network. Designed for motivated individuals, content creators, and community ambassadors seeking instant cashback, solid referral bonuses, and verified daily earning streams.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            {/* 4. WHAT YOU GET */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> WHAT YOU GET
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Instant $5.00 welcome cashback credited immediately to your balance</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>$10.00 Direct Invite Bonus for every peer you register</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>2-Tier Indirect overrides ($2.00 1st level / $1.00 2nd level)</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Full access to AI upload studio, YouTube suite, news rewards & football derby voting</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* 5. REWARDS / EARNINGS HIGHLIGHTS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" /> REWARDS / EARNINGS STRUCTURE
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Activation Fee</span>
                  <span className="text-lg font-display text-white font-medium">$19.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Instant Cashback</span>
                  <span className="text-lg font-display text-emerald-400 font-medium">$5.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Direct Referral</span>
                  <span className="text-lg font-display text-amber-300 font-medium">$10.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-purple-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">2-Tier Indirect</span>
                  <span className="text-lg font-display text-purple-300 font-medium">$2 / $1</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* 6. HOW IT WORKS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> HOW IT WORKS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">1. Quick Sign-Up</span>
                  <p>Register and activate your Platinum plan for $19. Your $5 instant cashback is credited immediately.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">2. Engage & Invite</span>
                  <p>Share your smart invite link to earn $10 per referral, and participate in daily tasks & derbies.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">3. Direct Payouts</span>
                  <p>Withdraw verified balances directly with real-time settlement to your connected payout method.</p>
                </div>
              </div>
            </div>

            {/* 7. CTA BUTTON */}
            <div className="pt-4 text-center">
              <button
                onClick={() => onOpenJoin('platinum')}
                className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-400/20 inline-flex items-center gap-2"
              >
                <span>{VELORA_CONTENT.platinum.platinumPlan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* GOLD TAB */}
        {activeTab === 'gold' && (
          <div className="space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border-2 border-amber-400/60 bg-gradient-to-b from-amber-950/30 via-black/80 to-black shadow-2xl">
            {/* 1. EXACT IMAGE ABOVE WRITEUP */}
            <div className="max-w-md mx-auto">
              <VeloraFlyer
                imageKey="platinum"
                alt="VELORA Gold Elite Membership Promotional Flyer"
                aspectClass="aspect-[3/4] sm:aspect-[4/5]"
                caption="Official Gold Plan • $29 Elite Activation"
              />
            </div>

            {/* 2. FEATURE LABEL */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono uppercase tracking-widest">
                <Crown className="w-3.5 h-3.5" />
                <span>HIGH-YIELD ELITE TIER</span>
              </div>
            </div>

            {/* 3. MAIN TITLE & INTRO */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-4xl font-display text-white font-medium">
                VELORA GOLD MEMBERSHIP — $29
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                The flagship earning tier for top network builders, dedicated creators, and high-volume referral leaders. Unlocks maximum instant cashback, highest direct referral bonuses, and expedited payout queues.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            {/* 4. WHAT YOU GET */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> WHAT YOU GET
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Immediate $8.00 welcome cashback returned to your wallet balance</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Massive $15.00 Direct Invite Bonus for every Gold member you invite</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Enhanced 2-Tier Indirect overrides ($3.00 1st level / $1.50 2nd level)</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Priority fast-track AI upload reviews & VIP creator bounty invitations</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* 5. REWARDS / EARNINGS HIGHLIGHTS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" /> REWARDS / EARNINGS STRUCTURE
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Activation Fee</span>
                  <span className="text-lg font-display text-white font-medium">$29.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Instant Cashback</span>
                  <span className="text-lg font-display text-emerald-400 font-medium">$8.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Direct Referral</span>
                  <span className="text-lg font-display text-amber-300 font-medium">$15.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-purple-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">2-Tier Indirect</span>
                  <span className="text-lg font-display text-purple-300 font-medium">$3 / $1.50</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* 6. HOW IT WORKS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> HOW IT WORKS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">1. Activate Gold</span>
                  <p>Register for $29 and receive instant $8.00 cashback credited into your dashboard wallet.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">2. Maximize Referrals</span>
                  <p>Earn $15.00 every time a friend signs up with your link, plus extended $3.00/$1.50 overrides.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-amber-400 font-bold">3. Prioritized Payouts</span>
                  <p>Enjoy VIP withdrawal priority to your local bank account with round-the-clock creator support.</p>
                </div>
              </div>
            </div>

            {/* 7. CTA BUTTON */}
            <div className="pt-4 text-center">
              <button
                onClick={() => onOpenJoin('gold')}
                className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-400/20 inline-flex items-center gap-2"
              >
                <span>{VELORA_CONTENT.platinum.goldPlan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* AI ACADEMY TAB */}
        {activeTab === 'ai_academy' && (
          <div className="space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border-2 border-purple-400/40 bg-gradient-to-b from-purple-950/20 via-black/80 to-black shadow-2xl">
            {/* 1. EXACT IMAGE ABOVE WRITEUP */}
            <div className="max-w-md mx-auto">
              <VeloraFlyer
                imageKey="academy"
                alt="VELORA AI Academy & Generative Upload Promotional Flyer"
                aspectClass="aspect-square"
                caption="Official AI Academy • Skill Mastery & Lucky Book"
              />
            </div>

            {/* 2. FEATURE LABEL */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 border border-purple-400/40 text-purple-300 text-xs font-mono uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5" />
                <span>SKILL BUILDING & CURRICULUM</span>
              </div>
            </div>

            {/* 3. MAIN TITLE & INTRO */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-4xl font-display text-white font-medium">
                VELORA AI ACADEMY & CREATOR GUILD
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Master prompt engineering, generative video production, synthetic audio workflows, and AI automation. Learn high-demand digital skills while earning Lucky Book milestone bonuses.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            {/* 4. WHAT YOU GET */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> WHAT YOU GET
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Comprehensive masterclasses on Midjourney, FLUX, Stable Diffusion & LLMs</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>$15.00 Lucky Book milestone rewards as you finish learning modules</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Direct submission pipeline to upload your prompt templates for $25–$80 per pack</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Verified AI Creator certificate to display on your public profile</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* 5. REWARDS / EARNINGS HIGHLIGHTS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 text-purple-400" /> REWARDS / EARNINGS HIGHLIGHTS
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-black/60 border border-purple-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">AI Upload Bounty</span>
                  <span className="text-lg font-display text-purple-300 font-medium">$45.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Lucky Book Reward</span>
                  <span className="text-lg font-display text-amber-300 font-medium">$15.00</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
                  <span className="text-[10px] text-stone-400 uppercase font-mono block">Prompt Download Payout</span>
                  <span className="text-lg font-display text-emerald-400 font-medium">Per Download</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* 6. HOW IT WORKS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> HOW IT WORKS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-purple-400 font-bold">1. Learn Frameworks</span>
                  <p>Study tested prompts, syntax guides, and generative pipelines inside the Academy portal.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-purple-400 font-bold">2. Unlock Milestones</span>
                  <p>Complete quizzes and practical tasks to trigger $15.00 Lucky Book credit bonuses.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-purple-400 font-bold">3. Monetize Your Work</span>
                  <p>Package your best workflows into the library to earn recurring payouts from peer creators.</p>
                </div>
              </div>
            </div>

            {/* 7. CTA BUTTON */}
            <div className="pt-4 text-center">
              <button
                onClick={onOpenJoin}
                className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-400/20 inline-flex items-center gap-2"
              >
                <span>JOIN AI ACADEMY & EARN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Complete Reward Catalog & Rate Matrix */}
      <div className={`mt-16 space-y-4 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl font-display text-white font-medium flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-amber-400" />
            <span>Full Reward Catalog & Rate Matrix</span>
          </h3>
          <span className="text-xs font-mono text-amber-300">All payouts calculated in USD ($)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="p-5 rounded-xl velora-glass border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-white/10">
                    {reward.tag}
                  </span>
                  <span className="text-xl font-display font-medium text-amber-300">
                    ${typeof reward.amount === 'number' ? reward.amount.toLocaleString() : reward.amount}
                  </span>
                </div>

                <h4 className="text-base font-medium text-white mb-1.5">{reward.name}</h4>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">{reward.description}</p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
                <span>Type: {reward.frequency}</span>
                <span className="text-emerald-400 font-mono font-medium">Direct Settlement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VeloraPlatinum;
