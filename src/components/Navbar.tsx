import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, LayoutDashboard, User, LogOut, Sparkles, Shield, ChevronDown, Award } from 'lucide-react';
import { NavItem, VeloraUser } from '../types';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  currentUser?: VeloraUser | null;
  onNavigateDashboard?: () => void;
  onNavigateView?: (view: string) => void;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAuth,
  currentUser,
  onNavigateDashboard,
  onNavigateView,
  onLogout
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sitelink optimized primary navigation items:
  // Home, About, How It Works, Opportunities, Academy, Community, Packages, FAQs, Contact
  const navItems = [
    { label: 'Home', href: '/', key: 'landing', title: 'VELORA Official Homepage' },
    { label: 'About', href: '/about', key: 'about', title: 'About VELORA' },
    { label: 'How It Works', href: '/how-it-works', key: 'how-it-works', title: 'How VELORA Works' },
    { label: 'Opportunities', href: '/opportunities', key: 'opportunities', title: 'VELORA Opportunities' },
    { label: 'Academy', href: '/academy', key: 'academy', title: 'VELORA Academy' },
    { label: 'Community', href: '/community', key: 'community', title: 'VELORA Community' },
    { label: 'Packages', href: '/packages', key: 'packages', title: 'VELORA Membership Packages' },
    { label: 'FAQs', href: '/faqs', key: 'faqs', title: 'VELORA FAQs' },
    { label: 'Contact', href: '/contact', key: 'contact', title: 'Contact VELORA Support' },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, viewKey: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(viewKey);

    if (onNavigateView) {
      onNavigateView(viewKey);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection('landing');
    if (onNavigateView) {
      onNavigateView('landing');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 pb-2 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border backdrop-blur-xl ${
            scrolled 
              ? 'bg-[#090414]/90 border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.45)]' 
              : 'bg-[#0b0518]/75 border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.25)]'
          }`}
        >
          {/* LEFT: Official VELORA Logo & Brand */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0 cursor-pointer"
            aria-label="VELORA Homepage"
          >
            {/* Sleek Golden-Lavender V Monogram Badge */}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-400/20 via-purple-600/30 to-purple-950/70 border border-amber-400/35 flex items-center justify-center shadow-[0_0_12px_rgba(234,179,8,0.18)] group-hover:border-amber-300/60 group-hover:shadow-[0_0_16px_rgba(234,179,8,0.3)] transition-all duration-200">
              <span className="font-display font-bold text-xs sm:text-sm text-amber-300 tracking-wider">V</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
            </div>

            {/* Brand Wordmark */}
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg tracking-[0.16em] text-white font-medium group-hover:text-amber-200 transition-colors leading-none">
                VELORA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-stone-400 group-hover:text-amber-300/80 transition-colors hidden xs:inline-block leading-tight pt-0.5">
                EARNINGS
              </span>
            </div>
          </a>

          {/* CENTER: Compact Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  title={item.title}
                  onClick={(e) => handleNavClick(e, item.key)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.12] shadow-sm font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Auth & User Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {currentUser?.isLoggedIn ? (
              /* Logged In State: Dashboard Button + User Avatar Badge */
              <div className="flex items-center gap-2" ref={dropdownRef}>
                {/* Direct Dashboard Action */}
                <button
                  onClick={onNavigateDashboard}
                  className="btn-gold !py-1.5 !px-3.5 text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-amber-400/15"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </button>

                {/* Profile Pill & Dropdown Trigger */}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-white transition-all text-xs font-mono"
                    aria-label="User account menu"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-purple-600 text-black font-bold flex items-center justify-center text-[10px]">
                      {currentUser.fullName.charAt(0).toUpperCase()}
                    </div>
                    <span className="truncate max-w-[90px] font-sans text-xs text-stone-200">
                      {currentUser.fullName.split(' ')[0]}
                    </span>
                    <span 
                      className={`w-2 h-2 rounded-full ${
                        currentUser.status === 'active' ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-rose-400 animate-pulse'
                      }`} 
                    />
                    <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* User Dropdown Menu */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-52 p-2 rounded-2xl bg-[#0f0720]/95 backdrop-blur-2xl border border-white/[0.14] shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                      <div className="px-3 py-2 border-b border-white/[0.08] mb-1">
                        <p className="text-xs font-semibold text-white truncate">{currentUser.fullName}</p>
                        <p className="text-[11px] text-stone-400 font-mono truncate">{currentUser.email}</p>
                        <div className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>{currentUser.status === 'active' ? 'ACTIVE CREATOR' : 'PENDING ACTIVATION'}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          if (onNavigateDashboard) onNavigateDashboard();
                        }}
                        className="w-full px-3 py-1.5 rounded-xl text-left text-xs text-stone-200 hover:text-white hover:bg-white/[0.08] flex items-center gap-2 transition-colors"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
                        <span>Creator Dashboard</span>
                      </button>

                      {onLogout && (
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            onLogout();
                          }}
                          className="w-full px-3 py-1.5 rounded-xl text-left text-xs text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 flex items-center gap-2 transition-colors border-t border-white/[0.06] mt-1"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Log Out</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Logged Out State: Login + Get Started */
              <>
                <a
                  href="/login"
                  onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('login'); else onOpenAuth('login'); }}
                  className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-white transition-colors focus:outline-none rounded-full hover:bg-white/[0.05]"
                >
                  Login
                </a>

                <a
                  href="/signup"
                  onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('signup'); else onOpenAuth('signup'); }}
                  className="btn-gold !py-1.5 !px-4 text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-amber-400/15"
                >
                  <span>Sign Up</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu & Quick CTA Trigger */}
          <div className="flex sm:hidden items-center gap-1.5">
            {currentUser?.isLoggedIn ? (
              <button
                onClick={onNavigateDashboard}
                className="btn-gold !py-1 !px-2.5 text-[11px] font-semibold flex items-center gap-1"
              >
                <LayoutDashboard className="w-3 h-3" />
                <span>Dashboard</span>
              </button>
            ) : (
              <a
                href="/signup"
                onClick={(e) => { e.preventDefault(); if (onNavigateView) onNavigateView('signup'); else onOpenAuth('signup'); }}
                className="btn-gold !py-1 !px-2.5 text-[11px] font-semibold flex items-center gap-1"
              >
                <span>Sign Up</span>
              </a>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] text-stone-200 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE EXPANDED DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-md mx-auto mt-2 px-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 rounded-3xl bg-[#0a0417]/95 backdrop-blur-2xl border border-white/[0.12] shadow-2xl space-y-3">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    title={item.title}
                    onClick={(e) => handleNavClick(e, item.key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                      isActive
                        ? 'text-amber-300 bg-amber-400/10 border border-amber-400/20 font-semibold'
                        : 'text-stone-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300 opacity-100' : 'opacity-40'}`} />
                  </a>
                );
              })}
            </div>

            {/* Mobile Auth & User Actions */}
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              {currentUser?.isLoggedIn ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-[10px]">
                        {currentUser.fullName.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-stone-200 truncate font-medium">{currentUser.fullName}</span>
                    </div>
                    <span 
                      className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        currentUser.status === 'active' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {currentUser.status === 'active' ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigateDashboard) onNavigateDashboard();
                      }}
                      className="btn-gold w-full !py-2 text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span>Dashboard</span>
                    </button>

                    {onLogout && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full py-2 rounded-full bg-white/[0.06] hover:bg-rose-500/20 border border-white/[0.1] text-xs font-medium text-stone-300 hover:text-rose-300 transition-all flex items-center justify-center gap-1"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Log Out</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/login"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateView) onNavigateView('login');
                      else onOpenAuth('login');
                    }}
                    className="w-full py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-medium text-white transition-all text-center flex items-center justify-center"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavigateView) onNavigateView('signup');
                      else onOpenAuth('signup');
                    }}
                    className="btn-gold w-full !py-2 text-xs font-semibold flex items-center justify-center gap-1"
                  >
                    <span>Sign Up</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

