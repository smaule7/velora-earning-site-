import React from 'react';
import { ArrowLeft, Sparkles, Youtube, Newspaper, Trophy, Users, ArrowRight, CheckCircle2, Cpu, Wallet, Layers, ShieldCheck, Zap } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';

interface OpportunitiesPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Opportunities</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Active Activity Streams</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          VELORA Opportunities — Explore Available Activities
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Discover active earning and creation streams available on the official VELORA platform. From AI prompt creation and YouTube analytics to daily news reviews and matchday fan battles.
        </p>
      </header>

      {/* Hero Visual Banner */}
      <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <VeloraFlyer
          imageKey="opportunities"
          alt="VELORA Opportunities and Available Digital Activities"
          aspectClass="aspect-[16/9] sm:aspect-[21/9]"
          caption="VELORA Multi-Stream Digital Opportunities Catalog"
          priority={true}
        />
      </div>

      {/* Opportunities Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Stream 1: AI Prompt Creation */}
        <article className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-purple-500/30 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display text-white font-medium">
              AI Prompt Creation &amp; Dataset Uploads
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Craft specialized generative AI prompts, test model outputs, and upload structured creative assets to support AI training workflows. Each validated submission earns reward credits directly to your wallet.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-300 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Text, image, and voice prompt modules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Automated quality score verification</span>
              </li>
            </ul>
          </div>
          <button
            onClick={onOpenJoin}
            className="w-full py-2.5 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-500/30 hover:bg-purple-500/30 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2"
          >
            <span>Start AI Tasks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>

        {/* Stream 2: YouTube Creator Suite */}
        <article className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-red-500/30 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-300 border border-red-500/30 flex items-center justify-center">
              <Youtube className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display text-white font-medium">
              YouTube Video Engagement &amp; Review
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Participate in creator growth campaigns by reviewing video concepts, evaluating thumbnail heatmaps, and providing structured viewer feedback to boost organic reach.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-300 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>Video review &amp; feedback checklists</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>Creator tool optimization access</span>
              </li>
            </ul>
          </div>
          <button
            onClick={onOpenJoin}
            className="w-full py-2.5 rounded-xl bg-red-500/20 text-red-200 border border-red-500/30 hover:bg-red-500/30 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore YouTube Tasks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>

        {/* Stream 3: Digital News Reading */}
        <article className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-500/30 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
              <Newspaper className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display text-white font-medium">
              Editorial News &amp; Content Curation
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Stay informed with daily verified business, technology, and regional news briefs. Read designated articles and claim daily reading allowances.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-300 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Fresh editorial briefs released daily</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Fast 1-click verification per article</span>
              </li>
            </ul>
          </div>
          <button
            onClick={onOpenJoin}
            className="w-full py-2.5 rounded-xl bg-amber-500/20 text-amber-200 border border-amber-500/30 hover:bg-amber-500/30 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2"
          >
            <span>Read Daily News</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>

        {/* Stream 4: Matchday Fan Battles */}
        <article className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display text-white font-medium">
              Matchday Sports Fan Battles
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Represent your favorite football club in weekly matchday showdowns. Cast live predictions, participate in community trivia, and share in matchday reward pools.
            </p>
            <ul className="space-y-1.5 text-xs text-stone-300 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>EPL, Champions League &amp; La Liga derbies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Community voting power multiplier</span>
              </li>
            </ul>
          </div>
          <button
            onClick={onOpenJoin}
            className="w-full py-2.5 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 hover:bg-emerald-500/30 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2"
          >
            <span>Join Fan Battles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>

      </div>

      {/* Internal Navigation Links */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
          Explore Related Sections
        </h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <button onClick={() => onNavigate('about')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            About VELORA
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How It Works
          </button>
          <button onClick={() => onNavigate('academy')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            AI Academy
          </button>
          <button onClick={() => onNavigate('community')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Community
          </button>
          <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            VELORA FAQs
          </button>
        </div>
      </section>

    </div>
  );
};
