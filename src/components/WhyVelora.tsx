import React, { useEffect, useRef, useState } from 'react';
import { Layers, Bot, Flame, Award, ArrowRight } from 'lucide-react';

interface WhyVeloraProps {
  onJoin: () => void;
}

export const WhyVelora: React.FC<WhyVeloraProps> = ({ onJoin }) => {
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

  const differentiators = [
    {
      num: '01',
      title: 'Unified Multi-Experience Ecosystem',
      desc: 'No fragmented tools. AI education, digital creation, live sports battles, news publications, and community collaboration live under a single authenticated ID.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Practical AI Education & Tooling',
      desc: 'Real prompt engineering curricula, workflow creation, and practical digital production skills from foundational learning to professional deployment.',
      icon: Bot,
    },
    {
      num: '03',
      title: 'Content & Entertainment Synergy',
      desc: 'Direct creator integration, YouTube audience optimization suites, and interactive football matchday derbies that turn passive viewing into active fandom.',
      icon: Flame,
    },
    {
      num: '04',
      title: 'Criteria-Based Activity Rewards',
      desc: 'Transparent milestones and participation recognition directly tied to completed courses, verified reading, creator challenges, and community contributions.',
      icon: Award,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08] transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="space-y-3 max-w-2xl text-left">
            <span className="eyebrow-gold">
              DISTINCT ADVANTAGES
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#f6f2fb] tracking-tight">
              Why Velora
            </h2>

            <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed font-normal">
              Designed from the ground up to eliminate platform fragmentation and deliver a cohesive digital universe.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            const delay = (idx + 1) * 100;

            return (
              <div
                key={item.num}
                className={`velora-glass rounded-3xl p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-700 hover:border-white/[0.2] ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#c9a24a]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-xl font-light text-[#786a92]">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-medium text-[#f6f2fb]">
                    {item.title}
                  </h3>

                  <p className="text-[#b6a8cc] text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8e80a8]">
                  <span>Core Standard</span>
                  <span className="text-[#c9a24a]">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className={`velora-glass rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-display text-xl sm:text-2xl font-medium text-[#f6f2fb]">
              Ready to explore the ecosystem?
            </h4>
            <p className="text-xs sm:text-sm text-[#b6a8cc]">
              Join the growing network of AI creators, video producers, and sports communities.
            </p>
          </div>

          <button
            onClick={onJoin}
            className="btn-gold shrink-0"
          >
            <span>JOIN VELORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
