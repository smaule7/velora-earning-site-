// Centralized Google Drive Image Assets and Browser-Loadable URL Resolver for VELORA

export interface DriveImageEntry {
  fileId: string;
  name: string;
  section: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
  browserUrl: string;
  fallbackUrls: string[];
}

/**
 * 6 Primary User-Supplied Google Drive Images mapped to their exact respective sections:
 * IMAGE 1: 1FI-yWbsosSUzJhLw0KopbHh5MV7UaAh7 -> VELORA NEWS / DAILY BRIEFINGS
 * IMAGE 2: 1qNFymnzj3iCkH_rRTnwKTsaen5_1ftOZ -> COMMUNITY & REFERRALS / TURN CLOUT INTO CASH
 * IMAGE 3: 1YU82G0w2ej4SGPDbsedyasTAKn5shZRN -> FAN BATTLE ZONE / MATCHDAY DERBIES & LIVE ARENA
 * IMAGE 4: 16jB46KNFQ9QrZrRHjd0IBO5ERC60NFBM -> VELORA AI ACADEMY / AI UPLOAD & CREATIVE REWARDS
 * IMAGE 5: 13WenxmPXT2FmBNtBTIuM2u-9-zj7LscO -> YOUTUBE OPPORTUNITIES / CREATOR SUITE & REWARDS
 * IMAGE 6: 1LvGrRwhx17RXMzuLMMH9YRn7vpLpevcD -> VELORA PLATINUM & GOLD MEMBERSHIP PROMOTIONS
 */
export const GOOGLE_DRIVE_IDS = {
  news: '1FI-yWbsosSUzJhLw0KopbHh5MV7UaAh7',
  clout: '1qNFymnzj3iCkH_rRTnwKTsaen5_1ftOZ',
  fanBattle: '1YU82G0w2ej4SGPDbsedyasTAKn5shZRN',
  academy: '16jB46KNFQ9QrZrRHjd0IBO5ERC60NFBM',
  youtube: '13WenxmPXT2FmBNtBTIuM2u-9-zj7LscO',
  platinum: '1LvGrRwhx17RXMzuLMMH9YRn7vpLpevcD',
} as const;

/**
 * Helper to generate reliable browser-loadable Google Drive image URLs
 */
export function getDriveImageUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

export function getDriveDirectLh3(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

export function getDriveThumbnailUrl(fileId: string, width = 1600): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}

/**
 * Centralized VELORA_IMAGES configuration
 * Accessible by key names (image1, image2, news, clout, etc.)
 */
export const VELORA_IMAGES = {
  image1: getDriveImageUrl(GOOGLE_DRIVE_IDS.news),
  image2: getDriveImageUrl(GOOGLE_DRIVE_IDS.clout),
  image3: getDriveImageUrl(GOOGLE_DRIVE_IDS.fanBattle),
  image4: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
  image5: getDriveImageUrl(GOOGLE_DRIVE_IDS.youtube),
  image6: getDriveImageUrl(GOOGLE_DRIVE_IDS.platinum),

  // Semantic Aliases
  news: getDriveImageUrl(GOOGLE_DRIVE_IDS.news),
  clout: getDriveImageUrl(GOOGLE_DRIVE_IDS.clout),
  referrals: getDriveImageUrl(GOOGLE_DRIVE_IDS.clout),
  community: getDriveImageUrl(GOOGLE_DRIVE_IDS.clout),
  fanBattle: getDriveImageUrl(GOOGLE_DRIVE_IDS.fanBattle),
  fanbattle: getDriveImageUrl(GOOGLE_DRIVE_IDS.fanBattle),
  derby: getDriveImageUrl(GOOGLE_DRIVE_IDS.fanBattle),
  academy: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
  ai: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
  aiUpload: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
  youtube: getDriveImageUrl(GOOGLE_DRIVE_IDS.youtube),
  youtubeOpportunities: getDriveImageUrl(GOOGLE_DRIVE_IDS.youtube),
  platinum: getDriveImageUrl(GOOGLE_DRIVE_IDS.platinum),
  gold: getDriveImageUrl(GOOGLE_DRIVE_IDS.platinum),
  hero: getDriveImageUrl(GOOGLE_DRIVE_IDS.platinum),
} as const;

/**
 * Centralized Structured Content Object
 * Allows easy tuning of titles, descriptions, pricing, and promotional copy
 */
