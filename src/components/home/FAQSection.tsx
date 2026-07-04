import { Accordion } from "@/components/ui/Accordion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import type { FAQItem } from "@/lib/faq";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section id="faq" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AnimateIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2 className="font-serif mt-3 text-3xl text-foreground sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-muted">
            About the app, the founder, and how UniConfess differs from other platforms.
          </p>
        </AnimateIn>

        <AnimateIn delay={100} className="mt-12">
          <Accordion items={items} />
        </AnimateIn>
      </div>
    </section>
  );
}
