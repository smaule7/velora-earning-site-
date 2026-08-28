import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, LayoutDashboard, User } from 'lucide-react';
import { NavItem, VeloraUser } from '../types';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  currentUser?: VeloraUser | null;
  onNavigateDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAuth,
  currentUser,
  onNavigateDashboard 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = currentUser?.isLoggedIn
    ? [
        { label: 'Home', href: '#home' },
        { label: 'Ways to Earn', href: '#ways-to-earn' },
        { label: 'Top Earners', href: '#top-earners' },
        { label: 'Opportunities', href: '#opportunities' },
        { label: 'Fan Battle', href: '#fan-battle' },
        { label: 'Dashboard', href: '#dashboard' },
      ]
    : [
        { label: 'Home', href: '#home' },
        { label: 'Ways to Earn', href: '#ways-to-earn' },
        { label: 'Top Earners', href: '#top-earners' },
        { label: 'Opportunities', href: '#opportunities' },
        { label: 'Fan Battle', href: '#fan-battle' },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'ways-to-earn', 'top-earners', 'opportunities', 'fan-battle'];
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
    if (href === '#dashboard-preview' || href === '#dashboard') {
      if (onNavigateDashboard) {
        onNavigateDashboard();
        return;
      }
    }
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
          {/* LEFT: VELORA Wordmark */}
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

          {/* RIGHT: Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {currentUser?.isLoggedIn ? (
              <>
                <button
                  onClick={onNavigateDashboard}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all text-xs font-mono"
                >
                  <span className={`w-2 h-2 rounded-full ${currentUser.status === 'active' ? 'bg-emerald-400' : 'bg-rose-400 animate-pulse'}`} />
                  <span className="truncate max-w-[120px]">{currentUser.fullName.split(' ')[0]}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${currentUser.status === 'active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
                    {currentUser.status === 'active' ? 'ACTIVE' : 'INACTIVE'}
                  </span>
                </button>

                <button
                  onClick={onNavigateDashboard}
                  className="btn-gold !py-1.5 !px-4 text-xs font-semibold flex items-center gap-1.5"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white transition-colors focus:outline-none"
                >
                  Login
                </button>

                <button
                  onClick={() => onOpenAuth('signup')}
                  className="btn-gold !py-1.5 !px-4 text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                if (currentUser?.isLoggedIn) {
                  if (onNavigateDashboard) onNavigateDashboard();
                } else {
                  onOpenAuth('signup');
                }
              }}
              className="btn-gold !py-1 !px-3 text-xs flex items-center gap-1"
            >
              <span>{currentUser?.isLoggedIn ? 'Dashboard' : 'Get Started'}</span>
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
              {currentUser?.isLoggedIn ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-stone-300 truncate">{currentUser.fullName}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${currentUser.status === 'active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
                      {currentUser.status === 'active' ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onNavigateDashboard) onNavigateDashboard();
                    }}
                    className="btn-gold w-full !py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Open Dashboard</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth('login');
                    }}
                    className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth('signup');
                    }}
                    className="btn-gold w-full !py-2.5 text-xs font-semibold"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
