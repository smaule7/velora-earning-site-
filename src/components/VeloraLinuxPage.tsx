import React from 'react';
import { ArrowLeft, Terminal, Cpu, Server, ShieldCheck, Zap, Layers, CheckCircle2, ArrowRight, Code, Globe, Lock } from 'lucide-react';

interface VeloraLinuxPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const VeloraLinuxPage: React.FC<VeloraLinuxPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-emerald-300">Velora Linux</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" />
          <span>Cloud Infrastructure &amp; Technical Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          What is Velora Linux? The Technology Behind Velora Earnings
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          A transparent look into the Linux-powered cloud backend, AI inference worker nodes, and automated task verification algorithms powering the Velora digital ecosystem.
        </p>
      </header>

      {/* Main Narrative Article */}
      <article className="space-y-10 text-stone-300 leading-relaxed font-light text-sm sm:text-base">
        
        {/* Definition Section */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Defining Velora Linux in the Velora Ecosystem
          </h2>
          <p>
            In the context of the official Velora platform (<a href="https://veloraearnings.com.ng/" className="text-amber-300 underline underline-offset-2">veloraearnings.com.ng</a>), <strong>Velora Linux</strong> is the proprietary name given to our high-performance, containerized Linux cloud infrastructure and developer automation stack.
          </p>
          <p>
            Rather than a standalone commercial operating system, <strong>Velora Linux represents the underlying open-source Linux compute engine</strong> that runs all real-time reward calculations, user verification checks, and AI prompt processing microservices for over 38,000 creators across Nigeria and Africa.
          </p>
        </section>

        {/* Technical Architecture 3-Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center border border-emerald-500/20">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display text-white font-medium">1. Containerized Verification</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Automated lightweight Linux worker containers (Docker &amp; Kubernetes) instantly audit user submissions, preventing duplicate claims and ensuring rapid reward crediting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-300 flex items-center justify-center border border-purple-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display text-white font-medium">2. AI Model Inference Cluster</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              GPU-accelerated Linux server instances host our AI Academy training models for prompt engineering, natural language parsing, and media generation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center border border-amber-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display text-white font-medium">3. High-Security Ledger</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Hardened Linux security protocols encrypt member data, protect session tokens, and ensure tamper-proof ledger updates for all wallet balances.
            </p>
          </div>

        </div>

        {/* Why Velora Built on Linux */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0a0515] border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
            Why Velora Built Its Earning Engine on Linux
          </h2>
          <p>
            Operating in emerging digital economies like Nigeria requires high uptime, low bandwidth consumption, and lightning-fast server responses. By utilizing customized Linux kernels:
          </p>
          <ul className="space-y-3 pt-2 text-stone-200">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span><strong>Sub-Second Task Validation:</strong> Members in Lagos, Abuja, Port Harcourt, or anywhere in Africa experience instant feedback when completing tasks.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span><strong>Cost-Efficient Scale:</strong> Open-source Linux architecture keeps operational server overhead minimal, allowing up to 85% of platform value to be redistributed directly to members.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span><strong>Developer API Sandbox:</strong> Future-proof endpoints allow developers to build automated tools, bots, and content integrations on top of the Velora platform.</span>
            </li>
          </ul>
        </section>

        {/* Summary Statement */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-display text-white font-medium">
            Summary: Velora, Velora Earnings &amp; Velora Linux
          </h2>
          <p>
            To clarify the terms: <strong>Velora</strong> is the overarching brand and digital community; <strong>Velora Earnings</strong> is the user-facing rewards and earning program; and <strong>Velora Linux</strong> is the cloud technology and server foundation powering everything behind the scenes.
          </p>
        </section>

      </article>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('about')}
            className="text-xs text-stone-300 hover:text-amber-300 font-mono flex items-center gap-1"
          >
            <span>Read About Velora</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-stone-600">|</span>
          <button
            onClick={() => onNavigate('how-it-works')}
            className="text-xs text-stone-300 hover:text-amber-300 font-mono flex items-center gap-1"
          >
            <span>How Velora Works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={onOpenJoin}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Join Velora Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
