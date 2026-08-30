import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FAQProps {
  onContactSupport: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onContactSupport }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'General',
      question: 'What is VELORA?',
      answer: 'VELORA is a digital platform offering opportunities to participate, create, learn, and earn through available VELORA activities including AI prompt creation, video engagement, digital journalism reviews, matchday fan battles, and community programs.',
    },
    {
      id: 'faq-2',
      category: 'Registration',
      question: 'How do I create a VELORA account?',
      answer: 'Creating an account is quick and free. Click "Sign Up" anywhere on the site, provide your Full Name, valid Email Address, WhatsApp Phone Number, and choose a secure Password. You can immediately access your account dashboard.',
    },
    {
      id: 'faq-3',
      category: 'Dashboard',
      question: 'How do I access my dashboard?',
      answer: 'You can access your member dashboard at https://veloraearnings.com.ng/login using your registered email and password. Your dashboard displays your task history, current wallet balance, available campaigns, and account settings.',
    },
    {
      id: 'faq-4',
      category: 'Activation',
      question: 'How does account activation work?',
      answer: 'To unlock earning features, task submissions, and bank payouts, complete a one-time package activation (Silver AI for ₦8,000 with ₦5,000 welcome credit or Golden AI for ₦12,000 with ₦8,000 welcome credit). There are no monthly subscription maintenance fees.',
    },
    {
      id: 'faq-5',
      category: 'Opportunities',
      question: 'What opportunities are available on VELORA?',
      answer: 'Available opportunities include Generative AI prompt tasks, YouTube creator video feedback, daily digital news curation, matchday fan battles, and community referral programs.',
    },
    {
      id: 'faq-6',
      category: 'Wallet & Balance',
      question: 'Where can I see my account balance?',
      answer: 'Your account balance is displayed live on your member dashboard. You can view total earnings, reward breakdowns by category, and your withdrawal-ready funds.',
    },
    {
      id: 'faq-7',
      category: 'Support',
      question: 'How do I contact VELORA support?',
      answer: 'You can contact official VELORA customer support by emailing support@veloraearnings.com.ng, joining our official Telegram channel at https://t.me/VELORA_COACHREAL, or submitting an inquiry via our Contact page.',
    },
    {
      id: 'faq-8',
      category: 'Withdrawals',
      question: 'How do Nigerian bank payouts work?',
      answer: 'Withdrawal requests are submitted directly through your dashboard. Funds are transferred in Nigerian Naira (NGN) to any commercial bank account (Moniepoint, GTBank, Zenith, Kuda, Access, etc.) within 1 to 24 hours.',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* Header */}
        <div
          className={`text-center space-y-3 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="eyebrow-gold">
            FREQUENTLY ASKED
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#f6f2fb] tracking-tight">
            Questions & Answers
          </h2>

          <p className="text-[#b6a8cc] text-sm sm:text-base max-w-xl mx-auto font-normal">
            Everything you need to know about navigating the Velora ecosystem, accounts, and activities.
          </p>
        </div>

        {/* Accordion List */}
        <div
          className={`space-y-3.5 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`velora-glass rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-white/[0.2] bg-white/[0.08]'
                    : 'border-white/[0.08] hover:border-white/[0.14]'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-medium text-[#f6f2fb]">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-white/[0.1] text-[#c9a24a] rotate-180'
                        : 'bg-white/[0.04] text-[#8e80a8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[#b6a8cc] text-sm sm:text-base leading-relaxed border-t border-white/[0.06]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Bar */}
        <div
          className={`velora-glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="space-y-1">
            <p className="font-display text-sm font-semibold text-[#f6f2fb]">Still have questions?</p>
            <p className="text-xs text-[#8e80a8]">Our support team and pioneer channels are available to assist.</p>
          </div>

          <button
            onClick={onContactSupport}
            className="btn-ghost py-2 px-4 text-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </button>
        </div>

      </div>
    </section>
  );
};
