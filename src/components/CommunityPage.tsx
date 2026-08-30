import React from 'react';
import { ArrowLeft, Sparkles, Users, MessageCircle, Trophy, Award, CheckCircle2, ArrowRight, Share2, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';

interface CommunityPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Community</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
          <Users className="w-3.5 h-3.5" />
          <span>Creator Network &amp; Derbies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          VELORA Community — Connect &amp; Participate
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Connect and collaborate with thousands of creators, learners, and digital workers on VELORA. Participate in matchday fan battles, affiliate referral networks, and group skill sessions.
        </p>
      </header>

      {/* Hero Visual Artwork Banner */}
      <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <VeloraFlyer
          imageKey="fan_battle"
          alt="VELORA Community Fan Battles and Creator Network"
          aspectClass="aspect-[16/9] sm:aspect-[21/9]"
          caption="VELORA Matchday Fan Battles &amp; Creator Arena"
          priority={true}
        />
      </div>

      {/* Core Community Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pillar 1: Official Telegram Group */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Official VELORA Telegram Channel
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Stay connected with real-time platform updates, new task releases, withdrawal announcements, and masterclass schedules on our official Telegram channel.
          </p>
          <a
            href="https://t.me/VELORA_COACHREAL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-500/30 hover:bg-blue-500/30 text-xs font-mono font-medium transition-colors"
          >
            <span>Join @VELORA_COACHREAL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Pillar 2: Matchday Fan Battles */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Matchday Sports Derbies
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Showcase your football passion. Support your club (Real Madrid, Arsenal, Barcelona, Man City) in weekly matchday derbies, participate in live voting, and share in matchday pools.
          </p>
          <button
            onClick={onOpenJoin}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-200 border border-amber-500/30 hover:bg-amber-500/30 text-xs font-mono font-medium transition-colors"
          >
            <span>Enter Matchday Arena</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 3: Affiliate & Referral Program */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center">
            <Share2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Affiliate &amp; Creator Network
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Share your unique referral link with your audience or friends. Earn direct referral commissions (₦6,200 on Silver AI, ₦8,000 on Golden AI) upon new member account activation.
          </p>
          <button
            onClick={onOpenJoin}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 hover:bg-emerald-500/30 text-xs font-mono font-medium transition-colors"
          >
            <span>Get Referral Link</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 4: Member Recognition */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display text-white font-medium">
            Verified Leaderboard &amp; Badges
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
            Track your progress against fellow platform members. Earn verified creator badges, unlock premium tier perks, and showcase your achievements.
          </p>
          <div className="text-xs font-mono text-purple-300">
            • Verified Top Earner rankings updated daily
          </div>
        </div>

      </div>

      {/* Internal Navigation Links */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
          Explore Related Sections
        </h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <button onClick={() => onNavigate('opportunities')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Opportunities
          </button>
          <button onClick={() => onNavigate('academy')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            AI Academy
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How It Works
          </button>
          <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            VELORA FAQs
          </button>
          <button onClick={() => onNavigate('contact')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Contact Support
          </button>
        </div>
      </section>

      {/* Call to Action Footer Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <h3 className="text-lg font-display text-white font-medium">Join the VELORA community today</h3>
          <p className="text-xs text-stone-300">Create your account and start participating in matchday derbies and creator activities.</p>
        </div>
        <button
          onClick={onOpenJoin}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Create Account</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
