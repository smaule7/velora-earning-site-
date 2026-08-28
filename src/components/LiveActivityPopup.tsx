import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export type ActivityType = 'registration' | 'payout';

export interface ActivityNotification {
  id: string;
  type?: ActivityType;
  name: string; // e.g. "Samuel T.", "John", "Blessing E."
  planName?: string; // e.g. "Golden AI Package", "Silver AI Package"
  amount: string; // e.g. "₦14,500", "₦9,500"
  timestamp?: string;
  actionText?: string;
  isDemo?: boolean;
}

interface LiveActivityPopupProps {
  activities?: ActivityNotification[];
}

export const DEFAULT_ACTIVITIES: ActivityNotification[] = [
  {
    id: 'act-1',
    type: 'registration',
    name: 'Samuel T.',
    planName: 'Golden AI Package',
    amount: '₦14,500',
    actionText: 'Just registered and activated Golden AI Package',
    timestamp: 'Just now',
  },
  {
    id: 'act-2',
    type: 'payout',
    name: 'John',
    amount: '₦15,000',
    actionText: 'Just got paid ₦15,000',
    timestamp: 'Just now',
    isDemo: true,
  },
  {
    id: 'act-3',
    type: 'registration',
    name: 'Blessing E.',
    planName: 'Silver AI Package',
    amount: '₦9,500',
    actionText: 'Just registered and activated Silver AI Package',
    timestamp: '1m ago',
  },
  {
    id: 'act-4',
    type: 'payout',
    name: 'Chinedu O.',
    amount: '₦25,000',
    actionText: 'Just got paid ₦25,000',
    timestamp: '2m ago',
    isDemo: true,
  },
  {
    id: 'act-5',
    type: 'registration',
    name: 'David C.',
    planName: 'Golden AI Package',
    amount: '₦14,500',
    actionText: 'Just registered and activated Golden AI Package',
    timestamp: 'Just now',
  },
  {
    id: 'act-6',
    type: 'payout',
    name: 'Favour N.',
    amount: '₦18,500',
    actionText: 'Just got paid ₦18,500',
    timestamp: '3m ago',
    isDemo: true,
  },
  {
    id: 'act-7',
    type: 'registration',
    name: 'Blessing O.',
    planName: 'Silver AI Package',
    amount: '₦9,500',
    actionText: 'Just registered and activated Silver AI Package',
    timestamp: 'Just now',
  },
  {
    id: 'act-8',
    type: 'payout',
    name: 'Amarachi U.',
    amount: '₦30,000',
    actionText: 'Just got paid ₦30,000',
    timestamp: '4m ago',
    isDemo: true,
  },
  {
    id: 'act-9',
    type: 'registration',
    name: 'Michael E.',
    planName: 'Golden AI Package',
    amount: '₦14,500',
    actionText: 'Just registered and activated Golden AI Package',
    timestamp: 'Just now',
  },
  {
    id: 'act-10',
    type: 'payout',
    name: 'Emmanuel C.',
    amount: '₦22,000',
    actionText: 'Just got paid ₦22,000',
    timestamp: '5m ago',
    isDemo: true,
  },
];

export const LiveActivityPopup: React.FC<LiveActivityPopupProps> = ({ activities = DEFAULT_ACTIVITIES }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Filter valid activities list
  const activeList = activities && activities.length > 0 ? activities : DEFAULT_ACTIVITIES;

  useEffect(() => {
    if (isDismissed || activeList.length === 0) return;

    let isMounted = true;
    let visibilityTimeout: NodeJS.Timeout;
    let cycleInterval: NodeJS.Timeout;

    // 1. Initial short delay before first popup shows
    const initialDelay = setTimeout(() => {
      if (!isMounted) return;
      setIsVisible(true);

      // Stay visible for 5 seconds
      visibilityTimeout = setTimeout(() => {
        if (!isMounted) return;
        setIsVisible(false);
      }, 5000);
    }, 1500);

    // 2. Loop continuously:
    // Visible for 5.0 seconds -> Slide out / hidden for 1.8 seconds -> Next notification slides in
    // Total cycle period = 6.8 seconds
    cycleInterval = setInterval(() => {
      if (!isMounted) return;

      // Ensure hidden state before swapping index
      setIsVisible(false);

      setTimeout(() => {
        if (!isMounted) return;
        // Advance to next activity in database
        setCurrentIndex((prev) => (prev + 1) % activeList.length);
        setIsVisible(true);

        // Hide after 5 seconds
        visibilityTimeout = setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(false);
        }, 5000);
      }, 600); // 600ms gap for smooth slide-out transition before slide-in

    }, 7400);

    return () => {
      isMounted = false;
      clearTimeout(initialDelay);
      clearTimeout(visibilityTimeout);
      clearInterval(cycleInterval);
    };
  }, [activeList.length, isDismissed]);

  if (isDismissed || activeList.length === 0) return null;

  const currentActivity = activeList[currentIndex] || activeList[0];
  const isPayout = currentActivity.type === 'payout' || currentActivity.actionText?.toLowerCase().includes('just got paid');

  return (
    <aside
      aria-label="Live Activity Notification"
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[9999] max-w-[340px] sm:max-w-sm pointer-events-auto transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-x-0 translate-y-0 opacity-100 scale-100'
          : '-translate-x-12 translate-y-2 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div 
        className="relative rounded-2xl p-3.5 sm:p-4 border border-purple-500/30 shadow-2xl shadow-black/90 backdrop-blur-2xl bg-[#0c061a]/95 text-left text-white flex items-start gap-3 group hover:border-purple-400/50 transition-colors"
      >
        {/* Smooth Green Circular Status Dot */}
        <div className="pt-1 shrink-0 flex items-center justify-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-md shadow-emerald-500/80"></span>
          </span>
        </div>

        {/* Notification Text Details */}
        <div className="flex-1 min-w-0 pr-4 space-y-1">
          {/* User Name & Top Row */}
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
              {currentActivity.name}
            </h4>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{isPayout ? 'Verified Payment' : 'Verified'}</span>
            </span>
          </div>

          {/* Conditional Display: Paid vs Registration */}
          {isPayout ? (
            /* PAID NOTIFICATION:
               🟢 John
               Just got paid ₦15,000
            */
            <div className="pt-0.5 space-y-0.5">
              <p className="text-xs sm:text-sm font-bold text-amber-300 font-display tracking-tight">
                {currentActivity.actionText || `Just got paid ${currentActivity.amount}`}
              </p>
              {currentActivity.isDemo && (
                <span className="text-[9px] text-stone-400 font-mono block">
                  Preview record • Processed via instant disbursement
                </span>
              )}
            </div>
          ) : (
            /* REGISTRATION NOTIFICATION:
               🟢 Samuel T.
               Just registered and activated Velora Gold Plan
               (₦14,500)
            */
            <div className="space-y-1">
              <p className="text-[11px] sm:text-xs text-stone-300 leading-snug">
                {currentActivity.actionText || `Just registered and activated ${currentActivity.planName || 'Velora Gold Plan'}`}
              </p>
              <div className="pt-0.5 flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-amber-300">
                  ({currentActivity.amount})
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
          title="Dismiss notification"
          aria-label="Dismiss notification"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};

export default LiveActivityPopup;
