import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, Wallet, Star } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';

interface PackagesPageProps {
  onBackToHome: () => void;
  onOpenActivation: (plan: 'silver_ai' | 'golden_ai') => void;
  onNavigate: (view: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onBackToHome, onOpenActivation, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Membership Packages</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Membership Tiers</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          VELORA Packages — Membership Plans &amp; Activation
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Choose the right membership package to activate your VELORA account. All packages are one-time activation fees with zero recurring monthly subscription costs.
        </p>
      </header>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Package 1: Silver AI */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 flex flex-col justify-between hover:border-amber-400/30 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-stone-500/20 text-stone-300 text-xs font-mono uppercase tracking-wider">
                Starter Tier
              </span>
              <span className="text-xs text-stone-400 font-mono">One-Time Fee</span>
            </div>
            
            <div>
              <h2 className="text-2xl font-display text-white font-medium">Silver AI Tier</h2>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-display text-white font-bold">₦8,000</span>
                <span className="text-xs text-stone-400">/ lifetime</span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Ideal for new members exploring AI prompt tasks, daily news reading rewards, and basic creator monetization tools.
            </p>

            <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs text-stone-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>₦5,000</strong> Instant Welcome Credit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily AI Prompt Submissions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Digital News Reading Allowances</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>₦6,200</strong> Direct Referral Commission</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard Nigerian Bank Payouts</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenActivation('silver_ai')}
            className="btn-ghost w-full py-3 rounded-xl font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Activate Silver AI (₦8,000)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Package 2: Golden AI */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0e071c] border-2 border-amber-400/40 space-y-6 flex flex-col justify-between relative shadow-2xl">
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
            <Star className="w-3 h-3 fill-stone-950" />
            <span>Most Popular</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
                Advanced Creator Tier
              </span>
              <span className="text-xs text-amber-400 font-mono">One-Time Fee</span>
            </div>

            <div>
              <h2 className="text-2xl font-display text-white font-medium">Golden AI Tier</h2>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-display text-white font-bold">₦12,000</span>
                <span className="text-xs text-stone-400">/ lifetime</span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Maximum earning potential with access to full YouTube creator suites, priority Matchday Fan Battle pools, and highest affiliate payouts.
            </p>

            <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs text-stone-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>₦8,000</strong> Instant Welcome Credit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Priority AI Prompt Processing &amp; Higher Rates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full YouTube Creator Growth Suite</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Priority Matchday Fan Battle Derby Pools</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>₦8,000</strong> Direct Referral Commission</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Priority Bank Settlement Link</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenActivation('golden_ai')}
            className="btn-gold w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Activate Golden AI (₦12,000)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Activation Policy Notes */}
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <h3 className="text-sm font-display text-white font-medium flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Payment &amp; Activation Transparency</span>
        </h3>
        <p className="text-xs text-stone-300 leading-relaxed font-light">
          Account activation payments can be completed via automated bank transfer or official coupon code. Once verified, account benefits and welcome bonuses are assigned immediately. There are no ongoing subscription renewal fees.
        </p>
      </div>

      {/* Internal Navigation Links */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
          Explore Related Sections
        </h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How It Works
          </button>
          <button onClick={() => onNavigate('opportunities')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Opportunities
          </button>
          <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            VELORA FAQs
          </button>
          <button onClick={() => onNavigate('about')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            About VELORA
          </button>
          <button onClick={() => onNavigate('contact')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Contact Support
          </button>
        </div>
      </section>

    </div>
  );
};
