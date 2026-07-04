import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog/BlogContent";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { articleJsonLd, createMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    type: "article",
    keywords: [...post.tags, "UniConfess campus app", "Yug Rathee founder"],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const schema = articleJsonLd({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    readingTime: post.readingTime,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogContent post={post} />
    </>
  );
}
