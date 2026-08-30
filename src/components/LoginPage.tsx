import React, { useState } from 'react';
import { ArrowLeft, LogIn, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, UserPlus, HelpCircle } from 'lucide-react';
import { VeloraUser } from '../types';

interface LoginPageProps {
  onBackToHome: () => void;
  onNavigate: (view: string) => void;
  onLoginSuccess: (user: VeloraUser) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onBackToHome, onNavigate, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('Please enter your account password.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Look up existing local user or authenticate
      const saved = localStorage.getItem('velora_user');
      let userData: VeloraUser;
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          userData = {
            fullName: parsed.fullName || 'Velora Creator',
            email: email.trim().toLowerCase(),
            phoneNumber: parsed.phoneNumber || '',
            isLoggedIn: true,
            status: parsed.status || 'active',
            registeredAt: parsed.registeredAt || new Date().toISOString()
          };
        } catch {
          userData = {
            fullName: 'Velora Creator',
            email: email.trim().toLowerCase(),
            isLoggedIn: true,
            status: 'active',
            registeredAt: new Date().toISOString()
          };
        }
      } else {
        userData = {
          fullName: 'Velora Creator',
          email: email.trim().toLowerCase(),
          isLoggedIn: true,
          status: 'active',
          registeredAt: new Date().toISOString()
        };
      }

      localStorage.setItem('velora_user', JSON.stringify(userData));
      onLoginSuccess(userData);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onBackToHome(); }} 
          className="hover:text-amber-300 transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Velora Earnings</span>
        </a>
        <span>/</span>
        <span className="text-amber-300">Login</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <LogIn className="w-3.5 h-3.5" />
          <span>Member Authentication</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Login to Velora Earnings
        </h1>
        <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
          Access your verified Velora Earnings creator dashboard, monitor daily task rewards, manage your wallet balance, and initiate withdrawals.
        </p>
      </header>

      {/* Login Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-xl space-y-8 max-w-md mx-auto">
        
        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          
          <div className="space-y-2">
            <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
              Account Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="text-xs text-amber-400/80 hover:text-amber-300 transition-colors"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold w-full py-4 text-base font-semibold shadow-xl shadow-amber-400/10 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Login to Velora Earnings</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-stone-400 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>256-Bit TLS Secured Member Session</span>
          </div>

        </form>

        <div className="pt-6 border-t border-white/10 text-center space-y-3">
          <p className="text-xs text-stone-400">
            Don&apos;t have a Velora Earnings account yet?
          </p>
          <a
            href="/signup"
            onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-amber-300 border border-amber-400/20 transition-all"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Sign Up for Velora Earnings</span>
          </a>
        </div>

      </div>

      {/* Supporting Information Links */}
      <section className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4 text-stone-300 text-sm">
        <h2 className="text-lg font-display text-white font-medium">
          Velora Earnings Account Security &amp; Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-white">Need help logging into your account?</h3>
            <p className="text-stone-400 font-light leading-relaxed">
              If you have issues logging in or accessing your dashboard, contact our support team or check our frequently asked questions.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-white">Official Domain Verification</h3>
            <p className="text-stone-400 font-light leading-relaxed">
              Always confirm you are on <strong>veloraearnings.com.ng</strong> before entering your login credentials.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-400">
            <a href="/how-it-works" onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }} className="hover:text-amber-300">
              How Velora Earnings Works
            </a>
            <span>•</span>
            <a href="/features" onClick={(e) => { e.preventDefault(); onNavigate('features'); }} className="hover:text-amber-300">
              Velora Earnings Features
            </a>
            <span>•</span>
            <a href="/faqs" onClick={(e) => { e.preventDefault(); onNavigate('faqs'); }} className="hover:text-amber-300">
              Velora Earnings FAQs
            </a>
            <span>•</span>
            <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-amber-300">
              Contact Velora Support
            </a>
          </div>
          <a 
            href="/"
            onClick={(e) => { e.preventDefault(); onBackToHome(); }}
            className="text-xs text-amber-300 hover:underline"
          >
            Back to Official Homepage
          </a>
        </div>
      </section>

    </div>
  );
};
