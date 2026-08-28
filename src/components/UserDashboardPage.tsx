import React, { useState } from 'react';
import {
  AlertCircle,
  Copy,
  Check,
  Send,
  ExternalLink,
  CheckCircle2,
  Wallet,
  ArrowLeft,
  LogOut,
  Sparkles,
  RefreshCw,
  Building2,
  Lock,
  Youtube,
  Image as ImageIcon,
  Users,
  TrendingUp,
  CreditCard,
  HelpCircle,
  Clock,
  ShieldCheck,
  Bell,
  X,
  Activity,
  ArrowUpRight,
  User,
  Settings,
  ChevronRight,
  Flame,
  GraduationCap,
  MessageSquare,
  ClipboardList,
  DollarSign,
  Share2,
  Play
} from 'lucide-react';
import { VeloraUser, RewardCategoryItem } from '../types';

interface UserDashboardPageProps {
  currentUser: VeloraUser | null;
  onBackToHome: () => void;
  onLogout: () => void;
  onUpdateUserStatus: (newStatus: 'inactive' | 'active') => void;
  rewards: RewardCategoryItem[];
  onOpenContact?: () => void;
}

type FeatureModalType =
  | null
  | 'tasks'
  | 'youtube'
  | 'content'
  | 'referrals'
  | 'fan_battle'
  | 'academy'
  | 'community'
  | 'withdraw'
  | 'inactive_alert'
  | 'payment_details'
  | 'settings';

