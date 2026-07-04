import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/constants";

const DISALLOW_PATHS = ["/api/", "/draft/", "/_draft/"];

const SEARCH_ENGINE_BOTS = ["Googlebot", "Bingbot", "Baiduspider"];

const AI_ANSWER_ENGINE_BOTS = [
  "GPTBot",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
];

function buildAllowRule(userAgent: string) {
  return {
    userAgent,
    allow: "/",
    disallow: DISALLOW_PATHS,
  };
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      ...SEARCH_ENGINE_BOTS.map(buildAllowRule),
      ...AI_ANSWER_ENGINE_BOTS.map(buildAllowRule),
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
