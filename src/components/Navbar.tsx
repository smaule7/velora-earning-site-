import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sliders, Sparkles, Plus } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Ways to Earn', href: '#ways-to-earn' },
    { label: 'Flyers', href: '#promotional-flyers' },
    { label: 'Top Earners', href: '#top-earners' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Fan Battle', href: '#fan-battle' },
    { label: 'Platinum', href: '#platinum' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'ways-to-earn', 'promotional-flyers', 'top-earners', 'opportunities', 'fan-battle', 'platinum'];
      const scrollPos = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3.5 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative rounded-full transition-all duration-300 flex items-center justify-between px-5 sm:px-7 py-2.5 ${
            scrolled ? 'velora-glass-nav scrolled' : 'velora-glass-nav'
          }`}
        >
          {/* LEFT: VELORA Wordmark (No separate V icon) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group focus:outline-none shrink-0"
          >
            <span className="font-display text-xl sm:text-2xl tracking-widest text-white font-medium hover:text-amber-300 transition-colors">
              VELORA
            </span>
          </a>

          {/* CENTER: Navigation Links (hidden on smaller screens) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Admin Tools + Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-amber-300 transition-colors"
              title="Manage Flyers, Rewards, Leaderboard & Content"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Admin / Content</span>
            </button>

            <button
              onClick={() => onOpenAuth('login')}
              className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white transition-colors focus:outline-none"
            >
              Login
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="btn-gold !py-1.5 !px-4 text-xs font-semibold"
            >
              Get Registered
            </button>
          </div>

          {/* Mobile Menu & Quick Admin Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300"
              title="Admin Manager"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="btn-gold !py-1 !px-3 text-xs"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-md mx-auto mt-2 px-2 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-5 rounded-3xl velora-glass space-y-3 shadow-2xl border border-white/15">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-stone-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300 flex items-center justify-center gap-2"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Admin & Flyer Manager</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('login');
                  }}
                  className="w-full py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                  className="btn-gold w-full !py-2 text-xs font-semibold"
                >
                  Join Velora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
