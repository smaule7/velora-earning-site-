import React, { useEffect, useRef, useState } from 'react';
import { Bot, Play, Newspaper, Users, Trophy, Award, ArrowRight } from 'lucide-react';
import { CategoryItem } from '../types';

interface TrustStripProps {
  onCategorySelect?: (categoryId: string) => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ onCategorySelect }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: CategoryItem[] = [
    {
      id: 'ai',
      name: 'AI Academy',
      tagline: 'Education & Creation',
      description: 'Prompt engineering, workflow creation and digital skill monetization.',
      icon: 'bot',
      color: '#c9a24a',
      stats: 'Curated Tracks',
    },
    {
      id: 'creator',
      name: 'YouTube Growth',
      tagline: 'Creation & Audiences',
      description: 'Audience growth pipelines, thumbnail strategies, and creator suites.',
      icon: 'play',
      color: '#9b7bd1',
      stats: 'Creator Toolkits',
    },
    {
      id: 'news',
      name: 'Velora News',
      tagline: 'Reading & Analysis',
      description: 'Curated digital journalism and verified reader engagement tracking.',
      icon: 'newspaper',
      color: '#cbb8e8',
      stats: 'Daily Briefings',
    },
    {
      id: 'entertainment',
      name: 'Fan Battle Zone',
      tagline: 'Derbies & Showdowns',
      description: 'Club showdowns, match derbies and interactive sporting challenges.',
      icon: 'trophy',
      color: '#c9a24a',
      stats: 'Weekly Derbies',
    },
    {
      id: 'engagement',
      name: 'Content Hub',
      tagline: 'Participate & Unlock',
      description: 'Watch, react, and unlock milestone rewards through active participation.',
      icon: 'award',
      color: '#9b7bd1',
      stats: 'Live Streams',
    },
    {
      id: 'community',
      name: 'Community',
      tagline: 'Guilds & Referrals',
      description: 'Guilds, pioneer discussions, member events and ecosystem referrals.',
      icon: 'users',
      color: '#cbb8e8',
      stats: 'Global Guilds',
    },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'bot': return <Bot className="w-5 h-5" />;
      case 'play': return <Play className="w-5 h-5" />;
      case 'newspaper': return <Newspaper className="w-5 h-5" />;
      case 'users': return <Users className="w-5 h-5" />;
      case 'trophy': return <Trophy className="w-5 h-5" />;
      case 'award': return <Award className="w-5 h-5" />;
      default: return <Bot className="w-5 h-5" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div
          className={`text-center space-y-3 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="eyebrow-gold">
            UNIFIED ARCHITECTURE
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#f6f2fb] tracking-tight">
            One Platform. Multiple Experiences.
          </h2>

          <p className="text-[#b6a8cc] text-sm sm:text-base max-w-xl mx-auto font-normal">
            Explore the interconnected pillars powering creator growth, AI learning, and community engagement.
          </p>
        </div>

        {/* 6 Category Physical Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((cat, idx) => {
            const isHovered = hoveredCategory === cat.id;
            const delay = (idx + 1) * 80;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => onCategorySelect?.(cat.id)}
                className={`velora-glass rounded-2xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[190px] ${
                  isHovered
                    ? 'border-white/[0.22] -translate-y-1'
                    : 'border-white/[0.08] hover:border-white/[0.15]'
                } ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#cbb8e8]">
                    {getIcon(cat.icon)}
                  </div>

                  <span className="text-xs font-mono text-[#786a92]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Body */}
                <div className="space-y-1.5 my-3">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-[#f6f2fb]">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#b6a8cc] leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8e80a8]">
                  <span className="font-medium">{cat.stats}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1 text-[#c9a24a]' : 'text-[#8e80a8]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
