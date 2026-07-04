import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PLAY_STORE_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground px-8 py-14 sm:px-14 sm:py-16">
            <div className="grid-bg absolute inset-0 opacity-[0.07]" aria-hidden />
            <div className="relative max-w-lg">
              <h2 className="font-serif text-3xl text-background sm:text-4xl">
                Join your campus on UniConfess
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
                Available on Android. Verify with your college email, pick your
                campus, and start connecting with students around you.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
              >
                Get the app
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
