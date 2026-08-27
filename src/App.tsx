import React, { useState, useEffect } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WaysToEarn } from './components/WaysToEarn';
import { TopEarners } from './components/TopEarners';
import { AIUploadSection } from './components/AIUploadSection';
import { YouTubeEarningsSection } from './components/YouTubeEarningsSection';
import { NewsRewardsSection } from './components/NewsRewardsSection';
import { ContentEngagementSection } from './components/ContentEngagementSection';
import { FanBattleSection } from './components/FanBattleSection';
import { CloutAndReferralsSection } from './components/CloutAndReferralsSection';
import { CreatorDashboardPreview } from './components/CreatorDashboardPreview';
import { OpportunitiesGrid } from './components/OpportunitiesGrid';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { AccountActivationModal } from './components/AccountActivationModal';
import { ContactModal } from './components/ContactModal';
import { TermsModal } from './components/TermsModal';
import { FanBattleModal } from './components/FanBattleModal';
import { PromotionalFlyer, RewardCategoryItem, TopEarner, PlatformStats } from './types';
import { INITIAL_FLYERS, INITIAL_REWARD_RATES, INITIAL_TOP_EARNERS, INITIAL_STATS } from './data/veloraData';
import { LiveActivityPopup, ActivityNotification, DEFAULT_ACTIVITIES } from './components/LiveActivityPopup';

export const App: React.FC = () => {
  // Persistence state
  const [flyers, setFlyers] = useState<PromotionalFlyer[]>(() => {
    const saved = localStorage.getItem('velora_flyers_v3');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_FLYERS;
  });

  const [rewards, setRewards] = useState<RewardCategoryItem[]>(() => {
    const saved = localStorage.getItem('velora_rewards');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_REWARD_RATES;
  });

  const [topEarners, setTopEarners] = useState<TopEarner[]>(() => {
    const saved = localStorage.getItem('velora_top_earners');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_TOP_EARNERS;
  });

  const [stats, setStats] = useState<PlatformStats>(() => {
    const saved = localStorage.getItem('velora_stats');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_STATS;
  });

  // Real live activities from registration records
  const [activities, setActivities] = useState<ActivityNotification[]>(() => {
    const saved = localStorage.getItem('velora_live_activities');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_ACTIVITIES;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('velora_flyers_v3', JSON.stringify(flyers));
  }, [flyers]);

  useEffect(() => {
    localStorage.setItem('velora_rewards', JSON.stringify(rewards));
  }, [rewards]);

  useEffect(() => {
    localStorage.setItem('velora_top_earners', JSON.stringify(topEarners));
  }, [topEarners]);

  useEffect(() => {
    localStorage.setItem('velora_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('velora_live_activities', JSON.stringify(activities));
  }, [activities]);

  // Modal States
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [activationModalOpen, setActivationModalOpen] = useState(false);
  const [activationPlan, setActivationPlan] = useState<'platinum' | 'gold'>('platinum');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [fanBattleModalOpen, setFanBattleModalOpen] = useState(false);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    if (mode === 'signup') {
      setActivationPlan('platinum');
      setActivationModalOpen(true);
    } else {
      setAuthModalOpen(true);
    }
  };

  const handleOpenActivation = (plan: 'platinum' | 'gold' = 'platinum') => {
    setActivationPlan(plan);
    setActivationModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#06030c] text-stone-100 selection:bg-amber-500 selection:text-black overflow-x-hidden font-sans">
      {/* Background Ambient Atmosphere */}
      <CosmicBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Page Content */}
      <main id="home" className="relative z-10">
        {/* 1. HERO (with Dedicated Hero Artwork) */}
        <Hero
          onJoinClick={() => handleOpenAuth('signup')}
          onExploreClick={() => handleScrollToSection('ai-upload')}
          stats={stats}
        />

        {/* 2. AI UPLOAD (AI flyer/image) */}
        <AIUploadSection
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 3. YOUTUBE REWARDS (YouTube flyer/image) */}
        <YouTubeEarningsSection
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 4. VELORA NEWS (News flyer/image) */}
        <NewsRewardsSection
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 5. CONTENT ENGAGEMENT (Engagement flyer/image) */}
        <ContentEngagementSection
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 6. FAN BATTLE ZONE (Fan Battle flyer/image) */}
        <FanBattleSection
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 7. COMMUNITY & REFERRALS (Turn Clout into Cash) */}
        <CloutAndReferralsSection
          rewards={rewards}
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 8. TOP EARNERS (Verified USD Leaderboard) */}
        <TopEarners
          topEarners={topEarners}
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 9. WAYS TO EARN (Ecosystem Overview & Live Calculator) */}
        <WaysToEarn
          rewards={rewards}
          onOpenJoin={() => handleOpenAuth('signup')}
          onNavigateSection={handleScrollToSection}
        />

        {/* 10. CREATOR DASHBOARD AT A GLANCE */}
        <CreatorDashboardPreview
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 11. ACTIVE OPPORTUNITIES & TASKS */}
        <OpportunitiesGrid
          onOpenJoin={() => handleOpenAuth('signup')}
        />

        {/* 12. TESTIMONIALS & CREATOR PROOF */}
        <Testimonials />

        {/* 13. FREQUENTLY ASKED QUESTIONS */}
        <FAQ
          onContactSupport={() => setContactModalOpen(true)}
        />

        {/* 14. FINAL CALL TO ACTION */}
        <FinalCTA
          onJoin={() => handleOpenAuth('signup')}
          onExplore={() => handleScrollToSection('opportunities')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onOpenActivation={() => {
          setAuthModalOpen(false);
          handleOpenActivation('platinum');
        }}
      />

      {/* Account Activation Flow Modal (with 3-Dot MorphLoader, Naira Payment & 02:00 Countdown) */}
      <AccountActivationModal
        isOpen={activationModalOpen}
        initialPlan={activationPlan}
        onClose={() => setActivationModalOpen(false)}
        onOpenLogin={() => {
          setActivationModalOpen(false);
          setAuthModalOpen(true);
        }}
        onRegisteredUser={(user) => {
          const newActivity: ActivityNotification = {
            id: `reg-${Date.now()}`,
            name: user.name,
            planName: user.planName,
            amount: user.amount,
            actionText: `Just registered and activated ${user.planName}`,
            timestamp: 'Just now',
          };
          setActivities((prev) => [newActivity, ...prev.filter((a) => a.name !== user.name)]);
        }}
      />

      {/* Live Activity Rotating Popup Notifications */}
      <LiveActivityPopup activities={activities} />

      {/* Contact Support Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Terms & Privacy Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      {/* Fan Battle Quick Modal */}
      <FanBattleModal
        isOpen={fanBattleModalOpen}
        onClose={() => setFanBattleModalOpen(false)}
      />
    </div>
  );
};

export default App;
