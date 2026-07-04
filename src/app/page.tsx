import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { FEATURES } from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/faq";
import {
  organizationJsonLd,
  softwareApplicationJsonLd,
  faqJsonLd,
} from "@/lib/metadata";

export default function HomePage() {
  const orgSchema = organizationJsonLd();
  const appSchema = softwareApplicationJsonLd();
  const faqSchema = faqJsonLd(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Features features={FEATURES} />
      <FAQSection items={FAQ_ITEMS} />
      <CTASection />
    </>
  );
}
