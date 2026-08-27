import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenContact }) => {
  return (
    <footer className="relative bg-[#06030c] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="font-display text-2xl tracking-widest text-white font-medium">
                VELORA
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier creator and community platform for earning, AI workflows, YouTube growth, digital journalism, matchday fan battles, and multi-tier rewards.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Creator Ecosystem • Instant Wallet & USD ($) Payouts</span>
            </div>
          </div>

          {/* Col 2: Earning Streams */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Ways to Earn
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#ai-upload" className="hover:text-amber-300 transition-colors">AI Upload Rewards</a></li>
              <li><a href="#youtube-earnings" className="hover:text-amber-300 transition-colors">YouTube Creator Suite</a></li>
              <li><a href="#news-rewards" className="hover:text-amber-300 transition-colors">Velora News Rewards</a></li>
              <li><a href="#content-engagement" className="hover:text-amber-300 transition-colors">Content Engagement</a></li>
              <li><a href="#fan-battle" className="hover:text-amber-300 transition-colors">Fan Battle Arena</a></li>
              <li><a href="#clout-cash" className="hover:text-amber-300 transition-colors">Turn Clout into Cash</a></li>
            </ul>
          </div>

          {/* Col 3: Programs & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Platform & Legal
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#top-earners" className="hover:text-amber-300 transition-colors">Top Earners Leaderboard</a></li>
              <li><a href="#opportunities" className="hover:text-amber-300 transition-colors">Opportunities & Tasks</a></li>
              <li><button onClick={onOpenTerms} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={onOpenTerms} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors">Creator Support</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 VELORA Digital Universe. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built for Creators & Communities worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
