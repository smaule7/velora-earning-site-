import React, { useState, useEffect, useRef } from 'react';
import { 
  Youtube, 
  Upload, 
  Newspaper, 
  Users, 
  Trophy, 
  HelpCircle, 
  Flame, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Calculator,
  Layers
} from 'lucide-react';
import { RewardCategoryItem } from '../types';

interface WaysToEarnProps {
  rewards: RewardCategoryItem[];
  onOpenJoin: () => void;
  onNavigateSection: (id: string) => void;
}

export const WaysToEarn: React.FC<WaysToEarnProps> = ({
  rewards,
  onOpenJoin,
  onNavigateSection,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Earning Simulator State in USD
  const [aiUploadsCount, setAiUploadsCount] = useState(3);
  const [newsBriefingsCount, setNewsBriefingsCount] = useState(5);
  const [youtubeCampaignsCount, setYoutubeCampaignsCount] = useState(1);
  const [referralsCount, setReferralsCount] = useState(4);

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

  // Calculate simulated monthly potential in USD
  const aiRate = rewards.find(r => r.id === 'reward-ai-upload')?.amount || 45;
  const newsRate = rewards.find(r => r.id === 'reward-news')?.amount || 5;
  const ytRate = rewards.find(r => r.id === 'reward-youtube')?.amount || 50;
  const inviteRate = rewards.find(r => r.id === 'reward-invite')?.amount || 10;
  const indirectRate = rewards.find(r => r.id === 'reward-indirect-1')?.amount || 2;

  const monthlyEstimated = Math.round(
    (Number(aiRate) * aiUploadsCount * 4) +
    (Number(newsRate) * newsBriefingsCount * 4) +
    (Number(ytRate) * youtubeCampaignsCount * 4) +
    (Number(inviteRate) * referralsCount) +
    (Number(indirectRate) * referralsCount * 2)
  );

  const earnStreams = [
    {
      id: 'ai-upload',
      title: 'AI Upload Rewards',
      badge: 'Up to $45.00 / Asset',
      description: 'Upload verified generative AI prompts, diffusion styles, and workflows into the global creator repository.',
      icon: Upload,
      color: 'from-purple-500/20 to-purple-800/10',
      border: 'border-purple-500/20',
      actionText: 'Explore AI Upload',
    },
    {
      id: 'youtube-earnings',
      title: 'YouTube Opportunities',
      badge: '$50.00 – $250.00 / Bounty',
      description: 'Run thumbnail A/B testing, CTR optimizations, and audience retention analysis with direct milestone rewards.',
      icon: Youtube,
      color: 'from-rose-500/20 to-rose-800/10',
      border: 'border-rose-500/20',
      actionText: 'Explore YouTube Earn',
    },
    {
      id: 'news-rewards',
      title: 'Velora News Rewards',
      badge: '$3.00 – $10.00 / Briefing',
      description: 'Read curated digital journalism on AI advances and tech insights. Earn verified activity rewards per completed read.',
      icon: Newspaper,
      color: 'from-amber-500/20 to-amber-800/10',
      border: 'border-amber-500/20',
      actionText: 'Explore News Earn',
    },
    {
      id: 'fan-battle',
      title: 'Fan Battle Zone',
      badge: '$500.00 Weekly Pools',
      description: 'Represent your football club in matchday derbies, voting showdowns, and live fan challenges for cash prize distributions.',
      icon: Trophy,
      color: 'from-amber-500/20 to-amber-800/10',
      border: 'border-amber-500/20',
      actionText: 'Enter Arena',
    },
    {
      id: 'clout-cash',
      title: 'Community & Referrals',
      badge: '$10.00 – $15.00 Direct',
      description: 'Monetize your social channels, audience reach, and creator influence through high-converting referral campaigns.',
      icon: Flame,
      color: 'from-amber-500/20 to-amber-800/10',
      border: 'border-amber-500/20',
      actionText: 'Monetize Reach',
    },
    {
      id: 'plans-pricing',
      title: '2-Tier Referral Overrides',
      badge: '$2.00 & $1.00 Indirect',
      description: 'Build a creator guild and earn instant invite bonuses plus multi-tier indirect passive commissions on network milestones.',
      icon: Users,
      color: 'from-emerald-500/20 to-emerald-800/10',
      border: 'border-emerald-500/20',
      actionText: 'Membership Plans',
    },
  ];

  return (
    <section 
      id="ways-to-earn" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Earning Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          MORE WAYS TO EARN WITH VELORA
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          From generative AI uploads to YouTube monetization, news analysis, matchday arena derbies, and multi-tier community rewards.
        </p>
      </div>

      {/* Primary Feature Stream Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {earnStreams.map((stream, idx) => {
          const Icon = stream.icon;
          return (
            <div
              key={stream.id}
              className={`p-6 rounded-2xl velora-glass border ${stream.border} relative flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300 reveal-item from-bottom ${
                isRevealed ? 'is-revealed' : ''
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {stream.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display text-white font-medium mb-2 group-hover:text-amber-200 transition-colors">
                  {stream.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {stream.description}
                </p>
              </div>

              <button
                onClick={() => onNavigateSection(stream.id)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200 uppercase tracking-wider pt-4 border-t border-white/10"
              >
                <span>{stream.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Earning Potential Calculator Widget */}
      <div 
        className={`p-6 sm:p-8 rounded-2xl velora-glass border border-amber-500/30 bg-gradient-to-br from-purple-950/30 via-black/40 to-amber-950/20 reveal-item scale-settle ${
          isRevealed ? 'is-revealed' : ''
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300">
              <Calculator className="w-4 h-4" />
              <span>Interactive Earning Estimator</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display text-white font-medium">
              Calculate Your Monthly Earning Potential
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Adjust your estimated weekly creative submissions and participation across Velora streams.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1">
                  <span>AI Prompt & Asset Uploads / week</span>
                  <span className="font-mono text-amber-300 font-bold">{aiUploadsCount} assets</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={aiUploadsCount}
                  onChange={e => setAiUploadsCount(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1">
                  <span>Velora News Briefings Read / week</span>
                  <span className="font-mono text-amber-300 font-bold">{newsBriefingsCount} briefings</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={newsBriefingsCount}
                  onChange={e => setNewsBriefingsCount(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1">
                  <span>YouTube Campaigns / Optimization tests</span>
                  <span className="font-mono text-amber-300 font-bold">{youtubeCampaignsCount} campaigns</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={youtubeCampaignsCount}
                  onChange={e => setYoutubeCampaignsCount(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1">
                  <span>Direct Creator Invites (Instant + Indirect Bonus)</span>
                  <span className="font-mono text-amber-300 font-bold">{referralsCount} creators</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={referralsCount}
                  onChange={e => setReferralsCount(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Outcome Metric Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-black/60 border border-amber-400/30 text-center flex flex-col items-center justify-center space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-stone-400">
              Estimated Monthly Payout
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-amber-300">
                ${monthlyEstimated.toLocaleString()}
              </span>
              <span className="text-sm font-mono text-stone-400">USD/mo</span>
            </div>
            <p className="text-xs text-stone-400 max-w-xs">
              Based on active verified participation. Balance settles continuously to your Creator Dashboard and is withdrawable directly to your account.
            </p>

            <button
              onClick={onOpenJoin}
              className="btn-gold text-xs sm:text-sm px-6 py-3 w-full mt-2"
            >
              <span>CLAIM YOUR CREATOR ACCESS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToEarn;
