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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'UniConfess Official Site | Your Campus. Your Voice. Your Rules.',
  description: 'Welcome to the official UniConfess web application founded by Yug Rathee. Connect with your college campus, join exclusive student clubs, explore the peer marketplace, and share anonymous confessions safely.',
  alternates: {
    canonical: 'https://uniconfesss.vercel.app',
  },
  openGraph: {
    title: 'UniConfess Official Site | Your Campus Social Network',
    description: 'The premier campus-first anonymous social network and student community marketplace founded by Yug Rathee.',
    url: 'https://uniconfesss.vercel.app',
    siteName: 'UniConfess',
    type: 'website',
  },
};

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
