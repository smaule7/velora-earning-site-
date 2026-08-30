import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Calendar, ArrowRight, Sparkles, CheckCircle2, User, Share2, Tag, ShieldCheck } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'how-velora-earnings-works-complete-guide',
    title: 'How Velora Earnings Works: Complete Guide for Creators in Nigeria',
    excerpt: 'An in-depth breakdown of how the Velora Earnings platform operates, how daily activities are structured, and how automated withdrawals are processed to Nigerian bank accounts.',
    category: 'Guides',
    readTime: '4 min read',
    date: 'August 28, 2026',
    author: 'Velora Earnings Editorial Team',
    content: [
      'The digital creator economy across Nigeria and Africa is growing rapidly. Velora Earnings was designed to provide a structured, accessible platform where creators, students, and digital workers can participate in genuine digital tasks and receive fair compensation.',
      'Unlike speculative schemes, Velora Earnings connects member tasks directly to authentic commercial and data curation needs. When members upload AI prompts, review YouTube media, or curate digital news digests, they contribute to real digital assets within the ecosystem.',
      'To get started, users create a free account, select an activation package (Silver AI or Golden AI), and access their member dashboard. All completed tasks are validated in real time by the Velora Linux cloud engine, and accumulated points or cash can be withdrawn directly to Moniepoint or any licensed Nigerian bank account.'
    ]
  },
  {
    id: 'post-2',
    slug: 'silver-ai-vs-golden-ai-package-comparison',
    title: 'Silver AI vs Golden AI Tier: Which Velora Earnings Package is Right for You?',
    excerpt: 'Compare the features, welcome bonuses, daily earning ceilings, and task allocations across the official Velora Earnings Silver AI and Golden AI creator packages.',
    category: 'Platform Tiers',
    readTime: '3 min read',
    date: 'August 24, 2026',
    author: 'Velora Earnings Support Team',
    content: [
      'When activating your Velora Earnings creator account, choosing the right tier depends on your daily schedule, skill level, and earning goals.',
      'The Silver AI Tier (₦8,000 one-time activation) is ideal for beginners and casual creators. It includes a ₦5,000 instant welcome bonus, ₦6,200 direct affiliate commission, access to 4-track AI Prompt training, YouTube video reviews, and digital journalism tasks.',
      'The Golden AI Tier (₦12,000 one-time activation) is crafted for dedicated digital earners. It offers a ₦8,000 welcome bonus, priority marketplace visibility for submitted AI assets, higher daily task limits, and entry into VIP Matchday Fan Battle prize pools.'
    ]
  },
  {
    id: 'post-3',
    slug: 'maximizing-daily-ai-prompt-and-youtube-rewards',
    title: 'How to Maximize Daily Task Completion on the Velora Earnings Platform',
    excerpt: 'Practical tips on crafting high-quality generative AI prompts, submitting accurate YouTube video reviews, and staying consistent with daily earning tasks.',
    category: 'Earnings Strategy',
    readTime: '5 min read',
    date: 'August 19, 2026',
    author: 'Velora Earnings Community Desk',
    content: [
      'Consistency and quality are the two most important factors for achieving steady rewards on Velora Earnings. The automated validation engine prioritizes thorough, high-quality submissions.',
      'For AI prompt uploads, ensure your prompts include clear subject descriptions, lighting, style cues, and negative parameters. High-performing prompts receive faster approval and bonus marketplace ratings.',
      'For YouTube media reviews and news curation, spend sufficient time reviewing the materials before submitting your assessment. Engaging actively with sports Fan Battle derbies on weekends also provides opportunities to share in community prize pools.'
    ]
  },
  {
    id: 'post-4',
    slug: 'understanding-velora-earnings-withdrawals-nigeria',
    title: 'Velora Earnings Withdrawal Guide: Bank Payout Windows and Timelines',
    excerpt: 'Everything you need to know about requesting payouts to Moniepoint, GTBank, Zenith, Access, Kuda, and OPay with zero hidden fees.',
    category: 'Payouts',
    readTime: '3 min read',
    date: 'August 15, 2026',
    author: 'Velora Finance & Compliance',
    content: [
      'Financial transparency is central to the Velora Earnings platform. Members have full visibility into their activity wallet and referral balance with detailed transaction logs.',
      'Affiliate earnings can be withdrawn during designated weekly payout windows, while non-referral activity points follow the bi-monthly withdrawal schedule once the threshold is reached.',
      'All payouts are wired electronically in Nigerian Naira (NGN) directly to the member’s submitted bank details, typically arriving within 2 to 4 hours of processing.'
    ]
  }
];

