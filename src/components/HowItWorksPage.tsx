import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, Wallet, UserPlus, Zap, TrendingUp, ShieldCheck, Terminal, Award, LayoutDashboard, Sparkles, Key } from 'lucide-react';

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
        <span className="text-amber-300">How VELORA Works</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5" />
          <span>Step-by-Step Guide</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          How VELORA Works — Explore Opportunities
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Getting started on VELORA is simple and transparent. Follow our structured 5-step process to create your account, activate features, explore available opportunities, and participate in eligible activities.
        </p>
      </header>

      {/* 5-Step Visual Workflow */}
      <div className="space-y-8">
        
        {/* Step 1: Create an Account */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            01
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              01 — Create an Account
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Visit <strong className="text-white">veloraearnings.com.ng/signup</strong> or click any "Sign Up" button on the website. Fill in your basic registration details including your full name, email address, WhatsApp phone number, and a secure password. Registration takes less than a minute.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Free &amp; Instant Account Registration</span>
            </div>
          </div>
        </div>

        {/* Step 2: Access Your Dashboard */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-purple-400/20 text-purple-300 border border-purple-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            02
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              02 — Access Your Dashboard
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Log in to your member dashboard at <strong className="text-white">veloraearnings.com.ng/login</strong>. Your dashboard provides a central control room where you can view your profile, monitor your wallet balance, check available task categories, and track notifications.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-400/10 px-3 py-1 rounded-md">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Full Control Center for Daily Activities</span>
            </div>
          </div>
        </div>

        {/* Step 3: Activate Your Account */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            03
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              03 — Activate Your Account
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              To unlock earning features, daily task submissions, and bank payouts, complete your one-time package activation. Choose between:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0e071c] border border-amber-400/20 space-y-1">
                <span className="text-xs font-mono text-amber-300 uppercase">Silver AI Tier — ₦8,000</span>
                <p className="text-xs text-stone-400">Includes ₦5,000 welcome credit, AI prompt uploads, news curation tasks, and ₦6,200 referral bonus.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0e071c] border border-amber-400/40 space-y-1">
                <span className="text-xs font-mono text-amber-300 uppercase">Golden AI Tier — ₦12,000</span>
                <p className="text-xs text-stone-400">Includes ₦8,000 welcome credit, YouTube studio tools, priority fan battles, and ₦8,000 referral bonus.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Explore Available Opportunities */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            04
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              04 — Explore Available Opportunities
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Browse the catalog of active campaigns and tasks tailored to your skills: AI Prompt Creation, YouTube Video Engagement, Editorial News Reviews, Matchday Sports Polls, and Affiliate Programs.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multiple Daily Activity Streams</span>
            </div>
          </div>
        </div>

        {/* Step 5: Participate in Eligible Activities */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-display text-xl font-bold shrink-0">
            05
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
              05 — Participate in Eligible Activities &amp; Withdraw Rewards
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Complete the designated tasks according to their simple guidelines. As tasks are validated, rewards accumulate in your creator wallet. Once eligible, submit a withdrawal request for direct payout to any Nigerian commercial bank account within 1 to 24 hours.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md">
              <Wallet className="w-3.5 h-3.5" />
              <span>Direct Bank Settlement to All Nigerian Commercial Banks</span>
            </div>
          </div>
        </div>

      </div>

      {/* Internal Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        <button
          onClick={() => onNavigate('opportunities')}
          className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">Explore Opportunities</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Discover active daily tasks and campaigns.</p>
        </button>

        <button
          onClick={() => onNavigate('academy')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">VELORA Academy</span>
            <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Master prompt engineering &amp; digital skills.</p>
        </button>

        <button
          onClick={() => onNavigate('faqs')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">VELORA FAQs</span>
            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Answers to common questions about activation.</p>
        </button>
      </div>

    </div>
  );
};
