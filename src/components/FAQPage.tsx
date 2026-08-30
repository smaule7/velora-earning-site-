import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronDown, ChevronUp, HelpCircle, ArrowRight, ShieldCheck, Zap, Terminal } from 'lucide-react';

interface FAQPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onNavigate: (view: string) => void;
  onOpenContact: () => void;
}

const EXTENDED_FAQS = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Velora Earnings?',
    answer: 'Velora Earnings is a digital platform and creator monetization ecosystem that connects online users with reward-eligible activities including AI prompt creation, video reviews, digital news reading, and community sports challenges with direct bank payouts.',
  },
  {
    id: 'faq-2',
    category: 'Operation',
    question: 'How does Velora Earnings work?',
    answer: 'Velora Earnings operates in 5 clear steps: 1) Create an account, 2) Choose an activation package to access features, 3) Complete eligible daily activities, 4) Monitor task verification and wallet balances, and 5) Submit withdrawal requests to receive funds directly in your bank account.',
  },
  {
    id: 'faq-3',
    category: 'Registration',
    question: 'How do I sign up for Velora Earnings?',
    answer: 'To sign up for Velora Earnings, visit https://veloraearnings.com.ng/signup, provide your full name, email address, WhatsApp phone number, and password, select your preferred activation tier (Silver AI or Golden AI), and complete registration to access your member dashboard.',
  },
  {
    id: 'faq-4',
    category: 'Eligibility',
    question: 'Who can use Velora Earnings?',
    answer: 'Anyone aged 18 years or older with an internet-connected smartphone or computer, a valid email address, and a Nigerian commercial bank account (or supported digital payment method) can register and participate on Velora Earnings.',
  },
  {
    id: 'faq-5',
    category: 'Features',
    question: 'What features does Velora Earnings provide?',
    answer: 'Velora Earnings provides AI prompt & asset upload tools, YouTube creator media optimization tasks, verified digital news curation rewards, Matchday Fan Battle sports derbies, and an automated Nigerian bank withdrawal gateway.',
  },
  {
    id: 'faq-6',
    category: 'Account Access',
    question: 'How do I access my account?',
    answer: 'You can access your account anytime by visiting https://veloraearnings.com.ng/login and entering your registered email address and password. If you encounter issues, contact support@veloraearnings.com.ng.',
  },
  {
    id: 'faq-7',
    category: 'Fees',
    question: 'Are there any fees to join Velora Earnings?',
    answer: 'Velora Earnings offers two transparent one-time activation packages: the Silver AI Tier at ₦8,000 (which includes ₦5,000 welcome credit and standard earning tools) and the Golden AI Tier at ₦12,000 (which includes ₦8,000 welcome credit, priority Fan Battles, and enhanced tools). There are no recurring monthly maintenance subscription fees.',
  },
  {
    id: 'faq-8',
    category: 'Payouts',
    question: 'How do payments or withdrawals work on Velora Earnings?',
    answer: 'Withdrawals are requested through your member dashboard once your balance reaches the minimum payout threshold (₦10,000 for affiliate balances or task milestone criteria). Payouts are transferred in Nigerian Naira (NGN) directly to Moniepoint, GTBank, Zenith Bank, Access Bank, Kuda, or any commercial bank in Nigeria within 1 to 24 hours.',
  },
  {
    id: 'faq-9',
    category: 'Conditions',
    question: 'What should I know before joining Velora Earnings?',
    answer: 'Earnings on Velora Earnings depend strictly on active task completion, engagement, and verified participation. Earnings are not passive or automatically guaranteed without completing eligible activities. Always review our Terms and Privacy Policy before joining.',
  },
  {
    id: 'faq-10',
    category: 'Support',
    question: 'How do I contact Velora Earnings support?',
    answer: 'You can contact official support by emailing support@veloraearnings.com.ng, through the contact form at https://veloraearnings.com.ng/contact, or via official verified platform representatives.',
  }
];

export const FAQPage: React.FC<FAQPageProps> = ({ onBackToHome, onOpenJoin, onNavigate, onOpenContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-2': true, 'faq-3': true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = EXTENDED_FAQS.filter(
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
        <span className="text-amber-300">Velora Earnings FAQs</span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4 text-left border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
          Frequently Asked Questions About Velora Earnings
        </h1>
        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
          Find direct, verified answers to common questions about Velora Earnings: how the platform works, account registration, available features, activation fees, and Nigerian bank withdrawals.
        </p>

        {/* Live Search Input */}
        <div className="pt-4 max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Velora Earnings FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </header>

      {/* Accordion Questions */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/10 text-stone-400 text-sm">
            No questions matched your search query. Try another keyword or contact support.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0f071f] border-amber-400/30'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-display text-white font-medium">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full text-stone-400 transition-transform ${isOpen ? 'text-amber-300 rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed font-light border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Internal SEO Navigation Grid */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <h3 className="text-sm font-mono text-amber-300 uppercase tracking-wider">
          Quick Links
        </h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <button onClick={() => onNavigate('signup')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Sign Up for Velora Earnings
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            How Velora Earnings Works
          </button>
          <button onClick={() => onNavigate('features')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Platform Features
          </button>
          <button onClick={() => onNavigate('about')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            About Velora Earnings
          </button>
          <button onClick={() => onNavigate('contact')} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors">
            Contact Support
          </button>
        </div>
      </section>

      {/* Need Help Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 via-amber-500/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <h3 className="text-base sm:text-lg font-display text-white font-medium">Still have questions about Velora Earnings?</h3>
          <p className="text-xs text-stone-300">Our customer support and creator community representatives are available 24/7.</p>
        </div>
        <button
          onClick={onOpenContact}
          className="btn-gold text-xs sm:text-sm px-6 py-3 shrink-0 flex items-center gap-2"
        >
          <span>Contact Official Support</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
