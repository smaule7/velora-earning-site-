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
    title: 'Velora Earnings | Official Website',
    description: 'Discover Velora Earnings, learn how the platform works, explore its features, create an account, and find official information and support.',
    canonicalPath: '',
    h1: 'Velora Earnings',
    ogTitle: 'Velora Earnings | Official Website',
    ogDescription: 'Discover Velora Earnings, learn how the platform works, explore its features, create an account, and find official information and support.'
  },
  signup: {
    title: 'Velora Earnings Sign Up | Create an Account',
    description: 'Create your account on the official Velora Earnings platform. Join verified creators exploring AI tasks, YouTube tools, and digital rewards.',
    canonicalPath: 'signup',
    h1: 'Sign Up for Velora Earnings',
    ogTitle: 'Velora Earnings Sign Up | Create an Account',
    ogDescription: 'Register your account on the official Velora Earnings platform and get started today.'
  },
  login: {
    title: 'Velora Earnings Login | Sign In',
    description: 'Login to your official Velora Earnings creator dashboard. Access your daily tasks, wallet balance, and payout settings.',
    canonicalPath: 'login',
    h1: 'Velora Earnings Login',
    ogTitle: 'Velora Earnings Login | Sign In',
    ogDescription: 'Access your official Velora Earnings member account and manage your daily tasks.'
  },
  about: {
    title: 'About Velora Earnings | Official Information',
    description: 'Official information about Velora Earnings — our mission, platform operations, digital tools, and verified community across Nigeria.',
    canonicalPath: 'about',
    h1: 'What Is Velora Earnings?',
    ogTitle: 'About Velora Earnings | Official Information',
    ogDescription: 'Learn about Velora Earnings, what the platform does, who can use it, and how to get started.'
  },
  'how-it-works': {
    title: 'How Velora Earnings Works | Step-by-Step Guide',
    description: 'Step-by-step guide explaining how Velora Earnings works: register your account, access available features, complete eligible activities, and withdraw earnings to your Nigerian bank.',
    canonicalPath: 'how-it-works',
    h1: 'How Does Velora Earnings Work?',
    ogTitle: 'How Velora Earnings Works | Step-by-Step Guide',
    ogDescription: 'Learn how to create an account, complete daily tasks, and withdraw funds on Velora Earnings.'
  },
  features: {
    title: 'Velora Earnings Features | Explore the Platform',
    description: 'Explore genuine features offered by Velora Earnings: AI Academy & Asset Uploads, YouTube Creator Suite, Digital Journalism, Fan Battle Arena, and Automated Bank Withdrawals.',
    canonicalPath: 'features',
    h1: 'Velora Earnings Features',
    ogTitle: 'Velora Earnings Features | Explore the Platform',
    ogDescription: 'Explore genuine features offered by the official Velora Earnings platform.'
  },
  faqs: {
    title: 'Velora Earnings FAQs | Frequently Asked Questions',
    description: 'Find direct answers to frequently asked questions about Velora Earnings — account registration, task validation, package activation, and Nigerian bank payouts.',
    canonicalPath: 'faqs',
    h1: 'Frequently Asked Questions About Velora Earnings',
    ogTitle: 'Velora Earnings FAQs | Frequently Asked Questions',
    ogDescription: 'Frequently asked questions and verified answers about the Velora Earnings platform.'
  },
  faq: {
    title: 'Velora Earnings FAQs | Frequently Asked Questions',
    description: 'Find direct answers to frequently asked questions about Velora Earnings — account registration, task validation, package activation, and Nigerian bank payouts.',
    canonicalPath: 'faqs',
    h1: 'Frequently Asked Questions About Velora Earnings',
    ogTitle: 'Velora Earnings FAQs | Frequently Asked Questions',
    ogDescription: 'Frequently asked questions and verified answers about the Velora Earnings platform.'
  },
  contact: {
    title: 'Contact Velora Earnings | Official Support',
    description: 'Contact official Velora Earnings support for help with account registration, payment confirmation, task questions, or technical inquiries.',
    canonicalPath: 'contact',
    h1: 'Contact Velora Earnings',
    ogTitle: 'Contact Velora Earnings | Official Support',
    ogDescription: 'Official support channels and assistance for Velora Earnings.'
  },
  blog: {
    title: 'Velora Earnings Blog | Official Guides & Insights',
    description: 'Official guides, educational tutorials, and platform updates from the Velora Earnings team.',
    canonicalPath: 'blog',
    h1: 'Velora Earnings Blog',
    ogTitle: 'Velora Earnings Blog | Official Guides & Insights',
    ogDescription: 'Official guides, educational tutorials, and platform updates from the Velora Earnings team.'
  },
  terms: {
    title: 'Terms of Service | Velora Earnings',
    description: 'Read the official Terms of Service, user agreement, and platform policies for Velora Earnings.',
    canonicalPath: 'terms',
    h1: 'Velora Earnings Terms of Service',
    ogTitle: 'Terms of Service | Velora Earnings',
    ogDescription: 'Official Terms of Service and guidelines for the Velora Earnings platform.'
  },
  privacy: {
    title: 'Privacy Policy | Velora Earnings',
    description: 'Read the official Privacy Policy and data protection standards for the Velora Earnings platform.',
    canonicalPath: 'privacy',
    h1: 'Velora Earnings Privacy Policy',
    ogTitle: 'Privacy Policy | Velora Earnings',
    ogDescription: 'Official Privacy Policy and data security details for Velora Earnings.'
  },
  'velora-earnings': {
    title: 'Velora Earnings Guide | Official Monetization System',
    description: 'Comprehensive overview of the Velora Earnings reward streams, AI prompt payouts, YouTube growth bonuses, and verified payout structures.',
    canonicalPath: 'velora-earnings',
    h1: 'Velora Earnings Monetization Guide',
    ogTitle: 'Velora Earnings Guide | Official Monetization System',
    ogDescription: 'Learn about all earning streams on the official Velora Earnings platform.'
  },
  'velora-linux': {
    title: 'Velora Linux | Velora Earnings Cloud Infrastructure',
    description: 'Discover Velora Linux, the high-performance Linux cloud infrastructure that powers real-time task validation and fast automated payouts for Velora Earnings.',
    canonicalPath: 'velora-linux',
    h1: 'Velora Linux Infrastructure',
    ogTitle: 'Velora Linux | Velora Earnings Cloud Infrastructure',
    ogDescription: 'The cloud architecture and compute stack powering the Velora Earnings platform.'
  },
  dashboard: {
    title: 'Creator Dashboard | Velora Earnings',
    description: 'Access your personal Velora Earnings creator dashboard, monitor wallet balance, submit tasks, and request fast withdrawals.',
    canonicalPath: 'dashboard',
    h1: 'Velora Earnings Creator Dashboard',
    ogTitle: 'Creator Dashboard | Velora Earnings',
    ogDescription: 'Manage your Velora Earnings account and track daily task rewards.'
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
