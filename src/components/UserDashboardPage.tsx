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

  // --- Registration date (dynamic) ---
  const formatRegistrationDate = () => {
    if (!currentUser?.registeredAt) return 'Today';
    const d = new Date(currentUser.registeredAt);
    if (Number.isNaN(d.getTime())) return 'Today';
    const today = new Date();
    if (d.toDateString() === today.toDateString()) return 'Today';
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const planLabel = currentUser?.plan === 'golden_ai' ? 'Golden AI' : 'Silver AI';
  const planFee = currentUser?.plan === 'golden_ai' ? '₦14,500' : '₦9,500';

  // --- Activation details (dynamic) ---
  const activationDetails = [
    { label: 'Plan', value: isAccountActive ? planLabel : 'Inactive' },
    { label: 'Activation Fee', value: isAccountActive ? planFee : 'Inactive' },
    { label: 'Payment Status', value: isAccountActive ? 'Confirmed' : 'Pending' },
    { label: 'Registration Date', value: formatRegistrationDate() },
  ];

  // --- Primary tools (with live values) ---
  const primaryTools = [
    {
      id: 'withdraw' as FeatureModalType,
      title: 'Earnings',
      value: isAccountActive ? stats.availableBalance : '₦0.00',
      desc: 'View your income and rewards',
      icon: DollarSign,
      accent: 'text-emerald-400',
      accentBg: 'bg-emerald-500/10',
      accentBorder: 'border-emerald-500/20',
    },
    {
      id: 'academy' as FeatureModalType,
      title: 'Training',
      value: '0',
      desc: 'Access skill-building programs',
      icon: GraduationCap,
      accent: 'text-blue-400',
      accentBg: 'bg-blue-500/10',
      accentBorder: 'border-blue-500/20',
    },
    {
      id: 'content' as FeatureModalType,
      title: 'Assets',
      value: '0',
      desc: 'Manage your digital assets',
      icon: ImageIcon,
      accent: 'text-purple-400',
      accentBg: 'bg-purple-500/10',
      accentBorder: 'border-purple-500/20',
    },
    {
      id: 'referrals' as FeatureModalType,
      title: 'Network',
      value: '0',
      desc: 'Grow your community reach',
      icon: Users,
      accent: 'text-amber-300',
      accentBg: 'bg-amber-400/10',
      accentBorder: 'border-amber-400/20',
    },
  ];

  // --- Recent activity (real data where available) ---
  const recentActivity = isAccountActive
    ? [
        { title: 'Account Activated', desc: 'Your account is now active and unlocked', time: formatRegistrationDate(), icon: CheckCircle2, tone: 'text-emerald-400' },
        { title: 'Welcome Reward Claimed', desc: 'Your welcome reward has been credited', time: formatRegistrationDate(), icon: Sparkles, tone: 'text-amber-300' },
        { title: 'Account Created', desc: 'You successfully joined Velora', time: formatRegistrationDate(), icon: User, tone: 'text-stone-300' },
      ]
    : [
        { title: 'Account Created', desc: 'You successfully joined Velora', time: formatRegistrationDate(), icon: User, tone: 'text-stone-300' },
        { title: 'Welcome Reward', desc: 'Welcome reward available to claim', time: formatRegistrationDate(), icon: Sparkles, tone: 'text-amber-300' },
        { title: 'Activation Pending', desc: 'Complete payment to unlock your account', time: formatRegistrationDate(), icon: Clock, tone: 'text-rose-400' },
      ];

  // --- Sidebar navigation ---
  const navItems: { label: string; icon: React.ElementType; action: () => void }[] = [
    { label: 'Dashboard', icon: Activity, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Earnings', icon: DollarSign, action: () => handleCardClick('withdraw', 'Earnings') },
    { label: 'Training', icon: GraduationCap, action: () => handleCardClick('academy', 'Training') },
    { label: 'Assets', icon: ImageIcon, action: () => handleCardClick('content', 'Assets') },
    { label: 'Network', icon: Users, action: () => handleCardClick('referrals', 'Network') },
    { label: 'Wallet', icon: Wallet, action: () => handleCardClick('withdraw', 'Wallet') },
    { label: 'Settings', icon: Settings, action: () => setActiveModal('settings') },
  ];

  return (
    <div className="min-h-screen bg-[#07030e] text-stone-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* ========================================================================= */}
      {/* TOP BAR */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0b0517]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3">
          {/* LEFT: Brand */}
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

          {/* RIGHT: Status, Notifications, Profile, Logout */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {isAccountActive ? (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ACTIVE</span>
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-[10px] sm:text-[11px] font-mono font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>INACTIVE</span>
              </span>
            )}

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
      {/* SHELL: SIDEBAR + MAIN CONTENT */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-start gap-0 lg:gap-6 px-4 sm:px-6 lg:px-8 py-5">
        {/* ===================================================================== */}
        {/* SIDEBAR NAVIGATION + USER PROFILE */}
        {/* ===================================================================== */}
        <aside className="lg:sticky lg:top-[64px] w-full lg:w-60 shrink-0 mb-4 lg:mb-0">
          {/* Nav — horizontal scroll on mobile, vertical on desktop */}
          <nav className="rounded-xl bg-[#0e071c] border border-white/10 p-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.label === 'Dashboard';
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors shrink-0 lg:w-full ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-200 border border-amber-400/25'
                      : 'text-stone-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="mt-3 rounded-xl bg-[#0e071c] border border-white/10 p-4 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-sm shrink-0">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{displayName}</p>
                <p className="text-[11px] text-stone-400 truncate">{email}</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">Account ID</span>
              <span className="text-[11px] font-mono text-amber-300">{userId}</span>
            </div>
          </div>
        </aside>

        {/* ===================================================================== */}
        {/* MAIN CONTENT */}
        {/* ===================================================================== */}
        <main className="flex-1 min-w-0 space-y-5">
        {/* ======================================================================= */}
        {/* DASHBOARD HEADING */}
        {/* ======================================================================= */}
        <section className="space-y-1 text-left">
          <h1 className="text-2xl sm:text-3xl font-display text-white font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-stone-400">
            Welcome back to your Velora account
          </p>
        </section>

        {/* ======================================================================= */}
        {/* ACCOUNT STATUS */}
        {/* ======================================================================= */}
        {!isAccountActive ? (
          <section className="p-5 rounded-xl bg-[#130722] border border-amber-400/25 shadow-sm text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">Account Status</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      INACTIVE
                    </span>
                  </div>
                  <p className="text-sm text-stone-300 font-normal leading-relaxed max-w-lg">
                    Your account is currently inactive. Activate your account to unlock all earning tools on Velora.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModal('payment_details')}
                className="btn-gold px-5 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0 w-full sm:w-auto"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Activate Account</span>
              </button>
            </div>
          </section>
        ) : (
          <section className="p-5 rounded-xl bg-[#091512] border border-emerald-500/30 shadow-sm text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">Account Status</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-sm text-stone-300 font-normal leading-relaxed max-w-lg">
                    Your account is active. All Velora earning tools are fully unlocked and ready to use.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModal('withdraw')}
                className="btn-gold px-5 py-2.5 text-xs font-semibold shrink-0 w-full sm:w-auto"
              >
                Withdraw Funds
              </button>
            </div>
          </section>
        )}

        {/* ======================================================================= */}
        {/* YOUR ACTIVATION DETAILS */}
        {/* ======================================================================= */}
        <section className="rounded-xl bg-[#0e071c] border border-white/10 shadow-sm p-5 text-left space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <h2 className="text-sm font-semibold text-white">Your Activation Details</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {activationDetails.map((d) => (
              <div key={d.label} className="p-3.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 block mb-1">
                  {d.label}
                </span>
                <span
                  className={`text-sm font-semibold block truncate ${
                    d.label === 'Payment Status'
                      ? isAccountActive
                        ? 'text-emerald-400'
                        : 'text-amber-300'
                      : 'text-white'
                  }`}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* WELCOME REWARD */}
        {/* ======================================================================= */}
        <button
          onClick={() => (isAccountActive ? setActiveModal(null) : setActiveModal('payment_details'))}
          className="group w-full text-left p-5 rounded-xl bg-gradient-to-r from-[#1a1030] to-[#0e071c] border border-amber-400/25 hover:border-amber-400/50 shadow-sm transition-colors flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="p-3 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base font-semibold text-white">Welcome Reward</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-400/15 text-amber-300 border border-amber-400/25">
                  {isAccountActive ? 'Claimed' : 'Available'}
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {isAccountActive
                  ? 'Your welcome reward has been credited to your Velora account.'
                  : 'Claim your Velora welcome reward — activate your account to continue.'}
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-amber-300/70 group-hover:translate-x-1 transition-transform shrink-0" />
        </button>

        {/* ======================================================================= */}
        {/* YOUR TOOLS */}
        {/* ======================================================================= */}
        <section className="space-y-3 text-left">
          <div className="space-y-0.5">
            <h2 className="text-base sm:text-lg font-display font-semibold text-white">
              Your Tools
            </h2>
            <p className="text-xs text-stone-400">
              Access your earning tools and creator features across Velora.
            </p>
          </div>

          {/* Primary tools with live values */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {primaryTools.map((tool) => {
              const Icon = tool.icon;
              const locked = !isAccountActive;
              return (
                <button
                  key={tool.title}
                  onClick={() => handleCardClick(tool.id, tool.title)}
                  className="group p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-amber-400/30 text-left transition-all duration-150 flex flex-col justify-between shadow-sm active:scale-[0.99] focus:outline-none focus:ring-1 focus:ring-amber-400/40 min-h-[132px]"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${tool.accentBg} ${tool.accent} border ${tool.accentBorder}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {locked ? (
                      <Lock className="w-3.5 h-3.5 text-stone-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <div className="space-y-1 mt-3">
                    <span className={`text-xl sm:text-2xl font-display font-semibold tracking-tight block ${tool.accent}`}>
                      {tool.value}
                    </span>
                    <h3 className="text-sm font-semibold text-white">{tool.title}</h3>
                    <p className="text-[11px] text-stone-400 leading-relaxed line-clamp-2">{tool.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Additional Velora tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {opportunityCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id, card.title)}
                  className="group p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-amber-400/30 text-left transition-all duration-150 flex flex-col justify-between shadow-sm hover:shadow-md relative overflow-hidden focus:outline-none focus:ring-1 focus:ring-amber-400/40 active:scale-[0.99] min-h-[140px]"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${card.bgColor} ${card.color} border ${card.borderColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-amber-300/90 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                        {card.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2.5 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-amber-300 transition-colors">
                    <span className="flex items-center gap-1">
                      {!isAccountActive && <Lock className="w-3 h-3" />}
                      {isAccountActive ? 'Open Workspace' : 'Locked'}
                    </span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* RECENT ACTIVITY */}
        {/* ======================================================================= */}
        <section className="rounded-xl bg-[#0e071c] border border-white/10 shadow-sm p-5 text-left space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-300" />
            <h2 className="text-sm font-semibold text-white">Recent Activity</h2>
          </div>
          <div className="divide-y divide-white/5">
            {recentActivity.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/10 shrink-0 ${item.tone}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 shrink-0 pt-0.5">{item.time}</span>
                </div>
              );
            })}
          </div>
        </section>
        </main>
      </div>

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

      {/* MODAL: SETTINGS */}
      {activeModal === 'settings' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-300" />
                <h3 className="text-base font-semibold text-white">Account Settings</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/50 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-sm shrink-0">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{displayName}</p>
                <p className="text-[11px] text-stone-400 truncate">{email}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-stone-400">Phone Number</span>
                <span className="text-white font-medium">{phoneNumber}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-stone-400">Account ID</span>
                <span className="text-amber-300 font-mono">{userId}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-stone-400">Account Status</span>
                <span className={isAccountActive ? 'text-emerald-400 font-medium' : 'text-rose-300 font-medium'}>
                  {isAccountActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="w-full py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
