import React, { useState, useEffect, useRef } from 'react';
import { Newspaper, Sparkles, CheckCircle2, ArrowRight, Clock, Check, BookOpen, ShieldCheck, DollarSign } from 'lucide-react';
import { VeloraFlyer } from './VeloraFlyer';
import { VELORA_CONTENT } from '../data/veloraImages';

interface NewsRewardsSectionProps {
  onOpenJoin: () => void;
}

export const NewsRewardsSection: React.FC<NewsRewardsSectionProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);
  const [readingTimer, setReadingTimer] = useState(0);
  const [isReadingActive, setIsReadingActive] = useState(false);
  const [rewardEarned, setRewardEarned] = useState(false);

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

  // Reading Timer Simulator
  useEffect(() => {
    let interval: any;
    if (isReadingActive && readingTimer < 5) {
      interval = setInterval(() => {
        setReadingTimer(prev => {
          if (prev >= 4) {
            setIsReadingActive(false);
            setRewardEarned(true);
            return 5;
          }
          return prev + 1;
        });
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isReadingActive, readingTimer]);

  const articles = [
    {
      title: 'Autonomous AI Agents in the Creator Economy: The 2026 Shift',
      readTime: '4 min read',
      payout: '$8.50',
      summary: 'How multi-agent generative workflows are empowering solo creators to generate studio-grade media at fractional cost.',
      tag: 'AI Intelligence',
    },
    {
      title: 'YouTube Algorithm Signals: Why Audience Retention Trumps Raw CTR',
      readTime: '3 min read',
      payout: '$6.00',
      summary: 'Analyzing the latest metadata updates regarding first-minute retention curves and viewer satisfaction metrics.',
      tag: 'Creator Strategy',
    },
    {
      title: 'Decentralized Community Monetization & 2-Tier Incentive Networks',
      readTime: '5 min read',
      payout: '$10.00',
      summary: 'The mathematical framework behind sustainable referral override models and transparent participant rewards.',
      tag: 'Ecosystem',
    },
  ];

  const handleStartReading = () => {
    setReadingTimer(0);
    setRewardEarned(false);
    setIsReadingActive(true);
  };

  return (
    <section 
      id="news-rewards" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className={`space-y-8 p-6 sm:p-10 rounded-3xl velora-glass border border-amber-500/30 bg-gradient-to-b from-amber-950/20 via-black/80 to-black shadow-2xl reveal-item scale-settle ${
        isRevealed ? 'is-revealed' : ''
      }`}>
        {/* 1. EXACT GOOGLE DRIVE IMAGE FIRST (ABOVE WRITE-UP) */}
        <div className="max-w-md mx-auto">
          <VeloraFlyer
            imageKey="news"
            alt="VELORA News Read & Earn Promotional Flyer"
            aspectClass="aspect-[4/3] sm:aspect-[16/10]"
            caption="Official Velora News Flyer • Stay Informed. Earn Daily."
          />
        </div>

        {/* 2. FEATURE LABEL */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Newspaper className="w-3.5 h-3.5" />
            <span>{VELORA_CONTENT.news.sectionLabel}</span>
          </div>
        </div>

        {/* 3. MAIN TITLE & HEADLINE */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-display text-white font-medium tracking-tight">
            {VELORA_CONTENT.news.headline}
          </h2>
          <p className="text-amber-300 font-display text-base sm:text-lg italic">
            "{VELORA_CONTENT.news.subtitle}"
          </p>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {VELORA_CONTENT.news.description}
          </p>
        </div>

        <div className="h-px bg-white/10" />

        {/* 4. WHAT YOU GET / KEY FEATURES */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> WHAT YOU GET
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-200">
            {VELORA_CONTENT.news.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 5. REWARDS / EARNINGS STRUCTURE */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" /> REWARDS / EARNINGS STRUCTURE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-black/60 border border-amber-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Daily Briefing Payout</span>
              <span className="text-2xl font-display text-amber-300 font-medium my-1 block">$3.00 – $10.00</span>
              <span className="text-[11px] text-stone-400">Per verified completed article</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-emerald-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">7-Day Reading Streak</span>
              <span className="text-2xl font-display text-emerald-400 font-medium my-1 block">$15.00</span>
              <span className="text-[11px] text-stone-400">Consistent streak bonus pool</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-purple-400/30 text-center">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Editorial Review Bonus</span>
              <span className="text-2xl font-display text-purple-300 font-medium my-1 block">$25.00</span>
              <span className="text-[11px] text-stone-400">For published community analyses</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* 6. HOW IT WORKS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> HOW IT WORKS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">1. Select Briefing</span>
              <p>Pick from our daily intelligence topics covering AI technology, creator economy, and tech trends.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">2. Complete Reading</span>
              <p>Read through the 3-5 minute analysis. Our unobtrusive proof-of-read protocol tracks genuine completion.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-mono text-amber-400 font-bold">3. Receive Direct Credit</span>
              <p>Earn up to $10.00 credited automatically to your creator balance for each briefing read.</p>
            </div>
          </div>
        </div>

        {/* Interactive Reader Simulator */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-amber-500/20 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono uppercase text-amber-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Interactive Proof of Read Protocol
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Reward: {articles[activeArticleIndex].payout}
            </span>
          </div>

          {/* Article Selector Carousel Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {articles.map((art, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveArticleIndex(idx);
                  setReadingTimer(0);
                  setRewardEarned(false);
                  setIsReadingActive(false);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                  activeArticleIndex === idx
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10'
                }`}
              >
                Briefing #{idx + 1}
              </button>
            ))}
          </div>

          {/* Article Preview Card */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-amber-300 font-mono">{articles[activeArticleIndex].tag}</span>
              <span className="text-stone-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {articles[activeArticleIndex].readTime}
              </span>
            </div>
            <h4 className="text-sm font-display text-white font-medium">
              {articles[activeArticleIndex].title}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
              {articles[activeArticleIndex].summary}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            {!isReadingActive && !rewardEarned && (
              <button
                onClick={handleStartReading}
                className="btn-gold text-xs px-4 py-2 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate Verified Read & Claim {articles[activeArticleIndex].payout}</span>
              </button>
            )}
          </div>

          {isReadingActive && (
            <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-center space-y-1.5">
              <div className="flex items-center justify-center gap-2 text-xs text-purple-200">
                <Clock className="w-3.5 h-3.5 animate-spin text-amber-400" />
                <span>Verifying attention metrics... ({readingTimer}/5s)</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{ width: `${(readingTimer / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {rewardEarned && (
            <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <Check className="w-4 h-4 shrink-0" />
              <span>Proof of Read confirmed! +{articles[activeArticleIndex].payout} simulated to your balance.</span>
            </div>
          )}
        </div>

        {/* 7. CTA BUTTON */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenJoin}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-amber-500/20 inline-flex items-center gap-2"
          >
            <span>{VELORA_CONTENT.news.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsRewardsSection;
