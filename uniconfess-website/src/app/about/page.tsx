import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FOUNDER, PLAY_STORE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About UniConfess — Founder Yug Rathee",
  description:
    "The story behind UniConfess: why Yug Rathee built a campus-first social platform for verified college students in India.",
  path: "/about",
});

const timeline = [
  {
    year: "2025",
    title: "The idea",
    body: "Frustrated by how mainstream social apps ignore campus life, Yug Rathee started sketching a platform built only for verified students.",
  },
  {
    year: "Early 2026",
    title: "Building UniConfess",
    body: "Campus Feed, anonymous posting, clubs, marketplace, and chat — unified into one product designed around real student workflows.",
  },
  {
    year: "2026",
    title: "Launch on Google Play",
    body: "UniConfess went live for Android with institutional email verification, admin moderation, and a growing global campus network.",
  },
];

const values = [
  {
    title: "Students first",
    body: "Every product decision starts with one question: does this help a student on campus?",
  },
  {
    title: "Privacy by design",
    body: "Anonymous when you need it. Verified when it matters. Your email never shows on your profile.",
  },
  {
    title: "Independent product",
    body: "UniConfess by Yug Rathee is not affiliated with uniconfess.com or any other similarly named app.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Built on campus, for campus"
        description={`UniConfess is a student social platform founded by ${FOUNDER.name} in ${FOUNDER.location}. One place to post, connect, trade, and organize — without the noise of mainstream social media.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Why this exists
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                College students live in two worlds: the physical campus and the digital one.
                But the digital world was never built for them. Instagram is for brands.
                Twitter is for arguments. WhatsApp groups get messy by week two.
              </p>
              <p>
                UniConfess fills that gap — a verified, campus-scoped network where you
                can confess anonymously, sell a textbook to someone in your dorm, join a
                study group, or just see what your campus is talking about today.
              </p>
              <p>
                {FOUNDER.name} built it because no existing platform treated campus life
                as the main event.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Founder
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{FOUNDER.name}</h3>
              <p className="mt-1 text-sm text-muted">{FOUNDER.title} · {FOUNDER.location}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Developer and entrepreneur focused on student privacy, community safety,
                and products that scale with campuses — not against them.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${FOUNDER.email}`}
                  className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface"
                >
                  Email Yug
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href={FOUNDER.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">Timeline</h2>
          </AnimateIn>
          <div className="mt-10 space-y-0 divide-y divide-border border-y border-border">
            {timeline.map((item, i) => (
              <AnimateIn key={item.year} delay={i * 80}>
                <div className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-8">
                  <p className="font-mono text-sm text-primary sm:col-span-2">{item.year}</p>
                  <div className="sm:col-span-10">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <AnimateIn>
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">What we stand for</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={200} className="mt-12">
          <Link
            href="/download"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Download UniConfess
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
