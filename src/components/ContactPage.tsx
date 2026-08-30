import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, Clock, Building2, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
  onNavigate: (view: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">Contact Support</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Official Support Channels</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Contact VELORA Support
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Get in touch with the official VELORA customer support desk for help regarding account registration, package activation, payment confirmation, task questions, or general inquiries.
        </p>
      </header>

      {/* 2-Column Contact Info and Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Official Support Details */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
            <h2 className="text-xl font-display text-white font-medium">
              Official Communication Channels
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 font-mono block">Support Email</span>
                  <a href="mailto:support@veloraearnings.com.ng" className="text-white font-medium hover:text-amber-300 transition-colors">
                    support@veloraearnings.com.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-300 border border-blue-500/20 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 font-mono block">Official Telegram Channel</span>
                  <a
                    href="https://t.me/VELORA_COACHREAL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>@VELORA_COACHREAL</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 font-mono block">Support Desk Hours</span>
                  <span className="text-white font-medium">Monday – Saturday: 8:00 AM – 9:00 PM WAT</span>
                  <span className="text-stone-400 text-xs block">Sunday: 12:00 PM – 6:00 PM WAT</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 font-mono block">Official Banking Partner</span>
                  <span className="text-white font-medium">MONIEPOINT VELORA (5275881766)</span>
                  <span className="text-stone-400 text-xs block">Account Holder: CHIDINDU BLESSING IKECHUKWU</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e071c] border border-amber-400/20 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Anti-Scam Advisory</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Always verify that you are on the official website at <strong>https://veloraearnings.com.ng/</strong>. Never share your password or confidential account details with anyone claiming to be a VELORA representative outside official channels.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Ticket Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
          <h2 className="text-xl font-display text-white font-medium">
            Send a Support Ticket
          </h2>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-display text-white font-medium">Support Ticket Received</h3>
              <p className="text-xs text-stone-300 max-w-xs mx-auto">
                Thank you for contacting VELORA. An official support agent will review your inquiry and reply to your email shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono text-amber-300 hover:underline pt-2"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1 text-left">
                <label className="text-xs text-stone-300 font-mono">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Samuel Oboh"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs text-stone-300 font-mono">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs text-stone-300 font-mono">Subject / Category</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#130b24] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Account Activation Confirmation">Account Activation Confirmation</option>
                  <option value="Withdrawal & Payout Support">Withdrawal &amp; Payout Support</option>
                  <option value="Task Verification Assistance">Task Verification Assistance</option>
                  <option value="Affiliate Program Inquiry">Affiliate Program Inquiry</option>
                </select>
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs text-stone-300 font-mono">Message / Details</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe your question or issue in detail..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-3 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Submit Ticket</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Internal Navigation Links */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
          Quick Links
        </h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <button onClick={() => onNavigate('about')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            About VELORA
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How It Works
          </button>
          <button onClick={() => onNavigate('opportunities')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Opportunities
          </button>
          <button onClick={() => onNavigate('faqs')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            VELORA FAQs
          </button>
          <button onClick={() => onNavigate('packages')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Membership Packages
          </button>
        </div>
      </section>

    </div>
  );
};
