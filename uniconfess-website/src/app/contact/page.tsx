import type { Metadata } from "next";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FOUNDER, PLAY_STORE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact — UniConfess Support",
  description:
    "Contact Yug Rathee, founder of UniConfess. Email support for students, educators, partnerships, and press inquiries.",
  path: "/contact",
});

const contactChannels = [
  {
    icon: Mail,
    label: "General & support",
    value: FOUNDER.email,
    href: `mailto:${FOUNDER.email}`,
    note: "Bug reports, account help, feature ideas",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Yug Rathee",
    href: FOUNDER.linkedIn,
    note: "Partnerships, press, product updates",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: FOUNDER.location,
    href: null,
    note: "Building for campuses globally",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Talk to the team"
        description="Questions about UniConfess, your account, or bringing the app to your campus? Yug reads every message."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 space-y-6">
            {contactChannels.map((channel, i) => (
              <AnimateIn key={channel.label} delay={i * 80}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface">
                    <channel.icon className="h-4 w-4 text-foreground" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">{channel.label}</p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-0.5 block text-base font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-base font-semibold text-foreground">
                        {channel.value}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-muted">{channel.note}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={120} className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-serif text-xl text-foreground">Send a message</h2>
              <p className="mt-2 text-sm text-muted">
                Tap below to open your email client with a pre-filled subject line.
              </p>
              <a
                href={`mailto:${FOUNDER.email}?subject=UniConfess%20Inquiry&body=Hi%20Yug%2C%0A%0A`}
                className="mt-6 flex w-full items-center justify-center rounded-md bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Open email
              </a>
              <div className="mt-6 flex items-start gap-2 text-xs text-muted">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                <p>Usually responds within 48 hours. For urgent account issues, include your registered email.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <p className="text-sm text-muted">
              Looking for the app?{" "}
              <a href={PLAY_STORE_URL} className="font-medium text-foreground underline-offset-4 hover:underline">
                Download on Google Play
              </a>
              {" "}or visit our{" "}
              <a href="/#faq" className="font-medium text-foreground underline-offset-4 hover:underline">
                FAQ
              </a>
              .
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
