import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uniconfesss.vercel.app'
  const currentDate = '2026-07-04'

  const routes = [
    { url: '', changeFreq: 'daily', priority: 1.0 },
    { url: '/features', changeFreq: 'weekly', priority: 0.85 },
    { url: '/about', changeFreq: 'monthly', priority: 0.75 },
    { url: '/download', changeFreq: 'weekly', priority: 0.85 },
    { url: '/contact', changeFreq: 'monthly', priority: 0.60 },
    { url: '/blog', changeFreq: 'daily', priority: 0.80 },
    { url: '/gallery', changeFreq: 'weekly', priority: 0.70 },
    { url: '/blog/why-uniconfess-redefining-campus-social-networks-2026', changeFreq: 'weekly', priority: 0.70 },
    { url: '/blog/story-behind-uniconfess-interview-founder-yug-rathee', changeFreq: 'weekly', priority: 0.70 },
    { url: '/blog/securely-buy-sell-textbooks-uniconfess-campus-marketplace', changeFreq: 'weekly', priority: 0.70 },
    { url: '/blog/public-vs-anonymous-dual-post-dynamics-uniconfess', changeFreq: 'weekly', priority: 0.70 },
    { url: '/blog/building-ultimate-college-club-guide-student-leaders', changeFreq: 'weekly', priority: 0.70 },
    { url: '/blog/data-privacy-first-uniconfess-protects-student-anonymity', changeFreq: 'weekly', priority: 0.70 },
    { url: '/privacy', changeFreq: 'monthly', priority: 0.30 },
    { url: '/terms', changeFreq: 'monthly', priority: 0.30 }
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq as any,
    priority: route.priority,
  }))
}
