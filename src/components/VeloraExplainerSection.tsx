import React from 'react';
import { Sparkles, Terminal, Cpu, ShieldCheck, ArrowRight, Zap, Globe, Layers, BookOpen, HelpCircle } from 'lucide-react';

interface VeloraExplainerSectionProps {
  onNavigate: (view: string) => void;
  onOpenJoin: () => void;
}

export const VeloraExplainerSection: React.FC<VeloraExplainerSectionProps> = ({ onNavigate, onOpenJoin }) => {
  return (
    <section id="velora-overview" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-b from-[#06030c] via-[#0b0517] to-[#06030c]">
      <div id="how-it-works" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Ecosystem &amp; Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
            Understanding the Velora Earnings Platform
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            Velora Earnings is Nigeria's premier digital creator ecosystem engineered to bridge generative AI, digital journalism, creator monetization, and community rewards.
          </p>
        </div>

        {/* 4-Card Contextual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* 1. What is Velora? */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-white font-medium">
                What is Velora Earnings?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                <strong>Velora Earnings</strong> is an all-in-one digital platform that unites content creators, students, and digital workers. It provides accessible tools for mastering artificial intelligence, reviewing YouTube media, publishing verified news, participating in sports fan battles, and unlocking authentic daily income streams.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button 
                onClick={() => onNavigate('about')}
                className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>About Velora Earnings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Platform Features */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-white font-medium">
                Velora Earnings Features
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Explore the complete multi-stream suite: AI Prompt Academy &amp; Marketplace, YouTube Creator Optimization, Digital Journalism Rewards, and Matchday Fan Battles designed for high daily earning potential.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button 
                onClick={() => onNavigate('features')}
                className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Explore all platform features</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. How Velora Linux Works */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-white font-medium">
                How Velora Linux Powers Earnings
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                <strong>Velora Linux</strong> represents the core high-performance Linux cloud infrastructure and containerized worker environment hosting Velora Earnings. It orchestrates low-latency AI model inference, runs automated verification algorithms for task submissions, and powers secure bank payouts.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button 
                onClick={() => onNavigate('velora-linux')}
                className="text-xs font-mono text-emerald-300 hover:text-emerald-200 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Discover Velora Linux architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. How to Use Velora in Nigeria */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-white font-medium">
                How Velora Earnings Works
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Using <strong>Velora Earnings Nigeria</strong> is simple: register a free creator account, activate your tier (Silver AI or Golden AI), complete daily structured tasks, and withdraw your accumulated earnings directly to any Nigerian commercial bank account.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button 
                onClick={() => onNavigate('how-it-works')}
                className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Step-by-step guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Quick Reference Breadcrumbs / Links Strip */}
        <div className="p-6 rounded-2xl bg-[#0e071c] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">Looking for in-depth documentation &amp; support?</h4>
              <p className="text-xs text-stone-400">Explore dedicated guides, technical specifications, and official support contacts.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigate('signup')}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 text-xs text-amber-300 font-medium transition-colors"
            >
              Sign Up
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate('features')}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => onNavigate('faqs')}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 transition-colors"
            >
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
