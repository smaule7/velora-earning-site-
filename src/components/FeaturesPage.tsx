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
          Velora Earnings Platform Features
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Discover the complete suite of monetization tools, AI learning modules, creator engines, and automated withdrawal features available on the official Velora Earnings platform.
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
            AI Academy &amp; Asset Uploads
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-light">
            Learn practical generative AI prompts across image, video, and audio synthesis. Verified Velora Earnings members earn daily rewards by creating and uploading approved AI prompts to the marketplace.
          </p>
          <ul className="space-y-2 text-xs font-mono text-stone-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>4-Track Generative AI Curriculum</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>₦300–₦1,200 per approved AI asset</span>
            </li>
          </ul>
        </div>

        {/* Feature 2: YouTube Creator Studio */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-rose-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center justify-center">
            <Youtube className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            YouTube Creator Growth Suite
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-light">
            Boost video visibility, SEO tags, and subscriber engagement with built-in YouTube optimization tools. Earn bonuses by completing authorized video review and engagement campaigns.
          </p>
          <ul className="space-y-2 text-xs font-mono text-stone-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Video Tag &amp; Title Optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Channel Growth &amp; Engagement Rewards</span>
            </li>
          </ul>
        </div>

        {/* Feature 3: Digital News Rewards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
            <Newspaper className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Digital Journalism Rewards
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-light">
            Read, review, and syndicate curated tech, business, and entertainment news across your social channels. Earn per-article reading and distribution compensation.
          </p>
          <ul className="space-y-2 text-xs font-mono text-stone-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Daily Verified Article Feeds</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>₦200 per syndicated news share</span>
            </li>
          </ul>
        </div>

        {/* Feature 4: Fan Battle Matchday Derby */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-blue-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Fan Battle Derby Arena
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-light">
            Support top European and African football clubs (Real Madrid, Arsenal, Barcelona, Man City) in live matchday derbies, trivia tournaments, and community voting contests.
          </p>
          <ul className="space-y-2 text-xs font-mono text-stone-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Weekly Derby Prize Pools</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Club Pride Leaderboards &amp; Badges</span>
            </li>
          </ul>
        </div>

        {/* Feature 5: Clout Cash & Referral System */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-emerald-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Clout Cash &amp; Affiliate Bonuses
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-light">
            Share your unique Velora Earnings partner link to earn direct referral bonuses, 1st and 2nd generation spillover rewards, and community growth commissions.
          </p>
          <ul className="space-y-2 text-xs font-mono text-stone-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>₦6,200 Direct Affiliate Bonus</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Multi-tier Spillover Commissions</span>
            </li>
          </ul>
        </div>

        {/* Feature 6: Instant Nigerian Bank Withdrawals */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-500/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
            <Wallet className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Automated Nigerian Bank Payouts
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-light">
            Fast, transparent withdrawal processing to Moniepoint, GTBank, Zenith, Access, Kuda, and all licensed Nigerian commercial banks in NGN, as well as digital USD wallets.
          </p>
          <ul className="space-y-2 text-xs font-mono text-stone-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>2 to 4 Hour Payout Processing</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Hidden Withdrawal Fees</span>
            </li>
          </ul>
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
