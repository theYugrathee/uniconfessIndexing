import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageHero } from "@/components/layout/PageHero";
import { BLOG_POSTS } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "UniConfess Blog — Campus Social Insights by Yug Rathee",
  description:
    "Expert guides on anonymous college confessions, campus marketplace safety, student privacy, and UniConfess features. Written by founder Yug Rathee.",
  path: "/blog",
  keywords: [
    "UniConfess blog",
    "Yug Rathee founder",
    "campus social network",
    "anonymous college confessions",
    "student marketplace guide",
    "UniConfess Vercel",
  ],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Campus social, explained"
        description="Guides on privacy, marketplace safety, anonymous posting, and building community — written by founder Yug Rathee."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
