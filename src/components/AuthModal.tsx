import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { MorphLoader } from './MorphLoader';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
  onOpenRegister: () => void;
  onLoginSuccess?: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenRegister,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!email.trim()) {
      setEmailError('Please enter your email or username.');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      try {
        const existingData = localStorage.getItem('velora_user');
        let currentStatus: 'inactive' | 'active' = 'inactive';
        let existingName = email.split('@')[0] || 'Velora Creator';
        let existingPhone = '';

        if (existingData) {
          try {
            const parsed = JSON.parse(existingData);
            if (parsed.status) currentStatus = parsed.status;
            if (parsed.fullName) existingName = parsed.fullName;
            if (parsed.phoneNumber) existingPhone = parsed.phoneNumber;
          } catch (e) {
            // ignore
          }
        }

        localStorage.setItem('velora_user', JSON.stringify({
          fullName: existingName,
          email: email.trim(),
          phoneNumber: existingPhone,
          isLoggedIn: true,
          status: currentStatus,
          loggedInAt: new Date().toISOString(),
        }));
      } catch (e) {
        // ignore storage quota error
      }

      if (onLoginSuccess) {
        onLoginSuccess(email);
      }

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1200);
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div 
        className="relative w-full max-w-md rounded-3xl velora-glass p-6 sm:p-8 text-left space-y-6 text-[#f6f2fb] border border-white/15 bg-gradient-to-b from-[#120a22]/95 via-[#080412]/98 to-black shadow-2xl my-6 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors z-20"
          aria-label="Close login dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-medium text-white">
                Authenticated Successfully
              </h3>
              <p className="text-xs text-stone-300">
                Welcome back to your Velora dashboard.
              </p>
            </div>
            <p className="text-xs text-amber-300 font-mono pt-2">
              Loading your creator dashboard session...
            </p>
          </div>
        ) : isLoading ? (
          <div className="py-14 text-center flex flex-col items-center justify-center space-y-4 animate-fadeIn">
            <MorphLoader size="md" />
            <div className="space-y-1">
              <p className="text-sm font-display text-white font-medium">Verifying Credentials</p>
              <p className="text-xs text-stone-400">Connecting to secure Velora portal...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5 animate-fadeIn">
            {/* Header Layout */}
            <div className="text-center space-y-2 pt-1 pr-6 pl-6">
              <div className="font-display text-2xl sm:text-3xl tracking-widest text-white font-medium">
                VELORA
              </div>
              <h2
                id="login-title"
                className="text-lg sm:text-xl font-display text-white font-medium tracking-tight"
              >
                WELCOME BACK
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Sign in to access your creator dashboard and rewards.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-1">
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-stone-200 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="Enter your email address"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                      emailError
                        ? 'border-rose-500/80 focus:border-rose-400 bg-rose-950/10'
                        : 'border-white/10 focus:border-amber-400'
                    }`}
                  />
                </div>
                {emailError && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="space-y-1 text-left">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-stone-200 block">
                    Password 🔑
                  </label>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordError) setPasswordError('');
                    }}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-10 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                      passwordError
                        ? 'border-rose-500/80 focus:border-rose-400 bg-rose-950/10'
                        : 'border-white/10 focus:border-amber-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-200 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-3.5 h-3.5" />
                    ) : (
                      <Eye className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {passwordError}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>LOGIN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2 pb-1">
                <p className="text-xs text-stone-400">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenRegister();
                    }}
                    className="text-amber-300 hover:text-amber-200 font-semibold uppercase tracking-wider underline underline-offset-2 ml-1 transition-colors"
                  >
                    REGISTER
                  </button>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