export const UserDashboardPage: React.FC<UserDashboardPageProps> = ({
  currentUser,
  onBackToHome,
  onLogout,
  onUpdateUserStatus,
  rewards,
  onOpenContact,
}) => {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [activeModal, setActiveModal] = useState<FeatureModalType>(null);
  const [attemptedFeatureName, setAttemptedFeatureName] = useState<string>('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  // Interactive Active States
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [taskInProgress, setTaskInProgress] = useState<string | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  const isAccountActive = currentUser?.status === 'active';
  const displayName = currentUser?.fullName || 'Velora Creator';
  const email = currentUser?.email || 'creator@velora.io';
  const phoneNumber = currentUser?.phoneNumber || 'Not provided';
  const userId = `VEL-${currentUser?.registeredAt ? currentUser.registeredAt.slice(2, 10).replace(/[-:T]/g, '') : '84920'}`;

  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('') || 'VC';

  const handleCopy = (text: string, type: 'account' | 'referral') => {
    navigator.clipboard.writeText(text);
    if (type === 'account') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else {
      setCopiedReferral(true);
      setTimeout(() => setCopiedReferral(false), 2000);
    }
  };

  const telegramPreFilledMessage =
    'Hello VELORA Admin, I have successfully completed my registration payment. Kindly review and confirm my payment proof so my account can be activated. Thank you';
  const telegramUrl = `https://t.me/VELORA_COACHREAL?text=${encodeURIComponent(telegramPreFilledMessage)}`;

  // Earnings statistics: strictly ₦0 / 0 for inactive users
  const stats = isAccountActive
    ? {
        totalEarnings: '₦85,500.00',
        availableBalance: '₦62,000.00',
        pendingEarnings: '₦23,500.00',
        activities: 14 + completedTasks.length,
      }
    : {
        totalEarnings: '₦0',
        availableBalance: '₦0',
        pendingEarnings: '₦0',
        activities: 0,
      };

  const handleCardClick = (featureId: FeatureModalType, featureName: string) => {
    if (!isAccountActive && featureId !== 'settings') {
      setAttemptedFeatureName(featureName);
      setActiveModal('inactive_alert');
    } else {
      setActiveModal(featureId);
    }
  };

  const handleCompleteTask = (taskId: string, rewardAmount: string) => {
    setTaskInProgress(taskId);
    setTimeout(() => {
      setCompletedTasks((prev) => [...prev, taskId]);
      setTaskInProgress(null);
      alert(`🎉 Task verified! ${rewardAmount} has been credited to your available balance.`);
    }, 1800);
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || Number(withdrawAmount) <= 0) return;
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setActiveModal(null);
      setWithdrawAmount('');
      alert('Withdrawal request submitted! Funds will be credited to your linked account within 2 hours.');
    }, 1200);
  };

  const notifications = isAccountActive
    ? [
        { id: '1', title: 'Account Active', time: '10m ago', desc: 'Welcome! Your creator status is verified.', unread: true },
        { id: '2', title: 'YouTube Opportunities', time: '1h ago', desc: '4 new partner videos available to complete.', unread: true },
        { id: '3', title: 'Affiliate Credit', time: '4h ago', desc: '₦5,000 commission credited to available balance.', unread: false },
      ]
    : [
        { id: '1', title: 'Account Inactive', time: 'Just now', desc: 'Activate your VELORA account to unlock earning opportunities.', unread: true },
        { id: '2', title: 'Welcome to VELORA', time: 'Today', desc: 'Your account was initialized. Complete activation to begin.', unread: false },
      ];

  const opportunityCards = [
    {
      id: 'tasks' as FeatureModalType,
      title: 'Tasks',
      desc: 'Complete available tasks and earn.',
      icon: ClipboardList,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/20',
      badge: 'Daily Rewards',
    },
    {
      id: 'youtube' as FeatureModalType,
      title: 'YouTube',
      desc: 'Explore available YouTube opportunities.',
      icon: Youtube,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      badge: '₦2,500 / Video',
    },
    {
      id: 'content' as FeatureModalType,
      title: 'Content Engagement',
      desc: 'Participate in content engagement opportunities.',
      icon: Sparkles,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      badge: '₦5,000 / Upload',
    },
    {
      id: 'referrals' as FeatureModalType,
      title: 'Referrals',
      desc: 'Invite others and track your referral activity.',
      icon: Users,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      badge: '₦5,000 / Invite',
    },
    {
      id: 'fan_battle' as FeatureModalType,
      title: 'Fan Battle Zone',
      desc: 'Participate in VELORA fan activities.',
      icon: Flame,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      badge: 'Prize Pool',
    },
    {
      id: 'academy' as FeatureModalType,
      title: 'VELORA Academy',
      desc: 'Explore learning and earning opportunities.',
      icon: GraduationCap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      badge: 'Creator Hub',
    },
    {
      id: 'community' as FeatureModalType,
      title: 'Community',
      desc: 'Connect and participate in the VELORA community.',
      icon: MessageSquare,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      badge: 'Official Desk',
    },
    {
      id: 'withdraw' as FeatureModalType,
      title: 'Withdrawals & Payouts',
      desc: 'Transfer available balance directly to your bank.',
      icon: Wallet,
      color: 'text-amber-300',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/20',
      badge: 'Instant Transfer',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07030e] text-stone-100 font-sans selection:bg-amber-500 selection:text-black pb-10">
      {/* ========================================================================= */}
      {/* 1. COMPACT HEADER */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0b0517]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* LEFT: Return button + Small VELORA logo */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
              title="Return to Website"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Website</span>
            </button>

            <div className="flex items-center gap-1.5 pl-1">
              <span className="font-display font-bold tracking-widest text-base sm:text-lg text-white">
                VELORA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          </div>

          {/* RIGHT: Notifications, User Profile, Admin Simulator & Logout */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Account Status Badge */}
            {isAccountActive ? (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ACCOUNT ACTIVE</span>
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-[10px] sm:text-[11px] font-mono font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>ACCOUNT INACTIVE</span>
              </span>
            )}

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-3.5 h-3.5" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-400 rounded-full" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-xl bg-[#0f071f] border border-white/15 p-3.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">Notifications</span>
                    <button onClick={() => setNotificationsOpen(false)} className="text-stone-400 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="divide-y divide-white/5 max-h-60 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-2 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-white">{n.title}</p>
                          <span className="text-[10px] text-stone-500 font-mono">{n.time}</span>
                        </div>
                        <p className="text-[11px] text-stone-300">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-1.5 pl-1.5 border-l border-white/10">
              <div className="w-6 h-6 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-[11px]">
                {initials}
              </div>
              <span className="text-xs font-medium text-white hidden md:inline truncate max-w-[120px]">
                {displayName.split(' ')[0]}
              </span>
            </div>

            {/* Admin Verification Simulator (for instant testing of states) */}
            <button
              onClick={() => onUpdateUserStatus(isAccountActive ? 'inactive' : 'active')}
              className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-md bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/25 text-[10px] font-mono transition-colors"
              title="Toggle Active / Inactive for testing"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Simulator</span>
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-rose-500/20 text-stone-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 text-xs font-mono transition-colors"
              title="Log Out of VELORA"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN DASHBOARD CONTENT (Compact, cohesive & professionally aligned) */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3.5 sm:pt-4 space-y-3 sm:space-y-3.5">
        {/* ======================================================================= */}
        {/* 2. WELCOME AREA (Compact & Refined) */}
        {/* ======================================================================= */}
        <section className="p-3 sm:p-4 rounded-xl bg-[#0f071f] border border-white/10 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
          <div className="space-y-0.5 text-left">
            <h1 className="text-base sm:text-lg font-display text-white font-semibold tracking-tight">
              Welcome back, <span className="text-amber-200 font-semibold">{displayName}</span>
            </h1>
            <p className="text-xs text-stone-300 font-normal leading-tight">
              Manage your VELORA activities, track your earnings, and explore available opportunities.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-400 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5 shrink-0">
            <span>ID: <strong className="text-amber-300">{userId}</strong></span>
            <span>•</span>
            <span className="truncate max-w-[180px]">{email}</span>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 3. ACCOUNT STATUS (Inactive / Active - Tightly integrated card) */}
        {/* ======================================================================= */}
        {!isAccountActive ? (
          <section className="p-3 sm:p-3.5 rounded-xl bg-[#130722] border border-amber-400/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-left">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
                <AlertCircle className="w-4 h-4 text-amber-300" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xs sm:text-sm font-display font-bold text-white tracking-wide">
                    ACCOUNT INACTIVE
                  </h2>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    PENDING ACTIVATION
                  </span>
                </div>
                <p className="text-xs text-stone-300 font-normal leading-tight">
                  Activate your VELORA account to unlock earning opportunities.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveModal('payment_details')}
              className="btn-gold px-4 py-2 text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0 w-full sm:w-auto shadow-sm"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Activate Account</span>
            </button>
          </section>
        ) : (
          <section className="p-3 sm:p-3.5 rounded-xl bg-[#091512] border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-left">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h2 className="text-xs sm:text-sm font-semibold text-white">ACCOUNT ACTIVE</h2>
                <p className="text-xs text-stone-300">
                  Your creator status is verified. All VELORA earning opportunities are fully unlocked.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveModal('withdraw')}
              className="btn-gold px-3.5 py-1.5 text-xs font-semibold shrink-0"
            >
              Withdraw Funds
            </button>
          </section>
        )}

        {/* ======================================================================= */}
        {/* 4. EARNINGS OVERVIEW (4 Equal-Height Stat Cards) */}
        {/* ======================================================================= */}
        <section className="space-y-1.5 text-left">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
            Earnings Overview
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {/* Card 1: Total Earnings */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#0e071c] border border-white/10 shadow-sm flex flex-col justify-between space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                  Total Earnings
                </span>
                <div className="p-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display text-white font-semibold tracking-tight block">
                  {stats.totalEarnings}
                </span>
              </div>
            </div>

            {/* Card 2: Available Balance */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#0e071c] border border-white/10 shadow-sm flex flex-col justify-between space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                  Available Balance
                </span>
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Wallet className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display text-emerald-400 font-semibold tracking-tight block">
                  {stats.availableBalance}
                </span>
              </div>
            </div>

            {/* Card 3: Pending Earnings */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#0e071c] border border-white/10 shadow-sm flex flex-col justify-between space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                  Pending Earnings
                </span>
                <div className="p-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Clock className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display text-purple-300 font-semibold tracking-tight block">
                  {stats.pendingEarnings}
                </span>
              </div>
            </div>

            {/* Card 4: Activities */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#0e071c] border border-white/10 shadow-sm flex flex-col justify-between space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                  Activities
                </span>
                <div className="p-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Activity className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display text-blue-300 font-semibold tracking-tight block">
                  {stats.activities}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* 5. VELORA EARNING FEATURES (MAIN SECTION) */}
        {/* ======================================================================= */}
        <section className="space-y-2 text-left">
          <div className="space-y-0.5">
            <h2 className="text-sm sm:text-base font-display font-semibold text-white">
              VELORA Opportunities
            </h2>
            <p className="text-xs text-stone-400">
              Explore ways to earn and participate across the VELORA platform.
            </p>
          </div>

          {/* Fully Clickable Responsive Grid (Balanced spacing, equal-height & compact) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {opportunityCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id, card.title)}
                  className="group p-3.5 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-amber-400/30 text-left transition-all duration-150 flex flex-col justify-between shadow-sm hover:shadow-md relative overflow-hidden focus:outline-none focus:ring-1 focus:ring-amber-400/40 active:scale-[0.99]"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className={`p-1.5 rounded-lg ${card.bgColor} ${card.color} border ${card.borderColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-amber-300/90 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                        {card.badge}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-stone-400 leading-snug line-clamp-2">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 mt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-amber-300 transition-colors">
                    <span>{isAccountActive ? 'Open Workspace' : 'Locked'}</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 6. MODALS & INTERACTION OVERLAYS */}
      {/* ========================================================================= */}

      {/* MODAL: INACTIVE ACCOUNT ALERT */}
      {activeModal === 'inactive_alert' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#110722] border border-amber-400/30 p-6 space-y-5 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3">
              <div className="p-3 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/30">
                <Lock className="w-6 h-6 text-amber-300" />
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-display font-semibold text-white">
                Account Inactive
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Please activate your VELORA account to access this feature.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => setActiveModal('payment_details')}
                className="btn-gold w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Activate Account</span>
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-medium border border-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PAYMENT DETAILS (Directly on site + Telegram proof submission) */}
      {activeModal === 'payment_details' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0f071f] border border-amber-400/30 p-6 space-y-5 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-amber-300">
                <Building2 className="w-5 h-5" />
                <h3 className="text-base font-display font-semibold text-white">
                  Payment Details
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Make your registration payment to the official VELORA transfer account below:
            </p>

            <div className="space-y-3">
              {/* Provider */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">Bank/Payment Provider:</span>
                <span className="text-sm font-bold text-white font-display">Moniepoint</span>
              </div>

              {/* Account Name */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">Account Name:</span>
                <span className="text-sm font-bold text-amber-200 font-display">Chinedu Blessing Ikechukwu</span>
              </div>

              {/* Account Number */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono text-stone-400 block">Account Number:</span>
                  <span className="text-lg font-mono font-bold text-white tracking-wider">5275881766</span>
                </div>
                <button
                  onClick={() => handleCopy('5275881766', 'account')}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400/20 text-stone-300 hover:text-amber-300 border border-white/15 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  {copiedAccount ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Telegram Confirmation Action */}
            <div className="p-4 rounded-xl bg-black/70 border border-amber-400/25 space-y-3">
              <p className="text-xs text-stone-300 leading-relaxed">
                After completing your payment, send your proof directly to the official VELORA Telegram desk with pre-filled message:
              </p>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>CONTINUE TO TELEGRAM</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: TASKS WORKSPACE (For Active Users) */}
      {activeModal === 'tasks' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-semibold text-white">Daily Tasks Workspace</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {[
                { id: 't-1', title: 'Daily Platform Check-in & Stream Sync', reward: '₦1,500' },
                { id: 't-2', title: 'Share VELORA Promotional Flyer on WhatsApp Status', reward: '₦2,000' },
                { id: 't-3', title: 'Engage Partner Video & Post Verified Review', reward: '₦2,500' },
              ].map((t) => {
                const isDone = completedTasks.includes(t.id);
                const isLoading = taskInProgress === t.id;
                return (
                  <div key={t.id} className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">{t.title}</p>
                      <span className="text-xs font-mono text-amber-300">Reward: {t.reward}</span>
                    </div>
                    <button
                      disabled={isDone || isLoading}
                      onClick={() => handleCompleteTask(t.id, t.reward)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isDone ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'btn-gold'
                      }`}
                    >
                      {isDone ? '✓ Completed' : isLoading ? 'Verifying...' : 'Claim Task'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: YOUTUBE ENGAGEMENT (For Active Users) */}
      {activeModal === 'youtube' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-rose-400" />
                <h3 className="text-base font-semibold text-white">YouTube Engagement Opportunities</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {[
                { id: 'yt-1', title: 'Velora Creator Ecosystem Overview', duration: '2 mins', reward: '₦2,500' },
                { id: 'yt-2', title: 'AI Automated Royalty Stream Guide', duration: '3 mins', reward: '₦2,500' },
                { id: 'yt-3', title: 'Fan Battle Highlight & Leaderboard Cashout', duration: '1 min', reward: '₦2,500' },
              ].map((yt) => {
                const isDone = completedTasks.includes(yt.id);
                const isLoading = taskInProgress === yt.id;
                return (
                  <div key={yt.id} className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                        <Play className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{yt.title}</p>
                        <p className="text-xs text-stone-400 font-mono">Time: {yt.duration} • <span className="text-amber-300 font-semibold">{yt.reward}</span></p>
                      </div>
                    </div>
                    <button
                      disabled={isDone || isLoading}
                      onClick={() => handleCompleteTask(yt.id, yt.reward)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isDone ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'btn-gold'
                      }`}
                    >
                      {isDone ? '✓ Verified' : isLoading ? 'Watching...' : 'Watch & Earn'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CONTENT ENGAGEMENT (For Active Users) */}
      {activeModal === 'content' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-semibold text-white">Content Engagement & Royalties</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300">
              Upload AI prompts, graphic flyers, or promotional artwork to claim ongoing ₦5,000 creator royalties.
            </p>

            <div className="p-6 rounded-xl border-2 border-dashed border-white/15 text-center space-y-3">
              <ImageIcon className="w-8 h-8 text-purple-400 mx-auto" />
              <p className="text-xs text-stone-400">Drag & drop your artwork or select file to upload</p>
              <button
                onClick={() => alert('Artwork uploaded! Royalty processing initialized.')}
                className="btn-gold px-4 py-2 text-xs font-semibold"
              >
                Upload File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: REFERRALS (For Active Users) */}
      {activeModal === 'referrals' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-semibold text-white">Affiliate Referral Link</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300">
              Earn <span className="text-amber-300 font-bold">₦5,000</span> for each creator who registers and activates using your custom link:
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-black border border-white/10">
              <span className="text-xs font-mono text-stone-300 truncate flex-1">
                {`https://veloraearnings.com.ng/?ref=${userId.toLowerCase()}`}
              </span>
              <button
                onClick={() => handleCopy(`https://veloraearnings.com.ng/?ref=${userId.toLowerCase()}`, 'referral')}
                className="btn-gold px-3 py-1.5 text-xs font-semibold shrink-0"
              >
                {copiedReferral ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: FAN BATTLE ZONE */}
      {activeModal === 'fan_battle' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                <h3 className="text-base font-semibold text-white">Fan Battle Zone</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300">
              Vote for weekly featured creators and compete for leaderboard cash prizes.
            </p>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-stone-400">Current Prize Pool:</span>
                <span className="text-amber-300 font-bold">₦250,000.00</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-stone-400">Next Distribution:</span>
                <span className="text-white font-medium">Sunday 20:00 GMT</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ACADEMY */}
      {activeModal === 'academy' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-semibold text-white">VELORA Academy</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300">
              Access creator masterclasses, automation strategies, and prompt engineering tutorials.
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs">
                <span>Module 1: Maximizing Daily Video Streams</span>
                <span className="text-emerald-400 font-mono">Unlocked</span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs">
                <span>Module 2: AI Graphic Royalties Framework</span>
                <span className="text-emerald-400 font-mono">Unlocked</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: COMMUNITY */}
      {activeModal === 'community' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-semibold text-white">VELORA Community</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300">
              Join thousands of active verified creators in our official community channel.
            </p>

            <a
              href="https://t.me/VELORA_COACHREAL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Join Official Telegram Hub</span>
            </a>
          </div>
        </div>
      )}

      {/* MODAL: WITHDRAWALS */}
      {activeModal === 'withdraw' && isAccountActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-semibold text-white">Request Balance Payout</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <span className="text-xs text-stone-300">Available to Withdraw:</span>
              <span className="text-lg font-bold text-emerald-400 font-display">{stats.availableBalance}</span>
            </div>

            <form onSubmit={handleWithdrawSubmit} className="space-y-3">
              <div>
                <label className="text-xs text-stone-400 block mb-1">Enter Amount (₦)</label>
                <input
                  type="number"
                  placeholder="e.g. 50000"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={withdrawSuccess}
                className="btn-gold w-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
              >
                {withdrawSuccess ? 'Processing...' : 'Submit Withdrawal Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
