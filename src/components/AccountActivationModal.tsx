import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Send,
  User,
  Mail,
  Phone,
  Building2,
  CreditCard,
  Crown,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { MorphLoader } from './MorphLoader';

interface AccountActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'silver_ai' | 'golden_ai' | 'silver' | 'golden' | 'platinum' | 'gold';
  onOpenLogin?: () => void;
  onRegisteredUser?: (user: { name: string; planName: string; amount: string }) => void;
}

type FlowStep = 'registration' | 'morph_loader' | 'payment' | 'telegram_confirmation';

export const AccountActivationModal: React.FC<AccountActivationModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'silver_ai',
  onOpenLogin,
  onRegisteredUser,
}) => {
  // Normalize initial plan
  const normalizePlan = (p: string): 'silver_ai' | 'golden_ai' => {
    if (p === 'golden_ai' || p === 'golden' || p === 'gold') return 'golden_ai';
    return 'silver_ai';
  };

  // Step State
  const [step, setStep] = useState<FlowStep>('registration');

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'silver_ai' | 'golden_ai'>(normalizePlan(initialPlan));
  const [formError, setFormError] = useState('');

  // Payment Countdown Timer (120 seconds = 02:00)
  const [timeLeft, setTimeLeft] = useState(120);
  const [timerExpired, setTimerExpired] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Copy Feedback State
  const [copiedAccountNumber, setCopiedAccountNumber] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Account Details (Exact specifications)
  const paymentDetails = {
    accountNumber: '5275881766',
    accountName: 'CHIDINDU BLESSING IKECHUKWU',
    bankName: 'MONIEPOINT',
    amountSilverNaira: '₦9,500',
    amountGoldenNaira: '₦14,500',
  };

  const currentAmount = selectedPlan === 'golden_ai' ? paymentDetails.amountGoldenNaira : paymentDetails.amountSilverNaira;

  // Reset or initialize on modal open
  useEffect(() => {
    if (isOpen) {
      setStep('registration');
      setSelectedPlan(normalizePlan(initialPlan));
      setTimeLeft(120);
      setTimerExpired(false);
      setCopiedAccountNumber(false);
      setCopiedField(null);
      setFormError('');
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isOpen, initialPlan]);

  // Handle 8-Second Morphing Loading Animation Step
  useEffect(() => {
    let loaderTimer: NodeJS.Timeout;
    if (step === 'morph_loader' && isOpen) {
      // Exactly 8 seconds (8000ms) morphing animation
      loaderTimer = setTimeout(() => {
        setStep('payment');
        setTimeLeft(120);
        setTimerExpired(false);
      }, 8000);
    }
    return () => {
      if (loaderTimer) clearTimeout(loaderTimer);
    };
  }, [step, isOpen]);

  // Handle 2-Minute (120s) Countdown Timer during 'payment' step
  useEffect(() => {
    if (step === 'payment' && isOpen) {
      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setTimerExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [step, isOpen]);

  if (!isOpen) return null;

  // Formatter for MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Copy Account Number
  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(paymentDetails.accountNumber);
    setCopiedAccountNumber(true);
    setTimeout(() => {
      setCopiedAccountNumber(false);
    }, 2500);
  };

  // Generic Copy Handler
  const handleCopyField = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Form Submit Handler -> triggers 8-second morphing animation
  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setFormError('Please fill in all required fields to proceed.');
      return;
    }
    setFormError('');

    // Format safe public name: First name + last initial (e.g. Samuel O.)
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || 'User';
    const lastInitial = nameParts.length > 1 ? ` ${nameParts[nameParts.length - 1][0].toUpperCase()}.` : '';
    const safePublicName = `${firstName}${lastInitial}`;
    const planLabel = selectedPlan === 'golden_ai' ? 'Golden AI Package' : 'Silver AI Package';
    const amountLabel = selectedPlan === 'golden_ai' ? paymentDetails.amountGoldenNaira : paymentDetails.amountSilverNaira;

    if (onRegisteredUser) {
      onRegisteredUser({
        name: safePublicName,
        planName: planLabel,
        amount: amountLabel,
      });
    }

    // Hide form, start 8-second custom morphing animation
    setStep('morph_loader');
  };

  // Restart after timer expired or manual restart
  const handleRestart = () => {
    setTimeLeft(120);
    setTimerExpired(false);
    setStep('registration');
  };

  // "I HAVE MADE MY PAYMENT" clicked -> Show Telegram Submission confirmation step
  const handlePaymentConfirmed = () => {
    if (timerExpired) return;
    setStep('telegram_confirmation');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl velora-glass border border-white/15 rounded-3xl shadow-2xl p-5 sm:p-8 my-6 text-left text-[#f6f2fb] transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ========================================================================= */}
        {/* STAGE 1: REGISTRATION FORM */}
        {/* ========================================================================= */}
        {step === 'registration' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header */}
            <div className="pr-8 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-mono uppercase tracking-wider">
                <Crown className="w-3 h-3" />
                <span>Velora AI Package Registration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
                Get Registered
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Enter your details to create your creator profile and initialize your verified activation slot.
              </p>
            </div>

            {/* Plan Selector */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-black/50 border border-white/10">
              <button
                type="button"
                onClick={() => setSelectedPlan('silver_ai')}
                className={`py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                  selectedPlan === 'silver_ai'
                    ? 'bg-amber-400 text-black font-semibold shadow-md'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <span>Silver AI Package</span>
                <span className="font-mono text-[11px]">({paymentDetails.amountSilverNaira})</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlan('golden_ai')}
                className={`py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                  selectedPlan === 'golden_ai'
                    ? 'bg-amber-400 text-black font-semibold shadow-md'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Golden AI Package</span>
                <span className="font-mono text-[11px]">({paymentDetails.amountGoldenNaira})</span>
              </button>
            </div>

            {formError && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                {formError}
              </div>
            )}

            {/* Registration Form Fields */}
            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-stone-300 font-medium">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your legal full name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-stone-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-stone-300 font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-stone-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-stone-300 font-medium">Phone / WhatsApp Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-stone-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 text-xs sm:text-sm font-semibold justify-center shadow-lg shadow-amber-500/20 tracking-wider uppercase"
                >
                  <span>Submit & Proceed to Activation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {onOpenLogin && (
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenLogin();
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    Already registered? <span className="underline font-medium">Sign In to Dashboard</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 2: 8-SECOND MORPHING LOADING ANIMATION */}
        {/* ========================================================================= */}
        {step === 'morph_loader' && (
          <div className="py-20 sm:py-28 text-center flex flex-col items-center justify-center space-y-8 animate-fadeIn">
            {/* VELORA Wordmark (No separate V logo) */}
            <span className="font-display text-2xl sm:text-3xl font-medium tracking-widest text-white">
              VELORA
            </span>

            {/* Custom 6-Stage Morphing Animation Component (8-second continuous transform) */}
            <div className="py-4">
              <MorphLoader size="lg" />
            </div>

            {/* Subtle intentional status label */}
            <div className="space-y-1.5 max-w-sm px-4">
              <h3 className="text-lg sm:text-xl font-display text-white font-medium tracking-wide">
                Initializing Velora Activation Session
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Securing your allocated account details and synchronizing creator profile...
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 3: PAYMENT DETAILS & 2-MINUTE TIMER */}
        {/* ========================================================================= */}
        {step === 'payment' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header */}
            <div className="pr-8 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-mono uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3" />
                <span>Account Activation Payment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-medium">
                Make Your Payment
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Please make your payment of <span className="font-mono text-amber-300 font-semibold">{currentAmount}</span> using the displayed account details below to activate your account.
              </p>
            </div>

            {/* 2-MINUTE COUNTDOWN TIMER BLOCK */}
            <div className={`p-4 rounded-2xl border transition-all ${
              timerExpired 
                ? 'bg-rose-950/30 border-rose-500/40 text-rose-200' 
                : timeLeft < 30
                ? 'bg-amber-950/40 border-amber-500/50 text-amber-200 animate-pulse'
                : 'bg-amber-500/10 border-amber-400/30 text-amber-100'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    timerExpired ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 block">
                      Payment window
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white">
                      You have 2 minutes to make your payment.
                    </span>
                  </div>
                </div>

                <div className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight px-3 py-1 rounded-xl bg-black/60 border ${
                  timerExpired 
                    ? 'text-rose-400 border-rose-500/30' 
                    : 'text-amber-300 border-amber-400/40 shadow-inner'
                }`}>
                  {formatTime(timeLeft)}
                </div>
              </div>

              <p className="text-[11px] text-stone-400 mt-2.5 pt-2 border-t border-white/5 leading-normal">
                {timerExpired 
                  ? 'Your 2-minute payment window has expired. Please restart the process to generate a fresh activation session.'
                  : 'If payment is not made within 2 minutes, your account number will be reset.'
                }
              </p>
            </div>

            {/* GLASS-STYLE PAYMENT CARD */}
            <div className="p-5 sm:p-6 rounded-2xl bg-black/65 border border-white/15 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-semibold text-stone-300 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  Designated Bank Details
                </span>
                <span className="text-xs font-mono font-bold text-amber-300">
                  {currentAmount}
                </span>
              </div>

              {/* ACCOUNT NUMBER (PROMINENT) */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono text-amber-300/90 font-medium tracking-wider">
                    ACCOUNT NUMBER
                  </span>
                  <span className="text-[10px] uppercase font-mono text-stone-400">
                    Direct Transfer
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-widest">
                    {paymentDetails.accountNumber}
                  </span>
                </div>
              </div>

              {/* COPY ACCOUNT NUMBER BUTTON */}
              <button
                type="button"
                onClick={handleCopyAccountNumber}
                className="btn-gold w-full py-3 text-xs sm:text-sm font-semibold justify-center tracking-wider shadow-lg shadow-amber-500/15"
              >
                {copiedAccountNumber ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ACCOUNT NUMBER COPIED ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY ACCOUNT NUMBER</span>
                  </>
                )}
              </button>

              {/* ACCOUNT NAME & BANK NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Account Name */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block">
                    ACCOUNT NAME
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {paymentDetails.accountName}
                  </span>
                </div>

                {/* Bank Name */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block">
                    BANK
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {paymentDetails.bankName}
                  </span>
                </div>
              </div>
            </div>

            {/* Instruction Callout */}
            <p className="text-xs text-center text-stone-300">
              Please transfer <strong className="text-amber-300 font-mono">{currentAmount}</strong> to the Moniepoint account above, then click the confirmation button below.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3 pt-1">
              {timerExpired ? (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="btn-gold w-full py-3.5 text-sm font-semibold justify-center shadow-lg shadow-amber-500/20"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Restart Activation Process</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePaymentConfirmed}
                  className="btn-gold w-full py-3.5 text-xs sm:text-sm font-semibold justify-center tracking-wider uppercase shadow-lg shadow-amber-500/20"
                >
                  <span>I HAVE MADE MY PAYMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 4: TELEGRAM SUBMISSION CONFIRMATION */}
        {/* ========================================================================= */}
        {step === 'telegram_confirmation' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/35 text-amber-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 font-mono">
                  Payment Submission Logged
                </h3>
              </div>
              <p className="text-xs text-amber-100/90 pl-7 leading-relaxed">
                Your registration for <span className="font-semibold text-white">{fullName}</span> has been queued. Complete the final verification step below.
              </p>
            </div>

            {/* Confirmation Instruction Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-black/65 border border-white/15 space-y-5 text-left shadow-2xl">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-amber-300 tracking-wider block">
                  Final Step • Confirmation Verification
                </span>
                <h3 className="text-xl sm:text-2xl font-display text-white font-medium">
                  Submit Payment Confirmation
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                  Please continue to Telegram and submit your payment confirmation receipt to our official Velora activation desk to verify your transaction and activate your account.
                </p>
              </div>

              {/* Summary of transaction info to send */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Registered Name:</span>
                  <span className="text-white font-medium">{fullName}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Registered Email:</span>
                  <span className="text-white font-medium">{email}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Activation Amount:</span>
                  <span className="text-amber-300 font-mono font-semibold">{currentAmount}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Bank Paid To:</span>
                  <span className="text-white font-medium">MONIEPOINT (5275881766)</span>
                </div>
              </div>

              {/* CONTINUE TO TELEGRAM BUTTON */}
              {(() => {
                const telegramMessage = "Hello VELORA Admin, I have successfully completed my registration payment. Kindly review and confirm my payment proof so my account can be activated. Thank you";
                const telegramUrl = `https://t.me/VELORA_COACHREAL?text=${encodeURIComponent(telegramMessage)}`;
                return (
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full py-4 text-xs sm:text-sm font-semibold justify-center tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-amber-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>CONTINUE TO TELEGRAM</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                  </a>
                );
              })()}
            </div>

            {/* Bottom auxiliary controls */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setStep('payment')}
                className="text-xs text-stone-400 hover:text-stone-200 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>View Payment Details Again</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-stone-300 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountActivationModal;
