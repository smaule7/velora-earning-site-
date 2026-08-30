import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenContact: () => void;
  onNavigateView?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenContact, onNavigateView }) => {
  return (
    <footer className="relative bg-[#06030c] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <button 
                onClick={() => onNavigateView ? onNavigateView('landing') : undefined}
                className="font-display text-2xl tracking-widest text-white font-medium hover:text-amber-300 transition-colors text-left"
              >
                VELORA EARNINGS
              </button>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Velora Earnings is the premier online earning platform in Nigeria and Africa for digital creators, AI workflows, YouTube growth, digital journalism, matchday fan battles, and community rewards powered by high-performance Velora Linux infrastructure.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Creator Ecosystem • Instant Wallet & Bank Payouts in Nigeria</span>
            </div>
          </div>

          {/* Col 2: Earning Streams */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Ways to Earn
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="/features" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('features'); }} className="hover:text-amber-300 transition-colors text-left block">Velora Earnings Features</a></li>
              <li><a href="/signup" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('signup'); }} className="hover:text-amber-300 transition-colors text-left block">Sign Up for Velora Earnings</a></li>
              <li><a href="/login" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('login'); }} className="hover:text-amber-300 transition-colors text-left block">Login to Velora Earnings</a></li>
              <li><a href="/blog" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('blog'); }} className="hover:text-amber-300 transition-colors text-left block">Velora Earnings Blog</a></li>
              <li><a href="/velora-earnings" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('velora-earnings'); }} className="hover:text-amber-300 transition-colors text-left block">Velora Earnings Overview</a></li>
              <li><a href="#ai-upload" className="hover:text-amber-300 transition-colors block">AI Upload Rewards</a></li>
              <li><a href="#youtube-earnings" className="hover:text-amber-300 transition-colors block">YouTube Creator Suite</a></li>
              <li><a href="#news-rewards" className="hover:text-amber-300 transition-colors block">Velora News Rewards</a></li>
              <li><a href="#fan-battle" className="hover:text-amber-300 transition-colors block">Matchday Fan Battle Arena</a></li>
              <li><a href="#clout-cash" className="hover:text-amber-300 transition-colors block">Turn Clout into Cash</a></li>
            </ul>
          </div>

          {/* Col 3: Programs & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Platform &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="/about" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('about'); }} className="hover:text-amber-300 transition-colors text-left block">About Velora Earnings</a></li>
              <li><a href="/how-it-works" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('how-it-works'); }} className="hover:text-amber-300 transition-colors text-left block">How Velora Earnings Works</a></li>
              <li><a href="/faqs" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('faqs'); }} className="hover:text-amber-300 transition-colors text-left block">Velora Earnings FAQs</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('contact'); else onOpenContact(); }} className="hover:text-amber-300 transition-colors text-left block">Contact Velora Earnings Support</a></li>
              <li><a href="/velora-linux" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('velora-linux'); }} className="hover:text-amber-300 transition-colors text-left block">Velora Linux Cloud</a></li>
              <li><a href="/terms" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('terms'); else onOpenTerms(); }} className="hover:text-amber-300 transition-colors text-left block">Terms of Service</a></li>
              <li><a href="/privacy" onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('privacy'); else onOpenTerms(); }} className="hover:text-amber-300 transition-colors text-left block">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 VELORA Digital Universe. Official Website: veloraearnings.com.ng</p>
          <p className="flex items-center gap-1">
            <span>Built for Creators &amp; Communities in Nigeria &amp; Worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
