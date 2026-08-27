import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight, FileCode, Check, ShieldCheck, DollarSign, BookOpen, Layers } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface AIUploadSectionProps {
  onOpenJoin: () => void;
}

export const AIUploadSection: React.FC<AIUploadSectionProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Interactive AI Simulator
  const [promptTitle, setPromptTitle] = useState('Cinematic Cyber-Chiaroscuro Studio v6');
  const [promptCategory, setPromptCategory] = useState('Midjourney / FLUX');
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setUploadedSuccess(true);
    setTimeout(() => setUploadedSuccess(false), 4000);
  };

  return (
    <section 
      id="ai-upload" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className={`space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border border-purple-500/30 bg-gradient-to-b from-purple-950/20 via-black/80 to-black shadow-2xl reveal-item scale-settle ${
        isRevealed ? 'is-revealed' : ''
      }`}>
        {/* 1. EXACT GOOGLE DRIVE IMAGE FIRST (ABOVE WRITE-UP) */}
        <div className="max-w-md mx-auto">
          <VeloraFlyer
            imageKey="academy"
            alt="VELORA AI Academy & AI Upload Promotional Flyer"
            aspectClass="aspect-square"
            caption="Official AI Academy Flyer • Learn. Create. Grow."
          />
        </div>

        {/* 2. FEATURE LABEL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{VELORA_CONTENT.aiAcademy.sectionLabel}</span>
          </div>
        </div>

        {/* 3. MAIN TITLE & HEADLINE */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-display text-white font-medium tracking-tight">
            {VELORA_CONTENT.aiAcademy.headline}
          </h2>
          <p className="text-amber-300 font-display text-base sm:text-lg italic">
            "{VELORA_CONTENT.aiAcademy.subtitle}"
          </p>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {VELORA_CONTENT.aiAcademy.description}
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* 4. WHAT YOU GET / KEY FEATURES */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> WHAT YOU GET
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
            {VELORA_CONTENT.aiAcademy.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 5. REWARDS / EARNINGS STRUCTURE */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5 text-purple-400" /> REWARDS / EARNINGS STRUCTURE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-black/60 border border-purple-500/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Asset Submission</span>
              <span className="text-2xl font-display text-purple-300 font-medium my-1 block">$25 – $80</span>
              <span className="text-[11px] text-stone-400">Per verified prompt toolkit</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-amber-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">AI Lucky Book Reward</span>
              <span className="text-2xl font-display text-amber-300 font-medium my-1 block">$15 Bonus</span>
              <span className="text-[11px] text-stone-400">Per curriculum chapter milestone</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Download Royalties</span>
              <span className="text-2xl font-display text-emerald-400 font-medium my-1 block">Continuous $</span>
              <span className="text-[11px] text-stone-400">Credited automatically per download</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 6. HOW IT WORKS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> HOW IT WORKS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-purple-400 font-bold">1. Learn & Package</span>
              <p>Master AI prompting techniques and format your Midjourney, FLUX, or SDXL prompts with parameters.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-purple-400 font-bold">2. Submit for Verification</span>
              <p>Upload your package to the creator repository where automated syntax engines validate consistency.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-purple-400 font-bold">3. Earn Cash & Royalties</span>
              <p>Receive your $25–$80 reward instantly into your dashboard balance with complete withdrawal freedom.</p>
            </div>
          </div>
        </div>

        {/* Interactive Upload Portal Preview */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-purple-500/20 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase text-amber-300 flex items-center gap-1.5">
              <FileCode className="w-3.5 h-3.5" /> AI Asset Submission Sandbox
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Live Validation
            </span>
          </div>

          <form onSubmit={handleSimulateUpload} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Package Title</label>
                <input
                  type="text"
                  value={promptTitle}
                  onChange={e => setPromptTitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/70 border border-white/15 text-white text-xs focus:border-purple-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Model Architecture</label>
                <select
                  value={promptCategory}
                  onChange={e => setPromptCategory(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/70 border border-white/15 text-white text-xs focus:border-purple-400 focus:outline-none"
                >
                  <option>Midjourney v6 / FLUX</option>
                  <option>Stable Diffusion / SDXL</option>
                  <option>Claude 3.5 / Gemini Blueprint</option>
                  <option>ComfyUI Automated Workflow</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="btn-gold text-xs px-4 py-2 w-full sm:w-auto flex items-center justify-center gap-2 shrink-0"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Test Verification (+$45.00)</span>
              </button>
            </div>
          </form>

          {uploadedSuccess && (
            <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <Check className="w-4 h-4 shrink-0" />
              <span>Asset verified! +$45.00 simulated to balance. Join to submit real AI workflows.</span>
            </div>
          )}
        </div>

        {/* 7. CTA BUTTON */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenJoin}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-purple-500/20 inline-flex items-center gap-2"
          >
            <span>{VELORA_CONTENT.aiAcademy.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIUploadSection;
