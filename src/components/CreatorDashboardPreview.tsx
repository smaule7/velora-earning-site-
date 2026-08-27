import React, { useState, useEffect, useRef } from 'react';
import { DollarSign, TrendingUp, Users, Award, ShieldCheck, ArrowUpRight, CheckCircle2, Wallet, LayoutDashboard } from 'lucide-react';
import { CreatorDashboardData } from '../types';
import { INITIAL_DASHBOARD_PREVIEW } from '../data/veloraData';

interface CreatorDashboardPreviewProps {
  onOpenJoin: () => void;
}

export const CreatorDashboardPreview: React.FC<CreatorDashboardPreviewProps> = ({ onOpenJoin }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const data: CreatorDashboardData = INITIAL_DASHBOARD_PREVIEW;

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

  return (
    <section 
      id="dashboard-preview" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Creator Control Center</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          YOUR CREATOR DASHBOARD
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          One unified portal to monitor multi-stream revenue, verified daily briefings, AI asset royalties, and instant payouts.
        </p>
      </div>

      {/* High-Fidelity Glass Dashboard Mockup */}
      <div 
        className={`rounded-3xl velora-glass border border-white/15 p-6 sm:p-10 shadow-2xl bg-gradient-to-b from-purple-950/20 via-black/80 to-black relative overflow-hidden reveal-item scale-settle ${
          isRevealed ? 'is-revealed' : ''
        }`}
      >
        {/* Top App Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center font-bold text-amber-300 text-sm">
              VC
            </div>
            <div>
              <h4 className="text-base font-medium text-white flex items-center gap-2">
                <span>Vanguard Creator Hub</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Platinum Verified
                </span>
              </h4>
              <p className="text-xs text-stone-400 font-mono">Global Creator Rank: #{data.rank} • ID: 0x94B...72A</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              className="btn-gold text-xs px-5 py-2 flex items-center gap-1.5"
            >
              <Wallet className="w-3.5 h-3.5" />
              <span>Withdraw Balance</span>
            </button>
          </div>
        </div>

        {/* 4-Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">Total Lifetime Earnings</span>
            <span className="text-2xl sm:text-3xl font-display text-white font-medium">
              ${data.totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
            <span className="text-[11px] text-emerald-400 font-mono block mt-1">+18.4% this month</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">Today's Revenue</span>
            <span className="text-2xl sm:text-3xl font-display text-amber-300 font-medium">
              ${data.todayEarnings.toFixed(2)}
            </span>
            <span className="text-[11px] text-amber-300/80 font-mono block mt-1">4 actions verified</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">Available Balance</span>
            <span className="text-2xl sm:text-3xl font-display text-emerald-400 font-medium">
              ${data.availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
            <span className="text-[11px] text-stone-400 font-mono block mt-1">Ready for withdrawal</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">Referral Overrides</span>
            <span className="text-2xl sm:text-3xl font-display text-purple-300 font-medium">
              ${data.referralEarnings.toFixed(2)}
            </span>
            <span className="text-[11px] text-purple-300 font-mono block mt-1">68 Active network peers</span>
          </div>
        </div>

        {/* Live Activity Stream & Verification Logs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-300">
              Live Verified Activity Stream
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Feed Connected
            </span>
          </div>

          <div className="space-y-2">
            {data.recentActivities.map((act) => (
              <div
                key={act.id}
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-medium text-white">{act.title}</h5>
                    <p className="text-[11px] text-stone-400 font-mono">{act.type} • {act.time}</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-amber-300 text-sm">{act.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
