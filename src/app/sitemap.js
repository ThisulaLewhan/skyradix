// app/sitemap.js

export default function sitemap() {
    const baseUrl = 'https://skyradix.com';
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/services/software`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/website`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }
    ];
  }
  