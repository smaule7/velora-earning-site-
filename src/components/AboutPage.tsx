import React from 'react';
import { ArrowLeft, Globe, ShieldCheck, Sparkles, Terminal, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

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
        <span className="text-amber-300">About Velora Earnings</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Information</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          What Is Velora Earnings?
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Velora Earnings is a digital platform that provides structured micro-tasks, generative AI educational tools, video engagement rewards, digital news curation, sports matchday fan battles, and direct payout processing. Learn about the organization, operational model, available features, eligible users, and support channels.
        </p>
      </header>

      {/* Main Content Article */}
      <article className="space-y-10 text-stone-300 leading-relaxed font-light text-sm sm:text-base">
        
        {/* Section 1: What is Velora Earnings? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            What is Velora Earnings?
          </h2>
          <p>
            <strong>Velora Earnings</strong> is a digital platform and creator monetization ecosystem designed to connect online users with reward-eligible digital activities. The platform enables members to complete verified micro-tasks—including AI prompt creation, video feedback, news reading, and community engagement—and accumulate rewards that can be requested for withdrawal to supported Nigerian bank accounts.
          </p>
        </section>

        {/* Section 2: What does Velora Earnings do? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            What does Velora Earnings do?
          </h2>
          <p>
            Velora Earnings provides a web-based dashboard where users can access daily digital activities, track their completed tasks, manage an internal earnings balance, and submit withdrawal requests. The platform partners with digital campaigns, content creators, and AI model workflows to provide task opportunities that users can complete on mobile or desktop devices.
          </p>
        </section>

        {/* Section 3: Who operates Velora Earnings? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Who operates Velora Earnings?
          </h2>
          <p>
            Velora Earnings is operated by the Velora Earnings platform administration team, with official financial settlement processing handled through verified commercial banking integrations including Moniepoint Microfinance Bank (Account Name: MONIEPOINT VELORA / CHIDINDU BLESSING IKECHUKWU, Account Number: 5275881766).
          </p>
        </section>

        {/* Section 4: When was Velora Earnings established? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            When was Velora Earnings established?
          </h2>
          <p>
            Velora Earnings was founded to address digital monetization barriers and payment challenges faced by online creators in Africa, launching its integrated task and AI-powered reward architecture in 2026.
          </p>
        </section>

        {/* Section 5: Where does Velora Earnings operate? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Where does Velora Earnings operate?
          </h2>
          <p>
            Velora Earnings operates primarily in Nigeria with direct Nigerian Naira (₦) banking integration, while supporting international digital participants across Ghana, Kenya, South Africa, and worldwide through digital reward settlement channels.
          </p>
        </section>

        {/* Section 6: What services/features does Velora Earnings provide? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            What services and features does Velora Earnings provide?
          </h2>
          <ul className="space-y-2 text-stone-200">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span><strong>AI Upload &amp; Prompt Monetization:</strong> Tools for submitting AI prompts and dataset training materials for reward credits.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span><strong>YouTube Creator Suite:</strong> Video engagement campaigns and analytics review tasks.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span><strong>Velora News Curation:</strong> Daily verified editorial review and reading reward incentives.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span><strong>Matchday Fan Battle Arena:</strong> Interactive sports fixture predictions and community voting challenges.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span><strong>Creator Wallet &amp; Payout Gateway:</strong> Real-time task tracking with direct withdrawal execution to Nigerian commercial banks.</span>
            </li>
          </ul>
        </section>

        {/* Section 7: Who can use Velora Earnings? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Who can use Velora Earnings?
          </h2>
          <p>
            Any individual aged 18 or older with an internet-connected smartphone or computer, a valid email address, and an active bank account or supported digital payment method can register and participate on Velora Earnings.
          </p>
        </section>

        {/* Section 8: How can users contact Velora Earnings? */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            How can users contact Velora Earnings?
          </h2>
          <p>
            Users can contact Velora Earnings through the official email address <strong>support@veloraearnings.com.ng</strong>, via the official Contact page at <strong>https://veloraearnings.com.ng/contact</strong>, or through verified platform support channels.
          </p>
        </section>

        {/* Section 9: Understanding Velora Linux */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0d071a] border border-white/10">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" />
            <span>Infrastructure &amp; Technology Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Velora Linux: The Cloud Backbone of Velora Earnings
          </h2>
          <p>
            <strong>Velora Linux</strong> refers to the robust, containerized cloud infrastructure that powers the Velora Earnings platform. Built on high-performance Linux server kernels, this stack is responsible for:
          </p>
          <ul className="space-y-2 pt-2 text-stone-200">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span><strong>AI Inference Nodes:</strong> Hosting generative AI model processing pipelines for image, audio, and prompt creation modules.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span><strong>Task Verification Engine:</strong> Running automated background algorithms that validate member task submissions and calculate rewards instantly.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span><strong>Secure Banking Gateway:</strong> Direct TLS-encrypted transaction links guaranteeing fast, reliable payout execution to Nigerian banks.</span>
            </li>
          </ul>
        </section>

        {/* Section 4: Our Mission in Nigeria & Africa */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Velora Earnings in Nigeria &amp; Across Africa
          </h2>
          <p>
            In Nigeria, digital workers often face cross-border payment restrictions and lack of accessible AI training. Velora Earnings solves this by offering localized payment channels (Moniepoint, Nigerian bank accounts) and structuring micro-tasks that turn internet time into verified daily earnings.
          </p>
        </section>

        {/* Section 5: Core Pillars */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <Users className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-display text-white font-medium">Community First</h3>
            <p className="text-xs text-stone-400">Over 38,000 active members actively collaborating, learning, and earning daily on Velora Earnings.</p>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-display text-white font-medium">Verified Transparency</h3>
            <p className="text-xs text-stone-400">Transparent reward rates, verifiable payout records, and guaranteed withdrawal fulfillment.</p>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <Award className="w-5 h-5 text-purple-400" />
            <h3 className="text-base font-display text-white font-medium">Continuous Innovation</h3>
            <p className="text-xs text-stone-400">Regularly updated AI workflows, sports entertainment modules, and creator toolsets on Velora Earnings.</p>
          </div>
        </section>

        {/* Internal Link Exploration Strip */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
          <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
            Explore Velora Earnings Pages
          </h3>
          <div className="flex flex-wrap gap-3 text-xs">
            <button onClick={() => onNavigate('signup')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Sign Up
            </button>
            <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              How It Works
            </button>
            <button onClick={() => onNavigate('features')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Platform Features
            </button>
            <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
              Velora Earnings FAQs
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
          <h3 className="text-lg font-display text-white font-medium">Ready to start earning with Velora Earnings?</h3>
          <p className="text-xs text-stone-300">Create your account in under two minutes and join thousands of active Nigerian creators.</p>
        </div>
        <button
          onClick={onOpenJoin}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Sign Up for Velora Earnings</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
