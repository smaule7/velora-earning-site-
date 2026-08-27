import React, { useEffect, useRef, useState } from 'react';
import { Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';
import { INITIAL_TESTIMONIALS } from '../data/veloraData';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
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

  const testimonials: Testimonial[] = INITIAL_TESTIMONIALS;

  const categories = ['all', 'AI Upload', 'Fan Battle', 'YouTube Suite', 'News Rewards', 'Referrals'];

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === filter);

  return (
    <section
      id="testimonials"
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
              COMMUNITY PERSPECTIVES
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#f6f2fb] tracking-tight">
              What creators are saying
            </h2>

            <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed font-normal">
              Authentic feedback and experiences from verified Nigerian and international creators, publishers, and community members.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all focus:outline-none ${
                  filter === cat
                    ? 'bg-white/[0.12] border border-[#c9a24a]/80 text-[#f6f2fb]'
                    : 'bg-white/[0.03] border border-white/[0.08] text-[#8e80a8] hover:text-[#f6f2fb]'
                }`}
              >
                {cat === 'all' ? 'All Reviews' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item, idx) => {
            const delay = (idx + 1) * 80;

            return (
              <div
                key={item.id}
                className={`velora-glass rounded-3xl p-7 flex flex-col justify-between space-y-6 text-left hover:border-white/[0.2] transition-all duration-700 ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow-gold text-[10px]">
                      {item.category}
                    </span>

                    <div className="flex items-center gap-1 text-[#c9a24a]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#c9a24a]" />
                      ))}
                    </div>
                  </div>

                  {item.highlight && (
                    <p className="font-display text-base font-semibold text-[#f6f2fb]">
                      "{item.highlight}"
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#b6a8cc] leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center font-display text-xs font-semibold text-[#f6f2fb]">
                    {item.avatarText}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#f6f2fb] truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-[#786a92] truncate">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-amber-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
