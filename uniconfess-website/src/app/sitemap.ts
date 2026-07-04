import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { getSiteUrl } from "@/lib/constants";

const CORE_PAGES = [
  { path: "", changeFrequency: "daily" as const, priority: 1.0 },
  { path: "/features", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/download", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/blog", changeFrequency: "daily" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const blogSlugs = getAllSlugs();
  const lastModified = new Date();

  const coreRoutes: MetadataRoute.Sitemap = CORE_PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  return [...coreRoutes, ...blogPosts, ...legalPages];
}
