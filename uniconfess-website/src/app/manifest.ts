import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl();

  return {
    name: "UniConfess - Your Campus Network",
    short_name: "UniConfess",
    description:
      "The premier campus-first anonymous social network and student community marketplace founded by Yug Rathee.",
    start_url: "/",
    scope: "/",
    id: siteUrl,
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#09090b",
    theme_color: "#2563eb",
    lang: "en",
    dir: "ltr",
    categories: ["social", "education", "lifestyle"],
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.yugrathee.uniconfess.app",
        id: "com.yugrathee.uniconfess.app",
      },
    ],
    prefer_related_applications: true,
  };
}
