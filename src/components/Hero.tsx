import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Award } from 'lucide-react';
import { PlatformStats } from '../types';
import { VeloraFlyer } from './VeloraFlyer';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
  stats: PlatformStats;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick, stats }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-3xl" />
        <div className="w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl translate-y-24" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Editorial Eyebrow */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-amber-300 text-xs font-mono tracking-widest uppercase reveal-item from-bottom ${
            isRevealed ? 'is-revealed' : ''
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>WELCOME TO VELORA</span>
        </div>

        {/* Primary Headline */}
        <h1 
          className={`text-4xl sm:text-6xl lg:text-7xl font-display text-white font-normal tracking-tight leading-[1.08] reveal-item from-bottom ${
            isRevealed ? 'is-revealed' : ''
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          VELORA: A DIGITAL UNIVERSE OF POSSIBILITIES
        </h1>

        {/* Narrative Description */}
        <p 
          className={`text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed reveal-item from-bottom ${
            isRevealed ? 'is-revealed' : ''
          }`}
          style={{ transitionDelay: '220ms' }}
        >
          A creator-powered platform where people can learn, engage, compete, discover opportunities, and earn through meaningful participation.
        </p>

        {/* Action Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 reveal-item from-bottom ${
            isRevealed ? 'is-revealed' : ''
          }`}
          style={{ transitionDelay: '320ms' }}
        >
          <button
            onClick={onJoinClick}
            className="btn-gold text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto shadow-lg shadow-amber-400/10"
          >
            <span>GET REGISTERED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onExploreClick}
            className="btn-ghost text-sm sm:text-base px-8 py-3.5 w-full sm:w-auto"
          >
            <span>EXPLORE FEATURES</span>
          </button>
        </div>

        {/* Hero Section Official Artwork Showcase */}
        <div 
          className={`pt-10 max-w-3xl mx-auto w-full reveal-item scale-settle ${
            isRevealed ? 'is-revealed' : ''
          }`}
          style={{ transitionDelay: '380ms' }}
        >
          <VeloraFlyer
            imageKey="platinum"
            alt="VELORA Official Ecosystem Master Artwork"
            aspectClass="aspect-[16/9] sm:aspect-[21/9]"
            caption="VELORA Ecosystem & Multi-Stream Rewards Overview"
            priority={true}
            fitMode="cover"
            objectPosition="object-center"
          />
        </div>
      </div>

      {/* Live Verified Metric Ticker Strip */}
      <div 
        className={`w-full max-w-5xl mx-auto mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 reveal-item from-bottom ${
          isRevealed ? 'is-revealed' : ''
        }`}
        style={{ transitionDelay: '460ms' }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono mb-1">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>ACTIVE CREATORS</span>
          </div>
          <span className="text-2xl sm:text-3xl font-display text-white font-medium">{stats.creatorsCount}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>REWARDS PAID</span>
          </div>
          <span className="text-2xl sm:text-3xl font-display text-amber-300 font-medium">{stats.totalRewardsPaid}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono mb-1">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>ENGAGEMENTS</span>
          </div>
          <span className="text-2xl sm:text-3xl font-display text-white font-medium">{stats.engagementsCount}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>OPPORTUNITIES</span>
          </div>
          <span className="text-2xl sm:text-3xl font-display text-white font-medium">{stats.activeOpportunities}</span>
        </div>
      </div>
    </section>
  );
};
