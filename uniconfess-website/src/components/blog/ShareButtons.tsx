"use client";

import { Link2, Share2 } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Share2,
    },
    {
      label: "Copy link",
      href: url,
      icon: Link2,
      onClick: () => navigator.clipboard?.writeText(url),
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick?.(); } : undefined}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-primary"
          aria-label={link.label}
        >
          <link.icon className="h-3.5 w-3.5" aria-hidden />
          {link.label}
        </a>
      ))}
    </div>
  );
}
