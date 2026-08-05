// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

export const SITE = {
  /** Site name — used in the header brand, <title>, and og:site_name. */
  title: 'IT Dude Solutions',
  /** Default meta description for pages that don't set their own. */
  description: 'Reliable IT support, Microsoft 365, cloud solutions, and cybersecurity for small businesses in Regensburg and the surrounding area.',
  /** Description of the RSS feed at /rss.xml. */
  rssDescription: 'Reliable IT support, Microsoft 365, cloud solutions, and cybersecurity for small businesses in Regensburg and the surrounding area.',
  /** Default social share image, relative to the site root (see public/). */
  ogImage: '/og.png',
  /** Footer credit line. */
  footerText: '2026 ITDudeSolutions ',
} as const;

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. */
export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  // { href: '/works/', label: 'Works' },
  // { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact Us' },
  // { href: '/search/', label: 'Search' },
] as const;
