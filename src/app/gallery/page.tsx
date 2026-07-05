import Image from "next/image";
import { APP_NAME, FOUNDER, PLAY_STORE_URL, getSiteUrl } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `UniConfess App Screenshots & UI Gallery | ${APP_NAME}`,
  description: "Explore official high-resolution screenshots, UI designs, and app features of the UniConfess campus social network developed by Yug Rathee.",
  openGraph: {
    title: `UniConfess App Screenshots & UI Gallery | ${APP_NAME}`,
    description: "Explore official high-resolution screenshots, UI designs, and app features of the UniConfess campus social network developed by Yug Rathee.",
    url: `${getSiteUrl()}/gallery`,
    siteName: APP_NAME,
    images: [
      {
        url: "/images/uniconfess-home-screen.png",
        width: 320,
        height: 640,
        alt: "UniConfess app home feed interface showing anonymous campus confessions and student posts",
      },
      {
        url: "/images/uniconfess-clubs-chat.png",
        width: 320,
        height: 640,
        alt: "UniConfess app student clubs and real-time community chat interface",
      },
      {
        url: "/images/uniconfess-campus-marketplace.png",
        width: 320,
        height: 640,
        alt: "UniConfess local peer-to-peer campus marketplace interface for buying and selling textbooks",
      },
    ],
  },
};

const galleryItems = [
  {
    id: "home-feed",
    title: "Home Feed",
    description: "Anonymous campus confessions and student posts in real-time",
    image: "/images/home-page-uniconfess.png",
    alt: "UniConfess app home feed interface showing anonymous campus confessions and student posts",
  },
  {
    id: "clubs-chat",
    title: "Student Clubs & Chat",
    description: "Real-time community chat and university club discussions",
    image: "/images/clubs.png",
    alt: "UniConfess app student clubs and real-time community chat interface",
  },
  {
    id: "marketplace",
    title: "Campus Marketplace",
    description: "Buy and sell textbooks, electronics, and essentials with verified peers",
    image: "/images/Marketplace-uniconfess.png",
    alt: "UniConfess local peer-to-peer campus marketplace interface for buying and selling textbooks",
  },
  {
    id: "private-messaging",
    title: "Private Messaging",
    description: "Direct encrypted messaging with verified campus students",
    image: "/images/realtime-messages-uniconfess.png",
    alt: "UniConfess private messaging interface for direct student communication",
  },
  {
    id: "student-profile",
    title: "Student Profile",
    description: "Personalize your student profile with campus details and verification",
    image: "/images/uniconfess-student-profile.png",
    alt: "UniConfess student profile interface showing personalization and verification",
  },
  {
    id: "campus-leaderboard",
    title: "Campus Leaderboard",
    description: "Recognizing active contributors and community engagement",
    image: "/images/leaderboard-uniconfess.png",
    alt: "UniConfess campus leaderboard showing top student contributors",
  },
  {
    id: "search-feature",
    title: "Search Feature",
    description: "Quick search across posts, users, and campus content",
    image: "/images/search-feature.png",
    alt: "UniConfess search interface for finding posts and users",
  },
  {
    id: "messaging",
    title: "Real-time Messaging",
    description: "Instant messaging with verified campus students",
    image: "/images/uniconfess-private-messaging.png",
    alt: "UniConfess real-time messaging interface for student communication",
  },
  {
    id: "home-screen",
    title: "App Home Screen",
    description: "Main dashboard showing all campus activities",
    image: "/images/uniconfess-home-screen.png",
    alt: "UniConfess app home screen dashboard interface",
  },
];

function ImageGalleryJsonLd() {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${APP_NAME} App Screenshots Gallery`,
    description: "Official high-resolution screenshots and UI designs of the UniConfess campus social network",
    creator: {
      "@type": "Person",
      name: FOUNDER.name,
      email: FOUNDER.email,
    },
    image: galleryItems.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${item.image}`,
      description: item.alt,
      creator: {
        "@type": "Person",
        name: FOUNDER.name,
        email: FOUNDER.email,
      },
      creditText: `© ${new Date().getFullYear()} ${FOUNDER.name}`,
      copyrightNotice: `© ${new Date().getFullYear()} ${FOUNDER.name}. All rights reserved.`,
      license: "https://uniconfesss.vercel.app/terms",
      acquireLicensePage: "https://uniconfesss.vercel.app/contact",
      name: item.title,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function GalleryPage() {
  return (
    <>
      <ImageGalleryJsonLd />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
            UniConfess App Screenshots, UI Design, and Visual Gallery
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Explore the official high-resolution screenshots and UI designs of UniConfess, 
            the premier campus-first social platform built exclusively for college and university students. 
            Developed by {FOUNDER.name}, UniConfess enables verified students to connect, share voices (publicly or anonymously), 
            join clubs, buy/sell on campus marketplaces, and privately message peers.
            Download the app on <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Play</a>.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  width={200}
                  height={355}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="font-serif text-2xl text-foreground">Ready to experience UniConfess?</h2>
          <p className="mt-3 text-muted">
            Download the app and join thousands of verified students on your campus.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Download on Google Play
          </a>
        </div>
      </div>
    </>
  );
}
