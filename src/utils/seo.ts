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
  about: {
    title: 'About VELORA | Official Digital Platform & Opportunities',
    description: 'Learn about VELORA — Nigeria\'s digital platform empowering creators, digital workers, and learners with earning opportunities and AI tools.',
    canonicalPath: 'about',
    h1: 'About VELORA Platform',
    ogTitle: 'About VELORA | Official Digital Platform & Opportunities',
    ogDescription: 'Discover the mission, technology, and opportunities behind the VELORA earning platform.'
  },
  'how-it-works': {
    title: 'How VELORA Works | Step-by-Step Earning Guide',
    description: 'Learn how the VELORA earning platform works in Nigeria: create your account, participate in available opportunities, complete activities, and withdraw rewards.',
    canonicalPath: 'how-it-works',
    h1: 'How VELORA Earnings Works',
    ogTitle: 'How VELORA Works | Step-by-Step Earning Guide',
    ogDescription: 'Step-by-step guide to participating, creating, learning, and earning on VELORA.'
  },
  features: {
    title: 'VELORA Features | Digital Tools & Rewards Suite',
    description: 'Explore the full suite of VELORA features: AI Creation Academy, YouTube growth tools, digital news rewards, matchday fan battles, and fast payouts.',
    canonicalPath: 'features',
    h1: 'VELORA Platform Features',
    ogTitle: 'VELORA Features | Digital Tools & Rewards Suite',
    ogDescription: 'Explore all digital earning tools and opportunities offered by VELORA.'
  },
  opportunities: {
    title: 'VELORA Opportunities | Active Earning Streams & Tasks',
    description: 'Explore active VELORA opportunities to create, learn, participate, and earn daily rewards across multiple digital streams in Nigeria.',
    canonicalPath: 'opportunities',
    h1: 'VELORA Earning Opportunities',
    ogTitle: 'VELORA Opportunities | Active Earning Streams & Tasks',
    ogDescription: 'Discover available activities, tasks, and reward opportunities on VELORA.'
  },
  academy: {
    title: 'VELORA Academy | Generative AI Skills & Asset Creation',
    description: 'Master in-demand generative AI skills, learn prompt engineering, submit creative digital assets, and earn rewards through VELORA Academy.',
    canonicalPath: 'academy',
    h1: 'VELORA AI Academy',
    ogTitle: 'VELORA Academy | Generative AI Skills & Asset Creation',
    ogDescription: 'Learn AI creation and monetize your digital assets with VELORA Academy.'
  },
  community: {
    title: 'VELORA Community | Connect, Engage & Earn Together',
    description: 'Join the thriving VELORA creator community across Nigeria. Participate in fan battles, referral rewards, and group earning activities.',
    canonicalPath: 'community',
    h1: 'VELORA Community & Network',
    ogTitle: 'VELORA Community | Connect, Engage & Earn Together',
    ogDescription: 'Connect with fellow creators and grow your rewards in the VELORA community.'
  },
  packages: {
    title: 'VELORA Packages | Membership Plans & Activation',
    description: 'Compare VELORA membership packages (Silver AI and Golden AI) and choose the right tier for your earning journey in Nigeria.',
    canonicalPath: 'packages',
    h1: 'VELORA Membership Packages',
    ogTitle: 'VELORA Packages | Membership Plans & Activation',
    ogDescription: 'Explore VELORA membership packages and activation options.'
  },
  faqs: {
    title: 'VELORA FAQs | Frequently Asked Questions & Answers',
    description: 'Get clear answers to common questions about VELORA Earnings, account activation, daily tasks, rewards, and Nigerian bank withdrawals.',
    canonicalPath: 'faqs',
    h1: 'Frequently Asked Questions About VELORA',
    ogTitle: 'VELORA FAQs | Frequently Asked Questions & Answers',
    ogDescription: 'Frequently asked questions and verified answers about the VELORA platform.'
  },
  faq: {
    title: 'VELORA FAQs | Frequently Asked Questions & Answers',
    description: 'Get clear answers to common questions about VELORA Earnings, account activation, daily tasks, rewards, and Nigerian bank withdrawals.',
    canonicalPath: 'faqs',
    h1: 'Frequently Asked Questions About VELORA',
    ogTitle: 'VELORA FAQs | Frequently Asked Questions & Answers',
    ogDescription: 'Frequently asked questions and verified answers about the VELORA platform.'
  },
  contact: {
    title: 'Contact VELORA Support | Help Desk & Inquiries',
    description: 'Contact official VELORA customer support for assistance with your account, activation, payment confirmation, or technical questions.',
    canonicalPath: 'contact',
    h1: 'Contact VELORA Support',
    ogTitle: 'Contact VELORA Support | Help Desk & Inquiries',
    ogDescription: 'Official customer support and help desk channels for VELORA.'
  },
  blog: {
    title: 'VELORA Blog | Official Guides, Insights & Updates',
    description: 'Read the latest guides, monetization tips, tutorials, and ecosystem news directly from the VELORA platform team.',
    canonicalPath: 'blog',
    h1: 'VELORA Earnings Blog & Insights',
    ogTitle: 'VELORA Blog | Official Guides, Insights & Updates',
    ogDescription: 'Educational guides and updates from the official VELORA team.'
  },
  terms: {
    title: 'Terms of Service | VELORA Digital Platform',
    description: 'Read the official Terms of Service and user agreement governing your use of the VELORA digital earning platform.',
    canonicalPath: 'terms',
    h1: 'VELORA Terms of Service',
    ogTitle: 'Terms of Service | VELORA Digital Platform',
    ogDescription: 'Official Terms of Service and user agreement for VELORA.'
  },
  privacy: {
    title: 'Privacy Policy | VELORA Data Protection',
    description: 'Read the official VELORA Privacy Policy detailing our commitment to user data privacy, security, and confidentiality.',
    canonicalPath: 'privacy',
    h1: 'VELORA Privacy Policy',
    ogTitle: 'Privacy Policy | VELORA Data Protection',
    ogDescription: 'Official Privacy Policy and data security standards for VELORA.'
  },
  'velora-earnings': {
    title: 'VELORA Earnings Guide | Monetization & Reward Streams',
    description: 'Comprehensive guide to earning on VELORA: AI uploads, YouTube review tools, daily news reading rewards, and affiliate bonuses.',
    canonicalPath: 'velora-earnings',
    h1: 'VELORA Earnings Overview',
    ogTitle: 'VELORA Earnings Guide | Monetization & Reward Streams',
    ogDescription: 'Comprehensive overview of all earning streams on VELORA.'
  },
  'velora-linux': {
    title: 'VELORA Linux | High-Performance Cloud Architecture',
    description: 'Discover VELORA Linux — the containerized cloud architecture powering real-time task validation and secure automated payouts.',
    canonicalPath: 'velora-linux',
    h1: 'VELORA Linux Cloud Infrastructure',
    ogTitle: 'VELORA Linux | High-Performance Cloud Architecture',
    ogDescription: 'The cloud infrastructure powering the VELORA earning platform.'
  },
  dashboard: {
    title: 'Creator Dashboard | VELORA Earnings',
    description: 'Access your personal VELORA creator dashboard, monitor rewards, complete activities, and manage your account.',
    canonicalPath: 'dashboard',
    h1: 'VELORA Creator Dashboard',
    ogTitle: 'Creator Dashboard | VELORA Earnings',
    ogDescription: 'Manage your VELORA account and track daily activities.'
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