interface BlogPageProps {
  onBackToHome: () => void;
  onNavigate: (view: string) => void;
  onOpenJoin: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onNavigate, onOpenJoin }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-400">
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onBackToHome(); }} 
          className="hover:text-amber-300 transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Velora Earnings</span>
        </a>
        <span>/</span>
        {selectedPost ? (
          <>
            <button 
              onClick={() => setSelectedPost(null)}
              className="hover:text-amber-300 transition-colors"
            >
              Blog
            </button>
            <span>/</span>
            <span className="text-amber-300 line-clamp-1">{selectedPost.title}</span>
          </>
        ) : (
          <span className="text-amber-300">Blog</span>
        )}
      </nav>

      {/* Main Blog Header */}
      {!selectedPost && (
        <header className="space-y-4 text-left border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Insights &amp; Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display text-white font-normal tracking-tight">
            Velora Earnings Blog
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-3xl">
            Official announcements, educational tutorials, earning strategies, and platform updates from the Velora Earnings team.
          </p>
        </header>
      )}

      {/* Selected Post View */}
      {selectedPost ? (
        <article className="space-y-8 max-w-3xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Velora Earnings Articles</span>
          </button>

          <header className="space-y-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {selectedPost.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-display text-white font-medium leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 pt-1">
              <User className="w-3.5 h-3.5 text-amber-300" />
              <span>By {selectedPost.author}</span>
            </div>
          </header>

          <div className="space-y-6 text-stone-300 font-light leading-relaxed text-base">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-display text-white font-medium">Ready to start with Velora Earnings?</h3>
              <p className="text-xs text-stone-400">Create your verified creator account and begin your journey.</p>
            </div>
            <button 
              onClick={onOpenJoin}
              className="btn-gold px-5 py-2.5 text-xs font-semibold shrink-0 flex items-center gap-1.5"
            >
              <span>Sign Up for Velora Earnings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      ) : (
        /* Blog Post Listing Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-display text-white font-medium group-hover:text-amber-300 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-stone-300 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>{post.date}</span>
                <span className="text-amber-300 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Internal Navigation Links */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4 text-stone-300 text-sm">
        <h2 className="text-lg font-display text-white font-medium">
          Explore Velora Earnings Platform
        </h2>
        <div className="flex flex-wrap gap-3 text-xs">
          <a 
            href="/signup" 
            onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            Sign Up for Velora Earnings
          </a>
          <a 
            href="/login" 
            onClick={(e) => { e.preventDefault(); onNavigate('login'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            Login to Velora Earnings
          </a>
          <a 
            href="/how-it-works" 
            onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            How Velora Earnings Works
          </a>
          <a 
            href="/features" 
            onClick={(e) => { e.preventDefault(); onNavigate('features'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            Velora Earnings Features
          </a>
          <a 
            href="/about" 
            onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            About Velora Earnings
          </a>
          <a 
            href="/faqs" 
            onClick={(e) => { e.preventDefault(); onNavigate('faqs'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            Velora Earnings FAQs
          </a>
          <a 
            href="/contact" 
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-300 text-stone-300 transition-colors"
          >
            Contact Velora Support
          </a>
        </div>
      </section>

    </div>
  );
};
