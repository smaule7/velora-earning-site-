import React, { useState } from 'react';
import { ArrowLeft, UserPlus, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Lock, Mail, Phone, User, Award, HelpCircle } from 'lucide-react';
import { VeloraUser } from '../types';

interface SignUpPageProps {
  onBackToHome: () => void;
  onNavigate: (view: string) => void;
  onRegisterSuccess?: (user: VeloraUser, packageId: string) => void;
  onSuccess?: (userData: { fullName: string; email: string; phoneNumber: string }) => void;
  onOpenLogin?: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ 
  onBackToHome, 
  onNavigate, 
  onRegisterSuccess, 
  onSuccess,
  onOpenLogin 
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedTier, setSelectedTier] = useState<'silver' | 'golden'>('silver');
  const [couponCode, setCouponCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full legal name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMsg('Please enter your WhatsApp phone number for payout alerts.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);

    const newUser: VeloraUser = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim(),
      isLoggedIn: true,
      status: 'inactive', // becomes active after package activation
      registeredAt: new Date().toISOString()
    };

    setTimeout(() => {
      localStorage.setItem('velora_user', JSON.stringify(newUser));
      if (typeof onRegisterSuccess === 'function') {
        onRegisterSuccess(newUser, selectedTier === 'golden' ? 'golden-ai' : 'silver-ai');
      }
      if (typeof onSuccess === 'function') {
        onSuccess({
          fullName: newUser.fullName,
          email: newUser.email,
          phoneNumber: newUser.phoneNumber || '',
        });
      }
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Sign Up</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <UserPlus className="w-3.5 h-3.5" />
          <span>Official Registration Portal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Sign Up for Velora Earnings
        </h1>
        <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
          Create your verified creator account on the official Velora Earnings platform and begin unlocking daily AI task earnings, YouTube rewards, and bank payouts in Nigeria.
        </p>
      </header>

      {/* Registration Form Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-xl space-y-8">
        
        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          
          {/* Plan Choice Selector */}
          <div className="space-y-3">
            <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
              Select Creator Activation Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div 
                onClick={() => setSelectedTier('silver')}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedTier === 'silver'
                    ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/5'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-medium text-white">Silver AI Tier</span>
                    <span className="text-xs font-mono text-amber-300 font-bold">₦8,000</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    ₦5,000 Welcome Bonus + ₦6,200 Direct Affiliate Commission + AI Prompts
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Most Popular Choice</span>
                </div>
              </div>

              <div 
                onClick={() => setSelectedTier('golden')}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedTier === 'golden'
                    ? 'border-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/5'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-medium text-white">Golden AI Tier</span>
                    <span className="text-xs font-mono text-purple-300 font-bold">₦12,000</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    ₦8,000 Welcome Bonus + Priority AI Marketplace + Fan Battle Derbies
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-purple-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Maximum Daily Yield</span>
                </div>
              </div>

            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <div className="space-y-2">
              <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
                Full Legal Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Oboh"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
                Email Address
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
              <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
                Phone Number (WhatsApp)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="+234 801 234 5678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
                Account Password
              </label>
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

          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono text-stone-300 uppercase tracking-wider">
              Activation Coupon Code (Optional)
            </label>
            <input
              type="text"
              placeholder="Leave blank to pay online via Moniepoint / Bank Transfer"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-600 text-sm font-mono focus:outline-none focus:border-amber-400 transition-colors"
            />
            <p className="text-[11px] text-stone-400">
              If you have already purchased an activation code from an official Velora Earnings vendor, enter it here.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold w-full py-4 text-base font-semibold shadow-xl shadow-amber-400/10 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Creating Your Account...</span>
            ) : (
              <>
                <span>Complete Velora Earnings Sign Up</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-stone-400 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>256-Bit TLS Encrypted • Safe &amp; Verified Nigerian Banking Pipeline</span>
          </div>

        </form>
      </div>

      {/* Supporting Information Links */}
      <section className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4 text-stone-300 text-sm">
        <h2 className="text-lg font-display text-white font-medium">
          Frequently Asked Questions About Velora Earnings Sign Up
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-white">How quickly is my account activated?</h3>
            <p className="text-stone-400 font-light leading-relaxed">
              Accounts activated via coupon code or instant bank transfer are verified within seconds, granting immediate access to your creator dashboard.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-white">Can I withdraw to any Nigerian bank?</h3>
            <p className="text-stone-400 font-light leading-relaxed">
              Yes, Velora Earnings supports automated withdrawals to all commercial banks and digital fintech institutions across Nigeria.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-400">
            <button onClick={() => onNavigate('how-it-works')} className="hover:text-amber-300">
              How It Works
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('features')} className="hover:text-amber-300">
              Platform Features
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('faqs')} className="hover:text-amber-300">
              Velora Earnings FAQs
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-amber-300">
              Contact Support
            </button>
          </div>
          <button 
            onClick={onBackToHome}
            className="text-xs text-amber-300 hover:underline"
          >
            Back to Official Homepage
          </button>
        </div>
      </section>

    </div>
  );
};
