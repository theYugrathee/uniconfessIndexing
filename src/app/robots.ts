import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/draft/', '/_draft/'],
    },
    sitemap: 'https://uniconfesss.vercel.app/sitemap.xml',
  }
}
