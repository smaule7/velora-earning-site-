import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertTriangle, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Wallet, 
  LayoutDashboard, 
  CreditCard, 
  ShieldCheck, 
  ArrowUpRight, 
  Lock, 
  Unlock,
  Sparkles,
  RefreshCw,
  Building2,
  UserCheck
} from 'lucide-react';
import { VeloraUser } from '../types';

interface CreatorDashboardPreviewProps {
  currentUser?: VeloraUser | null;
  onOpenPayment: () => void;
  onOpenRegister?: () => void;
  onUpdateUserStatus?: (newStatus: 'inactive' | 'active') => void;
  onNavigateDedicatedDashboard?: () => void;
}

export const CreatorDashboardPreview: React.FC<CreatorDashboardPreviewProps> = ({ 
  currentUser,
  onOpenPayment,
  onOpenRegister,
  onUpdateUserStatus,
  onNavigateDedicatedDashboard
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Local fallback status if no user is passed, default to inactive
  const isAccountActive = currentUser ? currentUser.status === 'active' : false;
  const displayName = currentUser?.fullName || 'Velora Creator';
  const userEmail = currentUser?.email || 'creator@velora.io';

  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0].toUpperCase())
    .join('') || 'VC';

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

  const handleCopyAccountNumber = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const telegramPreFilledMessage = "Hello VELORA Admin, I have successfully completed my registration payment. Kindly review and confirm my payment proof so my account can be activated. Thank you";
  const telegramUrl = `https://t.me/VELORA_COACHREAL?text=${encodeURIComponent(telegramPreFilledMessage)}`;

  // Simulated metrics
  const activeMetrics = {
    totalEarnings: '₦85,500.00',
    todayEarnings: '₦12,500.00',
    availableBalance: '₦62,000.00',
    pendingEarnings: '₦23,500.00',
  };

  const inactiveMetrics = {
    totalEarnings: '₦0',
    todayEarnings: '₦0',
    availableBalance: '₦0',
    pendingEarnings: '₦0',
  };

  const currentMetrics = isAccountActive ? activeMetrics : inactiveMetrics;

  return (
    <section 
      id="dashboard-preview" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className={`text-center max-w-3xl mx-auto mb-12 reveal-item from-bottom ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs uppercase tracking-widest font-mono mb-4">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Personal Creator Portal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight uppercase">
          YOUR CREATOR DASHBOARD
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          {isAccountActive 
            ? 'Your account is active. Manage multi-stream earnings, withdraw balances, and track daily verified rewards.'
            : 'Welcome to your Velora dashboard. Complete your account activation to unlock real-time rewards and daily payouts.'
          }
        </p>
      </div>

      {/* High-Fidelity Glass Dashboard Container */}
      <div 
        className={`rounded-3xl velora-glass border border-white/15 p-6 sm:p-10 shadow-2xl bg-gradient-to-b from-[#120a22]/95 via-[#080412]/98 to-black relative overflow-hidden reveal-item scale-settle ${
          isRevealed ? 'is-revealed' : ''
        }`}
      >
        {/* Top App Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-white/10 mb-8">
          {/* User Profile Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-base shadow-lg transition-all duration-300 ${
                isAccountActive 
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-amber-500/10'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-rose-500/10'
              }`}>
                {initials}
              </div>
              <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#080412] ${
                isAccountActive ? 'bg-emerald-400' : 'bg-rose-500 animate-pulse'
              }`} />
            </div>

            <div className="space-y-1 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-display text-white font-medium">
                  {displayName}
                </h3>

                {/* Status Badge */}
                {isAccountActive ? (
                  <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    ACTIVE
                  </span>
                ) : (
                  <span className="px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-mono font-semibold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    INACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-400 font-mono">
                {userEmail} • ID: VEL-{currentUser?.registeredAt ? currentUser.registeredAt.slice(2, 10).replace(/[-:T]/g, '') : '94827A'}
              </p>
            </div>
          </div>

          {/* Header Action Buttons & Admin Toggle Simulator */}
          <div className="flex flex-wrap items-center gap-3">
            {/* If Inactive: Show Make Payment / Activate Account Button */}
            {!isAccountActive ? (
              <button
                onClick={onOpenPayment}
                className="btn-gold text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-amber-500/20 font-semibold"
              >
                <CreditCard className="w-4 h-4" />
                <span>Make Payment / Activate Account</span>
              </button>
            ) : (
              <button
                onClick={() => alert('Withdrawal request initiated. Payouts are dispatched to your registered account within 2 hours.')}
                className="btn-gold text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-amber-500/20 font-semibold"
              >
                <Wallet className="w-4 h-4" />
                <span>Withdraw Balance</span>
              </button>
            )}

            {/* Open Full Dedicated Dashboard Page */}
            {onNavigateDedicatedDashboard && (
              <button
                onClick={onNavigateDedicatedDashboard}
                className="px-3.5 py-2.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="Switch to dedicated full-screen user dashboard"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Open Full Dashboard Page</span>
              </button>
            )}

            {/* Admin Simulation / Verification Toggle for instant testing of Active / Inactive states */}
            {onUpdateUserStatus && (
              <button
                onClick={() => onUpdateUserStatus(isAccountActive ? 'inactive' : 'active')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-all"
                title="Toggle status to simulate Admin Payment Confirmation or Inactive state"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-300" />
                <span>Admin Confirm: {isAccountActive ? 'Set Inactive' : 'Activate Account'}</span>
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INACTIVE ACCOUNT WARNING BANNER & PAYMENT DETAILS & TELEGRAM CONFIRMATION */}
        {/* ========================================================================= */}
        {!isAccountActive && (
          <div className="mb-8 space-y-6 animate-fadeIn">
            {/* 1. Inactive Warning Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-amber-950/30 to-purple-950/30 border border-amber-500/30 text-left space-y-3 shadow-xl shadow-amber-500/5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0 mt-0.5">
                  <AlertTriangle className="w-6 h-6 text-amber-300" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base sm:text-lg font-display text-white font-medium flex items-center gap-2">
                    ⚠️ VELORA Account Inactive
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                    Your VELORA account is currently inactive. Make your registration payment to activate your account and unlock your earning features.
                  </p>
                </div>
              </div>

              {/* 2. Payment Section Details Box */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 mb-3">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>Official Registration Payment Account</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/60 border border-white/10">
                  {/* Bank / Provider */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 block uppercase">
                      Bank / Payment Provider
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      MONIEPOINT VELORA
                    </span>
                  </div>

                  {/* Account Name */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 block uppercase">
                      Account Name
                    </span>
                    <span className="text-sm font-semibold text-amber-200 block">
                      CHIDINDU BLESSING IKECHUKWU
                    </span>
                  </div>

                  {/* Account Number with 1-Click Copy */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-400 block uppercase">
                      Account Number
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-mono font-bold text-white tracking-wider">
                        5275881766
                      </span>
                      <button
                        onClick={() => handleCopyAccountNumber('5275881766')}
                        className="px-2 py-1 rounded-lg bg-white/10 hover:bg-amber-400/20 text-stone-300 hover:text-amber-300 border border-white/15 text-[11px] font-mono flex items-center gap-1 transition-all"
                        aria-label="Copy account number"
                      >
                        {copiedAccount ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Telegram Payment Proof Confirmation Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-stone-300 font-light text-left">
                  Already transferred your payment? Click below to submit your payment proof to our admin team for instant review & activation.
                </p>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold justify-center tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-amber-500/20 shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>CONTINUE TO TELEGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* METRIC CARDS (Total Earnings: ₦0 for Inactive, Active Values for Active) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card 1: Total Earnings */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-left transition-all hover:border-amber-400/30">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
              Total Earnings
            </span>
            <span className="text-2xl sm:text-3xl font-display text-white font-medium tracking-tight block">
              {currentMetrics.totalEarnings}
            </span>
            <span className={`text-[11px] font-mono block mt-1.5 flex items-center gap-1 ${
              isAccountActive ? 'text-emerald-400' : 'text-stone-500'
            }`}>
              {isAccountActive ? '+18.4% this month' : 'Awaiting account activation'}
            </span>
          </div>

          {/* Card 2: Today's Revenue */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-left transition-all hover:border-amber-400/30">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
              Today's Earnings
            </span>
            <span className="text-2xl sm:text-3xl font-display text-amber-300 font-medium tracking-tight block">
              {currentMetrics.todayEarnings}
            </span>
            <span className={`text-[11px] font-mono block mt-1.5 ${
              isAccountActive ? 'text-amber-300/80' : 'text-stone-500'
            }`}>
              {isAccountActive ? '4 daily tasks verified' : '0 daily tasks active'}
            </span>
          </div>

          {/* Card 3: Available Balance */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-left transition-all hover:border-amber-400/30">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
              Available Balance
            </span>
            <span className={`text-2xl sm:text-3xl font-display font-medium tracking-tight block ${
              isAccountActive ? 'text-emerald-400' : 'text-white'
            }`}>
              {currentMetrics.availableBalance}
            </span>
            <span className={`text-[11px] font-mono block mt-1.5 ${
              isAccountActive ? 'text-stone-300' : 'text-stone-500'
            }`}>
              {isAccountActive ? 'Ready for instant payout' : 'Locked until activation'}
            </span>
          </div>

          {/* Card 4: Pending Earnings */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-left transition-all hover:border-amber-400/30">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
              Pending Earnings
            </span>
            <span className="text-2xl sm:text-3xl font-display text-purple-300 font-medium tracking-tight block">
              {currentMetrics.pendingEarnings}
            </span>
            <span className={`text-[11px] font-mono block mt-1.5 ${
              isAccountActive ? 'text-purple-300/80' : 'text-stone-500'
            }`}>
              {isAccountActive ? 'Processing verified stream' : 'No pending settlements'}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACTIVITY LOGS & STREAM STATUS */}
        {/* ========================================================================= */}
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-300">
              {isAccountActive ? 'Live Verified Activity Stream' : 'Activity Stream (Preview Mode)'}
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {isAccountActive ? 'Live Real-Time Stream Connected' : 'Ready For Activation'}
            </span>
          </div>

          <div className="space-y-2">
            {isAccountActive ? (
              <>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Daily YouTube Engagement Task Verified</h5>
                      <p className="text-[11px] text-stone-400 font-mono">YouTube Earn • 12m ago</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-amber-300 text-sm">+₦2,500.00</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">AI Content Creation Royalty Dispatched</h5>
                      <p className="text-[11px] text-stone-400 font-mono">AI Upload Reward • 45m ago</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-amber-300 text-sm">+₦5,000.00</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Affiliate Commission Credit (@sarah_k)</h5>
                      <p className="text-[11px] text-stone-400 font-mono">Referral Stream • 2h ago</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-amber-300 text-sm">+₦5,000.00</span>
                </div>
              </>
            ) : (
              <div className="p-6 rounded-2xl bg-black/40 border border-dashed border-white/15 text-center space-y-2">
                <Lock className="w-6 h-6 text-stone-400 mx-auto" />
                <h5 className="text-sm font-medium text-white">Real-Time Earning Stream Locked</h5>
                <p className="text-xs text-stone-400 max-w-md mx-auto">
                  Your tasks, YouTube views, AI uploads, and affiliate earnings will record here automatically once your registration payment is confirmed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorDashboardPreview;
