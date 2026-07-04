import type { Metadata } from "next";
import {
  APP_DESCRIPTION,
  APP_NAME,
  FOUNDER,
  PLAY_STORE_URL,
  SITE_KEYWORDS,
  getSiteUrl,
} from "./constants";

const DEFAULT_OG_IMAGE = "/opengraph-image";

export function createMetadata({
  title,
  description,
  path = "",
  keywords = SITE_KEYWORDS,
  type = "website" as const,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${APP_NAME} – Campus Social App by Yug Rathee | Download on Google Play`
      : `${title} | ${APP_NAME}`;

  return {
    title: fullTitle,
    description: description.slice(0, 155),
    keywords: keywords.join(", "),
    authors: [{ name: FOUNDER.name, url: FOUNDER.linkedIn }],
    creator: FOUNDER.name,
    publisher: APP_NAME,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 155),
      url,
      siteName: APP_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} – Your Campus. Your Voice. Your Rules.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description.slice(0, 155),
      images: [DEFAULT_OG_IMAGE],
      creator: "@UniConfessApp",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    applicationName: APP_NAME,
    category: "Social Networking",
    other: {
      "google-play-app": `app-id=${PLAY_STORE_URL.split("id=")[1]}`,
    },
  };
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: APP_NAME,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: APP_DESCRIPTION,
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      email: FOUNDER.email,
      jobTitle: FOUNDER.title,
      address: {
        "@type": "PostalAddress",
        addressRegion: FOUNDER.location,
      },
    },
    sameAs: [PLAY_STORE_URL, FOUNDER.linkedIn],
    contactPoint: {
      "@type": "ContactPoint",
      email: FOUNDER.email,
      contactType: "customer support",
    },
  };
}

export function softwareApplicationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    operatingSystem: "Android",
    applicationCategory: "SocialNetworkingApplication",
    description: APP_DESCRIPTION,
    url: siteUrl,
    downloadUrl: PLAY_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: FOUNDER.name,
      email: FOUNDER.email,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  readingTime,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${siteUrl}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: FOUNDER.name,
      email: FOUNDER.email,
    },
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`,
      },
    },
    timeRequired: readingTime,
    keywords: SITE_KEYWORDS.join(", "),
  };
}
