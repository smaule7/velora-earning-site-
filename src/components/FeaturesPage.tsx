import React from 'react';
import { ArrowLeft, Sparkles, Youtube, Newspaper, Trophy, Users, ShieldCheck, Zap, ArrowRight, CheckCircle2, Cpu, Wallet, Layers } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';

interface FeaturesPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Features</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Platform Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Velora Earnings Features
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Detailed guide to genuine platform features offered by Velora Earnings. For each feature, review what it does, how to access it, and any applicable requirements.
        </p>
      </header>

      {/* Featured Ecosystem Flyer */}
      <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <VeloraFlyer
          imageKey="opportunities"
          alt="Velora Earnings Official Features and Opportunities"
          aspectClass="aspect-[16/9] sm:aspect-[21/9]"
          caption="Velora Earnings Multi-Stream Digital Capabilities"
          priority={true}
        />
      </div>

      {/* Core Feature Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Feature 1: AI Prompt & Asset Uploads */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-purple-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            AI Prompt Academy &amp; Asset Uploads
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            <p><strong>What it does:</strong> Enables members to learn prompt engineering and submit generative AI prompts, synthesized images, or audio prompts to earn task credits.</p>
            <p><strong>How users access it:</strong> Accessible from the member dashboard under the "AI Academy" tab after account login.</p>
            <p><strong>Requirements:</strong> Active account activation (Silver or Golden AI Tier) and compliance with prompt quality guidelines.</p>
          </div>
        </div>

        {/* Feature 2: YouTube Creator Studio */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-rose-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center justify-center">
            <Youtube className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            YouTube Creator Growth Suite
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            <p><strong>What it does:</strong> Provides video optimization tools (tags, titles, SEO) and authorized video review tasks for channel engagement.</p>
            <p><strong>How users access it:</strong> Accessible directly through the "YouTube Suite" section on the dashboard.</p>
            <p><strong>Requirements:</strong> Registered user with active video review task slots available for the day.</p>
          </div>
        </div>

        {/* Feature 3: Digital News Rewards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
            <Newspaper className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Velora News Curation &amp; Reading Rewards
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            <p><strong>What it does:</strong> Delivers daily curated editorial articles on technology, finance, and culture. Users read and share verified article summaries to receive reading credits.</p>
            <p><strong>How users access it:</strong> Found under the "Velora News" feed in the dashboard.</p>
            <p><strong>Requirements:</strong> Read verified articles for the required reading duration before claiming the activity reward.</p>
          </div>
        </div>

        {/* Feature 4: Fan Battle Matchday Derby */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-blue-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Matchday Fan Battle Derby Arena
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            <p><strong>What it does:</strong> An interactive sports entertainment feature where members predict match outcomes and vote for their favorite clubs in weekly showdowns.</p>
            <p><strong>How users access it:</strong> Located in the "Fan Battles" dashboard tab on scheduled fixture days.</p>
            <p><strong>Requirements:</strong> Active participation in current open matchday polls.</p>
          </div>
        </div>

        {/* Feature 5: Clout Cash & Referral System */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-emerald-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Affiliate Referral Program
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            <p><strong>What it does:</strong> Optional partner program enabling members to earn commission rewards (₦6,200–₦8,000) when new creators join via their referral link.</p>
            <p><strong>How users access it:</strong> Your personal invite link and referral statistics are found in the "Referrals" tab.</p>
            <p><strong>Requirements:</strong> Valid account with active referral link; commissions require invited users to complete registration.</p>
          </div>
        </div>

        {/* Feature 6: Instant Nigerian Bank Withdrawals */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
            <Wallet className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Bank Payout Gateway
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            <p><strong>What it does:</strong> Automated payment system that transfers approved wallet balances directly to commercial bank accounts in Nigeria.</p>
            <p><strong>How users access it:</strong> Access via "Wallet &gt; Withdraw" on the dashboard.</p>
            <p><strong>Requirements:</strong> Meet minimum balance threshold (₦10,000) and provide a valid Nigerian bank account matching the member name.</p>
          </div>
        </div>
      </div>

      {/* Internal Navigation Links for SEO */}
      <section className="p-8 rounded-3xl bg-gradient-to-br from-[#120726] to-[#080312] border border-white/10 space-y-6">
        <h2 className="text-2xl font-display text-white font-medium">
          Ready to Experience Velora Earnings Features?
        </h2>
        <p className="text-stone-300 text-sm leading-relaxed max-w-2xl font-light">
          Join thousands of members across Nigeria already using Velora Earnings to learn AI skills, share news, and build sustainable online daily rewards.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={onOpenJoin}
            className="btn-gold px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            <span>Sign Up for Velora Earnings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('how-it-works')}
            className="btn-ghost px-6 py-3 text-sm font-medium"
          >
            <span>How Velora Earnings Works</span>
          </button>
          <button
            onClick={() => onNavigate('faqs')}
            className="px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-stone-300 hover:text-white transition-colors"
          >
            <span>Velora Earnings FAQs</span>
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-stone-300 hover:text-white transition-colors"
          >
            <span>About Velora Earnings</span>
          </button>
        </div>
      </section>
    </div>
  );
};
