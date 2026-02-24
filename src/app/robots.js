export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/prototypes/'],
    },
    sitemap: 'https://skyradix.com/sitemap.xml',
  }
}