export interface PageSEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
  h1: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEO_PAGES: Record<string, PageSEOConfig> = {
  landing: {
    title: 'VELORA Earnings — Earn, Create & Grow',
    description: 'VELORA is a digital platform offering opportunities to participate, create, learn and earn through available VELORA activities. Explore VELORA opportunities and create your account.',
    canonicalPath: '',
    h1: 'VELORA — Your Digital Earning & Opportunity Platform',
    ogTitle: 'VELORA Earnings — Earn, Create & Grow',
    ogDescription: 'VELORA is a digital platform offering opportunities to participate, create, learn and earn through available VELORA activities. Explore VELORA opportunities and create your account.'
  },
  about: {
    title: 'About VELORA — Our Platform & Opportunities',
    description: 'Learn about VELORA — what our digital platform offers, available earning opportunities, how users participate, account creation, and activation.',
    canonicalPath: 'about',
    h1: 'About VELORA — Our Platform & Opportunities',
    ogTitle: 'About VELORA — Our Platform & Opportunities',
    ogDescription: 'Learn about VELORA — what our digital platform offers, available earning opportunities, how users participate, account creation, and activation.'
  },
  'how-it-works': {
    title: 'How VELORA Works — Explore Opportunities',
    description: 'Step-by-step guide explaining how VELORA works: create an account, access your dashboard, activate your account, explore opportunities, and participate in activities.',
    canonicalPath: 'how-it-works',
    h1: 'How VELORA Works — Explore Opportunities',
    ogTitle: 'How VELORA Works — Explore Opportunities',
    ogDescription: 'Step-by-step guide explaining how VELORA works: create an account, access your dashboard, activate your account, explore opportunities, and participate in activities.'
  },
  opportunities: {
    title: 'VELORA Opportunities — Explore Available Activities',
    description: 'Explore available activities and earning opportunities on VELORA: AI creation tasks, YouTube growth tools, editorial reading rewards, fan battles, and community programs.',
    canonicalPath: 'opportunities',
    h1: 'VELORA Opportunities — Explore Available Activities',
    ogTitle: 'VELORA Opportunities — Explore Available Activities',
    ogDescription: 'Explore available activities and earning opportunities on VELORA: AI creation tasks, YouTube growth tools, editorial reading rewards, fan battles, and community programs.'
  },
  academy: {
    title: 'VELORA Academy — Learn & Develop Skills',
    description: 'Learn and develop high-income digital skills on VELORA Academy: master generative AI workflows, prompt engineering, digital asset creation, and content monetization.',
    canonicalPath: 'academy',
    h1: 'VELORA Academy — Learn & Develop Skills',
    ogTitle: 'VELORA Academy — Learn & Develop Skills',
    ogDescription: 'Learn and develop high-income digital skills on VELORA Academy: master generative AI workflows, prompt engineering, digital asset creation, and content monetization.'
  },
  community: {
    title: 'VELORA Community — Connect & Participate',
    description: 'Connect and participate with thousands of creators across Nigeria on the VELORA platform. Engage in matchday fan battles, referral programs, and group learning.',
    canonicalPath: 'community',
    h1: 'VELORA Community — Connect & Participate',
    ogTitle: 'VELORA Community — Connect & Participate',
    ogDescription: 'Connect and participate with thousands of creators across Nigeria on the VELORA platform. Engage in matchday fan battles, referral programs, and group learning.'
  },
  faqs: {
    title: 'VELORA FAQ — Frequently Asked Questions',
    description: 'Find clear, accurate answers to frequently asked questions about VELORA: account creation, dashboard access, account activation, available opportunities, and support.',
    canonicalPath: 'faqs',
    h1: 'VELORA FAQ — Frequently Asked Questions',
    ogTitle: 'VELORA FAQ — Frequently Asked Questions',
    ogDescription: 'Find clear, accurate answers to frequently asked questions about VELORA: account creation, dashboard access, account activation, available opportunities, and support.'
  },
  faq: {
    title: 'VELORA FAQ — Frequently Asked Questions',
    description: 'Find clear, accurate answers to frequently asked questions about VELORA: account creation, dashboard access, account activation, available opportunities, and support.',
    canonicalPath: 'faqs',
    h1: 'VELORA FAQ — Frequently Asked Questions',
    ogTitle: 'VELORA FAQ — Frequently Asked Questions',
    ogDescription: 'Find clear, accurate answers to frequently asked questions about VELORA: account creation, dashboard access, account activation, available opportunities, and support.'
  },
  packages: {
    title: 'VELORA Packages — Membership Plans & Activation',
    description: 'Explore VELORA membership packages (Silver AI and Golden AI) and understand one-time account activation details and feature access.',
    canonicalPath: 'packages',
    h1: 'VELORA Packages — Membership Plans & Activation',
    ogTitle: 'VELORA Packages — Membership Plans & Activation',
    ogDescription: 'Explore VELORA membership packages (Silver AI and Golden AI) and understand one-time account activation details and feature access.'
  },
  features: {
    title: 'VELORA Features — Digital Tools & Rewards Suite',
    description: 'Explore genuine features offered by the official VELORA platform: AI Academy, YouTube tools, digital journalism, matchday fan battles, and automated bank payouts.',
    canonicalPath: 'features',
    h1: 'VELORA Platform Features',
    ogTitle: 'VELORA Features — Digital Tools & Rewards Suite',
    ogDescription: 'Explore genuine features offered by the official VELORA platform: AI Academy, YouTube tools, digital journalism, matchday fan battles, and automated bank payouts.'
  },
  contact: {
    title: 'Contact VELORA Support — Help Desk & Inquiries',
    description: 'Contact official VELORA customer support for help with account registration, activation, payment confirmation, or technical questions.',
    canonicalPath: 'contact',
    h1: 'Contact VELORA Support',
    ogTitle: 'Contact VELORA Support — Help Desk & Inquiries',
    ogDescription: 'Contact official VELORA customer support for help with account registration, activation, payment confirmation, or technical questions.'
  },
  signup: {
    title: 'Sign Up for VELORA Earnings | Create Account',
    description: 'Create your free account on the official VELORA earning platform. Explore daily earning opportunities, AI creation tools, and community rewards.',
    canonicalPath: 'signup',
    h1: 'Sign Up for VELORA Earnings',
    ogTitle: 'Sign Up for VELORA Earnings | Create Account',
    ogDescription: 'Register your account on the official VELORA platform and start exploring earning opportunities.'
  },
  login: {
    title: 'VELORA Earnings Login | Sign In to Dashboard',
    description: 'Login to your official VELORA Earnings dashboard. Access your daily tasks, rewards balance, and account tools.',
    canonicalPath: 'login',
    h1: 'VELORA Earnings Login',
    ogTitle: 'VELORA Earnings Login | Sign In to Dashboard',
    ogDescription: 'Access your official VELORA member account and manage your daily activities.'
  },
  blog: {
    title: 'VELORA Blog — Official Guides, Insights & Updates',
    description: 'Official guides, educational tutorials, and platform updates from the VELORA platform team.',
    canonicalPath: 'blog',
    h1: 'VELORA Earnings Blog & Insights',
    ogTitle: 'VELORA Blog — Official Guides, Insights & Updates',
    ogDescription: 'Official guides, educational tutorials, and platform updates from the VELORA platform team.'
  },
  terms: {
    title: 'Terms of Service | VELORA Digital Platform',
    description: 'Read the official Terms of Service, user agreement, and platform policies for the VELORA platform.',
    canonicalPath: 'terms',
    h1: 'VELORA Terms of Service',
    ogTitle: 'Terms of Service | VELORA Digital Platform',
    ogDescription: 'Official Terms of Service and guidelines for the VELORA platform.'
  },
  privacy: {
    title: 'Privacy Policy | VELORA Data Protection',
    description: 'Read the official Privacy Policy and data protection standards for the VELORA platform.',
    canonicalPath: 'privacy',
    h1: 'VELORA Privacy Policy',
    ogTitle: 'Privacy Policy | VELORA Data Protection',
    ogDescription: 'Official Privacy Policy and data security details for VELORA.'
  },
  'velora-earnings': {
    title: 'VELORA Earnings Guide | Monetization & Reward Streams',
    description: 'Comprehensive overview of VELORA reward streams, AI prompt payouts, YouTube growth bonuses, and verified payout structures.',
    canonicalPath: 'velora-earnings',
    h1: 'VELORA Earnings Monetization Guide',
    ogTitle: 'VELORA Earnings Guide | Monetization & Reward Streams',
    ogDescription: 'Learn about all earning streams on the official VELORA platform.'
  },
  'velora-linux': {
    title: 'VELORA Linux | High-Performance Cloud Architecture',
    description: 'Discover VELORA Linux — the containerized cloud architecture powering real-time task validation and secure automated payouts.',
    canonicalPath: 'velora-linux',
    h1: 'VELORA Linux Cloud Infrastructure',
    ogTitle: 'VELORA Linux | High-Performance Cloud Architecture',
    ogDescription: 'The cloud architecture and compute stack powering the VELORA platform.'
  },
  dashboard: {
    title: 'Creator Dashboard | VELORA Earnings',
    description: 'Access your personal VELORA creator dashboard, monitor rewards, complete activities, and manage your account.',
    canonicalPath: 'dashboard',
    h1: 'VELORA Creator Dashboard',
    ogTitle: 'Creator Dashboard | VELORA Earnings',
    ogDescription: 'Manage your VELORA account and track daily task rewards.'
  }
};

export const applyPageSEO = (viewKey: string) => {
  if (typeof document === 'undefined') return;
  const config = SEO_PAGES[viewKey] || SEO_PAGES.landing;
  const baseUrl = 'https://veloraearnings.com.ng';
  const fullCanonical = config.canonicalPath ? `${baseUrl}/${config.canonicalPath}` : `${baseUrl}/`;

  // Update title
  document.title = config.title;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // Update canonical link
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', fullCanonical);

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', config.ogTitle || config.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', config.ogDescription || config.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', fullCanonical);

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', config.ogTitle || config.title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', config.ogDescription || config.description);

  const twitterUrl = document.querySelector('meta[name="twitter:url"]');
  if (twitterUrl) twitterUrl.setAttribute('content', fullCanonical);
};