export const VELORA_CONTENT = {
  brand: {
    name: 'VELORA',
    tagline: 'A DIGITAL UNIVERSE OF POSSIBILITIES',
    subtitle: 'A creator-powered platform where people can learn, engage, compete, discover opportunities, and earn through meaningful participation.',
  },
  aiAcademy: {
    sectionLabel: 'CREATIVE AI & EDUCATION',
    headline: 'VELORA AI ACADEMY',
    subtitle: 'Learn. Create. Grow.',
    description: 'Master prompt engineering, generative video production, synthetic audio workflows, and AI automation. Learn high-demand digital skills, upload your custom generative prompts, and earn royalties and Lucky Book milestone bonuses.',
    priceLabel: 'Earn $25 – $80 / Asset Submission',
    luckyBookReward: '$15 Milestone Bonus',
    ctaText: 'START LEARNING',
    ctaLink: '#ai-upload',
    features: [
      'Master prompt engineering for Midjourney, Stable Diffusion, and LLMs',
      'Upload verified generative AI prompts & workflows to earn royalties',
      'Unlock $15 Lucky Book milestone rewards as you complete learning modules',
      'Receive official Velora AI Creator Certification and profile credentials',
    ],
  },
  youtube: {
    sectionLabel: 'YOUTUBE CREATOR MONETIZATION',
    headline: 'YOUTUBE OPPORTUNITIES',
    subtitle: 'Turn your content into opportunities.',
    description: 'Access algorithmic thumbnail heatmaps, title split-testing tools, retention optimization insights, and brand sponsorship bounties with direct performance-based rewards.',
    priceLabel: '$50 – $250 / Campaign',
    ctrBounty: '$75 High CTR Bounty',
    ctaText: 'EXPLORE YOUTUBE OPPORTUNITIES',
    ctaLink: '#youtube-earnings',
    features: [
      'Advanced YouTube thumbnail A/B testing and CTR optimization',
      'Audience retention heatmapping and pacing analytics',
      'Sponsored brand campaigns and milestone-based bounties ($50–$250)',
      'Creator accelerator mastermind sessions and live peer reviews',
    ],
  },
  news: {
    sectionLabel: 'DIGITAL JOURNALISM & INTELLIGENCE',
    headline: 'VELORA NEWS: READ & EARN',
    subtitle: 'Stay informed. Earn daily.',
    description: 'Stay ahead of technological breakthroughs, generative AI advances, creator market updates, and digital economy trends. Complete verified reading sessions and earn continuous daily intelligence rewards.',
    priceLabel: 'Earn $3 – $10 / Daily Briefing',
    streakBonus: '$15 Weekly Reading Streak Bonus',
    ctaText: 'START READING & EARN DAILY',
    ctaLink: '#news-rewards',
    features: [
      'Curated briefings covering AI innovations and digital market shifts',
      'Proof-of-Read verification protocol ensuring authentic engagement',
      'Daily intelligence rewards credited instantly to your dashboard wallet',
      'Analyst leaderboard badges and weekly $15 reading streak bonuses',
    ],
  },
  fanBattle: {
    sectionLabel: 'LIVE FAN BATTLE ARENA & DERBIES',
    headline: 'FAN BATTLE ZONE',
    subtitle: 'Compete. Rally your community. Climb the leaderboard.',
    description: 'Represent world football giants including Real Madrid, Barcelona, Arsenal, and Manchester City. Vote in matchday showdowns, participate in weekly fan derbies, and share in the guaranteed $500 weekly arena cash prize pool.',
    priceLabel: '$500 Weekly Guaranteed Prize Pool',
    matchReward: '$25 Per Derby Prediction',
    ctaText: 'ENTER FAN BATTLE ARENA',
    ctaLink: '#fan-battle',
    features: [
      'Represent your favorite football club in high-stakes matchday derbies',
      'Real-time voting power, trivia showdowns, and fan community leaderboards',
      'Guaranteed $500 weekly cash prize pool distributed to winning factions',
      'Multiplier boosts for top-ranking predictors and loyal supporters',
    ],
  },
  platinum: {
    sectionLabel: 'CORE VIP MEMBERSHIP TIER',
    headline: 'VELORA PLATINUM & GOLD MEMBERSHIP',
    subtitle: 'Choose your activation tier to unlock full earning power.',
    platinumPlan: {
      name: 'VELORA PLATINUM',
      price: '$19',
      instantCashback: '$5',
      directReferral: '$10',
      indirectOverrides: '$2 (Tier 1) / $1 (Tier 2)',
      ctaText: 'GET STARTED WITH PLATINUM ($19)',
    },
    goldPlan: {
      name: 'VELORA GOLD ELITE',
      price: '$29',
      instantCashback: '$8',
      directReferral: '$15',
      indirectOverrides: '$3 (Tier 1) / $1.50 (Tier 2)',
      ctaText: 'GET STARTED WITH GOLD ($29)',
    },
  },
  clout: {
    sectionLabel: 'COMMUNITY & REFERRALS',
    headline: 'COMMUNITY & REFERRALS',
    subtitle: 'Turn your community into earnings.',
    description: 'Transform your social reach, community followers, and digital footprint into recurring high-yield income streams with our sustainable multi-tier referral network.',
    ctaText: 'GET YOUR REFERRAL LINK',
    ctaLink: '#clout-cash',
    features: [
      'Earn $10.00 – $15.00 direct referral rewards instantly upon peer activation',
      'Receive automated 2-tier indirect overrides ($2.00–$3.00 & $1.00–$1.50)',
      'Real-time encrypted attribution tracking with zero cookie loss',
      'Instant wallet crediting with unhindered direct withdrawals',
    ],
    steps: [
      { step: '1', title: 'Invite', desc: 'Share your personal encrypted referral link with peers and followers.' },
      { step: '2', title: 'Join', desc: 'Your peers activate their membership and receive instant cashback.' },
      { step: '3', title: 'Participate', desc: 'Your network engages with AI, YouTube, and News tasks.' },
      { step: '4', title: 'Grow', desc: 'Collect $10–$15 direct bonuses plus recurring 2-tier indirect overrides.' },
    ],
  },
  referrals: {
    sectionLabel: 'COMMUNITY & REFERRALS',
    headline: 'COMMUNITY & REFERRALS',
    subtitle: 'Turn your community into earnings.',
    description: 'Transform your social reach, community followers, and digital footprint into recurring high-yield income streams with our sustainable multi-tier referral network.',
    ctaText: 'GET YOUR REFERRAL LINK',
    ctaLink: '#clout-cash',
    features: [
      'Earn $10.00 – $15.00 direct referral rewards instantly upon peer activation',
      'Receive automated 2-tier indirect overrides ($2.00–$3.00 & $1.00–$1.50)',
      'Real-time encrypted attribution tracking with zero cookie loss',
      'Instant wallet crediting with unhindered direct withdrawals',
    ],
  },
} as const;

