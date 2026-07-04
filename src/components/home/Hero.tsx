import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PLAY_STORE_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <AnimateIn>
              <p className="inline-block rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
                Student-built · Founded 2026
              </p>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h1 className="font-serif mt-6 text-[2.75rem] leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
                Your campus.
                <br />
                <span className="text-primary">Your voice.</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={160}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                UniConfess is where verified college students post, connect, trade,
                and organize — publicly or anonymously. One app for everything
                that happens on campus.
              </p>
            </AnimateIn>

            <AnimateIn delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Download on Google Play
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
                >
                  See how it works
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={320}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {[
                  { value: "6+", label: "Core features" },
                  { value: "100%", label: "Verified students" },
                  { value: "Free", label: "To download" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-lg font-semibold text-foreground">{stat.value}</dt>
                    <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </AnimateIn>
          </div>

          <AnimateIn delay={120} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px]">
              <Image
                src="/images/home-page-uniconfess.png"
                alt="UniConfess app home feed interface showing anonymous campus confessions and student posts"
                title="UniConfess Anonymous Campus Feed Dashboard"
                width={320}
                height={640}
                priority
                className="rounded-[2rem] border border-border shadow-[0_24px_80px_-12px_rgba(0,0,0,0.15)]"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="animate-float relative w-full max-w-[280px]" aria-hidden>
      <div className="rounded-[2rem] border border-border bg-card p-2 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.15)]">
        <div className="overflow-hidden rounded-[1.5rem] bg-surface">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-xs font-semibold text-foreground">Campus Feed</p>
              <p className="text-[10px] text-muted">Delhi University</p>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
              Live
            </span>
          </div>

          <div className="space-y-2.5 p-3">
            <FeedItem tag="Anonymous" body="Anyone else think the library AC is set to Antarctica?" />
            <FeedItem tag="Rahul K." body="Robotics club meetup Friday, 4pm. Room 204." />
            <FeedItem tag="Marketplace" body="Organic Chemistry textbook — ₹800, barely used." highlight />
          </div>

          <div className="grid grid-cols-5 border-t border-border px-2 py-2.5">
            {["Feed", "Clubs", "Shop", "Chat", "Vault"].map((tab, i) => (
              <span
                key={tab}
                className={`text-center text-[9px] font-medium ${i === 0 ? "text-primary" : "text-muted"}`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeedItem({
  tag,
  body,
  highlight = false,
}: {
  tag: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-3 py-2.5 ${
        highlight ? "border-primary/20 bg-primary/[0.04]" : "border-border bg-card"
      }`}
    >
      <p className="text-[10px] font-semibold text-muted">{tag}</p>
      <p className="mt-1 text-[11px] leading-snug text-foreground">{body}</p>
    </div>
  );
}
