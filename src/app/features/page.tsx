import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  ShoppingBag,
  MessagesSquare,
  Trophy,
  Lock,
  Globe,
  Shield,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/home/CTASection";
import { FEATURES, PLAY_STORE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Features — UniConfess Campus Platform",
  description:
    "Explore UniConfess features: anonymous confessions, campus clubs, student marketplace, real-time chat, leaderboards, and Secret Vault.",
  path: "/features",
});

const iconMap = {
  MessageSquare,
  Users,
  ShoppingBag,
  MessagesSquare,
  Trophy,
  Lock,
};

const extraFeatures = [
  {
    icon: Globe,
    title: "Campus & Global Feeds",
    body: "See what's happening at your university, or browse posts from students at other campuses worldwide.",
  },
  {
    icon: Shield,
    title: "Verified access only",
    body: "Institutional email verification kick keeps bots, outsiders, and random accounts off your campus network.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        label="Features"
        title="Everything campus life needs, in one place"
        description="Six core modules plus campus verification — designed so you stop juggling five different apps for one semester."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-16">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const reversed = index % 2 === 1;
            return (
              <AnimateIn key={feature.id} delay={index * 50}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-serif mt-2 text-2xl text-foreground sm:text-3xl">
                      {feature.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={`rounded-2xl border border-border bg-surface p-8 ${
                      reversed ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card">
                      <Icon className="h-5 w-5 text-foreground" aria-hidden />
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="h-2 w-3/4 rounded bg-border" />
                      <div className="h-2 w-full rounded bg-border" />
                      <div className="h-2 w-5/6 rounded bg-border" />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">Also included</h2>
          </AnimateIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {extraFeatures.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 80}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <AnimateIn>
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold text-foreground">Ready to try it?</p>
              <p className="mt-1 text-sm text-muted">Free on Android · Verified students only</p>
            </div>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Download app
            </a>
          </div>
        </AnimateIn>
      </section>

      <CTASection />
    </>
  );
}
