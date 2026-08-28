import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';
import { MorphLoader } from './MorphLoader';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  onRegisterSuccess?: (userData: { fullName: string; email: string; phoneNumber: string }) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  onRegisterSuccess,
}) => {
  // Form input states
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Password visibility toggle states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Field validation error states
  const [errors, setErrors] = useState<{
    fullName?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset form whenever modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setShowPassword(false);
      setShowConfirmPassword(false);
      setErrors({});
      setHasSubmitted(false);
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Validation function
  const validate = (values: {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const errs: {
      fullName?: string;
      phoneNumber?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    // 1. Full Name validation
    if (!values.fullName.trim()) {
      errs.fullName = 'Full Name cannot be empty.';
    } else if (values.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your complete full name.';
    }

    // 2. Phone Number validation
    if (!values.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number cannot be empty.';
    } else if (values.phoneNumber.trim().length < 6) {
      errs.phoneNumber = 'Please enter a valid phone number.';
    }

    // 3. Email Address validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      errs.email = 'Email Address cannot be empty.';
    } else if (!emailRegex.test(values.email.trim())) {
      errs.email = 'Please enter a valid email format (e.g. name@example.com).';
    }

    // 4. Password validation
    if (!values.password) {
      errs.password = 'Password cannot be empty.';
    } else if (values.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    // 5. Confirm Password validation
    if (!values.confirmPassword) {
      errs.confirmPassword = 'Confirm Password cannot be empty.';
    } else if (values.password !== values.confirmPassword) {
      errs.confirmPassword = 'Password and Confirm Password must match.';
    }

    return errs;
  };

  const handleInputChange = (
    field: 'fullName' | 'phoneNumber' | 'email' | 'password' | 'confirmPassword',
    value: string
  ) => {
    const updatedValues = {
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      [field]: value,
    };

    if (field === 'fullName') setFullName(value);
    if (field === 'phoneNumber') setPhoneNumber(value);
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);
    if (field === 'confirmPassword') setConfirmPassword(value);

    // If user has already attempted submission, validate in real-time
    if (hasSubmitted) {
      const errs = validate(updatedValues);
      setErrors(errs);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const validationErrors = validate({
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    });

    setErrors(validationErrors);

    // Proceed only when all required fields are completely valid
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);

        const userData = {
          fullName: fullName.trim(),
          email: email.trim(),
          phoneNumber: phoneNumber.trim(),
          isLoggedIn: true,
          status: 'inactive' as const,
        };

        // Save session in localStorage
        try {
          localStorage.setItem('velora_user', JSON.stringify({
            ...userData,
            registeredAt: new Date().toISOString(),
            isLoggedIn: true,
            status: 'inactive',
          }));
        } catch (e) {
          // ignore storage quota error
        }

        if (onRegisterSuccess) {
          onRegisterSuccess(userData);
        }

        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 1200);
      }, 1000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
    >
      <div
        className="relative w-full max-w-md rounded-3xl velora-glass p-6 sm:p-8 text-left space-y-6 text-[#f6f2fb] border border-white/15 bg-gradient-to-b from-[#120a22]/95 via-[#080412]/98 to-black shadow-2xl my-6 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors z-20"
          aria-label="Close registration dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-medium text-white">
                Account Created Successfully
              </h3>
              <p className="text-xs text-stone-300">
                Welcome to Velora, <span className="text-white font-medium">{fullName}</span>!
              </p>
            </div>
            <p className="text-xs text-amber-300 font-mono pt-2">
              Loading your creator dashboard experience...
            </p>
          </div>
        ) : isLoading ? (
          <div className="py-16 text-center flex flex-col items-center justify-center space-y-4 animate-fadeIn">
            <MorphLoader size="md" />
            <div className="space-y-1">
              <p className="text-sm font-display text-white font-medium">Creating Your Velora Account</p>
              <p className="text-xs text-stone-400">Securing your profile and initializing session...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5 animate-fadeIn">
            {/* Header Layout */}
            <div className="text-center space-y-2 pt-1 pr-6 pl-6">
              {/* VELORA LOGO / WORDMARK */}
              <div className="font-display text-2xl sm:text-3xl tracking-widest text-white font-medium">
                VELORA
              </div>

              {/* HEADLINE */}
              <h2
                id="registration-title"
                className="text-lg sm:text-xl font-display text-white font-medium tracking-tight"
              >
                CREATE YOUR VELORA ACCOUNT
              </h2>

              {/* SUBTITLE */}
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Join Velora and unlock the opportunities available to you.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-1">
              {/* 1. FULL NAME */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-stone-200 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                    errors.fullName
                      ? 'border-rose-500/80 focus:border-rose-400 bg-rose-950/10'
                      : 'border-white/10 focus:border-amber-400'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* 2. PHONE NUMBER */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-stone-200 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                    errors.phoneNumber
                      ? 'border-rose-500/80 focus:border-rose-400 bg-rose-950/10'
                      : 'border-white/10 focus:border-amber-400'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* 3. EMAIL ADDRESS */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-stone-200 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-rose-500/80 focus:border-rose-400 bg-rose-950/10'
                      : 'border-white/10 focus:border-amber-400'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* 4. PASSWORD 🔑 */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-stone-200 flex items-center justify-between">
                  <span>Password 🔑</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Create a password"
                    className={`w-full pl-4 pr-10 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                      errors.password
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
                {errors.password && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* 5. CONFIRM PASSWORD */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-stone-200 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                    className={`w-full pl-4 pr-10 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-stone-500 focus:outline-none transition-colors ${
                      errors.confirmPassword
                        ? 'border-rose-500/80 focus:border-rose-400 bg-rose-950/10'
                        : 'border-white/10 focus:border-amber-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-200 transition-colors"
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-3.5 h-3.5" />
                    ) : (
                      <Eye className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-[11px] text-rose-400 font-normal mt-0.5">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* 6. REGISTER BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>REGISTER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 17. LOGIN CONNECTION */}
              <div className="text-center pt-2 pb-1">
                <p className="text-xs text-stone-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenLogin();
                    }}
                    className="text-amber-300 hover:text-amber-200 font-semibold uppercase tracking-wider underline underline-offset-2 ml-1 transition-colors"
                  >
                    LOGIN
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

export default RegistrationModal;
