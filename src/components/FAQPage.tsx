import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronDown, ChevronUp, HelpCircle, ArrowRight, ShieldCheck, Zap, Terminal, Mail, MessageSquare } from 'lucide-react';

interface FAQPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
  onOpenContact: () => void;
}

export const VELORA_FAQS = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is VELORA?',
    answer: 'VELORA is a digital platform and creator ecosystem that offers opportunities to participate, create, learn, and earn through available activities such as AI prompt creation, video engagement, digital journalism reviews, matchday fan battles, and community programs.',
  },
  {
    id: 'faq-2',
    category: 'Registration',
    question: 'How do I create a VELORA account?',
    answer: 'You can create a free account by visiting https://veloraearnings.com.ng/signup or clicking "Sign Up" on the website. Enter your Full Name, valid Email Address, WhatsApp Phone Number, and a secure Password. Once submitted, your member profile is created immediately.',
  },
  {
    id: 'faq-3',
    category: 'Dashboard',
    question: 'How do I access my dashboard?',
    answer: 'You can access your member dashboard at any time by visiting https://veloraearnings.com.ng/login and entering your registered email and password. Your dashboard gives you full control over your active tasks, wallet balances, notification updates, and account settings.',
  },
  {
    id: 'faq-4',
    category: 'Activation',
    question: 'How does account activation work?',
    answer: 'Account activation is a one-time process that unlocks full earning features, task submissions, and bank payouts. Members choose an activation tier: Silver AI (₦8,000, includes ₦5,000 welcome credit) or Golden AI (₦12,000, includes ₦8,000 welcome credit). Activation is paid via verified bank transfer or coupon vendor, with no recurring monthly subscription fees.',
  },
  {
    id: 'faq-5',
    category: 'Opportunities',
    question: 'What opportunities are available?',
    answer: 'VELORA offers multiple active opportunity streams including: Generative AI prompt submissions, YouTube creator video reviews, daily digital news curation, Matchday Fan Battle sports derbies, and optional affiliate referral programs.',
  },
  {
    id: 'faq-6',
    category: 'Wallet & Balance',
    question: 'Where can I see my account balance?',
    answer: 'Your account balance is visible directly on your member dashboard. It shows your combined earnings balance, breakdown by activity category, verified task credits, and available withdrawal balance in real-time.',
  },
  {
    id: 'faq-7',
    category: 'Support',
    question: 'How do I contact VELORA?',
    answer: 'You can contact official VELORA customer support by emailing support@veloraearnings.com.ng, joining our official Telegram channel at https://t.me/VELORA_COACHREAL, or submitting a message through the official Contact page at https://veloraearnings.com.ng/contact.',
  },
  {
    id: 'faq-8',
    category: 'Withdrawals',
    question: 'How do withdrawals to Nigerian banks work?',
    answer: 'Once your balance meets the withdrawal threshold (minimum ₦10,000 for affiliate balances or task milestone criteria), you can submit a withdrawal request from your dashboard. Payouts are sent directly in Nigerian Naira (NGN) to any commercial bank account (Moniepoint, GTBank, Zenith, Access, Kuda, etc.) within 1 to 24 hours.',
  },
  {
    id: 'faq-9',
    category: 'Transparency',
    question: 'Are earnings guaranteed on VELORA?',
    answer: 'Earnings on VELORA are strictly earned based on active task completion, skill application, and verified participation. Earnings are not passive or automatically guaranteed without completing eligible activities.',
  }
];

export const FAQPage: React.FC<FAQPageProps> = ({ onBackToHome, onOpenJoin, onNavigate, onOpenContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
    'faq-3': true,
    'faq-4': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = VELORA_FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <button onClick={onBackToHome} className="hover:text-amber-300 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-amber-300">VELORA FAQ</span>
      </nav>

      {/* Page Header with Semantic H1 */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help &amp; Questions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          VELORA FAQ — Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Find clear, verified answers to common questions about VELORA, account registration, dashboard access, account activation, earning opportunities, and withdrawals.
        </p>
      </header>

      {/* Live Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search questions (e.g. activation, dashboard, opportunities, contact)..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400/50 transition-colors text-sm"
        />
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-2">
            <p className="text-stone-300 text-sm">No matching questions found for "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-amber-300 underline underline-offset-2"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display text-white font-medium">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/5 text-stone-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-stone-300 leading-relaxed font-light border-t border-white/5 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0e071c] border border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase">
            <MessageSquare className="w-4 h-4" />
            <span>Need Additional Assistance?</span>
          </div>
          <h3 className="text-xl font-display text-white font-medium">Have a specific question about VELORA?</h3>
          <p className="text-xs text-stone-400 max-w-xl">
            Our official customer support desk is available to assist with account activation, technical questions, and verification.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="btn-ghost text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Support Desk</span>
        </button>
      </div>

      {/* Internal Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <button
          onClick={() => onNavigate('about')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">About VELORA</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Platform overview and mission.</p>
        </button>

        <button
          onClick={() => onNavigate('how-it-works')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">How It Works</span>
            <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">5-step guide to get started.</p>
        </button>

        <button
          onClick={() => onNavigate('opportunities')}
          className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 text-left transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-display text-white font-medium">Opportunities</span>
            <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-xs text-stone-400 mt-1">Explore active tasks and campaigns.</p>
        </button>
      </div>

    </div>
  );
};
