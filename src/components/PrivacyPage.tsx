import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

interface PrivacyPageProps {
  onBackToHome: () => void;
  onNavigate: (view: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBackToHome, onNavigate }) => {
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
        <span className="text-amber-300">Privacy Policy</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Protection &amp; Security</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Velora Earnings Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Learn how Velora Earnings collects, manages, and protects your personal data and account credentials.
        </p>
        <p className="text-xs font-mono text-stone-400">
          Last Updated: August 2026 • Official Platform Standard
        </p>
      </header>

      {/* Content Sections */}
      <article className="space-y-8 text-stone-300 font-light text-sm sm:text-base leading-relaxed">
        
        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            1. Information We Collect
          </h2>
          <p>
            When you register on the official Velora Earnings platform (<a href="https://veloraearnings.com.ng" className="text-amber-300 underline">https://veloraearnings.com.ng</a>), we collect essential account details including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-300">
            <li>Your full legal name and email address</li>
            <li>Your WhatsApp phone number for withdrawal notifications and account verification</li>
            <li>Nigerian bank account details provided exclusively for payout disbursement</li>
            <li>Task submission logs, AI prompt records, and account activity metadata</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used solely to operate the Velora Earnings ecosystem, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-300">
            <li>Authenticating your member dashboard and securing your user session</li>
            <li>Validating completed daily tasks, AI prompt uploads, and news distribution activities</li>
            <li>Processing automated payouts to your verified Nigerian commercial bank or digital wallet</li>
            <li>Delivering important platform updates and security alerts</li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            3. Data Protection and Encryption
          </h2>
          <p>
            Velora Earnings enforces strict security standards, including 256-bit TLS encryption for all data in transit, encrypted password hashing, and role-based access control across our Velora Linux cloud infrastructure.
          </p>
          <p>
            We do not sell, rent, or trade your personal data to third-party advertisers.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            4. Cookies and Session Storage
          </h2>
          <p>
            We use essential local storage and secure cookies to maintain your login session, save your navigation preferences, and ensure seamless performance across platform pages.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <h2 className="text-xl font-display text-white font-medium">
            5. Your Rights and Contact Information
          </h2>
          <p>
            You have the right to review, update, or request the deletion of your personal data at any time. To make a privacy inquiry, reach out to our compliance desk at <a href="mailto:support@veloraearnings.com.ng" className="text-amber-300 underline">support@veloraearnings.com.ng</a>.
          </p>
        </section>

      </article>

      {/* Internal Navigation Links */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 text-stone-300 text-sm">
        <h2 className="text-base font-display text-white font-medium">
          Related Official Pages
        </h2>
        <div className="flex flex-wrap gap-3 text-xs">
          <a href="/terms" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Terms of Service
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Contact Velora Earnings
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            About Velora Earnings
          </a>
          <a href="/faqs" onClick={(e) => { e.preventDefault(); onNavigate('faqs'); }} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Velora Earnings FAQs
          </a>
        </div>
      </section>

    </div>
  );
};
