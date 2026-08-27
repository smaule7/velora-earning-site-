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
      answer: 'VELORA is a unified digital ecosystem bringing together generative AI education, YouTube creator growth suites, news publications, football fan battle arenas, and community rewards under a single authenticated platform.',
    },
    {
      id: 'faq-2',
      category: 'Ecosystem',
      question: 'How do I participate in Velora experiences?',
      answer: 'Simply create your free Velora account. Once logged in, you can instantly navigate between the AI Academy masterclasses, engage with daily verified news, participate in fan derbies, and test creator tools from your central dashboard.',
    },
    {
      id: 'faq-3',
      category: 'Ecosystem',
      question: 'What does the Velora AI Academy offer?',
      answer: 'The AI Academy is structured across four continuous tracks: Learn (core generative models & prompts), Create (image, video, and audio generation), Promote (content pipelines and distribution), and Monetize (practical consulting, production, and workflows).',
    },
    {
      id: 'faq-4',
      category: 'Community',
      question: 'What are the Fan Battle challenges?',
      answer: 'Fan Battle is an interactive sports entertainment zone where supporters represent major football clubs (such as Real Madrid, Barcelona, Arsenal, and Manchester City) in weekly matchday derbies, community trivia, and live voting power showdowns.',
    },
    {
      id: 'faq-5',
      category: 'Rewards',
      question: 'How do creator and news activities work?',
      answer: 'Members can read curated digital articles and engage with verified media. Creators can access thumbnail heatmapping, title optimization, and audience retention toolsets, earning activity points based on criteria-based milestones.',
    },
    {
      id: 'faq-6',
      category: 'General',
      question: 'Is Velora free to join?',
      answer: 'Yes. Standard registration for Velora is completely free, providing immediate access to introductory AI modules, news publications, fan voting, and pioneer community channels.',
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
