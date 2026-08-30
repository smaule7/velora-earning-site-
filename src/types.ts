export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  icon: string;
  gradient: string;
  accentColor: string;
  ctaText?: string;
  badge?: string;
  previewType?: string;
}

export interface TimelineStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  stats?: string;
}

export type AIPackagePlan = 'silver_ai' | 'golden_ai';

export interface PromotionalFlyer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'packages' | 'platinum' | 'youtube' | 'news' | 'fanbattle' | 'clout' | 'engagement' | 'ai' | 'referrals' | 'quiz';
  imageUrl: string;
  ctaText: string;
  ctaLink?: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  tags: string[];
  rewardBadge?: string;
  aspect: 'portrait' | 'landscape' | 'square';
  date: string;
  callout: string;
  colorTheme?: string;
}

export interface TopEarner {
  id: string;
  rank: number;
  username: string;
  name: string;
  avatarUrl: string;
  earnings: number;
  growth: string;
  category: string;
  badges: string[];
  recentAchievement: string;
}

export interface RewardCategoryItem {
  id: string;
  name: string;
  amount: number | string;
  description: string;
  type: 'instant' | 'indirect' | 'activity' | 'challenge' | 'referral';
  frequency: string;
  tag: string;
}

export interface OpportunityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  reward: string;
  deadline: string;
  status: 'Active' | 'Ending Soon' | 'High Demand' | 'Verified';
  ctaText: string;
  imageUrl: string;
  participantsCount: string;
  tags: string[];
}

export interface EarningOverviewItem {
  id: string;
  title: string;
  subtitle: string;
  amountEarned: string;
  icon: string;
  category: string;
  badge: string;
  featured?: boolean;
}

export interface ClubItem {
  name: string;
  short: string;
  color: string;
  secondaryColor: string;
  supporters: string;
  powerScore: number;
  recentForm: string;
  badge?: string;
  league?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  username?: string;
  avatarText: string;
  quote: string;
  rating: number;
  category: string;
  highlight?: string;
  earningsMilestone?: string;
  date?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PlatformStats {
  creatorsCount: string;
  totalRewardsPaid: string;
  engagementsCount: string;
  activeOpportunities: string;
}

export interface CreatorDashboardData {
  totalEarnings: number;
  todayEarnings: number;
  referralEarnings: number;
  contentRewards: number;
  availableBalance: number;
  rank: number;
  recentActivities: {
    id: string;
    title: string;
    type: string;
    time: string;
    amount: string;
    positive: boolean;
  }[];
}

export interface VeloraUser {
  fullName: string;
  email: string;
  phoneNumber?: string;
  isLoggedIn: boolean;
  status: 'inactive' | 'active';
  registeredAt?: string;
  activatedAt?: string;
  plan?: AIPackagePlan;
}
