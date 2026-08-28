import React, { useState } from 'react';
import { PromotionalFlyer, RewardCategoryItem, TopEarner, PlatformStats } from '../types';
import { 
  X, 
  Upload, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  RotateCcw, 
  Sliders, 
  DollarSign, 
  Trophy, 
  Image as ImageIcon,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { INITIAL_FLYERS, INITIAL_REWARD_RATES, INITIAL_TOP_EARNERS, INITIAL_STATS } from '../data/veloraData';

interface AdminFlyerManagerProps {
  isOpen: boolean;
  onClose: () => void;
  flyers: PromotionalFlyer[];
  onUpdateFlyers: (flyers: PromotionalFlyer[]) => void;
  rewards: RewardCategoryItem[];
  onUpdateRewards: (rewards: RewardCategoryItem[]) => void;
  topEarners: TopEarner[];
  onUpdateTopEarners: (earners: TopEarner[]) => void;
  stats: PlatformStats;
  onUpdateStats: (stats: PlatformStats) => void;
}

export const AdminFlyerManager: React.FC<AdminFlyerManagerProps> = ({
  isOpen,
  onClose,
  flyers,
  onUpdateFlyers,
  rewards,
  onUpdateRewards,
  topEarners,
  onUpdateTopEarners,
  stats,
  onUpdateStats,
}) => {
  const [activeTab, setActiveTab] = useState<'flyers' | 'rewards' | 'earners' | 'stats'>('flyers');
  
  // Flyer Form State
  const [editingFlyerId, setEditingFlyerId] = useState<string | null>(null);
  const [flyerTitle, setFlyerTitle] = useState('');
  const [flyerSubtitle, setFlyerSubtitle] = useState('');
  const [flyerDescription, setFlyerDescription] = useState('');
  const [flyerCategory, setFlyerCategory] = useState<PromotionalFlyer['category']>('packages');
  const [flyerImageUrl, setFlyerImageUrl] = useState('');
  const [flyerCtaText, setFlyerCtaText] = useState('JOIN NOW');
  const [flyerCtaLink, setFlyerCtaLink] = useState('#plans-pricing');
  const [flyerRewardBadge, setFlyerRewardBadge] = useState('EARN ₦10,000 - ₦50,000');
  const [flyerTags, setFlyerTags] = useState('Silver AI (₦9,500), Golden AI (₦14,500), AI Packages');
  const [flyerAspect, setFlyerAspect] = useState<PromotionalFlyer['aspect']>('portrait');
  const [flyerCallout, setFlyerCallout] = useState('Exclusive Spotlight');
  const [flyerFeatured, setFlyerFeatured] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleEditFlyer = (flyer: PromotionalFlyer) => {
    setEditingFlyerId(flyer.id);
    setFlyerTitle(flyer.title);
    setFlyerSubtitle(flyer.subtitle);
    setFlyerDescription(flyer.description);
    setFlyerCategory(flyer.category);
    setFlyerImageUrl(flyer.imageUrl);
    setFlyerCtaText(flyer.ctaText);
    setFlyerCtaLink(flyer.ctaLink || '#');
    setFlyerRewardBadge(flyer.rewardBadge || '');
    setFlyerTags(flyer.tags.join(', '));
    setFlyerAspect(flyer.aspect);
    setFlyerCallout(flyer.callout || '');
    setFlyerFeatured(flyer.featured);
  };

  const handleResetFlyerForm = () => {
    setEditingFlyerId(null);
    setFlyerTitle('');
    setFlyerSubtitle('');
    setFlyerDescription('');
    setFlyerCategory('platinum');
    setFlyerImageUrl('');
    setFlyerCtaText('JOIN NOW');
    setFlyerCtaLink('#');
    setFlyerRewardBadge('EARN $10.00 - $25.00');
    setFlyerTags('');
    setFlyerAspect('portrait');
    setFlyerCallout('Spotlight');
    setFlyerFeatured(false);
  };

  const handleSaveFlyer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flyerTitle.trim()) return;

    const tagsArray = flyerTags.split(',').map(t => t.trim()).filter(Boolean);
    const fallbackImage = flyerImageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';

    if (editingFlyerId) {
      const updated = flyers.map(f => {
        if (f.id === editingFlyerId) {
          return {
            ...f,
            title: flyerTitle,
            subtitle: flyerSubtitle,
            description: flyerDescription,
            category: flyerCategory,
            imageUrl: fallbackImage,
            ctaText: flyerCtaText,
            ctaLink: flyerCtaLink,
            rewardBadge: flyerRewardBadge,
            tags: tagsArray.length > 0 ? tagsArray : ['Velora Opportunity'],
            aspect: flyerAspect,
            callout: flyerCallout,
            featured: flyerFeatured,
          };
        }
        return f;
      });
      onUpdateFlyers(updated);
      setSaveSuccessMsg('Flyer updated successfully.');
    } else {
      const newFlyer: PromotionalFlyer = {
        id: `flyer-${Date.now()}`,
        title: flyerTitle,
        subtitle: flyerSubtitle || 'Exclusive Creator Opportunity',
        description: flyerDescription || 'Participate and earn verified rewards on Velora.',
        category: flyerCategory,
        imageUrl: fallbackImage,
        ctaText: flyerCtaText || 'JOIN OPPORTUNITY',
        ctaLink: flyerCtaLink || '#',
        featured: flyerFeatured,
        published: true,
        displayOrder: flyers.length + 1,
        tags: tagsArray.length > 0 ? tagsArray : ['Creator Earning', 'Velora'],
        rewardBadge: flyerRewardBadge,
        aspect: flyerAspect,
        date: 'Active Campaign',
        callout: flyerCallout || 'New Showcase',
        colorTheme: '#c9a24a',
      };
      onUpdateFlyers([newFlyer, ...flyers]);
      setSaveSuccessMsg('New promotional flyer uploaded and activated.');
    }

    setTimeout(() => setSaveSuccessMsg(''), 3000);
    handleResetFlyerForm();
  };

  const handleDeleteFlyer = (id: string) => {
    if (confirm('Are you sure you want to remove this flyer from the showcase?')) {
      onUpdateFlyers(flyers.filter(f => f.id !== id));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFlyerImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRewardAmountChange = (id: string, newAmount: number) => {
    const updated = rewards.map(r => r.id === id ? { ...r, amount: newAmount } : r);
    onUpdateRewards(updated);
  };

  const handleRestoreDefaults = () => {
    if (confirm('Reset all flyers, rewards, and platform settings to default?')) {
      onUpdateFlyers(INITIAL_FLYERS);
      onUpdateRewards(INITIAL_REWARD_RATES);
      onUpdateTopEarners(INITIAL_TOP_EARNERS);
      onUpdateStats(INITIAL_STATS);
      setSaveSuccessMsg('All data reset to factory defaults.');
      setTimeout(() => setSaveSuccessMsg(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl velora-glass border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display text-white font-medium">Velora Content & Admin Control</h2>
              <p className="text-xs text-stone-400">Manage promotional flyers, reward earnings ($), leaderboard, and live metrics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 border-b border-white/10 pb-3 mb-6 overflow-x-auto text-sm">
          <button
            onClick={() => setActiveTab('flyers')}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'flyers'
                ? 'bg-[#c9a24a] text-black font-semibold shadow-md'
                : 'text-stone-300 hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Promotional Flyers ({flyers.length})
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'rewards'
                ? 'bg-[#c9a24a] text-black font-semibold shadow-md'
                : 'text-stone-300 hover:bg-white/5'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Reward Rates ($)
          </button>
          <button
            onClick={() => setActiveTab('earners')}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'earners'
                ? 'bg-[#c9a24a] text-black font-semibold shadow-md'
                : 'text-stone-300 hover:bg-white/5'
            }`}
          >
            <Trophy className="w-4 h-4" />
            Top Earners Leaderboard
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'stats'
                ? 'bg-[#c9a24a] text-black font-semibold shadow-md'
                : 'text-stone-300 hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            Platform Stats
          </button>
        </div>

        {/* Success Alert */}
        {saveSuccessMsg && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto pr-2 flex-1 space-y-6">
          {/* TAB 1: FLYERS */}
          {activeTab === 'flyers' && (
            <div className="space-y-6">
              {/* Add / Edit Flyer Form */}
              <form onSubmit={handleSaveFlyer} className="p-5 rounded-xl bg-purple-950/20 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                    {editingFlyerId ? <Edit3 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    {editingFlyerId ? 'Edit Promotional Flyer' : 'Upload / Add New Promotional Flyer'}
                  </h3>
                  {editingFlyerId && (
                    <button
                      type="button"
                      onClick={handleResetFlyerForm}
                      className="text-xs text-stone-400 hover:text-white underline"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Flyer Title *</label>
                    <input
                      type="text"
                      value={flyerTitle}
                      onChange={e => setFlyerTitle(e.target.value)}
                      placeholder="e.g. VELORA PLATINUM MEMBERSHIP"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Category</label>
                    <select
                      value={flyerCategory}
                      onChange={e => setFlyerCategory(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    >
                      <option value="packages">Velora AI Packages</option>
                      <option value="youtube">YouTube Creator Earnings</option>
                      <option value="fanbattle">Fan Battle Zone</option>
                      <option value="news">Velora News Rewards</option>
                      <option value="clout">Turn Clout Into Cash</option>
                      <option value="ai">AI Upload & Prompts</option>
                      <option value="engagement">Content Engagement</option>
                      <option value="referrals">Community & Referrals</option>
                      <option value="quiz">Football Quizzes</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Subtitle / Slogan</label>
                    <input
                      type="text"
                      value={flyerSubtitle}
                      onChange={e => setFlyerSubtitle(e.target.value)}
                      placeholder="e.g. Exclusive Tier Access & Multi-Stream Earnings"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Reward Badge Text</label>
                    <input
                      type="text"
                      value={flyerRewardBadge}
                      onChange={e => setFlyerRewardBadge(e.target.value)}
                      placeholder="e.g. EARN $10.00 - $25.00 or $500.00 POT"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1">Description</label>
                  <textarea
                    value={flyerDescription}
                    onChange={e => setFlyerDescription(e.target.value)}
                    rows={2}
                    placeholder="Short description of the earning opportunity, requirements, or campaign highlights..."
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Image Upload or URL */}
                <div className="space-y-2">
                  <label className="block text-xs text-stone-300">Flyer Image Artwork (Upload File or Enter Image URL)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={flyerImageUrl}
                      onChange={e => setFlyerImageUrl(e.target.value)}
                      placeholder="https://example.com/flyer-art.jpg"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                    <label className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-stone-300 cursor-pointer transition-colors">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>Upload Artwork File</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                  {flyerImageUrl && (
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-black/40 border border-white/10">
                      <img src={flyerImageUrl} alt="Preview" className="w-16 h-12 object-cover rounded" />
                      <span className="text-xs text-stone-400 truncate flex-1">{flyerImageUrl}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Button CTA Text</label>
                    <input
                      type="text"
                      value={flyerCtaText}
                      onChange={e => setFlyerCtaText(e.target.value)}
                      placeholder="e.g. START NOW"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Aspect Ratio</label>
                    <select
                      value={flyerAspect}
                      onChange={e => setFlyerAspect(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    >
                      <option value="portrait">Portrait (3:4)</option>
                      <option value="landscape">Landscape (16:9)</option>
                      <option value="square">Square (1:1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-stone-300 mb-1">Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={flyerTags}
                      onChange={e => setFlyerTags(e.target.value)}
                      placeholder="VIP, Rewards, Creator"
                      className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 text-xs text-stone-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={flyerFeatured}
                      onChange={e => setFlyerFeatured(e.target.checked)}
                      className="rounded bg-black border-white/20 text-amber-500 focus:ring-0"
                    />
                    <span>Feature prominently as primary showcase flyer</span>
                  </label>
                  <button
                    type="submit"
                    className="btn-gold text-xs px-5 py-2 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    {editingFlyerId ? 'Update Flyer' : 'Add Flyer to Site'}
                  </button>
                </div>
              </form>

              {/* Existing Flyers List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                  Active Promotional Flyers ({flyers.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {flyers.map(flyer => (
                    <div
                      key={flyer.id}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 flex gap-3 items-center group transition-colors"
                    >
                      <img
                        src={flyer.imageUrl}
                        alt={flyer.title}
                        className="w-16 h-20 object-cover rounded-lg bg-black/60 border border-white/10"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                            {flyer.category.toUpperCase()}
                          </span>
                          {flyer.rewardBadge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-200">
                              {flyer.rewardBadge}
                            </span>
                          )}
                        </div>
                        <h5 className="text-sm font-medium text-white truncate mt-1">{flyer.title}</h5>
                        <p className="text-xs text-stone-400 truncate">{flyer.subtitle}</p>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleEditFlyer(flyer)}
                            className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-medium"
                          >
                            <Edit3 className="w-3 h-3" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteFlyer(flyer.id)}
                            className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 ml-2 font-medium"
                          >
                            <Trash2 className="w-3 h-3" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REWARDS RATES */}
          {activeTab === 'rewards' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-white/10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Configurable Earning & Reward Values (USD $)
                </h3>
                <p className="text-xs text-stone-400">
                  Update reward amounts in real-time across the entire platform. Changes instantly reflect in marketing banners, calculators, and payout cards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewards.map(reward => (
                  <div
                    key={reward.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-white">{reward.name}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                          {reward.tag}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 mb-3">{reward.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-xs text-stone-400">{reward.frequency}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-stone-400">$</span>
                        <input
                          type="number"
                          step="1"
                          min="0"
                          value={reward.amount}
                          onChange={e => handleRewardAmountChange(reward.id, parseFloat(e.target.value) || 0)}
                          className="w-28 px-2.5 py-1 rounded bg-black/60 border border-white/20 text-amber-300 font-mono text-sm text-right focus:border-amber-400 focus:outline-none"
                        />
                        <span className="text-xs text-stone-400 font-mono">USD</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TOP EARNERS */}
          {activeTab === 'earners' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-white/10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-2">
                  <Trophy className="w-4 h-4" /> Top Earners Leaderboard Data ($)
                </h3>
                <p className="text-xs text-stone-400">
                  Update live creator earnings, rank tiers, and milestones shown on the public leaderboard.
                </p>
              </div>

              <div className="space-y-3">
                {topEarners.map((earner, index) => (
                  <div
                    key={earner.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                        index === 0 ? 'bg-amber-400 text-black' :
                        index === 1 ? 'bg-slate-300 text-black' :
                        index === 2 ? 'bg-amber-700 text-white' : 'bg-white/10 text-stone-300'
                      }`}>
                        #{earner.rank}
                      </span>
                      <img src={earner.avatarUrl} alt={earner.name} className="w-10 h-10 rounded-full object-cover border border-white/15" />
                      <div>
                        <h5 className="text-sm font-medium text-white">{earner.name} <span className="text-xs text-stone-400 font-mono">({earner.username})</span></h5>
                        <p className="text-xs text-stone-400">{earner.category} • {earner.growth}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <label className="block text-[10px] text-stone-400 uppercase">Earnings ($)</label>
                        <input
                          type="number"
                          step="10"
                          value={earner.earnings}
                          onChange={e => {
                            const val = parseFloat(e.target.value) || 0;
                            const updated = topEarners.map(te => te.id === earner.id ? { ...te, earnings: val } : te);
                            onUpdateTopEarners(updated);
                          }}
                          className="w-32 px-2 py-1 rounded bg-black/60 border border-white/20 text-amber-300 font-mono text-sm text-right focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PLATFORM STATS */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-white/10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Platform Metric Overrides
                </h3>
                <p className="text-xs text-stone-400">
                  Update the live counters displayed across the hero ticker and platform metrics section.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-stone-300 mb-1">Active Creators Count</label>
                  <input
                    type="text"
                    value={stats.creatorsCount}
                    onChange={e => onUpdateStats({ ...stats, creatorsCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-300 mb-1">Total Rewards Paid</label>
                  <input
                    type="text"
                    value={stats.totalRewardsPaid}
                    onChange={e => onUpdateStats({ ...stats, totalRewardsPaid: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-300 mb-1">Engagements Count</label>
                  <input
                    type="text"
                    value={stats.engagementsCount}
                    onChange={e => onUpdateStats({ ...stats, engagementsCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-300 mb-1">Active Opportunities</label>
                  <input
                    type="text"
                    value={stats.activeOpportunities}
                    onChange={e => onUpdateStats({ ...stats, activeOpportunities: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/10 pt-4 mt-6 flex items-center justify-between">
          <button
            onClick={handleRestoreDefaults}
            className="text-xs text-stone-400 hover:text-stone-200 flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Default Seed Data
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="btn-gold text-xs px-6 py-2"
            >
              Done & Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFlyerManager;
