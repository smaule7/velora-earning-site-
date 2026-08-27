import React, { useState, useEffect, useRef } from 'react';
import { Flame, Sparkles, CheckCircle2, ArrowRight, Share2, Copy, Check, Users, Network, ShieldCheck, DollarSign } from 'lucide-react';
import { RewardCategoryItem } from '../types';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface CloutAndReferralsProps {
  rewards: RewardCategoryItem[];
  onOpenJoin: () => void;
}

export const CloutAndReferralsSection: React.FC<CloutAndReferralsProps> = ({ rewards, onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [followerReach, setFollowerReach] = useState(15000);

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

  const handleCopy = () => {
    navigator.clipboard.writeText('https://velora.universe/join?ref=creator_vip');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Clout calculation: approximate conversions in USD
  const estimatedConversions = Math.max(2, Math.round(followerReach * 0.003));
  const estimatedMonthlyPayout = (estimatedConversions * 10) + (estimatedConversions * 2 * 2) + (estimatedConversions * 4 * 1);

  return (
    <section 
      id="clout-cash" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className={`space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border border-amber-500/30 bg-gradient-to-b from-amber-950/20 via-black/80 to-black shadow-2xl reveal-item scale-settle ${
        isRevealed ? 'is-revealed' : ''
      }`}>
        {/* 1. EXACT GOOGLE DRIVE IMAGE FIRST (ABOVE WRITE-UP) */}
        <div className="max-w-2xl mx-auto w-full">
          <VeloraFlyer
            imageKey="referrals"
            alt="VELORA Community & Referrals Promotional Flyer"
            aspectClass="aspect-[16/10] sm:aspect-[16/9]"
            caption="Official Community & Referrals Flyer • Turn Community into Earnings"
          />
        </div>

        {/* 2. FEATURE LABEL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{VELORA_CONTENT.referrals.sectionLabel}</span>
          </div>
        </div>

        {/* 3. MAIN TITLE & HEADLINE */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-display text-white font-medium tracking-tight">
            {VELORA_CONTENT.referrals.headline}
          </h2>
          <p className="text-amber-300 font-display text-base sm:text-lg italic">
            "{VELORA_CONTENT.referrals.subtitle}"
          </p>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {VELORA_CONTENT.referrals.description}
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* 4. WHAT YOU GET / KEY FEATURES */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> WHAT YOU GET
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
            {VELORA_CONTENT.referrals.features.map((feat, idx) => (
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
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Direct Referral (Tier 1)</span>
              <span className="text-2xl font-display text-amber-300 font-medium my-1 block">$10.00 – $15.00</span>
              <span className="text-[11px] text-stone-400">Credited instantly per activation</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-purple-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">1st Indirect Override</span>
              <span className="text-2xl font-display text-purple-300 font-medium my-1 block">$2.00 – $3.00</span>
              <span className="text-[11px] text-stone-400">Secondary network growth</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">2nd Indirect Override</span>
              <span className="text-2xl font-display text-emerald-400 font-medium my-1 block">$1.00 – $1.50</span>
              <span className="text-[11px] text-stone-400">Tertiary network growth</span>
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
              <span className="font-mono text-amber-400 font-bold">1. Copy Custom Link</span>
              <p>Grab your unique encrypted invite URL directly from your personal Velora account profile.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">2. Share with Peers</span>
              <p>Broadcast across WhatsApp, TikTok bio, Instagram stories, X, and YouTube descriptions.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">3. Earn Automated Rewards</span>
              <p>Receive up to $15.00 instant direct credit and enjoy automated 2-tier passive indirect overrides.</p>
            </div>
          </div>
        </div>

        {/* Interactive Reach Estimator Sandbox */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-amber-500/20 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400" /> Social Reach Revenue Estimator
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Multi-Tier Active
            </span>
          </div>

          <div>
            <div className="flex justify-between text-xs text-stone-300 mb-2">
              <span>Total Social Audience (WhatsApp, TikTok, Instagram, X, YouTube)</span>
              <span className="font-mono text-amber-300 font-bold">{followerReach.toLocaleString()} Followers</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={followerReach}
              onChange={e => setFollowerReach(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Estimated Activations</span>
              <span className="text-sm sm:text-base font-display text-white font-medium">~{estimatedConversions} Creators/mo</span>
            </div>
            <div className="p-3 rounded-xl bg-black/60 border border-amber-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Estimated Monthly Payout</span>
              <span className="text-sm sm:text-base font-display text-amber-300 font-medium">${estimatedMonthlyPayout.toLocaleString()}.00</span>
            </div>
          </div>

          {/* Referral Link Copy */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex gap-2">
            <input
              type="text"
              readOnly
              value="https://velora.universe/join?ref=creator_vip"
              className="w-full px-3 py-1.5 rounded-lg bg-black/70 border border-white/10 text-xs font-mono text-stone-300 focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="btn-gold text-xs px-3.5 py-1.5 shrink-0 flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* 7. CTA BUTTON */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenJoin}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-500/20 inline-flex items-center gap-2"
          >
            <span>{VELORA_CONTENT.referrals.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloutAndReferralsSection;
