import type { Metadata } from "next";
import { Smartphone, Shield, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PACKAGE_ID, PLAY_STORE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Download UniConfess — Android App",
  description:
    "Download UniConfess on Google Play. Free Android app for verified college students — anonymous confessions, clubs, marketplace, and chat.",
  path: "/download",
});

const steps = [
  "Open Google Play Store on your Android device",
  "Search for UniConfess or tap the link below",
  "Verify the developer is Yug Rathee",
  "Install, sign up with your college email, and join your campus",
];

const requirements = [
  { label: "Platform", value: "Android 8.0+" },
  { label: "Package ID", value: PACKAGE_ID },
  { label: "Cost", value: "Free" },
  { label: "Verification", value: "Institutional email required" },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        label="Download"
        title="Get UniConfess on your phone"
        description="The official Android app by Yug Rathee. Verify with your college email and join students already on your campus."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimateIn>
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
              <Smartphone className="h-8 w-8 text-foreground" aria-hidden />
              <h2 className="font-serif mt-6 text-2xl text-foreground">
                Google Play Store
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Always download from the official link to ensure you get UniConfess
                by Yug Rathee — not a similarly named app from another developer.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 sm:w-auto"
              >
                Download on Google Play
              </a>
              <p className="mt-4 font-mono text-xs text-muted">{PACKAGE_ID}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2 className="font-serif text-2xl text-foreground">How to install</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <h2 className="font-serif text-2xl text-foreground">Requirements</h2>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((req, i) => (
              <AnimateIn key={req.label} delay={i * 60}>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-medium text-muted">{req.label}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{req.value}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <AnimateIn>
          <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-8">
            <div className="flex gap-3">
              <Shield className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="font-semibold text-foreground">Not the Malaysia app</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  UniConfess by Yug Rathee (package {PACKAGE_ID}) is independent from
                  uniconfess.com. Always check the developer name before installing.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={80} className="mt-8">
          <div className="flex flex-wrap gap-4">
            {["Verified students only", "Free to download", "Moderated community", "Encrypted in transit"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {item}
                </span>
              )
            )}
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
