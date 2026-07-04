import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatReadingTime(iso: string) {
  const minutes = parseInt(iso.replace(/\D/g, ""), 10) || 5;
  return `${minutes} min read`;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <AnimateIn delay={index * 60}>
      <article className="group flex h-full flex-col border border-border bg-card transition-colors hover:border-foreground/20">
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium uppercase tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-serif mt-4 text-xl leading-snug text-foreground">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h2>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {post.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" aria-hidden />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden />
                {formatReadingTime(post.readingTime)}
              </span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-0.5 text-xs font-semibold text-foreground opacity-0 transition-opacity group-hover:opacity-100"
              aria-label={`Read ${post.title}`}
            >
              Read
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>
      </article>
    </AnimateIn>
  );
}
