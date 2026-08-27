import React, { useState, useEffect, useRef } from 'react';
import { PromotionalFlyer } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Plus, 
  Tag, 
  ArrowUpRight, 
  ShieldCheck, 
  Calendar,
  X,
  Share2,
  Check
} from 'lucide-react';

interface FlyerShowcaseProps {
  flyers: PromotionalFlyer[];
  onOpenAdmin: () => void;
  onSelectFlyerCta?: (link?: string) => void;
}

export const FlyerShowcase: React.FC<FlyerShowcaseProps> = ({
  flyers,
  onOpenAdmin,
  onSelectFlyerCta,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFlyerIndex, setActiveFlyerIndex] = useState(0);
  const [modalFlyer, setModalFlyer] = useState<PromotionalFlyer | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

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

  const filteredFlyers = selectedCategory === 'all'
    ? flyers
    : flyers.filter(f => f.category === selectedCategory);

  const currentFlyer = filteredFlyers[activeFlyerIndex] || filteredFlyers[0] || flyers[0];

  const handleNext = () => {
    setActiveFlyerIndex((prev) => (prev + 1) % filteredFlyers.length);
  };

  const handlePrev = () => {
    setActiveFlyerIndex((prev) => (prev - 1 + filteredFlyers.length) % filteredFlyers.length);
  };

  const handleCopyShare = (title: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const categories = [
    { id: 'all', label: 'All Showcases' },
    { id: 'platinum', label: 'Platinum Tier' },
    { id: 'youtube', label: 'YouTube Earn' },
    { id: 'fanbattle', label: 'Fan Battle' },
    { id: 'news', label: 'News Rewards' },
    { id: 'ai', label: 'AI Upload' },
    { id: 'clout', label: 'Clout To Cash' },
    { id: 'engagement', label: 'Engagement' },
  ];

  return (
    <section 
      id="promotional-flyers" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className={`text-center max-w-3xl mx-auto mb-12 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <Tag className="w-3.5 h-3.5" />
          <span>Promotional Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          Featured Campaigns & Artwork
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          Explore official promotional flyers, high-yield earning tiers, seasonal arena derbies, and creator accelerator campaigns.
        </p>
      </div>

      {/* Category Pills & Admin Upload Quick Trigger */}
      <div className={`flex flex-wrap items-center justify-between gap-3 mb-8 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '150ms' }}>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveFlyerIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <button
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-amber-300 font-medium transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Upload / Manage Flyers</span>
        </button>
      </div>

      {/* Main Spotlight Showcase Layout */}
      {currentFlyer && (
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-item scale-settle ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '250ms' }}>
          {/* Left Column: Interactive Visual Canvas */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden velora-glass border border-white/15 shadow-2xl p-2 sm:p-3">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black/80 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={currentFlyer.imageUrl}
                  alt={currentFlyer.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      // Extract drive ID if present
                      const match = target.src.match(/id=([a-zA-Z0-9_-]+)/);
                      if (match && match[1]) {
                        target.src = `https://lh3.googleusercontent.com/d/${match[1]}`;
                      }
                    }
                  }}
                />

                {/* Ambient Gradient Overlay (Restrained dark vignette) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      {currentFlyer.callout || 'Featured'}
                    </span>
                    {currentFlyer.rewardBadge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-purple-950/80 backdrop-blur-md text-purple-200 border border-purple-400/30">
                        {currentFlyer.rewardBadge}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setModalFlyer(currentFlyer)}
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors"
                    title="View High-Res Graphic"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-stone-300 px-2 py-1 bg-black/60 rounded-full border border-white/10">
                    {activeFlyerIndex + 1} / {filteredFlyers.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-105"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Information & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-300/90 font-mono uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentFlyer.date}</span>
                <span>•</span>
                <span>{currentFlyer.category.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display text-white leading-tight font-medium">
                {currentFlyer.title}
              </h3>

              <p className="text-amber-200/90 text-sm font-medium mt-2">
                {currentFlyer.subtitle}
              </p>

              <p className="text-stone-300 text-sm leading-relaxed mt-4">
                {currentFlyer.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {currentFlyer.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-stone-300"
                  >
                    <Tag className="w-3 h-3 text-amber-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={currentFlyer.ctaLink || '#'}
                onClick={() => onSelectFlyerCta?.(currentFlyer.ctaLink)}
                className="btn-gold text-sm px-6 py-3 flex-1 sm:flex-initial"
              >
                <span>{currentFlyer.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleCopyShare(currentFlyer.title)}
                className="btn-ghost text-xs px-4 py-3"
                title="Copy link to share"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Link Copied' : 'Share Campaign'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thumbnails Row */}
      <div className={`mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '350ms' }}>
        {filteredFlyers.map((flyer, index) => (
          <button
            key={flyer.id}
            onClick={() => setActiveFlyerIndex(index)}
            className={`relative rounded-xl overflow-hidden border text-left p-1.5 transition-all ${
              activeFlyerIndex === index
                ? 'border-amber-400 bg-white/10 shadow-lg shadow-amber-400/10'
                : 'border-white/10 bg-white/5 hover:border-white/20'
            }`}
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/60 mb-2">
              <img
                src={flyer.imageUrl}
                alt={flyer.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    const match = target.src.match(/id=([a-zA-Z0-9_-]+)/);
                    if (match && match[1]) {
                      target.src = `https://lh3.googleusercontent.com/d/${match[1]}`;
                    }
                  }
                }}
              />
            </div>
            <div className="px-1">
              <p className="text-[11px] font-medium text-white truncate">{flyer.title}</p>
              <p className="text-[10px] text-stone-400 truncate">{flyer.rewardBadge || flyer.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Full-Screen Flyer High-Res Modal */}
      {modalFlyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
          <div className="relative max-w-4xl w-full velora-glass border border-white/20 rounded-2xl overflow-hidden p-4 sm:p-6 text-left">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div>
                <h4 className="text-lg font-display text-white">{modalFlyer.title}</h4>
                <p className="text-xs text-stone-400">{modalFlyer.subtitle}</p>
              </div>
              <button
                onClick={() => setModalFlyer(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-stone-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative max-h-[70vh] overflow-auto rounded-xl bg-black/80 flex items-center justify-center p-2">
              <img
                src={modalFlyer.imageUrl}
                alt={modalFlyer.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    const match = target.src.match(/id=([a-zA-Z0-9_-]+)/);
                    if (match && match[1]) {
                      target.src = `https://lh3.googleusercontent.com/d/${match[1]}`;
                    }
                  }
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between pt-2">
              <span className="text-xs text-amber-300 font-mono">{modalFlyer.rewardBadge}</span>
              <a
                href={modalFlyer.ctaLink || '#'}
                onClick={() => {
                  setModalFlyer(null);
                  onSelectFlyerCta?.(modalFlyer.ctaLink);
                }}
                className="btn-gold text-xs px-5 py-2"
              >
                {modalFlyer.ctaText}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
