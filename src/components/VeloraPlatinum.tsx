import React, { useState, useEffect, useRef } from 'react';
import { RewardCategoryItem, AIPackagePlan } from '../types';
import { Crown, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, Building2, CreditCard, User, Layers } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface VeloraAIPackagesProps {
  rewards?: RewardCategoryItem[];
  onOpenJoin: (plan?: AIPackagePlan | 'silver_ai' | 'golden_ai') => void;
}

export const VeloraPlatinum: React.FC<VeloraAIPackagesProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'silver_ai' | 'golden_ai'>('all');

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

  const silverFeatures = [
    'Full access to Velora AI Academy & prompt creation tools',
    'Verified AI upload pipeline ($25 – $80 per approved prompt pack)',
    'AI Lucky Book milestone credits & reading streak bonuses',
    'Daily news intelligence rewards & football derby voting access',
    'Direct creator referral commissions & multi-tier earnings',
    'Direct withdrawals to your verified local bank account',
  ];

  const goldenFeatures = [
    'Complete VIP access to AI Academy & Generative Creator Guild',
    'Priority AI prompt upload review with expedited payout queue',
    'Advanced YouTube creator monetization suite & thumbnail testing grants',
    'Enhanced direct and 2-tier indirect network override multipliers',
    'Guaranteed eligibility for weekly $500 fan battle derby prize pools',
    'VIP priority bank withdrawal settlement & dedicated 24/7 support desk',
  ];

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
          <span>{VELORA_CONTENT.aiPackages.sectionLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          {VELORA_CONTENT.aiPackages.headline}
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          {VELORA_CONTENT.aiPackages.subtitle}
        </p>

        {/* Clean Glass Package Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl velora-glass border border-white/15 bg-black/60 max-w-xl mx-auto mt-8 shadow-xl">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'all'
                ? 'bg-amber-400 text-black font-semibold shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>ALL PACKAGES</span>
          </button>

          <button
            onClick={() => setActiveTab('silver_ai')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'silver_ai'
                ? 'bg-amber-400 text-black font-semibold shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>SILVER AI (₦9,500)</span>
          </button>

          <button
            onClick={() => setActiveTab('golden_ai')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === 'golden_ai'
                ? 'bg-amber-400 text-black font-semibold shadow-md'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>GOLDEN AI (₦14,500)</span>
          </button>
        </div>
      </div>

      {/* Package Cards Grid (Image Directly Above Package Information) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {/* ========================================================================= */}
        {/* SILVER AI PACKAGE (₦9,500) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'silver_ai') && (
          <div className="space-y-6 p-6 sm:p-8 rounded-3xl velora-glass border border-white/15 bg-black/70 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-amber-400/30">
            <div>
              {/* 1. IMAGE DIRECTLY ABOVE PACKAGE INFORMATION */}
              <div className="max-w-xs mx-auto mb-6">
                <VeloraFlyer
                  imageKey="academy"
                  alt="Velora Silver AI Package Artwork"
                  aspectClass="aspect-[4/5]"
                  caption="Silver AI Package • ₦9,500 Activation"
                />
              </div>

              {/* Tag & Plan Name */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-stone-300 border border-white/10">
                  POPULAR CHOICE
                </span>
                <span className="text-xs text-stone-400 font-mono">One-Time Activation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display text-white font-medium mb-1">
                SILVER AI PACKAGE
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl sm:text-4xl font-display font-bold text-amber-300">
                  ₦9,500
                </span>
                <span className="text-xs text-stone-400">/ lifetime access</span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                The core entry point for creators and members. Gain complete access to Velora AI Academy, verified prompt uploads, news rewards, and creator referral earnings.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>PACKAGE BENEFITS</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200">
                  {silverFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenJoin('silver_ai')}
                className="w-full btn-gold py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GOLDEN AI PACKAGE (₦14,500) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'golden_ai') && (
          <div className="space-y-6 p-6 sm:p-8 rounded-3xl velora-glass border-2 border-amber-400/40 bg-gradient-to-b from-amber-950/20 via-black/80 to-black shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-amber-400/60">
            <div>
              {/* 1. IMAGE DIRECTLY ABOVE PACKAGE INFORMATION */}
              <div className="max-w-xs mx-auto mb-6">
                <VeloraFlyer
                  imageKey="platinum"
                  alt="Velora Golden AI Package Artwork"
                  aspectClass="aspect-[4/5]"
                  caption="Golden AI Package • ₦14,500 Activation"
                />
              </div>

              {/* Tag & Plan Name */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  MAXIMUM VALUE
                </span>
                <span className="text-xs text-stone-400 font-mono">One-Time Activation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display text-white font-medium mb-1">
                GOLDEN AI PACKAGE
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl sm:text-4xl font-display font-bold text-amber-300">
                  ₦14,500
                </span>
                <span className="text-xs text-stone-400">/ lifetime VIP access</span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                The flagship tier for high-yield creators, network builders, and YouTube creators. Unlocks priority upload reviews, maximum referral multipliers, and expedited payouts.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>VIP PACKAGE BENEFITS</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200">
                  {goldenFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenJoin('golden_ai')}
                className="w-full btn-gold py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Payment / Account Details Banner */}
      <div className={`max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl velora-glass border border-white/15 bg-black/80 shadow-xl reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Bank Settlement Account</span>
          </div>
          <h4 className="text-lg sm:text-xl font-display text-white font-medium">
            Instant Activation Payment Details
          </h4>
          <p className="text-xs text-stone-300 mt-1">
            Pay for your selected AI package directly using the official account details below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Bank Name</span>
            <span className="text-base font-display text-white font-medium flex items-center justify-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-400" />
              MONIEPOINT VELORA
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Account Name</span>
            <span className="text-sm sm:text-base font-display text-white font-medium flex items-center justify-center gap-1.5">
              <User className="w-4 h-4 text-amber-400" />
              CHIDINDU BLESSING IKECHUKWU
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/30 bg-amber-500/5 space-y-1">
            <span className="text-[10px] text-amber-300 uppercase font-mono block">Account Number</span>
            <span className="text-lg font-mono font-bold text-amber-300 flex items-center justify-center gap-1.5">
              <CreditCard className="w-4 h-4 text-amber-400" />
              5275881766
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VeloraAIPackages = VeloraPlatinum;
export default VeloraPlatinum;
