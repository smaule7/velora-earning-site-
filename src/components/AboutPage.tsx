import React from 'react';
import { ArrowLeft, ShieldCheck, Sparkles, Terminal, Award, Users, CheckCircle2, ArrowRight, UserPlus, Zap, Wallet, HelpCircle, Layers } from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">About VELORA</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Platform Overview</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          About VELORA — Our Platform &amp; Opportunities
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          VELORA is a digital platform offering opportunities to participate, create, learn, and earn through available VELORA activities. Explore what our platform offers, how users participate, and how account creation and activation work.
        </p>
      </header>

      {/* Main Content Article */}
      <article className="space-y-10 text-stone-300 leading-relaxed font-light text-sm sm:text-base">
        
        {/* Section 1: What is VELORA? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            What is VELORA?
          </h2>
          <p>
            <strong>VELORA</strong> is a digital earning and creator ecosystem designed to connect online users in Nigeria and worldwide with genuine digital activities. The platform brings together micro-tasking, generative AI skill development, video engagement, digital journalism curation, and community sports challenges into a unified web dashboard.
          </p>
          <p>
            VELORA provides structured channels where individuals can apply their creative and analytical time online to complete verified digital activities and receive rewards credited directly to their internal account wallet.
          </p>
        </section>

        {/* Section 2: What the platform offers */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            What Does the Platform Offer?
          </h2>
          <p>
            The VELORA platform provides a comprehensive suite of digital tools and engagement streams tailored to creators, learners, and remote workers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>AI Prompt Academy &amp; Asset Monetization</span>
              </div>
              <p className="text-xs text-stone-400">
                Learn prompt engineering and upload creative generative text and visual prompts for validation and earning credits.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-medium">
                <Layers className="w-4 h-4" />
                <span>YouTube Creator Suite</span>
              </div>
              <p className="text-xs text-stone-400">
                Review, test, and optimize video content workflows and participate in digital media growth campaigns.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Digital Journalism &amp; News Curation</span>
              </div>
              <p className="text-xs text-stone-400">
                Read, curate, and review daily verified news stories to claim structured editorial engagement rewards.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-medium">
                <Wallet className="w-4 h-4" />
                <span>Direct Nigerian Bank Payouts</span>
              </div>
              <p className="text-xs text-stone-400">
                Fast withdrawal processing directly to all Nigerian commercial banks including Moniepoint, GTBank, Zenith, and Kuda.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Types of Opportunities Available */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Types of Opportunities Available
          </h2>
          <p>
            Members on VELORA can participate across diverse reward-eligible digital streams:
          </p>
          <ul className="space-y-3 text-stone-200">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <strong>Daily AI Creation Tasks:</strong> Submit prompts and test generative AI outputs tailored for regional datasets.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <strong>Media Engagement Challenges:</strong> Review video hooks, critique thumbnails, and provide content engagement.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <strong>Editorial Reading Activities:</strong> Engage with curated news articles and share informed commentary.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <strong>Matchday Fan Battles:</strong> Predict sports match outcomes and participate in community voting derbies.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <strong>Affiliate &amp; Community Referral Rewards:</strong> Share your unique referral link to earn direct referral bonuses upon new member activation.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 4: How Users Participate */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            How Users Participate
          </h2>
          <p>
            Participation on VELORA is accessible from any smartphone, tablet, or personal computer with an internet connection:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-stone-200 pl-2">
            <li>Log in to your verified member dashboard.</li>
            <li>Select an active opportunity from the daily task catalog.</li>
            <li>Follow the specific task instructions (e.g., submit an AI prompt, read an article, or submit feedback).</li>
            <li>Submit your proof or complete the automated verification checklist.</li>
            <li>Upon verification, your rewards balance updates in your creator wallet.</li>
          </ol>
        </section>

        {/* Section 5: How Users Create an Account */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            How Users Create an Account
          </h2>
          <p>
            Creating an account on VELORA is straightforward and takes less than two minutes:
          </p>
          <ul className="space-y-2 text-stone-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>Visit <strong className="text-white">veloraearnings.com.ng/signup</strong> or click any "Sign Up" button.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>Provide your Full Name, Email Address, WhatsApp Phone Number, and choose a secure Password.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>Submit the form to immediately access your member dashboard.</span>
            </li>
          </ul>
        </section>

        {/* Section 6: How Account Activation Works */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0e071c] border border-amber-400/20">
          <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Transparent Activation Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            How Account Activation Works
          </h2>
          <p>
            To activate earning privileges, unlock daily task modules, and enable bank withdrawals, members select a one-time activation package:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-amber-300 uppercase">Silver AI Tier — ₦8,000</span>
              <p className="text-xs text-stone-400">
                Includes ₦5,000 instant welcome credit, standard AI prompt tasks, digital news rewards, and ₦6,200 direct referral commission.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-amber-400/30 space-y-2">
              <span className="text-xs font-mono text-amber-300 uppercase">Golden AI Tier — ₦12,000</span>
              <p className="text-xs text-stone-400">
                Includes ₦8,000 instant welcome credit, advanced YouTube tools, priority Matchday Fan Battle pools, and ₦8,000 direct referral commission.
              </p>
            </div>
          </div>
          <p className="text-xs text-stone-400 pt-2">
            Activation is a one-time payment made through verified bank transfer or coupon vendor. There are no recurring monthly maintenance subscription fees.
          </p>
        </section>

        {/* Section 7: Clear & Honest Platform Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Platform Transparency &amp; User Advisory
          </h2>
          <p>
            Rewards on VELORA are earned through verified task completion and genuine participation. Earnings are not passive or automatically guaranteed. We encourage all prospective members to read our <button onClick={() => onNavigate('terms')} className="text-amber-300 underline underline-offset-2">Terms of Service</button> and <button onClick={() => onNavigate('privacy')} className="text-amber-300 underline underline-offset-2">Privacy Policy</button> before registering.
          </p>
        </section>

        {/* Internal Link Exploration Strip */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
          <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
            Explore VELORA Pages
          </h3>
          <div className="flex flex-wrap gap-3 text-xs">
            <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              How It Works
            </button>
            <button onClick={() => onNavigate('opportunities')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Opportunities
            </button>
            <button onClick={() => onNavigate('academy')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              AI Academy
            </button>
            <button onClick={() => onNavigate('community')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Community
            </button>
            <button onClick={() => onNavigate('packages')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Membership Packages
            </button>
            <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              VELORA FAQs
            </button>
            <button onClick={() => onNavigate('contact')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Contact Support
            </button>
          </div>
        </section>

      </article>

      {/* Call to Action Footer Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <h3 className="text-lg font-display text-white font-medium">Ready to explore VELORA opportunities?</h3>
          <p className="text-xs text-stone-300">Create your account in under two minutes and join our creator platform.</p>
        </div>
        <button
          onClick={onOpenJoin}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Create Your Account</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
