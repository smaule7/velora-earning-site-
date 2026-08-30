import React from 'react';
import { ArrowLeft, FileText, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface TermsPageProps {
  onBackToHome: () => void;
  onNavigate: (view: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBackToHome, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onBackToHome(); }} 
          className="hover:text-amber-300 transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Velora Earnings</span>
        </a>
        <span>/</span>
        <span className="text-amber-300">Terms of Service</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <FileText className="w-3.5 h-3.5" />
          <span>Official Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Velora Earnings Terms of Service
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Please review the official terms of service, governance policies, and platform rules for the Velora Earnings platform.
        </p>
        <p className="text-xs font-mono text-stone-400">
          Last Updated: August 2026 • Official Platform Standard
        </p>
      </header>

      {/* Content Sections */}
      <article className="space-y-8 text-stone-300 font-light text-sm sm:text-base leading-relaxed">
        
        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            1. Overview and Acceptance of Terms
          </h2>
          <p>
            By accessing or using the official Velora Earnings platform (available at <a href="https://veloraearnings.com.ng" className="text-amber-300 underline">https://veloraearnings.com.ng</a>), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not register for an account or use our digital services.
          </p>
          <p>
            Velora Earnings provides members with AI prompt education, YouTube growth tools, digital news curation, community fan battles, and automated Nigerian bank payouts.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            2. Account Registration and Eligibility
          </h2>
          <p>
            To create an account on Velora Earnings, you must be at least 18 years of age (or have valid guardian consent) and provide accurate, truthful personal details including your full legal name, active email address, and WhatsApp contact number.
          </p>
          <p>
            You are responsible for safeguarding your account credentials. You must immediately notify Velora Earnings support if you detect unauthorized access to your account.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            3. Digital Activities and Reward Verification
          </h2>
          <p>
            Rewards, points, and bonuses on Velora Earnings are credited upon verified completion of eligible tasks (such as AI prompt uploads, YouTube reviews, or news curation) through the Velora Linux automated verification pipeline.
          </p>
          <p>
            Any attempt to manipulate task verification through automated bots, fake engagement, or multiple fraudulent accounts will result in immediate termination of the account and forfeiture of unverified balances.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            4. Withdrawal and Payout Protocols
          </h2>
          <p>
            Withdrawals on Velora Earnings are processed during designated official payout schedules directly to licensed Nigerian commercial banks and fintech accounts (such as Moniepoint, GTBank, Zenith, Access, Kuda, and OPay) in NGN, as well as digital USD wallets.
          </p>
          <p>
            Velora Earnings does not charge hidden withdrawal fees. Payout processing timelines typically range from 2 to 4 business hours from approval.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            5. Intellectual Property and Content Rights
          </h2>
          <p>
            Members retain ownership of the original prompts, text reviews, and creative content they create, subject to the non-exclusive license granted to Velora Earnings to display and validate such content within the platform marketplace.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            6. Limitation of Liability and Disclaimers
          </h2>
          <p>
            Velora Earnings does not guarantee specific daily income amounts or financial returns. Individual earnings vary depending on user effort, activity level, package tier, and task availability.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            7. Contact and Inquiries
          </h2>
          <p>
            For questions regarding these Terms of Service, please contact our official support desk at <a href="mailto:support@veloraearnings.com.ng" className="text-amber-300 underline">support@veloraearnings.com.ng</a>.
          </p>
        </section>

      </article>

      {/* Internal Navigation Links */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 text-stone-300 text-sm">
        <h2 className="text-base font-display text-white font-medium">
          Related Official Pages
        </h2>
        <div className="flex flex-wrap gap-3 text-xs">
          <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Privacy Policy
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Contact Velora Earnings
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            About Velora Earnings
          </a>
          <a href="/how-it-works" onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How It Works
          </a>
        </div>
      </section>

    </div>
  );
};
