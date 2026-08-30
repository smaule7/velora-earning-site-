import React from 'react';
import { ArrowLeft, Sparkles, BookOpen, Cpu, Award, CheckCircle2, ArrowRight, Video, FileText, Code, Layers, Zap } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';

interface AcademyPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onBackToHome, onOpenJoin, onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">VELORA Academy</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Digital Skills &amp; Learning</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          VELORA Academy — Learn &amp; Develop Skills
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Master high-demand digital skills on VELORA Academy. Explore practical training in prompt engineering, generative AI workflows, creative media optimization, and digital monetization strategies.
        </p>
      </header>

      {/* Visual Artwork Banner */}
      <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <VeloraFlyer
          imageKey="ai_prompt"
          alt="VELORA Academy Generative AI and Skill Development"
          aspectClass="aspect-[16/9] sm:aspect-[21/9]"
          caption="VELORA AI &amp; Digital Skills Masterclass Hub"
          priority={true}
        />
      </div>

      {/* Core Learning Tracks */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
          Structured Learning Tracks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Track 1: Prompt Engineering */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white font-medium">
              1. Prompt Engineering &amp; AI Directing
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Learn how to write structured prompts for large language models and diffusion models. Understand negative prompts, token weights, role conditioning, and regional localization.
            </p>
            <div className="text-xs font-mono text-purple-300 space-y-1">
              <div>• Foundation LLM conditioning</div>
              <div>• Image diffusion generation syntax</div>
            </div>
          </div>

          {/* Track 2: Digital Asset Creation */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white font-medium">
              2. Digital Media &amp; Asset Creation
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Convert raw AI concepts into high-quality commercial assets: vector icons, promotional flyers, marketing copy, and short-form video hooks.
            </p>
            <div className="text-xs font-mono text-amber-300 space-y-1">
              <div>• High-resolution visual synthesis</div>
              <div>• Commercial flyer layout fundamentals</div>
            </div>
          </div>

          {/* Track 3: YouTube & Content Optimization */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-300 border border-red-500/30 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white font-medium">
              3. Video Analytics &amp; Growth Hacking
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Understand audience retention curves, CTR optimization, high-impact thumbnail design, and SEO metadata strategies for video platforms.
            </p>
            <div className="text-xs font-mono text-red-300 space-y-1">
              <div>• Click-through-rate (CTR) diagnostics</div>
              <div>• Algorithmic hook positioning</div>
            </div>
          </div>

          {/* Track 4: Monetization Workflows */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white font-medium">
              4. Practical Digital Monetization
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              Discover how to monetize your newfound digital skills on VELORA and through external freelancing, remote agency support, and creator partnerships.
            </p>
            <div className="text-xs font-mono text-emerald-300 space-y-1">
              <div>• VELORA micro-task validation</div>
              <div>• Freelance portfolio development</div>
            </div>
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
          <button onClick={() => onNavigate('community')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Community
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How It Works
          </button>
          <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            VELORA FAQs
          </button>
        </div>
      </section>

      {/* Call to Action Footer Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-transparent border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <h3 className="text-lg font-display text-white font-medium">Ready to develop high-income digital skills?</h3>
          <p className="text-xs text-stone-300">Join VELORA Academy today and explore hands-on generative AI masterclasses.</p>
        </div>
        <button
          onClick={onOpenJoin}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Start Learning on VELORA</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
