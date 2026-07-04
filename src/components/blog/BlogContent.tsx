import Link from "next/link";
import type { BlogPost, BlogSection } from "@/lib/blog";
import { FOUNDER } from "@/lib/constants";
import { ShareButtons } from "./ShareButtons";
import { getSiteUrl } from "@/lib/constants";

interface BlogContentProps {
  post: BlogPost;
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="font-serif mt-10 text-2xl text-foreground first:mt-0"
        >
          {section.content}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-4 text-base leading-relaxed text-muted">
          {section.content}
        </p>
      );
    case "list":
      return (
        <div key={index} className="mt-4">
          <p className="font-medium text-foreground">{section.content}</p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-muted">
            {section.items?.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="mt-6 border-l-4 border-primary bg-primary/5 py-4 pl-6 pr-4 italic text-foreground"
        >
          {section.content}
        </blockquote>
      );
    default:
      return null;
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogContent({ post }: BlogContentProps) {
  const siteUrl = getSiteUrl();
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-primary hover:underline"
      >
        ← Back to Blog
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-serif mt-4 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border pb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
              YR
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{FOUNDER.name}</p>
              <p className="text-xs text-muted">
                {formatDate(post.publishedAt)} · Author
              </p>
            </div>
          </div>
          <ShareButtons title={post.title} url={articleUrl} />
        </div>
      </header>

      <div className="prose-custom mt-8">
        {post.content.map((section, index) => renderSection(section, index))}
      </div>

      <footer className="mt-12 rounded-2xl border border-border bg-card p-6">
        <p className="text-sm font-semibold text-foreground">About the Author</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          <strong className="text-foreground">{FOUNDER.name}</strong> is the founder
          and CEO of UniConfess, the campus-first social platform for college
          students. Contact:{" "}
          <a href={`mailto:${FOUNDER.email}`} className="text-primary hover:underline">
            {FOUNDER.email}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="text-sm font-medium text-primary hover:underline"
          >
            More UniConfess articles
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-primary hover:underline"
          >
            UniConfess FAQ
          </Link>
        </div>
      </footer>
    </article>
  );
}
