import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, Wallet, UserPlus, Zap, TrendingUp, ShieldCheck, Terminal, Award } from 'lucide-react';

interface HowItWorksPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">How Velora Earnings Works</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5" />
          <span>Official Platform Guide</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          How Does Velora Earnings Work?
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Velora Earnings operates through a clear 5-step process: creating an account, choosing an activation package to access features, completing eligible digital activities, monitoring your account activity, and withdrawing earnings to your Nigerian bank.
        </p>
      </header>

      {/* 5-Step Visual Workflow */}
      <div className="space-y-8">
        
        {/* Step 1 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            01
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              1. Create an Account
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Visit the official registration page at <a href="https://veloraearnings.com.ng/signup" className="text-amber-300 underline underline-offset-2">veloraearnings.com.ng/signup</a>. Provide your full name, valid email address, phone number, and a secure password. Registration creates your personal member dashboard and assigns your unique referral link.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Instant Dashboard Access Granted</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            02
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              2. Choose and Access Available Features
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Choose your platform membership tier to unlock daily tasks, educational modules, and withdrawal channels. Membership options include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0e071c] border border-amber-400/20 space-y-1">
                <span className="text-xs font-mono text-amber-300 uppercase">Silver AI Tier</span>
                <p className="text-lg font-display text-white font-semibold">₦8,000</p>
                <p className="text-xs text-stone-400">Includes ₦5,000 welcome credit, AI prompt submission access, news reading tasks, and ₦6,200 referral commission.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0e071c] border border-amber-400/40 space-y-1">
                <span className="text-xs font-mono text-amber-300 uppercase">Golden AI Tier</span>
                <p className="text-lg font-display text-white font-semibold">₦12,000</p>
                <p className="text-xs text-stone-400">Includes ₦8,000 welcome credit, advanced YouTube tools, Matchday Fan Battle pools, and ₦8,000 referral commission.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            03
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              3. Complete Eligible Activities
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Participate in daily activities suited to your skills and available time. Earnings depend on activity completion and verified participation:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>AI Prompts &amp; Asset Uploads:</strong> Submit creative prompts and dataset items for validation.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>YouTube Media Optimization:</strong> Engage with video content and complete feedback tasks.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>News &amp; Media Engagement:</strong> Read and curate verified daily editorial articles.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Matchday Fan Battles:</strong> Vote and participate in sports fixtures for community rewards.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Optional Affiliate Referrals:</strong> Share your unique referral link to earn commissions when new members join.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            04
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              4. View Account Activity and Balances
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Track task verification and reward accreditation directly on your member dashboard. All verified tasks, activity milestones, and referral earnings are displayed in real-time.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            05
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              5. Withdrawal and Payout Process
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Once you reach the withdrawal threshold (minimum ₦10,000 for affiliate earnings or designated task milestone thresholds), submit a withdrawal request from your dashboard. Payouts are processed in Nigerian Naira (NGN) directly to verified bank accounts (including Moniepoint, GTBank, Access Bank, Zenith Bank, Kuda, and all licensed commercial banks in Nigeria). Payout processing takes between 1 to 24 hours.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-md">
              <Wallet className="w-3.5 h-3.5" />
              <span>Direct Bank Payouts to All Nigerian Banks</span>
            </div>
          </div>
        </div>

      </div>

      {/* Internal Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        <button
          onClick={() => onNavigate('signup')}
          className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">Sign Up for Velora Earnings</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Register your account in less than a minute.</p>
        </button>

        <button
          onClick={() => onNavigate('features')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">Platform Features</span>
            <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">AI Academy, YouTube studio, and Fan Battles.</p>
        </button>

        <button
          onClick={() => onNavigate('faqs')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">Velora Earnings FAQs</span>
            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Common questions regarding tasks and payouts.</p>
        </button>
      </div>

    </div>
  );
};