/**
 * Image Registry for Section Lookups
 */
export const SECTION_IMAGE_REGISTRY: Record<string, DriveImageEntry> = {
  news: {
    fileId: GOOGLE_DRIVE_IDS.news,
    name: 'VELORA News Read & Earn',
    section: 'Velora News Rewards',
    category: 'news',
    aspect: 'portrait',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.news),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.news),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.news, 1600),
    ],
  },
  clout: {
    fileId: GOOGLE_DRIVE_IDS.clout,
    name: 'Turn Clout Into Cash',
    section: 'Community & Referrals',
    category: 'clout',
    aspect: 'landscape',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.clout),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.clout),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.clout, 1600),
    ],
  },
  referrals: {
    fileId: GOOGLE_DRIVE_IDS.clout,
    name: 'Turn Clout Into Cash',
    section: 'Community & Referrals',
    category: 'clout',
    aspect: 'landscape',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.clout),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.clout),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.clout, 1600),
    ],
  },
  fanBattle: {
    fileId: GOOGLE_DRIVE_IDS.fanBattle,
    name: 'Fan Battle Zone Arena',
    section: 'Fan Battle Zone',
    category: 'fanbattle',
    aspect: 'portrait',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.fanBattle),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.fanBattle),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.fanBattle, 1600),
    ],
  },
  fanbattle: {
    fileId: GOOGLE_DRIVE_IDS.fanBattle,
    name: 'Fan Battle Zone Arena',
    section: 'Fan Battle Zone',
    category: 'fanbattle',
    aspect: 'portrait',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.fanBattle),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.fanBattle),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.fanBattle, 1600),
    ],
  },
  academy: {
    fileId: GOOGLE_DRIVE_IDS.academy,
    name: 'VELORA AI Academy',
    section: 'AI Upload Rewards',
    category: 'ai',
    aspect: 'square',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.academy),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.academy, 1600),
    ],
  },
  ai: {
    fileId: GOOGLE_DRIVE_IDS.academy,
    name: 'VELORA AI Academy',
    section: 'AI Upload Rewards',
    category: 'ai',
    aspect: 'square',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.academy),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.academy, 1600),
    ],
  },
  aiUpload: {
    fileId: GOOGLE_DRIVE_IDS.academy,
    name: 'VELORA AI Academy',
    section: 'AI Upload Rewards',
    category: 'ai',
    aspect: 'square',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.academy),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.academy),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.academy, 1600),
    ],
  },
  youtube: {
    fileId: GOOGLE_DRIVE_IDS.youtube,
    name: 'YouTube Creator Suite',
    section: 'YouTube Creator Earnings',
    category: 'youtube',
    aspect: 'landscape',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.youtube),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.youtube),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.youtube, 1600),
    ],
  },
  platinum: {
    fileId: GOOGLE_DRIVE_IDS.platinum,
    name: 'VELORA Platinum & Gold Membership',
    section: 'Velora Platinum VIP',
    category: 'platinum',
    aspect: 'portrait',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.platinum),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.platinum),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.platinum, 1600),
    ],
  },
  gold: {
    fileId: GOOGLE_DRIVE_IDS.platinum,
    name: 'VELORA Platinum & Gold Membership',
    section: 'Velora Platinum VIP',
    category: 'platinum',
    aspect: 'portrait',
    browserUrl: getDriveImageUrl(GOOGLE_DRIVE_IDS.platinum),
    fallbackUrls: [
      getDriveDirectLh3(GOOGLE_DRIVE_IDS.platinum),
      getDriveThumbnailUrl(GOOGLE_DRIVE_IDS.platinum, 1600),
    ],
  },
};
