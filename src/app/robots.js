export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/prototypes/', '/easter-egg'],
    },
    sitemap: 'https://skyradix.com/sitemap.xml',
  }
}