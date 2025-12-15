// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://dannygarcia.net/",
  author: "Danny Garcia",
  profile: "https://dannygarcia.net/about",
  desc: "20-year-old Cyber Security Enthusiast and Professional Procrastinator.",
  title: "Danny Garcia",
  ogImage: "pfp-danny-uncropped.jpeg",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit on GitHub",
    url: "https://github.com/steipete/steipete.me/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "America/Los_Angeles",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/garcia-danny",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/steipete",
    label: "Twitter",
  },
  {
    href: "https://instagram.com/dannygvrcia",
    label: "Instagram",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  Instagram: "Instagram",
  RSS: "rss",
  Email: "mail",
};
