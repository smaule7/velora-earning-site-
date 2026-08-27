import React, { useState, useEffect, useRef } from 'react';
import { Youtube, Sparkles, CheckCircle2, ArrowRight, BarChart2, Check, ShieldCheck, DollarSign } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface YouTubeEarningsSectionProps {
  onOpenJoin: () => void;
}

export const YouTubeEarningsSection: React.FC<YouTubeEarningsSectionProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<'A' | 'B'>('B');
  const [testedRewardClaimed, setTestedRewardClaimed] = useState(false);

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

  const handleTestSubmit = () => {
    setTestedRewardClaimed(true);
    setTimeout(() => setTestedRewardClaimed(false), 4000);
  };

  return (
    <section 
      id="youtube-earnings" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className={`space-y-10 p-6 sm:p-10 rounded-3xl velora-glass border border-rose-500/30 bg-gradient-to-b from-rose-950/20 via-black/80 to-black shadow-2xl reveal-item scale-settle ${
        isRevealed ? 'is-revealed' : ''
      }`}>
        {/* ALTERNATING SIDE-BY-SIDE HERO WRAPPER: WRITE-UP ON LEFT, IMAGE ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT SIDE: CATEGORY + HEADING + SHORT WRITE-UP + CTA */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono uppercase tracking-widest">
              <Youtube className="w-3.5 h-3.5 text-rose-400" />
              <span>{VELORA_CONTENT.youtube.sectionLabel}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-white font-medium tracking-tight">
                {VELORA_CONTENT.youtube.headline}
              </h2>
              <p className="text-amber-300 font-display text-sm sm:text-base italic">
                "{VELORA_CONTENT.youtube.subtitle}"
              </p>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {VELORA_CONTENT.youtube.description}
            </p>

            {/* Quick Reward Highlight Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-black/60 border border-rose-500/30">
                <span className="text-[10px] text-stone-400 uppercase font-mono block">Base Grant</span>
                <span className="text-lg sm:text-xl font-display text-rose-300 font-medium block">$50.00</span>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-amber-400/30">
                <span className="text-[10px] text-stone-400 uppercase font-mono block">CTR Bounty</span>
                <span className="text-lg sm:text-xl font-display text-amber-300 font-medium block">$75.00</span>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-emerald-400/30 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-stone-400 uppercase font-mono block">Sponsor Pool</span>
                <span className="text-lg sm:text-xl font-display text-emerald-400 font-medium block">Up to $250</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenJoin}
                className="btn-gold text-xs sm:text-sm px-6 py-3 shadow-lg shadow-rose-500/20 inline-flex items-center gap-2"
              >
                <span>{VELORA_CONTENT.youtube.ctaText} →</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: OFFICIAL ARTWORK */}
          <div className="lg:col-span-5 w-full">
            <VeloraFlyer
              imageKey="youtube"
              alt="VELORA YouTube Opportunities & Creator Rewards Promotional Artwork"
              aspectClass="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
              caption="Official YouTube Opportunities • Turn Content Into Earnings"
            />
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* WHAT YOU GET / KEY FEATURES */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-rose-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" /> WHAT YOU GET
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
            {VELORA_CONTENT.youtube.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* HOW IT WORKS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-rose-300 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400" /> HOW IT WORKS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-rose-400 font-bold">1. Connect Channel</span>
              <p>Link your YouTube channel in your dashboard to sync analytics and verified engagement metrics.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-rose-400 font-bold">2. Select a Campaign</span>
              <p>Pick an active video topic or thumbnail optimization task and publish according to simple guidelines.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-rose-400 font-bold">3. Earn Direct Rewards</span>
              <p>Once analytics verify reach, funds ($50 - $250) credit immediately to your withdrawable wallet.</p>
            </div>
          </div>
        </div>

        {/* Interactive Benchmark Simulator */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-rose-500/20 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase text-rose-300 flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5" /> Interactive Thumbnail & CTR Benchmark Studio
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Reward: $50.00 / Campaign
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div 
              onClick={() => setSelectedVariant('A')}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                selectedVariant === 'A' 
                  ? 'border-rose-400 bg-rose-950/30 shadow-lg' 
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-stone-300 font-medium">Standard Framing (Variant A)</span>
                <span className="text-[10px] font-mono text-stone-400">8.4% CTR</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-stone-400 h-full w-[42%]" />
              </div>
            </div>

            <div 
              onClick={() => setSelectedVariant('B')}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                selectedVariant === 'B' 
                  ? 'border-rose-400 bg-rose-950/30 shadow-lg' 
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-amber-300 font-medium">High Contrast Focal (Variant B)</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">14.8% CTR (Winner)</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[76%]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            <button
              onClick={handleTestSubmit}
              className="btn-gold text-xs px-4 py-2 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulate Benchmark (+$50.00)</span>
            </button>
          </div>

          {testedRewardClaimed && (
            <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <Check className="w-4 h-4 shrink-0" />
              <span>Insight logged! 14.8% CTR model verified. Campaign bounty +$50.00 logged to demo balance.</span>
            </div>
          )}
        </div>

        {/* 7. CTA BUTTON */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenJoin}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-rose-500/20 inline-flex items-center gap-2"
          >
            <span>{VELORA_CONTENT.youtube.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeEarningsSection;
