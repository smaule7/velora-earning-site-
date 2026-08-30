import React, { useState } from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  GraduationCap,
  Layers,
  Share2,
  Wallet,
  Settings,
  Lock,
  AlertCircle,
  CheckCircle2,
  Bell,
  X,
  LogOut,
  Copy,
  Check,
  Send,
  ExternalLink,
  CreditCard,
  Flame,
  MessageSquare,
  Menu,
  ChevronRight,
  Play,
  Image as ImageIcon,
  Gift,
  ClipboardList,
  Youtube,
  Sparkles,
  Users,
  ShieldCheck,
  ArrowRight,
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
  | 'welcome_reward'
  | 'settings';

type NavTabType =
  | 'dashboard'
  | 'earnings'
  | 'training'
  | 'assets'
  | 'network'
  | 'wallet'
  | 'settings';

export const UserDashboardPage: React.FC<UserDashboardPageProps> = ({
  currentUser,
  onBackToHome,
  onLogout,
}) => {
  const [currentNav, setCurrentNav] = useState<NavTabType>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [activeModal, setActiveModal] = useState<FeatureModalType>(null);
  const [attemptedFeatureName, setAttemptedFeatureName] = useState<string>('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Active user interaction states
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [taskInProgress, setTaskInProgress] = useState<string | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  const isAccountActive = currentUser?.status === 'active';
  const displayName = currentUser?.fullName || 'Velora Creator';
  const email = currentUser?.email || 'creator@veloraearnings.com.ng';
  const phoneNumber = currentUser?.phoneNumber || 'Not provided';

  // Real ID derived from registration date or user hash
  const userId = `VEL-${currentUser?.registeredAt ? currentUser.registeredAt.slice(2, 10).replace(/[-:T]/g, '') : '84920'}`;

  // Formatted registration date
  const registrationDate = currentUser?.registeredAt
    ? new Date(currentUser.registeredAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

  const initials =
    displayName
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
  const telegramUrl = `https://t.me/VELORA_COACHREAL?text=${encodeURIComponent(
    telegramPreFilledMessage
  )}`;

  // Earnings & Tools Statistics: Strictly ₦0.00 / 0 for inactive accounts
  const stats = isAccountActive
    ? {
        availableBalance: '₦62,000.00',
        earningsTotal: '₦85,500.00',
        trainingCount: '12 Courses',
        assetsCount: '18 Prompts',
        networkCount: '24 Referrals',
      }
    : {
        availableBalance: '₦0.00',
        earningsTotal: '₦0.00',
        trainingCount: '0',
        assetsCount: '0',
        networkCount: '0',
      };

  const handleFeatureClick = (featureId: FeatureModalType, featureName: string) => {
    if (!isAccountActive && featureId !== 'settings') {
      setAttemptedFeatureName(featureName);
      setActiveModal('inactive_alert');
    } else {
      setActiveModal(featureId);
    }
  };

  const handleNavClick = (navId: NavTabType, label: string) => {
    setMobileMenuOpen(false);
    if (navId === 'dashboard') {
      setCurrentNav('dashboard');
      return;
    }
    if (navId === 'settings') {
      setCurrentNav('settings');
      setActiveModal('settings');
      return;
    }
    if (!isAccountActive) {
      setAttemptedFeatureName(label);
      setActiveModal('inactive_alert');
      return;
    }
    setCurrentNav(navId);
    if (navId === 'training') setActiveModal('academy');
    else if (navId === 'network') setActiveModal('community');
    else if (navId === 'wallet') setActiveModal('withdraw');
    else if (navId === 'earnings') setActiveModal('tasks');
  };

  const handleCompleteTask = (taskId: string) => {
    setTaskInProgress(taskId);
    setTimeout(() => {
      setCompletedTasks((prev) => [...prev, taskId]);
      setTaskInProgress(null);
    }, 1500);
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || Number(withdrawAmount) <= 0) return;
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setActiveModal(null);
      setWithdrawAmount('');
    }, 1200);
  };

  const notifications = isAccountActive
    ? [
        {
          id: '1',
          title: 'Account Active',
          time: '10m ago',
          desc: 'Welcome! Your creator status is verified.',
        },
        {
          id: '2',
          title: 'YouTube Opportunities',
          time: '1h ago',
          desc: '4 new partner videos available to complete.',
        },
      ]
    : [
        {
          id: '1',
          title: 'Account Inactive',
          time: 'Just now',
          desc: 'Activate your VELORA account to unlock all earning tools.',
        },
        {
          id: '2',
          title: 'Account Created',
          time: 'Today',
          desc: 'Your VELORA account was created successfully.',
        },
      ];

  // Exact Sidebar Navigation Hierarchy
  const sidebarNavItems = [
    { id: 'dashboard' as NavTabType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'earnings' as NavTabType, label: 'Earnings', icon: TrendingUp },
    { id: 'training' as NavTabType, label: 'Training', icon: GraduationCap },
    { id: 'assets' as NavTabType, label: 'Assets', icon: Layers },
    { id: 'network' as NavTabType, label: 'Network', icon: Share2 },
    { id: 'wallet' as NavTabType, label: 'Wallet', icon: Wallet },
    { id: 'settings' as NavTabType, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="relative min-h-screen bg-[#07030e] text-stone-100 font-sans selection:bg-amber-500 selection:text-black flex w-full">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR (Desktop Fixed/Consistent) */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-[#0c0519] border-r border-white/10 sticky top-0 h-screen justify-between p-5 z-30 shadow-xl">
        {/* Top: VELORA Logo & Main Navigation */}
        <div className="space-y-7">
          {/* VELORA Logo */}
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 group text-left focus:outline-none px-2 py-1"
            title="Return to VELORA Home"
          >
            <span className="font-display font-bold tracking-widest text-2xl text-white group-hover:text-amber-200 transition-colors">
              VELORA
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
          </button>

          {/* Navigation Menu */}
          <nav className="space-y-1.5">
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              const isSelected = currentNav === item.id;
              const isLocked = !isAccountActive && item.id !== 'dashboard' && item.id !== 'settings';

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.label)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-400/20 to-purple-600/20 text-amber-200 border border-amber-400/30 font-semibold shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? 'text-amber-300' : 'text-stone-400 group-hover:text-stone-200'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {isLocked && (
                    <Lock className="w-3 h-3 text-stone-500" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom of Sidebar: User Profile & Logout */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/50 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/30 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-sm shrink-0">
              {initials}
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="text-xs font-semibold text-white truncate">{displayName}</p>
              <p className="text-[11px] text-stone-400 font-mono truncate">{email}</p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-rose-500/15 text-stone-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/30 text-xs font-mono transition-colors"
            title="Log Out and return to homepage"
          >
            <LogOut className="w-3.5 h-3.5 text-rose-400" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT AREA & MOBILE HEADER */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen relative z-10 bg-[#07030e]">
        
        {/* Mobile Navigation Header */}
        <header className="lg:hidden sticky top-0 z-40 bg-[#0c0519]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-stone-300 hover:text-white border border-white/10"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button onClick={onBackToHome} className="flex items-center gap-1.5 focus:outline-none">
              <span className="font-display font-bold text-lg text-white">VELORA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 rounded-lg bg-white/5 text-stone-300 border border-white/10 relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" />
            </button>

            <button
              onClick={onLogout}
              className="p-2 rounded-lg bg-white/5 text-rose-300 border border-white/10"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative w-72 max-w-[85vw] bg-[#0c0519] border-r border-white/15 p-5 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-left duration-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-xl text-white">VELORA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1.5">
                  {sidebarNavItems.map((item) => {
                    const Icon = item.icon;
                    const isSelected = currentNav === item.id;
                    const isLocked = !isAccountActive && item.id !== 'dashboard' && item.id !== 'settings';

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id, item.label)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-amber-400/15 text-amber-200 border border-amber-400/30 font-semibold'
                            : 'text-stone-300 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-stone-400" />
                          <span>{item.label}</span>
                        </div>
                        {isLocked && <Lock className="w-3.5 h-3.5 text-stone-500" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Profile & Logout */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-black/40 border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-xs">
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-xs font-semibold text-white truncate">{displayName}</p>
                    <p className="text-[10px] text-stone-400 font-mono truncate">{email}</p>
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono flex items-center justify-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Dropdown Modal */}
        {notificationsOpen && (
          <div className="fixed top-16 right-4 sm:right-6 w-80 max-w-[90vw] rounded-2xl bg-[#110722] border border-white/15 p-4 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 text-left">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Notifications
              </span>
              <button
                onClick={() => setNotificationsOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="divide-y divide-white/5 max-h-60 overflow-y-auto">
              {notifications.map((n) => (
                <div key={n.id} className="py-2.5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-white">{n.title}</p>
                    <span className="text-[10px] text-stone-500 font-mono">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-stone-300 leading-relaxed">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================================= */}
        {/* MAIN DASHBOARD CONTENT (Clean Structure & Hierarchy) */}
        {/* ======================================================================= */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
          
          {/* ===================================================================== */}
          {/* SECTION 1: TOP DASHBOARD HEADER */}
          {/* ===================================================================== */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 border-b border-white/10">
            <div className="text-left space-y-1">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Dashboard
              </h1>
              <p className="text-sm text-stone-300 font-light">
                Welcome back to your Velora account
              </p>
            </div>

            {/* Logged in User Badge (Real user details) */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl text-left self-start sm:self-auto">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-purple-600/30 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold text-sm shrink-0">
                {initials}
              </div>
              <div className="text-left min-w-0">
                <div className="text-xs font-semibold text-white truncate max-w-[180px]">{displayName}</div>
                <div className="text-[11px] text-stone-400 font-mono truncate max-w-[180px]">{email}</div>
                <div className="text-[10px] text-amber-300 font-mono font-medium">ID: {userId}</div>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SECTION 2: AVAILABLE BALANCE */}
          {/* ===================================================================== */}
          <section className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#130728] to-[#0c051a] border border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Wallet className="w-7 h-7" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Available Balance
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {stats.availableBalance}
                  </span>
                  {!isAccountActive && (
                    <span className="text-xs font-mono text-stone-500">(Pending Activation)</span>
                  )}
                </div>
              </div>
            </div>

            {isAccountActive ? (
              <button
                onClick={() => setActiveModal('withdraw')}
                className="btn-gold px-5 py-2.5 text-xs font-semibold shrink-0"
              >
                Withdraw Funds
              </button>
            ) : (
              <button
                onClick={() => setActiveModal('payment_details')}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Locked</span>
              </button>
            )}
          </section>

          {/* ===================================================================== */}
          {/* SECTION 3: ACCOUNT STATUS */}
          {/* ===================================================================== */}
          <section className="p-5 sm:p-6 rounded-2xl bg-[#140827] border border-amber-400/30 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0 mt-0.5">
                <AlertCircle className="w-6 h-6 text-amber-300" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-stone-300">
                    Account Status
                  </h2>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${
                      isAccountActive
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1'
                    }`}
                  >
                    {!isAccountActive && <Lock className="w-2.5 h-2.5" />}
                    <span>{isAccountActive ? 'ACTIVE' : 'INACTIVE'}</span>
                  </span>
                </div>
                <p className="text-sm text-stone-200 leading-relaxed font-light">
                  {isAccountActive
                    ? 'Your VELORA account is active. All earning tools, video streams, and withdrawal gateways are verified.'
                    : 'Your account is currently inactive. Activate your account to unlock available VELORA tools.'}
                </p>
              </div>
            </div>

            {!isAccountActive ? (
              <button
                onClick={() => setActiveModal('payment_details')}
                className="btn-gold px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 shrink-0 w-full md:w-auto shadow-lg hover:shadow-amber-400/20"
              >
                <CreditCard className="w-4 h-4" />
                <span>Activate Account</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveModal('withdraw')}
                className="btn-gold px-5 py-2.5 text-xs font-semibold shrink-0"
              >
                Manage Wallet
              </button>
            )}
          </section>

          {/* ===================================================================== */}
          {/* SECTION 4: ACTIVATION DETAILS */}
          {/* ===================================================================== */}
          <section className="p-5 sm:p-6 rounded-2xl bg-[#0d061c] border border-white/10 shadow-sm space-y-4 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Account Activation
                </span>
                <h3 className="text-base font-display font-semibold text-white">
                  Your Activation Details
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                ID: {userId}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block font-mono">Plan:</span>
                <span className="text-white font-semibold text-sm">
                  {isAccountActive ? 'Active Plan' : 'Inactive'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block font-mono">Activation Fee:</span>
                <span className="text-amber-200 font-semibold text-sm">
                  {isAccountActive ? 'Paid' : 'Pending'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block font-mono">Payment Status:</span>
                <span
                  className={`font-semibold text-sm ${
                    isAccountActive ? 'text-emerald-400' : 'text-amber-300'
                  }`}
                >
                  {isAccountActive ? 'Confirmed' : 'Pending'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block font-mono">Registration Date:</span>
                <span className="text-white font-mono text-sm">{registrationDate}</span>
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 5: WELCOME REWARD (Clickable Banner) */}
          {/* ===================================================================== */}
          <section
            onClick={() => {
              if (!isAccountActive) {
                setAttemptedFeatureName('Welcome Reward');
                setActiveModal('inactive_alert');
              } else {
                setActiveModal('welcome_reward');
              }
            }}
            className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-[#160a2c] to-amber-900/20 border border-amber-400/25 hover:border-amber-400/50 shadow-sm transition-all duration-150 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0 group-hover:scale-105 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                    Welcome Reward
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full border border-amber-400/30">
                    ₦5,000.00
                  </span>
                </div>
                <p className="text-xs text-stone-300 font-light">
                  {isAccountActive
                    ? 'Your ₦5,000 welcome credit has been unlocked into your available balance.'
                    : 'Claim your ₦5,000 Welcome Bonus upon activating your VELORA account.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-amber-300 shrink-0 group-hover:translate-x-1 transition-transform">
              <span>{isAccountActive ? 'View Credit' : 'Claim on Activation'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 6: YOUR TOOLS (Reference Grid Hierarchy) */}
          {/* ===================================================================== */}
          <section className="space-y-4 text-left">
            <div className="space-y-0.5">
              <h2 className="text-lg font-display font-semibold text-white">
                Your Tools
              </h2>
              <p className="text-xs text-stone-400 font-light">
                Access your core earning suite, training modules, and digital community.
              </p>
            </div>

            {/* Primary Reference 4 Tool Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Tool 1: Earnings */}
              <div
                onClick={() => handleFeatureClick('tasks', 'Earnings')}
                className="p-5 rounded-2xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-amber-400/30 transition-all duration-150 flex flex-col justify-between shadow-sm cursor-pointer min-h-[140px] group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    {!isAccountActive && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        <Lock className="w-2.5 h-2.5 text-amber-400" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                    Earnings
                  </h3>
                  <p className="text-xl font-display font-bold text-white tracking-tight">
                    {stats.earningsTotal}
                  </p>
                </div>
                <p className="text-[11px] text-stone-400 pt-2 border-t border-white/5">
                  View your income and rewards.
                </p>
              </div>

              {/* Tool 2: Training */}
              <div
                onClick={() => handleFeatureClick('academy', 'Training')}
                className="p-5 rounded-2xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-blue-400/30 transition-all duration-150 flex flex-col justify-between shadow-sm cursor-pointer min-h-[140px] group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    {!isAccountActive && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        <Lock className="w-2.5 h-2.5 text-amber-400" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors">
                    Training
                  </h3>
                  <p className="text-xl font-display font-bold text-white tracking-tight">
                    {stats.trainingCount}
                  </p>
                </div>
                <p className="text-[11px] text-stone-400 pt-2 border-t border-white/5">
                  Access skill-building programs.
                </p>
              </div>

              {/* Tool 3: Assets */}
              <div
                onClick={() => handleFeatureClick('content', 'Assets')}
                className="p-5 rounded-2xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-purple-400/30 transition-all duration-150 flex flex-col justify-between shadow-sm cursor-pointer min-h-[140px] group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Layers className="w-4 h-4" />
                    </div>
                    {!isAccountActive && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        <Lock className="w-2.5 h-2.5 text-amber-400" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">
                    Assets
                  </h3>
                  <p className="text-xl font-display font-bold text-white tracking-tight">
                    {stats.assetsCount}
                  </p>
                </div>
                <p className="text-[11px] text-stone-400 pt-2 border-t border-white/5">
                  Manage your digital assets.
                </p>
              </div>

              {/* Tool 4: Network */}
              <div
                onClick={() => handleFeatureClick('referrals', 'Network')}
                className="p-5 rounded-2xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-emerald-400/30 transition-all duration-150 flex flex-col justify-between shadow-sm cursor-pointer min-h-[140px] group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Share2 className="w-4 h-4" />
                    </div>
                    {!isAccountActive && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        <Lock className="w-2.5 h-2.5 text-amber-400" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-200 transition-colors">
                    Network
                  </h3>
                  <p className="text-xl font-display font-bold text-white tracking-tight">
                    {stats.networkCount}
                  </p>
                </div>
                <p className="text-[11px] text-stone-400 pt-2 border-t border-white/5">
                  Grow your community reach.
                </p>
              </div>
            </div>

            {/* Additional VELORA Earning Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {/* Feature 1: Tasks */}
              <div
                onClick={() => handleFeatureClick('tasks', 'Tasks')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-amber-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <ClipboardList className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-amber-200">
                      Tasks
                    </h4>
                    <p className="text-xs text-stone-400">Complete available tasks.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>

              {/* Feature 2: YouTube */}
              <div
                onClick={() => handleFeatureClick('youtube', 'YouTube')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-rose-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-rose-200">
                      YouTube
                    </h4>
                    <p className="text-xs text-stone-400">Explore YouTube opportunities.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>

              {/* Feature 3: Content Engagement */}
              <div
                onClick={() => handleFeatureClick('content', 'Content Engagement')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-purple-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-purple-200">
                      Content Engagement
                    </h4>
                    <p className="text-xs text-stone-400">Participate in available content opportunities.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>

              {/* Feature 4: Referrals */}
              <div
                onClick={() => handleFeatureClick('referrals', 'Referrals')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-emerald-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-emerald-200">
                      Referrals
                    </h4>
                    <p className="text-xs text-stone-400">Explore referral opportunities.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>

              {/* Feature 5: Fan Battle Zone */}
              <div
                onClick={() => handleFeatureClick('fan_battle', 'Fan Battle Zone')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-orange-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-orange-200">
                      Fan Battle Zone
                    </h4>
                    <p className="text-xs text-stone-400">Participate in VELORA fan activities.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>

              {/* Feature 6: VELORA Academy */}
              <div
                onClick={() => handleFeatureClick('academy', 'VELORA Academy')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-blue-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-200">
                      VELORA Academy
                    </h4>
                    <p className="text-xs text-stone-400">Access training and learning opportunities.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>

              {/* Feature 7: Community */}
              <div
                onClick={() => handleFeatureClick('community', 'Community')}
                className="p-4 rounded-xl bg-[#0e071c] hover:bg-[#150a2b] border border-white/10 hover:border-cyan-400/30 transition-all duration-150 flex items-center justify-between cursor-pointer group sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200">
                      Community
                    </h4>
                    <p className="text-xs text-stone-400">Explore the VELORA community.</p>
                  </div>
                </div>
                {!isAccountActive ? (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-stone-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    <Lock className="w-2.5 h-2.5 text-amber-400" />
                    <span>Locked</span>
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                )}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 7: RECENT ACTIVITY */}
          {/* ===================================================================== */}
          <section className="p-5 sm:p-6 rounded-2xl bg-[#0e071c] border border-white/10 shadow-sm space-y-4 text-left">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-base font-display font-semibold text-white">
                Recent Activity
              </h3>
              <span className="text-xs font-mono text-stone-400">Account Log</span>
            </div>

            <div className="divide-y divide-white/5">
              {!isAccountActive ? (
                <>
                  {/* Event 1: Account Created */}
                  <div className="py-3.5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-white">Account Created</p>
                        <p className="text-xs text-stone-400">You successfully joined Velora.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-stone-500 shrink-0">
                      Today
                    </span>
                  </div>

                  {/* Event 2: Activation Pending */}
                  <div className="py-3.5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0 mt-0.5">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-white">Activation Pending</p>
                        <p className="text-xs text-stone-400">
                          Complete account activation to unlock your account.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-amber-300/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 shrink-0">
                      Today
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Event 1: Account Verified */}
                  <div className="py-3.5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-white">Account Activated</p>
                        <p className="text-xs text-stone-400">
                          Your creator membership and tools are fully unlocked.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      Verified
                    </span>
                  </div>

                  {/* Event 2: Account Created */}
                  <div className="py-3.5 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-white">Account Created</p>
                        <p className="text-xs text-stone-400">You successfully joined Velora.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-stone-500 shrink-0">
                      {registrationDate}
                    </span>
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      </div>

      {/* ========================================================================= */}
      {/* 8. MODALS & LOCKED STATE INTERACTIONS */}
      {/* ========================================================================= */}

      {/* MODAL: LOCKED INACTIVE ACCOUNT ALERT */}
      {activeModal === 'inactive_alert' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#110724] border border-amber-400/30 p-6 space-y-5 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
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

            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-white">
                Account Inactive
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Your account must be activated before you can access this feature.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => setActiveModal('payment_details')}
                className="btn-gold w-full py-3 text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <CreditCard className="w-4 h-4" />
                <span>Activate Account</span>
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-medium border border-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: PAYMENT DETAILS (Direct Transfer Details + Telegram Confirmation) */}
      {activeModal === 'payment_details' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0f071f] border border-amber-400/30 p-6 space-y-5 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-amber-300">
                <CreditCard className="w-5 h-5" />
                <h3 className="text-lg font-display font-semibold text-white">
                  Activate Account
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
                <span className="text-sm font-bold text-amber-200 font-display">
                  Chinedu Blessing Ikechukwu
                </span>
              </div>

              {/* Account Number */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono text-stone-400 block">Account Number:</span>
                  <span className="text-lg font-mono font-bold text-white tracking-wider">
                    5275881766
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('5275881766', 'account')}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-amber-400/20 text-stone-300 hover:text-amber-300 border border-white/15 text-xs font-mono flex items-center gap-1.5 transition-colors"
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
                After completing your payment, send your proof directly to the official VELORA Telegram desk with the pre-filled message:
              </p>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>CONTINUE TO TELEGRAM</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: WELCOME REWARD DETAILS */}
      {activeModal === 'welcome_reward' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-amber-400/30 p-6 space-y-4 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-semibold text-white">Welcome Reward</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-center space-y-1">
              <span className="text-xs font-mono text-stone-300 uppercase tracking-wider">Welcome Credit</span>
              <p className="text-3xl font-display font-bold text-amber-300">₦5,000.00</p>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Your welcome reward is active and automatically calculated in your VELORA creator profile balance.
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-medium border border-white/10"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MODAL: SETTINGS */}
      {activeModal === 'settings' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0f071f] border border-white/15 p-6 space-y-4 text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-semibold text-white">Account Settings</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block">Full Name:</span>
                <span className="text-white font-medium">{displayName}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block">Email Address:</span>
                <span className="text-white font-medium">{email}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block">Phone / WhatsApp:</span>
                <span className="text-white font-medium">{phoneNumber}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-stone-400 text-[11px] block">Security:</span>
                <span className="text-emerald-400 font-mono">256-bit TLS Protected</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-medium border border-white/10"
            >
              Close
            </button>
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
                      onClick={() => handleCompleteTask(t.id)}
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
                <h3 className="text-base font-semibold text-white">YouTube Engagement</h3>
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
                      onClick={() => handleCompleteTask(yt.id)}
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
                <h3 className="text-base font-semibold text-white">Content Engagement</h3>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300">
              Upload AI prompts, graphic flyers, or promotional artwork to claim verified creator royalties.
            </p>

            <div className="p-6 rounded-xl border-2 border-dashed border-white/15 text-center space-y-3">
              <ImageIcon className="w-8 h-8 text-purple-400 mx-auto" />
              <p className="text-xs text-stone-400">Drag & drop your artwork or select file to upload</p>
              <button
                onClick={() => alert('Artwork uploaded! Processing verification.')}
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
              Earn affiliate commissions when new members register and activate using your unique link:
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
              Vote for weekly matchday fixtures and share in community reward pools.
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
