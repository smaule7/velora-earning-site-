import React, { useEffect, useRef, useState } from 'react';
import { Bot, Newspaper, Play, Heart, Trophy, Users, ArrowRight, BookOpen, Layers, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface FeaturesGridProps {
  onOpenJoin: () => void;
  onSelectFanBattle: () => void;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ onOpenJoin, onSelectFanBattle }) => {
  const [academyStage, setAcademyStage] = useState<'learn' | 'create' | 'promote' | 'monetize'>('learn');

  // References for each section's IntersectionObserver
  const aiRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const youtubeRef = useRef<HTMLDivElement>(null);
  const engagementRef = useRef<HTMLDivElement>(null);
  const fanBattleRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  // States to track single-run reveal triggers
  const [aiRevealed, setAiRevealed] = useState(false);
  const [newsRevealed, setNewsRevealed] = useState(false);
  const [ytRevealed, setYtRevealed] = useState(false);
  const [engRevealed, setEngRevealed] = useState(false);
  const [fbRevealed, setFbRevealed] = useState(false);
  const [commRevealed, setCommRevealed] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.15 };

    const setupObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setRevealed: (val: boolean) => void
    ) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      }, observerOptions);
      obs.observe(ref.current);
      return obs;
    };

    const obs1 = setupObserver(aiRef, setAiRevealed);
    const obs2 = setupObserver(newsRef, setNewsRevealed);
    const obs3 = setupObserver(youtubeRef, setYtRevealed);
    const obs4 = setupObserver(engagementRef, setEngRevealed);
    const obs5 = setupObserver(fanBattleRef, setFbRevealed);
    const obs6 = setupObserver(communityRef, setCommRevealed);

    return () => {
      obs1?.disconnect();
      obs2?.disconnect();
      obs3?.disconnect();
      obs4?.disconnect();
      obs5?.disconnect();
      obs6?.disconnect();
    };
  }, []);

  const academyTracks = [
    { id: 'learn', name: 'Learn', icon: BookOpen, desc: 'Master foundational generative AI frameworks, prompt structures, and multi-modal models.', tag: 'Curriculum' },
    { id: 'create', name: 'Create', icon: Layers, desc: 'Generate high-fidelity digital art, automated video storyboards, and autonomous workflows.', tag: 'Tooling' },
    { id: 'promote', name: 'Promote', icon: Sparkles, desc: 'Deploy tailored content pipelines and organic distribution across major networks.', tag: 'Growth' },
    { id: 'monetize', name: 'Monetize', icon: Award, desc: 'Leverage AI skills for freelance consulting, production suites, and digital products.', tag: 'Commercial' },
  ];

  return (
    <div id="features" className="space-y-32 py-16 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
      
      {/* ========================================================================= */}
      {/* SECTION 1: AI ACADEMY (Split Layout: Left Artwork, Right Glass Panel) */}
      {/* ========================================================================= */}
      <section ref={aiRef} className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Large VELORA Academy Artwork (Slide from left) */}
          <div
            className={`lg:col-span-6 rounded-3xl overflow-hidden border border-white/[0.1] relative aspect-[4/3] bg-[#120824] shadow-2xl transition-all duration-1000 ${
              aiRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              alt="Velora AI Academy Artwork"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Atmosphere Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c051a]/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Badge overlay */}
            <div className="absolute bottom-5 left-5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#cbb8e8]">
              ACADEMY MODULES // V2.4
            </div>
          </div>

          {/* RIGHT: Premium Physical Glass Content Panel (Slide from right) */}
          <div
            className={`lg:col-span-6 velora-glass rounded-3xl p-8 sm:p-10 space-y-6 text-left transition-all duration-1000 ${
              aiRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 ${
                aiRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="eyebrow-gold">
                VELORA AI ACADEMY
              </span>
            </div>

            {/* Heading */}
            <div
              className={`transition-all duration-700 ${
                aiRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#f6f2fb] leading-tight">
                Structured training for creators who want to get serious
              </h3>
            </div>

            {/* Paragraph */}
            <div
              className={`transition-all duration-700 space-y-4 ${
                aiRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed font-normal">
                Master prompt engineering, multimodal model chains, autonomous video pipelines, and sustainable monetization tracks guided by hands-on creative curriculums.
              </p>

              {/* 4 Interactive Track Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {academyTracks.map((tr) => {
                  const Icon = tr.icon;
                  const isSel = academyStage === tr.id;
                  return (
                    <button
                      key={tr.id}
                      onClick={() => setAcademyStage(tr.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSel
                          ? 'bg-white/[0.1] border-[#c9a24a] text-[#f6f2fb]'
                          : 'bg-white/[0.03] border-white/[0.06] text-[#8e80a8] hover:text-[#f6f2fb]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 mb-1 ${isSel ? 'text-[#c9a24a]' : 'text-[#8e80a8]'}`} />
                      <p className="font-medium text-xs text-[#f6f2fb]">{tr.name}</p>
                      <p className="text-[10px] text-[#786a92] mt-0.5">{tr.tag}</p>
                    </button>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-[#b6a8cc]">
                <span className="font-medium text-[#f6f2fb]">Current focus: </span>
                {academyTracks.find((t) => t.id === academyStage)?.desc}
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`pt-2 transition-all duration-700 ${
                aiRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <button
                onClick={onOpenJoin}
                className="btn-gold"
              >
                <span>EXPLORE ACADEMY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: NEWS (Mirror Layout: Left Glass Panel, Right Large Artwork) */}
      {/* ========================================================================= */}
      <section ref={newsRef} className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Premium Glass Content Panel (Slide from left) */}
          <div
            className={`lg:col-span-6 velora-glass rounded-3xl p-8 sm:p-10 space-y-6 text-left order-2 lg:order-1 transition-all duration-1000 ${
              newsRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 ${
                newsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="eyebrow-gold">
                VELORA NEWS
              </span>
            </div>

            {/* Heading */}
            <div
              className={`transition-all duration-700 ${
                newsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#f6f2fb] leading-tight">
                Stay informed with curated community insights and verified reporting
              </h3>
            </div>

            {/* Paragraph */}
            <div
              className={`transition-all duration-700 space-y-3 ${
                newsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed font-normal">
                Engage with digital publications and daily briefings spanning AI, creative tech, and decentralized media. Verified readers earn recognition tied directly to sustained participation.
              </p>

              {/* Sample Briefings */}
              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-medium text-[#f6f2fb]">AI Frontiers & The Future of Creative Workflows</p>
                    <p className="text-[11px] text-[#786a92]">Curated Briefing • 4 min read</p>
                  </div>
                  <span className="text-[11px] font-mono text-[#c9a24a]">+15 Pts</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-medium text-[#f6f2fb]">Building High-Retention Digital Audiences</p>
                    <p className="text-[11px] text-[#786a92]">Ecosystem Report • 6 min read</p>
                  </div>
                  <span className="text-[11px] font-mono text-[#c9a24a]">+20 Pts</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`pt-2 transition-all duration-700 ${
                newsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <button
                onClick={onOpenJoin}
                className="btn-ghost"
              >
                <span>EXPLORE PUBLICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT: Large Artwork (Slide from right) */}
          <div
            className={`lg:col-span-6 rounded-3xl overflow-hidden border border-white/[0.1] relative aspect-[4/3] bg-[#120824] shadow-2xl order-1 lg:order-2 transition-all duration-1000 ${
              newsRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
              alt="Velora News Artwork"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c051a]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#cbb8e8]">
              DAILY CURATION // VERIFIED
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: YOUTUBE OPPORTUNITIES (Centered Editorial: Large Artwork + Overlapping Glass Panel) */}
      {/* ========================================================================= */}
      <section ref={youtubeRef} className="relative text-center">
        
        {/* Large Centered Artwork (Rises gently from below) */}
        <div
          className={`rounded-3xl overflow-hidden border border-white/[0.1] relative aspect-[21/9] max-h-[380px] w-full bg-[#120824] shadow-2xl transition-all duration-1000 ${
            ytRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
            alt="YouTube Creator Studio Artwork"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090514]/40 via-transparent to-[#090514]/90 pointer-events-none" />
        </div>

        {/* Overlapping Glass Information Panel (Follows & overlaps slightly) */}
        <div
          className={`relative -mt-16 sm:-mt-24 z-10 max-w-2xl mx-auto velora-glass rounded-3xl p-8 sm:p-10 space-y-6 text-center transition-all duration-1000 ${
            ytRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 ${
              ytRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="eyebrow-gold">
              YOUTUBE OPPORTUNITIES
            </span>
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-700 ${
              ytRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#f6f2fb] leading-tight">
              High-impact growth and monetization pipelines for video creators
            </h3>
          </div>

          {/* Paragraph */}
          <div
            className={`transition-all duration-700 space-y-4 ${
              ytRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed font-normal max-w-lg mx-auto">
              Access thumbnail contrast scoring, title hooks, algorithm retention metrics, and creator collaboration hubs to scale audience engagement.
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto pt-2 text-left">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs font-semibold text-[#f6f2fb]">Retention Insights</p>
                <p className="text-[11px] text-[#8e80a8] mt-0.5">Audience watch-curve optimization</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs font-semibold text-[#f6f2fb]">Thumbnail Suite</p>
                <p className="text-[11px] text-[#8e80a8] mt-0.5">High-contrast hook testing</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`pt-2 flex justify-center transition-all duration-700 ${
              ytRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={onOpenJoin}
              className="btn-gold"
            >
              <span>ACCESS CREATOR SUITE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CONTENT ENGAGEMENT (Side-by-Side: Smooth Mask Reveal on Artwork) */}
      {/* ========================================================================= */}
      <section ref={engagementRef} className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Large Artwork Area (Smooth clip-path mask reveal) */}
          <div
            className={`lg:col-span-6 rounded-3xl overflow-hidden border border-white/[0.1] relative aspect-[4/3] bg-[#120824] shadow-2xl transition-all duration-1000 ${
              engRevealed ? 'opacity-100 mask-left' : 'opacity-0'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
              alt="Content Engagement Studio Artwork"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c051a]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#cbb8e8]">
              LIVE ENGAGEMENT // REACTION FEED
            </div>
          </div>

          {/* Content Panel */}
          <div
            className={`lg:col-span-6 velora-glass rounded-3xl p-8 sm:p-10 space-y-6 text-left transition-all duration-1000 ${
              engRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 ${
                engRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="eyebrow-gold">
                CONTENT ENGAGEMENT
              </span>
            </div>

            {/* Heading */}
            <div
              className={`transition-all duration-700 ${
                engRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#f6f2fb] leading-tight">
                Turn passive audience into active participants
              </h3>
            </div>

            {/* Paragraph */}
            <div
              className={`transition-all duration-700 space-y-3 ${
                engRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <p className="text-[#b6a8cc] text-sm sm:text-base leading-relaxed font-normal">
                Interact with community content through real-time commentary, live session participation, and milestone-linked voting. Experience content as an interactive ecosystem rather than a one-way feed.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#c9a24a]" />
                  <span className="text-[#f6f2fb] font-medium">Active Participant Streams</span>
                </div>
                <span className="text-[#8e80a8] font-mono">Real-time Telemetry</span>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`pt-2 transition-all duration-700 ${
                engRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button
                onClick={onOpenJoin}
                className="btn-ghost"
              >
                <span>EXPLORE CONTENT TOOLS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FAN BATTLE ZONE (Strongest Visual: Full-Width Promotional Artwork + Settle Animation) */}
      {/* ========================================================================= */}
      <section ref={fanBattleRef} className="relative">
        <div
          className={`rounded-3xl overflow-hidden border border-white/[0.15] relative aspect-[16/9] md:aspect-[21/9] w-full bg-[#120824] shadow-2xl transition-all duration-1000 ${
            fbRevealed ? 'opacity-100 scale-settle' : 'opacity-0 scale-95'
          }`}
        >
          {/* Full-Width Promotional Stadium / Match Arena Image */}
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1800&q=80"
            alt="Fan Battle Zone Stadium Arena"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {/* Subtle Dark Gradient from Bottom Upward for Clean Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/70 to-transparent pointer-events-none" />

          {/* Content Placed Near Bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12 space-y-5 text-left">
            
            {/* Small Glass Stat Chips */}
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-[#f6f2fb] flex items-center gap-2">
                <span className="text-[#c9a24a]">CREATORS</span>
                <span className="font-semibold">128</span>
              </div>

              <div className="px-3.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-[#f6f2fb] flex items-center gap-2">
                <span className="text-[#c9a24a]">VOTES</span>
                <span className="font-semibold">12K</span>
              </div>
            </div>

            {/* Eyebrow & Heading */}
            <div className="space-y-1">
              <span className="eyebrow-gold">
                FAN BATTLE ZONE
              </span>
              <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-[#f6f2fb]">
                Derby Showdowns & Community Competitions
              </h3>
            </div>

            {/* Description & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl">
              <p className="text-[#b6a8cc] text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                Represent your football club in interactive matchday derbies, live power voting, and seasonal leaderboards.
              </p>

              <button
                onClick={onSelectFanBattle}
                className="btn-gold shrink-0"
              >
                <span>ENTER ARENA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: COMMUNITY & REFERRALS (Quietest Section, Calm Centered Composition) */}
      {/* ========================================================================= */}
      <section ref={communityRef} className="relative text-center py-8">
        
        {/* Centered Content */}
        <div
          className={`space-y-6 max-w-2xl mx-auto transition-all duration-1000 ${
            commRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <div>
            <span className="eyebrow-gold">
              COMMUNITY & REFERRALS
            </span>
          </div>

          {/* Large Heading */}
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f6f2fb] tracking-tight">
            A network built on mutual creator growth
          </h3>

          {/* Supporting Text */}
          <p className="text-[#b6a8cc] text-base sm:text-lg leading-relaxed font-normal">
            Join global pioneer guilds, exchange creative workflows, and collaborate on shared initiatives. Expand the ecosystem through transparent creator referrals.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <button
              onClick={onOpenJoin}
              className="btn-gold"
            >
              <span>JOIN THE COMMUNITY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Wide Supporting Artwork Underneath (Fades upward gently) */}
        <div
          className={`mt-14 rounded-3xl overflow-hidden border border-white/[0.08] relative aspect-[21/9] max-h-[340px] w-full bg-[#120824] shadow-2xl transition-all duration-1000 ${
            commRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Velora Creator Community Collaboration"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090514]/70 via-transparent to-transparent pointer-events-none" />
        </div>

      </section>

    </div>
  );
};
