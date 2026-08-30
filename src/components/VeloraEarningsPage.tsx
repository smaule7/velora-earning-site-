import React from 'react';
import { ArrowLeft, Zap, ArrowRight, ShieldCheck, DollarSign, Wallet, CheckCircle2, TrendingUp, Users, Award, HelpCircle } from 'lucide-react';
import { RewardCategoryItem } from '../types';

interface VeloraEarningsPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
  rewards: RewardCategoryItem[];
}

export const VeloraEarningsPage: React.FC<VeloraEarningsPageProps> = ({ onBackToHome, onOpenJoin, onNavigate, rewards }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Velora Earnings</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5" />
          <span>Rewards &amp; Income Streams</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Velora Earnings — Complete Monetization Guide
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Learn how Velora Earnings transforms daily digital engagement, AI tasks, YouTube content reviews, and community referrals into verified income in Nigeria.
        </p>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 space-y-2">
          <DollarSign className="w-6 h-6 text-amber-400" />
          <h2 className="text-lg font-display text-white font-medium">Daily Non-Referral Tasks</h2>
          <p className="text-xs text-stone-300 leading-relaxed">
            Earn up to ₦2,500 – ₦4,500 daily without referring anyone simply by completing AI model prompts, reading news, and reviewing videos.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 space-y-2">
          <Users className="w-6 h-6 text-purple-400" />
          <h2 className="text-lg font-display text-white font-medium">Affiliate Commissions</h2>
          <p className="text-xs text-stone-300 leading-relaxed">
            Receive direct bonuses of ₦4,500 (Silver) to ₦8,000 (Golden) per referral plus 2nd and 3rd-tier indirect commissions.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 space-y-2">
          <Wallet className="w-6 h-6 text-emerald-400" />
          <h2 className="text-lg font-display text-white font-medium">Moniepoint Direct Payouts</h2>
          <p className="text-xs text-stone-300 leading-relaxed">
            Automated payouts to Moniepoint and all 25+ Nigerian commercial banks with zero transfer fees or hidden deductions.
          </p>
        </div>
      </div>

      {/* Detailed Reward Matrix */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Active Earning Rates &amp; Activity Rewards
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            Current verified payout rates processed through the Velora Linux automated reward system:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rewards.map((item) => (
            <div key={item.id} className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs text-amber-300 font-mono uppercase">{item.category}</span>
                <h3 className="text-sm font-display text-white font-medium">{item.taskTitle}</h3>
                <span className="text-[11px] text-stone-400 block">{item.frequency}</span>
              </div>
              <div className="text-right">
                <span className="text-base sm:text-lg font-display text-amber-300 font-bold block">{item.rateNaira}</span>
                <span className="text-[10px] text-stone-400 font-mono">({item.rateUSD})</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payout & Withdrawal Policies */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0e071c] border border-white/10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-display text-white font-medium flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Withdrawal Guidelines for Nigerian Members</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Affiliate Earnings Withdrawal</h3>
            <p>
              Affiliate earnings have a low threshold of <strong>₦5,000</strong> and can be withdrawn <strong>every Monday, Wednesday, and Friday</strong> between 10:00 AM and 2:00 PM WAT. Payouts are dispatched within 2 to 4 hours.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Non-Referral Activity Points</h3>
            <p>
              Points earned from AI prompts, news reading, and video evaluations can be cashed out twice monthly once the balance reaches <strong>₦10,000</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action & links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('velora-linux')}
            className="text-xs text-stone-300 hover:text-emerald-300 font-mono flex items-center gap-1"
          >
            <span>Learn about Velora Linux Infrastructure</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <button
          onClick={onOpenJoin}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Start Earning Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
