import React, { useEffect, useRef, useState } from 'react';
import { UserCheck, Zap, Compass, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TimelineStep } from '../types';

interface HowItWorksProps {
  onStepAction: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStepAction }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
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

  const steps: TimelineStep[] = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Initialize your profile',
      description: 'Create your free account and explore the ecosystem, customizing your focus across AI, creation, news, and sports.',
      details: [
        'Instant registration with secure unified identity',
        'Personalize your learning & content stream',
        'Access all platform experiences with one account',
      ],
      icon: 'user-check',
    },
    {
      number: '02',
      title: 'Participate',
      tagline: 'Engage with real activities',
      description: 'Take part in verified learning modules, reading publications, and joining live fan showdowns.',
      details: [
        'Explore curated daily news articles and analysis',
        'Represent your football club in live derbies',
        'Interact with verified creator releases',
      ],
      icon: 'zap',
    },
    {
      number: '03',
      title: 'Explore',
      tagline: 'Deepen AI & creator skills',
      description: 'Progress through our structured AI Academy curriculum and deploy high-impact video growth toolsets.',
      details: [
        'Step through 4-stage prompt & automation tracks',
        'Leverage audience growth and thumbnail suites',
        'Track engagement milestones in your dashboard',
      ],
      icon: 'compass',
    },
    {
      number: '04',
      title: 'Connect',
      tagline: 'Collaborate with pioneers',
      description: 'Become an active voice in creator guilds, collaborate across teams, and invite eligible peers.',
      details: [
        'Join global pioneer discussion channels',
        'Participate in community referral initiatives',
        'Build collaborative projects with other creators',
      ],
      icon: 'share',
    },
  ];

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'user-check': return <UserCheck className="w-5 h-5" />;
      case 'zap': return <Zap className="w-5 h-5" />;
      case 'compass': return <Compass className="w-5 h-5" />;
      case 'share': return <Share2 className="w-5 h-5" />;
      default: return <UserCheck className="w-5 h-5" />;
    }
  };

  const currentStep = steps[activeStep - 1];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div
          className={`text-center space-y-3 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="eyebrow-gold">
            THE PROGRESSION
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#f6f2fb] tracking-tight">
            How Velora Works
          </h2>

          <p className="text-[#b6a8cc] text-sm sm:text-base max-w-xl mx-auto font-normal">
            A clear, four-stage journey from first discovery to masterclass creator collaboration.
          </p>
        </div>

        {/* Step Selectors */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3.5 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isActive = activeStep === stepNum;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(stepNum)}
                className={`velora-glass rounded-2xl p-5 text-left transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'border-[#c9a24a]/60 bg-white/[0.08] shadow-sm'
                    : 'border-white/[0.08] hover:border-white/[0.16]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-[#c9a24a]/20 text-[#e6ca85]' : 'text-[#786a92] bg-white/[0.04]'
                  }`}>
                    STAGE {step.number}
                  </span>
                  <div className={isActive ? 'text-[#c9a24a]' : 'text-[#786a92]'}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <p className="font-display text-base font-semibold text-[#f6f2fb]">
                  {step.title}
                </p>
                <p className="text-xs text-[#b6a8cc] mt-0.5 font-normal truncate">
                  {step.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Physical Glass View */}
        <div
          className={`velora-glass rounded-3xl p-8 sm:p-12 transition-all duration-700 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="eyebrow-gold">
                  STAGE // 0{activeStep}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#f6f2fb]">
                  {currentStep.title} — {currentStep.tagline}
                </h3>
                <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="space-y-3 pt-2">
                {currentStep.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#f6f2fb]">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a24a] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onStepAction}
                  className="btn-gold"
                >
                  <span>Start Stage 0{activeStep}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Overview Frame */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#090514]/70 border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-[#8e80a8]">
                  <span>System Pipeline</span>
                  <span className="text-[#c9a24a] font-medium">Stage Active</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-[#b6a8cc]">Protocol Standard</span>
                    <span className="text-[#f6f2fb] font-medium">Unified Encrypted ID</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-[#b6a8cc]">Activity Telemetry</span>
                    <span className="text-[#f6f2fb] font-medium">Criteria-Based Milestones</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-[#b6a8cc]">Sync Standard</span>
                    <span className="text-[#f6f2fb] font-medium">Instant Multi-Device</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#786a92] leading-relaxed pt-1">
                  Every action, completed training milestone, and verified reading session updates your dashboard immediately.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
