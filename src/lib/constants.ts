export const APP_NAME = "UniConfess";

export const APP_DESCRIPTION =
  "The premier campus-first social platform built exclusively for college and university students to connect, share voices (publicly or anonymously), join clubs, buy/sell on campus marketplaces, and privately message verified peers.";

export const FOUNDER = {
  name: "Yug Rathee",
  email: "yugrathee28@gmail.com",
  title: "Founder & CEO",
  location: "Haryana, India",
  linkedIn: "https://linkedin.com/in/yug-rathee-a1388b333",
};

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.yugrathee.uniconfess.app";

export const PACKAGE_ID = "com.yugrathee.uniconfess.app";

export const SITE_KEYWORDS = [
  "UniConfess campus app",
  "Yug Rathee founder",
  "anonymous college confessions",
  "student marketplace",
  "UniConfess Vercel",
  "uniconfesss.vercel.app",
  "campus social network",
  "university student app",
  "college confession app",
  "verified student platform",
  "Gen Z campus app",
];

export const CANONICAL_SITE_URL = "https://uniconfesss.vercel.app";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return CANONICAL_SITE_URL;
}

export const FEATURES = [
  {
    id: "posting",
    title: "Public & Anonymous Posting",
    description:
      "Share campus thoughts on the Campus Feed or speak freely with Anonymous Posting. Toggle identity per post — your voice, your rules.",
    icon: "MessageSquare" as const,
  },
  {
    id: "clubs",
    title: "Campus & Global Clubs",
    description:
      "Join interest-based communities at your university or connect with students worldwide. Study groups, hobby clubs, and campus-wide engagement.",
    icon: "Users" as const,
  },
  {
    id: "marketplace",
    title: "Campus Marketplace",
    description:
      "Buy and sell textbooks, electronics, and essentials within your verified campus network. Local transactions with trusted peers only.",
    icon: "ShoppingBag" as const,
  },
  {
    id: "messaging",
    title: "Real-time Messaging",
    description:
      "Integrated chat lets you communicate directly with verified peers. Private conversations encrypted in transit.",
    icon: "MessagesSquare" as const,
  },
  {
    id: "leaderboards",
    title: "Campus Leaderboards",
    description:
      "Recognizing active contributors at both campus and global levels. Earn visibility for positive community participation.",
    icon: "Trophy" as const,
  },
  {
    id: "vault",
    title: "Secret Vault",
    description:
      "Your private space for drafts, saved confessions, and personal notes — secured and separate from public feeds.",
    icon: "Lock" as const,
  },
];
