import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, CheckCircle2, Crown, Sparkles } from 'lucide-react';
import { MorphLoader } from './MorphLoader';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
  onOpenActivation?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  initialMode = 'login', 
  onClose,
  onOpenActivation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1200);
    }, 1400);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-3xl velora-glass p-6 sm:p-8 text-left space-y-6 text-[#f6f2fb] border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="space-y-1">
            <span className="eyebrow-gold text-[10px] block">
              AUTHENTICATE
            </span>
            <h3 className="font-display text-xl font-medium text-[#f6f2fb]">
              Welcome Back to Velora
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#8e80a8] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#c9a24a]/20 text-[#c9a24a] border border-[#c9a24a]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-medium text-[#f6f2fb]">
              Authenticated Successfully
            </h4>
            <p className="text-xs text-[#b6a8cc]">
              Loading your creator dashboard session...
            </p>
          </div>
        ) : isLoading ? (
          <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
            <MorphLoader size="md" />
            <p className="text-sm font-display text-white">Verifying credentials...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#b6a8cc]">Email or Username</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#8e80a8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="creator@velora.io"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-[#c9a24a] text-xs text-white placeholder-[#786a92] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs text-[#b6a8cc]">Password</label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[11px] text-amber-300/80 hover:text-amber-300">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8e80a8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-[#c9a24a] text-xs text-white placeholder-[#786a92] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-3 text-xs justify-center mt-4"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenActivation && (
              <div className="pt-4 mt-2 border-t border-white/[0.06] text-center space-y-2">
                <p className="text-xs text-stone-400">
                  Don't have an activated account yet?
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenActivation();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>Activate Velora Account Now</span>
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

